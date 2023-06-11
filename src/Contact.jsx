import Resume from "./Images/Resume.pdf"

const Contact = () => {
    return (
        <>
      <div className="text-center">
        <div className="text-center w-full md:my-[5%] my-[10%]">
          <h1 className="fade-in text-4xl md:text-5xl">Let's connect!</h1>
        </div>
        <div>
            <div className="fade-in text-xl md:text-2xl">
                Send me an email:{" "}
                <span>
                  <a href="mailto:murphynick10@gmail.com"
                  className="font-medium text-info underline hover:no-underline">
                  murphynick10@gmail.com</a>
                </span>
            </div>
            <div className="fade-in text-xl md:text-2xl">
                Download my{" "}
                <span>
                  <a href={Resume}
                  className="font-medium text-info underline hover:no-underline">
                  resume</a>
                </span>
            </div>
        </div>
      </div>
        </>
    );
  };

  export default Contact;







{/* <button className="btn btn-primary" href="mailto:murphynick10@gmail.com">duuuuu</button> */}
