import Image from 'next/image'
import React from 'react'
import contact from "../../public/contact.png"


const Contact = () => {
    return (
        <div className='w-full mt-32 flex'>
            <div className='w-1/3'>
                <Image
                    alt="code-snippet"
                    src={contact}
                    placeholder="blur"
                    width={416}
                    height={645}
                    quality={100}
                    style={{
                        objectFit: "cover",
                    }}
                />
            </div>
            <div className='w-2/3'>
                <div className="flex items-center gap-2 text-orange-500">
                    <span className="h-[0.5px] w-8 bg-orange-500" />
                    <h1 className="text-2xl">Get in touch</h1>
                </div>
                <div className="w-full flex bg-red-500 items-center gap-2">
                    <div className="w-full">
                        <p>Request</p>
                        <h1>A call back</h1>
                    </div>
                    <p>
                        Thank you for choosing Falcon Innovation!
                        Please fill the form below with your request. Our team will reply you shortly.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact