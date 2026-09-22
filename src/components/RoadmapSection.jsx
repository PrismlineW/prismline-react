import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useScrollStory } from '../hooks/useScrollStory';

export default function RoadmapSection() {
  useScrollStory();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 2800);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement.offsetHeight || 2800;
    };
    window.addEventListener('resize', handleResize);

    // Fluid Aurora / Motion Graphics Canvas Loop
    let tick = 0;
    let lastScrollY = window.scrollY;
    let scrollSpeed = 0;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      scrollSpeed = Math.min(Math.abs(currentScrollY - lastScrollY) * 0.05, 0.08);
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Floating luxury light-mode micro-particles
    const particleCount = 45;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.0 + 1.0,
      alpha: Math.random() * 0.45 + 0.15,
      speedY: -(Math.random() * 0.35 + 0.15),
      speedX: (Math.random() - 0.5) * 0.25,
      hue: [205, 22, 355, 155][Math.floor(Math.random() * 4)],
    }));

    const render = () => {
      tick += 0.008 + scrollSpeed * 0.05;
      scrollSpeed *= 0.92;
      ctx.clearRect(0, 0, width, height);

      // 1. Procedural Fluid Silk Ribbon Waves
      const drawFluidRibbon = (baseY, amp, freq, speed, phase, c1, c2) => {
        ctx.save();
        ctx.beginPath();
        const segments = 24;
        const segWidth = width / segments;
        for (let i = 0; i <= segments; i++) {
          const x = i * segWidth;
          const y = baseY + 
            Math.sin(x * freq + tick * speed + phase) * amp + 
            Math.cos(x * (freq * 0.6) - tick * (speed * 0.7) + phase) * (amp * 0.5);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, baseY - amp, width, baseY + amp * 2);
        grad.addColorStop(0, c1);
        grad.addColorStop(1, c2);
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
      };

      // 4 stage fluid color ribbons
      drawFluidRibbon(height * 0.12, 45, 0.0018, 0.6, 0.0, 'rgba(2, 132, 199, 0.035)', 'rgba(56, 189, 248, 0.015)');
      drawFluidRibbon(height * 0.38, 55, 0.0015, 0.5, 1.8, 'rgba(255, 87, 34, 0.035)', 'rgba(251, 146, 60, 0.015)');
      drawFluidRibbon(height * 0.64, 60, 0.0016, 0.7, 3.4, 'rgba(213, 0, 0, 0.032)', 'rgba(239, 68, 68, 0.012)');
      drawFluidRibbon(height * 0.88, 50, 0.0014, 0.5, 4.8, 'rgba(16, 185, 129, 0.035)', 'rgba(52, 211, 153, 0.015)');

      // 2. Micro-particles
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        if (p.y < 0) { p.y = height + 10; p.x = Math.random() * width; }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 85%, 55%, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const stepsData = [
    {
      step: '01',
      phaseTag: 'STAGE 01',
      duration: 'PLANNING & SCOPING',
      title: 'Discovery & Architectural Blueprint',
      lead: 'We clarify your business goals, target audience, and website features with an honest fixed-price proposal — zero hidden costs or surprises.',
      accentColor: '#0284C7',
      image3d: '/assets/images/roadmap-stage1-blueprint-3d.png',
      highlights: [
        'Fixed-price transparent scope',
        'Wireframe & user journey planning',
        'Built-in security foundation',
      ],
      badge: 'Clear Scope & Zero Hidden Fees',
    },
    {
      step: '02',
      phaseTag: 'STAGE 02',
      duration: 'DESIGN & DEVELOPMENT',
      title: 'Modern Web Design & Core Development',
      lead: 'We craft high-speed frontend interfaces paired with resilient backend logic. Clean code, mobile responsiveness, and data safety are built-in from day one.',
      accentColor: '#FF5722',
      image3d: '/assets/images/roadmap-stage2-code-3d.png',
      highlights: [
        'Mobile-optimized responsive UI',
        'Clean & fast modular code',
        '100% full source code ownership',
      ],
      badge: 'Tailored Web Experience',
    },
    {
      step: '03',
      phaseTag: 'STAGE 03',
      duration: 'AUDIT & OPTIMIZATION',
      title: 'Testing, Speed Optimization & Security Audit',
      lead: 'Comprehensive cross-device checks, Core Web Vitals acceleration, and rigorous security verification ensure your website is lightning fast and safe.',
      accentColor: '#D50000',
      image3d: '/assets/images/roadmap-stage3-audit-3d.png',
      highlights: [
        'Cross-device & browser audit',
        '95+ PageSpeed optimization',
        '256-bit SSL & protection verification',
      ],
      badge: 'Speed & Safety Verified',
    },
    {
      step: '04',
      phaseTag: 'STAGE 04',
      duration: 'LAUNCH & RECTIFICATION',
      title: 'Launch the Website & Rectification Support',
      lead: 'We launch the website live to you, collect your direct feedback, and guarantee immediate rectification if any issue arises — backed by our anytime guarantee.',
      accentColor: '#10B981',
      image3d: '/assets/images/roadmap-stage4-launch-3d.png',
      highlights: [
        'Zero-downtime live deployment',
        'Direct customer feedback review',
        '₹0 Anytime bug rectification guarantee',
      ],
      badge: 'Lifetime Anytime Rectification',
    },
  ];

  return (
    <section className="roadmap-experience-section" id="roadmap-flow">
      {/* White Luxury Ambient Animation Backdrop (Pure Ethereal AI Light Mode, Zero Grid) */}
      <div className="roadmap-white-luxury-backdrop" aria-hidden="true">
        <canvas ref={canvasRef} className="roadmap-light-ambient-canvas" />
        <div className="roadmap-light-glow-orb light-orb-1"></div>
        <div className="roadmap-light-glow-orb light-orb-2"></div>
        <div className="roadmap-light-glow-orb light-orb-3"></div>
        <div className="roadmap-light-glow-orb light-orb-4"></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div className="roadmap-header">
          <div className="sec-kicker-tag">
            <span className="sec-step-badge">HOW WE WORK</span>
            <span>ENGINEERING LIFECYCLE</span>
          </div>
          <h2 className="roadmap-title">
            The PrismLine Roadmap. <br />
            <span className="roadmap-title-accent">Engineered for Speed. Delivered without Surprises.</span>
          </h2>
          <p className="roadmap-desc">
            No rigid templates or bloated retainers. Follow our proven 4-stage pipeline with transparent milestones, built-in security, and guaranteed on-time delivery.
          </p>
        </div>

        {/* Winding Highway Timeline with Perfect 3-Column Alignment */}
        <div className="roadmap-timeline-container">
          {/* Central Curved Highway Track Spine (Calibrated 240px wide corridor, 0 collision with text) */}
          <div className="roadmap-curved-highway" aria-hidden="true">
            <svg className="roadmap-highway-svg" viewBox="0 0 240 1600" preserveAspectRatio="none">
              <defs>
                {/* Dynamic Multi-Stage Road Gradient */}
                <linearGradient id="roadTaskGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0284C7" />
                  <stop offset="28%" stopColor="#FF5722" />
                  <stop offset="65%" stopColor="#D50000" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>

                {/* Soft Ambient Road Drop Shadow */}
                <filter id="roadAmbientShadow" x="-30%" y="-10%" width="160%" height="120%">
                  <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#0F172A" floodOpacity="0.12" />
                </filter>

                {/* Luminous Forward Headlight Beam Gradient */}
                <linearGradient id="headlightBeamGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.45" />
                  <stop offset="45%" stopColor="#FEF08A" stopOpacity="0.16" />
                  <stop offset="100%" stopColor="#FEF08A" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Highway Outer Soft Glow Verge */}
              <path
                className="highway-outer-kerb"
                d="M 120,10 C 75,130 70,240 95,360 C 120,480 165,580 145,720 C 125,860 75,960 95,1100 C 115,1240 165,1340 145,1460 C 130,1535 122,1565 120,1590"
                stroke="url(#roadTaskGradient)"
                strokeWidth="60"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.15"
              />

              {/* Deep Asphalt Road Track */}
              <path
                id="roadmap-asphalt-path"
                className="highway-asphalt"
                d="M 120,10 C 75,130 70,240 95,360 C 120,480 165,580 145,720 C 125,860 75,960 95,1100 C 115,1240 165,1340 145,1460 C 130,1535 122,1565 120,1590"
                stroke="#0F172A"
                strokeWidth="42"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#roadAmbientShadow)"
              />

              {/* Highway Outer White Boundary Marking */}
              <path
                className="highway-edge-lane"
                d="M 120,10 C 75,130 70,240 95,360 C 120,480 165,580 145,720 C 125,860 75,960 95,1100 C 115,1240 165,1340 145,1460 C 130,1535 122,1565 120,1590"
                stroke="rgba(255, 255, 255, 0.35)"
                strokeWidth="38"
                strokeDasharray="4 14"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />

              {/* Highway Dashed Center Lane Divider */}
              <path
                className="highway-dashed-lane"
                d="M 120,10 C 75,130 70,240 95,360 C 120,480 165,580 145,720 C 125,860 75,960 95,1100 C 115,1240 165,1340 145,1460 C 130,1535 122,1565 120,1590"
                stroke="#FBBF24"
                strokeWidth="2.8"
                strokeDasharray="8 12"
                fill="none"
                strokeLinecap="round"
                opacity="0.9"
              />

              {/* Dynamic Laser Progress Stream (scrubs down curve on scroll) */}
              <path
                id="roadmap-curve-path"
                className="highway-active-laser"
                d="M 120,10 C 75,130 70,240 95,360 C 120,480 165,580 145,720 C 125,860 75,960 95,1100 C 115,1240 165,1340 145,1460 C 130,1535 122,1565 120,1590"
                stroke="url(#roadTaskGradient)"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
              />

              {/* Symmetrically Centered Zebra Crossing / Finish Line at Destination */}
              <line
                x1="108.8"
                y1="1541.2"
                x2="146.0"
                y2="1548.8"
                stroke="#FFFFFF"
                strokeWidth="5"
                strokeDasharray="4.4 4"
                strokeLinecap="butt"
              />

              {/* Luminous Road Traveler Beacon (With Stage Milestone Number & Headlight) */}
              <g id="roadmap-bike-rider" className="roadmap-traveler-beacon" transform="translate(120, 36)">
                {/* Projecting Forward Headlight Cone (46px length, soft taper) */}
                <polygon points="-5,-8 5,-8 13,-46 -13,-46" fill="url(#headlightBeamGrad)" />

                {/* Aerodynamic Tracer Chassis */}
                <rect x="-6.5" y="-11" width="13" height="23" rx="6.5" fill="#0F172A" stroke="#FFFFFF" strokeWidth="1.5" />

                {/* Radiant Core Gem */}
                <circle id="traveler-core-light" cx="0" cy="0" r="4.2" fill="#0284C7" />

                {/* Stage Milestone Digit on the Vehicle Body */}
                <g id="traveler-digit-group" transform="translate(0, 0)">
                  <text
                    id="traveler-stage-digit"
                    x="0"
                    y="3.2"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="7.5"
                    fontWeight="900"
                    fontFamily="monospace"
                  >1</text>
                </g>

                {/* Front Headlight Jewel */}
                <circle cx="0" cy="-9" r="2.2" fill="#FEF08A" />
              </g>
            </svg>
          </div>

          {/* 4 Roadmap Milestone Step Rows with Perfectly Separated Columns */}
          <div className="roadmap-steps-stack">
            {stepsData.map((step, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div
                  className={`roadmap-step-row ${isEven ? 'row-reverse' : ''}`}
                  key={step.step}
                  data-step={step.step}
                  id={`roadmap-step-${step.step}`}
                  style={{ '--stage-accent': step.accentColor }}
                >
                  {/* Borderless Floating Editorial Story Track */}
                  <div className="roadmap-editorial-track">
                    <div className="editorial-meta-row">
                      <span className="editorial-phase-tag" style={{ color: step.accentColor }}>
                        {step.phaseTag}
                      </span>
                      <span className="editorial-meta-divider">&bull;</span>
                      <span className="editorial-duration-tag">{step.duration}</span>
                    </div>

                    <h3 className="editorial-heading">{step.title}</h3>
                    <p className="editorial-lead">{step.lead}</p>

                    {/* Highlights with dots */}
                    <div className="editorial-deliverables-group">
                      <div className="deliv-kicker-label">✦ KEY DELIVERABLES:</div>
                      <ul className="deliv-items-list">
                        {step.highlights.map((item, i) => (
                          <li key={i} className="deliv-item">
                            <span className="deliv-check-bullet" style={{ color: step.accentColor }}>&bull;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Ultra-Realistic 3D Floating Interactive Model (Borderless, Pure 3D Animation) */}
                  <div className="roadmap-task-stage-col">
                    <div className="roadmap-3d-stage">
                      <div className="stage-3d-card-inner">
                        {/* Ambient Volumetric Backlight Glow Aura */}
                        <div
                          className="stage-3d-ambient-glow"
                          style={{ '--stage-glow-color': step.accentColor }}
                        ></div>

                        {/* Floating 3D Artwork (Borderless, Frameless Animation) */}
                        <div className="stage-3d-artwork-container">
                          {step.step === '03' && (
                            <div className="stage3d-moving-energy-trails" aria-hidden="true">
                              <svg className="energy-trails-svg" viewBox="0 0 320 180" fill="none" preserveAspectRatio="none">
                                <defs>
                                  <linearGradient id="laserTrailGrad1" x1="100%" y1="50%" x2="0%" y2="50%">
                                    <stop offset="0%" stopColor="#D50000" stopOpacity="0.85" />
                                    <stop offset="50%" stopColor="#FF5722" stopOpacity="0.6" />
                                    <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                                  </linearGradient>
                                  <linearGradient id="laserTrailGrad2" x1="100%" y1="50%" x2="0%" y2="50%">
                                    <stop offset="0%" stopColor="#FF1744" stopOpacity="0.75" />
                                    <stop offset="60%" stopColor="#D50000" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="#D50000" stopOpacity="0" />
                                  </linearGradient>
                                </defs>
                                <path className="energy-stream stream-1" d="M 300,35 C 220,35 160,20 100,45 C 50,68 20,60 0,60" stroke="url(#laserTrailGrad1)" strokeWidth="2.5" />
                                <path className="energy-stream stream-2" d="M 300,75 C 230,75 170,95 110,80 C 60,65 25,95 0,95" stroke="url(#laserTrailGrad2)" strokeWidth="3" />
                                <path className="energy-stream stream-3" d="M 300,115 C 240,115 170,100 110,125 C 60,150 25,130 0,130" stroke="url(#laserTrailGrad1)" strokeWidth="2" />
                                <path className="energy-stream stream-4" d="M 300,155 C 220,155 160,165 100,145 C 50,125 20,160 0,160" stroke="url(#laserTrailGrad2)" strokeWidth="2.5" />
                              </svg>
                            </div>
                          )}
                          <img
                            src={step.image3d}
                            alt={step.title}
                            className="stage-3d-artwork-img"
                            loading="lazy"
                          />
                        </div>

                        {/* Synchronized Ambient Ground Shadow */}
                        <div className="stage-3d-ground-shadow" aria-hidden="true"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Transition Banner to Services Showcase (Positioned cleanly below the road timeline) */}
        <div className="roadmap-to-services-banner">
          <div className="banner-left">
            <span className="banner-kicker">+ NEXT: SEE WHAT WE BUILD</span>
            <h3 className="banner-heading">Explore Our Live Web &amp; Application Showcases</h3>
            <p className="banner-desc">
              From corporate portals to custom SaaS and lightning-fast storefronts &mdash; inspect our architectural standards below.
            </p>
          </div>
          <Link to="/services" className="btn-explore-services">
            Inspect Live Showcases &darr;
          </Link>
        </div>
      </div>
    </section>
  );
}
