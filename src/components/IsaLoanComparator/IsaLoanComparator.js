import { useState, useEffect } from 'react';

import styles from './IsaLoanComparator.module.css';
import { getProgramTerms, calculateLoanMonthlyPayments } from '../../util/api';
import calculateIsaMonthlyPayments from '../../util/calculateIsaMonthlyPayments';

const IsaLoanComparator = () => {
  const [programTerms, setProgramTerms] = useState({});
  const [selectedProgram, setSelectedProgram] = useState('');
  const [salary, setSalary] = useState(0);

  // fetch program terms on component mount
  useEffect(() => {
    (async () => {
      const programTerms = await getProgramTerms();
      setProgramTerms(programTerms);
    })();
  }, []);

  // get loan monthly payment for selected program if not previously calculated
  useEffect(() => {
    (async () => {      
      if (selectedProgram !== '' && !programTerms[selectedProgram].loan_monthly_payment) {
        const principal = programTerms[selectedProgram].tuition;
        const interest = programTerms[selectedProgram].loan_interest;
        const months = programTerms[selectedProgram].isa_length;

        const monthlyPayment = await calculateLoanMonthlyPayments({ principal, interest, months });
        setProgramTerms(prevState => ({
          ...prevState,
          [selectedProgram]: {
            ...prevState[selectedProgram],
            loan_monthly_payment: monthlyPayment,
          },
        }));
      }
    })();
  }, [selectedProgram]);

  const handleSelectProgram = event => {
    const selected = event.target.value;
    setSelectedProgram(selected);
    setSalary(Number.parseFloat(programTerms[selected].typical_salary));
  };

  const handleChangeSalary = event => {
    setSalary(event.target.value);
  };

  
  const activeProgram = programTerms[selectedProgram];
  let isaMonthlyPayments = [0];
  if (activeProgram) {
    const tuition = Number.parseFloat(activeProgram.tuition);
    const take = Number.parseFloat(activeProgram.isa_take);
    const cap = Number.parseFloat(activeProgram.isa_cap);
    const threshold = Number.parseFloat(activeProgram.isa_threshold);
    const months = Number.parseFloat(activeProgram.isa_length);
    isaMonthlyPayments = calculateIsaMonthlyPayments({ tuition, salary, take, cap, threshold, months });
  }  

  return (
    <div>
      <h2>Select a program below</h2>
      <select onChange={handleSelectProgram}>
        <option value=''>-</option>

        {Object.keys(programTerms).map(programName => (
          <option value={programName}>{programName}</option>
        ))}
      </select>

      {selectedProgram !== '' && (
        <>
          <div>
            <p>Tuition: ${programTerms[selectedProgram].tuition}</p>
            <p>Typical Salary: ${programTerms[selectedProgram].typical_salary}</p>
            <p>Term Length: {programTerms[selectedProgram].isa_length}</p>

            <label>Salary</label>
            <input type='text' value={salary} onChange={handleChangeSalary} />
          </div>

          <div className={styles.comparison}>
            <div className={styles.isa}>
              <h3>ISA</h3>
              <p>Take: {(Number.parseFloat(programTerms[selectedProgram].isa_take) * 100).toFixed(2)}%</p>
              <p>Threshold: ${programTerms[selectedProgram].isa_threshold}</p>
              <p>{`$${isaMonthlyPayments[0]}`}</p>
            </div>

            <div className={styles.loan}>
              <h3>Loan</h3>
              <p>Interest: {(Number.parseFloat(programTerms[selectedProgram].loan_interest) * 100).toFixed(2)}%</p>
              <p>
                {programTerms[selectedProgram].loan_monthly_payment
                  ? `$${programTerms[selectedProgram].loan_monthly_payment}`
                  : '...'}
              </p>
            </div>            
          </div>

          <div className={styles.monthlyComparison}>
            <div className={styles.monthlyComparisonTile}>
              <p className={styles.monthlyComparisonMonth}>month</p>
              <p className={styles.monthlyComparisonIsa}>isa</p>
              <p className={styles.monthlyComparisonLoan}>loan</p>
            </div>

            {isaMonthlyPayments.map((x, i) => (
              <div className={styles.monthlyComparisonTile}>
                <p className={styles.monthlyComparisonMonth}>{i + 1}</p>
                <p className={styles.monthlyComparisonIsa}>{`$${x}`}</p>
                <p className={styles.monthlyComparisonLoan}>{activeProgram.loan_monthly_payment ? `$${activeProgram.loan_monthly_payment}` : '...'}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default IsaLoanComparator;
