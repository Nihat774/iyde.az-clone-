import { Link } from "react-router-dom";
import { aboutLinks, footer, infoLinks } from "../../constants/navLinks";
import { MdOutlineLocalPhone } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { IoLogoApple, IoMailOutline, IoSendSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import {
  PiYoutubeLogo,
} from "react-icons/pi";
import { BsInstagram } from "react-icons/bs";

import { LiaFacebook } from "react-icons/lia";

function Footer() {
  const contactLinks = [
    {
      id: 1,
      icon: <MdOutlineLocalPhone />,
      text: "+994 50 820 55 55",
    },
    {
      id: 2,
      icon: <FaWhatsapp />,
      text: "+994 50 820 55 55",
    },
    {
      id: 3,
      icon: <IoMailOutline />,
      text: "info@iyde.az",
    },
    {
      id: 4,
      icon: <GoClock />,
      text: "09:00-23:00",
    },
  ];
  return (
    <footer className="bg-neutral-900  h-fit text-white flex py-10 px-5 flex-col md:p-12 justify-center mx-[-16px] md:mx-[-45px]">
      <div className="flex md:flex-row flex-col justify-between gap-10 p-4 md:gap-0  md:w-[95%]">
        <div className="flex justify-between md:w-[30%]">
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-lg">Ətirlər</p>
            <div className="flex flex-col gap-2">
              {footer.parfums.map((item, index) => {
                return (
                  <Link to={item.path} key={index} className=" group">
                    <p className="group-hover:text-red-500 duration-300 text-neutral-300 text-[16px] md:text-sm">
                      {item.text}
                    </p>
                    <hr className="group-hover:text-red-500 duration-300 w-[25vw] md:w-full text-neutral-900 group-hover:block" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">Özəl kolleksiya</p>
            <div className="flex flex-col gap-2">
              {footer.collections.map((item, index) => {
                return (
                  <Link to={item.path} key={index} className="group ">
                    <p className="text-neutral-300 text-[16px] md:text-sm group-hover:text-red-500 duration-300">
                      {item.text}
                    </p>
                    <hr className="w-[20vw] md:w-[5vw] text-neutral-900 group-hover:block group-hover:text-red-500 duration-300" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-between md:w-[30%]">
          <div className="flex flex-col gap-3">
            <p className="text-[16px] font-bold md:w-full w-[28vw]">İYDƏ PARFUMERY</p>
            <div className="flex flex-col gap-2">
              {aboutLinks.map((item) => {
                return (
                  <Link to={item.path} className="group ">
                    <p className="text-neutral-300 text-[16px] md:text-sm group-hover:text-red-500 duration-300">
                      {item.text}
                    </p>
                    <hr className="w-[30vw] md:w-[9vw] text-neutral-900 group-hover:block group-hover:text-red-500 duration-300" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xl font-semibold">Dəstək</p>
            <div className="flex flex-col gap-2">
              {infoLinks.map((item) => {
                return (
                  <Link to={item.path} key={item.id} className="group ">
                    <p className="text-neutral-300 text-[16px] md:text-sm group-hover:text-red-500 duration-300">
                      {item.text}
                    </p>
                    <hr className="w-[30vw] md:w-[7vw] text-neutral-900 group-hover:block group-hover:text-red-500 duration-300" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xl font-semibold">Əlaqə saxlamaq</p>
          <div className="flex flex-col gap-2">
            {contactLinks.map((item) => {
              return (
                <div key={item.id} className="flex items-center gap-3 group">
                  <p>{item.icon}</p>
                  <div className="flex flex-col gap-1 w-fit">
                    <p className="font-bold text-lg group-hover:text-red-500 duration-300">
                      {item.text}
                    </p>
                    <hr className="w-[35vw] md:w-[10vw] text-neutral-900 group-hover:block group-hover:text-red-500 duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col md:gap-0 gap-5 justify-between px-4">
        <div className="relative flex flex-col gap-5 mt-4">
          <h4 className="text-lg font-semibold">Bizə abunə olun</h4>
          <input
            type="email"
            className="rounded-3xl border border-white py-3 px-13 w-full md:w-[28vw]"
            placeholder="E-mail"
          />
          <IoMailOutline className="absolute left-6 top-16 text-xl" />
          <IoSendSharp className="absolute right-6 top-16 text-xl cursor-pointer" />
        </div>

        <div className="flex md:justify-start justify-center items-end gap-5 text-[50px]">
          <Link to="/">
            <LiaFacebook className="hover:text-red-600 text-white  duration-300 " />
          </Link>

          <Link>
            <BsInstagram className="hover:text-red-600 text-white text-[40px] mb-1 duration-300" />
          </Link>
          <Link>
            <PiYoutubeLogo className="hover:text-red-600 text-white text-[50px] font-semibold duration-300" />
          </Link>
          <Link to="/">
            <p className="hover:text-red-600 text-white font-semibold mb-1 duration-300">
              <svg
                width="40"
                height="40"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="1">
                  <path
                    d="M9.5 0V11C9.5 12.933 7.933 14.5 6 14.5C4.067 14.5 2.5 12.933 2.5 11C2.5 9.067 4.067 7.5 6 7.5M14 5.5C11.5147 5.5 9.5 3.48528 9.5 1"
                    stroke="#fff"
                  ></path>
                </g>
              </svg>
            </p>
          </Link>
        </div>

        <div className="flex md:justify-start justify-center items-end gap-5">
          <Link
            to=""
            className="flex justify-center items-center gap-2 md:gap-3 rounded-4xl bg-white py-3 px-3 md:p-4 w-[45vw] md:w-[15vw] h-fit"
          >
            <IoLogoApple className="text-2xl md:text-3xl text-black" />
            <p className="text-[16px] md:text-xl font-semibold text-black">
              App Store
            </p>
          </Link>

          <Link
            to=""
            className="flex justify-center items-center gap-2 md:gap-3 rounded-4xl bg-white py-3 px-3 md:p-4 w-[45vw] md:w-[15vw] h-fit"
          >
            <img
              src="/playstore-icon.svg"
              alt=""
              className="size-[25px] md:size-[30px] text-black"
            />
            <p className="text-[16px] md:text-xl font-semibold text-black">
              Play store
            </p>
          </Link>
        </div>
      </div>

      <div className="flex md:flex-row flex-col items-center text-[12px] gap-4 mt-9 px-4">
        <div className="flex  gap-4">
          <p>&copy; İYDE Perfumery</p>
          <p className="text-neutral-500 font-semibold">
           2025 Bütün hüquqlar qorunur
          </p>
          <p className="w-[1px] h-3 bg-neutral-500 hidden md:block"></p>
        </div>
        <div className="flex gap-4">
          <p className="font-semibold text-neutral-500">Sayt yaradılmışdır</p>
          <p className="font-semibold">One studio</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
