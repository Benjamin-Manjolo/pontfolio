import { Layout } from "../components/Layout";

export const AboutPage = () => {
  const experience = [
    {
      role: "Principal Associate Software Engineer (Design System)",
      company: "Freelance",
      period: "Apr 2025 - Current",
    },
    {
      role: "Principal Associate Software Engineer (Design System)",
      company: "Capital One",
      period: "Feb 2023 - Apr 2025",
    },
    {
      role: "Senior Associate Software Engineer (& Lead Designer)",
      company: "Capital One",
      period: "Feb 2021 - Feb 2023",
    },
    {
      role: "Associate Software Engineer (& Lead Designer)",
      company: "Capital One",
      period: "Feb 2020 - Feb 2021",
    },
    {
      role: "Capital One Developer Academy Associate",
      company: "Capital One",
      period: "Aug 2019 - Feb 2020",
    },
    {
      role: "Associate Designer",
      company: "MCD Partners",
      period: "Feb 2019 - Aug 2019",
    },
    {
      role: "Design Intern",
      company: "MCD Partners",
      period: "Jul 2018 - Feb 2019",
    },
    {
      role: "Wordpress/Web Designer",
      company: "Aloa",
      period: "Jan 2018 - Dec 2018",
    },
    {
      role: "Visual Designer",
      company: "Royal Boba",
      period: "Mar 2018 - Jun 2018",
    },
    {
      role: "Design Editor",
      company: "Vanderbilt Synesis Magazine",
      period: "Jan 2016 - May 2017",
    },
  ];

  const skills = [
    {
      category: "AI & Emerging Technologies",
      items: [
        "AI Agents",
        "LLM Integration",
        "AI Automation",
        "SaaS Development",
      ],
    },
    {
      category: "Frontend",
      items: [
        "React",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
      ],
    },
    {
      category: "Mobile",
      items: ["Flutter", "React Native", "Android Development", "PWA"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "Firebase", "Supabase", "PostgreSQL"],
    },
  ];

  const tools = [
    "Git",
    "GitHub",
    "Figma",
    "VS Code",
    "Postman",
  ];

  return (
    <Layout>
      <div className="bg-[#F9F8F5] min-h-screen">
        <div className="max-w-[1080px] mx-auto px-8 py-20">
          {/* About Me */}
          <section className="mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-satoshi mb-8">
              💫 About Me
            </h1>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-5 text-gray-700 text-lg font-satoshi leading-relaxed">
                <p>
                  I am <strong>Benjamin Manjolo</strong>, a Malawian software
                  engineer, innovator, and entrepreneur passionate about building
                  technology that creates meaningful impact.
                </p>
                <p>
                  My work spans AI, fintech, mobile applications, web platforms,
                  and digital communities. I enjoy transforming ambitious ideas
                  into scalable products that solve everyday challenges for
                  individuals, businesses, and communities.
                </p>
                <p>
                  My biggest project to date is Oakly — a web product design
                  experience available at
                  <a
                    href="https://oakly-ddb80.web.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    oakly-ddb80.web.app
                  </a>
                  .
                </p>
                <p>
                  As a recognized Top 20 MACRA Innovator, I have demonstrated a
                  commitment to developing practical solutions that leverage
                  technology for social and economic development.
                </p>
                <p>
                  I believe great products emerge from the intersection of
                  innovation, design, engineering excellence, and
                  user-centered thinking.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 font-satoshi mb-8">
              Experience
            </h2>
            <div className="space-y-0 divide-y divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
              {experience.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row md:items-center justify-between px-6 py-5 bg-white hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <p className="font-semibold text-gray-900 font-satoshi text-base">
                      {item.role}
                    </p>
                    <p className="text-gray-500 font-satoshi text-sm mt-0.5">
                      {item.company}
                    </p>
                  </div>
                  <span className="text-sm text-gray-400 font-satoshi mt-1 md:mt-0 shrink-0">
                    {item.period}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 font-satoshi mb-8">
              Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skillGroup, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-200"
                >
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 font-satoshi mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, j) => (
                      <span
                        key={j}
                        className="bg-blue-50 text-blue-700 text-sm font-medium font-satoshi px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Favorite Tools */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 font-satoshi mb-8">
              Favorite Tools
            </h2>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, i) => (
                <span
                  key={i}
                  className="bg-white border border-gray-200 text-gray-700 text-base font-medium font-satoshi px-5 py-2.5 rounded-full shadow-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};
