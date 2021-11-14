import React from 'react'

const index = () => {
  return (
    <section>
      <div className="container flex items-center my-12">
        <div className="w-1/2 text-primary-dark">
          <h2 className="text-5xl font-bold">Hi, I’m a <span className="text-primary-light">Frontend</span> Developer based on Bandung</h2>
          <p className="my-6 leading-loose opacity-60">Hi, i’m Jason a freelancer web designer from Bandung. I help brands turn their ideas high quality products</p>
          <button className="px-12 py-4 rounded-full bg-primary-dark text-white">Hire Me</button>
        </div>
        <div className="w-1/2 text-primary-dark">
          <img src="/images/profile-images.png" alt="profile"/>
        </div>
      </div>
    </section>
  )
}

export default index
