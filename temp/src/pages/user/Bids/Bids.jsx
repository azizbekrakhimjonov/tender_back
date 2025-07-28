import React from "react";
import { FaTruck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import SearchInput from "../../../components/Filter/SearchInput";
import FilterSelect from "../../../components/Filter/FilterSelect";

const bids = [
  { number: "#12345", name: "Mahsulot nomi", from: "Tashkent", to: "Namangan", weight: "12400", price: "1200", status: "Pending" },
  { number: "#12346", name: "Mahsulot nomi", from: "Tashkent", to: "Namangan", weight: "11000", price: "1150", status: "Success" },
  { number: "#12347", name: "Mahsulot nomi", from: "Tashkent", to: "Namangan", weight: "13000", price: "1300", status: "Failed" },
];

const filterOptions = {
  deliverySpeed: ["Tez", "Odatdagi", "Sekin"],
  priceRange: ["Arzon", "O‘rtacha", "Qimmat"],
  location: ["Toshkent", "Samarqand", "Boshqa"],
};

const StatusBadge = ({ status }) => {
  const colorMap = {
    Pending: "text-yellow-500",
    Success: "text-green-500",
    Failed: "text-red-500",
  };

  return <span className={`${colorMap[status]} text-right block`}>{status}</span>;
};

const BidCard = ({ bid }) => (
  <div className="grid grid-cols-7 gap-12 items-center bg-[var(--MidnightNavy)] pr-6 py-3 rounded-2xl shadow-md text-right">
    <div className="flex items-center gap-2 justify-end whitespace-nowrap">
      <div className="w-10 h-10 rounded-xl bg-[var(--DarkGray)] flex items-center justify-center">
        <FaTruck className="text-lg" />
      </div>
      <span>{bid.number}</span>
    </div>
    <div>{bid.name}</div>
    <div className='pr-4'>{bid.from}</div>
    <div>{bid.to}</div>
    <div>{bid.weight}kg</div>
    <div>{bid.price} <span className="font-semibold">USD</span></div>
    <div><StatusBadge status={bid.status} /></div>
  </div>
);

const Bids = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); 

  const search = useSelector((state) => state.filter.search);
  const filters = useSelector((state) => state.filter.filters);

  const filteredBids = bids.filter((bid) => {
    const matchesSearch =
      !search ||
      bid.name.toLowerCase().includes(search.toLowerCase()) ||
      bid.from.toLowerCase().includes(search.toLowerCase()) ||
      bid.to.toLowerCase().includes(search.toLowerCase());

    const matchesLocation =
      !filters.location || bid.from.toLowerCase() === filters.location;

    return matchesSearch && matchesLocation;
  });

  return (
    <div className="min-h-screen">
      <main className="px-4 sm:px-6 md:px-8 py-8 max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl mb-4">{t("bids")}</h1>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row flex-wrap md:gap-6 mb-8 items-stretch md:items-end">
          <SearchInput placeholder={t("searchTender")} />
          {Object.entries(filterOptions).map(([key, options]) => (
            <FilterSelect key={key} label={key} options={options} filterKey={key} />
          ))}
          <button
            onClick={() => navigate("/success")}
            className="bg-[var(--SoftBlue)] hover:bg-[var(--HoverEffect)] transition font-bold px-9 py-2 rounded-md mt-4 md:mt-0"
          >
            {t("continueBrowsingTenders")}
          </button>
        </div>

        {/* Header row */}
        <div className="grid grid-cols-7 gap-18 pr-8 py-2 mb-2 text-sm text-gray-300 text-right">
          <div>{t("tenderNumber")}</div>
          <div>{t("productName")}</div>
          <div>{t("origin")}</div>
          <div>{t("destination")}</div>
          <div>{t("weight")}</div>
          <div>{t("price")}</div>
          <div>{t("status")}</div>
        </div>

        {/* Filtered Bids */}
        <div className="space-y-3">
          {filteredBids.length > 0 ? (
            filteredBids.map((bid, idx) => <BidCard key={idx} bid={bid} />)
          ) : (
            <div className="text-center text-gray-400 py-8">
              {t("noResultsFound")}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Bids;
