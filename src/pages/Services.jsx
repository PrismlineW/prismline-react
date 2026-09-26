import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import VisionInActionShowcase from '../components/VisionInActionShowcase';
import AnimationCapabilitiesSection from '../components/AnimationCapabilitiesSection';

export default function Services() {
  useEffect(() => {
    document.title = 'Vision in Action — PrismLine | Completed Projects & Motion Engineering';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="services-page-wrap">
      {/* ── Page Hero Header ── */}
      <section className="section-wrapper inner-page-hero" style={{ paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="section-head" style={{ maxWidth: '880px' }}>
            <div className="editorial-kicker">VISION IN ACTION &bull; LIVE DEPLOYMENTS &amp; MOTION ENGINEERING</div>
            <h1 className="page-hero-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', marginBottom: '1.2rem' }}>
              Vision in Action. <br />
              <span className="title-accent">Real-World Software Built Bold &amp; Shipped.</span>
            </h1>
            <p className="page-hero-desc" style={{ fontSize: '1.12rem', lineHeight: 1.7, color: 'var(--text-body)' }}>
              We turn client visions into high-impact digital realities. Explore our verified live production deployments &mdash; from autonomous AI customer agents and artisanal e-commerce storefronts to reactive web applications &mdash; all engineered with unbreakable security, 60–120 FPS buttery smooth animations, and backed by our Lifetime Rectification Warranty.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              <a href="#vision-in-action" className="btn-hero-primary" style={{ scrollBehavior: 'smooth' }}>
                Inspect Live Projects &darr;
              </a>
              <a href="#animation-engineering" className="btn-hero-phone" style={{ background: '#FFFFFF', color: '#0F172A', border: '1px solid var(--border-subtle)' }}>
                ✦ Motion &amp; Animation Suite &darr;
              </a>
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

      {/* ── Vision in Action: Completed Live Projects Showcase with 3D Tilt, Border Beams & Hardware Emulator ── */}
      <VisionInActionShowcase />

      {/* ── Professional & Premium Motion / Animation Capabilities Suite ── */}
      <AnimationCapabilitiesSection />
    </main>
  );
}
