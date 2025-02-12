/* eslint-disable react/prop-types */
import { HouseIcon } from "lucide-react";
const NavigationProvider = ({ children }) => {
  return (
    <div className="w-screen h-screen overflow-x-hidden flex justify-center bg-gray-900">
      <div className="lg:w-[90%] w-[100%] m-auto h-full  pt-2">
        <nav className="w-80 m-auto bg-gray-700 rounded-2xl h-10 ">
          <ul className="flex space-x-8">
            <li>
              <div
                className="tooltip tooltip-open tooltip-bottom"
                data-tip="hello"
              >
                <button className="btn">Bottom</button>
              </div>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
        <div className="lg:flex lg:flex-row-reverse flex-col w-full aside space-y-12">
          {/* side content */}
          <div className="md:w-[60%] w-full  h-full mt-8 m-auto  md:ml-12">
            {children}
          </div>

          {/* side profile  */}
          <div className="lg:w-96 w-[85%] lg:h-auto lg:min-h-[600px]  p-4 border m-auto bg-white rounded-2xl lg:sticky top-8 mt-8 flex flex-col justify-center items-center">
            <div className="m-auto w-[90%]  ">
              <img
                className="w-72 h-72 m-auto border rounded-2xl"
                src=""
                alt=""
              />
              <h1 className="text-4xl  text-center  font-extrabold text-black mt-3.5">
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
