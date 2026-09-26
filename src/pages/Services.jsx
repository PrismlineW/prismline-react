import { useEffect } from 'react';
import VisionInActionShowcase from '../components/VisionInActionShowcase';

export default function Services() {
  useEffect(() => {
    document.title = 'Vision in Action — PrismLine | Live Production Deployments';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="services-page-wrap">
      {/* ── Vision in Action: 1:1 Grail-App 3D Spatial Live Project Showcase ── */}
      <VisionInActionShowcase />
    </main>
  );
}
