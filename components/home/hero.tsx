import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"
import { Button } from "components/Button/Button"
import code from "../../public/code1.png"
import codeHighlight from "../../public/code5.png"

const Hero = () => {
  return (
    <main className="mb-28 mt-12 flex w-full items-center">
      <motion.section
        initial={{ opacity: 0, x: -90 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-1/2 space-y-6"
      >
        <Button intent="secondary">Innovate</Button>
        <h1 className="text-3xl font-semibold capitalize leading-[40px]">
          Your gateway to{" "}
          <span className="text-blue-600">
            Innovative <br /> digital solutions
          </span>
        </h1>
        <p className="max-w-[75%] text-black/60">
          Unlock new possibilities, embrace innovation, and embark on a journey of digital excellence with Falcon
          Innovations. Together, lets shape a brighter future through groundbreaking technologies and visionary ideas.
        </p>
        <div className="flex items-center gap-8">
          <Button>Lets chat</Button>
          <Button intent="secondary">Browse services</Button>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, x: 90 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4 }}
        viewport={{ once: true }}
        className="w-1/2"
      >
        <div className="relative">
          <Image
            alt="code-snippet"
            src={code}
            placeholder="blur"
            className="rounded-[12px] bg-gray-200 p-4"
            width={600}
            height={600}
            quality={100}
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            alt="code-snippet"
            src={codeHighlight}
            placeholder="blur"
            className="absolute -bottom-16 -left-24 rounded-[12px] bg-gray-200 p-4"
            width={350}
            height={350}
            quality={100}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </motion.section>
    </main>
  )
}

export default Hero
