/**
 * 确保 最小值 < 最大值，如果不是则交换 (ensure minimum < maximum, if not, swap them)
 * @param {number} maximum 最大值 (Maximum value)
 * @param {number} minimum 最小值 (Minimum value)
 * @returns {[number, number]} 交换后的最小值和最大值 (The minimum and maximum values after the swap)
 */
const ensureMinLessThanMax = (maximum: number, minimum: number): [number, number] => (minimum > maximum ? [minimum, maximum] : [maximum, minimum]);

export default ensureMinLessThanMax;
