import { Crown } from 'lucide-react';
import { Button } from './ui/button';
import heroImage from '@/assets/throne-hero.jpg';

const HeroSection = () => {
  const scrollToDescription = () => {
    document.getElementById('event-description')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.3)',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
      
      {/* Fire Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full animate-float-up"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '0',
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <Crown className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 mx-auto mb-4 sm:mb-6 text-primary animate-glow-pulse" />

        <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-display font-bold mb-4 sm:mb-6 text-gold-glow leading-tight">
          CAPITALYZE
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-display mb-6 sm:mb-8 text-foreground leading-snug">
          The Game of Business Thrones
        </h2>

        <p className="text-base sm:text-lg md:text-2xl mb-3 sm:mb-4 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Welcome to the ultimate boardroom battlefield — where empires rise and fall.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-lg sm:text-xl md:text-2xl font-display mb-8 sm:mb-12">
          <span className="hover-gold-glow">Strategize ⚡</span>
          <span className="hidden sm:inline text-primary">•</span>
          <span className="hover-gold-glow">Dominate ⚔️</span>
          <span className="hidden sm:inline text-primary">•</span>
          <span className="hover-gold-glow">Capitalyze 👑</span>
        </div>

        <Button
          size="lg"
          onClick={scrollToDescription}
          className="bg-primary text-primary-foreground hover:bg-primary/90 text-base sm:text-lg md:text-xl px-6 sm:px-8 py-5 sm:py-6 font-display font-bold shadow-[0_0_30px_hsl(var(--gold-glow)/0.5)] hover:shadow-[0_0_50px_hsl(var(--gold-glow)/0.8)] transition-all duration-300 hover:scale-105"
        >
          Enter the Boardroom
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
