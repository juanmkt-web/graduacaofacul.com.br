import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users } from "lucide-react";
const Hero = () => {
  return (
    <section className="relative flex items-center overflow-hidden gradient-animated pt-[72px] pb-8 md:pt-[112px] md:pb-16">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-10 md:h-16 lg:h-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full rotate-180"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-4 md:py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center mb-6 md:mb-12">
          <div className="text-white animate-fade-in text-center md:text-left">
            <h1
              className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 leading-tight"
              style={{
                textShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              A NOVA ERA DIGITAL<span className="text-primary"> EXIGE UMA NOVA</span> FORMAÇÃO SUPERIOR.
            </h1>

            <p className="text-base md:text-xl text-white/90 leading-relaxed mb-5 md:mb-8">
              Esqueça o ensino do passado. Aqui você tem diploma rápido e foco total em IA para aproveitar as vagas que
              pagam os melhores salários hoje.
            </p>

            <div className="mb-5 md:mb-8 flex justify-center md:justify-start">
              <a
                href="https://www.fasuleducacional.edu.br/posgraduacao/cursos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/80 font-bold text-sm md:text-lg px-6 md:px-10 py-5 md:py-7 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 animate-pulse-cta w-full md:w-auto"
                >
                  NÃO QUERO FICAR PARA TRÁS <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </a>
            </div>

            <div className="flex flex-row gap-3 md:gap-6 justify-center md:justify-start">
              <div className="flex items-center gap-1 md:gap-2">
                <Award className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                <span className="text-xs md:text-sm font-medium">Diploma MEC</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <Users className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                <span className="text-xs md:text-sm font-medium">+10 mil Alunos</span>
              </div>
            </div>
          </div>

          <div
            className="relative animate-fade-in"
            style={{
              animationDelay: "0.2s",
            }}
          >
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-5 md:p-8 max-w-lg mx-auto animate-float">
              <div className="text-center mb-4 md:mb-6">
                <span className="inline-block bg-primary text-primary-foreground font-bold text-xs md:text-sm px-4 md:px-6 py-1.5 md:py-2 rounded-full uppercase tracking-wide">
                  Condição Especial
                </span>
              </div>

              <div className="text-center mb-4 md:mb-6">
                <p className="text-muted-foreground text-xs md:text-sm mb-1 md:mb-2">Por apenas:</p>
                <p className="text-4xl md:text-6xl font-extrabold text-primary">R$99</p>
                <p className="text-muted-foreground text-xs md:text-sm mt-1">mensais*</p>
              </div>

              <div className="space-y-3 md:space-y-4 text-foreground text-sm md:text-base">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Ganhe mais 3 Pós-Graduações como bônus</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Seu Diploma a partir de 2 anos</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Graduação Semipresencial e EAD</span>
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
