import unique from '.';

describe('@/number/unique', () => {
  it('生成指定数量不重复的随机数数组', () => {
    const result = unique(0, 10, 5);
    expect(result).toHaveLength(5);
    expect(new Set(result).size).toBe(5); // 确保所有元素都是唯一的
  });

  it('处理步长为0的情况', () => {
    const result = unique(0, 10);
    expect(result).toHaveLength(10);
    expect(new Set(result).size).toBe(10); // 确保所有元素都是唯一的
  });

  it('处理步长非0的情况', () => {
    const result = unique(0, 10, 5, 2);
    expect(result).toHaveLength(5);
    result.forEach((num) => {
      expect(num % 2).toBe(0); // 确保每个元素都符合步长要求
    });
  });

  it('当请求的数量超出可能的最大数量时调整数组长度', () => {
    const result = unique(0, 10, 20); // 请求的数量超出最大可能数量
    expect(result).toHaveLength(11); // 最大数量为 0 到 10，共 11 个数字
  });

  it('处理最小值和最大值相等的情况', () => {
    const result = unique(5, 5, 5);
    expect(result).toEqual([5]);
  });

  it('处理步长大于最大值和最小值之差的情况', () => {
    const result = unique(0, 5, 3, 10);
    expect(result).toEqual([0]);
  });

  it('处理包含小数的最小值和最大值', () => {
    const result = unique(0.5, 5.5, 5);
    expect(result).toHaveLength(5);
    result.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(0.5);
      expect(num).toBeLessThanOrEqual(5.5);
    });
  });

  it('处理包含小数的步长', () => {
    const result = unique(0, 5, 5, 0.5);
    expect(result).toHaveLength(5);
    result.forEach((num) => {
      // 检查数字是否是 0.5 的倍数
      expect(num % 0.5).toBeLessThanOrEqual(Number.EPSILON);
    });
  });

  it('处理小数步长导致的不整除情况', () => {
    const result = unique(0, 5, 5, 0.3);
    // 在此情况下，无法确保精确的数组长度，因此只检查数组长度是否合理
    expect(result.length).toBeGreaterThan(0);
    expect(result.length).toBeLessThanOrEqual(5);
  });
});
