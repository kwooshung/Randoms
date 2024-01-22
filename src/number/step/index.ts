import { Decimal } from 'decimal.js';
import ensureMinLessThanMax from '@/internal/ensureMinLessThanMax';
import number from '@/number';

/**
 * 生成指定步长的随机数 (Generate random numbers with specified step size)
 * @description 最大值、最小值 和 步长，有一个是小数，则结果为小数，否则为整数 (If the maximum value or the minimum value is a decimal, the result is a decimal, otherwise it is an integer)
 * @param {number} maximum 最大值 (Maximum value)
 * @param {number} [minimum = 0] 最小值 (Minimum value)
 * @param {number} [step = 0] 步长，如果为 0 则不限制步长，假设 minimum 为 3，maximum 为 10，step 为 2，则生成的随机数为 3 5 7 9 (Step size, if it is 0, the step size is not limited, assuming that the minimum is 3, the maximum is 10, and the step is 2, then the generated random number is 3 5 7 9)
 * @returns {number} 包含最小值或最大值的随机数 (Random number containing minimum or maximum value)
 */
const step = (maximum: number, minimum: number = 0, step: number = 0): number => {
  // 当最小值大于最大值时，交换最大值和最小值
  [maximum, minimum] = ensureMinLessThanMax(maximum, minimum);

  const minDecimal = new Decimal(minimum);
  const maxDecimal = new Decimal(maximum);
  const stepDecimal = new Decimal(step);

  if (minDecimal.eq(maxDecimal)) {
    return minimum;
  }

  if (stepDecimal.eq(0)) {
    return number(maximum, minimum);
  }

  if (stepDecimal.abs().greaterThan(maxDecimal.minus(minDecimal))) {
    return minimum;
  }

  const range = maxDecimal.minus(minDecimal).div(stepDecimal).floor();
  const randomIndex = Math.floor(Math.random() * (range.toNumber() + 1));

  let result = minDecimal.plus(stepDecimal.mul(randomIndex)).toNumber();

  const isStepInteger = stepDecimal.isInteger();
  const isBoundariesDecimal = !minDecimal.isInteger() || !maxDecimal.isInteger();

  if (isStepInteger && isBoundariesDecimal) {
    // 计算最小值和最大值的小数位数
    const minDp = minDecimal.dp();
    const maxDp = maxDecimal.dp();
    const dp = Math.max(minDp, maxDp);

    // 生成符合精度要求的小数部分
    const scale = Math.pow(10, dp);
    const decimalPart = Math.floor(Math.random() * scale) / scale;

    // 添加小数部分，确保整数部分不变
    result = new Decimal(Math.floor(result)).plus(decimalPart).toNumber();

    // 确保结果在最小值和最大值范围内
    result = Math.min(result, maximum);
    result = Math.max(result, minimum);
  }

  return result;
};

export default step;
