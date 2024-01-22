import string from '@/string';

/**
 * 生成随机字符串数组 (Generate an array of random strings)
 * @param {number} [length = 10] 字符串长度 (String length)
 * @param {string} [typeString = '*'] 表示字符类型的字符串，默认为所有类型；*=所有 a=小写字母 A=大写字母  0=数字 !=特殊字符 `~!@#$%^&*()_+-={}[]|;:\`'",.<>?` (String representing character type, default is all types; *=all a=lower case A=upper case 0=numbers !=special`~!@#$%^&*()_+-={}[]|;:\`'",.<>?`)
 * @param {number} [count = 10] 数组长度 (Array length)
 * @returns {string[]} 随机字符串数组 (Random string array)
 */
const array = (length: number = 10, typeString: string = '*', count: number = 10): string[] => Array.from({ length: count }, () => string(length, typeString));

export default array;
