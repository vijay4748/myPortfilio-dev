import { Code2, Users, Rocket, Award, GraduationCap, BookOpen, Trophy } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Technical Excellence',
      description: 'Expertise in MERN stack and modern web technologies'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Leading development teams and mentoring developers'
    },
    {
      icon: Rocket,
      title: 'Innovation Driven',
      description: 'Implementing AI-powered solutions and best practices'
    },
    {
      icon: Award,
      title: 'Quality Focused',
      description: 'Committed to delivering scalable, maintainable code'
    }
  ];

  const education = {
    degree: 'Master of Computer Applications - MCA',
    specialization: 'Computer Programming',
    university: 'Ranchi University',
    period: '2020 - 2022',
    grade: '9.61 CGPA',
    achievement: 'Topper of MCA'
  };

  const certifications = [
    {
      name: 'JavaScript Algorithms and Data Structures',
      organization: 'freeCodeCamp',
      date: 'Aug 2023',
      icon: '📜',
      link: 'https://www.freecodecamp.org/certification/fcc44ddb55e-8656-49b7-b4bc-570d34231f54/javascript-algorithms-and-data-structures'
    },
    {
      name: 'Microsoft Azure Fundamentals (AZ-900)',
      organization: 'Microsoft',
      date: 'Feb 2023',
      icon: '☁️',
      link: 'https://www.credly.com/badges/625df26a-c3d9-4dc7-849c-c57d577f8976/public_url'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-cyan-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-fadeInLeft">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                As a <span className="font-semibold text-blue-900 dark:text-cyan-400">Development Team Lead</span> at Izzki Tech Solutions, I specialize in MERN stack development and leading teams to build innovative, AI-powered solutions for SMEs globally.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                With an exceptional academic background (9.61 CGPA, MCA Topper) and <span className="font-semibold text-blue-900 dark:text-cyan-400">AZ-900 certification</span>, I combine technical excellence with leadership skills to drive innovation and deliver high-quality solutions.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Based in Ranchi, Jharkhand, India, I'm passionate about full-stack development, mentoring developers, and transforming ideas into scalable, user-centric applications trusted globally.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-fadeInRight">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="w-10 h-10 text-cyan-600 dark:text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 animate-fadeInUp">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Education</h3>
                  <p className="text-blue-900 dark:text-cyan-400 text-sm font-semibold">Academic Excellence</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-lg">{education.degree}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{education.specialization}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <BookOpen className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>{education.university}</span>
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {education.period}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Grade</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-cyan-500 bg-clip-text text-transparent">
                      {education.grade}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
                    <Trophy className="w-5 h-5 text-yellow-600 dark:text-yellow-500" />
                    <span className="text-sm font-bold text-yellow-700 dark:text-yellow-500">{education.achievement}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Certifications</h3>
                  <p className="text-purple-600 dark:text-pink-400 text-sm font-semibold">Professional Growth</p>
                </div>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <a
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 group cursor-pointer border border-gray-200 dark:border-gray-600 hover:border-cyan-500 dark:hover:border-cyan-400"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-3xl group-hover:scale-125 transition-transform duration-300">
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{cert.organization}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Issued {cert.date}</p>
                      </div>
                      <div className="text-cyan-600 dark:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
