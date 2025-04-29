import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import TextTestimonialCard from "@/components/TextTestimonialCard";
import FormsAppEmbed from "@/components/FormsAppEmbed";
const Index = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://forms.app/cdn/embed.js";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      // @ts-ignore
      new window.formsapp('680ffb834528e40002798b7b', 'standard', {
        'width': '100vw',
        'height': '600px'
      }, 'https://59yt4z4p.forms.app');
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <div className="min-h-screen bg-[#1C1C1A] text-white flex flex-col items-center font-satoshi">
      {/* Hero Section with Video */}
      <section className="w-full max-w-5xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Assista o vídeo abaixo para entender como podemos{" "}
          <span className="text-white">revolucionar</span> seu negócio
          educacional com sistemas e tecnologia
        </h1>
        
        <div className="mt-8 relative w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/zJ5YbsF0ffQ" title="Video de apresentação" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-lg"></iframe>
        </div>

        {/* Form Section */}
        <div className="mt-10 mb-10 w-full max-w-3xl mx-auto">
          <FormsAppEmbed formId="680ffb834528e40002798b7b" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          O que os especialistas estão dizendo sobre a <span className="italic">MasterPiece</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Primeiro vídeo */}
          <TestimonialCard videoUrl="https://www.youtube.com/embed/R5GzrNiRzMA" username="@soudaviribas" role="Founder Creator da Eternity" />
          
          {/* Primeiro texto */}
          <TextTestimonialCard text="Antes da MasterPiece nunca tinha encontrado alguém que conseguisse entender o que eu queria fazer para traduzir isso para meus alunos." username="@prof.jairsoares" role="Founder Creator TRG" />
          
          {/* Segundo vídeo */}
          <TestimonialCard videoUrl="https://www.youtube.com/embed/Ohrl31XKudI" username="@dr.andrefreitass" role="Founder Creator da Dentista Classe A" />
          
          {/* Segundo texto */}
          <TextTestimonialCard text="Com a ajuda de tudo aqui dentro fiz meu primeiro evento na minha cidade nova AGV, fiz a primeira turma do Método IV, e já vamos fazer a segunda essa semana" username="@wellingtonavila_" role="Founder Creator Método IV" />
          
          {/* Terceiro vídeo */}
          <TestimonialCard videoUrl="https://www.youtube.com/embed/nl7GXeevWbY" username="@yallioliveira" role="Founder Creator do Grupo UNBK" />
          
          {/* Quarto vídeo */}
          <TestimonialCard videoUrl="https://www.youtube.com/embed/YOEZzLpG1rM?feature=share" username="@darlansousa" role="Founder Creator do Clube de Vendas" />
        </div>
        
        {/* Logo Below Testimonials */}
        <div className="w-full flex justify-center mt-16 mb-8">
          <img src="/lovable-uploads/8d000680-d8aa-4791-a481-b07fc4dc67f9.png" alt="MasterPiece Logo" className="h-32" />
        </div>
      </section>
      
      {/* Footer with Logo */}
      <footer className="w-full bg-[#1C1C1A] py-10 px-4 border-t border-gray-800">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="mb-10">
            
          </div>
          
          <div className="text-xs text-[#DAD5D0] text-center max-w-3xl">
            <p className="mb-4 uppercase text-sm">IMPORTANTE: Isenção de responsabilidade sobre ganhos e rendimentos.</p>
            <p className="mb-6 text-xs">
              Embora todos os depoimentos nesta página sejam reais, estes resultados são excepcionais e não representativos dos resultados que podem ser esperados por uma pessoa média. Os resultados podem variar conforme suas habilidades, experiência, formação e outros fatores. Ganhos anteriores não indicam resultados futuros.
            </p>
            <p className="text-xs">
              A MasterPiece é uma empresa de educação e treinamento em marketing. Não vendemos oportunidades de negócio, programas para enriquecer rapidamente ou alternativas de trabalho da internet. Nossa missão é proporcionar educação de marketing de valor para você tomar decisões, mas não garantimos o sucesso em todos treinamentos. Não fazemos declarações de ganhos, situação ou afirmações de que você receberá benefícios financeiros específicos através do programa.
            </p>
          </div>
          
          <div className="mt-10 text-center">
            <h3 className="font-bold text-xl mb-2">MasterPiece</h3>
            <p className="text-sm text-[#DAD5D0] mb-4">Ensine com alma. Construa com clareza. Venda em escala.</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-xs text-gray-600">
            © 2025 MasterPiece. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;