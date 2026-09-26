import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import VisionInActionShowcase from '../components/VisionInActionShowcase';

export default function Services() {
  useEffect(() => {
    document.title = 'Vision in Action — PrismLine | Completed Projects & Secure Web Engineering';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="services-page-wrap">
      {/* ── Page Hero Header ── */}
      <section className="section-wrapper inner-page-hero" style={{ paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="section-head" style={{ maxWidth: '880px' }}>
            <div className="editorial-kicker">VISION IN ACTION &bull; COMPLETED PROJECTS &amp; CAPABILITIES</div>
            <h1 className="page-hero-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', marginBottom: '1.2rem' }}>
              Vision in Action. <br />
              <span className="title-accent">Real-World Software Built Bold &amp; Shipped.</span>
            </h1>
            <p className="page-hero-desc" style={{ fontSize: '1.12rem', lineHeight: 1.7, color: 'var(--text-body)' }}>
              We turn client visions into high-impact digital realities. Explore our verified live production deployments &mdash; from autonomous AI customer agents and artisanal e-commerce storefronts to reactive web applications &mdash; all engineered with unbreakable security, sub-second latency, and backed by our Lifetime Rectification Warranty.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              <a href="#vision-in-action" className="btn-hero-primary" style={{ scrollBehavior: 'smooth' }}>
                Inspect Live Projects &darr;
              </a>
              <Link to="/contact" className="btn-hero-phone" style={{ background: '#FFFFFF', color: '#0F172A', border: '1px solid var(--border-subtle)' }}>
                Start a Web Project &rarr;
              </Link>
              <a href="tel:9952934596" className="btn-hero-phone">
                <span>📞</span> +91 99529 34596
              </a>
              <a href="https://wa.me/919952934596" target="_blank" rel="noopener noreferrer" className="btn-footer-wa" style={{ background: '#F0FDF4', color: '#15803D !important', border: '1px solid #BBF7D0' }}>
                <span>💬</span> WhatsApp Dispatch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision in Action: Completed Live Projects Showcase with 3D Tilt & Animations ── */}
      <VisionInActionShowcase />

      {/* ── Capabilities Transition Banner ── */}
      <section className="section-wrapper" style={{ padding: '3.5rem 0 2rem', background: '#F8FAFC', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <div className="sec-kicker-tag" style={{ justifyContent: 'center', marginBottom: '0.8rem' }}>
            <span className="sec-step-badge">FULL-STACK STACK</span>
            <span>CORE ARCHITECTURAL SERVICES</span>
          </div>
          <h2 style={{ fontSize: '2.1rem', marginBottom: '0.8rem', color: '#0F172A' }}>
            How We Engineer Every Vision.
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Every project we ship adheres to our ironclad 4-layer engineering standard &mdash; whether you require a custom enterprise web portal, a dynamic cloud app, a custom storefront, or zero-breach security hardening.
          </p>
        </div>
      </section>

      {/* ── Service Block 1: Company Websites & Portals ── */}
      <section className="section-wrapper bg-subtle" style={{ padding: '4.5rem 0', borderTop: '1px solid var(--border-subtle)' }} id="service-block-1">
        <div className="container story-split-layout">
          <div className="story-text-track">
            <div className="sec-kicker-tag">
              <span className="sec-step-badge">01 / 04</span>
              <span>CORPORATE INFRASTRUCTURE</span>
            </div>
            <h2 className="story-heading" style={{ fontSize: '2.4rem' }}>Company Websites &amp; Portals</h2>
            <p className="story-lead">Professional corporate websites, client dashboards, and secure backend APIs built on a hardened foundation to safeguard customer data without expensive enterprise agency overhead.</p>
            
            <div className="clean-spec-table">
              {[
                ['Database Immunity', 'Parameterized queries (100% SQLi protection)'],
                ['Data Protection', 'End-to-end form encryption & automated daily snapshots'],
                ['Deployment', 'Optimized for cPanel, AWS EC2, or GoDaddy hosting'],
                ['Emergency SLA', 'Direct senior engineer response in < 15 minutes'],
              ].map(([label, value]) => (
                <div className="spec-row" key={label}>
                  <span className="spec-label">{label}</span>
                  <span className="spec-value">{value}</span>
                </div>
              ))}
            </div>

            <div className="story-metric-callout">
              <span className="metric-big-num">100%</span>
              <div className="metric-caption">
                <strong>Zero SQL Injection Vulnerabilities</strong>
                <span>Hardened prepared statements and input validation by default.</span>
              </div>
            </div>

            <div className="story-actions">
              <Link to="/contact" className="iti-button">
                <span>Inquire On Portal</span>
                <span className="iti-button-icon">&rarr;</span>
              </Link>
              <a href="tel:9952934596" className="btn-hero-phone">📞 +91 99529 34596</a>
            </div>
          </div>

          {/* SVG Network Topology Canvas */}
          <div className="story-visual-stage">
            <div className="code-visual-canvas" id="topology-canvas">
              <div className="canvas-browser-bar">
                <div className="browser-traffic-lights">
                  <span className="t-dot dot-red"></span><span className="t-dot dot-yellow"></span><span className="t-dot dot-green"></span>
                </div>
                <div className="browser-route">
                  <span style={{ color: '#10B981' }}>🔒</span>
                  <span>topology://prismline/infrastructure-mesh</span>
                </div>
                <div className="browser-ping">
                  <span className="ping-indicator"></span>
                  <span>100% MESH ACTIVE</span>
                </div>
              </div>
              <div className="topology-svg-wrapper">
                <svg className="topology-svg" viewBox="0 0 540 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="topoGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(226,232,240,0.7)" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="540" height="340" fill="url(#topoGrid)" opacity="0.8"/>
                  <path className="topo-wire wire-1" d="M 120 170 C 180 170, 200 95, 270 95" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="300" strokeDashoffset="0"/>
                  <path className="topo-wire wire-2" d="M 120 170 C 180 170, 200 170, 270 170" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="300" strokeDashoffset="0"/>
                  <path className="topo-wire wire-3" d="M 120 170 C 180 170, 200 245, 270 245" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="300" strokeDashoffset="0"/>
                  <path className="topo-wire wire-4" d="M 270 95 C 340 95, 360 170, 420 170" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="300" strokeDashoffset="0"/>
                  <path className="topo-wire wire-5" d="M 270 170 C 340 170, 360 170, 420 170" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="300" strokeDashoffset="0"/>
                  <path className="topo-wire wire-6" d="M 270 245 C 340 245, 360 170, 420 170" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="300" strokeDashoffset="0"/>
                  <g className="topo-node node-client" transform="translate(60, 140)">
                    <rect width="110" height="60" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5"/>
                    <circle cx="20" cy="20" r="6" fill="#FF4D00"/>
                    <text x="32" y="23" fontFamily="Plus Jakarta Sans" fontSize="11" fontWeight="700" fill="#0F172A">Cloud Ingress</text>
                    <text x="20" y="44" fontFamily="JetBrains Mono" fontSize="9" fontWeight="600" fill="#64748B">portal.prismline.in</text>
                  </g>
                  <g className="topo-node node-waf" transform="translate(225, 65)">
                    <rect width="115" height="60" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5"/>
                    <circle cx="20" cy="20" r="6" fill="#10B981"/>
                    <text x="32" y="23" fontFamily="Plus Jakarta Sans" fontSize="11" fontWeight="700" fill="#0F172A">WAF Shield</text>
                    <text x="20" y="44" fontFamily="JetBrains Mono" fontSize="9" fontWeight="600" fill="#059669">CSP-3 &bull; Active</text>
                  </g>
                  <g className="topo-node node-app" transform="translate(225, 140)">
                    <rect width="115" height="60" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5"/>
                    <circle cx="20" cy="20" r="6" fill="#3B82F6"/>
                    <text x="32" y="23" fontFamily="Plus Jakarta Sans" fontSize="11" fontWeight="700" fill="#0F172A">API Engine</text>
                    <text x="20" y="44" fontFamily="JetBrains Mono" fontSize="9" fontWeight="600" fill="#1E40AF">Fast Node / React</text>
                  </g>
                  <g className="topo-node node-db" transform="translate(225, 215)">
                    <rect width="115" height="60" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5"/>
                    <circle cx="20" cy="20" r="6" fill="#8B5CF6"/>
                    <text x="32" y="23" fontFamily="Plus Jakarta Sans" fontSize="11" fontWeight="700" fill="#0F172A">Isolated SQL</text>
                    <text x="20" y="44" fontFamily="JetBrains Mono" fontSize="9" fontWeight="600" fill="#6B21A8">Parameterized</text>
                  </g>
                  <g className="topo-node node-dest" transform="translate(390, 140)">
                    <rect width="110" height="60" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5"/>
                    <circle cx="20" cy="20" r="6" fill="#10B981"/>
                    <text x="32" y="23" fontFamily="Plus Jakarta Sans" fontSize="11" fontWeight="700" fill="#0F172A">Zero-Breach</text>
                    <text x="20" y="44" fontFamily="JetBrains Mono" fontSize="9" fontWeight="600" fill="#059669">Encrypted 256-bit</text>
                  </g>
                </svg>
              </div>
              <div className="canvas-status-footer">
                <div className="footer-status-item"><span className="status-indicator-dot"></span><span>OWASP Top 10 Hardened</span></div>
                <div className="footer-status-item"><span style={{ color: '#64748B' }}>Query Latency:</span><strong style={{ color: '#0F172A', fontFamily: 'var(--font-mono)' }}>1.2ms</strong></div>
                <div className="footer-status-item"><span style={{ color: '#64748B' }}>TLS:</span><strong style={{ color: '#10B981', fontFamily: 'var(--font-mono)' }}>v1.3 Strict</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Block 2: Custom Web Applications ── */}
      <section className="section-wrapper" style={{ padding: '4.5rem 0', borderTop: '1px solid var(--border-subtle)' }} id="service-block-2">
        <div className="container story-split-layout layout-inverted">
          {/* Code Workbench */}
          <div className="story-visual-stage">
            <div className="code-visual-canvas dark-workbench" id="code-workbench">
              <div className="canvas-browser-bar dark-bar">
                <div className="browser-traffic-lights">
                  <span className="t-dot dot-red"></span><span className="t-dot dot-yellow"></span><span className="t-dot dot-green"></span>
                </div>
                <div className="workbench-file-tab">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ verticalAlign: 'middle', marginRight: '6px' }}>
                    <path d="M17.5 2.06L7.2 10.12L2.5 6.88L0.8 8.12L4.5 12L0.8 15.88L2.5 17.12L7.2 13.88L17.5 21.94L23.2 19.3V4.7L17.5 2.06Z" fill="#38BDF8"/>
                  </svg>
                  <span>middleware/security.ts</span>
                </div>
                <span className="workbench-env-badge">TypeScript 5.4 &bull; Strict</span>
              </div>
              <pre className="workbench-code-panel"><code id="workbench-code-stream"><span className="code-cmt">{'// OWASP-Hardened Session & Input Sanitization Pipeline'}</span>{'\n'}<span className="code-kw">import</span>{' { sanitizePayload, verifySession } '}<span className="code-kw">from</span>{' '}<span className="code-str">"@prismline/security"</span>{';'}{'\n'}<span className="code-kw">import</span>{' { NextResponse } '}<span className="code-kw">from</span>{' '}<span className="code-str">"next/server"</span>{';'}{'\n\n'}<span className="code-kw">export async function</span>{' '}<span className="code-fn">POST</span>{'(req: Request) {'}{'\n'}{'  '}<span className="code-kw">const</span>{' token = req.headers.'}<span className="code-fn">get</span>{'('}<span className="code-str">"authorization"</span>{');'}{'\n'}{'  '}<span className="code-kw">const</span>{' session = '}<span className="code-kw">await</span>{' '}<span className="code-fn">verifySession</span>{'(token);'}{'\n'}{'  '}<span className="code-kw">if</span>{' (!session.valid) {'}{'\n'}{'    '}<span className="code-kw">return</span>{' NextResponse.'}<span className="code-fn">json</span>{'({ error: '}<span className="code-str">"Unauthorized"</span>{'}, { status: '}<span className="code-num">401</span>{' });'}{'\n'}{'  }'}{'\n\n'}{'  '}<span className="code-kw">const</span>{' rawBody = '}<span className="code-kw">await</span>{' req.'}<span className="code-fn">json</span>{'();'}{'\n'}{'  '}<span className="code-kw">const</span>{' secureData = '}<span className="code-fn">sanitizePayload</span>{'(rawBody);'}{'\n\n'}{'  '}<span className="code-kw">return</span>{' NextResponse.'}<span className="code-fn">json</span>{'({'}{'\n'}{'    status: '}<span className="code-str">"verified"</span>{','}{'\n'}{'    latency_ms: '}<span className="code-num">38</span>{','}{'\n'}{'    xss_filtered: '}<span className="code-kw">true</span>{'\n'}{'  });'}{'\n'}{'}'}</code></pre>
              <div className="workbench-status-bar">
                <div className="wb-status-left">
                  <span className="status-indicator-dot"></span>
                  <span style={{ color: '#F1F5F9', fontWeight: 600 }}>POST</span>
                  <span style={{ color: '#94A3B8' }}>/api/v1/auth/session</span>
                </div>
                <div className="wb-status-right">
                  <span style={{ color: '#38BDF8' }}>200 OK</span>
                  <span style={{ color: '#64748B' }}>&bull;</span>
                  <span style={{ color: '#10B981', fontWeight: 700 }}>38ms latency</span>
                  <span style={{ color: '#64748B' }}>&bull;</span>
                  <span style={{ color: '#CBD5E1' }}>Zero-Trust Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="story-text-track">
            <div className="sec-kicker-tag">
              <span className="sec-step-badge">02 / 04</span>
              <span>CLOUD APPLICATION ENGINE</span>
            </div>
            <h2 className="story-heading" style={{ fontSize: '2.4rem' }}>Custom Web Applications</h2>
            <p className="story-lead">Dynamic web platforms built with React, Next.js, and Node.js. Flawless mobile responsiveness with built-in defense against XSS, injection attacks, and session hijacking.</p>
            
            <div className="numbered-editorial-list">
              {[
                ['01.', 'Fluid Multi-Device State', 'Sub-second client interactions with zero layout shifts across iOS, Android, and desktop devices.'],
                ['02.', 'OWASP-Hardened Authentication', 'Argon2id password hashing, rotating JWT sessions, and automated CSRF validation baked in by default.'],
                ['03.', 'Total Code Ownership', '100% proprietary code delivered with zero monthly SaaS cuts, vendor lock-ins, or recurring license fees.'],
              ].map(([num, title, desc]) => (
                <div className="numbered-row" key={num}>
                  <span className="num-idx">{num}</span>
                  <div className="num-text"><strong>{title}</strong><p>{desc}</p></div>
                </div>
              ))}
            </div>

            <div className="story-metric-callout">
              <span className="metric-big-num">&lt; 80ms</span>
              <div className="metric-caption">
                <strong>P99 Edge Latency</strong>
                <span>Serverless API execution optimized on Cloudflare Edge global nodes.</span>
              </div>
            </div>

            <div className="story-actions">
              <Link to="/contact" className="iti-button">
                <span>Plan Your Web App</span>
                <span className="iti-button-icon">&rarr;</span>
              </Link>
              <a href="tel:9952934596" className="btn-hero-phone">📞 +91 99529 34596</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Block 3: Digital Commerce Storefronts ── */}
      <section className="section-wrapper bg-subtle" style={{ padding: '4.5rem 0', borderTop: '1px solid var(--border-subtle)' }} id="service-block-3">
        <div className="container story-fullwidth-layout">
          <div className="fullwidth-header">
            <div className="sec-kicker-tag" style={{ justifyContent: 'center' }}>
              <span className="sec-step-badge">03 / 04</span>
              <span>DIGITAL COMMERCE</span>
            </div>
            <h2 className="story-heading fullwidth-title" style={{ fontSize: '2.4rem' }}>High-Converting E-Commerce Stores</h2>
            <p className="story-lead fullwidth-desc">High-converting online shops and product storefronts engineered for fast checkout, 99+ Core Web Vitals, and built-in protection against payment tampering and checkout fraud.</p>
          </div>

          <div className="interactive-commerce-pane">
            <div className="pane-browser-chrome">
              <div className="chrome-dots"><span className="c-dot red"></span><span className="c-dot yellow"></span><span className="c-dot green"></span></div>
              <div className="chrome-url-bar">
                <span>🔒</span>
                <span className="url-txt">https://auragift.in/collection/luxury-resins</span>
              </div>
              <div className="chrome-badge-pci">
                <span className="pci-shield">🛡️</span>
                <span>ZERO PCI SCOPE ACTIVE</span>
              </div>
            </div>

            <div className="commerce-split-stage">
              <div className="storefront-showcase-subpane">
                <div className="subpane-eyebrow">
                  <span>✦ LUXURY BOTANICAL COLLECTION</span>
                  <span className="live-badge">Real-Time Inventory</span>
                </div>
                <div className="product-duo-cards">
                  {[
                    { src: '/assets/images/auragift/products/shopping.jpeg', title: 'Botanical Keepsake', price: '₹1,499', stock: 'In Stock' },
                    { src: '/assets/images/auragift/products/gold-coasters.jpg', title: '24K Gold Coasters', price: '₹2,199', stock: 'Handmade' },
                  ].map(({ src, title, price, stock }) => (
                    <div className="product-item-card" key={title}>
                      <img src={src} alt={title} className="product-thumb-flat" />
                      <div className="product-details-box">
                        <div className="product-title-txt">{title}</div>
                        <div className="product-price-row">
                          <span className="product-price-num">{price}</span>
                          <span className="product-stock-tag">{stock}</span>
                        </div>
                        <button className="btn-add-product" type="button">Add to Cart +</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="checkout-sheet-pane">
                <div className="pane-meta-header">
                  <span>✦ EXPRESS ENCRYPTED CHECKOUT</span>
                  <span style={{ color: '#10B981', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>256-BIT TLS</span>
                </div>
                <div className="checkout-sheet-body">
                  <div className="checkout-item-line">
                    <div>
                      <strong>Curated Luxury Hamper + Coasters</strong>
                      <small style={{ display: 'block', color: '#64748B' }}>2 Items &bull; Free Express Delivery</small>
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#0F172A' }}>₹5,698</span>
                  </div>
                  <div className="checkout-payment-options">
                    <div className="payment-method-row selected"><span>⚡ UPI / GPay / PhonePe / QR</span><span style={{ color: '#10B981', fontWeight: 700 }}>Instant</span></div>
                    <div className="payment-method-row"><span>💳 Credit / Debit Card (Tokenized)</span><span style={{ color: '#64748B' }}>Visa/Master</span></div>
                    <div className="payment-method-row"><span>🏛️ NetBanking (50+ Banks)</span><span style={{ color: '#64748B' }}>Direct</span></div>
                  </div>
                  <div className="checkout-action-row">
                    <button className="btn-checkout-sim" type="button"><span>Pay ₹5,698 Securely &rarr;</span></button>
                    <div className="checkout-trust-badge"><span>🔒</span> Direct Bank Gateway &bull; Zero Card Data Stored</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="capabilities-trio-grid">
            {[
              ['99+', 'PageSpeed', 'Sub-Second Product Loads', 'Instant image optimization, edge caching, and zero render-blocking scripts ensure maximum visitor conversion.'],
              ['$0', 'Platform Tax', 'Zero Monthly SaaS Fees', 'No monthly Shopify subscription cuts or percentage fees on your revenue. Clean custom code you own outright.'],
              ['Zero', 'PCI Exposure', 'Isolated Payment Gateways', 'Direct integration with Razorpay and Stripe with encrypted client tokenization; zero card data touches your server.'],
            ].map(([num, badge, title, desc]) => (
              <div className="capability-item-card" key={title}>
                <div className="cap-metric-row">
                  <span className="cap-number">{num}</span>
                  <span className="cap-badge-mono">{badge}</span>
                </div>
                <h4 className="cap-title">{title}</h4>
                <p className="cap-desc">{desc}</p>
              </div>
            ))}
          </div>

          <div className="story-actions" style={{ justifyContent: 'center', marginTop: '2.5rem' }}>
            <Link to="/contact" className="iti-button">
              <span>Consult On Storefront</span>
              <span className="iti-button-icon">&rarr;</span>
            </Link>
            <a href="tel:9952934596" className="btn-hero-phone">📞 +91 99529 34596</a>
          </div>
        </div>
      </section>

      {/* ── Service Block 4: Zero-Breach Web Design & Hardening ── */}
      <section className="section-wrapper" style={{ padding: '4.5rem 0', borderTop: '1px solid var(--border-subtle)' }} id="service-block-4">
        <div className="container story-matrix-layout">
          <div className="matrix-head-wrap">
            <div className="sec-kicker-tag">
              <span className="sec-step-badge">04 / 04</span>
              <span>ZERO-BREACH HARDENING</span>
            </div>
            <h2 className="story-heading" style={{ fontSize: '2.4rem' }}>Modern Web Design &amp; Built-In Security</h2>
            <p className="story-lead">We craft intuitive, responsive mobile and desktop experiences pre-hardened against Cross-Site Scripting (XSS), token theft, and clickjacking without slowing down client browsers &mdash; backed by our Anytime Rectification Guarantee.</p>
          </div>

          <div className="comparison-table-card">
            <table className="matrix-table" aria-label="Security and Quality Comparison Table">
              <thead>
                <tr>
                  <th scope="col" style={{ width: '26%' }}>Security &amp; Engineering Vector</th>
                  <th scope="col" style={{ width: '36%' }}>Generic Agency / AI Template</th>
                  <th scope="col" className="th-standard-prismline" style={{ width: '38%' }}>PrismLine Hardened Standard</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Input Sanitization', '✕ Basic HTML escape or unvalidated forms', '✓ DOMPurify + strict parameterized queries (100% SQLi & XSS immunity)'],
                  ['Asset Integrity', '✕ Unchecked third-party CDN scripts', '✓ Subresource Integrity (SRI sha384 hashes) & CSP Level 3 dynamic nonces'],
                  ['Header Security', '✕ Default web server headers (Clickjacking vulnerable)', '✓ Strict X-Frame-Options: DENY, HSTS Preload, and anti-sniffing headers'],
                  ['Bug Rectification', '✕ Hourly billing for defect fixes ($75+/hr)', '✓ Lifetime Anytime Rectification Guarantee ($0 additional fee)'],
                  ['Support Channel', '✕ Anonymous ticketing queue with days of delay', '✓ Direct phone line to Senior Engineer (+91 99529 34596)'],
                ].map(([vector, generic, prism]) => (
                  <tr key={vector}>
                    <td className="td-vector">{vector}</td>
                    <td className="td-generic"><span className="cross-icon">✕</span> {generic.slice(2)}</td>
                    <td className="td-prismline"><span className="check-icon">✓</span> {prism.slice(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="light-guarantee-banner" style={{ marginTop: '2rem' }}>
            <div className="guarantee-banner-text">
              <div className="guarantee-tag-gold"><span>🛡️</span><span>ZERO-DEFECT WARRANTY POLICY</span></div>
              <h3 className="guarantee-banner-title">Lifetime Anytime Rectification Guarantee</h3>
              <p className="guarantee-banner-desc">If any security vulnerability, layout defect, or broken flow arises in code we delivered, we fix and patch it immediately at ₹0 additional charge. No hourly tickets. No excuses.</p>
            </div>
            <div className="guarantee-banner-actions">
              <Link to="/contact" className="iti-button">
                <span>Start Your Web Project</span>
                <span className="iti-button-icon">&rarr;</span>
              </Link>
              <a href="tel:9952934596" className="btn-hero-phone">📞 +91 99529 34596</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
