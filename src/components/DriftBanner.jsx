import { useEffect, useRef } from 'react';

export default function DriftBanner() {
  const bannerRef = useRef(null);
  const leftRowRef = useRef(null);
  const rightRowRef = useRef(null);

  useEffect(() => {
    let animId;

    const updateScrollDrift = () => {
      if (!bannerRef.current || !leftRowRef.current || !rightRowRef.current) return;
      const rect = bannerRef.current.getBoundingClientRect();
      const winH = window.innerHeight || document.documentElement.clientHeight;

      // When the banner is within or near the viewport
      if (rect.top <= winH && rect.bottom >= 0) {
        // Calculate normalized scroll progress: 0 when banner enters bottom, 1 when it leaves top
        const progress = (winH - rect.top) / (winH + rect.height);

        // Smooth scroll-driven horizontal displacement
        const leftX = -progress * 420;
        const rightX = (progress * 380) - 240;

        leftRowRef.current.style.transform = `translate3d(${leftX}px, 0, 0)`;
        rightRowRef.current.style.transform = `translate3d(${rightX}px, 0, 0)`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(animId);
      animId = requestAnimationFrame(updateScrollDrift);
    };

    // Initial position calculation on load
    updateScrollDrift();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Sync with Lenis smooth scroll if present on window
    if (window.lenis) {
      window.lenis.on('scroll', onScroll);
    }

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (window.lenis) {
        window.lenis.off('scroll', onScroll);
      }
    };
  }, []);

  return (
    <div className="iti-drift-banner" ref={bannerRef} aria-hidden="true">
      <div className="iti-drift-row drift-left" ref={leftRowRef}>
        <span className="iti-drift-word">CUSTOM WEBSITES <span className="iti-drift-divider"></span></span>
        <span className="iti-drift-word word-outline">SECURE BY DESIGN <span className="iti-drift-divider"></span></span>
        <span className="iti-drift-word word-accent">FAST LOADING <span className="iti-drift-divider"></span></span>
        <span className="iti-drift-word">WEB APPS <span className="iti-drift-divider"></span></span>
        <span className="iti-drift-word word-outline">DATA PROTECTION <span className="iti-drift-divider"></span></span>
        <span className="iti-drift-word">CUSTOM WEBSITES <span className="iti-drift-divider"></span></span>
        <span className="iti-drift-word word-outline">SECURE BY DESIGN <span className="iti-drift-divider"></span></span>
        <span className="iti-drift-word word-accent">FAST LOADING <span className="iti-drift-divider"></span></span>
        <span className="iti-drift-word">WEB APPS <span className="iti-drift-divider"></span></span>
        <span className="iti-drift-word word-outline">DATA PROTECTION <span className="iti-drift-divider"></span></span>
      </div>
      <div className="iti-drift-row drift-right" ref={rightRowRef}>
        <span className="iti-drift-word word-outline">100% SECURE <span className="iti-drift-divider"></span></span>
        <span className="iti-drift-word">E-COMMERCE <span className="iti-drift-divider"></span></span>
        <span className="iti-drift-word word-outline">CLEAN CODE <span className="iti-drift-divider"></span></span>
        <span className="iti-drift-word word-accent">LIFETIME SUPPORT <span className="iti-drift-divider"></span></span>
        <span className="iti-drift-word">HIGH PERFORMANCE <span className="iti-drift-divider"></span></span>
        <span className="iti-drift-word word-outline">100% SECURE <span className="iti-drift-divider"></span></span>
        <span className="iti-drift-word">E-COMMERCE <span className="iti-drift-divider"></span></span>
        <span className="iti-drift-word word-outline">CLEAN CODE <span className="iti-drift-divider"></span></span>
        <span className="iti-drift-word word-accent">LIFETIME SUPPORT <span className="iti-drift-divider"></span></span>
        <span className="iti-drift-word">HIGH PERFORMANCE <span className="iti-drift-divider"></span></span>
      </div>
    </div>
  );
}
