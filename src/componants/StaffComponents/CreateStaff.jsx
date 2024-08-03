import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
function CreateStaff() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
    name: "",
    birthday: "",
    date_of_joining: "",
    designation: "",
    academic_qual: [],
    professional_qual: "",
    trained: "",
    experience: "",
    sex: "",
    blood_group: "",
    religion: "",
    address: "",
    phone: "",
    email: "",
    aadhar_card_no: "",
    role: "",
    employeeId: "",
    photo: null,
    special_sub: "",
  });
  const [errors, setErrors] = useState({});
  const [photoPreview, setPhotoPreview] = useState(null);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.birthday) newErrors.birthday = "Date of Birth is required";
    if (!formData.date_of_joining)
      newErrors.date_of_joining = "Date of Joining is required";
    if (!formData.sex) newErrors.sex = "sex is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10 digits";
    if (!formData.email) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email address is invalid";
    if (!formData.role) newErrors.role = "Role is required";
    if (!formData.employeeId) newErrors.employeeId = "Employee ID is required";
    if (formData.academic_qual.length === 0)
      newErrors.academic_qual =
        "Please select at least one academic qualification";
    return newErrors;
  };

  const handleChange = (event) => {
    const { name, value, checked } = event.target;

    if (name === "academic_qual") {
      setFormData((prevData) => {
        if (checked) {
          return {
            ...prevData,
            academic_qual: [...prevData.academic_qual, value],
          };
        } else {
          return {
            ...prevData,
            academic_qual: prevData.academic_qual.filter(
              (qualification) => qualification !== value
            ),
          };
        }
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      photo: file,
    }));
    setPhotoPreview(URL.createObjectURL(file));
  };

  const formatDateString = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${year}-${month}-${day}`;
  };
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const validationErrors = validate();
  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //     Object.values(validationErrors).forEach((error) => {
  //       toast.error(error);
  //     });
  //     return;
  //   }
  //   const formattedFormData = {
  //     ...formData,
  //     birthday: formatDateString(formData.birthday),
  //     date_of_joining: formatDateString(formData.date_of_joining),
  //   };
  //   // api calling
  //   try {
  //     const token = localStorage.getItem("authToken");
  //     if (!token) {
  //       throw new Error("No authentication token is found");
  //     }
  //     console.log("formata", formattedFormData);
  //     const response = await axios.post(
  //       `${API_URL}/api/store_staff`,
  //       formattedFormData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     console.log("Response:", response.data);

  //     if (response.status === 201) {
  //       toast.success("Teacher created successfully!");
  //       setTimeout(() => {
  //         navigate("/StaffList");
  //       }, 3000); // 3000 milliseconds = 3 seconds
  //       // navigate("/StaffList");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error.message);
  //     toast.error("An error occurred while creating the teacher.");
  //     console.log("the erro", error.response.data);
  //     toast.error(error.response?.data || error.message);
  //   }
  //   // // Format dates before submitting
  //   // const formattedFormData = {
  //   //   ...formData,
  //   //   birthday: formatDateString(formData.birthday),
  //   //   date_of_joining: formatDateString(formData.date_of_joining),
  //   // };
  //   // console.log(formattedFormData);
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      Object.values(validationErrors).forEach((error) => {
        toast.error(error);
      });
      return;
    }
    const formattedFormData = {
      ...formData,
      birthday: formatDateString(formData.birthday),
      date_of_joining: formatDateString(formData.date_of_joining),
    };
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        throw new Error("No authentication token is found");
      }
      const response = await axios.post(
        `${API_URL}/api/store_staff`,
        formattedFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response:", response.data);

      if (response.status === 201) {
        toast.success("Teacher created successfully!");
        setTimeout(() => {
          navigate("/StaffList");
        }, 3000);
      }
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("An error occurred while creating the teacher.");

      if (error.response && error.response.data && error.response.data.errors) {
        // setErrors(error.response.data.errors);
        setErrors(error.response.data.errors || {});
      } else {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="container mx-auto p-4 ">
      <ToastContainer />
      <div className="card p-4 rounded-md ">
        <div className=" card-header mb-4 flex justify-between items-center ">
          <h5 className="text-gray-700 mt-1 text-md lg:text-lg">
            Create a New Staff
          </h5>

          <RxCross1
            className="float-end relative right-2 text-xl text-red-600 hover:cursor-pointer hover:bg-red-100"
            onClick={() => {
              setErrors({});
              navigate("/StaffList");
            }}
          />
        </div>
        <p className="  md:absolute md:right-10  md:top-[10%]   text-gray-500 ">
          <span className="text-red-500">*</span>indicates mandatory information
        </p>
        <form
          onSubmit={handleSubmit}
          className="  md:mx-5 overflow-x-hidden shadow-md p-2 bg-gray-50"
        >
          <div className=" flex flex-col gap-4 md:grid  md:grid-cols-3 md:gap-x-14 md:mx-10 gap-y-1">
            <div className=" mx-auto      ">
              <label htmlFor="photo" className="block font-bold  text-xs mb-2">
                Photo
                {photoPreview ? (
                  <img
                    src={photoPreview}
                    alt="Photo Preview"
                    className="   h-20 w-20 rounded-[50%] mx-auto border-1  border-black object-cover"
                  />
                ) : (
                  <FaUserCircle className="mt-2 h-20 w-20 object-cover mx-auto text-gray-300" />
                )}
              </label>
              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                onChange={handleFileChange}
                className="input-field text-xs box-border mt-2 bg-black text-white  "
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="academic_qual"
                className="block font-bold  text-xs mb-2"
              >
                Academic Qualification <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap ">
                {[
                  "Hsc",
                  "DCE",
                  "B.A",
                  "B.Com",
                  "B.Sc",
                  "BCS",
                  "BCA",
                  "B.LIS",
                  "BPharm",
                  "BE",
                  "B.Music n Dance",
                  "M.A",
                  "MSE",
                  "M.Com",
                  "M.Sc",
                  "MCA",
                  "M.LIS",
                  "M.Phil",
                  "MBA",
                  "PGDBM",
                ].map((qualification) => (
                  <label
                    key={qualification}
                    className="flex items-center mr-4 text-sm font-md"
                  >
                    <input
                      type="checkbox"
                      name="academic_qual"
                      value={qualification}
                      checked={formData.academic_qual.includes(qualification)}
                      onChange={handleChange}
                      className="mr-1 "
                    />
                    {qualification}
                  </label>
                ))}
              </div>
              {errors.academic_qual && (
                <span className="text-red-500 text-xs">
                  {errors.academic_qual}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="address"
                className="block font-bold  text-xs mb-2"
              >
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="input-field resize block w-full border border-gray-300 rounded-md py-1 px-3 bg-white shadow-inner"
                rows="4"
                required
              />
            </div>

            <div className=" ">
              <label
                htmlFor="staffName"
                className="block font-bold  text-xs mb-2"
              >
                Staff Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="staffName"
                name="name"
                pattern="^[^\d].*"
                title="Name should not start with a number"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="block  border w-full border-gray-300 rounded-md py-1 px-3  bg-white shadow-inner"
              />
            </div>

            <div>
              <label
                htmlFor="trained"
                className="block font-bold  text-xs mb-2"
              >
                Training Status <span className="text-red-500">*</span>
              </label>
              <select
                id="trained"
                name="trained"
                value={formData.trained}
                onChange={handleChange}
                required
                title="Please enter Training Status "
                className="input-field block w-full border border-gray-300 rounded-md py-1 px-3 bg-white shadow-inner"
              >
                <option className="bg-gray-300" value="">
                  Select
                </option>{" "}
                <option value="trained-PGT">trained-PGT</option>
                <option value="trained-TGT">trained-TGT</option>{" "}
                <option value="trained-PRT">trained-PRT</option>
                <option value="NTT">NTT</option>
                <option value="ECCE">ECCE</option>
                <option value="Untrained">Untrained</option>
                <option value="NA">NA</option>
                {/* Add training status options here */}
              </select>
            </div>
            <div>
              <label htmlFor="phone" className="block font-bold  text-xs mb-2">
                Phone <span className="text-red-500">*</span>
              </label>
              <div className="flex ">
                <span className=" rounded-l-md pt-1 bg-gray-200 text-black font-bold px-2 pointer-events-none ml-1">
                  +91
                </span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="\d{10}"
                  maxLength="10"
                  title="Please enter only 10 digit number "
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field block w-full border border-gray-300 outline-none  rounded-r-md py-1 px-3 bg-white shadow-inner "
                  required
                />
                {errors.phone && (
                  <span className="error">{errors.phone[0]}</span>
                )}
                {errors.phone && (
                  <span className="text-red-500 text-xs">{errors.phone}</span>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="birthday"
                className="block font-bold text-xs mb-2"
              >
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="birthday"
                name="birthday"
                value={formData.birthday}
                onChange={handleChange}
                className="block border w-full border-gray-300 rounded-md py-1 px-3 bg-white shadow-inner"
                required
              />
              {errors.birthday && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.birthday}
                </div>
              )}
            </div>

            {/* <div>
              <label
                htmlFor=" birthday"
                className="block font-bold  text-xs mb-2"
              >
                Date Of Birth <span className="text-red-500">*</span>
              </label>
              <input
                // type="date"
                type="date"
                id=" birthday"
                name=" birthday"
                value={formData.birthday}
                // placeholder="dd/MM/yyyy"
                onChange={handleChange}
                className="input-field block w-full border border-gray-300 rounded-md py-1 px-3 bg-white shadow-inner"
                // required
              />
              {errors.birthday && (
                <span className="text-red-500 text-xs">{errors.birthday}</span>
              )}
            </div> */}
            <div>
              <label
                htmlFor="experience"
                className="block font-bold  text-xs mb-2"
              >
                experience <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                maxLength={3}
                id="experience"
                name="experience"
                value={formData.experience}
                placeholder="In year"
                onChange={handleChange}
                required
                title="Only enter digits in year like 1 or 5"
                className="input-field block w-full border border-gray-300 rounded-md py-1 px-3 bg-white shadow-inner"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-bold  text-xs mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field block w-full border border-gray-300 rounded-md py-1 px-3 bg-white shadow-inner"
                required
                placeholder="example@email.com"
                title="Please enter a valid email address that ends with @gmail.com"
              />

              {errors.email && (
                <span className="error text-red-500">{errors.email[0]}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="date_of_joining"
                className="block font-bold  text-xs mb-2"
              >
                Date Of Joining <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="date_of_joining"
                name="date_of_joining"
                value={formData.date_of_joining}
                onChange={handleChange}
                className="input-field block w-full border border-gray-300 rounded-md py-1 px-3 bg-white shadow-inner"
                required
              />
              {errors.date_of_joining && (
                <span className="text-red-500 text-xs">
                  {errors.date_of_joining}
                </span>
              )}
            </div>
            <div className="">
              <label htmlFor="sex" className="block font-bold  text-xs mb-2">
                Gender <span className="text-red-500">*</span>
              </label>
              <select
                id="sex"
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                className="input-field block w-full border border-gray-300 rounded-md py-1 px-3 bg-white shadow-inner"
                required
              >
                <option className=" bg-gray-300" value="">
                  Select
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.sex && (
                <span className="text-red-500 text-xs">{errors.sex}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="aadhar_card_no"
                className="block font-bold  text-xs mb-2"
              >
                Aadhaar Card No.
              </label>
              <input
                type="tel"
                maxLength={12}
                id="aadhar_card_no"
                name="aadhar_card_no"
                value={formData.aadhar_card_no}
                pattern="\d{12}"
                title="Aadhaar Card Number must be exactly 12 digits Number"
                onChange={handleChange}
                className="input-field block w-full border border-gray-300 rounded-md py-1 px-3 bg-white shadow-inner"
              />{" "}
              {errors.aadhar_card_no && (
                <span className="text-red-500 text-xs">
                  {errors.aadhar_card_no[0]}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="designation"
                className="block font-bold  text-xs mb-2"
              >
                designation
              </label>
              <input
                type="text"
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                // required
                className="input-field block w-full border border-gray-300 rounded-md py-1 px-3 bg-white shadow-inner"
              />
            </div>
            <div>
              <label
                htmlFor="blood_group"
                className="block font-bold  text-xs mb-2"
              >
                Blood Group
              </label>
              <select
                id="blood_group"
                name="blood_group"
                value={formData.blood_group}
                onChange={handleChange}
                className="input-field block w-full border border-gray-300 rounded-md py-1 px-3 bg-white shadow-inner"
              >
                <option className="bg-gray-300" value="">
                  Select
                </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
            <div>
              <label htmlFor="role" className="block font-bold  text-xs mb-2">
                Role <span className="text-red-500">*</span>
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="input-field block w-full border border-gray-300 rounded-md py-1 px-3 bg-white shadow-inner"
                required
              >
                <option className="bg-gray-300" value="">
                  Select
                </option>
                <option value="A">Admin</option>
                <option value="B">Bus</option>
                <option value="E">Data Entry</option>
                <option value="F">Finance</option>
                <option value="L">Librarian</option>
                <option value="M">Management</option>
                <option value="N">Printer</option>
                <option value="O">owner</option>
                <option value="R">Support</option>
                <option value="T">Teacher</option>
                <option value="X">Support Staff</option>
                <option value="Y">Security</option>
              </select>
              {errors.role && (
                <span className="text-red-500 text-xs">{errors.role}</span>
              )}
            </div>
            <div>
              <div>
                <label
                  htmlFor="professional_qual"
                  className="block font-bold  text-xs mb-2"
                >
                  Professional Qualification
                </label>
                <select
                  id="professional_qual"
                  name="professional_qual"
                  value={formData.professional_qual}
                  onChange={handleChange}
                  className="input-field block w-full border border-gray-300 rounded-md py-1 px-3 bg-white shadow-inner"
                >
                  <option className="bg-gray-300" value="">
                    Select
                  </option>
                  <option value="D.Ed">D.Ed</option>
                  <option value="B.Ed">B.Ed</option>
                  <option value="B.P.Ed">B.P.Ed</option>
                  <option value="M.P.Ed">M.P.Ed</option>
                  <option value="M.Ed">M.Ed</option>
                  <option value="NA">NA</option>
                  {/* Add professional qualification options here */}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="religion"
                className="block font-bold  text-xs mb-2"
              >
                Religion
              </label>
              <input
                type="text"
                id="religion"
                name="religion"
                pattern="^[^\d].*"
                title="Religion should not start with a number"
                required
                placeholder="Christian"
                value={formData.religion}
                onChange={handleChange}
                className="input-field block w-full border border-gray-300 rounded-md py-1 px-3 bg-white shadow-inner"
              />
            </div>
            <div>
              <label
                htmlFor="employeeId"
                className="block font-bold  text-xs mb-2"
              >
                Employee ID <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                maxLength={5}
                id="employeeId"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                className="input-field block w-full border border-gray-300 rounded-md py-1 px-3 bg-white shadow-inner"
                required
              />
              {errors.employeeId && (
                <span className="text-red-500 text-xs">
                  {errors.employeeId}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="special_sub"
                className="block font-bold  text-xs mb-2"
              >
                Special Subject
              </label>
              <input
                type="text"
                id="special_sub"
                name="special_sub"
                value={formData.special_sub}
                onChange={handleChange}
                placeholder="Special Subject for D.Ed/B.Ed"
                className="input-field block w-full border border-gray-300 rounded-md py-1 px-3 bg-white shadow-inner"
              />
            </div>

            <div className="col-span-3  text-right">
              <button
                type="submit"
                style={{ backgroundColor: "#2196F3" }}
                className=" text-white font-bold py-1 border-1 border-blue-500 px-4 rounded"
              >
                Create Staff
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateStaff;
