import { useState, useRef, useEffect } from 'react';

const PROJECTS = [
  {
    id: 'beebot-ai',
    number: '01',
    projectTag: 'Project 01',
    category: 'AUTONOMOUS AI SAAS',
    title: 'BeeBot AI',
    headline: 'Sub-50ms Conversational Support with Real-Time Vector RAG Ingestion',
    story:
      'Most customer support bots are sluggish third-party iframe widgets that destroy Core Web Vitals and fail on nuanced technical queries. We engineered BeeBot as an ultra-low-latency edge application with custom vector embeddings. Token streams render at 60 FPS with zero layout shift, backed by automated documentation ingestion and live Slack escalation.',
    url: 'https://beebot-ai.vercel.app',
    displayUrl: 'beebot-ai.vercel.app',
    realImg: '/assets/images/projects/beebot-real.png',
    tallImg: '/assets/images/projects/beebot-tall.png',
    deliverables: [
      'Sub-50ms streaming token inference with zero layout shifts',
      'Autonomous website documentation crawler with vector chunking',
      'Real-time Slack webhooks for live agent conversation handoff',
      'Exportable conversation analytics and customer sentiment logs',
    ],
    stats: [
      { label: 'Edge Latency', value: '< 40ms' },
      { label: 'Vector Accuracy', value: '100%' },
      { label: 'Layout Shift', value: '0.00 CLS' },
    ],
    tech: ['React', 'Vite', 'OpenAI API', 'Vector Embeddings', 'TailwindCSS', 'Slack API'],
    accent: '#FF5722',
    accentGradient: 'linear-gradient(135deg, #FF6B00 0%, #D50000 100%)',
    bgBadge: 'rgba(255, 87, 34, 0.1)',
  },
  {
    id: 'sri-bakes',
    number: '02',
    projectTag: 'Project 02',
    category: 'ARTISANAL D2C STOREFRONT',
    title: 'Sri Bakes Chennai',
    headline: 'High-Conversion Artisanal Commerce with Instant WhatsApp Order Synthesis',
    story:
      'D2C brands lose substantial margins each month to recurring Shopify subscription fees and bloated third-party plugins. We built Sri Bakes with Next.js 14 server components, sub-400ms edge asset delivery, and an automated WhatsApp inquiry drawer that synthesizes custom cake specifications directly into ready-to-bake kitchen slips. The client owns 100% of their platform with zero monthly platform tax.',
    url: 'https://www.sribakeschennai.com',
    displayUrl: 'sribakeschennai.com',
    realImg: '/assets/images/projects/sribakes-real.png',
    tallImg: '/assets/images/projects/sribakes-tall.png',
    deliverables: [
      'Sub-400ms First Contentful Paint with Next.js image optimization',
      'Custom cake inquiry drawer with automated WhatsApp message synthesis',
      'Dynamic multi-category galleries (Weddings, Birthdays, Kids, Brownies)',
      'Zero monthly Shopify subscription fees — 100% proprietary code',
    ],
    stats: [
      { label: 'Core Web Vitals', value: '99+' },
      { label: 'Monthly SaaS Cut', value: '₹0' },
      { label: 'FCP Speed', value: '< 400ms' },
    ],
    tech: ['Next.js 14', 'React', 'TailwindCSS', 'WhatsApp Webhooks', 'High-Res CDN'],
    accent: '#7C3AED',
    accentGradient: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
    bgBadge: 'rgba(124, 58, 237, 0.1)',
  },
  {
    id: 'resume-labs',
    number: '03',
    projectTag: 'Project 03',
    category: 'CAREER PRODUCTIVITY SAAS',
    title: 'Resume Labs',
    headline: 'Split-Screen Reactive Resume Builder with Live Vector PDF Synthesis',
    story:
      'Traditional resume builders lock candidate personal data behind remote cloud databases and charge predatory subscriptions for blurry raster exports. Resume Labs compiles mathematically crisp vector PDFs directly inside browser memory via client-side WebAssembly. Candidate data never leaves local storage, rendering with 0.00 Cumulative Layout Shift and guaranteed enterprise ATS compliance.',
    url: 'https://resume-labs.vercel.app',
    displayUrl: 'resume-labs.vercel.app',
    realImg: '/assets/images/projects/resume-real.png',
    tallImg: '/assets/images/projects/resume-tall.png',
    deliverables: [
      'Split-screen reactive layout synchronized at 60 frames per second',
      'Client-side print-grade vector PDF generation with zero backend storage',
      'ATS-validated typography formatting to maximize candidate callback rates',
      '0.00 Cumulative Layout Shift (CLS) on all modern desktop & mobile browsers',
    ],
    stats: [
      { label: 'CLS Layout Shift', value: '0.00' },
      { label: 'ATS Compliance', value: '100%' },
      { label: 'Reactive Engine', value: '60 FPS' },
    ],
    tech: ['React', 'Vite', 'Client PDF Engine', 'TailwindCSS', 'Vector Fonts'],
    accent: '#0284C7',
    accentGradient: 'linear-gradient(135deg, #0284C7 0%, #0369A1 100%)',
    bgBadge: 'rgba(2, 132, 199, 0.1)',
  },
];

export default function VisionInActionShowcase() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoOrbit, setIsAutoOrbit] = useState(true);

  // Dragging interaction state
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDeltaX, setDragDeltaX] = useState(0);
  const stageRef = useRef(null);

  // Interactive iframe toggle map for alternating deep dives below
  const [interactiveMap, setInteractiveMap] = useState({
    'beebot-ai': false,
    'sri-bakes': false,
    'resume-labs': false,
  });

  // 3D Mouse Physics on stage
  const handleMouseMove = (e) => {
    if (isDragging) {
      const delta = e.clientX - dragStartX;
      setDragDeltaX(delta);
      return;
    }
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    // Fluid dampened tilt between -7 and 7 degrees
    const tiltY = (mouseX / (rect.width / 2)) * 6;
    const tiltX = -(mouseY / (rect.height / 2)) * 6;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
    if (isDragging) {
      finishDrag();
    }
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragDeltaX(0);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      finishDrag();
    }
  };

  const finishDrag = () => {
    if (dragDeltaX < -50) {
      setActiveCardIndex((prev) => (prev + 1) % PROJECTS.length);
    } else if (dragDeltaX > 50) {
      setActiveCardIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
    }
    setIsDragging(false);
    setDragDeltaX(0);
  };

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragDeltaX(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const delta = e.touches[0].clientX - dragStartX;
    setDragDeltaX(delta);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    if (dragDeltaX < -40) {
      setActiveCardIndex((prev) => (prev + 1) % PROJECTS.length);
    } else if (dragDeltaX > 40) {
      setActiveCardIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
    }
    setIsDragging(false);
    setDragDeltaX(0);
  };

  // Auto-Orbit timer: rotates the 3D stage smoothly if not hovered
  useEffect(() => {
    if (!isAutoOrbit || isHovered || isDragging) return;
    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % PROJECTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoOrbit, isHovered, isDragging]);

  // Keyboard navigation (ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        setActiveCardIndex((prev) => (prev + 1) % PROJECTS.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveCardIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Smooth scroll to selected project section below
  const scrollToProject = (id, index) => {
    if (typeof index === 'number') {
      setActiveCardIndex(index);
    }
    const element = document.getElementById(`deepdive-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Toggle interactive iframe vs auto-run motion for a project
  const toggleInteractive = (projectId) => {
    setInteractiveMap((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  const currentProject = PROJECTS[activeCardIndex];

  return (
    <section className="via-white-theme-section" id="vision-in-action">
      {/* ═════════════════════════════════════════════════════════════════════
          1. FULL-PAGE 3D MOVING ANIMATION STAGE (HERO 3D SHOWCASE)
          ═════════════════════════════════════════════════════════════════════ */}
      <div className="via-3d-fullpage-hero">
        <div className="container via-container">
          {/* Top Section Header */}
          <div className="via-top-header">
            <div className="via-badge-pill">
              <span className="via-badge-dot">●</span>
              <span>VERIFIED PRODUCTION DEPLOYMENTS &bull; 3D SPATIAL SHOWCASE</span>
            </div>

            <h1 className="via-main-title">
              Vision in <span className="via-title-gradient">Action</span>
            </h1>

            <p className="via-subtitle">
              Three handcrafted client platforms engineered with zero bloated templates and shipped
              live to the world. Explore the 3D moving cards or scroll down for live running architecture.
            </p>
          </div>

          {/* 3D Moving Perspective Stage */}
          <div
            className="via-3d-stage-viewport"
            ref={stageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setIsHovered(true)}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Background floating 3D glass tiles (spatial depth on clean white) */}
            <div className="via-spatial-glass-tile tile-1" aria-hidden="true" />
            <div className="via-spatial-glass-tile tile-2" aria-hidden="true" />
            <div className="via-spatial-glass-tile tile-3" aria-hidden="true" />

            {/* 3D Perspective Cards Orbit */}
            {PROJECTS.map((proj, index) => {
              const diff = index - activeCardIndex;
              const isActive = diff === 0;

              // Compute 3D spatial transforms
              let transformStyle = '';
              let opacity = 0.35;
              let zIndex = 1;
              let filter = 'blur(3px)';
              let pointerEvents = 'none';

              // Additional drag influence
              const dragRotate = isDragging ? dragDeltaX * 0.08 : 0;

              if (isActive) {
                transformStyle = `perspective(1200px) translate3d(${dragDeltaX * 0.6}px, 0, 90px) rotateX(${tilt.x}deg) rotateY(${tilt.y + dragRotate}deg) scale(1)`;
                opacity = 1;
                zIndex = 10;
                filter = 'none';
                pointerEvents = 'auto';
              } else if (diff === 1 || diff === -2) {
                // Right flanking card in 3D depth
                transformStyle = `perspective(1200px) translate3d(${380 + dragDeltaX * 0.4}px, 20px, -150px) rotateY(${-24 + dragRotate}deg) scale(0.85)`;
                opacity = 0.55;
                zIndex = 5;
                filter = 'none';
                pointerEvents = 'auto';
              } else if (diff === -1 || diff === 2) {
                // Left flanking card in 3D depth
                transformStyle = `perspective(1200px) translate3d(${-380 + dragDeltaX * 0.4}px, 20px, -150px) rotateY(${24 + dragRotate}deg) scale(0.85)`;
                opacity = 0.55;
                zIndex = 5;
                filter = 'none';
                pointerEvents = 'auto';
              }

              return (
                <div
                  key={proj.id}
                  className={`via-3d-card-anchor ${isActive ? 'is-active' : ''}`}
                  style={{
                    transform: transformStyle,
                    opacity,
                    zIndex,
                    filter,
                    pointerEvents,
                    transition: isDragging
                      ? 'none'
                      : 'transform 0.75s cubic-bezier(0.2, 0.9, 0.3, 1), opacity 0.6s ease',
                  }}
                  onClick={() => {
                    if (!isActive) {
                      setActiveCardIndex(index);
                    }
                  }}
                >
                  <div
                    className="via-3d-card-body"
                    style={{
                      borderColor: isActive ? proj.accent : '#E2E8F0',
                      boxShadow: isActive
                        ? '0 32px 70px -15px rgba(15, 23, 42, 0.16), 0 0 0 2px rgba(255, 87, 34, 0.15)'
                        : '0 16px 36px -10px rgba(15, 23, 42, 0.08)',
                    }}
                  >
                    {/* Header bar: Crest & Kicker */}
                    <div className="via-3d-card-top">
                      <div
                        className="via-3d-crest-badge"
                        style={{ background: proj.bgBadge, color: proj.accent }}
                      >
                        <span className="via-3d-num">{proj.number}</span>
                      </div>
                      <span className="via-3d-kicker" style={{ color: proj.accent }}>
                        {proj.category}
                      </span>
                    </div>

                    <h3 className="via-3d-card-title">{proj.title}</h3>
                    <p className="via-3d-card-sub">{proj.headline}</p>

                    {/* Browser Mockup inside 3D Card */}
                    <div className="via-3d-browser-mockup">
                      <div className="via-3d-browser-bar">
                        <span className="dot dot-r" />
                        <span className="dot dot-y" />
                        <span className="dot dot-g" />
                        <span className="via-3d-url-pill">🔒 {proj.displayUrl}</span>
                      </div>
                      <img
                        src={proj.realImg}
                        alt={`${proj.title} Live Website Screenshot`}
                        className="via-3d-preview-img"
                        loading="lazy"
                      />
                    </div>

                    {/* Key Deliverables Pillbox */}
                    <div className="via-3d-deliv-box">
                      <div className="via-3d-deliv-head">✦ VERIFIED DELIVERABLES</div>
                      <ul className="via-3d-deliv-list">
                        {proj.deliverables.slice(0, 3).map((item, i) => (
                          <li key={i} className="via-3d-deliv-item">
                            <span className="via-3d-check" style={{ color: proj.accent }}>
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer Stats & Jump CTA */}
                    <div className="via-3d-card-footer">
                      <div className="via-3d-stat">
                        <span className="via-3d-stat-val">{proj.stats[0].value}</span>
                        <span className="via-3d-stat-lbl">{proj.stats[0].label}</span>
                      </div>
                      <div className="via-3d-stat">
                        <span className="via-3d-stat-val" style={{ color: proj.accent }}>
                          {proj.stats[1].value}
                        </span>
                        <span className="via-3d-stat-lbl">{proj.stats[1].label}</span>
                      </div>

                      <button
                        type="button"
                        className="via-3d-jump-btn"
                        style={{ background: proj.accentGradient }}
                        onClick={(e) => {
                          e.stopPropagation();
                          scrollToProject(proj.id, index);
                        }}
                      >
                        <span>Inspect Live Run ↓</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3D Stage Controls Strip */}
          <div className="via-3d-controls-strip">
            <span className="via-3d-hint">
              <span className="via-drag-pulse">↔</span> Drag in 3D or click arrows to rotate
            </span>

            <div className="via-3d-arrow-group">
              <button
                type="button"
                className="via-3d-arrow-btn"
                onClick={() =>
                  setActiveCardIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length)
                }
                aria-label="Previous 3D Card"
              >
                ←
              </button>

              <div className="via-3d-pips">
                {PROJECTS.map((p, idx) => (
                  <button
                    key={p.id}
                    type="button"
                    className={`via-3d-pip ${activeCardIndex === idx ? 'is-active' : ''}`}
                    onClick={() => setActiveCardIndex(idx)}
                    aria-label={`Jump to ${p.title}`}
                  />
                ))}
              </div>

              <button
                type="button"
                className="via-3d-arrow-btn"
                onClick={() => setActiveCardIndex((prev) => (prev + 1) % PROJECTS.length)}
                aria-label="Next 3D Card"
              >
                →
              </button>
            </div>

            <button
              type="button"
              className={`via-3d-orbit-toggle ${isAutoOrbit ? 'is-playing' : ''}`}
              onClick={() => setIsAutoOrbit(!isAutoOrbit)}
            >
              {isAutoOrbit ? '⏸ 3D Motion Playing' : '▶ Resume 3D Orbit'}
            </button>
          </div>

          {/* Scroll Down Bridge Indicator */}
          <div className="via-scroll-bridge-wrap">
            <button
              type="button"
              className="via-scroll-bridge-btn"
              onClick={() => scrollToProject(currentProject.id)}
            >
              <span className="via-scroll-bridge-text">
                SCROLL DOWN FOR RUNNING LIVE WEBSITES &amp; ARCHITECTURE
              </span>
              <span className="via-scroll-bridge-icon">⌄</span>
            </button>
          </div>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════════════
          2. ALTERNATING DEEP-DIVE SHOWCASES (IMG 2 AS SAME: "MATHI MATHI")
          Project 01: Left = Running Website, Right = Explanation
          Project 02: Left = Explanation, Right = Running Website (Alternated!)
          Project 03: Left = Running Website, Right = Explanation (Alternated!)
          ═════════════════════════════════════════════════════════════════════ */}
      <div className="container via-container" id="alternating-showcases" style={{ paddingTop: '2rem' }}>
        <div className="via-alternating-showcase">
          {PROJECTS.map((project, index) => {
            const isReversed = index % 2 === 1; // Alternating layout ("mathi mathi")
            const isInteractive = interactiveMap[project.id];

            return (
              <div
                key={project.id}
                id={`deepdive-${project.id}`}
                className={`via-proj-row ${isReversed ? 'is-reversed' : ''}`}
              >
                {/* ── RUNNING WEBSITE COLUMN ── */}
                <div className="via-col-browser">
                  <div className="via-browser-frame">
                    {/* Browser Chrome Header */}
                    <div className="via-browser-chrome">
                      <div className="via-traffic-lights">
                        <span className="traffic-dot dot-red" />
                        <span className="traffic-dot dot-yellow" />
                        <span className="traffic-dot dot-green" />
                      </div>

                      <div className="via-address-bar">
                        <span className="via-lock-icon">🔒</span>
                        <span className="via-address-text">{project.url}</span>
                      </div>

                      <div className="via-live-badge">
                        <span className="pulse-dot" />
                        <span className="pulse-text">
                          {isInteractive ? 'INTERACTIVE' : 'RUNNING 60 FPS'}
                        </span>
                      </div>
                    </div>

                    {/* Mode Switcher Bar */}
                    <div className="via-browser-controls-strip">
                      <div className="via-mode-toggles">
                        <button
                          type="button"
                          className={`via-mode-btn ${!isInteractive ? 'active' : ''}`}
                          onClick={() => setInteractiveMap((p) => ({ ...p, [project.id]: false }))}
                        >
                          🎬 Auto-Run Motion
                        </button>
                        <button
                          type="button"
                          className={`via-mode-btn ${isInteractive ? 'active' : ''}`}
                          onClick={() => setInteractiveMap((p) => ({ ...p, [project.id]: true }))}
                        >
                          ⚡ Live Interactive Frame
                        </button>
                      </div>

                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="via-open-ext-btn"
                      >
                        Open In Tab ↗
                      </a>
                    </div>

                    {/* Viewport: Auto-Running Tall Screenshot OR Interactive Iframe */}
                    <div className="via-browser-viewport">
                      {isInteractive ? (
                        <iframe
                          src={project.url}
                          title={`${project.title} live interactive preview`}
                          className="via-live-iframe"
                          loading="lazy"
                        />
                      ) : (
                        <div className="via-autorun-stage">
                          <img
                            src={project.tallImg}
                            alt={`${project.title} live website running`}
                            className="via-tall-running-img"
                            loading="lazy"
                          />
                          <div className="via-autorun-overlay">
                            <span>🖱️ Hover to pause motion &bull; Click "Interactive Frame" above to use live</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* ── TECHNICAL EXPLANATION COLUMN ── */}
                <div className="via-col-explanation">
                  <div
                    className="via-explain-tag"
                    style={{ background: project.bgBadge, color: project.accent }}
                  >
                    ✦ {project.projectTag} &bull; {project.category}
                  </div>

                  <h2 className="via-explain-title">{project.title}</h2>
                  <p className="via-explain-headline">{project.headline}</p>

                  <p className="via-explain-story">{project.story}</p>

                  {/* Verified Deliverables Card */}
                  <div className="via-deliv-container">
                    <div className="via-deliv-title" style={{ color: project.accent }}>
                      ✓ VERIFIED DELIVERABLES &amp; ARCHITECTURE
                    </div>
                    <ul className="via-deliv-checklist">
                      {project.deliverables.map((item, idx) => (
                        <li key={idx} className="via-deliv-check-item">
                          <span
                            className="via-check-icon"
                            style={{ color: project.accent, background: project.bgBadge }}
                          >
                            ✓
                          </span>
                          <span className="via-check-text">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Performance Metrics Stats Strip */}
                  <div className="via-stats-row">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="via-stat-card">
                        <div className="via-stat-number" style={{ color: project.accent }}>
                          {stat.value}
                        </div>
                        <div className="via-stat-label">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="via-tech-chips">
                    {project.tech.map((t) => (
                      <span key={t} className="via-tech-chip">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA Actions */}
                  <div className="via-action-row">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="via-primary-cta"
                      style={{ background: project.accentGradient }}
                    >
                      <span>Visit Live Website ↗</span>
                    </a>

                    <button
                      type="button"
                      className="via-secondary-cta"
                      onClick={() => toggleInteractive(project.id)}
                    >
                      <span>{isInteractive ? 'Return to Auto-Run' : '⚡ Test Inside Page'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── LIFETIME WARRANTY TRUST CARD (WHITE THEME) ── */}
        <div className="via-warranty-banner">
          <div className="via-warranty-left">
            <div className="via-warranty-badge">
              <span className="via-shield-icon">🛡️</span>
              <span className="via-warranty-title">LIFETIME ANYTIME RECTIFICATION WARRANTY</span>
            </div>
            <p className="via-warranty-desc">
              Every production client platform engineered by PrismLine carries an unconditional lifetime
              rectification guarantee. If any layout defect, responsive flaw, or broken user flow ever
              surfaces, our senior engineers diagnose and patch it at ₹0 cost within hours.
            </p>
          </div>

          <a href="tel:9952934596" className="via-warranty-phone-btn">
            <span>📞 Call Senior Engineer: +91 99529 34596</span>
          </a>
        </div>

        {/* ── FLOATING CAPSULE HUD (CLEAN WHITE GLASS HUD) ── */}
        <div className="via-floating-hud">
          <div className="via-hud-brand">
            <span className="via-hud-star">✦</span>
            <span>PRISMLINE</span>
          </div>

          <div className="via-hud-links">
            {PROJECTS.map((proj, idx) => (
              <button
                key={proj.id}
                type="button"
                className={`via-hud-btn ${activeCardIndex === idx ? 'is-active' : ''}`}
                onClick={() => scrollToProject(proj.id, idx)}
              >
                {proj.number} {proj.title}
              </button>
            ))}
          </div>

          <a
            href={PROJECTS[activeCardIndex].url}
            target="_blank"
            rel="noopener noreferrer"
            className="via-hud-launch"
            style={{ background: PROJECTS[activeCardIndex].accentGradient }}
          >
            <span>Launch {PROJECTS[activeCardIndex].displayUrl} ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
