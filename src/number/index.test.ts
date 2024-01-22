import number from '.';

describe('@/number/index.ts', () => {
  it('应当生成指定范围内的随机数', () => {
    const min = 5;
    const max = 10;
    const result = number(max, min);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  it('当最小值等于最大值时，应当返回该值', () => {
    const minMax = 7;
    expect(number(minMax, minMax)).toBe(minMax);
  });

  it('应当正确处理浮点数范围', () => {
    const min = 5.5;
    const max = 5.9;
    const result = number(max, min);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  it('应当正确处理整数和浮点数范围 - 1', () => {
    const min = 0;
    const max = 5.9;
    const result = number(max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  it('应当正确处理整数和浮点数范围 - 2', () => {
    const min = 1;
    const max = 5.9;
    const result = number(max, min);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  it('边界值测试：当最小值 > 最大值时，应该交换值', () => {
    const result = number(5, 15);
    expect([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]).toContain(result);
  });

  it('边界值测试：边界值测试：当最大值和最小值非常接近时', () => {
    const result = number(0.0000000001);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(0.0000000001);
  });
});
