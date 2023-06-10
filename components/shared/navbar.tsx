import { motion } from "framer-motion"
import Link from "next/link"
import React from "react"

import { Button } from "components/Button/Button"

const slideInFromTop = {
  initial: { y: -100 },
  animate: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const Navbar = () => {
  return (
    <motion.nav
      initial="initial"
      animate="animate"
      variants={slideInFromTop}
      viewport={{ once: true }}
      className="flex  w-full items-center justify-between py-4"
    >
      <Link href="/" className="">
        <h1 className="text-2xl font-bold">
          Falcon<span className="text-blue-600">Innovations</span>
        </h1>
      </Link>
      <div className="flex items-center justify-between gap-16">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/servicess">Services</Link>
        <Link href="/projects">Projects</Link>
        <Button href="/" intent="primary">
          Contact
        </Button>
      </div>
    </motion.nav>
  )
}

export default Navbar
