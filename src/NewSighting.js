import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewSighting() {
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const navigate = useNavigate("");

  const submitNew = (e) => {
    e.preventDefault();

    const submitBody = { date, location, notes };
    axios.post("http://localhost:3000/sightings", submitBody).then((res) => {
      setDate("");
      setLocation("");
      setNotes("");
      navigate(`/sightings/${res.data.id}`);
    });
  };

  return (
    <div>
      NewSighting
      <form onSubmit={submitNew}>
        <label>Enterrr a date and time for your sighting:</label>
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          value={location}
          placeholder="location?"
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          value={notes}
          placeholder="notes?"
          onChange={(e) => setNotes(e.target.value)}
        />
        <input type="submit" value="add new sighting" />
      </form>
    </div>
  );
}

export default NewSighting;
