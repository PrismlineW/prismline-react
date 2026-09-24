import React from 'react';

/**
 * Stage 1: Discovery & Architectural Blueprint
 * Clean, human-crafted vector blueprint with genuine software architecture nodes.
 */
export function Stage1BlueprintVector() {
  return (
    <div className="roadmap-vector-card" aria-label="System Architecture Blueprint">
      <svg
        viewBox="0 0 540 360"
        className="roadmap-vector-svg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Blueprint Grid Pattern */}
          <pattern id="bpGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(2, 132, 199, 0.08)" strokeWidth="0.8" />
          </pattern>

          {/* Linear Gradients */}
          <linearGradient id="bpCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#0B1329" />
          </linearGradient>

          <linearGradient id="nodeGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>

          <linearGradient id="nodeGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0369A1" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>

          <filter id="bpGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#0284C7" floodOpacity="0.2" />
          </filter>
        </defs>

        {/* Outer Blueprint Container Frame */}
        <rect x="2" y="2" width="536" height="356" rx="14" fill="url(#bpCardGrad)" stroke="rgba(2, 132, 199, 0.35)" strokeWidth="1.5" />
        <rect x="2" y="2" width="536" height="356" rx="14" fill="url(#bpGrid)" />

        {/* Header Bar */}
        <rect x="2" y="2" width="536" height="38" rx="14" fill="#090E17" />
        <rect x="2" y="26" width="536" height="14" fill="#090E17" />
        <line x1="2" y1="40" x2="538" y2="40" stroke="rgba(2, 132, 199, 0.25)" strokeWidth="1" />

        {/* Blueprint Title */}
        <circle cx="20" cy="21" r="4.5" fill="#EF4444" />
        <circle cx="34" cy="21" r="4.5" fill="#F59E0B" />
        <circle cx="48" cy="21" r="4.5" fill="#10B981" />

        <text x="70" y="25" fill="#38BDF8" fontSize="11" fontFamily="'JetBrains Mono', monospace" fontWeight="600" letterSpacing="0.04em">
          📐 PRISMLINE ARCHITECTURE BLUEPRINT • v2.4
        </text>

        {/* Status Pill */}
        <rect x="390" y="12" width="134" height="18" rx="9" fill="rgba(2, 132, 199, 0.15)" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="0.8" />
        <circle cx="402" cy="21" r="3" fill="#38BDF8" />
        <text x="412" y="25" fill="#E0F2FE" fontSize="9" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">
          SCOPE VERIFIED
        </text>

        {/* Left Column: Architecture Pipeline */}
        {/* Node 1: Client Layer */}
        <g transform="translate(24, 62)">
          <rect width="210" height="48" rx="8" fill="#131C31" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1" />
          <rect x="8" y="10" width="28" height="28" rx="6" fill="rgba(2, 132, 199, 0.2)" />
          <text x="17" y="28" fill="#38BDF8" fontSize="14">🌐</text>
          <text x="46" y="23" fill="#FFFFFF" fontSize="11" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">Client / Edge Interface</text>
          <text x="46" y="37" fill="#94A3B8" fontSize="9" fontFamily="'JetBrains Mono', monospace">React 19 • Fast CDN Edge</text>
        </g>

        {/* Connector 1 */}
        <path d="M 129 110 L 129 126" stroke="#0284C7" strokeWidth="2" strokeDasharray="3 3" />
        <polygon points="126,124 132,124 129,129" fill="#0284C7" />

        {/* Node 2: Security & WAF */}
        <g transform="translate(24, 130)">
          <rect width="210" height="48" rx="8" fill="#131C31" stroke="rgba(2, 132, 199, 0.5)" strokeWidth="1" filter="url(#bpGlow)" />
          <rect x="8" y="10" width="28" height="28" rx="6" fill="rgba(2, 132, 199, 0.25)" />
          <text x="17" y="28" fill="#38BDF8" fontSize="14">🛡️</text>
          <text x="46" y="23" fill="#38BDF8" fontSize="11" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">Built-in Security Perimeter</text>
          <text x="46" y="37" fill="#94A3B8" fontSize="9" fontFamily="'JetBrains Mono', monospace">TLS 1.3 • OWASP Hardened</text>
        </g>

        {/* Connector 2 */}
        <path d="M 129 178 L 129 194" stroke="#0284C7" strokeWidth="2" strokeDasharray="3 3" />
        <polygon points="126,192 132,192 129,197" fill="#0284C7" />

        {/* Node 3: Core API Services */}
        <g transform="translate(24, 198)">
          <rect width="210" height="48" rx="8" fill="#131C31" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1" />
          <rect x="8" y="10" width="28" height="28" rx="6" fill="rgba(2, 132, 199, 0.2)" />
          <text x="17" y="28" fill="#38BDF8" fontSize="14">⚡</text>
          <text x="46" y="23" fill="#FFFFFF" fontSize="11" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">Application Core &amp; APIs</text>
          <text x="46" y="37" fill="#94A3B8" fontSize="9" fontFamily="'JetBrains Mono', monospace">Modular Node.js Backend</text>
        </g>

        {/* Connector 3 */}
        <path d="M 129 246 L 129 262" stroke="#0284C7" strokeWidth="2" strokeDasharray="3 3" />
        <polygon points="126,260 132,260 129,265" fill="#0284C7" />

        {/* Node 4: Database & Storage */}
        <g transform="translate(24, 266)">
          <rect width="210" height="48" rx="8" fill="#131C31" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1" />
          <rect x="8" y="10" width="28" height="28" rx="6" fill="rgba(2, 132, 199, 0.2)" />
          <text x="17" y="28" fill="#38BDF8" fontSize="14">🗄️</text>
          <text x="46" y="23" fill="#FFFFFF" fontSize="11" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">Encrypted Storage &amp; DB</text>
          <text x="46" y="37" fill="#94A3B8" fontSize="9" fontFamily="'JetBrains Mono', monospace">PostgreSQL • Zero Data Leak</text>
        </g>

        {/* Right Column: Wireframe & Project Specification */}
        <g transform="translate(260, 62)">
          {/* Wireframe Mockup Canvas */}
          <rect width="256" height="252" rx="10" fill="#090E17" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" />
          
          {/* Wireframe Mini Topbar */}
          <rect x="8" y="8" width="240" height="14" rx="3" fill="#1E293B" />
          <circle cx="16" cy="15" r="2.5" fill="#64748B" />
          <circle cx="24" cy="15" r="2.5" fill="#64748B" />
          <rect x="50" y="11" width="80" height="8" rx="2" fill="#334155" />

          {/* Wireframe Hero Banner */}
          <rect x="8" y="28" width="240" height="52" rx="4" fill="rgba(2, 132, 199, 0.12)" stroke="rgba(2, 132, 199, 0.3)" strokeDasharray="2 2" />
          <rect x="18" y="38" width="110" height="10" rx="2" fill="#38BDF8" opacity="0.8" />
          <rect x="18" y="52" width="70" height="6" rx="2" fill="#64748B" />
          <rect x="18" y="62" width="45" height="10" rx="3" fill="#0284C7" />
          <rect x="175" y="36" width="60" height="36" rx="4" fill="#1E293B" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="0.8" />
          <text x="188" y="58" fill="#38BDF8" fontSize="16">🎨</text>

          {/* Wireframe 3-Column Features */}
          <rect x="8" y="86" width="76" height="42" rx="3" fill="#131C31" stroke="rgba(255, 255, 255, 0.05)" />
          <rect x="14" y="94" width="24" height="4" rx="1" fill="#38BDF8" />
          <rect x="14" y="102" width="50" height="3" rx="1" fill="#475569" />
          <rect x="14" y="108" width="40" height="3" rx="1" fill="#475569" />

          <rect x="90" y="86" width="76" height="42" rx="3" fill="#131C31" stroke="rgba(255, 255, 255, 0.05)" />
          <rect x="96" y="94" width="24" height="4" rx="1" fill="#38BDF8" />
          <rect x="96" y="102" width="50" height="3" rx="1" fill="#475569" />
          <rect x="96" y="108" width="40" height="3" rx="1" fill="#475569" />

          <rect x="172" y="86" width="76" height="42" rx="3" fill="#131C31" stroke="rgba(255, 255, 255, 0.05)" />
          <rect x="178" y="94" width="24" height="4" rx="1" fill="#38BDF8" />
          <rect x="178" y="102" width="50" height="3" rx="1" fill="#475569" />
          <rect x="178" y="108" width="40" height="3" rx="1" fill="#475569" />

          {/* Transparent Scope Guarantee Badge */}
          <g transform="translate(8, 136)">
            <rect width="240" height="106" rx="6" fill="#0B132B" stroke="rgba(2, 132, 199, 0.3)" />
            <text x="12" y="20" fill="#38BDF8" fontSize="10" fontFamily="'JetBrains Mono', monospace" fontWeight="700">
              SPECIFICATION GUARANTEES:
            </text>
            <text x="12" y="42" fill="#E2E8F0" fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif">
              ✓ 100% Fixed-Price Scope — ₹0 Hidden Fees
            </text>
            <text x="12" y="62" fill="#E2E8F0" fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif">
              ✓ User Flow &amp; Wireframe Milestones
            </text>
            <text x="12" y="82" fill="#E2E8F0" fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif">
              ✓ Built-in Data Security Architecture
            </text>
            <line x1="12" y1="94" x2="228" y2="94" stroke="rgba(2, 132, 199, 0.2)" strokeWidth="0.8" />
          </g>
        </g>

        {/* Bottom Bar Info */}
        <text x="24" y="342" fill="#64748B" fontSize="9.5" fontFamily="'JetBrains Mono', monospace">
          STAMP: STAGE 01 APPROVED • CLIENT OWNS 100% SPECIFICATIONS • ZERO LOCK-IN
        </text>
      </svg>
    </div>
  );
}

/**
 * Stage 2: Modern Web Design & Core Development
 * Authentic developer IDE with real TypeScript/React syntax, component tree, and live UI preview.
 */
export function Stage2CodeVector() {
  return (
    <div className="roadmap-vector-card" aria-label="Modern Web Design & Core Development">
      <svg
        viewBox="0 0 540 360"
        className="roadmap-vector-svg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="codeBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E1E24" />
            <stop offset="100%" stopColor="#141419" />
          </linearGradient>

          <filter id="codeGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#FF5722" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* Outer IDE Window Container */}
        <rect x="2" y="2" width="536" height="356" rx="14" fill="url(#codeBgGrad)" stroke="rgba(255, 87, 34, 0.35)" strokeWidth="1.5" />

        {/* Top Window Chrome Bar */}
        <rect x="2" y="2" width="536" height="38" rx="14" fill="#121217" />
        <rect x="2" y="26" width="536" height="14" fill="#121217" />
        <line x1="2" y1="40" x2="538" y2="40" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />

        {/* Window Traffic Lights */}
        <circle cx="20" cy="21" r="4.5" fill="#EF4444" />
        <circle cx="34" cy="21" r="4.5" fill="#F59E0B" />
        <circle cx="48" cy="21" r="4.5" fill="#10B981" />

        {/* Active Tabs */}
        <rect x="75" y="10" width="118" height="30" rx="6" fill="#1E1E24" stroke="rgba(255, 87, 34, 0.4)" strokeWidth="0.8" />
        <text x="87" y="29" fill="#FF7043" fontSize="11" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
          ⚛️ Storefront.tsx
        </text>

        <rect x="198" y="10" width="108" height="30" rx="6" fill="#16161B" />
        <text x="210" y="29" fill="#94A3B8" fontSize="10.5" fontFamily="'JetBrains Mono', monospace">
          🛡️ security.ts
        </text>

        <rect x="310" y="10" width="98" height="30" rx="6" fill="#16161B" />
        <text x="322" y="29" fill="#94A3B8" fontSize="10.5" fontFamily="'JetBrains Mono', monospace">
          styles.css
        </text>

        {/* Status Pill */}
        <rect x="420" y="12" width="106" height="18" rx="9" fill="rgba(255, 87, 34, 0.15)" stroke="rgba(255, 87, 34, 0.4)" strokeWidth="0.8" />
        <circle cx="430" cy="21" r="3" fill="#FF5722" />
        <text x="440" y="24" fill="#FFCCBC" fontSize="9" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">
          CLEAN BUILD
        </text>

        {/* Left Side: Code Editor (Real, Clean TypeScript Code) */}
        <g transform="translate(18, 52)">
          {/* Line Numbers */}
          <text x="0" y="18" fill="#4B5563" fontSize="11" fontFamily="'JetBrains Mono', monospace">01</text>
          <text x="0" y="38" fill="#4B5563" fontSize="11" fontFamily="'JetBrains Mono', monospace">02</text>
          <text x="0" y="58" fill="#4B5563" fontSize="11" fontFamily="'JetBrains Mono', monospace">03</text>
          <text x="0" y="78" fill="#4B5563" fontSize="11" fontFamily="'JetBrains Mono', monospace">04</text>
          <text x="0" y="98" fill="#4B5563" fontSize="11" fontFamily="'JetBrains Mono', monospace">05</text>
          <text x="0" y="118" fill="#4B5563" fontSize="11" fontFamily="'JetBrains Mono', monospace">06</text>
          <text x="0" y="138" fill="#4B5563" fontSize="11" fontFamily="'JetBrains Mono', monospace">07</text>
          <text x="0" y="158" fill="#4B5563" fontSize="11" fontFamily="'JetBrains Mono', monospace">08</text>
          <text x="0" y="178" fill="#4B5563" fontSize="11" fontFamily="'JetBrains Mono', monospace">09</text>
          <text x="0" y="198" fill="#4B5563" fontSize="11" fontFamily="'JetBrains Mono', monospace">10</text>
          <text x="0" y="218" fill="#4B5563" fontSize="11" fontFamily="'JetBrains Mono', monospace">11</text>
          <text x="0" y="238" fill="#4B5563" fontSize="11" fontFamily="'JetBrains Mono', monospace">12</text>

          {/* Code Text Content */}
          <g transform="translate(26, 0)">
            {/* Line 1 */}
            <text x="0" y="18" fontSize="10.5" fontFamily="'JetBrains Mono', monospace">
              <tspan fill="#C084FC">import</tspan> <tspan fill="#F8FAFC">&#123; createStorefront &#125;</tspan> <tspan fill="#C084FC">from</tspan> <tspan fill="#86EFAC">'@prismline/core'</tspan>;
            </text>

            {/* Line 2 */}
            <text x="0" y="38" fontSize="10.5" fontFamily="'JetBrains Mono', monospace">
              <tspan fill="#C084FC">import</tspan> <tspan fill="#F8FAFC">&#123; useSecureCheckout &#125;</tspan> <tspan fill="#C084FC">from</tspan> <tspan fill="#86EFAC">'@/hooks'</tspan>;
            </text>

            {/* Line 3: blank */}

            {/* Line 4 */}
            <text x="0" y="78" fontSize="10.5" fontFamily="'JetBrains Mono', monospace">
              <tspan fill="#60A5FA">export function</tspan> <tspan fill="#FDE047">Storefront</tspan><tspan fill="#F8FAFC">() &#123;</tspan>
            </text>

            {/* Line 5 */}
            <text x="14" y="98" fontSize="10.5" fontFamily="'JetBrains Mono', monospace">
              <tspan fill="#C084FC">const</tspan> <tspan fill="#F8FAFC">&#123; cart, total &#125; =</tspan> <tspan fill="#FDE047">useSecureCheckout</tspan><tspan fill="#F8FAFC">();</tspan>
            </text>

            {/* Line 6 */}
            <text x="14" y="118" fontSize="10.5" fontFamily="'JetBrains Mono', monospace">
              <tspan fill="#C084FC">return</tspan> <tspan fill="#F8FAFC">(</tspan>
            </text>

            {/* Line 7 */}
            <text x="28" y="138" fontSize="10.5" fontFamily="'JetBrains Mono', monospace">
              <tspan fill="#60A5FA">&lt;</tspan><tspan fill="#38BDF8">FastGateway</tspan>
            </text>

            {/* Line 8 */}
            <text x="42" y="158" fontSize="10.5" fontFamily="'JetBrains Mono', monospace">
              <tspan fill="#FB923C">encryption</tspan><tspan fill="#F8FAFC">=</tspan><tspan fill="#86EFAC">"TLS-256"</tspan>
            </text>

            {/* Line 9 */}
            <text x="42" y="178" fontSize="10.5" fontFamily="'JetBrains Mono', monospace">
              <tspan fill="#FB923C">zeroTrustHardened</tspan><tspan fill="#F8FAFC">=</tspan><tspan fill="#C084FC">&#123;true&#125;</tspan>
            </text>

            {/* Line 10 */}
            <text x="42" y="198" fontSize="10.5" fontFamily="'JetBrains Mono', monospace">
              <tspan fill="#FB923C">sourceCodeOwnership</tspan><tspan fill="#F8FAFC">=</tspan><tspan fill="#86EFAC">"100%"</tspan>
            </text>

            {/* Line 11 */}
            <text x="28" y="218" fontSize="10.5" fontFamily="'JetBrains Mono', monospace">
              <tspan fill="#60A5FA">/&gt;</tspan>
            </text>

            {/* Line 12 */}
            <text x="14" y="238" fontSize="10.5" fontFamily="'JetBrains Mono', monospace">
              <tspan fill="#F8FAFC">);</tspan> <tspan fill="#94A3B8">&#125;</tspan>
            </text>
          </g>
        </g>

        {/* Right Side: Component Live Preview Frame */}
        <g transform="translate(345, 52)">
          <rect width="175" height="240" rx="8" fill="#0D0D12" stroke="rgba(255, 87, 34, 0.4)" strokeWidth="1" filter="url(#codeGlow)" />
          
          {/* Mini UI Header */}
          <rect x="6" y="6" width="163" height="18" rx="4" fill="#1A1A22" />
          <circle cx="16" cy="15" r="3" fill="#FF5722" />
          <rect x="25" y="12" width="60" height="6" rx="2" fill="#64748B" />
          <rect x="135" y="11" width="28" height="8" rx="2" fill="rgba(255, 87, 34, 0.3)" />

          {/* Mini Storefront Card */}
          <rect x="10" y="32" width="155" height="60" rx="6" fill="#16161E" stroke="rgba(255, 255, 255, 0.08)" />
          <rect x="16" y="38" width="48" height="48" rx="4" fill="#252532" />
          <text x="32" y="68" fill="#FF8A65" fontSize="16">🌿</text>
          <text x="70" y="50" fill="#FFFFFF" fontSize="9" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">Artisan Keepsake</text>
          <text x="70" y="62" fill="#10B981" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="700">₹1,499.00</text>
          <rect x="70" y="70" width="85" height="14" rx="3" fill="#FF5722" />
          <text x="82" y="80" fill="#FFFFFF" fontSize="7.5" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">🔒 Complete Order</text>

          {/* Feature Badges List */}
          <g transform="translate(10, 102)">
            <rect width="155" height="128" rx="6" fill="#121218" stroke="rgba(255, 87, 34, 0.25)" />
            <text x="10" y="18" fill="#FF7043" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="700">
              DEVELOPMENT METRICS:
            </text>
            <text x="10" y="38" fill="#E2E8F0" fontSize="8.5" fontFamily="'Plus Jakarta Sans', sans-serif">
              ⚡ Mobile-First Responsive
            </text>
            <text x="10" y="56" fill="#E2E8F0" fontSize="8.5" fontFamily="'Plus Jakarta Sans', sans-serif">
              ⚡ Zero Bloated Plugins
            </text>
            <text x="10" y="74" fill="#E2E8F0" fontSize="8.5" fontFamily="'Plus Jakarta Sans', sans-serif">
              ⚡ High-Speed React 19 Engine
            </text>
            <text x="10" y="92" fill="#E2E8F0" fontSize="8.5" fontFamily="'Plus Jakarta Sans', sans-serif">
              ⚡ 100% Code Ownership
            </text>
            <rect x="10" y="104" width="135" height="16" rx="4" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" strokeWidth="0.8" />
            <text x="24" y="115" fill="#34D399" fontSize="8" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">
              ✓ Ready for Audit Inspection
            </text>
          </g>
        </g>

        {/* Bottom Bar Info */}
        <text x="24" y="342" fill="#64748B" fontSize="9.5" fontFamily="'JetBrains Mono', monospace">
          STATUS: MODULAR ARCHITECTURE • ZERO THIRD-PARTY DEPENDENCY LOCK-IN • CLEAN CODE
        </text>
      </svg>
    </div>
  );
}

/**
 * Stage 3: Testing, Speed Optimization & Security Audit
 * Real Lighthouse 99 Performance gauge and comprehensive security verification checklist.
 */
export function Stage3AuditVector() {
  return (
    <div className="roadmap-vector-card" aria-label="Speed Optimization & Security Audit">
      <svg
        viewBox="0 0 540 360"
        className="roadmap-vector-svg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="auditBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E1618" />
            <stop offset="100%" stopColor="#130E10" />
          </linearGradient>

          <filter id="auditGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#D50000" floodOpacity="0.22" />
          </filter>
        </defs>

        {/* Outer Audit Console Frame */}
        <rect x="2" y="2" width="536" height="356" rx="14" fill="url(#auditBgGrad)" stroke="rgba(213, 0, 0, 0.35)" strokeWidth="1.5" />

        {/* Top Header */}
        <rect x="2" y="2" width="536" height="38" rx="14" fill="#140D0E" />
        <rect x="2" y="26" width="536" height="14" fill="#140D0E" />
        <line x1="2" y1="40" x2="538" y2="40" stroke="rgba(213, 0, 0, 0.25)" strokeWidth="1" />

        <circle cx="20" cy="21" r="4.5" fill="#EF4444" />
        <circle cx="34" cy="21" r="4.5" fill="#F59E0B" />
        <circle cx="48" cy="21" r="4.5" fill="#10B981" />

        <text x="70" y="25" fill="#FF5252" fontSize="11" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
          🔍 LIGHTHOUSE CORE WEB VITALS &amp; SECURITY AUDIT
        </text>

        {/* Status Pill */}
        <rect x="400" y="12" width="124" height="18" rx="9" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" strokeWidth="0.8" />
        <circle cx="412" cy="21" r="3" fill="#10B981" />
        <text x="422" y="24" fill="#A7F3D0" fontSize="9" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">
          99% PASS GRADE
        </text>

        {/* Left Column: Lighthouse Score Circular Gauge */}
        <g transform="translate(24, 62)">
          <rect width="210" height="252" rx="10" fill="#160E10" stroke="rgba(213, 0, 0, 0.25)" strokeWidth="1" />
          
          <text x="105" y="28" fill="#FCA5A5" fontSize="11" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" textAnchor="middle">
            LIGHTHOUSE PERFORMANCE
          </text>

          {/* Circular Score Dial */}
          <g transform="translate(105, 100)">
            {/* Background Track */}
            <circle cx="0" cy="0" r="54" fill="none" stroke="#2D1518" strokeWidth="9" />
            {/* Filled Arc (99%) */}
            <circle
              cx="0"
              cy="0"
              r="54"
              fill="none"
              stroke="#10B981"
              strokeWidth="9"
              strokeDasharray="339"
              strokeDashoffset="12"
              strokeLinecap="round"
              transform="rotate(-90)"
            />
            {/* Inner Glow Center */}
            <circle cx="0" cy="0" r="44" fill="#0F172A" />
            <text x="0" y="10" fill="#10B981" fontSize="34" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="900" textAnchor="middle">
              99
            </text>
            <text x="0" y="26" fill="#6EE7B7" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="600" textAnchor="middle">
              OUT OF 100
            </text>
          </g>

          {/* Core Web Vitals Key Trio */}
          <g transform="translate(14, 172)">
            <rect x="0" y="0" width="56" height="42" rx="5" fill="#1F1215" stroke="rgba(16, 185, 129, 0.3)" />
            <text x="28" y="16" fill="#94A3B8" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">LCP</text>
            <text x="28" y="32" fill="#10B981" fontSize="11" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" textAnchor="middle">0.78s</text>

            <rect x="63" y="0" width="56" height="42" rx="5" fill="#1F1215" stroke="rgba(16, 185, 129, 0.3)" />
            <text x="91" y="16" fill="#94A3B8" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">FID</text>
            <text x="91" y="32" fill="#10B981" fontSize="11" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" textAnchor="middle">12ms</text>

            <rect x="126" y="0" width="56" height="42" rx="5" fill="#1F1215" stroke="rgba(16, 185, 129, 0.3)" />
            <text x="154" y="16" fill="#94A3B8" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">CLS</text>
            <text x="154" y="32" fill="#10B981" fontSize="11" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" textAnchor="middle">0.00</text>
          </g>

          <text x="105" y="236" fill="#10B981" fontSize="9.5" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" textAnchor="middle">
            ● Google Core Web Vitals Passed
          </text>
        </g>

        {/* Right Column: Security Verification Shield & Checklist */}
        <g transform="translate(254, 62)">
          <rect width="262" height="252" rx="10" fill="#160E10" stroke="rgba(213, 0, 0, 0.25)" strokeWidth="1" filter="url(#auditGlow)" />

          {/* Section Header */}
          <rect x="12" y="12" width="238" height="26" rx="5" fill="rgba(213, 0, 0, 0.15)" stroke="rgba(213, 0, 0, 0.3)" />
          <text x="24" y="29" fill="#FF8A80" fontSize="10.5" fontFamily="'JetBrains Mono', monospace" fontWeight="700">
            🛡️ SECURITY PROTOCOL INSPECTION
          </text>

          {/* Security Checklist Items */}
          <g transform="translate(12, 48)">
            {/* Check 1 */}
            <rect x="0" y="0" width="238" height="32" rx="5" fill="#1F1215" stroke="rgba(255, 255, 255, 0.05)" />
            <circle cx="16" cy="16" r="7" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" strokeWidth="1" />
            <text x="13.5" y="19" fill="#10B981" fontSize="9" fontWeight="900">✓</text>
            <text x="32" y="16" fill="#F8FAFC" fontSize="9.5" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">OWASP Top 10 Hardened</text>
            <text x="32" y="26" fill="#94A3B8" fontSize="8" fontFamily="'JetBrains Mono', monospace">XSS • CSRF • SQLi Protected</text>
            <text x="200" y="20" fill="#10B981" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" fontWeight="700">PASS</text>

            {/* Check 2 */}
            <rect x="0" y="38" width="238" height="32" rx="5" fill="#1F1215" stroke="rgba(255, 255, 255, 0.05)" />
            <circle cx="16" cy="16" r="7" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" strokeWidth="1" />
            <text x="13.5" y="19" fill="#10B981" fontSize="9" fontWeight="900">✓</text>
            <text x="32" y="16" fill="#F8FAFC" fontSize="9.5" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">256-Bit SSL/TLS 1.3 Active</text>
            <text x="32" y="26" fill="#94A3B8" fontSize="8" fontFamily="'JetBrains Mono', monospace">Zero plaintext transmission</text>
            <text x="194" y="20" fill="#10B981" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" fontWeight="700">GRADE A+</text>

            {/* Check 3 */}
            <rect x="0" y="76" width="238" height="32" rx="5" fill="#1F1215" stroke="rgba(255, 255, 255, 0.05)" />
            <circle cx="16" cy="16" r="7" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" strokeWidth="1" />
            <text x="13.5" y="19" fill="#10B981" fontSize="9" fontWeight="900">✓</text>
            <text x="32" y="16" fill="#F8FAFC" fontSize="9.5" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">Payment Gateway Hardened</text>
            <text x="32" y="26" fill="#94A3B8" fontSize="8" fontFamily="'JetBrains Mono', monospace">PCI-DSS Tokenized checkout</text>
            <text x="190" y="20" fill="#10B981" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" fontWeight="700">VERIFIED</text>

            {/* Check 4 */}
            <rect x="0" y="114" width="238" height="32" rx="5" fill="#1F1215" stroke="rgba(255, 255, 255, 0.05)" />
            <circle cx="16" cy="16" r="7" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" strokeWidth="1" />
            <text x="13.5" y="19" fill="#10B981" fontSize="9" fontWeight="900">✓</text>
            <text x="32" y="16" fill="#F8FAFC" fontSize="9.5" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">Cross-Device Responsive</text>
            <text x="32" y="26" fill="#94A3B8" fontSize="8" fontFamily="'JetBrains Mono', monospace">iOS Safari • Android Chrome • Desktop</text>
            <text x="195" y="20" fill="#10B981" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" fontWeight="700">100%</text>

            {/* Certification Footer */}
            <rect x="0" y="152" width="238" height="36" rx="5" fill="#0C1525" stroke="rgba(56, 189, 248, 0.3)" />
            <text x="12" y="17" fill="#38BDF8" fontSize="9.5" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">
              PrismLine Audit Signature:
            </text>
            <text x="12" y="30" fill="#94A3B8" fontSize="8" fontFamily="'JetBrains Mono', monospace">
              HASH: #8F29-PASS-CORE-DEPLOYABLE-ZERO-DEFECT
            </text>
          </g>
        </g>

        {/* Bottom Bar Info */}
        <text x="24" y="342" fill="#64748B" fontSize="9.5" fontFamily="'JetBrains Mono', monospace">
          SPEED AUDIT: 95+ PAGESPEED GUARANTEE • 256-BIT ENCRYPTION • CORE WEB VITALS VERIFIED
        </text>
      </svg>
    </div>
  );
}

/**
 * Stage 4: Launch the Website & Lifetime Rectification Support
 * Live deployment monitor with PrismLine Official Lifetime Guarantee & SLA seal.
 */
export function Stage4LaunchVector() {
  return (
    <div className="roadmap-vector-card" aria-label="Launch & Rectification Guarantee">
      <svg
        viewBox="0 0 540 360"
        className="roadmap-vector-svg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="launchBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B1A14" />
            <stop offset="100%" stopColor="#07120E" />
          </linearGradient>

          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>

          <filter id="launchGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#10B981" floodOpacity="0.22" />
          </filter>
        </defs>

        {/* Outer Launch Console Frame */}
        <rect x="2" y="2" width="536" height="356" rx="14" fill="url(#launchBgGrad)" stroke="rgba(16, 185, 129, 0.35)" strokeWidth="1.5" />

        {/* Top Header Bar */}
        <rect x="2" y="2" width="536" height="38" rx="14" fill="#06120C" />
        <rect x="2" y="26" width="536" height="14" fill="#06120C" />
        <line x1="2" y1="40" x2="538" y2="40" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="1" />

        <circle cx="20" cy="21" r="4.5" fill="#EF4444" />
        <circle cx="34" cy="21" r="4.5" fill="#F59E0B" />
        <circle cx="48" cy="21" r="4.5" fill="#10B981" />

        <text x="70" y="25" fill="#34D399" fontSize="11" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
          🚀 PRODUCTION RELEASE &amp; LIFETIME RECTIFICATION CONSOLE
        </text>

        {/* Status Pill */}
        <rect x="415" y="12" width="109" height="18" rx="9" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" strokeWidth="0.8" />
        <circle cx="426" cy="21" r="3.5" fill="#34D399" />
        <text x="436" y="24" fill="#A7F3D0" fontSize="9" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800">
          LIVE ONLINE
        </text>

        {/* Left Column: Live Production Deployment Status */}
        <g transform="translate(24, 62)">
          <rect width="220" height="252" rx="10" fill="#0B1C15" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" filter="url(#launchGlow)" />
          
          <text x="14" y="24" fill="#6EE7B7" fontSize="11" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800">
            DEPLOYMENT TELEMETRY
          </text>

          {/* Metric 1 */}
          <rect x="14" y="36" width="192" height="38" rx="6" fill="#11291F" stroke="rgba(255, 255, 255, 0.05)" />
          <text x="24" y="52" fill="#94A3B8" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">GLOBAL CDN STATUS</text>
          <text x="24" y="66" fill="#34D399" fontSize="11" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800">🟢 300+ Edge Nodes Active</text>

          {/* Metric 2 */}
          <rect x="14" y="82" width="192" height="38" rx="6" fill="#11291F" stroke="rgba(255, 255, 255, 0.05)" />
          <text x="24" y="98" fill="#94A3B8" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">SSL/TLS CERTIFICATE</text>
          <text x="24" y="112" fill="#FFFFFF" fontSize="11" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800">🔒 Auto-Renewing 256-Bit</text>

          {/* Metric 3 */}
          <rect x="14" y="128" width="192" height="38" rx="6" fill="#11291F" stroke="rgba(255, 255, 255, 0.05)" />
          <text x="24" y="144" fill="#94A3B8" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">UPTIME GUARANTEE</text>
          <text x="24" y="158" fill="#34D399" fontSize="11" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800">⚡ 99.99% High Availability</text>

          {/* Metric 4: Direct Access */}
          <rect x="14" y="174" width="192" height="66" rx="6" fill="#143427" stroke="rgba(16, 185, 129, 0.4)" />
          <text x="24" y="192" fill="#6EE7B7" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" fontWeight="700">DIRECT SENIOR HOTLINE</text>
          <text x="24" y="209" fill="#FFFFFF" fontSize="13" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="900">📞 +91 99529 34596</text>
          <text x="24" y="226" fill="#A7F3D0" fontSize="8" fontFamily="'Plus Jakarta Sans', sans-serif">15-Minute Emergency Response SLA</text>
        </g>

        {/* Right Column: PrismLine Official Lifetime Guarantee Seal */}
        <g transform="translate(264, 62)">
          <rect width="252" height="252" rx="10" fill="#0B1C15" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" />

          {/* Large Shield Emblem */}
          <g transform="translate(126, 75)">
            <circle cx="0" cy="0" r="48" fill="url(#shieldGrad)" stroke="#34D399" strokeWidth="2" filter="url(#launchGlow)" />
            <circle cx="0" cy="0" r="42" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" strokeDasharray="3 3" />
            <path
              d="M -12, -4 L -4, 5 L 14, -13"
              stroke="#FFFFFF"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text x="0" y="26" fill="#FFFFFF" fontSize="8.5" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" textAnchor="middle">
              VERIFIED
            </text>
          </g>

          {/* Guarantee Title */}
          <text x="126" y="145" fill="#34D399" fontSize="13" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="900" textAnchor="middle">
            LIFETIME ANYTIME
          </text>
          <text x="126" y="162" fill="#FFFFFF" fontSize="13" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="900" textAnchor="middle">
            RECTIFICATION GUARANTEE
          </text>

          {/* Policy Terms */}
          <rect x="16" y="174" width="220" height="66" rx="6" fill="#071510" stroke="rgba(16, 185, 129, 0.25)" />
          <text x="26" y="192" fill="#E2E8F0" fontSize="9" fontFamily="'Plus Jakarta Sans', sans-serif">
            • <strong style={{ color: '#34D399' }}>₹0 Bug Fixes:</strong> Never billed for fixing code issues.
          </text>
          <text x="26" y="210" fill="#E2E8F0" fontSize="9" fontFamily="'Plus Jakarta Sans', sans-serif">
            • <strong style={{ color: '#34D399' }}>Zero Retainers:</strong> Honest, transparent support anytime.
          </text>
          <text x="26" y="228" fill="#E2E8F0" fontSize="9" fontFamily="'Plus Jakarta Sans', sans-serif">
            • <strong style={{ color: '#34D399' }}>Direct WhatsApp:</strong> Reach lead developers immediately.
          </text>
        </g>

        {/* Bottom Bar Info */}
        <text x="24" y="342" fill="#64748B" fontSize="9.5" fontFamily="'JetBrains Mono', monospace">
          WARRANTY CERTIFIED: ZERO DOWNTIME DEPLOYMENT • BACKED BY LIFETIME WRITTEN GUARANTEE
        </text>
      </svg>
    </div>
  );
}
