import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import LoadingScreen from '@/components/LoadingScreen';
import StickyNav from '@/components/StickyNav';
import HeroSection from '@/components/HeroSection';
import EventDescription from '@/components/EventDescription';
import RulesSection from '@/components/RulesSection';
import RoundsTimeline from '@/components/RoundsTimeline';
import RegistrationCTA from '@/components/RegistrationCTA';
import CoordinatorsSection from '@/components/CoordinatorsSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <StickyNav />

      <a
        href="https://intemstellar-nu.vercel.app/"
        className="fixed top-16 left-4 z-40 md:top-4"
      >
        <Button
          variant="outline"
          size="sm"
          className="gap-2 md:size-default"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden md:inline">Back</span>
        </Button>
      </a>

      <main className="min-h-screen pt-16">
        <HeroSection />
        <EventDescription />
        <RulesSection />
        <RoundsTimeline />
        <RegistrationCTA />
        <CoordinatorsSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
