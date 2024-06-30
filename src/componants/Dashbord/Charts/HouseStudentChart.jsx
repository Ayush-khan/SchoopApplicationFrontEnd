// import React, { useState, useEffect } from "react";
// import { PieChart, Pie, ResponsiveContainer } from "recharts";
// import axios from "axios";

// // Dummy data for sections based on the selected class
// const dummyData = {
//   class1: {
//     "Section-A": [
//       { name: "House A", value: 100 },
//       { name: "House B", value: 80 },
//       { name: "House C", value: 50 },
//       { name: "House D", value: 70 },
//     ],
//     "Section-B": [
//       { name: "House A", value: 90 },
//       { name: "House B", value: 60 },
//       { name: "House C", value: 50 },
//       { name: "House D", value: 40 },
//     ],
//     "Section-C": [
//       { name: "House A", value: 85 },
//       { name: "House B", value: 75 },
//       { name: "House C", value: 95 },
//       { name: "House D", value: 100 },
//     ],
//     "Section-D": [
//       { name: "House A", value: 70 },
//       { name: "House B", value: 80 },
//       { name: "House C", value: 60 },
//       { name: "House D", value: 50 },
//     ],
//   },
//   // More classes can be added here
// };

// // Simulated API call to fetch data for the selected class
// const fetchClassData = (className) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(dummyData[className] || {});
//     }, 1000);
//   });
// };

// const HouseStudentChart = () => {
//   const [selectedClass, setSelectedClass] = useState("class1");
//   const [sectionsData, setSectionsData] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError("");

//       try {
//         // Simulate API call with dummy data
//         const data = await fetchClassData(selectedClass);
//         setSectionsData(data);

//         // Uncomment and modify the following block when API is available
//         /*
//         const token = localStorage.getItem("authToken");
//         const academicYr = localStorage.getItem("academicYear");

//         if (!token || !academicYr) {
//           throw new Error("No authentication token or academic year found");
//         }

//         const response = await axios.get(`${API_URL}/api/data`, {
//           params: { class: selectedClass },
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "X-Academic-Year": academicYr,
//           },
//         });

//         setSectionsData(response.data);
//         */
//       } catch (error) {
//         setError("Error fetching class data");
//         console.error("Error fetching class data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [selectedClass]);

//   const renderPieChart = (section) => (
//     <ResponsiveContainer width={227} height={118}>
//       <PieChart>
//         <Pie
//           dataKey="value"
//           startAngle={180}
//           endAngle={0}
//           data={sectionsData[section]}
//           cx="48%"
//           cy="100%"
//           outerRadius={80}
//           fill="#8884d8"
//           label
//         />
//       </PieChart>
//     </ResponsiveContainer>
//   );

//   return (
//     <div className="flex flex-col ">
//       <div className=" flex flex-row justify-between items-center bg-gray-200">
//         <p className="lg:text-lg sm:text-xs  font-bold text-gray-500 pl-2  ">
//           Charts-House's{" "}
//         </p>
//         <div className="  w-64 sm:w-1/2 flex flex-row justify-end items-center  gap-x-2 ">
//           <label
//             htmlFor="class-select"
//             className=" text-sm sm:text-xs  font-semibold text-gray-500 "
//           >
//             Select Class:
//           </label>
//           <select
//             id="class-select"
//             value={selectedClass}
//             onChange={(e) => setSelectedClass(e.target.value)}
//             className="block h-fit  px-2  bg-gray-100 border border-gray-950 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           >
//             {Array.from({ length: 12 }, (_, i) => i + 1).map((cls) => (
//               <option key={cls} value={`class${cls}`}>
//                 Class {cls}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//       {error && <p className="text-red-500">{error}</p>}
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className=" flex rounded-lg  ">
//           {["Section-A", "Section-B", "Section-C", "Section-D"].map(
//             (section) => (
//               <div
//                 key={section}
//                 className=" flex flex-col justify-center items-center gap-y-3  w-full  lg:w-1/4 px-2 mb-4 "
//                 style={{
//                   border: "1px solid black",
//                   alignItems: "center",
//                   // width: "50%",
//                 }}
//               >
//                 {section}

//                 {renderPieChart(section)}
//               </div>
//             )
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default HouseStudentChart;

// second try
import React, { useState, useEffect } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
import axios from "axios";
import styles from "../Charts/StudentStyle.module.css";

// Dummy data for sections based on the selected class
const dummyData = {
  class1: {
    "Section-A": [
      { name: "House A", value: 100 },
      { name: "House B", value: 80 },
      { name: "House C", value: 50 },
      { name: "House D", value: 70 },
    ],
    "Section-B": [
      { name: "House A", value: 90 },
      { name: "House B", value: 60 },
      { name: "House C", value: 50 },
      { name: "House D", value: 40 },
    ],
    "Section-C": [
      { name: "House A", value: 85 },
      { name: "House B", value: 75 },
      { name: "House C", value: 95 },
      { name: "House D", value: 100 },
    ],
    "Section-D": [
      { name: "House A", value: 70 },
      { name: "House B", value: 80 },
      { name: "House C", value: 60 },
      { name: "House D", value: 50 },
    ],
  },
  // More classes can be added here
};

// Simulated API call to fetch data for the selected class
const fetchClassData = (className) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyData[className] || {});
    }, 1000);
  });
};

const COLORS = ["#00FFFF", "#A287F3", "#34D399", "#EE82EE"]; // Red, Yellow, Green, Blue

const HouseStudentChart = () => {
  const [selectedClass, setSelectedClass] = useState("class1");
  const [sectionsData, setSectionsData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {
        // Simulate API call with dummy data
        const data = await fetchClassData(selectedClass);
        setSectionsData(data);

        // Uncomment and modify the following block when API is available
        /*
        const token = localStorage.getItem("authToken");
        const academicYr = localStorage.getItem("academicYear");

        if (!token || !academicYr) {
          throw new Error("No authentication token or academic year found");
        }

        const response = await axios.get(`${API_URL}/api/data`, {
          params: { class: selectedClass },
          headers: {
            Authorization: `Bearer ${token}`,
            "X-Academic-Year": academicYr,
          },
        });

        setSectionsData(response.data);
        */
      } catch (error) {
        setError("Error fetching class data");
        console.error("Error fetching class data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedClass]);

  const renderPieChart = (section) => (
    <ResponsiveContainer width={227} height={118}>
      <PieChart>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={sectionsData[section]}
          cx="48%"
          cy="100%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {sectionsData[section]?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );

  return (
    // <div className="studenChart flex flex-col w-full">
    <div className={`${styles.studenChart} flex flex-col w-full`}>
      <div className="flex flex-row justify-between items-center bg-gray-200 p-1">
        <p className="lg:text-lg sm:text-xs font-bold text-gray-500 pl-2">
          Charts-House's
        </p>
        <div className="w-64 sm:w-1/2 flex flex-row justify-end items-center gap-x-2">
          <label
            htmlFor="class-select"
            className="text-sm sm:text-xs font-semibold text-gray-500"
          >
            Select Class:
          </label>
          <select
            id="class-select"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="block h-fit px-2 bg-gray-100 border border-gray-950 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {Array.from({ length: 12 }, (_, i) => i + 1).map((cls) => (
              <option key={cls} value={`class${cls}`}>
                Class {cls}
              </option>
            ))}
          </select>
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        // <div className="flex rounded-lg overflow-x-scroll w-full">
        <div className={`flex rounded-lg ${styles.customScrollbar} w-full`}>
          {["Section-A", "Section-B", "Section-C", "Section-D"].map(
            (section) => (
              <div
                key={section}
                className="flex flex-col justify-center items-center gap-y-2 w-full px-4 "
                style={{
                  // border: "1px solid black",
                  alignItems: "center",
                }}
              >
                <p className="text-gray-400 font-bold mb-0 pb-0">{section}</p>
                {renderPieChart(section)}
                <ul className="mt-1 list-disc grid grid-cols-2 gap-x-8 mr-6  text-center">
                  <li className="text-red-500">House-A</li>
                  <li className="text-yellow-500">House B</li>
                  <li className="text-green-500">House C</li>
                  <li className="text-blue-500">House D</li>
                </ul>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default HouseStudentChart;
