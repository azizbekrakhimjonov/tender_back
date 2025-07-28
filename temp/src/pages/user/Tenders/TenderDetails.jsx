import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const TenderDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const tender = {
    number: id,
    code: "YT123456789",
    type: "Elektronika",
    weight: "10 kg",
    volume: "0.5 m³",
    from: "Toshkent",
    to: "Samarqand",
    startDate: "2023-10-26",
    endDate: "2023-10-28",
  };

  return (
    <div className="min-h-screen px-4 py-10 flex justify-center">
      <div className="w-full max-w-2xl">
        {/* Sarlavha */}
        <h1 className="text-3xl font-bold mb-10">Tender #{tender.number}</h1>

        {/* Yuk haqida ma'lumot */}
        <h2 className="text-base font-semibold mb-4">Yuk haqida ma’lumot</h2>
        <div className="divide-y divide-[var(--LabelBlue)] border-t border-[var(--LabelBlue)]">
          {renderLine("Yuk raqami", tender.code)}
          {renderLine("Yuk turi", tender.type)}
          {renderLine("Yukning og'irligi", tender.weight)}
          {renderLine("Yukning hajmi", tender.volume)}
          {renderLine("Yukning kelib chiqish joyi", tender.from)}
          {renderLine("Yukning borish joyi", tender.to)}
          {renderLine("Yukning jo'natish sanasi", tender.startDate)}
          {renderLine("Yukning yetkazib berish sanasi", tender.endDate)}
        </div>

        {/* Narx Taklifi */}
        <div className="mt-10">
          <h2 className="text-base font-semibold mb-4">Narx Taklifi</h2>
          <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
            <input
              type="number"
              placeholder="Narx Taklifini Kiriting"
              className="flex-1 px-4 py-2 rounded-md text-sm bg-[var(--SlateBlue)] placeholder-gray-300 outline-none"
            />
            <button onClick={() => navigate("/tenders/success")} className="bg-[var(--SoftBlue)] hover:bg-[#3c4ecf] text-sm font-semibold px-6 py-2 rounded-md transition">
              Taklifingizni bildiring
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Siz taklif qilishingiz mumkin bo‘lgan eng baland narx 7 000 USD
          </p>
        </div>
      </div>
    </div>
  );
};

function renderLine(label, value) {
  return (
    <div className="grid grid-cols-2 py-4 text-sm">
      <span className="text-[var(--LabelBlue)]">{label}</span>
      <span className="text-left font-medium">{value}</span>
    </div>
  );
}

export default TenderDetails;
