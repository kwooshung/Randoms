<div align="center">

# @kwooshung/randoms

![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/kwooshung/randoms?labelColor=272e3b&color=00b42A&logo=github)
![GitHub last commit](https://img.shields.io/github/last-commit/kwooshung/randoms?labelColor=272e3b&color=165dff)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/kwooshung/randoms?labelColor=272e3b&color=165dff)
![GitHub top language](https://img.shields.io/github/languages/top/kwooshung/randoms?labelColor=272e3b&color=165dff)
![GitHub pull requests](https://img.shields.io/github/issues-pr/kwooshung/randoms?labelColor=272e3b&color=165dff)
![GitHub issues](https://img.shields.io/github/issues/kwooshung/randoms?labelColor=272e3b&color=165dff)
[![NPM Version](https://img.shields.io/npm/v/@kwooshung/randoms?labelColor=272e3b&color=165dff)](https://www.npmjs.com/package/@kwooshung/randoms)
[![Npm.js Downloads/Week](https://img.shields.io/npm/dw/@kwooshung/randoms?labelColor=272e3b&labelColor=272e3b&color=165dff&logo=npm)](https://www.npmjs.com/package/@kwooshung/randoms)
[![Github CI/CD](https://github.com/kwooshung/randoms/actions/workflows/ci.yml/badge.svg)](https://github.com/kwooshung/randoms/actions/)
[![codecov](https://codecov.io/gh/kwooshung/randoms/graph/badge.svg?token=VVZJE7H0KD)](https://codecov.io/gh/kwooshung/randoms)
[![Maintainability](https://api.codeclimate.com/v1/badges/325d0881b1ca19165d35/maintainability)](https://codeclimate.com/github/kwooshung/randoms/maintainability/)
[![GitHub License](https://img.shields.io/github/license/kwooshung/randoms?labelColor=272e3b&color=165dff)](LICENSE)
[![Gitee Repo](https://img.shields.io/badge/gitee-randoms-165dff?logo=gitee)](https://gitee.com/kwooshung/randoms/)
![Github Stars](https://img.shields.io/github/stars/kwooshung/randoms?labelColor=272e3b&color=165dff)

<p align="center">
    <a href="README.md">English</a> | 
    <a href="README.zh-CN.md" style="font-weight:700;color:#165dff;text-decoration:underline;">中文</a>
</p>
</div>

# 为什么开发它？

- 社区中有很多优秀的随机相关的项目，每个项目都有自己的风格和使用方法，不够统一，而且在项目中使用不同的随机，需要引入多个库；他们并不太适合我；
- 很多项目也 “年久失修” 了，不再维护，从另外一个方面也说明了社区中这些优秀的项目足够健壮！

# 为什么使用它？

- 全是函数组成，使用简单，学习成本极低；
- **ES6** 的现代特性实现；
- 尽可能不使用递归，效率更高，避免一些边缘问题；
- 能不报异常则不报异常，就像 `'1' + 1 === '11'` 一样，而不是报错；
- 支持 **整数随机**，**浮点数随机**，**字符串随机** 等；
- 随机数字相关函数，引入了 [**decimal.js**](https://github.com/MikeMcl/decimal.js) 包，避免了 **精度** 问题；
- 可按需引入，`esm` 模块化，支持天生支持 **树摇（tree-shaking）**，不用担心打包后的体积；
- 当然本项目才提供了 `commonjs` 规范的 `cjs` 版本；
- 测试覆盖率 **100%**；

# 安装

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

# 函数列表

## 随机数

### number [code](./src/number/index.ts)

随机数，支持整数和浮点数

#### 参数

```ts
/**
 * 生成随机数
 * @description 最大值 和 最小值，有一个是小数，则结果为小数，否则为整数
 * @param {number} maximum 最大值
 * @param {number} [minimum = 0] 最小值
 * @returns {number} 包含最小值或最大值的随机数
 */
const number = (maximum: number, minimum: number = 0): number;
```

#### 示例

```ts
import { number } from '@kwooshung/randoms';

number(10); // 0 ~ 10

number(10, 20); // 10 ~ 20

number(0.1, 1); // 0.1 ~ 1

number(0.5, 5.06); // 0.5 ~ 5.06

number(100, 200); // 100 ~ 200，可自动识别最大值和最小值
```

### numberStep [code](./src/number/step/index.ts)

随机数，支持整数和浮点数，支持步长

#### 参数

```ts
/**
 * 生成指定步长的随机数
 * @description 最大值、最小值 和 步长，有一个是小数，则结果为小数，否则为整数
 * @param {number} maximum 最大值
 * @param {number} [minimum = 0] 最小值
 * @param {number} [step = 0] 步长，如果为 0 则不限制步长，假设 minimum 为 3，maximum 为 10，step 为 2，则生成的随机数为 3 5 7 9
 * @returns {number} 包含最小值或最大值的随机数
 */
const step = (maximum: number, minimum: number = 0, step: number = 0): number;
```

#### 示例

```ts
import { numberStep } from '@kwooshung/randoms';

numberStep(10); // 0 ~ 10

numberStep(10, 20, 2); // 10, 12, 14, 16, 18, 20 中任意一个

numberStep(0.1, 1, 0.1); // 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, ... 1 中任意一个

numberStep(0.5, 5.06, 0.5); // 0.5, 1, 1.5, 2, 2.5, 3, ... 5 中任意一个

numberStep(1, 5, 0.3); // 1, 1.3, 1.6, 1.9, 2.2, 2.5, ... 4.9 中任意一个

numberStep(100, 200, 10); // 100, 110, 120, 130, 140, 150, ... 200 中任意一个
```

### numberNonConsecutiveFn [code](./src/number/nonConsecutiveFn/index.ts)

随机数函数，支持整数、浮点数、步长，保证连续两次调用不重复

#### 参数

```ts
/**
 * 生成随机数函数
 * @description 最大值、最小值 和 步长，有一个是小数，则结果为小数，否则为整数
 * @param {number} maximum 最大值
 * @param {number} [minimum = 0] 最小值
 * @param {number} [step = 0] 步长，如果为 0 则不限制步长，假设 minimum 为 3，maximum 为 10，step 为 2，则生成的随机数为 3 5 7 9
 * @returns {() => number} 包含最小值或最大值的随机数函数
 */
const numberNonConsecutiveFn = (maximum: number, minimum: number = 0, step: number = 0): () => number;
```

#### 示例

```ts
import { numberNonConsecutiveFn } from '@kwooshung/randoms';

const fn = numberNonConsecutiveFn(5, 10.5, 0.1); // 5 ~ 10.5，步长为 0.1，连续两次调用不重复

fn(); // 第一次调用，假设是 8.1
fn(); // 第二次调用，为 5 ~ 10.5 中除了 8.1 之外的任意一个数
```

### numbers [code](./src/number/array/index.ts)

随机数字数组，支持整数和浮点数

#### 参数

```ts
/**
 * 生成指定数量的随机数数组
 * @description 最大值、最小值 和 步长，有一个是小数，则结果为小数，否则为整数it is an integer)
 * @param {number} maximum 最大值
 * @param {number} [minimum = 0] 最小值
 * @param {number} [count = 10] 数组长度
 * @param {number} [step = 0] 步长，如果为 0 则不限制步长，假设 minimum 为 0，maximum 为 10，step 为 2，则生成的随机数为 0、2、4、6、8、10
 * @returns {number[]} 随机数数组
 */
const array = (maximum: number, minimum: number = 0, count: number = 10, step: number = 0): number[];
```

#### 示例

```ts
import { numbers } from '@kwooshung/randoms';

numbers(5); // [ 5, 3, 3, 1, 1, 2, 4, 1, 2, 0 ]

numbers(10，5.2); // [ 5.8, 6.2, 9.7, 5.5, 7.9, 9.8, 10, 8.4, 6.1, 10 ]

numbers(10, 5.21, 3); // [ 9.73, 7.84, 6 ]

numbers(10, 5.21, 3, 0.1); // [ 5.88, 9.45, 7.55 ]

numbers(5.21, 20, 5, 0.5); // [ 13.07, 11.4, 11.94, 15.87, 19.35 ]
```

### numbersUnique [code](./src/number/unique/index.ts)

随机不重复数字数组，支持整数和浮点数

#### 参数

```ts
/**
 * 生成指定数量不重复的随机数数组
 * @description 最大值、最小值 和 步长，有一个是小数，则结果为小数，否则为整数
 * @param {number} maximum 最大值
 * @param {number} [minimum =] 最小值
 * @param {number} [count = 10] 数组长度
 * @param {number} [step = 0] 步长，如果为 0 则不限制步长，假设 minimum 为 0，maximum 为 10，step 为 2，则生成的随机数为 0、2、4、6、8、10
 * @returns {number[]} 随机数数组
 */
const unique = (maximum: number, minimum: number = 0, count: number = 10, step: number = 0): number[];
```

#### 示例

```ts
import { numbersUnique } from '@kwooshung/randoms';

numbersUnique(5); // [ 1, 2, 4, 5, 3, 0 ]

numbersUnique(1, 6, 10); // [ 1, 6, 5, 2, 4, 3 ]

numbersUnique(10, 5.2); // [ 9.1, 5.9, 9.6, 9.3, 10, 5.2, 8.7, 7.1, 7.4, 7 ]

numbersUnique(10, 5.21, 3); // [ 8.79, 8.7, 9.37 ]

numbersUnique(10, 5.21, 3, 0.1); // [ 7.91, 6.91, 8.11 ]

numbersUnique(5.21, 20, 5, 0.5); // [ 13.21, 14.21, 19.21, 11.71, 6.21 ]
```

## 随机字符串

### string [code](./src/string/index.ts)

生成随机字符串

#### 参数

```ts
/**
 * 生成随机字符串
 * @param {number} [length = 10] 随机字符串的长度
 * @param {string} [typeString = '*'] 表示字符类型的字符串，默认为所有类型；*=所有 a=小写字母 A=大写字母  0=数字 !=特殊字符 `~!@#$%^&*()_+-={}[]|;:\`'",.<>?`
 * @returns {string} 生成的随机字符串
 */
const string = (length: number = 10, typeString: string = '*'): string;
```

#### 示例

```ts
import { string } from '@kwooshung/randoms';

string(); // 'wj_'P?"I5f'

string(5); // '_@pDQ'

string(5, 'a'); // 'myfqi'

string(5, 'A'); // 'YZRJS'

string(5, '0'); // '28653'

string(5, '!'); // '*'_{-'

string(5, 'aA0!'); // 'ODL$A'

string(3, 'abcdef'); // 'ffd' 当 typeString 中的字符出现不存在的预设字符时（*aA0!），将完全按照 typeString 中的字符生成随机字符串
```

### stringNonConsecutiveFn [code](./src/string/nonConsecutiveFn/index.ts)

随机字符串函数，保证连续两次调用不重复

#### 参数

```ts
/**
 * 生成不连续的随机字符串，即连续两次生成的随机字符串100%不相同
 * @param {number} [length = 10] 随机字符串的长度
 * @param {string} [typeString = '*'] 表示字符类型的字符串，默认为所有类型；*=所有 a=小写字母 A=大写字母  0=数字 !=特殊字符 `~!@#$%^&*()_+-={}[]|;:\`'",.<>?`
 * @returns {() => string} 生成不连续的随机字符串的函数
 */
const nonConsecutiveFn = (length: number = 10, typeString: string = '*'): () => string;
```

#### 示例

```ts
import { stringNonConsecutiveFn } from '@kwooshung/randoms';

const fn = stringNonConsecutiveFn(5); // 生成不连续的随机字符串的函数

fn(); // 第一次调用，假设是 'ODL$A'
fn(); // 第二次调用，绝对不会是 'ODL$A'，而是另外一个随机字符串
```

### strings [code](./src/string/array/index.ts)

随机字符串数组

#### 参数

```ts
/**
 * 生成随机字符串数组
 * @param {number} [length = 10] 字符串长度
 * @param {string} [typeString = '*'] 表示字符类型的字符串，默认为所有类型；*=所有 a=小写字母 A=大写字母  0=数字 !=特殊字符 `~!@#$%^&*()_+-={}[]|;:\`'",.<>?`
 * @param {number} [count = 10] 数组长度
 * @returns {string[]} 随机字符串数组
 */
const array = (length: number = 10, typeString: string = '*', count: number = 10): string[];
```

#### 示例

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

随机不重复字符串数组

#### 参数

```ts
/**
 * 生成指定数量不重复的随机字符串数组
 * @param {number} length 每个字符串的长度
 * @param {string} [typeString = '*'] 表示字符类型的字符串，默认为所有类型；*=所有 a=小写字母 A=大写字母  0=数字 !=特殊字符 `~!@#$%^&*()_+-={}[]|;:\`'",.<>?`
 * @param {number} count 数组长度
 * @returns {string[]} 随机字符串数组
 */
const unique = (length: number, typeString: string = '*', count: number = 10): string[];
```

#### 示例

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
// 不重复的组合，总计 7776 种
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
// 不重复的组合，总计 27 种
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
