import { useCallback, useState } from "react";
import { useScrollLock } from "./useScrollLock";


export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = useCallback(() => {
    setIsModalOpen(!isModalOpen);
  }, [isModalOpen]);

  useScrollLock(isModalOpen);

  return { isModalOpen, setIsModalOpen, toggleModal };
};
