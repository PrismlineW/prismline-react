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
  const [interactiveMap, setInteractiveMap] = useState({
    'beebot-ai': false,
    'sri-bakes': false,
    'resume-labs': false,
  });

  // Movable / Draggable carousel state
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDeltaX, setDragDeltaX] = useState(0);
  const carouselTrackRef = useRef(null);

  // Mouse Drag Handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragDeltaX(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartX;
    setDragDeltaX(delta);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    if (dragDeltaX < -45) {
      setActiveCardIndex((prev) => (prev + 1) % PROJECTS.length);
    } else if (dragDeltaX > 45) {
      setActiveCardIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
    }
    setIsDragging(false);
    setDragDeltaX(0);
  };

  // Touch Swipe Handlers for Mobile
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

  // Smooth scroll to selected project section below
  const scrollToProject = (id, index) => {
    setActiveCardIndex(index);
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

  // Keyboard navigation
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

  return (
    <section className="via-white-theme-section" id="vision-in-action">
      <div className="container via-container">
        {/* ── TOP SECTION HEADER ── */}
        <div className="via-top-header">
          <div className="via-badge-pill">
            <span className="via-badge-dot">●</span>
            <span>VERIFIED PRODUCTION DEPLOYMENTS &bull; ZERO TEMPLATES</span>
          </div>

          <h1 className="via-main-title">
            Vision in <span className="via-title-gradient">Action</span>
          </h1>

          <p className="via-subtitle">
            Three handcrafted client platforms engineered for scale and speed. Explore the running live
            software below with verified production deliverables and performance metrics.
          </p>
        </div>

        {/* ── COMPACT MOVABLE CARD DECK (SMALL & DRAGGABLE) ── */}
        <div className="via-movable-shelf-wrap">
          <div className="via-shelf-toolbar">
            <span className="via-shelf-hint">
              <span className="via-drag-icon">↔</span> Drag cards or click to jump
            </span>

            {/* Left / Right Nav Controls */}
            <div className="via-shelf-controls">
              <button
                type="button"
                className="via-shelf-btn"
                onClick={() =>
                  setActiveCardIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length)
                }
                aria-label="Previous project card"
              >
                ←
              </button>
              <div className="via-shelf-pips">
                {PROJECTS.map((p, idx) => (
                  <button
                    key={p.id}
                    type="button"
                    className={`via-pip ${activeCardIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveCardIndex(idx)}
                    aria-label={`Jump to ${p.title}`}
                  />
                ))}
              </div>
              <button
                type="button"
                className="via-shelf-btn"
                onClick={() => setActiveCardIndex((prev) => (prev + 1) % PROJECTS.length)}
                aria-label="Next project card"
              >
                →
              </button>
            </div>
          </div>

          {/* Draggable Cards Track */}
          <div
            className={`via-shelf-track ${isDragging ? 'is-dragging' : ''}`}
            ref={carouselTrackRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              transform: `translateX(${dragDeltaX * 0.4}px)`,
              transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.2, 0.9, 0.3, 1)',
            }}
          >
            {PROJECTS.map((proj, idx) => {
              const isActive = activeCardIndex === idx;
              return (
                <div
                  key={proj.id}
                  className={`via-compact-card ${isActive ? 'is-active' : ''}`}
                  onClick={() => scrollToProject(proj.id, idx)}
                  style={{
                    borderColor: isActive ? proj.accent : '#E2E8F0',
                  }}
                >
                  <div className="via-card-meta">
                    <span
                      className="via-card-num"
                      style={{ background: proj.bgBadge, color: proj.accent }}
                    >
                      {proj.number}
                    </span>
                    <span className="via-card-cat" style={{ color: proj.accent }}>
                      {proj.category}
                    </span>
                  </div>

                  <h3 className="via-card-name">{proj.title}</h3>

                  {/* Compact Browser Preview */}
                  <div className="via-mini-browser">
                    <div className="via-mini-header">
                      <span className="mini-dot r" />
                      <span className="mini-dot y" />
                      <span className="mini-dot g" />
                      <span className="mini-url">{proj.displayUrl}</span>
                    </div>
                    <img
                      src={proj.realImg}
                      alt={`${proj.title} thumbnail preview`}
                      className="via-mini-thumb"
                      loading="lazy"
                    />
                  </div>

                  <div className="via-card-action">
                    <span className="via-jump-text" style={{ color: proj.accent }}>
                      Inspect Architecture & Live Run ↓
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── ALTERNATING DEEP-DIVE SECTIONS (MATHI MATHI) ── */}
        {/* Project 01: Left = Running Website, Right = Explanation */}
        {/* Project 02: Left = Explanation, Right = Running Website (Alternated) */}
        {/* Project 03: Left = Running Website, Right = Explanation (Alternated) */}
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
