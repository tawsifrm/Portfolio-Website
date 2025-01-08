import React from "react";
import Experience from "./Cards/Experience";

export const experiences = [
  {
    title: "Full-stack Developer Intern",
    company: "Mhapy",
    stack: "ReactJS, TailwindCSS, NestJS, ExpressJS",
    detail:
      "Developed core functionalities for a patient-therapist matching website using ReactJS and TailwindCSS. Connected Mhapy’s API using NestJS and ExpressJS on the backend, leveraging user form inputs to provide personalized therapist recommendations, enhancing user satisfaction and matching accuracy. Utilized React media queries to craft responsive and visually captivating pages, ensuring optimal display across various devices and screen sizes, thereby improving accessibility and user experience. Used Figma to plan and prototype user interface designs, providing clear implementation guidance to ensure a consistent and intuitive user interface, aligning with project goals.",
    date: "Jan. 2024 - Present",
    link: "",
  },
  {
    title: "Web Development Team",
    company: "Electrium Mobility",
    stack: "ReactJS, TypeScript, Node.js, ExpressJS, JavaScript, Discord.js",
    detail:
      "Enhanced the website using ReactJS and TypeScript, focusing on responsiveness and accessibility. Simplified the application process for potential team members by developing a backend system using Node.js and Express that connects to a document for organizing applicants, ensuring a smooth experience and data security. Improved the Discord bot’s functionality by creating a frontend for bot configurations and implementing a calendar event creator using JavaScript and Discord.js to enhance team communication and streamline event scheduling.",
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
