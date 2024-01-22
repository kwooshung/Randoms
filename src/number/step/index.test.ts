import step from '.';

describe('@/number/step', () => {
  it('当最小值和最大值相等时应该直接返回该值', () => {
    expect(step(5, 5)).toBe(5);
  });

  it('步长为0时应该生成最小值和最大值之间的随机数', () => {
    const result = step(0, 10);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(10);
  });

  it('步长大于最大值和最小值之差时应该返回最小值', () => {
    expect(step(0, 5, 10)).toBe(0);
  });

  it('生成指定步长的随机数', () => {
    const result = step(0, 10, 2);
    expect([0, 2, 4, 6, 8, 10]).toContain(result);
  });

  it('生成指定步长的随机整数', () => {
    const result = step(0, 100, 10);
    expect(result % 10).toBe(0);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(100);
  });

  it('生成指定步长的随机小数', () => {
    const result = step(0, 1, 0.1);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(1);
    expect(Math.round(result * 10) / 10).toBe(result); // 确保是0.1的倍数
  });

  it('生成的随机数应该在最小值和最大值之间，并且与最小值的差是步长的倍数', () => {
    const min = 2,
      max = 12,
      stepSize = 3;
    const result = step(min, max, stepSize);

    expect([2, 5, 8, 11]).toContain(result);
  });

  it('应该处理浮点步长', () => {
    const result = step(0, 1, 0.1);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(1);
    expect(Math.round(result * 10) / 10).toBe(result);
  });

  it('处理带有小数的步长', () => {
    const result = step(0.5, 5.5, 0.3);
    expect(result).toBeGreaterThanOrEqual(0.5);
    expect(result).toBeLessThanOrEqual(5.5);
    expect([0.5, 0.8, 1.1, 1.4, 1.7, 2.0, 2.3, 2.6, 2.9, 3.2, 3.5, 3.8, 4.1, 4.4, 4.7, 5.0, 5.3]).toContain(result);
  });

  it('应正确处理负数步长', () => {
    const result = step(-10, 0, 2);
    expect(result).toBeGreaterThanOrEqual(-10);
    expect(result).toBeLessThanOrEqual(0);
  });

  it('生成指定步长的随机小数', () => {
    const min = 3.14;
    const max = 10;
    const stepSize = 2;
    const result = step(min, max, stepSize);
    expect([3.14, 5.14, 7.14, 9.14]).toContain(result);
  });

  it('步长大于最大值和最小值之差时返回最小值', () => {
    const min = 1;
    const max = 6.00000000001;
    const stepSize = 10;
    expect(step(min, max, stepSize)).toBe(1);
  });

  it('当步长为负数且绝对值大于最大值和最小值之差时应返回最小值', () => {
    expect(step(-5, 0, -6)).toBe(-5);
  });
});
