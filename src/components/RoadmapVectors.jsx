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
 * "Code write panitu FULL SCREEN website varudu" — User explicitly requested:
 * NOT half code and half website!
 * Instead:
 * Phase 1: Authentic Full-Width VS Code Editor writing React code + running Vite terminal build.
 * Phase 2: Smoothly transitions into the FULL SCREEN luxury website storefront with product showcase,
 * smooth Add To Bag click animation, cart counter increment, and reaction toast!
 * Plus manual toggle buttons so user can switch anytime.
 */
export function Stage2CodeVector() {
  const [viewMode, setViewMode] = useState('code'); // 'code' | 'preview'
  const [cartCount, setCartCount] = useState(1);
  const [toastVisible, setToastVisible] = useState(false);
  const [btnActive, setBtnActive] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 72, y: 72 });

  // Automated video-like workflow: Writes code (4.5s) -> Launches full screen storefront (5.5s) -> Repeats
  useEffect(() => {
    let modeStep = 0;
    const interval = setInterval(() => {
      modeStep = (modeStep + 1) % 2;
      if (modeStep === 0) {
        setViewMode('code');
      } else {
        setViewMode('preview');
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Storefront cursor interaction loop when in 'preview' mode
  useEffect(() => {
    if (viewMode !== 'preview') return;

    let subStep = 0;
    const subInterval = setInterval(() => {
      subStep = (subStep + 1) % 3;
      if (subStep === 0) {
        // Move toward "Add To Bag" button
        setCursorPos({ x: 62, y: 70 });
      } else if (subStep === 1) {
        // Click Add to Bag
        setBtnActive(true);
        setTimeout(() => {
          setBtnActive(false);
          setCartCount((c) => (c >= 3 ? 1 : c + 1));
          setToastVisible(true);
        }, 220);
      } else {
        // Move away & hide toast
        setCursorPos({ x: 80, y: 45 });
        setTimeout(() => setToastVisible(false), 900);
      }
    }, 2400);

    return () => clearInterval(subInterval);
  }, [viewMode]);

  const handleManualAdd = () => {
    setBtnActive(true);
    setTimeout(() => {
      setBtnActive(false);
      setCartCount((c) => c + 1);
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 2200);
    }, 180);
  };

  return (
    <div className="roadmap-realistic-window" aria-label="Development to Full Screen Storefront Showcase">
      {/* Topbar: macOS Header with Mode Switcher */}
      <div className="mac-app-topbar stage2-topbar">
        <div className="mac-traffic-lights">
          <span className="mac-light light-close" />
          <span className="mac-light light-min" />
          <span className="mac-light light-max" />
        </div>

        <div className="stage2-title-center">
          {viewMode === 'code' ? (
            <span className="active-mode-label">
              <span className="icon-tech">⚛</span> VS Code — Storefront.tsx [Writing React Components]
            </span>
          ) : (
            <span className="active-mode-label">
              <span className="icon-tech">🌐</span> Safari — https://artisan-ceramics.com [Live Storefront]
            </span>
          )}
        </div>

        {/* View Switcher Pills (User can toggle or let auto-animate) */}
        <div className="stage2-mode-pills">
          <button
            type="button"
            className={`mode-pill-btn ${viewMode === 'code' ? 'active' : ''}`}
            onClick={() => setViewMode('code')}
            title="View Code Editor"
          >
            💻 Code Editor
          </button>
          <button
            type="button"
            className={`mode-pill-btn ${viewMode === 'preview' ? 'active' : ''}`}
            onClick={() => setViewMode('preview')}
            title="View Full Storefront"
          >
            🌐 Full Website
          </button>
        </div>
      </div>

      {/* DYNAMIC FULL-WIDTH VIEW: Code Editor OR Full Screen Website */}
      <div className="stage2-fullview-container">
        {viewMode === 'code' ? (
          /* ──────── 1. FULL WIDTH VS CODE EDITOR ──────── */
          <div className="full-vscode-pane">
            <div className="vscode-inner-grid">
              {/* Activity Bar */}
              <div className="vscode-activity-bar">
                <span className="v-icon active" title="Explorer">📁</span>
                <span className="v-icon" title="Search">🔍</span>
                <span className="v-icon" title="Source Control">🌿</span>
                <span className="v-icon" title="Settings">⚙️</span>
              </div>

              {/* Main Code Editor Body */}
              <div className="vscode-editor-main">
                {/* Tabs */}
                <div className="vscode-tabs-bar">
                  <div className="v-tab active-tab">
                    <span className="v-tab-tech react-color">⚛</span>
                    <span>Storefront.tsx</span>
                    <span className="v-tab-close">×</span>
                  </div>
                  <div className="v-tab">
                    <span className="v-tab-tech ts-color">TS</span>
                    <span>useCart.ts</span>
                  </div>
                  <div className="v-tab">
                    <span className="v-tab-tech css-color">#</span>
                    <span>theme.css</span>
                  </div>
                </div>

                {/* Full Syntax Highlighted Code Canvas */}
                <div className="vscode-code-canvas full-canvas">
                  <pre className="real-code-editor full-code">
                    <code>
                      <span className="code-ln">01</span><span className="kw-comment">// PrismLine High-Performance Custom Storefront Architecture</span><br />
                      <span className="code-ln">02</span><span className="kw-import">import</span> &#123; createStorefront, useCart &#125; <span className="kw-import">from</span> <span className="kw-str">'@prismline/core'</span>;<br />
                      <span className="code-ln">03</span><span className="kw-import">import</span> &#123; LuxuryHero, FastCheckout &#125; <span className="kw-import">from</span> <span className="kw-str">'@/components'</span>;<br />
                      <span className="code-ln">04</span><br />
                      <span className="code-ln">05</span><span className="kw-fn">export default function</span> <span className="kw-component">ArtisanStorefront</span>() &#123;<br />
                      <span className="code-ln">06</span>  <span className="kw-const">const</span> &#123; bag, addItem, checkout &#125; = <span className="kw-fn">useCart</span>();<br />
                      <span className="code-ln">07</span><br />
                      <span className="code-ln">08</span>  <span className="kw-const">return</span> (<br />
                      <span className="code-ln">09</span>    &lt;<span className="kw-tag">StoreLayout</span> <span className="kw-prop">brand</span>=<span className="kw-str">"Artisan Keepsake"</span> <span className="kw-prop">zeroThirdPartyBloat</span>=&#123;<span className="kw-bool">true</span>&#125;&gt;<br />
                      <span className="code-ln">10</span>      &lt;<span className="kw-tag">LuxuryHero</span><br />
                      <span className="code-ln">11</span>        <span className="kw-prop">title</span>=<span className="kw-str">"Artisan Keepsake Ceramic Amphora"</span><br />
                      <span className="code-ln">12</span>        <span className="kw-prop">price</span>=&#123;<span className="kw-num">1899</span>&#125; <span className="kw-prop">currency</span>=<span className="kw-str">"INR"</span><br />
                      <span className="code-ln">13</span>        <span className="kw-prop">onAddToBag</span>=&#123;() =&gt; <span className="kw-fn">addItem</span>(&#123; <span className="kw-prop">id</span>: <span className="kw-str">'vase-01'</span> &#125;)&#125;<br />
                      <span className="code-ln">14</span>      /&gt;<br />
                      <span className="code-ln">15</span>      &lt;<span className="kw-tag">FastCheckout</span> <span className="kw-prop">sslGrade</span>=<span className="kw-str">"A+"</span> <span className="kw-prop">speedTarget</span>=<span className="kw-str">"0.4s"</span> /&gt;<br />
                      <span className="code-ln">16</span>    &lt;/<span className="kw-tag">StoreLayout</span>&gt;<br />
                      <span className="code-ln">17</span>  ); <span className="code-cursor-blink">|</span><br />
                      <span className="code-ln">18</span>&#125;
                    </code>
                  </pre>
                </div>

                {/* Built-in Terminal compiling */}
                <div className="vscode-terminal-bar full-term">
                  <div className="term-line">
                    <span className="term-prompt">$</span>
                    <span className="term-cmd">npm run build && vite-preview</span>
                    <span className="term-pill-status">BUILD PASSING</span>
                  </div>
                  <div className="term-output">
                    <span>✓ TypeScript compile check: 0 errors</span>
                    <span className="term-sep">•</span>
                    <span className="text-green">✓ Built in 340ms</span>
                    <span className="term-sep">•</span>
                    <span className="text-cyan">⚡ Auto-launching full-screen storefront preview...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ──────── 2. FULL WIDTH LUXURY SAFARI STOREFRONT ──────── */
          <div className="full-safari-pane">
            {/* Safari Address & Navigation Bar */}
            <div className="safari-full-address-bar">
              <div className="safari-nav-controls">
                <span className="saf-btn disabled">‹</span>
                <span className="saf-btn disabled">›</span>
              </div>
              <div className="safari-omnibox">
                <span className="ssl-lock">🔒</span>
                <span className="saf-protocol">https://</span>
                <span className="saf-domain">artisan-ceramics.com</span>
                <span className="saf-route">/amphora</span>
                <span className="saf-badge-speed">⚡ 60 FPS • TLS 1.3</span>
              </div>
              <div className="safari-cart-widget">
                <span className="cart-icon">🛍️</span>
                <span className="cart-label">Bag</span>
                <span className="cart-badge-count">{cartCount}</span>
              </div>
            </div>

            {/* Full Storefront Website Showcase */}
            <div className="storefront-website-stage">
              {/* Storefront Header */}
              <div className="store-site-header">
                <div className="store-brand-title">
                  <span className="brand-gem">◆</span>
                  <span>ARTISAN ATELIER</span>
                </div>
                <div className="store-site-nav">
                  <span className="nav-link active">Vases &amp; Vessels</span>
                  <span className="nav-link">Tableware</span>
                  <span className="nav-link">Our Heritage</span>
                  <span className="nav-link">Bespoke Orders</span>
                </div>
              </div>

              {/* Storefront Hero Split */}
              <div className="store-full-hero-grid">
                {/* Left: Product Visual Card */}
                <div className="prod-visual-container">
                  <div className="prod-floating-tag">HANDCRAFTED LUXURY</div>
                  <div className="prod-hero-artwork">
                    <div className="ceramic-vase-graphic">
                      <svg width="120" height="130" viewBox="0 0 120 130" fill="none">
                        <ellipse cx="60" cy="22" rx="20" ry="6" fill="#D97706" fillOpacity="0.25" />
                        <path d="M40 22 C40 38, 25 55, 25 82 C25 110, 42 120, 60 120 C78 120, 95 110, 95 82 C95 55, 80 38, 80 22 Z" fill="url(#vaseGrad)" />
                        <path d="M25 60 C15 60, 10 75, 25 90" stroke="#B45309" strokeWidth="4" strokeLinecap="round" fill="none" />
                        <path d="M95 60 C105 60, 110 75, 95 90" stroke="#B45309" strokeWidth="4" strokeLinecap="round" fill="none" />
                        <defs>
                          <linearGradient id="vaseGrad" x1="25" y1="22" x2="95" y2="120" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FDE68A" />
                            <stop offset="0.5" stopColor="#D97706" />
                            <stop offset="1" stopColor="#92400E" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="prod-sub-badge">100% PURE PORCELAIN • MATTE GLAZE</div>
                </div>

                {/* Right: Product Details & Instant Purchase Action */}
                <div className="prod-details-container">
                  <div className="prod-kicker-row">
                    <span className="prod-collection-name">AUTUMN 2026 ARCHIVE</span>
                    <span className="prod-stock-status">● In Stock (Ships Today)</span>
                  </div>

                  <h3 className="prod-headline">Artisan Keepsake Ceramic Amphora</h3>

                  <div className="prod-price-line">
                    <span className="price-val">₹1,899.00</span>
                    <span className="price-tax">Tax included • Free Express Shipping</span>
                  </div>

                  <div className="prod-feature-bullets">
                    <div className="p-bullet">
                      <span className="p-chk">✓</span>
                      <span>100% Custom React Architecture (Zero Third-Party Lag)</span>
                    </div>
                    <div className="p-bullet">
                      <span className="p-chk">✓</span>
                      <span>Sub-0.4s Instant Cart Interaction &amp; Tokenized Checkout</span>
                    </div>
                    <div className="p-bullet">
                      <span className="p-chk">✓</span>
                      <span>Full Client Code Ownership • Grade A+ Security</span>
                    </div>
                  </div>

                  <div className="prod-actions-row">
                    <button
                      type="button"
                      className={`btn-luxury-add ${btnActive ? 'active' : ''}`}
                      onClick={handleManualAdd}
                    >
                      <span>Add To Bag +</span>
                    </button>
                    <div className="checkout-guarantee-note">
                      <span>🔒 256-Bit SSL Encrypted Checkout</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simulated Visitor Cursor */}
              <div
                className={`full-visitor-cursor ${btnActive ? 'clicking' : ''}`}
                style={{ left: `${cursorPos.x}%`, top: `${cursorPos.y}%` }}
                aria-hidden="true"
              >
                <svg width="16" height="20" viewBox="0 0 14 18" fill="none">
                  <path d="M0 0L14 10L6.5 11L4 18L0 0Z" fill="#F97316" stroke="#FFFFFF" strokeWidth="1.5" />
                </svg>
                <span className="cursor-visitor-tag">Visitor Click</span>
              </div>

              {/* Toast Notification */}
              {toastVisible && (
                <div className="store-toast-popup">
                  <span className="toast-icon">✓</span>
                  <span>Added to bag! Instant reaction • 0.38s response time</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mac-app-footer">
        <span className="footer-status">
          {viewMode === 'code'
            ? '100% CLEAN CODE // FULL CLIENT OWNERSHIP // ZERO TEMPLATES'
            : 'FULL-SCREEN LIVE STOREFRONT // 60 FPS // ZERO VENDOR LOCK-IN'}
        </span>
      </div>
    </div>
  );
}

/**
 * Stage 3: Testing, Speed Optimization & Security Audit
 * User explicitly instructed:
 * "like website testing and secure website also if any vuln comes its need to detect or show error andha madiri video animation"
 * Dynamic multi-phase security & performance penetration test video-animation:
 * Phase 0: Testing & Scanning in Progress (Fuzzing 64 endpoints against OWASP Top 10)
 * Phase 1: Vulnerability / Threat Detected! (Flashing red warning: SQLi & XSS payload detected)
 * Phase 2: PrismLine Firewall & WAF Intercepts and Defends (Quarantines payload, blocks IP in 0.01ms)
 * Phase 3: Pen-Test Passed & 99 Performance Audit Sign-Off (Google Lighthouse dials 99/100, Core Web Vitals)
 */
export function Stage3AuditVector() {
  const [testPhase, setTestPhase] = useState(0); // 0: scanning, 1: vuln_detected, 2: defending, 3: passed_99

  useEffect(() => {
    const timer = setInterval(() => {
      setTestPhase((p) => (p + 1) % 4);
    }, 3800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="roadmap-realistic-window" aria-label="Google Chrome DevTools Security Testing and Vulnerability Defense">
      {/* Chrome Topbar */}
      <div className="mac-app-topbar chrome-topbar">
        <div className="mac-traffic-lights">
          <span className="mac-light light-close" />
          <span className="mac-light light-min" />
          <span className="mac-light light-max" />
        </div>

        <div className="chrome-tab-pill active">
          <span className="chrome-tab-icon">⚡</span>
          <span className="chrome-tab-title">DevTools Security Audit — yourbrand.com</span>
          <span className="chrome-tab-close">×</span>
        </div>

        <div className="chrome-window-action">
          <div className="pen-test-stage-indicator">
            {testPhase === 0 && <span className="test-badge blue">SCANNING ENDPOINTS...</span>}
            {testPhase === 1 && <span className="test-badge red blink">⚠️ VULNERABILITY DETECTED</span>}
            {testPhase === 2 && <span className="test-badge amber">🛡️ WAF MITIGATING...</span>}
            {testPhase === 3 && <span className="test-badge green">✅ 100% SECURE (GRADE A+)</span>}
          </div>
        </div>
      </div>

      {/* Chrome Address Row */}
      <div className="chrome-omnibox-row">
        <div className="chrome-omnibox-field">
          <span className="ssl-badge">🔒 https://</span>
          <span className="url-domain">yourbrand.com</span>
          <span className="url-badge-verified">
            {testPhase === 1 ? '⚠️ ACTIVE PENETRATION PROBE' : 'SECURE // TLS 1.3 / OWASP TOP 10'}
          </span>
        </div>
      </div>

      {/* DevTools Body */}
      <div className="lighthouse-report-body">
        {/* Top: 4 Iconic Google Lighthouse Dials */}
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
                  strokeDashoffset={testPhase === 0 ? '40' : '2.1'}
                />
              </svg>
              <div className="lh-dial-number score-green">
                {testPhase === 0 ? '94' : '99'}
              </div>
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
                  strokeDashoffset={testPhase === 1 ? '30' : '0'}
                />
              </svg>
              <div className={`lh-dial-number ${testPhase === 1 ? 'score-amber' : 'score-green'}`}>
                {testPhase === 1 ? '92' : '100'}
              </div>
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

        {/* Dynamic Threat Defense & Vulnerability Detection Log */}
        <div className={`devtools-security-log-card phase-${testPhase}`}>
          <div className="log-header-row">
            <span className="log-title">
              {testPhase === 0 && '⚡ AUTOMATED SECURITY SCAN: FUZZING 64 ENDPOINTS...'}
              {testPhase === 1 && '🚨 CRITICAL VULNERABILITY DETECTED (SIMULATED PEN-TEST ATTACK)'}
              {testPhase === 2 && '🛡️ PRISMLINE FIREWALL & ZERO-DAY WAF DEFENSE ACTIVE'}
              {testPhase === 3 && '✅ OWASP TOP 10 HARDENED: ZERO EXPLOITS POSSIBLE'}
            </span>
            <span className={`log-status-tag tag-phase-${testPhase}`}>
              {testPhase === 0 && 'SCANNING'}
              {testPhase === 1 && 'ATTACK DETECTED'}
              {testPhase === 2 && 'NEUTRALIZING'}
              {testPhase === 3 && 'DEFENDED ✓'}
            </span>
          </div>

          <div className="security-request-rows">
            {testPhase === 0 && (
              <>
                <div className="sec-req-row running">
                  <span className="http-status badge-blue">TESTING</span>
                  <span className="req-path">GET /storefront [PageSpeed &amp; CSS Layout Shift]</span>
                  <span className="req-reason">0.24s • Clean DOM</span>
                </div>
                <div className="sec-req-row running">
                  <span className="http-status badge-blue">FUZZING</span>
                  <span className="req-path">POST /api/checkout [Testing SQLi &amp; Buffer Overflow]</span>
                  <span className="req-reason">Injecting test vectors...</span>
                </div>
              </>
            )}

            {testPhase === 1 && (
              <>
                <div className="sec-req-row error-alert">
                  <span className="http-status badge-red">🚨 VULN DETECTED</span>
                  <span className="req-path">POST /api/checkout?id=1%27%20OR%201=1</span>
                  <span className="req-reason text-red">SQL Injection Vector Identified!</span>
                </div>
                <div className="sec-req-row error-alert">
                  <span className="http-status badge-red">🚨 VULN DETECTED</span>
                  <span className="req-path">POST /cart?data=&lt;script&gt;leakCookie()&lt;/script&gt;</span>
                  <span className="req-reason text-red">XSS Script Injection Caught!</span>
                </div>
              </>
            )}

            {testPhase === 2 && (
              <>
                <div className="sec-req-row mitigating">
                  <span className="http-status badge-amber">🛡️ WAF MITIGATING</span>
                  <span className="req-path">POST /api/checkout [SQL Injection Neutralized]</span>
                  <span className="req-reason text-green">Payload Defused in 0.01ms</span>
                </div>
                <div className="sec-req-row mitigating">
                  <span className="http-status badge-amber">🛡️ WAF MITIGATING</span>
                  <span className="req-path">POST /cart [XSS Script Input Sanitized &amp; Stripped]</span>
                  <span className="req-reason text-green">IP Auto-Blocked on WAF</span>
                </div>
              </>
            )}

            {testPhase === 3 && (
              <>
                <div className="sec-req-row blocked">
                  <span className="http-status badge-403">403 BLOCKED</span>
                  <span className="req-path">POST /api/checkout [SQLi Attack Deflected]</span>
                  <span className="req-reason">0 Leaks • WAF Hardened</span>
                </div>
                <div className="sec-req-row blocked">
                  <span className="http-status badge-403">403 BLOCKED</span>
                  <span className="req-path">POST /cart [XSS Attack Filtered]</span>
                  <span className="req-reason">Tokenized Quarantine</span>
                </div>
                <div className="sec-req-row passed">
                  <span className="http-status badge-200">200 OK</span>
                  <span className="req-path">GET /storefront [TLS 1.3 / 256-Bit SSL]</span>
                  <span className="req-reason">Legitimate Client • 0.38s</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Bottom Details Grid: Core Web Vitals + Security Audit */}
        <div className="lh-details-grid">
          {/* Core Web Vitals */}
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

          {/* Security Checklist */}
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
                  <div className="s-title">PCI-DSS Cart Data Hardened</div>
                  <div className="s-sub">Tokenized payment isolation gateway</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chrome Footer */}
      <div className="mac-app-footer chrome-footer">
        <span>✓ 95+ PAGESPEED GUARANTEE • LIGHTHOUSE SCORE 99/100 • ZERO-DAY WAF DEFENSE</span>
      </div>
    </div>
  );
}

/**
 * Stage 4: Customer Review Writing & Lifetime Rectification Hub
 * User explicitly instructed:
 * "i ask like review from customer like review writting and giving feedback and if any issue we fix it
 * eg prismline websiteeyy review eldueyy by customer and give feedback if any issue in their website we will rectify it
 * i need positive review and negative review like fix website issue also"
 *
 * Shows:
 * 1. Customer Review Writing & Submission Portal for PrismLine website
 * 2. Positive Reviews from verified clients praising design, speed & zero downtime
 * 3. Negative Review / Issue Reported by client on their website ("Checkout modal margin issue on Safari")
 * 4. PrismLine Instant ₹0 Rectification: Dispatched via Hotline, patched in 8 mins, cost to client: ₹0.00
 * 5. Client updates review to 5 Stars!
 * 6. Official Lifetime Warranty Certificate & Hotline: +91 99529 34596
 */
export function Stage4LaunchVector() {
  const [reviewTab, setReviewTab] = useState('positive'); // 'positive' | 'issue_report' | 'rectified'

  // Dynamic cycle showing customer review writing, issue reported, and ₹0 rectification
  useEffect(() => {
    const timer = setInterval(() => {
      setReviewTab((prev) => {
        if (prev === 'positive') return 'issue_report';
        if (prev === 'issue_report') return 'rectified';
        return 'positive';
      });
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="roadmap-realistic-window" aria-label="Customer Review Writing, Issue Feedback & Lifetime Rectification Console">
      {/* Topbar: macOS Header */}
      <div className="mac-app-topbar release-topbar">
        <div className="mac-traffic-lights">
          <span className="mac-light light-close" />
          <span className="mac-light light-min" />
          <span className="mac-light light-max" />
        </div>

        <div className="release-window-title">
          <span className="release-title-icon">🌟</span>
          <span>PrismLine Client Review &amp; Warranty Portal</span>
        </div>

        <div className="live-status-pill">
          <span className="live-beacon-dot" />
          <span>PRODUCTION LIVE</span>
        </div>
      </div>

      {/* Review & Rectification Split Console */}
      <div className="review-rectify-console-grid">
        {/* Left Side: Interactive Customer Review Writing & Issue Feedback Stream */}
        <div className="review-stream-pane">
          {/* Review Filter Navigation Tabs */}
          <div className="review-portal-tabs">
            <button
              type="button"
              className={`rev-tab-btn ${reviewTab === 'positive' ? 'active' : ''}`}
              onClick={() => setReviewTab('positive')}
            >
              ★ 1. Positive Review
            </button>
            <button
              type="button"
              className={`rev-tab-btn ${reviewTab === 'issue_report' ? 'active alert' : ''}`}
              onClick={() => setReviewTab('issue_report')}
            >
              ⚠️ 2. Issue Reported (Client)
            </button>
            <button
              type="button"
              className={`rev-tab-btn ${reviewTab === 'rectified' ? 'active success' : ''}`}
              onClick={() => setReviewTab('rectified')}
            >
              ✓ 3. Rectified at ₹0 (5★)
            </button>
          </div>

          {/* DYNAMIC SCENARIOS ACCORDING TO TAB */}
          {reviewTab === 'positive' && (
            /* 1. POSITIVE REVIEW WRITTEN BY CUSTOMER FOR PRISMLINE */
            <div className="review-card-interactive positive-scenario">
              <div className="rev-card-header">
                <div className="reviewer-info">
                  <div className="reviewer-avatar av-purple">PM</div>
                  <div>
                    <div className="reviewer-name">Priya Mohan</div>
                    <div className="reviewer-role">Founder, Silk &amp; Clay Luxe Store</div>
                  </div>
                </div>
                <div className="review-rating-block">
                  <span className="stars-gold">★★★★★</span>
                  <span className="rating-num">5.0 / 5.0</span>
                </div>
              </div>

              <div className="review-writing-box">
                <div className="writing-label">✍️ CUSTOMER REVIEW ON PRISMLINE WEBSITE:</div>
                <p className="writing-content">
                  “PrismLine built our entire luxury e-commerce website from scratch with zero templates.
                  Site speed is 99 on mobile, UI is mesmerizing, and 100% of our scope was delivered with zero hidden surcharges.
                  Best decision we made for our brand!”
                </p>
              </div>

              <div className="review-badge-footer">
                <span className="badge-tag green">✓ VERIFIED CLIENT SIGN-OFF</span>
                <span className="badge-tag blue">100% CODE OWNERSHIP TRANSFERRED</span>
                <span className="badge-tag gray">ZERO DOWNTIME LAUNCH</span>
              </div>
            </div>
          )}

          {reviewTab === 'issue_report' && (
            /* 2. CUSTOMER REPORTING A WEBSITE ISSUE / NEGATIVE FEEDBACK */
            <div className="review-card-interactive issue-scenario">
              <div className="rev-card-header">
                <div className="reviewer-info">
                  <div className="reviewer-avatar av-amber">AK</div>
                  <div>
                    <div className="reviewer-name">Arun Kumar</div>
                    <div className="reviewer-role">Operations Lead, Kavi Heritage Brands</div>
                  </div>
                </div>
                <div className="review-rating-block">
                  <span className="stars-amber">★★☆☆☆</span>
                  <span className="rating-num text-amber">2.0 / 5.0 (Issue Flagged)</span>
                </div>
              </div>

              <div className="review-writing-box issue-box">
                <div className="writing-label text-amber">
                  🚨 CLIENT REPORTED AN ISSUE ON THEIR LIVE WEBSITE:
                </div>
                <p className="writing-content">
                  “Hey PrismLine team, we just noticed on iOS Safari mobile that the checkout coupon button
                  has a 4px margin overlap with payment options on iPhone 15. Can you get this rectified ASAP?”
                </p>
              </div>

              <div className="hotline-ticket-action-bar">
                <span className="ticket-id">TICKET #PLT-BUG-8821</span>
                <span className="ticket-status-blink">⚡ HOTLINE DISPATCHED (&lt; 15-MIN SLA)</span>
                <span className="ticket-cost">CLIENT FEE: ₹0.00 (LIFETIME WARRANTY)</span>
              </div>
            </div>
          )}

          {reviewTab === 'rectified' && (
            /* 3. PRISMLINE RECTIFIES ISSUE IN 8 MINS -> CUSTOMER UPDATES TO 5 STARS */
            <div className="review-card-interactive rectified-scenario">
              <div className="rev-card-header">
                <div className="reviewer-info">
                  <div className="reviewer-avatar av-green">AK</div>
                  <div>
                    <div className="reviewer-name">Arun Kumar</div>
                    <div className="reviewer-role">Operations Lead, Kavi Heritage Brands</div>
                  </div>
                </div>
                <div className="review-rating-block">
                  <span className="stars-gold">★★★★★</span>
                  <span className="rating-num text-green">5.0 / 5.0 (UPDATED!)</span>
                </div>
              </div>

              <div className="rectification-timeline-box">
                <div className="rect-step-row">
                  <span className="step-dot green" />
                  <span className="step-text">
                    <strong>2:10 PM:</strong> Client reported Safari checkout margin variance.
                  </span>
                </div>
                <div className="rect-step-row">
                  <span className="step-dot cyan" />
                  <span className="step-text">
                    <strong>2:14 PM:</strong> Lead Architect Sanjay pushed Git fix `hotfix/safari-margin`.
                  </span>
                </div>
                <div className="rect-step-row">
                  <span className="step-dot green" />
                  <span className="step-text">
                    <strong>2:18 PM:</strong> Live in production (8 mins total). <strong>Client Invoiced: ₹0.00</strong>.
                  </span>
                </div>
              </div>

              <div className="review-writing-box updated-box">
                <div className="writing-label text-green">
                  ✓ CUSTOMER UPDATED THEIR REVIEW:
                </div>
                <p className="writing-content">
                  “Blown away by PrismLine’s support! Sanjay rectified our Safari margin glitch in just 8 minutes
                  at absolutely ₹0 cost. The Lifetime Warranty is 100% genuine. 5 stars!”
                </p>
              </div>
            </div>
          )}

          {/* Hotline Quick Link */}
          <div className="review-hotline-footer-bar">
            <span className="hotline-phone-icon">📞</span>
            <span className="hotline-label">DIRECT SENIOR HOTLINE:</span>
            <span className="hotline-phone-val">+91 99529 34596</span>
            <span className="hotline-guarantee-tag">₹0 Bug Rectification Anytime</span>
          </div>
        </div>

        {/* Right Side: Authentic Signed Lifetime Warranty Certificate */}
        <div className="warranty-cert-pane">
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

      {/* Window Footer */}
      <div className="mac-app-footer">
        <span>STATUS: ZERO DOWNTIME RELEASE &bull; LIFETIME ₹0 RECTIFICATION GUARANTEE</span>
      </div>
    </div>
  );
}
