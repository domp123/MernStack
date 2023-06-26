import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const Contact = () => {
  useAuthContext();

  return (
    <div className="contact">
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
              31 The Parade,
              <br />
              Norwood SA 5067
              <br />
              Adelaide
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13085.457607349028!2d138.6193607036579!3d-34.922396866752436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0c94fa7bef7b5%3A0x141a34c30d0ae895!2sPetbarn!5e0!3m2!1sen!2sau!4v1686114770579!5m2!1sen!2sau"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
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
