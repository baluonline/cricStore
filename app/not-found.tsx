"use client";

import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.svg"
        width={48}
        height={48}
        alt={`${APP_NAME} logo`}
        priority={true}
      />
      <div className="p-6 w-1/3 rounded-lg shadow-md text-center"></div>
      <h1 className="text-2xl font-bold mt-4">Page Not Found</h1>
      <p className="text-gray-600 mt-2">
        The page you are looking for does not exist.
      </p>
      <Button variant="outline" asChild className="mt-4 ml-2">
        <Link href="/" className="text-black">
          Go Back to Home
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
