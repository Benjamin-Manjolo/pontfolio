import { Layout } from "../components/Layout";

export const FunPage = () => {
  const hobbies = [
    {
      emoji: "📚",
      label: "Reading novels",
      detail: "Throne of Glass & Poppy War series fan",
    },
    {
      emoji: "🎮",
      label: "Playing games",
      detail: "Zelda BotW, Ori, Hollow Knight, Hogwarts",
    },
    {
      emoji: "☕",
      label: "Coffee shops",
      detail: "Working from cozy cafés whenever possible",
    },
    {
      emoji: "🐶",
      label: "Cuddling with Luna",
      detail: "Her dog and the namesake of the Kuma app",
    },
    {
      emoji: "🎨",
      label: "Oil painting",
      detail: "Her greatest love — recently started again",
    },
    {
      emoji: "💻",
      label: "Passion projects",
      detail: "Helping her SO with design & coding projects",
    },
  ];

  return (
    <Layout>
      <div className="bg-[#F9F8F5] min-h-screen">
        <div className="max-w-[1080px] mx-auto px-8 py-20">
          <section>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-satoshi mb-8">
              🌙 Hobbies & Interests
            </h1>
            <div className="space-y-6 text-gray-700 text-lg font-satoshi leading-relaxed max-w-3xl">
              <p>
                I am passionate about building digital products that solve real-world problems. My interests go beyond software development and extend into product design, entrepreneurship, and innovation.
              </p>
              <div className="space-y-4">
                <p className="font-semibold text-gray-900">I enjoy:</p>
                <ul className="space-y-4 list-disc list-inside text-gray-700">
                  <li>
                    <strong>Software Engineering</strong> — Building mobile and web applications using modern technologies such as Flutter, React, TypeScript, and AI-powered tools.
                  </li>
                  <li>
                    <strong>UI/UX & Product Design</strong> — Designing intuitive, clean, and user-centered digital experiences. I enjoy transforming ideas into visually appealing and functional products.
                  </li>
                  <li>
                    <strong>Graphic Design & Creative Branding</strong> — Creating visual identities, social media designs, promotional materials, and digital artwork. Some of my design work can be viewed on my Instagram portfolio: <a href="https://www.instagram.com/kurupt.designs/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Kurupt Designs</a>.
                  </li>
                  <li>
                    <strong>Entrepreneurship</strong> — Exploring innovative business ideas and building technology-driven solutions that create impact within communities.
                  </li>
                  <li>
                    <strong>Artificial Intelligence</strong> — Learning and developing AI-powered applications, automation systems, and intelligent digital products.
                  </li>
                  <li>
                    <strong>Innovation & Problem Solving</strong> — Identifying challenges and designing practical solutions through technology.
                  </li>
                  <li>
                    <strong>Open Source & Technology Exploration</strong> — Studying existing products, understanding how they work, and creating improved experiences from those insights.
                  </li>
                </ul>
              </div>
              <p>
                As a <strong>Top 20 MACRA Innovation Challenge Innovator</strong>, creator of <strong>TetezaChiweto</strong>, and founder of several technology initiatives, I enjoy combining technology, design, and entrepreneurship to build products that are useful, impactful, and accessible.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};
