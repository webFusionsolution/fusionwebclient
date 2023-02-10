import "./Form.css";
import React from "react";
import { useState } from "react";


const Form = () => {
//   const { register, handleSubmit, error } = useForm();
//   const [userInfo, setUserInfo] = useState()
//   const onSubmit =(data)=>{
//     setUserInfo(data)
// console.log(data)
 // }
  return (
     <>
        <div class="col-md-6 form_bg px-0">
            <div class="col-md-10 px-0">
              <form action="">
                <div class="contact_form-container">
                  <div>
                    <div>
                      <input type="text" placeholder=" Name" />
                    </div>
                    <div>
                      <input type="email" placeholder="  Email" />
                    </div>

                    <div>
                      <input type="text" placeholder=" Phone Number" />
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Message"
                        class="message_input"
                      />
                    </div>
                    <div class="mt-3 d-flex justify-content-end">
                      <button type="submit">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
     </>
  );
};

export default Form;
