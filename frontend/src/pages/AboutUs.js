import { useAuthContext } from "../hooks/useAuthContext";
import React from "react";

const AboutUs = ({ imageSelection }) => {
  useAuthContext();
  let imageUrl = "";
  if (imageSelection === "cat") {
    imageUrl =
      "https://assets.elanco.com/8e0bf1c2-1ae4-001f-9257-f2be3c683fb1/2366147c-9d05-4414-b016-2bd0e3233b1a/shutterstock_97506335_0.jpg";
  } else if (imageSelection === "dog") {
    imageUrl = "https://wallpapers.com/images/featured/wj7msvc5kj9v6cyy.jpg";
  } else {
    imageUrl =
      "https://storage.googleapis.com/petbacker/images/blog/2017/dog-and-cat-cover.jpg";
  }

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
        <img src={imageUrl} alt="Pets Are Us" />

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
