import Decimal from 'decimal.js';
import ensureMinLessThanMax from '@/internal/ensureMinLessThanMax';
import stepFn from '@/number/step';

/**
 * 生成指定数量不重复的随机数数组 (Generate an array of random numbers with a specified number of non-repetitive)
 * @description 最大值、最小值 和 步长，有一个是小数，则结果为小数，否则为整数 (If the maximum value or the minimum value is a decimal, the result is a decimal, otherwise it is an integer)
 * @param {number} maximum 最大值 (Maximum value)
 * @param {number} [minimum =] 最小值 (Minimum value)
 * @param {number} [count = 10] 数组长度 (Array length)
 * @param {number} [step = 0] 步长，如果为 0 则不限制步长，假设 minimum 为 0，maximum 为 10，step 为 2，则生成的随机数为 0、2、4、6、8、10 (Step size, if it is 0, the step size is not limited, assuming that the minimum is 0, the maximum is 10, and the step is 2, then the generated random number is 0, 2, 4, 6, 8, 10)
 * @returns {number[]} 随机数数组 (Random number array)
 */
const unique = (maximum: number, minimum: number = 0, count: number = 10, step: number = 0): number[] => {
  // 当最小值大于最大值时，交换最大值和最小值
  [maximum, minimum] = ensureMinLessThanMax(maximum, minimum);

  const maxD = new Decimal(maximum);
  const minD = new Decimal(minimum);
  const stepD = new Decimal(step);

  // 当步长大于最大值和最小值之差时，只返回最小值
  if (stepD.abs().greaterThan(maxD.minus(minD))) {
    return [minD.toNumber()];
  }

  let possibleCountD: Decimal;
  if (stepD.eq(0)) {
    // 当步长为0时，根据小数位数来计算可能的唯一数数量
    const scale = Math.pow(10, Math.max(maxD.dp(), minD.dp()));
    possibleCountD = maxD.minus(minD).mul(scale).plus(1);
  } else {
    // 当步长不为0时，计算以步长为间隔的唯一数数量
    possibleCountD = maxD.minus(minD).dividedBy(stepD).ceil().plus(1);
  }

  // 调整生成随机数的数量
  const adjustedCount = Math.min(count, possibleCountD.toNumber());

  const possibleValues = new Set<number>();
  while (possibleValues.size < adjustedCount) {
    const randomValue = stepFn(maxD.toNumber(), minD.toNumber(), stepD.toNumber());
    possibleValues.add(randomValue);
  }

  return Array.from(possibleValues);
};

export default unique;
