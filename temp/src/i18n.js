import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  uz: {
    translation: {
      myOrders: "Mening buyurtmalarim",
      createOrder: "Buyurtma yaratish",
      vehicleList: "Mening transport vositalarim",
      addVehicle: "Yangi transport qo‘shish",
      notifications: "Bildirishnomalar",
      bids: "Takliflar",
      tenderNumber: "Tender №",
      productName: "Mahsulot nomi",
      noResultsFound: "Hech qanday natija topilmadi",
      profile: "Profil",
      tenders: "Tenderlar",
      orderStatus: "Yukning holati",
      yourBidSubmitted: "Taklifingiz yuborildi!",
      joinTenders: "Tenderlarga qo'shing",
      origin: "Qayerdan",
      destination: "Qayerga",
      weight: "Og‘irligi",
      volume: "Hajmi",
      submit: "Yuborish",
      cancel: "Bekor qilish",
      save: "Saqlash",
      searchOrder: "Buyurtma izlash",
      searchTender: "Tender izlash",
      searchVehicle: "Transport izlash",
      status: "Holati",
      price: "Narxi",
      description: "Tavsif",
      pickupDate: "Jo‘natish sanasi",
      deliveryDate: "Yetkazish sanasi",

      // Sidebar
      menu_tenders: "Tenderlar",
      menu_orders: "Buyurtmalar",
      menu_bids: "Takliflar",
      menu_vehicles: "Transportlar",
      menu_notifications: "Bildirishnomalar",
      menu_profile: "Profil",
    }
  },
  en: {
    translation: {
      myOrders: "My Orders",
      createOrder: "Create Order",
      vehicleList: "My Vehicles",
      addVehicle: "Add New Vehicle",
      notifications: "Notifications",
      bids: "Bids",
      profile: "Profile",
      tenders: "Tenders",
      orderStatus: "Order Status",
      yourBidSubmitted: "Your Bid Has Been Submitted!",
      continueBrowsingTenders: "Continue Browsing Tenders",

      origin: "Origin",
      destination: "Destination",
      weight: "Weight",
      volume: "Volume",
      submit: "Submit",
      cancel: "Cancel",
      save: "Save",
      searchOrder: "Search order",
      searchTender: "Search tender",
      searchVehicle: "Search by license plate/ID",
      status: "Status",
      price: "Price",
      description: "Description",
      pickupDate: "Pickup Date",
      deliveryDate: "Delivery Date",

      menu_tenders: "Tenders",
      menu_orders: "Orders",
      menu_bids: "Bids",
      menu_vehicles: "Vehicles",
      menu_notifications: "Notifications",
      menu_profile: "Profile",
    }
  },
  ru: {
    translation: {
      myOrders: "Мои заказы",
      createOrder: "Создать заказ",
      vehicleList: "Мои транспортные средства",
      addVehicle: "Добавить транспорт",
      notifications: "Уведомления",
      bids: "Предложения",
      profile: "Профиль",
      tenders: "Тендеры",
      orderStatus: "Статус заказа",
      yourBidSubmitted: "Ваше предложение отправлено!",
      continueBrowsingTenders: "Продолжить просмотр тендеров",

      origin: "Откуда",
      destination: "Куда",
      weight: "Вес",
      volume: "Объем",
      submit: "Отправить",
      cancel: "Отмена",
      save: "Сохранить",
      searchOrder: "Поиск заказа",
      searchTender: "Поиск тендера",
      searchVehicle: "Поиск по номеру",
      status: "Статус",
      price: "Цена",
      description: "Описание",
      pickupDate: "Дата отправки",
      deliveryDate: "Дата доставки",

      menu_tenders: "Тендеры",
      menu_orders: "Заказы",
      menu_bids: "Предложения",
      menu_vehicles: "Транспорт",
      menu_notifications: "Уведомления",
      menu_profile: "Профиль",
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: localStorage.getItem("lang") || "uz", 
    fallbackLng: "uz", 
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;
