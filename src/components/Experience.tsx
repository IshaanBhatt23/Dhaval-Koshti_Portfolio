import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Development Avenue Technology Pvt Ltd",
    role: "Business Development Executive",
    period: "Aug 2023 - Present",
    description: "New Business Development, Business Process improvement",
    current: true,
  },
  {
    company: "AARAV Gem Tender Consultant",
    role: "Business Development Executive",
    period: "Apr 2023 - Aug 2023",
    description: "Tender Preparation, Consultancy",
    current: false,
  },
  {
    company: "MYBYK",
    role: "Business Development Executive",
    period: "Mar 2022 - Mar 2023",
    description: "Data Analysis, Customer satisfaction",
    current: false,
  },
  {
    company: "Aditya Corporation Private Limited",
    role: "Sales & Accounts Executive",
    period: "Oct 2021 - Mar 2022",
    description: "Sales & Accounting",
    current: false,
  },
];

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="experience"
      ref={ref}
      className="section-padding bg-[hsl(var(--section-bg))] relative"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container-width relative">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-block mb-4">
              <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium">
                Career Journey
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4">
              1.5+ years of driving business growth and building lasting client relationships
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`group glass-card rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 hover:bg-[hsl(var(--glass-bg))]/60 transition-all duration-500 ${
                  isVisible ? "animate-fade-up" : ""
                } ${exp.current ? "glow-effect" : ""}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 gradient-bg rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                      <Briefcase className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-2 md:space-y-3">
                    <div className="flex flex-col gap-2 md:gap-3">
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold group-hover:gradient-text transition-all">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-semibold text-base md:text-lg mt-1">{exp.company}</p>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2 text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        <span className="text-xs md:text-sm">{exp.period}</span>
                        {exp.current && (
                          <span className="px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-primary/20 text-primary text-[10px] md:text-xs font-medium">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm md:text-base lg:text-lg">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
