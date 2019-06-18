import store from '../store';

class Store {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  async getBalance(address) {
    const balance = await this.dispatch.callConstant('balanceOf', [address]);
    store.dispatch('balance', balance);
  }

  async getStakes(address) {
    const stakes = await this.dispatch.callConstant('staked', [address]);
    store.dispatch('stakes', stakes);
  }

  getTransformDays(address) {
    // Should really just listen for events here
  }
}

module.exports = Store;
