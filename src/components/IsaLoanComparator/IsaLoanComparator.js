import { useState, useEffect } from 'react';

import styles from './IsaLoanComparator.module.css';
import Comparison from './Comparison';
import MonthlyComparison from './MonthlyComparison';
import Brand from '../Brand';
import { getProgramTerms, calculateLoanMonthlyPayments } from '../../util/api';
import calculateIsaMonthlyPayments from '../../util/calculateIsaMonthlyPayments';

const IsaLoanComparator = () => {
  const [programTerms, setProgramTerms] = useState({});
  const [selectedProgram, setSelectedProgram] = useState('');
  const [isEmployed, setIsEmployed] = useState(true);
  const [projectedSalary, setProjectedSalary] = useState(0);

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
    if (programTerms[selected]) setProjectedSalary(Number.parseFloat(programTerms[selected].typical_salary));
  };

  const handleChangeSalary = event => {
    setProjectedSalary(event.target.value);
  };

  
  const activeProgram = programTerms[selectedProgram];
  let isaMonthlyPayments = [0];
  const salary = isEmployed ? projectedSalary : 0;
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
      <div className={styles.controls}>
        <Brand />

        <h2>ISA and Loan Calculator</h2>

        <h3 className={styles.label}>Select a program</h3>
        <select className={styles.programSelect} onChange={handleSelectProgram}>
          <option value=''>-</option>
          {Object.keys(programTerms).map(programName => (
            <option value={programName}>{programName}</option>
          ))}
        </select>

        {selectedProgram !== '' && (
          <div>
            <div className={styles.info}>
              <div className={styles.infoLine}>
                <p className={styles.infoLabel}>Tuition </p>
                <p className={styles.infoValue}>${programTerms[selectedProgram].tuition}</p>
              </div>
              <div className={styles.infoLine}>
                <p className={styles.infoLabel}>Term Length </p>
                <p className={styles.infoValue}>{programTerms[selectedProgram].isa_length} months</p>
              </div>
            </div>

            <div>
              <input type='checkbox' checked={isEmployed} onClick={() => { setIsEmployed(!isEmployed) }} />
              <label>Employed?</label>
            </div>

            {isEmployed && (
              <div>
                <h3 className={styles.label}>Projected Salary</h3>
                <div className={styles.salaryInput}>
                  <label>$</label>
                  <input className={styles.salary} type='text' value={projectedSalary} onChange={handleChangeSalary} />
                </div>
                <p className={styles.salarySubtext}>Typical salary: ${programTerms[selectedProgram].typical_salary}</p>
              </div>
            )}            
          </div>
        )}
      </div>

      {selectedProgram !== '' && (
        <>          
          <Comparison program={activeProgram} isaMonthlyPayments={isaMonthlyPayments} />
          <MonthlyComparison salary={salary} isaMonthlyPayments={isaMonthlyPayments} loanMonthlyPayment={activeProgram.loan_monthly_payment} />
        </>
      )}
    </div>
  );
};

export default IsaLoanComparator;
