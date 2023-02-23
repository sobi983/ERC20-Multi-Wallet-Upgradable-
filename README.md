In this Task I have created an ERC20 Upgradable Multi Wallet signature contract. Having a multiple owners will prevent hackers to take advantage of the contract. The contracts are deployed on a BSC testnet through hardhat and the contracts addresses are mentioned.


# To run this project:-
->npm install
->npx hardhat run --network testnet scripts/deploy_ERC20M.js
->npx hardhat verify --network testnet [Address]
->npx hardhat run --network testnet scripts/deploy_ERC20MUpgradable.js
->npx hardhat verify --network testnet [Address]


# Few points should be noted before development of the contract
1. Once an ERC20 contract is deployed then there is no way it could be UPGRADED.
2. It could only be upgraded while you are deploying the very first contract.

I am using OpenZeppelin Upgrdable Proxy approach to make my ERC20 contract Upgradable.


# https://docs.openzeppelin.com/upgrades-plugins/1.x/api-hardhat-upgrades#upgrade-proxy
Transparent Upgradable Proxy:- https://testnet.bscscan.com/address/0x9406147007a50c7220753ba95565e51d8729dc71#writeProxyContract
Proxy Admin:- https://testnet.bscscan.com/address/0x9d69aa383b4a23e4e3d9e04d5e55230e8a5f8f9b
ERC20:- https://testnet.bscscan.com/address/0xf85269b82290d4aa5966a7baa3bc1eedba00aef4
ERC20Upgradable:- https://testnet.bscscan.com/address/0xcae6300a20528f6ce6777079e9cc7b1b035daf14#writeContract


