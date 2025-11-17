import { ArrowUp, Facebook, Twitter, Github, Linkedin, } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-primary/90 to-primary/70 text-white py-10 px-6 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side - Copyright */}
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} <span className="font-semibold">Arya</span>. All rights reserved.
        </p>

        {/* Center - Social Links */}
        <div className="flex gap-5">
          <a href="https://www.facebook.com/profile.php?id=100006295218217" target="_blank" className="hover:text-gray-200 transition-transform hover:scale-110">
            <Facebook size={20} />
          </a>
          {/* <a href="https://twitter.com" target="_blank" className="hover:text-gray-200 transition-transform hover:scale-110">
            <Twitter size={20} />
          </a> */}
          <a href="https://github.com/Arya9525" target="_blank" className="hover:text-gray-200 transition-transform hover:scale-110">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/arya-kumar-mishra-2a64421a1/" target="_blank" className="hover:text-gray-200 transition-transform hover:scale-110">
            <Linkedin size={20} />
          </a>
        </div>

        {/* Right Side - Scroll To Top */}
        <a
          href="#hero"
          className="p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md transition-transform hover:scale-110 shadow-lg"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
