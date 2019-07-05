import store from '../store';
import staticCalls from './staticCalls';
import events from './events';

async function getBalance(address) {
  const userBalance = await staticCalls.balanceOf(address);
  store.dispatch('balance', userBalance);
}

async function getStakes(address) {
  const userStakes = await staticCalls.stakes(address);
  store.dispatch('stakes', userStakes);
}

async function getTransformDays(address) {
  const userTransformDays = await staticCalls.transformDays(address);
  store.dispatch('transformDays', userTransformDays);
}

function startUpdates() {
  getBalance();
  getStakes();
  getTransformDays();

  // TODO: Pick better events instead of wildcard
  events.subscribe('*', getBalance);
  events.subscribe('*', getStakes);
  events.subscribe('*', getTransformDays);
}

function stopUpdates() {
  events.removeAllListeners();
}

export default {
  startUpdates,
  stopUpdates,
};
