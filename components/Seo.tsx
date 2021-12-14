import { NextSeo } from "next-seo";
import React from "react";

export default function Seo() {
  return (
    <NextSeo
      title="Proof of Diamond Hands"
      description="An NFT that proves the owner has diamond hands."
      canonical="https://proofofdiamondhands.com/"
      openGraph={{
        url: "https://proofofdiamondhands.com",
        title: "Proof of Diamond Hands",
        description: "An NFT that proves the owner has diamond hands.",
        images: [
          {
            url: "https://gateway.pinata.cloud/ipfs/QmQRfaWsF2mJ7hbhLy52JLbqxz4uXPrYEoFYthqn7K64ET",
            width: 600,
            height: 600,
            alt: "Diamond Hands",
            type: "image/svg",
          },
        ],
        site_name: "Proof of Diamond Hands",
      }}
      additionalLinkTags={[
        {
          rel: "icon",
          href: "/favicon.ico",
        },
      ]}
    />
  );
}
