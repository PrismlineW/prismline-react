/**
 * useScrollStory — PrismLine Editorial Scroll Engine
 * Lenis 1.x + GSAP 3.12+ ScrollTrigger
 *
 * ITI.CA EDITORIAL ANIMATION SYSTEM:
 *  1. Frictionless, continuous smooth scroll (no locking pins that trap the user)
 *  2. Horizontal shifting display typography on scroll (iti.ca trademark)
 *  3. Multi-layer vertical parallax depth for canvases, cards, and floating shapes
 *  4. Masked line & word reveals on scroll entry
 *  5. Reactive SVG/code stage interactions that trigger smoothly as you scroll
 */
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const HEADER_HEIGHT = 73; // 72px navbar + 1px border

gsap.registerPlugin(ScrollTrigger);

export function useScrollStory() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // ─── 1. Initialize Lenis (Crisp, Fluid, Non-Sticking) ────────────────────
    const lenis = new Lenis({
      duration: 0.85,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      infinite: false,
    });
    lenisRef.current = lenis;
    window.lenis = lenis;

    // ─── 2. Sync Lenis → GSAP ScrollTrigger ───────────────────────────────
    lenis.on('scroll', ScrollTrigger.update);

    const rafCallback = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(500, 33);

    // ─── 3. Anchor link smooth scroll ─────────────────────────────────────
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleAnchor = function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        lenis.scrollTo(targetElem, { offset: -HEADER_HEIGHT, duration: 1.1 });
      }
    };
    anchors.forEach((a) => a.addEventListener('click', handleAnchor));

    // ─── 4. iti.ca Horizontal Drift Typography ─────────────────────────────
    initHorizontalDrift();

    // ─── 4b. Roadmap Timeline Scroll Animation ─────────────────────────────
    initRoadmapAnimation();

    // ─── 5. iti.ca Floating Geometric Accents Parallax ────────────────────
    initFloatingAccents();

    // ─── 6. Service Blocks Smooth Editorial Flow (Non-Locking) ────────────
    initServiceEditorialFlow();

    // ─── 7. Masked Line & Heading Reveals ─────────────────────────────────
    initMaskedReveals();

    // ─── 8. Trust Bar Counters ────────────────────────────────────────────
    initTrustBarCounters();

    // ─── 9. General Section Reveals ───────────────────────────────────────
    initSectionReveals();

    // ─── 10. ScrollTrigger.refresh() on load & after intro ────────────────
    const onLoad = () => {
      setTimeout(() => ScrollTrigger.refresh(), 150);
    };
    const onIntroFinished = () => {
      setTimeout(() => ScrollTrigger.refresh(), 150);
    };

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad, { once: true });
    }
    window.addEventListener('prismline:intro-finished', onIntroFinished, { once: true });

    // Expose engine
    window.PrismLineScrollStory = {
      refresh: () => {
        ScrollTrigger.refresh();
        lenis.resize();
      },
      lenis: () => lenis,
    };

    // ─── Cleanup ──────────────────────────────────────────────────────────
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.ticker.remove(rafCallback);
      lenis.destroy();
      anchors.forEach((a) => a.removeEventListener('click', handleAnchor));
      window.removeEventListener('load', onLoad);
      window.removeEventListener('prismline:intro-finished', onIntroFinished);
      delete window.lenis;
      delete window.PrismLineScrollStory;
    };
  }, []);

  return lenisRef;
}

// ─────────────────────────────────────────────────────────────────────────────
// iti.ca Horizontal Drift Typography
// Drifts large bold words horizontally across the screen as user scrolls
// ─────────────────────────────────────────────────────────────────────────────
function initHorizontalDrift() {
  const driftBanner = document.querySelector('.iti-drift-banner');
  if (!driftBanner) return;

  const leftRow = driftBanner.querySelector('.iti-drift-row.drift-left');
  const rightRow = driftBanner.querySelector('.iti-drift-row.drift-right');

  if (leftRow) {
    gsap.fromTo(
      leftRow,
      { x: 0 },
      {
        x: -220,
        ease: 'none',
        scrollTrigger: {
          trigger: driftBanner,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.7,
        },
      }
    );
  }

  if (rightRow) {
    gsap.fromTo(
      rightRow,
      { x: -180 },
      {
        x: 40,
        ease: 'none',
        scrollTrigger: {
          trigger: driftBanner,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.7,
        },
      }
    );
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// iti.ca Floating Geometric Accents Parallax (+, —, pills, dots)
// ─────────────────────────────────────────────────────────────────────────────
function initFloatingAccents() {
  const shapes = document.querySelectorAll('.iti-floating-shape');
  if (!shapes.length) return;

  shapes.forEach((shape) => {
    const rawSpeed = parseFloat(shape.getAttribute('data-parallax-speed')) || 1.0;
    const offset = rawSpeed * 65;
    const parentSection = shape.closest('section') || shape.parentElement;

    gsap.fromTo(
      shape,
      { y: -offset },
      {
        y: offset,
        ease: 'none',
        scrollTrigger: {
          trigger: parentSection,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      }
    );
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Service Blocks Smooth Editorial Flow (NO VIEWPORT LOCK / NO STICKING)
// ─────────────────────────────────────────────────────────────────────────────
function initServiceEditorialFlow() {
  const blocks = document.querySelectorAll('.editorial-story-block');
  if (!blocks.length) return;

  blocks.forEach((block) => {
    const serviceId = block.getAttribute('data-service');
    const visualStage = block.querySelector('.story-visual-stage');
    const textTrack = block.querySelector('.story-text-track');

    // Subtle multi-layer vertical parallax on the visual stage (iti.ca style)
    if (visualStage && window.innerWidth >= 992) {
      gsap.fromTo(
        visualStage,
        { y: 30 },
        {
          y: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: block,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.9,
          },
        }
      );
    }

    // Text track smooth entrance
    if (textTrack) {
      gsap.fromTo(
        textTrack,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: block,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Interactive Stage Animations (Triggered smoothly on entry, not forced-scrubbed)
    if (serviceId === '01') {
      const nodes = block.querySelectorAll('.topo-node');
      const secureCore = block.querySelector('.node-core rect');

      ScrollTrigger.create({
        trigger: block,
        start: 'top 75%',
        onEnter: () => {
          if (nodes.length) {
            gsap.fromTo(
              nodes,
              { scale: 0.94, opacity: 0.8 },
              { scale: 1, opacity: 1, stagger: 0.08, duration: 0.6, ease: 'back.out(1.7)' }
            );
          }
          if (secureCore) {
            gsap.to(secureCore, { stroke: '#10B981', strokeWidth: 2.5, duration: 0.5, delay: 0.4 });
          }
        },
      });
    } else if (serviceId === '02') {
      const numRows = block.querySelectorAll('.numbered-row');
      const statusRight = block.querySelector('.wb-status-right');

      ScrollTrigger.create({
        trigger: block,
        start: 'top 75%',
        onEnter: () => {
          if (numRows.length) {
            gsap.fromTo(
              numRows,
              { opacity: 0, x: -16 },
              { opacity: 1, x: 0, stagger: 0.12, duration: 0.55, ease: 'power2.out' }
            );
          }
          if (statusRight) {
            gsap.fromTo(statusRight, { scale: 0.9 }, { scale: 1, duration: 0.4, ease: 'back.out(2)', delay: 0.3 });
          }
        },
      });
    } else if (serviceId === '03') {
      const productCards = block.querySelectorAll('.product-item-card');
      const capCards = block.querySelectorAll('.capability-item-card');

      ScrollTrigger.create({
        trigger: block,
        start: 'top 75%',
        onEnter: () => {
          if (productCards.length) {
            gsap.fromTo(
              productCards,
              { opacity: 0, y: 16 },
              { opacity: 1, y: 0, stagger: 0.12, duration: 0.5, ease: 'power2.out' }
            );
          }
          if (capCards.length) {
            gsap.fromTo(
              capCards,
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out', delay: 0.2 }
            );
          }
        },
      });
    } else if (serviceId === '04') {
      const tableRows = block.querySelectorAll('.matrix-table tbody tr');
      const guaranteeBanner = block.querySelector('.light-guarantee-banner');

      ScrollTrigger.create({
        trigger: block,
        start: 'top 75%',
        onEnter: () => {
          if (tableRows.length) {
            gsap.fromTo(
              tableRows,
              { opacity: 0, y: 12 },
              { opacity: 1, y: 0, stagger: 0.08, duration: 0.45, ease: 'power2.out' }
            );
          }
          if (guaranteeBanner) {
            gsap.fromTo(
              guaranteeBanner,
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out', delay: 0.25 }
            );
          }
        },
      });
    }
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Masked Line & Heading Reveals (iti.ca .u-overflow > .u-anim.-translate)
// ─────────────────────────────────────────────────────────────────────────────
function initMaskedReveals() {
  const maskedInners = document.querySelectorAll('.u-mask-inner');
  maskedInners.forEach((inner) => {
    ScrollTrigger.create({
      trigger: inner.parentElement || inner,
      start: 'top 88%',
      onEnter: () => {
        inner.classList.add('is-revealed');
      },
    });
  });

  // Kicker tags slide-in
  document.querySelectorAll('.sec-kicker-tag').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: -24 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // Metric callouts pop
  document.querySelectorAll('.story-metric-callout').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Trust Bar Counters
// ─────────────────────────────────────────────────────────────────────────────
function initTrustBarCounters() {
  const trustBar = document.getElementById('trust-bar');
  if (!trustBar) return;
  const cards = trustBar.querySelectorAll('.trust-metric-card');
  if (!cards.length) return;

  ScrollTrigger.create({
    trigger: trustBar,
    start: 'top 85%',
    once: true,
    onEnter: () => {
      cards.forEach((card, idx) => {
        const valElem = card.querySelector('.trust-metric-value');
        if (!valElem) return;
        gsap.fromTo(card, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.6, delay: idx * 0.1, ease: 'power2.out' });
        const text = valElem.textContent.trim();
        if (text === '100%') {
          const counter = { val: 0 };
          gsap.to(counter, { val: 100, duration: 1.4, ease: 'power2.out', onUpdate: () => { valElem.textContent = Math.round(counter.val) + '%'; } });
        } else if (text === '99.99%') {
          const counter = { val: 80.0 };
          gsap.to(counter, { val: 99.99, duration: 1.6, ease: 'power2.out', onUpdate: () => { valElem.textContent = counter.val.toFixed(2) + '%'; } });
        }
      });
    },
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Section Reveals
// ─────────────────────────────────────────────────────────────────────────────
function initSectionReveals() {
  document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
      }
    );
  });

  const processSection = document.getElementById('process');
  if (processSection) {
    const phaseCards = processSection.querySelectorAll('.process-phase-card');
    if (phaseCards.length) {
      gsap.fromTo(
        phaseCards,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: { trigger: processSection, start: 'top 80%', toggleActions: 'play none none none' },
        }
      );
    }
  }

  const guaranteeSection = document.getElementById('guarantee');
  if (guaranteeSection) {
    const gBox = guaranteeSection.querySelector('.guarantee-box-human');
    if (gBox) {
      gsap.fromTo(
        gBox,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: guaranteeSection, start: 'top 82%', toggleActions: 'play none none none' },
        }
      );
    }
  }

  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    const narrative = aboutSection.querySelector('.about-narrative-col');
    const crestCard = aboutSection.querySelector('.about-crest-card');
    if (narrative && crestCard) {
      gsap.fromTo(
        [narrative, crestCard],
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.75,
          ease: 'power2.out',
          scrollTrigger: { trigger: aboutSection, start: 'top 82%', toggleActions: 'play none none none' },
        }
      );
    }
  }

  const consultationSection = document.getElementById('consultation');
  if (consultationSection) {
    const contactWrap = consultationSection.querySelector('.contact-container');
    if (contactWrap) {
      gsap.fromTo(
        contactWrap,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: { trigger: consultationSection, start: 'top 82%', toggleActions: 'play none none none' },
        }
      );
    }
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Interactive Roadmap Timeline Scroll Animation
// ─────────────────────────────────────────────────────────────────────────────
// Interactive Roadmap Timeline Scroll Animation
// Scrubs SVG progress stream, moves photon traveler, and triggers dynamic HUDs
// ─────────────────────────────────────────────────────────────────────────────
function initRoadmapAnimation() {
  const roadmapSection = document.querySelector('.roadmap-experience-section');
  if (!roadmapSection) return;

  const timelineContainer = roadmapSection.querySelector('.roadmap-timeline-container');
  const roadCurve = document.getElementById('roadmap-curve-path');
  const photonTraveler = document.getElementById('roadmap-bike-rider');
  const stepRows = roadmapSection.querySelectorAll('.roadmap-step-row');

  if (roadCurve && photonTraveler && timelineContainer) {
    const totalLength = roadCurve.getTotalLength();
    roadCurve.style.strokeDasharray = `${totalLength}`;
    roadCurve.style.strokeDashoffset = `${totalLength}`;

    const stageDigit = document.getElementById('traveler-stage-digit');
    const coreLight = document.getElementById('traveler-core-light');
    const digitGroup = document.getElementById('traveler-digit-group');
    const stageColors = ['#0284C7', '#FF5722', '#D50000', '#10B981'];

    // Offset start and end so vehicle chassis is 100% inside the asphalt track bounds!
    // Start at s = 28px: vehicle center is at Y≈36, tail is at Y≈14, cleanly inside asphalt curve start cap (Y=10)
    // End at s = totalLength - 38: stops right on the checkered line (Y≈1545), headlight never spills below
    const startOffset = 28;
    const endOffset = totalLength - 38;

    const startPt = roadCurve.getPointAtLength(startOffset);
    const lookAheadPt = roadCurve.getPointAtLength(Math.min(startOffset + 12, totalLength));
    const initialBaseAngle = Math.atan2(lookAheadPt.y - startPt.y, lookAheadPt.x - startPt.x) * (180 / Math.PI) + 90;

    let currentPt = { x: startPt.x, y: startPt.y };
    let currentBaseAngle = initialBaseAngle;
    const uTurnState = { angle: 0 };
    let isHeadingUp = false;

    // Helper to render vehicle with current position, base angle, and U-turn rotation
    const renderTraveler = () => {
      const totalAngle = currentBaseAngle + uTurnState.angle;
      photonTraveler.setAttribute('transform', `translate(${currentPt.x}, ${currentPt.y}) rotate(${totalAngle})`);
      if (digitGroup) {
        digitGroup.setAttribute('transform', `rotate(${-totalAngle})`);
      }
    };

    // Position vehicle at start (Step 1) showing 1
    renderTraveler();
    if (stageDigit) stageDigit.textContent = '1';
    if (coreLight) coreLight.setAttribute('fill', stageColors[0]);

    // Smooth ScrollTrigger scrub linked to the timeline container
    // Starts when timeline container enters comfortable reading position (top 50%)
    // Ends when the 4th milestone is reached (bottom 80%)
    ScrollTrigger.create({
      trigger: timelineContainer,
      start: 'top 50%',
      end: 'bottom 80%',
      scrub: 0.35,
      onUpdate: (self) => {
        const progress = Math.max(0, Math.min(1, self.progress));
        const currentLen = startOffset + progress * (endOffset - startOffset);

        // Draw active laser progress stream along the highway
        const laserLen = progress * totalLength;
        roadCurve.style.strokeDashoffset = `${totalLength - laserLen}`;

        // Robust sampling along the curve for accurate vehicle heading
        const sampleLen = Math.min(Math.max(currentLen, startOffset), endOffset);
        const s1 = Math.max(0, sampleLen - 8);
        const s2 = Math.min(totalLength, sampleLen + 8);
        const ptA = roadCurve.getPointAtLength(s1);
        const ptB = roadCurve.getPointAtLength(s2);
        currentPt = roadCurve.getPointAtLength(sampleLen);

        currentBaseAngle = Math.atan2(ptB.y - ptA.y, ptB.x - ptA.x) * (180 / Math.PI) + 90;

        // U-TURN MECHANISM:
        // When scrolling UP (direction === -1) and moving back up (progress > 0.02),
        // vehicle smoothly turns 180° to face forward UP the road!
        // When scrolling DOWN (direction === 1) or reaching top start (progress <= 0.02),
        // vehicle smoothly turns back 180° to face forward DOWN the road!
        const shouldFaceUp = self.direction === -1 && progress > 0.02;

        if (shouldFaceUp && !isHeadingUp) {
          isHeadingUp = true;
          gsap.killTweensOf(uTurnState);
          gsap.to(uTurnState, {
            angle: 180,
            duration: 0.32,
            ease: 'power2.inOut',
            onUpdate: renderTraveler,
          });
        } else if (!shouldFaceUp && isHeadingUp) {
          isHeadingUp = false;
          gsap.killTweensOf(uTurnState);
          gsap.to(uTurnState, {
            angle: 0,
            duration: 0.32,
            ease: 'power2.inOut',
            onUpdate: renderTraveler,
          });
        }

        renderTraveler();

        // Stage digit corresponds to the active milestone
        // Step 1: 0% to 26%
        // Step 2: 26% to 58%
        // Step 3: 58% to 84%
        // Step 4: 84% to 100%
        let activeIndex = 0;
        if (progress >= 0.84) activeIndex = 3;
        else if (progress >= 0.58) activeIndex = 2;
        else if (progress >= 0.26) activeIndex = 1;

        if (stageDigit && stageDigit.textContent !== String(activeIndex + 1)) {
          stageDigit.textContent = String(activeIndex + 1);
        }
        if (coreLight) {
          coreLight.setAttribute('fill', stageColors[activeIndex]);
        }
      },
    });

    // Parallax drift on the ambient luxury backdrop
    const ambientBackdrop = roadmapSection.querySelector('.roadmap-white-luxury-backdrop');
    if (ambientBackdrop) {
      gsap.to(ambientBackdrop, {
        y: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: roadmapSection,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  }

  // 2. Synchronized stage arrival reveal & hide animation for each milestone row
  stepRows.forEach((row, idx) => {
    const storyTrack = row.querySelector('.roadmap-editorial-track');
    const stageVisual = row.querySelector('.roadmap-3d-stage') || row.querySelector('.roadmap-cartoon-stage');
    const isEven = idx % 2 === 1;

    ScrollTrigger.create({
      trigger: row,
      start: 'top 72%',
      end: 'bottom 20%',
      onEnter: () => {
        row.classList.add('is-active');

        // Dynamic arrival animation: sides slide in towards the highway with bounce!
        if (storyTrack) {
          gsap.fromTo(
            storyTrack,
            { opacity: 0, x: isEven ? 45 : -45, scale: 0.94 },
            { opacity: 1, x: 0, scale: 1, duration: 0.75, ease: 'power3.out' }
          );
        }
        if (stageVisual) {
          gsap.fromTo(
            stageVisual,
            { opacity: 0, x: isEven ? -45 : 45, scale: 0.92 },
            { opacity: 1, x: 0, scale: 1, duration: 0.85, ease: 'back.out(1.4)' }
          );
        }
      },
      onLeave: () => {
        row.classList.remove('is-active');

        if (storyTrack) {
          gsap.to(storyTrack, { opacity: 0.15, y: -25, scale: 0.96, duration: 0.45, ease: 'power2.in' });
        }
        if (stageVisual) {
          gsap.to(stageVisual, { opacity: 0.15, y: -25, scale: 0.96, duration: 0.45, ease: 'power2.in' });
        }
      },
      onEnterBack: () => {
        row.classList.add('is-active');

        if (storyTrack) {
          gsap.fromTo(
            storyTrack,
            { opacity: 0.2, x: isEven ? 35 : -35, scale: 0.96 },
            { opacity: 1, x: 0, scale: 1, duration: 0.65, ease: 'power3.out' }
          );
        }
        if (stageVisual) {
          gsap.fromTo(
            stageVisual,
            { opacity: 0.2, x: isEven ? -35 : 35, scale: 0.94 },
            { opacity: 1, x: 0, scale: 1, duration: 0.75, ease: 'power3.out' }
          );
        }
      },
      onLeaveBack: () => {
        row.classList.remove('is-active');

        if (storyTrack) {
          gsap.to(storyTrack, { opacity: 0.15, y: 25, scale: 0.96, duration: 0.45, ease: 'power2.in' });
        }
        if (stageVisual) {
          gsap.to(stageVisual, { opacity: 0.15, y: 25, scale: 0.96, duration: 0.45, ease: 'power2.in' });
        }
      },
    });
  });
}


