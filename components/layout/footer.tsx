import Image from "next/image"
import Link from "next/link"
import React from "react"
import Container from "./containter"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <section className="mt-60 w-full bg-[#f9f9f9]">
      <Container classNames="bg-[#f9f9f9] text-black/30 flex items-start justify-between py-16 px-4">
        <div className="flex flex-col gap-4">
          <h1>
            Falcon <span className="text-blue-800">Innovations</span>
          </h1>
          <p className="max-w-[200px]">
            OurStudio is a digital agency UI / UX Design and Website Development located in Ohio, United States of
            America
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-blue-800">Service</h1>
          <Link href="#">App development</Link>
          <Link href="#">Product design</Link>
          <Link href="#">Web development</Link>
          <Link href="#">Graphic design</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-blue-800">Company</h1>
          <Link href="#">Our team</Link>
          <Link href="#">Portfolio</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Contact us</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-blue-800">Join our newsletter</h1>
        </div>
      </Container>
      <Container classNames="py-12 px-4 text-black/30 w-full">
        <div className="mb-8 h-[1px] w-full bg-blue-100" />
        <div className="flex w-full items-center justify-between">
          <div>&copy; falconinnovations {currentYear}</div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Image src="location_on.svg" alt="arrow_right" width={23} height={23} />
              Douala, Cameroon
            </div>
            <div className="flex items-center gap-2">
              <Image src="email.svg" alt="arrow_right" width={23} height={23} />
              contact@falconinnovations.com
            </div>
            <div className="flex items-center gap-2">
              <Image src="call.svg" alt="arrow_right" width={23} height={23} />
              +237 673993113
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Footer
