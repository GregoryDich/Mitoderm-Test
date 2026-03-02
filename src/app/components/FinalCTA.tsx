import React from 'react';
import { motion } from 'motion/react';
import { Button } from './Button';
import { MessageCircle, Phone, Mail } from 'lucide-react';

export function FinalCTA() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/972', '_blank');
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900 relative overflow-hidden">
      {/* Animated elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-10 right-10 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"
      />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            מוכנים להתחיל?
          </h2>
          <p className="text-xl md:text-2xl text-purple-100 mb-12 leading-relaxed">
            צרו איתנו קשר עוד היום והצטרפו לאלפי בוגרים מצליחים
            <br />
            שהפכו את החלום שלהם למקצוע משתלם
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button onClick={handleWhatsAppClick} className="inline-flex items-center gap-3">
              <MessageCircle className="w-6 h-6" />
              לדבר עם נציג בוואטסאפ
            </Button>
            <Button variant="secondary" className="inline-flex items-center gap-3">
              <Phone className="w-5 h-5" />
              חייגו אלינו
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8"
            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
          >
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>050-123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>info@cosmetics-course.co.il</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}