import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import { CiUser, CiLogout } from "react-icons/ci";
import { LiaEdit } from "react-icons/lia";
import "./NabarstyleBootstrap.css";
import authManage from "../utils/PrivateRoute";
import styles from "../CSS/Navbar.module.css";
import { LuSchool } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";
import { Translate } from "react-bootstrap-icons";

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

  const handleSelect = (eventKey) => {
    setSelectedYear(eventKey);
    localStorage.setItem("academicYear", eventKey);
    const academicYear = localStorage.getItem("academicYear");
    console.log("this is selected academicYear", academicYear);
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
        style={{ position: "sticky", top: "0px", zIndex: "10" }}
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
              St. Arnolds Central School (2023 - 2024)
            </h1>
          </div>
          <h1 className="text-lg lg:text-sm text-white px-2 hidden lg:block mt-2">
            18 June 2024
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
                <div className="flex items-center gap-2">
                  <FaUserCircle style={{ fontSize: "1.5rem" }} />
                  <span style={{ fontSize: ".8em" }}>Ayush</span>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <div className="flex items-center gap-2">
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
        <div className={` flex justify-between  shadow h-12  mx-2 bg-gray-200`}>
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
          {/* fajdiosfjos */}
          {/* ?jnlkfdskjha;l */}
          <Navbar
            expand="lg"
            className={`${styles.navBarSide} flex justify-between pl-16 w-full custom-navbar `}
          >
            {/* kfdospafjkop */}
            {/* joidsfj
            
            */}
            <div className="container-fluid flex items-center bg-gray-200 sm:w-40 box-border">
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="custom-toggler bg-transparent"
              />
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="flex-grow-1 text-black "
              >
                <Nav className="mr-auto text-xs lg:text-sm ">
                  <NavDropdown
                    title="Students"
                    style={{
                      color: "black",
                      fontWeight: "700",
                    }}
                    className="pr-0 mr-0 w-fit"
                  >
                    <NavDropdown.Item as={Link} to="/student-create">
                      Add Student
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/student-list">
                      Student List
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/myprofile">
                      User Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={handleLogout}>
                      Logout
                    </NavDropdown.Item>
                    <NavDropdown.Item>Edit Student</NavDropdown.Item>
                    <NavDropdown.Item>Delete Student</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/myprofile">
                      User Profile
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Manage Staff"
                    style={{ color: "black", fontWeight: "700" }}
                  >
                    <NavDropdown.Item href="#">Add Staff</NavDropdown.Item>
                    <NavDropdown.Item href="#">Edit Staff</NavDropdown.Item>
                    <NavDropdown.Item href="#">Delete Staff</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Curriculum"
                    style={{ color: "black", fontWeight: "700" }}
                  >
                    <NavDropdown.Item href="#">
                      View Curriculum
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Edit Curriculum
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Library"
                    style={{ color: "black", fontWeight: "700" }}
                  >
                    <NavDropdown.Item href="#">Add Book</NavDropdown.Item>
                    <NavDropdown.Item href="#">Edit Book</NavDropdown.Item>
                    <NavDropdown.Item href="#">Delete Book</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="View"
                    style={{ color: "black", fontWeight: "700" }}
                  >
                    <NavDropdown.Item href="#">View Students</NavDropdown.Item>
                    <NavDropdown.Item href="#">View Staff</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      View Curriculum
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">View Library</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Finance"
                    style={{ color: "black", fontWeight: "700" }}
                  >
                    <NavDropdown.Item href="#">
                      Financial Reports
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">Expenses</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Periodicals"
                    style={{ color: "black", fontWeight: "700" }}
                  >
                    <NavDropdown.Item href="#">Add Periodical</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Edit Periodical
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Delete Periodical
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Masters"
                    style={{ color: "black", fontWeight: "700" }}
                  >
                    <NavDropdown.Item as={Link} to="/classlist">
                      Class List
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/sections">
                      Sections
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">Masters</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Edit Master Record
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Delete Master Record
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Reports"
                    style={{ color: "black", fontWeight: "700" }}
                  >
                    <NavDropdown.Item href="#">
                      Generate Report
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">View Report</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="System"
                    style={{ color: "black", fontWeight: "700" }}
                  >
                    <NavDropdown.Item href="#">
                      <NavDropdown
                        title="Settings"
                        style={{ color: "black", fontWeight: "700" }}
                      >
                        <NavDropdown.Item href="#">Add Staff</NavDropdown.Item>
                        <NavDropdown.Item href="#">Edit Staff</NavDropdown.Item>
                        <NavDropdown.Item href="#">
                          Delete Staff
                        </NavDropdown.Item>
                      </NavDropdown>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">Users</NavDropdown.Item>
                  </NavDropdown>
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
                {academicYear.map((year) => (
                  <NavDropdown.Item
                    key={year}
                    eventKey={year}
                    value={year}
                    // onChange={(e) => setChangedAcedemicYear(e.target.value)}
                  >
                    {year}
                  </NavDropdown.Item>
                ))}
              </div>
            </NavDropdown>
          </div>
        </div>
      </div>
      <Sidebar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
    </>
  );
}

export default NavBar;
