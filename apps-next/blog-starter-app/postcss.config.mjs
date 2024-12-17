import autoprefixer from "autoprefixer";
import tailwind from "tailwind";

export default [
  tailwindcss,
  autoprefixer({ overrideBrowserslist: ["last 2 versions"] }),
];
