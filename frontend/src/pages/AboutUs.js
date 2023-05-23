import { useAuthContext } from "../hooks/useAuthContext";
import React from "react";

const AboutUs = () => {
  useAuthContext();

  const vetStaff = [
    { name: "Dr. John Smith", position: "Veterinarian" },
    { name: "Dr. Sarah Johnson", position: "Veterinarian" },
    { name: "Dr. Amanda Williams", position: "Veterinarian" },
    { name: "Dr. Emily Brown", position: "Veterinarian" },
  ];

  return (
    <div className="home">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pets Are Us</title>
      </head>

      <header></header>

      <main>
        <img
          src="https://www.petplan.com.au/blog/wp-content/uploads/2013/10/Dog-with-vet-staff.jpg"
          alt="Pets Are Us"
        />

        <h2>Welcome to Pets Are Us!</h2>
        <p>
          We are a group of passionate veterinarians who own a vet clinic and
          have created a website to help puppy and cat owners connect and
          arrange playdates for their pets.
        </p>
        <h3>Meet Our Vet Staff</h3>
        <ul>
          {vetStaff.map((staff, index) => (
            <li key={index}>{`${staff.name} - ${staff.position}`}</li>
          ))}
        </ul>
        <h3>About Us</h3>
        <p>
          At Pets Are Us, we believe that socialization and playtime are crucial
          for the well-being of pets. Our website allows pet owners to create
          profiles, search for nearby owners, and arrange playdates for their
          puppies and cats. We are dedicated to fostering a sense of community
          among pet owners and providing a platform for pets to make new
          friends.
        </p>
      </main>
      <footer>
        <p>&copy; 2023 Pets Are Us. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
