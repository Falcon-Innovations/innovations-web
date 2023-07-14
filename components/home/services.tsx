import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"
import Container from "components/layout/containter"

const SERVICES = [
  {
    icon: "anchor",
    title: "Product design",
    description: "Crafting Seamless and Intuitive User Experiences that Elevate Your Brand's Digital Presence.",
  },
  {
    icon: "anchor_two",
    title: "Web development",
    description: "Crafting Seamless and Intuitive User Experiences that Elevate Your Brand's Digital Presence.",
  },
  {
    icon: "anchor_3",
    title: "App development",
    description: "Crafting Seamless and Intuitive User Experiences that Elevate Your Brand's Digital Presence.",
  },
  {
    icon: "anchor_4",
    title: "Graphic design",
    description: "Crafting Seamless and Intuitive User Experiences that Elevate Your Brand's Digital Presence.",
  },
]

const Card = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="group w-full">
    <div
      className="relative z-50 min-h-[150px] w-full max-w-full 
            shrink-0 rounded-[10px] bg-white px-6 py-4 shadow-md group-hover:bg-gradient-to-r  group-hover:from-blue-600/40 group-hover:to-blue-100
            "
    >
      <div className="z-50 mb-4 flex items-center space-x-2">
        <Image src={`${icon}.svg`} alt="calender" width={45} height={45} />
        <h4 className="z-50 font-bold capitalize sm:text-lg">{title}</h4>
      </div>
      <p className="text-black/70 group-hover:text-blue-500">{description}</p>
    </div>
  </div>
)

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
}

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 3 },
}

const Services = () => {
  return (
    <section className="w-full bg-[#f9f9f9] px-4 py-16">
      <Container classNames="bg-[#f9f9f9] flex flex-col gap-4 sm:gap-0 sm:flex-row items-center justify-between">
        <motion.div
          className="w-full sm:w-1/2"
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mb-2 flex w-full items-center gap-2 text-2xl text-orange-500">
            <div className="h-[0.8px] w-6 bg-orange-500" />
            <p>Our Services</p>
          </div>
          <h3 className="text-3xl leading-[48px]">
            Transforming Industries <br /> Through <span className="text-blue-600">Innovative</span> and <br />
            <span className="text-blue-600">Sustainable Digital</span>
            <br /> Solutions
          </h3>
        </motion.div>
        <motion.div
          className="w-full sm:w-1/2"
          initial={{ opacity: 0, x: 90 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="grid w-full grid-cols-1 place-items-center items-center justify-between gap-12 px-8 sm:grid-cols-2 sm:px-0"
          >
            {SERVICES.map((service) => (
              <motion.div key={service.title} variants={item}>
                <Card {...service} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Services
