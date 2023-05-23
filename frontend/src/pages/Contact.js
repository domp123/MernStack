import { useAuthContext } from "../hooks/useAuthContext";
import React from "react";

const Contact = () => {
  useAuthContext();

  return (
    <div className="contact">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pets Are Us - Contact Us</title>
      </head>

      <header></header>

      <main>
        <h2>Contact Us</h2>
        <p>
          If you have any questions, concerns, or feedback, please feel free to
          reach out to us. We are here to assist you and your beloved pets in
          any way we can.
        </p>

        <div className="contact-details">
          <div className="contact-info">
            <h3>Our Location</h3>
            <p>
              Pets Are Us
              <br />
              123 Main Street
              <br />
              City, State 12345
              <br />
              United States
            </p>

            <h3>Contact Information</h3>
            <p>
              Phone: (123) 456-7890
              <br />
              Email: info@petsareus.com
            </p>
          </div>

          <div className="map-container">
            <iframe
              title="Pets Are Us Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2d-90.12345678901234!3d40.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDI5JzE4LjciTiA5MMKwNDknMjcuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <h3>Send Us a Message</h3>
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>

          <button type="submit">Send</button>
        </form>
      </main>

      <footer>
        <p>&copy; 2023 Pets Are Us. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
