import React, { useState, useEffect } from "react";
import axios from "axios";
import Styles from "../../CSS/DashbordCss/NoticeBord.module.css";

function NoticeBord() {
  const [activeTab, setActiveTab] = useState("noticeForParents");
  const [parentNotices, setParentNotices] = useState([]);
  const [staffNotices, setStaffNotices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          throw new Error("No token found");
        }

        // Fetch parent notices
        const parentResponse = await axios.get(
          "http://127.0.0.1:8000/api/parent-notices",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "X-Academic-Year": "2023-2024",
            },
          }
        );
        setParentNotices(parentResponse.data.parent_notices);

        // Fetch staff notices
        const staffResponse = await axios.get(
          "http://127.0.0.1:8000/api/staff-notices",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "X-Academic-Year": "2023-2024",
            },
          }
        );
        // console.log("staffResponse", staffResponse.data.notices);
        setStaffNotices(staffResponse.data.notices);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching notices:", error);
      }
    };

    fetchNotices();
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

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
                className={`${Styles.notice} box-border shadow-md`}
              >
                <div className={Styles.date}>
                  {notice.notice_date}{" "}
                  <span
                    className={`${Styles.time} text-right float-end font-bold `}
                  >
                    {/* {console.log("notice message", notice.class_name)} */}

                    {notice.notice_type}
                  </span>
                </div>
                <div className={Styles.author}>
                  {notice.subject}
                  <span
                    className={`${Styles.time}  ml-2`}
                    style={{ fontSize: ".88em" }}
                  >
                    {`( classes-${notice.class_name} )`}
                  </span>
                </div>
                <div className={`${Styles.message} leading-4`}>
                  {notice.notice_desc}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "noticeForStaff" && (
          <div className={`${Styles.noticeBoard}`}>
            {staffNotices.map((notice, index) => (
              <div
                key={index}
                className={`${Styles.notice} box-border shadow-md`}
              >
                <div className={Styles.date}>
                  {notice.notice_date}{" "}
                  <span
                    className={`${Styles.time} text-right float-end font-bold `}
                  >
                    {console.log("notice message", notice.class_name)}

                    {notice.notice_type}
                  </span>
                </div>
                <div className={Styles.author}>
                  {notice.subject}
                  <span
                    className={`${Styles.time}  ml-2`}
                    style={{ fontSize: ".88em" }}
                  >
                    {`( ${notice.staff_name} )`}
                  </span>
                </div>
                <div className={`${Styles.message} leading-6`}>
                  {notice.notice_desc}
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
