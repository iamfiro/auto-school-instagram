import { useState } from "react";

export const useModal = (startValue: boolean) => {
    const [isVisible, setIsVisible] = useState(startValue);
  
    const close = () => setIsVisible(false);
    
    const open = () => setIsVisible(true);

    return { isVisible, open, close };
};