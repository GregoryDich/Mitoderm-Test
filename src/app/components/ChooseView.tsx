import React from 'react';
import { DirectionCard } from './DirectionCard';

export function ChooseView() {
  const directions = [
    {
      title: 'קוסמטיקאיות תחום פנים',
      description: 'למדו טכניקות מתקדמות לטיפול בעור הפנים, טיפולי אנטי אייג\'ינג, ופילינג מקצועי',
      icon: '✨'
    },
    {
      title: 'קוסמטיקאיות תחום קרקפת',
      description: 'התמחות בטיפולי שיער וקרקפת, טיפולים מתקדמים לנשירת שיער ובריאות הקרקפת',
      icon: '💆‍♀️'
    },
    {
      title: 'טריכולוגיה',
      description: 'מקצוע ייחודי העוסק באבחון וטיפול בבעיות שיער וקרקפת ברמה מקצועית מתקדמת',
      icon: '🔬'
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            בחרו את המסלול המתאים לכם
          </h2>
          <p className="text-xl text-gray-600">
            שלושה מסלולים מקצועיים להכשרה מלאה
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {directions.map((direction, index) => (
            <DirectionCard
              key={index}
              title={direction.title}
              description={direction.description}
              icon={direction.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
