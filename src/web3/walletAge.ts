import axios from 'axios';
import { scanApiKey } from './config';

export const getWalletAge = async (address: string) => {
  try {
    const response = await axios.get(`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&page=1&sort=asc&apikey=${scanApiKey}`)
      .then((res) => res.data);

    if (response.message !== "OK") {
      console.error(response);
      return null;
    }

    if (response.result.length === 0) {
      console.error('No Transactinos!');
      return 0;
    }
    const startTime = new Date(parseInt(response.result[0].timeStamp) * 1000).toLocaleString();
    // console.log("First wallet transaction date", startTime);
    return startTime;
  } catch (e) {
    console.error(e);
    return null;
  }
}