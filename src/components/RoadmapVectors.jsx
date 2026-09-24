import React, { useState } from 'react';

/**
 * Stage 1: Discovery & Architectural Blueprint
 * Authentic Figma / Wireframe Design Canvas.
 * Realistic macOS app window showing genuine website wireframes, user flow connectors,
 * sticky note scope approval, and active designer cursor.
 */
export function Stage1BlueprintVector() {
  const [selectedFrame, setSelectedFrame] = useState('desktop');

  return (
    <div className="roadmap-realistic-window" aria-label="Figma Architecture & Wireframe Canvas">
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

      {/* Figma Tool Ribbon */}
      <div className="figma-toolbar-ribbon">
        <div className="figma-tools-left">
          <span className="f-tool active">↖</span>
          <span className="f-tool">#</span>
          <span className="f-tool">□</span>
          <span className="f-tool">T</span>
          <span className="f-tool">💬</span>
        </div>
        <div className="figma-tools-right">
          <span className="f-avatar">SV</span>
          <span className="f-user-label">Sanjay (Lead)</span>
        </div>
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

          {/* Realistic Figma Sticky Note */}
          <div className="figma-sticky-note">
            <div className="sticky-tape" />
            <div className="sticky-text">
              <strong>MILESTONE 01:</strong>
              <br />
              Client approved wireframes &amp; fixed proposal. Zero scope creep!
            </div>
            <div className="sticky-author">— Sanjay V.S</div>
          </div>

          {/* Collaboration Cursor Badge */}
          <div className="figma-live-cursor" aria-hidden="true">
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
        <span className="f-status-text">STAGE 01 APPROVED // 100% SPECIFICATION TRANSPARENCY</span>
      </div>
    </div>
  );
}

/**
 * Stage 2: Modern Web Design & Core Development
 * Realistic macOS split-screen: Authentic VS Code Editor (Left) + Live Safari/Chrome Storefront (Right).
 */
export function Stage2CodeVector() {
  const [cartCount, setCartCount] = useState(1);
  const [toastVisible, setToastVisible] = useState(false);

  const handleAddToCart = () => {
    setCartCount((c) => c + 1);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  };

  return (
    <div className="roadmap-realistic-window" aria-label="VS Code Development and Live Browser Preview">
      {/* macOS Topbar */}
      <div className="mac-app-topbar vscode-topbar">
        <div className="mac-traffic-lights">
          <span className="mac-light light-close" />
          <span className="mac-light light-min" />
          <span className="mac-light light-max" />
        </div>
        <div className="vscode-window-title">
          <span>Visual Studio Code — prismline-core [Workspace]</span>
        </div>
        <div className="vscode-branch-tag">
          <span>⎇ main*</span>
        </div>
      </div>

      {/* Split Screen Workspace: VS Code (Left) + Live Chrome Browser (Right) */}
      <div className="split-dev-workspace">
        {/* Left Side: Authentic VS Code Editor */}
        <div className="dev-vscode-pane">
          {/* VS Code Mini Activity Bar */}
          <div className="vscode-activity-bar">
            <span className="v-icon active">📁</span>
            <span className="v-icon">🔍</span>
            <span className="v-icon">🌿</span>
            <span className="v-icon">⚙️</span>
          </div>

          {/* VS Code Code Pane */}
          <div className="vscode-editor-pane">
            {/* Editor File Tabs */}
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

            {/* Code Content */}
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

            {/* VS Code Mini Terminal */}
            <div className="vscode-terminal-bar">
              <span className="term-prompt">✓</span>
              <span className="term-text">Vite 5.4 built in 480ms • 0 vulnerabilities</span>
            </div>
          </div>
        </div>

        {/* Right Side: Authentic Live Safari/Chrome Browser Preview */}
        <div className="dev-browser-pane">
          {/* Browser Address Bar */}
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

          {/* Actual Luxury Storefront UI Mockup */}
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
                  className="btn-store-cart"
                  onClick={handleAddToCart}
                >
                  Add To Bag +
                </button>
              </div>
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
 * Authentic Google Chrome DevTools / Lighthouse Audit Window.
 * Shows real 99 Performance gauge, Core Web Vitals (LCP, FID, CLS), and OWASP security pass report.
 */
export function Stage3AuditVector() {
  const [isScanning, setIsScanning] = useState(false);

  const handleRescan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 1400);
  };

  return (
    <div className="roadmap-realistic-window" aria-label="Google Chrome Lighthouse Audit Report">
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
          <button
            type="button"
            className="btn-chrome-rescan"
            onClick={handleRescan}
            disabled={isScanning}
          >
            {isScanning ? 'Testing...' : '↻ Re-Run Audit'}
          </button>
        </div>
      </div>

      {/* Chrome Omnibox Address */}
      <div className="chrome-omnibox-row">
        <div className="chrome-omnibox-field">
          <span className="ssl-badge">🔒 https://</span>
          <span className="url-domain">yourbrand.com</span>
          <span className="url-badge-verified">SECURE</span>
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
                  className={`lh-fill ${isScanning ? 'anim-rescan' : ''}`}
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
 * Authentic Production Release Console + Signed Official Lifetime Rectification Certificate.
 */
export function Stage4LaunchVector() {
  return (
    <div className="roadmap-realistic-window" aria-label="Production Release and Lifetime Rectification Warranty">
      {/* macOS Topbar */}
      <div className="mac-app-topbar release-topbar">
        <div className="mac-traffic-lights">
          <span className="mac-light light-close" />
          <span className="mac-light light-min" />
          <span className="mac-light light-max" />
        </div>
        <div className="release-window-title">
          <span>Production Deployment Console // Cloudflare &amp; Vercel Edge</span>
        </div>
        <div className="live-status-pill">
          <span className="live-beacon-dot" />
          <span>LIVE IN PRODUCTION</span>
        </div>
      </div>

      {/* Split Console: Live Deployment Status (Left) & Official Signed Warranty Certificate (Right) */}
      <div className="release-console-grid">
        {/* Left Side: Live Production Telemetry */}
        <div className="deploy-telemetry-panel">
          <div className="panel-kicker">EDGE DEPLOYMENT METRICS</div>

          {/* Deployment Metric Cards */}
          <div className="deploy-metric-card">
            <div className="deploy-meta-line">
              <span className="deploy-label">PRODUCTION DOMAIN</span>
              <span className="deploy-state ready">ONLINE</span>
            </div>
            <div className="deploy-domain-url">https://yourbrand.com</div>
          </div>

          <div className="deploy-metric-card">
            <div className="deploy-meta-line">
              <span className="deploy-label">GLOBAL CDN ROUTING</span>
              <span className="deploy-state">300+ PoPs</span>
            </div>
            <div className="deploy-subtext">Singapore (SIN-01) • 4ms response</div>
          </div>

          <div className="deploy-metric-card">
            <div className="deploy-meta-line">
              <span className="deploy-label">UPTIME SLA</span>
              <span className="deploy-state ready">99.99%</span>
            </div>
            <div className="deploy-subtext">Automated failover &amp; DDoS protection</div>
          </div>

          {/* Direct Senior Hotline */}
          <div className="deploy-hotline-card">
            <div className="hotline-icon">📞</div>
            <div className="hotline-details">
              <div className="hotline-title">DIRECT SENIOR HOTLINE</div>
              <div className="hotline-number">+91 99529 34596</div>
              <div className="hotline-sub">&lt; 15-Minute Response SLA</div>
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
                <span className="sig-label">AUTHORIZED PRISMLINE SIGNATURE</span>
                <span className="sig-hash">HASH #8F29-GUARANTEED-LIFETIME</span>
              </div>
              <span className="sig-badge">SEAL VERIFIED</span>
            </div>
          </div>
        </div>
      </div>

      {/* Console Footer */}
      <div className="mac-app-footer">
        <span>STATUS: ZERO DOWNTIME RELEASE • LIFETIME ₹0 RECTIFICATION GUARANTEE</span>
      </div>
    </div>
  );
}
