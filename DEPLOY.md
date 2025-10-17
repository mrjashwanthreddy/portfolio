Deployment to GitHub Pages (free)

This repository was prepared for deployment to GitHub Pages. Changes already made in this branch:

- Use HashRouter in `src/main.tsx` so client-side routing works on GitHub Pages.
- Added `vite.config.ts` with a relative base (`base: './'`) so built assets load correctly when served from a repo path.
- Added `predeploy` and `deploy` scripts in `package.json` (deploy uses `gh-pages -d dist`).

What you need to do locally (Windows cmd.exe):

1) Create the deployment branch from `feature/projects` (makes a branch named `deployment/github-pages`):

   git checkout feature/projects
   git pull origin feature/projects
   git checkout -b deployment/github-pages

2) Commit the changes (if not already committed):

   git add .
   git commit -m "chore(deploy): prepare app for GitHub Pages (HashRouter, vite config, deploy scripts)"

3) Push the new branch to origin:

   git push -u origin deployment/github-pages

4) Install dependencies (this repository currently added `gh-pages` and `@vitejs/plugin-react` to `devDependencies`, run install to fetch them):

   npm install

   or, to get a consistent install (recommended):

   npm ci

5) Build and deploy (the `deploy` script runs `predeploy` which builds, then publishes):

   npm run deploy

   That will publish the `dist` folder to a `gh-pages` branch and GitHub Pages will serve it.

6) Verify on GitHub:

   - Visit your repository on GitHub > Settings > Pages (or Settings -> Pages & Environments) to ensure it's serving from the `gh-pages` branch (the gh-pages package usually sets this automatically).
   - Or open https://<your-username>.github.io/<repository>/ (or if deploying to a user site, https://<your-username>.github.io).

Notes and troubleshooting

- You may see TypeScript/Vite errors locally until you run `npm install` because the project files reference packages that were added to `package.json` but not yet installed. This is expected.
- If you want the site served from https://<your-username>.github.io/<repo>/ and prefer absolute asset paths, set `base: '/<repo>/'` in `vite.config.ts` instead of `./`. Using `./` keeps paths relative and works in most cases including GitHub Pages.
- Alternative: Use GitHub Actions to automatically deploy from `main`/`master` on push. This repository uses a manual `gh-pages` approach for simplicity.

If you want, I can also create a small GitHub Actions workflow to automatically deploy on push to `deployment/github-pages` or `main`.

