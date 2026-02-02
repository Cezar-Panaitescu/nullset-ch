"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminContextType {
  isAdmin: boolean;
  login: () => void;
  logout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);

  const login = () => {
    const password = window.prompt("Enter Admin Password:");
    if (password === "Apolodor!@#123") {
      setIsAdmin(true);
      alert("Admin Mode Activated");
    } else if (password !== null) {
        alert("Incorrect Password");
    }
  };

  const logout = () => {
    setIsAdmin(false);
    alert("Admin Mode Deactivated");
  };

  return (
    <AdminContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
