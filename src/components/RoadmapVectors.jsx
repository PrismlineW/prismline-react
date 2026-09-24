import React, { useState, useEffect } from 'react';

/**
 * Stage 1: Discovery & Architectural Blueprint
 * 100% Authentic Figma Canvas (Zero AI templates / Zero cluttered emoji pills).
 * Shows genuine Figma application chrome, clean layers sidebar, high-fidelity wireframe artboard,
 * Post-It scope approval sticky note, and Sanjay's designer cursor.
 */
export function Stage1BlueprintVector() {
  const [selectedFrame, setSelectedFrame] = useState('desktop');
  const [cursorPos, setCursorPos] = useState({ x: 68, y: 35 });
  const [milestoneApproved, setMilestoneApproved] = useState(false);

  // Subtle natural designer cursor movement & approval animation
  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
      step = (step + 1) % 3;
      if (step === 0) {
        setCursorPos({ x: 62, y: 38 });
        setMilestoneApproved(false);
      } else if (step === 1) {
        setCursorPos({ x: 74, y: 68 });
        setTimeout(() => setMilestoneApproved(true), 400);
      } else {
        setCursorPos({ x: 50, y: 45 });
      }
    }, 3600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="roadmap-realistic-window" aria-label="Figma Architectural Blueprint Canvas">
      {/* Authentic macOS Figma Header */}
      <div className="mac-app-topbar figma-topbar">
        <div className="mac-traffic-lights">
          <span className="mac-light light-close" />
          <span className="mac-light light-min" />
          <span className="mac-light light-max" />
        </div>
        <div className="figma-doc-title">
          <svg className="figma-logo-icon" width="12" height="18" viewBox="0 0 38 57" fill="none">
            <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
            <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
            <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
            <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
            <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
          </svg>
          <span className="figma-filename">PrismLine_Architecture_Blueprint.fig</span>
          <span className="figma-zoom">100%</span>
        </div>
        <div className="figma-actions">
          <span className="figma-share-pill">Share</span>
          <span className="figma-play-pill">▶</span>
        </div>
      </div>

      {/* Clean Native Figma Tool Ribbon */}
      <div className="figma-toolbar-ribbon">
        <div className="figma-tools-left">
          <span className="f-tool active" title="Move">↖</span>
          <span className="f-tool" title="Frame">#</span>
          <span className="f-tool" title="Rectangle">□</span>
          <span className="f-tool" title="Pen">✒</span>
          <span className="f-tool" title="Text">T</span>
          <span className="f-tool" title="Comment">💬</span>
        </div>

        <div className="figma-tools-right">
          <div className="figma-avatar-group">
            <span className="f-avatar sv">SV</span>
            <span className="f-avatar client">CL</span>
          </div>
          <span className="f-user-label">Sanjay (Lead)</span>
        </div>
      </div>

      {/* Main Figma Canvas Workspace */}
      <div className="figma-canvas-area">
        {/* Left: Clean Figma Layers Hierarchy */}
        <div className="figma-layers-sidebar">
          <div className="layer-sec-title">LAYERS</div>
          <div
            className={`layer-item ${selectedFrame === 'desktop' ? 'active' : ''}`}
            onClick={() => setSelectedFrame('desktop')}
          >
            <span className="layer-icon">#</span>
            <span className="layer-name">01 Desktop Wireframe</span>
          </div>
          <div
            className={`layer-item ${selectedFrame === 'mobile' ? 'active' : ''}`}
            onClick={() => setSelectedFrame('mobile')}
          >
            <span className="layer-icon">#</span>
            <span className="layer-name">02 Mobile Responsive</span>
          </div>
          <div className="layer-item">
            <span className="layer-icon">🔒</span>
            <span className="layer-name">Scope &amp; Data Contract</span>
          </div>
        </div>

        {/* Center: High-Fidelity Wireframe Canvas with Realistic Dot Grid */}
        <div className="figma-artboard-stage">
          {/* Wireframe Frame 1: Desktop Landing Page */}
          <div className="figma-frame-card frame-hero">
            <div className="frame-header-label">
              <span># 01 Landing Wireframe — 1440 × 900</span>
              <span className="frame-scale-tag">Desktop</span>
            </div>
            <div className="wf-page-content">
              {/* Wireframe Nav */}
              <div className="wf-nav-bar">
                <span className="wf-logo-box" />
                <div className="wf-nav-items">
                  <span className="wf-nav-pill" />
                  <span className="wf-nav-pill" />
                  <span className="wf-nav-pill active-pill" />
                </div>
              </div>

              {/* Wireframe Hero Split */}
              <div className="wf-hero-split">
                <div className="wf-copy-side">
                  <div className="wf-heading-line wf-line-lg" />
                  <div className="wf-heading-line wf-line-md" />
                  <div className="wf-subtext-line" />
                  <div className="wf-cta-button">Start Project &rarr;</div>
                </div>
                <div className="wf-media-box">
                  <div className="wf-media-placeholder">
                    <span className="wf-camera-icon">📷</span>
                    <span className="wf-media-text">Interactive Showcase</span>
                  </div>
                </div>
              </div>

              {/* Wireframe 3-Column Features */}
              <div className="wf-cards-trio">
                <div className="wf-mini-card">
                  <span className="wf-dot blue" />
                  <span className="wf-card-line" />
                </div>
                <div className="wf-mini-card">
                  <span className="wf-dot orange" />
                  <span className="wf-card-line" />
                </div>
                <div className="wf-mini-card">
                  <span className="wf-dot green" />
                  <span className="wf-card-line" />
                </div>
              </div>
            </div>
          </div>

          {/* User Flow Connector Arrow */}
          <div className="figma-flow-connector" aria-hidden="true">
            <svg width="45" height="24" viewBox="0 0 45 24" fill="none">
              <path
                d="M 4 12 C 18 12, 26 12, 38 12"
                stroke="#8B5CF6"
                strokeWidth="1.75"
                strokeDasharray="4 3"
              />
              <polygon points="36,8 43,12 36,16" fill="#8B5CF6" />
            </svg>
            <span className="flow-badge">Flow</span>
          </div>

          {/* Wireframe Frame 2: Scope Approval */}
          <div className="figma-frame-card frame-scope">
            <div className="frame-header-label">
              <span># 02 Scope &amp; Conversion Gate</span>
            </div>
            <div className="wf-scope-content">
              <div className="wf-scope-badge">
                <span className="scope-icon">🛡️</span>
                <span className="scope-text">100% Fixed-Price Scope Guarantee</span>
              </div>
              <div className="wf-scope-list">
                <div className="scope-row">
                  <span className="scope-check">✓</span>
                  <span>₹0 Hidden Surcharges or Surprises</span>
                </div>
                <div className="scope-row">
                  <span className="scope-check">✓</span>
                  <span>Full User Journey &amp; Sitemap Signed Off</span>
                </div>
                <div className="scope-row">
                  <span className="scope-check">✓</span>
                  <span>Built-in TLS 1.3 Security Architecture</span>
                </div>
              </div>
            </div>
          </div>

          {/* Realistic 3M Post-It Sticky Note */}
          <div className={`figma-sticky-note ${milestoneApproved ? 'approved' : ''}`}>
            <div className="sticky-tape" />
            <div className="sticky-text">
              <strong>MILESTONE 01:</strong>
              <br />
              Client approved wireframes &amp; fixed proposal. Zero scope creep!
            </div>
            <div className="sticky-footer-row">
              <span className="sticky-author">— Sanjay V.S</span>
              <span className={`sticky-approved-tag ${milestoneApproved ? 'visible' : ''}`}>
                APPROVED ✓
              </span>
            </div>
          </div>

          {/* Authentic Figma Live Multiplayer Cursor */}
          <div
            className="figma-live-cursor"
            style={{ left: `${cursorPos.x}%`, top: `${cursorPos.y}%` }}
            aria-hidden="true"
          >
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
              <path d="M0 0L14 10L6.5 11L4 18L0 0Z" fill="#A855F7" />
            </svg>
            <span className="cursor-tag">Sanjay (Lead Arch)</span>
          </div>
        </div>
      </div>

      {/* Realistic Figma Bottom Bar */}
      <div className="figma-bottom-bar">
        <span className="f-status-dot green" />
        <span className="f-status-text">
          FIGMA CLOUD SYNCED // MILESTONE 01 TRANSPARENT SCOPE APPROVED
        </span>
      </div>
    </div>
  );
}

/**
 * Stage 2: Modern Web Design & Core Development
 * Split Screen: Authentic VS Code Editor (Left) + Clean Safari Storefront (Right).
 * Running video animation: Types React code in VS Code -> Vite compiles -> Cursor in Safari clicks Add to Bag ->
 * Bag count increments -> Confirmation toast appears.
 */
export function Stage2CodeVector() {
  const [cartCount, setCartCount] = useState(1);
  const [toastVisible, setToastVisible] = useState(false);
  const [btnActive, setBtnActive] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 75, y: 70 });

  // Continuous realistic automated interaction loop
  useEffect(() => {
    let step = 0;
    const loopInterval = setInterval(() => {
      step = (step + 1) % 3;

      if (step === 0) {
        // Move cursor toward "Add To Bag"
        setCursorPosition({ x: 62, y: 78 });
      } else if (step === 1) {
        // Click Add to Bag
        setBtnActive(true);
        setTimeout(() => {
          setBtnActive(false);
          setCartCount((c) => (c >= 3 ? 1 : c + 1));
          setToastVisible(true);
        }, 220);
      } else {
        // Move away & hide toast
        setCursorPosition({ x: 82, y: 40 });
        setTimeout(() => setToastVisible(false), 800);
      }
    }, 3200);

    return () => clearInterval(loopInterval);
  }, []);

  const handleManualAdd = () => {
    setBtnActive(true);
    setTimeout(() => {
      setBtnActive(false);
      setCartCount((c) => c + 1);
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 2000);
    }, 180);
  };

  return (
    <div className="roadmap-realistic-window" aria-label="VS Code Development and Live Safari Storefront">
      {/* macOS Topbar */}
      <div className="mac-app-topbar vscode-topbar">
        <div className="mac-traffic-lights">
          <span className="mac-light light-close" />
          <span className="mac-light light-min" />
          <span className="mac-light light-max" />
        </div>
        <div className="vscode-window-title">
          <span>VS Code — prismline-core</span>
        </div>
        <div className="vscode-branch-tag">
          <span>⎇ main*</span>
        </div>
      </div>

      {/* Split Screen Workspace: VS Code (Left) + Live Safari Preview (Right) */}
      <div className="split-dev-workspace">
        {/* Left Side: Authentic VS Code Editor */}
        <div className="dev-vscode-pane">
          {/* Mini Activity Bar */}
          <div className="vscode-activity-bar">
            <span className="v-icon active" title="Explorer">📁</span>
            <span className="v-icon" title="Search">🔍</span>
            <span className="v-icon" title="Source Control">🌿</span>
            <span className="v-icon" title="Settings">⚙️</span>
          </div>

          {/* Editor Area */}
          <div className="vscode-editor-pane">
            {/* Tabs */}
            <div className="vscode-tabs-bar">
              <div className="v-tab active-tab">
                <span className="v-tab-tech react-color">⚛</span>
                <span>Storefront.tsx</span>
                <span className="v-tab-close">×</span>
              </div>
              <div className="v-tab">
                <span className="v-tab-tech ts-color">TS</span>
                <span>useCheckout.ts</span>
              </div>
            </div>

            {/* Code Canvas */}
            <div className="vscode-code-canvas">
              <pre className="real-code-editor">
                <code>
                  <span className="code-ln">01</span><span className="kw-import">import</span> &#123; createStorefront &#125; <span className="kw-import">from</span> <span className="kw-str">'@prismline/core'</span>;<br />
                  <span className="code-ln">02</span><span className="kw-import">import</span> &#123; useSecureCheckout &#125; <span className="kw-import">from</span> <span className="kw-str">'@/hooks'</span>;<br />
                  <span className="code-ln">03</span><br />
                  <span className="code-ln">04</span><span className="kw-fn">export function</span> <span className="kw-component">ArtisanStore</span>() &#123;<br />
                  <span className="code-ln">05</span>  <span className="kw-const">const</span> &#123; bag, checkout &#125; = <span className="kw-fn">useSecureCheckout</span>();<br />
                  <span className="code-ln">06</span>  <span className="kw-const">return</span> (<br />
                  <span className="code-ln">07</span>    &lt;<span className="kw-tag">FastStorefront</span><br />
                  <span className="code-ln">08</span>      <span className="kw-prop">zeroThirdPartyBloat</span>=&#123;<span className="kw-bool">true</span>&#125;<br />
                  <span className="code-ln">09</span>      <span className="kw-prop">sourceCodeOwnership</span>=<span className="kw-str">"100%"</span><br />
                  <span className="code-ln">10</span>      <span className="kw-prop">encryption</span>=<span className="kw-str">"TLS-256"</span><br />
                  <span className="code-ln">11</span>    /&gt;<br />
                  <span className="code-ln">12</span>  ); <span className="code-cursor-blink">|</span><br />
                  <span className="code-ln">13</span>&#125;
                </code>
              </pre>
            </div>

            {/* Terminal Bar */}
            <div className="vscode-terminal-bar">
              <span className="term-prompt">✓</span>
              <span className="term-text">
                Vite 5.4 built in 480ms • 0 vulnerabilities • Ready
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Authentic Live Safari Preview */}
        <div className="dev-browser-pane">
          {/* Safari Browser Address Bar */}
          <div className="browser-address-bar">
            <div className="address-pill">
              <span className="ssl-lock">🔒</span>
              <span className="address-host">localhost:5173</span>
              <span className="address-path">/storefront</span>
            </div>
            <div className="cart-counter-pill">
              <span>🛍️ Bag ({cartCount})</span>
            </div>
          </div>

          {/* Genuine Luxury Storefront Card */}
          <div className="browser-store-content">
            <div className="store-product-card">
              <div className="store-product-photo">
                <span className="store-badge">HANDCRAFTED</span>
                <div className="product-luxury-icon">🌿</div>
              </div>
              <div className="store-product-info">
                <div className="prod-header-row">
                  <div className="prod-name">Artisan Keepsake Vase</div>
                  <div className="prod-price">₹1,899.00</div>
                </div>
                <div className="prod-meta">Mobile Responsive • Zero Lag</div>
                <button
                  type="button"
                  className={`btn-store-cart ${btnActive ? 'active' : ''}`}
                  onClick={handleManualAdd}
                >
                  Add To Bag +
                </button>
              </div>
            </div>

            {/* Subtle Visitor Cursor Simulation */}
            <div
              className={`safari-visitor-cursor ${btnActive ? 'clicking' : ''}`}
              style={{ left: `${cursorPosition.x}%`, top: `${cursorPosition.y}%` }}
              aria-hidden="true"
            >
              <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
                <path d="M0 0L14 10L6.5 11L4 18L0 0Z" fill="#FF5722" stroke="#FFFFFF" strokeWidth="1" />
              </svg>
            </div>

            {/* Toast Confirmation */}
            {toastVisible && (
              <div className="browser-toast-confirm">
                ✓ Added to bag! Instant reaction.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Window Status Footer */}
      <div className="mac-app-footer">
        <span className="footer-branch">100% CLEAN CODE // FULL CLIENT OWNERSHIP // ZERO TEMPLATES</span>
      </div>
    </div>
  );
}

/**
 * Stage 3: Testing, Speed Optimization & Security Audit
 * 100% Authentic Google Chrome DevTools / Lighthouse & Network Security Report.
 * Real 99 Performance dials + Live Network Security Log showing real 403 Forbidden deflection of SQLi/XSS probes.
 */
export function Stage3AuditVector() {
  const [activeTab, setActiveTab] = useState('lighthouse'); // 'lighthouse' | 'security'
  const [attackIntercepted, setAttackIntercepted] = useState(true);

  // Automated tab switch & security validation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((t) => (t === 'lighthouse' ? 'security' : 'lighthouse'));
      setAttackIntercepted(true);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="roadmap-realistic-window" aria-label="Google Chrome DevTools Lighthouse & Security Audit">
      {/* Chrome Window Topbar */}
      <div className="mac-app-topbar chrome-topbar">
        <div className="mac-traffic-lights">
          <span className="mac-light light-close" />
          <span className="mac-light light-min" />
          <span className="mac-light light-max" />
        </div>
        <div className="chrome-tab-pill active">
          <span className="chrome-tab-icon">⚡</span>
          <span className="chrome-tab-title">Lighthouse Report — yourbrand.com</span>
          <span className="chrome-tab-close">×</span>
        </div>
        <div className="chrome-window-action">
          <div className="devtools-sub-tabs">
            <span
              className={`dev-tab-btn ${activeTab === 'lighthouse' ? 'active' : ''}`}
              onClick={() => setActiveTab('lighthouse')}
            >
              Lighthouse
            </span>
            <span
              className={`dev-tab-btn ${activeTab === 'security' ? 'active' : ''}`}
              onClick={() => setActiveTab('security')}
            >
              Security (WAF)
            </span>
          </div>
        </div>
      </div>

      {/* Chrome Omnibox Address */}
      <div className="chrome-omnibox-row">
        <div className="chrome-omnibox-field">
          <span className="ssl-badge">🔒 https://</span>
          <span className="url-domain">yourbrand.com</span>
          <span className="url-badge-verified">SECURE // TLS 1.3</span>
        </div>
      </div>

      {/* Chrome DevTools Report Body */}
      <div className="lighthouse-report-body">
        {/* 4 Iconic Circular Score Dials (Official Google Green #0CCE6B) */}
        <div className="lighthouse-scores-row">
          <div className="lh-score-col">
            <div className="lh-dial-wrapper">
              <svg viewBox="0 0 80 80" className="lh-dial-svg">
                <circle cx="40" cy="40" r="34" className="lh-track" />
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  className="lh-fill"
                  strokeDasharray="213.6"
                  strokeDashoffset="2.1"
                />
              </svg>
              <div className="lh-dial-number score-green">99</div>
            </div>
            <div className="lh-dial-title">Performance</div>
          </div>

          <div className="lh-score-col">
            <div className="lh-dial-wrapper">
              <svg viewBox="0 0 80 80" className="lh-dial-svg">
                <circle cx="40" cy="40" r="34" className="lh-track" />
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  className="lh-fill"
                  strokeDasharray="213.6"
                  strokeDashoffset="0"
                />
              </svg>
              <div className="lh-dial-number score-green">100</div>
            </div>
            <div className="lh-dial-title">Accessibility</div>
          </div>

          <div className="lh-score-col">
            <div className="lh-dial-wrapper">
              <svg viewBox="0 0 80 80" className="lh-dial-svg">
                <circle cx="40" cy="40" r="34" className="lh-track" />
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  className="lh-fill"
                  strokeDasharray="213.6"
                  strokeDashoffset="0"
                />
              </svg>
              <div className="lh-dial-number score-green">100</div>
            </div>
            <div className="lh-dial-title">Best Practices</div>
          </div>

          <div className="lh-score-col">
            <div className="lh-dial-wrapper">
              <svg viewBox="0 0 80 80" className="lh-dial-svg">
                <circle cx="40" cy="40" r="34" className="lh-track" />
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  className="lh-fill"
                  strokeDasharray="213.6"
                  strokeDashoffset="0"
                />
              </svg>
              <div className="lh-dial-number score-green">100</div>
            </div>
            <div className="lh-dial-title">SEO</div>
          </div>
        </div>

        {/* Real Chrome DevTools Network & WAF Security Log */}
        <div className="devtools-security-log-card">
          <div className="log-header-row">
            <span className="log-title">REAL-TIME THREAT DEFENSE LOG (OWASP WAF)</span>
            <span className="log-status-tag">ACTIVE MONITORING</span>
          </div>
          <div className="security-request-rows">
            <div className="sec-req-row blocked">
              <span className="http-status badge-403">403 BLOCKED</span>
              <span className="req-path">POST /api/checkout?id=1%27%20OR%201=1</span>
              <span className="req-reason">SQLi Injection Quarantined</span>
            </div>
            <div className="sec-req-row blocked">
              <span className="http-status badge-403">403 BLOCKED</span>
              <span className="req-path">POST /cart?data=&lt;script&gt;leak()&lt;/script&gt;</span>
              <span className="req-reason">XSS Filter Intercepted</span>
            </div>
            <div className="sec-req-row passed">
              <span className="http-status badge-200">200 OK</span>
              <span className="req-path">GET /storefront [TLS 1.3 / 256-Bit]</span>
              <span className="req-reason">Legitimate Client • 0.4s</span>
            </div>
          </div>
        </div>

        {/* Detailed Metrics Breakdown */}
        <div className="lh-details-grid">
          {/* Left: Core Web Vitals Key Metrics */}
          <div className="lh-vitals-card">
            <div className="card-kicker">GOOGLE CORE WEB VITALS</div>
            <div className="vital-rows">
              <div className="v-row">
                <span className="v-bullet pass">●</span>
                <span className="v-name">Largest Contentful Paint (LCP)</span>
                <span className="v-score score-good">0.78 s</span>
              </div>
              <div className="v-row">
                <span className="v-bullet pass">●</span>
                <span className="v-name">First Contentful Paint (FCP)</span>
                <span className="v-score score-good">0.42 s</span>
              </div>
              <div className="v-row">
                <span className="v-bullet pass">●</span>
                <span className="v-name">Total Blocking Time (TBT)</span>
                <span className="v-score score-good">10 ms</span>
              </div>
              <div className="v-row">
                <span className="v-bullet pass">●</span>
                <span className="v-name">Cumulative Layout Shift (CLS)</span>
                <span className="v-score score-good">0.00</span>
              </div>
            </div>
          </div>

          {/* Right: Security & Hardening Checklist */}
          <div className="lh-security-card">
            <div className="card-kicker">ENTERPRISE SECURITY AUDIT</div>
            <div className="sec-check-rows">
              <div className="s-check-item">
                <span className="s-icon">✓</span>
                <div className="s-text">
                  <div className="s-title">OWASP Top 10 Hardened</div>
                  <div className="s-sub">Zero SQLi, XSS, or CSRF injection vectors</div>
                </div>
              </div>
              <div className="s-check-item">
                <span className="s-icon">✓</span>
                <div className="s-text">
                  <div className="s-title">256-Bit SSL/TLS 1.3 Active</div>
                  <div className="s-sub">Grade A+ SSL Labs rating, zero plaintext</div>
                </div>
              </div>
              <div className="s-check-item">
                <span className="s-icon">✓</span>
                <div className="s-text">
                  <div className="s-title">Payment &amp; Cart Data Hardened</div>
                  <div className="s-sub">PCI-DSS tokenized isolation gateway</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chrome Footer */}
      <div className="mac-app-footer chrome-footer">
        <span>✓ 95+ PAGESPEED GUARANTEE • LIGHTHOUSE SCORE 99/100 • OWASP CERTIFIED</span>
      </div>
    </div>
  );
}

/**
 * Stage 4: Launch the Website & Lifetime Rectification Support
 * Interactive Client Review & Issue Rectification Hub.
 * Shows both:
 * 1) Customer writing positive reviews upon launch.
 * 2) Customer reporting an issue/feedback -> Instant ₹0 Bug Rectification Guarantee deployed in 6 mins -> Customer updates to 5 stars!
 * Plus official signed Lifetime Warranty Certificate.
 */
export function Stage4LaunchVector() {
  const [reviewCycleIndex, setReviewCycleIndex] = useState(0);

  // 3-step dynamic client feedback & rectification story:
  // Step 0: Initial Positive Launch Review (Praise)
  // Step 1: Client flags a small issue / ticket ("Checkout button padding on mobile Safari")
  // Step 2: PrismLine Instant Rectification deployed in 6m at ₹0 cost -> Client thrilled (5 stars updated!)
  const reviewScenarios = [
    {
      type: 'positive',
      author: 'Priya M. — E-Commerce Store Founder',
      stars: '★★★★★',
      status: 'VERIFIED CLIENT LAUNCH REVIEW',
      statusBadge: '100% APPROVED',
      badgeColor: 'green',
      quote:
        '“Site launched with zero downtime! Blazing fast, beautiful UI, and 100% of our scope was delivered without a single hidden fee.”',
      resolution: 'Verified Client Sign-Off • Zero Defect Release',
    },
    {
      type: 'issue',
      author: 'Arun K. — Operations Lead (Client)',
      stars: '★★★☆☆',
      status: 'CLIENT FEEDBACK / TICKET #PLT-409',
      statusBadge: 'ISSUE REPORTED',
      badgeColor: 'amber',
      quote:
        '“Hey team, on mobile Safari, the checkout button alignment has a 4px margin variance. Can we get this rectified?”',
      resolution: '⚡ Senior Hotline Active • Resolving under Lifetime Warranty',
    },
    {
      type: 'rectified',
      author: 'Arun K. — Operations Lead (Client)',
      stars: '★★★★★',
      status: 'RECTIFIED UNDER LIFETIME WARRANTY',
      statusBadge: 'RESOLVED AT ₹0',
      badgeColor: 'green',
      quote:
        '“Incredible! You guys rectified the Safari alignment in just 6 minutes at absolutely ₹0 cost. The Lifetime Warranty is 100% genuine.”',
      resolution: '✓ Rectified in 6m • Client Invoiced: ₹0.00 (Guaranteed)',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setReviewCycleIndex((prev) => (prev + 1) % reviewScenarios.length);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  const currentReview = reviewScenarios[reviewCycleIndex];

  return (
    <div className="roadmap-realistic-window" aria-label="Production Release, Client Review & Lifetime Rectification Hub">
      {/* macOS Topbar (Clean alignment: traffic lights, centered title, live beacon) */}
      <div className="mac-app-topbar release-topbar">
        <div className="mac-traffic-lights">
          <span className="mac-light light-close" />
          <span className="mac-light light-min" />
          <span className="mac-light light-max" />
        </div>
        <div className="release-window-title">
          <span className="release-title-icon">🚀</span>
          <span>production://live.prismline.cloud</span>
        </div>
        <div className="live-status-pill">
          <span className="live-beacon-dot" />
          <span>LIVE IN PRODUCTION</span>
        </div>
      </div>

      {/* Split Console: Interactive Client Review & Rectification (Left) & Official Signed Lifetime Warranty (Right) */}
      <div className="release-console-grid">
        {/* Left Side: Client Reviews & Dynamic ₹0 Rectification */}
        <div className="deploy-telemetry-panel">
          {/* Domain & Telemetry */}
          <div className="deploy-metric-card">
            <div className="deploy-meta-line">
              <span className="deploy-label">PRODUCTION DOMAIN</span>
              <span className="deploy-state ready">ONLINE</span>
            </div>
            <div className="deploy-domain-url">https://yourbrand.com</div>
            <div className="deploy-subtext">
              <span className="live-ping-dot" />
              <span>Global CDN: 300+ PoPs &bull; 4ms latency (Singapore SIN-01)</span>
            </div>
          </div>

          {/* Dynamic Customer Review Card (Animates between positive, issue report, and ₹0 resolved) */}
          <div className={`dynamic-client-review-box ${currentReview.type}`}>
            <div className="rev-head-row">
              <span className="rev-status-label">{currentReview.status}</span>
              <span className={`rev-badge ${currentReview.badgeColor}`}>
                {currentReview.statusBadge}
              </span>
            </div>

            <div className="rev-author-line">
              <span className="rev-author-name">{currentReview.author}</span>
              <span className="rev-stars">{currentReview.stars}</span>
            </div>

            <div className="rev-quote-text">{currentReview.quote}</div>

            <div className="rev-footer-resolution">
              <span className="res-bullet">●</span>
              <span>{currentReview.resolution}</span>
            </div>
          </div>

          {/* Direct Senior Hotline Card */}
          <div className="deploy-hotline-card">
            <div className="hotline-icon">📞</div>
            <div className="hotline-details">
              <div className="hotline-title">DIRECT SENIOR HOTLINE &bull; WHATSAPP</div>
              <div className="hotline-number">+91 99529 34596</div>
              <div className="hotline-sub">&lt; 15-Minute Response SLA &bull; ₹0 Bug Fix Anytime Guarantee</div>
            </div>
          </div>
        </div>

        {/* Right Side: Authentic Signed Lifetime Warranty Certificate */}
        <div className="warranty-cert-panel">
          <div className="warranty-cert-card">
            <div className="cert-top-emblem">
              <div className="cert-seal">
                <span className="seal-star">★</span>
                <span className="seal-text">PRISMLINE</span>
                <span className="seal-star">★</span>
              </div>
            </div>

            <div className="cert-header">
              <div className="cert-title">OFFICIAL LIFETIME WARRANTY</div>
              <div className="cert-number">CERTIFICATE NO: PLT-WARRANTY-2026-ACTIVE</div>
            </div>

            <div className="cert-body-clauses">
              <div className="cert-clause">
                <span className="clause-check">✓</span>
                <div>
                  <strong>₹0 Bug Rectification:</strong> Any defect or bug within delivered scope is resolved with zero client fees.
                </div>
              </div>
              <div className="cert-clause">
                <span className="clause-check">✓</span>
                <div>
                  <strong>100% Code Ownership:</strong> Full Git repository transferred to client. Zero vendor lock-in.
                </div>
              </div>
              <div className="cert-clause">
                <span className="clause-check">✓</span>
                <div>
                  <strong>Direct WhatsApp Access:</strong> Chat directly with your lead engineers anytime post-launch.
                </div>
              </div>
            </div>

            <div className="cert-footer-signature">
              <div className="sig-line">
                <span className="sig-label">AUTHORIZED SIGNATURE</span>
                <span className="sig-hash">HASH #8F29-GUARANTEED-LIFETIME</span>
              </div>
              <span className="sig-badge">SEAL VERIFIED ✓</span>
            </div>
          </div>
        </div>
      </div>

      {/* Console Footer */}
      <div className="mac-app-footer">
        <span>STATUS: ZERO DOWNTIME RELEASE &bull; LIFETIME ₹0 RECTIFICATION GUARANTEE</span>
      </div>
    </div>
  );
}
