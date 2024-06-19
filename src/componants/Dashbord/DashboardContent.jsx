import { PiBookOpenUserLight } from "react-icons/pi";
// import { PiBookOpenUserLight } from "react-icons/pi";
import { FaUserGroup, FaUsers, FaUsersLine } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { MdOutlinePayment } from "react-icons/md";
// import Card from "../components/common/Card.jsx";
import Style from "../../CSS/DashbordCss/Card.module.css";
// import NewCard from "../components/common/NewCard.jsx";
import Card from "../common/Card.jsx";
import EventCard from "./EventCard.jsx";
import CardStuStaf from "../common/CardStuStaf.jsx";
import Footer from "../../Layouts/Footer.jsx";
import { FaBirthdayCake } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { HiCollection } from "react-icons/hi";
import { IoTicket } from "react-icons/io5";
import NoticeBord from "./NoticeBord.jsx";

const DashboardContent = () => {
  return (
    <>
      <div className="flex items-start justify-between w-full  pr-6 gap-4 h-1/2 px-6">
        <div
          className={`${Style.adminDashboard} w-2/3 grid grid-cols-3 gap-x-8 gap-y-3  p-4 h-full  `}
        >
          {/* <Card
            title="Students"
            value="3256"
            color="#FF5733"
            icon={<PiBookOpenUserLight />}
          />
          <Card
            title="Employees"
            value="68"
            color="#FFC107"
            icon={<PiBookOpenUserLight />}
          /> */}

          <CardStuStaf
            title="Student"
            TotalValue="125321"
            presentValue="4521"
            color="#4CAF50"
            icon={
              <FaUsersLine
                style={{
                  color: "violet",
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "50%",
                }}
              />
            }
          />
          <Card
            title="Employees"
            value="3,47,000"
            color="#2196F3"
            icon={
              <FaUserGroup
                style={{
                  color: "cyan",
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "50%",
                }}
              />
            }
          />
          <Card
            title="Fee Collection Tab"
            value="3256"
            color="#FF5733"
            icon={
              <HiCollection
                style={{
                  color: "green",
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "50%",
                }}
              />
            }
          />
          <Card
            title="Ticketing Module"
            value="68"
            color="#FFC107"
            icon={
              <IoTicket
                style={{
                  color: "yellow",
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "50%",
                }}
              />
            }
          />
          <Card
            title="Acheivements"
            value="16"
            color="#4CAF50"
            icon={
              <GiAchievement
                style={{
                  color: "violet",
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "50%",
                }}
              />
            }
          />
          <Card
            title="BirthDay"
            value="3,47,000"
            color="#2196F3"
            icon={
              <FaBirthdayCake
                style={{
                  color: "cyan",
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "50%",
                }}
              />
            }
          />
          {/* you can add more cards here just add on */}
        </div>
        <div
          //   className="w-2/5 border-2 border-solid border-red-500 h-5/6"
          className="w-1/3 border-2 border-solid  h-64 mt-6 bg-slate-100 overflow-y-hidden rounded-lg"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;",
          }}
        >
          <EventCard />
        </div>
      </div>

      <div className="flex items-start justify-between w-full  pr-6 gap-10 h-1/2 px-6 ">
        <div
          className=" w-2/3 grid grid-cols-3 gap-x-8 gap-y-3  p-4 h-full bg-white rounded-lg"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;",
          }}
        ></div>
        <div
          className=" w-1/3 border-2 border-solid  h-full  bg-slate-50 rounded-lg"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;",
          }}
        >
          {" "}
          <NoticeBord />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DashboardContent;
