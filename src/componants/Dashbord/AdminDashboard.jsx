import NavBar from "../../Layouts/NavBar.jsx";
import DashboardContent from "./DashboardContent.jsx";
// AdminDashbord
const AdminDashboard = () => {
  return (
    <div
      className=" w-screen overflow-x-hidden h-screen"
      style={{
        background: "   linear-gradient(to bottom, #E91E63, #2196F3)",
      }}
    >
      <DashboardContent />
    </div>
  );
};
export default AdminDashboard;
