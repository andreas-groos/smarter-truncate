import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isLib = mode === "lib";

  return {
    plugins: [
      react(),
      tailwindcss(),
      ...(isLib
        ? [
            dts({
              tsconfigPath: "./tsconfig.lib.json",
              insertTypesEntry: true,
            }),
          ]
        : []),
    ],
    ...(isLib
      ? {
          build: {
            lib: {
              entry: resolve(__dirname, "src/index.ts"),
              name: "SmartTruncate",
              fileName: "index",
              formats: ["es"],
            },
            rollupOptions: {
              external: ["react", "react-dom"],
              output: {
                globals: {
                  react: "React",
                  "react-dom": "ReactDOM",
                },
              },
            },
            sourcemap: true,
            emptyOutDir: true,
          },
        }
      : {}),
  };
});
