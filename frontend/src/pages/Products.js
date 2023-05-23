import { useAuthContext } from "../hooks/useAuthContext";
import React from "react";

const Products = () => {
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
          src="https://cdn.wallpapersafari.com/11/55/HtiCEz.jpg"
          alt="Pets Are Us"
        />

        <h2>Products and Services</h2>
        <p>
          We are a company dedicated to providing high-quality products and
          services for pets. Our mission is to ensure the health, happiness, and
          well-being of your beloved pets. At Pets Are Us, we offer a wide range
          of products for pets, including food, toys, accessories, and grooming
          supplies. Our team of experienced veterinarians provides top-notch
          medical care and wellness services for your pets. We are committed to
          building a strong bond between pet owners and their furry companions.
        </p>
      </main>
      <footer>
        <p>&copy; 2023 Pets Are Us. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Products;
