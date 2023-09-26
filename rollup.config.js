const typescript = require('@rollup/plugin-typescript');
const terser = require('@rollup/plugin-terser');
const pkg = require('./package.json');

const filename = pkg.main.replace('.js', '').replace('lib/', '');
const outputDir = 'lib';

module.exports = {
  input: `src/${filename}.ts`,
  output: [
    {
      dir: outputDir,
      entryFileNames: `${filename}.js`,
      format: 'cjs',
      sourcemap: true,
    },
    {
      dir: outputDir,
      entryFileNames: `${filename}.min.js`,
      format: 'cjs',
      sourcemap: true,
      plugins: [terser()],
    },
    {
      dir: outputDir,
      entryFileNames: `${filename}.[format].js`,
      format: 'es',
      sourcemap: true,
    },
    {
      dir: outputDir,
      entryFileNames: `${filename}.[format].min.js`,
      format: 'es',
      sourcemap: true,
      plugins: [terser()],
    },
    {
      dir: outputDir,
      entryFileNames: `${filename}.[format].js`,
      format: 'umd',
      sourcemap: true,
      name: 'CustomConsoleColors',
    },
    {
      dir: outputDir,
      entryFileNames: `${filename}.[format].min.js`,
      format: 'umd',
      sourcemap: true,
      name: 'CustomConsoleColors',
      plugins: [terser()],
    },
  ],
  external: [...Object.keys(pkg.dependencies || {})],
  plugins: [typescript()],
};
