import ethers from 'ethers';
import { address, abi } from './contractParams';

// eslint-disable-next-line no-undef
const provider = ethers.providers.Web3Provider(web3.currentProvider);
const signer = provider.getSigner();
const contract = new ethers.Contract(address, abi, provider);

export {
  ethers,
  contract,
  signer,
};

export default {
  ethers,
  contract,
  signer,
};
