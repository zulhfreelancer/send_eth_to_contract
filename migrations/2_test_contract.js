// This file is not required if you just need to run `truffle test` command.
// Putting this here to make this project complete.
// This file will run when you run `truffle migrate` command.

var tc = artifacts.require("./TestContract.sol");

module.exports = function(deployer) {
  deployer.deploy(tc);
};
