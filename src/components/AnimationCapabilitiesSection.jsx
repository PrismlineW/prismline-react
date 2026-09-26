import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function AnimationCapabilitiesSection() {
  const [magneticPos, setMagneticPos] = useState({ x: 0, y: 0 });
  const [activePreset, setActivePreset] = useState('elastic');
  const [tiltStrength, setTiltStrength] = useState('cinematic'); // 'subtle' | 'cinematic' | 'hyper'
  const magneticBtnRef = useRef(null);

  // Magnetic Cursor Physics Handler
  const handleMagneticMove = (e) => {
    if (!magneticBtnRef.current) return;
    const rect = magneticBtnRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setMagneticPos({ x: x * 0.4, y: y * 0.4 });
  };

  const handleMagneticLeave = () => {
    setMagneticPos({ x: 0, y: 0 });
  };

  return (
    <section className="anim-engine-section" id="animation-engineering">
      {/* Dynamic Background Mesh */}
      <div className="anim-mesh-grid" aria-hidden="true" />
      <div className="anim-glow-blob glow-amber" aria-hidden="true" />
      <div className="anim-glow-blob glow-crimson" aria-hidden="true" />
      <div className="anim-glow-blob glow-cyan" aria-hidden="true" />

      <div className="container">
        {/* Section Header */}
        <div className="anim-header-block">
          <div className="sec-kicker-tag" style={{ justifyContent: 'center', marginBottom: '1.2rem' }}>
            <span className="sec-step-badge">MOTION ENGINEERING</span>
            <span>AWARD-GRADE WEB ANIMATION</span>
          </div>

          <h2 className="anim-main-heading">
            Professional Web Animations. <br />
            <span className="anim-gradient-text">Engineered for 60–120 FPS Fluidity.</span>
          </h2>

          <p className="anim-lead-paragraph">
            Static websites feel dead. Clunky templates stutter. We craft custom kinetic choreography,
            hardware-composited micro-animations, and dynamic 3D depth that elevate your brand to the top 1% &mdash;
            engineered with zero render-blocking lag and 0.00 layout shift.
          </p>
        </div>

        {/* 4 Pillars of Premium Animation Grid */}
        <div className="anim-pillars-grid">
          {/* Pillar 1: GPU Hardware Acceleration */}
          <div className="anim-pillar-card">
            <div className="pillar-top-row">
              <span className="pillar-num">01</span>
              <span className="pillar-badge">Zero Frame Drop</span>
            </div>
            <div className="pillar-anim-visual">
              <div className="fps-counter-pill">
                <span className="fps-pulse"></span>
                <span>120 FPS &bull; GPU Layer</span>
              </div>
              <div className="gpu-layer-rings">
                <div className="gpu-ring ring-1"></div>
                <div className="gpu-ring ring-2"></div>
                <div className="gpu-ring ring-3"></div>
                <div className="gpu-core">60–120 FPS</div>
              </div>
            </div>
            <h3 className="pillar-title">Hardware-Composited Acceleration</h3>
            <p className="pillar-desc">
              All animations execute exclusively on the compositor thread via GPU-offloaded <code>transform</code> and <code>opacity</code>.
              Zero main-thread jank, zero CPU bottleneck, and guaranteed sub-16ms frame budgets.
            </p>
            <div className="pillar-tag-list">
              <span>transform3d()</span>
              <span>will-change: transform</span>
              <span>CLS: 0.00</span>
            </div>
          </div>

          {/* Pillar 2: Interactive Magnetic Physics */}
          <div className="anim-pillar-card">
            <div className="pillar-top-row">
              <span className="pillar-num">02</span>
              <span className="pillar-badge">Kinetic Physics</span>
            </div>
            <div
              className="pillar-anim-visual magnetic-stage"
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
            >
              <div className="magnetic-target-zone">
                <span className="target-crosshair top-left">+</span>
                <span className="target-crosshair top-right">+</span>
                <span className="target-crosshair bottom-left">+</span>
                <span className="target-crosshair bottom-right">+</span>
                <button
                  ref={magneticBtnRef}
                  type="button"
                  className="interactive-magnetic-btn"
                  style={{
                    transform: `translate3d(${magneticPos.x}px, ${magneticPos.y}px, 0)`,
                  }}
                >
                  <span className="mag-dot"></span>
                  <span>Hover Over Me</span>
                </button>
              </div>
              <span className="mag-hint">Hover around button to test magnetic gravity &rarr;</span>
            </div>
            <h3 className="pillar-title">Magnetic &amp; Kinetic Elements</h3>
            <p className="pillar-desc">
              Buttons and focal points organically pull toward the user&apos;s pointer with calibrated spring inertia.
              Creates an undeniable sensation of weight, precision, and tactile satisfaction.
            </p>
            <div className="pillar-tag-list">
              <span>Spring Damping</span>
              <span>Pointer Magnetism</span>
              <span>Kinetic Pull</span>
            </div>
          </div>

          {/* Pillar 3: Gyroscopic 3D Parallax */}
          <div className="anim-pillar-card">
            <div className="pillar-top-row">
              <span className="pillar-num">03</span>
              <span className="pillar-badge">Spatial Depth</span>
            </div>
            <div className="pillar-anim-visual perspective-stage">
              <div className="perspective-floating-box">
                <div className="box-glass-sheet sheet-back"></div>
                <div className="box-glass-sheet sheet-middle">
                  <span className="sheet-icon">💎</span>
                </div>
                <div className="box-glass-sheet sheet-front">
                  <span>3D Parallax Mesh</span>
                </div>
              </div>
            </div>
            <h3 className="pillar-title">Multi-Plane 3D Depth &amp; Specular Sheen</h3>
            <p className="pillar-desc">
              True 3D perspective layers with real-time specular lighting reflections that mirror cursor movement.
              Simulates physical frosted glassmorphism that catches dynamic ambient light.
            </p>
            <div className="pillar-tag-list">
              <span>Perspective: 1200px</span>
              <span>Specular Glare</span>
              <span>Dynamic Lighting</span>
            </div>
          </div>

          {/* Pillar 4: Lenis Inertia & GSAP Orchestration */}
          <div className="anim-pillar-card">
            <div className="pillar-top-row">
              <span className="pillar-num">04</span>
              <span className="pillar-badge">Choreographed Motion</span>
            </div>
            <div className="pillar-anim-visual scroll-wave-stage">
              <div className="scroll-stream-bars">
                <div className="stream-bar bar-1"></div>
                <div className="stream-bar bar-2"></div>
                <div className="stream-bar bar-3"></div>
                <div className="stream-bar bar-4"></div>
                <div className="stream-bar bar-5"></div>
              </div>
              <div className="stream-caption">
                <span>✦ Lenis Smooth Momentum + GSAP Trigger</span>
              </div>
            </div>
            <h3 className="pillar-title">Inertial Momentum &amp; Stagger Reveals</h3>
            <p className="pillar-desc">
              Integrated with Lenis inertia physics and GSAP ScrollTrigger timelines. Headings unveil through clip-path masks,
              cards float seamlessly into view, and scroll velocity dynamically drives subtle background warp.
            </p>
            <div className="pillar-tag-list">
              <span>Lenis Momentum</span>
              <span>GSAP ScrollTrigger</span>
              <span>Clip-Path Masks</span>
            </div>
          </div>
        </div>

        {/* Live Motion Interactive Bench */}
        <div className="motion-interactive-bench">
          <div className="bench-left">
            <div className="bench-tag">
              <span className="pulse-radar-dot"></span>
              <span>LIVE MOTION BENCHMARK</span>
            </div>
            <h3 className="bench-heading">Custom Animation Tailored to Your Vision</h3>
            <p className="bench-desc">
              Whether you need subtle Apple-style product transitions, high-impact Stripe-grade animated cards,
              or an immersive 3D interactive portfolio &mdash; we code bespoke WebGL, GSAP, and CSS solutions from scratch.
            </p>
            <div className="bench-actions">
              <Link to="/contact" className="btn-hero-primary" style={{ padding: '0.75rem 1.6rem' }}>
                Commission an Animated Site &rarr;
              </Link>
              <a href="tel:9952934596" className="btn-hero-phone">
                <span>📞</span> +91 99529 34596
              </a>
            </div>
          </div>

          <div className="bench-right">
            <div className="bench-stats-matrix">
              <div className="bench-stat-cell">
                <span className="b-stat-num">0.00</span>
                <span className="b-stat-lbl">Cumulative Layout Shift (CLS)</span>
              </div>
              <div className="bench-stat-cell">
                <span className="b-stat-num">120 Hz</span>
                <span className="b-stat-lbl">High-Refresh Display Ready</span>
              </div>
              <div className="bench-stat-cell">
                <span className="b-stat-num">&lt; 15 KB</span>
                <span className="b-stat-lbl">Motion Runtime Footprint</span>
              </div>
              <div className="bench-stat-cell">
                <span className="b-stat-num">100%</span>
                <span className="b-stat-lbl">Mobile Responsive Touch</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="motion-guarantee-ribbon">
          <div className="mgr-left">
            <span className="mgr-icon">🛡️</span>
            <div>
              <strong>Lifetime Animation &amp; Zero-Bug Guarantee</strong>
              <span>If any animation ever breaks on new iOS/Android updates or browser releases, we rectify it for free.</span>
            </div>
          </div>
          <Link to="/contact" className="mgr-btn">
            Build With Our Team &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
