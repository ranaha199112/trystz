import React from "react";
import { FaTwitter } from "react-icons/fa";

const links = [
  {
    name: "Privacy",
  },
  {
    name: "Terms & Conditions",
  },
  {
    name: "Support",
  },
  {
    name: "Blog",
  },
  {
    name: "Social",
  },
  {
    name: "Contact",
  },
];

function Footer() {
  return (
    <div className="bg-custom-gray3">
      <div className="px-5 lg:px-[15px] pt-[58px] pb-[30px]">
        <div className="text-white text-sm">
          <div className="flex gap-1">
            <span>© 2022</span>
            <div className="cursor-pointer">
              <p>Assembly Four</p>
              <div className="h-[1px] bg-custom-red2"></div>
            </div>
          </div>
          {links.map((link, i) => (
            <div key={i} className="flex">
              <div className="">
                <p className="cursor-pointer">{link.name}</p>
                <div className="h-[1px] bg-custom-red2"></div>
              </div>
            </div>
          ))}
        </div>

        <div className=" mt-[32px] mb-[100px] lg:mb-0 flex justify-between items-center">
          <p className="hidden lg:block text-[10px] text-custom-gray4">
            Generated at 2022-11-03T10:31:07+00:00 rev 33dc28f425
          </p>

          <div className="p-[7px] rounded-full  bg-transparent self-end text-slate-500 text-lg shadow-sm shadow-white">
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="h-[5px] bg-custom-red"></div>
    </div>
  );
}

export default Footer;
