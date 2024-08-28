// app/leadership/page.tsx

"use client";
import Link from "next/link";

const LeadershipPage = () => {
   return (
      <div className="p-10">
         <h1 className="text-4xl font-bold mb-4">Leadership</h1>
         <p className="text-lg mb-6">
            Welcome to the Leadership page. Explore insights and strategies for effective leadership in tech.
         </p>
         <Link href="/" className="text-blue-500 underline">Back to Home</Link>
      </div>
   );
};

export default LeadershipPage;
