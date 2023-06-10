import Head from "next/head"
import Hero from "components/home/hero"
import Services from "components/home/services"
import Container from "components/layout/containter"
import Navbar from "components/shared/navbar"

export default function Web() {
  return (
    <>
      <Head>
        <meta property="og:url" content="https://next-enterprise.vercel.app/" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Falcon Innovations</title>
      </Head>
      <Container>
        <Navbar />
        <Hero />
      </Container>
      <Services />
    </>
  )
}
