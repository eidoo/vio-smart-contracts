var CentrallyIssuedToken = artifacts.require('./CentrallyIssuedToken.sol');
var AllocatedCrowdsale = artifacts.require('./AllocatedCrowdsale.sol');
var DefaultFinalizeAgent = artifacts.require('./DefaultFinalizeAgent.sol');
const assertJump = require('./helpers/assertJump');

const TOTAL_SUPPLY = 1 * Math.pow(10, 9) * Math.pow(10, 8);
const CROWDSALE_SUPPLY = 1 * Math.pow(10, 9) * Math.pow(10, 18);

var name = 'Vio';
var symbol = 'VIO';
var totalSupply = TOTAL_SUPPLY;
var decimals = 18;

contract('CentrallyIssuedToken', function (accounts) {
    let token;
    beforeEach(function () {
        return CentrallyIssuedToken.new(accounts[0], name, symbol, totalSupply, decimals).then(_token => {
            token = _token;
        }).then(() => token.setTransferAgent(accounts[0], true)).then(()=>token.setReleaseAgent(accounts[0]));
    });
    it('should have 1 billion tokens in the primary account', function () {
        return token.balanceOf(accounts[0]).then(balance => {
            return assert.equal(balance, TOTAL_SUPPLY, 'There were not 1 billion tokens in the primary account');
        });
    });
    it('should be able to transfer', function () {
        return token.transfer(accounts[1], TOTAL_SUPPLY).then(() => token.balanceOf(accounts[0])).then(balance => {
            assert.equal(balance, 0);
        }).then(() => token.balanceOf(accounts[1])).then(balance => {
            assert.equal(balance, TOTAL_SUPPLY);
        });
    });
    it('token can be released by release agent', function () {
        return token.releaseTokenTransfer.sendTransaction({ from: accounts[0] }).then(() => assert.equal(true, true));
    });

    it('token cannot be released if not release agent', function(){
        return token.releaseTokenTransfer.sendTransaction({from:accounts[4]}).then(()=>assert.fail('should have thrown error')).catch(error=>assert.equal(true,true));
    });
});