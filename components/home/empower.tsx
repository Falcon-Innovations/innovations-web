import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"
import { Button } from "components/Button/Button"
import Container from "components/layout/containter"
import dots from "../../public/dots.svg"
import left from "../../public/left.png"

const Empower = () => {
  return (
    <section className="w-full px-4 py-16">
      <Container classNames="flex flex-col sm:flex-row gap-6 sm:gap-0 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="w-full"
        >
          <Image
            alt="left-img"
            src={left}
            width={500}
            height={500}
            className="h-96 w-96 sm:h-[500px] sm:w-[500px]"
            quality={100}
            style={{
              objectFit: "cover",
            }}
          />
        </motion.div>
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: 90 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <div className="mr-4 flex items-end justify-end">
            <Image
              alt="dots-snippet"
              src={dots}
              width={250}
              height={250}
              quality={100}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <h1 className="my-6 text-3xl font-semibold capitalize leading-[40px]">
            Empowering change through <br />
            <span className="text-blue-600">innovative solutions</span>
          </h1>
          <p className="text-black/60">
            Transforming Ideas into Reality: With a passion for innovation and a dedication to excellence, our team at
            Falcon Innovations is committed to creating sustainable digital solutions that address real-world
            challenges. Through cutting-edge technology and creative expertise, we empower businesses and individuals to
            embrace digital transformation and unlock new possibilities.
          </p>
          <Button className="mt-4">
            <Image src="chat-bubbles.svg" alt="chat-bubbless" width={18} height={18} className="mr-2" />
            Send us a message
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}

export default Empower
