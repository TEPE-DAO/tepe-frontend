import * as backend from "../backend/sale/index.Master.mjs";
import * as childBackend from "../backend/sale/index.Child.mjs";
import { makeStdLib } from "../utils/reach.js";
import { zeroAddress } from "../utils/algorand.js";
import { fromSome } from "../utils/common.js";

/*
const { REACT_APP_CONTRACT_INFO_MASTER } = process.env;
const ctcInfoMaster = parseInt(REACT_APP_CONTRACT_INFO_MASTER || "0");
*/

const ctcInfoMaster = 215234234;

const stdlib = makeStdLib();
const bn2n = stdlib.bigNumberToNumber;
const fa = stdlib.formatAddress;
const fc = stdlib.formatCurrency;

const claim = async (
  addr: any,
  appId: any,
  addrTo: any,
  addrFrom: any,
  amount: any
) => {
  const ctc = (
    await stdlib.connectAccount({
      addr,
    })
  ).contract(childBackend, appId);
  const {
    a: {
      U2: { claim },
    },
  } = ctc;
  await claim(addrTo, addrFrom, amount);
};

const subscribe = async (addr: any, appId: any, addrProvider: any) => {
  const ctc = (
    await stdlib.connectAccount({
      addr,
    })
  ).contract(childBackend, appId);
  const {
    a: {
      U2: { subscribe },
    },
  } = ctc;
  await subscribe(addrProvider);
};

const buy = async (
  addr: any,
  appId: any,
  addr_from: any,
  addr_reserve: any,
  pmt: any
) => {
  const ctc = (
    await stdlib.connectAccount({
      addr,
    })
  ).contract(childBackend, appId);
  const {
    a: {
      U2: { buy },
    },
  } = ctc;
  await buy(addr_from, addr_reserve, pmt);
};

const deleteSale = async (
  addr: any,
  appId: any,
  addr_from: any,
  addr_reserve: any
) => {
  const ctc = (
    await stdlib.connectAccount({
      addr,
    })
  ).contract(childBackend, appId);
  const {
    a: {
      A: { deleteSale },
    },
  } = ctc;
  await deleteSale(addr_from, addr_reserve);
};

const deletePurchase = async (
  addr: any,
  appId: any,
  addr_from: any,
  addr_reserve: any,
  addr_to: any
) => {
  const ctc = (
    await stdlib.connectAccount({
      addr,
    })
  ).contract(childBackend, appId);
  const {
    a: {
      A: { deletePurchase },
    },
  } = ctc;
  await deletePurchase(addr_from, addr_reserve, addr_to);
};

const closeChild = async (addr: any, appId: any) => {
  const ctc = (
    await stdlib.connectAccount({
      addr,
    })
  ).contract(childBackend, appId);
  const {
    a: {
      C: { close },
    },
  } = ctc;
  await close();
};

const closeMaster = async (addr: any, appId: any) => {
  const ctc = (
    await stdlib.connectAccount({
      addr,
    })
  ).contract(backend, ctcInfoMaster);
  const {
    a: {
      Master: { close },
    },
  } = ctc;
  await close();
};

export const decodeSubscription = (subscription: any) =>
  ((subscription: any) => {
    const [remainingBn, lastTimeBn, active] = subscription;
    const remaining = bn2n(remainingBn);
    const lastTime = bn2n(lastTimeBn);
    return { remaining, lastTime, active };
  })(fromSome(subscription, [0, 0, false]));

const subscription = async (
  appId: any,
  addrProvider: any,
  addrSubscriber: any
) => {
  const ctc = (
    await stdlib.connectAccount({
      addr: zeroAddress,
    })
  ).contract(childBackend, appId);
  const {
    v: { subscription: view },
  } = ctc;
  return await view(addrProvider, addrSubscriber);
};

const state = async (appId: any, addr: any) => {
  const ctc = (
    await stdlib.connectAccount({
      addr,
    })
  ).contract(childBackend, appId);
  const {
    v: { state: view },
  } = ctc;
  return await view();
};

const getEvents = (eventName: string) => async (addr: string, time?: any) => {
  const ctc = (
    await stdlib.connectAccount({
      addr,
    })
  ).contract(backend, ctcInfoMaster);
  console.log({ ctc });
  const {
    e: { [eventName]: evt },
  } = ctc;
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

const getAnnounceEvents = getEvents("announce");

// ? decode what event
const decodeEvent = (eventName: string) => (event: any) => {
  // TODO type me
  switch (eventName) {
    case "announce": {
      console.log({ event });
      const { what, when } = event;
      const [
        [
          ctcInfo,
          tokenCtcInfo,
          addrSeller,
          addrReserve,
          assetId,
          tokenAmount,
          price,
        ],
      ] = what;
      const dEvent = {
        time: bn2n(when),
        appId: bn2n(ctcInfo),
        tokenAppId: bn2n(tokenCtcInfo),
        assetId: bn2n(assetId),
        sellerAddress: fa(addrSeller),
        reserveAddress: fa(addrReserve),
        tokenAmount: bn2n(tokenAmount),
        price: fc(price, 6),
      };
      return dEvent;
    }
    default: {
      return {};
    }
  }
};

export default {
  Child: {
    state,
    subscribe,
    claim,
    subscription,
    buy,
    deleteSale,
    deletePurchase,
    close: closeChild,
  },
  Master: {
    getEvents,
    decodeEvent,
    close: closeMaster,
  },
};
