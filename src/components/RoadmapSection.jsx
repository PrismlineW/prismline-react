import { Link } from 'react-router-dom';
import { useScrollStory } from '../hooks/useScrollStory';
import {
  Stage1BlueprintVector,
  Stage2CodeVector,
  Stage3AuditVector,
  Stage4LaunchVector,
} from './RoadmapVectors';

export default function RoadmapSection() {
  useScrollStory();

  const stepsData = [
    {
      step: '01',
      phaseTag: 'STAGE 01',
      duration: 'PLANNING & SCOPING',
      title: 'Discovery & Architectural Blueprint',
      lead: 'We clarify your business goals, target audience, and website features with an honest fixed-price proposal — zero hidden costs or surprises.',
      accentColor: '#0284C7',
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
      {/* Clean Architectural Blueprint Backdrop */}
      <div className="roadmap-engineering-backdrop" aria-hidden="true" />

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

          {/* Roadmap Steps 01-04: Standard 3-Column Alternating Grid Layout */}
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

                  {/* Ultra-Realistic 3D Floating Interactive Model with Dynamic Background Animation */}
                  <div className="roadmap-task-stage-col">
                    {/* Stage-Specific Dynamic Background Animation */}
                    <div className={`stage-bg-anim stage-bg-anim-${step.step}`} aria-hidden="true">
                      {step.step === '01' && (
                        <div className="stage-anim-blueprint">
                          <div className="blueprint-glow-mesh"></div>
                          <div className="blueprint-crosshair crosshair-tl">+</div>
                          <div className="blueprint-crosshair crosshair-tr">+</div>
                          <div className="blueprint-crosshair crosshair-bl">+</div>
                          <div className="blueprint-crosshair crosshair-br">+</div>
                          <div className="blueprint-cad-circle cad-c1"></div>
                          <div className="blueprint-cad-circle cad-c2"></div>
                          <div className="blueprint-measure-line line-h"></div>
                          <div className="blueprint-measure-line line-v"></div>
                        </div>
                      )}
                      {step.step === '02' && (
                        <div className="stage-anim-code">
                          <div className="code-glow-mesh"></div>
                          <span className="code-float-token token-1">&lt;/&gt;</span>
                          <span className="code-float-token token-2">&#123; &#125;</span>
                          <span className="code-float-token token-3">=&gt;</span>
                          <span className="code-float-token token-4">const</span>
                          <div className="code-energy-wave wave-1"></div>
                          <div className="code-energy-wave wave-2"></div>
                        </div>
                      )}
                      {step.step === '03' && (
                        <div className="stage-anim-security">
                          <div className="security-glow-mesh"></div>
                          <div className="radar-sweep-ring ring-1"></div>
                          <div className="radar-sweep-ring ring-2"></div>
                          <div className="radar-sweep-ring ring-3"></div>
                          <div className="radar-scanner-beam"></div>
                        </div>
                      )}
                      {step.step === '04' && (
                        <div className="stage-anim-launch">
                          <div className="launch-glow-mesh"></div>
                          <div className="launch-orbit-ring orbit-1"></div>
                          <div className="launch-orbit-ring orbit-2"></div>
                          <span className="launch-sparkle sparkle-1">✦</span>
                          <span className="launch-sparkle sparkle-2">✧</span>
                          <span className="launch-sparkle sparkle-3">✦</span>
                          <div className="launch-speed-line sline-1"></div>
                          <div className="launch-speed-line sline-2"></div>
                        </div>
                      )}
                    </div>

                    <div className="roadmap-3d-stage">
                      <div className="stage-3d-card-inner">
                        <div
                          className="stage-3d-ambient-glow"
                          style={{ '--stage-glow-color': step.accentColor }}
                        ></div>
                        <div className="stage-3d-artwork-container">
                          {step.step === '01' && <Stage1BlueprintVector />}
                          {step.step === '02' && <Stage2CodeVector />}
                          {step.step === '03' && <Stage3AuditVector />}
                          {step.step === '04' && <Stage4LaunchVector />}
                        </div>
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
