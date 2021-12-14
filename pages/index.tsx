import Head from "next/head";
import Image from "next/image";
import ConnectWallet from "../components/ConnectWallet";
import TotalSupply from "../components/TotalSupply";
import Header from "../components/Header";
import React from "react";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div>
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
      />
      <Head>
        <title>Diamond Hands</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-blue-100 bg-gradient-to-r">
        <Header></Header>
        <main className="container flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl ">Proof of Diamond Hands</h1>
          <div className="flex flex-wrap mt-6">
            <div className="mt-2">
              <Image
                src="/paper-hands.svg"
                alt="Paper Hands"
                width="256"
                height="256"
                className="rounded-full"
              ></Image>
            </div>

            <div className="ml-4 mr-4 items-center max-w-2xl ">
              <h4 className="p-2 text-2xl">Do you have 💎🤲 ???</h4>
              <p className="mt-2 mb-2 text-l max-w-sm">
                Free to mint. An experiment with NFTs that change over time.
                Please only mint if you understand how this works.
              </p>
              <div className="mt-4">
                <TotalSupply></TotalSupply>
                <ConnectWallet />
              </div>
            </div>
            <div className="mt-2">
              <Image
                src="/diamond-hands.svg"
                alt="Diamond Hands"
                width="256"
                height="256"
                className="rounded-full"
              ></Image>
            </div>
          </div>
        </main>
        <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
      </div>
    </div>
  );
}
