import React from 'react';
import { WhatsAppButton } from './WhatsAppButton';

export function CTASection() {
  return (
    <section className="py-14 border-b border-[#e7e7e7]">
      <div className="max-w-[1120px] mx-auto px-6 text-center">
        <WhatsAppButton 
          text="לדבר עם נציג בוואטסאפ"
          number="972XXXXXXXXX"
          message=""
        />
      </div>
    </section>
  );
}
