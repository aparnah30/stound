import FaqItem from "./FaqItem";
const faqData = [{
  question: "How do I get started with investing?",
  answer: "Getting started is simple! Sign up for an account, complete your KYC verification, and you can start investing with as little as ₹500. Our guided onboarding process will help you choose the right investment options based on your goals and risk tolerance."
}, {
  question: "What are the fees and charges?",
  answer: "We believe in transparent pricing. There are no account opening fees or AMC charges for most of our services. For equity investments, we charge a flat ₹20 per trade regardless of order size. Mutual fund investments are completely free with zero commission."
}, {
  question: "Is my money safe on this platform?",
  answer: "Absolutely! We are SEBI registered and follow the highest security standards. Your funds are held with qualified custodians, and we use bank-grade security with 256-bit SSL encryption. Additionally, we are covered by investor protection schemes."
}, {
  question: "Can I withdraw my money anytime?",
  answer: "Yes, you have complete control over your investments. For mutual funds, you can redeem anytime and funds typically reach your bank account within 1-3 business days. For stocks, you can sell anytime during market hours and funds are available for withdrawal on T+2 basis."
}, {
  question: "Do you provide investment advice?",
  answer: "We provide educational content, market research, and tools to help you make informed decisions. However, we do not provide personalized investment advice. We recommend consulting with a qualified financial advisor for personalized investment strategies."
}, {
  question: "What investment options are available?",
  answer: "You can invest in a wide range of options including stocks, mutual funds, ETFs, SIPs, IPOs, and government bonds. We also offer curated investment collections and goal-based investment plans to help you achieve your financial objectives."
}, {
  question: "How can I track my portfolio performance?",
  answer: "Our dashboard provides real-time portfolio tracking with detailed analytics, profit/loss statements, and performance insights. You can view your holdings, track gains/losses, and get detailed reports via our web platform and mobile app."
}, {
  question: "What support is available if I need help?",
  answer: "We offer comprehensive support through multiple channels - live chat, email support, and phone support during business hours. Our help center also contains detailed guides and tutorials to help you navigate the platform effectively."
}];
const FaqSection = () => {
  return <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our platform and investment services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => <FaqItem key={index} question={faq.question} answer={faq.answer} />)}
        </div>
      </div>
    </section>;
};
export default FaqSection;