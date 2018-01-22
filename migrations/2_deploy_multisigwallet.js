var MultiSigWalletWithDailyLimit = artifacts.require('./MultiSigWalletWithDailyLimit.sol');

module.exports = function (deployer, network) {
  if (network == 'develop') {
    deployer.deploy(MultiSigWalletWithDailyLimit, ['0x28e0d95dc99762e4a664edb3866236571d073063'], 1, 0);
  }
  if(network == 'ropsten' || network == 'infuraropsten'){
  } 
  if(network == 'mainnet' || network == 'infuramainnet'){
  }
};