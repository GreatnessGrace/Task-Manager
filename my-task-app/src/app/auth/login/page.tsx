"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Notification from "../../components/Notifications"; 

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        router.push("/task");
      setNotification({
        message: "Logged in Successful",
        type: "success",
      });
    } else {
      console.error(data.message);
      setNotification({
        message: data.message || "An error occurred during login.",
        type: "error",
      });
    }
    } catch (error) {
      console.error("Login failed:", error);
      setNotification({
        message: "Network error occurred during Login.",
        type: "error",
      });
    }
  };

  const handleNotificationClose = () => {
    setNotification(null);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-100 to-purple-200">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Welcome to <span className="text-purple-600">Workflo!</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              placeholder="Your email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-400 bg-gray-100"
            />
          </div>
          <div className="mb-6 relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-400 bg-gray-100"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400"
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-400 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-sm text-gray-600">
          Does not have an account? Create a{" "}
          <a href="/auth/signup" className="text-blue-800 hover:underline">
            new account.
          </a>
        </p>
      </div>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={handleNotificationClose}
        />
      )}
    </div>
  );
};

export default LoginPage;
