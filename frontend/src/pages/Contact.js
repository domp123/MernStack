import React, { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const Contact = () => {
  useAuthContext();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDGPWOrft6yvbJ7-IvAnZBs2BFq2w3fTBo`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = initMap;

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initMap = () => {
    // Create a new map instance
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 40.7128, lng: -74.006 },
      zoom: 12,
    });

    // Add a marker to the map
    new window.google.maps.Marker({
      position: { lat: 40.7128, lng: -74.006 },
      map: map,
      title: "Pets Are Us Location",
    });
  };

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
            <div id="map" style={{ width: "600px", height: "450px" }}></div>
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
