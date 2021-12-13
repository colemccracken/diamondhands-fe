import { useEffect, useState } from "react";
import { getContract, getProvider } from "./contract";
export default function TotalSupply() {
  const [totalMinted, setTotalMinted] = useState(0);
  useEffect(async () => {
    const contract = await getContract(getProvider(window));
    const total = await contract.totalSupply();
    setTotalMinted(total.toNumber());
  });

  return <p>{totalMinted} / 1000 minted </p>;
}
