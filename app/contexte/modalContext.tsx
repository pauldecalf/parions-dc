// components/ModalContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ModalContextType = {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal doit être utilisé dans un ModalProvider");
  }
  return context;
};
