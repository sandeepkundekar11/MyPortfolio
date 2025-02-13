/* eslint-disable react/prop-types */
const ExperienceCard = ({ title, company, src, list = [] }) => {
    return (
        <div className="bg-slate-800 rounded-md xl:w-[400px] lg:w-[350px] w-80 p-5">
            <div className="flex items-center flex-wrap">
                <div className="md:w-auto">
                    <div className="lg:text-xl text-base text-white text-start font-semibold mt-12 break-words">{title}</div>
                    <div className="lg:text-xl text-base text-white text-start font-semibold mt-2 break-words">{company}  </div>
                </div>
                <div className=" w-20 h-20">
                    <img className="w-full h-full" src={src} alt="" />
                </div>
            </div>
            <ul className="space-y-4  text-gray-500 mt-2 text-start lg:text-lg text-sm  list-disc pr-6 pl-3">
                {
                    list.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default ExperienceCard