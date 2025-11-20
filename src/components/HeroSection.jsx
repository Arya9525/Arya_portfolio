import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-background via-card to-background"
    >
      <div className="container max-w-6xl mx-auto z-10">
        {/* Main grid container for image and text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ===== Image Section ===== */}
          {/* On large screens, this will be the second column (order-last) */}
          <div className="flex justify-center lg:order-last">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-r from-primary via-purple-500 to-secondary animate-fade-in mt-20">
              <img
                src="/image3.jpeg" // This should match the image name in your /public folder
                alt="arya"
                className="w-full h-full object-cover rounded-full border-4 border-background"
              />
            </div>
          </div>

          {/* ===== Text Content Section ===== */}
          {/* This will be the first column */}
          <div className="text-center lg:text-left mt-14">
            <div className="space-y-6">
              {/* Heading */}
              <h1 className="text-5x3 md:text-6xl font-semibold tracking-tight leading-tight">
                <span className="opacity-0 animate-fade-in"></span>
                <span className="text-primary opacity-0 animate-fade-in-delay-1">
                </span>
                <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              Arya Kumar Mishra
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in-delay-3 text-justify">
                A Passionate and dedicated{" "}
                <span className="font-semibold text-primary">
                  Full Stack Web Developer{" "}
                </span>
                and a current{" "}
                <span className="font-semibold">
                  MCA student at SRM Institute of Science and Technology
                </span>
                , with a strong and solid academic foundation {" "}
                . Enthusiastic about building efficient and user-friendly
                applications, with strong problem-solving abilities and a keen
                interest in emerging technologies. Eager to contribute to impactful
                projects, collaborate in dynamic teams, and grow as a{" "}
                <span className="font-semibold">Software Engineer</span> in the IT
                industry.
              </p>

              {/* CTA Buttons */}
              <div className="pt-6 flex flex-wrap justify-center lg:justify-start gap-4 opacity-0 animate-fade-in-delay-4">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-2xl bg-primary text-white font-medium shadow-lg hover:scale-105 transition-transform"
                >
                  View My Work
                </a>
                <a
                  href="https://www.linkedin.com/in/arya-kumar-mishra-2a64421a1"
                  target="_blank"
                  className="px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-primary font-medium shadow-lg hover:bg-white/20 hover:scale-105 transition-transform"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};