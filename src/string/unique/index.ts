import stringFn, { getCharacterSet } from '@/string';

/**
 * 生成指定数量不重复的随机字符串数组
 * @param {number} length 每个字符串的长度 (Length of each string)
 * @param {string} typeString 表示字符类型的字符串 (String representing character type)
 * @param {number} count 数组长度 (Array length)
 * @returns {string[]} 随机字符串数组 (Random string array)
 */
const unique = (length: number, typeString: string = '*', count: number = 10): string[] => {
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
