var AllocatedCrowdsale = artifacts.require('./AllocatedCrowdsale.sol');
var CentrallyIssuedToken = artifacts.require('./CentrallyIssuedToken.sol');
var FlatPricing = artifacts.require('./FlatPricing.sol');
//var MultiSigWallet = artifacts.require('./MultiSigWallet.sol');
var DefaultFinalizeAgent = artifacts.require('./DefaultFinalizeAgent.sol');
const assertJump = require('./helpers/assertJump');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const moment = require('moment');

const TOTAL_SUPPLY = 1 * Math.pow(10, 9) * Math.pow(10, 18);
const CROWDSALE_SUPPLY = 1 * Math.pow(10, 9) * Math.pow(10, 18);

const start = moment().add(-1, 'days').toDate().getTime() / 1000;
const end = moment().add(30, 'days').toDate().getTime() / 1000;
const min = 0;

var name = 'Vio';
var symbol = 'VIO';
var totalSupply = TOTAL_SUPPLY;
var decimals = 18;
var weiPerToken = 1000;

contract('AllocatedCrowdsale', function (accounts) {
    let crowdsale;
    let token;
    //let wallet;
    let pricing;
    let finalizer;
    let wallet = "0x97A3FC5Ee46852C1Cf92A97B7BaD42F2622267cC";
    beforeEach(function () {
        return Promise.resolve()
            .then(() => FlatPricing.new(weiPerToken))
            .then(_pricing => {pricing = _pricing;})
            .then(() => CentrallyIssuedToken.new(accounts[0], name, symbol, totalSupply, decimals))
            .then(_token => {token = _token;})
            .then(() => token.setTransferAgent(accounts[0], true))
            .then(() => AllocatedCrowdsale.new(token.address, pricing.address, wallet, start, end, min, accounts[0]))
            .then(_crowdsale => {crowdsale = _crowdsale;})
            .then(() => DefaultFinalizeAgent.new(token.address, crowdsale.address))
            .then(_finalizer => {finalizer = _finalizer;})
            .then(() => crowdsale.setFinalizeAgent(finalizer.address))
            .then(() => token.setReleaseAgent(finalizer.address))
            .then(() => token.setTransferAgent(finalizer.address, true))
            .then(() => token.setTransferAgent(crowdsale.address, true))
            .then(() => token.setTransferAgent(wallet, true))
            .then(() => token.approve(crowdsale.address, 1 * Math.pow(10, 9) * Math.pow(10, 18)));
    });
    it('should have the crowdsale contract authorized to transfer 1 billion tokens', function () {
        return token.allowance(accounts[0], crowdsale.address).then(allowance => {
            return assert.equal(allowance, CROWDSALE_SUPPLY, 'There were not 1 billion tokens authorized for transfer by the crowdsale');
        });
    });
    it('should forward all funds to the wallet', function () {
        return crowdsale.sendTransaction({ from: accounts[5], value: 1000000000000 }).then(() => {
            return getBalance(wallet);
        }).then(balance => {
            assert.equal(balance, 1000000000000);
        })

        function getBalance(address) {
            return new Promise((resolve, reject) => {
                web3.eth.getBalance(address, (error, result) => {
                    if (error) return reject(error);
                    return resolve(result);
                });
            });
        }
    });
});