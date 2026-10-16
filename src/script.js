// Swap the build-time dates on repositories for relative times, so they stay
// true however long it has been since the last daily build
const units = [
  ['year', 365 * 86400],
  ['month', 30 * 86400],
  ['week', 7 * 86400],
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
];

const relative = new Intl.RelativeTimeFormat('en-GB', { numeric: 'auto' });

function relativeTime(iso) {
  const seconds = (new Date(iso) - Date.now()) / 1000;
  const [unit, size] = units.find(([, size]) => Math.abs(seconds) >= size) ?? ['minute', 60];
  return relative.format(Math.round(seconds / size), unit);
}

document.querySelectorAll('.repo-time').forEach(el => {
  el.title = el.textContent;
  el.textContent = relativeTime(el.getAttribute('datetime'));
});

// Offline support and installability; browsers without service workers just
// load the page as before
if ('serviceWorker' in navigator)
  navigator.serviceWorker.register('/sw.js');
