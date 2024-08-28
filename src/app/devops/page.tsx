

"use client";
import Link from "next/link";
// import Feedback from "@/components/Feedback";

const DevopsPage = () => {
   return (
      <div className="p-10">
         <h1 className="text-4xl font-bold mb-4">Devops</h1>
         <p className="text-lg mb-6">
            Welcome to the DevopsPage. Learn about best practices for Devops.
         </p>
         <Link href="/" className="text-blue-500 underline">Back to Home</Link>
            {/* <Feedback /> */}
      </div>
   );
};

export default DevopsPage;
