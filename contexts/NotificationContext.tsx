import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';

type NotificationType = 'success' | 'warning';

interface NotificationState {
  message: string;
  type: NotificationType;
  visible: boolean;
}

interface NotificationContextType {
  showNotification: (message: string, type?: NotificationType) => void;
  notification: NotificationState;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notification, setNotification] = useState<NotificationState>({ message: '', type: 'success', visible: false });

  const showNotification = useCallback((message: string, type: NotificationType = 'success') => {
    setNotification({ message, type, visible: true });
    const timer = setTimeout(() => {
      setNotification(prev => ({ ...prev, visible: false }));
    }, 3000); // Notification is visible for 3 seconds
    
    // This is a simple way to avoid setting state on an unmounted component
    // in case the provider unmounts, though unlikely for a root provider.
    return () => clearTimeout(timer);
  }, []);

  return (
    <NotificationContext.Provider value={{ showNotification, notification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};
