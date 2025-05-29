import { useEffect, useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AddType, Remove } from "../../store/parfumSlice";
import Loading from "../Loading";
import { SuccessAlert } from "../SweetAlert";
import { Link } from "react-router-dom";
function Parfum() {
  const [data, setData] = useState();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  //   console.log(data);
  const dispatch = useDispatch();

  const handleSubmit = (item) => {
    const basketedData = basketData.find((basket) => basket.id == item.id);
    if (basketedData) {
      dispatch(Remove(item.id));
      SuccessAlert("Məhsul səbətdən silindi");
    } else {
      dispatch(AddType(item));
      SuccessAlert("Məhsul səbətə əlavə olundu");
    }
  };
  const basketData = useSelector((state) => state.counter.value);

  useEffect(() => {
    console.log(basketData);
  }, [basketData]);

  return (
    <>
      {data ? (
        <div className=" w-full  grid grid-cols-2 xl:grid-cols-3 gap-1 place-items-center">
          {data?.map((item) => {
            const basketedData = basketData.find(
              (basket) => basket.id == item.id
            );
            const raiting = item?.star;
            const emptyRaiting = 5 - raiting;
            return (
              <div className="flex flex-col gap-4 py-6" key={item.id}>
                <Link
                  to={`/${item.slug}`}
                  className=" rounded-2xl group flex flex-col gap-4"
                >
                  <div className="group bg-white rounded-2xl flex flex-col justify-around items-center gap-2 h-[230px] md:h-[340px] w-[165px] md:w-[275px]">
                    <img
                      className="rounded-2xl md:h-[230px] h-[150px] w-[140px] md:w-[250px]  group-hover:scale-110 duration-500 "
                      src={item.imgUrl}
                      alt={item.name}
                    />

                    <div className="hidden md:flex justify-center p-2">
                      <button
                        onClick={() => {
                          handleSubmit(item);
                        }}
                        className={`${
                          basketedData ? "text-green-500" : ""
                        }   transform translate-y-5  opacity-0 w-[19vw] cursor-pointer group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex gap-2 font-semibold justify-center py-2 hover:bg-neutral-200 rounded-4xl`}
                      >
                        <svg
                          width="22px"
                          height="22px"
                          viewBox="0 0 46 46"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mb-1 text-black  transition-colors duration-300"
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

                        {basketedData ? <p>Səbətdə</p> : <p>Səbətə əlavə et</p>}
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <p className="text-2xl font-semibold md:block">
                      {item.minPrice}
                      <span className="text-[8px] md:text-[10px] font-bold">
                        ₼
                      </span>
                      -{item.maxPrice}
                      <span className="text-[8px] md:text-[10px] font-bold">
                        ₼
                      </span>
                    </p>
                    <div className="md:hidden flex items-center ">
                      {[...Array(raiting)].map((_, i) => (
                        <IoStarSharp
                          key={i}
                          className="text-yellow-400 text-[12px]"
                        />
                      ))}
                      {[...Array(emptyRaiting)].map((_, i) => (
                        <IoStarSharp
                          key={i}
                          className="text-neutral-500 text-[12px]"
                        />
                      ))}
                      <p className="text-sm">({raiting})</p>
                    </div>
                  </div>
                  <p className="text-[16px] font-semibold">{item.name}</p>
                </Link>
                {/* stars */}
                <div className="hidden md:flex items-center ">
                  {[...Array(raiting)].map((_, i) => (
                    <IoStarSharp key={i} className="text-yellow-400 text-xl" />
                  ))}
                  {[...Array(emptyRaiting)].map((_, i) => (
                    <IoStarSharp key={i} className="text-neutral-500 text-xl" />
                  ))}
                  ({raiting})
                </div>

                {/* basket button */}
                <button
                  onClick={() => handleSubmit(item)}
                  className={`${
                    basketedData ? "text-white bg-red-500" : "cursor-pointer"
                  } duration-500 md:hidden flex items-center gap-2 font-semibold justify-center py-2 border-red-500 border  text-[14px] rounded-4xl`}
                >
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                    color={`${basketedData ? "white" : "red"}`}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31.6523 41.2077H15.6523C9.77507 41.2077 5.2663 39.0849 6.547 30.5411L8.03823 18.9621C8.8277 14.699 11.547 13.0674 13.933 13.0674H33.4417C35.8628 13.0674 38.4242 14.8218 39.3365 18.9621L40.8277 30.5411C41.9154 38.12 37.5295 41.2077 31.6523 41.2077Z"
                      stroke={`${basketedData ? "white" : "red"}`}
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
                  {basketedData ? <p>Səbətdə</p> : <p>Səbətə əlavə et</p>}
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center w-full min-h-[70vh] text-xl px-5">
          <Loading />
        </div>
      )}
    </>
  );
}

export default Parfum;
