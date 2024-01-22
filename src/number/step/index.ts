import { Decimal } from 'decimal.js';
import number from '@/number';

/**
 * 生成指定步长的随机数 (Generate random numbers with specified step size)
 * @param {number} minimum 最小值 (Minimum value)
 * @param {number} maximum 最大值 (Maximum value)
 * @param {number} [step = 0] 步长，如果为 0 则不限制步长，假设 minimum 为 3，maximum 为 10，step 为 2，则生成的随机数为 3 5 7 9 (Step size, if it is 0, the step size is not limited, assuming that the minimum is 3, the maximum is 10, and the step is 2, then the generated random number is 3 5 7 9)
 * @returns {number} 包含最小值或最大值的随机数 (Random number containing minimum or maximum value)
 */
const step = (minimum: number, maximum: number, step: number = 0): number => {
  // 当最小值和最大值相等时，直接返回该值
  if (minimum === maximum) {
    return minimum;
  }

  // 如果步长为0，则生成最小值和最大值之间的随机数
  if (step === 0) {
    return number(minimum, maximum);
  }

  const minDecimal = new Decimal(minimum);
  const maxDecimal = new Decimal(maximum);
  const stepDecimal = new Decimal(step);

  // 如果步长大于最大值和最小值之差，则返回最小值
  if (stepDecimal.abs().greaterThan(maxDecimal.minus(minDecimal))) {
    return minimum;
  }

  // 根据最小值和步长计算随机数范围
  const range = maxDecimal.minus(minDecimal).div(stepDecimal).floor();
  const randomIndex = number(0, range.toNumber());
  const randomStep = minDecimal.plus(new Decimal(randomIndex).mul(stepDecimal));

  // 确定最长的小数位数
  const maxDp = Math.max(minDecimal.dp(), maxDecimal.dp(), stepDecimal.dp());

  // 使用最长的小数位数来确定结果的精度
  return randomStep.toDecimalPlaces(maxDp, Decimal.ROUND_HALF_UP).toNumber();
};

export default step;
