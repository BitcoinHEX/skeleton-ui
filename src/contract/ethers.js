const { AddressZero } = require('ethers/constants');
const { bigNumberify, hexZeroPad } = require('ethers/utils');
const { Contract } = require('ethers');
const BN = require('bn.js');

class Ethers {
  static get Contract() {
    return Contract;
  }

  static get AddressZero() {
    return AddressZero;
  }

  static get BN() {
    return BN;
  }

  static bigNumberify(n) {
    return bigNumberify(n);
  }

  static hexZeroPad(str, n) {
    return hexZeroPad(str, n);
  }
}

module.exports = Ethers;
