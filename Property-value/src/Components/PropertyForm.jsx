import { useState } from "react";

function PropertyForm() {
  const [data, setData] = useState({
    location: "",
    budget: "",
    type: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Property Details Submitted!");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="location" placeholder="Location" onChange={handleChange} /><br /><br />
      <input name="budget" placeholder="Budget" onChange={handleChange} /><br /><br />
      <input name="type" placeholder="Property Type" onChange={handleChange} /><br /><br />
      <button type="submit">Get Suggestions</button>
    </form>
  );
}

export default PropertyForm;