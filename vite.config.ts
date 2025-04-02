import { AliasOptions, defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

//@ts-ignore
import path from "path";

//@ts-ignore
const root = path.resolve(__dirname, "src");

// https://vite.dev/config/
export default defineConfig({
  plugins: [ react(), tailwindcss() ],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "@": root,
    } as AliasOptions
  }
})
