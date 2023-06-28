import Image from "next/image"
import React from "react"
import { Button } from "components/Button/Button"
import Container from "components/layout/containter"
import dots from "../../public/dots.svg"
import left from "../../public/left.png"

const Empower = () => {
  return (
    <section className="w-full bg-[#f9f9f9] px-4 py-16">
      <Container classNames="bg-[#f9f9f9] flex items-center justify-between">
        <div className="w-full">
          <Image
            alt="left-img"
            src={left}
            width={500}
            height={500}
            quality={100}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="w-full">
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
          <Button className="mt-4">Send us a message</Button>
        </div>
      </Container>
    </section>
  )
}

export default Empower
