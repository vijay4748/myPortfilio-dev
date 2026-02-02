import { MapPin, Calendar, Building2 } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      role: 'Development Team Lead',
      company: 'Izzki Tech Solutions Pvt. Ltd.',
      period: 'Dec 2025 — Present',
      duration: '3 months',
      location: 'India · Hybrid',
      logo: '🎯',
      category: 'Execution & Team Leadership',
      description: [
        'Leading development teams in architecting and delivering enterprise-grade web applications',
        'Driving technical excellence through code reviews, best practices, and mentoring',
        'Collaborating with stakeholders to align technical solutions with business objectives',
        'Implementing agile methodologies and fostering a culture of continuous improvement'
      ]
    },
    {
      role: 'Senior Technical Consultant',
      company: 'Izzki Tech Solutions Pvt. Ltd.',
      period: 'Jul 2025 — Dec 2025',
      duration: '6 months',
      location: 'India · Hybrid',
      logo: '🚀',
      skills: ['API Testing', 'Figma', '+13 skills'],
      description: [
        'Architected scalable solutions for complex business requirements using MERN stack',
        'Conducted technical consultations and provided strategic guidance to clients',
        'Optimized application performance and implemented best practices for code quality',
        'Collaborated with cross-functional teams to deliver high-impact projects'
      ]
    },
    {
      role: 'Junior Technical Consultant',
      company: 'Izzki Tech Solutions Pvt. Ltd.',
      period: 'Feb 2024 — Jul 2025',
      duration: '1 yr 6 months',
      location: 'Jamshedpur, Jharkhand, India · Hybrid',
      logo: '💡',
      skills: ['API Testing', 'Figma', '+13 skills'],
      description: [
        'Developed and maintained full-stack applications using React, Node.js, and MongoDB',
        'Implemented RESTful APIs and integrated third-party services',
        'Participated in agile sprints and delivered features on schedule',
        'Gained expertise in modern web development tools and frameworks'
      ]
    },
    {
      role: 'Software Developer',
      company: 'Digipank',
      period: 'Feb 2023 — Feb 2024',
      duration: '1 yr 1 month',
      location: 'Ahamdabad · Hybrid',
      logo: '💻',
      description: [
        'Built responsive and scalable web applications using modern JavaScript frameworks',
        'Collaborated with designers and backend developers to create seamless user experiences',
        'Implemented automated testing and CI/CD pipelines',
        'Contributed to the full software development lifecycle from requirements to deployment'
      ]
    },
    {
      role: 'Software Trainee',
      company: 'NathCorp Inc.',
      period: 'Dec 2022 — Jul 2023',
      duration: '8 months',
      location: 'Ranchi, Jharkhand, India · On-site',
      logo: '🌱',
      skills: ['JavaScript', 'Cascading Style Sheets (CSS)', '+12 skills'],
      description: [
        'Completed comprehensive training in full-stack web development',
        'Developed foundational skills in JavaScript, HTML, CSS, and React',
        'Built multiple practice projects demonstrating proficiency in web technologies',
        'Learned industry best practices and professional development workflows'
      ]
    }
  ];

  // Group experiences by company
  const groupedExperiences = experiences.reduce((acc, exp) => {
    const existing = acc.find(item => item.company === exp.company);
    if (existing) {
      existing.roles.push(exp);
    } else {
      acc.push({
        company: exp.company,
        location: exp.location,
        logo: exp.logo,
        roles: [exp]
      });
    }
    return acc;
  }, [] as Array<{ company: string; location: string; logo: string; roles: typeof experiences }>);

  const getCompanyLogo = (company: string) => {
    if (company === 'Izzki Tech Solutions Pvt. Ltd.') {
      return <img src="/img/izzki.jpeg" alt="Izzki Tech Solutions" className="w-full h-full object-cover" />;
    } else if (company === 'Digipank') {
      return <img src="/img/digipank.png" alt="Digipank" className="w-full h-full object-contain p-2" />;
    } else if (company === 'NathCorp Inc.') {
      return <img src="/img/nathcorp.png" alt="NathCorp Inc." className="w-full h-full object-contain p-2" />;
    }
    return null;
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Work Experience
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto text-lg">
            A timeline of my professional journey, showcasing the roles and responsibilities that have shaped my expertise
          </p>

          <div className="space-y-6">
            {groupedExperiences.map((company, companyIndex) => (
              <div
                key={companyIndex}
                className="relative flex gap-6 animate-fadeInUp"
                style={{ animationDelay: `${companyIndex * 0.1}s` }}
              >
                <div className="relative flex flex-col items-center">
                  <div className="w-3 h-3 bg-cyan-500 dark:bg-cyan-400 rounded-full z-10 ring-4 ring-cyan-100 dark:ring-gray-700"></div>
                  {companyIndex !== groupedExperiences.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-cyan-500 to-indigo-300 dark:from-cyan-400 dark:to-gray-600 absolute top-3"></div>
                  )}
                </div>

                <div className="flex-1 pb-12">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 group">
                    {/* Company Header */}
                    <div className="flex items-start gap-6 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex-shrink-0 w-20 h-20 bg-white dark:bg-gray-700 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden border-2 border-gray-200 dark:border-gray-600">
                        {getCompanyLogo(company.company)}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 text-blue-900 dark:text-cyan-400 font-bold text-xl mb-2">
                          <Building2 className="w-5 h-5" />
                          <span>{company.company}</span>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Full-time · {company.roles.reduce((total, role) => {
                            const match = role.duration.match(/(\d+)\s*(yr|month)/g);
                            if (match) {
                              return match.reduce((sum, part) => {
                                const [num, unit] = part.split(/\s+/);
                                return sum + parseInt(num) * (unit.includes('yr') ? 12 : 1);
                              }, total);
                            }
                            return total;
                          }, 0) >= 12 
                            ? `${Math.floor(company.roles.reduce((total, role) => {
                                const match = role.duration.match(/(\d+)\s*(yr|month)/g);
                                if (match) {
                                  return match.reduce((sum, part) => {
                                    const [num, unit] = part.split(/\s+/);
                                    return sum + parseInt(num) * (unit.includes('yr') ? 12 : 1);
                                  }, total);
                                }
                                return total;
                              }, 0) / 12)} yrs ${company.roles.reduce((total, role) => {
                                const match = role.duration.match(/(\d+)\s*(yr|month)/g);
                                if (match) {
                                  return match.reduce((sum, part) => {
                                    const [num, unit] = part.split(/\s+/);
                                    return sum + parseInt(num) * (unit.includes('yr') ? 12 : 1);
                                  }, total);
                                }
                                return total;
                              }, 0) % 12} mos`
                            : `${company.roles.reduce((total, role) => {
                                const match = role.duration.match(/(\d+)\s*(yr|month)/g);
                                if (match) {
                                  return match.reduce((sum, part) => {
                                    const [num, unit] = part.split(/\s+/);
                                    return sum + parseInt(num) * (unit.includes('yr') ? 12 : 1);
                                  }, total);
                                }
                                return total;
                              }, 0)} mos`}
                        </div>
                      </div>
                    </div>

                    {/* Roles */}
                    <div className="space-y-8">
                      {company.roles.map((role, roleIndex) => (
                        <div key={roleIndex} className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700">
                          <div className="absolute -left-[9px] top-2 w-4 h-4 bg-white dark:bg-gray-800 border-2 border-cyan-500 dark:border-cyan-400 rounded-full"></div>
                          
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                            {role.role}
                          </h3>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{role.period} · {role.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{role.location}</span>
                            </div>
                          </div>

                          {role.category && (
                            <div className="mb-3">
                              <span className="inline-block px-3 py-1 bg-cyan-100 dark:bg-gray-700 text-cyan-700 dark:text-cyan-400 rounded-full text-xs font-semibold">
                                {role.category}
                              </span>
                            </div>
                          )}

                          {role.skills && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {role.skills.map((skill, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          )}

                          <ul className="space-y-2">
                            {role.description.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                                <span className="w-1.5 h-1.5 bg-cyan-500 dark:bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
