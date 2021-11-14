import React from 'react'

const index = () => {
  return (
    <div className="w-100 h-20 bg-transparent flex">
      <div className="container flex mx-auto items-center">

        {/* Logo */}
          <div className="w-[40px] h-[40px] mr-auto">
            <img src="/images/Logo.svg" alt="Logo" className="object-cover"/>
          </div>

        {/* Button Header */}
        <div className="flex items-center gap-x-6">
          <button className="text-lg font-semibold text-primary-dark">About</button>
          <button className="text-lg font-semibold text-primary-dark">Skills</button>
          <button className="text-lg font-semibold text-primary-dark">Portofolio</button>
          <button className="text-lg font-semibold text-primary-dark">Contact</button>
        </div>
      </div>
    </div>
  )
}

export default index
