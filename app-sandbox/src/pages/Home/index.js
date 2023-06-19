import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  LinearProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useWallet } from "@txnlab/use-wallet";
import * as React from "react";
import AccountBalance from "../../components/AccountBalance";
import AccountAvailable from "../../components/AccountAvailable";
import AccountPayment from "../../components/AccountPayment";
import SubscriptionService from "../../services/SubscriptionService";
import { makeStdLib } from "../../utils/reach";
import { fromSome } from "../../utils/common";
import { zeroAddress } from "../../utils/algorand";
import ChildService from "../../services/ChildService";
import AssetService from "../../services/AssetService";
import moment from "moment";
import MasterService from "../../services/MasterService";

const stdlib = makeStdLib();
const pc = stdlib.parseCurrency;
const bn = stdlib.bigNumberify;
const bn2n = stdlib.bigNumberToNumber;

const admins = [
  "OJUQOEPFOEZUP3JJIF6OAV4RZQL6HQMBDIXODGSXNEIH7TTR353IMJEL24",
  "6YUFOMLDMS22SCAOLOJSU65MVMGNWUTI2TN5UTQQ5WZ47DVQKUW5CTXM7Y",
];

const exclude = [227793889, 227800537, 227802852];

const Connect = () => {
  return (
    <div className="Home">
      <Stack>
        <Stack direction="row" style={{ alignItems: "baseline" }}>
          <Typography variant="h1">RETZ</Typography>
          <small>Beta</small>
        </Stack>
        <Stack direction="row" gap="1em">
          <Button fullWidth size="large" variant="contained" color="primary">
            Connect
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

const Account = (props) => {
  const { activeAccount } = useWallet();
  const assetName = props.referenceName;
  return (
    <Stack
      direction="row"
      style={{ alignItems: "baseline", alignItems: "center", minWidth: 300 }}
      gap={1}
    >
      <Avatar
        alt="Remy Sharp"
        src="https://algogator.mypinata.cloud/ipfs/Qmc5h62X3AVkyYyAXGLjK3Z4iBJRj13CUVYzjCJ2Ejha44"
        sx={{ width: 56, height: 56 }}
      />
      <Stack direction="column">
        {true ? (
          <Typography variant="h5" style={{ textAlign: "left" }}>
            nshell.algo
          </Typography>
        ) : (
          <Typography
            variant="h5"
            style={{
              textAlign: "left",
              overflow: "hidden",
              maxWidth: "300px",
              textOverflow: "ellipsis",
            }}
          >
            {activeAccount.address}
          </Typography>
        )}
        <Typography
          variant="h6"
          style={{
            overflow: "hidden",
            maxWidth: "300px",
            textOverflow: "ellipsis",
          }}
        >
          {assetName}
        </Typography>
      </Stack>
    </Stack>
  );
};

const SECONDS_PER_BLOCK = 3.6;

const Progress = (el) => {
  const [diff, setDiff] = React.useState(el.diff);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      stdlib.getNetworkTime().then((time) => {
        SubscriptionService.Child.subscription(
          el.appId,
          el.providerAddress,
          el.reserveAddress,
          el.subscriberAddress
        )
          .then(fromSome)
          .then((sub) => {
            setDiff(bn2n(time.sub(bn(sub.lastTime))));
          });
      });
    }, SECONDS_PER_BLOCK * 1000);
    return () => clearTimeout(timeout);
  }, [diff]);
  return (
    <>
      {Math.floor(diff / el.periodLength) < 1
        ? el.periodAmount
        : Math.min(
            Math.ceil(
              el.periodAmount * Math.floor(diff / el.periodLength) * 100
            ) / 100,
            stdlib.formatWithDecimals(bn(el.remaining), el.decimals)
          )}{" "}
      {el.symbol} due {` `}
      {diff > el.periodLength && "immidiately"}
      {el.amountDue === 1 &&
        diff < el.periodLength &&
        `${moment()
          .add((el.periodLength - diff) * SECONDS_PER_BLOCK, "seconds")
          .calendar()}`}
      <LinearProgress
        color={diff > el.periodLength ? "error" : "primary"}
        variant="determinate"
        value={
          diff > el.periodLength
            ? ((diff % el.periodLength) / el.periodLength) * 100
            : (diff / el.periodLength) * 100
        }
      />
    </>
  );
};

const Property = (props) => {
  return (
    <Stack
      direction="row"
      style={{
        alignItems: "baseline",
        alignItems: "center",
        justifyContent: "space-around",
      }}
      gap={1}
    >
      <Box style={{ alignItems: "right" }}>
        <Typography variant="h4" style={{ textAlign: "right" }}>
          4 Carlota Ct
        </Typography>
      </Box>
    </Stack>
  );
};

const Pay = () => {
  const { activeAccount } = useWallet();
  const [subscriptions, setSubscriptions] = React.useState([]);
  const reload = React.useCallback(async () => {
    if (!activeAccount) return;
    let providerEvents;
    do {
      const eventName = "event";
      const eventKey = `event-${eventName}`;
      const storedEvents = JSON.parse(localStorage.getItem(eventKey) ?? "{}");
      const events = !storedEvents.time
        ? await SubscriptionService.Master.getEvents(eventName)(
            activeAccount.address
          )
        : await SubscriptionService.Master.getEvents(eventName)(
            activeAccount.address,
            storedEvents.time
          );
      const newEvents = [...(storedEvents?.events ?? []), ...events];
      localStorage.setItem(
        eventKey,
        JSON.stringify({
          time: await stdlib.getNetworkTime(),
          events: newEvents,
        })
      );
      providerEvents = newEvents;
    } while (0);
    console.log({ providerEvents });

    const subscribeEvents = providerEvents.filter(
      ({ what }) => what[0][0] === "Subscribe"
    );
    console.log({ subscribeEvents });

    // TODO get deleted subscriptions
    const deletedAppIds = []; //deleteEvents.map((el) => bn2n(el.what[0][1][0]));

    // decode subscription events

    const subscriptions = [];
    const unique = new Set();
    let time = bn(0);
    for (const event of subscribeEvents) {
      const eventName = "Subscribe";
      const {
        time: elastTime,
        appId,
        assetId: assetAppId,
        providerAddress,
        reserveAddress,
        subscriberAddress,
      } = SubscriptionService.Master.decodeEvent(eventName)(event);

      if (
        unique.has(
          `${appId}-${providerAddress}-${reserveAddress}-${subscriberAddress}}`
        )
      ) {
        console.log("DUPLICATE");
        continue;
      }

      unique.add(
        `${appId}-${providerAddress}-${reserveAddress}-${subscriberAddress}}`
      );

      console.log({
        SubscribeEvent: {
          elastTime,
          appId,
          assetId: assetAppId,
          providerAddress,
          reserveAddress,
          subscriberAddress,
        },
      });

      if (deletedAppIds.includes(appId)) {
        continue;
      }

      if (subscriberAddress !== activeAccount.address) {
        continue;
      }

      // get time

      const networkTime = bn2n(await stdlib.getNetworkTime());

      // get state

      /*
      const state = fromSome(
        await SubscriptionService.Child.state(appId, zeroAddress),
        {}
      );
      console.log({ state });
      */

      // get subscription

      const {
        remaining: remainingBn,
        lastTime: lastTimeBn,
        active,
      } = fromSome(
        await SubscriptionService.Child.subscription(
          appId,
          providerAddress,
          reserveAddress,
          subscriberAddress
        )
      );

      const remaining = bn2n(remainingBn);
      const lastTime = bn2n(lastTimeBn);

      if (!active) {
        console.log("NOT ACTIVE");
        continue;
      }

      if (remaining === 0) {
        console.log("REMAINING 0");
        continue;
      }

      // get provider

      const {
        periodCount: periodCountBn,
        periodAmount: periodAmountBn,
        periodLength: periodLengthBn,
        referenceID: referenceIDBn,
      } = fromSome(
        await SubscriptionService.Child.provider(
          appId,
          providerAddress,
          reserveAddress
        )
      );
      const periodCount = bn2n(periodCountBn);
      const periodLength = bn2n(periodLengthBn);
      const referenceID = bn2n(referenceIDBn);

      // get asset

      console.log("Getting token...");

      const { token } = fromSome(
        await ChildService.state({ appId: assetAppId }),
        {}
      );
      const assetId = bn2n(token);
      const asset = await AssetService.getAsset(assetId);
      const {
        params: { decimals, name, ["unit-name"]: symbol },
      } = asset;

      console.log("Getting reference token...");

      const { token: referenceToken } = fromSome(
        await ChildService.state({ appId: referenceID }),
        {}
      );
      const referenceAssetId = bn2n(referenceToken);
      const referenceAsset = await AssetService.getAsset(referenceAssetId);
      const {
        params: {
          decimals: referenceDecimals,
          name: referenceName,
          ["unit-name"]: referenceSymbol,
        },
      } = referenceAsset;

      /*
      const ret = await ChildService.balanceOf(
        {
          appId: referenceID,
        },
        activeAccount.address
      );
      */

      const periodAmount = stdlib.formatWithDecimals(periodAmountBn, decimals);

      const amountDue =
        networkTime > lastTime + periodLength
          ? Math.floor((networkTime - lastTime) / periodLength)
          : remaining > 0
          ? 1
          : 0;

      console.log({ amountDue });

      time = lastTime;

      subscriptions.push({
        active,
        time: networkTime,
        lastTime,
        appId,
        assetAppId,
        assetId,
        providerAddress,
        reserveAddress,
        subscriberAddress,
        decimals,
        name,
        symbol,
        periodAmount,
        periodCount,
        periodLength,
        amountDue,
        referenceName,
        referenceID,
        diff: networkTime - lastTime,
        remaining,
      });
    }
    console.log({ unique });
    console.log({ subscriptions });
    localStorage.setItem(
      `subscriptions`,
      JSON.stringify({ time, subscriptions })
    );
    setSubscriptions({ time, subscriptions });
  }, [activeAccount]);
  React.useEffect(() => {
    reload();
  }, [activeAccount]);
  return (
    <div className="Home">
      <Container style={{ display: "flex", justifyContent: "center" }}>
        {subscriptions.subscriptions
          ? subscriptions.subscriptions.length > 0
            ? subscriptions.subscriptions.map((el, i) => {
                console.log({ el, i });
                return (
                  <Paper
                    elevation={3}
                    sx={{ p: 3, borderRadius: "25px", maxWidth: "320px" }}
                  >
                    <Stack gap={2}>
                      <Account {...el} />
                      <Divider />
                      <AccountBalance appId={el.assetAppId} />
                      <Divider />
                      <Progress {...el} />
                      <Divider />
                      <AccountPayment appId={el.assetAppId} />
                      <AccountAvailable
                        assetId={el.assetId}
                        symbol={el.symbol}
                      />
                    </Stack>
                  </Paper>
                );
              })
            : "No Rentals"
          : "Loading..."}
      </Container>
    </div>
  );
};

const WIP = (el) => (
  <Paper elevation={3} sx={{ p: 3, borderRadius: "25px" }}>
    <Stack gap={2}>
      <Property appId={el.assetAppId} />
      <Divider />
      <Stack
        direction="column"
        style={{
          alignItems: "baseline",
          alignItems: "center",
          justifyContent: "space-around",
        }}
        gap={1}
      >
        <Box style={{ alignItems: "right" }}>
          <Typography variant="h6" style={{ textAlign: "right" }}>
            Terms
          </Typography>
        </Box>
        <Box style={{ alignItems: "right" }}>
          <Typography variant="body" style={{ textAlign: "right" }}>
            Duration: 12 months
          </Typography>
        </Box>
        <Box style={{ alignItems: "right" }}>
          <Typography variant="body" style={{ textAlign: "right" }}>
            Rent: $1700 / month
          </Typography>
        </Box>
      </Stack>
      <Divider />
      <Stack direction="row" gap="1em">
        <Button
          fullWidth
          size="large"
          variant="contained"
          color="primary"
          onClick={() => {}}
        >
          Rent Property
        </Button>
      </Stack>
      <AccountAvailable assetId={el.assetId} symbol={el.symbol} />
    </Stack>
  </Paper>
);

const User = () => {
  return <Pay />;
};

const Admin = () => {
  const { activeAccount } = useWallet();
  const [createdAssets, setCreatedAssets] = React.useState(null);
  const [accountAssets, setAccountAssets] = React.useState(null);
  const [services, setServices] = React.useState(null);
  // get providers
  React.useEffect(() => {
    if (!activeAccount) return;
    (async () => {
      let providerEvents;
      do {
        const eventName = "event";
        const eventKey = `event-${eventName}`;
        const storedEvents = JSON.parse(localStorage.getItem(eventKey) ?? "{}");
        const events = !storedEvents.time
          ? await SubscriptionService.Master.getEvents(eventName)(
              activeAccount.address
            )
          : await SubscriptionService.Master.getEvents(eventName)(
              activeAccount.address,
              storedEvents.time
            );
        const newEvents = [...(storedEvents?.events ?? []), ...events];
        localStorage.setItem(
          eventKey,
          JSON.stringify({
            time: await stdlib.getNetworkTime(),
            events: newEvents,
          })
        );
        providerEvents = newEvents;
      } while (0);
      const announceEvents = providerEvents.filter(
        ({ what }) => what[0][0] === "Announce"
      );
      const services = [];
      const unique = new Set();
      for (const event of announceEvents) {
        const eventName = "Announce";
        const {
          appId,
          assetId: assetAppId,
          providerAddress,
          reserveAddress,
          periodCount,
          periodAmount,
          periodLength,
          referenceID,
        } = SubscriptionService.Master.decodeEvent(eventName)(event);
        if (providerAddress !== activeAccount.address) {
          console.log("NOT PROVIDER");
          continue;
        }
        if (unique.has(`${appId}-${providerAddress}-${reserveAddress}}`)) {
          console.log("DUPLICATE");
          continue;
        }
        unique.add(`${appId}-${providerAddress}-${reserveAddress}}`);
        const { token: assetIdBn } = fromSome(
          await ChildService.state({
            appId: assetAppId,
          }),
          {}
        );
        const assetId = bn2n(assetIdBn);
        const asset = await AssetService.getAsset(assetId);
        const { token: referenceAssetIdBn } = fromSome(
          await ChildService.state({
            appId: referenceID,
          }),
          {}
        );
        const referenceAssetId = bn2n(referenceAssetIdBn);
        const referenceAsset = await AssetService.getAsset(referenceAssetId);
        const service = {
          appId,
          assetAppId,
          assetId,
          asset,
          providerAddress,
          reserveAddress,
          periodCount,
          periodAmount,
          periodLength,
          referenceID,
          referenceAssetId,
          referenceAsset,
        };
        services.push(service);
      }
      setServices(services);
    })();
  }, [activeAccount]);
  React.useEffect(() => {
    if (createdAssets) return;
    if (!activeAccount) return;
    (async () => {
      const { indexer } = await stdlib.getProvider();
      const ret = await indexer
        .lookupAccountCreatedAssets(activeAccount.address)
        .do();
      console.log({ ret });
      setCreatedAssets(
        ret.assets.filter((el) => !el.deleted && !exclude.includes(el.index))
      );
    })();
  }, [activeAccount, createdAssets]);
  React.useEffect(() => {
    if (!activeAccount) return;
    if (accountAssets) return;
    (async () => {
      const { indexer } = await stdlib.getProvider();
      const ret = await indexer.lookupAccountAssets(activeAccount.address).do();
      console.log({ ret });
      const accountAssets = ret.assets;
      setAccountAssets(accountAssets);
    })();
  }, [activeAccount, accountAssets]);
  const handleMint = React.useCallback(async () => {
    await stdlib.launchToken(
      await stdlib.connectAccount({
        addr: activeAccount.address,
      }),
      "234 Test CT",
      "RE000000",
      {
        decimals: 0,
        supply: 10_0000,
        clawback: activeAccount.address,
        freeze: activeAccount.address,
        manager: activeAccount.address,
        reserve: activeAccount.address,
      }
    );
    setAccountAssets(null);
    setCreatedAssets(null);
  }, [stdlib, activeAccount]);
  const handleDelete = React.useCallback(
    (index) => async () => {
      // get params
      const ps = await stdlib.getTxnParams("transfer");
      console.log({ ps });
      const { algosdk } = stdlib;
      // create transaction
      const txn = algosdk.makeAssetDestroyTxnWithSuggestedParams(
        activeAccount.address,
        undefined,
        index,
        ps
      );
      // convert to wallet transaction
      const wTxn = stdlib.toWTxn(txn);
      // sign send and confirm
      await stdlib.signSendAndConfirm({ addr: activeAccount.address }, [wTxn]);
      setCreatedAssets(null);
    },
    [stdlib, activeAccount]
  );
  console.log({ createdAssets });
  console.log({ services });
  console.log({ accountAssets });
  return services && accountAssets && createdAssets ? (
    <div className="Admin" style={{ height: "100vh" }}>
      <Container>
        <Grid container spacing={3} sx={{ mt: 5 }}>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleMint}>
              Mint
            </Button>
          </Grid>
          {createdAssets.length > 0
            ? createdAssets?.map((el, index) => {
                console.log({ el });
                return (
                  <Grid key={index} item xs={3}>
                    <Paper sx={{ p: 3 }}>
                      <Stack direction="column" gap={1}>
                        <Typography variant="h4">{el?.params?.name}</Typography>
                        <Typography variant="h5">{el?.index}</Typography>
                        <Typography variant="h5">
                          {el?.params?.["unit-name"]}
                        </Typography>
                        <Typography variant="h5">
                          {el?.params?.["total"]}
                        </Typography>
                        {accountAssets &&
                          accountAssets.filter(
                            (aa) => aa["asset-id"] === el.index
                          )[0].amount === el.params["total"] && (
                            <Button
                              variant="contained"
                              onClick={() => handleDelete(el.index)()}
                            >
                              Delete
                            </Button>
                          )}
                        {/*<Button
                      variant="contained"
                      onClick={async () => {
                        const appId = Number(window.prompt("App ID"));
                        const amount = window.prompt("Amount");
                        await ChildService.withdraw(
                          {
                            appId,
                            assetId: el.index,
                            decimals: el.params.decimals,
                          },
                          activeAccount.address,
                          activeAccount.address,
                          `${amount}`
                        );
                      }}
                    >
                      Withdraw
                    </Button>*/}
                        {/* create child deposit and transfer */}
                        {!services
                          .map((el) => el.referenceAssetId)
                          .includes(el.index) && (
                          <Button
                            variant="contained"
                            onClick={async () => {
                              const supply = el.params["total"];
                              console.log({ el });
                              return;
                              // create new companion child
                              const ctcInfo = MasterService.create(
                                activeAccount.address,
                                el.index
                              );
                              // deposit tokens
                              console.log("Depositing...");
                              await ChildService.deposit(
                                {
                                  assetId: el.index,
                                  appId: ctcInfo,
                                  decimals: el.params.decimals,
                                }, // TODO use el
                                activeAccount.address,
                                activeAccount.address,
                                `${supply}.0`
                              );
                              // for reach holder transfer
                              const inv = [
                                [
                                  "QLLLYBITHLFUX3BWLPAXD23SBMLUYHGCG6NOPOBWY7KQHBLHLC3JC7LVBA",
                                  0.5,
                                ],
                                [
                                  "7UBGYVIHJKBIDSVZABRZSGAMN55HZSBX4MK3VBCHVM6F7OIWSGEN3Z75L4",
                                  0.5,
                                ],
                              ].map((el) => [
                                el[0],
                                Math.floor(el[1] * supply),
                              ]);
                              for (const i of inv) {
                                await ChildService.transfer(
                                  {
                                    assetId: el.index,
                                    appId: ctcInfo,
                                    decimals: el.params.decimals,
                                  },
                                  activeAccount.address,
                                  i[0],
                                  `${i[1]}`
                                );
                              }
                            }}
                          >
                            Distibute Tokens
                          </Button>
                        )}
                        {/* list property as provider service */}
                        {!services
                          .map((el) => el.referenceAssetId)
                          .includes(el.index) && (
                          <Button
                            variant="contained"
                            onClick={() => {
                              const appId = Number(window.prompt("App ID"));
                              const appId2 = Number(window.prompt("App ID"));
                              SubscriptionService.Child.announce(
                                appId,
                                activeAccount.address,
                                zeroAddress,
                                24,
                                pc(0.17),
                                10,
                                appId2
                              );
                            }}
                          >
                            List Property
                          </Button>
                        )}
                        {services &&
                          services
                            .map((el) => el.referenceAssetId)
                            .includes(el.index) &&
                          services
                            .filter((svs) => svs.referenceAssetId === el.index)
                            .map((el) => (
                              <Button
                                variant="contained"
                                onClick={() => {
                                  window.open(
                                    `https://testnet.algoexplorer.io/asset/${el.referenceAssetId}`,
                                    "_blank",
                                    "noopener,noreferrer"
                                  );
                                }}
                              >
                                View Property
                              </Button>
                            ))}
                        <Button variant="contained" onClick={() => {}}>
                          Share
                        </Button>
                      </Stack>
                    </Paper>
                  </Grid>
                );
              })
            : "No Properties"}
        </Grid>
      </Container>
    </div>
  ) : (
    "Loading..."
  );
};

function Home() {
  const { activeAccount } = useWallet();
  return activeAccount ? (
    admins.includes(activeAccount.address) ? (
      <Admin />
    ) : (
      <User />
    )
  ) : (
    <Connect />
  );
}

export default Home;
