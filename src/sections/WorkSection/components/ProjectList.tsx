import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    href: "https://oakly-ddb80.web.app",
    bgColor: "bg-sky-50/70",
    logoSrc:
      "https://c.animaapp.com/mppvkhajXxTwJ9/assets/u31IWBhlj9D1MORM4b21UKU5Ac.png",
    companyName: "Oakly",
    eyebrow: "Biggest Project | Web Design",
    title: "Oakly Platform Design",
    description:
      "A polished web product design for Oakly, the largest project I led with a strong focus on UX, product strategy, and visual systems.",
    category: "Product Design | AI Product Strategy",
    imageSrc: "https://c.animaapp.com/mppvkhajXxTwJ9/assets/11.png",
  },
  {
    href: "/project/documentcenter",
    bgColor: "bg-lime-50/70",
    logoSrc:
      "https://c.animaapp.com/mppvkhajXxTwJ9/assets/8JE6xHWuxqBSsZZZHYAMspVnjg.png",
    companyName: "Capital One",
    eyebrow: "Full Time | Mobile App Feature",
    title: "Enterprise Document Center",
    description:
      "A native solution for a centralized documents hub at Capital One.",
    category: "Product Design | Software Engineering",
    imageSrc: "https://c.animaapp.com/mppvkhajXxTwJ9/assets/8.png",
  },
  {
    href: "/project/nightswatch",
    bgColor: "bg-indigo-50/60",
    logoSrc:
      "https://c.animaapp.com/mppvkhajXxTwJ9/assets/8JE6xHWuxqBSsZZZHYAMspVnjg.png",
    companyName: "Capital One",
    eyebrow: "Full Time | Web Dashboard",
    title: "Night&#39;s Watch Data Dashboard",
    description:
      "A model execution monitoring application with built-in controls to consistently ensure reliable data.",
    category: "Product Design | Software Engineering",
    imageSrc: "https://c.animaapp.com/mppvkhajXxTwJ9/assets/13.png",
  },
];

export const ProjectList = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-14">
      {projects.map((project) => (
        <ProjectCard key={project.href} {...project} />
      ))}
    </div>
  );
};
