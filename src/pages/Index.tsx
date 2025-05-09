
import { Card } from "@/components/ui/card";
import { useEffect } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import TextTestimonialCard from "@/components/TextTestimonialCard";
import FormsAppEmbed from "@/components/FormsAppEmbed";
import { Youtube, Instagram, Linkedin } from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Remove the old Forms.app script since we're not using it anymore
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="min-h-screen bg-[#1C1C1A] text-white flex flex-col items-center font-satoshi">
      {/* Hero Section with Video */}
      <section className="w-full max-w-5xl mx-auto px-4 py-12 text-center">
        <p className="text-[#EFCB20] text-lg mb-4">
          Sua ferramenta já está a caminho do seu email...
        </p>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Assista o vídeo abaixo para entender como podemos{" "}
          <span className="text-[#EFCB20] py-0 mx-0 rounded-none px-0">revolucionar seu negócio educacional</span> com sistemas e tecnologia
        </h1>
        
        <div className="mt-8 relative w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          <iframe 
            id="panda-44ed41dd-544c-4d11-b8b8-640d5d758eab" 
            src="https://player-vz-5073547e-d25.tv.pandavideo.com.br/embed/?v=44ed41dd-544c-4d11-b8b8-640d5d758eab" 
            style={{ border: "none" }} 
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
            allowFullScreen={true} 
            width="100%" 
            height="400" 
            fetchPriority="high"
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Form Section - replaced with Tally.so embed */}
        <div className="mt-10 mb-10 w-full max-w-3xl mx-auto">
          <iframe src="https://tally.so/embed/mVdYgN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                  width="100%" 
                  height="600" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0} 
                  title="Tally Form"></iframe>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          O que os especialistas estão dizendo sobre a <span className="italic">MasterPiece</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Primeiro vídeo */}
          <TestimonialCard 
            videoUrl="https://www.youtube.com/embed/R5GzrNiRzMA" 
            username="@soudaviribas" 
            role="Founder Creator da Eternity" 
            avatarSrc="/lovable-uploads/0d0de205-0d2c-454d-ad9e-843b4a78eaa2.png" 
          />
          
          {/* Primeiro texto */}
          <TextTestimonialCard 
            text="Antes da MasterPiece nunca tinha encontrado alguém que conseguisse entender o que eu queria fazer para traduzir isso para meus alunos." 
            username="@prof.jairsoares" 
            role="Founder Creator TRG" 
            avatarSrc="/lovable-uploads/40061526-6988-4f5d-b03d-02131f16c69c.png" 
          />
          
          {/* Segundo vídeo */}
          <TestimonialCard 
            videoUrl="https://www.youtube.com/embed/Ohrl31XKudI" 
            username="@dr.andrefreitass" 
            role="Founder Creator da Dentista Classe A" 
            avatarSrc="/lovable-uploads/45ba2ef7-c878-4d99-b6af-75e28914d877.png" 
          />
          
          {/* Segundo texto */}
          <TextTestimonialCard 
            text="Com a ajuda de tudo aqui dentro fiz meu primeiro evento na minha cidade nova AGV, fiz a primeira turma do Método IV, e já vamos fazer a segunda essa semana" 
            username="@wellingtonavila_" 
            role="Founder Creator Método IV" 
            avatarSrc="/lovable-uploads/af5263d8-60b1-4ec0-b648-dfead4ac2279.png" 
          />
          
          {/* Terceiro vídeo */}
          <TestimonialCard 
            videoUrl="https://www.youtube.com/embed/nl7GXeevWbY" 
            username="@yallioliveira" 
            role="Founder Creator do Grupo UNBK" 
            avatarSrc="/lovable-uploads/35eae8e8-2f68-40ac-929c-b0071759008c.png" 
          />
          
          {/* Quarto vídeo */}
          <TestimonialCard 
            videoUrl="https://www.youtube.com/embed/YOEZzLpG1rM?feature=share" 
            username="@darlansousa" 
            role="Founder Creator do Clube de Vendas" 
            avatarSrc="/lovable-uploads/d3b8ffd4-6283-42f4-a722-0b9b174cd9a6.png" 
          />
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
              Embora todos os depoimentos nesta página sejam reais, estes resultados são excepcionais e não representativos dos resultados que podem ser esperados por uma pessoa média. Os resultados podem variar conforme suas habilidades, experiência, formação e outros fatores. 
              Ganhos anteriores não indicam resultados futuros.
            </p>
            <p className="text-xs">
              A MasterPiece é uma empresa de educação e serviços voltados à educação e tecnologia. Não vendemos oportunidades de negócio, programas para enriquecer rapidamente ou alternativas de trabalho da internet. Nossa missão é transformar sabedoria viva em estrutura escalável. Não fazemos declarações de ganhos, situação ou afirmações de que você receberá benefícios financeiros específicos através do programa.
            </p>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-sm text-[#DAD5D0] mb-4">Ensine com alma. Construa com clareza. Venda em escala.</p>
            <div className="flex justify-center space-x-4">
              <a href="https://www.instagram.com/isabellesmachado" className="text-white hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@isabellesmachado" className="text-white hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <Youtube size={20} />
              </a>
              <a href="https://www.linkedin.com/in/isabelle-machado-468b76352/" className="text-white hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
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
