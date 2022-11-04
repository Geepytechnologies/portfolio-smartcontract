const hre = require("hardhat");

async function main() {
  
    const Portfolio = await hre.ethers.getContractFactory("portfolio");
    const myportfolio = await Portfolio.deploy("Geepy",25);
  
    await myportfolio.deployed();
    const name = await myportfolio.getName();
    const age = await myportfolio.getAge();
    console.log(name, age.toNumber());
  
    console.log(
      `Portfolio deployed to ${myportfolio.address}`
    );
  }
  
 
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });