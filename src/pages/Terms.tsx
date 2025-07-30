import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-8">
            Last updated: January 2024
          </p>

          <div className="space-y-8">
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using InvestPro's platform, you agree to be bound by these Terms and Conditions. 
                If you do not agree to these terms, please do not use our services. These terms apply to all users, 
                including browsers, vendors, customers, merchants, and content contributors.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Investment Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                InvestPro provides investment services including but not limited to:
              </p>
              <ul className="text-muted-foreground list-disc list-inside space-y-2">
                <li>Stock trading and portfolio management</li>
                <li>Mutual fund investments</li>
                <li>Educational resources and market analysis</li>
                <li>Goal-based investment planning</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                All investments are subject to market risks. Past performance does not guarantee future results.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a user of our platform, you agree to:
              </p>
              <ul className="text-muted-foreground list-disc list-inside space-y-2">
                <li>Provide accurate and truthful information during account creation</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not engage in any fraudulent or illegal activities</li>
                <li>Report any unauthorized access to your account immediately</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Risk Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed">
                Investing involves risk, including the potential loss of principal. Market volatility can significantly 
                impact the value of your investments. You should carefully consider your investment objectives, risk tolerance, 
                and financial situation before making any investment decisions. We recommend consulting with a qualified 
                financial advisor for personalized investment advice.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Fees and Charges</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our fee structure is transparent and competitive. Detailed information about all fees and charges 
                is available on our website and will be communicated to you before any transaction. We reserve the 
                right to modify our fee structure with appropriate notice to users.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Privacy and Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to protecting your privacy and personal data. Our Privacy Policy details how we 
                collect, use, and protect your information. By using our services, you consent to the collection 
                and use of information in accordance with our Privacy Policy.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                InvestPro shall not be liable for any direct, indirect, incidental, special, or consequential damages 
                resulting from the use of our platform or services. Our liability is limited to the extent permitted 
                by applicable law.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Regulatory Compliance</h2>
              <p className="text-muted-foreground leading-relaxed">
                InvestPro is registered with SEBI and complies with all applicable financial regulations in India. 
                Our SEBI registration number is INZ000000000. We adhere to strict compliance standards to ensure 
                the security and integrity of our services.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Modifications to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Users will be notified of significant 
                changes via email or platform notifications. Continued use of our services after modifications 
                constitutes acceptance of the updated terms.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For any questions regarding these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Email: legal@investpro.com</p>
                <p>Phone: +91-80-1234-5678</p>
                <p>Address: InvestPro Technologies Pvt. Ltd., Bangalore, India</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;