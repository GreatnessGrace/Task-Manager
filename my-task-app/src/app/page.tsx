'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const HomePage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token'); 
    if (token) {
      router.push('/task'); 
    }
  }, [router]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-100 to-purple-200">
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Please sign in to access the task board</h2>
        <button 
          onClick={() => router.push('/auth/login')}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md flex items-center justify-center text-center"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default HomePage;
