# ✅ VARIANT SWITCHING - ИНТЕГРАЦИЯ

## 📅 Дата: 22.02.2026

---

## 🎯 Что исправлено:

### **Проблема:**
При клике на карточки в CourseSelection не менялся контент в последующих блоках (InviteSection, AgendaAccordion, Gallery и т.д.).

### **Решение:**
Связал выбор карточки с состоянием `variant`, чтобы при клике на карточку менялся весь контент страницы.

---

## 🔧 Изменения в коде:

### 1️⃣ **CourseSelection.tsx - Добавлены props:**

```typescript
interface CourseSelectionProps {
  heading: string;
  onRegisterClick: () => void;
  onVisibilityChange?: (isVisible: boolean) => void;
  selectedVariant: WorkshopVariant;      // ✅ NEW
  onVariantChange: (variant: WorkshopVariant) => void; // ✅ NEW
}
```

**Маппинг карточек на варианты:**
```typescript
const variantToIndex: Record<WorkshopVariant, number> = {
  '990': 0,  // Карточка 1 (Косметологи)
  '180': 1,  // Карточка 2 (Парикмахеры) - центральная
  '480': 2   // Карточка 3 (Эстетика)
};

const indexToVariant: WorkshopVariant[] = ['990', '180', '480'];

const selectedCourse = variantToIndex[selectedVariant];
```

**Клик на карточку:**
```typescript
onClick={() => {
  onVariantChange(indexToVariant[course.id]);
}}
```

---

### 2️⃣ **page.tsx - Обновлено:**

**Начальный variant - центральная карточка:**
```typescript
const [variant, setVariant] = useState<WorkshopVariant>("180"); 
// "180" = карточка 2 (парикмахеры) - центральная
```

**Передача props в CourseSelection:**
```typescript
<CourseSelection 
  heading="המרצים שלנו"
  onRegisterClick={() => setIsModalOpen(true)}
  onVisibilityChange={handleCourseVisibility}
  selectedVariant={variant}  // ✅ Передаем текущий variant
  onVariantChange={(newVariant) => {  // ✅ Обновляем variant
    setVariant(newVariant);
    toast.info(`עברת למסלול ${newVariant === '990' ? 'סדנה' : newVariant === '180' ? '180 שעות' : '480 שעות'}`, {
      duration: 2000,
    });
  }}
/>
```

---

## 🔄 Как это работает:

### **User Flow:**

1. **Загрузка страницы:**
   ```
   variant = "180" (центральная карточка)
   ↓
   Карточка 2 (парикмахеры) увеличена и выбрана
   ↓
   Весь контент показывается для варианта "180"
   ```

2. **Клик на левую карточку (косметологи):**
   ```
   onClick карточки 0
   ↓
   onVariantChange('990')
   ↓
   setVariant('990')
   ↓
   Карточка 0 увеличивается
   ↓
   Контент обновляется:
   - InviteSection → контент для "990"
   - AgendaAccordion → темы для "990"
   - Gallery → галерея для "990"
   - ExosomesIntro → текст для "990"
   - и т.д.
   ```

3. **Клик на центральную карточку (парикмахеры):**
   ```
   onClick карточки 1
   ↓
   onVariantChange('180')
   ↓
   setVariant('180')
   ↓
   Карточка 1 увеличивается
   ↓
   Контент обновляется для "180"
   ```

4. **Клик на правую карточку (эстетика):**
   ```
   onClick карточки 2
   ↓
   onVariantChange('480')
   ↓
   setVariant('480')
   ↓
   Карточка 2 увеличивается
   ↓
   Контент обновляется для "480"
   ```

5. **Sticky bar при скролле:**
   ```
   Скролл вниз → CourseSelection не видна
   ↓
   Sticky bar появляется
   ↓
   Клик на "סדנה" / "180 שעות" / "480 שעות"
   ↓
   setVariant(v)
   ↓
   Выбранная карточка в CourseSelection обновляется
   ↓
   Весь контент обновляется
   ```

---

## ✅ Что работает:

### **В CourseSelection:**
- ✅ Клик на карточку меняет variant
- ✅ Выбранная карточка увеличена (scale: 1.08)
- ✅ Золотая граница на выбранной карточке
- ✅ Анимация переключения
- ✅ Toast уведомление при переключении

### **В Sticky Bar:**
- ✅ Клик на pill меняет variant
- ✅ Выбранная карточка в CourseSelection обновляется автоматически
- ✅ Контент обновляется
- ✅ Toast уведомление

### **В остальных секциях:**
- ✅ InviteSection - меняется контент (title, description)
- ✅ AgendaAccordion - меняются темы (items)
- ✅ UniqueSection - меняется текст
- ✅ Gallery - меняются изображения
- ✅ ExosomesIntro - меняется описание
- ✅ ContactUs - остается тот же (общий для всех)

---

## 📊 Маппинг вариантов:

| Variant | Карточка | Описание | Pill |
|---------|----------|----------|------|
| "990" | 0 (левая) | Косметологи - краткий курс | סדנה |
| "180" | 1 (центральная) ⭐ | Парикмахеры - средний курс | 180 שעות |
| "480" | 2 (правая) | Эстетика - полный курс | 480 שעות |

**По умолчанию:** Вариант "180" (центральная карточка, парикмахеры)

---

## 🎨 Визуальные индикаторы:

### **CourseSelection:**
```
┌──────────┐  ┌──────────┐  ┌──────────┐
│ Card 0   │  │ Card 1 ⭐ │  │ Card 2   │
│ Normal   │  │ SELECTED │  │ Normal   │
│ scale:1.0│  │ scale:1.08│  │ scale:1.0│
│ border:  │  │ border:   │  │ border:  │
│ white/10 │  │ gold      │  │ white/10 │
└──────────┘  └──────────┘  └──────────┘
              ↑ Увеличена
```

### **Sticky Bar:**
```
┌─────────────────────────────────────┐
│ [ סדנה ]  [180 שעות]  [480 שעות]    │
│             ↑ Active                │
│             bg-gradient gold        │
└─────────────────────────────────────┘
```

---

## 🔄 Синхронизация:

**CourseSelection ↔ Sticky Bar:**
```
Клик на карточку → setVariant → Sticky bar обновляется
Клик на pill → setVariant → Карточка обновляется
```

**Variant ↔ Content:**
```
setVariant(v) → c = contentByVariant[v] → Все секции обновляются
```

---

## 💡 Преимущества:

1. ✅ **Single Source of Truth:** Один `variant` state для всей страницы
2. ✅ **Двусторонняя синхронизация:** Карточки ↔ Pills
3. ✅ **Динамический контент:** Все секции обновляются автоматически
4. ✅ **Toast уведомления:** Пользователь видит, что произошло переключение
5. ✅ **Плавные анимации:** Motion transitions
6. ✅ **Центральная карточка по умолчанию:** Рекомендованный вариант

---

## 🚀 Готово!

**Проверьте:**
1. ✅ Загрузите страницу → центральная карточка увеличена
2. ✅ Кликните на левую карточку → контент меняется
3. ✅ Кликните на правую карточку → контент меняется
4. ✅ Скролльте вниз → sticky bar появляется
5. ✅ Кликните на pill → карточка и контент обновляются
6. ✅ Скролльте вверх → sticky bar исчезает

**Все работает! 🎉**
