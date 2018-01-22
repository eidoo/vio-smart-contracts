var CentrallyIssuedToken = artifacts.require('./CentrallyIssuedToken.sol');
var FlatPricing = artifacts.require('./FlatPricing.sol');
var MultiSigWalletWithDailyLimit = artifacts.require('./MultiSigWalletWithDailyLimit.sol');
var AllocatedCrowdsale = artifacts.require('./AllocatedCrowdsale.sol');

const moment = require('moment');

module.exports = function (deployer, network) {
  if (network == 'develop') {
    const token = CentrallyIssuedToken.address;
    const pricing = FlatPricing.address;
    const wallet = MultiSigWalletWithDailyLimit.address;
    const start = moment.utc('2018-01-10 18:00').toDate().getTime() / 1000;
    const end = moment.utc('2018-01-16 10:31').toDate().getTime() / 1000;
    const min = 0;
    const beneficiary = web3.eth.accounts[0]; // Address that holds all of the tokens

    deployer.deploy(AllocatedCrowdsale, token, pricing, wallet, start, end, min, beneficiary);
  }
  if(network == 'ropsten' || network == 'infuraropsten'){
  } 
  if(network == 'mainnet' || network == 'infuramainnet'){
  }
};
