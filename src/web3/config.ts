import { Alchemy, Network } from "alchemy-sdk";
import dotenv from 'dotenv';

dotenv.config();

//Get Wallet Balance and Token Price on all chains.
export const web3ApiKey = process.env.MORALIS_KEY ?? '';
console.log("Web3 API Key:", web3ApiKey);

export const scanApiKey = process.env.ETH_SCAN_KEY ?? '';
console.log("Scan API Key:", scanApiKey);

const config = {
  apiKey: process.env.ALCHEMY_KEY ?? "",
  network: Network.ETH_MAINNET,
};
export const alchemy = new Alchemy(config);