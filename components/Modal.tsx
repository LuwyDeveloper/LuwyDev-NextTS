"use client";

import { useRef, useEffect, type ReactNode, type MouseEvent } from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ show, onClose, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);
  
  const handleClickOutside = (e: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!show) return null;

  return (
    <div
      data-component="Modal"
      onClick={handleClickOutside}
      className="fixed inset-0 bg-black/70 flex justify-center z-50 items-center flex-col-reverse"
    >
      <div
        ref={modalRef}
        className="bg-secondary border border-primary rounded-lg  shadow-lg w-[90%] xl:max-w-[80%] xl:min-h-120 max-h-[80vh] not-lg:max-h-[90dvh] overflow-y-auto px-7 py-10 relative flex"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-300 hover:text-white"
        >
          ✖
        </button>
        <div className="grid lg:grid-cols-[1fr_1fr] lg:grid-rows-1 gap-5.5 relative items-center w-full h-full ">
          {children}
        </div>
      </div>
    </div>
  );
}
