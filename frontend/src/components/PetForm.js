import { useState } from "react";
import { usePetsContext } from "../hooks/usePetContext";
import { useAuthContext } from "../hooks/useAuthContext";

const PetForm = () => {
  const { dispatch } = usePetsContext();
  const { user } = useAuthContext();

  const [petName, setPetName] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petType, setPetType] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const pet = { petName, petAge, petType, petBreed };

    const response = await fetch("/api/pets", {
      method: "POST",
      body: JSON.stringify(pet),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setPetName("");
      setPetAge("");
      setPetType("");
      setPetBreed("");
      setError(null);
      setEmptyFields([]);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a Pet</h3>

      <label>Pets name:</label>
      <input
        type="text"
        onChange={(e) => setPetName(e.target.value)}
        value={petName}
        className={emptyFields.includes("petName") ? "error" : ""}
      />

      <label>Pets Age</label>
      <input
        type="number"
        onChange={(e) => setPetAge(e.target.value)}
        value={petAge}
        className={emptyFields.includes("petAge") ? "error" : ""}
      />
      <label>Pets Breed</label>
      <input
        type="text"
        onChange={(e) => setPetBreed(e.target.value)}
        value={petBreed}
        className={emptyFields.includes("petBreed") ? "error" : ""}
      />

      <label>Type of Pet &nbsp; </label>
      <select value={petType} onChange={(e) => setPetType(e.target.value)}>
        <option value="">--Please choose an option--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </select>

      <button type="submit" className="add-pet-button">
        Add Pet
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default PetForm;
