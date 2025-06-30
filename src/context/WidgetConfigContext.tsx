import React, { createContext, useContext } from "react";
import type { WidgetConfig } from "../types/global";

const WidgetConfigContext = createContext<WidgetConfig>({});

export const WidgetConfigProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const config = window.MyWidgetConfig || { id:6.1 , name: "Default Widget" };
  return (
    <WidgetConfigContext.Provider value={config}>
      {children}
    </WidgetConfigContext.Provider>
  );
};

export const useWidgetConfig = () => useContext(WidgetConfigContext);
