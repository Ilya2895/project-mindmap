# Interactive Knowledge Map

Single-page presentation website for a Brian Tracy book knowledge map. It runs with plain HTML, CSS, and vanilla JavaScript.

## Replace The Book Image

Replace this file:

`images/book-cover.png`

Use a vertical PNG or JPG cover. The current design is tuned for a black leather and gold-foil book cover.

## Replace The Background Image

The background is generated in CSS for reliable local opening. If you want to add a real parchment image, place it here:

`images/parchment-bg.jpg`

Then add it to `css/style.css` inside the `body` background stack.

## Insert Chapter Text

Open:

`js/script.js`

Edit the `chapters` array near the top of the file. Replace:

`PLACE TITLE HERE`

`PLACE SUMMARY HERE`

`PLACE IDEA HERE`

`PLACE QUOTE HERE`

There are 21 chapter objects, one for every chapter node.

## Insert MP3 Files

Place audio files in:

`audio/`

Expected filenames:

`audiobook.mp3`

`chapter01.mp3` through `chapter21.mp3`

The site already points to these paths.

## Customize Colors

Open:

`css/style.css`

Change the CSS variables at the top:

`--background`

`--gold`

`--gold-bright`

`--parchment`

`--brown`

## Run Locally

Open `index.html` directly in a browser.

No build step is required.

## Deploy To GitHub Pages

1. Push the `project` folder contents to a GitHub repository.
2. Open repository settings.
3. Go to Pages.
4. Choose the branch that contains `index.html`.
5. Save and wait for GitHub to publish the page.
