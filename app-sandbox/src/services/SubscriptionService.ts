import * as backend from "../backend/subscription/index.Master.mjs";
import * as childBackend from "../backend/subscription/index.Child.mjs";
import { makeStdLib } from "../utils/reach.js";
import { zeroAddress } from "../utils/algorand.js";
import { fromSome } from "../utils/common.js";

/*
const { REACT_APP_CONTRACT_INFO_MASTER } = process.env;
const ctcInfoMaster = parseInt(REACT_APP_CONTRACT_INFO_MASTER || "0");
*/

const ctcInfoMaster = 210034179;

const stdlib = makeStdLib();
const bn2n = stdlib.bigNumberToNumber;
const fa = stdlib.formatAddress;

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
const decodeEvent = (eventName) => (event: any) => {
  switch (eventName) {
    case "subscribe": {
      const { what, when } = event;
      const [[ctcInfo, assetInfo, addrProvider, addrSubscriber]] = what;
      const dEvent = {
        time: bn2n(when),
        appId: bn2n(ctcInfo),
        assetId: bn2n(assetInfo),
        providerAddress: fa(addrProvider),
        subscriberAddress: fa(addrSubscriber),
      };
      return dEvent;
    }
    case "announce": {
      const { what, when } = event;
      const [
        [
          ctcInfo,
          assetInfo,
          addrProvider,
          providerCount,
          providerAmount,
          providerLength,
        ],
      ] = what;
      const dEvent = {
        time: bn2n(when),
        appId: bn2n(ctcInfo),
        assetId: bn2n(assetInfo),
        providerAddress: fa(addrProvider),
        providerCount: bn2n(providerCount),
        providerAmount: bn2n(providerAmount),
        providerLength: bn2n(providerLength),
      };
      console.log({ dEvent });
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
  },
  Master: {
    getEvents,
    decodeEvent,
  },
};
