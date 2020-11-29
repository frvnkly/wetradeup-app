import styles from './Comparison.module.css';

const Comparison = ({ program, isaMonthlyPayments }) => {
  const isaMonthlyPayment = isaMonthlyPayments[0];

  let isaMonths = 1;
  let sum = Number.parseFloat(isaMonthlyPayment);
  for (let i = 1; i < isaMonthlyPayments.length; i++) {
    if (isaMonthlyPayments[i] === isaMonthlyPayment) isaMonths++;
    sum += Number.parseFloat(isaMonthlyPayments[i]);
  }
  const isaTotal = sum.toFixed(2);

  const loanInterest = (Number.parseFloat(program.loan_interest) * 100).toFixed(2);
  const loanTotal = program.loan_monthly_payment
    ? `$${(program.loan_monthly_payment * program.isa_length).toFixed(2)}`
    : '...';

  return ( 
    <div className={styles.comparison}>
      <div className={styles.isa}>
        <div>
          <h3 className={styles.title}>ISA</h3>
          <div className={styles.info}>
            <div className={styles.infoLine}>
              <p className={styles.infoLabel}>Take </p>
              <p className={styles.infoValue}>{(Number.parseFloat(program.isa_take) * 100).toFixed(2)}%</p>
            </div>
            <div className={styles.infoLine}>
              <p className={styles.infoLabel}>Threshold </p>
              <p className={styles.infoValue}>${program.isa_threshold}</p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <p className={styles.subtitle}>Monthly Payment</p>
            <span className={styles.emphasis}>{`$${isaMonthlyPayments[0].toFixed(2)}`}</span>
            <span> for {isaMonths} months</span>        
          </div>

          <div>
            <p className={styles.subtitle}>Total</p>
            <span className={styles.emphasis}>{`$${isaTotal}`}</span>
          </div>
        </div>
      </div>

      <div className={styles.loan}>
        <div>
          <h3 className={styles.title}>Loan</h3>
          <div className={styles.info}>
            <div className={styles.infoLine}>
              <p className={styles.infoLabel}>Interest </p>
              <p className={styles.infoValue}>{loanInterest}%</p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <p className={styles.subtitle}>Monthly Payment</p>
            <span className={styles.emphasis}>
              {program.loan_monthly_payment
                ? `$${program.loan_monthly_payment}`
                : '...'}
            </span>
            <span> for {program.isa_length} months</span>
          </div>

          <div>
            <p className={styles.subtitle}>Total</p>
            <span className={styles.emphasis}>{loanTotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
