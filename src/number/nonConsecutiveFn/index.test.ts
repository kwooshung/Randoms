import nonConsecutiveFn from '.';

describe('@/number/nonConsecutiveFn', () => {
  it('当只传入最大值时，应使用默认的最小值和步长', () => {
    const max = 10;
    const defaultMin = 0; // 假设默认最小值为 0
    const generateRandom = nonConsecutiveFn(max);

    let prevNumber = generateRandom();
    let withinRange = true;
    let nonConsecutive = true;

    for (let i = 0; i < 100; i++) {
      const newNumber = generateRandom();
      if (newNumber < defaultMin || newNumber > max) {
        withinRange = false;
        break;
      }
      if (newNumber === prevNumber) {
        nonConsecutive = false;
        break;
      }
      prevNumber = newNumber;
    }

    expect(withinRange).toBeTruthy();
    expect(nonConsecutive).toBeTruthy();
  });

  it('生成的随机数应该是非连续的', () => {
    const min = 1;
    const max = 10;
    const generateRandom = nonConsecutiveFn(max, min);

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

    expect(nonConsecutive).toBeTruthy();
  });

  it('生成的随机数应在指定范围内', () => {
    const min = 1;
    const max = 5;
    const generateRandom = nonConsecutiveFn(max, min);

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

  it('应正确处理浮点数输入', () => {
    const min = 1.5;
    const max = 5.5;
    const generateRandom = nonConsecutiveFn(max, min);

    for (let i = 0; i < 100; i++) {
      const number = generateRandom();
      expect(number).toBeGreaterThanOrEqual(min);
      expect(number).toBeLessThanOrEqual(max);
    }
  });

  it('当使用步长时，应生成符合步长的随机数', () => {
    const min = 2;
    const max = 10;
    const step = 2;
    const generateRandom = nonConsecutiveFn(max, min, step);

    for (let i = 0; i < 50; i++) {
      const number = generateRandom();
      expect(number % step).toBe(0);
    }
  });

  it('当参数为一个整数和一个浮点数时，应正确生成随机数', () => {
    const min = 1;
    const max = 5.5;
    const generateRandom = nonConsecutiveFn(max, min);

    for (let i = 0; i < 100; i++) {
      const number = generateRandom();
      expect(number).toBeGreaterThanOrEqual(min);
      expect(number).toBeLessThanOrEqual(max);
    }
  });

  it('当最大值、最小值和步长都为浮点数时，应正确生成随机数', () => {
    const min = 0.5;
    const max = 5.5;
    const step = 0.5;
    const generateRandom = nonConsecutiveFn(max, min, step);

    for (let i = 0; i < 50; i++) {
      const number = generateRandom();
      expect(number).toBeGreaterThanOrEqual(min);
      expect(number).toBeLessThanOrEqual(max);
    }
  });

  it('当步长大于最大值和最小值之间的差值时，应始终返回最小值', () => {
    const min = 1;
    const max = 10;
    const step = 20;
    const generateRandom = nonConsecutiveFn(max, min, step);

    for (let i = 0; i < 10; i++) {
      expect(generateRandom()).toBe(min);
    }
  });

  it('边界值测试：当最大值和最小值接近JavaScript数值上限或下限时', () => {
    const min = Number.MIN_SAFE_INTEGER;
    const max = Number.MAX_SAFE_INTEGER;
    const generateRandom = nonConsecutiveFn(max, min);

    for (let i = 0; i < 10; i++) {
      const number = generateRandom();
      expect(number).toBeGreaterThanOrEqual(min);
      expect(number).toBeLessThanOrEqual(max);
    }
  });
});
