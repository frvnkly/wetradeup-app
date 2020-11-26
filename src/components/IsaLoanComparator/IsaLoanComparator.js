import { useState, useEffect } from 'react';

import styles from './IsaLoanComparator.module.css';
import { getProgramTerms, calculateLoanMonthlyPayments } from '../../util/api';

const IsaLoanComparator = () => {
  const [programTerms, setProgramTerms] = useState({});
  const [selectedProgram, setSelectedProgram] = useState('');

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
        console.log(monthlyPayment);
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
    setSelectedProgram(event.target.value);
  };

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
          </div>

          <div className={styles.comparison}>
            <div className={styles.isa}>
              <h3>ISA</h3>
              <p>Take: {(Number.parseFloat(programTerms[selectedProgram].isa_take) * 100).toFixed(2)}%</p>
              <p>Threshold: ${programTerms[selectedProgram].isa_threshold}</p>
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
        </>
      )}
    </div>
  );
};

export default IsaLoanComparator;
