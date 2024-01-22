import number from '@/number';

/**
 * 生成不连续的随机数，即连续两次生成的随机数100%不相同 (Generate random numbers that are not consecutive, that is, the random numbers generated twice are 100% different)
 * @param {number} minimum 最小值 (Minimum value)
 * @param {number} maximum 最大值 (Maximum value)
 * @returns {() => number} 生成不连续的随机数的函数 (Function that generates random numbers that are not consecutive)
 */
const nonConsecutiveFn = (minimum: number, maximum: number): (() => number) => {
  let previousValue: number;

  return () => {
    // 当最小值等于最大值时，总是返回该值
    if (minimum === maximum) {
      return minimum;
    }

    let num: number;

    do {
      num = number(minimum, maximum);
    } while (num === previousValue);

    previousValue = num;
    return num;
  };
};

export default nonConsecutiveFn;
