import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite config
// - Bật React Compiler (React 19) để compiler tự tối ưu/memoize ở nhiều trường hợp.
// - Không thay đổi API React; chỉ ảnh hưởng build-time.
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
  ],
});
