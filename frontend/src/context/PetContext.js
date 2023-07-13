import { createContext, useReducer } from "react";

export const PetsContext = createContext();

export const petsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        pets: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        pets: [action.payload, ...state.pets],
      };
    case "DELETE_WORKOUT":
      return {
        pets: state.pets.filter((w) => w._id !== action.payload._id),
      };
    case "DELETE_PET":
      return {
        pets: state.pets.filter((p) => p._id !== action.payload._id),
      };
    default:
      return state;
    case "UPDATE_PET_IMAGE":
      return {
        pets: state.pets.map((pet) =>
          pet._id === action.payload.petId
            ? { ...pet, image: action.payload.imageUrl }
            : pet
        ),
      };
  }
};

export const PetsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(petsReducer, {
    pets: null,
  });

  return (
    <PetsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PetsContext.Provider>
  );
};
