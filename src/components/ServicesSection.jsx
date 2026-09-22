import { Link } from 'react-router-dom';
import { useScrollStory } from '../hooks/useScrollStory';
import RoadmapSection from './RoadmapSection';

export default function ServicesSection() {
  useScrollStory();

  return (
    <section className="editorial-story-section scroll-section" id="services">
      {/* ── iti.ca Floating Geometric Accents ── */}
      <div className="iti-floating-shape" style={{ top: '3rem', right: '8%' }} data-parallax-speed="1.8">
        <span className="iti-shape-plus shape-large shape-sunset">+</span>
      </div>
      <div className="iti-floating-shape" style={{ top: '16rem', left: '4%' }} data-parallax-speed="-1.2">
        <span className="iti-shape-dash"></span>
      </div>
      <div className="iti-floating-shape" style={{ top: '65%', left: '3%' }} data-parallax-speed="1.4">
        <span className="iti-shape-plus">+</span>
      </div>
      <div className="iti-floating-shape" style={{ top: '82%', right: '7%' }} data-parallax-speed="-1.6">
        <span className="iti-shape-dot"></span>
      </div>

      <div className="container editorial-story-header">
        <div className="editorial-kicker u-mask-reveal">
          <span className="u-mask-inner">CAPABILITIES &bull; EDITORIAL STORYTELLING</span>
        </div>
        <h2 className="editorial-title u-mask-reveal">
          <span className="u-mask-inner">Secure Web Development. Shipped at Lower Cost.</span>
        </h2>
        <p className="editorial-desc">We build high-converting websites, dynamic web applications, and custom storefronts on an ironclad secure base by default &mdash; delivered at transparent, lower costs.</p>
      </div>

      {/* ── iti.ca Editorial Horizontal Drift Banner ── */}
      <div className="iti-drift-banner" aria-hidden="true">
        <div className="iti-drift-row drift-left">
          <span className="iti-drift-word">CUSTOM WEBSITES <span className="iti-drift-divider"></span></span>
          <span className="iti-drift-word word-outline">SECURE BY DESIGN <span className="iti-drift-divider"></span></span>
          <span className="iti-drift-word word-accent">FAST LOADING <span className="iti-drift-divider"></span></span>
          <span className="iti-drift-word">WEB APPS <span className="iti-drift-divider"></span></span>
          <span className="iti-drift-word word-outline">DATA PROTECTION <span className="iti-drift-divider"></span></span>
          <span className="iti-drift-word">CUSTOM WEBSITES <span className="iti-drift-divider"></span></span>
          <span className="iti-drift-word word-outline">SECURE BY DESIGN <span className="iti-drift-divider"></span></span>
        </div>
        <div className="iti-drift-row drift-right">
          <span className="iti-drift-word word-outline">100% SECURE <span className="iti-drift-divider"></span></span>
          <span className="iti-drift-word">E-COMMERCE <span className="iti-drift-divider"></span></span>
          <span className="iti-drift-word word-outline">CLEAN CODE <span className="iti-drift-divider"></span></span>
          <span className="iti-drift-word word-accent">LIFETIME SUPPORT <span className="iti-drift-divider"></span></span>
          <span className="iti-drift-word">HIGH PERFORMANCE <span className="iti-drift-divider"></span></span>
          <span className="iti-drift-word word-outline">100% SECURE <span className="iti-drift-divider"></span></span>
        </div>
      </div>

      {/* ── Interactive Roadmap ("How We Work") Scroll Pipeline ── */}
      <RoadmapSection />
    </section>
  );
}
