import React, { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbCurrencyManat } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decrement, increment, Remove } from "../../store/parfumSlice";

function Basket() {
  const basketData = useSelector((state) => state.counter.value);
  const dataCount = useSelector((state) => state.counter.count);
  const [isClickedRadio, setIsClickedRadio] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(basketData);
  }, [basketData]);
  return (
    <>
      <hr className="w-full h-[3px] text-neutral-300 mt-3" />
      <main className="min-h-[80vh] md:px-[120px] py-8">
        {basketData.length != 0 ? (
          <>
            <section className="">
              <div className="flex flex-col justify-center  items-center mb-10">
                <h2 className="playfair font-semibold text-[36px]">SƏBƏT</h2>
                <h5 className="text-neutral-400 text-[22px]">
                  ({basketData.length} title.poduct)
                </h5>
              </div>

              <div className="flex md:flex-row flex-col-reverse gap-8">
                {/* form */}
                <div className="w-full md:w-[45%] mb-10">
                  <form className="flex flex-col gap-4">
                    {/* 1 -Şəxsi məlumatlar */}
                    <div className="flex gap-5 items-center font-semibold">
                      <p className="py-2 px-4 text-red-500 border border-red-500 rounded-full">
                        1
                      </p>
                      <p className="text-xl">Şəxsi məlumatlar</p>
                    </div>

                    <div className="flex flex-col gap-4">
                      <input
                        type="text"
                        className="w-full bg-zinc-200 rounded-2xl py-4 px-8 font-semibold outline-0"
                        placeholder="Ad"
                      />
                      <input
                        type="text"
                        className="w-full bg-neutral-200 rounded-2xl py-4 px-8 font-semibold outline-0"
                        placeholder="Telefon"
                      />
                    </div>

                    {/* 2-çatdırılma */}
                    <div className="flex gap-5 items-center font-semibold">
                      <p className="py-2 px-4 text-red-500 border border-red-500 rounded-full">
                        2
                      </p>
                      <p className="text-xl">Çatdırılma</p>
                    </div>

                    <div className="flex flex-col gap-5 ">
                      <div className="relative">
                        <select
                          name=""
                          id=""
                          className="w-full font-semibold text-neutral-500 bg-zinc-200 rounded-2xl py-4 px-5 outline-0"
                        >
                          <option value="">Bakı</option>
                          <option value="">Sumqayıt</option>
                        </select>
                        <RiArrowDropDownLine className=" absolute  right-3 top-[12px] text-4xl pointer-events-none" />
                      </div>

                      <input
                        type="text"
                        className="w-full bg-zinc-200 rounded-2xl py-4 px-8 outline-0 font-semibold"
                        placeholder="Ünvan"
                      />

                      <textarea
                        name=""
                        id=""
                        placeholder="Qeydlər"
                        className="w-full rounded-2xl outline-0 bg-zinc-200 h-[23vh] resize-none font-semibold px-8 py-5"
                      ></textarea>
                    </div>

                    {/* 3 - Ödəniş növü */}
                    <div className="flex flex-col gap-5  font-semibold">
                      <div className="flex gap-2">
                        <p className="py-2 px-4 text-red-500 border border-red-500 rounded-full">
                          3
                        </p>
                        <div className="text-xl flex  items-center gap-2">
                          <p>Ödəniş növü</p>
                          <p className="text-sm text-neutral-400">
                            (Çatdırılma: Pulsuz)
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center w-full">
                        <div
                          className="flex items-center gap-2 cursor-pointer"
                          onClick={() => setIsClickedRadio(!isClickedRadio)}
                        >
                          <div className="border flex items-center justify-center border-neutral-300  rounded-full size-[27px]">
                            {isClickedRadio ? (
                              <p className="size-[14px] p-1 bg-red-500 rounded-full"></p>
                            ) : null}
                          </div>
                          <p>nağd ödəniş</p>
                        </div>

                        <div
                          className="flex items-center gap-2 cursor-pointer"
                          onClick={() => setIsClickedRadio(!isClickedRadio)}
                        >
                          <div className="border flex items-center justify-center border-neutral-300  rounded-full size-[27px]">
                            {isClickedRadio ? (
                              <p className="size-[14px] p-1 bg-red-500 rounded-full"></p>
                            ) : null}
                          </div>
                          <p>onlayn ödəniş</p>
                        </div>
                      </div>

                      <Link to="/login" className="flex flex-col gap-1 w-fit">
                        <p>Daxil ol</p>
                        <hr className="w-full text-black" />
                      </Link>
                      <Link
                        to=""
                        className="flex justify-center md:hidden py-3 w-full  rounded-4xl hover:bg-green-700 duration-500 bg-[#2FB12F] text-white text-lg font-semibold"
                      >
                        Sifariş et
                      </Link>
                    </div>
                  </form>
                </div>

                {/* basket data */}
                <div className="flex flex-col w-full md:w-[60%] ">
                  <div className="min-h-fit overflow-y-scroll overflow-x-hidden">
                    {basketData.map((item) => {
                      return (
                        <React.Fragment key={item.id}>
                          <div className="flex gap-3 justify-between">
                            <img
                              className=" h-[120px] w-[150px] md:h-[20vh] md:w-[10vw] rounded-xl"
                              src={item.imgUrl}
                              alt={item.name}
                            />
                            <div className="flex flex-col justify-between">
                              <h3 className="text-2xl font-semibold">
                                {item.name}
                              </h3>

                              <div className="flex justify-end gap-3 items-center">
                                <div className="flex items-center ">
                                  {[...Array(item.star)].map((_, i) => (
                                    <IoStarSharp
                                      key={i}
                                      className="text-yellow-400 text-xl"
                                    />
                                  ))}
                                  {[...Array(5 - item.star)].map((_, i) => (
                                    <IoStarSharp
                                      key={i}
                                      className="text-neutral-500 text-xl"
                                    />
                                  ))}
                                </div>
                                <p className="font-semibold md:hidden flex">
                                  {item.size}ml
                                </p>
                              </div>

                              <div className="flex items-center justify-between w-[43vw] md:w-[24vw] ">
                                <div className="flex justify-between items-center w-fit md:w-[50%]">
                                  <div className="flex justify-between items-center  w-[20vw] md:w-[7vw] rounded-4xl px-3 py-1 border">
                                    <button
                                      disabled={dataCount === 1}
                                      onClick={() => dispatch(decrement(item))}
                                      className={`cursor-pointer ${
                                        dataCount === 1
                                          ? "text-neutral-600"
                                          : ""
                                      } text-xl`}
                                    >
                                      -
                                    </button>
                                    <p>{dataCount}</p>
                                    <button
                                      onClick={() => dispatch(increment(item))}
                                      className="cursor-pointer text-xl"
                                    >
                                      +
                                    </button>
                                  </div>

                                  <hr className="h-5 w-[1px] bg-neutral-300" />
                                  <p className="font-semibold hidden md:flex">
                                    {item.size}ml
                                  </p>
                                </div>
                                <div className="flex gap-1 items-center">
                                  <p className="font-semibold text-2xl">
                                    {item.maxPrice}
                                  </p>
                                  <TbCurrencyManat className="text-3xl" />
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={() => dispatch(Remove(item.id))}
                              className="text-neutral-400 flex gap-1 items-center h-fit cursor-pointer"
                            >
                              <IoIosClose className="text-neutral-400 text-xl" />
                              <p>Sil</p>
                            </button>
                          </div>
                          <hr className="w-full h-[2px] text-neutral-300 my-10" />
                        </React.Fragment>
                      );
                    })}
                  </div>
                  {/* Yekun */}
                  <div className="flex items-center justify-around border border-neutral-200 rounded-2xl bg-white p-5">
                    <div>
                      <div className="flex gap-8">
                        <p className="text-neutral-500">Məbləğ</p>
                        <div className="font-semibold flex items-center gap-1">
                          <p>40</p>
                          <TbCurrencyManat />
                        </div>
                      </div>
                      <div className="flex gap-8">
                        <p className="text-neutral-500">Çatdırılma</p>
                        <div className="font-semibold flex items-center gap-1">
                          <p>0</p>
                          <TbCurrencyManat />
                        </div>
                      </div>
                    </div>

                    <p className="h-12 w-[1px] bg-neutral-200" />

                    <div className="flex gap-4">
                      <h3 className="text-lg text-neutral-500 font-semibold">
                        Yekun məbləğ
                      </h3>
                      <div className="flex items-center gap-1 font-semibold text-2xl">
                        <p>40</p>
                        <TbCurrencyManat />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-5">
                    <Link to="" className="underline text-neutral-500">
                      Alışverişə qayıt
                    </Link>
                    <Link
                      to=""
                      className="md:flex hidden py-4 w-[13vw] text-center rounded-4xl hover:bg-green-700 duration-500 bg-green-600 text-white text-xl font-semibold"
                    >
                      Sifariş et
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <section className="flex flex-col gap-8 items-center justify-center w-full min-h-[67vh] md:min-h-[80vh]">
            <div>
              <svg
                width={`150`}
                height={`150`}
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-1"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M31.6523 41.2077H15.6523C9.77507 41.2077 5.2663 39.0849 6.547 30.5411L8.03823 18.9621C8.8277 14.699 11.547 13.0674 13.933 13.0674H33.4417C35.8628 13.0674 38.4242 14.8218 39.3365 18.9621L40.8277 30.5411C41.9154 38.12 37.5295 41.2077 31.6523 41.2077Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31.9149 12.647C31.9149 8.07368 28.2075 4.36629 23.6342 4.36629V4.36629C21.4319 4.35695 19.3166 5.22526 17.7561 6.77921C16.1956 8.33315 15.3183 10.4447 15.3184 12.647H15.3184"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.3195 21.2786H29.2318"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.1437 21.2786H18.056"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-neutral-500 text-xl">Səbət boşdur</p>
            <Link
              to="/"
              className="rounded-4xl bg-black text-white font-semibold text-xl hover:bg-red-600 duration-500 py-4 w-[75%] md:w-[19vw] text-center"
            >
              Alış-verişə geri dön
            </Link>
          </section>
        )}
      </main>
    </>
  );
}

export default Basket;
