// src/app/auth/signup/page.tsx
'use client';


import React, { useState } from 'react';
import { signIn } from 'next-auth/react';

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your sign-up logic here, e.g., call an API endpoint
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/auth/login">Login</a></p>
    </div>
  );
};

export default SignUpPage;
