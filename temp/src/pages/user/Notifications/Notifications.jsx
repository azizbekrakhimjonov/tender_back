import { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";

const notifications = [
  {
    id: 1,
    title: "New tender available: Tender ID 12345",
    time: "2 hours ago",
  },
  {
    id: 2,
    title: "Offer received for Tender ID 67890",
    time: "3 hours ago",
  },
  {
    id: 3,
    title: "System update: New feature added",
    time: "1 day ago",
  },
  {
    id: 4,
    title: "Tender ID 112233 has been awarded",
    time: "2 days ago",
  },
  {
    id: 5,
    title: "Offer deadline approaching for Tender ID 445566",
    time: "3 days ago",
  },
];

const Notifications = () => {
  const tabs = ["All", "Unread", "System", "Offers"];
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="min-h-screen bg-[var(--DarkIndigo)] text-white px-2 py-8">
      <h1 className="text-3xl mb-6">Notifications</h1>
      {/* Tabs – markazda joylashgan capsule style */}
      <div className="flex justify-center mb-6">
        <div className="bg-[var(--Indigo)] rounded-full p-1 flex items-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-25 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? "bg-[var(--DarkIndigo)]"
                  : "text-[var(--PastelBlue)] hover:text-[var(--PureEffect)]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Notification list */}
      <div className="space-y-4">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className="flex items-center justify-between bg-transparent hover:bg-[#1F2540] transition-colors rounded-lg px-4 py-3"
          >
            <div className="flex items-start gap-3">
              <div className="bg-[var(--Indigo)] p-2 rounded-md">
                <FaRegBell className="text-xl" />
              </div>
              <div>
                <p className="font-medium text-sm">{notif.title}</p>
                <p className="text-xs text-gray-400">{notif.time}</p>
              </div>
            </div>
            <BsChevronRight className="text-lg" />
          </div>
        ))}
      </div>

      {/* Footer button */}
      <div className="flex justify-end mt-6">
        <button className="bg-[var(--Indigo)] hover:bg-[#2E3856] text-sm px-4 py-2 rounded-md transition">
          Mark all as read
        </button>
      </div>
    </div>
  );
};

export default Notifications;
