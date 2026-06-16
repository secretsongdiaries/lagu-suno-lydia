# Secret Song Diaries

A responsive mini music website for Lydia's Suno song collection. Visitors can browse songs, filter by category, search by title and open each song on Suno.

## Files

- `index.html` — page structure and sections.
- `style.css` — dreamy plum, black, soft gold and dusty pink styling.
- `script.js` — song data, category filters, search and card rendering.

## How to edit songs

1. Open `script.js`.
2. Find the `songs` array at the top of the file.
3. Add or update song objects with a title, category, description and `sunoUrl`.
4. Paste each real Suno song URL in the `sunoUrl` field. Clear comments are included above every sample URL.

Example:

```js
{
  title: "My New Song",
  category: "Personal",
  description: "A short description of the song.",
  // Paste the Suno song URL for "My New Song" below.
  sunoUrl: "https://suno.com/song/your-song-link"
}
```

## How to view locally

Open `index.html` directly in your browser, or run a simple local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Notes

- No copyrighted images are used. The cover art is a CSS-generated placeholder.
- Suno links open in a new browser tab.
- The website is responsive for desktop, tablet and mobile screens.
- Website published with GitHub Pages.
