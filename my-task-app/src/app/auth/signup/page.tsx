'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignupPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Replace this with your signup logic
    console.log({ name, email, password });
    router.push('/auth/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-semibold mb-6">Welcome to <span className="text-purple-600">Workflo!</span></h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-left mb-2 text-sm font-medium text-gray-600">Full name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2 text-sm font-medium text-gray-600">Your email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-600"
            />
          </div>
          <div className="mb-6">
            <label className="block text-left mb-2 text-sm font-medium text-gray-600">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition duration-200"
          >
            Sign up
          </button>
        </form>
        <p className="mt-6 text-sm text-gray-600">
          Already have an account? <a href="/auth/login" className="text-purple-600 hover:underline">Log in.</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
