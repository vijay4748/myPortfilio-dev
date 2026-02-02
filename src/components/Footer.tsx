import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-cyan-500 bg-clip-text text-transparent mb-4">
                Vijay Kumar
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Dev Tech Lead passionate about creating innovative digital solutions and leading high-performing teams.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/vijaydev101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-cyan-500 dark:hover:bg-cyan-600 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vijaydev101/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-cyan-500 dark:hover:bg-cyan-600 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#contact"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-cyan-500 dark:hover:bg-cyan-600 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <p className="text-gray-600 dark:text-gray-400 text-center">
                © {currentYear} Vijay Kumar. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
