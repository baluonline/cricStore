import { APP_NAME } from "@/lib/constants";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t py-4 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </p>
        <p>
          Follow us on{" "}
          <a
            href="https://twitter.com"
            className="text-blue-400 hover:underline"
          >
            Twitter
          </a>{" "}
          and{" "}
          <a
            href="https://github.com"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
};
export default Footer;
