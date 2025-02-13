import ProjectCard from "../components/ProjectCard";
import { ProjectInfo } from "../constants/ProjectInfo";
import NavigationProvider from "../layouts/NavigationProvider";

const Projects = () => {
  return (
    <NavigationProvider>
      <div className="home md:w-full w-[95%] m-auto py-2.5">
        <div>
          <h1 className="md:text-8xl text-5xl font-bold text-white">RECENT</h1>
          <h1 className="md:text-8xl text-5xl font-bold text-gray-700">
            PROJECTS
          </h1>
        </div>

        <div className="projects mt-12 space-y-10">
          {/* <ProjectCard /> */}
          {ProjectInfo.map((project, key) => {
            return (
              <ProjectCard
                key={key}
                ProjectName={project.Heading}
                ProjectInfo={project.description}
                skills={project.skills}
                imgSrc={project.imgScr}
              />
            );
          })}
        </div>
      </div>
    </NavigationProvider>
  );
};
export default Projects;
