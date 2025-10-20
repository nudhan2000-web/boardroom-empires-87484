import { Button } from './ui/button';
import { Crown } from 'lucide-react';

const StickyNav = () => {
  const scrollToRegistration = () => {
    document.querySelector('section:has(.bg-primary.text-primary-foreground)')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Crown className="w-6 h-6 text-primary" />
          <span className="font-display font-bold text-lg md:text-xl text-foreground">
            CAPITALYZE
          </span>
        </div>

        <Button
          onClick={scrollToRegistration}
          size="sm"
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold shadow-[0_0_20px_hsl(var(--gold-glow)/0.4)] hover:shadow-[0_0_30px_hsl(var(--gold-glow)/0.6)] transition-all duration-300 text-sm md:text-base px-4 md:px-6"
        >
          Register Now
        </Button>
      </div>
    </nav>
  );
};

export default StickyNav;
