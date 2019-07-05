import Web3 from 'web3';
import params from './contractParams';

const web3 = new Web3(Web3.givenProvider);
const contract = new web3.eth.Contract(params.abi, params.address);

export default {
  web3,
  contract,
};
