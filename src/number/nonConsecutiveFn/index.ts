import stepFn from '@/number/step';

/**
 * 生成不连续的随机数，即连续两次生成的随机数100%不相同 (Generate random numbers that are not consecutive, that is, the random numbers generated twice are 100% different)
 * @description 最大值、最小值 和 步长，有一个是小数，则结果为小数，否则为整数 (If the maximum value or the minimum value is a decimal, the result is a decimal, otherwise it is an integer)
 * @param {number} maximum 最大值 (Maximum value)
 * @param {number} [minimum = 0] 最小值 (Minimum value)
 * @param {number} [step = 0] 步长，如果为 0 则不限制步长，假设 minimum 为 3，maximum 为 10，step 为 2，则生成的随机数为 3 5 7 9 (Step size, if it is 0, the step size is not limited, assuming that the minimum is 3, the maximum is 10, and the step is 2, then the generated random number is 3 5 7 9)
 * @returns {() => number} 生成不连续的随机数的函数 (Function that generates random numbers that are not consecutive)
 */
const nonConsecutiveFn = (maximum: number, minimum: number = 0, step: number = 0): (() => number) => {
  let previousValue: number;

  return () => {
    // 当最小值等于最大值时，或步长大于最大值和最小值之间的差值时，总是返回最小值
    if (minimum === maximum || step > maximum - minimum) {
      return minimum;
    }

    let num: number;

    do {
      num = stepFn(maximum, minimum, step);
    } while (num === previousValue);

    previousValue = num;
    return num;
  };
};

export default nonConsecutiveFn;
