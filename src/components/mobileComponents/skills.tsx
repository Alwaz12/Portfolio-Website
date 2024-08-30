import React from 'react'
import { FaCheckSquare } from "react-icons/fa";

export const MobileSkills = () => {
  return (
    <div className='w-full p-5'>
        <h2 className='scroll-m-20 border-b border-blue-500 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            Skills
        </h2>
        <div className="mt-4 flex flex-wrap -m-4">
        {/* Html */ }
      <div className="p-4 w-full md:w-1/3">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <FaCheckSquare className="text-white text-lg"/>
            </div>
            <h2 className="text-lg font-semibold tracking-tight">
              HTML
            </h2>
            </div>
            <div className="w-full h-1 rounded-lg bg-gray-600">
              <div className="w-[100%] h-1 bg-blue-500 rounded-lg"/>
            </div>
            <h3 className="text-blue-500 text-sm text-right font-semibold tracking-tight">70%</h3>
      </div>
              {/* JAVASCRIPT */ }
              <div className="p-4 w-full md:w-1/3">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <FaCheckSquare className="text-white text-lg"/>
            </div>
            <h2 className="text-lg font-semibold tracking-tight">
              JAVASCRIPT
            </h2>
            </div>
            <div className="w-full h-1 rounded-lg bg-gray-600">
              <div className="w-[100%] h-1 bg-blue-500 rounded-lg"/>
            </div>
            <h3 className="text-blue-500 text-sm text-right font-semibold tracking-tight">98%</h3>
      </div>
              {/* TYPESCRIPT */ }
              <div className="p-4 w-full md:w-1/3">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <FaCheckSquare className="text-white text-lg"/>
            </div>
            <h2 className="text-lg font-semibold tracking-tight">
              TYPESCRIPT
            </h2>
            </div>
            <div className="w-full h-1 rounded-lg bg-gray-600">
              <div className="w-[100%] h-1 bg-blue-500 rounded-lg"/>
            </div>
            <h3 className="text-blue-500 text-sm text-right font-semibold tracking-tight">99.9%</h3>
      </div>
              {/* TAILWIND CSS */ }
              <div className="p-4 w-full md:w-1/3">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <FaCheckSquare className="text-white text-lg"/>
            </div>
            <h2 className="text-lg font-semibold tracking-tight">
              TAILWIND CSS
            </h2>
            </div>
            <div className="w-full h-1 rounded-lg bg-gray-600">
              <div className="w-[100%] h-1 bg-blue-500 rounded-lg"/>
            </div>
            <h3 className="text-blue-500 text-sm text-right font-semibold tracking-tight">65%</h3>
      </div>
              {/* Python */ }
              <div className="p-4 w-full md:w-1/3">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <FaCheckSquare className="text-white text-lg"/>
            </div>
            <h2 className="text-lg font-semibold tracking-tight">
              PYTHON
            </h2>
            </div>
            <div className="w-full h-1 rounded-lg bg-gray-600">
              <div className="w-[100%] h-1 bg-blue-500 rounded-lg"/>
            </div>
            <h3 className="text-blue-500 text-sm text-right font-semibold tracking-tight">75%</h3>
      </div>
        {/* REACT */ }
        <div className="p-4 w-full md:w-1/3">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <FaCheckSquare className="text-white text-lg"/>
            </div>
            <h2 className="text-lg font-semibold tracking-tight">
              REACT
            </h2>
            </div>
            <div className="w-full h-1 rounded-lg bg-gray-600">
              <div className="w-[100%] h-1 bg-blue-500 rounded-lg"/>
            </div>
            <h3 className="text-blue-500 text-sm text-right font-semibold tracking-tight">70%</h3>
      </div>
        {/* NEXT.JS */ }
        <div className="p-4 w-full md:w-1/3">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <FaCheckSquare className="text-white text-lg"/>
            </div>
            <h2 className="text-lg font-semibold tracking-tight">
              NEXT.JS
            </h2>
            </div>
            <div className="w-full h-1 rounded-lg bg-gray-600">
              <div className="w-[100%] h-1 bg-blue-500 rounded-lg"/>
            </div>
            <h3 className="text-blue-500 text-sm text-right font-semibold tracking-tight">85%</h3>
      </div>
    </div>
    </div>
  )
}

export default MobileSkills