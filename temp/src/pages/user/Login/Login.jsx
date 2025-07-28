import React, { useState } from "react";
import biggerCircle from "../../../assets/Ellipse 1.png";
import tinyCircle from "../../../assets/Ellipse 3.png";

const authTypes = [
  { key: "login", label: "Login" },
  { key: "mobile", label: "Mobile-ID" },
  { key: "eri", label: "ERI-Key" },
];

const Login = ({ onLogin }) => {
  const [authMethod, setAuthMethod] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleLoginClick = () => {
    if (authMethod === "login") {
      if (username.trim() !== "" && password.trim() !== "") {
        localStorage.setItem("user", "true"); 
        onLogin(); 
      } else {
        alert("Foydalanuvchi nomi va parolni to‘ldiring");
      }
    } else if (authMethod === "mobile") {
      if (phone.trim() === "") {
        alert("Iltimos, telefon raqamini kiriting");
      } else {
        localStorage.setItem("user", "true");
        onLogin();
      }
    }
  };

  const renderInputs = () => {
    switch (authMethod) {
      case "login":
        return (
          <>
            <AuthInput
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <AuthInput
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        );
      case "mobile":
        return (
          <PhoneInput value={phone} onChange={(e) => setPhone(e.target.value)} />
        );
      case "eri":
        return (
          <button
            onClick={() => {
              localStorage.setItem("user", "true");
              onLogin();
            }}
            className="w-full mb-4 bg-[var(--SoftBlue)]  py-3 rounded-md transition-all duration-200 cursor-pointer"
          >
            Select Key to log in
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img className="w-[600px] h-[600px] absolute left-[-150px] top-[70%] transform -translate-y-1/2 z-0" src={biggerCircle} alt="big circle" />
      <img className="absolute w-[700px] h-[1000px] right-[100px] top-[-10px] z-0" src={tinyCircle} alt="small circle" />

      <div className="relative z-10 w-full max-w-md px-8 py-10 bg-transparent">
        <h2 className="text-center text-2xl mb-6">Welcome to Yuk Tender</h2>

        <div className="flex justify-center gap-2 mb-4">
          {authTypes.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setAuthMethod(key)}
              className={`px-6 py-2 rounded-[12px] transition-all duration-200 cursor-pointer ${
                authMethod === key
                  ? "border border-[var(--SoftBlue)] bg-transparent"
                  : "bg-[var(--CharcoalBlue)] border border-[var(--MidnightNavy)]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {renderInputs()}

        {authMethod === "login" && (
          <div className="text-left text-sm text-gray-400 mb-4">
            <a href="#">Forgot password?</a>
          </div>
        )}

        {(authMethod === "login" || authMethod === "mobile") && (
          <button
            onClick={handleLoginClick}
            className="w-full bg-[#3B82F6] hover:bg-[var(--HoverEffect)] py-3 rounded-md transition-all duration-200 cursor-pointer"
          >
            {authMethod === "mobile" ? "Send SMS" : "Log in"}
          </button>
        )}

        <p className="mt-4 text-center text-sm text-[var(--LightGray)]">
          Don’t have an account?{" "}
          <a href="#" className="font-semibold">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

const AuthInput = ({ type = "text", placeholder, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-full px-4 py-3 mb-4 bg-[var(--CharcoalBlue)] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--SoftBlue)]"
  />
);

const PhoneInput = ({ value, onChange }) => (
  <div className="flex items-center mb-4 px-4 py-3 bg-[var(--CharcoalBlue)] border border-gray-600 rounded-md">
    <span className="fi fi-uz w-6 h-4 rounded-[2px] mr-2"></span>
    <span className="mr-2 font-medium">+998</span>
    <input
      type="tel"
      placeholder="Enter the number"
      value={value}
      onChange={onChange}
      className="bg-transparent outline-none flex-1 placeholder-[var(--LightGray)]"
    />
  </div>
);

export default Login;
