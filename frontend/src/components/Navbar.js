import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = prevScrollPos < currentScrollPos;

      setIsNavbarVisible(!isScrollingDown || currentScrollPos < 80);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    logout();
  };

  return (
    <header className={`header ${isNavbarVisible ? "" : "scroll"}`}>
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
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
