var CentrallyIssuedToken = artifacts.require('./CentrallyIssuedToken.sol');

module.exports = function (deployer, network) {
  var name = 'Vio';
  var symbol = 'VIO';
  var totalSupply = 1 * Math.pow(10, 9) * Math.pow(10, 18);
  var decimals = 18;
  
  if (network == 'development' || network == 'develop') {
    var owner = web3.eth.accounts[0];
  } if(network == 'ropsten' || network == 'mainnet'){
    var owner = '0xeb050f4892eb17e37dd950c5d1683546e4df0cc5';
  }

  deployer.deploy(CentrallyIssuedToken, owner, name, symbol, totalSupply, decimals);
};
