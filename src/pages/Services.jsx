import { useEffect } from 'react';
import VisionInActionShowcase from '../components/VisionInActionShowcase';

export default function Services() {
  useEffect(() => {
    document.title = 'Vision in Action — PrismLine | Live Production Deployments';
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="services-page-wrap">
      {/* ── Vision in Action: 3D Moving Hero + Alternating Live Running Showcases ── */}
      <VisionInActionShowcase />
    </main>
  );
}
