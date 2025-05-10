---
# KotoKatsuyou

A Japanese verb conjugation learning tool built with **React**.

This project allows users to input Japanese verbs (in either **hiragana** or **kanji**) and view their conjugated forms across a variety of grammatical patterns — complete with English meanings and example sentences.

The frontend is modular, educational, and built for clarity. It communicates with a custom API to retrieve verb data and uses reusable configs to render clean, consistent outputs.

---

## Features

- Input Japanese verbs and auto-detect their type (Ichidan, Godan, Irregular)
- View multiple conjugation forms, each with:
  - A dynamic dropdown explanation
  - An English translation adjusted to match tense
  - An example sentence built using a template
- Hover-based tooltips that explain grammatical transformations
- Caches previously entered verbs to minimize API requests
- Error handling for invalid input and disconnected API
- Responsive UI designed to work on desktop and mobile
- Clean page navigation between the app and the About page

---

## Technologies Used

- **React** (functional components + hooks)
- **CSS Modules** for scoped styling
- **React Router** for page routing
- **Compromise** (NLP) to generate dynamic English tenses
- **Custom utility/config structure** for modular conjugation logic

---

## Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/yourname/kotokatsuyou.git
cd kotokatsuyou
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the App
Make sure your backend API is running (see katsuyou-api)
Then, in the frontend directory:
```bash
npm run dev
```

App will be available at:
```http
http://localhost:5173/
```

## Folder Structure
```graphql
src/
├── About/           # About page content
├── Error/           # Reusable error display
├── Forms/           # Conjugation logic, form configs, and render logic
├── Header/          # App title and navigation
├── Input/           # User input field and submission logic
├── Output/          # Conjugated output rendering
├── Pages/           # Route-level page components
```

---
## To-Do / Future Features
- Add additional conjugation forms
- Add a dark/light mode toggle
- Improve mobile styling for very small screens
- Further DRY shared config logic

---
## Related Project
[Backend Repo (katsuyou-api)](https://github.com/KobenjiSan/katsuyou-api) — Node + Express + MongoDB API for verb data

---
## License
License: [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)

This project is for **personal, non-commercial use only**.  
You may **not redistribute, modify, or republish** this code without explicit permission from the author.

---