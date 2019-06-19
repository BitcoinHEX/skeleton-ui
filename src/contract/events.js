import { contract } from './eth';

function subscribe(event, callback) {
  contract.on(event, callback);
}

function removeAllListeners(event) {
  contract.removeAllListeners(event);
}

export {
  subscribe,
  removeAllListeners,
};

export default {
  subscribe,
  removeAllListeners,
};
