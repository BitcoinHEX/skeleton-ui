import HexUtils from 'hex-wallet-utils';

export class HexClient {

  constructor(vueStore){
    this.client = new HexUtils()
  }
}
