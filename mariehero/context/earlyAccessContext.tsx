"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface EarlyAccessContextType {
  earlyAccess: boolean;
  setEarlyAccess: (value: boolean) => void;
}

const EarlyAccessContext = createContext<EarlyAccessContextType | undefined>(undefined);

export const EarlyAccessProvider = ({ children }: { children: ReactNode }) => {
  const [earlyAccess, setEarlyAccess] = useState(false);

  return (
    <EarlyAccessContext.Provider value={{ earlyAccess, setEarlyAccess }}>
      {children}
    </EarlyAccessContext.Provider>
  );
};

export const useEarlyAccess = () => {
  const context = useContext(EarlyAccessContext);
  if (!context) {
    throw new Error("useEarlyAccess must be used within an EarlyAccessProvider");
  }
  return context;
};