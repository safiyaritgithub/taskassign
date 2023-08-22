import React from 'react'
import {Formik,Form, Field,ErrorMessage} from "formik"
import *as yup from "yup"
import KErrorMessage from './KErrorMessage'


const validationSchema = yup.object({
  name:yup.string().required("Fullname is Required"),
  email:yup.string().required("Email is Required"),
  password:yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  "Must Contain 8 Characters,One Uppercase,One LowerCase,One Number and One special case character"),
  Cpassword:yup.string().required(" password must match"),
  jobrole:yup.string().required("jobrole is Required")


})


export const Loginform = () => {
  return (
    <div>
      <h1 className='text-center text-lg text-blue-700 font-bold mt-3'>Login</h1>

    <Formik 
    validationSchema={validationSchema}
      initialValues={{
        name:"",
        email:"",
        password:"",
        Cpassword:"",
        jobrole:""
        }}
        onSubmit={(values)=>{
          console.log(values)
        }}>
      <Form className='shadow-xl h-11/12 w-96 ml-96 mt-5 relative left-36   rounded-md pl-10 pt-7 pb-7 flex flex-col  p-2'>
        <label>Fullname</label>
        <Field name="name" type="text" className="border py-1 w-64"/>
        <KErrorMessage name='name'/>
        <label>Email</label>
        <Field name="email" type="email" className="border py-1 w-64"/>
        <KErrorMessage name='email'/>
        <label>password</label>
        <Field name="password" type="password" className="border py-1 w-64"/>
        <KErrorMessage name='password'/>
        <label>ConfirmPassword</label>
        <Field name="Cpassword" type="password" className="border py-1 w-64"/>
        <KErrorMessage name='Cpassword'/>
        <label>Jobrole</label>
        <Field name="jobrole" as="select" className="border py-1 w-64">
        <option value=""></option>
        <option value="frontend">frontend developer</option>
        <option value="backend">backend developer</option>
        <option value="fullstack">fullstack developer</option>
      </Field>
      <KErrorMessage name='jobrole'/>


      <button className='border w-64  bg-blue-700 text-white text-sm font-medium mt-2 p-1 rounded-md' type="submit">Login</button>
      </Form>
    </Formik>

    </div>
  )
}
