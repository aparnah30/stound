import { Link } from "react-router-dom";
const Footer = () => {
  return <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent">
              Stound
            </h3>
            <p className="text-muted mb-6 max-w-md">
              Empowering your financial journey with smart investment solutions. 
              Start building wealth today with our user-friendly platform.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-glow transition-colors cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-glow transition-colors cursor-pointer">
                <span className="text-sm font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-glow transition-colors cursor-pointer">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-background transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-background transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-background transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-muted hover:text-background transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-background transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-background transition-colors">
                  Risk Disclosure
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-background transition-colors">
                  SEBI Registration
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted text-sm">
              © 2024 Stound. All rights reserved. | SEBI Reg No: INZ000000000
            </p>
            <p className="text-muted text-sm mt-4 md:mt-0">
              Investments are subject to market risks. Please read all documents carefully.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;