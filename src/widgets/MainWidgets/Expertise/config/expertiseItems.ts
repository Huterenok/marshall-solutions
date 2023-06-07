import { IExpertiseItem } from "../types";

import defi from "../ui/img/defi.svg";
import games from "../ui/img/games.svg";
import dao from "../ui/img/dao.svg";
import cexdex from "../ui/img/cexdex.svg";
import wallet from "../ui/img/wallet.svg";
import nft from "../ui/img/nft.svg";

export const expertiseItems: IExpertiseItem[] = [
  {
    title: "Decentralized Finance (DeFi)",
    subtitle:
      "Building DeFi platforms including borrowing, lending, staking, crop farming and and other financial instruments",
    icon: defi,
  },
  {
    title: "Games and Game services created on blockchain",
    subtitle: "Games and game services are created inside the blockchain",
    icon: games,
  },
  {
    title: "Decentralized Autonomous Organization (DAO)",
    subtitle:
      "Сreate platforms based on smart contracts for various business tasks",
    icon: dao,
    endOfLine: true,
  },
  {
    title: "CEX DEX",
    subtitle:
      "Development of decentralized exchanges with high performance and world-class security",
    icon: cexdex,
  },
  {
    title: "Cryptocurrency wallets",
    subtitle:
      "Tailor-made wallet development services for secure access to cryptocurrencies according to your business needs",
    icon: wallet,
  },
  {
    title: "Custom NFTs and marketplaces",
    subtitle: "Solutions for creating and distributing digital art",
    icon: nft,
    endOfLine: true,
  },
];
