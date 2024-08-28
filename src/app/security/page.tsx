// app/security/page.tsx

"use client";
import Link from "next/link";

const SecurityPage = () => {
   return (
      <div className="p-10">
         <h1 className="text-4xl font-bold mb-4">Security</h1>
         <p className="text-lg mb-6">
            Welcome to the Security page. Learn about best practices for securing applications and data.
         </p>
         <Link href="/" className="text-blue-500 underline">Back to Home</Link>
      </div>
   );
};

export default SecurityPage;
