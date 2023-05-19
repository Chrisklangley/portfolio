import React from "react";
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="contact">
      <div>
        <h1>Contact</h1>
        <p>Looking forward to hearing from you</p>
      </div>
      <div>
        <form
          method="POST"
          target="_blank"
          action="https://formsubmit.co/christopherlangley.dev@gmail.com"
        >
          <div className="name-label">
            <label htmlFor="name">Name* </label>
            <input
              name="name"
              type="text"
              className="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="email-sub">
            <label htmlFor="email">
              Email*
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="subject">
              Subject
              <input
                type="text"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </label>
          </div>
          <div className="message">
            <textarea
              rows="5"
              cols="33"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message..."
            ></textarea>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
