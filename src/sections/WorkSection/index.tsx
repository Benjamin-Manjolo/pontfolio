import { ProjectList } from "./components/ProjectList";

export const WorkSection = () => {
  return (
    <section id="work" className="w-full bg-[#F4F3EC] py-16 md:py-24">
      <div className="max-w-[1080px] mx-auto px-4 md:px-8">
        <ProjectList />
      </div>
    </section>
  );
};
