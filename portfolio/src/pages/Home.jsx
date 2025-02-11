import NavigationProvider from "../layouts/NavigationProvider";

const Home = () => {
  return (
    <NavigationProvider>
      <div className="w-full h-screen">
        <h1 className="text-6xl font-bold"> hello</h1>
      </div>
      <div className="w-full h-screen">
        <h1 className="text-6xl font-bold"> hello</h1>
      </div>
    </NavigationProvider>
  );
};
export default Home;
