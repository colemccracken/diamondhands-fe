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
            url: "https://gateway.pinata.cloud/ipfs/QmRdJ9DPFFEZJdfXfHoMoTdzgXP3DfQBL8E2uyHfMHfZ7c",
            width: 1200,
            height: 630,
            alt: "Diamond Hands",
            type: "image/jpeg",
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
