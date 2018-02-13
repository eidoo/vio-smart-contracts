const wallet = require('../secret').fundsWallet;
var CentrallyIssuedToken = artifacts.require('./CentrallyIssuedToken.sol');
var FlatPricing = artifacts.require('./FlatPricing.sol');
var AllocatedCrowdsale = artifacts.require('./AllocatedCrowdsale.sol');

const moment = require('moment');

module.exports = function (deployer, network) {
  const token = CentrallyIssuedToken.address;
  const pricing = FlatPricing.address;
  
  const min = 0;
  

  if(network == 'development' || network == 'develop'){
    var beneficiary = web3.eth.accounts[0]; // Address that initially holds all of the tokens
    var start = moment.utc('2019-02-13 13:18').toDate().getTime() / 1000;
    var end = moment.utc('2019-02-14 10:31').toDate().getTime() / 1000;
  }
  
  if(network == 'ropsten'){
    var beneficiary = '0xeb050f4892eb17e37dd950c5d1683546e4df0cc5'; // Address that initially holds all of the tokens
    var start = moment.utc('2018-02-10 18:00').toDate().getTime() / 1000;
    var end = moment.utc('2018-02-16 10:31').toDate().getTime() / 1000;
  }

  if(network == 'mainnet') {
    var beneficiary = '0xeb050f4892eb17e37dd950c5d1683546e4df0cc5'; // Address that initially holds all of the tokens
    var start = moment.utc('2018-02-19 12:00').toDate().getTime() / 1000;
    var end = moment.utc('2018-03-02 12:00').toDate().getTime() / 1000;
  }
  
  deployer.deploy(AllocatedCrowdsale, token, pricing, wallet, start, end, min, beneficiary);
};
