import NavigationProvider from "../layouts/NavigationProvider";

const About = () => {
  return (
    <NavigationProvider>
      <div className="about md:w-full w-[95%] m-auto py-2.5">
        <div>
          <h1 className="md:text-8xl text-5xl font-bold text-white">ABOUT</h1>
          <h1 className="md:text-8xl text-5xl font-bold text-gray-700">ME..</h1>

          {/* user info */}
          <div className="mt-7">
            <p className="md:text-xl text-lg text-gray-200">
              👋 Hey there! I&apos;m Sandeep Kundekar, a passionate Full Stack
              Developer specializing in the MERN (MongoDB, Express.js, React.js,
              Node.js) stack.
            </p>
            <p className="mt-6 md:text-xl text-lg text-gray-200">
              With 1.8+ years of experience, I have been dedicated to building
              user-friendly, scalable, and high-performance web applications. My
              expertise lies in React.js, Tailwind CSS, Node.js, MongoDB, and
              Express.js, enabling me to create dynamic, fast, and interactive
              user experiences.
            </p>

            <p className="mt-6 md:text-xl text-lg text-gray-200">
              I have a strong passion for performance optimization in React.js,
              ensuring that applications run smoothly with minimal load times
              and maximum efficiency. I enjoy solving complex problems,
              debugging tricky issues, and continuously exploring new
              technologies to stay ahead in the ever-evolving world of web
              development.
            </p>
          </div>

          {/* core strength */}

          <div className=" mt-6">
            <h1 className="md:text-5xl text-3xl font-bold text-gray-600">
              💡 My Core Strengths
            </h1>
            <ul className=" mt-5 space-y-4">
              <li className="lg:text-lg text-base text-gray-500">
                <span className="text-white lg:text-lg text-base mr-2">
                  ✔ Frontend Magic{" "}
                </span>
                I build seamless, responsive UI experiences using React.js,
                Tailwind CSS, and Material-UI.
              </li>
              <li className="lg:text-lg text-base text-gray-500">
                <span className="text-white lg:text-lg text-base mr-2">
                  ✔ Backend Mastery{" "}
                </span>
                I develop robust APIs with Node.js and Express.js, handling
                authentication, database integration, and RESTful services.
              </li>
              <li className="lg:text-lg text-base text-gray-500">
                <span className="text-white lg:text-lg text-base mr-2">
                  ✔ Database Management{" "}
                </span>
                Skilled in MongoDB & MySQL, ensuring efficient data storage and
                retrieval.
              </li>
              <li className="lg:text-lg text-base text-gray-500">
                <span className="text-white lg:text-lg text-base mr-2">
                  {" "}
                  ✔ Performance Optimization{" "}
                </span>
                Experienced in React.js performance tuning, web workers, and
                advanced state management.
              </li>
              <li className="lg:text-lg text-base text-gray-500">
                <span className="text-white lg:text-lg text-base mr-2">
                  {" "}
                  ✔ Testing & Debugging{" "}
                </span>
                Hands-on experience with Playwright for automated testing to
                enhance code reliability.
              </li>
              <li className="lg:text-lg text-base text-gray-500">
                <span className="text-white lg:text-lg text-base mr-2">
                  {" "}
                  ✔ System Design & DSA Enthusiast{" "}
                </span>
                I love exploring data structures and algorithms to write
                efficient, scalable code.
              </li>
              <li className="lg:text-lg text-base text-gray-500">
                <span className="text-white lg:text-lg text-base mr-2">
                  {" "}
                  ✔ Continuous Learning{" "}
                </span>
                Always eager to experiment with new tools, frameworks, and best
                practices in software development.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </NavigationProvider>
  );
};
export default About;
