import styles from './App.module.css';
import IsaLoanCalculator from '../IsaLoanCalculator';

const App = () => {
  return (
    <div>
      <div className={styles.container}>
        <IsaLoanCalculator />
      </div>
    </div>
  );
}

export default App;
 