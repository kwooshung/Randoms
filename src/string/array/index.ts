import string from '@/string';

/**
 * 生成随机字符串数组 (Generate an array of random strings)
 * @param {number} [count = 10] 数组长度 (Array length)
 * @param {number} [length = 10] 字符串长度 (String length)
 * @param {string} [typeString = '*'] 表示字符类型的字符串，默认为所有类型；*=所有 a=小写字母 A=大写字母  0=数字 !=特殊字符(String representing character type, default is all types; *=all a=lower case A=upper case 0=numbers !=special)
 * @returns {string[]} 随机字符串数组 (Random string array)
 */
const array = (count: number = 10, length: number = 10, typeString: string = '*'): string[] => Array.from({ length: count }, () => string(length, typeString));

export default array;
