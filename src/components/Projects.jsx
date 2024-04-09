import React from "react";
import Project from "./Cards/Project";

export const projects = [
  {
    title: "MCU Timeline",
    stack: "JavaScript, HTML, CSS",
    detail:
      "A responsive website to view upcoming Marvel Cinematic Universe films and series. Implemented functions to detect the user’s browser, operating system, and device type, and dynamically adjust the user experience based on these factors.",
    date: "Apr. 2024",
    link: "",
  },
  {
    title: "Javascript Pacman",
    stack: "JavaScript, HTML, CSS",
    detail:
      "Developed a classic arcade-style Pac-Man game using pure JavaScript. Implemented character movement, collision detection, scoring, and game state management using DOM manipulation, event handling, timeouts, arrays, and array methods for game logic.",
    date: "Feb. 2024",
    link: "",
  },
  {
    title: "Dog Breed Identifier",
    stack: "Python, TensorFlow, Keras, OpenCV, Scikit-learn, NumPy, Pandas, Matplotlib",
    detail:
      "Created a program to classify dog images into breeds using a pre-trained ResNet50V2 model. Trained and fine-tuned the model on a labeled dataset with data augmentation and customized layers.",
    date: "Jan. 2024",
    link: "",
  },
  {
    title: "Bricks Be Gone",
    stack: "Android, Java, Android Studio",
    detail:
      "Developed a classic brick breaker game for Android using Java and Android Studio. Implemented dynamic gameplay, collision detection, scoring system, health indicator, game over handling, and restart and exit functionality.",
    date: "Jan. 2024",
    link: "",
  },
  {
    title: "SuperTyper - Typing Game",
    stack: "JavaScript, HTML, CSS",
    detail:
      "Developed a fun and challenging typing game where you can enhance your typing skills. Used HTML, CSS, and JavaScript to create an engaging and responsive user interface, real-time feedback, and dynamic game logic.",
    date: "Dec. 2023",
    link: "",
  },
];

export default function Projects() {
  return (
    <>
      {projects.map(({ title, stack, detail, date, link }) => (
        <Project
          title={title}
          stack={stack}
          detail={detail}
          date={date}
          link={link}
        />
      ))}
    </>
  );
}
