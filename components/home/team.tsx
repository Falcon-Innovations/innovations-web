import Image, {StaticImageData} from "next/image"
import Link from "next/link"
import React from "react"
import {Button} from "components/Button/Button"
import Danilo from '../../public/Danilo.jpeg';
import Dee from '../../public/Dee.jpeg';
import Eldrige from '../../public/Eldrige.jpg';
import francis from "../../public/francis.png"
import github from "../../public/GitHub.png"
import linkedIn from "../../public/linkedin.png"
import twitter from "../../public/twitter.png"

type Media = {
  twitter?: string
  linkedin?: string
  github?: string
}

type CardProps = {
  image?: StaticImageData
  name: string
  title: string
  highlight: string
  social?: Media
}

const TEAM = [
  {
    name: "Yuyun Francis",
    title: "CEO",
    highlight: "We are a cross discplinary team that create great experiences for our customers",
    imag: francis,
  },
  {
    name: "Apoh Eldrige",
    title: "CTO",
    highlight: "We are a cross discplinary team that create great experiences for our customers",
    social: {
      twitter: "https://twitter.com/EldrigeApoh",
      linkedin: "https://www.linkedin.com/in/apoh-eldrige/",
      github: "https://github.com/eldrige",
    },
    image: Eldrige,
  },
  {
    name: "Didier Vernyuy Yangeh",
    title: "CCO",
    highlight: "We are a cross discplinary team that create great experiences for our customers",
    social: {
      linkedin: "https://www.linkedin.com/in/didier-yangeh-20a2b524a",
    },
    image: Dee
  },
  {
    name: "Bongsai Danilo",
    title: "Project lead Check Me",
    highlight: "We are a cross discplinary team that create great experiences for our customers",
    social: {
      linkedin: "https://www.linkedin.com/in/didier-yangeh-20a2b524a",
    },
    image: Danilo
  },
]

const Card = ({image = francis, name, title, highlight, social}: CardProps) => {
  return (
    <div className="flex w-full flex-row justify-between gap-3 sm:flex-col sm:gap-0">
      <div className="w-[98px] h-[98px] rounded-full">
        <Image
          alt="code-snippet"
          src={image}
          placeholder="blur"
          className="inline-flex rounded-full bg-[#9683A8]"
          // width={98}
          // height={98}
          quality={100}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-[#414141]">{name}</h2>
        <h3 className="text-sm text-blue-600">{title}</h3>
        <p className="mb-4 mt-2 text-gray-600">{highlight}</p>
        <div className="flex w-full items-center gap-4">
          <Link href={social?.github ?? "#"}>
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
          <Link href={social?.linkedin ?? "#"}>
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
          <Link href={social?.twitter ?? "#"}>
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
    </div>
  )
}

const Team = () => {
  return (
    <div className="mt-32 flex w-full flex-col gap-6 px-4 sm:flex-row sm:gap-0 sm:px-0">
      <div className="w-full sm:w-2/5">
        <div className="flex items-center gap-2 text-orange-500">
          <span className="h-[0.5px] w-8 bg-orange-500" />
          <h1 className="text-2xl">Our Team</h1>
        </div>
        <p className="mb-4 mt-2 max-w-fit text-gray-800 sm:max-w-[82%]">
          We are a cross-disciplinary team that loves to create great and innovative experiences for our customers
        </p>
        <div className="flex w-full items-center justify-between gap-4 sm:justify-start">
          <Button intent="info">About us</Button>
          <Button>Career opportunities</Button>
        </div>
      </div>
      <div className="mt-8 flex w-full grid-cols-3 flex-col gap-12  sm:mt-0 sm:grid sm:w-3/5">
        {TEAM.map((member) => (
          <Card key={member.name} {...member} />
        ))}
      </div>
    </div>
  )
}

export default Team
