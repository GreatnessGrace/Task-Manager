'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; 
import Notification from "../../components/Notifications"; 

const SignupPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const router = useRouter();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('User registered successfully');
        router.push('/auth/login');
        setNotification({
          message: "Account Created Successfully",
          type: "success",
        });
      } else {
        const result = await response.json();
        setNotification({
          message: data.message || "An error occurred during Signup.",
          type: "error",
        });
        console.error('Error:', result.message);
      }
    } catch (error) {
      setNotification({
        message: "Network error occurred during Signup.",
        type: "error",
      });
      console.error('Network error:', error);
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-100 to-purple-200">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-semibold mb-6">Welcome to <span className="text-blue-800">Workflo!</span></h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder='Full name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gary-400 bg-gray-100" 
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder='Your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gary-400 bg-gray-100"
            />
          </div>
          <div className="mb-6 relative"> 
            <input
              type={showPassword ? 'text' : 'password'} 
              placeholder='Password'
              value={password}
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
            Sign up
          </button>
        </form>
        <p className="mt-6 text-sm text-gray-600">
          Already have an account? <a href="/auth/login" className="text-blue-600 hover:underline">Log in.</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
