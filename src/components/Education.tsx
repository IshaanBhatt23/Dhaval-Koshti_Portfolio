import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Master of Commerce",
    institution: "Gujarat University",
    year: "2025",
    status: "In Progress",
  },
  {
    degree: "Bachelor of Commerce",
    institution: "Gujarat University",
    year: "2023",
    status: "Completed",
  },
];

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="education"
      ref={ref}
      className="section-padding bg-[hsl(var(--section-bg))] relative"
    >
      <div className="container-width relative">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-block mb-4">
              <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium">
                Academic Background
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4">
              Building a strong foundation in commerce and business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`glass-card rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 hover:bg-[hsl(var(--glass-bg))]/60 transition-all duration-500 group glow-effect ${
                  isVisible ? "animate-fade-up" : ""
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 gradient-bg rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-2 md:space-y-3 flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold group-hover:gradient-text transition-all">
                        {edu.degree}
                      </h3>
                      {edu.status === "In Progress" && (
                        <span className="px-2.5 py-1 md:px-3 md:py-1 rounded-full bg-accent/20 text-accent text-[10px] md:text-xs font-medium whitespace-nowrap flex items-center gap-1 w-fit">
                          <Award className="w-3 h-3" />
                          In Progress
                        </span>
                      )}
                    </div>
                    
                    <p className="text-primary font-semibold text-base md:text-lg">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm md:text-base">Class of {edu.year}</p>
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

export default Education;
