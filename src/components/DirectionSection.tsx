import React from 'react';

interface DirectionSectionProps {
  id: string;
  title: string;
  content?: string;
}

export function DirectionSection({ id, title, content }: DirectionSectionProps) {
  return (
    <section className="py-14 border-b border-[#e7e7e7]" id={id}>
      <div className="max-w-[1120px] mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {content && <p className="text-[#666666]">{content}</p>}
      </div>
    </section>
  );
}
