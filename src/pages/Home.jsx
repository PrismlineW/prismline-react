import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import TrustBar from '../components/TrustBar';
import ServicesSection from '../components/ServicesSection';
import GuaranteeSection from '../components/GuaranteeSection';
import AboutSection from '../components/AboutSection';
import ConsultationForm from '../components/ConsultationForm';

export default function Home() {
  useEffect(() => {
    document.title = 'PrismLine — Secure Web Development at Affordable Cost';
  }, []);

  return (
    <main>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <GuaranteeSection />
      <AboutSection />
      <ConsultationForm />
    </main>
  );
}
