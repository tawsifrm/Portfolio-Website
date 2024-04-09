import React from "react"
import Card from "./Card"

export default function Project({ title, subtitle, stack, date, img, detail }) {
  return (
    <div className="flex flex-col items-center">
      <Card grow img={img}>
        <div className="space-y-4 max-w-4xl">
          <div>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col md:flex-row md:items-end md:space-x-2">
                <h1 className="text-xl font-semibold text-gray-700">{title}</h1>
                <h2 className="text-l font-medium text-gray-500">{subtitle}</h2>
              </div>
              <h2 className="font-light">{date}</h2>
            </div>
            <h2 className="pt-2 md:pt-0 italic font-normal">
              Tech Stack:{" "}
              <span className="sm:gradient-text text-fuchsia-600 font-light">
                {stack}
              </span>
            </h2>
          </div>
          <p className="font-light">{detail}</p>
        </div>
      </Card>
    </div>
  )
}
