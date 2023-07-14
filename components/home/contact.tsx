import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"
import { useForm } from "react-hook-form"
import { Button } from "components/Button/Button"
import { Input } from "components/Input/Input"
import Container from "components/layout/containter"
import { TextArea } from "components/TextArea/TextArea"
import contact from "../../public/contact.png"

type Services = "UI/UX Design" | "Web Dev" | "App dev" | "Digital Marketing" | "SEO"

type FormData = {
  fullName: string
  email: string
  phoneNumber: string
  service?: Services
  message?: string
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({})

  return (
    <section className="mt-60 w-full bg-[#f9f9f9] py-20">
      <Container classNames="flex w-full gap-12">
        <motion.div
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="hidden w-2/5 sm:block"
        >
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 90 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="w-full px-4 sm:w-3/5 sm:px-0"
        >
          <div className="flex items-center gap-2 text-orange-500">
            <span className="h-[0.5px] w-8 bg-orange-500" />
            <h1 className="text-2xl">Get in touch</h1>
          </div>
          <div className="flex w-full flex-col items-center gap-2 sm:flex-row ">
            <div className="w-full">
              <p>Request</p>
              <h1 className="text-3xl font-semibold text-[#414141]">A call back</h1>
            </div>
            <p className="text-sm text-[#595959]">
              Thank you for choosing Falcon Innovation! Please fill the form below with your request. Our team will
              reply you shortly.
            </p>
          </div>
          <form className="mt-8 flex w-full grid-cols-2 flex-col gap-8 sm:grid">
            <Input
              placeholder="Full name"
              registration={register("fullName", { required: "This is a required field" })}
              error={errors.fullName}
            />
            <Input
              placeholder="Email address"
              registration={register("email", { required: "This is a required field" })}
              error={errors.email}
            />
            <Input
              placeholder="Phone number"
              registration={register("phoneNumber", { required: "This is a required field" })}
              error={errors.phoneNumber}
            />
            <Input
              placeholder="Service"
              registration={register("service", { required: "This is a required field" })}
              error={errors.service}
            />
            <div className="col-span-2 w-full">
              <TextArea placeholder="Message" registration={register("message")} rows={6} />
            </div>
            <Button className="max-w-[12rem]">Submit</Button>
          </form>
        </motion.div>
      </Container>
    </section>
  )
}

export default Contact
