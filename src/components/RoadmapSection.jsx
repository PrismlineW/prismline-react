import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const GRAIL_CHAPTERS = [
  {
    chapterNumber: '01',
    chapterTag: 'Chapter 01',
    topicLabel: 'About Discovery & Scoping',
    guildTitle: 'THE ARCHITECTS OF DISCOVERY',
    questTitle: 'Lock the scope down. Eliminate every surprise before writing one line of code.',
    questSub:
      'No ambiguous estimates, no creeping change orders. An honest fixed-price proposal that sets your exact technical trajectory with built-in security.',
    philosophicalCallout:
      'Most software projects bleed time and budget because teams start coding before they know what they are building.',
    philosophicalDetail:
      'We interrogate your business requirements, clarify user flows, eliminate superfluous complexity, and deliver an immutable architectural blueprint. When the scope is crystal clear, delivery is guaranteed on time and at lower cost.',
    ghostWatermark: 'STAGE 01',
    theme: {
      bg: '#050508',
      text: '#FFFFFF',
      textMuted: '#94A3B8',
      accent: '#E6AA3A',
      accentGradient: 'linear-gradient(135deg, #E6AA3A 0%, #D97706 100%)',
      cardBg: '#FFFFFF',
      cardText: '#0F172A',
      cardSub: '#475569',
      hairline: 'rgba(255, 255, 255, 0.15)',
      badgeBg: 'rgba(230, 170, 58, 0.14)',
      badgeColor: '#E6AA3A',
      crestColor: '#D97706',
    },
    deliverables: [
      'Fixed-Price Transparent Scope Guarantee',
      'Wireframing & Core User Journey Mapping',
      'Built-in Zero-Breach Security Foundation',
      'Scalable Multi-Tier Database Architecture',
    ],
    stats: [
      { label: 'Scope Certainty', value: '100%' },
      { label: 'Hidden Fees', value: '₹0' },
    ],
    avatarNote: '2 Senior Architects assigned to your discovery',
  },
  {
    chapterNumber: '02',
    chapterTag: 'Chapter 02',
    topicLabel: 'About Design & Development',
    guildTitle: 'THE FORGE OF CORE CODE',
    questTitle: 'Engineer clean, modular code. 100% full source code ownership.',
    questSub:
      'No rigid templates, no rented platforms. Handcrafted React, Next.js, and high-performance serverless engines tailored to your exact workflows.',
    philosophicalCallout:
      'Rented platform subscriptions take 10–20% of your business forever. Bespoke proprietary code belongs to you for life.',
    philosophicalDetail:
      'We build high-speed responsive user interfaces paired with secure, hardened backend APIs. Every component is engineered for sub-second page loads, zero unnecessary vendor dependencies, and effortless future scale.',
    ghostWatermark: '02:00:00',
    theme: {
      bg: '#DCC7E3', // Authentic Grail warm lavender / lilac canvas!
      text: '#180B22',
      textMuted: '#523C5C',
      accent: '#6E2A8D',
      accentGradient: 'linear-gradient(135deg, #6E2A8D 0%, #9B3088 100%)',
      cardBg: '#FFFFFF',
      cardText: '#180B22',
      cardSub: '#523C5C',
      hairline: 'rgba(24, 11, 34, 0.2)',
      badgeBg: 'rgba(110, 42, 141, 0.15)',
      badgeColor: '#6E2A8D',
      crestColor: '#6E2A8D',
    },
    deliverables: [
      'Mobile-First Responsive Interface (60–120 FPS)',
      'High-Speed Next.js & React Core Architecture',
      '100% Full Source Code & Repository Handover',
      'Zero Monthly Platform Tax or Vendor Lock-In',
    ],
    stats: [
      { label: 'Code Ownership', value: '100%' },
      { label: 'Monthly SaaS Cut', value: '₹0' },
    ],
    avatarNote: 'Full-stack engineering squad on dedicated commit stream',
  },
  {
    chapterNumber: '03',
    chapterTag: 'Chapter 03',
    topicLabel: 'About Speed & Security Audits',
    guildTitle: 'THE WARDENS OF PERFORMANCE',
    questTitle: 'Pass rigorous audits. 95+ Core Web Vitals and zero security leaks.',
    questSub:
      'We subject every endpoint and bundle to pen-testing and speed benchmarking. AES-256 encryption, CSP Level 3, and sub-400ms first contentful paint.',
    philosophicalCallout:
      'Fast websites convert users. Secure websites protect your reputation from catastrophic data breaches.',
    philosophicalDetail:
      'Before code is deployed to users, it runs through automated DOM sanitization, SQL injection immunity verification, and cross-browser stress tests. You receive a verified audit scorecard before go-live.',
    ghostWatermark: '99+ SPEED',
    theme: {
      bg: '#16110B', // Rich obsidian bronze & warm embers
      text: '#FDF0D5',
      textMuted: '#C2843A',
      accent: '#F59E0B',
      accentGradient: 'linear-gradient(135deg, #F59E0B 0%, #EA580C 100%)',
      cardBg: '#FFFFFF',
      cardText: '#0F172A',
      cardSub: '#475569',
      hairline: 'rgba(245, 158, 11, 0.25)',
      badgeBg: 'rgba(245, 158, 11, 0.16)',
      badgeColor: '#F59E0B',
      crestColor: '#EA580C',
    },
    deliverables: [
      '95+ Mobile & Desktop Google Core Web Vitals',
      '256-Bit SSL & OWASP Top-10 Vulnerability Sweep',
      'Subresource Integrity (SRI) & Content Security Policy',
      'Cross-Device & Cross-Browser Rendering Verification',
    ],
    stats: [
      { label: 'Core Web Vitals', value: '98+' },
      { label: 'Vulnerability Leaks', value: '0' },
    ],
    avatarNote: 'Security audit team with certified test suite',
  },
  {
    chapterNumber: '04',
    chapterTag: 'Chapter 04',
    topicLabel: 'About Launch & Lifetime Warranty',
    guildTitle: 'THE GUARDIANS OF ZERO DEFECTS',
    questTitle: 'Deploy live with zero downtime. Backed by our ₹0 lifetime warranty.',
    questSub:
      'Seamless DNS and server rollout. Any bug, alignment flaw, or flow defect that ever appears is patched immediately at ₹0 extra charge.',
    philosophicalCallout:
      'Other agencies disappear the moment final payment clears. We back our craftsmanship forever.',
    philosophicalDetail:
      'Our Anytime Rectification Guarantee is unconditional: if an issue arises with the code we wrote, our senior engineers fix it with priority turnaround at no additional cost. You get direct phone hotline access to the developers who built your platform.',
    ghostWatermark: '₹0 FIX',
    theme: {
      bg: '#02120A', // Deep pitch emerald void
      text: '#FFFFFF',
      textMuted: '#6EE7B7',
      accent: '#10B981',
      accentGradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
      cardBg: '#FFFFFF',
      cardText: '#0F172A',
      cardSub: '#475569',
      hairline: 'rgba(16, 185, 129, 0.22)',
      badgeBg: 'rgba(16, 185, 129, 0.16)',
      badgeColor: '#10B981',
      crestColor: '#059669',
    },
    deliverables: [
      'Zero-Downtime Live Production DNS Migration',
      'Lifetime Anytime Rectification Guarantee at ₹0 Cost',
      'Direct Senior Engineer Hotline Access (+91 99529 34596)',
      'Full Cloud / cPanel Configuration & Handover Documentation',
    ],
    stats: [
      { label: 'Warranty Duration', value: 'Lifetime' },
      { label: 'Bug Fix Charge', value: '₹0' },
    ],
    avatarNote: 'Direct hotline access to senior development lead',
  },
];

export default function RoadmapSection() {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardStageRef = useRef(null);

  const currentChapter = GRAIL_CHAPTERS[activeChapterIndex];

  // Subtle interactive 3D mouse tilt physics on active card
  const handleMouseMove = (e) => {
    if (!cardStageRef.current) return;
    const rect = cardStageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    // Bound tilt between -10 and 10 degrees
    const tiltY = (mouseX / (rect.width / 2)) * 8;
    const tiltX = -(mouseY / (rect.height / 2)) * 8;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  // Keyboard navigation (ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        setActiveChapterIndex((prev) => (prev + 1) % GRAIL_CHAPTERS.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveChapterIndex((prev) => (prev - 1 + GRAIL_CHAPTERS.length) % GRAIL_CHAPTERS.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section
      className="grail-roadmap-experience"
      id="roadmap-flow"
      style={{
        backgroundColor: currentChapter.theme.bg,
        color: currentChapter.theme.text,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ghost Watermark Numeral */}
      <div className="grail-bg-watermark" aria-hidden="true">
        {currentChapter.ghostWatermark}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Top Meta Row (Grail Chapter & Topic Badges) */}
        <div className="grail-top-meta-row">
          <div className="grail-topic-label" style={{ color: currentChapter.theme.textMuted }}>
            <span style={{ color: currentChapter.theme.accent }}>✦</span>
            <span>{currentChapter.topicLabel}</span>
          </div>

          <div className="grail-chapter-indicator" style={{ borderColor: currentChapter.theme.hairline }}>
            <span style={{ color: currentChapter.theme.accent }}>●</span>
            <span>{currentChapter.chapterTag} OF 04</span>
          </div>
        </div>

        {/* Giant PP Pangaia Serif Headline */}
        <div className="grail-headline-wrap">
          <div className="grail-kicker-strip" style={{ color: currentChapter.theme.accent }}>
            PRISMLINE ROADMAP &bull; IMMUTABLE LIFECYCLE
          </div>
          <h2 className="grail-main-headline">
            {currentChapter.chapterNumber === '01' && 'Discovery & Blueprint'}
            {currentChapter.chapterNumber === '02' && 'Forge of Core Code'}
            {currentChapter.chapterNumber === '03' && 'Wardens of Speed'}
            {currentChapter.chapterNumber === '04' && 'Launch & Guarantee'}
          </h2>
          <p className="grail-headline-sub" style={{ color: currentChapter.theme.textMuted }}>
            One disciplined engineering lifecycle. Four immutable milestones from blank canvas to production launch.
          </p>
        </div>

        {/* 3D Perspective Card Stage (Orbit Totem Carousel) */}
        <div className="grail-3d-stage" ref={cardStageRef}>
          {GRAIL_CHAPTERS.map((chapter, index) => {
            const diff = index - activeChapterIndex;
            const isActive = diff === 0;

            // Compute 3D arc position
            let transformStyle = '';
            let opacity = 0.2;
            let zIndex = 1;
            let filter = 'blur(4px)';

            if (isActive) {
              transformStyle = `perspective(1200px) translate3d(0, 0, 80px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1)`;
              opacity = 1;
              zIndex = 10;
              filter = 'none';
            } else if (diff === 1 || diff === -3) {
              // Right flanking card
              transformStyle = `perspective(1200px) translate3d(360px, 20px, -140px) rotateY(-22deg) scale(0.85)`;
              opacity = 0.55;
              zIndex = 5;
              filter = 'blur(1px)';
            } else if (diff === -1 || diff === 3) {
              // Left flanking card
              transformStyle = `perspective(1200px) translate3d(-360px, 20px, -140px) rotateY(22deg) scale(0.85)`;
              opacity = 0.55;
              zIndex = 5;
              filter = 'blur(1px)';
            } else {
              // Far back
              transformStyle = `perspective(1200px) translate3d(0, 40px, -300px) scale(0.72)`;
              opacity = 0.15;
              zIndex = 1;
              filter = 'blur(6px)';
            }

            return (
              <div
                key={chapter.chapterNumber}
                className={`grail-card-3d-anchor ${isActive ? 'is-active' : ''}`}
                style={{
                  transform: transformStyle,
                  opacity,
                  zIndex,
                  filter,
                }}
                onClick={() => setActiveChapterIndex(index)}
              >
                <div
                  className="grail-physical-card"
                  onMouseEnter={() => isActive && setIsHovered(true)}
                  onMouseLeave={() => isActive && setIsHovered(false)}
                >
                  {/* Heraldic Crest Badge (Using Grail SVG Mark) */}
                  <div
                    className="grail-crest-badge"
                    style={{
                      background: chapter.theme.badgeBg,
                      color: chapter.theme.crestColor,
                    }}
                  >
                    <svg
                      className="grail-crest-svg"
                      viewBox="0 0 74 74"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 2C0 0.895429 0.895431 0 2 0H72C73.1046 0 74 0.89543 74 2V56.2815C74 61.3452 70.5431 65.7548 65.6257 66.9635L39.6257 73.3546C37.9009 73.7785 36.0991 73.7785 34.3743 73.3546L8.37425 66.9635C3.45689 65.7548 0 61.3452 0 56.2815V2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  {/* Stage Guild Kicker */}
                  <span className="grail-guild-kicker" style={{ color: chapter.theme.accent }}>
                    {chapter.guildTitle}
                  </span>

                  {/* Primary Quest Challenge Title */}
                  <h3 className="grail-quest-title">{chapter.questTitle}</h3>

                  <p className="grail-quest-desc">{chapter.questSub}</p>

                  {/* Key Deliverables Checkmarked Box */}
                  <div className="grail-deliverables-pillbox">
                    <div className="grail-deliv-header">✦ IMMUTABLE DELIVERABLES</div>
                    <ul className="grail-deliv-list">
                      {chapter.deliverables.map((item, i) => (
                        <li key={i} className="grail-deliv-item">
                          <span className="grail-check" style={{ color: chapter.theme.crestColor }}>
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Stats & Avatars Footer */}
                  <div className="grail-card-footer">
                    <div className="grail-stat-chip">
                      <span className="grail-stat-val">{chapter.stats[0].value}</span>
                      <span className="grail-stat-lbl">{chapter.stats[0].label}</span>
                    </div>

                    <div className="grail-stat-chip">
                      <span className="grail-stat-val" style={{ color: chapter.theme.crestColor }}>
                        {chapter.stats[1].value}
                      </span>
                      <span className="grail-stat-lbl">{chapter.stats[1].label}</span>
                    </div>

                    <div className="grail-avatars-cluster" title={chapter.avatarNote}>
                      <span
                        className="grail-avatar-pill"
                        style={{
                          background: chapter.theme.badgeBg,
                          color: chapter.theme.crestColor,
                        }}
                      >
                        {chapter.chapterNumber} / 04
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial 2-Column Split Narrative (Grail Bottom Section) */}
        <div
          className="grail-editorial-split"
          style={{ borderColor: currentChapter.theme.hairline }}
        >
          <div className="ges-col-left">
            <span
              className="ges-label"
              style={{ color: currentChapter.theme.accent }}
            >
              PROVOCATION &bull; {currentChapter.chapterTag}
            </span>
            <p className="ges-callout">{currentChapter.philosophicalCallout}</p>
          </div>

          <div className="ges-col-right">
            <span
              className="ges-label"
              style={{ color: currentChapter.theme.textMuted }}
            >
              TECHNICAL EXECUTION
            </span>
            <p className="ges-detail" style={{ color: currentChapter.theme.textMuted }}>
              {currentChapter.philosophicalDetail}
            </p>
          </div>
        </div>

        {/* Floating Bottom Capsule HUD (Grail Persistent Controller) */}
        <div className="grail-capsule-hud">
          <div className="grail-hud-brand">
            <span style={{ color: currentChapter.theme.accent }}>✦</span>
            <span>PRISMLINE</span>
          </div>

          <div className="grail-chapter-pills">
            {GRAIL_CHAPTERS.map((ch, idx) => (
              <button
                key={ch.chapterNumber}
                type="button"
                className={`grail-chap-btn ${activeChapterIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveChapterIndex(idx)}
              >
                {ch.chapterNumber}
              </button>
            ))}
          </div>

          <div className="grail-nav-arrows">
            <button
              type="button"
              className="grail-arrow-btn"
              onClick={() =>
                setActiveChapterIndex(
                  (prev) => (prev - 1 + GRAIL_CHAPTERS.length) % GRAIL_CHAPTERS.length
                )
              }
              aria-label="Previous Chapter"
            >
              &larr;
            </button>
            <button
              type="button"
              className="grail-arrow-btn"
              onClick={() =>
                setActiveChapterIndex((prev) => (prev + 1) % GRAIL_CHAPTERS.length)
              }
              aria-label="Next Chapter"
            >
              &rarr;
            </button>
          </div>

          <Link to="/services" className="grail-hud-cta">
            <span>Vision in Action</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
