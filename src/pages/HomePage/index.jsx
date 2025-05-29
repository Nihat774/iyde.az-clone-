import { useEffect, useState } from "react";
import Aside from "../../components/HomeAside";
import Parfum from "../../components/Parfumes";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { LuArrowDownAZ, LuArrowDownZA } from "react-icons/lu";
import { FaChevronDown, FaRegStar } from "react-icons/fa";
import { FaArrowDown19, FaArrowDown91 } from "react-icons/fa6";

function HomePage() {
  const [data, setData] = useState();
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [checkedParfum, setCheckedParfum] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    // console.log(data);
  }, [data]);
  const dalaLength = data?.length;

// useEffect(()=>{
//   console.log(checkedParfum);
  
// },[checkedParfum])

  return (
    <section>
      <div className="flex flex-col justify-between 
       md:h-[22vh] py-3">
        <div className="text-[11px] font-semibold hidden md:flex gap-1">
          <Link
            to="/"
            className="flex flex-col gap-1 hover:text-red-500 duration-500"
          >
            <p>İydə parfumery</p>
            <hr className="w-full" />
          </Link>
          <RiArrowRightSLine className="text-[18px]" />
          <p className="text-[12px] text-neutral-400">Ətirlər</p>
        </div>

        <div className="flex md:flex-row flex-col   justify-between w-full relative">
          <div className="flex md:flex-row flex-col gap-1 items-center h-[12vh]  md:items-end">
            <p className="text-[20px] font-bold">Ətirlər</p>
            <p className="text-[14px] text-neutral-400">
              ({dalaLength} nəticə)
            </p>
          </div>

          {/* filter and sort buttons */}
          <div className="flex items-end justify-between">
            <div
              className="flex gap-6 items-center py-2 px-4 md:py-1 rounded-3xl border border-neutral-500 cursor-pointer md:w-fit w-[44vw]"
              onClick={() => setIsSortOpen(!isSortOpen)}
            >
              <div className="flex items-center gap-2 ">
                <LuArrowDownAZ className="text-neutral-400 text-lg md:text-sm" />
                <p className="text-[12px] font-medium md:font-semibold">A-dan Z-yə</p>
              </div>
              <FaChevronDown
                className={`${
                  isSortOpen ? "dropdown " : ""
                } text-neutral-500 duration-500 text-sm hidden md:block`}
              />
            </div>

            <div className="md:hidden w-[44vw]  flex gap-2 justify-center items-center py-2 px-4 rounded-3xl border border-neutral-500 cursor-pointer">
              {/* filter ikon */}
             
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 2.25C6 1.83579 5.66421 1.5 5.25 1.5C4.83579 1.5 4.5 1.83579 4.5 2.25V4.59451C3.20608 4.92755 2.25 6.10212 2.25 7.5C2.25 9.15685 3.59315 10.5 5.25 10.5C6.90685 10.5 8.25 9.15685 8.25 7.5C8.25 6.10212 7.29392 4.92755 6 4.59451V2.25ZM3.75 7.5C3.75 6.67157 4.42157 6 5.25 6C6.07843 6 6.75 6.67157 6.75 7.5C6.75 8.32843 6.07843 9 5.25 9C4.42157 9 3.75 8.32843 3.75 7.5ZM6 12C6 11.5858 5.66421 11.25 5.25 11.25C4.83579 11.25 4.5 11.5858 4.5 12V15.75C4.5 16.1642 4.83579 16.5 5.25 16.5C5.66421 16.5 6 16.1642 6 15.75V12ZM13.5 2.25C13.5 1.83579 13.1642 1.5 12.75 1.5C12.3358 1.5 12 1.83579 12 2.25V6C12 6.41421 12.3358 6.75 12.75 6.75C13.1642 6.75 13.5 6.41421 13.5 6V2.25ZM12.75 12C13.5784 12 14.25 11.3284 14.25 10.5C14.25 9.67157 13.5784 9 12.75 9C11.9216 9 11.25 9.67157 11.25 10.5C11.25 11.3284 11.9216 12 12.75 12ZM13.5 15.75V13.4055C14.7939 13.0725 15.75 11.8979 15.75 10.5C15.75 8.84315 14.4069 7.5 12.75 7.5C11.0931 7.5 9.75 8.84315 9.75 10.5C9.75 11.8979 10.7061 13.0725 12 13.4055V15.75C12 16.1642 12.3358 16.5 12.75 16.5C13.1642 16.5 13.5 16.1642 13.5 15.75Z"
                    fill="#22282F"
                  ></path>
                </svg>
              </div>
               <p>Filter</p>
            </div>
          </div>

          {isSortOpen ? (
            <div className="bg-white rounded-3xl py-5 px-5 z-50 w-fit flex flex-col gap-5 absolute left-0 top-[19vh] md:w-[12vw] md:left-[87.5%] md:top-21 h-fit">
              <Link
                to="/"
                className="hover:text-red-500 duration-300 flex gap-3 items-center group"
              >
                <LuArrowDownAZ className="text-neutral-400 text-sm group-hover:text-red-500 duration-300" />
                <p className="text-[12px] font-semibold">A-dan Z-yə</p>
              </Link>

              <Link
                to="/"
                className="hover:text-red-500 duration-300 flex gap-3 items-center group"
              >
                <LuArrowDownZA className="text-neutral-400 text-sm group-hover:text-red-500 duration-300" />
                <p className="text-[12px] font-semibold">A-dan Z-yə</p>
              </Link>

              <Link
                to="/"
                className="hover:text-red-500 duration-300 flex gap-2 items-center group"
              >
                <FaRegStar className="text-neutral-400  group-hover:text-red-500 duration-300 text-lg" />
                <p className="text-[12px] font-semibold w-20">
                  Populyarlığa görə
                </p>
              </Link>

              <Link
                to="/"
                className="flex gap-2 items-center group hover:text-red-500 duration-300"
              >
                <FaArrowDown19 className="text-neutral-400 text-sm group-hover:text-red-500 duration-300" />
                <p className="text-[12px] font-semibold">Ucuzdan-bahaya</p>
              </Link>

              <Link
                to="/"
                className="hover:text-red-500 duration-300 flex gap-2 items-center group"
              >
                <FaArrowDown91 className="text-neutral-400 text-sm group-hover:text-red-500 duration-300" />
                <p className="text-[12px] font-semibold">Bahadan-ucuza</p>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex">
        <Aside setCheckedParfum = {setCheckedParfum} checkedParfum = {checkedParfum}/>
        <Parfum />
      </div>
    </section>
  );
}

export default HomePage;
