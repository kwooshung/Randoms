import nonConsecutiveFn from '.';

describe('@/string/nonConsecutiveFn', () => {
  // 测试默认参数
  it('默认参数生成的字符串在连续调用时应非连续', () => {
    const generate = nonConsecutiveFn();
    const str1 = generate();
    const str2 = generate();

    expect(str1).not.toEqual(str2);
  });

  // 测试不同长度的字符串
  it('生成长度为5的非连续字符串', () => {
    const generate = nonConsecutiveFn(5);
    const str1 = generate();
    const str2 = generate();

    expect(str1).toHaveLength(5);
    expect(str2).toHaveLength(5);
    expect(str1).not.toEqual(str2);
  });

  // 测试不同类型的字符集
  it('使用数字生成非连续的随机字符串', () => {
    const generate = nonConsecutiveFn(10, '0');
    const str1 = generate();
    const str2 = generate();

    expect(str1).toMatch(/^[0-9]+$/);
    expect(str2).toMatch(/^[0-9]+$/);
    expect(str1).not.toEqual(str2);
  });

  it('使用小写字母生成非连续的随机字符串', () => {
    const generate = nonConsecutiveFn(10, 'a');
    const str1 = generate();
    const str2 = generate();

    expect(str1).toMatch(/^[a-z]+$/);
    expect(str2).toMatch(/^[a-z]+$/);
    expect(str1).not.toEqual(str2);
  });

  it('使用大写字母生成非连续的随机字符串', () => {
    const generate = nonConsecutiveFn(10, 'A');
    const str1 = generate();
    const str2 = generate();

    expect(str1).toMatch(/^[A-Z]+$/);
    expect(str2).toMatch(/^[A-Z]+$/);
    expect(str1).not.toEqual(str2);
  });

  it('使用特殊字符生成非连续的随机字符串', () => {
    const generate = nonConsecutiveFn(10, '!');
    const str1 = generate();
    const str2 = generate();

    expect(str1).toMatch(/^[~!@#$%^&*()_+\-={}[\]|;:`'",.<>?]+$/);
    expect(str2).toMatch(/^[~!@#$%^&*()_+\-={}[\]|;:`'",.<>?]+$/);
    expect(str1).not.toEqual(str2);
  });

  // 测试组合字符集
  it('使用数字和小写字母生成非连续的随机字符串', () => {
    const generate = nonConsecutiveFn(10, '0a');
    const str1 = generate();
    const str2 = generate();

    expect(str1).toMatch(/^[0-9a-z]+$/);
    expect(str2).toMatch(/^[0-9a-z]+$/);
    expect(str1).not.toEqual(str2);
  });
});
