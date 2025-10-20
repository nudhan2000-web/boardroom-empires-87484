import { Scroll } from 'lucide-react';
import dragonImage from '@/assets/dragon-close.webp';

const EventDescription = () => {
  return (
    <section id="event-description" className="relative py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url(${dragonImage})`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6 sm:mb-8">
          <Scroll className="w-10 h-10 sm:w-12 sm:h-12 text-primary animate-glow-pulse" />
        </div>

        <div className="relative bg-card border-2 sm:border-4 border-primary rounded-lg p-6 sm:p-8 md:p-12 shadow-[0_0_40px_hsl(var(--gold-glow)/0.3)]">
          <div className="absolute top-0 left-0 w-8 h-8 sm:w-16 sm:h-16 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-accent -translate-x-1 sm:-translate-x-2 -translate-y-1 sm:-translate-y-2" />
          <div className="absolute top-0 right-0 w-8 h-8 sm:w-16 sm:h-16 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-accent translate-x-1 sm:translate-x-2 -translate-y-1 sm:-translate-y-2" />
          <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-16 sm:h-16 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4 border-accent -translate-x-1 sm:-translate-x-2 translate-y-1 sm:translate-y-2" />
          <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-16 sm:h-16 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-accent translate-x-1 sm:translate-x-2 translate-y-1 sm:translate-y-2" />

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-center mb-6 sm:mb-8 text-primary">
            The Rise of Empires
          </h2>

          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed text-foreground">
            <p className="text-center">
              Welcome to the ultimate boardroom battlefield, where only the <span className="text-primary font-semibold">boldest minds</span> survive! 💼⚔️
            </p>

            <p className="text-center">
              Build your empire, conquer crises, and outsmart every rival who dares to challenge your throne. 👑
            </p>

            <p className="text-center">
              Every move counts &mdash; one <span className="text-accent font-semibold">brilliant strategy</span> could crown you king; one mistake could crumble your empire.
            </p>

            <p className="text-center text-lg sm:text-xl md:text-2xl font-display font-bold text-primary mt-6 sm:mt-8">
              Think you&apos;ve got the guts to rule the boardroom?
            </p>

            <p className="text-center text-base sm:text-lg md:text-xl">
              Then it&apos;s time to <span className="text-gold-glow">Strategize. Dominate. Capitalyze</span> ⚡
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDescription;
