import axios from 'axios';
import Web3 from 'web3';

import { scanApiKey } from './config';

export const getWalletBalance = async (address: string) => {
  try {
    const response = await axios.get(`https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${scanApiKey}`).then((res) => res.data);
    if (response.message !== "OK") {
      console.error(response);
      return;
    }
    return Web3.utils.fromWei(response.result);
  } catch (e) {
    console.error(e);
  }

}