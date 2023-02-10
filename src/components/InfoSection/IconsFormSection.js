import "./IconsFormSection.css";
import React from "react";
import { useState, useEffect } from "react";

const IconFormSection = () => {
  let obj = {
    email: "",
  };

  let err = {
    name: "email",
    message: "Please Entered Valid Registered Email Address",
    visible: false,
  };

  const inputEmailRef = React.useRef();
  const [subscribeUser, setSubscribeUser] = useState(obj);
  const [errorSubscriber, setErrSubscriber] = useState(err);

  useEffect(() => {
     validateSubscriber();
  }, [subscribeUser]);

  const subscribeUs = () => {
    const obj = {
      email: inputEmailRef.current.value,
    };
    setSubscribeUser(obj);
    validateSubscriber();
  };
  const validateSubscriber = () => {
    if (subscribeUser.email === "") {
      err.visible = true;
      setErrSubscriber(err);
    } else {
      if(subscribeUser.email) {
        err.visible = false;
        userInvalid();
        setErrSubscriber(err);
      } 
    }
  };

  const userInvalid = () => {
    fetch("/api/users/" + subscribeUser.email, {
      method: "GET",
    })
      .then((res) => res.json()) // or res.json()
      .then((res) => {
        //console.log(res);
        if (res.length) {
          
          alert("Thankyou For Your Subscription " + res[0].username);
         
        } else {
          alert("User Not Found");
        }
        
      });
     
  };

  return (
    <div className="form_container mt-5">
      <form action="">
        <label htmlFor="subscribeMail">Newsletter</label>
        <input
          type="email"
          placeholder="Enter Your email"
          id="subscribeMail"
          ref={inputEmailRef}
        />

        <button type="button" onClick={subscribeUs}>
          Subscribe
        </button>
      </form>
      <div className="error_block">
        {errorSubscriber.name === "email" && errorSubscriber.visible === true
          ? errorSubscriber.message
          : " "}
      </div>
    </div>
  );
};

export default IconFormSection;
