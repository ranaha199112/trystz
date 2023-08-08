import Image from "next/image";
import Logo from "../public/images/logo.png";
import { FaBars } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <div className="sticky top-0 w-full bg-custom-gray3">
      <div className=" px-5 lg:px-[30px] py-[10px] lg:py-5 flex justify-between lg:justify-start lg:gap-[100px] items-center text-white font-OpenSans">
        <div className="w-[120px] h-auto">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="mt-[6px] mr-3 lg:mr-0 flex gap-[50px] text-[21px]">
          <div className="flex items-center">
            <span className="mr-3 text-[28px]">
              {/* <FaBars /> */}
              <GiHamburgerMenu />
            </span>
            Menu
          </div>
          <div className="hidden lg:block">Sign up</div>
          <div className="hidden lg:block">Log in</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
