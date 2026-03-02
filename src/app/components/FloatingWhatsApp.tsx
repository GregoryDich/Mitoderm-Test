import React from 'react';
import { WhatsAppButton } from './WhatsAppButton';

export function FloatingWhatsApp() {
  return (
    <div className="fixed right-4 bottom-4 z-50">
      <WhatsAppButton 
        text="לדבר עם נציג בוואטסאפ"
        number="972XXXXXXXXX"
        message=""
      />
    </div>
  );
}
