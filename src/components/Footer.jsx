import React from "react"

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center h-[25vh] bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-500 text-slate-50 p-6 space-y-3">
      <h1 className="font-semibold text-xl">Tawsif Mayaz.</h1>
      <div className="flex items-center space-x-4 text-slate-50 font-light p-2 px-4 rounded-lg">
        <a
          href="#top"
          className="hover:bg-white hover:text-gray-500 basic-focus-animation transition-all rounded-md px-2 py-1"
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:bg-white hover:text-gray-500 basic-focus-animation transition-all rounded-md px-2 py-1"
        >
          About
        </a>
        <a
          href="#experiences"
          className="hover:bg-white hover:text-gray-500 basic-focus-animation transition-all rounded-md px-2 py-1"
        >
          Experiences
        </a>
        <a
          href="#contact"
          className="hover:bg-white hover:text-indigo-500 hover:font-medium basic-focus-animation transition-all rounded-md px-2 py-1"
        >
          Contact
        </a>
      </div>
    </div>
  )
}
