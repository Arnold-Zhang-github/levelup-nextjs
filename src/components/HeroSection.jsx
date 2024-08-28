"use client";

import Typing from "react-typing-effect";

const HeroSection = () => {
   return (
      <div
         name="HeroSection"
         className="flex flex-col items-center justify-evenly w-screen mx-auto p-5"
      >
         <div className="flex flex-col pb-20">
            <div className="h-36 mt-10">
               <h1 className=" text-2xl sm:text-4xl lg:text-5xl text-center tracking-wide bg-gradient-to-r from-purple-500 via-blue-500 to-orange-500 text-transparent bg-clip-text">
                  <Typing
                     text={["Your Future is loading..."]}
                     speed={100}
                     eraseSpeed={50}
                     typingDelay={500}
                     eraseDelay={1000}
                     cursorRenderer={(cursor) => <span>{cursor}</span>}
                     displayTextRenderer={(text, i) => {
                        return (
                           <span>
                              {text.split("/").map((char, i) => {
                                 const key = `${i}`;
                                 return (
                                    <span
                                       key={key}
                                       style={{ fontSize: "2em", display: "inline-block" }}
                                    >
                                       {char}
                                    </span>
                                 );
                              })}
                           </span>
                        );
                     }}
                  />
               </h1>
            </div>

            <div className="text-center flex justify-center items-center mt-20">
               <div className="text-6xl sm:text-10xl lg:text-12xl bg-gradient-to-r from-purple-500 via-blue-500 to-orange-500 text-transparent bg-clip-text">
                  LEVEL UP
               </div>

               <div className="">
                  <img
                     src="/assets/rocket.png"
                     alt="Rocket"
                     className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 md:ml-10 animate-move-up-down"
                  />
               </div>
            </div>
         </div>

         <div className="h-20 text-lg text-left text-blue-400 max-w-4xl p-5">
            Introduction, LEVEL UP is a huge IT industry conference in Adelaide
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
            dolores illo incidunt mollitia.
         </div>
      </div>
   );
};

export default HeroSection;
