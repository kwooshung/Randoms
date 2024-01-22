import stepFn from '@/number/step';

/**
 * 生成指定数量的随机数数组 (Generate an array of random numbers with a specified number of)
 * @description 最大值、最小值 和 步长，有一个是小数，则结果为小数，否则为整数 (If the maximum value or the minimum value is a decimal, the result is a decimal, otherwise it is an integer)
 * @param {number} maximum 最大值 (Maximum value)
 * @param {number} [minimum = 0] 最小值 (Minimum value)
 * @param {number} [count = 10] 数组长度 (Array length)
 * @param {number} [step = 0] 步长，如果为 0 则不限制步长，假设 minimum 为 0，maximum 为 10，step 为 2，则生成的随机数为 0、2、4、6、8、10 (Step size, if it is 0, the step size is not limited, assuming that the minimum is 0, the maximum is 10, and the step is 2, then the generated random number is 0, 2, 4, 6, 8, 10)
 * @returns {number[]} 随机数数组 (Random number array)
 */
const array = (maximum: number, minimum: number = 0, count: number = 10, step: number = 0): number[] => Array.from({ length: count }, () => stepFn(maximum, minimum, step));

export default array;
