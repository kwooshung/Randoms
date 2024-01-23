import unique from '.';

describe('@/string/unique', () => {
  // 测试默认参数
  it('默认参数生成10个长度为10的不重复随机字符串数组', () => {
    const result = unique();
    expect(new Set(result).size).toBe(10);
    result.forEach((str) => {
      expect(str).toHaveLength(10);
    });
  });

  // 测试不同的字符串长度
  it('生成长度为5的不重复随机字符串数组', () => {
    const result = unique(5);
    expect(new Set(result).size).toBe(10);
    result.forEach((str) => {
      expect(str).toHaveLength(5);
    });
  });

  // 测试不同类型的字符集
  it('仅使用数字生成不重复随机字符串数组', () => {
    const result = unique(10, '0');
    expect(new Set(result).size).toBe(10);
    result.forEach((str) => {
      expect(str).toMatch(/^[0-9]+$/);
    });
  });

  // 测试不同的数组长度
  it('生成3个不重复的随机字符串数组', () => {
    const result = unique(10, '*', 3);
    expect(new Set(result).size).toBe(3);
  });

  // 测试理论上限
  it('当达到组合的理论上限时应停止生成', () => {
    const result = unique(2, '01', 100); // 只有4种组合
    expect(new Set(result).size).toBeLessThanOrEqual(4);
  });

  // 测试字符集组合
  it('使用数字和小写字母生成不重复的随机字符串数组', () => {
    const result = unique(10, '0a');
    expect(new Set(result).size).toBe(10);
    result.forEach((str) => {
      expect(str).toMatch(/^[0-9a-z]+$/);
    });
  });
});
