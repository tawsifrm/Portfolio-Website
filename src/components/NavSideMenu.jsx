import React from "react"
import { motion } from "framer-motion"

const enterSidePanel = {
  initial: {
    x: "50vw",
  },
  animate: {
    x: 0,
    transition: {
      type: "tween",
      duration: 0.4,
      ease: "easeOut",
      delayChildren: 0.2,
    },
  },
  exit: {
    x: "50vw",
    transition: {
      duration: 0.2,
    },
  },
}

const enterList = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
    },
  },
}

const enterItem = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

export default function NavSideMenu({ menuItems, special, setShow }) {
  return (
    <motion.button
      variants={enterSidePanel}
      initial="initial"
      animate="animate"
      exit="exit"
      onClick={(e) => {
        setShow(false)
      }}
      className="flex flex-col align-top md:hidden bg-gradient-to-l from-white via-white/[70%] fixed top-0 right-0 h-screen w-1/2 font-light"
    >
      <motion.ul
        variants={enterList}
        initial="hidden"
        animate="visible"
        className="w-full h-full text-right"
      >
        <motion.li
          variants={enterItem}
          className="flex justify-end pt-8 pb-2 px-6 group hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 stroke-indigo-600 group-hover:scale-125 group-hover:rotate-180 transition-all duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </motion.li>

        {Object.keys(menuItems).map((item) =>
          special.find((_item) => _item === item) ? (
            <a
              href={menuItems[item]}
              target="_blank"
              rel="noreferrer"
              className="w-full h-full"
              key={`NavItem${item}`}
            >
              <motion.li
                variants={enterItem}
                className="w-full cursor-pointer text-violet-600 hover:border-r-4 hover:border-violet-600 transition-all duration-200 p-5"
              >
                {item}
              </motion.li>
            </a>
          ) : (
            <a
              href={menuItems[item]}
              key={`NavItem${item}`}
              className="w-full h-full"
            >
              <motion.li
                variants={enterItem}
                className=" w-full cursor-pointer hover:border-r-4 hover:border-violet-600 transition-all duration-200 p-5"
              >
                {item}
              </motion.li>
            </a>
          )
        )}
      </motion.ul>
    </motion.button>
  )
}
