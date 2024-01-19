import string from '.';

describe('@/string', () => {
  it('空字符串应当返回空字符串', () => {
    const result = string(0);
    expect(result).toBe('');
  });

  it('应当能够生成只包含数字的字符串', () => {
    const result = string(5, '0');
    expect(result).toMatch(/^[\d]{5}$/);
  });

  it('应当能够生成只包含数字的字符串', () => {
    const result = string(5, 'a0');
    expect(result).toMatch(/^[a-z\d]{5}$/);
  });

  it('应当能够生成只包含小写字母的字符串', () => {
    const result = string(11, 'a');
    expect(result).toMatch(/^[a-z]{11}$/);
  });

  it('应当能够生成只包含大写字母的字符串', () => {
    const result = string(12, 'A');
    expect(result).toMatch(/^[A-Z]{12}$/);
  });

  it('应当能够生成只包含特殊字符的字符串', () => {
    const result = string(10, '!');
    expect(result).toMatch(/^[~!@#$%^&*()_+\-={}\[\]|;:`'",.<>?]{10}$/);
  });

  it('应当能够生成包含所有类型字符的字符串', () => {
    const result = string(14);
    expect(result).toMatch(/^[a-zA-Z0-9~!@#$%^&*()_+\-={}\[\]|;:`'",.<>?]{14}$/);
  });

  it('应当能够生成只包含指定自定义字符的字符串', () => {
    const result = string(15, 'abc123');
    expect(result).toMatch(/^[abc123]{15}$/);
  });

  it('不传递 typeString 应当返回包含所有类型字符的字符串', () => {
    const result = string();
    expect(result).toMatch(/^[a-zA-Z0-9~!@#$%^&*()_+\-={}\[\]|;:`'",.<>?]{10}$/);
  });

  it('长度为1时应当能够正确生成字符串', () => {
    const result = string(1, 'a');
    expect(result).toMatch(/^[a-z]$/);
  });

  it('应当正确处理既非预定义类型也非自定义字符的情况', () => {
    const result = string(10, 'x');
    expect(result).toMatch(/^[x]{10}$/);
  });
});
