import { useState, useEffect } from 'react';

import { getProgramTerms } from '../../util/api';

const IsaLoanComparator = () => {
  const [programTerms, setProgramTerms] = useState({});

  useEffect(() => {
    (async () => {
      const programTerms = await getProgramTerms();
      setProgramTerms(programTerms);
    })();
  }, []);

  return (
    <div>
      <h2>Select a program below</h2>

      <select>
        {Object.keys(programTerms).map(programName => (
          <option value={programName}>{programName}</option>
        ))}
      </select>
    </div>
  );
};

export default IsaLoanComparator;
