import { useState, useEffect } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [postCode, setPostCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Address, setAddress] = useState("");
  const [AddressOptions, setAddressOptions] = useState([]);

  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(
      email,
      password,
      firstName,
      lastName,

      postCode,
      phoneNumber,
      Address
    );
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAhWjJRwOY8wmkNtFsEhi20LJxB-v6S_Bc&libraries=places`;
    script.onload = () => {
      const autocompleteService =
        new window.google.maps.places.AutocompleteService();

      if (Address.length > 3) {
        autocompleteService.getPlacePredictions(
          { input: Address },
          (predictions) => {
            setAddressOptions(predictions || []);
          }
        );
      } else {
        setAddressOptions([]);
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [Address]);
  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label>First Name:</label>
      <input
        type="text"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />
      <label>Last Name:</label>
      <input
        type="text"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />

      <label>Email Address:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Phone Number:</label>
      <input
        type="text"
        onChange={(e) => setPhoneNumber(e.target.value)}
        value={phoneNumber}
      />

      <label>Address:</label>
      <input
        type="text"
        className="form-control-address"
        onChange={handleAddressChange}
        value={Address}
      />
      {AddressOptions.length > 0 && (
        <ul className="address-options">
          {AddressOptions.map((option) => (
            <li key={option.id} onClick={() => setAddress(option.description)}>
              {option.description}
            </li>
          ))}
        </ul>
      )}

      <label>Postcode:</label>
      <input
        type="text"
        onChange={(e) => setPostCode(e.target.value)}
        value={postCode}
      />

      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
