import { useState, useEffect } from 'react';

import styles from './IsaLoanComparator.module.css';
import Comparison from './Comparison';
import MonthlyComparison from './MonthlyComparison';
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
      <div className={styles.programSelector}>        
        <h2>Select a program below</h2>

        <select onChange={handleSelectProgram}>
          <option value=''>-</option>

          {Object.keys(programTerms).map(programName => (
            <option value={programName}>{programName}</option>
          ))}
        </select>

        {selectedProgram !== '' && (
          <div>
            <p>Tuition: ${programTerms[selectedProgram].tuition}</p>
            <p>Typical Salary: ${programTerms[selectedProgram].typical_salary}</p>
            <p>Term Length: {programTerms[selectedProgram].isa_length}</p>

            <label>$</label>
            <input type='text' value={salary} onChange={handleChangeSalary} />
          </div>
        )}
      </div>

      {selectedProgram !== '' && (
        <>          
          <Comparison program={activeProgram} isaMonthlyPayments={isaMonthlyPayments} />
          <MonthlyComparison isaMonthlyPayments={isaMonthlyPayments} loanMonthlyPayment={activeProgram.loan_monthly_payment} />
        </>
      )}
    </div>
  );
};

export default IsaLoanComparator;
