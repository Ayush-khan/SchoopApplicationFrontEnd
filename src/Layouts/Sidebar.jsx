import { faBullseye } from "@fortawesome/free-solid-svg-icons/faBullseye";
import { RxCross2 } from "react-icons/rx";

export default function Sidebar({ isSidebar, setIsSidebar }) {
  return (
    <div className="absolute z-30">
      <div
        style={{
          height: "540px",

          // background:
          //   " rgb(81,199,204) linear-gradient(360deg, rgba(81,199,204,8) 0%, rgba(228,80,130,1) 53%)",
        }}
        className={` w-36 bg-gray-200 mt-0.5 shadow-lg relative right-36 transform transition-all  duration-500  text-center pr-3${
          isSidebar
            ? " relative transform translate-x-36 transition-all duration-500"
            : "relative transform translate-x-0 transition-all duration-500"
        }`}
      >
        RecentTabs
        <RxCross2
          className="absolute right-2 top-2 text-2xl text-red-500 hover:cursor-pointer"
          onClick={() => setIsSidebar(false)}
        />
      </div>
    </div>
  );
}
