import React, { useState } from "react";
import { ScrollBackToTop } from "../components/index";

const Contact = ({ nav }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessasge] = useState("");

  return (
    <div
      name="contact"
      id="contact"
      className="w-full h-screen flex justify-center items-center p-8"
    >
      <form
        method="POST"
        action="https://getform.io/f/65c92a0f-7a6c-4355-83a7-dcd78c5a552f"
        className="flex flex-col max-w-screen-md w-full font-semibold text-gray-800"
      >
        <div className="pb-6">
          <p className="text-4xl border-b-4 border-blue-600 mb-4">Get in Touch</p>
        </div>
        <input
          className="bg-white border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="bg-white border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          type="email"
          placeholder="Email"
          name="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
        <textarea
          className="bg-white border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          name="message"
          rows="5"
          placeholder="Message"
          onChange={(e) => setUserMessasge(e.target.value)}
          value={userMessage}
          required
        ></textarea>
        <button
          disabled={!userEmail || !userMessage}
          type="submit"
          className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition hover:bg-blue-700 disabled:bg-gray-400"
        >
          Let's Collaborate
        </button>
      </form>
      {!nav && <ScrollBackToTop />}
    </div>
  );
};

export default Contact;
