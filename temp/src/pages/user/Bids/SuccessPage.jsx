import React from "react";
import { FaTruck, FaRoad } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa6";

const InfoRow = ({ label, value }) => (
  <div className="flex justify-between py-[15px] border-b border-[var(--LabelBlue)] text-sm first:border-t">
    <span className="text-[var(--LabelBlue)]">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

const StatusTimeline = () => {
  const steps = [
    {
      icon: <FaTruck />,
      label: "Yuklangan",
      time: "2023-10-26, 10:00",
    },
    {
      icon: <FaRoad />,
      label: "Yolda",
      time: "2023-10-27, 14:00",
    },
    {
      icon: <FaBoxOpen />,
      label: "Yetkazib berilgan",
      time: "2023-10-28, 16:00",
    },
  ];

  return (
    <div className="space-y-6 relative ml-1">
      {steps.map((step, index) => (
        <div key={index} className="flex items-start gap-3 relative">
          {index < steps.length - 1 && (
            <div className="absolute top-6 left-[10px] w-px h-[52px]" />
          )}
          <div className="z-10 mt-[2px]">{step.icon}</div>
          <div>
            <div className="text-sm">{step.label}</div>
            <div className="text-sm text-[var(--LabelBlue)]">{step.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const SuccessPage = () => {

  return (
    <div className="min-h-screen text-white px-6 py-10">
      <div className="max-w-4xl mx-auto rounded-lg p-6 shadow-md space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Yukning holati</h1>
            <p className="text-sm text-[var(--LabelBlue)] mt-1">Yukning holatini kuzatib boring</p>
          </div>
          <button
            className="bg-green-500 px-4 py-2 text-sm rounded-md font-semibold hover:bg-green-600 transition"
          >
            Success
          </button>
        </div>

        {/* Yuk haqida ma’lumot */}
        <div>
          <h2 className="mb-4">Transporter haqida ma’lumot</h2>
          <h2 className="mb-4">Yuk haqida ma'lumot</h2>
          <div className="space-y-[2px] text-sm">
            <InfoRow label="Yuk raqami:" value="YT123456789" />
            <InfoRow label="Yuk turi:" value="Elektronika" />
            <InfoRow label="Yukning og‘irligi:" value="10 kg" />
            <InfoRow label="Yukning hajmi:" value="0.5 m³" />
            <InfoRow label="Yukning kelib chiqish joyi:" value="Toshkent" />
            <InfoRow label="Yukning borish joyi:" value="Samarqand" />
            <InfoRow label="Yukning jo‘natish sanasi:" value="2023-10-26" />
            <InfoRow label="Yukning yetkazib berish sanasi:" value="2023-10-28" />
          </div>
        </div>

        {/* Yukning holati */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Yukning holati</h2>
          <StatusTimeline />
        </div>

        {/* Transportchi haqida */}
        <div className="text-sm border-t border-gray-600 pt-2">
          <div className="flex justify-between py-1 pb-2">
            <span className="text-[var(--LabelBlue)]">Transporter ismi:</span>
            <span className="font-medium">Akmal Qodirov</span>
          </div>
          <div className="flex justify-between pt-4 border-gray-600 border-t">
            <span className="text-[var(--LabelBlue)]">Telefon raqami:</span>
            <span className="font-medium">+998 90 123 45 67</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
