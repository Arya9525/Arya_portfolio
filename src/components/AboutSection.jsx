import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT BOX */}
          <div className="rounded-2xl border border-primary/20 p-8 shadow-md bg-background/60 backdrop-blur-md hover:shadow-lg transition-all space-y-6">
            <h3 className="text-2xl font-semibold">
              Full Stack Web Developer & MCA Student
            </h3>

            <p className="text-muted-foreground text-justify">
              I am <span className="font-semibold text-primary">Arya Kumar Mishra</span>, 
              a passionate <span className="font-semibold">Full Stack Web Developer</span> 
              and current <span className="font-semibold">MCA student at SRM Institute of Science and Technology, Ghaziabad, Delhi-NCR. I am continuously improving my skills to build better digital solutions</span>.  
              {/* I have completed my <span className="font-semibold">BA from DDU University, Gorakhpur</span>. */}
            </p>

            <p className="text-muted-foreground text-left">
              I love building impactful projects that solve real-world problems.  
              My future goal is to grow as a <span className="font-semibold">Software Engineer</span> 
              and contribute to innovative solutions in the IT industry.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://www.linkedin.com/in/arya-kumar-mishra-2a64421a1"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                LinkedIn Profile
              </a>

              <a
                href="https://drive.google.com/file/d/1jghv-H1vNCYhgZ4w5JqZjQCcOWFOaMKv/view?usp=sharing"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT SIDE – INDIVIDUAL BOXES */}
          <div className="space-y-6">

            {/* Box 1 */}
            <div className="rounded-2xl border border-primary/20 p-6 shadow-md bg-background/60 backdrop-blur-md hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Full Stack Development</h4>
                  <p className="text-muted-foreground text-left">
                    Building responsive and dynamic web applications using 
                    modern technologies and frameworks.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="rounded-2xl border border-primary/20 p-6 shadow-md bg-background/60 backdrop-blur-md hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Problem Solver</h4>
                  <p className="text-muted-foreground text-left">
                    Passionate about solving real-world challenges through 
                    innovative and efficient software solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="rounded-2xl border border-primary/20 p-6 shadow-md bg-background/60 backdrop-blur-md hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Career Goals</h4>
                  <p className="text-muted-foreground text-left">
                    Aspiring to become a Software Engineer, collaborate with 
                    dynamic teams, and contribute to impactful IT projects.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
