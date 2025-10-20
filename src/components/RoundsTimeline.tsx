import { Scroll, Flame, Crown } from 'lucide-react';
import battleImage from '@/assets/dragons-battle.webp';

const rounds = [
  {
    icon: Scroll,
    number: '1',
    title: 'Pitch & Conquer',
    subtitle: "The King's Speech",
    description: 'Pitch your empire to the realm. Your voice is your weapon.',
  },
  {
    icon: Flame,
    number: '2',
    title: 'Crisis Mode',
    subtitle: 'The War Council',
    description: 'Survive the chaos of the boardroom battlefield. Adapt or perish.',
  },
  {
    icon: Crown,
    number: '3',
    title: 'Clash of Titans',
    subtitle: 'The Great Debate',
    description: 'Prove your might through words, strategy, and wit. Only one can rule.',
  },
];

const RoundsTimeline = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: `url(${battleImage})`,
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-3 sm:mb-4 text-gold-glow">
            The Battle Path
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-display">
            Three Rounds. One Crown. Eternal Glory.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2" />
          
          <div className="space-y-8 sm:space-y-12 md:space-y-24">
            {rounds.map((round, index) => {
              const Icon = round.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-center gap-6 sm:gap-8`}
                >
                  <div className="flex-1 w-full">
                    <div
                      className={`bg-card border-2 border-primary rounded-lg p-4 sm:p-6 md:p-8 shadow-[0_0_30px_hsl(var(--gold-glow)/0.2)] hover:shadow-[0_0_50px_hsl(var(--gold-glow)/0.4)] transition-all duration-300 ${
                        isEven ? 'md:text-right' : ''
                      }`}
                    >
                      <div className={`flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-accent animate-ember-flicker flex-shrink-0" />
                        <div>
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-primary">
                            Round {round.number}
                          </h3>
                          <p className="text-base sm:text-lg text-foreground font-display">
                            {round.title}
                          </p>
                        </div>
                      </div>
                      <p className="text-lg sm:text-xl font-display font-semibold text-accent mb-2 sm:mb-3">
                        {round.subtitle}
                      </p>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {round.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex w-16 h-16 rounded-full bg-primary border-4 border-background items-center justify-center shadow-[0_0_30px_hsl(var(--gold-glow)/0.6)] z-10 flex-shrink-0">
                    <span className="text-2xl font-display font-bold text-primary-foreground">
                      {round.number}
                    </span>
                  </div>

                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoundsTimeline;
