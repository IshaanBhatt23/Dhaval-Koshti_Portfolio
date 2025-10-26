import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingUp, Code, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Business Skills",
    icon: TrendingUp,
    color: "primary",
    skills: [
      "Lead Generation & Prospecting",
      "Client Relationship Management",
      "Market Research & Analysis",
      "Sales Pitching & Negotiation",
      "Brand Development",
    ],
  },
  {
    title: "Technical Skills",
    icon: Code,
    color: "accent",
    skills: [
      "IT Service Management (ITSM) Tools",
      "CRM Software",
      "Microsoft Office",
      "Data Analysis & Reporting",
      "HTML",
      "Tally Accounting",
    ],
  },
  {
    title: "Languages",
    icon: Globe,
    color: "primary",
    skills: ["English", "Hindi", "Gujarati"],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="skills"
      ref={ref}
      className="section-padding bg-[hsl(var(--section-bg-alt))] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
      
      <div className="container-width relative">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-block mb-4">
              <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs md:text-sm font-medium">
                Expertise
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Skills & <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4">
              A comprehensive toolkit for driving business success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div
                  key={categoryIndex}
                  className={`glass-card rounded-xl md:rounded-2xl p-6 md:p-8 hover:bg-[hsl(var(--glass-bg))]/60 transition-all duration-500 group ${
                    isVisible ? "animate-fade-up" : ""
                  }`}
                  style={{ animationDelay: `${categoryIndex * 150}ms` }}
                >
                  <div className="mb-5 md:mb-6">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 ${
                      category.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 md:w-7 md:h-7 ${
                        category.color === 'primary' ? 'text-primary' : 'text-accent'
                      }`} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold group-hover:gradient-text transition-all">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-2.5 md:space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-2.5 md:gap-3 text-muted-foreground hover:text-foreground transition-colors group/item"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          category.color === 'primary' ? 'bg-primary' : 'bg-accent'
                        } group-hover/item:scale-150 transition-transform`}></div>
                        <span className="text-sm md:text-base">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
