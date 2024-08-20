import { useEffect } from 'react';
import { useKeyBindingContext } from './KeyBindingContext';

type KeyBinding = {
  key: string;
  ctrlKey?: boolean;
  altKey?: boolean;
  shiftKey?: boolean;
  callback: (event: KeyboardEvent) => void;
};

const useKeyBinding = (keyBinding: KeyBinding) => {
  const { registeredKeys, registerKey, unregisterKey } = useKeyBindingContext();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key, ctrlKey, altKey, shiftKey, callback } = keyBinding;
      if (
        event.key.toLowerCase() === key.toLowerCase() &&
        registeredKeys.has(key) &&
        (!ctrlKey || event.ctrlKey) &&
        (!altKey || event.altKey) &&
        (!shiftKey || event.shiftKey)
      ) {
        callback(event);
      }
    };

    if (!registeredKeys.has(keyBinding.key)) {
      registerKey(keyBinding.key);
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      unregisterKey(keyBinding.key);
    };
  }, [keyBinding, registeredKeys, registerKey, unregisterKey]);
};

export default useKeyBinding;