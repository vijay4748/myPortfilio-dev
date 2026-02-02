import { useEffect, useRef } from 'react';
import { 
  SiReact, 
  SiNodedotjs, 
  SiTypescript, 
  SiJavascript, 
  SiMongodb, 
  SiExpress, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiGit, 
  SiGithub, 
  SiPostgresql, 
  SiGraphql, 
  SiDocker, 
  SiAmazon,
  SiGooglecloud,
  SiFigma, 
  SiRedux, 
  SiNextdotjs, 
  SiVite, 
  SiWebpack, 
  SiJest, 
  SiPostman,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiOpenai
} from 'react-icons/si';
import { Server, Cloud, Brain } from 'lucide-react';

export function Skills() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Express.js', icon: SiExpress, color: '#000000' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, color: '#181717' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'REST API', icon: Server, color: '#8B5CF6' },
    { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
    { name: 'GCP', icon: SiGooglecloud, color: '#4285F4' },
    { name: 'Azure', icon: Cloud, color: '#0078D4' },
    { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
    { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
    { name: 'OpenAI', icon: SiOpenai, color: '#412991' },
    { name: 'Hugging Face', icon: Brain, color: '#FFD21E' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    { name: 'Redux', icon: SiRedux, color: '#764ABC' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Vite', icon: SiVite, color: '#646CFF' },
    { name: 'Webpack', icon: SiWebpack, color: '#8DD6F9' },
    { name: 'Jest', icon: SiJest, color: '#C21325' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  ];

  const duplicatedSkills = [...skills, ...skills, ...skills];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;

      if (scrollPosition >= scrollContainer.scrollWidth / 3) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <p className="text-blue-600 dark:text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-2 animate-fadeInUp">
              MY TOOLKIT
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 animate-fadeInUp">
              Skills & Technologies
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-4 animate-fadeInUp"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto text-lg animate-fadeInUp">
            A curated collection of technologies and tools I use to bring ideas to life, from development to deployment
          </p>

          <div className="relative py-12">
            <div
              ref={scrollRef}
              className="overflow-x-hidden py-4 pb-8 scrollbar-hide cursor-grab active:cursor-grabbing"
            >
              <div className="flex gap-6 min-w-max px-4">
                {duplicatedSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={index}
                      className="group flex-shrink-0 w-44 h-44 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center gap-4 relative overflow-hidden hover:border-cyan-500 dark:hover:border-cyan-400"
                    >
                      <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                        <IconComponent 
                          className="w-16 h-16" 
                          style={{ color: skill.color }}
                        />
                      </div>
                      <div className="text-center relative z-10">
                        <h3 className="font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300 text-base group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                          {skill.name}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="absolute left-0 top-0 bottom-8 w-32 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-8 w-32 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none z-10"></div>
          </div>

          <div className="text-center mt-8 animate-fadeInUp">
            <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Auto-scrolling · Hover to pause
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}
