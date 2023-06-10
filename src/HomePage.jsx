import headshot from "./Images/photoofmebackyard.jpg";
import Skills from "./Skills";

const HomePage = () => {
  return (
    <>
      <div className="text-center">
        <div className="text-center w-full md:my-[5%] my-[10%]">
          <h1 className="fade-in text-5xl md:text-6xl font-bold">Nicolas Murphy</h1>
            <p className="fade-in-2 text-3xl md:text-4xl md:my-[3%] my-[8%]">Full-Stack Developer</p>
        </div>
      </div>
        <div className="mx-[3%] md:ml-[20%]">
          <div className="md:my-[2.5%] flex flex-col items-center md:flex-row md:max-fit">
            <img className="fade-in-3 md:mb-[0%] mb-[8%] rounded-full object-cover h-64 md:h-auto md:w-48" src={headshot} alt=""/>
            <div className="flex flex-col justify-between leading-normal">
              <p className="fade-in-4 md:text-xl text-lg md:text-left text-center mx-[5%] md:mr-[28%] md:my-[2.5%] my-[5%] font-normal text-gray-700 dark:text-gray-400">
              I am passionate about creating reliable,
            maintainable, scalable applications, with aesthetic
            interfaces, that are easy to use and understand.
            The agile philosophy is something I strongly believe in,
            for creating solutions that serve both the client and the user.
              </p>
            </div>
          </div>
      </div>
      <div className="my-[12%] md:mt-[4%] mb-[20%] md:mb-[5%]">
        <Skills />
      </div>
    </>
  );
};

export default HomePage;
