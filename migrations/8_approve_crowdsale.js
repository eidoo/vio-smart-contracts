var AllocatedCrowdsale = artifacts.require('./AllocatedCrowdsale.sol');
var CentrallyIssuedToken = artifacts.require('./CentrallyIssuedToken.sol');
var MultiSigWalletWithDailyLimit = artifacts.require('./MultiSigWalletWithDailyLimit.sol');
var NullFinalizeAgent = artifacts.require('./NullFinalizeAgent.sol');
var DefaultFinalizeAgent = artifacts.require('./DefaultFinalizeAgent.sol');

module.exports = function (deployer, network) {
    if (network == 'develop') {
        deployer.then(() => {
            Promise.all([CentrallyIssuedToken.deployed(), AllocatedCrowdsale.deployed()]).then(results => {
                var token = results[0];
                var crowdsale = results[1];
                token.approve(AllocatedCrowdsale.address, 1 * Math.pow(10, 9) * Math.pow(10, 18)); // Allow crowdsale to transfer 1 billion tokens
                token.setTransferAgent(MultiSigWalletWithDailyLimit.address, true);
                token.setTransferAgent(AllocatedCrowdsale.address, true);
                token.setTransferAgent(DefaultFinalizeAgent.address, true);
                token.setTransferAgent(web3.eth.accounts[0], true); // Allow beneficiary / owner to transfer tokens
                token.setTransferAgent(web3.eth.accounts[1], true); // Allow company to transfer tokens
                token.setReleaseAgent(DefaultFinalizeAgent.address);
                token.setUpgradeMaster(MultiSigWalletWithDailyLimit.address);
                crowdsale.setFinalizeAgent(DefaultFinalizeAgent.address);
                crowdsale.preallocate(web3.eth.accounts[1], 750000000, 0); // Preallocate company tokens as "full" tokens, i.e. no decimals
            });
        });
    }
    if(network == 'ropsten' || network == 'infuraropsten'){
    } 
    if(network == 'mainnet' || network == 'infuramainnet'){
    }
}