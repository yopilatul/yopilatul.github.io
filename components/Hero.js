import Social from "./Social";
import Toggle from "./Toggle";

const Hero = () => {
  return (
    <>
      <div className="flex h-screen lg:px-4 md:h-96 justify-center items-center md:justify-start">
        <div className="text-center md:text-left ">
          <p className="font-primary font-medium text-4xl sm:text-5xl md:text-7xl text-gray-500 dark:text-gray-300">
            Yovie Kobba
          </p>
          <p className="font-primary font-medium text-4xl sm:text-5xl md:text-7xl text-gray-500 dark:text-gray-300 mt-5">
            AI Developer
          </p>
          <div className="flex items-center justify-center mt-10 sm:hidden">
            <Social />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
