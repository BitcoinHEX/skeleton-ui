import store from '../store';
import { subscribe } from './events';

async function getBalance(address) {
  const balance = await this.dispatch.callConstant('balanceOf', [address]);
  store.dispatch('balance', balance);
}

async function getStakes(address) {
  const stakes = await this.dispatch.callConstant('staked', [address]);
  store.dispatch('stakes', stakes);
}

async function getTransformDays(address) {

}

function startUpdates() {
  getBalance();
  getStakes();
  getTransformDays();

  // TODO: Pick better events instead of wildcard
  subscribe('*', getBalance);
  subscribe('*', getStakes);
  subscribe('*', getTransformDays);
}

export default startUpdates;
