import React from "react"

const ProjectCard = () => {
  return (
    <div className="h-96 w-full">
      <div className="h-1/2 w-full bg-blue-500" />
      <div className="bg-white p-4">
        <h4 className="text-2xl font-semibold text-[#414141]">Check Me</h4>
        <div className="mb-4 mt-2 space-x-3">
          <span className="rounded-lg bg-orange-100 p-2 text-orange-500 hover:enabled:bg-orange-500 hover:enabled:text-white">
            Health
          </span>
          <span className="rounded-lg bg-orange-100 p-2 text-orange-500 hover:enabled:bg-orange-500 hover:enabled:text-white">
            Technology
          </span>
        </div>
        <p>
          breast cancer mobile application will provide a low-cost, accessible, and convenient way for women in Cameroon
          to perform breast self-examinations and get in touch with specialists to diagnose and treat breast cancer at
          an early stage.
        </p>
        <div className="mt-6 flex items-center space-x-6">
          <p>React Native</p>
          <p>Node JS</p>
          <p>Heroku</p>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div className="w-full bg-[#f9f9f9] py-12">
      <h2 className="text-3xl font-semibold">
        We create customer centric design that makes <br /> results for your company
      </h2>
      <p className="mb-6 mt-2 text-lg text-gray-600">
        We are the answer to develop scalable technology efficiently and to do sustainable business simultaneously.
      </p>
      <div className="flex items-center gap-12">
        {[1, 2, 3].map((item) => (
          <ProjectCard key={item} />
        ))}
      </div>
    </div>
  )
}

export default Projects
