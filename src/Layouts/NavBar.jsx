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
  const navigate = useNavigate();
  const [isSidebar, setIsSidebar] = useState();
  const [instituteName, setInstituteName] = useState("");
  const [academicYear, setAcademicYear] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState({});
  const [inputValueGR, setInputValueGR] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleSelect = (eventKey) => {
    setSelectedYear(eventKey);
    console.log("this is ", eventKey);
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
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("authToken");
      await axios.post(
        "http://103.159.85.174:8507/api/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem("authToken");
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
      <div className="" style={{ position: "sticky", top: "0px" }}>
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
            <p className=" flex justify-center mt-3 items-center  text-sm lg:text-2xl text-white font-semibold">
              St. Arnolds Central School (2023 - 2024)
            </p>
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
            <div className="container-fluid flex items-center ">
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="custom-toggler"
              />
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="flex-grow-1 text-black "
              >
                <Nav className="mr-auto text-xs lg:text-sm">
                  <NavDropdown
                    title="Students"
                    style={{ color: "black", fontWeight: "700" }}
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
                className={`${styles.customPlaceholder} w-12 lg:w-20 mr-4 outline-none border-1 border-gray-400  rounded-md py-0.5 text-xs lg:text-sm`}
              />
            </div>

            <NavDropdown
              // title={selectedYear}
              title={selectedYear ? selectedYear : "Academic Year "}
              className="academic-dropdown  outline-none border-1 border-gray-400 px-1 rounded-md py-0.5 text-xs lg:text-sm  "
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
              <NavDropdown.Item eventKey="2016-2017">
                2016-2017
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="2017-2018">
                2017-2018
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="2018-2019">
                2018-2019
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="2019-2020">
                2019-2020
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="2020-2021">
                2020-2021
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="2021-2022">
                2021-2022
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
      </div>
      <Sidebar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
    </>
  );
}

export default NavBar;
