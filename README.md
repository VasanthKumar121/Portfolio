# My Portfolio

A one-page portfolio site — free to host on GitHub Pages.

## Before you push: edit these thingss

1. Open `index.html` and replace:
   - `Your Name` → your actual name (appears in `<title>`, footer, hero)
   - The 5 project blocks (`Project One` ... `Project Five`) with your real project names, descriptions, and links
   - The `https://placehold.co/...` image URLs with real screenshots of your work (drag them into the same folder and reference like `images/project1.png`)
   - `your.email@example.com` with your real email
   - The GitHub / LinkedIn / Twitter links in the contact section

2. That's it — `style.css` and `script.js` don't need edits unless you want to change colors or animations.

## How to push this to GitHub Pages (free hosting)

Open a terminal in this folder and run:

```bash
# 1. Initialize git (skip if already a repo)
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "Initial portfolio site"

# 4. Create a new repo on GitHub first (via github.com → New repository)
#    Name it exactly: yourusername.github.io
#    (replace yourusername with your actual GitHub username — this exact
#    naming makes GitHub serve it automatically as a live site)

# 5. Connect your local folder to that repo
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# 6. Push
git branch -M main
git push -u origin main
```

Within a minute or two, your site will be live at:

```
https://yourusername.github.io
```

### If you want a project-specific URL instead (e.g. github.com/you/portfolio)

Name the repo anything you like, push the same way, then go to:
**Repo → Settings → Pages → Source → select "main" branch → Save.**

Your site will then be live at:
```
https://yourusername.github.io/repo-name
```

## Notes

- No build tools, no dependencies — pure HTML/CSS/JS, so it works on GitHub Pages with zero configuration.
- Fully responsive down to mobile.
- Replace the placeholder images before sharing with clients — that's the single biggest thing standing between this and looking "done."
