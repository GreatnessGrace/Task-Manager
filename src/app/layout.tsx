// src/App/Layout.tsx
'use client'
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import '../global.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Task Management App</title>
        {/* You can include other head elements here */}
      </head>
      <body>
        <SessionProvider>
        
          <main>{children}</main>
          <footer>
            <p>&copy; 2024 Task Management App</p>
          </footer>
        </SessionProvider>
      </body>
    </html>
  );
};

export default Layout;
