import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"
import NavSideMenu from "./NavSideMenu"

const enterNav = {
  out: {
    y: "-25%",
    opacity: 0,
  },
  in: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 1,
      ease: "easeInOut",
    },
  },
}

// const enterSideMenu = {
//   out: {
//     x: -100,
//     transition: {
//       duration: 0.4,
//     },
//   },
//   in: {
//     x: 0,
//     transition: {
//       duration: 0.6,
//     },
//   },
// }

// Nav height = 90px
export default function Navbar({ mainText, menuItems, special }) {
  const [showSideMenu, setShowSideMenu] = useState(false)

  return (
    <motion.nav
      // key="nav"
      // variants={enterNav}
      // initial="out"
      // animate="in"
      className="fixed flex backdrop-filter backdrop-blur-sm backdrop-opacity-100 backdrop bg-gradient-to-b py-6 px-0 hover:bg-white transition-colors duration-200 text-center text-gray-700 w-screen z-50 group"
    >
      <motion.div
        layoutId="nav-main-button"
        layout="position"
        className="flex justify-between w-screen mx-0 px-8 md:px-[4rem] lg:px-40"
      >
        {/* Nav Main */}
        <a
          href="#top"
          className="px-4 py-1 text-lg md:text-xl bg-white/70 rounded-full border-b-2 border-violet-500 hover:scale-105 hover:shadow-lg hover:rounded-2xl active:scale-95 active:shadow-inner active:bg-gray-100 transition-all duration-200"
        >
          {mainText ? mainText : "Nav Main."}
        </a>

        {/* Nav Full Menu*/}
        <motion.div
          variants={enterNav}
          initial="out"
          animate="in"
          className="hidden md:flex space-x-3 lg:space-x-4 font-light items-center"
        >
          {Object.keys(menuItems).map((item) =>
            special.find((_item) => _item === item) ? (
              <a
                href={menuItems[item]}
                target="_blank"
                rel="noreferrer"
                key={Math.random()}
                className="bg-indigo-500 text-slate-200 font-bold rounded-full px-3 hover:border-b-4 hover:border-fuchsia-600/50 active:border-0 active:shadow-inner transition-all duration-150"
              >
                {item}
              </a>
            ) : (
              <a
                href={menuItems[item]}
                key={Math.random()}
                className="bg-white/60 rounded-full px-3 hover:border-b-4 hover:border-violet-600/50 active:border-0 active:shadow-inner transition-all duration-150"
              >
                {item}
              </a>
            ),
          )}
        </motion.div>

        {/* Nav Condensed Sidemenu Button */}
        <motion.button
          variants={enterNav}
          initial="out"
          animate="in"
          onClick={(e) => {
            setShowSideMenu(true)
          }}
          className={`md:hidden ${
            showSideMenu ? "hidden" : ""
          } rounded-full drop-shadow-xl text-slate-300 group-hover:text-slate-500 hover:scale-105 hover:shadow-md hover:shadow-violet-600/50 hover:bg-white hover:text-gray-600 transition-all duration-150 p-1 active:shadow-inner active:bg-violet-50 active:scale-95 `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
        </motion.button>

        <AnimatePresence>
          {showSideMenu && (
            <NavSideMenu
              menuItems={menuItems}
              special={special}
              setShow={setShowSideMenu}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  )
}
