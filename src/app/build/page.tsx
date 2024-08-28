// app/build/page.tsx

"use client";
import Link from "next/link";

const BuildPage = () => {
   return (
      <div className="p-10">
         <h1 className="text-4xl font-bold mb-4">Build</h1>
         <p className="text-lg mb-6">
            Welcome to the Build page. Explore topics related to building robust and scalable applications.
         </p>
         <Link href="/" className="text-blue-500 underline">Back to Home</Link>
      </div>
   );
};

export default BuildPage;
