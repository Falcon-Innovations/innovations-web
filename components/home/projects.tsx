import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import Container from "components/layout/containter"
import checkMe from "../../public/check-me-mobile.png"

const ProjectCard = () => {
  return (
    <Link className="w-full" href="#">
      <div className="flex w-full items-center justify-center bg-blue-600 px-4 py-8">
        <Image
          alt="code-snippet"
          src={checkMe}
          placeholder="blur"
          width={160}
          height={202}
          quality={100}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="bg-white p-4">
        <h4 className="text-2xl font-semibold text-[#414141]">Check Me</h4>
        <div className="mb-4 mt-2 space-x-3">
          <span className="inline-flex items-center gap-2 rounded-2xl bg-orange-100 px-2 py-1 text-sm text-orange-500 hover:enabled:bg-orange-500 hover:enabled:text-white">
            <Image src="seed.svg" alt="arrow_right" width={23} height={23} />
            Health
          </span>
          <span className="inline-flex items-center gap-2 rounded-2xl bg-orange-100 px-2 py-1 text-sm text-orange-500 hover:enabled:bg-orange-500 hover:enabled:text-white">
            <Image src="chip.svg" alt="arrow_right" width={23} height={23} />
            Technology
          </span>
        </div>
        <p className="text-[#595959]">
          Breast cancer mobile application will provide a low-cost, accessible, and convenient way for women in Cameroon
          to perform breast self-examinations and get in touch with specialists to diagnose and treat breast cancer at
          an early stage ...
        </p>
        <div className="mt-6 flex items-center space-x-6">
          <p>React Native</p>
          <p>Node JS</p>
          <p>Heroku</p>
        </div>
        <Link href="#" className="mt-2 flex items-center gap-2 text-blue-800">
          <p>View project</p>
          <Image src="arrrow_right.svg" alt="arrow_right" width={23} height={23} />
        </Link>
      </div>
    </Link>
  )
}

const Projects = () => {
  return (
    <div className="min-h-[90vh] w-full bg-[#f9f9f9] py-20">
      <Container classNames="w-full bg-[#f9f9f9]">
        <motion.h2
          className="text-3xl font-semibold"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          We create customer centric design that makes <br /> results for your company
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-6 mt-2 text-lg text-gray-600"
        >
          We are the answer to develop scalable technology efficiently and to do sustainable business simultaneously.
        </motion.p>
        <div className="flex items-center gap-12">
          {[1, 2, 3].map((item) => (
            <ProjectCard key={item} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Projects
