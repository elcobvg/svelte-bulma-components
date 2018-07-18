import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.js',
      format: 'umd',
      name: 'SvelteBulmaForms'
    },
    plugins: [
      resolve({
        jsnext: true,
        main: true
      }),
      commonjs(),
      svelte({
        include: 'src/**/*.html'
      })
    ]
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/module.js',
      format: 'es',
      name: 'SvelteBulmaForms'
    },
    plugins: [
      resolve({
        jsnext: true,
        main: true
      }),
      commonjs(),
      svelte({
        include: 'src/**/*.html'
      })
    ]
  }
]
