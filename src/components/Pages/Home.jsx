import React from "react"
import About from "../About"
import Contact from "../Contact"
import Experience from "../myExperience"
import Footer from "../Footer"
import MainHero from "../MainHero"
import MainHeroV2 from "../MainHeroV2"

export const scrollAnimation = {
  initial: { opacity: 0, y: 10 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: 0.3 },
  },
}

export default function Home({ isLoaded }) {
  return (
    <>
      <MainHeroV2 isLoaded={isLoaded} />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}
