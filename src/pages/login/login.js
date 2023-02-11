import { useState, useEffect } from "react";
import React from "react";
import "./login.css";

const Login = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const obj = {
    email: "",
    password: "",
  };

  let register = {
    username: "",
    email: "",
    password: "",
    conf_password: "",
  };
  let errors = [
   
    {
      name: "email",
      message: "Email should not be empty!",
      visible: false,
    },

    {
      name: "password",
      message: "password should not be empty!",
      visible: false,
    },
  ];

  let reg_error = [
    {
      name: "username",
      message: "Username should not be empty!",
      visible: false,
    },
    {
      name: "email",
      message: "Email should not be empty!",
      visible: false,
    },

    {
      name: "password",
      message: "password should not be empty!",
      visible: false,
    },
    {
      name: "conf_password",
      message: "password did not match",
      visible: false,
    },
  ];
  const inputEmailRef = React.useRef(); // document.querySelector('#username') <input
  const inputPasswordRef = React.useRef(); // // document.querySelector('#password')

  const inputRegUsernameRef = React.useRef(); // document.querySelector('#username') <input
  const inputRegPasswordRef = React.useRef(); // // document.querySelector('#password')
  const inputRegEmailRef = React.useRef();
  const inputRegConfPasswordRef = React.useRef();

  const [userDetails, setUserDetails] = useState(obj);
  const [errorMsgs, setErrorMsgs] = useState(errors);
  const [showToggle, setShowToggle] = useState(false); // true
  const [userRegisterDetail, setUserRegisterDetail] = useState(register);
  const [regErrMsg, setRegErrMsg] = useState(reg_error);
  const [errUserExist, setErrUserExist] = useState("");
  const [validId, setValidId] = useState("");

  const handleChange = () => {};

  const handleToggle = () => {
    setShowToggle(true);
  };

  useEffect(() => {
    validateLogin();
  }, [userDetails]);

  const handleLogin = async (e) => {
    e.stopPropagation();
    const obj = {
      email: inputEmailRef.current.value,
      password: inputPasswordRef.current.value,
    };
    setUserDetails(obj);
  };

  const validateLogin = () => {
    if (userDetails.email === "") {
      errors[0].visible = true;
      setErrorMsgs(errors);
    } else {
      errors[0].visible = false;
      setErrorMsgs(errors);
    }

    if (userDetails.password === "") {
      errors[1].visible = true;
      setErrorMsgs(errors);
    } else {
      errors[1].visible = false;
      setErrorMsgs(errors);
    } 

    const isLoginError = errors.some((t) => t.visible === true);
    if (!isLoginError) {
      // form submit
      userInvalid();
      //
    }
  };

  const userInvalid = () => {
    fetch(BASE_URL+'/api/users/' + userDetails.email, {
      method: "GET",
    })
      .then((res) => res.json()) // or res.json()
      .then((res) => {
        console.log(res);
        if (res.length) {
          if(userDetails.password === res[0].password){
            setValidId("Welcome To Fusion Web");
          }
          else {
            setValidId("Password Incorrect");
          }
         
        } else{
          setValidId("User Not Found")
        }

      });
  };

  useEffect(() => {
    userDetailsUpdate();
  }, [userRegisterDetail]);

  const handleRegister = async (e) => {
    e.preventDefault();
    const register = {
      username: inputRegUsernameRef.current.value,
      email: inputRegEmailRef.current.value,
      password: inputRegPasswordRef.current.value,
      conf_password: inputRegConfPasswordRef.current.value,
    };
    setUserRegisterDetail(register);
  };
  const userDetailsUpdate = () => {
    const mailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (userRegisterDetail.username === "") {
      reg_error[0].visible = true;
      setRegErrMsg(reg_error);
    } else {
      reg_error[0].visible = false;
      setRegErrMsg(reg_error);
    }
    if (userRegisterDetail.email === "") {
      reg_error[1].message = "Email should not be empty";
      reg_error[1].visible = true;
      setRegErrMsg(reg_error);
    } else {
      if (!mailRegex.test(userRegisterDetail.email)) {
        reg_error[1].message = "Please enter a valid email address";
        reg_error[1].visible = true;
        setRegErrMsg(reg_error);
      } else {
        reg_error[1].visible = false;
        setRegErrMsg(reg_error);
      }
    }

    if (userRegisterDetail.password === "") {
      reg_error[2].visible = true;
      setRegErrMsg(reg_error);
    } else {
      reg_error[2].visible = false;
      setRegErrMsg(reg_error);
    }

    if (
      userRegisterDetail.password !== "" &&
      userRegisterDetail.conf_password !== "" &&
      userRegisterDetail.conf_password !== userRegisterDetail.password
    ) {
      reg_error[3].visible = true;
      setRegErrMsg(reg_error);
    } else {
      reg_error[3].visible = false;
      setRegErrMsg(reg_error);
    }
    //
    const isError = reg_error.some((t) => t.visible === true);
    if (!isError) {
      // form submit
      checkExistingUser(userRegisterDetail);
      //
    }
  };
  const checkExistingUser = (userRegisterDetail) => {
    fetch(BASE_URL+"/api/users/" + userRegisterDetail.email, {
      method: "GET",
    })
      .then((res) => res.json()) // or res.json()
      .then((res) => {
        console.log(res);
        if (res.length) {
          setErrUserExist("User Already Exist! Please Login");
        } else {
          submitRegister(userRegisterDetail);
        }
      });
  };

  const submitRegister = (userRegisterDetail) => {
    const postObj = {
      username: userRegisterDetail.username,
      email: userRegisterDetail.email,
      password: userRegisterDetail.password,
    };
    fetch(BASE_URL+"/api/users", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postObj),
    }).then((response) => {
      if (response.status === 201) {
        resetInputField();
      }
    });
  };

  const resetInputField = () => {
    setErrUserExist("");
    inputRegUsernameRef.current.value = "";
    inputRegEmailRef.current.value = "";
    inputRegPasswordRef.current.value = "";
    inputRegConfPasswordRef.current.value = "";
  };

  useEffect(() => {
    //console.log(errorMsgs);
  }, [regErrMsg]);
  const backToLogin = (e) => {
    e.preventDefault();
    setShowToggle(false);
  };
  return (
    <div className="content-section padding-btm-top">
      <div className="d-lg-flex half">
        <div className="bg order-1 order-md-2"></div>
        <div className="contents order-2 order-md-1">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              {!showToggle ? (
                <div className="col-md-7">
                  <h3>
                    Login to <strong>FusionWeb</strong>
                  </h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                    consectetur adipisicing.
                  </p>
                  <form>
                    <div className="form-group first">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="your-email@gmail.com"
                        id="email"
                        ref={inputEmailRef}
                      />
                      <div className="error">
                        {errorMsgs[0].name === "email" &&
                        errorMsgs[0].visible === true
                          ? errorMsgs[0].message
                          : ""}
                      </div>
                    </div>
                    <div className="form-group last mb-3">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Your Password"
                        id="password"
                        ref={inputPasswordRef}
                      />
                      <div className="error">
                        {errorMsgs[1].name === "password" &&
                        errorMsgs[1].visible
                          ? errorMsgs[1].message
                          : ""}
                      </div>
                    </div>
                    


                    <div className="validIdLogin">
                    {
                    validId === "" 
                    ? 
                    "" 
                    :
                     <span> { validId }</span>
                    }
                    </div>

                    <div className="d-flex mb-5 align-items-center">
                      <label className="control control--checkbox mb-0">
                        <span className="caption">Remember me</span>
                        <input
                          type="checkbox"
                          checked
                          onChange={handleChange}
                        />
                        <div className="control__indicator"></div>
                      </label>
                      <span className="ml-auto">
                        <a href="#" className="forgot-pass">
                          Forgot Password
                        </a>
                      </span>
                    </div>
                    <button
                      type="button"
                      className="btn btn-block btn-primary"
                      onClick={(e) => handleLogin(e)}
                    >
                      Log In
                    </button>
                  </form>
                  <br />
                  <button
                    type="button"
                    className="btn btn-block btn-primary register"
                    onClick={handleToggle}
                  >
                    Register
                  </button>
                </div>
              ) : (
                //if
                <div className="col-md-7">
                  <h3>
                    Register to <strong>FusionWeb</strong>
                  </h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                    consectetur adipisicing.
                  </p>
                  <form>
                    <div className="form-group first">
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="your Name"
                        id="username"
                        ref={inputRegUsernameRef}
                      />
                      <div className="reg_error">
                        {regErrMsg[0].name === "username" &&
                        regErrMsg[0].visible === true
                          ? regErrMsg[0].message
                          : ""}
                      </div>
                    </div>
                    <div className="form-group first">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="your-email@gmail.com"
                        id="email"
                        ref={inputRegEmailRef}
                      />
                      <div className="reg_error">
                        {regErrMsg[1].name === "email" &&
                        regErrMsg[1].visible === true
                          ? regErrMsg[1].message
                          : ""}
                      </div>
                    </div>
                    <div className="form-group last mb-3">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Your Password"
                        id="password"
                        ref={inputRegPasswordRef}
                      />
                      <div className="reg_error">
                        {regErrMsg[2].name === "password" &&
                        regErrMsg[2].visible
                          ? regErrMsg[2].message
                          : ""}
                      </div>
                    </div>
                    <div className="form-group last mb-3">
                      <label htmlFor="conf_password">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        id="conf_password"
                        ref={inputRegConfPasswordRef}
                      />
                      <div className="reg_error">
                        {regErrMsg[3].name === "conf_password" &&
                        regErrMsg[3].visible
                          ? regErrMsg[3].message
                          : ""}
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn btn-block btn-primary"
                      onClick={(e) => handleRegister(e)}
                    >
                      Register
                    </button>
                    <div className="register_validation">{errUserExist}</div>
                    <div>
                      <a href="#" id="wfu" onClick={backToLogin}>
                        Go To Login{" "}
                      </a>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
