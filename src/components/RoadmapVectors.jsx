import React, { useState, useEffect } from 'react';

/**
 * Stage 1: Discovery & Architectural Blueprint
 * 100% Authentic Figma Canvas (Zero AI templates / Zero bottom footer bars).
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
    </div>
  );
}

/**
 * Stage 2: Modern Web Design & Core Development
 * "Code write panitu FULL SCREEN website varudu"
 * Full-width VS Code Editor typing React -> Smoothly transitions into FULL SCREEN luxury website storefront!
 * (Zero bottom footer bar).
 */
export function Stage2CodeVector() {
  const [viewMode, setViewMode] = useState('code'); // 'code' | 'preview'
  const [cartCount, setCartCount] = useState(1);
  const [toastVisible, setToastVisible] = useState(false);
  const [btnActive, setBtnActive] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 72, y: 72 });

  // Automated workflow: Writes code (4.5s) -> Launches full screen storefront (5.5s) -> Repeats
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
        setCursorPos({ x: 62, y: 70 });
      } else if (subStep === 1) {
        setBtnActive(true);
        setTimeout(() => {
          setBtnActive(false);
          setCartCount((c) => (c >= 3 ? 1 : c + 1));
          setToastVisible(true);
        }, 220);
      } else {
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

        {/* View Switcher Pills */}
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
    </div>
  );
}

/**
 * Stage 3: Testing, Speed Optimization & Security Audit
 * User explicitly instructed:
 * "img 5 i need website test and secure if vuln so error of page its no secure pls i need like this"
 *
 * Shows:
 * 1. Testing website for security
 * 2. When vulnerability detected -> Browser shows the iconic RED "NOT SECURE / VULNERABILITY DETECTED" ERROR SCREEN!
 * 3. PrismLine WAF hardening applies in real-time -> Defuses SQLi & XSS
 * 4. Page turns into 100% SECURE GREEN HTTPS with Google Lighthouse 99 Score!
 */
export function Stage3AuditVector() {
  // 6-Scene Video Animation Loop (Light UI, No Emojis, No Blue Scan Line):
  // Website 1 (E-Commerce):
  //   1. ecom_intro: Introduce E-Commerce storefront (clean, realistic luxury shop)
  //   2. ecom_test_fix: Test & fix live e-commerce site (header down to checkout, bug patched, order verified)
  //   3. ecom_security: Security defense of e-commerce site (256-Bit SSL, Edge WAF, OWASP rules active)
  // Website 2 (Company Site):
  //   4. corp_intro: Introduce Company SaaS platform (modern enterprise portal)
  //   5. corp_test_fix: Test & fix live company site (header down to inquiry form, XSS sanitized, 200 OK)
  //   6. corp_security: Security audit of company site (Google Lighthouse 99 Performance & Defended DevTools Log)
  const stages = [
    'ecom_intro',    // 1. E-Commerce Intro
    'ecom_test_fix', // 2. E-Commerce Test & Bug Fix
    'ecom_security', // 3. E-Commerce Security Defense
    'corp_intro',    // 4. Company Site Intro
    'corp_test_fix', // 5. Company Site Test & Bug Fix
    'corp_security', // 6. Company Site Security Audit
  ];

  const [stageIndex, setStageIndex] = useState(0);
  const [isManual, setIsManual] = useState(false);

  const currentStage = stages[stageIndex];
  const isEcom = stageIndex < 3;

  useEffect(() => {
    if (isManual) return;
    const interval = setInterval(() => {
      setStageIndex((prev) => (prev + 1) % stages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isManual, stages.length]);

  const handleSelectStage = (stageName) => {
    setIsManual(true);
    const idx = stages.indexOf(stageName);
    if (idx !== -1) setStageIndex(idx);
  };

  return (
    <div className="roadmap-realistic-window" aria-label="Automated Website Testing, Bug Rectification and Enterprise Security">
      {/* ── macOS Chrome Topbar (Zero Emojis) ── */}
      <div className={`mac-app-topbar chrome-topbar ${currentStage.includes('test_fix') ? 'topbar-warn' : ''}`}>
        <div className="mac-traffic-lights">
          <span className="mac-light light-close" />
          <span className="mac-light light-min" />
          <span className="mac-light light-max" />
        </div>

        {/* Tab Pill */}
        <div className="chrome-tab-pill active">
          <span className="chrome-tab-icon">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </span>
          <span className="chrome-tab-title">
            {isEcom ? 'silkandclay.store — E-Commerce' : 'apexcloud.io — Company Portal'}
          </span>
          <span className="chrome-tab-close">×</span>
        </div>

        {/* Interactive Mode Pills (Clean text, No Emojis) */}
        <div className="stage3-mode-pills">
          <button
            type="button"
            className={`stage3-pill-btn ${isEcom ? 'active-green' : ''}`}
            onClick={() => handleSelectStage('ecom_intro')}
            title="Website 1: E-Commerce Storefront"
          >
            1. E-Commerce
          </button>
          <button
            type="button"
            className={`stage3-pill-btn ${!isEcom ? 'active-green' : ''}`}
            onClick={() => handleSelectStage('corp_intro')}
            title="Website 2: Company SaaS Site"
          >
            2. Company Site
          </button>
          <button
            type="button"
            className={`stage3-pill-btn ${currentStage.includes('test_fix') ? 'active-amber' : ''}`}
            onClick={() => handleSelectStage(isEcom ? 'ecom_test_fix' : 'corp_test_fix')}
            title="Testing & Bug Rectification"
          >
            Test &amp; Fix
          </button>
          <button
            type="button"
            className={`stage3-pill-btn ${currentStage.includes('security') ? 'active-green' : ''}`}
            onClick={() => handleSelectStage(isEcom ? 'ecom_security' : 'corp_security')}
            title="Security & WAF Hardening"
          >
            Security Audit
          </button>
        </div>
      </div>

      {/* ── Chrome Omnibox ── */}
      <div className="chrome-omnibox-row">
        <div
          className={`chrome-omnibox-field ${
            currentStage.includes('test_fix') ? 'omnibox-securing' : 'omnibox-secure'
          }`}
        >
          <span className="ssl-badge text-green">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '3px' }}>
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            https://
          </span>
          <span className="url-domain">
            {isEcom ? 'silkandclay.store/checkout' : 'apexcloud.io/solutions'}
          </span>
          <span className="url-badge-verified">
            {currentStage === 'ecom_intro' && 'LIVE STOREFRONT // REACT 18'}
            {currentStage === 'ecom_test_fix' && 'AUTOMATED TEST & HOTFIX ACTIVE'}
            {currentStage === 'ecom_security' && 'EDGE WAF // OWASP TOP 10 SECURED'}
            {currentStage === 'corp_intro' && 'ENTERPRISE PORTAL // TELEMETRY'}
            {currentStage === 'corp_test_fix' && 'VULN SCAN & CSP QUARANTINE'}
            {currentStage === 'corp_security' && 'LIGHTHOUSE 99 AUDIT VERIFIED'}
          </span>
        </div>
      </div>

      {/* ── BROWSER BODY CONTAINER (Light UI, No Black Background) ── */}
      <div className="stage3-audit-body-container">

        {/* ══════════════════════════════════════════════════════════════════════
            WEBSITE 1: E-COMMERCE STORE (silkandclay.store)
            ══════════════════════════════════════════════════════════════════════ */}

        {/* 1. E-Commerce Intro: Live Luxury Storefront (silkandclay.store) */}
        {currentStage === 'ecom_intro' && (
          <div className="s3-site-canvas s3-fade-in">
            {/* Announcement Top Bar */}
            <div className="s3-ecom-announcement">
              COMPLIMENTARY WORLDWIDE COURIER &bull; ATELIER CERAMIC COLLECTION &bull; LIMITED EDITION
            </div>

            {/* Authentic Luxury Header */}
            <div className="s3-ecom-header">
              <div className="s3-ecom-brand">
                <span className="s3-ecom-brand-tag">SILK &amp; CLAY</span>
                <span className="s3-ecom-sub">STUDIO &amp; ATELIER</span>
              </div>
              <div className="s3-ecom-nav">
                <span>Ceramics</span>
                <span>Vessels</span>
                <span>Atelier</span>
                <span>Journal</span>
              </div>
              <div className="s3-ecom-actions">
                <span className="s3-ecom-currency">USD ($)</span>
                <div className="s3-ecom-cart-pill">Bag [1] &bull; $165.00</div>
              </div>
            </div>

            {/* Authentic Luxury Product Showcase with Real Generated Image */}
            <div className="s3-ecom-body-premium">
              <div className="s3-ecom-hero-split">
                <div className="s3-ecom-img-wrapper">
                  <img
                    src="/assets/images/silk-clay-ceramic.jpg"
                    alt="Artisan Terracotta Vessel"
                    className="s3-ecom-product-img"
                  />
                  <span className="s3-ecom-img-badge">LIMITED EDITION</span>
                </div>
                <div className="s3-ecom-details">
                  <div className="s3-ecom-cat">ATELIER COLLECTION &bull; VESSEL 04</div>
                  <div className="s3-ecom-h1">Artisan Hand-Thrown Terracotta Vase</div>
                  <div className="s3-ecom-stars">★★★★★ <span className="s3-ecom-star-num">4.9 (84 reviews)</span></div>
                  <p className="s3-ecom-desc">Sculptural organic silhouette crafted from natural ochre clay with soft matte slip.</p>
                  <div className="s3-ecom-price-row">
                    <span className="s3-ecom-price">$165.00</span>
                    <span className="s3-ecom-ship">&bull; Free Express Delivery</span>
                  </div>
                  <div className="s3-ecom-cta-row">
                    <button type="button" className="s3-btn-checkout-demo" onClick={() => handleSelectStage('ecom_test_fix')}>
                      Complete Checkout ($165.00) &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Authentic E-Commerce Website Footer (NO HUD STRIP) */}
            <div className="s3-ecom-site-footer">
              <div className="s3-ecom-footer-links">
                <span>Shipping &amp; Customs</span>
                <span>Artisan Care Guide</span>
                <span>Sustainability</span>
                <span>Contact Atelier</span>
              </div>
              <div className="s3-ecom-footer-copy">
                &copy; 2026 Silk &amp; Clay Inc. New York &bull; Paris. Encrypted 256-Bit SSL Checkout.
              </div>
            </div>
          </div>
        )}

        {/* 2. E-Commerce Test & Bug Fix */}
        {currentStage === 'ecom_test_fix' && (
          <div className="s3-site-canvas s3-fade-in">
            {/* Header */}
            <div className="s3-ecom-header">
              <div className="s3-ecom-brand">
                <span className="s3-ecom-brand-tag">SILK &amp; CLAY</span>
                <span className="s3-ecom-sub">STUDIO &amp; ATELIER</span>
              </div>
              <div className="s3-ecom-nav">
                <span className="text-green font-bold">Header Nav: PASS</span>
                <span className="text-green font-bold">Cart API: 200 OK</span>
              </div>
              <div className="s3-ecom-cart-pill text-green font-bold">Verified [200 OK]</div>
            </div>

            {/* Realtime Testing & Fix Card */}
            <div className="s3-clean-test-card">
              <div className="s3-test-header-row">
                <span className="s3-badge-test-warn">TEST SUITE &bull; POST /api/checkout</span>
                <span className="s3-badge-status-green">HOTFIX APPLIED (0.02s)</span>
              </div>

              <div className="s3-test-checklist-box">
                <div className="s3-test-check-line pass">
                  <span className="s3-check-mark">✓</span>
                  <span><strong>Header &amp; Navigation:</strong> SSR response validated in 0.12s</span>
                </div>
                <div className="s3-test-check-line warn">
                  <span className="s3-check-mark text-amber">!</span>
                  <span><strong>Bug Identified:</strong> Unsanitized database parameter on checkout route</span>
                </div>
                <div className="s3-test-check-line fixed">
                  <span className="s3-check-mark text-green">✓</span>
                  <span><strong>Auto-Patched:</strong> Parameterized driver enforced &bull; SQLi defused</span>
                </div>
                <div className="s3-test-check-line pass">
                  <span className="s3-check-mark">✓</span>
                  <span><strong>Result:</strong> Order #SC-4482 processed cleanly &bull; Zero client fee</span>
                </div>
              </div>

              <div className="s3-order-confirm-strip">
                <span className="s3-confirm-icon">✓</span>
                <span>Storefront operational &bull; Response: 38ms Edge &bull; Client Billed: $0.00</span>
              </div>
            </div>

            {/* Authentic E-Commerce Website Footer (NO HUD STRIP) */}
            <div className="s3-ecom-site-footer">
              <div className="s3-ecom-footer-links">
                <span>Shipping &amp; Customs</span>
                <span>Artisan Care Guide</span>
                <span>Sustainability</span>
                <span>Contact Atelier</span>
              </div>
              <div className="s3-ecom-footer-copy">
                &copy; 2026 Silk &amp; Clay Inc. New York &bull; Paris. Encrypted 256-Bit SSL Checkout.
              </div>
            </div>
          </div>
        )}

        {/* 3. E-Commerce Security Defense (Clean Light Dashboard) */}
        {currentStage === 'ecom_security' && (
          <div className="s3-site-canvas s3-fade-in">
            <div className="s3-security-dashboard-header">
              <div className="s3-sec-title">
                <span className="s3-sec-badge-live">DEFENSE ACTIVE</span>
                <span>PrismLine Edge Security &bull; silkandclay.store</span>
              </div>
              <span className="s3-sec-tls">TLS 1.3 // 256-BIT</span>
            </div>

            <div className="s3-security-cards-grid">
              <div className="s3-sec-card">
                <div className="s3-sec-card-header">
                  <span className="s3-sec-dot" />
                  <span className="s3-sec-card-title">OWASP Top 10 Hardened</span>
                </div>
                <div className="s3-sec-card-desc">Perimeter rules injected into Edge WAF. Zero SQLi, XSS, or CSRF injection vectors open.</div>
                <div className="s3-sec-card-tag text-green">PASS &bull; 0 VULNERABILITIES</div>
              </div>

              <div className="s3-sec-card">
                <div className="s3-sec-card-header">
                  <span className="s3-sec-dot" />
                  <span className="s3-sec-card-title">Database Driver Sanitized</span>
                </div>
                <div className="s3-sec-card-desc">Parameterized prepared statements enforced on all checkout &amp; cart APIs.</div>
                <div className="s3-sec-card-tag text-green">100% DEFUSED</div>
              </div>

              <div className="s3-sec-card">
                <div className="s3-sec-card-header">
                  <span className="s3-sec-dot" />
                  <span className="s3-sec-card-title">Strict Content Security (CSP)</span>
                </div>
                <div className="s3-sec-card-desc">Strict CSP policy active on all endpoints. Malicious external scripts stripped.</div>
                <div className="s3-sec-card-tag text-green">ENFORCED</div>
              </div>
            </div>

            {/* Authentic E-Commerce Website Footer (NO HUD STRIP) */}
            <div className="s3-ecom-site-footer">
              <div className="s3-ecom-footer-links">
                <span>Shipping &amp; Customs</span>
                <span>Artisan Care Guide</span>
                <span>Sustainability</span>
                <span>Contact Atelier</span>
              </div>
              <div className="s3-ecom-footer-copy">
                &copy; 2026 Silk &amp; Clay Inc. New York &bull; Paris. Encrypted 256-Bit SSL Checkout.
              </div>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════════════
            WEBSITE 2: COMPANY / ENTERPRISE SAAS PORTAL (apexcloud.io)
            ══════════════════════════════════════════════════════════════════════ */}

        {/* 4. Company Site Intro: Live Modern Enterprise Platform */}
        {currentStage === 'corp_intro' && (
          <div className="s3-site-canvas s3-fade-in">
            {/* Header */}
            <div className="s3-corp-header-clean">
              <div className="s3-corp-brand-clean">
                <span className="s3-corp-mark">▲</span>
                <span className="s3-corp-name-clean">APEX CLOUD</span>
                <span className="s3-corp-badge-enterprise">ENTERPRISE</span>
              </div>
              <div className="s3-corp-nav-clean">
                <span>Network</span>
                <span>Telemetry</span>
                <span>Security</span>
                <span>Docs</span>
              </div>
              <div className="s3-corp-header-right">
                <span className="s3-sla-pill">&bull; 99.999% SLA</span>
                <div className="s3-corp-cta-clean">Book Demo &rarr;</div>
              </div>
            </div>

            {/* Body */}
            <div className="s3-corp-body-premium">
              <div className="s3-corp-hero-split">
                <div className="s3-corp-info-col">
                  <div className="s3-corp-eyebrow">GLOBAL EDGE INFRASTRUCTURE</div>
                  <div className="s3-corp-h1-clean">Sub-5ms Real-Time Edge Telemetry &amp; WAF</div>
                  <div className="s3-corp-chips-clean">
                    <span className="s3-c-chip-clean">4,198 Nodes Active</span>
                    <span className="s3-c-chip-clean">&lt;8.4ms Latency</span>
                    <span className="s3-c-chip-clean">SOC2 Certified</span>
                  </div>

                  {/* Interactive Domain Telemetry Audit Form */}
                  <div className="s3-corp-form-box-clean">
                    <div className="s3-corp-input-row-clean">
                      <span className="s3-input-label-clean">Domain:</span>
                      <span className="s3-input-val-clean">corp.global.com</span>
                    </div>
                    <button type="button" className="s3-btn-corp-run" onClick={() => handleSelectStage('corp_test_fix')}>
                      Run Edge Telemetry Audit &rarr;
                    </button>
                  </div>
                </div>

                <div className="s3-corp-img-col">
                  <img
                    src="/assets/images/apex-cloud-telemetry.jpg"
                    alt="Apex Cloud Edge Topology Telemetry"
                    className="s3-corp-telemetry-img"
                  />
                  <span className="s3-corp-img-live-badge">LIVE TOPOLOGY</span>
                </div>
              </div>
            </div>

            {/* Authentic Enterprise Website Footer (NO HUD STRIP) */}
            <div className="s3-corp-site-footer">
              <div className="s3-corp-footer-links">
                <span>Points of Presence (180 PoPs)</span>
                <span>SOC2 Type II</span>
                <span>API Docs</span>
                <span>Status: Operational</span>
              </div>
              <div className="s3-corp-footer-copy">
                &copy; 2026 Apex Cloud Inc. Enterprise Systems. ISO 27001 Certified.
              </div>
            </div>
          </div>
        )}

        {/* 5. Company Site Test & Bug Fix */}
        {currentStage === 'corp_test_fix' && (
          <div className="s3-site-canvas s3-fade-in">
            {/* Header */}
            <div className="s3-corp-header-clean">
              <div className="s3-corp-brand-clean">
                <span className="s3-corp-mark">▲</span>
                <span className="s3-corp-name-clean">APEX CLOUD</span>
                <span className="s3-corp-badge-enterprise">ENTERPRISE</span>
              </div>
              <div className="s3-corp-nav-clean">
                <span className="text-green font-bold">Header Nav: PASS</span>
                <span className="text-green font-bold">Form API: 200 OK</span>
              </div>
              <div className="s3-corp-cta-clean" style={{ background: '#059669' }}>Verified ✓</div>
            </div>

            {/* Realtime Testing & Fix Card */}
            <div className="s3-clean-test-card">
              <div className="s3-test-header-row">
                <span className="s3-badge-test-warn">TEST SUITE &bull; POST /api/inquiry</span>
                <span className="s3-badge-status-green">XSS SANITIZED &amp; DEFUSED</span>
              </div>

              <div className="s3-test-checklist-box">
                <div className="s3-test-check-line pass">
                  <span className="s3-check-mark">✓</span>
                  <span><strong>Header &amp; SSL Cert:</strong> Validated &bull; TLS 1.3 Grade A+</span>
                </div>
                <div className="s3-test-check-line warn">
                  <span className="s3-check-mark text-amber">!</span>
                  <span><strong>Bug Identified:</strong> Raw HTML script tag submitted in message input</span>
                </div>
                <div className="s3-test-check-line fixed">
                  <span className="s3-check-mark text-green">✓</span>
                  <span><strong>Auto-Patched:</strong> DOMPurify sanitization &amp; strict CSP active</span>
                </div>
                <div className="s3-test-check-line pass">
                  <span className="s3-check-mark">✓</span>
                  <span><strong>Result:</strong> Enterprise lead ingested securely &bull; Zero leaks</span>
                </div>
              </div>

              <div className="s3-order-confirm-strip">
                <span className="s3-confirm-icon">✓</span>
                <span>Enterprise API Gateway: 100% Operational &bull; 0 Threat Breaches</span>
              </div>
            </div>

            {/* Authentic Enterprise Website Footer (NO HUD STRIP) */}
            <div className="s3-corp-site-footer">
              <div className="s3-corp-footer-links">
                <span>Points of Presence (180 PoPs)</span>
                <span>SOC2 Type II</span>
                <span>API Docs</span>
                <span>Status: Operational</span>
              </div>
              <div className="s3-corp-footer-copy">
                &copy; 2026 Apex Cloud Inc. Enterprise Systems. ISO 27001 Certified.
              </div>
            </div>
          </div>
        )}

        {/* 6. Company Site Security Audit: Google Lighthouse 99 (Light Background) */}
        {currentStage === 'corp_security' && (
          <div className="browser-secure-audit-page s3-fade-in">
            {/* 4 Iconic Google Lighthouse Dials */}
            <div className="lighthouse-scores-row">
              <div className="lh-score-col">
                <div className="lh-dial-wrapper">
                  <svg viewBox="0 0 80 80" className="lh-dial-svg">
                    <circle cx="40" cy="40" r="34" className="lh-track" />
                    <circle cx="40" cy="40" r="34" className="lh-fill" strokeDasharray="213.6" strokeDashoffset="2.1" />
                  </svg>
                  <div className="lh-dial-number score-green">99</div>
                </div>
                <div className="lh-dial-title">Performance</div>
              </div>

              <div className="lh-score-col">
                <div className="lh-dial-wrapper">
                  <svg viewBox="0 0 80 80" className="lh-dial-svg">
                    <circle cx="40" cy="40" r="34" className="lh-track" />
                    <circle cx="40" cy="40" r="34" className="lh-fill" strokeDasharray="213.6" strokeDashoffset="0" />
                  </svg>
                  <div className="lh-dial-number score-green">100</div>
                </div>
                <div className="lh-dial-title">Accessibility</div>
              </div>

              <div className="lh-score-col">
                <div className="lh-dial-wrapper">
                  <svg viewBox="0 0 80 80" className="lh-dial-svg">
                    <circle cx="40" cy="40" r="34" className="lh-track" />
                    <circle cx="40" cy="40" r="34" className="lh-fill" strokeDasharray="213.6" strokeDashoffset="0" />
                  </svg>
                  <div className="lh-dial-number score-green">100</div>
                </div>
                <div className="lh-dial-title">Best Practices</div>
              </div>

              <div className="lh-score-col">
                <div className="lh-dial-wrapper">
                  <svg viewBox="0 0 80 80" className="lh-dial-svg">
                    <circle cx="40" cy="40" r="34" className="lh-track" />
                    <circle cx="40" cy="40" r="34" className="lh-fill" strokeDasharray="213.6" strokeDashoffset="0" />
                  </svg>
                  <div className="lh-dial-number score-green">100</div>
                </div>
                <div className="lh-dial-title">SEO</div>
              </div>
            </div>

            {/* Resolved Threat Defense Log (Clean Light Table) */}
            <div className="devtools-security-log-card phase-3">
              <div className="log-header-row">
                <span className="log-title">OWASP TOP 10 HARDENED: ZERO EXPLOITS POSSIBLE</span>
                <span className="log-status-tag tag-phase-3">DEFENDED ✓</span>
              </div>
              <div className="security-request-rows">
                <div className="sec-req-row blocked">
                  <span className="http-status badge-403">403 BLOCKED</span>
                  <span className="req-path">POST /api/checkout [SQLi Deflected]</span>
                  <span className="req-reason">0 Leaks &bull; WAF Active</span>
                </div>
                <div className="sec-req-row blocked">
                  <span className="http-status badge-403">403 BLOCKED</span>
                  <span className="req-path">POST /api/inquiry [XSS Sanitized]</span>
                  <span className="req-reason">Strict CSP Quarantine</span>
                </div>
                <div className="sec-req-row passed">
                  <span className="http-status badge-200">200 OK</span>
                  <span className="req-path">GET /solutions [TLS 1.3 / 256-Bit SSL]</span>
                  <span className="req-reason">Legitimate Client &bull; 0.24s</span>
                </div>
              </div>
            </div>

            {/* Authentic Enterprise Website Footer (NO HUD STRIP) */}
            <div className="s3-corp-site-footer">
              <div className="s3-corp-footer-links">
                <span>Points of Presence (180 PoPs)</span>
                <span>SOC2 Type II</span>
                <span>API Docs</span>
                <span>Status: Operational</span>
              </div>
              <div className="s3-corp-footer-copy">
                &copy; 2026 Apex Cloud Inc. Enterprise Systems. ISO 27001 Certified.
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

/**
 * Stage 4: Launch the Website & Lifetime Rectification Support
 * User explicitly instructed:
 * "where is prism website wtf in that need to write review i ask like review from customer like review writting and giving feedback and if any issue we fix it
 * eg prismline websiteeyy review eldueyy by customer and give feedback if any issue in their website we will rectify it"
 *
 * This is the ACTUAL PRISMLINE WEBSITE (https://prismline.io/reviews) inside Safari!
 * Shows:
 * 1. PrismLine Website header & branding
 * 2. Customer writing a review for PrismLine website
 * 3. Client reporting a website issue / ticket on their live site
 * 4. PrismLine Rectification Guarantee deploying fix in 8 mins at ₹0 invoice
 * 5. Official Lifetime Warranty Certificate & Senior Hotline WhatsApp
 * (Zero bottom footer bar).
 */
export function Stage4LaunchVector() {
  const [activeScene, setActiveScene] = useState('writing'); // 'writing' | 'submitted' | 'issue' | 'fixed'
  const [isManual, setIsManual] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const scenes = ['writing', 'submitted', 'issue', 'fixed'];

  const reviewTexts = {
    writing: 'PrismLine built our entire luxury e-commerce website with zero templates. PageSpeed is 99 on mobile and our sales grew by 210% in the first month!',
    issue: 'Hey PrismLine team — noticed on our live website that on mobile Safari the checkout modal has a 4px margin overlap with payment options on iPhone 15. Please rectify ASAP.',
  };

  // Typing animation effect
  useEffect(() => {
    if (activeScene === 'writing' || activeScene === 'issue') {
      const text = activeScene === 'writing' ? reviewTexts.writing : reviewTexts.issue;
      setTypedText('');
      setIsTyping(true);
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          setTypedText(text.slice(0, i + 1));
          i++;
        } else {
          setIsTyping(false);
          clearInterval(typeInterval);
        }
      }, 22);
      return () => clearInterval(typeInterval);
    }
  }, [activeScene]);

  // Auto-cycle scenes
  useEffect(() => {
    if (isManual) return;
    const timer = setInterval(() => {
      setActiveScene(prev => {
        const idx = scenes.indexOf(prev);
        return scenes[(idx + 1) % scenes.length];
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [isManual]);

  const handleScene = (scene) => {
    setIsManual(true);
    setActiveScene(scene);
  };

  return (
    <div className="roadmap-realistic-window stage4-realistic-window" aria-label="PrismLine Website Customer Reviews and Lifetime Rectification">
      {/* ── macOS Realistic Chrome Topbar ── */}
      <div className={`mac-app-topbar chrome-topbar ${activeScene === 'issue' ? 'topbar-warn' : ''}`}>
        <div className="mac-traffic-lights">
          <span className="mac-light light-close" />
          <span className="mac-light light-min" />
          <span className="mac-light light-max" />
        </div>

        <div className="chrome-tab-pill active">
          <span className="chrome-tab-icon">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </span>
          <span className="chrome-tab-title">prismline.io — Reviews &amp; Rectify</span>
          <span className="chrome-tab-close">×</span>
        </div>

        {/* Interactive Mode / Scene Pills (Identical styling to Stage 3, No Emojis) */}
        <div className="stage3-mode-pills stage4-mode-pills">
          <button
            type="button"
            className={`stage3-pill-btn ${activeScene === 'writing' ? 'active-green' : ''}`}
            onClick={() => handleScene('writing')}
            title="Customer Writing Review"
          >
            Review
          </button>
          <button
            type="button"
            className={`stage3-pill-btn ${activeScene === 'submitted' ? 'active-green' : ''}`}
            onClick={() => handleScene('submitted')}
            title="Review Published"
          >
            5.0 Live
          </button>
          <button
            type="button"
            className={`stage3-pill-btn ${activeScene === 'issue' ? 'active-amber' : ''}`}
            onClick={() => handleScene('issue')}
            title="Report Issue"
          >
            Issue Flag
          </button>
          <button
            type="button"
            className={`stage3-pill-btn ${activeScene === 'fixed' ? 'active-green' : ''}`}
            onClick={() => handleScene('fixed')}
            title="Bug Rectified in 8 mins"
          >
            Rectified (8m)
          </button>
        </div>
      </div>

      {/* ── Chrome Omnibox ── */}
      <div className="chrome-omnibox-row">
        <div
          className={`chrome-omnibox-field ${
            activeScene === 'issue' ? 'omnibox-securing' : 'omnibox-secure'
          }`}
        >
          <span className="ssl-badge text-green">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '3px' }}>
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            https://
          </span>
          <span className="url-domain">prismline.io/customer-reviews</span>
          <span className="url-badge-verified">
            {activeScene === 'issue' ? 'HOTFIX DISPATCH ACTIVE' : 'LIFETIME WARRANTY ACTIVE'}
          </span>
        </div>
      </div>

      {/* ── BROWSER BODY: AUTHENTIC PRISMLINE WEBSITE ── */}
      <div className="stage4-audit-body-container">
        {/* PrismLine Site Header */}
        <div className="s4-site-navbar-compact">
          <div className="s4-brand-mini">
            <img src="/assets/images/logo-emblem.svg" alt="PrismLine" className="s4-brand-icon-mini" />
            <span className="s4-brand-name-mini">PRIS<span className="s4-brand-m">M</span>LINE</span>
          </div>
          <div className="s4-nav-links-mini">
            <span>Home</span>
            <span>Services</span>
            <span className="s4-nav-active-mini">Reviews ★</span>
            <span>Guarantee</span>
          </div>
          <div className="s4-hotline-pill-mini">
            Direct: +91 99529 34596
          </div>
        </div>

        {/* Scene 1: Customer Writing Review */}
        {activeScene === 'writing' && (
          <div className="s4-scene-compact s4-fade-in">
            <div className="s4-reviewer-compact">
              <div className="s4-av s4-av-purple">PM</div>
              <div className="s4-rev-details">
                <span className="s4-rev-name">Priya Mohan &bull; <span className="s4-rev-firm">Founder, Silk &amp; Clay</span></span>
                <span className="s4-stars">★★★★★ <span className="s4-rating-num">5.0 / 5.0</span></span>
              </div>
              <span className="s4-tag-verified">VERIFIED CLIENT</span>
            </div>

            <div className="s4-scene-label">Writing a Verified Review on prismline.io:</div>
            <div className="s4-typewriter-box">
              <span className="s4-typed-text">{typedText}</span>
              {isTyping && <span className="s4-cursor-blink">|</span>}
            </div>

            <div className="s4-action-row">
              <span className="s4-action-hint">Covered under ₹0 Lifetime Warranty</span>
              <button type="button" className="s4-btn s4-btn-green" onClick={() => handleScene('submitted')}>
                Submit Review &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Scene 2: Review Published Successfully */}
        {activeScene === 'submitted' && (
          <div className="s4-scene-compact s4-fade-in">
            <div className="s4-success-banner">
              <span className="s4-banner-check">✓</span>
              <span>Review Published Live on prismline.io &bull; ₹0 Cost</span>
            </div>

            <div className="s4-published-card">
              <div className="s4-reviewer-compact">
                <div className="s4-av s4-av-purple">PM</div>
                <div className="s4-rev-details">
                  <span className="s4-rev-name">Priya Mohan &bull; <span className="s4-rev-firm">Silk &amp; Clay (silkandclay.store)</span></span>
                  <span className="s4-stars">★★★★★ <span className="s4-rating-num">5.0 / 5.0</span></span>
                </div>
              </div>
              <p className="s4-quote">
                &ldquo;PrismLine built our luxury e-commerce website with zero templates. PageSpeed is 99 on mobile and sales grew by 210% in the first month!&rdquo;
              </p>
              <div className="s4-meta-badges">
                <span className="s4-badge-green">✓ 100% CODE OWNERSHIP TRANSFERRED</span>
                <span className="s4-badge-blue">PAGESPEED 99 MOBILE</span>
              </div>
            </div>

            <div className="s4-feedback-notice">
              PrismLine verified client telemetry: zero client charge for ongoing support.
            </div>
          </div>
        )}

        {/* Scene 3: Customer Reporting Issue */}
        {activeScene === 'issue' && (
          <div className="s4-scene-compact s4-fade-in">
            <div className="s4-reviewer-compact">
              <div className="s4-av s4-av-amber">AK</div>
              <div className="s4-rev-details">
                <span className="s4-rev-name">Arun Kumar &bull; <span className="s4-rev-firm">Ops Lead, Kavi Heritage Brands</span></span>
                <span className="s4-stars s4-stars-amber">★★☆☆☆ <span className="s4-rating-num text-amber">2.0 — Issue Flagged</span></span>
              </div>
              <span className="s4-tag-warn">TICKET #PLT-BUG-8821</span>
            </div>

            <div className="s4-scene-label text-amber">Customer Reporting an Issue on prismline.io:</div>
            <div className="s4-typewriter-box s4-typewriter-amber">
              <span className="s4-typed-text">{typedText}</span>
              {isTyping && <span className="s4-cursor-blink s4-cursor-amber">|</span>}
            </div>

            <div className="s4-sla-dispatch">
              <span className="s4-sla-text">ARCHITECT DISPATCHED &bull; &lt;15 MIN SLA &bull; CLIENT FEE: ₹0.00</span>
              <button type="button" className="s4-btn s4-btn-amber" onClick={() => handleScene('fixed')}>
                Deploy 8-Min Hotfix &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Scene 4: Issue Rectified & 5 Stars */}
        {activeScene === 'fixed' && (
          <div className="s4-scene-compact s4-fade-in">
            <div className="s4-reviewer-compact">
              <div className="s4-av s4-av-green">AK</div>
              <div className="s4-rev-details">
                <span className="s4-rev-name">Arun Kumar &bull; <span className="s4-rev-firm">Kavi Heritage Brands</span></span>
                <span className="s4-stars">★★★★★ <span className="s4-rating-num text-green">5.0 &bull; RECTIFIED!</span></span>
              </div>
              <span className="s4-tag-green">8-MIN RESOLUTION</span>
            </div>

            <div className="s4-timeline-mini">
              <div className="s4-tl-item">
                <span className="s4-tl-dot s4-tl-green" />
                <span><strong>2:10 PM:</strong> Client reported Safari mobile checkout margin overlap</span>
              </div>
              <div className="s4-tl-item">
                <span className="s4-tl-dot s4-tl-blue" />
                <span><strong>2:14 PM:</strong> Lead Architect Sanjay pushed Git fix <code>hotfix/safari-margin</code></span>
              </div>
              <div className="s4-tl-item">
                <span className="s4-tl-dot s4-tl-green" />
                <span><strong>2:18 PM:</strong> Deployed live to production &bull; <strong>Client Invoiced: ₹0.00</strong></span>
              </div>
            </div>

            <p className="s4-quote s4-quote-updated">
              &ldquo;Reported glitch at 2:10 PM, fixed and live by 2:18 PM with zero client fee. The Lifetime Rectification Warranty is 100% genuine! 5 stars!&rdquo;
            </p>
          </div>
        )}

        {/* Authentic PrismLine Website Footer (NO HUD / WARRANTY BAR) */}
        <div className="s4-site-footer-compact">
          <div className="s4-f-links">
            <span>Engineering</span>
            <span>Case Studies</span>
            <span>Bug Rectification</span>
            <span>Security Architecture</span>
          </div>
          <div className="s4-f-copy">
            &copy; 2026 PrismLine Digital Architecture &bull; ISO 9001 Certified &bull; 100% Code Ownership Guaranteed
          </div>
        </div>
      </div>
    </div>
  );
}
