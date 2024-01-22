import stepFn from '@/number/step';

/**
 * 生成指定数量不重复的随机数数组
 * @param {number} minimum 最小值 (Minimum value)
 * @param {number} maximum 最大值 (Maximum value)
 * @param {number} [count = 10] 数组长度 (Array length)
 * @param {number} [step = 0] 步长，如果为 0 则不限制步长，假设 minimum 为 0，maximum 为 10，step 为 2，则生成的随机数为 0、2、4、6、8、10 (Step size, if it is 0, the step size is not limited, assuming that the minimum is 0, the maximum is 10, and the step is 2, then the generated random number is 0, 2, 4, 6, 8, 10)
 * @returns {number[]} 随机数数组 (Random number array)
 */
const unique = (minimum: number, maximum: number, count: number = 10, step: number = 0): number[] => {
  // 计算可能的唯一数的最大数量
  const possibleCount = step > 0 ? Math.ceil((maximum - minimum + 1) / step) : maximum - minimum + 1;

  // 如果请求的数量超出可能的最大数量，则调整为最大可能数量
  const adjustedCount = count > possibleCount ? possibleCount : count;

  const possibleValues = new Set<number>();
  while (possibleValues.size < adjustedCount) {
    const randomValue = stepFn(minimum, maximum, step);
    possibleValues.add(randomValue);
  }

  return Array.from(possibleValues);
};

export default unique;
