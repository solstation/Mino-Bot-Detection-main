import { getWalletAge } from "./src/web3/walletAge";
import { getWalletBalance } from "./src/web3/worth";

const address = '0x18c8DeCFD39ffE4023C9299013Ef8e530A068d4F';

export const main = async () => {
    console.log('== @ Start Testing ==');
    const balance = await getWalletBalance(address);
    const createdTime = await getWalletAge(address);
    console.log('Wallet balance:', balance);
    console.log('Created time:', createdTime);
}

main();