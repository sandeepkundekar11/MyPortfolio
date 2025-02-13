/* eslint-disable react/prop-types */
import { FileVideo, Github } from "lucide-react";

const ProjectCard = ({ imgSrc, ProjectName, ProjectInfo, skills = [],gitLink }) => {
  return (
    <div className="w-full min-h-96 xl:flex  bg-gray-800 rounded-2xl shadow-md hover:scale-105 m-auto transition-all duration-300">
      <div className="ProjectImg xl:w-[50%] w-full min-h-80  h-full rounded-2xl ">
        <img
          className="w-full h-full min-h-96 rounded-2xl"
          src={imgSrc}
          alt=""
        />
      </div>
      <div className="projectDetail p-4 xl:w-[70%] w-full">
        <h1 className=" lg:text-xl text-base font-semibold text-white">
          {ProjectName}
        </h1>
        <p className="mt-4 lg:text-base text-sm text-gray-400">{ProjectInfo}</p>

        <div className="skills mt-5 p-2 flex flex-wrap  space-x-4 gap-4 ">
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className="w-auto h-auto p-2 px-2 rounded-md text-gray-200 lg:mt-0 mt-4 bg-gray-600 shadow-md cursor-pointer hover:bg-slate-700 hover:scale-105 transition-all duration-150"
              >
                {skill}
              </div>
            );
          })}
        </div>

        {/* buttons */}
        <div className="w-full flex space-x-12 mt-12">
          <button className="relative overflow-hidden w-auto px-8 flex justify-center space-x-2 py-2 rounded-md text-white bg-blue-600 transition-all duration-500 before:absolute before:inset-0 before:w-0 before:bg-blue-700 before:transition-all before:duration-500 before:left-0 before:top-0 hover:before:w-full before:z-0">
            <span className="relative z-10">Watch</span>
            <span className="relative z-10">
              <FileVideo />
            </span>
          </button>

          <button className="relative overflow-hidden flex justify-center space-x-2 w-auto px-8 py-2 rounded-md text-white bg-blue-600 transition-all duration-500 before:absolute before:inset-0 before:w-0 before:bg-blue-700 before:transition-all before:duration-500 before:left-0 before:top-0 hover:before:w-full before:z-0">
           <a href={gitLink} target="_" className="flex space-x-3">
           <span className="relative z-10">View</span>
            <span className="relative z-10">
              <Github />
            </span>
           </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
