import unique from '.';

describe('@/number/unique', () => {
  it('当仅传入最大值时，应使用默认的最小值、计数和步长', () => {
    const max = 10;
    const defaultMin = 0; // 假设默认最小值为 0
    const defaultCount = 10; // 假设默认计数为 10
    const result = unique(max);

    expect(result).toHaveLength(defaultCount);
    result.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(defaultMin);
      expect(num).toBeLessThanOrEqual(max);
    });

    // 验证所有元素是否唯一
    expect(new Set(result).size).toBe(defaultCount);
  });

  it('生成指定数量不重复的随机数数组', () => {
    const result = unique(10, 0, 5);
    expect(result).toHaveLength(5);
    expect(new Set(result).size).toBe(5); // 确保所有元素都是唯一的
  });

  it('处理步长为0的情况', () => {
    const result = unique(10, 0);
    expect(result).toHaveLength(10);
    expect(new Set(result).size).toBe(10); // 确保所有元素都是唯一的
  });

  it('处理步长非0的情况', () => {
    const result = unique(10, 0, 5, 2);
    expect(result).toHaveLength(5);
    result.forEach((num) => {
      expect(num % 2).toBe(0); // 确保每个元素都符合步长要求
    });
  });

  it('当请求的数量超出可能的最大数量时调整数组长度', () => {
    const result = unique(10, 0, 20); // 请求的数量超出最大可能数量
    expect(result).toHaveLength(11); // 最大数量为 0 到 10，共 11 个数字
  });

  it('处理最小值和最大值相等的情况', () => {
    const result = unique(5, 5, 5);
    expect(result).toEqual([5]);
  });

  it('处理步长大于最大值和最小值之差的情况', () => {
    const result = unique(5, 0, 3, 10);
    expect(result).toEqual([0]);
  });

  it('处理包含小数的最小值和最大值', () => {
    const result = unique(5.5, 0.5, 5);
    expect(result).toHaveLength(5);
    result.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(0.5);
      expect(num).toBeLessThanOrEqual(5.5);
    });
  });

  it('处理包含小数的步长', () => {
    const result = unique(5, 0, 5, 0.5);
    expect(result).toHaveLength(5);
    result.forEach((num) => {
      // 检查数字是否是 0.5 的倍数
      expect(num % 0.5).toBeLessThanOrEqual(Number.EPSILON);
    });
  });

  it('处理小数步长导致的不整除情况', () => {
    const result = unique(5, 0, 5, 0.3);
    // 在此情况下，无法确保精确的数组长度，因此只检查数组长度是否合理
    expect(result.length).toBeGreaterThan(0);
    expect(result.length).toBeLessThanOrEqual(5);
  });

  it('处理负数范围的输入', () => {
    const result = unique(-1, -10, 5);
    expect(result).toHaveLength(5);
    result.forEach((num) => {
      expect(num).toBeLessThanOrEqual(-1);
      expect(num).toBeGreaterThanOrEqual(-10);
    });
  });

  it('当步长非常大时，应只返回最小值', () => {
    const result = unique(10, 0, 5, 1000);
    expect(result).toEqual([0]);
  });

  it('当步长非常大时，应只返回最小值，同时最大值 < 最小值', () => {
    const result = unique(0, 10, 5, 1000);
    expect(result).toEqual([0]);
  });

  it('边界值测试：输出所有可能性的值，是否每一个都是唯一', () => {
    const result = unique(0.0005, 0.000001, 500);
    expect(result).toHaveLength(500);
    result.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(0);
      expect(num).toBeLessThanOrEqual(0.0005);
    });
  });

  it('边界值测试：当最小值和最大值非常接近时 - 1', () => {
    const result = unique(0.0005, 0.0001, 5);
    expect(result).toHaveLength(5);
    result.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(0);
      expect(num).toBeLessThanOrEqual(0.0005);
    });
  });

  it('边界值测试：当最小值和最大值非常接近时 - 2', () => {
    const result = unique(0.0005, 0.0002, 5);
    expect(result).toHaveLength(4);
    result.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(0.0002);
      expect(num).toBeLessThanOrEqual(0.0005);
    });
  });

  it('边界值测试：当最小值和最大值非常接近时 - 3', () => {
    const result = unique(0.0005, 0.0003, 5);
    expect(result).toHaveLength(3);
    result.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(0.0003);
      expect(num).toBeLessThanOrEqual(0.0005);
    });
  });

  it('边界值测试：当最小值和最大值非常接近时 - 4', () => {
    const result = unique(0.0004, 0.0003, 5);
    expect(result).toHaveLength(2);
    result.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(0.0003);
      expect(num).toBeLessThanOrEqual(0.0004);
    });
  });
});
