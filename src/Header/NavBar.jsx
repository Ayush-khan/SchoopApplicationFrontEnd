import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Header/style.css";
import authManage from "../utils/auth";
import styles from "../CSS/Navbar.module.css";
import { LuSchool } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

function NavBar() {
  const navigate = useNavigate();
  const [instituteName, setInstituteName] = useState("");
  const [academicYear, setAcademicYear] = useState("");

  useEffect(() => {
    const sessionData = JSON.parse(sessionStorage.getItem("sessionData"));

    if (
      sessionData &&
      sessionData.settings &&
      sessionData.settings.length > 0
    ) {
      setInstituteName(sessionData.settings[0].institute_name);
    }

    if (
      sessionData &&
      sessionData.settings &&
      sessionData.settings.length > 0
    ) {
      setAcademicYear(sessionData.settings[0].academic_yr);
    }
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("authToken");
      await axios.post(
        "http://127.0.0.1:8000/api/logout",
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

  return (
    <div className={styles.navbar}>
      <div className="w-screen flex items-center justify-between px-4 lg:px-6">
        <div>
          <LuSchool className="text-2xl lg:text-4xl text-white" />
        </div>
        <div className="flex-grow">
          <h1 className="text-center text-xs lg:text-lg text-white">
            St. Arnolds Central School (2023 - 2024)
          </h1>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            name="search"
            id="search"
            className="w-12 lg:w-16 outline-none border border-black px-2 rounded-md text-pink-500"
            placeholder="GR No."
          />
          <NavDropdown
            title="ADMIN"
            className="navbar-dropdown border-2 border-black px-2 lg:px-4 ml-2"
          >
            <NavDropdown.Item href="#">
              <div className="flex items-center gap-2">
                <CiUser />
                <span>Ayush</span>
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item onClick={handleLogout}>
              <div className="flex items-center gap-2">
                <CiLogout />
                <span>Logout</span>
              </div>
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
      <h1 className="absolute top-0 right-4 text-xs lg:text-sm text-white px-2 py hidden lg:block">
        12 July 3005
      </h1>

      <Navbar bg="light" expand="lg" className="shadow">
        <div className="container-fluid">
          <Navbar.Brand
            as={Link}
            to="/dashboard"
            className="text-sm lg:text-base"
          >
            Dashboard
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="custom-toggler"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto text-xs lg:text-sm">
              <NavDropdown title="Students">
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
              <NavDropdown title="Manage Staff">
                <NavDropdown.Item href="#">Add Staff</NavDropdown.Item>
                <NavDropdown.Item href="#">Edit Staff</NavDropdown.Item>
                <NavDropdown.Item href="#">Delete Staff</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Curriculum">
                <NavDropdown.Item href="#">View Curriculum</NavDropdown.Item>
                <NavDropdown.Item href="#">Edit Curriculum</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Library">
                <NavDropdown.Item href="#">Add Book</NavDropdown.Item>
                <NavDropdown.Item href="#">Edit Book</NavDropdown.Item>
                <NavDropdown.Item href="#">Delete Book</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="View">
                <NavDropdown.Item href="#">View Students</NavDropdown.Item>
                <NavDropdown.Item href="#">View Staff</NavDropdown.Item>
                <NavDropdown.Item href="#">View Curriculum</NavDropdown.Item>
                <NavDropdown.Item href="#">View Library</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Finance">
                <NavDropdown.Item href="#">Financial Reports</NavDropdown.Item>
                <NavDropdown.Item href="#">Expenses</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Periodicals">
                <NavDropdown.Item href="#">Add Periodical</NavDropdown.Item>
                <NavDropdown.Item href="#">Edit Periodical</NavDropdown.Item>
                <NavDropdown.Item href="#">Delete Periodical</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Masters">
                <NavDropdown.Item href="#">Masters</NavDropdown.Item>
                <NavDropdown.Item href="#">Edit Master Record</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Delete Master Record
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Reports">
                <NavDropdown.Item href="#">Generate Report</NavDropdown.Item>
                <NavDropdown.Item href="#">View Report</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="System">
                <NavDropdown.Item href="#">
                  <NavDropdown title="Settings">
                    <NavDropdown.Item href="#">Add Staff</NavDropdown.Item>
                    <NavDropdown.Item href="#">Edit Staff</NavDropdown.Item>
                    <NavDropdown.Item href="#">Delete Staff</NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Users</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <NavDropdown
            title="Academic Year"
            className="mr-8 border-2 border-black px-2 text-xs lg:text-sm"
          >
            <NavDropdown.Item href="#">2016-2017</NavDropdown.Item>
            <NavDropdown.Item href="#">2016-2017</NavDropdown.Item>
            <NavDropdown.Item href="#">2016-2017</NavDropdown.Item>
            <NavDropdown.Item href="#">2016-2017</NavDropdown.Item>
            <NavDropdown.Item href="#">2016-2017</NavDropdown.Item>
            <NavDropdown.Item href="#">2016-2017</NavDropdown.Item>
          </NavDropdown>
        </div>
      </Navbar>
    </div>
  );
}

export default NavBar;
