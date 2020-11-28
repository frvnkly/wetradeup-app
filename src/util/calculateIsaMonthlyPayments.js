const calculateIsaMonthlyPayments = ({ tuition, salary, take, cap, threshold, months }) => {
  const payments = new Array(months).fill(0);

  if (salary < threshold) return payments;

  const monthlyPayment = (salary / 12) * take;
  let amountToPay = Math.min(monthlyPayment * months, tuition * cap);
  let i = 0;
  while (i < payments.length && amountToPay > 0) {
    const payment = Math.min(monthlyPayment, amountToPay).toFixed(2);

    payments[i] = payment;
    amountToPay -= payment;
    i += 1;
  }
  
  return payments;
};

export default calculateIsaMonthlyPayments;
