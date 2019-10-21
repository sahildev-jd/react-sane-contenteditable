module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          browsers: ['last 2 versions', 'safari >= 7'],
        },
      },
    ],
    '@babel/preset-react',
  ],
  env: {
    esm: {
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            corejs: 2,
            helpers: true,
            regenerator: true,
            useESModules: false,
          },
        ],
      ],
      ignore: ['**/*.test.js', '**/__tests__/**', '**/__mocks__/**'],
    },
    cjs: {
      plugins: ['transform-es2015-modules-commonjs'],
      ignore: ['**/*.test.js', '**/__tests__/**', '**/__mocks__/**'],
    },
    test: {
      plugins: ['transform-es2015-modules-commonjs'],
    },
  },
  plugins: [
    '@babel/plugin-transform-spread',
    '@babel/plugin-proposal-class-properties',
    'transform-react-remove-prop-types',
  ],
};
