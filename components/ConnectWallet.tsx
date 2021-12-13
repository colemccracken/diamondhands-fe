import { getContract, getProvider } from "./contract";

export default function ConnectWallet() {
  const onButtonClick = async (window) => {
    if (!window.ethereum) {
      window.alert("No ethereum wallet detected");
      return;
    }
    const provider = getProvider(window);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractWithSigner = getContract(provider).connect(signer);
    console.log(contractWithSigner.signer);
    const txnResp =
      await contractWithSigner.I_Understand_How_This_NFT_Works_And_Realize_Its_A_Joke_And_Want_To_Mint_Anyway();
  };

  return (
    <button
      className="mt-6 bg-black hover:bg-gray-600 text-white text-3xl font-bold py-4 px-6 rounded disabled:opacity-50 disabled:cursor-not-allowed select-none w-48"
      onClick={() => onButtonClick(window)}
    >
      Mint
    </button>
  );
}
