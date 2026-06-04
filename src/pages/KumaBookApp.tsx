import { Layout } from "../components/Layout";

export const KumaBookApp = () => {
  const overviewMeta = [
    {
      label: "ROLE",
      value:
        "Passion Project · Product & Brand Designer · Lead UI/UX · Research · Prototyping · Logo Design",
    },
    { label: "PLATFORM", value: "iOS" },
    { label: "TIMELINE", value: "2024 – Current" },
    { label: "STATUS", value: "In Development" },
    {
      label: "DELIVERABLES",
      value:
        "Design · User Flow · Wireframes · High-Fidelity Prototype · Design System · Branding · Logo",
    },
  ];

  const challenges = [
    "Fragmented Experiences",
    "Privacy Concerns",
    "Lack of Personalization",
    "Missing Social Dimension",
    "Algorithmic Recommendations",
    "Complex Interfaces",
  ];

  const goals = [
    "Create a unified platform for all book-related activities",
    "Design a warm and inviting user experience",
    "Balance private and social features with granular privacy controls",
    "Implement an intuitive discovery system powered by friend recommendations",
    "Develop thoughtful social features including spoiler protection",
    "Establish a design system that prioritises coziness and readability",
  ];

  const features = [
    {
      title: "Your Books",
      emoji: "📚",
      points: [
        "Currently Reading shelf with privacy options",
        "Custom collections (private or shared)",
        "Friend recommendation tracking",
        "Rating system with custom tags and notes",
      ],
    },
    {
      title: "Your Feed",
      emoji: "💬",
      points: [
        "Clubs for discussions with friends and groups",
        "Support for text, images, GIFs, and memes",
        "Built-in spoiler protection",
        "Bookmark posts into personal collections",
      ],
    },
    {
      title: "Your Profile",
      emoji: "👤",
      points: [
        "Reading statistics and habits visualisation",
        "Collection, post history, and bookmarked content",
        "Granular privacy controls",
        "Custom tags for exploration",
      ],
    },
    {
      title: "Discovery & Exploration",
      emoji: "🔍",
      points: [
        "Curated recommendations based on history",
        "Friend-sourced suggestions",
        "Mood-based filters",
        "Book club reads and discussions",
      ],
    },
  ];

  const takeaways = [
    {
      label: "Balance is essential",
      desc: "Personal and social needs require careful equilibrium.",
    },
    {
      label: "Design systems pay dividends",
      desc: "A cohesive system speeds up every future decision.",
    },
    {
      label: "Privacy matters",
      desc: "Users need flexible controls over what they share.",
    },
    {
      label: "Design for delight",
      desc: "Small moments of warmth make a product feel alive.",
    },
    {
      label: "Simplicity wins",
      desc: "Ruthlessly removing complexity improves usability.",
    },
    {
      label: "Competitive analysis",
      desc: "Studying competitors reveals powerful gaps to fill.",
    },
  ];

  return (
    <Layout>
      <div className="bg-[#F9F8F5] min-h-screen">
        {/* Hero banner */}
        <div className="bg-[#F0EDE4] border-b border-gray-200">
          <div className="max-w-[1080px] mx-auto px-8 py-16 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://c.animaapp.com/mppvkhajXxTwJ9/assets/kuma-logo.png"
                  alt="Kuma"
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <span className="text-xl font-semibold font-league_spartan text-gray-700">
                  Kuma App
                </span>
              </div>
              <p className="text-xs font-bold uppercase tracking-[3px] text-gray-400 font-satoshi mb-3">
                PASSION PROJECT | IOS
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-satoshi leading-tight mb-4">
                Kuma Books App
              </h1>
              <p className="text-lg text-gray-600 font-satoshi leading-relaxed mb-8 max-w-lg">
                Designing a cozy mobile library for all of your book-related
                needs.
              </p>
              <a
                href="https://www.figma.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 text-white font-satoshi text-[15px] font-medium px-5 py-3 rounded-full hover:bg-gray-700 transition-colors"
              >
                View Prototype →
              </a>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <img
                src="https://c.animaapp.com/mppvkhajXxTwJ9/assets/kuma-mockup.png"
                alt="Kuma App mockup"
                className="w-full max-w-sm object-contain drop-shadow-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>
        </div>

        <div className="max-w-[1080px] mx-auto px-8 py-16 space-y-20">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 font-satoshi mb-8">
              ✨ Overview
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {overviewMeta.map((item, i) => (
                  <div key={i}>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 font-satoshi mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-gray-800 font-satoshi text-[15px] leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <p className="text-gray-700 font-satoshi text-base leading-relaxed">
                  Benjamin Manjolo wanted a book app that is{" "}
                  <strong>simple, intuitive, and enjoyable</strong> — a comfort
                  space functioning as a mobile library for all book-related
                  needs. The app is inclusive of all genres and readers,
                  creating a safe space that can be as customisable, private, or
                  public as the user wants.
                </p>
                <p className="text-gray-700 font-satoshi text-base leading-relaxed mt-4">
                  The idea originated when Kim and a friend realised they were
                  always reading the same books at different times and
                  recommending them to each other. The app was named{" "}
                  <strong>Kuma</strong> — a nickname for her dog Luna, and
                  meaning <em>bear</em> in Japanese — influencing the cozy
                  branding and colour choices.
                </p>
              </div>
            </div>
          </section>

          {/* Challenge & Solution */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 font-satoshi mb-8">
              ✨ Highlights
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Challenge */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-gray-900 font-satoshi mb-2">
                  The Challenge
                </h3>
                <p className="text-gray-600 font-satoshi text-sm mb-6 leading-relaxed">
                  Most existing book apps fail to create a cohesive experience
                  that balances personal library management with social
                  interactions — forcing users to juggle multiple apps.
                  There&#39;s a clear gap for an app that provides both utility
                  and comfort.
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 font-satoshi mb-3">
                  Pinpointing Issues
                </p>
                <div className="flex flex-wrap gap-2">
                  {challenges.map((c, i) => (
                    <span
                      key={i}
                      className="bg-red-50 text-red-700 text-xs font-medium font-satoshi px-3 py-1.5 rounded-full"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              {/* Solution */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-gray-900 font-satoshi mb-2">
                  The Solution
                </h3>
                <p className="text-gray-600 font-satoshi text-sm mb-6 leading-relaxed">
                  A book app that seamlessly integrates personal library
                  management with meaningful social interactions — creating a
                  cozy digital space that feels as inviting as a favourite
                  reading nook.
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 font-satoshi mb-3">
                  High Level Goals
                </p>
                <ul className="space-y-2">
                  {goals.map((g, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700 font-satoshi text-sm"
                    >
                      <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Research */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 font-satoshi mb-8">
              ✨ Research Summary
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h3 className="text-lg font-bold text-gray-900 font-satoshi mb-3">
                  Market Insights & Competitor Analysis
                </h3>
                <p className="text-gray-600 font-satoshi text-sm leading-relaxed">
                  An in-depth analysis of the current book app market — focusing
                  on direct and indirect competitors — revealed opportunities to
                  combine the strongest elements of existing platforms while
                  addressing their limitations for a more cohesive experience.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h3 className="text-lg font-bold text-gray-900 font-satoshi mb-3">
                  Usability Interviews
                </h3>
                <p className="text-gray-600 font-satoshi text-sm leading-relaxed">
                  A comprehensive testing strategy is planned for the beta
                  version, focusing on overall usability, effectiveness of
                  social features, user satisfaction with privacy and
                  customisation, book discovery, and general app sentiment.
                </p>
              </div>
            </div>
          </section>

          {/* Design Process */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 font-satoshi mb-8">
              ✨ Design Process
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
              {[
                {
                  step: "01",
                  title: "Design Review",
                  desc: "Moodboards and UI pattern research via Mobbin to establish a cozy, warm visual direction inspired by sunset colour palettes.",
                },
                {
                  step: "02",
                  title: "Ideation",
                  desc: "Defined core features and target users, balancing the app&#39;s dual nature as a personal library and a social platform.",
                },
                {
                  step: "03",
                  title: "Wireframing",
                  desc: "Core user flows sketched to surface usability issues early and build a solid foundation for high-fidelity UI.",
                },
                {
                  step: "04",
                  title: "Explorations",
                  desc: "Iterative design explorations to test concepts, refine components, and land on the final visual language.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-200 p-6"
                >
                  <p className="text-3xl font-bold text-gray-200 font-satoshi mb-2">
                    {item.step}
                  </p>
                  <h3 className="text-base font-bold text-gray-900 font-satoshi mb-2">
                    {item.title}
                  </h3>
                  <p
                    className="text-gray-500 font-satoshi text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 font-satoshi mb-3">
                Tools Used
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Figma",
                  "Framer",
                  "Adobe Suite",
                  "Sketch",
                  "XCode",
                  "VSCode",
                  "Github",
                  "Slack",
                ].map((t, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-700 text-sm font-medium font-satoshi px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 font-satoshi mb-8">
              ✨ Key Features
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-200 p-7"
                >
                  <div className="text-3xl mb-3">{feature.emoji}</div>
                  <h3 className="text-lg font-bold text-gray-900 font-satoshi mb-4">
                    {feature.title}
                  </h3>
                  <ul className="space-y-2">
                    {feature.points.map((point, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-gray-600 font-satoshi text-sm"
                      >
                        <span className="text-blue-400 mt-0.5 shrink-0">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Visual Design */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 font-satoshi mb-8">
              ✨ Visual Design
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-7">
                <h3 className="text-base font-bold text-gray-900 font-satoshi mb-2">
                  Typography
                </h3>
                <p className="text-gray-500 font-satoshi text-sm leading-relaxed">
                  <strong className="text-gray-800">Crimson Pro</strong> — a
                  classy serif for titles and headings — paired with{" "}
                  <strong className="text-gray-800">Mulish</strong>, a clean
                  sans-serif for body text and UI elements.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-7">
                <h3 className="text-base font-bold text-gray-900 font-satoshi mb-2">
                  Colour Palette
                </h3>
                <p className="text-gray-500 font-satoshi text-sm leading-relaxed">
                  Warm sunset tones reflecting a cozy, inviting atmosphere. The
                  palette communicates comfort and a sense of a favourite
                  reading nook.
                </p>
                <div className="flex gap-2 mt-4">
                  {["#F4A261", "#E76F51", "#264653", "#2A9D8F", "#E9C46A"].map(
                    (c, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border border-gray-200 shadow-sm"
                        style={{ backgroundColor: c }}
                        title={c}
                      />
                    ),
                  )}
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-7">
                <h3 className="text-base font-bold text-gray-900 font-satoshi mb-2">
                  Branding & Illustrations
                </h3>
                <p className="text-gray-500 font-satoshi text-sm leading-relaxed">
                  The Kuma brand centres on the bear motif, symbolising comfort.
                  Custom illustrations (with AI-assisted explorations) reinforce
                  the warm, friendly personality.
                </p>
              </div>
            </div>
          </section>

          {/* Developer Handoff */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 font-satoshi mb-8">
              ✨ Developer Handoff
            </h2>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 max-w-2xl">
              <p className="text-gray-700 font-satoshi text-base leading-relaxed">
                Benjamin Manjolo and a friend are developing the app together, using{" "}
                <strong>vibe-coding and AI</strong> for a faster workflow. The
                team combines design and engineering perspectives, enabling
                practical solutions that balance aesthetics with technical
                feasibility.
              </p>
              <p className="text-gray-700 font-satoshi text-base leading-relaxed mt-4">
                The design system is mapped to{" "}
                <strong>SwiftUI components</strong>. A beta version launch is
                expected soon.
              </p>
            </div>
          </section>

          {/* Reflections */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 font-satoshi mb-8">
              ✨ Reflections
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
              {takeaways.map((t, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-200 p-6"
                >
                  <h3 className="font-bold text-gray-900 font-satoshi text-base mb-1">
                    {t.label}
                  </h3>
                  <p className="text-gray-500 font-satoshi text-sm">{t.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#F0EDE4] rounded-2xl p-8">
              <h3 className="text-lg font-bold text-gray-900 font-satoshi mb-4">
                Next Steps
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "Finalise MVP features",
                  "Conduct usability testing with beta users",
                  "Refine experience based on feedback",
                  "Expand custom illustration library",
                  "Prepare for App Store launch",
                  "Build roadmap for future community features",
                ].map((step, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-700 font-satoshi text-sm"
                  >
                    <span className="text-blue-500 mt-0.5 shrink-0">→</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};
