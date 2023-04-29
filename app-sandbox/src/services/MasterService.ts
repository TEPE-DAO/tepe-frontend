import * as backend from "../backend/index.Master.mjs";

const { REACT_APP_CONTRACT_INFO_MASTER } = process.env;
const ctcInfoMaster = parseInt(REACT_APP_CONTRACT_INFO_MASTER || "0");

const getReadyEvents = async (stdlib: any, acc: any) => {
  // TODO: add type
  const {
    e: { ready },
  } = acc.contract(backend, ctcInfoMaster);
  const t = await stdlib.getNetworkTime();
  const events: any = []; // TODO: type
  do {
    const event = await ready.nextUpToTime(t);
    if (!event) break;
    events.push(event);
  } while (events);
  return events;
};

export default {
  getReadyEvents,
};
