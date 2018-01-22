var FlatPricing = artifacts.require('./FlatPricing.sol');

module.exports = function (deployer, network) {
  if (network == 'develop') {
    var weiPerToken = 1000; 
    deployer.deploy(FlatPricing, weiPerToken);
  }
  if(network == 'ropsten' || network == 'infuraropsten'){
  } 
  if(network == 'mainnet' || network == 'infuramainnet'){
  }
};
