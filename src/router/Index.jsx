// import React from "react";
// import { Route, Router, Routes } from "react-router-dom";
// import CreateStudent from "../componants/CreateStudent";
// import StudentList from "../componants/StudentList";
// import DemoTable from "../componants/DemoTable";
// import StudentEdit from "../componants/StudentEdit";
// import Login from "../componants/LoginForm";
// import NavBar from "../Layouts/NavBar";
// import UserProfile from "../componants/UserProfile";
// import LandingPage from "../componants/LandingPage";
// // import authManage from "../utils/auth";
// import AdminDashboard from "../componants/Dashbord/AdminDashboard";
// import EventCard from "../componants/Dashbord/EventCard";
// import NoticeBord from "../componants/Dashbord/NoticeBord";

// import StudentsChart from "../componants/Dashbord/Charts/StudentsChart";

// function Index() {
//   return (
//     <Routes>
//       <Route path="/student-create" element={<CreateStudent />} />
//       <Route path="/student-list" element={<StudentList />} />
//       <Route path="/student/:id/edit" element={<StudentEdit />} />
//       <Route path="/student-demo-table" element={<DemoTable />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/eventcard" element={<EventCard />} />
//       <Route path="/login" element={<Login />} />

//       {/* temoprary i have changed it */}
//       <Route path="/dashboard" element={<AdminDashboard />} />
//       <Route path="/studentschart" element={<StudentsChart />} />
//       <Route path="/noticebord" element={<NoticeBord />} />
//       <Route path="/navbar" element={<NavBar />} />
//       <Route path="/myprofile" element={<UserProfile />} />
//       <Route path="/" element={<LandingPage />} />
//       {/* <Route path='/logout' element={<Login />} /> */}
//     </Routes>
//   );
// }

// export default Index;

// All Routes protected code is here

import { Route, Router, Routes } from "react-router-dom";
import CreateStudent from "../componants/CreateStudent";
import StudentList from "../componants/StudentList";
import DemoTable from "../componants/DemoTable";
import StudentEdit from "../componants/StudentEdit";
import Login from "../componants/LoginForm";
import NavBar from "../Layouts/NavBar";
import UserProfile from "../componants/UserProfile";
import LandingPage from "../componants/LandingPage";
import AdminDashboard from "../componants/Dashbord/AdminDashboard";
import EventCard from "../componants/Dashbord/EventCard";
import NoticeBord from "../componants/Dashbord/NoticeBord";

import StudentsChart from "../componants/Dashbord/Charts/StudentsChart";
import PrivateRoute from "../utils/PrivateRoute";

function Index() {
  return (
    <Routes>
      <Route
        path="/student-create"
        element={<PrivateRoute element={CreateStudent} />}
      />
      <Route
        path="/student-list"
        element={<PrivateRoute element={StudentList} />}
      />
      <Route
        path="/student/:id/edit"
        element={<PrivateRoute element={StudentEdit} />}
      />
      <Route
        path="/student-demo-table"
        element={<PrivateRoute element={DemoTable} />}
      />
      <Route path="/eventcard" element={<PrivateRoute element={EventCard} />} />
      <Route
        path="/dashboard"
        element={<PrivateRoute element={AdminDashboard} />}
      />

      <Route path="/navbar" element={<PrivateRoute element={NavBar} />} />
      <Route
        path="/myprofile"
        element={<PrivateRoute element={UserProfile} />}
      />
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Index;
