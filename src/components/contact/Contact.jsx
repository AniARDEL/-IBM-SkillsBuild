// Write all the code here
import React from "react";
import { motion } from "framer-motion";
import Popup from "reactjs-popup";

const Contact = () => {
  return (
    <section className="contact">
      <motion.form
        initial={{
          y: "5vw",
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ delay: 0.2 }}
      >
        <h2>Contact Us</h2>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="Enter your message..."
          cols="30"
          rows="10"
        ></textarea>
       <Popup trigger={<button type="button">Send</button>} modal>
  {close => (
    <div className="popup-content">
      <button className="popup-close" onClick={close}>
        &times;
      </button>
      <div className="popup-text">
        Thank you for contacting us! We will get back to you shortly.
      </div>
    </div>
  )}
</Popup>
      </motion.form>
    </section>
  );
};

export default Contact;
