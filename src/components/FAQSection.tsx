'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const faqs: FAQItem[] = [
    {
      question: 'האם אני צריך ניסיון קודם בתחום?',
      answer: 'לא בהכרח! הקורסים שלנו מתאימים גם למתחילים. אנחנו מתחילים מהבסיס ובונים את הידע בהדרגה. עבור קורסים מתקדמים יותר, נדרש ניסיון בסיסי שנפרט בדרישות הקבלה.',
    },
    {
      question: 'כמה זמן לוקח הקורס וכיצד הוא מתנהל?',
      answer: 'משך הקורס משתנה בהתאם למסלול: 3 שעות לסדנה, 180 שעות לקורס בסיסי, ו-480 שעות למסלול המקצועי המלא. הלימודים משלבים מפגשים פרונטליים, פרקטיקה מעשית והתמחות קלינית.',
    },
    {
      question: 'איזו תעודה אקבל בסיום הקורס?',
      answer: 'בסיום הקורס תקבל תעודת הסמכה מוכרת של MitoDerm Academy. התעודה מוכרת בישראל ומאפשרת לעבוד כקוסמטיקאי/ת מקצועי/ת. במסלולים המתקדמים תקבל גם תיק עבודות מקצועי.',
    },
    {
      question: 'האם הציוד והמוצרים כלולים במחיר?',
      answer: 'כן! כל תלמיד מקבל ערכת עבודה מקצועית הכוללת כלים ומוצרים לתרגול. במסלולים המתקדמים, הערכה שלכם ותוכלו להמשיך להשתמש בה במקצועית.',
    },
    {
      question: 'מה כולל הליווי האישי?',
      answer: 'הליווי האישי כולל: תמיכה במהלך הלימודים, ייעוץ מקצועי, סיוע בבניית תיק עבודות, הכוונה עסקית, ותמיכה גם אחרי סיום הקורס. אנחנו כאן בשבילך!',
    },
    {
      question: 'האם יש אפשרות לתשלומים?',
      answer: 'כן, אנחנו מציעים מספר אפשרויות תשלום גמישות כולל תשלומים. צור איתנו קשר ונמצא את הפתרון המתאים לך.',
    },
    {
      question: 'מה קורה אם אני צריך לפספס מפגש?',
      answer: 'אנחנו מבינים שדברים קורים! ניתן לפספס מפגש בתיאום מראש ולהשלים אותו במועד חלופי או בקבוצה אחרת. חומרי הלימוד זמינים באופן דיגיטלי.',
    },
    {
      question: 'איך אני יכול להירשם?',
      answer: 'ההרשמה פשוטה! לחץ על כפתור ההרשמה באתר, מלא פרטים, ונציג שלנו יחזור אליך תוך 24 שעות. אפשר גם ליצור קשר דרך WhatsApp או טלפון.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#0f1829] py-16" dir="rtl">
      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 flex justify-center">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <HelpCircle className="h-12 w-12 text-[#dfba74]" />
            </motion.div>
          </div>
          <h2 className="text-3xl font-bold text-[#dfba74] md:text-4xl">שאלות נפוצות</h2>
          <p className="mt-3 text-base text-white/70">כל מה שרצית לדעת על הקורסים שלנו</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition hover:border-[#dfba74]/30"
            >
              <motion.button
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-5 text-right transition"
              >
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-3"
                >
                  <ChevronDown className="h-5 w-5 text-[#dfba74]" />
                </motion.div>
                <span className="flex-1 text-base font-medium text-white md:text-lg">
                  {faq.question}
                </span>
              </motion.button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden border-t border-white/10"
                  >
                    <div className="p-5 text-right text-sm leading-relaxed text-white/80 md:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-sm text-white/60">לא מצאת את התשובה שחיפשת?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-gradient-to-r from-[#dfba74] to-[#be800c] px-8 py-3 font-bold text-white shadow-lg transition hover:shadow-xl"
          >
            צור קשר איתנו
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
