/* eslint-disable react/prop-types */
import { Briefcase, FolderGit2, HouseIcon, UserPen, Wrench } from "lucide-react";
import { NavLink } from "react-router-dom";
const NavigationProvider = ({ children }) => {
  return (
    <div className="w-screen h-screen overflow-x-hidden flex justify-center bg-[#0F1011]">
      <div className="lg:w-[90%] w-[100%] m-auto h-full  pt-2">
        <nav className="w-80 m-auto flex justify-center items-center bg-gray-800 rounded-2xl h-10 ">
          <ul className="flex h-full  items-center justify-center space-x-8">
            <NavLink to="/" className="tooltip tooltip-bottom" data-tip="Home">
              <HouseIcon className="text-white" />
            </NavLink>

            <NavLink to="/about" className="tooltip tooltip-bottom" data-tip="About">
              <UserPen className="text-white" />
            </NavLink>


            <NavLink to="/projects" className="tooltip tooltip-bottom" data-tip="Projects">
              <FolderGit2 className="text-white" />
            </NavLink>

            <li className="tooltip tooltip-bottom" data-tip="Skills">
              <Wrench  className="text-white" />
            </li>

            <li className="tooltip tooltip-bottom" data-tip="Experience">
              <Briefcase className="text-white" />
            </li>

          </ul>
        </nav>
        <div className="lg:flex lg:flex-row-reverse flex-col w-full aside space-y-12">
          {/* side content */}
          <div className="md:w-[60%] w-full  h-full mt-8 m-auto  md:ml-12">
            {children}
          </div>

          {/* side profile  */}
          <div className="lg:w-96 w-[85%] lg:h-[600px] h-[500px]  p-4  m-auto bg-[#2E2F30] shadow-md rounded-2xl lg:sticky top-8 mt-8 flex flex-col justify-center items-center">
            <div className="m-auto w-[90%]  ">
              <img
                className="w-72 h-72 m-auto  rounded-2xl"
                src=""
                alt=""
              />
              <h1 className="text-4xl  text-center  font-extrabold text-white mt-3.5">
                Sandeep N kundekar
              </h1>

              {/* description */}
              <h1 className="mt-8 text-lg font-bold text-gray-500 text-center">
                MERN Stack Developer | Passionate about building scalable web
                applications
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavigationProvider;
