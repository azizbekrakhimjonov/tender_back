import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaTruck, FaPlane, FaShip, FaTruckPickup } from "react-icons/fa";
import { FiMenu, FiMessageSquare, FiBell } from "react-icons/fi";
import { MdLocalShipping } from "react-icons/md";
import { BsPerson } from 'react-icons/bs';

const menuItems = [
  {
    icon: <FaTruck />,
    label: "Tenders",
    path: "/tenders",
    subItems: [
      { label: "Plane Tenders", path: "/tenders/plane", icon: <FaPlane /> },
      { label: "Ship Tenders", path: "/tenders/ship", icon: <FaShip /> },
      { label: "Truck Tenders", path: "/tenders/truck", icon: <MdLocalShipping /> },
      { label: "Labo Tenders", path: "/tenders/labo", icon: <FaTruckPickup /> },
    ],
  },
  { icon: <FiMenu />, label: "Orders", path: "/orders" },
  { icon: <FiMessageSquare />, label: "Bids", path: "/bids" },
  { icon: <FiMessageSquare />, label: "Vehicles", path: "/vehicles" },
  { icon: <FiBell />, label: "Notifications", path: "/notifications" },
  { icon: <BsPerson />, label: "Profile", path: "/profile" },

];

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleSidebar = () => setIsExpanded((prev) => !prev);
  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  useEffect(() => {
    const matchedItem = menuItems.find(
      (item) =>
        item.subItems &&
        item.subItems.some((s) => location.pathname.startsWith(s.path))
    );
    if (matchedItem) {
      setOpenDropdown(matchedItem.label);
    } else {
      setOpenDropdown(null);
    }
  }, [location.pathname]);

  return (
    <aside
      className={`h-screen fixed top-0 left-0 z-50 bg-[var(--DarkGray)] flex flex-col
      transition-all duration-300 ease-in-out ${isExpanded ? "w-50" : "w-17"}
      rounded-tr-[18px] rounded-br-[18px]`}
    >
      {/* Logo */}
      <div
        className="flex items-center justify-center px-4 h-20 cursor-pointer select-none"
        onClick={toggleSidebar}
      >
        <h1 className="text-2xl tracking-wide text-white">
          {isExpanded ? "YukTender" : "Y"}
        </h1>
      </div>

      {/* Menu Items pinned to bottom */}
      <div className="flex flex-col justify-end flex-grow px-2 pb-6 text-sm font-medium text-white">
        {menuItems.map(({ icon, label, path, subItems }) => (
          <div key={label}>
            {subItems ? (
              <>
                {/* Tenders: NavLink + toggle submenu */}
                <NavLink
                  to={path}
                  onClick={() => toggleDropdown(label)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all
                    ${
                      openDropdown === label
                        ? "bg-[var(--MidnightNavy)] text-white font-semibold"
                        : "text-gray-400 hover:bg-[var(--MidnightNavy)] hover:text-white"
                    }`}
                >
                  <span className="text-xl">{icon}</span>
                  {isExpanded && <span>{label}</span>}
                </NavLink>

                {/* Submenu items */}
                {openDropdown === label && (
                  <div className={`mt-2 flex flex-col gap-2 ${isExpanded ? "ml-4" : ""}`}>
                    {subItems.map((sub) => {
                      const isActive = location.pathname === sub.path;
                      return (
                        <NavLink
                          key={sub.label}
                          to={sub.path}
                          title={sub.label}
                          className={`flex items-center gap-3 px-4 py-2 rounded-xl text-sm transition-all duration-200
                            ${
                              isActive
                                ? "bg-[var(--MidnightNavy)] text-white border border-[var(--SlateBlue)] font-semibold"
                                : "bg-[var(--DarkIndigo)] text-white border border-[var(--SlateBlue)] hover:border-[var(--HoverEffect)]"
                            }`}
                        >
                          <span className="text-base">{sub.icon}</span>
                          {isExpanded && <span>{sub.label}</span>}
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </>
            ) : (
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-pointer
                  ${
                    isActive
                      ? "bg-[var(--MidnightNavy)] text-white font-semibold"
                      : "text-gray-400 hover:bg-[var(--MidnightNavy)] hover:text-white"
                  }`
                }
                title={!isExpanded ? label : ""}
              >
                <span className="text-xl">{icon}</span>
                {isExpanded && <span>{label}</span>}
              </NavLink>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
