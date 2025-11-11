import { Appbar } from "./components/Appbar";
import { Music2, Play, Users, Radio, Heart, TrendingUp, Zap, Shield, Sparkles, Monitor, ListMusic, Vote, ArrowRight, Twitter, Github, Youtube } from "lucide-react";
import { Redirect } from "./components/Redirect";

const Home = () => {
  const features = [
    {
      icon: Radio,
      title: "Real-Time Interaction",
      description: "Fans vote on songs instantly, creating a dynamic and engaging experience for everyone.",
    },
    {
      icon: Heart,
      title: "Build Community",
      description: "Strengthen the connection with your audience through shared music experiences.",
    },
    {
      icon: TrendingUp,
      title: "Boost Engagement",
      description: "Keep viewers engaged longer with interactive music selection during your streams.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Seamless integration with your streaming setup. No lag, no hassle.",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Content moderation and filtering to keep your stream appropriate and brand-safe.",
    },
    {
      icon: Sparkles,
      title: "Customizable",
      description: "Tailor the experience to match your brand and streaming style perfectly.",
    },
  ];

  const steps = [
    {
      icon: Monitor,
      title: "Start Your Stream",
      description: "Connect Muzii to your favorite streaming platform with just a few clicks.",
      step: "01",
    },
    {
      icon: ListMusic,
      title: "Create Your Playlist",
      description: "Choose songs from your library or let fans suggest tracks they want to hear.",
      step: "02",
    },
    {
      icon: Vote,
      title: "Fans Vote",
      description: "Your audience votes in real-time on what should play next during your stream.",
      step: "03",
    },
    {
      icon: Play,
      title: "Music Plays",
      description: "The winning track automatically plays, keeping the vibe perfect and fans happy.",
      step: "04",
    },
  ];

  return (
    <div className="min-h-screen">
      <Appbar />
      {/* Hero Section */}
      <Redirect />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-[100px] animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Logo/Brand */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <Music2 className="w-12 h-12 text-primary" />
              <h1 className="text-5xl md:text-7xl font-bold  from-primary via-secondary to-primary bg-clip-text text-transparent">
                Muzii
              </h1>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Let Your Fans Control
              <br />
              <span className="from-primary to-secondary bg-clip-text text-transparent">
                Your Stream Music
              </span>
            </h2>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Engage your audience like never before. Give them the power to choose what plays during your streams.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button  className="text-lg px-8 py-6 h-auto">
                <Play className="w-5 h-5" />
                Start Streaming
              </button>
              <button className="text-lg px-8 py-6 h-auto border-2 border-primary/50 hover:border-primary">
                <Users className="w-5 h-5" />
                Join as Fan
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Active Creators</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-secondary">50K+</div>
                <div className="text-sm text-muted-foreground">Songs Played</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-accent">100K+</div>
                <div className="text-sm text-muted-foreground">Happy Fans</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Creators <span className="text-primary">Love</span> Muzii
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create an unforgettable interactive music experience
            </p>
          </div>

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div> */}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              How It <span className="text-secondary">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started in minutes and transform your streaming experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                )}

                <div className="relative space-y-4 text-center">
                  {/* Step number */}
                  <div className="text-6xl font-bold text-primary/20 mb-2">{step.step}</div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/50">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-secondary p-1">
            <div className="bg-card rounded-[22px] p-12 md:p-16 text-center space-y-8">
              {/* Icon */}
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/50">
                  <Music2 className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>

              {/* Heading */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Ready to Transform Your Streams?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of creators who are already using Muzii to create unforgettable experiences
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <button className="text-lg px-8 py-6 h-auto">
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="text-lg px-8 py-6 h-auto">
                  Watch Demo
                </button>
              </div>

              {/* Trust badges */}
              <div className="pt-8 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span>Free 30-day trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="border-t border-border/50 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Music2 className="w-8 h-8 text-primary" />
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Muzii
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Empowering creators to build stronger communities through interactive music experiences.
              </p>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h3 className="font-semibold">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="font-semibold">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="font-semibold">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Muzii. All rights reserved.
            </p>

            {/* Social links */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group">
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group">
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group">
                <Youtube className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
