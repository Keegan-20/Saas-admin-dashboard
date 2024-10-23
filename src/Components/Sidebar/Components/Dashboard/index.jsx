import React, { useState } from "react";
import { ChevronRight, ListOrdered } from "lucide-react";
import { ss1,ss2,ss3,ss4 } from "../../../../assets/Icons";
import { useLocation, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const urlBarString = location?.pathname?.split("/");
  const navigate = useNavigate();
  const [state, setState] = useState({
    currentSegment: "",
  });

  let list = [
    {
      name: "Default",
      icon: ss1,
      slug: "",
    },
    {
      name: "Orders",
      icon: ListOrdered,
      slug: "orders",
    },
    {
      name: "eCommerce",
      icon: ss2,
      slug: "ecommerce",
    },
    {
      name: "Projects",
      icon: ss3,
      slug: "projects",
    },
    {
      name: "Online Courses",
      icon: ss4,
      slug: "online-courses",
    },
  ];

  return (
    <div>
      <h2 className="text-[#1C1C1C66] text-sm font-normal px-2 mb-1 dark:text-[#FFFFFF66]">
        Dashboards
      </h2>
      <>
        {list?.map((d, i) => (
          <div
            onClick={() => navigate(d?.slug)}
            key={i}
            className={`hover:bg-[#1C1C1C0D] hover:dark:bg-[#FFFFFF1A] group ${
              urlBarString[1] === d?.slug
                ? " bg-[#1C1C1C0D] dark:bg-[#FFFFFF1A]"
                : ""
            } relative flex items-center py-[2px] rounded-[8px] cursor-pointer mb-1  transition-transform hover:scale-105 duration-500 ease-in-out`}
          >
            {urlBarString[1] === d?.slug && (
              <div className="h-[14px] w-[3px] absolute left-0 bg-[#1C1C1C] rounded-[1px] group-hover: dark:bg-[#C6C7F8]"></div>
            )}
            <div className="flex items-center pl-4">
              <ChevronRight
                size={14}
                strokeWidth={1.5}
                className={`text-[#1C1C1C33] dark:text-[#FFFFFF33] ${
                  d?.slug === state?.currentSegment ? "invisible" : ""
                }`}
              />
              {
                typeof d.icon === "string" ? (
                  <img
                    src={d.icon}
                    alt={`${d.name} icon`}
                    className="w-4 h-4 text-primary dark:invert"
                  />
                ) : (
                  <d.icon
                    size={16}
                    strokeWidth={1.5}
                    className="text-primary dark:text-[#FFFFFF]"
                  />
                )
              }
              <p className="text-sm font-normal pl-1 dark:text-[#FFFFFF]">
                {d?.name}
              </p>
            </div>
          </div>
        ))}
      </>
    </div>
  );
};

export default Dashboard;
