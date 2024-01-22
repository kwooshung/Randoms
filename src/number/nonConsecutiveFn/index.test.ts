import nonConsecutiveFn from '.';

describe('@/number/nonConsecutiveFn', () => {
  it('生成的随机数应该是非连续的', () => {
    const min = 1;
    const max = 10;
    const generateRandom = nonConsecutiveFn(min, max);

    let prevNumber = generateRandom();
    let nonConsecutive = true;

    for (let i = 0; i < 100; i++) {
      const newNumber = generateRandom();
      if (newNumber === prevNumber) {
        nonConsecutive = false;
        break;
      }
      prevNumber = newNumber;
    }

    expect(nonConsecutive).toBe(true);
  });

  it('生成的随机数应在指定范围内', () => {
    const min = 1;
    const max = 5;
    const generateRandom = nonConsecutiveFn(min, max);

    for (let i = 0; i < 100; i++) {
      const number = generateRandom();
      expect(number).toBeGreaterThanOrEqual(min);
      expect(number).toBeLessThanOrEqual(max);
    }
  });

  it('当最小值等于最大值时，应总是返回该值', () => {
    const minMax = 3;
    const generateRandom = nonConsecutiveFn(minMax, minMax);

    for (let i = 0; i < 10; i++) {
      expect(generateRandom()).toBe(minMax);
    }
  });
});
