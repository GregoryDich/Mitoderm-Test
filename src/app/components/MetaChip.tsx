import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface MetaChipProps {
  type: 'date' | 'time' | 'location';
  text: string;
}

export function MetaChip({ type, text }: MetaChipProps) {
  const icons = {
    date: <Calendar className="w-4 h-4" />,
    time: <Clock className="w-4 h-4" />,
    location: <MapPin className="w-4 h-4" />
  };

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 shadow-sm">
      {icons[type]}
      <span className="text-sm font-medium text-gray-700">{text}</span>
    </div>
  );
}
