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
      ...(isLib ? [] : [tailwindcss()]),
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
              fileName: (format) => `index.${format}.js`,
              formats: ["es", "cjs"],
            },
            rollupOptions: {
              external: ["react", "react-dom", "react/jsx-runtime"],
              output: {
                globals: {
                  react: "React",
                  "react-dom": "ReactDOM",
                  "react/jsx-runtime": "React.jsxRuntime",
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
