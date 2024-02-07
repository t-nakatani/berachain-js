const ethers = require("ethers");
require('dotenv').config();

async function main() {
    const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
    
    const blockNumber = await provider.getBlockNumber();
    console.log("Current block number:", blockNumber);
}

main().catch(console.error);
