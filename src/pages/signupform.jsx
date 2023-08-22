import React from 'react'
import {Formik,Form, Field,ErrorMessage} from "formik"
import *as yup from "yup"
import KErrorMessage from './KErrorMessage'

const validationSchema = yup.object({
  email:yup.string().required("Email is Required"),
  password:yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  "Must Contain 8 Characters,One Uppercase,One LowerCase,One Number and One special case character")


})

export const Signupform = () => {
  return (
    <div className='ml-96 mt-36  shadow-xl h-11/12 w-96 w- rounded-md pl-10 pt-7 pb-7 border   '>
      <img src='/images/playrcart.webp' className='h-20'/>
      <h1 className='mt-1 text-sm font-medium'>Signin</h1>
      <p className='text-xs mt-2 mb-4 text-gray-500'>Please sign into your account</p>
      
      <Formik 
      validationSchema={validationSchema}
      initialValues={{
        email:"",
        password:""
        }}
        onSubmit={(values)=>{
          console.log(values)
        }}
        >
        <Form className='inputBox flex flex-col  w-80'>
          <label className='absolute pointer-events-none outline-none focus:transform translate-x-10 -translate-y-2 text-[10px] text-gray-400 bg-white '>E-mailaddress</label>
          <Field name="email" type="email" className="border p-1 hover:border-blue-600  active:border-blue-700 border-x-2 border-y-2  focus:outline-none"/>
          <KErrorMessage name='email'/>
          <label className="pointer-events-none outline-none focus:transform translate-x-10 translate-y-2  text-[10px] text-gray-400 bg-white ">Password</label>
          <Field name="password" type="password" className="border p-1 hover:border-blue-600  active:border-blue-700 border-x-2 border-y-2   focus:outline-none "/>
          <KErrorMessage name='password'/>

          <button className='border mt-3 bg-blue-700 text-white p-1 rounded-lg py-2 text-sm'>Signin</button>
        </Form>
      </Formik>
      <div className='text-blue-700 text-xs mt-6 font-medium'>
      <p >Forgot Password?</p>
      <p>Need an account?</p>
      </div>
      
      
      
      </div>

  )
}
