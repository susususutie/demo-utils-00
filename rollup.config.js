import typescript from "rollup-plugin-typescript2";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import dts from 'rollup-plugin-dts'

const NAME = "Utils";

const plugins = [
  typescript({
    tsconfig: "./tsconfig.json",
    tsconfigOverride: {
      compilerOptions: {
        module: "ESNext",
        declaration: false,
      },
    },
  }),
  resolve(),
  commonjs(),
];

export default [
  {
    input: "src/index.ts",
    output: {
      format: "umd",
      file: `dist/index.umd.development.js`,
      name: NAME,
      sourcemap: true,
      amd: true,
    },
    plugins: [...plugins],
  },
  {
    input: "src/index.ts",
    output: {
      format: "umd",
      file: `dist/index.umd.production.js`,
      name: NAME,
      sourcemap: true,
      amd: true,
    },
    plugins: [terser(), ...plugins],
  },

  {
    input: "esm/index.d.ts",
    output: {
      format: "es",
      file: `dist/index.d.ts`,
    },
    plugins: [dts(), ...plugins],
  },
  {
    input: "esm/index.d.ts",
    output: {
      format: "es",
      file: `dist/index.all.d.ts`,
    },
    plugins: [
      dts({
        respectExternal: true,
      }),
      ...plugins,
    ],
  },
];
