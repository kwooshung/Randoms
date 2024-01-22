import array from '.';

describe('@/string/array', () => {
  it('默认参数生成10个长度为10的随机字符串数组', () => {
    const result = array();
    expect(result).toHaveLength(10);
    result.forEach((str) => {
      expect(str).toHaveLength(10);
    });
  });

  it('生成3个随机字符串数组', () => {
    const result = array(3);
    expect(result).toHaveLength(3);
  });

  it('生成长度为5的随机字符串数组', () => {
    const result = array(10, 5);
    result.forEach((str) => {
      expect(str).toHaveLength(5);
    });
  });

  it('仅使用数字生成随机字符串数组', () => {
    const result = array(10, 10, '0');
    result.forEach((str) => {
      expect(str).toMatch(/^[0-9]+$/);
    });
  });

  it('仅使用小写字母生成随机字符串数组', () => {
    const result = array(10, 10, 'a');
    result.forEach((str) => {
      expect(str).toMatch(/^[a-z]+$/);
    });
  });

  it('仅使用大写字母生成随机字符串数组', () => {
    const result = array(10, 10, 'A');
    result.forEach((str) => {
      expect(str).toMatch(/^[A-Z]+$/);
    });
  });

  it('使用特殊字符生成随机字符串数组', () => {
    const result = array(10, 10, '!');
    result.forEach((str) => {
      expect(str).toMatch(/^[~!@#$%^&*()_+\-={}[\]|;:\`'",.<>?]+$/);
    });
  });

  // 测试组合字符集
  it('使用数字和小写字母生成随机字符串数组', () => {
    const result = array(10, 10, '0a');
    result.forEach((str) => {
      expect(str).toMatch(/^[0-9a-z]+$/);
    });
  });
});
