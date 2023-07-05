import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Card = () => {
    return (
        <div className="h-80 w-full">
            <div className="h-2/3 w-full relative bg-blue-500 rounded-t-xl" >
                <Image
                    src="photographer.png"
                    alt="photographer"
                    className='w-full h-full'
                    width={500}
                    height={500}
                />
                <div className="absolute backdrop-blur-sm bg-white/30 bottom-0 px-2 py-1 h-[25%] w-full mx-auto flex items-center justify-between rounded-t-xl">
                    <div className='flex items-center gap-4 text-xs text-white'>
                        <div className="flex items-center gap-2 ">
                            <Image
                                src="user.svg"
                                alt="user"
                                width={18}
                                height={18}
                            />
                            Bongsai
                        </div>
                        <div className="flex items-center gap-2">
                            <Image
                                src="calendar.svg"
                                alt="calender"
                                width={18}
                                height={18}
                            />
                            June 22,2023
                        </div>
                    </div>
                    <button className="rounded-3xl cursor-default bg-[#FEFEFE]/60 text-blue-600 text-sm py-1 px-2">Design</button>
                </div>
            </div>
            <div className="bg-white p-4">
                <h4 className="text-2xl font-semibold text-[#414141]">Check Me</h4>
                <p className='text-[#595959]'>
                    breast cancer mobile application will provide a low-cost, accessible, and convenient way for women in Cameroon
                    to perform breast self-examinations and get in touch with specialists to diagnose and treat breast cancer at
                    an early stage.
                </p>
                <Link href="#" className="mt-6 flex items-center text-blue-800 gap-2">
                    <p>Read more</p>
                    <Image
                        src="arrrow_right.svg"
                        alt="arrow_right"
                        width={23}
                        height={23}
                    />
                </Link>
            </div>
        </div>
    )
}

const Blog = () => {
    return (
        <div className="w-full mt-32">
            <div className="flex justify-center items-center gap-2 text-orange-500">
                <span className="h-[0.5px] w-8 bg-orange-500" />
                <h1 className="text-2xl">Our blog</h1>
            </div>
            <h1 className="text-center font-semibold text-4xl text-[#414141] mb-8 mt-2">
                Read our latest post & the <br /> new tech trends
            </h1>
            <div className="w-full flex items-center justify-between gap-12">
                {
                    [1, 2, 3].map((item) => (
                        <Card key={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Blog