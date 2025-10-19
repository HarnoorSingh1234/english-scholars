"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type WhatsAppButtonProps = {
  phoneNumber?: string;
  message?: string;
};

export default function WhatsAppButton({
  phoneNumber = process.env.NEXT_PUBLIC_MOBILE_NUMBER || "",
  message = "For further queries contact us on WhatsApp",
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const formattedNumber = phoneNumber.startsWith("+")
      ? phoneNumber
      : `+91${phoneNumber}`;
    const whatsappUrl = `https://wa.me/${formattedNumber.replace(/\D/g, "")}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.button
            onClick={handleClick}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center shadow-2xl group"
            aria-label="Contact us on WhatsApp"
          >
            <motion.div
              variants={{
                hover: { rotate: 15, scale: 1.1 }
              }}
              transition={{ duration: 0.3 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 fill-white relative z-10"
              >
                <path d="M17.6 6.32A7.85 7.85 0 0 0 12.025 4c-4.4 0-7.975 3.58-7.975 7.98a7.93 7.93 0 0 0 1.226 4.26L4 20.5l4.342-1.137a7.922 7.922 0 0 0 3.683.9h.003c4.4 0 7.975-3.58 7.975-7.98a7.95 7.95 0 0 0-2.403-5.963zm-5.578 12.28h-.002a6.597 6.597 0 0 1-3.356-.918l-.24-.144-2.5.653.667-2.431-.156-.252a6.533 6.533 0 0 1-1.005-3.53A6.578 6.578 0 0 1 12.024 5.4a6.538 6.538 0 0 1 4.64 1.928 6.566 6.566 0 0 1 1.988 4.652c0 3.637-2.96 6.62-6.63 6.62zm3.626-4.95c-.199-.1-1.177-.583-1.36-.65-.182-.065-.315-.099-.448.1-.133.197-.513.65-.628.783-.115.134-.231.15-.43.05-.198-.099-.839-.308-1.596-.985-.59-.525-.987-1.175-1.103-1.372-.116-.198-.012-.304.087-.403.09-.088.199-.232.299-.348.098-.117.131-.2.197-.332.067-.134.034-.25-.016-.349-.05-.099-.448-1.083-.614-1.482-.162-.388-.326-.336-.448-.343-.115-.006-.249-.008-.382-.008-.133 0-.349.05-.532.249-.182.198-.697.68-.697 1.664 0 .983.714 1.932.813 2.065.1.134 1.402 2.132 3.396 2.992.475.205.845.326 1.133.418.476.152.91.13 1.253.08.382-.057 1.177-.48 1.343-.943.166-.464.166-.86.116-.943-.049-.083-.182-.133-.38-.232z" />
              </svg>
            </motion.div>

            {/* Decorative corners on hover */}
            <motion.div
              initial={{ scale: 0 }}
              variants={{ hover: { scale: 1 } }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-white"
            />
            <motion.div
              initial={{ scale: 0 }}
              variants={{ hover: { scale: 1 } }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-white"
            />
            <motion.div
              initial={{ scale: 0 }}
              variants={{ hover: { scale: 1 } }}
              transition={{ duration: 0.2, delay: 0.15 }}
              className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-white"
            />
            <motion.div
              initial={{ scale: 0 }}
              variants={{ hover: { scale: 1 } }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-white"
            />
          </motion.button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-main-400 text-white border-main-200">
          <p>{message}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}