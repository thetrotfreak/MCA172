import React, { useState } from "react";

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
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label></label>
      </div>
    </form>
  );
}
