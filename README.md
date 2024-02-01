<div align="center">

# @kwooshung/randoms

![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/kwooshung/Randoms?labelColor=272e3b&color=00b42A&logo=github)
![GitHub last commit](https://img.shields.io/github/last-commit/kwooshung/Randoms?labelColor=272e3b&color=165dff)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/kwooshung/Randoms?labelColor=272e3b&color=165dff)
![GitHub top language](https://img.shields.io/github/languages/top/kwooshung/Randoms?labelColor=272e3b&color=165dff)
![GitHub pull requests](https://img.shields.io/github/issues-pr/kwooshung/Randoms?labelColor=272e3b&color=165dff)
![GitHub issues](https://img.shields.io/github/issues/kwooshung/Randoms?labelColor=272e3b&color=165dff)
[![NPM Version](https://img.shields.io/npm/v/@kwooshung/randoms?labelColor=272e3b&color=165dff)](https://www.npmjs.com/package/@kwooshung/randoms)
[![Npm.js Downloads/Week](https://img.shields.io/npm/dw/@kwooshung/randoms?labelColor=272e3b&labelColor=272e3b&color=165dff&logo=npm)](https://www.npmjs.com/package/@kwooshung/randoms)
[![Github CI/CD](https://github.com/kwooshung/Randoms/actions/workflows/ci.yml/badge.svg)](https://github.com/kwooshung/Randoms/actions/)
[![codecov](https://codecov.io/gh/kwooshung/Randoms/graph/badge.svg?token=VVZJE7H0KD)](https://codecov.io/gh/kwooshung/Randoms)
[![Maintainability](https://api.codeclimate.com/v1/badges/b797031c8c1570b354a3/maintainability)](https://codeclimate.com/github/kwooshung/Randoms/maintainability)
[![GitHub License](https://img.shields.io/github/license/kwooshung/Randoms?labelColor=272e3b&color=165dff)](LICENSE)
[![Gitee Repo](https://img.shields.io/badge/gitee-randoms-165dff?logo=gitee)](https://gitee.com/kwooshung/Randoms/)
![Github Stars](https://img.shields.io/github/stars/kwooshung/Randoms?labelColor=272e3b&color=165dff)

<p align="center">
    <a href="README.zh-CN.md">中文</a> | 
    <a href="README.md" style="font-weight:700;color:#165dff;text-decoration:underline;">English</a>
</p>
</div>

# 📝 Why Develop It?

- There are many excellent random-related projects in the community, each with its own style and usage method, which are not unified. Also, using different random functions in projects often requires including multiple libraries; they are not quite suitable for me.
- Many projects are also "outdated," no longer maintained, which also shows from another perspective that these excellent community projects are robust enough!

# 📝 Why Use It?

- Entirely composed of functions, simple to use, and very low learning cost.
- Implemented with modern **ES6** features.
- Avoids recursion as much as possible for higher efficiency and to avoid edge cases.
- Avoids throwing exceptions whenever possible, similar to `'1' + 1 === '11'`, instead of throwing an error.
- Supports **integer random**, **floating-point random**, **string random**, etc.
- Random number-related functions incorporate the [**decimal.js**](https://github.com/MikeMcl/decimal.js) package, avoiding **precision** issues.
- Supports on-demand import, `esm` modularization, and naturally supports **tree shaking**. Don't worry about the package size after bundling.
- Also provides a `commonjs` (`cjs`) version following the `commonjs` specification.
- Test coverage is **100%**.

# 📝 Install

## npm

```bash
npm install @kwooshung/randoms
```

## yarn

```bash
yarn add @kwooshung/randoms
```

## pnpm

```bash
pnpm add @kwooshung/randoms
```

# 📝 Functions

## 🚩 Random Numbers

### ✨ number [code](./src/number/index.ts)

Random numbers, supports both integers and floating-point numbers

#### 💬 Parameters

```ts
/**
 * Generate random numbers
 * @description If either the maximum or the minimum value is a decimal, the result is a decimal; otherwise, it's an integer
 * @param {number} maximum Maximum value
 * @param {number} [minimum = 0] Minimum value
 * @returns {number} Random number including minimum or maximum value
 */
const number = (maximum: number, minimum: number = 0): number;
```

#### 📄 Examples

```ts
import { number } from '@kwooshung/randoms';

number(10); // 0 ~ 10

number(10, 20); // 10 ~ 20

number(0.1, 1); // 0.1 ~ 1

number(0.5, 5.06); // 0.5 ~ 5.06

number(100, 200); // 100 ~ 200, auto detects max and min values
```

### ✨ numberStep [code](./src/number/step/index.ts)

Random numbers with step, supports integers and floating-point numbers

#### 💬 Parameters

```ts
/**
 * Generate random numbers with specified step size
 * @description If either the maximum, minimum, or step is a decimal, the result is a decimal; otherwise, it's an integer
 * @param {number} maximum Maximum value
 * @param {number} [minimum = 0] Minimum value
 * @param {number} [step = 0] Step size; if it is 0, the step size is unrestricted. For example, if minimum is 3, maximum is 10, and step is 2, the generated random number could be 3, 5, 7, or 9
 * @returns {number} Random number including minimum or maximum value
 */
const step = (maximum: number, minimum: number = 0, step: number = 0): number;
```

#### 📄 Examples

```ts
import { numberStep } from '@kwooshung/randoms';

numberStep(10); // 0 ~ 10

numberStep(10, 20, 2); // One of 10, 12, 14, 16, 18, 20

numberStep(0.1, 1, 0.1); // One of 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, ... 1

numberStep(0.5, 5.06, 0.5); // One of 0.5, 1, 1.5, 2, 2.5, 3, ... 5

numberStep(1, 5, 0.3); // One of 1, 1.3, 1.6, 1.9, 2.2, 2.5, ... 4.9

numberStep(100, 200, 10); // One of 100, 110, 120, 130, 140, 150, ... 200
```

### ✨ numberNonConsecutiveFn [code](./src/number/nonConsecutiveFn/index.ts)

Random number function, supports integers, floating-point numbers, step size, and ensures consecutive calls are not repeated

#### 💬 Parameters

```ts
/**
 * Generate a non-consecutive random number function
 * @description If either the maximum, minimum, or step is a decimal, the result is a decimal; otherwise, it's an integer
 * @param {number} maximum Maximum value
 * @param {number} [minimum = 0] Minimum value
 * @param {number} [step = 0] Step size; if it is 0, the step size is unrestricted. For example, if minimum is 3, maximum is 10, and step is 2, the generated random number could be 3, 5, 7, or 9
 * @returns {() => number} Function that generates non-consecutive random numbers
 */
const numberNonConsecutiveFn = (maximum: number, minimum: number = 0, step: number = 0): () => number;
```

#### 📄 Examples

```ts
import { numberNonConsecutiveFn } from '@kwooshung/randoms';

const fn = numberNonConsecutiveFn(5, 10.5, 0.1); // 5 ~ 10.5, step size 0.1, consecutive calls won't repeat

fn(); // First call, suppose it's 8.1
fn(); // Second call, any number from 5 ~ 10.5 except 8.1
```

### ✨ numbers [code](./src/number/array/index.ts)

Random number array, supports both integers and floating-point numbers

#### 💬 Parameters

```ts
/**
 * Generate an array of random numbers
 * @description If either the maximum, minimum, or step is a decimal, the result is a decimal; otherwise, it's an integer
 * @param {number} maximum Maximum value
 * @param {number} [minimum = 0] Minimum value
 * @param {number} [count = 10] Array length
 * @param {number} [step = 0] Step size; if it is 0, the step size is unrestricted. For example, if minimum is 0, maximum is 10, and step is 2, the generated random number could be 0, 2, 4, 6, 8, 10
 * @returns {number[]} Array of random numbers
 */
const array = (maximum: number, minimum: number = 0, count: number = 10, step: number = 0): number[];
```

#### 📄 Examples

```ts
import { numbers } from '@kwooshung/randoms';

numbers(5); // [ 5, 3, 3, 1, 1, 2, 4, 1, 2, 0 ]

numbers(10，5.2); // [ 5.8, 6.2, 9.7, 5.5, 7.9, 9.8, 10, 8.4, 6.1, 10 ]

numbers(10, 5.21, 3); // [ 9.73, 7.84, 6 ]

numbers(10, 5.21, 3, 0.1); // [ 5.88, 9.45, 7.55 ]

numbers(5.21, 20, 5, 0.5); // [ 13.07, 11.4, 11.94, 15.87, 19.35 ]
```

### ✨ numbersUnique [code](./src/number/unique/index.ts)

Random non-repetitive number array, supports both integers and floating-point numbers

#### 💬 Parameters

```ts
/**
 * Generate an array of non-repetitive random numbers
 * @description If either the maximum, minimum, or step is a decimal, the result is a decimal; otherwise, it's an integer
 * @param {number} maximum Maximum value
 * @param {number} [minimum = 0] Minimum value
 * @param {number} [count = 10] Array length
 * @param {number} [step = 0] Step size; if it is 0, the step size is unrestricted. For example, if minimum is 0, maximum is 10, and step is 2, the generated random number could be 0, 2, 4, 6, 8, 10
 * @returns {number[]} Array of non-repetitive random numbers
 */
const unique = (maximum: number, minimum: number = 0, count: number = 10, step: number = 0): number[];
```

#### 📄 Examples

```ts
import { numbersUnique } from '@kwooshung/randoms';

numbersUnique(5); // [ 1, 2, 4, 5, 3, 0 ]

numbersUnique(1, 6, 10); // [ 1, 6, 5, 2, 4, 3 ]

numbersUnique(10, 5.2); // [ 9.1, 5.9, 9.6, 9.3, 10, 5.2, 8.7, 7.1, 7.4, 7 ]

numbersUnique(10, 5.21, 3); // [ 8.79, 8.7, 9.37 ]

numbersUnique(10, 5.21, 3, 0.1); // [ 7.91, 6.91, 8.11 ]

numbersUnique(5.21, 20, 5, 0.5); // [ 13.21, 14.21, 19.21, 11.71, 6.21 ]
```

## 🚩 Random Strings

### ✨ string [code](./src/string/index.ts)

Generate random strings

#### 💬 Parameters

```ts
/**
 * Generate random strings
 * @param {number} [length = 10] Length of the random string
 * @param {string} [typeString = '*'] String representing character types, defaults to all types; *=all a=lowercase A=uppercase 0=numbers !=special characters `~!@#$%^&*()_+-={}[]|;:\`'",.<>?`
 * @returns {string} Generated random string
 */
const string = (length: number = 10, typeString: string = '*'): string;
```

#### 📄 Examples

```ts
import { string } from '@kwooshung/randoms';

string(); // 'wj_'P?"I5f'

string(5); // '_@pDQ'

string(5, 'a'); // 'myfqi'

string(5, 'A'); // 'YZRJS'

string(5, '0'); // '28653'

string(5, '!'); // '*'_{-'

string(5, 'aA0!'); // 'ODL$A'

string(3, 'abcdef'); // 'ffd' When typeString includes characters not in the presets (*aA0!), it generates a random string completely based on characters in typeString
```

### ✨ stringNonConsecutiveFn [code](./src/string/nonConsecutiveFn/index.ts)

random string function, ensures consecutive calls are not repeated

#### 💬 Parameters

```ts
/**
 * Generate a non-consecutive random string function
 * @param {number} [length = 10] Length of the random string
 * @param {string} [typeString = '*'] String representing character types, defaults to all types; *=all a=lowercase A=uppercase 0=numbers !=special characters `~!@#$%^&*()_+-={}[]|;:\`'",.<>?`
 * @returns {() => string} Function that generates non-consecutive random strings
 */
const nonConsecutiveFn = (length: number = 10, typeString: string = '*'): () => string;
```

#### 📄 Examples

```ts
import { stringNonConsecutiveFn } from '@kwooshung/randoms';

const fn = stringNonConsecutiveFn(5); // Function generating non-consecutive random strings

fn(); // First call, suppose it's 'ODL$A'
fn(); // Second call, definitely not 'ODL$A', but another random string
```

### ✨ strings [code](./src/string/array/index.ts)

Array of random strings

#### 💬 Parameters

```ts
/**
 * Generate an array of random strings
 * @param {number} [length = 10] Length of each string
 * @param {string} [typeString = '*'] String representing character types, defaults to all types; *=all a=lowercase A=uppercase 0=numbers !=special characters `~!@#$%^&*()_+-={}[]|;:\`'",.<>?`
 * @param {number} [count = 10] Array length
 * @returns {string[]} Array of random strings
 */
const array = (length: number = 10, typeString: string = '*', count: number = 10): string[];
```

#### 📄 Examples

```ts
import { strings } from '@kwooshung/randoms';

strings(); //[ '=<lNy&6}tX', '+0LhawO:vy', 'E0#;m,(6_z', 'y_-4",Q86G', '0gR1Ey&(:@', ';!}b@Xt,W=', 'l>&8&AQXx6', 'hNGggrYYE6', '$-cm9])G}a', '=<lNy&6}tX' ]

strings(5); //[ 'Wc^n*', '<zs>w', 'g,ztj', 'rq*u5', '%X%mV', ']5"j(', 'tg(|N', "ES*'}", 'F#[aO', '+pEWC' ]

strings(5, '*', 5); // [ '`<Q-$', 'mjo$G', '](]ZG', '#Mz;k', "Tu:'X" ]

strings(5, 'a', 5); // [ 'xamss', 'rupru', 'sugpq', 'rupru', 'sqdia' ]

strings(5, 'A', 5); // [ 'OQQWJ', 'FIGWH', 'KLMUM', 'PETHQ', 'JSNDT' ]

strings(5, '0', 5); // [ '01965', '89936', '40767', '01965', '41423' ]

strings(5, '!', 5); // [ '<"~@#', '!$.{:', '#:|=&', '~%)[}', '!-.(:' ]

strings(5, 'aA0!', 5); // [ "$6['n", '|9)%y', 'DHshL', '$*Aq4', '!-y0;' ]

strings(5, 'abcdef', 5); // [ 'cebcf', 'fcdcc', 'fdfad', 'dbdca', 'eabaf' ]
```

### stringsUnique [code](./src/string/unique/index.ts)

Non-repetitive array of random strings

#### ✨ Parameters

```ts
/**
 * Generate an array of non-repetitive random strings
 * @param {number} length Length of each string
 * @param {string} [typeString = '*'] String representing character types, defaults to all types; *=all a=lowercase A=uppercase 0=numbers !=special characters `~!@#$%^&*()_+-={}[]|;:\`'",.<>?`
 * @param {number} count Array length
 * @returns {string[]} Array of non-repetitive random strings
 */
const unique = (length: number, typeString: string = '*', count: number = 10): string[];
```

#### 📄 Examples

```ts
import { stringsUnique } from '@kwooshung/randoms';

stringsUnique(); // [ 'j2@fe[<3TC', '5+YS{AE9*3', 'j(i^K$gInO', 's[SDxo{"GE', 'D%aG!$t4,O', '=pX;Tr8m[|', '6%eV.K&Ri=', '3,~KZah-S3', 'N?v7BAxBc=', '"*cj0mf3.S' ]

stringsUnique(5); // [ 'oORhU', 'm?A00', 'KTT+*', 'q]v6`', 'S!:T.', 'hHV8;', 'd$NO9', '^7Env', 'qXYvB', '6xJ}U' ]

stringsUnique(5, '*', 5); // [ 'Bt4my', 'ZLU5M', 'z{d?I', 'qQzX,', 'g_QC`' ]

stringsUnique(5, 'a', 5); // [ 'qjrjm', 'yfcdw', 'tyxyi', 'erpfp', 'zbnbn' ]

stringsUnique(5, 'A', 5); // [ 'RTJGF', 'JNSGO', 'LEMZN', 'DFOSS', 'KIALK' ]

stringsUnique(5, '0', 5); // [ '19324', '34616', '56904', '65349', '95205' ]

stringsUnique(5, '!', 5); // [ ']+!)-', '>^[%(', '=+`({', '-|@(`', '@#"},' ]

stringsUnique(5, 'aA0!', 5); // [ '65$DH', 'jOQe<', 'VZ"7s', '.d`N&', 'y?U5B' ]

stringsUnique(5, 'abcdef', 5); // [ 'adfda', 'ebbcc', 'dfadc', 'bebee', 'fbdbe' ]

stringsUnique(5, 'abcdef', 100);
// Non-repetitive combinations, totaling 7776
// [
//   'bdcfe', 'ddaec', 'beaff', 'dfbed', 'eeeda', 'badad',
//   'dbaae', 'efeec', 'bbcac', 'bbffc', 'eebae', 'accdf',
//   'cbaac', 'cdfee', 'cffae', 'bcfcc', 'ccbea', 'bffef',
//   'fbdfd', 'beaaf', 'afbdb', 'dbbba', 'dabad', 'acefd',
//   'afcac', 'baedd', 'ccfaa', 'ffacf', 'dcafc', 'edeef',
//   'beefe', 'faeea', 'fbffa', 'eebda', 'ededb', 'dcdbd',
//   'babcf', 'caaca', 'ccaba', 'caecd', 'ebecc', 'cbdff',
//   'edefb', 'bbebf', 'cabff', 'eecec', 'fedbe', 'bdecd',
//   'eebeb', 'affbf', 'fdcfb', 'dbfef', 'cfccf', 'cbdce',
//   'fddbb', 'beabc', 'efced', 'baadc', 'adedd', 'ffbfd',
//   'bbafa', 'ccfdf', 'bcddd', 'ccdff', 'ceafd', 'daebd',
//   'dafcf', 'aeacd', 'effaa', 'afecf', 'ecafb', 'bdcad',
//   'deeba', 'dadcc', 'fbcbc', 'caedb', 'bfafb', 'dedca',
//   'aefcc', 'fceca', 'afdbb', 'eeaac', 'ecbad', 'dcaea',
//   'affcf', 'fcdec', 'adced', 'eaddd', 'bcbbe', 'fedee',
//   'cabad', 'ebdfb', 'bebca', 'adcaf', 'afade', 'feafb',
//   'aebdc', 'fedcf', 'aaafa', 'bbddf'
// ]

stringsUnique(3, 'abc', 100);
// Non-repetitive combinations, totaling 27
// [
//   'bbc', 'ccc', 'bcb', 'bac',
//   'abc', 'aca', 'cba', 'bcc',
//   'cbc', 'aac', 'acc', 'caa',
//   'bba', 'abb', 'cac', 'aab',
//   'cbb', 'bca', 'bab', 'acb',
//   'bbb', 'ccb', 'baa', 'cca',
//   'aba', 'aaa', 'cab'
// ]
```
