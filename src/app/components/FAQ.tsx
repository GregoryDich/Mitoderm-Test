import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Star } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'כמה זמן נמשך הקורס?',
      answer: 'משך הקורס משתנה בהתאם למסלול שנבחר. בממוצע, הקורס נמשך בין 3-6 חודשים עם מפגשים שבועיים.'
    },
    {
      question: 'האם יש דרישות קדם?',
      answer: 'לא נדרשת התמחות קודמת. הקורס מתאים לכולם - ממתחילים ועד מקצוענים המעוניינים להרחיב את הידע שלהם.'
    },
    {
      question: 'האם התעודה מוכרת?',
      answer: 'כן! התעודה שלנו מוכרת ומוסמכת על ידי משרד הבריאות והגופים המקצועיים המובילים בישראל.'
    },
    {
      question: 'האם יש ליווי לאחר הקורס?',
      answer: 'בהחלט! אנחנו מספקים ליווי מקצועי גם לאחר סיום הקורס, כולל יעוץ להקמת עסק ועדכונים מקצועיים.'
    },
    {
      question: 'מה כולל המחיר?',
      answer: 'המחיר כולל את כל חומרי הלימוד, הציוד המקצועי לתרגול, התעודה המוסמכת וליווי מלא לאורך הקורס.'
    }
  ];

  const testimonials = [
    {
      name: 'שרה כהן',
      text: 'הקורס שינה את חיי! היום אני מנהלת סלון מצליח בתל אביב',
      rating: 5
    },
    {
      name: 'מיכל לוי',
      text: 'המרצים המקצועיים והידע העדכני הכי שווים. ממליצה בחום!',
      rating: 5
    },
    {
      name: 'רחל ברקוביץ',
      text: 'קיבלתי את כל הכלים להצליח במקצוע. תודה רבה!',
      rating: 5
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            מה אומרים הבוגרים שלנו
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            סיפורי הצלחה אמיתיים
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-bold text-purple-600">
                  {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            שאלות נפוצות
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            כל מה שרציתם לדעת
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-right hover:bg-purple-50 transition-colors"
                >
                  <span className="text-xl font-bold text-gray-900">
                    {faq.question}
                  </span>
                  <div className="text-purple-600">
                    {openIndex === index ? (
                      <Minus className="w-6 h-6" />
                    ) : (
                      <Plus className="w-6 h-6" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
