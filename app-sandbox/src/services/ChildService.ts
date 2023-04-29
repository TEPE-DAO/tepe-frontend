import * as backend from "../backend/index.Child.mjs";
import { makeStdLib } from "../utils/reach.js";

const stdlib = makeStdLib();
const bn = stdlib.bigNumberify;

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
  const rhsBn = bn(
    (rhs ?? "0").slice(0, token.decimals).padEnd(token.decimals, "0")
  );
  const amountBn = lhsBn.add(rhsBn);
  const ctc = acc.contract(backend, token.appId);
  const {
    a: {
      U2: { deposit },
    },
  } = ctc;
  return deposit(addrTo, amountBn);
};

export default {
  deposit,
};
