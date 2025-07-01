import React, { createContext, useContext } from "react";
import type { ChatButtonOptions, BrandOptions } from "../types/global";

interface LayoutContextType {
  chatIconLayout: ChatButtonOptions;
  chatBoxLayout: BrandOptions;
}

const LayOutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayOutContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const chatIconLayout: ChatButtonOptions = window.chatButtonOptions || {
    id: 7.1,
    name: "Default Widget",
  };

  const chatBoxLayout: BrandOptions = window.brandOptions || {
    brandName: "Default Brand",
    // backgroundprimaryColor: "#00e785",
  };

  return (
    <LayOutContext.Provider value={{ chatIconLayout, chatBoxLayout }}>
      {children}
    </LayOutContext.Provider>
  );
};

export const useLayOutConfig = (): LayoutContextType => {
  const context = useContext(LayOutContext);
  if (!context) {
    throw new Error("useWidgetConfig must be used within a LayOutContextProvider");
  }
  return context;
};
