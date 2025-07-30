import ReviewsSection from "@/components/reviews/ReviewsSection";
import FaqSection from "@/components/faq/FaqSection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section Placeholder */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-background via-accent to-muted flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-primary/5 bg-[radial-gradient(circle_at_30%_30%,_hsl(var(--primary))_0%,_transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-12 border border-border shadow-[var(--shadow-elegant)]">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              InvestPro
            </h1>
            <p className="text-2xl text-foreground mb-8 max-w-3xl mx-auto">
              Your Gateway to Smart Investing
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Build wealth with confidence through our intuitive investment platform. 
              Start your financial journey today with expert guidance and cutting-edge tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => scrollToSection('reviews')}
                className="px-8 py-4 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground rounded-lg font-semibold hover:shadow-[var(--shadow-elegant)] transition-all duration-300 transform hover:scale-105"
              >
                Explore Reviews
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                View FAQs
              </button>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                🚀 Hero section will be implemented by your friend
              </p>
              <p className="text-xs text-muted-foreground">
                This placeholder maintains the smooth scrolling navigation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;