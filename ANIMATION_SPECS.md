# 🎬 MITODERM LANDING - ANIMATION SPECIFICATIONS

## Библиотека анимаций
**Motion (Framer Motion)** - `import { motion } from 'motion/react'`

---

## 📋 TABLE OF CONTENTS
1. [Navbar](#1-navbar)
2. [Hero Section](#2-hero-section)
3. [Benefit Grid](#3-benefit-grid)
4. [Variant Selector](#4-variant-selector)
5. [Invite Section](#5-invite-section)
6. [Agenda Accordion](#6-agenda-accordion)
7. [Event Details](#7-event-details)
8. [Unique Section](#8-unique-section)
9. [Gallery](#9-gallery)
10. [Exosomes Intro](#10-exosomes-intro)
11. [Stats Section](#11-stats-section)
12. [Testimonials Section](#12-testimonials-section)
13. [About Us](#13-about-us)
14. [Speakers](#14-speakers)
15. [VTech Teaser](#15-vtech-teaser)
16. [Process Timeline](#16-process-timeline)
17. [FAQ Section](#17-faq-section)
18. [Contact Us](#18-contact-us)
19. [Final CTA Banner](#19-final-cta-banner)
20. [Footer](#20-footer)
21. [Scroll To Top](#21-scroll-to-top)
22. [Registration Modal](#22-registration-modal)

---

## 1. NAVBAR

### 1.1 Container Animation
```javascript
initial: { y: -100, opacity: 0 }
animate: { y: 0, opacity: 1 }
transition: { duration: 0.6, ease: "easeOut" }
```

### 1.2 Nav Items Hover
```javascript
whileHover: { scale: 1.1, color: '#ffffff' }
whileTap: { scale: 0.95 }
```

**Static Classes**: 
- `text-sm transition hover:text-white`
- `color: rgba(255, 255, 255, 0.8)`

---

## 2. HERO SECTION

### 2.1 Background Animated Circles

**Circle 1 (Right Top):**
```javascript
animate: {
  scale: [1, 1.2, 1],
  rotate: [0, 90, 0]
}
transition: { duration: 20, repeat: Infinity }
```
- Position: `-right-40 -top-40`
- Size: `h-80 w-80`
- Color: `bg-[#dfba74]/5`
- Blur: `blur-3xl`

**Circle 2 (Left Bottom):**
```javascript
animate: {
  scale: [1.2, 1, 1.2],
  rotate: [0, -90, 0]
}
transition: { duration: 25, repeat: Infinity }
```
- Position: `-bottom-40 -left-40`
- Size: `h-96 w-96`
- Color: `bg-[#be800c]/5`
- Blur: `blur-3xl`

### 2.2 Text Content Container
```javascript
initial: { opacity: 0, x: 50 }
animate: { opacity: 1, x: 0 }
transition: { duration: 0.8 }
```

### 2.3 Side Note Badge
```javascript
initial: { opacity: 0, y: -10 }
animate: { opacity: 1, y: 0 }
transition: { delay: 0.2, duration: 0.5 }
```
- Pulse dot: `animate-pulse`

### 2.4 Title (H1)
```javascript
initial: { opacity: 0, y: 20 }
animate: { opacity: 1, y: 0 }
transition: { delay: 0.3, duration: 0.8 }
```

### 2.5 Subtitle Lines
```javascript
initial: { opacity: 0, y: 20 }
animate: { opacity: 1, y: 0 }
transition: { delay: 0.5, duration: 0.8 }
```

### 2.6 CTA Button
```javascript
initial: { opacity: 0, y: 20 }
animate: { opacity: 1, y: 0 }
transition: { delay: 0.9, duration: 0.6 }

whileHover: { 
  scale: 1.05, 
  boxShadow: '0 20px 40px rgba(37, 211, 102, 0.3)' 
}
whileTap: { scale: 0.95 }
```

### 2.7 Hero Image
```javascript
initial: { opacity: 0, x: -50 }
animate: { opacity: 1, x: 0 }
transition: { duration: 0.8, delay: 0.2 }

whileHover: { scale: 1.05 }
transition: { duration: 0.3 }
```

---

## 3. BENEFIT GRID

### 3.1 Section Container
```javascript
initial: { opacity: 0, y: 30 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { duration: 0.6 }
```

### 3.2 Each Benefit Card
```javascript
initial: { opacity: 0, y: 30 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { duration: 0.5, delay: index * 0.1 }

whileHover: { 
  y: -8, 
  boxShadow: '0 20px 40px rgba(223, 186, 116, 0.3)' 
}
```

---

## 4. VARIANT SELECTOR (Sticky Pills)

### 4.1 Container
```javascript
initial: { opacity: 0, y: -20 }
animate: { opacity: 1, y: 0 }
transition: { delay: 1, duration: 0.6 }
```
- Position: `sticky top-20 z-40`
- Background: `bg-white/10 backdrop-blur-md`

### 4.2 Each Pill Button
```javascript
whileHover: { scale: 1.05 }
whileTap: { scale: 0.95 }
```

**Active State:**
- `bg-gradient-to-r from-[#dfba74] to-[#be800c]`
- `shadow-lg`

---

## 5. INVITE SECTION

### 5.1 Background Circles
**Left Circle:**
```javascript
animate: { rotate: 360 }
transition: { duration: 50, repeat: Infinity, ease: "linear" }
```

**Right Circle:**
```javascript
animate: { rotate: -360 }
transition: { duration: 40, repeat: Infinity, ease: "linear" }
```

### 5.2 Heading
```javascript
initial: { opacity: 0, y: 30 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { duration: 0.8 }
```

### 5.3 Body Text
```javascript
initial: { opacity: 0, y: 30 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { duration: 0.8, delay: 0.2 }
```

### 5.4 CTA Button
```javascript
initial: { opacity: 0, scale: 0.9 }
whileInView: { opacity: 1, scale: 1 }
viewport: { once: true }
transition: { duration: 0.6, delay: 0.4 }

whileHover: { 
  scale: 1.05, 
  boxShadow: '0 20px 40px rgba(223, 186, 116, 0.4)' 
}
whileTap: { scale: 0.95 }
```

---

## 6. AGENDA ACCORDION

### 6.1 Section Animation
```javascript
initial: { opacity: 0, y: 30 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { duration: 0.6 }
```

### 6.2 Each Accordion Item
```javascript
initial: { opacity: 0, x: -30 }
whileInView: { opacity: 1, x: 0 }
viewport: { once: true }
transition: { duration: 0.5, delay: index * 0.1 }

whileHover: { x: 5 }
```

### 6.3 Accordion Content (Collapse)
**AnimatePresence для монтирования/размонтирования:**
```javascript
initial: { height: 0, opacity: 0 }
animate: { height: 'auto', opacity: 1 }
exit: { height: 0, opacity: 0 }
transition: { duration: 0.3 }
```

### 6.4 Chevron Icon Rotation
```javascript
animate: { 
  rotate: isOpen ? 180 : 0 
}
transition: { duration: 0.3 }
```

---

## 7. EVENT DETAILS

### 7.1 Background Decorations
**Right Decoration:**
```javascript
animate: { rotate: 360 }
transition: { duration: 50, repeat: Infinity, ease: "linear" }
```

**Left Decoration:**
```javascript
animate: { rotate: -360 }
transition: { duration: 40, repeat: Infinity, ease: "linear" }
```

### 7.2 Heading + Icon
```javascript
initial: { opacity: 0, y: 20 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { duration: 0.6 }
```

**Sparkles Icon Animation:**
```javascript
animate: { rotate: [0, 10, -10, 0] }
transition: { duration: 3, repeat: Infinity }
```

### 7.3 Horizontal Scroll Container (SNAP SCROLLING)
**CSS Snap Properties:**
```css
scroll-snap-type: x mandatory;
scroll-behavior: smooth;
```

**Каждая карточка:**
```css
scroll-snap-align: center;
scroll-snap-stop: always;
```

**Поведение:**
- Карточки фиксируются по центру
- Smooth scrolling между карточками
- Работает как слайдер (аналогично Testimonials)
- Touch swipe на мобильных
- Стрелки навигации на desktop

**JavaScript Scroll Logic (RTL):**
```javascript
const scroll = (direction: 'left' | 'right') => {
  const currentScroll = scrollContainerRef.current.scrollLeft;
  const scrollAmount = 380;
  
  if (direction === 'right') {
    // В RTL: negative = scroll right
    scrollTo({ left: currentScroll - scrollAmount });
  } else {
    // В RTL: positive = scroll left
    scrollTo({ left: currentScroll + scrollAmount });
  }
};
```

### 7.4 Each Event Card
```javascript
initial: { opacity: 0, scale: 0.95 }
whileInView: { opacity: 1, scale: 1 }
viewport: { once: true }
transition: { duration: 0.5, delay: index * 0.1 }

whileHover: { y: -8 }
```

**Card Dimensions:**
- Width: `360px` (fixed)
- Gap: `24px` (gap-6)

### 7.5 Featured Badge
```javascript
initial: { scale: 0 }
animate: { scale: 1 }
transition: { delay: 0.3, type: 'spring' }
```

### 7.6 Selected Indicator (Check)
```javascript
layoutId: "selected-indicator"
```
**Layout Animation** - плавно перемещается между карточками при выборе

**Transition:**
- Автоматическая анимация Motion
- Shared layout между карточками
- Smooth morph эффект

### 7.7 Navigation Arrows
```javascript
whileHover: { scale: 1.1 }
whileTap: { scale: 0.9 }
```

**Static Styling:**
- `rounded-full bg-white/90`
- `shadow-xl backdrop-blur-sm`
- `hover:bg-white`

### 7.8 Countdown Section
```javascript
key: selectedEvent
initial: { opacity: 0, scale: 0.95 }
animate: { opacity: 1, scale: 1 }
transition: { duration: 0.5 }
```

**Key Animation:** При переключении `selectedEvent` вся секция re-animates

### 7.9 Each Countdown Timer Block
```javascript
initial: { opacity: 0, y: 30 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.5, delay: index * 0.1 }

whileHover: { y: -8, scale: 1.02 }
```

**Number Change Animation:**
```javascript
key: unit.value
initial: { scale: 1.2, opacity: 0 }
animate: { scale: 1, opacity: 1 }
transition: { duration: 0.3 }
```

**Timer Updates:**
- Every 1000ms (1 second)
- Smooth fade + scale animation на каждое изменение числа
- Grid layout: `grid-cols-4 gap-4`

---

## 8. UNIQUE SECTION

### 8.1 Background Circles
```javascript
// Аналогично Hero/Invite - rotating circles
animate: { rotate: 360/-360 }
transition: { duration: 50/40, repeat: Infinity }
```

### 8.2 Icon Container
```javascript
initial: { opacity: 0, scale: 0 }
whileInView: { opacity: 1, scale: 1 }
viewport: { once: true }
transition: { delay: 0.2, type: 'spring', stiffness: 200 }
```

### 8.3 Title
```javascript
initial: { opacity: 0, y: 30 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { duration: 0.8 }
```

### 8.4 Body Text
```javascript
initial: { opacity: 0, y: 30 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { duration: 0.8, delay: 0.2 }
```

---

## 9. GALLERY (Before/After Slider)

### 9.1 Heading
```javascript
initial: { opacity: 0, y: 30 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { duration: 0.6 }
```

### 9.2 Gallery Container (Horizontal Scroll)
```javascript
initial: { opacity: 0, y: 40 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { duration: 0.6, delay: 0.2 }
```

### 9.3 Each Gallery Item
```javascript
initial: { opacity: 0, scale: 0.9 }
whileInView: { opacity: 1, scale: 1 }
viewport: { once: true }
transition: { duration: 0.5, delay: index * 0.1 }

whileHover: { scale: 1.05 }
```

### 9.4 Navigation Arrows
```javascript
whileHover: { scale: 1.1 }
whileTap: { scale: 0.9 }
```

### 9.5 Slider Handle (Range Input)
```javascript
whileHover: { scale: 1.1 }
whileTap: { scale: 0.95 }
```

---

## 10. EXOSOMES INTRO

### 10.1 Heading + Subheading
```javascript
initial: { opacity: 0, y: 30 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { duration: 0.8 }
```

### 10.2 Each Info Card
```javascript
initial: { opacity: 0, y: 40 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { duration: 0.6, delay: 0.2 + index * 0.15 }

whileHover: { 
  y: -10, 
  boxShadow: '0 20px 50px rgba(223, 186, 116, 0.3)' 
}
```

### 10.3 Footer Line
```javascript
initial: { opacity: 0, y: 20 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { delay: 0.8, duration: 0.6 }
```

---

## 11. STATS SECTION

### 11.1 Heading
```javascript
initial: { opacity: 0, y: 30 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { duration: 0.6 }
```

### 11.2 Each Stat Card
```javascript
initial: { opacity: 0, scale: 0.8 }
whileInView: { opacity: 1, scale: 1 }
viewport: { once: true, margin: "-100px" }
transition: { duration: 0.6, delay: index * 0.1 }

whileHover: { 
  y: -10, 
  scale: 1.05 
}
```

### 11.3 Number Counter Animation
**Custom Hook - CountUp Effect:**
```javascript
// Анимация счетчика от 0 до targetValue
// Duration: 2 seconds
// Easing: ease-out
```

### 11.4 Decorative Plus Sign
```javascript
animate: { 
  rotate: [0, 5, -5, 0],
  scale: [1, 1.1, 1]
}
transition: { 
  duration: 2, 
  repeat: Infinity, 
  repeatDelay: 1 
}
```

---

## 12. TESTIMONIALS SECTION

### 12.1 Heading
```javascript
initial: { opacity: 0, y: 30 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { duration: 0.6 }
```

### 12.2 Testimonials Container (Horizontal Scroll)
```javascript
initial: { opacity: 0, y: 40 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { duration: 0.6, delay: 0.2 }
```

### 12.3 Each Testimonial Card
```javascript
initial: { opacity: 0, scale: 0.9 }
whileInView: { opacity: 1, scale: 1 }
viewport: { once: true }
transition: { duration: 0.5, delay: index * 0.1 }

whileHover: { 
  y: -10, 
  boxShadow: '0 20px 40px rgba(223, 186, 116, 0.3)' 
}
```

### 12.4 Navigation Arrows
```javascript
whileHover: { scale: 1.1 }
whileTap: { scale: 0.9 }
```

### 12.5 Star Icons
```javascript
whileHover: { 
  scale: 1.2, 
  rotate: 15 
}
```

---

## 13. ABOUT US

### 13.1 Icon Container
```javascript
initial: { opacity: 0, scale: 0 }
whileInView: { opacity: 1, scale: 1 }
viewport: { once: true }
transition: { type: 'spring', stiffness: 200, delay: 0.2 }
```

**Icon Rotation:**
```javascript
animate: { rotate: [0, -10, 10, 0] }
transition: { duration: 4, repeat: Infinity }
```

### 13.2 Heading
```javascript
initial: { opacity: 0, y: 30 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { duration: 0.6 }
```

### 13.3 Body Text
```javascript
initial: { opacity: 0, y: 30 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { delay: 0.4, duration: 0.8 }
```

### 13.4 CTA Button
```javascript
initial: { opacity: 0, y: 20 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { delay: 0.6, duration: 0.6 }

whileHover: { 
  scale: 1.05, 
  boxShadow: '0 20px 40px rgba(223, 186, 116, 0.4)' 
}
whileTap: { scale: 0.95 }
```

---

## 14. SPEAKERS

### 14.1 Heading
```javascript
initial: { opacity: 0, y: 30 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { duration: 0.6 }
```

### 14.2 Each Speaker Card
```javascript
initial: { opacity: 0, y: 40 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { duration: 0.6, delay: index * 0.15 }

whileHover: { 
  y: -10, 
  boxShadow: '0 20px 40px rgba(223, 186, 116, 0.3)' 
}
```

### 14.3 Speaker Avatar
```javascript
whileHover: { scale: 1.1 }
transition: { duration: 0.3 }
```

---

## 15. VTECH TEASER

### 15.1 Badge
```javascript
initial: { opacity: 0, scale: 0.8 }
whileInView: { opacity: 1, scale: 1 }
viewport: { once: true }
transition: { type: 'spring', stiffness: 200 }
```

### 15.2 Title
```javascript
initial: { opacity: 0, y: 30 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { delay: 0.2, duration: 0.6 }
```

### 15.3 Body
```javascript
initial: { opacity: 0, y: 30 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { delay: 0.4, duration: 0.6 }
```

### 15.4 Each Bullet Point
```javascript
initial: { opacity: 0, x: -30 }
whileInView: { opacity: 1, x: 0 }
viewport: { once: true }
transition: { delay: 0.5 + index * 0.1, duration: 0.5 }

whileHover: { x: -5 }
```

### 15.5 Footnote
```javascript
initial: { opacity: 0, y: 20 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { delay: 0.9, duration: 0.6 }
```

---

## 16. PROCESS TIMELINE

### 16.1 Heading
```javascript
initial: { opacity: 0, y: 30 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { duration: 0.6 }
```

### 16.2 Each Timeline Step
```javascript
initial: { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
whileInView: { opacity: 1, x: 0 }
viewport: { once: true, margin: "-50px" }
transition: { duration: 0.6, delay: index * 0.15 }

whileHover: { scale: 1.02 }
```

### 16.3 Step Number Circle
```javascript
whileHover: { 
  scale: 1.2, 
  rotate: 10 
}
```

### 16.4 Connecting Line
**Animated Draw Effect:**
```javascript
initial: { scaleY: 0 }
whileInView: { scaleY: 1 }
viewport: { once: true }
transition: { duration: 0.8, delay: 0.3 }
```

---

## 17. FAQ SECTION

### 17.1 Heading + Icon
```javascript
initial: { opacity: 0, y: 30 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { duration: 0.6 }
```

**Icon Animation:**
```javascript
animate: { rotate: [0, -10, 10, 0] }
transition: { duration: 4, repeat: Infinity }
```

### 17.2 Each FAQ Item
```javascript
initial: { opacity: 0, y: 30 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { duration: 0.5, delay: index * 0.1 }

whileHover: { x: 5 }
```

### 17.3 FAQ Content (Collapse)
```javascript
initial: { height: 0, opacity: 0 }
animate: { height: 'auto', opacity: 1 }
exit: { height: 0, opacity: 0 }
transition: { duration: 0.3 }
```

### 17.4 Chevron Rotation
```javascript
animate: { rotate: isOpen ? 180 : 0 }
transition: { duration: 0.3 }
```

### 17.5 CTA Button
```javascript
whileHover: { scale: 1.05 }
whileTap: { scale: 0.95 }
```

---

## 18. CONTACT US

### 18.1 Heading + Icon
```javascript
initial: { opacity: 0, y: 30 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { duration: 0.6 }
```

**Icon Bounce:**
```javascript
animate: { y: [0, -10, 0] }
transition: { duration: 2, repeat: Infinity }
```

### 18.2 Each Contact Card
```javascript
initial: { opacity: 0, y: 30 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { duration: 0.5, delay: index * 0.15 }

whileHover: { 
  y: -5, 
  boxShadow: '0 10px 30px rgba(223, 186, 116, 0.2)' 
}
```

### 18.3 Social Icons
```javascript
whileHover: { 
  scale: 1.2, 
  rotate: 10 
}
whileTap: { scale: 0.9 }
```

---

## 19. FINAL CTA BANNER

### 19.1 Section
```javascript
initial: { opacity: 0, y: 50 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { duration: 0.8 }
```

### 19.2 CTA Button
```javascript
whileHover: { 
  scale: 1.05, 
  boxShadow: '0 20px 40px rgba(0,0,0,0.3)' 
}
whileTap: { scale: 0.95 }
```

---

## 20. FOOTER

### 20.1 Content
```javascript
initial: { opacity: 0, y: 20 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { duration: 0.6 }
```

### 20.2 "Made with" Line
```javascript
initial: { opacity: 0 }
whileInView: { opacity: 1 }
viewport: { once: true }
transition: { delay: 0.3, duration: 0.6 }
```

### 20.3 Heart Icon
```javascript
animate: { 
  scale: [1, 1.2, 1] 
}
transition: { 
  duration: 1, 
  repeat: Infinity, 
  repeatDelay: 0.5 
}
```

---

## 21. SCROLL TO TOP BUTTON

### 21.1 Show/Hide Animation
```javascript
initial: { opacity: 0, scale: 0.8 }
animate: { opacity: 1, scale: 1 }
exit: { opacity: 0, scale: 0.8 }
transition: { duration: 0.3 }
```

### 21.2 Button Hover
```javascript
whileHover: { 
  scale: 1.1, 
  boxShadow: '0 10px 30px rgba(223, 186, 116, 0.4)' 
}
whileTap: { scale: 0.9 }
```

### 21.3 Icon Bounce
```javascript
animate: { y: [0, -5, 0] }
transition: { duration: 1.5, repeat: Infinity }
```

---

## 22. REGISTRATION MODAL

### 22.1 Overlay (Backdrop)
```javascript
initial: { opacity: 0 }
animate: { opacity: 1 }
exit: { opacity: 0 }
transition: { duration: 0.3 }
```

### 22.2 Modal Content
```javascript
initial: { opacity: 0, scale: 0.9, y: 20 }
animate: { opacity: 1, scale: 1, y: 0 }
exit: { opacity: 0, scale: 0.9, y: 20 }
transition: { type: 'spring', stiffness: 300, damping: 30 }
```

### 22.3 Close Button
```javascript
whileHover: { 
  scale: 1.1, 
  rotate: 90 
}
whileTap: { scale: 0.9 }
```

### 22.4 Submit Button
```javascript
whileHover: { scale: 1.02 }
whileTap: { scale: 0.98 }
```

**Loading State:**
```javascript
// Spinner rotation
animate: { rotate: 360 }
transition: { duration: 1, repeat: Infinity, ease: "linear" }
```

---

## 🎨 GLOBAL ANIMATION PATTERNS

### Scroll Reveal Pattern
**Используется в большинстве секций:**
```javascript
initial: { opacity: 0, y: 30 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { duration: 0.6 }
```

### Hover Lift Pattern
**Карточки, кнопки:**
```javascript
whileHover: { y: -8 }
```

### Scale Button Pattern
```javascript
whileHover: { scale: 1.05 }
whileTap: { scale: 0.95 }
```

### Rotating Background
**Декоративные круги:**
```javascript
animate: { rotate: 360 }
transition: { duration: 50, repeat: Infinity, ease: "linear" }
```

### Stagger Children
**Списки, грид элементы:**
```javascript
delay: index * 0.1
```

---

## ⚙️ ANIMATION TIMING REFERENCE

| Element Type | Duration | Delay | Easing |
|-------------|----------|-------|--------|
| Fade In | 0.6s | 0s | ease-out |
| Slide In | 0.8s | 0-0.5s | ease-out |
| Scale | 0.3s | 0s | spring |
| Rotate | 0.3s | 0s | ease-out |
| Hover | 0.3s | 0s | ease-out |
| Collapse | 0.3s | 0s | ease-in-out |
| Background Loop | 20-50s | 0s | linear |

---

## 🎯 VIEWPORT SETTINGS

```javascript
viewport: { 
  once: true,        // Анимация только один раз
  margin: "-100px"   // Триггер за 100px до видимости
}
```

---

## 📦 DEPENDENCIES

```json
{
  "motion": "^11.x.x"
}
```

**Import:**
```javascript
import { motion, AnimatePresence } from 'motion/react';
```

---

## 🚀 IMPLEMENTATION NOTES

1. **AnimatePresence** используется для:
   - Modal открытие/закрытие
   - Accordion expand/collapse
   - Conditional rendering элементов

2. **layoutId** используется для:
   - Selected indicator в Event Cards (плавное перемещение между карточками)

3. **whileInView** с `viewport: { once: true }`:
   - Анимация срабатывает при скролле до элемента
   - Только один раз за сессию

4. **Key prop** для повторных анимаций:
   - Countdown numbers
   - Dynamic content changes

5. **Stagger delays** для списков:
   - `delay: index * 0.1`
   - Создает волновой эффект

---

## 💡 PERFORMANCE TIPS

1. Используйте `transform` и `opacity` - GPU accelerated
2. Избегайте анимаций `width`, `height`, `top`, `left` - вызывают reflow
3. `will-change` автоматически применяется Motion
4. `viewport: { once: true }` - экономит ресурсы
5. Отключите анимации на слабых устройствах через `prefers-reduced-motion`

---

**Документация создана для MitoDerm Landing**  
**Дата:** 2026  
**Версия Motion:** 11.x  
**Компонентов:** 26  
**Анимаций:** 100+