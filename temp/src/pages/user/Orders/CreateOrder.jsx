import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Input = ({ label, placeholder, type = "text", name, value, onChange }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-white">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-[var(--CharcoalBlue)] border border-gray-600 text-sm text-white px-4 py-2 rounded-md placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 transition"
    />
  </div>
);

const Textarea = ({ label, placeholder, name, value, onChange }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-white">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={5}
      placeholder={placeholder}
      className="bg-[var(--CharcoalBlue)] border border-gray-600 text-sm px-4 py-2 rounded-md placeholder-gray-400 outline-none resize-none focus:ring-2 focus:ring-blue-500 transition"
    ></textarea>
  </div>
);

const Select = ({ label, name, value, onChange, options = [] }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-white">{label}</label>
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="appearance-none w-full bg-[var(--CharcoalBlue)] border border-gray-600 text-sm text-white px-4 py-2 pr-10 rounded-md outline-none focus:ring-2 focus:ring-blue-500 transition"
      >
        <option value="">Select</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>{opt}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M5.516 7.548l4.484 4.482 4.484-4.482L16 9l-6 6-6-6z" />
        </svg>
      </div>
    </div>
  </div>
);

const DatePickerInput = ({ label, selectedDate, onChange }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-white">{label}</label>
    <ReactDatePicker
      selected={selectedDate}
      onChange={onChange}
      dateFormat="dd.MM.yyyy"
      placeholderText="dd.mm.yyyy"
      className="w-full bg-[var(--CharcoalBlue)] border border-gray-600 text-white text-sm rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition"
      calendarClassName="rounded-lg shadow-lg border border-gray-700 bg-[#1a1a2e] text-white"
      dayClassName={() => "hover:bg-blue-600 rounded-full transition duration-150 ease-in-out"}
    />
  </div>
);

const CreateOrder = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    description: "",
    weight: "",
    volume: "",
    origin: "",
    destination: "",
    pickupDate: null,
    deliveryDate: null,
    requirements: "",
    notes: "",
    incoterms: "",
    vehicleType: "",
    vehicle: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDateChange = (field, date) => {
    setFormData((prev) => ({ ...prev, [field]: date }));
  };

  const handleSubmit = () => {
    const orderId = `#ORD${Date.now()}`;
    const fullData = { ...formData, number: orderId };
    navigate("/orders", { state: fullData });
  };

  return (
    <div className="min-h-screen px-4 py-10 flex justify-center text-white bg-[#0e1124]">
      <div className="w-full max-w-7xl">
        <h1 className="text-lg mb-10">Create New Freight Order</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-lg mb-2">Cargo Information</h2>
            <Input label="Cargo Description" name="description" value={formData.description} onChange={handleChange} placeholder="e.g., Electronics, 20 pallets" />
            <div className="grid grid-cols-2 gap-4">
              <Input label="Weight (kg)" name="weight" value={formData.weight} onChange={handleChange} placeholder="e.g., 5000" />
              <Input label="Volume (m³)" name="volume" value={formData.volume} onChange={handleChange} placeholder="e.g., 20" />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-lg mb-2">Route and Timing</h2>
            <div className="grid grid-cols-2 gap-4">
              <Input label="Origin" name="origin" value={formData.origin} onChange={handleChange} placeholder="e.g., Tashkent" />
              <Input label="Destination" name="destination" value={formData.destination} onChange={handleChange} placeholder="e.g., Samarkand" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <DatePickerInput label="Pickup Date" selectedDate={formData.pickupDate} onChange={(date) => handleDateChange("pickupDate", date)} />
              <DatePickerInput label="Delivery Date" selectedDate={formData.deliveryDate} onChange={(date) => handleDateChange("deliveryDate", date)} />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-lg mb-2">Vehicle Requirements</h2>
            <Select label="Vehicle Type" name="vehicleType" value={formData.vehicleType} onChange={handleChange} options={["Truck", "Refrigerated", "Tanker"]} />
            <Select label="Select Vehicle" name="vehicle" value={formData.vehicle} onChange={handleChange} options={["Truck 1", "Truck 2", "Truck 3"]} />
            <Input label="Special Requirements" name="requirements" value={formData.requirements} onChange={handleChange} placeholder="e.g., Refrigerated, Flatbed" />
          </div>

          <div className="space-y-6">
            <h2 className="text-lg mb-2">Documentation and Terms</h2>
            <Textarea label="Additional Notes" name="notes" value={formData.notes} onChange={handleChange} placeholder="Type here..." />
            <Input label="Incoterms" name="incoterms" value={formData.incoterms} onChange={handleChange} placeholder="e.g., FOB, CIF" />
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <button className="bg-[var(--SlateBlue)] hover:bg-[#232c3f] font-medium px-6 py-2 rounded-md transition">
            Save as Draft
          </button>
          <button
            onClick={handleSubmit}
            className="bg-[var(--SoftBlue)] hover:bg-[#3c4ecf] font-semibold px-6 py-2 rounded-md transition"
          >
            Submit for Tendering
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;
