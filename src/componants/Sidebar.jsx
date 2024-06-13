import { faBullseye } from "@fortawesome/free-solid-svg-icons/faBullseye";
import { RxCross2 } from "react-icons/rx";

export default function Sidebar({ isSidebar, setIsSidebar }) {
  return (
    <div
      className={`h-screen w-36 bg-gray-200 relative right-36 transform transition-all duration-500 ${
        isSidebar
          ? " relative transform translate-x-36 transition-all duration-500"
          : "relative transform translate-x-0 transition-all duration-500"
      }`}
    >
      sidebar
      <RxCross2
        className="absolute right-2 top-2 text-2xl text-red-500 hover:cursor-pointer"
        onClick={() => setIsSidebar(false)}
      />
    </div>
  );
}
