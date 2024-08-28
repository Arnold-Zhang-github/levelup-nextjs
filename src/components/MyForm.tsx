"use client";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { use } from "react";

export const MyForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   

   const onSubmit = async (data: any) => {
      try {
         const response = await axios.post(
            "http://localhost:3000/api/feedback",
            data
         );

         if (response.status === 200 || response.status === 201) {
            alert("Feedback submitted successfully!");
         } else {
            alert("Failed to submit feedback.");
         }
      } catch (error) {
         if (axios.isAxiosError(error)) {
        
            const axiosError = error as AxiosError;
            if (axiosError.response) {
             
               if (axiosError.response.status === 400) {
                  alert(
                     "You already submitted with this email address or name, please try again."
                  );
               } else {
                  alert(
                     `Failed to submit feedback: ${axiosError.response.status}`
                  );
               }
            } else if (axiosError.request) {
               
               alert("No response received from the server");
            } else {
               
               alert(`Error: ${axiosError.message}`);
            }
         } else {
           
            alert("An error occurred while submitting feedback.");
         }
      }
   };

   return (
      <div className="flex justify-center items-center bg-black mt-10">
         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">
               Feedback Form
            </h1>

            <form className="space-y-6" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
               <div>
                  <label
                     htmlFor="name"
                     className="block text-sm font-medium text-gray-700"
                  >
                     Name
                  </label>
                  <input
                     type="text"
                     id="name"
                     {...register("name", { required: true })}
                     className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white text-black"
                  />
                  {errors.name && (
                     <span className="text-red-500 text-sm">
                        Name is required
                     </span>
                  )}
               </div>

               <div>
                  <label
                     htmlFor="email"
                     className="block text-sm font-medium text-gray-700"
                  >
                     E-mail
                  </label>
                  <input
                     type="email"
                     id="email"
                     {...register("email", { required: true })}
                     className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white text-black "
                  />
                  {errors.email && (
                     <span className="text-red-500 text-sm">
                        Email is required
                     </span>
                  )}
               </div>

               <div>
                  <label
                     htmlFor="feedback"
                     className="block text-sm font-medium text-gray-700"
                  >
                     Feedback
                  </label>
                  <textarea
                     id="feedback"
                     rows={4}
                     {...register("feedback", { required: true })}
                     className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white text-black"
                  />
                  {errors.feedback && (
                     <span className="text-red-500 text-sm">
                        Feedback is required
                     </span>
                  )}
               </div>

               <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
               >
                  Submit
               </button>
            </form>
         </div>
      </div>
   );
};


