/* eslint-disable react/prop-types */
const NavigationProvider = ({ children }) => {
  return (
    <div className="lg:w-[90%] w-[95%] m-auto h-full bg-black pt-2 overflow-x-hidden">
      <nav className="w-80 m-auto bg-gray-700 rounded-2xl h-10 ">
        <ul className="flex space-x-8">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
      <div className="lg:flex md:flex-row-reverse w-full aside space-y-12">
        <div className="md:w-[70%] w-full md:h-[100vh - 3.5rem] h-full overflow-y-scroll ml-12">
          {children}
        </div>
        <aside className="lg:w-[400px] w-full flex justify-center items-center ">
          <div className="lg:w-96 w-[85%] lg:h-[500px] h-[400px] border bg-white rounded-2xl lg:sticky top-10 bottom-56"></div>
        </aside>
      </div>
    </div>
  );
};
export default NavigationProvider;
