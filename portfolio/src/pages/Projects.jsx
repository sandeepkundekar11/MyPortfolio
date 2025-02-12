import NavigationProvider from "../layouts/NavigationProvider"

const Projects = () => {
    return (
        <NavigationProvider>
            <div className="home md:w-full w-[95%] m-auto py-2.5">
                <div>
                    <h1 className="md:text-8xl text-5xl font-bold text-white">
                        RECENT
                    </h1>
                    <h1 className="md:text-8xl text-5xl font-bold text-gray-700">
                        PROJECTS
                    </h1>
                </div>
            </div>
        </NavigationProvider>
    )
}
export default Projects