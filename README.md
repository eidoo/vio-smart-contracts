## Table of Contents
* [Introduction](#introduction)
* [Token](#token)
* [Crowdsale](#crowdsale)
* [Wallet](#wallet)

# Introduction
Token and crowdsale smart contracts for the VIO token.

# Token
[CentrallyIssuedToken.sol](https://github.com/GetDala/dala-smart-contracts/blob/master/contracts/CentrallyIssuedToken.sol)
* The Dala ERC20 token that will be issued during the crowdsale. 
* The token is [upgradeable](https://github.com/GetDala/dala-smart-contracts/blob/master/contracts/UpgradeableToken.sol), [pausable](https://github.com/GetDala/dala-smart-contracts/blob/master/contracts/PausableToken.sol), and [releasable](https://github.com/GetDala/dala-smart-contracts/blob/master/contracts/ReleasableToken.sol). 
* Tokens will be released for transfer once the crowdsale is complete, either by expiration or all tokens have been issued.

# Crowdsale
[AllocatedCrowdsale.sol](https://github.com/GetDala/dala-smart-contracts/blob/master/contracts/AllocatedCrowdsale.sol)
* The crowdsale is based on the [TokenMarket AllocatedCrowdsale](https://github.com/TokenMarketNet/ico/blob/master/contracts/AllocatedCrowdsale.sol) contract.

# Wallet
[MultiSigWalletWithDailyLimit.sol](https://github.com/GetDala/dala-smart-contracts/blob/master/contracts/MultiSigWalletWithDailyLimit.sol)
* The wallet is based on the [Gnosis MultiSigWallet](https://github.com/gnosis/MultiSigWallet/blob/master/contracts/MultiSigWalletWithDailyLimit.sol)
