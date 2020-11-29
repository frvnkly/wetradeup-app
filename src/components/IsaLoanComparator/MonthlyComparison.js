import styles from './MonthlyComparison.module.css';

const MonthlyComparison = ({ salary, isaMonthlyPayments, loanMonthlyPayment }) => {
  const income = salary / 12;

  const monthlyBreakdown = new Array();
  let i = 0;
  while (i < isaMonthlyPayments.length) {
    const year = new Array();
    for (let j = 0; j < 12; j++) {
      if (i >= isaMonthlyPayments.length) break;

      year.push({
        month: i + 1,
        isaPayment: `$${isaMonthlyPayments[i].toFixed(2)}`,
        isaRemainingIncome: `$${(income - isaMonthlyPayments[i]).toFixed(2)}`,
        loanPayment: loanMonthlyPayment ? `$${loanMonthlyPayment.toFixed(2)}` : '...',
        loanRemainingIncome: loanMonthlyPayment ? `$${(income - loanMonthlyPayment).toFixed(2)}` : '...',
      });

      i++;
    }
    monthlyBreakdown.push(year);
  }

  return (
    <div className={styles.monthlyComparison}>
      <h3 className={styles.title}>Monthly Comparison</h3>

      <div className={styles.container}>
        <div className={styles.legend}>
          <p className={styles.year} style={{ color: 'transparent' }}>year</p>
          <p className={styles.month}>month</p>
          <p className={styles.income}>income</p>
          <p className={styles.isa}>ISA</p>
          <p className={styles.isa}>remaining</p>
          <p className={styles.loan}>loan</p>
          <p className={styles.loan}>remaining</p>
        </div>
        
        <div className={styles.months}>
          {monthlyBreakdown.map((year, y) => (
            <div className={styles.monthlyBreakdown}>
              <p className={styles.year}>year {y + 1}</p>

              <div className={styles.months}>
                {year.map(m => (
                  <div className={styles.tile}>
                    <p className={styles.month}>{m.month}</p>
                    <p className={styles.income}>{`$${income.toFixed(2)}`}</p>
                    <p className={styles.isa}>{m.isaPayment}</p>
                    <p className={styles.isa}>{m.isaRemainingIncome}</p>
                    <p className={styles.loan}>{m.loanPayment}</p>
                    <p className={styles.loan}>{m.loanRemainingIncome}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonthlyComparison;
