import eth from './eth';

function subscribe(event, callback) {
  eth.contract.on(event, callback);
}

function removeAllListeners(event) {
  eth.contract.removeAllListeners(event);
}

export default {
  subscribe,
  removeAllListeners,
};
