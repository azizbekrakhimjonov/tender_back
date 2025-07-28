import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchInput from "../../../components/Filter/SearchInput";
import FilterSelect from "../../../components/Filter/FilterSelect";

const vehicles = [
  {
    id: "Truck 1",
    type: "Tented Truck",
    plate: "XYZ123",
    capacity: "20 tons / 50 m³",
    equipment: "GPS",
    status: "Available",
  },
  {
    id: "Truck 2",
    type: "Refrigerated Truck",
    plate: "ABC456",
    capacity: "15 tons / 40 m³",
    equipment: "GPS, Temperature Control",
    status: "In Transit",
  },
  {
    id: "Truck 3",
    type: "Flatbed Truck",
    plate: "DEF789",
    capacity: "25 tons / 60 m³",
    equipment: "GPS",
    status: "Maintenance",
  },
  {
    id: "Truck 5",
    type: "Box Truck",
    plate: "JKL345",
    capacity: "10 tons / 30 m³",
    equipment: "GPS",
    status: "Available",
  },
];

// Filter options
const filterOptions = {
  vehicleType: ["Tented Truck", "Refrigerated Truck", "Flatbed Truck", "Box Truck"],
  vehicleStatus: ["Available", "In Transit", "Maintenance"],
};

const Vehicle = () => {
  const search = useSelector((state) => state.filter.search);
  const filters = useSelector((state) => state.filter.filters);

  const filteredVehicles = vehicles.filter((v) => {
    const searchMatch =
      !search ||
      v.id.toLowerCase().includes(search.toLowerCase()) ||
      v.plate.toLowerCase().includes(search.toLowerCase());

    const typeMatch =
      !filters.vehicleType || v.type.toLowerCase() === filters.vehicleType.toLowerCase();

    const statusMatch =
      !filters.vehicleStatus || v.status.toLowerCase() === filters.vehicleStatus.toLowerCase();

    return searchMatch && typeMatch && statusMatch;
  });

  return (
    <div className="min-h-screen bg-[var(--DarkIndigo)] px-6 py-10 font-worksans text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">My Vehicles</h1>
          <Link
            to="/vehicles/new"
            className="bg-[var(--MidnightNavy)] hover:bg-[var(--CharcoalBlue)] transition px-4 py-2 rounded-md text-sm"
          >
            + Add New Vehicle
          </Link>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col gap-3">
          <div className="relative w-full">
            <SearchInput placeholder="Search by license plate/ID" />
          </div>

          <div className="flex flex-wrap gap-4">
            <FilterSelect label="Type" options={filterOptions.vehicleType} filterKey="vehicleType" />
            <FilterSelect label="Status" options={filterOptions.vehicleStatus} filterKey="vehicleStatus" />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-md border border-[var(--HoverEffect)]">
          <table className="w-full min-w-[900px] text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--InputBg)] text-left text-gray-300">
                <th className="py-8 px-4">Vehicle Name/ID</th>
                <th className="py-3 px-5">Type</th>
                <th className="py-3 px-4">License Plate</th>
                <th className="py-3 px-5">Load Capacity</th>
                <th className="py-3 px-4">Equipment</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-[var(--LabelBlue)]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredVehicles.length > 0 ? (
                filteredVehicles.map((v, idx) => (
                  <tr
                    key={idx}
                    className={
                      idx !== vehicles.length - 1 ? "border-b border-[var(--PureWhite)]" : ""
                    }
                  >
                    <td className="py-10 px-4 font-medium">{v.id}</td>
                    <td className="py-3 px-4 text-[var(--LabelBlue)]">{v.type}</td>
                    <td className="py-3 px-4 text-[var(--LabelBlue)]">{v.plate}</td>
                    <td className="py-3 px-4 text-[var(--LabelBlue)]">{v.capacity}</td>
                    <td className="py-3 px-4 text-[var(--LabelBlue)]">{v.equipment}</td>
                    <td className="py-3 px-4">
                      <span className="inline-block bg-[var(--HoverEffect)] text-xs px-8 py-3 rounded-md text-center">
                        {v.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex flex-col text-[var(--LabelBlue)] space-y-[1px]">
                        <span className="cursor-pointer">Edit |</span>
                        <span className="cursor-pointer">Delete |</span>
                        <span className="cursor-pointer">View Details |</span>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-8 text-gray-400">
                    Hech qanday mos keluvchi mashina topilmadi.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
