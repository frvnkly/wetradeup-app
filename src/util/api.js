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
