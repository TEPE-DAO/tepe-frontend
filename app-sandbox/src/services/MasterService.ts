import { eventNames } from "process";
import * as backend from "../backend/drop/index.Master.mjs";
import { makeStdLib } from "../utils/reach.js";

/*
const { REACT_APP_CONTRACT_INFO_MASTER } = process.env;
const ctcInfoMaster = parseInt(REACT_APP_CONTRACT_INFO_MASTER || "0");
*/

const ctcInfoMaster = 208941015;


const stdlib = makeStdLib();
const bn2n = stdlib.bigNumberToNumber;
const fa = stdlib.formatAddress;

const getEvents = (eventName: string) => async (addr: string, time?: any) => {
  const {
    e: { [eventName]: evt },
  } = (
    await stdlib.connectAccount({
      addr,
    })
  ).contract(backend, ctcInfoMaster);
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

const getTransferEvents = getEvents("transfer");
const getReadyEvents = getEvents("ready");

// ? decode what event
const decodeEvent = (event: any) => {
  const { what, when } = event;
  const [[type, [ctcInfo, assetInfo, addrFrom, addrTo, amount]]] = what;
  const [fAddrFrom, fAddrTo] = [addrFrom, addrTo].map(fa);
  return {
    type,
    time: bn2n(when),
    appId: bn2n(ctcInfo),
    assetId: bn2n(assetInfo),
    addrFrom: fAddrFrom,
    addrTo: fAddrTo,
    amount: bn2n(amount),
  };
};

export default {
  getReadyEvents,
  getTransferEvents,
  decodeEvent,
};
