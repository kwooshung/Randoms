import array from '.';

describe('@/number/array', () => {
  it('生成指定长度和范围的随机数数组', () => {
    const result = array(1, 10, 5);
    expect(result).toHaveLength(5);
    result.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(1);
      expect(num).toBeLessThanOrEqual(10);
    });
  });

  it('当步长非0时，生成步长间隔的随机数数组', () => {
    const result = array(0, 10, 6, 2);
    expect(result).toHaveLength(6);
    result.forEach((num) => {
      expect(num % 2).toBe(0);
    });
  });

  it('当未指定数量时，默认生成长度为10的数组', () => {
    const result = array(1, 10);
    expect(result).toHaveLength(10);
  });

  it('当最小值等于最大值时，数组中所有元素相同', () => {
    const result = array(5, 5, 5);
    expect(result).toHaveLength(5);
    result.forEach((num) => {
      expect(num).toBe(5);
    });
  });

  it('当步长为0时，生成最小值和最大值之间的随机数数组', () => {
    const result = array(0, 5, 5, 0);
    expect(result).toHaveLength(5);
    result.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(0);
      expect(num).toBeLessThanOrEqual(5);
    });
  });
});
