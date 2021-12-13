import { ethers } from "ethers";
import abi from "./abi.json";

const nftAddress = "0x08d102684B82BA25C10824b0f0F321F6407F6E9C";
const nftAbi = abi;

const getProvider = (window) => {
  if (window?.ethereum) {
    return new ethers.providers.Web3Provider(window.ethereum);
  } else {
    return new ethers.providers.JsonRpcProvider(
      "https://eth-mainnet.alchemyapi.io/v2/aeqfKZW3sz-8pu5JCtA1Sz_0HOcu7hD9"
    );
  }
};

const getContract = (provider) => {
  const nftContract = new ethers.Contract(nftAddress, nftAbi, provider);
  return nftContract;
};

export { getProvider, getContract };
