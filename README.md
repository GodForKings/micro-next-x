# next-x-forum 🚀

**Тестовый проект по Next.js**. Построен на **Next.js 15 с Turbopack**, Tailwind CSS v4 и FSD-архитектуре.

[![Vercel](https://img.shields.io/badge/Next.js-15.5.6-stone.svg)](https://next-x-forum-itdextra.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15.5.6-black.svg)](https://nextjs.org)
[![Turbopack](https://img.shields.io/badge/Turbopack-Beta-orange.svg)](https://turbo.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-blue.svg)](https://tailwindcss.com)

## ✨ Особенности

| Фича                | Описание               | Преимущество            |
| ------------------- | ---------------------- | ----------------------- |
| **SSR + Turbopack** | Next.js 15 с Turbopack | Сборка в 10x быстрее 🚀 |
| **FSD Архитектура** | Feature-Sliced Design  | Масштабируемость        |
| **Tailwind CSS v4** | Премиум                | Вовлечённость +50%      |
| **TypeScript**      | Строгая типизация      | 0 багов на проде        |

## 🛠 Быстрый старт

### 1. Клонируй и установи

```bash
git clone <repo-url>
cd next-x-forum
npm install
```

### 2. Запуск

```bash
# Development (SSR + Turbopack)
npm run dev

# Production build
npm run build

# Production serve
npm run start
```

## 🏗 FSD Архитектура

```
next-x-forum/
├── src/
│   ├── entities/        # Домены (Tweet)
│   ├── features/        # Фичи
│   ├── shared/          # Общее (UI, API, lib)
│   ├── app/             # Страницы
│   ├── widgets/         # Комплексные блоки
|
├── proxy.ts             # Защита роутов
├── public/              # Статические файлы
├── tailwind.config.js   # Tailwind конфиг
├── tsconfig.json        # TypeScript конфиг
├── package.json
└── README.md
```

## 🚀 Deployment

### Vercel (Рекомендуется)

```bash
npm i -g vercel
vercel --prod
```

### Самостоятельный сервер

```bash
npm run build
npm run start
```

## 🤝 Contributing

[![Conventionalcommits](https://img.shields.io/badge/conventional_commits-v1.0.0-blue.svg)](https://www.conventionalcommits.org/ru/v1.0.0/)

1. Форкни репозиторий
2. Создай фичу: `git checkout -b feat/amazing-feature`
3. Закоммить: `git commit -m "feat(page): #number - desc feature"`
4. Пуш: `git push origin feature/amazing-feature`
5. Создай Pull Request

## 📄 Лицензия

[MIT](https://itdextra.ru) © ITDextra

## 🚀 Быстрые ссылки

- [Документация Next.js 15](https://nextjs.org)
- [Turbopack](https://turbo.build)
- [FSD Архитектура](https://feature-sliced.design)
- [Tailwind CSS Docs](https://tailwindcss.com)
