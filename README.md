# Introduction
Token and crowdsale smart contracts for the VIO token.

# Token
[CentrallyIssuedToken.sol](https://github.com/viomeio/vio-smart-contracts/blob/master/contracts/CentrallyIssuedToken.sol)
* The VIO ERC20 token that will be issued during the crowdsale. 
* Tokens will be transferable once the crowdsale has finished - either by the close date passing or once all the tokens have been sold.

# Crowdsale
[AllocatedCrowdsale.sol](https://github.com/viomeio/vio-smart-contracts/blob/master/contracts/AllocatedCrowdsale.sol)
* The crowdsale is based on the [TokenMarket AllocatedCrowdsale](https://github.com/TokenMarketNet/ico/blob/master/contracts/AllocatedCrowdsale.sol) contract.