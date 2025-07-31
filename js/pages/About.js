import { ArrowLeft, Users, Target, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
const About = () => {
  return <div className="min-h-screen bg-background">
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

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            About Stound
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to democratize investing and make wealth creation accessible to everyone.
            Our platform combines cutting-edge technology with user-friendly design to help you achieve your financial goals.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To empower every individual with the tools, knowledge, and confidence needed to build long-term wealth
                through smart investing. We believe that financial freedom should not be a privilege but a right accessible to all.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through innovative technology and educational resources, we're breaking down barriers that have traditionally
                kept people away from investing, making it simple, transparent, and rewarding.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center hover:shadow-[var(--shadow-card)] transition-all duration-300">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">500K+</h3>
                <p className="text-muted-foreground">Active Users</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-[var(--shadow-card)] transition-all duration-300">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">₹1000Cr+</h3>
                <p className="text-muted-foreground">Assets Under Management</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-4">Trust & Security</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your financial security is our top priority. We employ bank-grade security measures and maintain
                complete transparency in all our operations.
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <Users className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-4">User-Centric Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every feature is designed with our users in mind. We prioritize simplicity, accessibility, and
                an intuitive experience that makes investing effortless.
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <Award className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-4">Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                We continuously strive for excellence in technology, customer service, and investment solutions
                to deliver the best possible experience.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            name: "Rajesh Kumar",
            role: "CEO & Co-Founder",
            experience: "15+ years in Fintech"
          }, {
            name: "Priya Singh",
            role: "CTO & Co-Founder",
            experience: "12+ years in Technology"
          }, {
            name: "Amit Sharma",
            role: "Chief Investment Officer",
            experience: "20+ years in Investments"
          }].map((member, index) => <Card key={index} className="p-6 text-center hover:shadow-[var(--shadow-card)] transition-all duration-300">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-glow mx-auto mb-4 flex items-center justify-center text-primary-foreground text-xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.experience}</p>
              </Card>)}
          </div>
        </div>
      </section>
    </div>;
};
export default About;