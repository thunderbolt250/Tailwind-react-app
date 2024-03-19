import React from 'react'
import police from './images/police.jpg'
function Projects() {
  return (
    <div>
      
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              RNP software Development Team
              
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              We develop RNP systems for different purposes using the latest technology
              , libraries and frameworks
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                1.	Planning System:
                </h6>
                <p className="text-sm text-gray-900">
                  We develop systems that can be used in strategic planning for long term goals and objectives to guide porce forc,
                   and operational planning for short term plans for daily operations, resources and crime prevention
                </p>
              </div>
            </div>
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                2.	Logistics and Acquisition System:
                </h6>
                <p className="text-sm text-gray-900">
                  We also develop systems for equipment procument for ensuring that officers have necessary tools.
                   Chain management, fFacility constrauction and maintanaince systems, and many more
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={police}
            alt=""
          />
        </div>
      </div>
    </div>

    </div>
  )
}

export default Projects
