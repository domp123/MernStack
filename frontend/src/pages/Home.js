import { useAuthContext } from "../hooks/useAuthContext";
import React from "react";

const Home = () => {
  useAuthContext();

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
          src="https://wallpapers.com/images/featured/wj7msvc5kj9v6cyy.jpg"
          alt="Pets Are Us"
        />

        <h2>Welcome to Pets Are Us!</h2>
        <p>
          We are a pet company that specializes in providing high-quality
          products and services for pets of all kinds. Whether you have a cat,
          dog, bird, fish, or any other type of pet, we have everything you need
          to keep them happy and healthy.
        </p>
        <h3>Our Services</h3>
        <ul>
          <li>Food and treats</li>
          <li>Toys and accessories</li>
          <li>Grooming services</li>
          <li>Training classes</li>
          <li>Veterinary care</li>
        </ul>
        <h3>About Us</h3>
        <p>
          At Pets Are Us, we are passionate about animals and believe that they
          are an important part of our families. That's why we go above and
          beyond to provide the best possible care for your pets, whether it's
          through our products or our services. We believe that every pet
          deserves to be loved and cared for, and we're here to help you do just
          that.
        </p>
      </main>
      <footer>
        <p>&copy; 2023 Pets Are Us. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
