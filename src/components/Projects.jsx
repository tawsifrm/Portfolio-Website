import React from "react";
import Project from "./Cards/Project";

export const projects = [
  {
    title: "Satellite Image Classification",
    stack: "Python, TensorFlow, Keras, PIL, NumPy, Matplotlib, Tkinter",
    date: "Apr. 2024",
    detail: "Developed a CNN-based deep learning model to classify satellite images into categories like Cloudy, Desert, and Water. Implemented data preprocessing, augmentation, and trained the model, evaluating its performance using accuracy and loss metrics.",
    link: "",
  },
  {
    title: "Medium Clone",
    stack: "ReactJS, TailwindCSS",
    detail:
      "A clone of the Medium homepage made using ReactJS and TailwindCSS. Implemented interactive components including Radix UI’s Accordion for collapsible sections with smooth transitions, Lenis for smooth scrolling, and Framer Motion for dynamic typing animations.",
    date: "Apr. 2024",
    link: "",
  },
  {
    title: "MCU Timeline",
    stack: "JavaScript, HTML, CSS",
    detail:
      "A responsive website to view upcoming Marvel Cinematic Universe films and series. Implemented functions to detect the user’s browser, operating system, and device type, and dynamically adjust the user experience based on these factors.",
    date: "Apr. 2024",
    link: "",
  },
  {
    title: "Microsoft Stock Price Prediction",
    stack: "Python, TensorFlow, Keras, Pandas, Matplotlib, Scikit-learn, NumPy",
    date: "Mar. 2024",
    detail: `
      Utilized Long Short-Term Memory (LSTM) neural networks to predict the closing prices of Microsoft stock.
      Preprocessed historical stock data, built and trained the LSTM model, and evaluated its accuracy in predicting future stock prices.
    `,
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
