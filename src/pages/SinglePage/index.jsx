import { useEffect, useState } from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { IoStarSharp } from "react-icons/io5";
import { RiLinksLine, RiTwitterLine } from "react-icons/ri";
import { TbCurrencyManat } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";

function SinglePage() {

  const { slug } = useParams();
  const [data, setData] = useState();
  const [count, setCount] = useState(1);
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const decrement = () => {
    setCount(count - 1);
  };
  const increment = () => {
    setCount(count + 1);
  };

  const foundedData = data?.find((item) => item.slug == slug);
  let raiting = 0;
  let emptyRaiting = 0;
  if(foundedData){
   raiting = foundedData?.star;
  console.log(raiting);
  
 emptyRaiting = 5 - raiting;
  console.log(emptyRaiting);
  
  }
  
  return (
    <section className="mt-10 min-h-screen">
      <div className="h-[24vh] flex flex-col gap-2 justify-center">
        <h1 className="text-5xl font-bold">{foundedData?.name}</h1>
        <div className="flex items-center ">
          {[...Array(raiting)].map((_, i) => (
            <IoStarSharp key={i} className="text-yellow-400 text-xl" />
          ))}
          {[...Array(emptyRaiting)].map((_, i) => (
            <IoStarSharp key={i} className="text-neutral-500 text-xl" />
          ))}{" "}
          ({raiting})
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-5">
        <div>
          <img
            src={foundedData?.imgUrl}
            alt={foundedData?.name}
            className="w-full md:w-[40vw] h-[60vh] object-cover rounded-2xl border border-neutral-400"
          />
        </div>

        <div className="flex flex-col md:items-start items-center gap-5">
          <h3 className="text-3xl font-semibold">Ətrin həcmini seçin:</h3>
          <div className="flex flex-col items-center gap-3 border rounded-xl p-5 w-[50vw] md:w-[20vw] bg-white">
            <img
              src="https://api.iyde.az/frontend/images/volumes/15ml-site.png"
              alt={foundedData?.name}
              className="w-[50px] h-[70px] "
            />
            <p>{foundedData?.size}ml</p>
            <div className="flex items-end">
              <span className="text-4xl font-semibold">
                {foundedData?.minPrice}
              </span>
              <TbCurrencyManat className="text-xl" />
            </div>
          </div>
          <div className="flex gap-3 md:gap-5">
            <div className="text-xl border rounded-4xl h-fit bg-white flex justify-between w-[35vw] md:w-[12vw] px-6 py-4">
              <button className="cursor-pointer" onClick={decrement} disabled={count ==1}>
                -
              </button>
              <p>{count}</p>
              <button className="cursor-pointer" onClick={increment} >
                +
              </button>
            </div>

            <button className="hover:bg-[#700022] cursor-pointer duration-300 flex justify-center gap-2 items-center font-semibold bg-rose-600 rounded-4xl w-[50vw] md:w-[35vw] py-4 text-white">
              <svg
                width="20"
                height="20"
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
              <p>Səbətə əlavə et</p>
            </button>
          </div>

          {/* ikons */}
          <div className="flex justify-between md:py-0 py-4">
            <div className="flex gap-4">
              <RiLinksLine className="text-4xl p-2 rounded-full bg-neutral-300 cursor-pointer" />
              <BiLogoFacebook className="text-4xl p-2 rounded-full bg-neutral-300 cursor-pointer" />
              <RiTwitterLine className="text-4xl p-2 rounded-full bg-neutral-300 cursor-pointer" />
            </div>

            <div className="pl-5">
              <Link to="" className="flex gap-2">
                <p>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.92611 24.1807L4.59693 24.5161L4.80441 24.1012L4.52576 23.7302L3.92611 24.1807ZM6.81902 27.0736L7.2695 26.474L6.89857 26.1953L6.48361 26.4028L6.81902 27.0736ZM1.0332 29.9665L0.362383 29.6311C0.218012 29.9199 0.274603 30.2686 0.502873 30.4969C0.731143 30.7251 1.07987 30.7817 1.36861 30.6374L1.0332 29.9665ZM9.29987 9.29987L8.88384 8.67583C8.6752 8.81493 8.54987 9.0491 8.54987 9.29987H9.29987ZM21.6999 21.6999V22.4499C21.9506 22.4499 22.1848 22.3245 22.3239 22.1159L21.6999 21.6999ZM12.9253 10.386L13.6651 10.2627L12.9253 10.386ZM13.2135 12.1151L12.4737 12.2384L13.2135 12.1151ZM12.3214 14.1744L12.7374 14.7985L12.3214 14.1744ZM21.9936 21.2593L22.6176 21.6754L21.9936 21.2593ZM20.6137 18.0744L20.737 17.3346L20.6137 18.0744ZM18.8846 17.7862L18.7613 18.526L18.8846 17.7862ZM16.8253 18.6784L16.2013 18.2624L16.8253 18.6784ZM0.283203 15.4999C0.283203 18.925 1.41575 22.0878 3.32647 24.6312L4.52576 23.7302C2.80348 21.4377 1.7832 18.589 1.7832 15.4999H0.283203ZM15.4999 0.283203C7.09594 0.283203 0.283203 7.09594 0.283203 15.4999H1.7832C1.7832 7.92436 7.92436 1.7832 15.4999 1.7832V0.283203ZM30.7165 15.4999C30.7165 7.09594 23.9038 0.283203 15.4999 0.283203V1.7832C23.0754 1.7832 29.2165 7.92436 29.2165 15.4999H30.7165ZM15.4999 30.7165C23.9038 30.7165 30.7165 23.9038 30.7165 15.4999H29.2165C29.2165 23.0754 23.0754 29.2165 15.4999 29.2165V30.7165ZM6.36855 27.6733C8.91196 29.584 12.0747 30.7165 15.4999 30.7165V29.2165C12.4107 29.2165 9.56206 28.1963 7.2695 26.474L6.36855 27.6733ZM1.36861 30.6374L7.15443 27.7444L6.48361 26.4028L0.697793 29.2957L1.36861 30.6374ZM3.25529 23.8453L0.362383 29.6311L1.70402 30.3019L4.59693 24.5161L3.25529 23.8453ZM8.54987 9.29987V11.3665H10.0499V9.29987H8.54987ZM19.6332 22.4499H21.6999V20.9499H19.6332V22.4499ZM8.54987 11.3665C8.54987 17.4877 13.512 22.4499 19.6332 22.4499V20.9499C14.3405 20.9499 10.0499 16.6593 10.0499 11.3665H8.54987ZM9.71589 9.92391L10.1564 9.63022L9.32438 8.38214L8.88384 8.67583L9.71589 9.92391ZM12.1855 10.5093L12.4737 12.2384L13.9533 11.9918L13.6651 10.2627L12.1855 10.5093ZM11.9053 13.5504L9.91718 14.8758L10.7492 16.1239L12.7374 14.7985L11.9053 13.5504ZM12.4737 12.2384C12.5589 12.7495 12.3364 13.263 11.9053 13.5504L12.7374 14.7985C13.6596 14.1837 14.1355 13.0851 13.9533 11.9918L12.4737 12.2384ZM10.1564 9.63022C10.9514 9.10023 12.0285 9.56684 12.1855 10.5093L13.6651 10.2627C13.3291 8.24657 11.025 7.24837 9.32438 8.38214L10.1564 9.63022ZM22.3239 22.1159L22.6176 21.6754L21.3695 20.8433L21.0758 21.2838L22.3239 22.1159ZM20.737 17.3346L19.0079 17.0464L18.7613 18.526L20.4904 18.8142L20.737 17.3346ZM16.2013 18.2624L14.8758 20.2505L16.1239 21.0826L17.4493 19.0944L16.2013 18.2624ZM19.0079 17.0464C17.9146 16.8642 16.8161 17.3401 16.2013 18.2624L17.4493 19.0944C17.7367 18.6633 18.2503 18.4408 18.7613 18.526L19.0079 17.0464ZM22.6176 21.6754C23.7514 19.9747 22.7532 17.6706 20.737 17.3346L20.4904 18.8142C21.4329 18.9713 21.8995 20.0483 21.3695 20.8433L22.6176 21.6754Z"
                      fill="#2FB12F"
                    ></path>
                  </svg>
                </p>
                <p className="font-semibold">Bir kliklə sifariş et</p>
              </Link>
              <hr className="w-44 mt-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SinglePage;
