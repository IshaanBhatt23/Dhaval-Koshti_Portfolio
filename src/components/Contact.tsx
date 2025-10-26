import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 94096 56095",
      href: "tel:+919409656095",
      description: "Available Mon-Fri",
    },
    {
      icon: Mail,
      title: "Email",
      value: "dhavalkoshti21@gmail.com",
      href: "mailto:dhavalkoshti21@gmail.com",
      description: "Response within 24h",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Ahmedabad, Gujarat",
      href: null,
      description: "India",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding bg-[hsl(var(--section-bg-alt))] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent"></div>
      
      <div className="container-width relative">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-block mb-4">
              <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium">
                Let's Connect
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4">
              Ready to discuss opportunities? Reach out and let's create something amazing together
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className={`glass-card rounded-xl md:rounded-2xl p-6 md:p-8 hover:bg-[hsl(var(--glass-bg))]/60 transition-all duration-500 group ${
                      isVisible ? "animate-fade-up" : ""
                    }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="space-y-3 md:space-y-4">
                      <div className="w-11 h-11 md:w-12 md:h-12 gradient-bg rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      
                      <div className="space-y-1.5 md:space-y-2">
                        <h3 className="font-bold text-base md:text-lg text-muted-foreground">{info.title}</h3>
                        <p className="text-foreground font-semibold break-words text-sm md:text-base">{info.value}</p>
                        <p className="text-xs md:text-sm text-muted-foreground">{info.description}</p>
                      </div>
                      
                      {info.href && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full group/btn text-xs md:text-sm"
                        >
                          <a href={info.href} className="flex items-center justify-center gap-2">
                            Connect
                            <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="glass-card rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 text-center glow-effect">
              <div className="max-w-2xl mx-auto space-y-4 md:space-y-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Let's Work <span className="gradient-text">Together</span>
                </h3>
                <p className="text-muted-foreground text-sm md:text-base lg:text-lg px-4">
                  I'm always interested in hearing about new opportunities and exciting projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-2 md:pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="gradient-bg text-white hover:opacity-90 transition-opacity text-sm md:text-base"
                  >
                    <a href="mailto:dhavalkoshti21@gmail.com" className="flex items-center gap-2">
                      <Mail className="w-4 h-4 md:w-5 md:h-5" />
                      Send Email
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 text-sm md:text-base"
                  >
                    <a href="tel:+919409656095" className="flex items-center gap-2">
                      <Phone className="w-4 h-4 md:w-5 md:h-5" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container-width mt-12 md:mt-20 pt-6 md:pt-8 border-t border-border/50">
        <p className="text-center text-muted-foreground text-xs md:text-sm px-4">
          © 2025 Dhaval Koshti. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
