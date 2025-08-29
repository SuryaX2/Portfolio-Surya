import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h2 className="overflow-y-hidden cursor-pointer text-4xl font-light inline-block">
          Rounak
        </h2>
        <span className="inline-block w-2 h-2 bg-red-500 rounded-full ml-1"></span>
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          ></Image>
          polleyrounak43@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Rounak Polley. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/ROUNAKPOLLEY03">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://x.com/_polleyRounak">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
