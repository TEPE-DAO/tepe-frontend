import * as backend from "../backend/arc200/index.ARC200.mjs";
import { fromSome } from "../utils/common.js";
import { makeStdLib } from "../utils/reach.js";

const stdlib = makeStdLib();
const bn = stdlib.bigNumberify;
const bn2bi = stdlib.bigNumberToBigInt;

const ctcInfo = 249072786;

const getCTCInfo = () => ctcInfo;

const getEvents = (eventName: string) => async (addr: string, time?: any) => {
  const {
    e: { [eventName]: evt },
  } = (
    await stdlib.connectAccount({
      addr,
    })
  ).contract(backend, ctcInfo);
  const t = await stdlib.getNetworkTime();
  if (time) {
    await evt.seek(time);
  }
  const events: any = []; // TODO: type
  do {
    const event = await evt.nextUpToTime(t);
    if (!event) break;
    events.push(event);
  } while (events);
  return events;
};

const getMintEvents = getEvents("Mint");
const getTransferEvents = getEvents("Transfer");
const getApproveEvents = getEvents("Approve");

const getTokenMetadata = async (addr: string, tokenId: string) => {
  const { v } = (
    await stdlib.connectAccount({
      addr,
    })
  ).contract(backend, ctcInfo);
  const prepareString = (str: string) => {
    const index = str.indexOf("\x00");
    if (index > 0) {
      return str.slice(0, str.indexOf("\x00"));
    }
  };
  const name = prepareString(fromSome(await v.name(tokenId), ""));
  const symbol = prepareString(fromSome(await v.symbol(tokenId), ""));
  const decimals = bn2bi(fromSome(await v.decimals(tokenId), bn(0))).toString();
  const totalSupply = bn2bi(
    fromSome(await v.totalSupply(tokenId), bn(0))
  ).toString();
  const metadata = { name, symbol, decimals, totalSupply };
  return metadata;
};

const balanceOf = async (tokenId: string, addr: string) => {
  const acc = await stdlib.connectAccount({ addr });
  const ctc = acc.contract(backend, ctcInfo);
  return fromSome(await ctc.v.balanceOf(tokenId, addr), bn(0));
};

// code below from ChildService.ts

const state = async (token: any) => {
  const acc = await stdlib.getDefaultAccount();
  const ctc = acc.contract(backend, token.appId);
  const {
    v: { state: view },
  } = ctc;
  return await view();
};

const approve = async (
  token: any,
  addrFrom: string,
  addrSpender: string,
  amount: string
) => {
  const acc = await stdlib.connectAccount({ addr: addrFrom });
  const [lhs, rhs, rst] = amount.split(".");
  if (rst) throw Error("Invalid amount");
  const lhsBn = bn(parseInt(lhs)).mul(bn(10).pow(bn(token.decimals)));
  const rhsBn =
    token.decimals > 0
      ? bn((rhs ?? "0").slice(0, token.decimals).padEnd(token.decimals, "0"))
      : bn(0);
  const amountBn = token.decimals > 0 ? lhsBn.add(rhsBn) : lhsBn;
  const ctc = acc.contract(backend, token.appId);
  const {
    a: {
      U1: { approve },
    },
  } = ctc;
  return await approve(addrSpender, amountBn);
};

const deposit = async (
  token: any,
  addrFrom: string,
  addrTo: string,
  amount: string
) => {
  const acc = await stdlib.connectAccount({ addr: addrFrom });
  const [lhs, rhs, rst] = amount.split(".");
  if (rst) throw Error("Invalid amount");
  const lhsBn = bn(parseInt(lhs)).mul(bn(10).pow(bn(token.decimals)));
  const rhsBn =
    token.decimals > 0
      ? bn((rhs ?? "0").slice(0, token.decimals).padEnd(token.decimals, "0"))
      : bn(0);
  const amountBn = token.decimals > 0 ? lhsBn.add(rhsBn) : lhsBn;
  const ctc = acc.contract(backend, token.appId);
  const {
    a: {
      U2: { deposit },
    },
  } = ctc;
  return deposit(addrTo, amountBn);
};

const transfer = async (
  token: any,
  addrFrom: string,
  addrTo: string,
  amount: string
) => {
  console.log("here");
  console.log({ token, addrFrom, addrTo, amount });
  const acc = await stdlib.connectAccount({ addr: addrFrom });
  const [lhs, rhs, rst] = amount.split(".");
  if (rst) throw Error("Invalid amount");
  const lhsBn = bn(parseInt(lhs)).mul(bn(10).pow(bn(parseInt(token.decimals))));
  const rhsBn =
    parseInt(token.decimals) > 0
      ? bn(
          (rhs ?? "0")
            .slice(0, parseInt(token.decimals))
            .padEnd(parseInt(token.decimals), "0")
        )
      : bn(0);
  const amountBn = token.decimals > 0 ? lhsBn.add(rhsBn) : lhsBn;
  console.log({ amountBn });
  const ctc = acc.contract(backend, ctcInfo);
  const {
    a: { transfer },
  } = ctc;
  return transfer(token.tokenId, addrTo, amountBn);
};

const withdraw = async (
  token: any,
  addrFrom: string,
  addrTo: string,
  amount: string
) => {
  const acc = await stdlib.connectAccount({ addr: addrFrom });
  const [lhs, rhs, rst] = amount.split(".");
  if (rst) throw Error("Invalid amount");
  const lhsBn = bn(parseInt(lhs)).mul(bn(10).pow(bn(token.decimals)));
  const rhsBn =
    token.decimals > 0
      ? bn((rhs ?? "0").slice(0, token.decimals).padEnd(token.decimals, "0"))
      : bn(0);
  const amountBn = lhsBn.add(rhsBn);
  const ctc = acc.contract(backend, token.appId);
  const {
    a: {
      U2: { withdraw },
    },
  } = ctc;
  return withdraw(addrTo, amountBn);
};

export default {
  approve,
  deposit,
  transfer,
  withdraw,
  balanceOf,
  state,
  getMintEvents,
  getTransferEvents,
  getApproveEvents,
  getTokenMetadata,
  getCTCInfo,
};