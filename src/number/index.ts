import { Decimal } from 'decimal.js';

/**
 * 生成随机数 (Generate random number)
 * @param {number} minimum 最小值 (Minimum value)
 * @param {number} maximum 最大值 (Maximum value)
 * @returns {number} 包含最小值或最大值的随机数 (Random number containing minimum or maximum value)
 */
const number = (minimum: number, maximum: number): number => {
  if (minimum === maximum) {
    return minimum;
  }

  const minDecimal = new Decimal(minimum);
  const maxDecimal = new Decimal(maximum);

  // 计算范围并生成随机数
  const range = maxDecimal.minus(minDecimal);
  const randomDecimal = Decimal.random().mul(range).plus(minDecimal);

  // 确定结果的小数位数
  const maxDp = Math.max(minDecimal.dp(), maxDecimal.dp());

  // 使用 Decimal 对象进行四舍五入，以确保精度
  return randomDecimal.toDecimalPlaces(maxDp, Decimal.ROUND_HALF_UP).toNumber();
};

export default number;
