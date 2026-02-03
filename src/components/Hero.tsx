import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react';

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 dark:from-gray-900 dark:via-blue-950 dark:to-gray-900 transition-colors duration-300 overflow-hidden">

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fadeInLeft">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-gray-800 text-blue-900 dark:text-cyan-400 rounded-full text-sm font-semibold mb-4">
                  HELLO, I'M
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-900 via-cyan-500 to-blue-900 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Vijay Kumar
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                Development Team Lead | MERN Stack Developer
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4 max-w-2xl leading-relaxed">
                at Izzki Tech Solutions Pvt. Ltd.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed">
                AZ-900 Certified | Driving Innovation Through AI and Full-Stack Development | MCA Topper (9.61 CGPA) | Transforming ideas into scalable, user-centric solutions
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="#contact"
                  className="group flex items-center gap-2 px-6 py-3 bg-blue-900 hover:bg-blue-950 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-blue-900/30"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">Contact Me</span>
                </a>
                <a
                  href="#contact"
                  className="group flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-400 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  <span className="font-medium">Download Resume</span>
                </a>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/vijay4748"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 group"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vijaydev101/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                </a>
                <a
                  href="mailto:vjy4748@gmail.com"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 group"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fadeInRight">
              <div className="relative group">
                {/* Outer glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-indigo-400 to-cyan-500 rounded-full blur-3xl opacity-30 group-hover:opacity-40 animate-pulse transition-opacity duration-500"></div>
                
                {/* Main image container with enhanced styling */}
                <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-[6px] border-white dark:border-gray-800 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                  {/* Gradient overlay - lighter for better visibility */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-indigo-400/10"></div>
                  
                  {/* Profile Image */}
                  <img
                    src="/img/vijayhero.JPG"
                    alt="Vijay Kumar - Development Team Lead"
                    className="w-full h-full object-cover object-center scale-110"
                  />
                  
                  {/* Animated border ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 animate-spin-slow"></div>
                </div>

                {/* Decorative floating circles with enhanced visibility */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full animate-bounce shadow-lg shadow-cyan-500/50" style={{ animationDuration: '3s' }}></div>
                <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-full animate-bounce shadow-lg shadow-indigo-500/50" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
                
                {/* Additional accent circles */}
                <div className="absolute top-1/4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-300 to-cyan-400 rounded-full animate-pulse opacity-80"></div>
                <div className="absolute bottom-1/3 -right-6 w-16 h-16 bg-gradient-to-br from-indigo-300 to-indigo-400 rounded-full animate-pulse opacity-70" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="p-6 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-cyan-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-2">3+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Years Experience</div>
            </div>
            <div className="p-6 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-cyan-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-2">9.61</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">MCA CGPA</div>
            </div>
            <div className="p-6 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-cyan-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Projects</div>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-8 h-8 text-gray-400 dark:text-gray-600" />
        </button>
      </div>
    </section>
  );
}
