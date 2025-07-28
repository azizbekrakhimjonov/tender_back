import React, { useEffect, useState } from "react";
import { FaTruck } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import SearchInput from "../../../components/Filter/SearchInput";
import FilterSelect from "../../../components/Filter/FilterSelect";

const filterOptions = {
  deliverySpeed: ["Tez", "Odatdagi", "Sekin"],
  priceRange: ["Arzon", "O‘rtacha", "Qimmat"],
  location: ["Toshkent", "Samarqand", "Boshqa"],
};

const OrderCard = ({ order }) => (
  <div className="grid grid-cols-6 items-center bg-[var(--MidnightNavy)] py-3 rounded-2xl shadow-md hover:bg-[var(--Indigo)] transition-colors">
    <div className="flex items-center gap-4 justify-end pr-8">
      <div className="w-10 h-10 rounded-xl bg-[var(--DarkGray)] flex items-center justify-center">
        <FaTruck className="text-lg" />
      </div>
      <span>{order.number}</span>
    </div>
    <div className="text-right">{order.description || "N/A"}</div>
    <div className="text-right">{order.origin || "N/A"}</div>
    <div className="text-right">{order.destination || "N/A"}</div>
    <div className="text-right">{order.weight ? `${order.weight} kg` : "kg"}</div>
    <div className="text-right pr-8">{order.price ? `${order.price} USD` : "—"}</div>
  </div>
);

const Orders = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [orders, setOrders] = useState([
    {
      number: "#ORD1752",
      description: "No comment",
      origin: "tashkent",
      destination: "Samarqand",
      weight: 5,
      price: null,
    },
  ]);

  // Redux filters
  const search = useSelector((state) => state.filter.search);
  const filters = useSelector((state) => state.filter.filters);

  useEffect(() => {
    const newOrder = location.state;
    if (newOrder) {
      setOrders((prev) => [...prev, newOrder]);
    }
  }, [location.state]);

  const filteredOrders = orders.filter((order) => {
    const searchMatch =
      !search ||
      order.description?.toLowerCase().includes(search.toLowerCase()) ||
      order.origin?.toLowerCase().includes(search.toLowerCase()) ||
      order.destination?.toLowerCase().includes(search.toLowerCase());

    const locationMatch =
      !filters.location || order.origin?.toLowerCase() === filters.location;

    // Delivery speed and priceRange can be added later
    return searchMatch && locationMatch;
  });

  return (
    <div className="min-h-screen">
      <main className="px-4 sm:px-6 md:px-8 py-8 max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl mb-6">My Orders</h1>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-6 mb-8 items-stretch md:items-end">
          <SearchInput placeholder="Search order" />
          <FilterSelect label="Yetkazish vaqti" options={filterOptions.deliverySpeed} filterKey="deliverySpeed" />
          <FilterSelect label="Narxi" options={filterOptions.priceRange} filterKey="priceRange" />
          <FilterSelect label="Joylashuv" options={filterOptions.location} filterKey="location" />
          <div className="md:ml-auto">
            <button
              onClick={() => navigate("/orders/create")}
              className="bg-[var(--SoftBlue)] hover:bg-[var(--MidnightNavy)] transition font-bold px-9 py-2 rounded-md"
            >
              Create Order
            </button>
          </div>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-6 py-2 mb-2 text-gray-300 font-medium text-right">
          <div className="pr-16">Order №</div>
          <div>Mahsulot nomi</div>
          <div>Qayerdan</div>
          <div>Qayerga</div>
          <div>Og'irligi</div>
          <div className='pr-8'>Narxi</div>
        </div>

        {/* Order Cards */}
        <div className="space-y-3">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order, idx) => <OrderCard key={idx} order={order} />)
          ) : (
            <div className="text-center py-6 text-gray-400">Hech qanday buyurtma topilmadi</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Orders;
