import React, { useState, useEffect, useCallback } from "react";
import { usePetsContext } from "../hooks/usePetContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const PetDetails = ({ pet }) => {
  const { dispatch } = usePetsContext();
  const { user } = useAuthContext();
  const [selectedImage, setSelectedImage] = useState(null);
  //const navigate = useNavigate();
  const fetchPetImage = useCallback(async () => {
    try {
      const response = await fetch(`/api/pets/${pet._id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setSelectedImage(data.imageUrl);
      } else {
        console.error("Failed to fetch pet image");
      }
    } catch (error) {
      console.error("Error fetching pet image:", error);
    }
  }, [pet._id, user.token]);
  useEffect(() => {
    fetchPetImage();
  }, [fetchPetImage]);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];

    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch(`/api/pets/${pet._id}/image`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        body: formData,
      });

      if (response.ok) {
        fetchPetImage();
      } else {
        console.error("Image upload failed");
      }
    } catch (error) {
      console.error("Image upload error:", error);
    }
  };

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch(`/api/pets/${pet._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    if (response.ok) {
      dispatch({ type: "DELETE_PET", payload: pet });
    }
  };

  return (
    <div className="pet-details">
      <h4>{pet.petName}</h4>
      <p>
        <strong>Age: </strong>
        {pet.petAge}
      </p>
      <p>
        <strong>Pet Type: </strong>
        {pet.petType}
      </p>
      <p>
        <strong>Pet Breed: </strong>
        {pet.petBreed}
      </p>
      {selectedImage && <img src={selectedImage} alt="" />}
      <input type="file" onChange={handleImageUpload} />
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default PetDetails;
