import array from '.';

describe('@/number/array', () => {
  it('当只传入最大值时，应使用默认值生成随机数数组', () => {
    const result = array(10);
    expect(result).toHaveLength(10); // 默认长度为 10
    result.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(0); // 默认最小值为 0
      expect(num).toBeLessThanOrEqual(10);
    });
  });

  it('生成指定长度和范围的随机数数组', () => {
    const result = array(10, 1, 5);
    expect(result).toHaveLength(5);
    result.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(1);
      expect(num).toBeLessThanOrEqual(10);
    });
  });

  it('当步长非0时，生成步长间隔的随机数数组', () => {
    const result = array(10, 1, 6, 2);
    expect(result).toHaveLength(6);
    result.forEach((num) => {
      expect([1, 3, 5, 7, 9]).toContain(num);
    });
  });

  it('当未指定数量时，默认生成长度为10的数组', () => {
    const result = array(10, 1);
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
    const result = array(5, 0, 5, 0);
    expect(result).toHaveLength(5);
    result.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(0);
      expect(num).toBeLessThanOrEqual(5);
    });
  });

  it('当参数包含浮点数时，应生成浮点数数组', () => {
    const result = array(10.5, 1.1, 5);
    expect(result).toHaveLength(5);
    result.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(1.1);
      expect(num).toBeLessThanOrEqual(10.5);
      expect([
        1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8,
        4.9, 5.0, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 6.0, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9, 7.0, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6,
        8.7, 8.8, 8.9, 9.0, 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7, 9.8, 9.9, 10.0, 10.1, 10.2, 10.3, 10.4, 10.5
      ]).toContain(num);
    });
  });

  it('处理负数范围内的随机数生成', () => {
    const result = array(-1, -10, 5);
    expect(result).toHaveLength(5);
    result.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(-10);
      expect(num).toBeLessThanOrEqual(-1);
    });
  });

  it('当最小值大于最大值时，应当交换两个值，再生成随机数', () => {
    const result = array(1, 10);
    expect(result).toHaveLength(10);
  });

  it('当步长大于最大值与最小值之间的差时，应只返回最小值', () => {
    const result = array(10, 0, 5, 20);
    expect(result).toHaveLength(5);
    result.forEach((num) => {
      expect(num).toBe(0);
    });
  });

  it('当 count 为负数或 0 时，应返回空数组', () => {
    expect(array(10, 0, -1)).toEqual([]);
    expect(array(10, 0, 0)).toEqual([]);
  });
});
