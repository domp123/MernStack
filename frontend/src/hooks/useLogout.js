import { useAuthContext } from "./useAuthContext";
import { usePetsContext } from "./usePetContext";
export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: workoutsDispatch } = usePetsContext();
  const logout = () => {
    //remove user from storage
    localStorage.removeItem("user");
    // dispatch logout
    dispatch({ type: "LOGOUT" });
    workoutsDispatch({ type: "SET_WORKOUTS", payload: null });
  };
  return { logout };
};
