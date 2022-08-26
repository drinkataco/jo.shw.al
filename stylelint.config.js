module.exports = {
  extends: ['stylelint-config-prettier'],
  plugins: ['stylelint-prettier', 'stylelint-order'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'prettier/prettier': true,
    'order/properties-alphabetical-order': true,
  },
};
