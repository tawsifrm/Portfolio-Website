import React from "react"
import { IconContext } from "react-icons"

export default function Socials({ href, Icon, suffix }) {
  return (
    <IconContext.Provider value={{ className: "icon" }}>
      <a
        href={href ? href : "#"}
        target="_blank"
        rel="noreferrer"
        className="flex items-center whitespace-nowrap space-x-1 hover:scale-105 active:scale-95 w-fit rounded-md icon group transition-all duration-200"
      >
        <Icon />
        {suffix && (
          <h3 className="font-light text-sm group-hover:gradient-text">
            {suffix}
          </h3>
        )}
      </a>
    </IconContext.Provider>
  )
}
