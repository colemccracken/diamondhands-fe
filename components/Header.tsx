import React from "react";
import SocialIcon from "./SocialIcon";

function Header() {
  return (
    <header className="flex flex-row-reverse py-8 justify-between ">
      <SocialIcon
        link="https://twitter.com/nft_kraken/status/1461737021550960644?s=20"
        imageSrc="/twitter.png"
      />
      <SocialIcon
        link="https://opensea.io/collection/proof-of-diamond-hands"
        imageSrc="/opensea.png"
      />
      <SocialIcon
        link="https://etherscan.io/address/0x08d102684b82ba25c10824b0f0f321f6407f6e9c#writeContract"
        imageSrc="/etherscan-logo-circle.png"
      />
    </header>
  );
}

export default Header;
