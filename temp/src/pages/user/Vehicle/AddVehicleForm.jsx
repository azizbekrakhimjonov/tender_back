import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddVehicleForm = () => {
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState({
    name: "",
    type: "",
    licensePlate: "",
    vin: "",
    year: "",
    status: "",
    weight: "",
    unit: "",
    volume: "",
    axleCount: "",
    length: "",
    width: "",
    height: "",
    equipment: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle({ ...vehicle, [name]: value });
  };

  const handleFileUpload = (e, field) => {
    console.log(`${field} uploaded:`, e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Vehicle Data Submitted:", vehicle);
    navigate("/vehicles");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="px-6 py-10 rounded-xl max-w-7xl mx-auto mt-10 space-y-10"
    >
      <h2 className="text-3xl">Add New Vehicle</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Vehicle Information */}
        <div className="space-y-4">
          <h2 className="text-xl mb-2">Vehicle Information</h2>
          <Input label="Vehicle Name/ID" name="name" value={vehicle.name} onChange={handleChange} />
          <Select
            label="Type"
            name="type"
            value={vehicle.type}
            onChange={handleChange}
            options={["Tented Truck", "Refrigerated Truck", "Open Truck", "Van", "Trailer", "Bus"]}
          />
          <Input label="License Plate" name="licensePlate" value={vehicle.licensePlate} onChange={handleChange} />
          <Input label="VIN (Optional)" name="vin" value={vehicle.vin} onChange={handleChange} />
          <Input label="Year of Manufacture" name="year" value={vehicle.year} onChange={handleChange} />
          <Select
            label="Current Status"
            name="status"
            value={vehicle.status}
            onChange={handleChange}
            options={["Available", "In Transit", "Maintenance"]}
          />
        </div>

        {/* Capacity & Specs */}
        <div className="space-y-4">
          <h3 className="text-xl mb-2">Capacity & Specs</h3>
          <div className="grid grid-cols-2 gap-4">
            <Input label="Max Load Weight" name="weight" value={vehicle.weight} onChange={handleChange} />
            <Select label="Unit" name="unit" value={vehicle.unit} onChange={handleChange} options={["kg", "ton"]} />
          </div>
          <Input label="Max Volume" name="volume" value={vehicle.volume} onChange={handleChange} />
          <Input label="Axle Count" name="axleCount" value={vehicle.axleCount} onChange={handleChange} />
          <div className="grid grid-cols-2 gap-4">
            <Input label="Length" name="length" value={vehicle.length} onChange={handleChange} />
            <Input label="Width" name="width" value={vehicle.width} onChange={handleChange} />
          </div>
          <Input label="Height" name="height" value={vehicle.height} onChange={handleChange} />
          <Select
            label="Equipment & Features"
            name="equipment"
            value={vehicle.equipment}
            onChange={handleChange}
            options={["GPS", "Refrigerated", "Liftgate", "Camera"]}
          />
        </div>
      </div>

      {/* Documents & Media */}
      <div>
        <h3 className="text-sm font-semibold mb-2">Documents & Media</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <FileUpload label="Upload Registration" onChange={(e) => handleFileUpload(e, "Registration")} />
          <FileUpload label="Upload Insurance" onChange={(e) => handleFileUpload(e, "Insurance")} />
          <FileUpload label="Upload Vehicle Photo" onChange={(e) => handleFileUpload(e, "Photo")} />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={() => navigate("/vehicles")}
          className="px-5 py-2 rounded-md bg-[var(--Indigo)] hover:bg-[var(--Indigo)] text-sm border border-[var(--Indigo)] cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-5 py-2 rounded-md bg-[var(--SoftBlue)] hover:bg-[var(--MidnightNavy)] text-sm cursor-pointer"
        >
          Save Vehicle
        </button>
      </div>
    </form>
  );
};

const Input = ({ label, name, value, onChange, type = "text" }) => (
  <div>
    <label className="block text-xs mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={`Enter ${label}`}
      className="w-full px-3 py-2 rounded-md bg-[var(--InputBg)] border border-[var(--Indigo)] 
                 placeholder-[var(--LabelBlue)] text-sm  
                 focus:outline-none"
    />
  </div>
);

const Select = ({ label, name, value, onChange, options }) => (
  <div className="relative w-full">
    <label className="block text-xs mb-1">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="appearance-none w-full bg-[var(--InputBg)] text-[var(--LabelBlue)]  text-sm font-medium 
                 px-4 py-2 pr-10 rounded-md outline-none border border-[var(--Indigo)] 
                 focus:border-[var(--SoftBlue)] transition-colors"
    >
      <option value="">{label}</option>
      {options.map((opt) => (
        <option key={opt} value={opt.toLowerCase()} className="bg-[var(--CharcoalBlue)]">
          {opt}
        </option>
      ))}
    </select>

    {/* Custom dropdown icon */}
    <div className="pointer-events-none absolute right-3 top-1/2 translate-y-[2px] -translate-y-1/2 flex items-center">
      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
        <path d="M5.516 7.548l4.484 4.482 4.484-4.482L16 9l-6 6-6-6z" />
      </svg>
    </div>
  </div>
);


const FileUpload = ({ label, onChange }) => (
  <div className="border border-dashed border-[var(--LabelBlue)] py-14 rounded-md text-center text-sm">
    <h2 className="mb-4 text-lg">{label}</h2>
        <p className="mb-4">Drag and drop files here or browse</p>
    <input type="file" onChange={onChange} className="hidden" id={label} />
    <label
      htmlFor={label}
      className="cursor-pointer px-4 py-2 bg-[var(--Indigo)] hover:bg-[var(--DarkGray)] rounded-md inline-block"
    >
      Upload
    </label>
  </div>
);

export default AddVehicleForm;
