import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, NavItem } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { CiUser, CiLogout } from "react-icons/ci";
import { LiaEdit } from "react-icons/lia";
import "./NabarstyleBootstrap.css";
import authManage from "../utils/PrivateRoute";
import styles from "../CSS/Navbar.module.css";
import { LuSchool } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";
import { Translate } from "react-bootstrap-icons";
import { IoIosHelpCircleOutline } from "react-icons/io";
function NavBar() {
  const API_URL = import.meta.env.VITE_API_URL; //thsis is test url
  const navigate = useNavigate();
  const [isSidebar, setIsSidebar] = useState();
  const [instituteName, setInstituteName] = useState("");
  const [academicYear, setAcademicYear] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState({});
  const [inputValueGR, setInputValueGR] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [sessionData, setsessionData] = useState({});

  function getCurrentDate() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const monthIndex = today.getMonth();
    const year = String(today.getFullYear()).slice();

    const monthName = months[monthIndex];

    return `${day} ${monthName} ${year}`;
  }
  // const handleSelect = (eventKey) => {
  //   setSelectedYear(eventKey);
  //   localStorage.setItem("academicYear", eventKey);
  //   const academicYear = localStorage.getItem("academicYear");
  //   console.log("this is selected academicYear", academicYear);
  // };

  // const handleSelect = async (eventKey) => {
  //   setSelectedYear(eventKey);
  //   localStorage.setItem("academicYear", eventKey);
  //   const academic_yr = localStorage.getItem("academicYear");

  //   try {
  //     const token = localStorage.getItem("authToken");
  //     if (!token || !academic_yr) {
  //       throw new Error("No authentication token or academic year found");
  //     }

  //     console.log("api claing");
  //     const response = await axios.put(
  //       `${API_URL}/api/updateAcademicYear`,
  //       {
  //         academic_yr: eventKey,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     console.log("the response data", response.data.success);
  //     if (response.data.success) {
  //       console.log("Academic year updated successfully");
  //       window.location.reload();
  //     }
  //   } catch (error) {
  //     console.log("error aa rhi hai ");
  //     console.error("Error updating academic year:", error);
  //   }
  // };
  async function SeesionDatacallfun() {
    const token = localStorage.getItem("authToken");
    if (!token) {
      console.error("No authentication token found");
      return;
    }
    try {
      const response = await axios.get(`${API_URL}/api/sessionData`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      setsessionData(response.data);
      console.log("sessiond data", response.data);
    } catch (error) {
      console.error("Error fetching session data:", error);
    }
  }
  const handleSelect = async (eventKey) => {
    setSelectedYear(eventKey);

    const token = localStorage.getItem("authToken");

    if (!token) {
      console.error("No authentication token found");
      return;
    }

    try {
      const response = await axios.post(
        `${API_URL}/api/update_academic_year`,
        {
          academic_year: eventKey,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.setItem("authToken", response.data.token);
      // Refresh the page after updating the token
      window.location.reload();
    } catch (error) {
      console.error("Error updating academic year:", error);
    }
  };

  useEffect(() => {
    const sessionData = JSON.parse(sessionStorage.getItem("sessionData"));

    if (
      sessionData &&
      sessionData.settings &&
      sessionData.settings.length > 0
    ) {
      setInstituteName(sessionData.settings[0].institute_name);
      setAcademicYear(sessionData.settings[0].academic_yr);
    }

    // Fetch the data of academic year
    const token = localStorage.getItem("authToken");
    const fetchAcademicYear = async () => {
      try {
        const acdemicyearres = await axios.get(
          `${API_URL}/api/getAcademicYear`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAcademicYear(acdemicyearres.data.academic_years);
        console.log(
          "academic year data is",
          acdemicyearres.data.academic_years
        );
      } catch (error) {
        console.error("Error fetching academic year data:", error);
      }
    };
    SeesionDatacallfun();
    fetchAcademicYear();
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("authToken");

      // Logout API
      await axios.post(
        `${API_URL}/api/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem("authToken");
      localStorage.removeItem("academicYear");
      localStorage.removeItem("user");
      localStorage.removeItem("settings");
      sessionStorage.removeItem("sessionData");
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  const handleInputChange = (event) => {
    setInputValueGR(event.target.value);
  };
  const toggleMenuDropdown = (menu) => {
    setMenuDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };
  return (
    <>
      <div
        className=""
        style={{
          position: "fixed",
          top: "0px",
          zIndex: "10",
          backgroundColor: "#D61D5E",
        }}
      >
        <div
          className={`${styles.navbar} w-screen flex items-center justify-between px-2  h-12`}
          style={{
            // background: "#C12D51"
            // background: "rgb(200, 35, 69) ",
            background: "#C03078",
          }}
        >
          <div>
            <LuSchool className=" text-white " style={{ fontSize: "2em" }} />
          </div>
          <div className="flex-grow ">
            <h1
              className={`${styles.headingSchool} flex justify-center items-center   lg:text-2xl  font-semibold   sm:font-bold  text-white `}
            >
              {/* {localStorage.getItem("instituteName")} {"("}
              {localStorage.getItem("academicYear")} */}
              {/* {")"} */}
              St. Arnolds Central School{" ("}
              {sessionData.custom_claims?.academic_year}
              {")"}
            </h1>
          </div>
          <h1 className="text-lg lg:text-sm text-white px-2 hidden lg:block mt-2">
            {getCurrentDate()}
          </h1>
          <div className="flex items-center ">
            <NavDropdown
              title={
                <FaUserCircle
                  className="text-white"
                  style={{
                    fontSize: "1.5rem",
                    display: "inline",
                    marginLeft: "4px",
                    paddingRight: "4px",
                  }}
                />
              }
              className="  w-18 border-2 rounded-full border-white px-2 lg:px-4 ml-2 hover:rounded-lg "
              menuAlign="left"
            >
              <NavDropdown.Item>
                <div
                  className="flex items-center gap-2"
                  onClick={() => {
                    navigate("/myprofile");
                  }}
                >
                  <FaUserCircle style={{ fontSize: "1.5rem" }} />
                  <span style={{ fontSize: ".8em" }}>
                    {sessionData.user?.name}
                  </span>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <div
                  className="flex items-center gap-2"
                  onClick={() => {
                    navigate("/changepassword");
                  }}
                >
                  <LiaEdit style={{ fontSize: "1.5rem" }} />
                  <span style={{ fontSize: ".8em" }}>Change Password</span>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout}>
                <div className="flex items-center gap-2">
                  <CiLogout style={{ fontSize: "1.5rem" }} />
                  <span style={{ fontSize: ".8em" }}>Logout</span>
                </div>
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
        <div style={{ background: "rgb(255, 9, 98)" }}>
          <div
            className={` flex justify-between  shadow h-12  mx-2 bg-gray-200`}
          >
            <div
              onClick={() => setIsSidebar(true)}
              className="  hover:cursor-pointer hidden lg:block"
            >
              <RxHamburgerMenu
                style={{
                  fontSize: "1.8em",
                  textAlign: "center",
                  display: "inline",
                  position: "relative",
                  top: "5px",
                  left: "10px",
                  paddingTop: "5px",
                }}
              />
            </div>
            {/* nav bar items */}

            <Navbar
              expand="lg"
              className={`${styles.navBarSide} flex justify-between pl-16 w-full custom-navbar `}
            >
              {/* kfdospafjkop */}
              {/* joidsfj
            
            */}
              <div className="container-fluid flex items-center bg-gray-200 sm:w-40 box-border ">
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  className="custom-toggler bg-transparent"
                />
                <Navbar.Collapse
                  id="basic-navbar-nav"
                  className="flex-grow-1 text-black "
                >
                  {/* Navbar start here */}
                  <Nav className="mr-auto text-xs lg:text-sm ">
                    <div
                      onClick={() => {
                        navigate("/dashboard");
                      }}
                      style={{ fontWeight: "700" }}
                      className={`DashbordText  md:pt-0 my-auto  text-gray-600 cursor-pointer hover:text-gray-900  md:relative right-2  `}
                    >
                      <FaHome className="inline mr-1 relative bottom-0.5  hover:text-black" />
                      Dashboard
                    </div>
                    <NavDropdown
                      title="Role"
                      style={{
                        color: "black",
                        fontWeight: "700",
                      }}
                      className="pr-0 mr-0 w-fit"
                    >
                      <NavDropdown.Item as={Link} to="/roles">
                        Manage Role
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/show_roles">
                        Manage Access
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="My Actions"
                      style={{
                        color: "black",
                        fontWeight: "700",
                      }}
                      className="pr-0 mr-0 w-fit"
                    >
                      {/* Student sub dropdown */}

                      <NavDropdown
                        className="dropend   "
                        id="sub-view-dropdown"
                        title="Students"
                        style={{
                          color: "black",
                          fontWeight: "700",
                        }}
                        // className="pr-0 mr-0 w-fit"
                      >
                        <NavDropdown.Item
                          className="text-[.9em] font-bold hover:text-black"
                          as={Link}
                          to="/student-create"
                        >
                          Add Student
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="text-[.9em] font-bold hover:text-black"
                          as={Link}
                          to="/student-list"
                        >
                          New Student List
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="text-[.9em] font-bold hover:text-black"
                          as={Link}
                          to="#"
                        >
                          Manage Students
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="text-[.9em] font-bold hover:text-black"
                          as={Link}
                          to="#"
                        >
                          LC Students
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="text-[.9em] font-bold hover:text-black"
                          as={Link}
                          to="#"
                        >
                          Deleted Student Lists
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="text-[.9em] font-bold hover:text-black"
                          as={Link}
                          to="#"
                        >
                          Promote Students
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="text-[.9em] font-bold hover:text-black"
                          as={Link}
                          to="#"
                        >
                          Send User Id to Parents
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="text-[.9em] font-bold hover:text-black"
                          as={Link}
                          to="#"
                        >
                          Sibling Mapping
                        </NavDropdown.Item>
                        <NavDropdown.Item>Edit Student</NavDropdown.Item>
                        <NavDropdown.Item>Delete Student</NavDropdown.Item>
                        <NavDropdown.Item
                          className="text-[.9em] font-bold hover:text-black"
                          as={Link}
                          to="/myprofile"
                        >
                          User Profile
                        </NavDropdown.Item>
                      </NavDropdown>
                      {/* Certificate  sub drop down */}
                      <NavDropdown
                        className="dropend pr-0 mr-0  "
                        id="sub-view-dropdown"
                        title="Certificate"
                        style={{
                          color: "black",
                          fontWeight: "700",
                        }}
                      >
                        <NavDropdown.Item
                          as={Link}
                          to="#"
                          className="text-[.9em] font-bold"
                        >
                          Bonafide Certificate
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="text-[.9em] font-bold hover:text-black"
                          as={Link}
                          to="#"
                        >
                          Caste Certificate
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="text-[.9em] font-bold hover:text-black"
                          as={Link}
                          to="#"
                        >
                          Character Certificate
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="text-[.9em] font-bold hover:text-black"
                          as={Link}
                          to="#"
                        >
                          Percentage Certificate
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="text-[.9em] font-bold hover:text-black"
                          as={Link}
                          to="#"
                        >
                          Simple Bonafide Certificate
                        </NavDropdown.Item>
                      </NavDropdown>
                      {/* Staff sub drop down */}
                      <NavDropdown
                        className=" dropend pr-0 mr-0  "
                        id="sub-view-dropdown"
                        title="Staff"
                        style={{
                          color: "black",
                          fontWeight: "700",
                        }}
                      >
                        <NavDropdown.Item
                          as={Link}
                          to="/StaffList"
                          className="text-[.9em] font-bold"
                        >
                          Staff List
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="text-[.9em] font-bold hover:text-black"
                          as={Link}
                          to="#"
                        >
                          Manage Caretaker
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="text-[.9em] font-bold hover:text-black"
                          as={Link}
                          to="#"
                        >
                          Substitute Teacher
                        </NavDropdown.Item>
                      </NavDropdown>
                      {/* Leaving certificate sub drop down */}
                      <NavDropdown
                        className=" dropend pr-0 mr-0  "
                        id="sub-view-dropdown"
                        title="Leaving Certificate"
                        style={{
                          color: "black",
                          fontWeight: "700",
                        }}
                      >
                        <NavDropdown.Item
                          as={Link}
                          to="#"
                          className="text-[.9em] font-bold"
                        >
                          Generate LC
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="text-[.9em] font-bold hover:text-black"
                          as={Link}
                          to="#"
                        >
                          Manage LC
                        </NavDropdown.Item>
                      </NavDropdown>
                      {/* Leave sub drop down*/}
                      <NavDropdown
                        className=" dropend pr-0 mr-0  "
                        id="sub-view-dropdown"
                        title="Leave"
                        style={{
                          color: "black",
                          fontWeight: "700",
                        }}
                      >
                        <NavDropdown.Item
                          as={Link}
                          to="#"
                          className="text-[.9em] font-bold"
                        >
                          Leave Allocation
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="text-[.9em] font-bold hover:text-black"
                          as={Link}
                          to="#"
                        >
                          Leave Allocation to All Staff
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="text-[.9em] font-bold hover:text-black"
                          as={Link}
                          to="#"
                        >
                          Leave Application
                        </NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown.Item
                        className="text-[.9em] font-bold hover:text-black"
                        as={Link}
                        to="#"
                      >
                        Notice/SMS
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="text-[.9em] font-bold hover:text-black"
                        as={Link}
                        to="#"
                      >
                        Event
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="text-[.9em] font-bold hover:text-black"
                        as={Link}
                        to="#"
                      >
                        Holiday List
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="text-[.9em] font-bold hover:text-black"
                        as={Link}
                        to="#"
                      >
                        Allot Class teachers
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="text-[.9em] font-bold hover:text-black"
                        as={Link}
                        to="#"
                      >
                        Allote Department cordinator
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="ID Card"
                      style={{ color: "black", fontWeight: "700" }}
                    >
                      <NavDropdown.Item
                        className="text-[.9em] font-bold hover:text-black"
                        as={Link}
                        to="#"
                      >
                        Student ID Card
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="text-[.9em] font-bold hover:text-black"
                        as={Link}
                        to="#"
                      >
                        Teacher ID Card
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="text-[.9em] font-bold hover:text-black"
                        as={Link}
                        to="#"
                      >
                        Pending Student ID Card
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="View"
                      style={{ color: "black", fontWeight: "700" }}
                    >
                      <NavDropdown.Item
                        className="text-[.9em] font-bold hover:text-black"
                        as={Link}
                        to="#"
                      >
                        Leaving Certificate
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="text-[.9em] font-bold hover:text-black"
                        as={Link}
                        to="#"
                      >
                        Notices/SMS for staff
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="text-[.9em] font-bold hover:text-black"
                        as={Link}
                        to="#"
                      >
                        Book Availablity
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Reports"
                      style={{ color: "black", fontWeight: "700" }}
                    >
                      <NavDropdown.Item
                        className="text-[.9em] font-bold hover:text-black"
                        as={Link}
                        to="#"
                      >
                        Balance Leave
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="text-[.9em] font-bold hover:text-black"
                        as={Link}
                        to="#"
                      >
                        Consolidated Leave
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="text-[.9em] font-bold hover:text-black"
                        as={Link}
                        to="#"
                      >
                        Student Report
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="text-[.9em] font-bold hover:text-black"
                        as={Link}
                        to="#"
                      >
                        Student Contact Details Report
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Ticket"
                      style={{ color: "black", fontWeight: "700" }}
                    >
                      <NavDropdown.Item
                        className="text-[.9em] font-bold hover:text-black"
                        as={Link}
                        to="#"
                      >
                        T1
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="text-[.9em] font-bold hover:text-black"
                        as={Link}
                        to="#"
                      >
                        T2
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="text-[.9em] font-bold hover:text-black"
                        as={Link}
                        to="#"
                      >
                        T3
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="text-[.9em] font-bold hover:text-black"
                        as={Link}
                        to="#"
                      >
                        T4
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Masters"
                      style={{ color: "black", fontWeight: "700" }}
                    >
                      <NavDropdown.Item
                        className="text-[.9em] font-bold hover:text-black"
                        as={Link}
                        to="/sections"
                      >
                        Section
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="text-[.9em] font-bold hover:text-black"
                        as={Link}
                        to="/classlist"
                      >
                        Class
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="text-[.9em] font-bold hover:text-black"
                        as={Link}
                        to="#"
                      >
                        Division
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="text-[.9em] font-bold hover:text-black"
                        as={Link}
                        to="#"
                      >
                        Subjects
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="text-[.9em] font-bold hover:text-black"
                        as={Link}
                        to="#"
                      >
                        Subjects Allotment
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="text-[.9em] font-bold hover:text-black"
                        as={Link}
                        to="#"
                      >
                        StudentWise Subject Allotement for HSC
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="text-[.9em] font-bold hover:text-black"
                        as={Link}
                        to="#"
                      >
                        Subject for report Card
                      </NavDropdown.Item>
                    </NavDropdown>
                    {/* Help */}
                    <div
                      onClick={() => {
                        // navigate("");
                      }}
                      style={{ fontWeight: "700" }}
                      className="my-auto  text-gray-600 cursor-pointer hover:text-gray-900  md:relative left-2 "
                    >
                      <IoIosHelpCircleOutline className="inline mr-1 relative bottom-0.5  hover:text-black" />
                      {/* <FaHome className="inline mr-1 relative bottom-0.5  hover:text-black" /> */}
                      Help
                    </div>
                  </Nav>
                </Navbar.Collapse>{" "}
              </div>
            </Navbar>
            <div className="flex items-center  ">
              {/* className="w-12 lg:w-16 outline-none border border-black px-2 rounded-md text-pink-500 mr-2" */}
              <div>
                <input
                  type="text"
                  id="search"
                  name="search"
                  placeholder="GR NO"
                  value={inputValueGR}
                  onChange={(e) => {
                    setInputValueGR(e.target.value);
                  }}
                  style={{
                    display: "inline",
                    position: "relative",
                    zIndex: "2",
                    // width: "70%",
                    padding: "3px",
                    paddingRight: "4px",
                    // Adjust the input text size if needed
                  }}
                  className={` w-12 lg:w-20 mr-4 outline-none border-1 border-gray-400  rounded-md py-0.5 text-xs lg:text-sm`}
                />
              </div>

              <NavDropdown
                // title={selectedYear}
                title={selectedYear ? selectedYear : "Academic Year "}
                className={`${styles.dropNaveBarAcademic} academic-dropdown outline-none border-1 border-gray-400 px-1 rounded-md py-0.5 text-xs lg:text-sm   `}
                style={{
                  boxSizing: "border-box",
                  width: "60%",
                  margin: "auto",
                  position: "relative",
                  right: "10px",
                  textAlign: "center",
                  fontWeight: "600",
                }}
                onSelect={handleSelect}
              >
                <div className=" text-start text-sm bg-gray-50 text-gray-300  h-28 overflow-y-scroll">
                  {/* {academicYear.map((year) => (
                  <NavDropdown.Item
                    key={year}
                    eventKey={year}
                    value={year}
                    // onChange={(e) => setChangedAcedemicYear(e.target.value)}
                  >
                    {year}
                  </NavDropdown.Item>
                ))} */}
                  {/* new logic */}
                  {academicYear &&
                    academicYear.length > 0 &&
                    academicYear.map((year) => (
                      <NavDropdown.Item key={year} eventKey={year}>
                        {year}
                      </NavDropdown.Item>
                    ))}
                </div>
              </NavDropdown>
            </div>
          </div>
        </div>
      </div>
      <Sidebar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
    </>
  );
}

export default NavBar;
