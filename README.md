# Productivity Tracker

A clean, card-based productivity dashboard built with vanilla HTML, CSS, and JavaScript. Click a card to open its full-page feature, manage your tasks and plans, and everything is saved locally in your browser.

## Demo

> [Demo](https://productivity-tracker-roan.vercel.app/)

## Features

### 📝 To-Do List
- Add tasks with an optional details field
- Mark tasks as important (highlighted badge)
- Mark tasks as completed to remove them from the list
- Tasks persist across sessions via `localStorage`
- Friendly empty-state message when no tasks exist

### 📅 Daily Planner
- Hour-by-hour planner from 6:00 to 23:00 (18 time slots)
- Type notes/plans directly into each time slot
- Auto-saves as you type
- Plans automatically clear after 24 hours, so you always start fresh each day

### 💬 Motivation
- Fetches a random motivational quote from a public API on load
- Clean, glowing card-style display with quote and author

## Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties (CSS variables), Flexbox layout, custom fonts (`aeonik`)
- **Vanilla JavaScript (ES6+)** — no frameworks or build tools required
- **Remix Icon** — icon font (via CDN)
- **DummyJSON Quotes API** — random quote data

## Project Structure

```
productivity-tracker/
├── index.html              # Main HTML structure
├── style.css                # All styling
├── script.js                 # App logic (todo, planner, quotes, card navigation)
├── icons8-quote-100.png     # Quote icon used in the Motivation card
└── AeonikTRIAL-*.otf         # Custom font files (Light, Regular, Bold)
```

## How It Works

- Each feature is represented by a clickable **card** (`.elem`) on the home screen.
- Clicking a card opens its matching **full-page section** (`.fullElem`), linked via a shared `data-card` attribute (e.g. `data-card="todo"`).
- Each full-page section has a **Close** button that returns you to the card view.
- To-Do and Daily Planner data are stored in the browser's `localStorage`, so your data is retained even after closing the tab. Daily Planner entries auto-expire after 24 hours.

## Getting Started

No build step or dependencies required.

1. Clone or download this repository.
2. Make sure all files (`index.html`, `style.css`, `script.js`, font files, and the quote icon) are in the same folder.
3. Open `index.html` directly in your browser, or serve it locally:

```bash
# Using VS Code Live Server, or any static server, e.g.:
npx serve .
```

## Browser Support

Works in all modern browsers (Chrome, Firefox, Edge, Safari). Requires JavaScript enabled and `fetch` support (for the Motivation quote feature).

## Possible Future Improvements

- Add a Pomodoro Timer and Daily Goals tracker (planned features, not yet implemented)
- Add task editing (not just delete)
- Add due dates/reminders to the To-Do list
- Dark/light theme toggle
- Export tasks/plans as a downloadable file

## License

This project is open source and available for personal or educational use.
