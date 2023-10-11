// import { response } from "express";
import { useState } from "react";

function RoomForm() {
  const [formData, setFormData] = useState({
    id: "",
    check_in: "",
    check_out: "",
    room_type: "",
    occupancy: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3002/api/get", {
      method: "GET",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      // body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log("API Response:", data))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">ID:</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Check-in Date:</label>
        <input
          type="date"
          name="check_in"
          value={formData.check_in}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Check-out Date:</label>
        <input
          type="date"
          name="check_out"
          value={formData.check_out}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Room Type:</label>
        <input
          type="text"
          name="room_type"
          value={formData.room_type}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Occupancy:</label>
        <input
          type="number"
          name="occupangy"
          value={formData.occupancy}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Search for Rooms</button>
    </form>
  );
}

export default RoomForm;
