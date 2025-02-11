import NavigationProvider from "../layouts/NavigationProvider";

const Home = () => {
  return (
    <NavigationProvider>
      <div className="md:w-full w-[95%] m-auto py-2.5">
        <div className="home">
          <h1 className="md:text-8xl text-5xl font-bold text-white">FULLSTACK </h1>
          <h1 className="md:text-8xl text-5xl font-bold text-gray-700">DEVELOPER</h1>

          <p className="mt-6 md:text-2xl text-lg text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quidem explicabo harum reiciendis distinctio architecto dignissimos obcaecati a deleniti voluptate impedit, eos similique labore laudantium asperiores voluptatibus, reprehenderit enim omnis?</p>
        </div>
      </div>
    </NavigationProvider>
  );
};
export default Home;
