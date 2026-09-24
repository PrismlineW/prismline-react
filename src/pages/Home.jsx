import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import DriftBanner from '../components/DriftBanner';
import AboutSection from '../components/AboutSection';
import RoadmapSection from '../components/RoadmapSection';
import ReviewsFeedbackSection from '../components/ReviewsFeedbackSection';

export default function Home() {
  useEffect(() => {
    document.title = 'PrismLine — Secure Web Development at Affordable Cost';
  }, []);

  return (
    <main>
      <HeroSection />
      <DriftBanner />
      <AboutSection />
      <RoadmapSection />
      <ReviewsFeedbackSection />
    </main>
  );
}
