import React, { createContext, useState } from 'react';

export const DropdownContext = createContext();

export const DropdownProvider = ({ children }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  return (
    <DropdownContext.Provider
      value={{
        isDropdownVisible,
        setIsDropdownVisible,
        selectedItem,
        setSelectedItem,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
};