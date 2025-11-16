import React from 'react';
import { useNotification } from '../contexts/NotificationContext';

const SuccessIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const WarningIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8.257 3.099c.636-1.21 2.852-1.21 3.488 0l5.58 10.655c.636 1.21-.474 2.746-1.744 2.746H4.421c-1.27 0-2.38-1.536-1.744-2.746l5.58-10.655zM10 14a1 1 0 100-2 1 1 0 000 2zm-1-4a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
);


const Notification: React.FC = () => {
  const { notification } = useNotification();

  const baseStyle = "bg-amber-100 border-2 text-gray-800 font-cinzel font-bold p-4 rounded-lg shadow-lg flex items-center gap-4 max-w-md";
  const typeStyle = notification.type === 'success' 
    ? "border-green-500 shadow-green-500/20"
    : "border-yellow-500 shadow-yellow-500/20";
  
  return (
    <div 
      className={`fixed top-5 right-5 z-[100] transition-all duration-500 ease-in-out transform ${notification.visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
      role="alert"
      aria-live="assertive"
    >
      <div className={`${baseStyle} ${typeStyle}`} style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/old-paper.png')" }}>
        {notification.type === 'success' ? <SuccessIcon /> : <WarningIcon />}
        <span>{notification.message}</span>
      </div>
    </div>
  );
};

export default Notification;
