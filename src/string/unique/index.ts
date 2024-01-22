import stringFn, { getCharacterSet } from '@/string';

/**
 * 生成指定数量不重复的随机字符串数组 (Generate an array of random strings with a specified number of non-repeating)
 * @param {number} [length = 10] 每个字符串的长度 (Length of each string)
 * @param {string} [typeString = '*'] 表示字符类型的字符串，默认为所有类型；*=所有 a=小写字母 A=大写字母  0=数字 !=特殊字符 `~!@#$%^&*()_+-={}[]|;:\`'",.<>?` (String representing character type, default is all types; *=all a=lower case A=upper case 0=numbers !=special`~!@#$%^&*()_+-={}[]|;:\`'",.<>?`)
 * @param {number} count 数组长度 (Array length)
 * @returns {string[]} 随机字符串数组 (Random string array)
 */
const unique = (length: number = 10, typeString: string = '*', count: number = 10): string[] => {
  // 获取实际的字符集
  const characters = getCharacterSet(typeString);
  const uniqueStrings = {};
  while (Object.keys(uniqueStrings).length < count) {
    const randomString = stringFn(length, characters);
    uniqueStrings[randomString] = true;

    // 检查是否达到了组合的理论上限
    if (Object.keys(uniqueStrings).length === Math.pow(characters.length, length)) {
      break;
    }
  }

  return Object.keys(uniqueStrings);
};

export default unique;
