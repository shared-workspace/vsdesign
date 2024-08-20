import React, { createContext, useContext, useState, ReactNode } from 'react';

// type KeyBinding = {
//   key: string;
//   callback: (event: KeyboardEvent) => void;
//   ctrlKey?: boolean;
//   altKey?: boolean;
//   shiftKey?: boolean;
// };

type KeyBindingContextType = {
  registeredKeys: Set<string>;
  registerKey: (key: string) => void;
  unregisterKey: (key: string) => void;
};

const KeyBindingContext = createContext<KeyBindingContextType | undefined>(undefined);

export const KeyBindingProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [registeredKeys, setRegisteredKeys] = useState<Set<string>>(new Set());

  const registerKey = (key: string) => {
    setRegisteredKeys(prev => new Set(prev).add(key));
  };

  const unregisterKey = (key: string) => {
    setRegisteredKeys(prev => {
      const newSet = new Set(prev);
      newSet.delete(key);
      return newSet;
    });
  };

  return (
    <KeyBindingContext.Provider value={{ registeredKeys, registerKey, unregisterKey }}>
      {children}
    </KeyBindingContext.Provider>
  );
};

export const useKeyBindingContext = () => {
  const context = useContext(KeyBindingContext);
  if (!context) {
    throw new Error('useKeyBindingContext must be used within a KeyBindingProvider');
  }
  return context;
};