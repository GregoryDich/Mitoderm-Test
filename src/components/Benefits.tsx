import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, BookOpen, TrendingUp, Heart, Shield } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: <Award className="w-10 h-10" />,
      title: 'הסמכה מקצועית',
      description: 'קבלו תעודה מוכרת ומוסמכת בתום הקורס'
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'מרצים מובילים',
      description: 'למדו מהמומחים הטובים ביותר בתעשייה'
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: 'תכנית מקיפה',
      description: 'תכנית לימודים עדכנית ומעמיקה'
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'קידום קריירה',
      description: 'פתחו דלתות לעתיד מקצועי מבטיח'
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'תמיכה מלאה',
      description: 'ליווי והכוונה לאורך כל הדרך'
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'ערבות להצלחה',
      description: 'מחויבים להצלחה המקצועית שלכם'
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            למה לבחור בנו?
          </h2>
          <p className="text-xl text-gray-600">
            היתרונות שיעזרו לכם להצליח
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300 border border-purple-100"
            >
              <div className="text-purple-600 mb-4 transform group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
