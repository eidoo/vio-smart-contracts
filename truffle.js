// const HDWalletProvider = require("truffle-hdwallet-provider");
// const mnemonic = require('./secret').mnemonic;

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 4500000
    },
    'dev-shared': {
      host: 'wally-api-dev.undo.it',
      port: 8545,
      network_id: 8995,
      gas: 4500000,
      gasPrice: 25000000000
    },
    docker: {
      host: 'localhost',
      port: 8545,
      network_id: '8996', // in decimale Match any network id
      gas: 4700000
    }
    // ropsten: {
    //   provider: function() {
    //     return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/xwCPDI97po0h8KhXR5jI", 1)
    //   },
    //   from: "0xeb050f4892eb17e37dd950c5d1683546e4df0cc5",
    //   gasPrice: 10000000000,
    //   gas: 4500000,
    //   network_id: 3,
    // },
    // mainnet: {
    //   provider: function() {
    //     return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/xwCPDI97po0h8KhXR5jI ")
    //   },
    //   network_id: 1,
    //   gasPrice: 4000000000,
    //   gas: 4500000,
    //   from: '0xeb050f4892eb17e37dd950c5d1683546e4df0cc5'
    // }
  }
};
