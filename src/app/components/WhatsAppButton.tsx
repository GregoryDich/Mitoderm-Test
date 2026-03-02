import React from 'react';

interface WhatsAppButtonProps {
  text: string;
  number: string;
  message?: string;
  className?: string;
}

export function WhatsAppButton({ text, number, message = '', className = '' }: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#f3dc9a] font-bold text-[#111111] no-underline whitespace-nowrap shadow-[0_10px_20px_rgba(0,0,0,0.18)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.22)] transition-all duration-150 ${className}`}
    >
      {text}
    </a>
  );
}
