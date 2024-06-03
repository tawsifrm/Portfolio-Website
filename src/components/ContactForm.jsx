import React, { useState } from "react";
import Input from "./Input";
import Button from "./Btn";
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    const templateParams = {
      firstName,
      lastName,
      email,
      subject,
      body
    };

    emailjs.send('service_yepvjbk', 'template_3mxu5al', templateParams, 'ZIdcjgmbQs-5VIHSD')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent!');
      })
      .catch((error) => {
        console.error('FAILED...', error);
        alert('There was an error sending your message. Please try again.');
        console.log('Error details:', error);
      });
  };

  return (
    <div className="relative flex flex-col lg:max-w-[50%] grow overflow-hidden">
      <form className="space-y-3 m-8 md:m-12" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:space-x-4 justify-between">
          <Input
            label="First-Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="John"
            required
          />
          <Input
            label="Last-Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Doe"
            required
          />
        </div>
        <Input
          label="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError("");
          }}
          type="email"
          placeholder="johndoe@example.com"
          required
        />
        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        <Input
          label="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Tawsif, your story has touched the depths of my soul..."
          required
        />
        <div className="flex flex-col shrink">
          <label
            htmlFor="contact-body"
            className="font-extralight text-xs py-[0.125rem] px-1 text-fuchsia-500 "
          >
            Body
          </label>
          <textarea
            name="contact-body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="p-3 border rounded-md text-sm font-light text-gray-500 min-h-[50px] h-fit focus-within:ring-2 focus-within:ring-fuchsia-500 focus-within:ring-offset-2 transition-all"
            required
          />
        </div>
        <Button text="Submit" type="submit" className="w-full" bg="bg-fuchsia-500" />
      </form>
    </div>
  );
}
