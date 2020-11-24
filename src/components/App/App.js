import styles from './App.module.css';
import Header from '../Header';
import IsaLoanComparator from '../IsaLoanComparator';

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <IsaLoanComparator />
    </div>
  );
}

export default App;
 