import { Decimal } from 'decimal.js';
import ensureMinLessThanMax from '@/internal/ensureMinLessThanMax';

/**
 * 生成随机数 (Generate random number)
 * @description 最大值 和 最小值，有一个是小数，则结果为小数，否则为整数 (If the maximum value or the minimum value is a decimal, the result is a decimal, otherwise it is an integer)
 * @param {number} maximum 最大值 (Maximum value)
 * @param {number} [minimum = 0] 最小值 (Minimum value)
 * @returns {number} 包含最小值或最大值的随机数 (Random number containing minimum or maximum value)
 */
const number = (maximum: number, minimum: number = 0): number => {
  // 当最小值大于最大值时，交换最大值和最小值
  [maximum, minimum] = ensureMinLessThanMax(maximum, minimum);

  const maxDecimal = new Decimal(maximum);
  const minDecimal = new Decimal(minimum);

  // 计算最大精度（小数位数）
  const maxDp = Math.max(maxDecimal.dp(), minDecimal.dp());

  // 根据精度计算可能的最小和最大值
  const scale = Math.pow(10, maxDp);
  const minScaled = Math.ceil(minDecimal.mul(scale).toNumber());
  const maxScaled = Math.floor(maxDecimal.mul(scale).toNumber());

  // 在最小值和最大值之间生成一个随机整数，然后转换回小数
  const randomInt = Math.floor(Math.random() * (maxScaled - minScaled + 1)) + minScaled;
  const randomDecimal = new Decimal(randomInt).div(scale);

  return randomDecimal.toNumber();
};

export default number;
