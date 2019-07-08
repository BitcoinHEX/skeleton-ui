import Web3 from 'web3';
import params from './contractParams';

class Contract {
  constructor(store) {
    this.web3 = new Web3(Web3.givenProvider);
    this.contract = new this.web3.eth.Contract(params.abi, params.address);

    this.store = store;

    this.updateAddress();

    this.watchForUpdates(this.updateBalance.bind(this));
    this.watchForUpdates(this.updateStakes.bind(this));
    this.watchForUpdates(this.updateTransformDays.bind(this));
  }

  watchForUpdates(func) {
    func();
    this.contract.events.allEvents(func);
  }

  async updateBalance() {
    let userBalance = await this.contract.methods.balanceOf(
      window.ethereum.selectedAddress,
    ).call();
    userBalance = userBalance.toString().padStart(19, '0');
    userBalance = `${userBalance.substring(0, userBalance.length - 18)}.${userBalance.substring(userBalance.length - 18)}`;
    this.store.dispatch('updateBalance', userBalance);
  }

  async updateStakes() {
    const userStakes = await this.contract.methods.balanceOf(
      window.ethereum.selectedAddress,
    ).call();
    this.store.dispatch('updateStakes', userStakes.toString());
  }

  async updateTransformDays() {
    const userTransformDays = await this.contract.methods.balanceOf(
      window.ethereum.selectedAddress,
    ).call();
    this.store.dispatch('updateTransformDays', userTransformDays.toString());
  }

  async updateAddress() {
    const address = window.ethereum.selectedAddress;
    this.store.dispatch('updateAddress', address);
  }
}

export default Contract;
