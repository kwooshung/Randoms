import string from '@/string';

/**
 * 生成不连续的随机字符串，即连续两次生成的随机字符串100%不相同 (Generate random numbers that are not consecutive, that is, the random numbers generated twice are 100% different)
 * @param {number} [length = 10] 随机字符串的长度 (Length of random string)
 * @param {string} [typeString = '*'] 表示字符类型的字符串，默认为所有类型；*=所有 a=小写字母 A=大写字母  0=数字 !=特殊字符(String representing character type, default is all types; *=all a=lower case A=upper case 0=numbers !=special)
 * @returns {() => string} 生成不连续的随机字符串的函数 (Function that generates random numbers that are not consecutive)
 */
const nonConsecutiveFn = (length: number = 10, typeString: string = '*'): (() => string) => {
  let previousValue: string;

  return () => {
    let str: string;

    do {
      str = string(length, typeString);
    } while (str === previousValue);

    previousValue = str;
    return str;
  };
};

export default nonConsecutiveFn;
