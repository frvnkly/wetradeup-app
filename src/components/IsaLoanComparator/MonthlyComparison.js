import styles from './MonthlyComparison.module.css';

const MonthlyComparison = ({ isaMonthlyPayments, loanMonthlyPayment }) => {
  return (
    <div className={styles.monthlyComparison}>
      <h3 className={styles.title}>Monthly Comparison</h3>

      <div className={styles.container}>
        <div className={styles.legend}>
          <p className={styles.month}>month</p>
          <p className={styles.isa}>ISA</p>
          <p className={styles.loan}>loan</p>
        </div>
        
        <div className={styles.months}>
          {isaMonthlyPayments.map((x, i) => (
            <div className={styles.tile}>
              <p className={styles.month}>{i + 1}</p>
              <p className={styles.isa}>{`$${x}`}</p>
              <p className={styles.loan}>{loanMonthlyPayment ? `$${loanMonthlyPayment}` : '...'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonthlyComparison;
