// import React, { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const emailRef = useRef();
//   const passwordRef = useRef();

//   useEffect(() => {
//     const user = localStorage.getItem("isLoggedIn")
//     if (user) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const signIn = (e) => {
//     e.preventDefault();
//     const enteredEmail = emailRef.current.value;
//     const enteredPassword = passwordRef.current.value;

//     console.log(" Email: ", enteredEmail + " Password: ", enteredPassword);
//     localStorage.setItem("isLoggedIn", "1");
//     setIsLoggedIn(true);
//   };
//   const signOut = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem("isLoggedIn");
//   };
//   return (
//     <div className="login">
//       {isLoggedIn && (
//         <p>
//           You are logged in <button onClick={signOut}>Sign out</button>
//         </p>
//       )}

//       <Link to="/">
//         <img
//           src="https://m.media-amazon.com/images/G/01/gc/designs/livepreview/a_generic_white_10_us_noto_email_v2016_us-main._CB627448186_.png"
//           alt="Amazon Logo"
//           className="login_logo"
//         />
//       </Link>
//       <div className="login_container">
//         <h1>Sign-in</h1>
//         <form>
//           <h5>E-mail</h5>
//           <input type="text" ref={emailRef} />

//           <h5>Password</h5>
//           <input type="password" ref={passwordRef} />

//           <button type="submit" className="login_signInButton" onClick={signIn}>
//             Sign In
//           </button>
//         </form>
//         <p>
//           By signing-in you agree to Amazon fake clone conditions of use & sale
//         </p>
//         <button className="login_registerButton">
//           Create your Amazon Account
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useReducer, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import AuthContext from "../components/context/authContext";

const reducer = (state, action) => {
  if (action.type === "EMAIL_INPUT") {
    return { ...state, emailValue: action.payload };
  }
  if (action.type === "PASS_INPUT") {
    return { ...state, passwordValue: action.payload };
  }
  return { emailValue: "", passwordValue: "" };
};

const Login = () => {
  const ctx = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);

  const [state, dispatch] = useReducer(reducer, {
    emailValue: "",
    passwordValue: ""
  });

  const { emailValue: email, passwordValue: password } = state;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("CHECKING FORM VALIDITY");
      setFormIsValid(email.includes("@") && 
      password.trim().length > 6);
    }, 500);
    return () => {
      console.log("CLEANUP HERE");
      clearTimeout(identifier);
    };
  }, [email, password]);
  

  const emailChangeHandler = (e) => {
    dispatch({ type: "EMAIL_INPUT", payload: e.target.value }); 
  };

  const passwordChangeHandler = (e) => {
    dispatch({ type: "PASS_INPUT", payload: e.target.value });
  };

  const signIn = (e) => {
    e.preventDefault();
    console.log("Entered Email:", state.emailValue);
    console.log("Entered Password:", state.passwordValue);
    ctx.onLogin(state.emailValue, state.passwordValue);
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://m.media-amazon.com/images/G/01/gc/designs/livepreview/a_generic_white_10_us_noto_email_v2016_us-main._CB627448186_.png"
          alt="Amazon Logo"
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={state.emailValue}
            onChange={emailChangeHandler}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={state.passwordvalue}
            onChange={passwordChangeHandler}
          />

          <button type="submit" className="login_signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon fake clone conditions of use & sale
        </p>
        <button className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
