"use client";
import Link from "next/link";
import { features } from "../constants";

const colors = [
   "text-purple-500",
   "text-green-500",
   "text-blue-500",
   "text-yellow-500",
   "text-orange-500",
];
const changeColors = [
   "from-purple-500",
   "from-green-500",
   "from-blue-500",
   "from-yellow-500",
   "from-orange-500",
];
const ringColors = [
   "ring-purple-500",
   "ring-green-500",
   "ring-blue-500",
   "ring-yellow-500",
   "ring-orange-500",
];

const sessionLinks = [
   "/design",
   "/build",
   "/devops",
   "/security",
   "/leadership",
];

const Sessions = () => {
   return (
      <div
         name="Sessions"
         className="mt-28 w-screen flex flex-wrap justify-center pt-20 border-b border-neutral-800"
      >
         <div className="text-center pt-5">
            <span className="bg-neutral-900 bg-gradient-to-r from-purple-500 via-blue-500 to-orange-500 text-transparent bg-clip-text rounded-full h-6 text-3xl sm:text-5xl lg:text-6xl font-medium px-2 py-1 uppercase">
               Sessions
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-15 tracking-wide">
               <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-orange-500 text-transparent bg-clip-text">
                  Five sessions for you
               </span>
            </h2>
         </div>

         <div className="flex flex-wrap mt-10 lg:mt-20 p-10">
            {features.map((feature, index) => {
               return (
                  <div key={index} className="w-full sm:w-1/2 lg:w-1/5">
                     <Link key={index} href={sessionLinks[index]}>
                        <div
                           className={`flex rounded-md border border-black transition-shadow duration-300 hover:ring-2 ${ringColors[index]}`}
                        >
                           <div
                              className={`text-lg flex mt-1 mx-6 h-10 w-10 bg-neutral-900 justify-center items-center rounded-full ${colors[index]}`}
                           >
                              {feature.icon}
                           </div>
                           <div className="">
                              <h5
                                 className={`mt-2 mb-6 text-xl bg-gradient-to-r bg-clip-text text-transparent ${changeColors[index]} to-white`}
                              >
                                 {feature.text}
                              </h5>
                              <p className="text-md p-2 mb-20 text-neutral-500">
                                 {feature.description}
                              </p>
                           </div>
                        </div>{" "}
                     </Link>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default Sessions;
