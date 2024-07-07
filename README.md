# textlint-rule-no-curly-quotes [![Actions Status: test](https://github.com/aborazmeh/textlint-rule-no-curly-quotes/workflows/test/badge.svg)](https://github.com/aborazmeh/textlint-rule-no-curly-quotes/actions?query=workflow%3A"test") [![textlint rule](https://img.shields.io/badge/textlint-fixable-green.svg?style=social)](https://textlint.github.io/)

Prevents the usage of curly quotation marks, and replace them to normal ascii ones.

The purpose of this package is to use ascii characters in editor, and convert them to curly symbols if you want in rendering using a parser which supports this like `Typographer` extension of [goldmark](https://github.com/yuin/goldmark) or [smartypants](https://daringfireball.net/projects/smartypants/).

This is the opposite of [textlint-rule-quotes](https://github.com/sapegin/textlint-rule-quotes), and you probably won't to stop one of them as they contradict.

|Character|Replacement|
|-|-|
|`“`|`"`|
|`”`|`"`|
|`‘`|`'`|
|`’`|`'`|

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-no-curly-quotes

## Usage

Via `.textlintrc.json`(Recommended)

```json
{
    "rules": {
        "no-curly-quotes": true
    }
}
```

Via CLI

```
textlint --rule no-curly-quotes README.md
```
### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

    npm test

## License

MIT © aborazmeh
