import { useState, useContext } from "react";
import { AlertContext } from "../Context/AlertContext";

const defaultFormFields = {
  title: "",
  reporter: "",
  type: "",
  description: "",
  image: "",
};

const Reports = () => {
  const { Alerts, setAlerts } = useContext(AlertContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { title, reporter, type, description, image } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmitReport = (e) => {
    e.preventDefault();

    const newAlert = {
      id: Alerts[Alerts.length - 1]?.id + 1 || 1,
      title,
      reporter,
      type,
      image,
      message: description,
      link: "/alerts",
    };

    setAlerts([...Alerts, newAlert]);

    console.log("Updated Alerts:", Alerts);

    resetFormFields();
  };

  return (
    <form
      onSubmit={handleSubmitReport}
      className="w-full max-w-xl mt-8 mx-auto p-6 shadow-xl rounded-2xl bg-gray-50"
    >
      <div className="flex flex-col mb-4">
        <label
          htmlFor="title"
          className="text-lg font-semibold text-gray-600 mb-1"
        >
          Incident Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="e.g., Suspicious Activity near Main St"
          className="border border-gray-400 rounded-lg focus:outline-blue-600 p-3"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label
          htmlFor="reporter"
          className="text-lg font-semibold text-gray-600 mb-1"
        >
          Reporter Name
        </label>
        <input
          type="text"
          id="reporter"
          name="reporter"
          value={
            localStorage.getItem("user")
              ? localStorage.getItem("user").name
              : reporter
          }
          onChange={handleChange}
          placeholder="Name of the reporter."
          className="border border-gray-400 rounded-lg focus:outline-blue-600 p-3"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label
          htmlFor="type"
          className="text-lg font-semibold text-gray-600 mb-1"
        >
          Incident Type
        </label>
        <select
          id="type"
          name="type"
          value={type}
          onChange={handleChange}
          className="border border-gray-300 px-4 py-2 rounded-lg"
        >
          <option value="">Select a type</option>
          <option value="Suspicious Activity">Suspicious Activity</option>
          <option value="Lost Pet">Lost Pet</option>
          <option value="Vandalism">Vandalism</option>
          <option value="Noise Complaint">Noise Complaint</option>
          <option value="Emergency Alert">Emergency Alert</option>
          <option value="Weather Hazard">Weather Hazard</option>
        </select>
      </div>

      <div className="flex flex-col mb-4">
        <label
          htmlFor="description"
          className="text-lg font-semibold text-gray-600 mb-1"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={handleChange}
          placeholder="Describe what happened, including location and time."
          className="border border-gray-300 px-4 py-2 rounded-lg resize-none"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label
          htmlFor="image"
          className="text-lg font-semibold text-gray-600 mb-1"
        >
          Image Upload
        </label>
        <input
          type="text"
          id="image"
          name="image"
          value={image}
          onChange={handleChange}
          placeholder="Public URL of the image"
          className="border border-gray-400 rounded-lg focus:outline-blue-600 p-3"
        />
      </div>
      <div className="my-2 text-lg bg-blue-400 hover:bg-blue-500 text-white w-fit p-1 rounded-xl">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Reports;
