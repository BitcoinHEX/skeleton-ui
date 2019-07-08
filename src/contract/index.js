import Web3 from 'web3';
import params from './contractParams';

class Contract {
  constructor(store) {
    this.web3 = new Web3(Web3.givenProvider);
    this.contract = new this.web3.eth.Contract(params.abi, params.address);

    this.store = store;

    this.updateBalance();
    this.updateStakes();
    this.updateTransformDays();

    // TODO: Pick better events instead of wildcard
    this.subscribe(this.updateBalance);
    this.subscribe(this.updateStakes);
    this.subscribe(this.updateTransformDays);
  }

  subscribe(callback) {
    this.contract.events.allEvents(callback);
  }

  async getBalance(address) {
    const balance = await this.contract.methods.balanceOf(address).call();
    return balance;
  }

  async getStakes(address) {

  }

  async getTransformDays() {

  }

  async updateBalance(address) {
    const userBalance = await this.getBalance(address);
    this.store.dispatch('updateBalance', userBalance);
  }

  async updateStakes(address) {
    const userStakes = await this.getStakes(address);
    this.store.dispatch('updateStakes', userStakes);
  }

  async updateTransformDays(address) {
    const userTransformDays = await this.getTransformDays(address);
    this.store.dispatch('updateTransformDays', userTransformDays);
  }
}

export default Contract;
