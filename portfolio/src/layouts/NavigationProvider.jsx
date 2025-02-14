/* eslint-disable react/prop-types */
import {
  Briefcase,
  FolderGit2,
  HouseIcon,
  UserPen,
  Wrench,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import myProfileImg from "../assets/Myprofile.png";
import { useState } from "react";
const NavigationProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendEmail = () => {
    const { name, email, message } = formData;
    const toEmail = "sandeepkundekar1000@gmail.com"; // Replace with your email address

    // Construct the subject and body
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`
    );

    // Construct the mailto link with 'From' email and fixed 'To' email
    const mailtoLink = `mailto:${toEmail}?subject=${subject}&body=${body}`;

    // Open the default email client with the pre-filled details
    window.location.href = mailtoLink;
  };

  return (
    <div className="w-screen h-screen overflow-x-hidden flex justify-center bg-[#0F1011]">
      <div className="lg:w-[90%] w-[100%] m-auto h-full  pt-2">
        <nav className="w-80 m-auto flex justify-center items-center bg-gray-800 rounded-2xl h-10 ">
          <ul className="flex h-full  items-center justify-center space-x-8">
            <NavLink to="/" className="tooltip tooltip-bottom" data-tip="Home">
              <HouseIcon className="text-white" />
            </NavLink>

            <NavLink
              to="/about"
              className="tooltip tooltip-bottom"
              data-tip="About"
            >
              <UserPen className="text-white" />
            </NavLink>

            <NavLink
              to="/projects"
              className="tooltip tooltip-bottom"
              data-tip="Projects"
            >
              <FolderGit2 className="text-white" />
            </NavLink>

            <NavLink
              to="/skills"
              className="tooltip tooltip-bottom"
              data-tip="Skills"
            >
              <Wrench className="text-white" />
            </NavLink>

            <NavLink
              to="/experience"
              className="tooltip tooltip-bottom"
              data-tip="Experience"
            >
              <Briefcase className="text-white" />
            </NavLink>
          </ul>
        </nav>
        <div className="lg:flex lg:flex-row-reverse flex-col w-full aside space-y-12">
          {/* side content */}
          <div className="md:w-[60%] w-full  h-full mt-8 m-auto  md:ml-12">
            {children}

            {/* contact from */}
            <div className="m-auto mt-40 md:w-full w-[80%]">
              <h1 className="md:text-6xl text-5xl font-bold text-white">
                CONTACT
              </h1>

              <div className="form  mt-8 ">
                <div className="grid md:grid-cols-2  grid-cols-1 md:w-[700px]  w-[100%]  md:space-x-4 md:space-y-0 space-y-3 ">
                  {/* name */}
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    className="col-span-1 h-11 rounded-md bg-slate-700 outline-none focus:border-orange-400 focus:border pl-4 text-white"
                    placeholder="Enter Name"
                  />
                  {/* email */}
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    className="col-span-1 h-11 rounded-md bg-slate-700 outline-none focus:border-orange-400 focus:border pl-4 text-white"
                    placeholder="Enter your Email"
                  />
                </div>
                <div className="grid grid-cols-2 md:w-[700px] w-[100%]  mt-8">
                  {/* text area */}
                  <textarea
                    name="message"
                    onChange={handleChange}
                    value={formData.message}
                    cols={30}
                    className="col-span-2 rounded-md p-3 bg-slate-700 outline-none focus:border-orange-400 focus:border  text-white"
                    id=""
                    placeholder="Message..."
                  ></textarea>

                  {/* submit button */}
                  <button
                    onClick={handleSendEmail}
                    className="col-span-2 text-white mt-4 h-12 bg-orange-500 text-lg font-medium hover:bg-orange-600 p-3 shadow-md  rounded-md"
                  >
                    Submit
                  </button>
                </div>
                {/* textarea */}
              </div>
            </div>
            {/* form ends */}
          </div>

          {/* side profile  */}
          <div className="lg:w-96 w-[85%] lg:h-[700px] h-[600px]  p-4  m-auto bg-gradient-to-b from-gray-700 to-gray-900 shadow-md rounded-2xl lg:sticky top-8 mt-8 flex flex-col justify-center items-center">
            <div className="m-auto w-[90%]  ">
              <img
                className="w-72 md:h-96 rounded-3xl h-80 m-auto "
                src={myProfileImg}
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

        {/* Footer */}
        <div className="w-full h-24 m-auto mt-36 flex justify-center">
          <span className="font-bold text-white flex text-lg ">
            Made by |<p className=" text-blue-700 font-bold ml-3">@Sandeep</p>
          </span>
        </div>
      </div>
    </div>
  );
};
export default NavigationProvider;
