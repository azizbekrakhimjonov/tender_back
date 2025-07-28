import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import './i18n';
import Sidebar from "./components/user/SideBar/SideBar";
import Tenders from "./pages/user/Tenders/Tenders";
import TenderDetails from "./pages/user/Tenders/TenderDetails";
import Orders from "./pages/user/Orders/Orders";
import CreateOrder from "./pages/user/Orders/CreateOrder";
import Bids from "./pages/user/Bids/Bids";
import SuccessPage from "./pages/user/Bids/SuccessPage";
import ShipmentStatusPage from "./pages/user/Orders/ShipmentStatusPage";
import ShipmentSuccessPage from './pages/user/Orders/ShipmentSuccessPage';
import TendersSuccess from './pages/user/Tenders/TendersSuccess';
import Profile from './pages/user/Profile/Profile';
import Login from "./pages/user/Login/Login";
import Notifications from "./pages/user/Notifications/Notifications";
import Vehicle from "./pages/user/Vehicle/Vehicle";
import AddVehicleForm from "./pages/user/Vehicle/AddVehicleForm";

// AppContent must be inside Provider
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function AppContent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const lang = useSelector((state) => state.language.lang);
  const { i18n } = useTranslation();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("user");
    setIsAuthenticated(!!isLoggedIn);
  }, []);

  useEffect(() => {
    if (lang && typeof i18n.changeLanguage === 'function') {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <Router>
      <div className="flex min-h-screen bg-[var(--DarkIndigo)] text-white">
        <Sidebar />
        <main className="flex-1 ml-20 sm:ml-48 transition-all duration-300 ease-in-out">
          <Routes>
            <Route path="/" element={<Navigate to="/tenders" replace />} />
            <Route path="/tenders" element={<Tenders />} />
            <Route path="/tenders/:type" element={<Tenders />} />
            <Route path="/tender/:id" element={<TenderDetails />} />
            <Route path='/tenders/success' element={<TendersSuccess />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/create" element={<CreateOrder />} />
            <Route path="/shipment/status" element={<ShipmentStatusPage />} />
            <Route path="/shipment/success" element={<ShipmentSuccessPage />} />
            <Route path="/bids" element={<Bids />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/vehicles" element={<Vehicle />} />
            <Route path="/vehicles/new" element={<AddVehicleForm />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<div className="p-6 text-lg">404 – Sahifa topilmadi</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
