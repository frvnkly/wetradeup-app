import styles from './App.module.css';
import Header from '../Header';
import IsaLoanComparator from '../IsaLoanComparator';

const App = () => {
  return (
    <div>
      <div className={styles.container}>
        <Header />
        <IsaLoanComparator />
      </div>
    </div>
  );
}

export default App;
 