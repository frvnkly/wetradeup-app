import styles from './App.module.css';
import IsaLoanComparator from '../IsaLoanComparator';

const App = () => {
  return (
    <div>
      <div className={styles.container}>
        <IsaLoanComparator />
      </div>
    </div>
  );
}

export default App;
 