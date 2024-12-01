import { AnimatePresence } from "framer-motion";
import { Animate } from "../AnimateWrapper/Animation";
import { memo, ReactNode } from "react";

interface BackdropProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

export const Backdrop = memo(({ isModalOpen, children, setIsModalOpen }: BackdropProps) => {
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <AnimatePresence mode="wait">
      {isModalOpen && <Animate.Backdrop onClick={closeModal}>{children}</Animate.Backdrop>}
    </AnimatePresence>
  );
});
