import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = ({ handleImageSelection }) => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Pets Are Us</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email} &nbsp; </span>
              <button onClick={handleClick}>Log out</button>
              <button>
                <Link to="/AddPet">Add a pet</Link>
              </button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
          <div>
            <button onClick={() => handleImageSelection("cat")}>
              Cat Person
            </button>
            <button onClick={() => handleImageSelection("dog")}>
              Dog Person
            </button>
            <button onClick={() => handleImageSelection("both")}>Both</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
