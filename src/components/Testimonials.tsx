import { Quote } from "lucide-react";
import afonsoFoto from "@/assets/afonso-souza.png";
import jociaraFoto from "@/assets/jociara-pereira.png";
import carlosFoto from "@/assets/carlos-soares.png";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Eu sempre fui o 'menino do computador' da família, mas isso não paga boleto. O mercado de TI tá pagando bem, só que exigem técnica. No curso eu aprendi a programar de verdade, mão na massa. Antes de me formar já consegui meu estágio e hoje trabalho de home office ganhando o que nunca imaginei.",
    name: "Afonso Souza",
    course: "Análise e Desenvolvimento de Sistemas",
    photo: afonsoFoto,
  },
  {
    id: 2,
    quote:
      "Onde eu trabalho era uma correria, ninguém sabia onde estava nada e a gente perdia venda por falta de organização. O curso de Processos abriu minha mente. Comecei a criar planilhas e organizar o fluxo de trabalho. O dono viu a diferença no fim do mês e me promoveu a encarregada.",
    name: "Jociara Pereira",
    course: "Processos Gerenciais",
    photo: jociaraFoto,
  },
  {
    id: 3,
    quote:
      "Cansado de ser o 'cara do suporte' que todo mundo chama quando o Wi-Fi cai. Eu sabia resolver problema técnico, mas não sabia gerenciar equipe nem projeto, por isso meu salário não subia. A faculdade me deu a postura de gestor. Hoje lidero o time de TI e não sou mais quem passa cabo, sou quem decide a estratégia.",
    name: "Carlos Soares",
    course: "Gestão de Recursos Humanos",
    photo: carlosFoto,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="depoimentos" className="py-12 md:py-24 desktop:pb-[116px] bg-[#1e2842] relative" style={{ marginTop: "15px" }}>
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
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-6 md:mb-12 animate-fade-in text-white">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
            CARREIRAS QUE <span className="text-cyan-light">DECOLARAM</span>.
          </h2>
          <p className="text-sm md:text-lg text-white/90 max-w-3xl mx-auto">
            Veja o que nossos alunos dizem sobre a experiência Fasul.
          </p>
        </div>

        {/* Carousel para telas menores que 1200px */}
        <div
          className="max-w-4xl mx-auto block desktop:hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="glass-effect rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-12 shadow-2xl animate-fade-in"
            key={currentTestimonial.id}
          >
            <Quote className="h-8 w-8 md:h-12 md:w-12 text-cyan-light mb-3 md:mb-6" />
            <p className="text-base md:text-xl lg:text-2xl text-white mb-5 md:mb-8 leading-relaxed italic font-light">
              "{currentTestimonial.quote}"
            </p>
            <div className="flex items-center gap-4 md:gap-6 border-t border-white/20 pt-5 md:pt-8">
              <img
                src={currentTestimonial.photo}
                alt={currentTestimonial.name}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-cyan-light object-cover"
              />
              <div className="text-white">
                <p className="font-bold text-lg md:text-xl">{currentTestimonial.name}</p>
                <p className="text-xs md:text-sm opacity-90">{currentTestimonial.course}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-cyan-light" : "w-2 bg-white/40"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid de 3 cards para telas >= 1200px */}
        <div className="hidden desktop:grid grid-cols-3 gap-6 ultrawide:gap-7 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="glass-effect rounded-2xl p-5 ultrawide:p-[22px] shadow-2xl animate-fade-in flex flex-col h-full"
            >
              <Quote className="h-6 w-6 ultrawide:h-7 ultrawide:w-7 text-cyan-light mb-3 ultrawide:mb-[13px]" />
              <p className="text-sm wide:text-[17px] ultrawide:text-[19px] text-white mb-4 ultrawide:mb-[18px] leading-relaxed italic font-light flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3 ultrawide:gap-[13px] border-t border-white/20 pt-4 ultrawide:pt-[18px]">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-12 h-12 ultrawide:w-[54px] ultrawide:h-[54px] rounded-full border-2 border-cyan-light object-cover"
                />
                <div className="text-white">
                  <p className="font-bold text-sm ultrawide:text-[16px]">{testimonial.name}</p>
                  <p className="text-xs ultrawide:text-[13px] opacity-90">{testimonial.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
