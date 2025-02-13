/* eslint-disable react/prop-types */
const SkillCard = ({ src, name }) => {
  return (
    <div className="md:min-w-48 w-36 flex bg-gray-800 rounded-xl hover:scale-105 transition-all duration-200 h-auto p-2 space-x-2 items-center justify-center">
      <div className="md:w-14 w-10 md:h-14 h-10">
        <img className="md:w-14 w-10 md:h-14 h-10" src={src} alt="skills" />
      </div>
      <p className="w-auto md:text-xl text-base font-semibold text-white">
        {name}
      </p>
    </div>
  );
};

export default SkillCard;
