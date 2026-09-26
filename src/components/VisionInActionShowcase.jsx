import { useState, useRef } from 'react';

const PROJECTS = [
  {
    id: 'beebot-ai',
    title: 'BeeBot AI',
    subtitle: 'Plug-and-play AI customer support for websites, trained on documentation with sub-50ms streaming inference.',
    category: 'ai',
    categoryLabel: 'AI & Automation',
    url: 'https://beebot-ai.vercel.app',
    displayUrl: 'beebot-ai.vercel.app',
    badge: 'Autonomous AI SaaS',
    status: 'Live in Production',
    accentColor: '#EAB308',
    accentGradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    glowColor: 'rgba(245, 158, 11, 0.35)',
    tagBg: 'rgba(245, 158, 11, 0.12)',
    previewImg: '/assets/images/projects/beebot-preview.jpg',
    logoImg: '/assets/images/projects/beebot-logo.jpg',
    latency: '38ms',
    metrics: [
      { label: 'Edge Inference', value: '< 40ms' },
      { label: 'RAG Knowledge Accuracy', value: '100%' },
      { label: 'Emotion Signals', value: '15+' },
      { label: 'Native Integration', value: 'Slack' },
    ],
    tags: ['React', 'Vite', 'OpenAI / Claude', 'Vector RAG', 'TailwindCSS', 'Edge API'],
    problem: 'Businesses struggle with slow customer support response times, expensive human agent staffing, and generic AI bots that hallucinate inaccurate information.',
    solution: 'PrismLine engineered BeeBot AI: a zero-friction, embeddable conversational platform that autonomously crawls website docs, uses localized vector chunking, and escalates emotionally frustrated users to live Slack channels in real-time.',
    deliverables: [
      'Automatic URL crawler and multi-source document ingestion engine',
      'Ultra-low-latency streaming conversation widget with 0 layout shift',
      'Escalation detector catching 15 emotional signals for instant team alert',
      'Complete transcript export, sentiment dashboards, and analytics suite',
    ],
  },
  {
    id: 'sri-bakes',
    title: 'Sri Bakes Chennai',
    subtitle: 'Artisanal custom patisserie storefront with high-speed cake showcase galleries and direct WhatsApp ordering.',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce & Retail',
    url: 'https://www.sribakeschennai.com',
    displayUrl: 'sribakeschennai.com',
    badge: 'Artisanal D2C Storefront',
    status: 'Live in Production',
    accentColor: '#C65F47',
    accentGradient: 'linear-gradient(135deg, #C65F47 0%, #E76F51 100%)',
    glowColor: 'rgba(198, 95, 71, 0.35)',
    tagBg: 'rgba(198, 95, 71, 0.12)',
    previewImg: '/assets/images/projects/sribakes-preview.jpg',
    logoImg: '/assets/images/projects/sribakes-logo.png',
    latency: '42ms',
    metrics: [
      { label: 'Core Web Vitals', value: '99+' },
      { label: 'First Contentful Paint', value: '< 350ms' },
      { label: 'WhatsApp Dispatch', value: 'Instant' },
      { label: 'Monthly SaaS Cut', value: '₹0' },
    ],
    tags: ['Next.js', 'React', 'TailwindCSS', 'WhatsApp Webhooks', 'High-Res Media', 'Edge CDN'],
    problem: 'High monthly Shopify fees and sluggish mobile load speeds caused heavy cart abandonment for an artisanal bakery relying on Instagram DMs and manual calls.',
    solution: 'Engineered a bespoke, high-performance Next.js storefront featuring sub-second image loading, multi-category celebration galleries, and an automated WhatsApp booking pipeline with custom cake specifications.',
    deliverables: [
      'Next.js 14 responsive media pipeline delivering 99+ PageSpeed scores',
      'Interactive tiered category galleries (Kids, Weddings, Brownies, Couples)',
      'Automated WhatsApp custom order dispatch with pre-filled event specs',
      'Zero monthly platform tax or third-party transaction fees',
    ],
  },
  {
    id: 'resume-labs',
    title: 'Resume Labs',
    subtitle: 'Next-gen reactive AI resume builder with live dual-pane layout synchronization and instant vector PDF export.',
    category: 'apps',
    categoryLabel: 'SaaS & Web Apps',
    url: 'https://resume-labs.vercel.app',
    displayUrl: 'resume-labs.vercel.app',
    badge: 'Career Productivity SaaS',
    status: 'Live in Production',
    accentColor: '#0284C7',
    accentGradient: 'linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)',
    glowColor: 'rgba(2, 132, 199, 0.35)',
    tagBg: 'rgba(2, 132, 199, 0.12)',
    previewImg: '/assets/images/projects/resume-preview.jpg',
    logoImg: '/assets/images/projects/resume-favicon.ico',
    latency: '29ms',
    metrics: [
      { label: 'Cumulative Layout Shift', value: '0.00' },
      { label: 'ATS Compliance', value: '100%' },
      { label: 'Vector PDF Engine', value: 'Client-Side' },
      { label: 'Live Preview Delay', value: '< 16ms' },
    ],
    tags: ['React', 'Vite', 'Client PDF Engine', 'TailwindCSS', 'State Sync', 'Responsive UI'],
    problem: 'Job seekers get rejected by ATS scanners due to broken PDF formatting, while online resume builders lock downloads behind predatory paywalls and clunky interfaces.',
    solution: 'Built an elegant, responsive web application offering real-time dual-pane live synchronization, industry-standard ATS typography templates, and 100% private, client-side vector PDF generation with zero backend data storage.',
    deliverables: [
      'Split-screen reactive layout engine updating previews at 60 FPS',
      'Dual ATS-optimized templates (Modern Minimalist & Executive Classic)',
      'Zero-latency client-side vector PDF renderer with print-grade DPI',
      'Private zero-knowledge architecture ensuring total user data privacy',
    ],
  },
];

export default function VisionInActionShowcase() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'emulator'
  const [emulatorProject, setEmulatorProject] = useState(PROJECTS[0]);
  const [emulatorDevice, setEmulatorDevice] = useState('macbook'); // 'macbook' | 'iphone'
  const [modalDeviceView, setModalDeviceView] = useState('desktop'); // 'desktop' | 'mobile'

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section className="vision-showcase-section" id="vision-in-action">
      {/* Ambient floating glow lights */}
      <div className="vision-ambient-glow glow-1" aria-hidden="true" />
      <div className="vision-ambient-glow glow-2" aria-hidden="true" />
      <div className="vision-ambient-glow glow-3" aria-hidden="true" />

      <div className="container">
        {/* Section Header */}
        <div className="vision-header-wrap">
          <div className="vision-kicker-row">
            <span className="vision-kicker-badge">
              <span className="pulse-radar-dot"></span>
              COMPLETED PRODUCTION DEPLOYMENTS
            </span>
            <span className="vision-kicker-sub">3 LIVE CLIENT WEBSITES &bull; VERIFIABLE PRODUCTION</span>
          </div>

          <h2 className="vision-main-title">
            Vision in Action. <br />
            <span className="vision-gradient-accent">Live Projects We Have Built &amp; Deployed.</span>
          </h2>

          <p className="vision-lead-desc">
            We don’t just design static mockups &mdash; we launch high-converting, animated, production-grade software.
            Inspect our completed live client projects below with interactive 3D perspective tilt or test them directly inside our Hardware Emulator.
          </p>

          {/* View Mode & Filter Controls Row */}
          <div className="vision-controls-master-row">
            {/* Category Filter Pills */}
            <div className="vision-filter-pills-bar">
              {[
                { id: 'all', label: 'All Projects', count: 3 },
                { id: 'ai', label: '🤖 AI Support SaaS', count: 1 },
                { id: 'ecommerce', label: '🍰 Custom E-Commerce', count: 1 },
                { id: 'apps', label: '📄 Dynamic Web Apps', count: 1 },
              ].map(tab => (
                <button
                  key={tab.id}
                  type="button"
                  className={`vision-tab-btn ${activeCategory === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(tab.id)}
                >
                  <span>{tab.label}</span>
                  <span className="tab-count-tag">{tab.count}</span>
                </button>
              ))}
            </div>

            {/* View Mode Toggle (3D Cards vs Hardware Emulator) */}
            <div className="view-mode-toggle-pill">
              <button
                type="button"
                className={`mode-btn ${viewMode === 'cards' ? 'active' : ''}`}
                onClick={() => setViewMode('cards')}
                title="3D Tilt Cards View"
              >
                <span>🎴 3D Tilt Cards</span>
              </button>
              <button
                type="button"
                className={`mode-btn ${viewMode === 'emulator' ? 'active' : ''}`}
                onClick={() => setViewMode('emulator')}
                title="Hardware Device Emulator View"
              >
                <span>💻 Device Simulator</span>
              </button>
            </div>
          </div>
        </div>

        {/* ── VIEW MODE 1: 3D Tilt Cards Grid ── */}
        {viewMode === 'cards' && (
          <div className="vision-cards-grid">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                onOpenDetails={() => setSelectedProject(project)}
              />
            ))}
          </div>
        )}

        {/* ── VIEW MODE 2: Interactive Hardware Device Emulator ── */}
        {viewMode === 'emulator' && (
          <div className="hardware-emulator-stage">
            {/* Emulator Control Bar */}
            <div className="emulator-control-panel">
              <div className="emulator-project-tabs">
                {PROJECTS.map(proj => (
                  <button
                    key={proj.id}
                    type="button"
                    className={`emu-proj-btn ${emulatorProject.id === proj.id ? 'active' : ''}`}
                    onClick={() => setEmulatorProject(proj)}
                  >
                    <span className="emu-dot" style={{ background: proj.accentColor }}></span>
                    <span>{proj.title}</span>
                  </button>
                ))}
              </div>

              <div className="emulator-device-switch">
                <button
                  type="button"
                  className={`emu-device-btn ${emulatorDevice === 'macbook' ? 'active' : ''}`}
                  onClick={() => setEmulatorDevice('macbook')}
                >
                  <span>💻 MacBook Pro 16&quot;</span>
                </button>
                <button
                  type="button"
                  className={`emu-device-btn ${emulatorDevice === 'iphone' ? 'active' : ''}`}
                  onClick={() => setEmulatorDevice('iphone')}
                >
                  <span>📱 iPhone 15 Pro</span>
                </button>
                <a
                  href={emulatorProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-emu-live-link"
                  style={{ background: emulatorProject.accentGradient }}
                >
                  <span>Launch Live Site ↗</span>
                </a>
              </div>
            </div>

            {/* Hardware Mockup Display */}
            <div className={`hardware-frame-wrapper ${emulatorDevice}`}>
              {emulatorDevice === 'macbook' ? (
                <div className="macbook-frame">
                  <div className="macbook-screen">
                    <div className="macbook-camera-notch">
                      <span className="notch-lens"></span>
                    </div>
                    <div className="screen-browser-header">
                      <div className="traffic-lights">
                        <span className="tl-dot tl-red"></span>
                        <span className="tl-dot tl-yellow"></span>
                        <span className="tl-dot tl-green"></span>
                      </div>
                      <div className="screen-url-bar">
                        <span className="ssl-lock">🔒</span>
                        <span className="url-txt">{emulatorProject.url}</span>
                      </div>
                      <div className="screen-actions">
                        <span className="screen-ping-badge">🟢 {emulatorProject.latency}</span>
                      </div>
                    </div>
                    <div className="screen-viewport">
                      <img
                        src={emulatorProject.previewImg}
                        alt={`${emulatorProject.title} Desktop View`}
                        className="emulator-screen-img"
                      />
                      <div className="screen-floating-cta">
                        <a
                          href={emulatorProject.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-screen-launch"
                          style={{ background: emulatorProject.accentGradient }}
                        >
                          Visit Live App at {emulatorProject.displayUrl} &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="macbook-base">
                    <div className="macbook-notch-cutout"></div>
                  </div>
                </div>
              ) : (
                <div className="iphone-frame">
                  <div className="iphone-dynamic-island">
                    <span className="island-lens"></span>
                  </div>
                  <div className="iphone-screen">
                    <div className="iphone-browser-header">
                      <div className="iphone-url-pill">
                        <span>🔒 {emulatorProject.displayUrl}</span>
                      </div>
                    </div>
                    <div className="iphone-viewport">
                      <img
                        src={emulatorProject.previewImg}
                        alt={`${emulatorProject.title} Mobile View`}
                        className="iphone-screen-img"
                      />
                      <div className="iphone-floating-cta">
                        <a
                          href={emulatorProject.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-screen-launch"
                          style={{ background: emulatorProject.accentGradient }}
                        >
                          Open Live &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="iphone-home-bar"></div>
                </div>
              )}
            </div>

            {/* Quick Specs Strip */}
            <div className="emulator-specs-strip">
              <div className="emu-spec-item">
                <span className="emu-spec-label">Project:</span>
                <strong className="emu-spec-val">{emulatorProject.title}</strong>
              </div>
              <div className="emu-spec-item">
                <span className="emu-spec-label">Live URL:</span>
                <a href={emulatorProject.url} target="_blank" rel="noopener noreferrer" className="emu-spec-link">
                  {emulatorProject.displayUrl} ↗
                </a>
              </div>
              <div className="emu-spec-item">
                <span className="emu-spec-label">Architecture:</span>
                <span className="emu-spec-val">{emulatorProject.tags.slice(0, 3).join(' • ')}</span>
              </div>
              <div className="emu-spec-item">
                <button
                  type="button"
                  className="btn-open-case-study"
                  onClick={() => setSelectedProject(emulatorProject)}
                >
                  Inspect Full Case Study &rarr;
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Proof Trust Ribbon */}
        <div className="vision-proof-ribbon">
          <div className="ribbon-item">
            <span className="ribbon-icon">⚡</span>
            <div>
              <strong>100% Deployed on Live Domains</strong>
              <span>Every showcase link is public and running in production today.</span>
            </div>
          </div>
          <div className="ribbon-divider" />
          <div className="ribbon-item">
            <span className="ribbon-icon">🛡️</span>
            <div>
              <strong>Zero-Breach Guarantee Included</strong>
              <span>All completed client code backed by our Lifetime Rectification Warranty.</span>
            </div>
          </div>
          <div className="ribbon-divider" />
          <div className="ribbon-item">
            <span className="ribbon-icon">🚀</span>
            <div>
              <strong>Have a Project in Mind?</strong>
              <a href="tel:9952934596" className="ribbon-hotline">Call +91 99529 34596 &rarr;</a>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Project Details Modal */}
      {selectedProject && (
        <div className="vision-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div
            className="vision-modal-card"
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="modal-top-bar">
              <div className="modal-title-group">
                <span className="modal-tag" style={{ background: selectedProject.tagBg, color: selectedProject.accentColor }}>
                  {selectedProject.badge}
                </span>
                <h3 className="modal-h3">{selectedProject.title}</h3>
                <span className="modal-status-badge">
                  <span className="pulse-radar-dot"></span>
                  {selectedProject.status}
                </span>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-scroll-content">
              {/* Browser Preview Window */}
              <div className="modal-browser-stage">
                <div className="modal-browser-bar">
                  <div className="traffic-lights">
                    <span className="tl-dot tl-red" />
                    <span className="tl-dot tl-yellow" />
                    <span className="tl-dot tl-green" />
                  </div>
                  <div className="modal-url-input">
                    <span className="ssl-lock">🔒</span>
                    <span className="modal-url-text">{selectedProject.url}</span>
                  </div>
                  <div className="modal-device-toggles">
                    <button
                      type="button"
                      className={`device-btn ${modalDeviceView === 'desktop' ? 'active' : ''}`}
                      onClick={() => setModalDeviceView('desktop')}
                      title="Desktop Preview"
                    >
                      🖥️
                    </button>
                    <button
                      type="button"
                      className={`device-btn ${modalDeviceView === 'mobile' ? 'active' : ''}`}
                      onClick={() => setModalDeviceView('mobile')}
                      title="Mobile View"
                    >
                      📱
                    </button>
                  </div>
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-external-btn"
                  >
                    Launch Live Site ↗
                  </a>
                </div>

                <div className={`modal-viewport-frame ${modalDeviceView}`}>
                  <img
                    src={selectedProject.previewImg}
                    alt={`${selectedProject.title} Interface Preview`}
                    className="modal-preview-image"
                  />
                  <div className="modal-viewport-overlay">
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-launch-floating"
                      style={{ background: selectedProject.accentGradient }}
                    >
                      Open Live Project at {selectedProject.displayUrl} ↗
                    </a>
                  </div>
                </div>
              </div>

              {/* Specs & Architecture */}
              <div className="modal-specs-grid">
                <div className="modal-spec-col">
                  <h4 className="spec-heading">The Client Challenge</h4>
                  <p className="spec-paragraph">{selectedProject.problem}</p>

                  <h4 className="spec-heading" style={{ marginTop: '1.5rem' }}>PrismLine Architecture</h4>
                  <p className="spec-paragraph">{selectedProject.solution}</p>
                </div>

                <div className="modal-spec-col">
                  <h4 className="spec-heading">Engineering Highlights</h4>
                  <ul className="modal-deliverables-list">
                    {selectedProject.deliverables.map((item, i) => (
                      <li key={i}>
                        <span className="bullet-check">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="modal-metrics-callout">
                    {selectedProject.metrics.map(m => (
                      <div className="m-metric-card" key={m.label}>
                        <div className="m-metric-val" style={{ color: selectedProject.accentColor }}>{m.value}</div>
                        <div className="m-metric-lbl">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tech Stack Footer */}
              <div className="modal-tech-stack-row">
                <span className="tech-label">Built With:</span>
                <div className="tech-pills-list">
                  {selectedProject.tags.map(t => (
                    <span className="tech-pill" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="modal-bottom-actions">
              <button
                type="button"
                className="btn-modal-dismiss"
                onClick={() => setSelectedProject(null)}
              >
                Close Preview
              </button>
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modal-visit"
                style={{ background: selectedProject.accentGradient }}
              >
                <span>Visit {selectedProject.displayUrl} Live</span>
                <span className="arrow">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/**
 * Individual 3D Interactive Tilt Card Component with Rotating Border Beam
 */
function ProjectCard({ project, index, onOpenDetails }) {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    glarePos: { x: 50, y: 50, opacity: 0 },
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7.5;
    const rotateY = ((x - centerX) / centerX) * 7.5;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`,
      glarePos: { x: glareX, y: glareY, opacity: 0.25 },
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      glarePos: { x: 50, y: 50, opacity: 0 },
    });
  };

  return (
    <article
      ref={cardRef}
      className="vision-card with-border-beam"
      style={{
        transform: tiltStyle.transform,
        '--card-glow': project.glowColor,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated Rotating Border Beam */}
      <div className="border-beam-spinner" aria-hidden="true" />

      {/* Glare Sheen Layer */}
      <div
        className="card-glare-layer"
        style={{
          background: `radial-gradient(circle at ${tiltStyle.glarePos.x}% ${tiltStyle.glarePos.y}%, rgba(255,255,255,${tiltStyle.glarePos.opacity}), transparent 65%)`,
        }}
        aria-hidden="true"
      />

      {/* Card Browser Chrome Top Bar */}
      <div className="card-browser-bar">
        <div className="traffic-lights">
          <span className="tl-dot tl-red" />
          <span className="tl-dot tl-yellow" />
          <span className="tl-dot tl-green" />
        </div>
        <div className="card-url-pill">
          <span className="ssl-lock">🔒</span>
          <span className="url-label">{project.displayUrl}</span>
        </div>
        <div className="card-ping-badge">
          <span className="pulse-radar-dot"></span>
          <span>{project.latency}</span>
        </div>
      </div>

      {/* Card Visual Hero Stage */}
      <div className="card-media-stage" onClick={onOpenDetails}>
        <img
          src={project.previewImg}
          alt={`${project.title} Preview`}
          className="card-preview-thumb"
          loading="lazy"
        />

        {/* Hover Action Scrim */}
        <div className="card-hover-scrim">
          <div className="scrim-actions">
            <button
              type="button"
              className="btn-scrim-preview"
              onClick={(e) => {
                e.stopPropagation();
                onOpenDetails();
              }}
            >
              <span>🔍 Architecture Specs</span>
            </button>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-scrim-live"
              onClick={(e) => e.stopPropagation()}
              style={{ background: project.accentGradient }}
            >
              <span>Launch Live Site ↗</span>
            </a>
          </div>
        </div>

        {/* Floating Category Badge */}
        <div className="card-floating-badge" style={{ background: project.accentGradient }}>
          <span>{project.badge}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="card-body">
        <div className="card-header-row">
          <div className="card-title-lockup">
            <h3 className="card-title">{project.title}</h3>
            <span className="card-category-text">{project.categoryLabel}</span>
          </div>
          <div className="card-status-pill">
            <span className="pulse-radar-dot"></span>
            <span>LIVE</span>
          </div>
        </div>

        <p className="card-desc">{project.subtitle}</p>

        {/* Key Real-Time Metrics Strip */}
        <div className="card-metrics-strip">
          {project.metrics.map((metric) => (
            <div className="card-metric-cell" key={metric.label}>
              <strong className="metric-val" style={{ color: project.accentColor }}>{metric.value}</strong>
              <span className="metric-lbl">{metric.label}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="card-tags-row">
          {project.tags.slice(0, 4).map(t => (
            <span className="card-tech-tag" key={t}>{t}</span>
          ))}
          {project.tags.length > 4 && (
            <span className="card-tech-tag tag-more">+{project.tags.length - 4}</span>
          )}
        </div>

        {/* Bottom CTA Row */}
        <div className="card-footer-actions">
          <button
            type="button"
            className="btn-details-link"
            onClick={onOpenDetails}
          >
            <span>Case Study &amp; Specs</span>
            <span className="chevron">&rarr;</span>
          </button>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-live-external"
            style={{ borderColor: project.accentColor, color: project.accentColor }}
          >
            <span>Visit Live ↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}
