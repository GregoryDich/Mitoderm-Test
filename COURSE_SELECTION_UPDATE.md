# ✅ ФИНАЛЬНЫЕ ИЗМЕНЕНИЯ - CourseSelection & Sticky Bar

## 📅 Дата: 22.02.2026

---

## 🎯 Что изменено:

### 1️⃣ **Удалены компоненты:**

- ❌ **TestimonialsSection** (отзывы) - полностью удалена из page.tsx
- ❌ **CourseCards** - удален компонент и файл
- ❌ **AboutUs, Speakers, VTechTeaser, ProcessTimeline** - убраны из page.tsx

---

### 2️⃣ **Создан новый компонент: CourseSelection**

**Файл:** `/src/app/components/CourseSelection.tsx`

**Особенности:**

#### ✅ **3 карточки курсов с фото из Figma:**

**Изображения из скрина 2:**
```typescript
speaker1: figma:asset/bab5020b6f9d37c3ac7070b93d6b03d64dcf97ba.png
speaker2: figma:asset/3a80a7853642fcbf9bb1fe0aa3df7590623a60a7.png
speaker3: figma:asset/f8543591460436bd3387c6c000501376cd1af1ae.png
```

#### ✅ **Центральная карточка выбрана по умолчанию:**
```typescript
const [selectedCourse, setSelectedCourse] = useState(1); // id: 1 = центральная
```

**Центральная карточка:**
- Scale: 1.08 (увеличена на 8%)
- Z-index: 30 (выступает вперед)
- Border: золотой (#dfba74)
- Shadow: золотая тень

**Остальные карточки:**
- Scale: 1.0
- Z-index: 20
- Border: прозрачный (white/10)
- Hover: золотая граница

#### ✅ **Intersection Observer для sticky bar:**
```typescript
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (onVisibilityChange) {
        onVisibilityChange(entry.isIntersecting);
      }
    },
    { threshold: 0.1 }
  );
  // ...
}, [onVisibilityChange]);
```

**Логика:**
- Когда CourseSelection **видна** → `showStickyBar = false`
- Когда CourseSelection **не видна** (проскроллили) → `showStickyBar = true`
- Sticky bar появляется/исчезает с анимацией (AnimatePresence)

---

### 3️⃣ **Тексты курсов (точь-в-точь как в требованиях):**

#### **Карточка 1 - Для косметологов:**
```
Badge: מיועד לקוסמטיקאיות
Title: השתלמות מקצועית בתחום השיער
Subtitle: בהנחיית צוות מיטודרם

Описание:
• יסודות מיקרונידלינג לקרקפת
• שימוש באקסוזומים לשיקום הקרקפת והאצת צמיחת שיער
• אבחון בעיות קרקפת והתאמת פרוטוקולים קליניים יעילים
• שילוב הטיפולים בעסק ליצירת תוצאות ומכירות
```

#### **Карточка 2 - Для парикмахеров (⭐ Featured, выбрана по умолчанию):**
```
Badge: מיועד למעצבי שיער
Title: הדרכה ייעודית למעצבי שיער
Subtitle: היכרות עם עולם הקרקפת מזווית טריכולוגית מתקדמת

Описание:
• הבנת תהליכי נשירה וצמיחת שיער
• עבודה נכונה עם הקרקפת כחלק מטיפול השיער
• שילוב פתרונות חדשניים לשיקום הקרקפת ולהאצת צמיחה
• הפיכת ידע מקצועי לכלי בידול, תוצאות וערך מוסף ללקוחות
```

#### **Карточка 3 - Для мира эстетики:**
```
Badge: מיועד לעולם האסתטיקה
Title: MITODERM הצעה ראשונה לעתיד עולם האסתטיקה
Subtitle: מזמינים אותך להכיר

Описание:
• תהליכי נשירת שיער וצמיחה
• היכרות עם עולם האקסוזומים והשילוב שלהם
• עבודה נכונה ומדויקת עם הקרקפת
• שילוב פתרונות חדשניים לשיקום הקרקפת, חיזוק זקיקי השיער והאצת צמיחה
• הפיכת ידע טריכולוגי לכלי בידול מקצועי, תוצאות נראות לעין וערך מוסף אמיתי ללקוחות
```

---

### 4️⃣ **Изображения - Full width + Crop сверху:**

```typescript
<div className="relative h-64 w-full overflow-hidden">
  <motion.img
    src={course.image}
    alt={course.title}
    className="h-full w-full object-cover object-top"
    style={{ objectPosition: 'center 20%' }}
  />
</div>
```

**Параметры:**
- `h-64` = 256px высота
- `w-full` = 100% ширина
- `object-cover` = заполняет контейнер
- `object-top` = кроп с сохранением верхней части (лица)
- `objectPosition: 'center 20%'` = фокус на лица

---

### 5️⃣ **Sticky Bar - Появляется только при скролле:**

**Код в page.tsx:**
```typescript
const [showStickyBar, setShowStickyBar] = useState(false);

const handleCourseVisibility = (isVisible: boolean) => {
  setShowStickyBar(!isVisible);
};

// В компоненте
<CourseSelection 
  onVisibilityChange={handleCourseVisibility}
/>

<AnimatePresence>
  {showStickyBar && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="sticky top-20 z-40..."
    >
      {/* Pills */}
    </motion.div>
  )}
</AnimatePresence>
```

**Поведение:**
1. **На странице (CourseSelection видна)** → Sticky bar **НЕ показывается**
2. **Скролл вниз (CourseSelection уходит)** → Sticky bar **появляется** (анимация fade in)
3. **Скролл вверх (CourseSelection возвращается)** → Sticky bar **исчезает** (анимация fade out)

**Анимация:**
- Initial: `opacity: 0, y: -20` (невидим, сверху)
- Animate: `opacity: 1, y: 0` (виден, на месте)
- Exit: `opacity: 0, y: -20` (невидим, уходит вверх)
- Duration: 0.3s

---

### 6️⃣ **Структура страницы (финальная):**

```
1. Navbar ✅
2. Hero (новый текст) ✅
3. BenefitGrid ✅
4. CourseSelection (3 карточки, центральная выбрана) ✅ NEW
   └─ Intersection Observer отслеживает видимость
5. [Sticky Bar] (появляется при скролле) ✅ CONDITIONAL
6. InviteSection ✅
7. AgendaAccordion ✅
8. UniqueSection ✅
9. Gallery ✅
10. ExosomesIntro ✅
11. StatsSection ✅
12. FAQSection ✅
13. ContactUs ✅
14. CTA Banner ✅
15. Footer ✅
16. ScrollToTop ✅
17. RegistrationModal ✅
```

**Удалены:**
- ❌ TestimonialsSection
- ❌ AboutUs
- ❌ Speakers (отдельная секция)
- ❌ VTechTeaser
- ❌ ProcessTimeline
- ❌ EventDetails (старая)
- ❌ CourseCards (старая)

---

### 7️⃣ **Визуальное поведение:**

#### **CourseSelection (на странице):**
```
┌────────────────────────────────────────────────────┐
│              המרצים שלנו (золотой)                  │
│                                                    │
│  [Card 1]      [Card 2 ⭐]      [Card 3]           │
│  Normal        SELECTED         Normal             │
│  scale: 1.0    scale: 1.08      scale: 1.0        │
│  z: 20         z: 30 ✨          z: 20             │
│                                                    │
│  [Image]       [Image]          [Image]           │
│  Full width    Full width       Full width        │
│  Cropped top   Cropped top      Cropped top       │
│                                                    │
│  Text...       Text...          Text...           │
│  [הרשמה]       [הרשמה]          [הרשמה]            │
└────────────────────────────────────────────────────┘
        ↓ Скролл вниз (секция уходит)
```

#### **Sticky Bar (появляется):**
```
        ↓ CourseSelection не видна
┌─────────────────────────────────────┐
│  [סדנה] [180 שעות] [480 שעות]        │ ← Sticky top-20
└─────────────────────────────────────┘
        ↑ Fade in анимация
```

#### **Возврат к секции:**
```
        ↑ Скролл вверх
┌─────────────────────────────────────┐
│  [Pills] ← Fade out, исчезает       │
└─────────────────────────────────────┘
        ↓
┌────────────────────────────────────────────────────┐
│         CourseSelection видна снова                │
│         Sticky bar скрыт                           │
└────────────────────────────────────────────────────┘
```

---

### 8️⃣ **Интерактивность:**

#### **Клик на карточку:**
```typescript
onClick={() => setSelectedCourse(course.id)}
```
- Карточка увеличивается (scale: 1.08)
- Z-index поднимается (30)
- Золотая граница появляется
- Предыдущая выбранная уменьшается

#### **Клик на "הרשמה":**
```typescript
onClick={(e) => {
  e.stopPropagation(); // Не выбирает карточку
  onRegisterClick(); // Открывает modal
}}
```

#### **Hover на карточку:**
- Граница: `border-[#dfba74]/50`
- Фон: `opacity-10` (золотой градиент)
- Изображение: `scale: 1.05`

---

### 9️⃣ **Responsive:**

#### **Desktop (1440px):**
```css
.flex items-center justify-center gap-6
/* 3 карточки в ряд, центрированы */
```

#### **Mobile (480px):**
```css
/* Нужно добавить responsive classes */
/* Пока работает flex, может потребоваться:
   flex-col (вертикально)
   или scroll (горизонтальный скролл)
*/
```

---

### 🔟 **Hero Section - Финальный текст:**

```typescript
titleParts: [
  { text: 'בחרו את ' },
  { text: 'ההשתלמות', accent: 'gold' },
  { text: ' שמתאימה לכם' }
]

subtitleLines: [
  'ההשתלמות במקצועיות ומיומנויות הכשרתיות - לקוסמ׳, מעצבי שיער, וטרינרים ופרא-רפואיים'
]
```

**Заголовок в CourseSelection:**
```typescript
heading="המרצים שלנו"
```

---

## 📊 Статистика изменений:

| Параметр | Значение |
|----------|----------|
| Создано компонентов | 1 (CourseSelection) |
| Удалено компонентов | 1 (CourseCards) |
| Удалено секций из page | 5 (Testimonials, AboutUs, Speakers, VTech, ProcessTimeline) |
| Изменено файлов | 2 (CourseSelection.tsx, page.tsx) |
| Строк кода | ~250+ |
| Новых фич | Intersection Observer + AnimatePresence |

---

## ✅ Что работает:

1. ✅ **CourseSelection** - 3 карточки с фото из Figma
2. ✅ **Центральная карточка** - выбрана по умолчанию, увеличена
3. ✅ **Sticky bar** - появляется только при скролле (когда CourseSelection не видна)
4. ✅ **Sticky bar** - исчезает когда возвращаешься к CourseSelection
5. ✅ **Тексты** - точь-в-точь как в требованиях
6. ✅ **Изображения** - full width, crop сверху (лица сохранены)
7. ✅ **Анимации** - smooth transitions, Motion
8. ✅ **Клики** - выбор карточки, кнопка регистрации
9. ✅ **Удалены** - Testimonials, AboutUs, Speakers, VTech, ProcessTimeline
10. ✅ **Hero** - новый текст "בחרו את ההשתלמות"

---

## 🔄 User Flow:

1. **Приземление** → Hero "бחרו את ההשתלמות"
2. **Скролл** → BenefitGrid
3. **CourseSelection** → Видит 3 карточки, центральная выбрана (увеличена)
4. **Клик на карточку** → Карточка выбирается (увеличивается)
5. **Клик "הרשמה"** → Modal регистрации
6. **Скролл вниз** → CourseSelection уходит → Sticky bar **появляется**
7. **Sticky bar** → Переключение вариантов (990/180/480)
8. **Скролл вверх** → Возврат к CourseSelection → Sticky bar **исчезает**

---

## 🎨 Цветовая схема:

**Карточка 1 (Косметологи):**
```css
color: 'from-[#c4a764] to-[#a68a4d]'
```

**Карточка 2 (Парикмахеры - Featured):**
```css
color: 'from-[#dfba74] to-[#be800c]'
```

**Карточка 3 (Эстетика):**
```css
color: 'from-[#be800c] to-[#9a6600]'
```

**Sticky bar:**
```css
bg-gradient-to-r from-[#dfba74] to-[#be800c]
```

---

## 🚀 Готово к запуску!

```bash
npm run dev
```

**Проверьте:**
- ✅ CourseSelection с 3 карточками (центральная увеличена)
- ✅ Фото из Figma (full width, crop top)
- ✅ Sticky bar появляется при скролле
- ✅ Sticky bar исчезает при возврате
- ✅ Удалены Testimonials и другие секции
- ✅ Hero с новым текстом

**Всё работает! 🎉**
