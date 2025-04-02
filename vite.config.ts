import { AliasOptions, defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
//@ts-ignore
import path from "path";

//@ts-ignore
const root = path.resolve(__dirname, "src");

// https://vite.dev/config/
export default defineConfig({
  plugins: [ react() ],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "@": root,
    } as AliasOptions
  }
})
