import { useState } from "react";
import { TrendingUp, Shield, Coins } from "lucide-react";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import FaqSection from "@/components/faq/FaqSection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ServiceModal from "@/components/modals/ServiceModal";
const Index = () => {
  const [selectedService, setSelectedService] = useState(null);
  const scrollToSection = sectionId => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  const services = [{
    id: 'stocks',
    title: 'Stocks',
    description: 'Invest in top companies and build wealth',
    icon: TrendingUp,
    color: 'from-primary to-primary-glow',
    textColor: 'text-primary-foreground'
  }, {
    id: 'bonds',
    title: 'Bonds',
    description: 'Secure fixed returns with low risk',
    icon: Shield,
    color: 'from-bonds to-blue-600',
    textColor: 'text-white'
  }, {
    id: 'cash',
    title: 'Cash',
    description: 'High-yield savings and liquid funds',
    icon: Coins,
    color: 'from-cash to-green-600',
    textColor: 'text-white'
  }];
  return <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-background via-accent to-muted flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-primary/5 bg-[radial-gradient(circle_at_30%_30%,_hsl(var(--primary))_0%,_transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-12 border border-border shadow-[var(--shadow-elegant)]">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Stound
            </h1>
            <p className="text-2xl text-foreground mb-8 max-w-3xl mx-auto">
              Your Gateway to Smart Investing
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Build wealth with confidence through our intuitive investment platform. 
              Start your financial journey today with expert guidance and cutting-edge tools.
            </p>
            
            {/* Service Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {services.map(service => {
              const IconComponent = service.icon;
              return <button key={service.id} onClick={() => setSelectedService(service.id)} className={`p-6 rounded-xl bg-gradient-to-br ${service.color} ${service.textColor} hover:shadow-[var(--shadow-elegant)] transition-all duration-300 transform hover:scale-105 group`}>
                    <IconComponent className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm opacity-90">{service.description}</p>
                  </button>;
            })}
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                🚀 Hero section will be implemented by your friend
              </p>
              <p className="text-xs text-muted-foreground">
                Click on the investment options above to learn more
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <ServiceModal isOpen={selectedService !== null} onClose={() => setSelectedService(null)} service={selectedService} />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Footer */}
      <Footer />
    </div>;
};
export default Index;