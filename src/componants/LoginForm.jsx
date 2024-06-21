import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import styles from "../CSS/LoginForm.module.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Clear previous errors
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });
      localStorage.setItem("authToken", response.data.token);
      console.log("authKone", response.data.token);
      // Combine user and settings into one object
      const sessionData = {
        user: response.data.data,
        settings: response.data.settings,
      };

      // Store the combined data in sessionStorage
      sessionStorage.setItem("sessionData", JSON.stringify(sessionData));
      navigate("/dashboard");
    } catch (error) {
      const newErrors = {};
      if (error.response) {
        if (error.response.status === 404) {
          newErrors.email = "Invalid username";
        } else if (error.response.status === 401) {
          newErrors.password = "Invalid password";
        } else {
          newErrors.api =
            "An unexpected error occurred. Please try again later.";
        }
      } else {
        newErrors.api = "An unexpected error occurred. Please try again later.";
      }
      setErrors(newErrors);
    }
  };

  return (
    <div className={styles.loginForm}>
      <h2>Log-In</h2>
      <p>Enter your details to login to your account</p>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <div className={styles.inputWrapper}>
            <FontAwesomeIcon icon={faUser} className={styles.userIcon} />
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
            />
          </div>
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
        <div className={styles.formGroup}>
          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className={styles.eyeIcon}
              onClick={toggleShowPassword}
            />
          </div>
          {errors.password && (
            <span className={styles.error}>{errors.password}</span>
          )}
        </div>
        {errors.api && <span className={styles.error}>{errors.api}</span>}
        <button type="submit" className={styles.loginButton}>
          Login
        </button>
        <div className={styles.formFooter}></div>
      </form>
    </div>
  );
};

export default LoginForm;
