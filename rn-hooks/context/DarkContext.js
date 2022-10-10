import React from "react";

export const DarkContext = React.createContext();

export function DarkProvider({ children }) {
  const [dark, setDark] = React.useState(false);
  return (
    <DarkContext.Provider value={[dark, setDark]}>
      {children}
    </DarkContext.Provider>
  );
}
