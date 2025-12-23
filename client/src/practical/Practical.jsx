import React, { useState } from "react";
import axios from "axios";

function App() {
  // 👇 Step 1: Create state variables for the form
  const [formData, setFormData] = useState({
    name: "",
    address: ""
  });

  // 👇 Step 2: Handle form input changes
  const handleChange = (e) => {
    setFormData(  {
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  // 👇 Step 3: Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // stops page reload

    try {
      // Send data to your Node.js backend
      const res = await axios.post("http://localhost:3000/api/users", formData);
      alert("form submitted");

      //alert(res.data.message); // show success message
      setFormData({ name: "", address: "" }); // clear the form
      console.log(formData)
    } catch (err) {
      console.error(err);
      alert("Error sending data!");
    }
  };

  // 👇 Step 4: Return form UI
  return (
    <div style={{
      maxWidth: "400px",
      margin: "100px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "10px"
    }}>
      <h2>Send Data to MongoDB</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
           value={formData.name}
           onChange={handleChange}
            placeholder="Enter your name"
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Address:</label><br />
          <input
            type="text"
            name="address"
                       onChange={handleChange}

            value={formData.address}
            placeholder="Enter your address"
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
