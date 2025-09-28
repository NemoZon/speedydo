# 🚀 SpeedyDo Monorepo

Мультимодульный проект на [Turborepo](https://turbo.build/) и TypeScript. В репозитории собраны:

- **API** — Express + Mongoose + Swagger
- **Web** — Next.js (app router)
- **Docs** — отдельное Next.js приложение для документации/превью UI
- **Expo** — мобильный клиент на React Native + Expo Router
- **UI** — общая библиотека компонентов

## 📦 Требования

- Node.js `>=20.19.0` (соответствует требованию React Native 0.81)
- npm `>=10`
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/) (опционально):
  ```bash
  npm install -g expo
  ```
- (Опционально) [Husky](https://typicode.github.io/husky) активируется автоматически через `npm install`

## 🛠️ Начало работы

```bash
# 1. клонировать репозиторий
git clone https://github.com/NemoZon/speedydo.git
cd speedydo

# 2. установить зависимости монорепозитория
npm install

# 3. настроить git hooks (если не подтянулись автоматически)
npm run prepare
```

> Husky запускает eslint/тесты перед коммитом. При необходимости можно временно отключить его командой `HUSKY=0 git commit ...`.

## 📁 Структура

```text
apps/
  api/    – REST API, Express + Mongoose
  web/    – клиентское Next.js приложение
  docs/   – документация/превью компонентов на Next.js
  expo/   – мобильный клиент на Expo Router
packages/
  ui/              – общая библиотека UI
  eslint-config/   – базовые правила ESLint
  typescript-config/ – общие tsconfig пресеты
```

## ⚙️ Переменные окружения

API использует следующие переменные (см. `apps/api/src/consts/settings.ts`):

```env
HOST=localhost
API_PORT=3000
MODE=dev
MONGO_URI=mongodb://localhost:27017/speedydo
API_KEY=dev-key
```

Создайте `.env` в корне или в `apps/api/.env`, либо передавайте значения через CLI/CI. Turborepo прокидывает глобальные переменные из `turbo.json` (`API_KEY`, `API_PORT`, `HOST`, `MODE`, `MONGO_URI`).

## 🚴 Ежедневные задачи

### Запуск разработки

```bash
# Next.js (web)
npm run dev -- --filter=web

# Документация (docs)
npm run dev -- --filter=docs

# Мобильное приложение Expo
turbo run dev --filter=apps/expo
# либо внутри пакета
cd apps/expo && npm run dev
# а если bare workflow
cd apps/expo && npx expo install && npx expo start

# API (Express)
npm run dev -- --filter=api
# либо внутри пакета
cd apps/api && npm run dev
```

> `turbo run dev` без фильтра запустит все dev-серверы сразу.

### Проверки качества

```bash
# линтеры во всех пакетах
npm run lint

# типизация без генерации кода
npm run check-types

# юнит-тесты (Jest, где настроено)
npm run test

# автоформатирование
npm run format
```

### Сборка

```bash
# общий прогон
npm run build

# целенаправленно
npm run build -- --filter=api
npm run build -- --filter=web
npm run build -- --filter=docs
# Expo: рекомендуется использовать EAS или npx expo run:ios|android из каталога apps/expo
```

## 🤝 Соглашения

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) (`feat:`, `fix:`, `docs:` …).
- Ветки: `feature/*`, `bugfix/*`, `chore/*`, `docs/*`, `release/*`.
- Перед созданием PR прогоняйте `npm run lint && npm run test`.

## 🔗 Полезные ссылки

- [Turborepo Docs](https://turbo.build/repo/docs)
- [Expo Router](https://expo.dev/router)
- [Next.js](https://nextjs.org/docs)
- [Express](https://expressjs.com/)

Остались вопросы или нужна доработка — создавайте issue или напишите в [командный чат](https://t.me/+AlbLwZAy2I4wNzAy) 🚀
