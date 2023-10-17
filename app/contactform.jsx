"use client";
import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check for empty fields
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all the required fields.");
      return;
    }
  
    setLoading(true);
    emailjs
      .send(
        "service_l7rkcwr",
        "template_k6nu8zm",
        {
          from_name: form.name,
          to_name: "AaronSmith",
          from_email: form.email,
          to_email: "arnhsmith@gmail.com",
          message: form.message,
        },
        "LJ4mLT8Pe9hR-lLgy"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank You for your interest. I will contact you soon.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong");
        }
      );
  };
  

  return (
    <div
      id="contact-form"
      className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden"
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className=" form  flex flex-col "
      >
        <h1 id="contact-text">CONTACT ME</h1>
        <label className="flex flex-col">
          <span className="text-white font-medium ">Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="bg-tertiary py-2 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="bg-tertiary py-2 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Message</span>
          <textarea
            // rows="7"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="bg-tertiary py-2 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 py-2 px-4 rounded-lg text-white font-bold shadow-md shadow-primary outline-none w-fit transition duration-300 transform hover:scale-105"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
