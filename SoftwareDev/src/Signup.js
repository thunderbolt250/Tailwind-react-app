import React, { useState } from 'react'
import rnp_icon from './rnp-log.png'
import { Link } from 'react-router-dom'
function Signup() {
  const [formData, setFormData] = useState ({
    fname: '',
    sname:'',
    email:'',
    password: '',
    confirmPassword:''
  })

  const [errors, setErrors] = useState({

  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData, [name] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}
    if(!formData.fname.trim()){
      validationErrors.fname = "first name is required"
    }
    if(!formData.sname.trim()){
      validationErrors.sname = "second name is required"
    }
    if(!formData.email.trim()){
      validationErrors.email = "email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)){
      validationErrors.email = "email is not valid"
    }
    if(!formData.password.trim()){
      validationErrors.password = "password is required"
    } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)){
      validationErrors.password = "Password must contain at least one number, one uppercase and lowercase letter, a symbol and at least 8 or more characters"
    }
    if (formData.confirmPassword !== formData.password){
      validationErrors.confirmPassword = "password not matched"
    }

    setErrors(validationErrors)
    if(Object.keys(validationErrors).length === 0){
      alert("Account registerd successfully go to login")
      window.open('/login')
    }

  }
  return (
    
<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 div1" >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-40 w-auto"
            src={rnp_icon}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create an account 
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/*<form className="space-y-6" action="#" method="POST">*/}
          <form className="space-y-6" onSubmit={handleSubmit}>

          <div>
              <label htmlFor="fname" className="block text-sm font-medium leading-6 text-gray-900">
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="fname"
                  name="fname"
                  type="text"
                  autoComplete="fname"
                  //required
                  onChange={handleChange} 
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.fname && <span style={{ color: 'red' }}>{errors.fname}</span>}
              </div>
            </div>

            <div>
              <label htmlFor="sname" className="block text-sm font-medium leading-6 text-gray-900">
                Second Name
              </label>
              <div className="mt-2">
                <input
                  id="sname"
                  name="sname"
                  type="text"
                  autoComplete="sname"
                  //required
                  onChange={handleChange}                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                  {errors.sname && <span style={{ color: 'red' }}>{errors.sname}</span>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  //required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
              </div>
            </div>

            <div>             
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>                
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  //pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  //autoComplete="current-password"
                  //required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
              </div>
            </div>

            <div>             
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Comfirm Password
                </label>                
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  //autoComplete="current-password"
                  //required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/Login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login
            </Link>
          </p>
        </div>
      </div>
  )
}

export default Signup
