import {defineConfig} from 'vite'

export default defineConfig({
  // Use relative base so the build works when served from any path (user.github.io/repo)
  base: './',
  // If you install @vitejs/plugin-react later, add it to plugins: [react()]
})
