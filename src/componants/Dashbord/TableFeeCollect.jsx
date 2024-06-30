// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function TableFeeCollect() {
//   const [classes, setClasses] = useState([
//     "Nursery",
//     "KG",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "11",
//     "12",
//   ]);
//   const [accounts, setAccounts] = useState(["123456", "234567", "345678"]);
//   const [selectedClass, setSelectedClass] = useState("");
//   const [selectedAccount, setSelectedAccount] = useState("");
//   const [installments] = useState([
//     { id: 1, installment: "Installment 1", class: "1", account: "123456" },
//     { id: 2, installment: "Installment 2", class: "2", account: "123456" },
//     { id: 3, installment: "Installment 3", class: "1", account: "234567" },
//     { id: 4, installment: "Installment 4", class: "2", account: "345678" },
//     { id: 5, installment: "Installment 5", class: "3", account: "123456" },
//     { id: 6, installment: "Installment 6", class: "4", account: "234567" },
//   ]);

//   // UseEffect for fetching classes and accounts when APIs are ready
//   /*
//   useEffect(() => {
//     const fetchClasses = async () => {
//       try {
//         // Your API call for classes
//         const response = await axios.get(`${API_URL}/api/classes`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "X-Academic-Year": academicYr,
//           },
//         });

//         if (Array.isArray(response.data)) {
//           setClasses(response.data);
//         } else {
//           throw new Error("Invalid data format");
//         }
//       } catch (error) {
//         console.error("Error fetching classes, using fallback data:", error);
//       }
//     };

//     const fetchAccounts = async () => {
//       try {
//         // Your API call for accounts
//         const response = await axios.get(`${API_URL}/api/accounts`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "X-Academic-Year": academicYr,
//           },
//         });

//         if (Array.isArray(response.data)) {
//           setAccounts(response.data);
//         } else {
//           throw new Error("Invalid data format");
//         }
//       } catch (error) {
//         console.error("Error fetching accounts, using fallback data:", error);
//       }
//     };

//     fetchClasses();
//     fetchAccounts();
//   }, []);
//   */

//   // Filter installments based on selected class and account
//   const filteredInstallments = installments.filter((installment) => {
//     return (
//       (selectedClass === "" || installment.class === selectedClass) &&
//       (selectedAccount === "" || installment.account === selectedAccount)
//     );
//   });

//   return (
//     <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
//       <div className="header flex justify-between mb-4">
//         <select
//           className="w-48 pl-2 pr-8 text-sm text-gray-700"
//           value={selectedClass}
//           onChange={(e) => setSelectedClass(e.target.value)}
//         >
//           <option value="">Select Class</option>
//           {classes.map((classItem, index) => (
//             <option key={index} value={classItem}>
//               {classItem}
//             </option>
//           ))}
//         </select>
//         <select
//           className="w-48 pl-2 pr-8 text-sm text-gray-700"
//           value={selectedAccount}
//           onChange={(e) => setSelectedAccount(e.target.value)}
//         >
//           <option value="">Select Account</option>
//           {accounts.map((account, index) => (
//             <option key={index} value={account}>
//               {account}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="table-container rounded-lg shadow-md lg:w-full">
//         <div className="row flex flex-row justify-between items-center   bg-gray-200 border-b border-gray-200">
//           <div className="cell font-bold">Installment</div>
//           <div className="cell  font-bold">Account Number</div>
//         </div>
//         <div className="table-body h-40 overflow-y-scroll">
//           {filteredInstallments.map((installment, index) => (
//             <div
//               key={installment.id}
//               className={`row flex justify-between py-4 px-6 border-b border-gray-200 ${
//                 index % 2 === 0 ? "bg-gray-50" : "bg-white"
//               }`}
//             >
//               <div className="cell w-1/2">{installment.installment}</div>
//               <div className="cell w-1/2">{installment.account}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TableFeeCollect;

// final Try UP
import React, { useState, useEffect } from "react";
import axios from "axios";

function ListFinal() {
  const [classes, setClasses] = useState([
    "Nursery",
    "KG",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ]);
  const [accounts, setAccounts] = useState(["123456", "234567", "345678"]);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedAccount, setSelectedAccount] = useState("");
  const [installments] = useState([
    { id: 1, installment: "Installment 1", class: "1", account: "123456" },
    { id: 2, installment: "Installment 2", class: "2", account: "123456" },
    { id: 3, installment: "Installment 3", class: "1", account: "234567" },
    { id: 4, installment: "Installment 4", class: "2", account: "345678" },
    { id: 5, installment: "Installment 5", class: "3", account: "123456" },
    { id: 6, installment: "Installment 6", class: "4", account: "234567" },
  ]);

  // UseEffect for fetching classes and accounts when APIs are ready
  /*
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        // Your API call for classes
        const response = await axios.get(`${API_URL}/api/classes`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "X-Academic-Year": academicYr,
          },
        });

        if (Array.isArray(response.data)) {
          setClasses(response.data);
        } else {
          throw new Error("Invalid data format");
        }
      } catch (error) {
        console.error("Error fetching classes, using fallback data:", error);
      }
    };

    const fetchAccounts = async () => {
      try {
        // Your API call for accounts
        const response = await axios.get(`${API_URL}/api/accounts`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "X-Academic-Year": academicYr,
          },
        });

        if (Array.isArray(response.data)) {
          setAccounts(response.data);
        } else {
          throw new Error("Invalid data format");
        }
      } catch (error) {
        console.error("Error fetching accounts, using fallback data:", error);
      }
    };

    fetchClasses();
    fetchAccounts();
  }, []);
  */

  // Filter installments based on selected class and account
  const filteredInstallments = installments.filter((installment) => {
    return (
      (selectedClass === "" || installment.class === selectedClass) &&
      (selectedAccount === "" || installment.account === selectedAccount)
    );
  });

  return (
    <div className="container mx-auto p-3 pt-6 md:p-6 lg:p-12 h-[18.75rem]">
      <div className="header flex justify-between gap-2 mb-3">
        <select
          className="pl-2 md:pr-5 lg:pr-8 text-sm text-gray-700 font-bold"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="">Select Class</option>
          {classes.map((classItem, index) => (
            <option key={index} value={classItem}>
              {classItem}
            </option>
          ))}
        </select>
        <select
          className="pl-2 pr-8 text-sm text-gray-700 font-bold"
          value={selectedAccount}
          onChange={(e) => setSelectedAccount(e.target.value)}
        >
          <option value="">Select Account</option>
          {accounts.map((account, index) => (
            <option key={index} value={account}>
              {account}
            </option>
          ))}
        </select>
      </div>
      <div className="table-container rounded-lg shadow-md">
        <div className="flex flex-row w-full  justify-between  px-6 text-gray-500 bg-gray-200 border-b border-gray-200">
          <div className="cell  font-bold">Installment</div>
          <div className="cell font-bold">Account Number</div>
        </div>
        <div className="table-body h-52 overflow-y-scroll overflow-x-hidden">
          {filteredInstallments.map((installment, index) => (
            <div
              key={installment.id}
              className={` flex w-full px-6 justify-between py-2 border-b border-gray-200 ${
                index % 2 !== 0 ? "bg-gray-200" : "bg-white"
              }`}
            >
              <div className="cell w-1/2 text-black/80 tracking-wide">
                {installment.installment}
              </div>
              <div className="cell w-1/2 text-center text-black/70 tracking-wide">
                {installment.account}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListFinal;
