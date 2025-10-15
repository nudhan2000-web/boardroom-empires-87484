import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import LoadingScreen from '@/components/LoadingScreen';
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
      
      {/* Back Button */}
      <a 
        href="https://intemstellar-nu.vercel.app/" 
        className="fixed top-4 left-4 z-50"
      >
        <Button 
          variant="outline" 
          size="lg"
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
      </a>
      
      <main className="min-h-screen">
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
