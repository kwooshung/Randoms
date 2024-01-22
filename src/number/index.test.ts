import number from '.';

describe('@/number/index.ts', () => {
  it('应当生成指定范围内的随机数', () => {
    const min = 5;
    const max = 10;
    const result = number(min, max);
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
    const result = number(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });
});
