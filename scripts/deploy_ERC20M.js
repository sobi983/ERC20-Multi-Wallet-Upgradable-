const { ethers, upgrades} = require("hardhat");

const main = async ()=>{

const ERC20 = await ethers.getContractFactory("AURAMultiSig")
const erc20 = await upgrades.deployProxy(ERC20, ["sohaib", "S", ["0x2D0a7B531eA68a07e84906dc87F2f92DF725d3De","0x7B6FBF1F73fa7D33b9132d33a5a5AC125a823383","0x20506A4346eBF8331119e41C68DFE08565b4F2a9"],2 ],{
    initializer: "initialize"
})

await erc20.deployed()
console.log(erc20.address)



}


main()