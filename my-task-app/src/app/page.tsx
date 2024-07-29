'use client';

import React from 'react';
import { signIn, useSession } from 'next-auth/react';
import TaskBoard from './components/TaskBoard';

const HomePage: React.FC = () => {
  const { data: session, status } = useSession();

  // Handle loading state
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return (
      <div>
        <h2>Please sign in to access the task board</h2>
        <button onClick={() => signIn('credentials', { callbackUrl: '/auth/login' })}>
          Sign In
        </button>
      </div>
    );
  }

  return (
    <TaskBoard />
  );
};

export default HomePage;
