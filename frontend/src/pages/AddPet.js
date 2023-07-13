import PetDetails from "../components/PetDetails";
import PetForm from "../components/PetForm";
import { useEffect } from "react";
import { usePetsContext } from "../hooks/usePetContext";
import { useAuthContext } from "../hooks/useAuthContext";
const PlayDate = () => {
  const { pets, dispatch } = usePetsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/pets", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);
  const handleImageUpload = async (event, petId) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(`/api/pets/${petId}/image`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();
    if (response.ok) {
      console.log(json.message); // Image uploaded successfully
    }
  };

  return (
    <div className="home">
      <div className="pets">
        {pets &&
          pets.map((pet) => (
            <PetDetails
              key={pet._id}
              pet={pet}
              onImageUpload={handleImageUpload}
            />
          ))}
      </div>

      <PetForm />
    </div>
  );
};

export default PlayDate;
