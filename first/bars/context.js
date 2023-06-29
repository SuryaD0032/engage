import React, { createContext, useState } from 'react';

export const TabContext = createContext();

export const TabProvider = ({ children }) => {
  const [focusedTab, setFocusedTab] = useState('Home'); // Initial focused tab is 'Home'

  return (
    <TabContext.Provider value={{ focusedTab, setFocusedTab }}>
      {children}
    </TabContext.Provider>
  );
};
