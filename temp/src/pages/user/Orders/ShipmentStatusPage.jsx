import React, { useEffect, useState } from "react";
import { FaTruck, FaRoad } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const InfoRow = ({ label, value }) => (
  <div className="flex justify-between py-[15px] border-b border-gray-700 text-sm first:border-t">
    <span className="text-[var(--LabelBlue)]">{label}</span>
    <span>{value}</span>
  </div>
);

const StatusTimeline = () => {
  const steps = [
    {
      icon: <FaTruck className="text-lg" />,
      label: "Yuklangan",
      time: "2023-10-26, 10:00",
    },
    {
      icon: <FaRoad className="text-lg" />,
      label: "Yo‘lda",
      time: "2023-10-27, 14:00",
    },
    {
      icon: <FaBoxOpen className="text-lg opacity-40" />,
      label: "Yetkazib berilgan",
      time: "",
    },
  ];

  return (
    <div className="space-y-6 relative ml-1">
      {steps.map((step, index) => (
        <div key={index} className="flex items-start gap-3 relative">
          {index < steps.length - 1 && (
            <div className="absolute top-6 left-[10px] w-px h-[52px] bg-gray-600" />
          )}
          <div className="z-10 mt-[2px]">{step.icon}</div>
          <div>
            <div className="text-sm text-white">{step.label}</div>
            <div className="text-sm text-[var(--LabelBlue)]">{step.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const ShipmentStatusPage = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("shipmentData");
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  if (!data) return <div className="p-8">Yuk ma'lumotlari topilmadi.</div>;

  return (
    <div className="min-h-screen bg-[var(--DarkIndigo)]  px-6 py-10">
      <div className="max-w-4xl mx-auto rounded-lg p-6 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl">Yukning holati</h1>
            <p className="text-sm text-[var(--LabelBlue)] mt-1">Yukning holatini kuzatib boring</p>
          </div>
          <button
            onClick={() => navigate("/shipment/success")}
            className="bg-orange-500 hover:bg-orange-600  px-4 py-2 text-sm rounded-md font-semibold shadow-sm transition"
          >
            Delivery in the process
          </button>
        </div>

        {/* Yuk ma'lumotlari */}
        <div>
          <h2 className="mb-4 text-lg">Yuk haqida ma'lumot</h2>
          <div className="space-y-[2px] text-sm">
            <InfoRow label="Buyurtma raqami:" value={data.number} />
            <InfoRow label="Tavsifi:" value={data.description} />
            <InfoRow label="Og‘irligi:" value={`${data.weight} kg`} />
            <InfoRow label="Hajmi:" value={`${data.volume} m³`} />
            <InfoRow label="Kelib chiqish joyi:" value={data.origin} />
            <InfoRow label="Borish joyi:" value={data.destination} />
            <InfoRow label="Jo‘natish sanasi:" value={data.pickupDate} />
            <InfoRow label="Yetkazish sanasi:" value={data.deliveryDate} />
            <InfoRow label="Maxsus talablar:" value={data.requirements} />
            <InfoRow label="Izohlar:" value={data.notes} />
            <InfoRow label="Incoterms:" value={data.incoterms} />
          </div>
        </div>

        {/* Holat timeline */}
        <div>
          <h2 className="text-lg  mb-4">Yukning holati</h2>
          <StatusTimeline />
        </div>
      </div>
    </div>
  );
};

export default ShipmentStatusPage;