import { useState } from "react";
import Styles from "../../CSS/DashbordCss/NoticeBord.module.css";
import Style from "@emotion/style";

function NoticeBord() {
  const [activeTab, setActiveTab] = useState("noticeForParents");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const parentNotices = [
    {
      date: "16 May, 2017",
      author: "Jennyfar Lopez",
      time: "5 min ago",
      message: "Great School management. Simply dummy text of the printing.",
    },
    {
      date: "16 May, 2017",
      author: "Killar Miller",
      time: "55 min ago",
      message: "Great School management. Simply dummy text of the printing.",
    },
    {
      date: "16 May, 2017",
      author: "Jennyfar Lopez",
      time: "5 min ago",
      message: "Great School management. Simply dummy text.",
    },
    {
      date: "16 May, 2017",
      author: "Mike Hussy",
      time: "5 min ago",
      message: "Great School management. Simply dummy text.",
    },
  ];

  const staffNotices = [
    {
      date: "17 May, 2017",
      author: "John Doe",
      time: "10 min ago",
      message: "Staff meeting at 3 PM in the conference room.",
    },
    {
      date: "17 May, 2017",
      author: "Jane Smith",
      time: "30 min ago",
      message: "Submit your weekly reports by EOD.",
    },
    {
      date: "17 May, 2017",
      author: "Richard Roe",
      time: "1 hour ago",
      message: "Training session on new software tomorrow at 10 AM.",
    },
  ];

  return (
    <div className={`${Styles.container} bg-slate-100`}>
      <div className={Styles.tabs}>
        <button
          className={`${Styles.tab} ${
            activeTab === "noticeForParents" ? Styles.active : ""
          }`}
          onClick={() => handleTabChange("noticeForParents")}
        >
          Notice for Parents
        </button>
        <button
          className={`${Styles.tab} ${
            activeTab === "noticeForStaff" ? Styles.active : ""
          }`}
          onClick={() => handleTabChange("noticeForStaff")}
        >
          Notice for Staff
        </button>
      </div>

      <div className={Styles.content}>
        {activeTab === "noticeForParents" && (
          <div className={Styles.noticeBoard}>
            {parentNotices.map((notice, index) => (
              <div
                key={index}
                className={`${Styles.notice} box-border  shadow-md`}
              >
                <div className={Styles.date}>{notice.date}</div>
                <div className={Styles.author}>
                  {notice.author}
                  <span className={`${Styles.time}  ml-4`}>{notice.time}</span>
                </div>

                <div className={`${Styles.message} leading-6`}>
                  {notice.message}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "noticeForStaff" && (
          <div className={`${Styles.noticeBoard} `}>
            {staffNotices.map((notice, index) => (
              <div
                key={index}
                className={`${Styles.notice} box-border shadow-md `}
                // style={{
                //   background: " #E91E63",
                // }}
              >
                <div className={Styles.date}>{notice.date}</div>
                <div className={Styles.author}>
                  {" "}
                  {notice.author}
                  <span className={`${Styles.time}  ml-4`}>{notice.time}</span>
                </div>

                <div className={`${Styles.message} leading-6`}>
                  {notice.message}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default NoticeBord;
