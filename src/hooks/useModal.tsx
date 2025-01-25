"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import Modal from 'react-modal';

interface portaledModalWrapperProps {
  children: React.ReactNode;
  className?:string
}
export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsOpen((prevState) => !prevState);
  };

  const customStyles = {
    content: {
      inset:'100px',
    },
  };
  return { isOpen, toggleModal };
};
