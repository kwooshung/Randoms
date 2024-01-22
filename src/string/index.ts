/**
 * 特殊字符 (Special characters)
 */
const special = `~!@#$%^&*()_+-={}[]|;:\`'",.<>?`;

/**
 * 小写字母 (Lower case letters)
 */
const lowerCase = `abcdefghijklmnopqrstuvwxyz`;

/**
 * 大写字母 (Upper case letters)
 */
const upperCase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;

/**
 * 数字 (Numbers)
 */
const numbers = `0123456789`;

/**
 * 字符类型 (Character type)
 */
const CharType = {
  /**
   * 数字 (Numbers)
   */
  '0': numbers,
  /**
   * 小写字母 (Lower case letters)
   */
  a: lowerCase,
  /**
   * 大写字母 (Upper case letters)
   */
  A: upperCase,
  /**
   * 特殊字符 (Special characters)
   */
  '!': special,
  /**
   * 所有字符 (All characters)
   */
  '*': special + upperCase + lowerCase + numbers
};

/**
 * 获取字符集 (Get character set)
 * @param {string} typeString 字符类型或自定义字符集 (Character type or custom character set)
 * @returns {string} 字符集 (Character set)
 */
const getCharacterSet = (typeString: string): string => {
  // 检查是否为单个预定义字符类型 (Check if it is a single predefined character type)
  if (typeString.length === 1 && typeString in CharType) {
    return CharType[typeString];
  }

  // 检查是否全部为预定义字符类型 (Check if all are predefined character types)
  let allPredefined = true;
  for (const char of typeString) {
    if (!(char in CharType)) {
      allPredefined = false;
      break;
    }
  }

  // 如果全部为预定义字符类型，则组合它们的字符集 (If all are predefined character types, combine their character sets)
  if (allPredefined) {
    return typeString.split('').reduce((acc, char) => acc + CharType[char], '');
  }

  // 否则，视为自定义字符集 (Otherwise, it is regarded as a custom character set)
  return typeString;
};

/**
 * 生成随机字符串 (Generate random string)
 * @param {number} [length = 10] 随机字符串的长度 (Length of random string)
 * @param {string} [typeString = '*'] 表示字符类型的字符串，默认为所有类型；*=所有 a=小写字母 A=大写字母  0=数字 !=特殊字符(String representing character type, default is all types; *=all a=lower case A=upper case 0=numbers !=special)
 * @returns {string} 生成的随机字符串 (Generated random string)
 */
const string = (length: number = 10, typeString: string = '*'): string => {
  if (length <= 0) {
    return '';
  }

  const characters = getCharacterSet(typeString);
  return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
};

export { getCharacterSet };
export default string;
