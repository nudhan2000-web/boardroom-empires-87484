import { Briefcase, Cpu, Leaf, DollarSign, GraduationCap, Tv } from 'lucide-react';

const domains = [
  {
    code: 'C001',
    title: 'Health & Wellness',
    icon: Briefcase,
  },
  {
    code: 'C002',
    title: 'Technology & Innovation',
    icon: Cpu,
  },
  {
    code: 'C003',
    title: 'Environment & Sustainability',
    icon: Leaf,
  },
  {
    code: 'C004',
    title: 'Finance & Business',
    icon: DollarSign,
  },
  {
    code: 'C005',
    title: 'Education & Skill',
    icon: GraduationCap,
  },
  {
    code: 'C006',
    title: 'Entertainment & Media',
    icon: Tv,
  },
];

const DomainsSection = () => {
  return (
    <section id="domains" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-3 sm:mb-4 text-gold-glow">
            Choose Your Battlefield
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-display">
            Select Your Domain of Conquest
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain) => {
            const Icon = domain.icon;
            return (
              <div
                key={domain.code}
                className="group relative bg-card border-2 border-border hover:border-primary rounded-lg p-6 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--gold-glow)/0.3)] hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary group-hover:text-accent transition-colors duration-300 animate-ember-flicker" />
                    <span className="text-lg sm:text-xl font-display font-bold text-accent">
                      {domain.code}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {domain.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-lg sm:text-xl md:text-2xl font-display font-bold text-primary">
            Choose wisely — your domain defines your empire! 👑
          </p>
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
