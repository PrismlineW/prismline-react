import { useState, useEffect, useRef } from 'react';

const GRAIL_PROJECTS = [
  {
    id: 'beebot-ai',
    number: '01',
    projectTag: 'Project 01',
    topicLabel: 'About AI & Automation',
    title: 'BeeBot AI',
    guildTitle: 'AUTONOMOUS AI SAAS',
    questTitle: 'Sub-50ms conversational support with real-time vector RAG ingestion.',
    questSub:
      'Engineered an embeddable customer agent that autonomously ingests documentation, crawls URLs, and delivers instant streaming inference with live Slack escalation.',
    philosophicalCallout:
      'Most customer support bots are slow, clunky iframe widgets that stutter and destroy website performance scores.',
    philosophicalDetail:
      'We architected BeeBot on an edge serverless framework with custom vector embeddings. Token streams render at 60 FPS with zero layout shift. When emotional customer signals are detected, conversations escalate immediately to live human agents via Slack webhooks.',
    url: 'https://beebot-ai.vercel.app',
    displayUrl: 'beebot-ai.vercel.app',
    realImg: '/assets/images/projects/beebot-real.png',
    ghostWatermark: 'BEEBOT AI',
    theme: {
      bg: '#050508', // Deep obsidian void
      text: '#FFFFFF',
      textMuted: '#94A3B8',
      accent: '#F59E0B',
      accentGradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
      cardBg: '#FFFFFF',
      cardText: '#0F172A',
      cardSub: '#475569',
      hairline: 'rgba(245, 158, 11, 0.22)',
      badgeBg: 'rgba(245, 158, 11, 0.14)',
      crestColor: '#D97706',
    },
    deliverables: [
      'Sub-50ms streaming token inference with zero layout shifts',
      'Autonomous website documentation crawler with vector chunking',
      'Real-time Slack webhooks for live agent conversation handoff',
      'Exportable conversation analytics and customer sentiment logs',
    ],
    stats: [
      { label: 'Edge Latency', value: '< 40ms' },
      { label: 'Vector Accuracy', value: '100%' },
    ],
    tech: ['React', 'Vite', 'OpenAI API', 'Vector Embeddings', 'TailwindCSS'],
  },
  {
    id: 'sri-bakes',
    number: '02',
    projectTag: 'Project 02',
    topicLabel: 'About D2C E-Commerce',
    title: 'Sri Bakes Chennai',
    guildTitle: 'ARTISANAL D2C STOREFRONT',
    questTitle: 'High-conversion artisanal storefront with instant WhatsApp order synthesis.',
    questSub:
      'Built a lightning-fast digital storefront for one of Chennai’s premier artisanal bakeries. Sub-second image galleries and an automated WhatsApp checkout drawer.',
    philosophicalCallout:
      'E-commerce brands lose thousands of dollars each month to recurring Shopify fees and bloated third-party plugins.',
    philosophicalDetail:
      'We built Sri Bakes with Next.js 14 server components, sub-400ms edge asset delivery, and an automated WhatsApp inquiry drawer that synthesizes cake specs into ready-to-bake kitchen slips. The client owns 100% of their platform with zero monthly platform tax.',
    url: 'https://www.sribakeschennai.com',
    displayUrl: 'sribakeschennai.com',
    realImg: '/assets/images/projects/sribakes-real.png',
    ghostWatermark: 'SRI BAKES',
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
      crestColor: '#6E2A8D',
    },
    deliverables: [
      'Sub-400ms First Contentful Paint with Next.js image optimization',
      'Custom cake inquiry drawer with automated WhatsApp message synthesis',
      'Dynamic multi-category galleries (Weddings, Birthdays, Kids, Brownies)',
      'Zero monthly Shopify subscription fees — 100% proprietary code',
    ],
    stats: [
      { label: 'Core Web Vitals', value: '99+' },
      { label: 'Monthly SaaS Cut', value: '₹0' },
    ],
    tech: ['Next.js 14', 'React', 'TailwindCSS', 'WhatsApp Webhooks', 'High-Res CDN'],
  },
  {
    id: 'resume-labs',
    number: '03',
    projectTag: 'Project 03',
    topicLabel: 'About Productivity Tools',
    title: 'Resume Labs',
    guildTitle: 'CAREER PRODUCTIVITY SAAS',
    questTitle: 'Split-screen reactive resume builder with live vector PDF synthesis.',
    questSub:
      'Developed a responsive, dual-pane application that renders typographic templates in real time at 60 FPS with private client-side vector PDF compilation.',
    philosophicalCallout:
      'Traditional resume builders trap candidate personal data on remote databases and charge predatory subscriptions for blurry raster exports.',
    philosophicalDetail:
      'Resume Labs compiles mathematically crisp vector PDFs directly inside browser memory via client-side WebAssembly. Candidate data never leaves local storage, rendering with 0.00 Cumulative Layout Shift and guaranteed enterprise ATS compliance.',
    url: 'https://resume-labs.vercel.app',
    displayUrl: 'resume-labs.vercel.app',
    realImg: '/assets/images/projects/resume-real.png',
    ghostWatermark: 'RESUME LABS',
    theme: {
      bg: '#08121A', // Twilight obsidian & sapphire
      text: '#FFFFFF',
      textMuted: '#7DD3FC',
      accent: '#0284C7',
      accentGradient: 'linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)',
      cardBg: '#FFFFFF',
      cardText: '#0F172A',
      cardSub: '#475569',
      hairline: 'rgba(2, 132, 199, 0.25)',
      badgeBg: 'rgba(2, 132, 199, 0.16)',
      crestColor: '#0284C7',
    },
    deliverables: [
      'Split-screen reactive layout synchronized at 60 frames per second',
      'Client-side print-grade vector PDF generation with zero backend storage',
      'ATS-validated typography formatting to maximize candidate callback rates',
      '0.00 Cumulative Layout Shift (CLS) on all modern desktop & mobile browsers',
    ],
    stats: [
      { label: 'CLS Layout Shift', value: '0.00' },
      { label: 'ATS Compliance', value: '100%' },
    ],
    tech: ['React', 'Vite', 'Client PDF Engine', 'TailwindCSS', 'Vector Fonts'],
  },
];

export default function VisionInActionShowcase() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const stageRef = useRef(null);

  const currentProject = GRAIL_PROJECTS[activeProjectIndex];

  // Interactive 3D mouse tilt physics on active card
  const handleMouseMove = (e) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    // Dampened tilt between -8 and 8 degrees
    const tiltY = (mouseX / (rect.width / 2)) * 7;
    const tiltX = -(mouseY / (rect.height / 2)) * 7;
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
        setActiveProjectIndex((prev) => (prev + 1) % GRAIL_PROJECTS.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveProjectIndex((prev) => (prev - 1 + GRAIL_PROJECTS.length) % GRAIL_PROJECTS.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section
      className="grail-via-section"
      id="vision-in-action"
      style={{
        backgroundColor: currentProject.theme.bg,
        color: currentProject.theme.text,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Giant Ghosted Watermark */}
      <div className="grail-bg-watermark" aria-hidden="true">
        {currentProject.ghostWatermark}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Top Meta Header Row (Grail Project & Topic Badges) */}
        <div className="grail-top-meta-row">
          <div className="grail-topic-label" style={{ color: currentProject.theme.textMuted }}>
            <span style={{ color: currentProject.theme.accent }}>✦</span>
            <span>{currentProject.topicLabel}</span>
          </div>

          <div
            className="grail-chapter-indicator"
            style={{ borderColor: currentProject.theme.hairline }}
          >
            <span style={{ color: currentProject.theme.accent }}>●</span>
            <span>{currentProject.projectTag} OF 03</span>
          </div>
        </div>

        {/* Giant PP Pangaia Serif Headline */}
        <div className="grail-headline-wrap">
          <div className="grail-kicker-strip" style={{ color: currentProject.theme.accent }}>
            VERIFIED PRODUCTION SHOWREEL &bull; CLIENT BUILDS
          </div>
          <h1 className="grail-main-headline">Vision in Action</h1>
          <p className="grail-headline-sub" style={{ color: currentProject.theme.textMuted }}>
            Three handcrafted live production platforms. Real client software engineered with zero bloated templates and shipped live to the world.
          </p>
        </div>

        {/* 3D Perspective Card Stage (Orbit Carousel with Background Heraldic Cards) */}
        <div className="grail-3d-stage via-stage" ref={stageRef}>
          {/* Background Floating Heraldic Cards in 3D Depth (Grail Aesthetic) */}
          <div className="grail-heraldic-card card-bg-1" aria-hidden="true" />
          <div className="grail-heraldic-card card-bg-2" aria-hidden="true" />
          <div className="grail-heraldic-card card-bg-3" aria-hidden="true" />
          <div className="grail-heraldic-card card-bg-4" aria-hidden="true" />

          {GRAIL_PROJECTS.map((project, index) => {
            const diff = index - activeProjectIndex;
            const isActive = diff === 0;

            // Compute 3D arc position
            let transformStyle = '';
            let opacity = 0.25;
            let zIndex = 1;
            let filter = 'blur(4px)';

            if (isActive) {
              transformStyle = `perspective(1200px) translate3d(0, 0, 90px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1)`;
              opacity = 1;
              zIndex = 10;
              filter = 'none';
            } else if (diff === 1 || diff === -2) {
              // Right flanking card
              transformStyle = `perspective(1200px) translate3d(380px, 20px, -150px) rotateY(-24deg) scale(0.84)`;
              opacity = 0.5;
              zIndex = 5;
              filter = 'blur(1px)';
            } else if (diff === -1 || diff === 2) {
              // Left flanking card
              transformStyle = `perspective(1200px) translate3d(-380px, 20px, -150px) rotateY(24deg) scale(0.84)`;
              opacity = 0.5;
              zIndex = 5;
              filter = 'blur(1px)';
            }

            return (
              <div
                key={project.id}
                className={`grail-card-3d-anchor via-card-anchor ${isActive ? 'is-active' : ''}`}
                style={{
                  transform: transformStyle,
                  opacity,
                  zIndex,
                  filter,
                }}
                onClick={() => setActiveProjectIndex(index)}
              >
                <div
                  className="grail-physical-card via-physical-card"
                  onMouseEnter={() => isActive && setIsHovered(true)}
                  onMouseLeave={() => isActive && setIsHovered(false)}
                >
                  {/* Heraldic Shield Badge with Authentic Grail SVG Mark */}
                  <div className="via-card-top-bar">
                    <div
                      className="grail-crest-badge"
                      style={{
                        background: project.theme.badgeBg,
                        color: project.theme.crestColor,
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

                    <span className="grail-guild-kicker" style={{ color: project.theme.accent }}>
                      {project.guildTitle}
                    </span>
                  </div>

                  {/* Primary Project Title & Challenge */}
                  <h3 className="grail-quest-title via-title">{project.title}</h3>
                  <p className="grail-quest-desc via-desc">{project.questTitle}</p>

                  {/* Real Live Screenshot Inside Clean Desktop Browser Mockup */}
                  <div className="via-browser-preview">
                    <div className="via-browser-dots">
                      <span className="dot dot-r" />
                      <span className="dot dot-y" />
                      <span className="dot dot-g" />
                      <span className="via-domain-pill">🔒 {project.displayUrl}</span>
                    </div>
                    <img
                      src={project.realImg}
                      alt={`${project.title} Real Live Website Screenshot`}
                      className="via-screenshot-img"
                      loading="lazy"
                    />
                  </div>

                  {/* Key Deliverables Pillbox */}
                  <div className="grail-deliverables-pillbox via-deliv-box">
                    <div className="grail-deliv-header">✦ VERIFIED DELIVERABLES</div>
                    <ul className="grail-deliv-list">
                      {project.deliverables.slice(0, 3).map((item, i) => (
                        <li key={i} className="grail-deliv-item">
                          <span className="grail-check" style={{ color: project.theme.crestColor }}>
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Stats & Launch CTA */}
                  <div className="grail-card-footer via-card-footer">
                    <div className="grail-stat-chip">
                      <span className="grail-stat-val">{project.stats[0].value}</span>
                      <span className="grail-stat-lbl">{project.stats[0].label}</span>
                    </div>

                    <div className="grail-stat-chip">
                      <span className="grail-stat-val" style={{ color: project.theme.crestColor }}>
                        {project.stats[1].value}
                      </span>
                      <span className="grail-stat-lbl">{project.stats[1].label}</span>
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="via-launch-btn"
                      style={{ background: project.theme.accentGradient }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Visit Live ↗</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial 2-Column Split Narrative (Grail Bottom Section) */}
        <div
          className="grail-editorial-split"
          style={{ borderColor: currentProject.theme.hairline }}
        >
          <div className="ges-col-left">
            <span
              className="ges-label"
              style={{ color: currentProject.theme.accent }}
            >
              PROVOCATION &bull; {currentProject.projectTag}
            </span>
            <p className="ges-callout">{currentProject.philosophicalCallout}</p>
          </div>

          <div className="ges-col-right">
            <span
              className="ges-label"
              style={{ color: currentProject.theme.textMuted }}
            >
              TECHNICAL ARCHITECTURE &bull; {currentProject.displayUrl}
            </span>
            <p className="ges-detail" style={{ color: currentProject.theme.textMuted }}>
              {currentProject.philosophicalDetail}
            </p>

            {/* Tech Stack Tags */}
            <div className="via-tech-tags-wrap" style={{ marginTop: '1rem', display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
              {currentProject.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: currentProject.theme.text,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Lifetime Anytime Rectification Warranty Trust Card */}
        <div
          className="via-grail-trust-banner"
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
            border: `1px solid ${currentProject.theme.hairline}`,
            borderRadius: '20px',
            padding: '2rem 2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap',
            marginBottom: '4rem',
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '1.25rem' }}>🛡️</span>
              <strong style={{ fontFamily: 'PP Pangaia', fontSize: '1.3rem', textTransform: 'uppercase' }}>
                Lifetime Anytime Rectification Warranty
              </strong>
            </div>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.6, opacity: 0.8 }}>
              Every client platform we build is backed by an unconditional defect-fix guarantee. If any styling flaw, layout defect, or broken flow ever appears in the code we built for you, our senior engineers rectify and patch it immediately at ₹0 extra charge.
            </p>
          </div>

          <a
            href="tel:9952934596"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.6rem',
              borderRadius: '9999px',
              background: '#FFFFFF',
              color: '#0F172A',
              fontWeight: 800,
              fontSize: '0.88rem',
              textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            }}
          >
            <span>📞 Senior Engineer: +91 99529 34596</span>
          </a>
        </div>

        {/* Floating Bottom Capsule HUD (Grail Persistent Controller) */}
        <div className="grail-capsule-hud">
          <div className="grail-hud-brand">
            <span style={{ color: currentProject.theme.accent }}>✦</span>
            <span>PRISMLINE</span>
          </div>

          <div className="grail-chapter-pills">
            {GRAIL_PROJECTS.map((proj, idx) => (
              <button
                key={proj.id}
                type="button"
                className={`grail-chap-btn ${activeProjectIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveProjectIndex(idx)}
              >
                {proj.number} {proj.title}
              </button>
            ))}
          </div>

          <div className="grail-nav-arrows">
            <button
              type="button"
              className="grail-arrow-btn"
              onClick={() =>
                setActiveProjectIndex(
                  (prev) => (prev - 1 + GRAIL_PROJECTS.length) % GRAIL_PROJECTS.length
                )
              }
              aria-label="Previous Project"
            >
              &larr;
            </button>
            <button
              type="button"
              className="grail-arrow-btn"
              onClick={() =>
                setActiveProjectIndex((prev) => (prev + 1) % GRAIL_PROJECTS.length)
              }
              aria-label="Next Project"
            >
              &rarr;
            </button>
          </div>

          <a
            href={currentProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="grail-hud-cta"
          >
            <span>Open {currentProject.displayUrl} ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
