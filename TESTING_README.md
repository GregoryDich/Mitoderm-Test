# 🧪 Quick Test Guide - MitoDerm Landing

## 🚀 Быстрый старт

```bash
# Установить зависимости (если еще не установлены)
npm install

# Запустить все тесты
npm test

# Или запустить с UI
npm run test:ui
```

## 📋 Доступные команды

| Команда | Описание |
|---------|----------|
| `npm test` | Запуск в watch mode (рекомендуется для разработки) |
| `npm run test:run` | Однократный запуск всех тестов |
| `npm run test:ui` | Запуск с интерактивным UI в браузере |
| `npm run test:coverage` | Запуск с отчетом покрытия |
| `npm run test:watch` | Watch mode с автоперезапуском |

## ✅ Что покрыто тестами

### 🎨 Компоненты (100+ тестов):
- ✅ Hero - главная секция с CTA
- ✅ Navbar - навигация с smooth scroll
- ✅ EventDetails - карточки событий + countdown timer
- ✅ RegistrationModal - форма регистрации с валидацией
- ✅ BenefitGrid - сетка преимуществ
- ✅ FAQSection - аккордеон FAQ

### 🔗 Интеграция:
- ✅ WorkshopPage - полная страница
- ✅ WorkshopContent - валидация данных 3 variants (990/180/480)
- ✅ Variant switching - переключение между курсами
- ✅ Toast notifications - уведомления

### ♿ Accessibility (a11y):
- ✅ WCAG 2.1 Level AA compliance
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ RTL (Right-to-Left) layout
- ✅ Proper heading hierarchy
- ✅ Accessible forms

### 🎬 Анимации:
- ✅ Motion (Framer Motion) анимации
- ✅ Countdown timer
- ✅ Accordion expand/collapse
- ✅ Hover states
- ✅ Scroll animations
- ✅ Selected indicators

### ⚡ Performance:
- ✅ Render time (< 50ms для Hero)
- ✅ Re-render optimization
- ✅ Memory cleanup
- ✅ Animation performance
- ✅ Event handler efficiency

## 📊 Coverage Report

После запуска `npm run test:coverage`:
```
Statements   : 80%+
Branches     : 75%+
Functions    : 80%+
Lines        : 80%+
```

Откройте `coverage/index.html` для детального отчета.

## 🐛 Debug Tests

### Запустить конкретный файл:
```bash
npm test Hero.test
```

### Запустить конкретный тест:
```bash
npm test -t "renders Hero component"
```

### UI Mode (рекомендуется):
```bash
npm run test:ui
```
Откроет Vitest UI в браузере с возможностью:
- 🔍 Фильтровать тесты
- ▶️ Запускать по отдельности
- 📊 Смотреть coverage
- 🐛 Debug в реальном времени

## 📁 Структура тестов

```
src/tests/
├── components/         # Unit тесты компонентов
├── integration/        # Integration тесты
├── accessibility/      # a11y тесты
├── animations/         # Motion тесты
└── performance/        # Performance тесты
```

## ✨ Примеры

### Unit Test
```typescript
it('renders Hero with Hebrew text', () => {
  render(<Hero {...props} />);
  expect(screen.getByText('תחום הקרקפת')).toBeInTheDocument();
});
```

### User Interaction
```typescript
it('opens WhatsApp on CTA click', async () => {
  const user = userEvent.setup();
  render(<Hero {...props} />);
  
  await user.click(screen.getByRole('button'));
  
  expect(window.open).toHaveBeenCalledWith(
    expect.stringContaining('wa.me'),
    '_blank'
  );
});
```

### Async Test
```typescript
it('submits form with valid data', async () => {
  const user = userEvent.setup();
  render(<RegistrationModal {...props} />);
  
  await user.type(screen.getByLabelText(/שם/i), 'ישראל');
  await user.click(screen.getByRole('button', { name: /שלח/i }));
  
  await waitFor(() => {
    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
```

## 🎯 Test Quality

- ✅ **100+ тестов** покрывают все основные компоненты
- ✅ **80%+ coverage** кодовой базы
- ✅ **< 100ms** средняя длительность теста
- ✅ **RTL support** для Hebrew текста
- ✅ **Motion animations** проверены
- ✅ **Accessibility** соответствует WCAG 2.1 AA

## 📚 Полная документация

Смотрите [TEST_DOCUMENTATION.md](./TEST_DOCUMENTATION.md) для детальной информации о:
- Всех тестовых сценариях
- Best practices
- Debugging strategies
- CI/CD integration
- Test patterns

## 🔧 Конфигурация

Тесты используют:
- **Vitest** 4.x - быстрый test runner
- **React Testing Library** - user-centric тестирование
- **Happy DOM** - быстрый DOM environment
- **@testing-library/user-event** - реалистичные user interactions

## ❓ Troubleshooting

### Тесты не запускаются?
```bash
# Переустановите зависимости
rm -rf node_modules
npm install
```

### Ошибки с Motion?
Уже настроено! IntersectionObserver и matchMedia замоканы в `setup.ts`

### Проблемы с RTL?
Все компоненты протестированы с `dir="rtl"` атрибутом

---

**🎉 Готово! Запустите `npm test` и наслаждайтесь зелеными тестами!**
