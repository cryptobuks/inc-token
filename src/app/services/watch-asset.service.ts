import { Injectable } from "@angular/core";
import { tokenAddress, tokenDecimals, tokenImage, tokenSymbol } from "../shared/constants";
declare var Web3: any;
declare var window: any;

@Injectable({
  providedIn: 'root'
})
export class WatchAssetService {

  private account: string | undefined;

  constructor() {
  }

  checkMetaMask(): boolean {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      return true;
    }

    return false;
  }

  async getNetworkType(): Promise<any> {
    let networkType = undefined;

    try {
      networkType = await window.web3.eth.net.getNetworkType();
    } catch (err) {
      console.error(err);
    }

    return networkType;
  }

  async connectAccount(): Promise<any> {
    this.account = undefined;

    try {
      let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      this.account = accounts[0];
    } catch (err: any) {
      if (err.code === 4001) {
        // User rejected request
      } else {
        console.error(err);
      }
    }

    return Promise.resolve(this.account);
  }

  async addINCToken(): Promise<any> {
    let wasAdded = false;

    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      wasAdded = await window.web3.currentProvider.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: tokenImage, // A string url of the token logo
          },
        },
      });
    } catch (err) {
      console.error(err);
    }

    return Promise.resolve(wasAdded);
  }
}
