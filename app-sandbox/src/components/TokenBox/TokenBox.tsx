import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useWallet } from "@txnlab/use-wallet";
import { makeStdLib } from "../../utils/reach";
import MasterService from "../../services/MasterService.ts";

const stdlib = makeStdLib();

const bn2n = stdlib.bigNumberToNumber;

export default function ComboBox(props) {
  const { activeAccount } = useWallet();
  const [events, setEvents] = useState<any>(null);
  const [options, setOptions] = useState<any>(null);
  useEffect(() => {
    if (!activeAccount) return;
    (async () => {
      const acc = await stdlib.connectAccount({ addr: activeAccount?.address });
      const events = await MasterService.getReadyEvents(stdlib, acc);
      setEvents(events);
    })();
  }, [activeAccount]);
  useEffect(() => {
    if (!events) return;
    (async () => {
      const { indexer } = await stdlib.getProvider();
      const options: any = [];
      for (const e of events) {
        const { indexer } = await stdlib.getProvider();
        const { asset } = await indexer.lookupAssetByID(bn2n(e.what[1])).do();
        console.log({ asset });
        options.push([bn2n(e.when), ...e.what.map(bn2n), asset.params]);
      }
      setOptions(options);
    })();
  }, [events]);
  return (
    activeAccount &&
    options && (
      <Autocomplete
        disabled={!options}
        onChange={props.onChange}
        disablePortal
        id="combo-box-demo"
        options={
          options &&
          options?.map((evt: any) => ({
            label: `${evt[2]}: ${evt[3]?.name || ""}`,
            time: Number(evt[0]),
            appId: Number(evt[1]),
            assetId: Number(evt[2]),
            decimals: Number(evt[3]?.decimals),
            assetParams: Number(evt[3]),
          }))
        }
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label={events ? "Tokens" : "Loading..."} />
        )}
      />
    )
  );
}
