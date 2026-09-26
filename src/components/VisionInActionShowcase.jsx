import { useState, useEffect, useRef } from 'react';

const SHOWREEL_PROJECTS = [
  {
    id: 'beebot-ai',
    number: '01',
    title: 'BeeBot AI',
    tagline: 'Autonomous AI Customer Support Platform & Real-Time RAG Ingestion',
    url: 'https://beebot-ai.vercel.app',
    displayUrl: 'beebot-ai.vercel.app',
    category: 'AI & Automation SaaS',
    color: '#F59E0B',
    accentGradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    tallImg: '/assets/images/projects/beebot-tall.png',
    realImg: '/assets/images/projects/beebot-real.png',
    logoImg: '/assets/images/projects/beebot-logo.jpg',
    duration: 18,
    client: 'BeeBot AI Technologies',
    year: '2026',
    role: 'Full-Stack Architecture & Frontend Engineering',
    summary:
      'Engineered an embeddable customer support agent that ingests documentation, crawls URLs autonomously, and serves sub-50ms conversational responses. Built with vector similarity matching and direct Slack escalation when complex emotional customer signals are detected.',
    highlights: [
      'Sub-50ms streaming token inference with zero layout shifts',
      'Autonomous website crawler with intelligent vector chunking',
      'Real-time Slack webhooks for live agent conversation handoff',
      'Exportable conversation analytics and customer sentiment logs',
    ],
    tech: ['React', 'Vite', 'OpenAI API', 'Vector Embeddings', 'TailwindCSS', 'Edge Serverless'],
  },
  {
    id: 'sri-bakes',
    number: '02',
    title: 'Sri Bakes Chennai',
    tagline: 'Artisanal Patisserie Storefront & Custom WhatsApp Order Pipeline',
    url: 'https://www.sribakeschennai.com',
    displayUrl: 'sribakeschennai.com',
    category: 'Artisanal D2C E-Commerce',
    color: '#C65F47',
    accentGradient: 'linear-gradient(135deg, #C65F47 0%, #E76F51 100%)',
    tallImg: '/assets/images/projects/sribakes-tall.png',
    realImg: '/assets/images/projects/sribakes-real.png',
    logoImg: '/assets/images/projects/sribakes-logo.png',
    duration: 22,
    client: "Sri Bake's Patisserie, Chennai",
    year: '2026',
    role: 'Next.js Frontend, Mobile UX & Order Pipeline',
    summary:
      'Built a high-conversion digital cake storefront for one of Chennai’s premier artisanal home bakeries. Features sub-second image delivery across dozens of celebration cake galleries and an instant WhatsApp checkout drawer that passes pre-configured cake specs directly to the kitchen.',
    highlights: [
      'Sub-400ms First Contentful Paint with Next.js image optimization',
      'Custom cake inquiry drawer with automated WhatsApp message synthesis',
      'Dynamic multi-category galleries (Weddings, Birthdays, Kids, Brownies)',
      'Zero monthly Shopify subscription fees — 100% proprietary code ownership',
    ],
    tech: ['Next.js 14', 'React', 'TailwindCSS', 'WhatsApp Webhooks', 'High-Res CDN', 'Edge Caching'],
  },
  {
    id: 'resume-labs',
    number: '03',
    title: 'Resume Labs',
    tagline: 'Interactive Reactive Resume Builder with Live Vector PDF Synthesis',
    url: 'https://resume-labs.vercel.app',
    displayUrl: 'resume-labs.vercel.app',
    category: 'Productivity & Career Tools',
    color: '#0284C7',
    accentGradient: 'linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)',
    tallImg: '/assets/images/projects/resume-tall.png',
    realImg: '/assets/images/projects/resume-real.png',
    logoImg: '/assets/images/projects/resume-favicon.ico',
    duration: 16,
    client: 'Resume Labs Project',
    year: '2026',
    role: 'Frontend Application Architecture & Vector PDF Engine',
    summary:
      'Developed a responsive, dual-pane resume application that renders typographic templates in real time at 60 FPS. Implemented a 100% private, client-side vector PDF generator that guarantees zero layout shifts and passes strict enterprise ATS scanners.',
    highlights: [
      'Split-screen reactive layout synchronized at 60 frames per second',
      'Client-side print-grade vector PDF generation with zero backend storage',
      'ATS-validated typography formatting to maximize candidate callback rates',
      '0.00 Cumulative Layout Shift (CLS) on all modern desktop & mobile browsers',
    ],
    tech: ['React', 'Vite', 'Client PDF Engine', 'TailwindCSS', 'Reactive State', 'Vector Fonts'],
  },
];

export default function VisionInActionShowcase() {
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [isMuted, setIsMuted] = useState(true);
  const progressTimerRef = useRef(null);

  const currentProject = SHOWREEL_PROJECTS[activeReelIndex];

  // Auto-play progress simulation loop for video effect
  useEffect(() => {
    if (!isPlaying) {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      return;
    }

    const intervalMs = 100;
    const totalMs = (currentProject.duration * 1000) / speedMultiplier;
    const stepPercent = (intervalMs / totalMs) * 100;

    progressTimerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Advance to next project automatically
          setActiveReelIndex((curr) => (curr + 1) % SHOWREEL_PROJECTS.length);
          return 0;
        }
        return prev + stepPercent;
      });
    }, intervalMs);

    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, [isPlaying, activeReelIndex, speedMultiplier, currentProject.duration]);

  // When changing projects manually, reset progress
  const selectProject = (idx) => {
    setActiveReelIndex(idx);
    setProgress(0);
    setIsPlaying(true);
  };

  // Format current timestamp
  const currentSeconds = Math.floor((progress / 100) * currentProject.duration);
  const formattedTime = `00:${currentSeconds < 10 ? '0' : ''}${currentSeconds} / 00:${currentProject.duration}`;

  return (
    <section className="via-human-section" id="vision-in-action">
      {/* Cinematic subtle ambient lighting */}
      <div className="via-ambient-light light-1" aria-hidden="true" />
      <div className="via-ambient-light light-2" aria-hidden="true" />

      <div className="container">
        {/* ── Section Header (Human, Editorial, Clean) ── */}
        <div className="via-editorial-header">
          <div className="via-kicker-tag">
            <span className="live-rec-dot"></span>
            <span>VERIFIED PRODUCTION SHOWREEL &bull; CLIENT BUILDS</span>
          </div>

          <h2 className="via-main-heading">
            Vision in Action. <br />
            <span className="via-title-gradient">Handcrafted Software &bull; Shipped Live.</span>
          </h2>

          <p className="via-header-desc">
            No mockups. No generic AI templates. Every project below is live software running on production domains,
            built from scratch by our engineers. Watch the cinematic walkthrough video below or inspect the individual case studies.
          </p>
        </div>

        {/* ── CINEMATIC 4K VIDEO ANIMATION SHOWREEL ── */}
        <div className="showreel-video-container">
          {/* Top Camera HUD Chrome */}
          <div className="showreel-hud-bar">
            <div className="hud-left">
              <span className="hud-rec-indicator">
                <span className="rec-blinking-circle"></span>
                <span>REC &bull; 4K 60FPS</span>
              </span>
              <span className="hud-divider">|</span>
              <span className="hud-site-url">
                <span className="hud-lock">🔒</span>
                <span className="hud-url-text">{currentProject.url}</span>
              </span>
            </div>

            <div className="hud-center-tabs">
              {SHOWREEL_PROJECTS.map((proj, idx) => (
                <button
                  key={proj.id}
                  type="button"
                  className={`hud-tab-btn ${activeReelIndex === idx ? 'active' : ''}`}
                  onClick={() => selectProject(idx)}
                >
                  <span className="hud-num">{proj.number}</span>
                  <span className="hud-title">{proj.title}</span>
                </button>
              ))}
            </div>

            <div className="hud-right">
              <span className="hud-timecode">{formattedTime}</span>
              <a
                href={currentProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hud-external-launch"
              >
                Open Live ↗
              </a>
            </div>
          </div>

          {/* Video Viewport Stage */}
          <div className="showreel-screen-viewport" onClick={() => setIsPlaying(!isPlaying)}>
            {/* Smooth Cinematic Vertical Pan Animation */}
            <div
              className={`showreel-scroll-canvas ${isPlaying ? 'is-animating' : 'is-paused'}`}
              style={{
                '--scroll-duration': `${currentProject.duration / speedMultiplier}s`,
              }}
            >
              <img
                src={currentProject.tallImg}
                alt={`${currentProject.title} Live Interface Full Walkthrough`}
                className="showreel-pan-image"
                loading="eager"
              />
            </div>

            {/* Specular cinematic lens glare & vignette */}
            <div className="showreel-vignette-overlay" aria-hidden="true" />

            {/* Interactive Play/Pause Watermark Overlay (shows when paused) */}
            {!isPlaying && (
              <div className="showreel-paused-overlay">
                <div className="pause-icon-badge">
                  <span>▶</span>
                </div>
                <span>Click to Resume Walkthrough</span>
              </div>
            )}

            {/* Floating Live Site Dispatch Pill */}
            <div className="showreel-floating-banner">
              <div className="sfb-meta">
                <span className="sfb-badge" style={{ background: currentProject.color }}>
                  {currentProject.category}
                </span>
                <strong className="sfb-title">{currentProject.title}</strong>
                <span className="sfb-tagline">{currentProject.tagline}</span>
              </div>

              <a
                href={currentProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="sfb-cta-btn"
                style={{ background: currentProject.accentGradient }}
                onClick={(e) => e.stopPropagation()}
              >
                <span>Launch Live Site</span>
                <span className="arrow">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Bottom Scrubbable Video Controls Bar */}
          <div className="showreel-controls-bar">
            {/* Play/Pause Button */}
            <button
              type="button"
              className="ctrl-btn-play"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause Showreel' : 'Play Showreel'}
            >
              {isPlaying ? '⏸ Pause' : '▶ Play'}
            </button>

            {/* Scrubbable Progress Timeline */}
            <div
              className="ctrl-timeline-track"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const newPercent = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
                setProgress(newPercent);
              }}
            >
              <div className="ctrl-timeline-fill" style={{ width: `${progress}%`, background: currentProject.accentGradient }} />
              <div className="ctrl-timeline-thumb" style={{ left: `${progress}%` }} />
            </div>

            {/* Time Display */}
            <span className="ctrl-time-label">{formattedTime}</span>

            {/* Playback Speed Toggle */}
            <button
              type="button"
              className="ctrl-speed-btn"
              onClick={() => setSpeedMultiplier((curr) => (curr === 1 ? 1.5 : curr === 1.5 ? 2 : 1))}
              title="Change Walkthrough Speed"
            >
              {speedMultiplier}x Speed
            </button>

            {/* Sound Aesthetic Toggle */}
            <button
              type="button"
              className={`ctrl-mute-btn ${isMuted ? 'muted' : ''}`}
              onClick={() => setIsMuted(!isMuted)}
              title={isMuted ? 'Ambience Muted' : 'Ambience Playing'}
            >
              {isMuted ? '🔇 Mute' : '🔊 Sound'}
            </button>
          </div>
        </div>

        {/* ── HUMAN-CRAFTED BESPOKE EDITORIAL CASE STUDIES ── */}
        <div className="via-case-studies-wrap">
          <div className="cs-section-header">
            <span className="cs-kicker">INDIVIDUAL CLIENT DEPLOYMENTS</span>
            <h3 className="cs-heading">Deep-Dive Into Every Engineered Platform</h3>
            <p className="cs-sub">
              Every deployment represents a distinct technical challenge solved with proprietary code,
              measurable speed, and our lifetime guarantee.
            </p>
          </div>

          <div className="cs-list">
            {SHOWREEL_PROJECTS.map((project, index) => {
              const isEven = index % 2 === 1;

              return (
                <article
                  key={project.id}
                  className={`cs-row-card ${isEven ? 'row-inverted' : ''}`}
                >
                  {/* Left: Real High-Res Screenshot Canvas */}
                  <div className="cs-media-column">
                    <div className="cs-browser-frame">
                      <div className="cs-browser-top">
                        <div className="cs-dots">
                          <span className="d-dot dot-red" />
                          <span className="d-dot dot-yellow" />
                          <span className="d-dot dot-green" />
                        </div>
                        <div className="cs-url-bar">
                          <span className="lock">🔒</span>
                          <span className="url">{project.displayUrl}</span>
                        </div>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cs-live-pill"
                        >
                          Visit Live ↗
                        </a>
                      </div>

                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cs-img-link"
                      >
                        <img
                          src={project.realImg}
                          alt={`${project.title} Real Website Screenshot`}
                          className="cs-real-screenshot"
                          loading="lazy"
                        />
                        <div className="cs-hover-overlay">
                          <span className="btn-view-live" style={{ background: project.accentGradient }}>
                            Open {project.displayUrl} in New Window ↗
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Right: Handcrafted Typographic Story */}
                  <div className="cs-narrative-column">
                    <div className="cs-meta-top">
                      <span className="cs-index">{project.number} / 03</span>
                      <span className="cs-badge-cat" style={{ color: project.color }}>
                        {project.category}
                      </span>
                    </div>

                    <h4 className="cs-project-title">{project.title}</h4>
                    <p className="cs-tagline-text">{project.tagline}</p>

                    <div className="cs-client-strip">
                      <div className="client-chip">
                        <span className="lbl">Client</span>
                        <strong>{project.client}</strong>
                      </div>
                      <div className="client-chip">
                        <span className="lbl">Timeline</span>
                        <strong>Deployed &bull; {project.year}</strong>
                      </div>
                      <div className="client-chip">
                        <span className="lbl">Scope</span>
                        <strong>{project.role}</strong>
                      </div>
                    </div>

                    <p className="cs-summary-body">{project.summary}</p>

                    <div className="cs-highlights-box">
                      <span className="box-title">Key Engineering Deliverables</span>
                      <ul className="cs-deliverables">
                        {project.highlights.map((item, i) => (
                          <li key={i}>
                            <span className="check-mark">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="cs-tech-row">
                      <span className="tech-title">Technology Stack:</span>
                      <div className="tech-chips-wrap">
                        {project.tech.map((t) => (
                          <span className="cs-tech-tag" key={t}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="cs-actions-row">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-cs-launch"
                        style={{ background: project.accentGradient }}
                      >
                        <span>Visit {project.displayUrl} Live</span>
                        <span className="arrow">&rarr;</span>
                      </a>
                      <a href="tel:9952934596" className="btn-cs-talk">
                        <span>📞 Discuss Similar Build</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* ── CLIENT TRUST GUARANTEE BANNER ── */}
        <div className="via-trust-banner">
          <div className="tb-content">
            <span className="tb-icon">🛡️</span>
            <div>
              <h4 className="tb-title">Lifetime Anytime Rectification Warranty</h4>
              <p className="tb-desc">
                Every project we ship is backed by an unconditional defect-fix guarantee. If any bug, styling issue, or flow defect
                ever arises in the code we built for you, we fix and patch it immediately at ₹0 extra charge.
              </p>
            </div>
          </div>
          <a href="tel:9952934596" className="tb-phone-btn">
            <span>Call Senior Engineer: +91 99529 34596 &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
