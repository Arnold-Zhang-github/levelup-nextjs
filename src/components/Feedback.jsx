"use client";
import { Feedbacks } from "../constants";

const Feedback = () => {
   return (
      <div name="Feedback" className="pt-20  tracking-wide flex flex-wrap justify-center overflow">
         <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 from-purple-500 via-blue-500 to-orange-500 bg-gradient-to-r bg-clip-text text-transparent">Our Feedback</h2>
         <div className="flex flex-wrap justify-center">
            {Feedbacks.map((testimonial, index) => (
               <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                  <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
                     <p>{testimonial.text}</p>
                     <div className="flex mt-8 items-start">
                        <img className="w-12 h-12 mr-6 rounded-full border border-neutral-300" src={testimonial.image} alt="" />
                        <div>
                           <h6>{testimonial.user}</h6>
                           <span className="text-sm font-normal italic text-neutral-600">{testimonial.company}</span>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Feedback;
