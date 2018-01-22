var CentrallyIssuedToken = artifacts.require('./CentrallyIssuedToken.sol');

module.exports = function (deployer, network) {
  if (network == 'develop') {
    var owner = web3.eth.accounts[0]
  }
  if(network == 'ropsten' || network == 'infuraropsten'){
  } 
  if(network == 'mainnet' || network == 'infuramainnet'){
  }
  var name = 'Vio';
  var symbol = 'VIO';
  var totalSupply = 1 * Math.pow(10, 9) * Math.pow(10, 18);
  var decimals = 18;
  deployer.deploy(CentrallyIssuedToken, owner, name, symbol, totalSupply, decimals);
};
