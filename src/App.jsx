import React from "react";
import Navbar from "./Components/Navbar";
import Companies from "./Components/Companies";
import BeneficialCard from "./Components/BeneficialCard";
const App = () => {
  const BeneficialCards = [
    {
      img: "/illust 1.png",
      title: "Happy Customer",
      description:
        "Productive agents are happy agents. Give them all the support tools and information they need to best serve your customers.",
    },
    {
      img: "/illust 2.png",
      title: "Best Integrations",
      description:
        "Our software is powerful enough to handle the most complex business, yet flexible enough to scale with you as you grow.",
    },
    {
      img: "/illust 3.png",
      title: "Grow Without Problems",
      description:
        "with evaluating in depth variety of data sets and including the speed of tech adaptation we can build bridges between any companies and their customers.",
    },
  ];
  return (
    <>
      <div className="w-full h-full bg-[#f2f5f6]">
        <Navbar />
        <div className=" flex flex-col md:flex-row justify-center items-center  px-5 md:15 py-10 md:py-40 ">
          <div>
            <img
              className="w-full h-60 hidden md:block"
              src="/hero 5.png"
              alt="hero"
            />
          </div>
          <div className="flex flex-col gap-5 justify-center items-center ">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center max-w-[650px]">
              Find High-Potential Customers with{" "}
              <span className="text-[#043A53]">Trustco.</span>
            </h1>
            <p className="text-center text-[12px] text-gray-500 max-w-[450px]">
              We help you find the best candidates for your company. We are a
              team of experts who are dedicated to finding the best candidates
              for your company.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-5">
              <button className="bg-[#043A53] text-white px-4 py-2 rounded-3xl text-center">
                Get Started
              </button>
              <div className="flex gap-1 items-center">
                <i className="ri-play-circle-fill text-3xl text-[#043A53]"></i>
                <p className="text-sm font-bold">check our video</p>
              </div>
            </div>
            <div className="flex gap-2 hidden md:flex">
              <div className="flex items-center">
                <i className="ri-star-s-fill text-2xl text-green-500"></i>
                <p className="text-sm font-bold">Trustpilot</p>
              </div>
              <div className="flex text-[#FFD700]">
                <i className="ri-star-s-fill "></i>
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-s-fill"></i>
              </div>
              <div className="flex gap-1 text-[8px] text-gray-500 font-bold pt-1.5">
                <p>4950+</p>
                <p>5 Stars</p>
              </div>
            </div>
          </div>
          <div className="flex  gap-5 mt-10 md:mt-0">
            <img
              className="h-50 md:h-60  md:hidden "
              src="/hero 5.png"
              alt="hero"
            />
            <img className="h-50 md:h-60" src="/hero 6.png" alt="hero" />
          </div>
        </div>
      </div>
      <Companies />
      <div className="w-full md:h-screen bg-[#043A53] px-5 pt-10 md:px-20 md:pt-15 flex flex-col gap-5">
        <div className="flex md:flex-row flex-col md:gap-20 gap-5 md:items-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold max-w-[490px]">
            High-Level Sales{" "}
            <span className="text-[#f0b73f]">Terms & Professional</span>
          </h1>
          <p className="text-white text-sm max-w-[300px]">
            Circuit is flexible and affordable and offers you exceptional
            support to achieve your career goals. Circuit is a Global training
            provider based across the UK that specialises.
          </p>
        </div>
        <div className="overflow-hidden">
          <img
            className="w-full h-full rounded-lg"
            src="/video-bg.jpg"
            alt="hero"
          />
        </div>
      </div>
      <div className=" bg-[#FFFFFF] md:p-20 p-5 flex md:flex-row flex-col md:gap-25 gap-10 ">
        <div className="flex flex-col gap-5 w-full justify-center items-center md:items-start md:justify-start  ">
          <button className="bg-[#043A53] text-white px-4 py-2 rounded-3xl text-center flex-shrink-0 w-fit  ">
            Beneficial
          </button>
          <h1 className="md:text-5xl text-3xl font-bold md:flex-wrap flex-nowrap">
            Beneficial Elements
          </h1>
          <p className="text-sm text-gray-500 text-center md:text-left">
            An awesome & poweful tools for your business, increase business
            revenue
          </p>
        </div>
        <div className="flex  gap-5 md:flex-row flex-col">
          {BeneficialCards.map((card) => (
            <BeneficialCard key={card.title} card={card} />
          ))}
        </div>
      </div>
      <div className="w-full h-full bg-[#FFFFFF] flex md:flex-row flex-col justify-center items-center gap-10">
        <div className="h-[300px] w-full md:h-[500px] md:w-[50%] md:order-1 order-2 relative">
          <div className=" w-[120px] h-[120px] bg-[#043A53] border-2 border-white text-center rounded-full absolute top-3/4 md:left-[90%] left-[60%] transform -translate-y-1/2 z-10 flex flex-col justify-center items-center">
            <div className="w-5 h-5 bg-[#2a586d] rounded-full"></div>
            <h1 className="text-white text-2xl font-bold">#1</h1>
            <p className="text-white text-[10px]">Best Award</p>{" "}
            <p className="text-white text-[10px]">2023</p>
          </div>
          <img
            src="/Collabe.jpg"
            alt="collabe"
            className="w-[300px] md:w-full h-full object-cover rounded-tr-xl rounded-br-xl"
          />
        </div>

        <div className="flex flex-col gap-5 p-5 md:p-20 w-full md:w-[50%] order-1 md:order-2 justify-center text-center md:text-left md:items-start items-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Building Bridges Between{" "}
            <span className="text-[#92a7b0]">Companies And Customers</span>
          </h1>
          <p className="text-sm text-gray-500 md:max-w-[400px]">
            with evaluating in depth variety of data sets and including the
            speed of tech adaptation we can build birdges between any companies
            and their customers.
          </p>
          <button className="bg-[#043A53] text-white px-4 py-2 rounded-3xl text-center flex-shrink-0 w-fit  flex gap-2 items-center">
            View Reports
            <i class="ri-arrow-right-circle-fill"></i>
          </button>
        </div>
      </div>
      <div className="w-full h-full flex md:flex-row  justify-center items-center gap-8 md:gap-0  justify-evenly md:py-20 py-5 md:px-10 px-10 flex-wrap">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[#043A53] md:text-5xl text-3xl font-bold">
            $65 M
          </h1>
          <p className="text-sm text-gray-500">Generate Sales</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[#043A53] md:text-5xl text-3xl font-bold">58%</h1>
          <p className="text-sm text-gray-500">Grew revenue</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[#043A53] md:text-5xl text-3xl font-bold">12</h1>
          <p className="text-sm text-gray-500">Contries</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[#043A53] md:text-5xl text-3xl font-bold">
            16k+
          </h1>
          <p className="text-sm text-gray-500">Grew customers</p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center gap-10 md:p-20 p-10 text-center md:text-left">
        <div className="flex flex-col gap-5 md:w-[50%] w-full">
          <h1 className="text-3xl md:text-5xl font-bold">Meet our founder</h1>
          <p>
            “I think you're better off finding the money to hire someone than
            actually find a co-founder. The main reason? You probably won't find
            someone as passionate as you are about the organization you're
            building. And keep in mind, I have no clue who you are or what
            you're building so that's no judgment on you or the idea, just the
            reality I've observed over 20 years of startups.”
          </p>
          <div>
            <h4 className="text-2xl font-bold">Jason Hound</h4>
            <p className="text-sm text-gray-500">Founder of Trustco.</p>
          </div>
          <div>
            <button className="bg-[#043A53] text-white px-4 py-2 rounded-3xl text-center flex-shrink-0 w-fit  flex gap-2 items-center">
              See Team Behind Our Success
              <i class="ri-arrow-right-circle-fill"></i>
            </button>
          </div>
        </div>
        <div className="md:w-[50%] w-full relative">
          <img
            className="absolute top-6/7 md:left-[10%] left-[10%] transform -translate-y-1/2 rounded-full h-[70px] md:h-[200px] w-[70px] md:w-[200px] object-cover border-2 border-white shadow-lg z-1000"
            src="/founder-1.jpg"
            alt="founder"
          />
          <img
            className="absolute top-[20%] left-4/6 transform -translate-x-1/2 -z-10 md:h-[200px] h-[100px] md:w-[100px] w-[50px] "
            src="/Decoration.png"
            alt="founder"
          />
          <img src="/founder.png" alt="founder" />
        </div>
      </div>
      <div className="md:p-20 p-10 bg-[#f2f5f6] md:gap-10 gap-5 flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl text-center md:text-5xl font-bold">
            We Believe People We Trust
          </h1>
          <p className="flex items-center gap-2 md:block hidden">
            See All<i class="ri-arrow-right-line"></i>
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-5 order-2 md:order-2 flex-row overflow-hidden order-1 md:order-2">
            <div className="flex flex-col gap-5 bg-[#FFFFFF] p-5 rounded-lg min-w-60 h-80 md:h-50 ">
              <img
                className="w-[20px] h-[20px] object-cover"
                src="/Colon.png"
                alt="founder"
              />
              <p className="text-lg text-gray-500">
                I'm totally unconvinced that two people can find a person they
                haven't known previously, and become an effective co-founder
              </p>
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full h-[50px] w-[50px] object-cover"
                  src="/testimonial-1.png"
                  alt="founder"
                />
                <div>
                  <h4 className="text-sm font-bold">Andrew Wilkins</h4>
                  <p className="text-sm text-gray-500">
                    Managing Director, Yess Company
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 bg-[#FFFFFF] p-5 rounded-lg min-w-60 h-80 md:h-50 ">
              <img
                className="w-[20px] h-[20px] object-cover"
                src="/Colon.png"
                alt="founder"
              />
              <p className="text-lg text-gray-500">
                I'm totally unconvinced that two people can find a person they
                haven't known previously, and become an effective co-founder
              </p>
              <div className="flex items-center gap-2">
                <img
                  className="rounded-full h-[50px] w-[50px] object-cover"
                  src="/testimonial-1.png"
                  alt="founder"
                />
                <div>
                  <h4 className="text-sm font-bold">Andrew Wilkins</h4>
                  <p className="text-sm text-gray-500">
                    Managing Director, Yess Company
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-1 p-5 rounded-lg  justify-center items-center order-1 md:order-2 ">
            <img
              className="w-[20px] h-[10px] object-cover rounded-lg"
              src="/1.png"
              alt="founder"
            />
            <img
              className="w-[40px] h-[10px] object-cover rounded-lg"
              src="/Current.png"
              alt="founder"
            />
            <img
              className="w-[20px] h-[10px] object-cover rounded-lg"
              src="/1.png"
              alt="founder"
            />
            <img
              className="w-[20px] h-[10px] object-cover rounded-lg"
              src="/1.png"
              alt="founder"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="flex items-center gap-2 md:hidden block  ">
            See All<i class="ri-arrow-right-line"></i>
          </p>
        </div>
      </div>
      <div className="flex flex-col bg-[#FFFFFF] gap-10 md:p-20 p-0">
        <div className="flex justify-between items-center pt-10 px-10 md:p-0">
          <h1 className="text-2xl text-center md:text-5xl font-bold text-[#12141D]">
            Whats new on Trustco. ?
          </h1>
          <p className="flex items-center gap-2 md:block hidden">
            See All<i class="ri-arrow-right-line"></i>
          </p>
        </div>
        <div className="flex md:gap-17 gap-5 overflow-hidden overflow-x-auto">
          <div className="flex flex-col gap-2 border-1 border-gray-200 rounded-lg shrink-0 md:max-w-80 max-w-60 h-130 md:h-100">
            <div>
              <img
                className="md:w-80 w-130 md:h-50 h-60 rounded-t-lg object-cover"
                src="/w-1.jpg"
                alt="founder"
              />
            </div>
            <div className="flex flex-col gap-2 p-5">
              <div className="flex items-center gap-2">
                <h4 className="text-[12px] font-bold">23 Nov 2022,</h4>
                <p className="text-[12px] text-gray-500">by Amanda Hugh</p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold max-w-[250px]">
                  What Makes an Authentic Employee Profile?
                </h3>
                <p className="text-[14px] text-gray-500 flex-wrap">
                  I'm totally unconvinced that two people can find a person they
                  haven't known previously...
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold">Read Story</p>
                <i class="ri-arrow-right-line"></i>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-1 border-gray-200 rounded-lg shrink-0 md:max-w-80 max-w-60 h-130 md:h-100">
            <div>
              <img
                className="md:w-80 w-130 md:h-50 h-60 rounded-t-lg object-cover"
                src="/w-2.jpg"
                alt="founder"
              />
            </div>
            <div className="flex flex-col gap-2 p-5">
              <div className="flex items-center gap-2">
                <h4 className="text-[12px] font-bold">23 Nov 2022,</h4>
                <p className="text-[12px] text-gray-500">by Amanda Hugh</p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold max-w-[250px]">
                  What Makes an Authentic Employee Profile?
                </h3>
                <p className="text-[14px] text-gray-500 flex-wrap">
                  I'm totally unconvinced that two people can find a person they
                  haven't known previously...
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold">Read Story</p>
                <i class="ri-arrow-right-line"></i>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-1 border-gray-200 rounded-lg shrink-0 md:max-w-80 max-w-60 h-130 md:h-100">
            <div>
              <img
                className="md:w-80 w-130 md:h-50 h-60 rounded-t-lg object-cover"
                src="/w-3.jpg"
                alt="founder"
              />
            </div>
            <div className="flex flex-col gap-2 p-5">
              <div className="flex items-center gap-2">
                <h4 className="text-[12px] font-bold">23 Nov 2022,</h4>
                <p className="text-[12px] text-gray-500">by Amanda Hugh</p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold max-w-[250px]">
                  What Makes an Authentic Employee Profile?
                </h3>
                <p className="text-[14px] text-gray-500 flex-wrap">
                  I'm totally unconvinced that two people can find a person they
                  haven't known previously...
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold">Read Story</p>
                <i class="ri-arrow-right-line"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="flex items-center gap-2 md:hidden block  ">
            See All<i class="ri-arrow-right-line"></i>
          </p>
        </div>
      </div>
      <div className="flex flex-col bg-[#12141D] md:p-20 p-10 text-center md:text-left relative md:h-100 h-130 w-full overflow-hidden">
        <div className="text-white flex flex-col gap-5 justify-center items-center md:items-start md:justify-start">
          <h1 className="md:text-5xl text-2xl md:text-left text-center md:font-bold max-w-[550px]">
            Take Your Customer Service To The Next Level
          </h1>
          <button className="bg-[#f0b73f] text-white px-4 py-2 rounded-3xl text-center flex-shrink-0 w-fit  flex gap-2 items-center">
            Get 14 Days Free Trial
            <i class="ri-arrow-right-circle-fill"></i>
          </button>
          <p className="text-sm text-gray-500">No credit card required</p>
        </div>
        <div className="absolute md:top-0 top-1/2 md:right-0">
          <img
            src="/Girl-1.png"
            className="relative z-10 md:h-140 h-120 md:w-200 w-130"
          />
        </div>

        <div className="absolute bottom-0  md:right-55 right-15">
          <img
            src="/Yellow.png"
            className="relative z-0 md:h-60 h-30 md:w-25 w-15"
          />
        </div>
        <div className="absolute bottom-0 md:right-90 right-30">
          <img
            src="/Green.png"
            className="relative z-10 md:h-30 h-15 md:w-25 w-10"
          />
        </div>
        <div className="absolute bottom-0  md:right-150 right-70">
          <img
            src="/Black.png"
            className="relative z-10 md:h-20 h-10 md:w-20 w-10"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-15 gap-5 bg-[#FFFFFF] md:p-20 p-10">
        <div className="flex flex-col gap-5">
          <div className="flex justify-center items-center gap-2">
            <img src="./public/logo.png" alt="logo" />
            <img src="./public/Trustco..png" alt="logo" />
          </div>
          <div className="flex justify-center items-center gap-2 text-3xl text-gray-500">
            <i class="ri-facebook-circle-fill"></i>
            <i class="ri-instagram-fill"></i>
            <i class="ri-youtube-fill"></i>
          </div>
        </div>
        <div className="flex flex-col gap-2 max-w-[700px]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minus
            error, in quaerat mollitia voluptas asperiores nesciunt dolores
            quibusdam sed enim ut. Repudiandae esse reprehenderit quam, beatae
            officiis dolorem deleniti. Fugiat dolor eos eligendi odit eius.
          </p>
        </div>
        <div className="flex gap-15">
          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-bold">Home</h4>
            <p className="text-sm text-gray-500">Features</p>
            <p className="text-sm text-gray-500">Pricing</p>
            <p className="text-sm text-gray-500">Resources</p>
            <p className="text-sm text-gray-500">Solutions</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-bold">About Us</h4>
            <p className="text-sm text-gray-500">Company</p>
            <p className="text-sm text-gray-500">Contact</p>
            <p className="text-sm text-gray-500">Career</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center bg-[#f2f5f6] text-gray-500 p-5">
        <p className="order-3 md:order-1">2022-2023</p>
        <div className="flex gap-6 order-2 md:order-1">
          <p>terms of service </p>
          <p>Privacy Policy</p>
          <p>language</p>
        </div>
        <p className="order-2 md:order-3">English</p>
      </div>
    </>
  );
};

export default App;
