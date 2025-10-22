import { Button } from './ui/button';
import { Crown } from 'lucide-react';

const FinalRegistrationCTA = () => {
  return (
    <section className="relative py-16 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Crown className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-primary animate-glow-pulse" />

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 text-gold-glow">
          Ready to Claim Your Throne?
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
          The boardroom awaits your arrival. Register your team now and begin your conquest!
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdGjJ4Qc98cgZgkHzTyr2xpewC7kON_LC0YuVQ6o2SPTdjksA/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg sm:text-xl md:text-2xl px-10 sm:px-16 py-6 sm:py-8 font-display font-bold shadow-[0_0_40px_hsl(var(--gold-glow)/0.6)] hover:shadow-[0_0_60px_hsl(var(--gold-glow)/1)] transition-all duration-300 hover:scale-110"
          >
            Register Your Team
          </Button>
        </a>

        <p className="mt-4 sm:mt-6 text-sm sm:text-base text-muted-foreground font-display">
          Secure your place before the gates close forever!
        </p>
      </div>
    </section>
  );
};

export default FinalRegistrationCTA;
