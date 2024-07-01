import { useEffect, useState } from "react";
import axios from "axios";
import { IoIosArrowForward } from "react-icons/io";
import NavBar from "../../Layouts/NavBar";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
function StaffBirthdayTabList() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [staffBirthday, setStaffBirthday] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchStaffBirthday = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const academicYr = localStorage.getItem("academicYear");

        if (!token || !academicYr) {
          throw new Error("No authentication token or academic year found");
        }

        const response = await axios.get(`${API_URL}/api/staffbirthdaylist`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "X-Academic-Year": academicYr,
          },
        });

        setStaffBirthday(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStaffBirthday();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {" "}
      <div
        className="  "
        style={{
          height: "100vh",
          background: "   linear-gradient(to bottom, #E91E63, #2196F3)",
        }}
      >
        <NavBar />
        <div className=" mt-6">
          <div className="bg-white w-fit m-auto  box-border sm:overflow-x-scroll   shadow-xl sm:rounded-lg ">
            <div className="p-1 ">
              <h3 className=" flex justify-start items-center gap-1  font-bold  lg:text-xl sm:text-sm text-gray-400  ">
                Staff Birthday List{" "}
                <span>
                  <IoIosArrowForward className="text-lg  text-center" />
                </span>
              </h3>
              <RxCross1
                className="float-end relative -top-7 right-2 text-2xl text-red-600 hover:cursor-pointer hover:bg-red-100"
                onClick={() => {
                  navigate("/dashboard");
                }}
              />
              <hr></hr>
              <div className="overflow-x-auto">
                <div className="min-w-full bg-white rounded-lg overflow-hidden shadow-xs">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr className="bg-gray-200">
                        <th
                          scope="col"
                          className="px-3 py-3  border-b-2 border-gray-200   text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3  border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        >
                          Date of Birth
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3  border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        >
                          Date of Joining
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3  border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        >
                          Gender
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3  border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        >
                          Religion
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3  border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                        >
                          Designation
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {staffBirthday.map((staff) => (
                        <tr
                          key={staff.teacher_id}
                          className="hover:bg-gray-100"
                        >
                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 text-start whitespace-no-wrap">
                              {staff.name}
                            </p>
                          </td>
                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {staff.birthday}
                            </p>
                          </td>
                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {staff.date_of_joining}
                            </p>
                          </td>
                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {staff.sex}
                            </p>
                          </td>
                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {staff.religion}
                            </p>
                          </td>
                          <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {staff.designation}
                            </p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StaffBirthdayTabList;
