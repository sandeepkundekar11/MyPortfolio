import SkillCard from "../components/SkillCard";
import {
  BackendSkills,
  DatabasesSkills,
  FrontendSkills,
  ProgramingLanguages,
  TestingTool,
  Tools,
} from "../constants/ProjectInfo";
import NavigationProvider from "../layouts/NavigationProvider";

const Skills = () => {
  return (
    <NavigationProvider>
      <div className="about md:w-full w-[95%] m-auto py-2.5">
        <div>
          <h1 className="md:text-8xl text-5xl font-bold text-white">TOOLS &</h1>
          <h1 className="md:text-8xl text-5xl font-bold text-gray-700">
            TECHNOLOGIES
          </h1>

          {/* skills card */}
          <div className="m-auto mt-16">
            {/* programming languages */}
            <h1 className="text-2xl text-gray-500 my-4">
              Programming Languages
            </h1>
            <div className="flex flex-wrap gap-4 ">
              {ProgramingLanguages.map((skill, index) => {
                return (
                  <SkillCard key={index} name={skill.name} src={skill.src} />
                );
              })}
            </div>

            {/* front end */}
            <h1 className="text-2xl text-gray-500 my-4 mt-12">
              FrontEnd Technologies
            </h1>
            <div className="flex flex-wrap gap-4 ">
              {FrontendSkills.map((skill, index) => {
                return (
                  <SkillCard key={index} name={skill.name} src={skill.src} />
                );
              })}
            </div>

            {/* backend */}
            <h1 className="text-2xl text-gray-500 my-4 mt-12">
              Backend Technologies
            </h1>

            <div className="flex flex-wrap gap-6 ">
              {BackendSkills.map((skill, index) => {
                return (
                  <SkillCard key={index} name={skill.name} src={skill.src} />
                );
              })}
            </div>

            {/* database */}
            <h1 className="text-2xl text-gray-500 my-4 mt-12">DataBases</h1>
            <div className="flex flex-wrap gap-6 ">
              {DatabasesSkills.map((skill, index) => {
                return (
                  <SkillCard key={index} name={skill.name} src={skill.src} />
                );
              })}
            </div>

            {/* testing */}
            <h1 className="text-2xl text-gray-500 my-4 mt-12">
              Testing Technologies
            </h1>

            <div className="flex flex-wrap gap-6 ">
              {TestingTool.map((skill, index) => {
                return (
                  <SkillCard key={index} name={skill.name} src={skill.src} />
                );
              })}
            </div>

            {/* Tools */}
            <h1 className="text-2xl text-gray-500 my-4 mt-12">Tools</h1>

            <div className="flex flex-wrap gap-6 ">
              {Tools.map((skill, index) => {
                return (
                  <SkillCard key={index} name={skill.name} src={skill.src} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </NavigationProvider>
  );
};
export default Skills;
