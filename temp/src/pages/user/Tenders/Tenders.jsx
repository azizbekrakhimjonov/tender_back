import React from "react";
import { FaTruck } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchInput from "../../../components/Filter/SearchInput";
import FilterSelect from "../../../components/Filter/FilterSelect";

// Mock data
const tenders = [
  {
    number: "T-001",
    name: "Avia yuk tashish",
    from: "Tashkent",
    to: "London",
    weight: "8000kg",
    price: "4200",
    type: "plane",
  },
  {
    number: "T-002",
    name: "Konteyner tashish",
    from: "Shanghai",
    to: "Hamburg",
    weight: "15000kg",
    price: "6500",
    type: "ship",
  },
  {
    number: "T-003",
    name: "Viloyatlararo",
    from: "Andijon",
    to: "Buxoro",
    weight: "1200kg",
    price: "500",
    type: "labo",
  },
  {
    number: "T-004",
    name: "Avtomobil orqali",
    from: "Tashkent",
    to: "Namangan",
    weight: "12400kg",
    price: "1200",
    type: "truck",
  },
];

// Filter options (Redux bilan ishlash uchun key: value formatda)
const filterOptions = {
  deliverySpeed: ["Tez", "Odatdagi", "Sekin"],
  priceRange: ["Arzon", "O‘rtacha", "Qimmat"],
  location: ["Tashkent", "Samarqand", "Boshqa"],
};

// Tender Card
const TenderCard = ({ tender }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/tender/${tender.number}`)}
      className="grid grid-cols-6 items-center bg-[var(--MidnightNavy)] px-4 py-3 rounded-2xl shadow-md hover:bg-[#1F2540] transition-colors cursor-pointer text-right"
    >
      <div className="flex items-center gap-4 justify-center pr-4">
        <div className="w-10 h-10 rounded-xl bg-[var(--DarkGray)] flex items-center justify-center">
          <FaTruck className="text-lg" />
        </div>
        <span>{tender.number}</span>
      </div>
      <div>{tender.name}</div>
      <div>{tender.from}</div>
      <div>{tender.to}</div>
      <div>{tender.weight}</div>
      <div className='px-6'>{tender.price} <span className="font-semibold">USD</span></div>
    </div>
  );
};

// Main Page
const Tenders = () => {
  const { type } = useParams();
  const search = useSelector((state) => state.filter.search);
  const filters = useSelector((state) => state.filter.filters);

  // Filtering
  let filtered = type
    ? tenders.filter((t) => t.type === type)
    : tenders;

  filtered = filtered.filter((t) => {
    const matchesSearch =
      !search ||
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.from.toLowerCase().includes(search.toLowerCase()) ||
      t.to.toLowerCase().includes(search.toLowerCase());

    const matchesLocation =
      !filters.location || t.from.toLowerCase() === filters.location;

    return matchesSearch && matchesLocation;
  });

  return (
    <div className="min-h-screen">
      <main className="px-4 sm:px-6 md:px-8 py-8 max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-2xl font-bold mb-6">
          {type ? `${type.charAt(0).toUpperCase() + type.slice(1)} tenders` : "Barcha tenderlar"}
        </h1>

        {/* Filters */}
        <div className="flex flex-col md:flex-row flex-wrap gap-6 sm:gap-12 mb-8 items-start">
          <div className="flex-1 min-w-[250px] max-w-md">
            <SearchInput placeholder="Search tender" />
          </div>
          <FilterSelect label="Yetkazish vaqti" options={filterOptions.deliverySpeed} filterKey="deliverySpeed" />
          <FilterSelect label="Narxi" options={filterOptions.priceRange} filterKey="priceRange" />
          <FilterSelect label="Joylashuv" options={filterOptions.location} filterKey="location" />
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-6 gap-4 px-4 py-2 mb-2 text-sm text-gray-300 text-right">
          <div className='pr-12'>Tender №</div>
          <div>Mahsulot nomi</div>
          <div>Qayerdan</div>
          <div>Qayerga</div>
          <div>Og'irligi</div>
          <div className='pr-8'>Narxi</div>
        </div>

        {/* Tender Cards */}
        <div className="space-y-3">
          {filtered.length > 0 ? (
            filtered.map((tender, index) => (
              <TenderCard key={index} tender={tender} />
            ))
          ) : (
            <div className="text-center text-gray-400 py-6">
              Hech qanday tender topilmadi.
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Tenders;
