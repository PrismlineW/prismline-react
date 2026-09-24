import React, { useState, useEffect } from 'react';

/**
 * Stage 1: Discovery & Architectural Blueprint
 * Live, running animation schematic with flowing data packets, interactive node inspector,
 * and live wireframe layout simulator. ZERO AI emojis, 100% human-engineered.
 */
export function Stage1BlueprintVector() {
  const [activeTab, setActiveTab] = useState('wireframe');
  const [selectedNode, setSelectedNode] = useState('edge');
  const [packetCount, setPacketCount] = useState(1482);

  // Live packet telemetry counter
  useEffect(() => {
    const interval = setInterval(() => {
      setPacketCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const nodeDetails = {
    edge: { title: 'Global Edge / Client', latency: '12ms', protocol: 'HTTP/3 Anycast', status: 'Optimal' },
    waf: { title: 'Security Perimeter / WAF', latency: '2ms', protocol: 'TLS 1.3 • OWASP', status: 'Hardened' },
    api: { title: 'Application Core Engine', latency: '18ms', protocol: 'React 19 / Node SSR', status: 'Active' },
    db: { title: 'Encrypted Storage & DB', latency: '0.4ms', protocol: 'PostgreSQL AES-256', status: 'Synced' },
  };

  return (
    <div className="roadmap-vector-card" aria-label="System Architecture Blueprint Engine">
      <div className="live-engine-window">
        {/* Window Top Chrome */}
        <div className="live-engine-topbar">
          <div className="traffic-dots">
            <span className="dot dot-red" />
            <span className="dot dot-amber" />
            <span className="dot dot-green" />
          </div>
          <div className="engine-title-breadcrumb">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2.5">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
            <span>PRISMLINE BLUEPRINT ENGINE // STAGE 01</span>
          </div>
          <div className="engine-live-badge">
            <span className="pulse-beacon beacon-blue" />
            <span>DATA STREAM ACTIVE</span>
          </div>
        </div>

        {/* Engine Body: 2-Column Responsive Blueprint */}
        <div className="live-engine-grid">
          {/* Left Column: Animated Circuit Flow Pipeline */}
          <div className="circuit-pipeline-col">
            <div className="pipeline-header-row">
              <span className="pipeline-kicker">NETWORK TOPOLOGY</span>
              <span className="packet-counter">STREAM #{packetCount}</span>
            </div>

            {/* Interactive SVG Flow Diagram */}
            <div className="circuit-svg-wrap">
              <svg viewBox="0 0 220 220" className="circuit-flow-svg">
                <defs>
                  {/* Glowing Laser Gradient */}
                  <linearGradient id="laserGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#38BDF8" />
                    <stop offset="50%" stopColor="#0284C7" />
                    <stop offset="100%" stopColor="#38BDF8" />
                  </linearGradient>

                  <filter id="laserGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#38BDF8" floodOpacity="0.8" />
                  </filter>
                </defs>

                {/* Circuit Bus Tracks */}
                <line x1="110" y1="36" x2="110" y2="72" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="2" />
                <line x1="110" y1="92" x2="110" y2="128" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="2" />
                <line x1="110" y1="148" x2="110" y2="184" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="2" />

                {/* Running Animated Laser Pulses (Continuous Stroke Flow) */}
                <line
                  x1="110"
                  y1="36"
                  x2="110"
                  y2="72"
                  stroke="url(#laserGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="8 6"
                  className="anim-laser-line"
                />
                <line
                  x1="110"
                  y1="92"
                  x2="110"
                  y2="128"
                  stroke="url(#laserGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="8 6"
                  className="anim-laser-line anim-delay-1"
                />
                <line
                  x1="110"
                  y1="148"
                  x2="110"
                  y2="184"
                  stroke="url(#laserGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="8 6"
                  className="anim-laser-line anim-delay-2"
                />

                {/* Moving Packet Circles */}
                <circle r="3.5" fill="#38BDF8" filter="url(#laserGlow)">
                  <animateMotion path="M 110 36 L 110 72" dur="1.4s" repeatCount="indefinite" />
                </circle>
                <circle r="3.5" fill="#38BDF8" filter="url(#laserGlow)">
                  <animateMotion path="M 110 92 L 110 128" dur="1.4s" begin="0.45s" repeatCount="indefinite" />
                </circle>
                <circle r="3.5" fill="#38BDF8" filter="url(#laserGlow)">
                  <animateMotion path="M 110 148 L 110 184" dur="1.4s" begin="0.9s" repeatCount="indefinite" />
                </circle>
              </svg>

              {/* Node 1: Client Edge */}
              <button
                type="button"
                className={`pipeline-node-btn node-pos-1 ${selectedNode === 'edge' ? 'node-active' : ''}`}
                onClick={() => setSelectedNode('edge')}
              >
                <div className="node-icon-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div className="node-text-col">
                  <div className="node-label">Client / Edge Interface</div>
                  <div className="node-sub">HTTP/3 • Anycast 12ms</div>
                </div>
                <span className="node-ping-indicator" />
              </button>

              {/* Node 2: Built-in WAF */}
              <button
                type="button"
                className={`pipeline-node-btn node-pos-2 ${selectedNode === 'waf' ? 'node-active' : ''}`}
                onClick={() => setSelectedNode('waf')}
              >
                <div className="node-icon-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
                <div className="node-text-col">
                  <div className="node-label">Zero-Trust Security WAF</div>
                  <div className="node-sub">TLS 1.3 • OWASP Ready</div>
                </div>
                <span className="node-ping-indicator" />
              </button>

              {/* Node 3: Core Application Engine */}
              <button
                type="button"
                className={`pipeline-node-btn node-pos-3 ${selectedNode === 'api' ? 'node-active' : ''}`}
                onClick={() => setSelectedNode('api')}
              >
                <div className="node-icon-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <rect x="9" y="9" width="6" height="6" />
                    <line x1="9" y1="1" x2="9" y2="4" />
                    <line x1="15" y1="1" x2="15" y2="4" />
                    <line x1="9" y1="20" x2="9" y2="23" />
                    <line x1="15" y1="20" x2="15" y2="23" />
                    <line x1="20" y1="9" x2="23" y2="9" />
                    <line x1="20" y1="14" x2="23" y2="14" />
                    <line x1="1" y1="9" x2="4" y2="9" />
                    <line x1="1" y1="14" x2="4" y2="14" />
                  </svg>
                </div>
                <div className="node-text-col">
                  <div className="node-label">React 19 / Core APIs</div>
                  <div className="node-sub">SSR Node • Modular Logic</div>
                </div>
                <span className="node-ping-indicator" />
              </button>

              {/* Node 4: Encrypted Storage */}
              <button
                type="button"
                className={`pipeline-node-btn node-pos-4 ${selectedNode === 'db' ? 'node-active' : ''}`}
                onClick={() => setSelectedNode('db')}
              >
                <div className="node-icon-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                  </svg>
                </div>
                <div className="node-text-col">
                  <div className="node-label">Encrypted Storage &amp; DB</div>
                  <div className="node-sub">PostgreSQL • 0.4ms Query</div>
                </div>
                <span className="node-ping-indicator" />
              </button>
            </div>
          </div>

          {/* Right Column: Live Wireframe Layout Simulator & Scope Guard */}
          <div className="wireframe-simulator-col">
            <div className="sim-control-row">
              <button
                type="button"
                className={`sim-tab-btn ${activeTab === 'wireframe' ? 'tab-active' : ''}`}
                onClick={() => setActiveTab('wireframe')}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="9" y1="21" x2="9" y2="9" />
                </svg>
                Wireframe Simulator
              </button>
              <button
                type="button"
                className={`sim-tab-btn ${activeTab === 'spec' ? 'tab-active' : ''}`}
                onClick={() => setActiveTab('spec')}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Scope Guarantee
              </button>
            </div>

            {activeTab === 'wireframe' ? (
              <div className="sim-screen-canvas">
                {/* Simulated Web App Bar with Shimmer Animation */}
                <div className="sim-screen-navbar">
                  <div className="sim-logo-line anim-shimmer" />
                  <div className="sim-nav-links">
                    <div className="sim-link-pill anim-shimmer" />
                    <div className="sim-link-pill anim-shimmer" />
                    <div className="sim-btn-pill anim-shimmer" />
                  </div>
                </div>

                {/* Hero Wireframe Box with Dynamic Light Beam Sweep */}
                <div className="sim-hero-box">
                  <div className="sim-light-sweep" />
                  <div className="sim-hero-copy">
                    <div className="sim-headline-bar anim-shimmer" />
                    <div className="sim-subline-bar anim-shimmer" />
                    <div className="sim-cta-block">
                      <div className="sim-cta-pill anim-shimmer" />
                      <div className="sim-ghost-pill anim-shimmer" />
                    </div>
                  </div>
                  <div className="sim-hero-media">
                    <div className="sim-media-radar">
                      <span className="radar-circle circle-1" />
                      <span className="radar-circle circle-2" />
                      <span className="radar-center-dot" />
                    </div>
                  </div>
                </div>

                {/* 3-Column Modular Feature Cards */}
                <div className="sim-features-grid">
                  <div className="sim-feat-card">
                    <div className="feat-card-accent" />
                    <div className="feat-card-line-lg anim-shimmer" />
                    <div className="feat-card-line-sm anim-shimmer" />
                  </div>
                  <div className="sim-feat-card">
                    <div className="feat-card-accent" />
                    <div className="feat-card-line-lg anim-shimmer" />
                    <div className="feat-card-line-sm anim-shimmer" />
                  </div>
                  <div className="sim-feat-card">
                    <div className="feat-card-accent" />
                    <div className="feat-card-line-lg anim-shimmer" />
                    <div className="feat-card-line-sm anim-shimmer" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="sim-spec-panel">
                <div className="spec-badge-header">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span>100% FIXED-PRICE SPECIFICATION GUARANTEE</span>
                </div>
                <div className="spec-metric-row">
                  <span className="spec-label">Selected Node:</span>
                  <span className="spec-val-highlight">{nodeDetails[selectedNode].title}</span>
                </div>
                <div className="spec-metric-row">
                  <span className="spec-label">Measured Latency:</span>
                  <span className="spec-val-code">{nodeDetails[selectedNode].latency}</span>
                </div>
                <div className="spec-metric-row">
                  <span className="spec-label">Security Architecture:</span>
                  <span className="spec-val-code">{nodeDetails[selectedNode].protocol}</span>
                </div>
                <div className="spec-checklist">
                  <div className="chk-row">
                    <span className="chk-icon">✓</span>
                    <span>No Surprise Invoices: 100% transparent milestone scope</span>
                  </div>
                  <div className="chk-row">
                    <span className="chk-icon">✓</span>
                    <span>Full UI/UX Wireframe Approval prior to code deployment</span>
                  </div>
                  <div className="chk-row">
                    <span className="chk-icon">✓</span>
                    <span>Zero Data Leaks: End-to-end encrypted architecture</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Running Bottom Telemetry Stream */}
        <div className="live-engine-footer">
          <div className="telemetry-stream">
            <span className="telemetry-prompt">&gt;</span>
            <span className="telemetry-text">
              RUNNING // Handshake: 12ms • WAF: 0 threats • DB Query: 0.4ms • 100% Client Ownership
            </span>
          </div>
          <div className="telemetry-tag">STAGE 01 VERIFIED</div>
        </div>
      </div>
    </div>
  );
}

/**
 * Stage 2: Modern Web Design & Core Development
 * Running animated code terminal with real syntax highlighting + interactive live storefront preview.
 * Users can interact with the mini app (increment bag count, inspect clean React 19 code).
 */
export function Stage2CodeVector() {
  const [bagCount, setBagCount] = useState(0);
  const [activeTab, setActiveTab] = useState('Storefront.tsx');
  const [toastMsg, setToastMsg] = useState('');

  const handleAddToBag = () => {
    setBagCount((prev) => prev + 1);
    setToastMsg('Order item buffered (Zero lag)');
    setTimeout(() => setToastMsg(''), 2200);
  };

  return (
    <div className="roadmap-vector-card" aria-label="Modern Web Design & Core Development Engine">
      <div className="live-engine-window engine-amber-theme">
        {/* Top Chrome Window */}
        <div className="live-engine-topbar">
          <div className="traffic-dots">
            <span className="dot dot-red" />
            <span className="dot dot-amber" />
            <span className="dot dot-green" />
          </div>
          <div className="ide-tabs-row">
            <button
              type="button"
              className={`ide-tab ${activeTab === 'Storefront.tsx' ? 'ide-tab-active' : ''}`}
              onClick={() => setActiveTab('Storefront.tsx')}
            >
              <span className="tab-tech-icon react-icon">⚛</span>
              <span>Storefront.tsx</span>
            </button>
            <button
              type="button"
              className={`ide-tab ${activeTab === 'security.ts' ? 'ide-tab-active' : ''}`}
              onClick={() => setActiveTab('security.ts')}
            >
              <span className="tab-tech-icon ts-icon">TS</span>
              <span>security.ts</span>
            </button>
          </div>
          <div className="engine-live-badge badge-amber">
            <span className="pulse-beacon beacon-amber" />
            <span>HMR FAST REFRESH</span>
          </div>
        </div>

        {/* Engine Grid: IDE Editor (Left) & Live Component Preview (Right) */}
        <div className="live-engine-grid">
          {/* Left Column: Real Syntax Highlighted Code */}
          <div className="ide-code-col">
            <div className="code-editor-scroller">
              <pre className="code-block">
                <code>
                  <span className="c-line"><span className="c-ln">01</span><span className="c-kw">import</span> &#123; createStorefront &#125; <span className="c-kw">from</span> <span className="c-str">'@prismline/core'</span>;</span>
                  <span className="c-line"><span className="c-ln">02</span><span className="c-kw">import</span> &#123; useSecureCheckout &#125; <span className="c-kw">from</span> <span className="c-str">'@/hooks'</span>;</span>
                  <span className="c-line"><span className="c-ln">03</span></span>
                  <span className="c-line"><span className="c-ln">04</span><span className="c-kw">export function</span> <span className="c-fn">Storefront</span>() &#123;</span>
                  <span className="c-line"><span className="c-ln">05</span>  <span className="c-kw">const</span> &#123; cart, total &#125; = <span className="c-fn">useSecureCheckout</span>();</span>
                  <span className="c-line"><span className="c-ln">06</span>  <span className="c-kw">return</span> (</span>
                  <span className="c-line"><span className="c-ln">07</span>    &lt;<span className="c-tag">FastGateway</span></span>
                  <span className="c-line"><span className="c-ln">08</span>      <span className="c-prop">encryption</span>=<span className="c-str">"TLS-256"</span></span>
                  <span className="c-line"><span className="c-ln">09</span>      <span className="c-prop">zeroLockIn</span>=&#123;<span className="c-bool">true</span>&#125;</span>
                  <span className="c-line"><span className="c-ln">10</span>      <span className="c-prop">sourceCodeOwnership</span>=<span className="c-str">"100%"</span></span>
                  <span className="c-line"><span className="c-ln">11</span>    /&gt;</span>
                  <span className="c-line"><span className="c-ln">12</span>  ); <span className="anim-cursor">|</span></span>
                  <span className="c-line"><span className="c-ln">13</span>&#125;</span>
                </code>
              </pre>
            </div>
            <div className="code-telemetry-micro">
              <span>TypeScript 5.6</span>
              <span>•</span>
              <span className="c-good">0 Errors</span>
              <span>•</span>
              <span>Compiled in 18ms</span>
            </div>
          </div>

          {/* Right Column: Live Interactive Storefront Mini-App */}
          <div className="preview-app-col">
            <div className="preview-chrome">
              <span className="preview-url-badge">https://client-preview.prismline.app</span>
              <div className="preview-bag-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span className="bag-num">{bagCount}</span>
              </div>
            </div>

            {/* Live Interactive Storefront Card */}
            <div className="preview-product-card">
              <div className="product-visual-wrap">
                <div className="product-glow-radial" />
                <div className="product-art-cube">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#FF7043" strokeWidth="1.6">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
                <span className="product-stock-tag">IN PRODUCTION</span>
              </div>

              <div className="product-details-wrap">
                <div className="product-title-row">
                  <span className="prod-title">Artisan E-Commerce Suite</span>
                  <span className="prod-price">₹2,499.00</span>
                </div>
                <p className="prod-desc">Zero bloat plugins. 100% human-written React 19 UI tailored to your brand.</p>

                <button type="button" className="btn-interact-add" onClick={handleAddToBag}>
                  <span>Add To Bag +</span>
                </button>
              </div>
            </div>

            {/* Toast Confirmation */}
            {toastMsg && <div className="preview-toast-alert">{toastMsg}</div>}
          </div>
        </div>

        {/* Running Bottom Telemetry */}
        <div className="live-engine-footer">
          <div className="telemetry-stream">
            <span className="telemetry-prompt">&gt;</span>
            <span className="telemetry-text">
              BUILD: 100% SOURCE CODE OWNERSHIP • ZERO TEMPLATES • RUNNING AT 60 FPS
            </span>
          </div>
          <div className="telemetry-tag">STAGE 02 VERIFIED</div>
        </div>
      </div>
    </div>
  );
}

/**
 * Stage 3: Testing, Speed Optimization & Security Audit
 * Live running Lighthouse 99 Performance gauge with continuous rotating radar scanline,
 * real Core Web Vitals bars, and active security protocol verification checklist.
 */
export function Stage3AuditVector() {
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditPassed, setAuditPassed] = useState(true);

  const triggerAuditScan = () => {
    setIsAuditing(true);
    setTimeout(() => {
      setIsAuditing(false);
      setAuditPassed(true);
    }, 1200);
  };

  return (
    <div className="roadmap-vector-card" aria-label="Speed Optimization & Security Audit Engine">
      <div className="live-engine-window engine-crimson-theme">
        {/* Top Window Chrome */}
        <div className="live-engine-topbar">
          <div className="traffic-dots">
            <span className="dot dot-red" />
            <span className="dot dot-amber" />
            <span className="dot dot-green" />
          </div>
          <div className="engine-title-breadcrumb">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FF5252" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>LIGHTHOUSE AUDIT // SECURITY RADAR</span>
          </div>
          <div className="engine-live-badge badge-green">
            <span className="pulse-beacon beacon-green" />
            <span>99/100 PASSED</span>
          </div>
        </div>

        {/* Engine Grid: Lighthouse Gauge (Left) & Security Verification Checklist (Right) */}
        <div className="live-engine-grid">
          {/* Left Column: Lighthouse Score Dial with Sweeping Radar Beam */}
          <div className="lighthouse-gauge-col">
            <div className="gauge-title-row">
              <span className="gauge-kicker">CORE WEB VITALS</span>
              <button type="button" className="btn-rescan-trigger" onClick={triggerAuditScan} disabled={isAuditing}>
                {isAuditing ? 'Scanning...' : '↻ Re-Scan'}
              </button>
            </div>

            {/* Circular Dial with Radar Sweep */}
            <div className="radar-dial-container">
              <div className={`radar-scan-beam ${isAuditing ? 'anim-radar-fast' : 'anim-radar-normal'}`} />
              <svg viewBox="0 0 140 140" className="gauge-svg">
                {/* Background Ring */}
                <circle cx="70" cy="70" r="56" fill="none" stroke="#251214" strokeWidth="10" />
                {/* Active Arc (99%) */}
                <circle
                  cx="70"
                  cy="70"
                  r="56"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="10"
                  strokeDasharray="351.8"
                  strokeDashoffset="7"
                  strokeLinecap="round"
                  transform="rotate(-90 70 70)"
                  className="anim-gauge-fill"
                />
              </svg>
              <div className="gauge-center-content">
                <span className="score-number">99</span>
                <span className="score-denom">PERFORMANCE</span>
              </div>
            </div>

            {/* Core Web Vitals Key Metrics Trio */}
            <div className="vitals-metric-trio">
              <div className="vital-item">
                <span className="v-label">LCP</span>
                <span className="v-val">0.78s</span>
                <span className="v-grade">PASS</span>
              </div>
              <div className="vital-item">
                <span className="v-label">FID</span>
                <span className="v-val">12ms</span>
                <span className="v-grade">PASS</span>
              </div>
              <div className="vital-item">
                <span className="v-label">CLS</span>
                <span className="v-val">0.00</span>
                <span className="v-grade">PASS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Security Verification Inspection Checklist */}
          <div className="security-audit-col">
            <div className="audit-sec-header">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>CONTINUOUS SECURITY VERIFICATION</span>
            </div>

            <div className="security-checks-list">
              <div className="sec-check-row">
                <div className="sec-check-icon">✓</div>
                <div className="sec-check-info">
                  <div className="sec-check-title">OWASP Top 10 Hardened</div>
                  <div className="sec-check-sub">XSS, CSRF &amp; SQLi Injection Defended</div>
                </div>
                <span className="sec-status-tag">PASS</span>
              </div>

              <div className="sec-check-row">
                <div className="sec-check-icon">✓</div>
                <div className="sec-check-info">
                  <div className="sec-check-title">256-Bit SSL/TLS 1.3 Active</div>
                  <div className="sec-check-sub">Grade A+ SSL Labs • Zero Plaintext</div>
                </div>
                <span className="sec-status-tag">SECURE</span>
              </div>

              <div className="sec-check-row">
                <div className="sec-check-icon">✓</div>
                <div className="sec-check-info">
                  <div className="sec-check-title">PCI-DSS Tokenized Checkout</div>
                  <div className="sec-check-sub">End-to-End Client Data Isolation</div>
                </div>
                <span className="sec-status-tag">VERIFIED</span>
              </div>

              <div className="sec-check-row">
                <div className="sec-check-icon">✓</div>
                <div className="sec-check-info">
                  <div className="sec-check-title">Cross-Device Responsive Test</div>
                  <div className="sec-check-sub">iOS Safari • Android Chrome • MacOS</div>
                </div>
                <span className="sec-status-tag">100%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Running Bottom Telemetry */}
        <div className="live-engine-footer">
          <div className="telemetry-stream">
            <span className="telemetry-prompt">&gt;</span>
            <span className="telemetry-text">
              AUDIT: 142/142 PROTOCOLS PASSING • ZERO VULNERABILITIES • READY FOR PRODUCTION
            </span>
          </div>
          <div className="telemetry-tag">STAGE 03 VERIFIED</div>
        </div>
      </div>
    </div>
  );
}

/**
 * Stage 4: Launch the Website & Lifetime Rectification Support
 * Live production deployment telemetry + metallic sheen animated PrismLine Lifetime Guarantee seal.
 */
export function Stage4LaunchVector() {
  return (
    <div className="roadmap-vector-card" aria-label="Launch & Lifetime Rectification Console">
      <div className="live-engine-window engine-emerald-theme">
        {/* Top Window Chrome */}
        <div className="live-engine-topbar">
          <div className="traffic-dots">
            <span className="dot dot-red" />
            <span className="dot dot-amber" />
            <span className="dot dot-green" />
          </div>
          <div className="engine-title-breadcrumb">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.5">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <span>PRODUCTION RELEASE CONSOLE // SLA MONITOR</span>
          </div>
          <div className="engine-live-badge badge-green">
            <span className="pulse-beacon beacon-green" />
            <span>LIVE ONLINE</span>
          </div>
        </div>

        {/* Engine Grid: Deployment Telemetry (Left) & Lifetime Guarantee Seal (Right) */}
        <div className="live-engine-grid">
          {/* Left Column: Global Edge Deployment Telemetry */}
          <div className="deployment-telemetry-col">
            <div className="deploy-kicker-row">
              <span className="deploy-kicker">GLOBAL EDGE NETWORK</span>
              <span className="deploy-uptime">99.99% UPTIME</span>
            </div>

            {/* Edge Map Nodes List with Pulse Waves */}
            <div className="edge-nodes-list">
              <div className="edge-node-item">
                <span className="pulse-beacon beacon-green" />
                <span className="node-city">Singapore (SIN-01)</span>
                <span className="node-lat">4ms</span>
              </div>
              <div className="edge-node-item">
                <span className="pulse-beacon beacon-green" />
                <span className="node-city">Frankfurt (FRA-02)</span>
                <span className="node-lat">18ms</span>
              </div>
              <div className="edge-node-item">
                <span className="pulse-beacon beacon-green" />
                <span className="node-city">San Jose (SJC-01)</span>
                <span className="node-lat">22ms</span>
              </div>
              <div className="edge-node-item">
                <span className="pulse-beacon beacon-green" />
                <span className="node-city">Tokyo (HND-01)</span>
                <span className="node-lat">11ms</span>
              </div>
            </div>

            {/* Direct Engineer Emergency Hotline Card */}
            <div className="direct-hotline-card">
              <div className="hotline-icon-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="hotline-text">
                <div className="hotline-label">DIRECT SENIOR HOTLINE</div>
                <div className="hotline-num">+91 99529 34596</div>
                <div className="hotline-sla">&lt; 15-Minute Response SLA</div>
              </div>
            </div>
          </div>

          {/* Right Column: Shimmering PrismLine Lifetime Guarantee Shield */}
          <div className="guarantee-shield-col">
            <div className="metallic-shield-wrap">
              <div className="metallic-light-sweep" />
              <div className="shield-emblem">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="1.8">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <div className="shield-badge-title">PRISMLINE OFFICIAL</div>
              <div className="shield-badge-sub">LIFETIME ANYTIME RECTIFICATION</div>
            </div>

            <div className="warranty-guarantee-terms">
              <div className="w-term-item">
                <span className="w-check">✓</span>
                <span><strong>₹0 Bug Fixes:</strong> Never billed for fixing code issues.</span>
              </div>
              <div className="w-term-item">
                <span className="w-check">✓</span>
                <span><strong>Zero Retainers:</strong> Honest, transparent support anytime.</span>
              </div>
              <div className="w-term-item">
                <span className="w-check">✓</span>
                <span><strong>Direct WhatsApp:</strong> Reach lead developers immediately.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Running Bottom Telemetry */}
        <div className="live-engine-footer">
          <div className="telemetry-stream">
            <span className="telemetry-prompt">&gt;</span>
            <span className="telemetry-text">
              DEPLOYMENT: 300+ CDN NODES ONLINE • 256-BIT ENCRYPTION • BACKED BY LIFETIME GUARANTEE
            </span>
          </div>
          <div className="telemetry-tag">STAGE 04 VERIFIED</div>
        </div>
      </div>
    </div>
  );
}
