import calculateIsaMonthlyPayments from '../calculateIsaMonthlyPayments';

test('returns an array of 0s if salary is 0', () => {
  const result = calculateIsaMonthlyPayments({ tuition: 6000, salary: 0, take: 0.05, cap: 1.5, threshold: 30000, months: 24 });

  expect(result).toHaveLength(24);
  for (const r of result) {
    expect(r).toBe(0);
  }
});

test('returns an array of 0s if salary is below threshold', () => {
  const result = calculateIsaMonthlyPayments({ tuition: 6000, salary: 29999.99, take: 0.05, cap: 1.5, threshold: 30000, months: 24 });

  expect(result).toHaveLength(24);
  for (const r of result) {
    expect(r).toBe(0);
  }
});

test('sum of payments does not exceed cap', () => {
  const result = calculateIsaMonthlyPayments({ tuition: 6000, salary: 100000, take: 0.05, cap: 1.5, threshold: 30000, months: 24 });

  const cap = 6000 * 1.5;
  const sum = result.reduce((acc, curr) => acc + curr);
  expect(sum).toBeLessThanOrEqual(cap);
});

test('correctly calculates payment per month', () => {
  const result = calculateIsaMonthlyPayments({ tuition: 6000, salary: 40000, take: 0.05, cap: 1.5, threshold: 30000, months: 24 });

  const monthlyPayment = (40000 / 12) * 0.05;
  for (const r of result) {
    expect(r).toBe(monthlyPayment);
  }
});
