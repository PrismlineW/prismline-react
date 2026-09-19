import { useEffect } from 'react';

export default function RoadmapSection() {
  const stepsData = [
    {
      step: '01',
      phaseTag: 'PHASE 01 // INITIATION',
      duration: 'DAY 01 – 03',
      title: 'Discovery & Architectural Blueprint',
      lead: 'We clarify business targets, map user journeys, and eliminate hidden costs with a transparent fixed-price blueprint.',
      accentColor: '#0284C7',
      deliverables: [
        'Clear scope definition with fixed-price transparent quotation',
        'User journey & responsive UI wireframe planning',
        'OWASP Top-10 secure architecture blueprint',
      ],
      badge: 'Fixed-Price Scoping',
    },
    {
      step: '02',
      phaseTag: 'PHASE 02 // SECURE ENGINEERING',
      duration: 'DAY 04 – 12',
      title: 'Modern Web Design & Core Development',
      lead: 'Clean, high-speed frontend interfaces paired with resilient backend logic. Security headers and input sanitization baked in from day one.',
      accentColor: '#FF5722',
      deliverables: [
        'Mobile-first responsive UI crafted with modern React & CSS',
        'SQL injection & XSS immunity via parameterized boundaries',
        '100% intellectual property & modular source code handover',
      ],
      badge: 'Zero-Vulnerability Code',
    },
    {
      step: '03',
      phaseTag: 'PHASE 03 // ZERO-TRUST QA',
      duration: 'DAY 13 – 16',
      title: 'Speed Optimization & Penetration Audit',
      lead: 'Rigorous cross-device quality assurance, Core Web Vitals acceleration, and end-to-end security penetration testing before launch.',
      accentColor: '#D50000',
      deliverables: [
        'Mobile responsiveness & cross-browser audit across Chrome, Safari & iOS',
        'Core Web Vitals acceleration targeting 95+ PageSpeed scores',
        'TLS 1.3, CSP Level 3, and strict CORS origin verification',
      ],
      badge: '0.4s Sub-Second LCP',
    },
    {
      step: '04',
      phaseTag: 'PHASE 04 // LIFETIME SLA',
      duration: 'LAUNCH & BEYOND',
      title: 'Zero-Downtime Launch & Rectification SLA',
      lead: 'Seamless deployment to GoDaddy, cPanel, AWS, or Docker, backed by our anytime rectification guarantee for permanent peace of mind.',
      accentColor: '#10B981',
      deliverables: [
        'Zero-downtime DNS propagation & server deployment',
        'Direct hotline to senior engineering: +91 99529 34596',
        'Anytime Rectification Guarantee: defect fixes at zero extra cost',
      ],
      badge: '100% Warranty SLA',
    },
  ];

  return (
    <section className="roadmap-experience-section" id="roadmap-flow">
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
              </defs>

              {/* Highway Outer Soft Glow Verge */}
              <path
                className="highway-outer-kerb"
                d="M 120,20 C 75,140 70,240 95,360 C 120,480 165,580 145,720 C 125,860 75,960 95,1100 C 115,1240 165,1340 145,1460 C 130,1540 122,1575 120,1600"
                stroke="url(#roadTaskGradient)"
                strokeWidth="44"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.15"
              />

              {/* Deep Asphalt Road Track */}
              <path
                id="roadmap-asphalt-path"
                className="highway-asphalt"
                d="M 120,20 C 75,140 70,240 95,360 C 120,480 165,580 145,720 C 125,860 75,960 95,1100 C 115,1240 165,1340 145,1460 C 130,1540 122,1575 120,1600"
                stroke="#1E293B"
                strokeWidth="34"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#roadAmbientShadow)"
              />

              {/* Highway Outer White Boundary Marking */}
              <path
                className="highway-edge-lane"
                d="M 120,20 C 75,140 70,240 95,360 C 120,480 165,580 145,720 C 125,860 75,960 95,1100 C 115,1240 165,1340 145,1460 C 130,1540 122,1575 120,1600"
                stroke="rgba(255, 255, 255, 0.35)"
                strokeWidth="30"
                strokeDasharray="4 12"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />

              {/* Highway Dashed Center Lane Divider */}
              <path
                className="highway-dashed-lane"
                d="M 120,20 C 75,140 70,240 95,360 C 120,480 165,580 145,720 C 125,860 75,960 95,1100 C 115,1240 165,1340 145,1460 C 130,1540 122,1575 120,1600"
                stroke="#FBBF24"
                strokeWidth="2.5"
                strokeDasharray="8 10"
                fill="none"
                strokeLinecap="round"
                opacity="0.9"
              />

              {/* Dynamic Laser Progress Stream (scrubs down curve on scroll) */}
              <path
                id="roadmap-curve-path"
                className="highway-active-laser"
                d="M 120,20 C 75,140 70,240 95,360 C 120,480 165,580 145,720 C 125,860 75,960 95,1100 C 115,1240 165,1340 145,1460 C 130,1540 122,1575 120,1600"
                stroke="url(#roadTaskGradient)"
                strokeWidth="4.5"
                fill="none"
                strokeLinecap="round"
              />

              {/* Checkered Finish Line at Destination */}
              <line x1="102" y1="1575" x2="138" y2="1575" stroke="#FFFFFF" strokeWidth="4" strokeDasharray="4 4" />

              {/* Luminous Road Traveler Beacon (Replaces cartoon bike) */}
              <g id="roadmap-bike-rider" className="roadmap-traveler-beacon" transform="translate(120, 20)">
                {/* Projecting Forward Headlight Cone */}
                <polygon points="-7,-5 7,-5 20,-55 -20,-55" fill="rgba(254, 240, 138, 0.45)" />

                {/* Lateral Reactive Energy Trails */}
                <line x1="-8" y1="6" x2="-8" y2="20" stroke="#FF5722" strokeWidth="2" strokeDasharray="3 3" opacity="0.8" />
                <line x1="8" y1="6" x2="8" y2="20" stroke="#FF5722" strokeWidth="2" strokeDasharray="3 3" opacity="0.8" />

                {/* Aerodynamic Tracer Chassis */}
                <rect x="-5.5" y="-11" width="11" height="22" rx="5.5" fill="#0F172A" stroke="#FFFFFF" strokeWidth="1.5" />

                {/* Radiant Core Gem */}
                <circle cx="0" cy="0" r="4" fill="#FF5722" />
                <circle cx="0" cy="0" r="1.8" fill="#FFFFFF" />

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
                  {/* Highway Milestone Anchor Node in Center Spine */}
                  <div className="roadmap-node-anchor">
                    <div className="roadmap-milestone-node">
                      <span className="node-number">{step.step}</span>
                      <div className="node-pulse-ring"></div>
                    </div>
                  </div>

                  {/* Borderless Floating Editorial Story Track */}
                  <div className="roadmap-editorial-track">
                    <div className="editorial-meta-row">
                      <span className="editorial-phase-tag">{step.phaseTag}</span>
                      <span className="editorial-duration-tag">{step.duration}</span>
                    </div>

                    <h3 className="editorial-heading">{step.title}</h3>
                    <p className="editorial-lead">{step.lead}</p>

                    {/* Key Deliverables with Animated Checkmarks */}
                    <div className="editorial-deliverables-group">
                      <div className="deliv-kicker-label">✦ KEY DELIVERABLES:</div>
                      <ul className="deliv-items-list">
                        {step.deliverables.map((item, i) => (
                          <li key={i} className="deliv-item">
                            <span className="deliv-check-bullet" style={{ color: step.accentColor }}>✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Status Pill Badge (Zero Emojis, Sleek Glowing Bullet) */}
                    <div className="editorial-footer-row">
                      <span className="editorial-badge-pill" style={{ borderColor: `${step.accentColor}45`, color: step.accentColor, background: `${step.accentColor}0D` }}>
                        <span className="badge-glowing-dot" style={{ background: step.accentColor }}></span>
                        {step.badge}
                      </span>
                      <span className="editorial-sprint-link">
                        Sprint {step.step} Active &rarr;
                      </span>
                    </div>
                  </div>

                  {/* Animated Cartoon Action Stage (NO AI templates, NO rectangular text boxes) */}
                  <div className="roadmap-task-stage-col">
                    {/* PHASE 01: Cartoon Blueprint Architect Scene */}
                    {step.step === '01' && (
                      <div className="roadmap-cartoon-stage cartoon-blueprint-stage">
                        <svg viewBox="0 0 360 280" className="cartoon-scene-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id="charSkinGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#FED7AA" />
                              <stop offset="100%" stopColor="#FDBA74" />
                            </linearGradient>
                          </defs>

                          {/* Ground Soft Ambient Shadow */}
                          <ellipse cx="180" cy="252" rx="130" ry="16" fill="#E2E8F0" opacity="0.6" />

                          {/* Modern Architect Drafting Desk */}
                          <path d="M 60,215 L 300,215 L 285,238 L 75,238 Z" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="2" />
                          <line x1="85" y1="238" x2="78" y2="262" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
                          <line x1="275" y1="238" x2="282" y2="262" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />

                          {/* Angled Futuristic Blueprint Drafting Tablet */}
                          <g transform="rotate(-6 75 115)">
                            <rect x="75" y="115" width="165" height="100" rx="8" fill="#F0F9FF" stroke="#0284C7" strokeWidth="2.5" />
                            {/* Blueprint Grid Lines */}
                            <line x1="90" y1="135" x2="225" y2="135" stroke="#BAE6FD" strokeWidth="1" strokeDasharray="3 3" />
                            <line x1="90" y1="155" x2="225" y2="155" stroke="#BAE6FD" strokeWidth="1" strokeDasharray="3 3" />
                            <line x1="90" y1="175" x2="225" y2="175" stroke="#BAE6FD" strokeWidth="1" strokeDasharray="3 3" />
                            <line x1="90" y1="195" x2="225" y2="195" stroke="#BAE6FD" strokeWidth="1" strokeDasharray="3 3" />
                            <line x1="120" y1="125" x2="120" y2="205" stroke="#BAE6FD" strokeWidth="1" strokeDasharray="3 3" />
                            <line x1="160" y1="125" x2="160" y2="205" stroke="#BAE6FD" strokeWidth="1" strokeDasharray="3 3" />
                            <line x1="200" y1="125" x2="200" y2="205" stroke="#BAE6FD" strokeWidth="1" strokeDasharray="3 3" />

                            {/* Blueprint Schematic Drawn Wireframes */}
                            <rect x="95" y="130" width="125" height="22" rx="4" fill="#0284C7" opacity="0.18" stroke="#0284C7" strokeWidth="1.5" />
                            <rect x="95" y="160" width="58" height="42" rx="4" fill="#38BDF8" opacity="0.15" stroke="#0284C7" strokeWidth="1.2" />
                            <rect x="162" y="160" width="58" height="42" rx="4" fill="#38BDF8" opacity="0.15" stroke="#0284C7" strokeWidth="1.2" />
                            
                            {/* Animated Glowing Blueprint Active Draft Line */}
                            <path className="cartoon-drawn-line" d="M 100,141 L 180,141" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
                          </g>

                          {/* Holographic 3D Floating Rotating Wireframe Cube */}
                          <g className="cartoon-holo-cube" transform="translate(265, 80)">
                            <polygon points="0,-24 24,-12 0,0 -24,-12" fill="rgba(56, 189, 248, 0.3)" stroke="#0284C7" strokeWidth="2" />
                            <polygon points="-24,-12 0,0 0,24 -24,12" fill="rgba(2, 132, 199, 0.4)" stroke="#0284C7" strokeWidth="2" />
                            <polygon points="0,0 24,-12 24,12 0,24" fill="rgba(14, 165, 233, 0.5)" stroke="#0284C7" strokeWidth="2" />
                            <circle cx="0" cy="0" r="3.5" fill="#FFFFFF" />
                            {/* Orbiting Sparkles */}
                            <circle cx="-16" cy="-16" r="2" fill="#0284C7" className="star-pulse" />
                            <circle cx="20" cy="16" r="2.2" fill="#38BDF8" className="star-pulse" />
                          </g>

                          {/* Cartoon Architect Character */}
                          <g className="cartoon-architect-char">
                            {/* Body / Navy Polo */}
                            <path d="M 195,195 C 190,165 210,145 235,145 C 260,145 280,165 275,195 Z" fill="#0284C7" />
                            <polygon points="230,145 240,145 235,155" fill="#FFFFFF" />

                            {/* Head */}
                            <circle cx="235" cy="115" r="26" fill="url(#charSkinGrad1)" stroke="#EA580C" strokeWidth="1.5" />
                            {/* Stylized Hair */}
                            <path d="M 210,110 C 210,88 230,82 252,88 C 264,92 266,105 264,112 C 255,100 245,96 232,98 C 220,100 215,106 210,110 Z" fill="#334155" />
                            
                            {/* Eyeglasses */}
                            <rect x="218" y="108" width="13" height="10" rx="3" fill="none" stroke="#0F172A" strokeWidth="2" />
                            <rect x="239" y="108" width="13" height="10" rx="3" fill="none" stroke="#0F172A" strokeWidth="2" />
                            <line x1="231" y1="113" x2="239" y2="113" stroke="#0F172A" strokeWidth="2" />
                            
                            {/* Smiling Eyes */}
                            <path d="M 221,113 Q 225,110 228,113" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                            <path d="M 242,113 Q 246,110 249,113" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                            
                            {/* Cheerful Smile */}
                            <path d="M 230,126 Q 235,131 240,126" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" fill="none" />
                            
                            {/* Rosy Cheeks */}
                            <ellipse cx="218" cy="122" rx="3.5" ry="2" fill="#F43F5E" opacity="0.4" />
                            <ellipse cx="252" cy="122" rx="3.5" ry="2" fill="#F43F5E" opacity="0.4" />

                            {/* Left Arm Resting on desk */}
                            <path d="M 205,160 Q 185,178 170,188" stroke="#0284C7" strokeWidth="11" strokeLinecap="round" fill="none" />
                            <circle cx="168" cy="189" r="5.5" fill="#FDBA74" />

                            {/* Right Animated Drafting Arm */}
                            <g className="cartoon-drafting-arm">
                              <path d="M 255,160 Q 225,165 195,155" stroke="#0284C7" strokeWidth="11" strokeLinecap="round" fill="none" />
                              <circle cx="193" cy="154" r="5.5" fill="#FDBA74" />
                              {/* Stylus / Digital Pencil */}
                              <polygon points="190,150 168,142 165,145 188,154" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
                              <polygon points="168,142 162,140 165,145" fill="#0F172A" />
                              <circle cx="162" cy="140" r="3" fill="#38BDF8" className="stylus-glow" />
                            </g>
                          </g>

                          {/* Floating Dimension Calliper Tag */}
                          <g className="cartoon-floating-ruler" transform="translate(60, 65)">
                            <rect x="0" y="0" width="76" height="20" rx="6" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.5" />
                            <line x1="12" y1="0" x2="12" y2="8" stroke="#854D0E" strokeWidth="1.5" />
                            <line x1="26" y1="0" x2="26" y2="6" stroke="#854D0E" strokeWidth="1.2" />
                            <line x1="40" y1="0" x2="40" y2="8" stroke="#854D0E" strokeWidth="1.5" />
                            <line x1="54" y1="0" x2="54" y2="6" stroke="#854D0E" strokeWidth="1.2" />
                            <line x1="66" y1="0" x2="66" y2="8" stroke="#854D0E" strokeWidth="1.5" />
                            <text x="38" y="15" textAnchor="middle" fontSize="7" fontFamily="monospace" fontWeight="bold" fill="#854D0E">BLUEPRINT</text>
                          </g>
                        </svg>
                      </div>
                    )}

                    {/* PHASE 02: Cartoon Developer in the Flow Scene */}
                    {step.step === '02' && (
                      <div className="roadmap-cartoon-stage cartoon-code-stage">
                        <svg viewBox="0 0 360 280" className="cartoon-scene-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id="screenGlow2" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#0F172A" />
                              <stop offset="100%" stopColor="#1E293B" />
                            </linearGradient>
                          </defs>

                          {/* Ground Ambient Shadow */}
                          <ellipse cx="180" cy="252" rx="130" ry="16" fill="#E2E8F0" opacity="0.6" />

                          {/* Workstation Desk */}
                          <path d="M 50,210 L 310,210 L 295,234 L 65,234 Z" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="2" />
                          <line x1="75" y1="234" x2="70" y2="262" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
                          <line x1="285" y1="234" x2="290" y2="262" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />

                          {/* Curved Coding Display Monitor */}
                          <rect x="68" y="78" width="175" height="116" rx="10" fill="url(#screenGlow2)" stroke="#334155" strokeWidth="3" />
                          <polygon points="156,194 148,210 166,210" fill="#64748B" />
                          <rect x="135" y="209" width="44" height="4" rx="2" fill="#94A3B8" />

                          {/* Screen Live Code Simulation */}
                          <g className="screen-code-content">
                            <circle cx="82" cy="92" r="3" fill="#EF4444" />
                            <circle cx="91" cy="92" r="3" fill="#F59E0B" />
                            <circle cx="100" cy="92" r="3" fill="#10B981" />

                            <rect x="82" y="105" width="38" height="5" rx="2.5" fill="#F43F5E" />
                            <rect x="126" y="105" width="58" height="5" rx="2.5" fill="#38BDF8" />
                            
                            <rect x="92" y="118" width="68" height="5" rx="2.5" fill="#A78BFA" />
                            <rect x="166" y="118" width="42" height="5" rx="2.5" fill="#34D399" />

                            <rect x="92" y="131" width="52" height="5" rx="2.5" fill="#FBBF24" />
                            <rect x="150" y="131" width="64" height="5" rx="2.5" fill="#38BDF8" />

                            <rect x="82" y="144" width="30" height="5" rx="2.5" fill="#F43F5E" />
                            <rect x="118" y="144" width="42" height="5" rx="2.5" fill="#10B981" />

                            {/* Blinking Terminal Cursor */}
                            <rect className="cartoon-cursor-blink" x="165" y="144" width="6" height="6" fill="#38BDF8" />

                            {/* Terminal Status Pill */}
                            <rect x="82" y="165" width="84" height="15" rx="4" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" strokeWidth="1" />
                            <text x="124" y="176" textAnchor="middle" fontSize="7.5" fontFamily="monospace" fontWeight="bold" fill="#10B981">CI: CLEAN 100%</text>
                          </g>

                          {/* Steaming Coffee Mug */}
                          <g transform="translate(56, 186)">
                            <rect x="0" y="6" width="18" height="18" rx="3" fill="#FF5722" />
                            <path d="M 18,10 C 24,10 24,18 18,18" stroke="#FF5722" strokeWidth="2.5" fill="none" />
                            {/* Animated Steam Trails */}
                            <path className="cartoon-steam-1" d="M 5,3 Q 2,-4 6,-10" stroke="#CBD5E1" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                            <path className="cartoon-steam-2" d="M 12,3 Q 16,-4 11,-10" stroke="#CBD5E1" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                          </g>

                          {/* Cartoon Developer Character */}
                          <g className="cartoon-dev-char">
                            {/* Body / Orange Hoodie */}
                            <path d="M 215,195 C 205,162 228,144 255,144 C 282,144 305,162 295,195 Z" fill="#FF5722" />
                            <path d="M 245,144 L 255,162 L 265,144" stroke="#FFFFFF" strokeWidth="2" fill="none" />

                            {/* Head */}
                            <circle cx="255" cy="116" r="26" fill="#FED7AA" stroke="#EA580C" strokeWidth="1.5" />
                            {/* Trendy Hair */}
                            <path d="M 230,110 C 230,88 250,84 270,88 C 282,92 284,105 282,112 C 272,98 260,95 248,100 Z" fill="#0F172A" />
                            
                            {/* Over-Ear Headphones */}
                            <g className="cartoon-headphones">
                              <path d="M 226,112 C 226,86 284,86 284,112" stroke="#0F172A" strokeWidth="5" fill="none" strokeLinecap="round" />
                              <rect x="222" y="105" width="8" height="18" rx="4" fill="#FF5722" stroke="#0F172A" strokeWidth="1.5" />
                              <rect x="280" y="105" width="8" height="18" rx="4" fill="#FF5722" stroke="#0F172A" strokeWidth="1.5" />
                            </g>

                            {/* Eyes & Smile */}
                            <ellipse cx="243" cy="114" rx="3.5" ry="4" fill="#0F172A" />
                            <circle cx="244.5" cy="112.5" r="1.2" fill="#FFFFFF" />
                            <ellipse cx="261" cy="114" rx="3.5" ry="4" fill="#0F172A" />
                            <circle cx="262.5" cy="112.5" r="1.2" fill="#FFFFFF" />
                            <path d="M 248,125 Q 252,130 258,125" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" fill="none" />
                            <ellipse cx="237" cy="123" rx="3.5" ry="2" fill="#FF5722" opacity="0.35" />
                            <ellipse cx="269" cy="123" rx="3.5" ry="2" fill="#FF5722" opacity="0.35" />

                            {/* Animated Tapping Arms */}
                            <g className="cartoon-typing-arms">
                              <path className="arm-left-type" d="M 225,162 Q 185,180 145,198" stroke="#FF5722" strokeWidth="11" strokeLinecap="round" fill="none" />
                              <circle cx="143" cy="198" r="5.5" fill="#FED7AA" />
                              <path className="arm-right-type" d="M 245,162 Q 205,180 165,198" stroke="#FF5722" strokeWidth="11" strokeLinecap="round" fill="none" />
                              <circle cx="163" cy="198" r="5.5" fill="#FED7AA" />
                            </g>
                          </g>

                          {/* Floating Code Bubbles */}
                          <g className="cartoon-bubble-1" transform="translate(195, 38)">
                            <rect x="0" y="0" width="58" height="22" rx="11" fill="#FFFFFF" stroke="#FF5722" strokeWidth="1.5" />
                            <text x="29" y="15" textAnchor="middle" fontSize="9.5" fontFamily="monospace" fontWeight="bold" fill="#FF5722">&lt;React /&gt;</text>
                          </g>
                          <g className="cartoon-bubble-2" transform="translate(68, 42)">
                            <rect x="0" y="0" width="50" height="22" rx="11" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.5" />
                            <text x="25" y="15" textAnchor="middle" fontSize="9.5" fontFamily="monospace" fontWeight="bold" fill="#0284C7">&#123; SQLi &#125;</text>
                          </g>
                        </svg>
                      </div>
                    )}

                    {/* PHASE 03: Cartoon Speed & Cyber Shield Scene */}
                    {step.step === '03' && (
                      <div className="roadmap-cartoon-stage cartoon-speed-stage">
                        <svg viewBox="0 0 360 280" className="cartoon-scene-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id="speedDialGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#38BDF8" />
                              <stop offset="50%" stopColor="#F59E0B" />
                              <stop offset="100%" stopColor="#D50000" />
                            </linearGradient>
                            <linearGradient id="shieldFillGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="#059669" stopOpacity="0.06" />
                            </linearGradient>
                          </defs>

                          {/* Ground Ambient Shadow */}
                          <ellipse cx="180" cy="252" rx="130" ry="16" fill="#E2E8F0" opacity="0.6" />

                          {/* Supersonic Wind Streaks */}
                          <line x1="30" y1="120" x2="110" y2="120" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="15 10" className="cartoon-wind-1" />
                          <line x1="15" y1="150" x2="85" y2="150" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" strokeDasharray="20 12" className="cartoon-wind-2" />
                          <line x1="45" y1="180" x2="125" y2="180" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeDasharray="12 8" className="cartoon-wind-3" />

                          {/* High-Speed Turbo Speedometer */}
                          <g transform="translate(130, 148)" className="cartoon-speedo-group">
                            <circle cx="0" cy="0" r="62" fill="#0F172A" stroke="#E2E8F0" strokeWidth="4" />
                            <circle cx="0" cy="0" r="54" fill="#1E293B" />

                            {/* Speed Arc */}
                            <path d="M -40,22 A 46,46 0 1,1 40,22" stroke="url(#speedDialGrad3)" strokeWidth="9" strokeLinecap="round" fill="none" />

                            {/* Ticks */}
                            <line x1="-32" y1="18" x2="-26" y2="14" stroke="#94A3B8" strokeWidth="2" />
                            <line x1="-42" y1="-5" x2="-35" y2="-4" stroke="#94A3B8" strokeWidth="2" />
                            <line x1="-30" y1="-28" x2="-25" y2="-23" stroke="#94A3B8" strokeWidth="2" />
                            <line x1="0" y1="-44" x2="0" y2="-36" stroke="#94A3B8" strokeWidth="2" />
                            <line x1="30" y1="-28" x2="25" y2="-23" stroke="#D50000" strokeWidth="2.5" />
                            <line x1="42" y1="-5" x2="35" y2="-4" stroke="#D50000" strokeWidth="2.5" />
                            <line x1="32" y1="18" x2="26" y2="14" stroke="#D50000" strokeWidth="2.5" />

                            {/* Dynamic Revving Red Needle */}
                            <g className="cartoon-gauge-needle">
                              <line x1="0" y1="0" x2="32" y2="-28" stroke="#D50000" strokeWidth="3.5" strokeLinecap="round" />
                              <circle cx="0" cy="0" r="8" fill="#D50000" />
                              <circle cx="0" cy="0" r="3.5" fill="#FFFFFF" />
                            </g>

                            {/* 99 Score Badge */}
                            <rect x="-24" y="8" width="48" height="20" rx="4" fill="#0F172A" stroke="#334155" strokeWidth="1" />
                            <text x="0" y="22" textAnchor="middle" fontSize="13" fontFamily="monospace" fontWeight="900" fill="#10B981">99</text>
                            <text x="0" y="38" textAnchor="middle" fontSize="6.5" fontFamily="monospace" fontWeight="bold" fill="#94A3B8">0.38s LCP</text>
                          </g>

                          {/* Floating Cyber Security Shield */}
                          <g className="cartoon-cyber-shield" transform="translate(42, 55)">
                            <path d="M 35,0 L 70,12 C 70,45 35,65 35,65 C 35,65 0,45 0,12 Z" fill="#FFFFFF" stroke="#10B981" strokeWidth="3" />
                            <path d="M 35,6 L 64,16 C 64,42 35,59 35,59 C 35,59 6,42 6,16 Z" fill="url(#shieldFillGrad3)" />
                            {/* Checkmark */}
                            <path className="cartoon-shield-check" d="M 22,32 L 31,42 L 50,22" stroke="#10B981" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            <circle cx="35" cy="35" r="28" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 4" className="cartoon-shield-ring" />
                          </g>

                          {/* Cartoon QA Auditor Character */}
                          <g className="cartoon-qa-char">
                            {/* Body */}
                            <path d="M 235,200 C 225,170 248,150 275,150 C 302,150 325,170 315,200 Z" fill="#D50000" />
                            
                            {/* Head */}
                            <circle cx="275" cy="120" r="26" fill="#FED7AA" stroke="#EA580C" strokeWidth="1.5" />
                            {/* Hair */}
                            <path d="M 252,112 C 252,90 272,85 290,90 C 302,94 304,108 302,115 C 290,102 278,98 266,102 Z" fill="#334155" />
                            
                            {/* Cyber Visor */}
                            <rect x="256" y="112" width="40" height="13" rx="4" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
                            <line x1="260" y1="118" x2="292" y2="118" stroke="#38BDF8" strokeWidth="2" strokeDasharray="6 3" className="cartoon-visor-glow" />
                            
                            {/* Smile */}
                            <path d="M 268,131 Q 275,136 282,131" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" fill="none" />

                            {/* Scanner Arm with Beam */}
                            <g className="cartoon-scanner-arm">
                              <path d="M 245,165 Q 215,160 185,145" stroke="#D50000" strokeWidth="11" strokeLinecap="round" fill="none" />
                              <circle cx="183" cy="144" r="5.5" fill="#FED7AA" />
                              {/* Scanner Magnifier */}
                              <circle cx="172" cy="138" r="16" fill="rgba(56, 189, 248, 0.25)" stroke="#0284C7" strokeWidth="2.5" />
                              <line x1="183" y1="148" x2="195" y2="160" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
                              {/* Animated Cone */}
                              <polygon className="cartoon-scan-cone" points="172,138 100,120 100,170" fill="rgba(56, 189, 248, 0.2)" />
                            </g>
                          </g>

                          {/* Floating Lightning Bolt */}
                          <polygon points="120,45 132,45 125,58 135,58 118,78 123,63 115,63" fill="#FBBF24" stroke="#D97706" strokeWidth="1.2" className="cartoon-lightning" />
                        </svg>
                      </div>
                    )}

                    {/* PHASE 04: Cartoon Rocket Launch & SLA Scene */}
                    {step.step === '04' && (
                      <div className="roadmap-cartoon-stage cartoon-launch-stage">
                        <svg viewBox="0 0 360 280" className="cartoon-scene-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id="rocketHullGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#FFFFFF" />
                              <stop offset="100%" stopColor="#F1F5F9" />
                            </linearGradient>
                            <linearGradient id="flameGrad4" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#FEF08A" />
                              <stop offset="50%" stopColor="#F97316" />
                              <stop offset="100%" stopColor="#EF4444" />
                            </linearGradient>
                          </defs>

                          {/* Ground Ambient Shadow */}
                          <ellipse cx="180" cy="252" rx="130" ry="16" fill="#E2E8F0" opacity="0.6" />

                          {/* Smoke Cloud Puffs */}
                          <g className="cartoon-smoke-cluster">
                            <circle cx="100" cy="220" r="22" fill="#E2E8F0" opacity="0.8" />
                            <circle cx="130" cy="230" r="28" fill="#CBD5E1" opacity="0.6" />
                            <circle cx="75" cy="232" r="18" fill="#CBD5E1" opacity="0.7" />
                            <circle cx="155" cy="226" r="20" fill="#E2E8F0" opacity="0.75" />
                          </g>

                          {/* Twinkling Space Stars */}
                          <g className="cartoon-stars">
                            <polygon points="65,45 68,52 75,55 68,58 65,65 62,58 55,55 62,52" fill="#FBBF24" className="star-twinkle-1" />
                            <polygon points="295,50 297,55 303,57 297,59 295,65 293,59 287,57 293,55" fill="#38BDF8" className="star-twinkle-2" />
                            <circle cx="185" cy="35" r="3" fill="#FDE047" className="star-twinkle-3" />
                            <circle cx="260" cy="95" r="2" fill="#CBD5E1" />
                            <circle cx="50" cy="115" r="2.5" fill="#CBD5E1" />
                          </g>

                          {/* Floating Satellite with Green Signal Beams */}
                          <g className="cartoon-satellite" transform="translate(265, 30)">
                            <rect x="15" y="10" width="16" height="16" rx="3" fill="#0F172A" stroke="#10B981" strokeWidth="1.5" />
                            <rect x="0" y="13" width="12" height="10" rx="1" fill="#38BDF8" stroke="#0284C7" strokeWidth="1" />
                            <rect x="34" y="13" width="12" height="10" rx="1" fill="#38BDF8" stroke="#0284C7" strokeWidth="1" />
                            <circle cx="23" cy="18" r="3" fill="#10B981" />
                            {/* Animated Radio Wave Arcs */}
                            <path d="M 23,28 A 10,10 0 0,0 33,38" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" fill="none" className="cartoon-radio-wave" />
                            <path d="M 23,34 A 16,16 0 0,0 39,50" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" fill="none" className="cartoon-radio-wave" />
                          </g>

                          {/* Rocket Blasting Off at Dynamic Angle */}
                          <g className="cartoon-rocket-assembly" transform="translate(150, 125) rotate(-35)">
                            {/* Blazing Flame Exhaust */}
                            <g className="cartoon-rocket-flame" transform="translate(0, 58)">
                              <polygon points="-14,0 0,48 14,0" fill="url(#flameGrad4)" />
                              <polygon points="-8,0 0,28 8,0" fill="#FEF08A" />
                            </g>

                            {/* Thruster Nozzle */}
                            <path d="M -12,50 L 12,50 L 9,58 L -9,58 Z" fill="#475569" stroke="#334155" strokeWidth="1.5" />

                            {/* Fins */}
                            <polygon points="-18,48 -36,54 -24,28 -18,25" fill="#10B981" stroke="#047857" strokeWidth="1.5" />
                            <polygon points="18,48 36,54 24,28 18,25" fill="#10B981" stroke="#047857" strokeWidth="1.5" />

                            {/* Hull Body */}
                            <path d="M -18,50 C -22,10 0,-45 0,-45 C 0,-45 22,10 18,50 Z" fill="url(#rocketHullGrad4)" stroke="#334155" strokeWidth="2.5" />

                            {/* Nose Cone */}
                            <path d="M -12,-15 C -8,-32 0,-45 0,-45 C 0,-45 8,-32 12,-15 Z" fill="#10B981" stroke="#047857" strokeWidth="1.5" />

                            {/* Glass Porthole Window */}
                            <circle cx="0" cy="5" r="14" fill="#0F172A" stroke="#38BDF8" strokeWidth="2.5" />
                            <circle cx="0" cy="5" r="10" fill="#38BDF8" opacity="0.4" />

                            {/* Cute Astronaut Inside Waving */}
                            <g className="cartoon-astronaut">
                              <circle cx="0" cy="5" r="7" fill="#FFFFFF" />
                              <ellipse cx="0" cy="4" rx="4.5" ry="3.5" fill="#0F172A" />
                              <circle cx="1.5" cy="3" r="1" fill="#FFFFFF" />
                            </g>

                            {/* Racing Stripe */}
                            <line x1="-17" y1="36" x2="17" y2="36" stroke="#10B981" strokeWidth="3" />
                          </g>

                          {/* Floating Launch Victory Badge */}
                          <g className="cartoon-launch-badge" transform="translate(62, 130)">
                            <rect x="0" y="0" width="84" height="26" rx="13" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" />
                            <circle cx="13" cy="13" r="4.5" fill="#10B981" />
                            <text x="49" y="17" textAnchor="middle" fontSize="9" fontFamily="monospace" fontWeight="bold" fill="#0F172A">100% SLA</text>
                          </g>

                          {/* Floating Soft Cloud */}
                          <g className="cartoon-cloud-float" transform="translate(30, 70)">
                            <path d="M 15,20 C 8,20 0,25 0,32 C 0,39 8,44 18,44 L 52,44 C 60,44 68,38 68,31 C 68,24 60,20 52,20 C 50,12 40,8 32,8 C 24,8 18,14 15,20 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
                          </g>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Transition Banner into Services */}
        <div className="roadmap-to-services-banner">
          <div className="banner-left">
            <span className="banner-kicker">✦ NEXT: SEE WHAT WE BUILD</span>
            <h4 className="banner-heading">Explore Our Live Web &amp; Application Showcases</h4>
            <p className="banner-desc">From corporate portals to custom SaaS and lightning-fast storefronts &mdash; inspect our architectural standards below.</p>
          </div>
          <div className="banner-right">
            <a href="#service-block-1" className="btn-explore-services">
              Inspect Live Showcases &darr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


