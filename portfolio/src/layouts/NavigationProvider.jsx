/* eslint-disable react/prop-types */
const NavigationProvider = ({ children }) => {
  return (
    <div className="w-screen h-screen overflow-x-hidden flex justify-center bg-gray-900">
      <div className="lg:w-[90%] w-[100%] m-auto h-full  pt-2">
        <nav className="w-80 m-auto bg-gray-700 rounded-2xl h-10 ">
          <ul className="flex space-x-8">
            <li></li>
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
            <div className="lg:w-96 w-[85%] lg:h-[500px] h-[400px] border m-auto bg-white rounded-2xl lg:sticky top-8 mt-8"></div>
          </div>
        </div>
      </div>
  );
};
export default NavigationProvider;
