import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Button } from "components/Button/Button"
import francis from "../../public/francis.png"
import github from "../../public/GitHub.png"
import linkedIn from "../../public/linkedin.png"
import twitter from "../../public/twitter.png"

const Card = () => {
  return (
    <div className="w-full">
      <Image
        alt="code-snippet"
        src={francis}
        placeholder="blur"
        className="mb-4 rounded-full bg-[#9683A8]"
        width={98}
        height={98}
        quality={100}
        style={{
          objectFit: "cover",
        }}
      />
      <h2 className="text-lg font-semibold text-[#414141]">Apoh Eldrige</h2>
      <h3 className="text-sm text-blue-600">Co-Founder & CEO</h3>
      <p className="mb-4 mt-2 text-gray-600">
        We are a cross-disciplinary team that loves to create great experiences for our customers
      </p>
      <div className="flex w-full items-center gap-4">
        <Link href="#">
          <Image
            alt="code-snippet"
            src={github}
            placeholder="blur"
            className="rounded-full"
            width={18}
            height={18}
            quality={100}
            style={{
              objectFit: "cover",
            }}
          />
        </Link>
        <Link href="#">
          <Image
            alt="code-snippet"
            src={linkedIn}
            placeholder="blur"
            className="rounded-full"
            width={18}
            height={18}
            quality={100}
            style={{
              objectFit: "cover",
            }}
          />
        </Link>
        <Link href="#">
          <Image
            alt="twitter"
            src={twitter}
            placeholder="blur"
            className="rounded-full"
            width={18}
            height={18}
            quality={100}
            style={{
              objectFit: "cover",
            }}
          />
        </Link>
      </div>
    </div>
  )
}

const Team = () => {
  return (
    <div className="mt-32 flex w-full">
      <div className="w-2/5">
        <div className="flex items-center gap-2 text-orange-500">
          <span className="h-[0.5px] w-8 bg-orange-500" />
          <h1 className="text-2xl">Our Team</h1>
        </div>
        <p className="mb-4 mt-2 max-w-[82%] text-gray-800">
          We are a cross-disciplinary team that loves to create great experiences for our customers
        </p>
        <div className="flex w-full items-center gap-4">
          <Button intent="info">About us</Button>
          <Button>Career opportunities</Button>
        </div>
      </div>
      <div className="grid w-3/5 grid-cols-3 gap-12">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} />
        ))}
      </div>
    </div>
  )
}

export default Team
