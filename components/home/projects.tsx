import React from 'react'

const ProjectCard = () => {
    return <div className='w-full h-96'>
        <div className="w-full bg-blue-500 h-1/2" />
        <div className="p-4 bg-white">
            <h4 className='font-semibold text-[#414141] text-2xl'>Check Me</h4>
            <div className="space-x-3 mt-2 mb-4">
                <span className='p-2 rounded-lg bg-orange-100 text-orange-500 hover:enabled:bg-orange-500 hover:enabled:text-white'>
                    Health
                </span>
                <span className='p-2 rounded-lg bg-orange-100 text-orange-500 hover:enabled:bg-orange-500 hover:enabled:text-white'>
                    Technology
                </span>
            </div>
            <p>breast cancer mobile application will provide a low-cost, accessible, and convenient way for women in Cameroon to perform breast self-examinations and get in
                touch with specialists to diagnose and treat breast cancer at an early stage.
            </p>
            <div className="flex items-center space-x-6 mt-6">
                <p>React Native</p>
                <p>Node JS</p>
                <p>Heroku</p>
            </div>
        </div>
    </div>
}

const Projects = () => {
    return (
        <div className='bg-[#f9f9f9] w-full py-12'>
            <h2 className='text-3xl font-semibold'>
                We create customer centric design that makes <br /> results for your  company
            </h2>
            <p className='text-lg text-gray-600 mt-2 mb-6'>
                We are the answer to develop scalable technology efficiently and to do sustainable business simultaneously.
            </p>
            <div className='flex items-center gap-12'>
                {
                    [1, 2, 3].map((item) => <ProjectCard key={item} />)
                }
            </div>
        </div>
    )
}

export default Projects