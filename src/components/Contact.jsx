import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Button from "./Btn";
import ContactForm from "./ContactForm";
import { scrollAnimation } from "./Pages/Home";
import Socials from "./Socials";
import ResumePDF from "/Resume-public/Resume-1-04-09.pdf";

export default function Contact() {
  return (
    <motion.section
      initial={ scrollAnimation.initial }
      whileInView={ scrollAnimation.whileInView }
      viewport={ { once: true } }
      id="contact"
      className="flex flex-col lg:flex-row min-h-fit m-8 md:m-16 md:mx-20 border"
    >
      <div className="flex flex-col lg:max-w-[50%] grow bg-gray-50 p-8 md:p-12 rounded-l-xl">
        <h1 className="text-3xl font-semibold text-gray-700 pb-8">
          Like what you see?{ " " }
          <span className="gradient-text whitespace-nowrap">Get in touch!</span>
        </h1>

        <div className="flex flex-col grow space-y-6">
          <div>
            <h2 className="font-light text-sm">Email</h2>
            <p className="text-lg font-medium">tawsifmayaz@gmail.com</p>
          </div>
          <div className="space-y-4">
            <h2 className="font-light text-sm">Links</h2>
            <div className="flex flex-col space-y-3">
              <Socials
                Icon={ FaGithub }
                href="https://github.com/tawsifrm"
                suffix="/ tawsifrm"
              />
              <Socials
                Icon={ FaLinkedinIn }
                href="https://www.linkedin.com/in/tawsif-mayaz-446a4b211/"
                suffix="/ tawsif-mayaz"
              />
            </div>
          </div>
          <div className="pt-2 align-bottom">
            <a href={ ResumePDF } target="_blank" rel="noreferrer">
              <Button text="Resume" />
            </a>
          </div>
        </div>
      </div>
      <ContactForm />
    </motion.section>
  );
}
