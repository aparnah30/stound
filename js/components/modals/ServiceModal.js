import { X, TrendingUp, Shield, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
const serviceData = {
  stocks: {
    title: "Stocks",
    icon: TrendingUp,
    color: "primary",
    description: "Invest in individual companies and build your equity portfolio",
    features: ["Real-time market data and charts", "Commission-free trading on 3000+ stocks", "Advanced research and analysis tools", "Portfolio tracking and performance metrics", "Fractional shares for expensive stocks"],
    highlights: {
      commission: "₹0",
      minInvestment: "₹100",
      marketAccess: "NSE & BSE"
    }
  },
  bonds: {
    title: "Bonds",
    icon: Shield,
    color: "bonds",
    description: "Secure your future with government and corporate bonds",
    features: ["Government and corporate bonds", "Fixed returns and predictable income", "Low-risk investment options", "Diversified bond portfolios", "Tax-saving bond options available"],
    highlights: {
      returns: "6-9% p.a.",
      minInvestment: "₹1,000",
      riskLevel: "Low to Medium"
    }
  },
  cash: {
    title: "Cash & Deposits",
    icon: Coins,
    color: "cash",
    description: "Grow your savings with high-yield deposits and liquid funds",
    features: ["High-yield savings accounts", "Liquid mutual funds", "Fixed deposits with competitive rates", "Instant withdrawals available", "FDIC insured up to ₹5 lakhs"],
    highlights: {
      returns: "4-7% p.a.",
      minInvestment: "₹500",
      liquidity: "Instant"
    }
  }
};
const ServiceModal = ({
  isOpen,
  onClose,
  service
}) => {
  if (!isOpen || !service) return null;
  const data = serviceData[service];
  const IconComponent = data.icon;
  return <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal */}
      <Card className="relative w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${data.color === 'primary' ? 'bg-primary text-primary-foreground' : data.color === 'bonds' ? 'bg-bonds text-white' : 'bg-cash text-white'}`}>
                <IconComponent className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">{data.title}</h2>
            </div>
            <Button variant="outline" size="icon" onClick={onClose} className="h-10 w-10 rounded-full">
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {data.description}
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {Object.entries(data.highlights).map(([key, value]) => <div key={key} className="text-center p-4 bg-accent rounded-lg">
                <div className="text-2xl font-bold text-foreground mb-1">{value}</div>
                <div className="text-sm text-muted-foreground capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>)}
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Key Features</h3>
            <ul className="space-y-3">
              {data.features.map((feature, index) => <li key={index} className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${data.color === 'primary' ? 'bg-primary' : data.color === 'bonds' ? 'bg-bonds' : 'bg-cash'}`} />
                  <span className="text-muted-foreground">{feature}</span>
                </li>)}
            </ul>
          </div>

          {/* CTA Button */}
          <Button className={`w-full py-6 text-lg font-semibold ${data.color === 'primary' ? 'bg-gradient-to-r from-primary to-primary-glow' : data.color === 'bonds' ? 'bg-bonds hover:bg-bonds/90' : 'bg-cash hover:bg-cash/90'} hover:shadow-[var(--shadow-elegant)] transition-all duration-300`}>
            Start Investing in {data.title}
          </Button>
        </div>
      </Card>
    </div>;
};
export default ServiceModal;