import React, { forwardRef } from "react";
import Matrix from "../elements/Matrix";
import "../cssAssets/Home.css";
import quotes from "./quotes.json";
import { useState, useEffect } from "react";

const Home = forwardRef((_, ref) => {
  const [quote, setQuote] = useState({ auth: "", message: "" });
  useEffect(() => {
    quotesBag();
    console.log("Onload");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const quotesBag = async () => {
    if (quote.message === "") {
      //   const response = await fetch("https://api.quotable.io/random");
      //   const data = await response.json();
      //   setQuote({ auth: data.author, message: data.content });
      var num = Math.floor(Math.random() * 2041);
      console.log(num);
      setQuote({
        message: quotes[num].content,
        auth: quotes[num].author,
      });
    }
  };

  return (
    <section id="Home" ref={ref}>
      <div className="bg-outer h-full min-h-screen w-screen flex  justify-center items-center relative overflow-hidden">
        <div className="bg-inner h-full min-h-screen w-4/5 flex flex-col justify-center items-center relative md:space-y-5">
          <div className="flex md:flex-row md:mt-20 flex-col-reverse justify-center items-center  w-full h-fit">
            <div
              className="md:w-[60%] h-full flex justify-center  items-center md:items-start font-firaCode flex-col space-y-8"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <h1 className="font-bold md:text-4xl text-3xl text-center mt-5 md:text-left md:mt-0 text-white">
                Raj is a <span className="text-purple">Full Stack Web</span> and{" "}
                <span className="text-purple">Mobile Developer</span>
              </h1>
              <h1 className="text-gray md:pr-28">
                I craft responsive websites and mobile apps where technologies
                meet creativity
              </h1>
              <a
                href="https://wa.me/919167126442?text=Hi,%20Raj%20Jadhav.%20Found%20your%20work%20on%20your%20portfolio%20website%20interesting,%20want%20to%20work%20with%20you."
                rel="noreferrer"
                target="_blank"
                className="border-2 md:ml-5 animate-scale w-fit px-3 py-1  border-purple text-white hover:bg-purple"
              >
                Contact me!!
              </a>
            </div>
            <div
              className="md:w-[40%] mt-20 md:mt-0 flex flex-col justify-center items-center  h-fit relative"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <div className="z-0 w-1/3 absolute h-2/3 md:top-0 top-0 left-5 animate-pulse">
                <img
                  src="/assets/Logo.svg"
                  alt="logo"
                  className="w-full h-full animate-scale"
                />
              </div>
              <img
                src="/assets/newme.png"
                alt="me"
                className="w-[85%] h-full z-10 pl-2"
              />
              <div
                className="absolute z-20 bottom-[20%] right-10 animate-bounce hidden lg:block"
                style={{
                  animationDuration: "3s",
                }}
              >
                <Matrix vertical={6} horizontal={6} space={4} />
              </div>
              <div
                className="absolute z-20 bottom-[20%] right-10 animate-bounce block lg:hidden space-y-4"
                style={{
                  animationDuration: "3s",
                }}
              >
                <Matrix vertical={5} horizontal={5} space={4} />
              </div>
              <div className="border-2 w-5/6 border-gray flex flex-row items-center px-2 py-1">
                <div className="w-fit flex flex-row items-center">
                  <span className="w-5 h-5 bg-purple mr-2"></span>
                  <h1 className="font-firaCode pt-1 xl:text-lg text-md text-gray ">
                    Currently Working on{" "}
                    <span className="text-white">Ujjwal</span>
                    <span className="animate-blink xl:text-xl text-md pb-1">
                      |
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="md:p-5 py-5 relative flex flex-col items-end quote">
            <div>
              <img
                src="./assets/invertedcommas.svg"
                alt="''"
                className="absolute top-3 left-[5%] bg-inner px-2 w-fit h-fit z-10"
                data-aos="fade-right"
                data-aos-anchor="#example-anchor"
                data-aos-delay="4000"
                data-aos-duration="1000"
              />
              <div className="p-6 relative" id="quote-top">
                <div className="absolute top-0  w-full h-full bg-transparent apply-border"></div>
                <h1 className="text-white font-firaCode  md:text-xl text-lg text-justify ">
                  {quote.message}
                </h1>
              </div>
              <img
                src="./assets/invertedcommas.svg"
                alt="''"
                className="absolute md:bottom-16 bottom-14 right-[5%] bg-inner px-2 w-fit h-fit"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-delay="4000"
                data-aos-duration="1000"
              />
            </div>
            <div
              className=" px-3 py-3 border-b-2 border-x-2 border-[#abb2bf] w-fit block md:hidden"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              <h1 className="text-white font-firaCode md:text-xl text-sm">
                <span className="text-white font-firaCode md:text-xl text-sm pr-2">
                  -
                </span>
                {quote.auth}
              </h1>
            </div>
            <div
              className=" px-3 py-3 border-b-2 border-x-2 border-[#abb2bf] w-fit hidden md:block"
              data-aos="fade-up"
              data-aos-delay="4000"
              data-aos-offset="0"
            >
              <h1 className="text-white font-firaCode md:text-xl text-sm">
                <span className="text-white font-firaCode md:text-xl text-sm pr-2">
                  -
                </span>
                {quote.auth}
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute border-y-[1px] border-l-[1px] md:bottom-[15%] top-[32rem] right-0 border-gray h-20 md:w-20 w-8  "></div>
        <div className="absolute md:bottom-[25%] md:right-0 left-0 top-[25rem] border-gray h-20 w-fit md:hidden">
          <Matrix vertical={5} horizontal={2} space={4} />
        </div>
        {/* <div className="absolute bottom-[40%] border-y-[1px] border-r-[1px] left-0 border-gray h-20 w-10 hidden md:hidden">
         <Matrix vertical={5} horizontal={3} space={4}/> 
      </div> */}
      </div>
    </section>
  );
});

export default Home;
