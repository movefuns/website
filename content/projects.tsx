import { ComponentProps } from "react";
import {
  ArrowsPointingOutIcon,
  CircleStackIcon,
  BoltIcon,
  CodeBracketIcon,
  ChartBarIcon,
  LockClosedIcon,
  ChartBarSquareIcon,
  KeyIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

export type Project = {
  name: string;
  description: string;
  Icon: (props: ComponentProps<"svg">) => JSX.Element;
  page: "all" | "home" | "docs";
};

export type Projects = Array<Project>;

const PROJECTS: Projects = [
  {
    name: "MoveFuns",
    description: `The Move commons library for support multiple Move chains.

    The goal of this library is to provide a common extension library for Move and to simplify the development of DApp SmartContracts on Move, like apache-commons library on Java or openzeppelin on Solidity.`,
    Icon: CodeBracketIcon,
    page: "all",
  },
  {
    name: "web3startrek",
    description: `The goal of the MoveFuns Web3 StarTrek is to build a learning community to explore the Web3 universe together. The name StarTrek stands for 'Star Trek' and pays homage to Star Trek.`,
    Icon: BoltIcon,
    page: "all",
  },
  {
    name: "Movetool",
    description: `A collection of Move ecosystem DApp tools. These tools provide a user-friendly interface to execute Move SmartContracts on the Move chains: starcoin, 0l, aptos, sui.    `,
    Icon: ChartBarIcon,
    page: "all",
  },
  {
    name: "Move by Example",
    description: `move-basic can run on all move public chains. aptos,starcoin, sui, 0L ... can only run on its own chain    `,
    Icon: LockClosedIcon,
    page: "home",
  },
  {
    name: "Move-JS",
    description: `Javascript version of the move language compiler and disassemble`,
    Icon: ChartBarSquareIcon,
    page: "home",
  },
  {
    name: "Move-Wasm",
    description: `wasm32-wasi version of the move language tools    `,
    Icon: CurrencyDollarIcon,
    page: "home",
  },
  {
    name: "Move-IDE",
    description: `balabala...`,
    Icon: KeyIcon,
    page: "all",
  },
];

export default PROJECTS;
