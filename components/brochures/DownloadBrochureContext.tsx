"use client"

import React, { createContext, useContext, useState } from 'react';

interface DownloadBrochureContextType {
  isOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
}

const DownloadBrochureContext = createContext<DownloadBrochureContextType | undefined>(undefined);

export const DownloadBrochureProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  return (
    <DownloadBrochureContext.Provider value={{ isOpen, openForm, closeForm }}>
      {children}
    </DownloadBrochureContext.Provider>
  );
};

export const useDownloadBrochure = () => {
  const context = useContext(DownloadBrochureContext);
  if (!context) {
    throw new Error('useDownloadBrochure must be used within a DownloadBrochureProvider');
  }
  return context;
};