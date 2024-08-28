// app/design/page.tsx

"use client";
import Link from "next/link";

const DesignPage = () => {
   return (
      <div className="p-10">
         <h1 className="text-4xl font-bold mb-4">Design</h1>
         <p className="text-lg mb-6">
            Welcome to the Design page. Here you will find resources and information about design principles and practices.
         </p>
         <Link href="/" className="text-blue-500 underline">Back to Home</Link>
      </div>
   );
};

export default DesignPage;
