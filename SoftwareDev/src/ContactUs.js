
import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ContactUs() {
  const [agreed, setAgreed] = useState(false)

  const [formData, setFormData] = useState ({
    fname: '',
    sname:'',
    email:'',
    currier: '',
    phonenumber:'',
    message:''
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
    
    if(!formData.phonenumber.trim()){
      validationErrors.phonenumber = "phone number is required"
    } 
    
    if(!formData.message.trim()){
      validationErrors.message = "message is required"
    }

    setErrors(validationErrors)
    if(Object.keys(validationErrors).length === 0){
      alert("Message submitted successfully to to home")
      window.open('/home')
    }

  }
  //const phoneNumberPattern = '/^0[0-9]{10}$/';
  return (
    
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8" style={{ paddingTop:'20px'}}>
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
       
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          If you have any question, concern or idea about us, fill this form below, we will reach you shortly!.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name <span style={{color: 'red'}}> *</span>
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="fname"
                id="fname"
                autoComplete="given-name"
                onChange={handleChange} 
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.fname && <span style={{ color: 'red' }}>{errors.fname}</span>}
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name <span style={{color: 'red'}}> *</span>
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="sname"
                id="sname"
                autoComplete="family-name"
                onChange={handleChange} 
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.sname && <span style={{ color: 'red' }}>{errors.sname}</span>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
             
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email <span style={{color: 'red'}}> *</span>
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                onChange={handleChange} 
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number <span style={{color: 'red'}}> *</span>
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  telephone <span style={{color: 'red'}}> *</span>
                </label>
                <select
                  id="currier"
                  name="currier"
                  style={{ paddingLeft: '10px' }}
                  className="h-full rounded-md border-0  bg-transparent bg-none py-0 pl-0 pr-2 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>Mtn</option>
                  <option>Airtel</option>                  
                </select>
                
              </div>
              <input
                type="tel"
                name="phonenumber"
                id="phonenumber"
                autoComplete="tel"
                //pattern= '/^\d{10}$/'
                onChange={handleChange} 
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {errors.phonenumber && <span style={{ color: 'red' }}>{errors.phonenumber}</span>}
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message <span style={{color: 'red'}}> *</span>
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
                onChange={handleChange} 
              />
              {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>}
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  )
}
