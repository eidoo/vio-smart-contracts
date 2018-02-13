var FlatPricing = artifacts.require('./FlatPricing.sol');

module.exports = function (deployer, network) {
    var weiPerToken = 125000000000000;
    deployer.deploy(FlatPricing, weiPerToken);
};
