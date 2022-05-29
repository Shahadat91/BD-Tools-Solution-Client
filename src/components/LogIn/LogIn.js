import React, { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import './LogIn.css';
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const LogIn = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const handleLogIn = async(event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    //console.log(email, password);
    await signInWithEmailAndPassword(email, password);
    const {data} = await axios.post('https://pacific-sea-12697.herokuapp.com/signin', {email});
    //console.log(data);
    localStorage.setItem('accessToken', data.accessToken);
    navigate(from, { replace: true });
  };

  if (user) {
    //navigate(from, { replace: true });
  }

  if (loading) {
    return <Loading></Loading>;
  }

  let errorElement;
  if (error) {
    errorElement = <p className="text-danger text-center">Error: {error.message}</p>;
  }

  const navigateRegister = (event) => {
    navigate("/register");
    
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email for reset password");
    } else {
      toast("please input your email to reset password");
    }
  };
  return (
    <div style={{ marginTop: "60px" }}>
      <form className="form-body" onSubmit={handleLogIn}>
        <div className="login-form">
          <div className="title">Please Log In</div>

          <div className="input-fields">
            <input
              className="user-email"
              ref={emailRef}
              type="email"
              name="email"
              id=""
              placeholder="your email"
              required
            />

            <input
              className="password"
              ref={passwordRef}
              type="password"
              name="password"
              id=""
              placeholder="password"
              required
            />
          </div>
          <button className="button">Sign In</button>
          <div className="link">
            <p>
              New at this site? Please{" "}
              <span className="link-a" onClick={navigateRegister}>
                SignUp
              </span>
            </p>
            <p>
              Forgot Password?{" "}
              <span onClick={resetPassword} className="link-a">
                Reset Password
              </span>
            </p>
          </div>
        </div>
      </form>
      {errorElement}
      
      
    </div>
  );
};

export default LogIn;
