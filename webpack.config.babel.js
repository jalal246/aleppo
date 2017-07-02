import { join } from 'path';

const include = join(__dirname, 'src');

module.exports = [
  {
    entry: './src/index',
    output: {
      path: join(__dirname, 'lib'),
      filename: 'index.umd.js',
      libraryTarget: 'umd',
      library: 'aleppo',
    },
    devtool: 'source-map',
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader', include },
      ],
    },
  },
  {
    entry: './src/index',
    output: {
      path: join(__dirname, 'lib'),
      filename: 'index.umd.min.js',
      libraryTarget: 'umd',
      library: 'aleppo',
    },
    devtool: 'source-map',
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader', include },
      ],
    },
  },
  { // date
    entry: './src/date',
    output: {
      path: join(__dirname, 'npm_packages/aleppo.date'),
      filename: 'index.js',
      libraryTarget: 'umd',
      library: 'date',
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader', include },
      ],
    },
  },
  { // delay
    entry: './src/delay',
    output: {
      path: join(__dirname, 'npm_packages/aleppo.delay'),
      filename: 'index.js',
      libraryTarget: 'umd',
      library: 'delay',
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader', include },
      ],
    },
  },
  { // doo
    entry: './src/doo',
    output: {
      path: join(__dirname, 'npm_packages/aleppo.doo'),
      filename: 'index.js',
      libraryTarget: 'umd',
      library: 'doo',
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader', include },
      ],
    },
  },
  { // is
    entry: './src/is',
    output: {
      path: join(__dirname, 'npm_packages/aleppo.is'),
      filename: 'index.js',
      libraryTarget: 'umd',
      library: 'is',
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader', include },
      ],
    },
  },
];
