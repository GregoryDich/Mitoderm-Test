import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloatingButton() {
  const handleClick = () => {
    const phoneNumber = '972543262182';
    const message = encodeURIComponent('שלום! אני מעוניין/ת לקבל פרטים נוספים על סדנאות MitoDerm');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="group fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-2xl transition hover:scale-110 hover:shadow-3xl md:h-16 md:w-16"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
      
      {/* Animated pulse ring */}
      <span className="absolute -inset-1 flex">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>
      </span>
      
      {/* Notification dot */}
      <span className="absolute -top-1 -right-1 flex h-3 w-3 md:h-4 md:w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500 md:h-4 md:w-4"></span>
      </span>
    </button>
  );
}