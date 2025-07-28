import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ShipmentSuccessPage = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("shipmentData");
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  if (!data) return <div className="p-8">Buyurtma ma'lumotlari topilmadi.</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--DarkIndigo)] text-white px-6 py-10">
      <div className="text-center space-y-6 max-w-xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          Delivery Confirmed!
        </h1>
        <p className="text-[var(--LabelBlue)] text-sm sm:text-base">
          Your shipment has been successfully delivered.
        </p>

        <div className="space-y-1">
          <p className="font-semibold text-white">Order ID</p>
          <p className="text-[var(--LabelBlue)]">#{data.number || "N/A"}</p>
        </div>

        <div className="space-y-1">
          <p className="font-semibold text-white">Receiver Location</p>
          <p className="text-[var(--LabelBlue)]">{data.destination}</p>
        </div>

        <div className="space-y-4 pt-6">
          <button
            onClick={() => navigate("/shipment/status")}
            className="w-full sm:w-[260px] bg-[var(--SoftBlue)] hover:bg-[#4b5ad6] transition font-semibold py-2 rounded-md"
          >
            View Order Details
          </button>
          <button
            onClick={() => navigate("/orders")}
            className="w-full sm:w-[260px] bg-[var(--Indigo)] hover:bg-[#1F2540] transition font-semibold py-2 rounded-md"
          >
            Create Another Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShipmentSuccessPage;
