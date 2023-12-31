import Waving from "./Images/pngfind.com-cartoon-hand-png-2608798.png"

const Contact = () => {
    return (
        <>
      <div className="text-center">
        <div className="text-center w-full md:my-[5%] my-[10%]">
          <h1 className="fade-in text-4xl md:text-5xl">Let's connect!</h1>
        </div>
        <div>
            <div className="fade-in-2 text-xl md:text-2xl">
                Send me an email:{" "}
                <span>
                  <a href="mailto:murphynick10@gmail.com"
                  className="font-medium text-info underline hover:no-underline">
                  murphynick10@gmail.com</a>
                </span>
            </div>
            <div className="fade-in-3 text-xl md:text-2xl">
                View my{" "}
                <span>
                <a
                  href="https://drive.google.com/file/d/1UijZyfWN2B0fjBLUJQeXy3j3wZCnSvRP/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-info underline hover:no-underline"
                >Resume
                </a>
                </span>
            </div>
        </div>
      </div>
      <div>
        <img className="fade-in-4 mx-auto my-[20%] md:my-[5%]" src={Waving}/>
      </div>
        </>
    );
  };

  export default Contact;
