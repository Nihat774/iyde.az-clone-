import { useEffect, useState } from "react";

function Aside() {
  const [data, setData] = useState();
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const manParfum = data?.filter((item) => item.genderType == "man");
  const womanParfum = data?.filter((item)=>item.genderType =="woman")



  return (
    <aside className="w-[30vw] h-fit p-5 md:block hidden ">
      <hr className="w-full text-neutral-300" />
      <p className="playfair py-5 font-semibold">BRENDLƏR</p>
      <input
        type="text"
        className="py-2 px-3 w-full rounded-[15px] border border-neutral-500 text-sm font-semibold"
        placeholder="Brend Axtar"
      />

         <div className="h-[25vh] flex flex-col gap-3 py-4 overflow-y-scroll custom-scrollbar">
        {
          data?.map((item)=>{
            return(
              <div key={item.id} className="flex gap-2">
                <input type="checkbox" className="size-[17px] bg-neutral-300 "/>
                <p>{item.brand} (1)</p>
              </div>
            )
          })
        }
       </div>

       <hr className="w-full text-neutral-300" />
      <div>
        <p className="py-3 playfair font-semibold">KATEQORIYALAR</p>

       <div className="flex flex-col gap-5">
         <div className="flex gap-3 items-center">
          <input type="checkbox" className="size-[17px] bg-neutral-300 " />
          <p>Kişi ətirləri({manParfum?.length})</p>
        </div>

        <div className="flex gap-2 items-center">
          <input type="checkbox" className="size-[17px] bg-neutral-300 " />
          <p>Qadın ətirləri ({womanParfum?.length})</p>
        </div>
       </div>

    
      </div>
    </aside>
  );
}

export default Aside;
