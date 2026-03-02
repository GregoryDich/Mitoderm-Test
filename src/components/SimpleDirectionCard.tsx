import React from 'react';

interface DirectionCardProps {
  title: string;
  targetId: string;
}

export function DirectionCard({ title, targetId }: DirectionCardProps) {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      onClick={handleClick}
      className="border border-[#e7e7e7] rounded-2xl p-4 cursor-pointer select-none transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg bg-white text-center font-semibold"
    >
      {title}
    </div>
  );
}
