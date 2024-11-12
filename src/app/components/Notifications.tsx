import React, { useEffect } from 'react';

interface NotificationProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); 
    return () => clearTimeout(timer); 
  }, [onClose]);

  return (
    <div
      className={`fixed top-0 right-0 m-4 p-4 rounded-lg shadow-lg text-white ${
        type === 'success' ? 'bg-green-500' : 'bg-red-700'
      }`}
      style={{ zIndex: 9999 }}
    >
      <button
        onClick={onClose}
        className="absolute top-0 right-2 text-white"
      >
        ×
      </button>
      {message}
    </div>
  );
};

export default Notification;
