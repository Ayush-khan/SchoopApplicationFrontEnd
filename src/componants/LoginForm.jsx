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
    // setEmailError('');
    // setPasswordError('');
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });
      localStorage.setItem("authToken", response.data.token);

      // Combine user and settings into one object
      const sessionData = {
        user: response.data.data,
        settings: response.data.settings,
      };

      // Store the combined data in sessionStorage
      sessionStorage.setItem("sessionData", JSON.stringify(sessionData));
      navigate("/Dashboard");
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          setEmailError("Invalid username");
        } else if (error.response.status === 401) {
          setPasswordError("Invalid password");
        } else {
          setEmailError(
            "An unexpected error occurred. Please try again later."
          );
        }
      } else {
        setEmailError("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className={styles.loginForm}>
      <h2>Sign in</h2>
      <p>Hey, Enter your details to login to your account</p>
      <form>
        <div className={styles.formGroup}>
          <div className={styles.inputWrapper}>
            <FontAwesomeIcon icon={faUser} className={styles.userIcon} />
            <input
              type="email"
              id="name"
              name="name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
            />
          </div>
          {errors.name && <span className={styles.error}>{errors.name}</span>}
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
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
        {/* <div className={styles.formFooter}>
                    <span>Don't have an account? </span>
                    <a href="#" className={styles.register}>
                        Register Now
                    </a>
                </div> */}
      </form>
    </div>
  );
};

export default LoginForm;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [passwordError, setPasswordError] = useState('');
//     const [passwordVisible, setPasswordVisible] = useState(false);
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setEmailError('');
//         setPasswordError('');
//         try {
//             const response = await axios.post('http://127.0.0.1:8000/api/login', { email, password });
//             localStorage.setItem('authToken', response.data.token);

//             // Combine user and settings into one object
//             const sessionData = {
//                 user: response.data.data,
//                 settings: response.data.settings,
//             };

//             // Store the combined data in sessionStorage
//             sessionStorage.setItem('sessionData', JSON.stringify(sessionData));
//             navigate('/Dashboard');
//         } catch (error) {
//             if (error.response) {
//                 if (error.response.status === 404) {
//                     setEmailError('Invalid username');
//                 } else if (error.response.status === 401) {
//                     setPasswordError('Invalid password');
//                 } else {
//                     setEmailError('An unexpected error occurred. Please try again later.');
//                 }
//             } else {
//                 setEmailError('An unexpected error occurred. Please try again later.');
//             }
//         }
//     };

//     const togglePasswordVisibility = () => {
//         setPasswordVisible(!passwordVisible);
//     };

//     return (
//         <div className="container d-flex justify-content-center align-items-center vh-100">
//             <div className="col-md-4">
//                 <div className="card">
//                     <div className="card-body">
//                         <h2 className="text-center mb-4">Login</h2>
//                         <form onSubmit={handleLogin}>
//                             <div className="form-group col-12 mb-3">
//                                 <label htmlFor="email">Email</label>
//                                 <div className="input-group">
//                                     <div className="input-group-prepend">
//                                     </div>
//                                     <input
//                                         className="form-control"
//                                         id="email"
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                         type="email"
//                                         placeholder="Enter email"
//                                     />
//                                 </div>
//                                 {emailError && <div className="text-danger">{emailError}</div>}
//                             </div>
//                             <div className="form-group col-12 mb-3">
//                                 <label htmlFor="password">Password</label>
//                                 <div className="input-group">
//                                     <div className="input-group-prepend">

//                                     </div>
//                                     <input
//                                         className="form-control"
//                                         id="password"
//                                         value={password}
//                                         onChange={(e) => setPassword(e.target.value)}
//                                         type={passwordVisible ? 'text' : 'password'}
//                                         placeholder="Enter password"
//                                     />
//                                 </div>
//                                 {passwordError && <div className="text-danger">{passwordError}</div>}
//                             </div>
//                             <div className="form-group col-4 mb-3">
//                                 <button className="btn btn-primary btn-block" type="submit">
//                                     Login
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;
