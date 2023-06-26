// PlayDates.js
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function PlayDates() {
  const [playdates, setPlaydates] = useState([]);
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("/api/user/all", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await res.json();
      setUsers(data);
    };

    fetchUsers();
  }, [user.token]);

  useEffect(() => {
    const fetchPlaydates = async () => {
      const res = await fetch("/api/playdates", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await res.json();
      setPlaydates(data);
    };
    console.log(fetchPlaydates);
    fetchPlaydates();
  }, [user.token]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch("/api/playdates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ recipient, message }),
    });
    const data = await res.json();
    setPlaydates([...playdates, data]);
  };

  const handleStatusChange = async (playdateId, newStatus) => {
    try {
      const res = await fetch(`/api/playdates/${playdateId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.status === 403) {
        throw new Error("Not authorized to perform this action");
      }

      const updatedPlaydate = await res.json();

      setPlaydates((prevPlaydates) =>
        prevPlaydates.map((playdate) =>
          playdate._id === updatedPlaydate._id ? updatedPlaydate : playdate
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  const isRecipient = (playdate) => {
    if (playdate && playdate.recipient && user && user._id) {
      return playdate.recipient._id.toString() === user._id.toString();
    }
    return false;
  };
  console.log(isRecipient);

  return (
    <div className="pages">
      <h1>Create a Play Date </h1>
      <form onSubmit={handleSubmit} className="form-control-address">
        <label htmlFor="recipient">Make a playdate with:</label>
        <select
          id="recipient"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        >
          <option value="">Select a recipient</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.firstName} {user.lastName} ({user._id})
            </option>
          ))}
        </select>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
        />
        <button type="submit" className="add-pet-button">
          Create Playdate
        </button>
      </form>
      {/* Insert this where you want the "My requests" header to be */}
      <h3 className="my-requests"> My Requests</h3>

      {playdates.map((playdate) => (
        <div key={playdate._id} className="pet-details">
          <h2>
            {playdate.sender.firstName} {playdate.sender.lastName} to{" "}
            {playdate.recipient &&
              `${playdate.recipient.firstName} ${playdate.recipient.lastName}`}
          </h2>
          <p> message : {playdate.message}</p>
          <p>Status: {playdate.status ? "Accepted" : "Declined/Pending"}</p>
          <div>
            <button onClick={() => handleStatusChange(playdate._id, true)}>
              Accept
            </button>
            <button onClick={() => handleStatusChange(playdate._id, false)}>
              Deny
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlayDates;
