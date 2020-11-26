import axios from 'axios';

const API = 'https://api.wetradeup.com';

export const getProgramTerms = async () => {
  try {
    const { data } = await axios.get(`${API}/terms`);
    return data;
  }
  catch (err) {
    console.log(err);
    return {};
  }
};

export const calculateLoanMonthlyPayments = async ({ principal, interest, months }) => {
  try {
    const { data: { payment } } = await axios.post(
      `${API}/calculator`,
      { principal, interest, months },
    );
    return payment;
  } catch (err) {
    console.log(err);
    return false;
  }
};
