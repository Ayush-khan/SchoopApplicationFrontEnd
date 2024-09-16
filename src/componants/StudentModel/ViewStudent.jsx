import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageCropper from "../common/ImageUploadAndCrop";
import { FaUserGroup } from "react-icons/fa6";

function ViewStudent() {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const location = useLocation();
  const { student } = location.state || {};
  const [classes, setClasses] = useState([]);
  const [divisions, setDivisions] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [classError, setClassError] = useState("");
  const [divisionError, setDivisionError] = useState("");

  // Fetch class names
  useEffect(() => {
    const fetchClassNames = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(`${API_URL}/api/getClassList`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setClasses(response.data);
        console.log("claases are", classes);
      } catch (error) {
        toast.error("Error fetching class names");
      }
    };

    fetchClassNames();
  }, [API_URL]);

  // Handle class change and fetch divisions
  const handleClassChange = async (e) => {
    const selectedClassId = e.target.value;
    setSelectedClass(selectedClassId);
    setFormData((prev) => ({
      ...prev,
      class_id: selectedClassId,
      section_id: "",
    }));
    setSelectedDivision(""); // Clear division when class changes

    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get(
        `${API_URL}/api/get_divisions/${selectedClassId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setDivisions(response.data.divisions); // Update divisions based on selected class
    } catch (error) {
      toast.error("Error fetching divisions");
    }
  };

  // Handle division change
  const handleDivisionChange = (e) => {
    const selectedDivisionId = e.target.value;
    setSelectedDivision(selectedDivisionId);
    setFormData((prev) => ({ ...prev, section_id: selectedDivisionId }));
  };

  const [formData, setFormData] = useState({
    first_name: "",
    mid_name: "",
    last_name: "",
    house: "",
    student_name: "",
    dob: "",
    admission_date: "",
    stud_id_no: "",
    stu_aadhaar_no: "",
    gender: "",
    mother_tongue: "",
    birth_place: "",
    admission_class: " ",
    city: " ",
    state: "",
    roll_no: "",
    class_id: "",
    section_id: "",
    religion: "",
    caste: "",
    subcaste: "",
    vehicle_no: "",
    emergency_name: " ",
    emergency_contact: "",
    emergency_add: "",
    height: "",
    weight: "",
    allergies: "",
    nationality: "",
    pincode: "",
    image_name: "",
    // Parent information
    father_name: "  .",
    father_occupation: "",
    f_office_add: "  ",
    f_office_tel: "",
    f_mobile: "",
    f_email: "",
    father_adhar_card: "",
    mother_name: " ",
    mother_occupation: "",
    m_office_add: " ",
    m_office_tel: "",
    m_mobile: "",
    m_emailid: "",
    mother_adhar_card: "",

    // Preferences
    SetToReceiveSMS: "",
    SetEmailIDAsUsername: "",

    // Base64 Image (optional)
    student_image: "",
  });

  const [errors, setErrors] = useState({});
  const [photoPreview, setPhotoPreview] = useState(null);
  const [backendErrors, setBackendErrors] = useState({});

  console.log("employeeID", student.employeeId);

  const [fatherMobileSelected, setFatherMobileSelected] = useState({
    setUsername: false,
    receiveSms: false,
  });

  const [motherMobileSelected, setMotherMobileSelected] = useState({
    setUsername: false,
    receiveSms: false,
  });

  useEffect(() => {
    if (student) {
      setFormData({
        first_name: student.first_name || " ",
        mid_name: student.mid_name || "",
        last_name: student.last_name || "",
        house: student.house || "",
        student_name: student.student_name || "",
        dob: student.dob || "",
        admission_date: student.admission_date || "",
        stud_id_no: student.stud_id_no || "",
        stu_aadhaar_no: student.stu_aadhaar_no || "",
        gender: student.gender || "",
        mother_tongue: student.mother_tongue || "",
        birth_place: student.birth_place || "",
        admission_class: student.admission_class || " ",
        city: student.city || " ",
        state: student.state || "",
        roll_no: student.roll_no || "",
        class_id: student.class_id || "",
        section_id: student.section_id || "",
        religion: student.religion || "",
        caste: student.caste || "",
        subcaste: student.subcaste || "",
        vehicle_no: student.vehicle_no || "",
        emergency_name: student.emergency_name || " ",
        emergency_contact: student.emergency_contact || "",
        emergency_add: student.emergency_add || "",
        height: student.height || "",
        weight: student.weight || "",
        allergies: student.allergies || "",
        nationality: student.nationality || "",
        pincode: student.pincode || "",
        image_name: student.image_name || "",
        // Parent information
        father_name: student.father_name || " ",
        father_occupation: student.father_occupation || "",
        f_office_add: student.f_office_add || "  ",
        f_office_tel: student.f_office_tel || "",
        f_mobile: student.f_mobile || "",
        f_email: student.f_email || "",
        father_adhar_card: student.father_adhar_card || "",
        mother_name: student.mother_name || " ",
        mother_occupation: student.mother_occupation || "",
        m_office_add: student.m_office_add || " ",
        m_office_tel: student.m_office_tel || "",
        m_mobile: student.m_mobile || "",
        m_emailid: student.m_emailid || "",
        mother_adhar_card: student.mother_adhar_card || "",

        // Preferences
        SetToReceiveSMS: student.SetToReceiveSMS || "",
        SetEmailIDAsUsername: student.SetEmailIDAsUsername || "",

        // Base64 Image (optional)
        // student_image: student.student_image || "",
      });

      // Set the initial state for father's and mother's mobile preferences based on prefilled data
      setFatherMobileSelected({
        setUsername: student.SetEmailIDAsUsername === "father" || false,
        receiveSms: student.SetToReceiveSMS === "father" || false,
      });

      setMotherMobileSelected({
        setUsername: student.SetEmailIDAsUsername === "mother" || false,
        receiveSms: student.SetToReceiveSMS === "mother" || false,
      });

      setSelectedClass(student.class_id || ""); // Set the selected class
      setSelectedDivision(student.section_id || ""); // Set the selected division

      if (student.student_image) {
        setPhotoPreview(
          // `${API_URL}/path/to/images/${student.teacher_image_name}`
          `${student.student_image}`
        );
      }
    }
  }, [student, API_URL]);
  // Fetch divisions when the class is already selected (for pre-filled data)
  useEffect(() => {
    if (selectedClass) {
      const fetchDivisions = async () => {
        try {
          const token = localStorage.getItem("authToken");
          const response = await axios.get(
            `${API_URL}/api/get_divisions/${selectedClass}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setDivisions(response.data.divisions); // Update divisions
        } catch (error) {
          toast.error("Error fetching divisions");
        }
      };

      fetchDivisions();
    }
  }, [selectedClass, API_URL]);

  // for togle radio button and logic

  // Handle father's mobile selection
  const handleFatherSelection = (e) => {
    const { name } = e.target;

    // Toggle father's selection
    setFatherMobileSelected((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));

    // If same button is selected for mother, deselect it
    if (motherMobileSelected[name]) {
      setMotherMobileSelected((prevState) => ({
        ...prevState,
        [name]: false,
      }));
    }
  };

  // Handle mother's mobile selection
  const handleMotherSelection = (e) => {
    const { name } = e.target;

    // Toggle mother's selection
    setMotherMobileSelected((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
    // for removing the email username
    setFormData({
      ...formData,
      SetEmailIDAsUsername: false, // Directly update existing field
    });
    // If same button is selected for father, deselect it
    if (fatherMobileSelected[name]) {
      setFatherMobileSelected((prevState) => ({
        ...prevState,
        [name]: false,
      }));
    }
  };

  // email togle button readio logic

  // const handleChange = (e) => {
  //     setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  const handleEmailSelection = (e) => {
    setFormData({
      ...formData,
      SetEmailIDAsUsername: e.target.value, // Directly update existing field
    });
    setMotherMobileSelected({ setUsername: false });
    setFatherMobileSelected({ setUsername: false });
  };

  // Validation Functions
  const validatePhone = (phone) => {
    if (!phone) return "Phone number is required";
    if (!/^\d{10}$/.test(phone)) return "Phone number must be 10 digits";
    return null;
  };

  const validateAadhar = (aadhar) => {
    if (!aadhar) return "Aadhar card number is required";
    if (!/^\d{12}$/.test(aadhar.replace(/\s+/g, "")))
      return "Aadhar card number must be 12 digits";
    return null;
  };

  const validateEmail = (email) => {
    if (!email) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(email)) return "Email address is invalid";
    return null;
  };

  const validate = () => {
    const newErrors = {};

    // Validate required fields
    if (!formData.first_name) newErrors.first_name = "First name is required";
    if (!formData.gender) newErrors.gender = "Gender selection is required";
    if (!formData.dob) newErrors.dob = "Date of Birth is required";

    // Phone, Aadhar and Email validations
    const phoneError = validatePhone(formData.f_mobile);
    if (phoneError) newErrors.f_mobile = phoneError;

    const aadharError = validateAadhar(formData.father_adhar_card);
    if (aadharError) newErrors.father_adhar_card = aadharError;

    const emailErrorFather = validateEmail(formData.f_email);
    if (emailErrorFather) newErrors.f_email = emailErrorFather;

    const emailErrorMother = validateEmail(formData.m_emailid);
    if (emailErrorMother) newErrors.m_emailid = emailErrorMother;
    // Validate required fields
    if (!formData.father_name.trim())
      newErrors.father_name = "Father Name is required";
    if (!formData.father_adhar_card.trim())
      newErrors.father_adhar_card = "Father Aadhaar Card No. is required";
    if (!formData.mother_name.trim())
      newErrors.mother_name = "Mother Name is required";
    if (!formData.mother_adhar_card.trim())
      newErrors.mother_adhar_card = "Mother Aadhaar Card No. is required";
    // Add more validations as needed

    return newErrors;
  };

  // Handle change and field-level validation
  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    let newValue = value;

    if (type === "checkbox") {
      newValue = checked;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));

    // Validate field on change
    let fieldErrors = {};
    if (name === "f_mobile") {
      fieldErrors.f_mobile = validatePhone(newValue);
    } else if (name === "father_adhar_card") {
      fieldErrors.father_adhar_card = validateAadhar(newValue);
    } else if (name === "f_email" || name === "m_emailid") {
      fieldErrors[name] = validateEmail(newValue);
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      ...fieldErrors,
    }));
  };

  // const validatePhone = (phone) => {
  //   if (!phone) return "Phone number is required";
  //   if (!/^\d{10}$/.test(phone)) return "Phone number must be 10 digits";
  //   return null;
  // };

  // const validateAadhar = (aadhar) => {
  //   if (!aadhar) return "Aadhar card number is required";
  //   if (!/^\d{12}$/.test(aadhar.replace(/\s+/g, "")))
  //     return "Aadhar card number must be 12 digits";
  //   return null;
  // };

  // const validateEmail = (email) => {
  //   if (!email) return "Email is required";
  //   if (!/\S+@\S+\.\S+/.test(email)) return "Email address is invalid";
  //   return null;
  // };

  // const validate = () => {
  //   const newErrors = {};
  //   if (!formData.first_name) newErrors.first_name = "First name is required";
  //   // Add other field validations
  //   const phoneError = validatePhone(formData.phone);
  //   if (phoneError) newErrors.phone = phoneError;
  //   const aadharError = validateAadhar(formData.aadhar_card_no);
  //   if (aadharError) newErrors.aadhar_card_no = aadharError;
  //   const emailError = validateEmail(formData.email);
  //   if (emailError) newErrors.email = emailError;
  //   return newErrors;
  // };

  // const handleChange = (event) => {
  //   const { name, value, checked, type } = event.target;
  //   let newValue = value;

  //   if (type === "checkbox") {
  //     newValue = checked;
  //   }

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: newValue,
  //   }));

  //   // Validate field on change
  //   let fieldErrors = {};
  //   if (name === "phone") {
  //     fieldErrors.phone = validatePhone(newValue);
  //   } else if (name === "aadhar_card_no") {
  //     fieldErrors.aadhar_card_no = validateAadhar(newValue);
  //   } else if (name === "email") {
  //     fieldErrors.email = validateEmail(newValue);
  //   }

  //   setErrors((prevErrors) => ({
  //     ...prevErrors,
  //     ...fieldErrors,
  //   }));
  // };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       student_image: file,
  //     }));
  //     setPhotoPreview(URL.createObjectURL(file));
  //   }
  // };

  const handleImageCropped = (croppedImageData) => {
    setFormData((prevData) => ({
      ...prevData,
      student_image: croppedImageData,
    }));
  };

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

    // Prepare the data for API submission
    const formattedFormData = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] instanceof File) {
        formattedFormData.append(key, formData[key]);
      } else {
        formattedFormData.append(key, formData[key]);
      }
    });
    console.log(" formattedFormData,", formData);

    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        throw new Error("No authentication token is found");
      }
      console.log(" formattedFormData,", formattedFormData);
      const response = await axios.put(
        `${API_URL}/api/students/${student.student_id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Student updated successfully!");
        setTimeout(() => {
          navigate("/StudentList");
        }, 3000);
      }
    } catch (error) {
      toast.error("An error occurred while updating the student.");
      console.error("Error:", error.response?.data || error.message);
      if (error.response && error.response.data && error.response.data.errors) {
        setBackendErrors(error.response.data.errors || {});
      } else {
        toast.error(error.message);
      }
    }
  };

  // Fetch class names when component loads

  return (
    <div className=" w-[95%] mx-auto p-4">
      <ToastContainer />
      <h1>Coming soon...</h1>
    </div>
  );
}

export default ViewStudent;
