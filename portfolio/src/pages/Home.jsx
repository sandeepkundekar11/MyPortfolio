import { useNavigate } from "react-router-dom";
import githubIcon from "../assets/git.png";
import linkedInIcon from "../assets/linkedin-logo.png";
import NavigationProvider from "../layouts/NavigationProvider";
const Home = () => {
  const Navigate = useNavigate();
  return (
    <NavigationProvider>
      <div className="home md:w-full w-[95%] m-auto py-2.5">
        <div>
          <h1 className="md:text-8xl text-5xl font-bold text-white">
            FULLSTACK
          </h1>
          <h1 className="md:text-8xl text-5xl font-bold text-gray-700">
            DEVELOPER
          </h1>

          <p className="mt-6 md:text-xl text-lg text-gray-200">
            Hi, I&apos;m Sandeep Kundekar, a MERN Stack Developer passionate
            about creating scalable web applications. I specialize in React.js,
            Node.js, MongoDB, and Playwright testing.
          </p>

          {/* social media icons */}
          <div className="mt-6">
            <ul className="flex space-x-8">
              <li className="cursor-pointer">
                <a href="https://github.com/sandeepkundekar11" target="_">
                  <img
                    className="md:w-12 md:h-12 w-10 h-10"
                    src={githubIcon}
                    alt=""
                  />
                </a>
                <p className="text-gray-500 font-semibold">GitHub</p>
              </li>
              <li className="cursor-pointer">
                <a
                  href="https://www.linkedin.com/in/sandeep-kundekar-044a711b2/"
                  target="_"
                >
                  <img
                    className="md:w-14 md:h-14 -mt-2 w-12 h-12"
                    src={linkedInIcon}
                    alt=""
                  />
                </a>
                <p className="text-gray-500 font-semibold">LinkedIn</p>
              </li>
            </ul>
          </div>

          {/* buttons */}
          <div className="md:flex space-x-7  md:space-y-0 space-y-4 mt-10 ">
            <button
              className="w-auto h-10 rounded-lg px-2 text-white font-medium shadow-md bg-blue-500 hover:bg-blue-600"
              onClick={() => Navigate("/projects")}
            >
              View Projects
            </button>
            <a
              href="../../public/Sandeep_Kundekar_Resume.pdf"
              target="_"
              download="Sandeep_Resume.pdf"
            >
              <button className="w-auto h-10 px-2 text-white font-medium rounded-lg shadow-md bg-blue-500 hover:bg-blue-600">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </NavigationProvider>
  );
};
export default Home;
