import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import profilePhoto from "@/assets/profile-photo.png";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download } from "lucide-react";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-[hsl(var(--section-bg-alt))] to-background"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div
        className={`container-width section-padding relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="space-y-3 md:space-y-4">
              <div className="inline-block">
                <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium">
                  Available for Opportunities
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm <span className="gradient-text text-glow">Dhaval</span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                Business Development Executive
              </h2>
            </div>
            
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Result-driven professional with 1.5+ years of experience in IT Service Management, 
              specializing in business growth and strategic client relationships.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="gradient-bg text-white hover:opacity-90 transition-opacity glow-effect text-base"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("experience")}
                className="border-2 hover:bg-secondary/50 text-base"
              >
                <Download className="w-5 h-5 mr-2" />
                View Resume
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-6 md:pt-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-xs md:text-sm font-medium text-foreground truncate">+91 94096 56095</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-xs md:text-sm font-medium text-foreground truncate">Ahmedabad, IN</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 gradient-bg rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              
              {/* Glass card container */}
              <div className="relative glass-card rounded-3xl p-2 glow-effect">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={profilePhoto}
                    alt="Dhaval Koshti"
                    className="w-full h-auto object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 w-11/12 glass-card rounded-xl md:rounded-2xl p-3 md:p-4 glow-effect">
                <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
                  <div>
                    <p className="text-xl md:text-2xl font-bold gradient-text">1.5+</p>
                    <p className="text-[10px] md:text-xs text-muted-foreground">Years Exp</p>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold gradient-text">4+</p>
                    <p className="text-[10px] md:text-xs text-muted-foreground">Companies</p>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold gradient-text">10+</p>
                    <p className="text-[10px] md:text-xs text-muted-foreground">Skills</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
