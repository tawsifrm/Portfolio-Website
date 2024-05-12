import React from "react";
import Experience from "./Cards/Experience";

export const experiences = [
  {
    title: "Web Development Intern",
    company: "Mhapy",
    stack: "React, TailwindCSS",
    detail:
      "Developed core functionalities for a patient-therapist matching website using React and TailwindCSS. Integrated Mhapy’s API to match users to therapists based on their form choices. Designed a visually appealing and responsive landing page for improved user experience. Planned and prototyped user interface designs using Figma for implementation guidance.",
    date: "Jan. 2024 - Present",
    link: "",
  },
  {
    title: "Firmware Team Member",
    company: "UWOrbital",
    stack: "C, FreeRTOS",
    detail:
      "Developed real-time software and drivers for TI RM46 microcontroller in C and FreeRTOS. Implemented responsive OS interrupt handling for temperature sensors like the LM75BD. Designed I2C-based sensor functions and UART data transmission for reliable system operation.",
    date: "Jul. 2023 - May 2024",
    link: "",
  },
];

export default function Experiences() {
  return (
    <>
      {experiences.map(({ title, company, stack, detail, date, link }) => (
        <Experience
          title={company}
          subtitle={title}
          stack={stack}
          detail={detail}
          date={date}
          link={link}
        />
      ))}
    </>
  );
}
