import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import KErrorMessage from "../../components/Common/KErrorMessage";
import logo from "../../assets/logo.svg";
import map from "../../assets/map.png";



const validationSchema = yup.object({
  email: yup.string().required("Email is Required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Must Contain 8 Characters,One Uppercase,One LowerCase,One Number and One special case character"
    ),
});

export const Signupform = () =>{
  return(
    <div className=" bg-gray-100 rounded-xl ml-1 mr-1 flex gap-[33.7rem]">
      <div className="shadow-lg w-[26rem] h-[27rem] ml-52 mt-28 rounded-lg bg-white pl-8  ">
        <div>
      <img src={logo} style={{ width: 100 }} className="mb-8 pt-10" />
        </div>
        <div>
        <h1 className="mt-1 text-sm font-semibold opacity-90 text-black">
              Signin
            </h1>
            <p className="text-xs mt-2 mb-4 text-slate-700 opacity-60">
              Please sign into your account
            </p>
        </div>
        <Formik
        validationSchema={validationSchema}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}>
        
          <Form className="flex flex-col w-80 ">
          <label>E-mail address</label>
            <Field name="email" type="email" className=" p-2 border " />
            <KErrorMessage name="email" />
            <label>Password</label>
                <Field
                  name="password"
                  type="password"
                  className="border p-2 "
                />
                <KErrorMessage name="password" />
                <button className="border mt-3 bg-[#1a96fc]  text-white p-1 rounded-lg py-2 text-sm">
                  Signin
                </button>
          </Form>
        </Formik>
        <div className="text-[#8fcbfd] text-xs mt-6 font-medium leading-6 ">
              <p>Forgot Password?</p>
              <p>Need an account?</p>
            </div>
         </div>
<div className="mt-1 bg-blue-500 h-[41rem] w-[23rem] rounded-tr-xl rounded-br-xl bg-gradient-to-b from-[#199afa] to-[#0bd5e5]">
  <div className="ml-14 text-white leading-7 ">
    <div className="text-xl font-semibold pb-8">
    <p className="pt-20 ">Get started with</p>
     <p>playrcart</p>
    </div>
    <div>
    <img src={map} style={{ width:250 }} className="pb-9" />
    </div>
    <div>
            <p className="font-semibold text-lg">Benefits</p>
            <ul className="text-xs leading-6">
              <li className="flex gap-2 items-center">
                <i class="fa-solid fa-circle-check"></i>
                <p className="">This is the first
                benefit of playrcart</p>
                </li>
              <li className="flex gap-2 items-center">
                <i class="fa-solid fa-circle-check"></i>
                <p>This is the second benefit of playrcart</p>
                
              </li>
              <li className="flex gap-2 items-center">
                <i class="fa-solid fa-circle-check"></i>
                <p>This is the third benefit of playrcart</p>
                
              </li>
            </ul>
          </div>
          <div className="flex gap-2 pt-32 pl-60">
          <i class="fa-solid fa-circle text-[5px]"></i>
          <i class="fa-solid fa-circle text-[5px]"></i>
          </div>
          


  </div>
</div>




    </div>
  )
}