import React, { useState, useEffect } from "react";

function Form() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [supervisors, setSupervisors] = useState([]);

  // Fetch supervisors from backend API using useEffect
  useEffect(() => {
    fetch("/supervisors")
      .then((res) => res.json())
      .then((data) => setSupervisors(data));
  }, []);

  // Map over supervisors and create an array of option elements
  const supervisorOptions = supervisors.map((supervisor) => (
    <option key={supervisor.id} value={supervisor.name}>
      {supervisor.name}
    </option>
  ));

  // Event handlers to update state variables with form input
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSupervisorChange = (e) => {
    setSupervisor(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to backend API for further processing
    const formData = { name, location, status, supervisor };
    fetch("/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="name"
          >
            Name:
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="name"
            placeholder="John Smith"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="location"
          >
            Location:
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="location"
            placeholder="Bank Teller"
            type="text"
            value={location}
            onChange={handleLocationChange}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
      <label>
        Status:
      </label>
      </div>
        <select className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" value={status} onChange={handleStatusChange}>
          <option value="">-- Please select a status --</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
            <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
      <label>
        Supervisor:
      </label>
      </div>
        <select className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" value={supervisor} onChange={handleSupervisorChange}>
          <option value="">-- Please select a supervisor --</option>
          {supervisorOptions}
        </select>
        </div>
    </form>
  );
}

export default Form;
