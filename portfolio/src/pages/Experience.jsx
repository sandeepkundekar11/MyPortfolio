import UTLIon from "../assets/UTL.png"
import ZicopsIcon from "../assets/Zicops.png"
import ExperienceCard from "../components/ExperienceCard"
import NavigationProvider from "../layouts/NavigationProvider"
const Experience = () => {
    return (
        <NavigationProvider>
            <div className=" lg:w-full w-[95%] m-auto py-2.5">
                <div className="w-[90%] ">
                    <h1 className="md:text-8xl text-5xl font-bold text-white">EXPERIENCE</h1>
                </div>

                <div className=" lg:w-[90%] m-auto">

                    {/*  time line */}
                    <ul className="timeline timeline-snap-icon max-xl:timeline-compact w-[768px] timeline-vertical m-auto   mt-14">
                        <li>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>

                            <div className="timeline-start md:mb-10">
                                <time className="font-mono italic  text-white text-lg"> Sept 2023  -  Present</time>
                                <ExperienceCard title={"React js Developer"}
                                    company={"UTL (Priyaraja electronics Limited) | Location: Bengaluru "}
                                    list={["Designed and developed a responsive web application using React.js and Tailwind CSS, resulting in a 25% improvement in page load times and enhanced user experience across devices.",
                                        "Optimized React Js and JQuery application by 25%  using React js Optimization techniques , and web workers, ",
                                        "Created the Visual Interface using Figma,",
                                        "Integrated REST APIs with the front-end, reducing API call errors by 15% through optimized error handling and testing.",
                                        "Implemented automated testing with Playwright, increasing test coverage by 40% and reducing manual testing time by 25%. "
                                    ]}
                                    src={UTLIon}
                                />
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end mb-10 md:text-end  ">
                                <time className="font-mono italic text-white text-lg "> Dec 2022  -  Apr 2023</time>
                                <ExperienceCard title={"Front End Developer (Intern)"}
                                    company={"Zicops  |  Location: Remote"}
                                    src={ZicopsIcon}
                                    list={["A comprehensive learning platform that manages the entire learning environment blending self-paced with live learning Developed",
                                        "Developed a video conferencing app using React.js, achieving a 90% functional similarity to Google Meet, including real-time chat, screen sharing, and participant controls."]}
                                />
                            </div>
                            <hr />
                        </li>
                    </ul>
                </div>
            </div>
        </NavigationProvider>
    )
}
export default Experience