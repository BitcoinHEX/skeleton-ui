import store from '../store';
import staticCalls from './staticCalls';
import { subscribe, removeAllListeners } from './events';

async function getBalance(address) {
  const balance = await staticCalls.balanceOf(address);
  store.dispatch('balance', balance);
}

async function getStakes(address) {
  const stakes = await staticCalls.stakes(address);
  store.dispatch('stakes', stakes);
}

async function getTransformDays(address) {
  const transformDays = await staticCalls.transformDays(address);
  store.dispatch('transformDays', transformDays);
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

function stopUpdates() {
  removeAllListeners();
}

export {
  startUpdates,
  stopUpdates,
};

export default {
  startUpdates,
  stopUpdates,
};
