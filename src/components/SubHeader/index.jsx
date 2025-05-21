import {
  PiFacebookLogoLight,
  PiInstagramLogoThin,
  PiYoutubeLogoThin,
} from "react-icons/pi";

import { Link } from "react-router-dom";

function SubHeader() {
  return (
    <>
      <header className="md:block hidden py-3">
        <div className="flex justify-between">
          <div className="flex gap-3 text-[18px]">
            <Link to="/">
              <PiFacebookLogoLight className="hover:text-red-600 text-neutral-500" />
            </Link>

            <Link>
              <PiInstagramLogoThin className="hover:text-red-600 text-neutral-500" />
            </Link>
            <Link>
              <PiYoutubeLogoThin className="hover:text-red-600 text-neutral-500" />
            </Link>
            <Link to="/">
              <p className="hover:text-red-600 text-neutral-500">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.7">
                    <path
                      d="M9.5 0V11C9.5 12.933 7.933 14.5 6 14.5C4.067 14.5 2.5 12.933 2.5 11C2.5 9.067 4.067 7.5 6 7.5M14 5.5C11.5147 5.5 9.5 3.48528 9.5 1"
                      stroke="#121212"
                    ></path>
                  </g>
                </svg>
              </p>
            </Link>
          </div>

          <div className="flex gap-3 items-center text-neutral-600 font-semibold text-[12px]">
            <Link to="/" className="hover:text-red-600 duration-500">
              en
            </Link>
            <p className="h-4 w-[1px] bg-neutral-300"></p>
            <Link to="/" className="hover:text-red-600 duration-500">
              ru
            </Link>
          </div>
        </div>
      </header>
      <hr className="md:block hidden -mx-[42px] text-neutral-300 mt-1" />
    </>
  );
}

export default SubHeader;
