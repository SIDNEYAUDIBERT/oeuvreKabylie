import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser'

// Importez le plugin SCSS
import scss from "rollup-plugin-scss";
import image from "@rollup/plugin-image";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "iife",
    sourcemap: true,
    globals: { 
      'lucide-react': 'lucideReact',
    },
  },
  plugins: [
    nodeResolve({
      extensions: [".js"],
    }),
    json(),
    scss({ fileName: "assets/style.css" }), // Utilisez le plugin SCSS pour traiter les fichiers SCSS
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    babel({
      presets: ["@babel/preset-react"],
    }),
    image(),
    commonjs(),
    serve({
      open: true,
      verbose: true,
      contentBase: ["", "public"],
      host: "localhost",
      port: 3000,
    }),
    livereload({ watch: "dist" }),
    terser(), // Minifier le code pour la production
  ],
};
