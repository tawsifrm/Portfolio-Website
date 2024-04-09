import { motion } from "framer-motion"

const fade = {
  out: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}

const imgSlide = {
  out: {
    opacity: 0,
    x: "2.5vw",
  },
  in: {
    opacity: 0.1,
    x: 0,
    transition: {
      duration: 1.4,
      ease: "easeOut",
    },
  },
}

const textUp = {
  down: {
    y: 40,
  },
  up: {
    y: 0,
    transition: {
      duration: 1.3,
    },
  },
}

export default function MainHero() {
  return (
    <motion.section
      variants={fade}
      initial="out"
      animate="in"
      className="flex relative w-auto h-screen overflow-hidden justify-center items-center"
    >
      <motion.img
        variants={imgSlide}
        initial="out"
        animate="in"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3fb179a4-6b7f-494e-b735-d9a9d8700761/d5kevoi-c164481b-e731-4bb7-b6de-e44dc43330b5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmYjE3OWE0LTZiN2YtNDk0ZS1iNzM1LWQ5YTlkODcwMDc2MVwvZDVrZXZvaS1jMTY0NDgxYi1lNzMxLTRiYjctYjZkZS1lNDRkYzQzMzMwYjUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UkQZ8M9oX0a620Kv1D8E-W6M_j_ekTIqrRIYLOMdbis"
        alt="hero img"
        className="h-full min-w-max absolute top-0 -right-[95%] sm:-right-[50%] md:-right-[30%] lg:-right-[10%] -z-[1] transition-all duration-100 opacity-[10%]"
      />

      <div className="flex flex-col justify-center md:flex-row md:justify-start w-full px-6 text-gray-500">
        <div className="px-20 lg:px-64 py-14 md:text-right text-center">
          <motion.h1
            variants={textUp}
            initial="down"
            animate="up"
            className="text-6xl md:text-7xl pb-2 overflow-hidden"
          >
            Hi, I'm
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-fuchsia-500">
              {" "}
              Tawsif Mayaz.
            </span>
          </motion.h1>
          <motion.h2
            initial={{
              y: 50,
            }}
            animate={{ y: 0, transition: { duration: 1.4 } }}
            className="text-lg md:text-xl font-light"
          >
            An{" "}
            <span className="text-xl border-b-2 border-b-fuchsia-500/70 basic-focus-animation p-1 whitespace-nowrap">
              Electrical Engineering
            </span>{" "}
            student at{" "}
            <span className="text-xl border-b-2 border-b-fuchsia-500/70 p-1 basic-focus-animation whitespace-nowrap">
              University of Waterloo.
            </span>
          </motion.h2>
        </div>
      </div>
    </motion.section>
  )
}
