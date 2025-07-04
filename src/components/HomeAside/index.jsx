import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddType } from "../../store/parfumSlice";

function Aside({checkedParfum,setCheckedParfum}) {
  const [data, setData] = useState([]);
  const [brand, setBrand] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const manParfum = data?.filter((item) => item.genderType == "man");
  const womanParfum = data?.filter((item) => item.genderType == "woman");

  const handleCheck = (name) => {
    const clicklenmisCheck = data?.filter((item)=>item.genderType == name);   
    dispatch(AddType(name)) 
  };

  const value = useSelector(state=>state.counter.value)
  useEffect(()=>{
    console.log(value);
  },[value])
  

  const foundedBrand = data?.filter((item) =>
    item.brand?.toLowerCase().startsWith(brand.toLowerCase())
  );

  const foundedBrandItem = foundedBrand?.find((item) =>
    item.brand?.toLowerCase()
  );
  return (
    <aside className="w-[30vw] h-fit p-5 md:block hidden ">
      <hr className="w-full text-neutral-300" />
      <p className="playfair py-5 font-semibold">BRENDLƏR</p>
      <input
        type="text"
        className="py-2 px-3 w-full rounded-[15px] border border-neutral-500 text-sm font-semibold outline-none"
        placeholder="Brend Axtar"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />

      {foundedBrandItem?.brand.length > 0 && brand.length > 0 ? (
        <div key={foundedBrandItem.id} className="flex gap-2 py-2">
          <input type="checkbox" className="size-[17px] bg-neutral-300 " />
          <p>{foundedBrandItem.brand}(1)</p>
        </div>
      ) : (
        <div className="h-[25vh] flex flex-col gap-3 py-4 overflow-y-scroll custom-scrollbar">
          {data?.map((item) => {
            return (
              <div key={item.id} className="flex gap-2">
                <input
                  type="checkbox"
                  className="size-[17px] bg-neutral-300 "
                />
                <p>{item.brand} (1)</p>
              </div>
            );
          })}
        </div>
      )}
      <hr className="w-full text-neutral-300" />
      <div>
        <p className="py-3 playfair font-semibold">KATEQORIYALAR</p>

        <div className="flex flex-col gap-5">
          <div className="flex gap-3 items-center">
            <input
              type="checkbox"
              name="man"
              value={isCheck}
              onChange={(e) => handleCheck(e.target.name)}
              className="size-[17px] bg-neutral-300 "
            />
            <p>Kişi ətirləri({manParfum?.length})</p>
          </div>

          <div className="flex gap-2 items-center">
            <input type="checkbox" 
            name="woman"
              value={isCheck}
              onChange={(e) => handleCheck(e.target.name)} 
              className="size-[17px] bg-neutral-300 " />
            <p>Qadın ətirləri ({womanParfum?.length})</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
