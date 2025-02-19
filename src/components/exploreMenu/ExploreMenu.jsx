import React from "react";
import { menuList } from "../../assets/explore_menu/MenuDatabase";
import Image from "next/image";
const ExploreMenu = ({ setCategory, category }) => {
  return (
    <div id="menu">
      <h1 className="text-[#262626] text-3xl font-semibold my-2">
        Explore Our Menu
      </h1>
      <p className="text-[#262626] w-[60%] text-lg">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dinning experiance,
        one delicios meal at a time
      </p>
      <div className="flex justify-between items-center text-center min-w-[300px] gap-10 my-10 overflow-x-scroll">
        {menuList.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setCategory((prev) =>
                  prev === item.title ? "all" : item.title
                );
              }}
              className=""
            >
              <Image
                src={item.image}
                alt={item.title}
                className={
                  category === item.title
                    ? `min-w-[150px] min-h-[150px] cursor-pointer border-[4px] border-orange-600 rounded-[50%] p-[2px]`
                    : `min-w-[150px] min-h-[150px] cursor-pointer`
                }
              />
              <p
                className={
                  category === item.title
                    ? `text-orange-600 font-medium cursor-pointer mt-3`
                    : `text-[#262626] cursor-pointer mt-3`
                }
              >
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-10 h-[2px] bg-[#e2e2e2] border-none" />
    </div>
  );
};

export default ExploreMenu;
