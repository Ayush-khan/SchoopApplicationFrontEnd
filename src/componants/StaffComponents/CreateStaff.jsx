import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function CreateStaff() {
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    dateOfJoining: "",
    designation: "",
    academicQualification: [],
    professionalQualification: "",
    trainingStatus: "",
    experience: "",
    gender: "",
    bloodGroup: "",
    religion: "",
    address: "",
    phone: "",
    email: "",
    aadhaarCardNo: "",
    role: "",
    employeeId: "",
    photo: null,
    specialSubject: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value, checked } = event.target;

    if (name === "academicQualification") {
      setFormData((prevData) => {
        if (checked) {
          return {
            ...prevData,
            academicQualification: [...prevData.academicQualification, value],
          };
        } else {
          return {
            ...prevData,
            academicQualification: prevData.academicQualification.filter(
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
    setFormData((prevState) => ({
      ...prevState,
      photo: event.target.files[0],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mx-auto p-4 mt-4 bg-white">
      <div className="card-header flex justify-between items-center">
        <h5 className="text-gray-700 mt-1  text-md lg:text-lg">
          Staff Registration Form
        </h5>

        <RxCross1
          className="float-end relative  right-2 text-xl text-red-600 hover:cursor-pointer hover:bg-red-100"
          onClick={() => {
            navigate("/StaffList");
          }}
        />
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="photo" className="block text-sm font-bold mb-2">
            Photo
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleFileChange}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="staffName" className="block text-sm font-bold mb-2">
            Staff's Name
          </label>
          <input
            type="text"
            id="staffName"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth" className="block text-sm font-bold mb-2">
            Date Of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label
            htmlFor="dateOfJoining"
            className="block text-sm font-bold mb-2"
          >
            Date Of Joining
          </label>
          <input
            type="date"
            id="dateOfJoining"
            name="dateOfJoining"
            value={formData.dateOfJoining}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="designation" className="block text-sm font-bold mb-2">
            Designation
          </label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="gender" className="block text-sm font-bold mb-2">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="input-field"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="bloodGroup" className="block text-sm font-bold mb-2">
            Blood Group
          </label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="input-field"
          >
            <option value="">Select</option>
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
          <label htmlFor="religion" className="block text-sm font-bold mb-2">
            Religion
          </label>
          <input
            type="text"
            id="religion"
            name="religion"
            value={formData.religion}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-bold mb-2">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="input-field resize-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-bold mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label
            htmlFor="aadhaarCardNo"
            className="block text-sm font-bold mb-2"
          >
            Aadhaar Card No.
          </label>
          <input
            type="text"
            id="aadhaarCardNo"
            name="aadhaarCardNo"
            value={formData.aadhaarCardNo}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-bold mb-2">
            Role
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="input-field"
          >
            <option value="">Select</option>
            <option value="teacher">Teacher</option>
            <option value="staff">Staff</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div>
          <label htmlFor="employeeId" className="block text-sm font-bold mb-2">
            Employee ID
          </label>
          <input
            type="text"
            id="employeeId"
            name="employeeId"
            value={formData.employeeId}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label
            htmlFor="academicQualification"
            className="block text-sm font-bold mb-2"
          >
            Academic Qualification
          </label>
          <div className="flex flex-wrap">
            <label className="checkbox-container">
              <input
                type="checkbox"
                id="hsc"
                name="academicQualification"
                value="HSC"
                checked={formData.academicQualification.includes("HSC")}
                onChange={handleChange}
              />
              HSC
            </label>
            <input
              type="checkbox"
              id="dce"
              name="academicQualification"
              value="DCE"
              checked={formData.academicQualification.includes("DCE")}
              onChange={handleChange}
            />
            <label htmlFor="dce" className="ml-3 text-gray-700 text-sm">
              DCE
            </label>
            <input
              type="checkbox"
              id="ba"
              name="academicQualification"
              value="BA"
              checked={formData.academicQualification.includes("BA")}
              onChange={handleChange}
            />
            <label htmlFor="ba" className="ml-3 text-gray-700 text-sm">
              BA
            </label>
            <input
              type="checkbox"
              id="bcom"
              name="academicQualification"
              value="BCom"
              checked={formData.academicQualification.includes("BCom")}
              onChange={handleChange}
            />
            <label htmlFor="bcom" className="ml-3 text-gray-700 text-sm">
              B.Com
            </label>
            <input
              type="checkbox"
              id="bsc"
              name="academicQualification"
              value="BSc"
              checked={formData.academicQualification.includes("BSc")}
              onChange={handleChange}
            />
            <label htmlFor="bsc" className="ml-3 text-gray-700 text-sm">
              B.Sc
            </label>
            <input
              type="checkbox"
              id="bcs"
              name="academicQualification"
              value="BCS"
              checked={formData.academicQualification.includes("BCS")}
              onChange={handleChange}
            />
            <label htmlFor="bcs" className="ml-3 text-gray-700 text-sm">
              BCS
            </label>
            <input
              type="checkbox"
              id="bca"
              name="academicQualification"
              value="BCA"
              checked={formData.academicQualification.includes("BCA")}
              onChange={handleChange}
            />
            <label htmlFor="bca" className="ml-3 text-gray-700 text-sm">
              BCA
            </label>
            <input
              type="checkbox"
              id="blis"
              name="academicQualification"
              value="BLIS"
              checked={formData.academicQualification.includes("BLIS")}
              onChange={handleChange}
            />
            <label htmlFor="blis" className="ml-3 text-gray-700 text-sm">
              B.LIS
            </label>
            <input
              type="checkbox"
              id="bpharm"
              name="academicQualification"
              value="BPharm"
              checked={formData.academicQualification.includes("BPharm")}
              onChange={handleChange}
            />
            <label htmlFor="bpharm" className="ml-3 text-gray-700 text-sm">
              BPharm
            </label>
            <input
              type="checkbox"
              id="be"
              name="academicQualification"
              value="BE"
              checked={formData.academicQualification.includes("BE")}
              onChange={handleChange}
            />
            <label htmlFor="be" className="ml-3 text-gray-700 text-sm">
              BE
            </label>
            <input
              type="checkbox"
              id="bmusic"
              name="academicQualification"
              value="B.Music"
              checked={formData.academicQualification.includes("B.Music")}
              onChange={handleChange}
            />
            <label htmlFor="bmusic" className="ml-3 text-gray-700 text-sm">
              B.Music
            </label>
            <input
              type="checkbox"
              id="dance"
              name="academicQualification"
              value="Dance"
              checked={formData.academicQualification.includes("Dance")}
              onChange={handleChange}
            />
            <label htmlFor="dance" className="ml-3 text-gray-700 text-sm">
              Dance
            </label>
            <input
              type="checkbox"
              id="mse"
              name="academicQualification"
              value="MSE"
              checked={formData.academicQualification.includes("MSE")}
              onChange={handleChange}
            />
            <label htmlFor="mse" className="ml-3 text-gray-700 text-sm">
              MSE
            </label>
            <input
              type="checkbox"
              id="mcom"
              name="academicQualification"
              value="M.Com"
              checked={formData.academicQualification.includes("M.Com")}
              onChange={handleChange}
            />
            <label htmlFor="mcom" className="ml-3 text-gray-700 text-sm">
              M.Com
            </label>
            <input
              type="checkbox"
              id="ma"
              name="academicQualification"
              value="MA"
              checked={formData.academicQualification.includes("MA")}
              onChange={handleChange}
            />
            <label htmlFor="ma" className="ml-3 text-gray-700 text-sm">
              MA
            </label>
            <input
              type="checkbox"
              id="mca"
              name="academicQualification"
              value="MCA"
              checked={formData.academicQualification.includes("MCA")}
              onChange={handleChange}
            />
            <label htmlFor="mca" className="ml-3 text-gray-700 text-sm">
              MCA
            </label>
            <input
              type="checkbox"
              id="mlis"
              name="academicQualification"
              value="MLIS"
              checked={formData.academicQualification.includes("MLIS")}
              onChange={handleChange}
            />
            <label htmlFor="mlis" className="ml-3 text-gray-700 text-sm">
              M.LIS
            </label>
            <input
              type="checkbox"
              id="msc"
              name="academicQualification"
              value="MSc"
              checked={formData.academicQualification.includes("MSc")}
              onChange={handleChange}
            />
            <label htmlFor="msc" className="ml-3 text-gray-700 text-sm">
              M.Sc
            </label>
            <input
              type="checkbox"
              id="mba"
              name="academicQualification"
              value="MBA"
              checked={formData.academicQualification.includes("MBA")}
              onChange={handleChange}
            />
            <label htmlFor="mba" className="ml-3 text-gray-700 text-sm">
              MBA
            </label>
            <input
              type="checkbox"
              id="pgdbm"
              name="academicQualification"
              value="PGDBM"
              checked={formData.academicQualification.includes("PGDBM")}
              onChange={handleChange}
            />
            <label htmlFor="pgdbm" className="ml-3 text-gray-700 text-sm">
              PGDBM
            </label>
            <input
              type="checkbox"
              id="mphil"
              name="academicQualification"
              value="M.Phil"
              checked={formData.academicQualification.includes("M.Phil")}
              onChange={handleChange}
            />
            <label htmlFor="mphil" className="ml-3 text-gray-700 text-sm">
              M.Phil
            </label>
            {/* Add other checkboxes similarly here now*/}
          </div>
        </div>
        <div>
          <label
            htmlFor="professionalQualification"
            className="block text-sm font-bold mb-2"
          >
            Professional Qualification
          </label>
          <select
            id="professionalQualification"
            name="professionalQualification"
            value={formData.professionalQualification}
            onChange={handleChange}
            className="input-field"
          >
            <option value="">Select</option>
            <option value="D.Ed">D.Ed</option>
            <option value="B.Ed">B.Ed</option>
            <option value="B.P.Ed">B.P.Ed</option>
            <option value="M.P.Ed">M.P.Ed</option>
            <option value="M.Ed">M.Ed</option>
            <option value="NA">NA</option>
            {/* Add professional qualification options here */}
          </select>
        </div>
        <div>
          <label
            htmlFor="trainingStatus"
            className="block text-sm font-bold mb-2"
          >
            Training Status
          </label>
          <select
            id="trainingStatus"
            name="trainingStatus"
            value={formData.trainingStatus}
            onChange={handleChange}
            className="input-field"
          >
            <option value="">Select</option>
            <option value="Trained-PGT">Trained-PGT</option>
            <option value="Trained-TGT">Trained-TGT</option>
            <option value="Trained-PRT">Trained-PRT</option>
            <option value="NTT">NTT</option>
            <option value="ECCE">ECCE</option>
            <option value="Untrained">Untrained</option>
            <option value="NA">NA</option>
            {/* Add training status options here */}
          </select>
        </div>
        <div>
          <label htmlFor="experience" className="block text-sm font-bold mb-2">
            Experience
          </label>
          <input
            type="number"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="input-field"
          />
          <span className="text-sm text-gray-600">in years</span>
        </div>
        <div>
          <label
            htmlFor="specialSubject"
            className="block text-sm font-bold mb-2"
          >
            Special Subject for D.Ed/B.Ed
          </label>
          <input
            type="text"
            id="specialSubject"
            name="specialSubject"
            value={formData.specialSubject}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="col-span-2">
          <button type="submit" className="btn btn-primary mt-4">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateStaff;
