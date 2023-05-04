// Automatically generated with Reach 0.1.13 (88e48902)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (88e48902)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    minBal: (() => {
      
      
      return stdlib.checkedBigNumberify('./index.rsh:5:23:decimal', stdlib.UInt_max, '100000');})()
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0, ctc1, ctc1, ctc2]);
  return {
    claim: [ctc3]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Tuple([]);
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Object({
    closed: ctc3,
    constructor: ctc4,
    providerCount: ctc5,
    providerCounter: ctc5,
    safeAmount: ctc5,
    safeSize: ctc5,
    subscriberCount: ctc5,
    subscriberCounter: ctc5,
    token: ctc0,
    tokenAmount: ctc5
    });
  const ctc7 = stdlib.T_Struct([['constructor', ctc4], ['token', ctc0], ['tokenAmount', ctc5], ['providerCount', ctc5], ['providerCounter', ctc5], ['subscriberCount', ctc5], ['subscriberCounter', ctc5], ['safeAmount', ctc5], ['safeSize', ctc5]]);
  const ctc8 = stdlib.T_Tuple([ctc5, ctc5, ctc3]);
  const ctc9 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Struct([['periodCount', ctc5], ['periodAmount', ctc5], ['periodLength', ctc5], ['subscriberCount', ctc5], ['subscriberCounter', ctc5]]);
  const ctc12 = stdlib.T_Data({
    None: ctc10,
    Some: ctc11
    });
  const ctc13 = stdlib.T_Data({
    None: ctc10,
    Some: ctc8
    });
  const map0_ctc = ctc12;
  
  const map1_ctc = ctc13;
  
  
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2153, v2154, v2158, v2161, v2162, v2174] = svs;
      return (await ((async () => {
        
        const v2208 = v2174.constructor;
        const v2209 = v2174.token;
        const v2210 = v2174.tokenAmount;
        const v2211 = v2174.providerCount;
        const v2212 = v2174.providerCounter;
        const v2213 = v2174.subscriberCount;
        const v2214 = v2174.subscriberCounter;
        const v2215 = v2174.safeAmount;
        const v2216 = v2174.safeSize;
        const v2217 = {
          constructor: v2208,
          providerCount: v2211,
          providerCounter: v2212,
          safeAmount: v2215,
          safeSize: v2216,
          subscriberCount: v2213,
          subscriberCounter: v2214,
          token: v2209,
          tokenAmount: v2210
          };
        
        return v2217;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _subscription = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2153, v2154, v2158, v2161, v2162, v2174] = svs;
      return (await ((async (_v2219, _v2220 ) => {
          const v2219 = stdlib.protect(ctc4, _v2219, null);
          const v2220 = stdlib.protect(ctc4, _v2220, null);
        
        const v2221 = [v2219, v2220];
        const v2222 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc9, v2221, ctc8), null);
        const v2223 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
        const v2224 = stdlib.fromSome(v2222, v2223);
        
        return v2224;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      state: {
        decode: _state,
        dom: [],
        rng: ctc7
        },
      subscription: {
        decode: _subscription,
        dom: [ctc4, ctc4],
        rng: ctc8
        }
      },
    views: {
      1: [],
      4: [ctc0, ctc0, ctc0, ctc1, ctc2, ctc6]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Struct([['periodCount', ctc1], ['periodAmount', ctc1], ['periodLength', ctc1], ['subscriberCount', ctc1], ['subscriberCounter', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc4]);
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Tuple([ctc3, ctc6]);
  return {
    mapDataTy: ctc7
    };
  };
export async function _A_deleteProvider4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _A_deleteProvider4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _A_deleteProvider4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Struct([['periodCount', ctc1], ['periodAmount', ctc1], ['periodLength', ctc1], ['subscriberCount', ctc1], ['subscriberCounter', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc4]);
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Object({
    closed: ctc4,
    constructor: ctc10,
    providerCount: ctc1,
    providerCounter: ctc1,
    safeAmount: ctc1,
    safeSize: ctc1,
    subscriberCount: ctc1,
    subscriberCounter: ctc1,
    token: ctc7,
    tokenAmount: ctc1
    });
  const ctc12 = stdlib.T_Tuple([ctc10]);
  const ctc13 = stdlib.T_Tuple([ctc10, ctc10]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc10, ctc10, ctc1]);
  const ctc16 = stdlib.T_Data({
    A_deleteProvider0_208: ctc12,
    A_deleteSubscription0_208: ctc13,
    C_close0_208: ctc8,
    C_grant0_208: ctc12,
    U1_announce0_208: ctc14,
    U2_claim0_208: ctc15,
    U2_subscribe0_208: ctc12
    });
  const ctc17 = stdlib.T_Tuple([ctc1, ctc4]);
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2153, v2154, v2158, v2161, v2162, v2174] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc7, ctc7, ctc7, ctc8, ctc9, ctc11]);
  const v2349 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:325:38:application call to [unknown function] (defined at: ./index.rsh:325:38:function exp)', 'at ./index.rsh:128:29:application call to "runA_deleteProvider0_208" (defined at: ./index.rsh:325:10:function exp)', 'at ./index.rsh:128:29:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
    msg: 'in',
    who: 'A_deleteProvider'
    });
  const v2350 = v2349[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2352 = v2174.subscriberCount;
  const v2353 = stdlib.eq(v2352, stdlib.checkedBigNumberify('./index.rsh:326:34:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2353, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:326:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:325:38:application call to [unknown function] (defined at: ./index.rsh:325:38:function exp)', 'at ./index.rsh:128:29:application call to "runA_deleteProvider0_208" (defined at: ./index.rsh:325:10:function exp)', 'at ./index.rsh:128:29:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
    msg: 'not empty',
    who: 'A_deleteProvider'
    });
  const v2355 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v2350, ctc2), null);
  const v2356 = {
    None: 0,
    Some: 1
    }[v2355[0]];
  const v2357 = stdlib.eq(v2356, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2357, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:327:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:325:38:application call to [unknown function] (defined at: ./index.rsh:325:38:function exp)', 'at ./index.rsh:128:29:application call to "runA_deleteProvider0_208" (defined at: ./index.rsh:325:10:function exp)', 'at ./index.rsh:128:29:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
    msg: 'invalid provider',
    who: 'A_deleteProvider'
    });
  let v2360;
  switch (v2355[0]) {
    case 'None': {
      const v2361 = v2355[1];
      v2360 = false;
      
      break;
      }
    case 'Some': {
      const v2362 = v2355[1];
      const v2363 = v2362.subscriberCount;
      const v2364 = stdlib.eq(v2363, stdlib.checkedBigNumberify('./index.rsh:329:74:decimal', stdlib.UInt_max, '0'));
      v2360 = v2364;
      
      break;
      }
    }
  stdlib.assert(v2360, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:328:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:325:38:application call to [unknown function] (defined at: ./index.rsh:325:38:function exp)', 'at ./index.rsh:128:29:application call to "runA_deleteProvider0_208" (defined at: ./index.rsh:325:10:function exp)', 'at ./index.rsh:128:29:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
    msg: 'has subscribers',
    who: 'A_deleteProvider'
    });
  let v2367;
  switch (v2355[0]) {
    case 'None': {
      const v2368 = v2355[1];
      v2367 = false;
      
      break;
      }
    case 'Some': {
      const v2369 = v2355[1];
      const v2370 = v2369.subscriberCounter;
      const v2371 = stdlib.eq(v2370, stdlib.checkedBigNumberify('./index.rsh:333:76:decimal', stdlib.UInt_max, '0'));
      const v2372 = v2371 ? false : true;
      v2367 = v2372;
      
      break;
      }
    }
  stdlib.assert(v2367, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:332:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:325:38:application call to [unknown function] (defined at: ./index.rsh:325:38:function exp)', 'at ./index.rsh:128:29:application call to "runA_deleteProvider0_208" (defined at: ./index.rsh:325:10:function exp)', 'at ./index.rsh:128:29:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
    msg: 'no subscribers',
    who: 'A_deleteProvider'
    });
  const v2379 = ['A_deleteProvider0_208', v2349];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2153, v2154, v2158, v2161, v2162, v2174, v2379],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:325:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2426], secs: v2428, time: v2427, didSend: v1300, from: v2425 } = txn1;
      
      switch (v2426[0]) {
        case 'A_deleteProvider0_208': {
          const v2429 = v2426[1];
          sim_r.txns.push({
            kind: 'api',
            who: "A_deleteProvider"
            });
          ;
          const v2441 = v2429[stdlib.checkedBigNumberify('./index.rsh:325:10:spread', stdlib.UInt_max, '0')];
          const v2442 = v2174.subscriberCount;
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc10, v2441, ctc2), null);
          await stdlib.simMapSet(sim_r, 0, ctc10, v2441, ctc2, undefined /* Nothing */);
          const v2465 = true;
          const v2466 = await txn1.getOutput('A_deleteProvider', 'v2465', ctc4, v2465);
          
          const v2476 = [v2158, v2154, v2441];
          const v2477 = ['DeleteProvider', v2476];
          const v2478 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v2153,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:341:27:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:341:27:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc4.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v2478', ctc17, v2478);
          const v2488 = v2174.closed;
          const v2489 = v2174.constructor;
          const v2490 = v2174.providerCount;
          const v2491 = v2174.providerCounter;
          const v2492 = v2174.safeAmount;
          const v2493 = v2174.safeSize;
          const v2495 = v2174.subscriberCounter;
          const v2496 = v2174.token;
          const v2497 = v2174.tokenAmount;
          const v2499 = stdlib.safeSub(v2490, stdlib.checkedBigNumberify('./index.rsh:346:60:decimal', stdlib.UInt_max, '1'));
          const v2500 = {
            closed: v2488,
            constructor: v2489,
            providerCount: v2499,
            providerCounter: v2491,
            safeAmount: v2492,
            safeSize: v2493,
            subscriberCount: v2442,
            subscriberCounter: v2495,
            token: v2496,
            tokenAmount: v2497
            };
          const v16089 = v2500;
          const v16091 = v2500.closed;
          if (v16091) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'A_deleteSubscription0_208': {
          const v3029 = v2426[1];
          
          break;
          }
        case 'C_close0_208': {
          const v3629 = v2426[1];
          
          break;
          }
        case 'C_grant0_208': {
          const v4229 = v2426[1];
          
          break;
          }
        case 'U1_announce0_208': {
          const v4829 = v2426[1];
          
          break;
          }
        case 'U2_claim0_208': {
          const v5429 = v2426[1];
          
          break;
          }
        case 'U2_subscribe0_208': {
          const v6029 = v2426[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc7, ctc7, ctc8, ctc9, ctc11, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v2426], secs: v2428, time: v2427, didSend: v1300, from: v2425 } = txn1;
  switch (v2426[0]) {
    case 'A_deleteProvider0_208': {
      const v2429 = v2426[1];
      undefined /* setApiDetails */;
      ;
      const v2441 = v2429[stdlib.checkedBigNumberify('./index.rsh:325:10:spread', stdlib.UInt_max, '0')];
      const v2442 = v2174.subscriberCount;
      const v2443 = stdlib.eq(v2442, stdlib.checkedBigNumberify('./index.rsh:326:34:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v2443, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:326:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:337:13:application call to [unknown function] (defined at: ./index.rsh:337:13:function exp)'],
        msg: 'not empty',
        who: 'A_deleteProvider'
        });
      const v2445 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v2441, ctc2), null);
      const v2446 = {
        None: 0,
        Some: 1
        }[v2445[0]];
      const v2447 = stdlib.eq(v2446, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2447, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:327:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:337:13:application call to [unknown function] (defined at: ./index.rsh:337:13:function exp)'],
        msg: 'invalid provider',
        who: 'A_deleteProvider'
        });
      let v2450;
      switch (v2445[0]) {
        case 'None': {
          const v2451 = v2445[1];
          v2450 = false;
          
          break;
          }
        case 'Some': {
          const v2452 = v2445[1];
          const v2453 = v2452.subscriberCount;
          const v2454 = stdlib.eq(v2453, stdlib.checkedBigNumberify('./index.rsh:329:74:decimal', stdlib.UInt_max, '0'));
          v2450 = v2454;
          
          break;
          }
        }
      stdlib.assert(v2450, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:328:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:337:13:application call to [unknown function] (defined at: ./index.rsh:337:13:function exp)'],
        msg: 'has subscribers',
        who: 'A_deleteProvider'
        });
      let v2457;
      switch (v2445[0]) {
        case 'None': {
          const v2458 = v2445[1];
          v2457 = false;
          
          break;
          }
        case 'Some': {
          const v2459 = v2445[1];
          const v2460 = v2459.subscriberCounter;
          const v2461 = stdlib.eq(v2460, stdlib.checkedBigNumberify('./index.rsh:333:76:decimal', stdlib.UInt_max, '0'));
          const v2462 = v2461 ? false : true;
          v2457 = v2462;
          
          break;
          }
        }
      stdlib.assert(v2457, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:332:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:337:13:application call to [unknown function] (defined at: ./index.rsh:337:13:function exp)'],
        msg: 'no subscribers',
        who: 'A_deleteProvider'
        });
      await stdlib.mapSet(map0, ctc10, v2441, ctc2, undefined /* Nothing */);
      const v2465 = true;
      const v2466 = await txn1.getOutput('A_deleteProvider', 'v2465', ctc4, v2465);
      if (v1300) {
        stdlib.protect(ctc0, await interact.out(v2429, v2466), {
          at: './index.rsh:325:11:application',
          fs: ['at ./index.rsh:325:11:application call to [unknown function] (defined at: ./index.rsh:325:11:function exp)', 'at ./index.rsh:339:12:application call to "k" (defined at: ./index.rsh:337:13:function exp)', 'at ./index.rsh:337:13:application call to [unknown function] (defined at: ./index.rsh:337:13:function exp)'],
          msg: 'out',
          who: 'A_deleteProvider'
          });
        }
      else {
        }
      
      const v2476 = [v2158, v2154, v2441];
      const v2477 = ['DeleteProvider', v2476];
      const v2478 = undefined /* Remote */;
      const v2479 = await txn1.getOutput('internal', 'v2478', ctc17, v2478);
      const v2481 = v2479[stdlib.checkedBigNumberify('./index.rsh:341:27:application', stdlib.UInt_max, '0')];
      const v2482 = v2479[stdlib.checkedBigNumberify('./index.rsh:341:27:application', stdlib.UInt_max, '1')];
      const v2487 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2481);
      stdlib.assert(v2487, {
        at: './index.rsh:341:27:application',
        fs: ['at ./index.rsh:337:13:application call to [unknown function] (defined at: ./index.rsh:337:13:function exp)'],
        msg: 'remote bill check',
        who: 'A_deleteProvider'
        });
      stdlib.assert(v2482, {
        at: './index.rsh:340:18:application',
        fs: ['at ./index.rsh:337:13:application call to [unknown function] (defined at: ./index.rsh:337:13:function exp)'],
        msg: 'Child app rejected deleteProvider',
        who: 'A_deleteProvider'
        });
      const v2488 = v2174.closed;
      const v2489 = v2174.constructor;
      const v2490 = v2174.providerCount;
      const v2491 = v2174.providerCounter;
      const v2492 = v2174.safeAmount;
      const v2493 = v2174.safeSize;
      const v2495 = v2174.subscriberCounter;
      const v2496 = v2174.token;
      const v2497 = v2174.tokenAmount;
      const v2499 = stdlib.safeSub(v2490, stdlib.checkedBigNumberify('./index.rsh:346:60:decimal', stdlib.UInt_max, '1'));
      const v2500 = {
        closed: v2488,
        constructor: v2489,
        providerCount: v2499,
        providerCounter: v2491,
        safeAmount: v2492,
        safeSize: v2493,
        subscriberCount: v2442,
        subscriberCounter: v2495,
        token: v2496,
        tokenAmount: v2497
        };
      const v16089 = v2500;
      const v16091 = v2500.closed;
      if (v16091) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'A_deleteSubscription0_208': {
      const v3029 = v2426[1];
      return;
      break;
      }
    case 'C_close0_208': {
      const v3629 = v2426[1];
      return;
      break;
      }
    case 'C_grant0_208': {
      const v4229 = v2426[1];
      return;
      break;
      }
    case 'U1_announce0_208': {
      const v4829 = v2426[1];
      return;
      break;
      }
    case 'U2_claim0_208': {
      const v5429 = v2426[1];
      return;
      break;
      }
    case 'U2_subscribe0_208': {
      const v6029 = v2426[1];
      return;
      break;
      }
    }
  
  
  };
export async function _A_deleteSubscription4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _A_deleteSubscription4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _A_deleteSubscription4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Struct([['periodCount', ctc1], ['periodAmount', ctc1], ['periodLength', ctc1], ['subscriberCount', ctc1], ['subscriberCounter', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc4]);
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Object({
    closed: ctc4,
    constructor: ctc10,
    providerCount: ctc1,
    providerCounter: ctc1,
    safeAmount: ctc1,
    safeSize: ctc1,
    subscriberCount: ctc1,
    subscriberCounter: ctc1,
    token: ctc7,
    tokenAmount: ctc1
    });
  const ctc12 = stdlib.T_Tuple([ctc10, ctc10]);
  const ctc13 = stdlib.T_Tuple([ctc10]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc10, ctc10, ctc1]);
  const ctc16 = stdlib.T_Data({
    A_deleteProvider0_208: ctc13,
    A_deleteSubscription0_208: ctc12,
    C_close0_208: ctc8,
    C_grant0_208: ctc13,
    U1_announce0_208: ctc14,
    U2_claim0_208: ctc15,
    U2_subscribe0_208: ctc13
    });
  const ctc17 = stdlib.T_Tuple([ctc1, ctc4]);
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const v2137 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const [v2153, v2154, v2158, v2161, v2162, v2174] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc7, ctc7, ctc7, ctc8, ctc9, ctc11]);
  const v2310 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:286:56:application call to [unknown function] (defined at: ./index.rsh:286:56:function exp)', 'at ./index.rsh:128:29:application call to "runA_deleteSubscription0_208" (defined at: ./index.rsh:286:10:function exp)', 'at ./index.rsh:128:29:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
    msg: 'in',
    who: 'A_deleteSubscription'
    });
  const v2311 = v2310[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2312 = v2310[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2315 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v2311, ctc2), null);
  const v2316 = {
    None: 0,
    Some: 1
    }[v2315[0]];
  const v2317 = stdlib.eq(v2316, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2317, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:287:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:286:56:application call to [unknown function] (defined at: ./index.rsh:286:56:function exp)', 'at ./index.rsh:128:29:application call to "runA_deleteSubscription0_208" (defined at: ./index.rsh:286:10:function exp)', 'at ./index.rsh:128:29:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
    msg: 'invalid provider',
    who: 'A_deleteSubscription'
    });
  const v2319 = [v2311, v2312];
  const v2320 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v2319, ctc5), null);
  const v2321 = {
    None: 0,
    Some: 1
    }[v2320[0]];
  const v2322 = stdlib.eq(v2321, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2322, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:288:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:286:56:application call to [unknown function] (defined at: ./index.rsh:286:56:function exp)', 'at ./index.rsh:128:29:application call to "runA_deleteSubscription0_208" (defined at: ./index.rsh:286:10:function exp)', 'at ./index.rsh:128:29:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
    msg: 'not subscribed',
    who: 'A_deleteSubscription'
    });
  const v2327 = stdlib.fromSome(v2320, v2137);
  const v2328 = v2327[stdlib.checkedBigNumberify('./index.rsh:289:48:array ref', stdlib.UInt_max, '0')];
  const v2329 = stdlib.eq(v2328, stdlib.checkedBigNumberify('./index.rsh:289:55:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2329, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:289:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:286:56:application call to [unknown function] (defined at: ./index.rsh:286:56:function exp)', 'at ./index.rsh:128:29:application call to "runA_deleteSubscription0_208" (defined at: ./index.rsh:286:10:function exp)', 'at ./index.rsh:128:29:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
    msg: 'not empty',
    who: 'A_deleteSubscription'
    });
  let v2332;
  switch (v2315[0]) {
    case 'None': {
      const v2333 = v2315[1];
      v2332 = false;
      
      break;
      }
    case 'Some': {
      const v2334 = v2315[1];
      const v2335 = v2334.subscriberCount;
      const v2336 = stdlib.gt(v2335, stdlib.checkedBigNumberify('./index.rsh:291:76:decimal', stdlib.UInt_max, '0'));
      v2332 = v2336;
      
      break;
      }
    }
  stdlib.assert(v2332, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:290:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:286:56:application call to [unknown function] (defined at: ./index.rsh:286:56:function exp)', 'at ./index.rsh:128:29:application call to "runA_deleteSubscription0_208" (defined at: ./index.rsh:286:10:function exp)', 'at ./index.rsh:128:29:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
    msg: 'no subscribers',
    who: 'A_deleteSubscription'
    });
  const v2345 = ['A_deleteSubscription0_208', v2310];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2153, v2154, v2158, v2161, v2162, v2174, v2345],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:286:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2426], secs: v2428, time: v2427, didSend: v1300, from: v2425 } = txn1;
      
      switch (v2426[0]) {
        case 'A_deleteProvider0_208': {
          const v2429 = v2426[1];
          
          break;
          }
        case 'A_deleteSubscription0_208': {
          const v3029 = v2426[1];
          sim_r.txns.push({
            kind: 'api',
            who: "A_deleteSubscription"
            });
          ;
          const v3104 = v3029[stdlib.checkedBigNumberify('./index.rsh:286:10:spread', stdlib.UInt_max, '0')];
          const v3105 = v3029[stdlib.checkedBigNumberify('./index.rsh:286:10:spread', stdlib.UInt_max, '1')];
          const v3106 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc10, v3104, ctc2), null);
          const v3110 = [v3104, v3105];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc12, v3110, ctc5), null);
          await stdlib.simMapSet(sim_r, 1, ctc12, v3110, ctc5, undefined /* Nothing */);
          switch (v3106[0]) {
            case 'None': {
              const v3133 = v3106[1];
              const v3138 = [v2158, v2154, v3104, v3105];
              const v3139 = ['DeleteSubscription', v3138];
              const v3140 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v2153,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:310:27:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:310:27:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc4.defaultValue /* simReturnVal */];})();
              await txn1.getOutput('internal', 'v3140', ctc17, v3140);
              const v3150 = true;
              const v3151 = await txn1.getOutput('A_deleteSubscription', 'v3150', ctc4, v3150);
              
              const v3158 = v2174.closed;
              const v3159 = v2174.constructor;
              const v3160 = v2174.providerCount;
              const v3161 = v2174.providerCounter;
              const v3162 = v2174.safeAmount;
              const v3163 = v2174.safeSize;
              const v3164 = v2174.subscriberCount;
              const v3165 = v2174.subscriberCounter;
              const v3166 = v2174.token;
              const v3167 = v2174.tokenAmount;
              const v3169 = stdlib.safeSub(v3164, stdlib.checkedBigNumberify('./index.rsh:321:64:decimal', stdlib.UInt_max, '1'));
              const v3170 = {
                closed: v3158,
                constructor: v3159,
                providerCount: v3160,
                providerCounter: v3161,
                safeAmount: v3162,
                safeSize: v3163,
                subscriberCount: v3169,
                subscriberCounter: v3165,
                token: v3166,
                tokenAmount: v3167
                };
              const v16129 = v3170;
              const v16131 = v3170.closed;
              if (v16131) {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                sim_r.isHalt = false;
                }
              break;
              }
            case 'Some': {
              const v3173 = v3106[1];
              const v3174 = v3173.periodCount;
              const v3175 = v3173.periodAmount;
              const v3176 = v3173.periodLength;
              const v3177 = v3173.subscriberCounter;
              const v3178 = v3173.subscriberCount;
              const v3179 = stdlib.safeSub(v3178, stdlib.checkedBigNumberify('./index.rsh:306:68:decimal', stdlib.UInt_max, '1'));
              const v3180 = {
                periodAmount: v3175,
                periodCount: v3174,
                periodLength: v3176,
                subscriberCount: v3179,
                subscriberCounter: v3177
                };
              await stdlib.simMapSet(sim_r, 0, ctc10, v3104, ctc2, v3180);
              const v3185 = [v2158, v2154, v3104, v3105];
              const v3186 = ['DeleteSubscription', v3185];
              const v3187 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v2153,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:310:27:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:310:27:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc4.defaultValue /* simReturnVal */];})();
              await txn1.getOutput('internal', 'v3187', ctc17, v3187);
              const v3197 = true;
              const v3198 = await txn1.getOutput('A_deleteSubscription', 'v3197', ctc4, v3197);
              
              const v3205 = v2174.closed;
              const v3206 = v2174.constructor;
              const v3207 = v2174.providerCount;
              const v3208 = v2174.providerCounter;
              const v3209 = v2174.safeAmount;
              const v3210 = v2174.safeSize;
              const v3211 = v2174.subscriberCount;
              const v3212 = v2174.subscriberCounter;
              const v3213 = v2174.token;
              const v3214 = v2174.tokenAmount;
              const v3216 = stdlib.safeSub(v3211, stdlib.checkedBigNumberify('./index.rsh:321:64:decimal', stdlib.UInt_max, '1'));
              const v3217 = {
                closed: v3205,
                constructor: v3206,
                providerCount: v3207,
                providerCounter: v3208,
                safeAmount: v3209,
                safeSize: v3210,
                subscriberCount: v3216,
                subscriberCounter: v3212,
                token: v3213,
                tokenAmount: v3214
                };
              const v16133 = v3217;
              const v16135 = v3217.closed;
              if (v16135) {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                sim_r.isHalt = false;
                }
              break;
              }
            }
          break;
          }
        case 'C_close0_208': {
          const v3629 = v2426[1];
          
          break;
          }
        case 'C_grant0_208': {
          const v4229 = v2426[1];
          
          break;
          }
        case 'U1_announce0_208': {
          const v4829 = v2426[1];
          
          break;
          }
        case 'U2_claim0_208': {
          const v5429 = v2426[1];
          
          break;
          }
        case 'U2_subscribe0_208': {
          const v6029 = v2426[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc7, ctc7, ctc8, ctc9, ctc11, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v2426], secs: v2428, time: v2427, didSend: v1300, from: v2425 } = txn1;
  switch (v2426[0]) {
    case 'A_deleteProvider0_208': {
      const v2429 = v2426[1];
      return;
      break;
      }
    case 'A_deleteSubscription0_208': {
      const v3029 = v2426[1];
      undefined /* setApiDetails */;
      ;
      const v3104 = v3029[stdlib.checkedBigNumberify('./index.rsh:286:10:spread', stdlib.UInt_max, '0')];
      const v3105 = v3029[stdlib.checkedBigNumberify('./index.rsh:286:10:spread', stdlib.UInt_max, '1')];
      const v3106 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v3104, ctc2), null);
      const v3107 = {
        None: 0,
        Some: 1
        }[v3106[0]];
      const v3108 = stdlib.eq(v3107, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3108, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:287:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:295:13:application call to [unknown function] (defined at: ./index.rsh:295:13:function exp)'],
        msg: 'invalid provider',
        who: 'A_deleteSubscription'
        });
      const v3110 = [v3104, v3105];
      const v3111 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v3110, ctc5), null);
      const v3112 = {
        None: 0,
        Some: 1
        }[v3111[0]];
      const v3113 = stdlib.eq(v3112, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3113, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:288:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:295:13:application call to [unknown function] (defined at: ./index.rsh:295:13:function exp)'],
        msg: 'not subscribed',
        who: 'A_deleteSubscription'
        });
      const v3117 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
      const v3118 = stdlib.fromSome(v3111, v3117);
      const v3119 = v3118[stdlib.checkedBigNumberify('./index.rsh:289:48:array ref', stdlib.UInt_max, '0')];
      const v3120 = stdlib.eq(v3119, stdlib.checkedBigNumberify('./index.rsh:289:55:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v3120, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:289:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:295:13:application call to [unknown function] (defined at: ./index.rsh:295:13:function exp)'],
        msg: 'not empty',
        who: 'A_deleteSubscription'
        });
      let v3123;
      switch (v3106[0]) {
        case 'None': {
          const v3124 = v3106[1];
          v3123 = false;
          
          break;
          }
        case 'Some': {
          const v3125 = v3106[1];
          const v3126 = v3125.subscriberCount;
          const v3127 = stdlib.gt(v3126, stdlib.checkedBigNumberify('./index.rsh:291:76:decimal', stdlib.UInt_max, '0'));
          v3123 = v3127;
          
          break;
          }
        }
      stdlib.assert(v3123, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:290:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:295:13:application call to [unknown function] (defined at: ./index.rsh:295:13:function exp)'],
        msg: 'no subscribers',
        who: 'A_deleteSubscription'
        });
      await stdlib.mapSet(map1, ctc12, v3110, ctc5, undefined /* Nothing */);
      switch (v3106[0]) {
        case 'None': {
          const v3133 = v3106[1];
          const v3138 = [v2158, v2154, v3104, v3105];
          const v3139 = ['DeleteSubscription', v3138];
          const v3140 = undefined /* Remote */;
          const v3141 = await txn1.getOutput('internal', 'v3140', ctc17, v3140);
          const v3143 = v3141[stdlib.checkedBigNumberify('./index.rsh:310:27:application', stdlib.UInt_max, '0')];
          const v3144 = v3141[stdlib.checkedBigNumberify('./index.rsh:310:27:application', stdlib.UInt_max, '1')];
          const v3149 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3143);
          stdlib.assert(v3149, {
            at: './index.rsh:310:27:application',
            fs: ['at ./index.rsh:295:13:application call to [unknown function] (defined at: ./index.rsh:295:13:function exp)'],
            msg: 'remote bill check',
            who: 'A_deleteSubscription'
            });
          stdlib.assert(v3144, {
            at: './index.rsh:309:18:application',
            fs: ['at ./index.rsh:295:13:application call to [unknown function] (defined at: ./index.rsh:295:13:function exp)'],
            msg: 'Child app rejected deleteSubscription',
            who: 'A_deleteSubscription'
            });
          const v3150 = true;
          const v3151 = await txn1.getOutput('A_deleteSubscription', 'v3150', ctc4, v3150);
          if (v1300) {
            stdlib.protect(ctc0, await interact.out(v3029, v3151), {
              at: './index.rsh:286:11:application',
              fs: ['at ./index.rsh:286:11:application call to [unknown function] (defined at: ./index.rsh:286:11:function exp)', 'at ./index.rsh:320:12:application call to "k" (defined at: ./index.rsh:295:13:function exp)', 'at ./index.rsh:295:13:application call to [unknown function] (defined at: ./index.rsh:295:13:function exp)'],
              msg: 'out',
              who: 'A_deleteSubscription'
              });
            }
          else {
            }
          
          const v3158 = v2174.closed;
          const v3159 = v2174.constructor;
          const v3160 = v2174.providerCount;
          const v3161 = v2174.providerCounter;
          const v3162 = v2174.safeAmount;
          const v3163 = v2174.safeSize;
          const v3164 = v2174.subscriberCount;
          const v3165 = v2174.subscriberCounter;
          const v3166 = v2174.token;
          const v3167 = v2174.tokenAmount;
          const v3169 = stdlib.safeSub(v3164, stdlib.checkedBigNumberify('./index.rsh:321:64:decimal', stdlib.UInt_max, '1'));
          const v3170 = {
            closed: v3158,
            constructor: v3159,
            providerCount: v3160,
            providerCounter: v3161,
            safeAmount: v3162,
            safeSize: v3163,
            subscriberCount: v3169,
            subscriberCounter: v3165,
            token: v3166,
            tokenAmount: v3167
            };
          const v16129 = v3170;
          const v16131 = v3170.closed;
          if (v16131) {
            return;
            }
          else {
            return;
            }
          break;
          }
        case 'Some': {
          const v3173 = v3106[1];
          const v3174 = v3173.periodCount;
          const v3175 = v3173.periodAmount;
          const v3176 = v3173.periodLength;
          const v3177 = v3173.subscriberCounter;
          const v3178 = v3173.subscriberCount;
          const v3179 = stdlib.safeSub(v3178, stdlib.checkedBigNumberify('./index.rsh:306:68:decimal', stdlib.UInt_max, '1'));
          const v3180 = {
            periodAmount: v3175,
            periodCount: v3174,
            periodLength: v3176,
            subscriberCount: v3179,
            subscriberCounter: v3177
            };
          await stdlib.mapSet(map0, ctc10, v3104, ctc2, v3180);
          const v3185 = [v2158, v2154, v3104, v3105];
          const v3186 = ['DeleteSubscription', v3185];
          const v3187 = undefined /* Remote */;
          const v3188 = await txn1.getOutput('internal', 'v3187', ctc17, v3187);
          const v3190 = v3188[stdlib.checkedBigNumberify('./index.rsh:310:27:application', stdlib.UInt_max, '0')];
          const v3191 = v3188[stdlib.checkedBigNumberify('./index.rsh:310:27:application', stdlib.UInt_max, '1')];
          const v3196 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3190);
          stdlib.assert(v3196, {
            at: './index.rsh:310:27:application',
            fs: ['at ./index.rsh:295:13:application call to [unknown function] (defined at: ./index.rsh:295:13:function exp)'],
            msg: 'remote bill check',
            who: 'A_deleteSubscription'
            });
          stdlib.assert(v3191, {
            at: './index.rsh:309:18:application',
            fs: ['at ./index.rsh:295:13:application call to [unknown function] (defined at: ./index.rsh:295:13:function exp)'],
            msg: 'Child app rejected deleteSubscription',
            who: 'A_deleteSubscription'
            });
          const v3197 = true;
          const v3198 = await txn1.getOutput('A_deleteSubscription', 'v3197', ctc4, v3197);
          if (v1300) {
            stdlib.protect(ctc0, await interact.out(v3029, v3198), {
              at: './index.rsh:286:11:application',
              fs: ['at ./index.rsh:286:11:application call to [unknown function] (defined at: ./index.rsh:286:11:function exp)', 'at ./index.rsh:320:12:application call to "k" (defined at: ./index.rsh:295:13:function exp)', 'at ./index.rsh:295:13:application call to [unknown function] (defined at: ./index.rsh:295:13:function exp)'],
              msg: 'out',
              who: 'A_deleteSubscription'
              });
            }
          else {
            }
          
          const v3205 = v2174.closed;
          const v3206 = v2174.constructor;
          const v3207 = v2174.providerCount;
          const v3208 = v2174.providerCounter;
          const v3209 = v2174.safeAmount;
          const v3210 = v2174.safeSize;
          const v3211 = v2174.subscriberCount;
          const v3212 = v2174.subscriberCounter;
          const v3213 = v2174.token;
          const v3214 = v2174.tokenAmount;
          const v3216 = stdlib.safeSub(v3211, stdlib.checkedBigNumberify('./index.rsh:321:64:decimal', stdlib.UInt_max, '1'));
          const v3217 = {
            closed: v3205,
            constructor: v3206,
            providerCount: v3207,
            providerCounter: v3208,
            safeAmount: v3209,
            safeSize: v3210,
            subscriberCount: v3216,
            subscriberCounter: v3212,
            token: v3213,
            tokenAmount: v3214
            };
          const v16133 = v3217;
          const v16135 = v3217.closed;
          if (v16135) {
            return;
            }
          else {
            return;
            }
          break;
          }
        }
      break;
      }
    case 'C_close0_208': {
      const v3629 = v2426[1];
      return;
      break;
      }
    case 'C_grant0_208': {
      const v4229 = v2426[1];
      return;
      break;
      }
    case 'U1_announce0_208': {
      const v4829 = v2426[1];
      return;
      break;
      }
    case 'U2_claim0_208': {
      const v5429 = v2426[1];
      return;
      break;
      }
    case 'U2_subscribe0_208': {
      const v6029 = v2426[1];
      return;
      break;
      }
    }
  
  
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Struct([['periodCount', ctc1], ['periodAmount', ctc1], ['periodLength', ctc1], ['subscriberCount', ctc1], ['subscriberCounter', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc4]);
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Object({
    ctc: ctc7,
    token: ctc7
    });
  const ctc9 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Tuple([ctc10, ctc10]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc10, ctc10, ctc1]);
  const ctc16 = stdlib.T_Data({
    A_deleteProvider0_208: ctc11,
    A_deleteSubscription0_208: ctc12,
    C_close0_208: ctc13,
    C_grant0_208: ctc11,
    U1_announce0_208: ctc14,
    U2_claim0_208: ctc15,
    U2_subscribe0_208: ctc11
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2144, time: v2143, didSend: v22, from: v2142 } = txn1;
  ;
  const v2147 = stdlib.protect(ctc8, await interact.getParams(), {
    at: './index.rsh:92:57:application',
    fs: ['at ./index.rsh:91:9:application call to [unknown function] (defined at: ./index.rsh:91:13:function exp)'],
    msg: 'getParams',
    who: 'Alice'
    });
  const v2148 = v2147.ctc;
  const v2149 = v2147.token;
  
  const txn2 = await (ctc.sendrecv({
    args: [v2148, v2149],
    evt_cnt: 2,
    funcNum: 1,
    lct: v2143,
    onlyIf: true,
    out_tys: [ctc7, ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:94:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2153, v2154], secs: v2156, time: v2155, didSend: v36, from: v2152 } = txn2;
      
      ;
      
      const v2158 = await ctc.getContractInfo();
      const v2161 = [];
      const v2162 = [v2158, v2154];
      const v2163 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v2153,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:108:18:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./index.rsh:108:18:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc4.defaultValue /* simReturnVal */];})();
      await txn2.getOutput('internal', 'v2163', ctc9, v2163);
      const v2173 = {
        closed: false,
        constructor: v2152,
        providerCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        providerCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        safeAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        safeSize: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        subscriberCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        token: v2154,
        tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v2174 = v2173;
      const v2175 = v2155;
      
      if (await (async () => {
        const v2206 = v2174.closed;
        const v2207 = v2206 ? false : true;
        
        return v2207;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v2153, v2154], secs: v2156, time: v2155, didSend: v36, from: v2152 } = txn2;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:95:19:application',
    fs: ['at ./index.rsh:95:19:application call to [unknown function] (defined at: ./index.rsh:95:19:function exp)', 'at ./index.rsh:95:19:application call to "liftedInteract" (defined at: ./index.rsh:95:19:application)'],
    msg: 'ready',
    who: 'Alice'
    });
  
  const v2158 = await ctc.getContractInfo();
  const v2161 = [];
  const v2162 = [v2158, v2154];
  const v2163 = undefined /* Remote */;
  const v2164 = await txn2.getOutput('internal', 'v2163', ctc9, v2163);
  const v2166 = v2164[stdlib.checkedBigNumberify('./index.rsh:108:18:application', stdlib.UInt_max, '0')];
  const v2167 = v2164[stdlib.checkedBigNumberify('./index.rsh:108:18:application', stdlib.UInt_max, '1')];
  const v2172 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2166);
  stdlib.assert(v2172, {
    at: './index.rsh:108:18:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Alice'
    });
  stdlib.assert(v2167, {
    at: './index.rsh:107:10:application',
    fs: [],
    msg: 'Child app not announced as ready',
    who: 'Alice'
    });
  const v2173 = {
    closed: false,
    constructor: v2152,
    providerCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    providerCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    safeAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    safeSize: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    subscriberCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    token: v2154,
    tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v2174 = v2173;
  let v2175 = v2155;
  
  let txn3 = txn2;
  while (await (async () => {
    const v2206 = v2174.closed;
    const v2207 = v2206 ? false : true;
    
    return v2207;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc16],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2426], secs: v2428, time: v2427, didSend: v1300, from: v2425 } = txn4;
    switch (v2426[0]) {
      case 'A_deleteProvider0_208': {
        const v2429 = v2426[1];
        undefined /* setApiDetails */;
        ;
        const v2441 = v2429[stdlib.checkedBigNumberify('./index.rsh:325:10:spread', stdlib.UInt_max, '0')];
        const v2442 = v2174.subscriberCount;
        const v2443 = stdlib.eq(v2442, stdlib.checkedBigNumberify('./index.rsh:326:34:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2443, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:326:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:337:13:application call to [unknown function] (defined at: ./index.rsh:337:13:function exp)'],
          msg: 'not empty',
          who: 'Alice'
          });
        const v2445 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v2441, ctc2), null);
        const v2446 = {
          None: 0,
          Some: 1
          }[v2445[0]];
        const v2447 = stdlib.eq(v2446, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2447, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:327:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:337:13:application call to [unknown function] (defined at: ./index.rsh:337:13:function exp)'],
          msg: 'invalid provider',
          who: 'Alice'
          });
        let v2450;
        switch (v2445[0]) {
          case 'None': {
            const v2451 = v2445[1];
            v2450 = false;
            
            break;
            }
          case 'Some': {
            const v2452 = v2445[1];
            const v2453 = v2452.subscriberCount;
            const v2454 = stdlib.eq(v2453, stdlib.checkedBigNumberify('./index.rsh:329:74:decimal', stdlib.UInt_max, '0'));
            v2450 = v2454;
            
            break;
            }
          }
        stdlib.assert(v2450, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:328:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:337:13:application call to [unknown function] (defined at: ./index.rsh:337:13:function exp)'],
          msg: 'has subscribers',
          who: 'Alice'
          });
        let v2457;
        switch (v2445[0]) {
          case 'None': {
            const v2458 = v2445[1];
            v2457 = false;
            
            break;
            }
          case 'Some': {
            const v2459 = v2445[1];
            const v2460 = v2459.subscriberCounter;
            const v2461 = stdlib.eq(v2460, stdlib.checkedBigNumberify('./index.rsh:333:76:decimal', stdlib.UInt_max, '0'));
            const v2462 = v2461 ? false : true;
            v2457 = v2462;
            
            break;
            }
          }
        stdlib.assert(v2457, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:332:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:337:13:application call to [unknown function] (defined at: ./index.rsh:337:13:function exp)'],
          msg: 'no subscribers',
          who: 'Alice'
          });
        await stdlib.mapSet(map0, ctc10, v2441, ctc2, undefined /* Nothing */);
        const v2465 = true;
        await txn4.getOutput('A_deleteProvider', 'v2465', ctc4, v2465);
        const v2476 = [v2158, v2154, v2441];
        const v2477 = ['DeleteProvider', v2476];
        const v2478 = undefined /* Remote */;
        const v2479 = await txn4.getOutput('internal', 'v2478', ctc9, v2478);
        const v2481 = v2479[stdlib.checkedBigNumberify('./index.rsh:341:27:application', stdlib.UInt_max, '0')];
        const v2482 = v2479[stdlib.checkedBigNumberify('./index.rsh:341:27:application', stdlib.UInt_max, '1')];
        const v2487 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2481);
        stdlib.assert(v2487, {
          at: './index.rsh:341:27:application',
          fs: ['at ./index.rsh:337:13:application call to [unknown function] (defined at: ./index.rsh:337:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v2482, {
          at: './index.rsh:340:18:application',
          fs: ['at ./index.rsh:337:13:application call to [unknown function] (defined at: ./index.rsh:337:13:function exp)'],
          msg: 'Child app rejected deleteProvider',
          who: 'Alice'
          });
        const v2488 = v2174.closed;
        const v2489 = v2174.constructor;
        const v2490 = v2174.providerCount;
        const v2491 = v2174.providerCounter;
        const v2492 = v2174.safeAmount;
        const v2493 = v2174.safeSize;
        const v2495 = v2174.subscriberCounter;
        const v2496 = v2174.token;
        const v2497 = v2174.tokenAmount;
        const v2499 = stdlib.safeSub(v2490, stdlib.checkedBigNumberify('./index.rsh:346:60:decimal', stdlib.UInt_max, '1'));
        const v2500 = {
          closed: v2488,
          constructor: v2489,
          providerCount: v2499,
          providerCounter: v2491,
          safeAmount: v2492,
          safeSize: v2493,
          subscriberCount: v2442,
          subscriberCounter: v2495,
          token: v2496,
          tokenAmount: v2497
          };
        const cv2174 = v2500;
        const cv2175 = v2427;
        
        v2174 = cv2174;
        v2175 = cv2175;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'A_deleteSubscription0_208': {
        const v3029 = v2426[1];
        undefined /* setApiDetails */;
        ;
        const v3104 = v3029[stdlib.checkedBigNumberify('./index.rsh:286:10:spread', stdlib.UInt_max, '0')];
        const v3105 = v3029[stdlib.checkedBigNumberify('./index.rsh:286:10:spread', stdlib.UInt_max, '1')];
        const v3106 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v3104, ctc2), null);
        const v3107 = {
          None: 0,
          Some: 1
          }[v3106[0]];
        const v3108 = stdlib.eq(v3107, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3108, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:287:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:295:13:application call to [unknown function] (defined at: ./index.rsh:295:13:function exp)'],
          msg: 'invalid provider',
          who: 'Alice'
          });
        const v3110 = [v3104, v3105];
        const v3111 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v3110, ctc5), null);
        const v3112 = {
          None: 0,
          Some: 1
          }[v3111[0]];
        const v3113 = stdlib.eq(v3112, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3113, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:288:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:295:13:application call to [unknown function] (defined at: ./index.rsh:295:13:function exp)'],
          msg: 'not subscribed',
          who: 'Alice'
          });
        const v3117 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
        const v3118 = stdlib.fromSome(v3111, v3117);
        const v3119 = v3118[stdlib.checkedBigNumberify('./index.rsh:289:48:array ref', stdlib.UInt_max, '0')];
        const v3120 = stdlib.eq(v3119, stdlib.checkedBigNumberify('./index.rsh:289:55:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v3120, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:289:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:295:13:application call to [unknown function] (defined at: ./index.rsh:295:13:function exp)'],
          msg: 'not empty',
          who: 'Alice'
          });
        let v3123;
        switch (v3106[0]) {
          case 'None': {
            const v3124 = v3106[1];
            v3123 = false;
            
            break;
            }
          case 'Some': {
            const v3125 = v3106[1];
            const v3126 = v3125.subscriberCount;
            const v3127 = stdlib.gt(v3126, stdlib.checkedBigNumberify('./index.rsh:291:76:decimal', stdlib.UInt_max, '0'));
            v3123 = v3127;
            
            break;
            }
          }
        stdlib.assert(v3123, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:290:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:295:13:application call to [unknown function] (defined at: ./index.rsh:295:13:function exp)'],
          msg: 'no subscribers',
          who: 'Alice'
          });
        await stdlib.mapSet(map1, ctc12, v3110, ctc5, undefined /* Nothing */);
        switch (v3106[0]) {
          case 'None': {
            const v3133 = v3106[1];
            const v3138 = [v2158, v2154, v3104, v3105];
            const v3139 = ['DeleteSubscription', v3138];
            const v3140 = undefined /* Remote */;
            const v3141 = await txn4.getOutput('internal', 'v3140', ctc9, v3140);
            const v3143 = v3141[stdlib.checkedBigNumberify('./index.rsh:310:27:application', stdlib.UInt_max, '0')];
            const v3144 = v3141[stdlib.checkedBigNumberify('./index.rsh:310:27:application', stdlib.UInt_max, '1')];
            const v3149 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3143);
            stdlib.assert(v3149, {
              at: './index.rsh:310:27:application',
              fs: ['at ./index.rsh:295:13:application call to [unknown function] (defined at: ./index.rsh:295:13:function exp)'],
              msg: 'remote bill check',
              who: 'Alice'
              });
            stdlib.assert(v3144, {
              at: './index.rsh:309:18:application',
              fs: ['at ./index.rsh:295:13:application call to [unknown function] (defined at: ./index.rsh:295:13:function exp)'],
              msg: 'Child app rejected deleteSubscription',
              who: 'Alice'
              });
            const v3150 = true;
            await txn4.getOutput('A_deleteSubscription', 'v3150', ctc4, v3150);
            const v3158 = v2174.closed;
            const v3159 = v2174.constructor;
            const v3160 = v2174.providerCount;
            const v3161 = v2174.providerCounter;
            const v3162 = v2174.safeAmount;
            const v3163 = v2174.safeSize;
            const v3164 = v2174.subscriberCount;
            const v3165 = v2174.subscriberCounter;
            const v3166 = v2174.token;
            const v3167 = v2174.tokenAmount;
            const v3169 = stdlib.safeSub(v3164, stdlib.checkedBigNumberify('./index.rsh:321:64:decimal', stdlib.UInt_max, '1'));
            const v3170 = {
              closed: v3158,
              constructor: v3159,
              providerCount: v3160,
              providerCounter: v3161,
              safeAmount: v3162,
              safeSize: v3163,
              subscriberCount: v3169,
              subscriberCounter: v3165,
              token: v3166,
              tokenAmount: v3167
              };
            const cv2174 = v3170;
            const cv2175 = v2427;
            
            v2174 = cv2174;
            v2175 = cv2175;
            
            txn3 = txn4;
            continue;
            break;
            }
          case 'Some': {
            const v3173 = v3106[1];
            const v3174 = v3173.periodCount;
            const v3175 = v3173.periodAmount;
            const v3176 = v3173.periodLength;
            const v3177 = v3173.subscriberCounter;
            const v3178 = v3173.subscriberCount;
            const v3179 = stdlib.safeSub(v3178, stdlib.checkedBigNumberify('./index.rsh:306:68:decimal', stdlib.UInt_max, '1'));
            const v3180 = {
              periodAmount: v3175,
              periodCount: v3174,
              periodLength: v3176,
              subscriberCount: v3179,
              subscriberCounter: v3177
              };
            await stdlib.mapSet(map0, ctc10, v3104, ctc2, v3180);
            const v3185 = [v2158, v2154, v3104, v3105];
            const v3186 = ['DeleteSubscription', v3185];
            const v3187 = undefined /* Remote */;
            const v3188 = await txn4.getOutput('internal', 'v3187', ctc9, v3187);
            const v3190 = v3188[stdlib.checkedBigNumberify('./index.rsh:310:27:application', stdlib.UInt_max, '0')];
            const v3191 = v3188[stdlib.checkedBigNumberify('./index.rsh:310:27:application', stdlib.UInt_max, '1')];
            const v3196 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3190);
            stdlib.assert(v3196, {
              at: './index.rsh:310:27:application',
              fs: ['at ./index.rsh:295:13:application call to [unknown function] (defined at: ./index.rsh:295:13:function exp)'],
              msg: 'remote bill check',
              who: 'Alice'
              });
            stdlib.assert(v3191, {
              at: './index.rsh:309:18:application',
              fs: ['at ./index.rsh:295:13:application call to [unknown function] (defined at: ./index.rsh:295:13:function exp)'],
              msg: 'Child app rejected deleteSubscription',
              who: 'Alice'
              });
            const v3197 = true;
            await txn4.getOutput('A_deleteSubscription', 'v3197', ctc4, v3197);
            const v3205 = v2174.closed;
            const v3206 = v2174.constructor;
            const v3207 = v2174.providerCount;
            const v3208 = v2174.providerCounter;
            const v3209 = v2174.safeAmount;
            const v3210 = v2174.safeSize;
            const v3211 = v2174.subscriberCount;
            const v3212 = v2174.subscriberCounter;
            const v3213 = v2174.token;
            const v3214 = v2174.tokenAmount;
            const v3216 = stdlib.safeSub(v3211, stdlib.checkedBigNumberify('./index.rsh:321:64:decimal', stdlib.UInt_max, '1'));
            const v3217 = {
              closed: v3205,
              constructor: v3206,
              providerCount: v3207,
              providerCounter: v3208,
              safeAmount: v3209,
              safeSize: v3210,
              subscriberCount: v3216,
              subscriberCounter: v3212,
              token: v3213,
              tokenAmount: v3214
              };
            const cv2174 = v3217;
            const cv2175 = v2427;
            
            v2174 = cv2174;
            v2175 = cv2175;
            
            txn3 = txn4;
            continue;
            break;
            }
          }
        break;
        }
      case 'C_close0_208': {
        const v3629 = v2426[1];
        undefined /* setApiDetails */;
        ;
        const v3821 = v2174.providerCounter;
        const v3822 = stdlib.eq(v3821, stdlib.checkedBigNumberify('./index.rsh:352:34:decimal', stdlib.UInt_max, '0'));
        const v3823 = v3822 ? false : true;
        stdlib.assert(v3823, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:352:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:357:13:application call to [unknown function] (defined at: ./index.rsh:357:13:function exp)'],
          msg: 'no providers',
          who: 'Alice'
          });
        const v3825 = v2174.subscriberCounter;
        const v3826 = stdlib.eq(v3825, stdlib.checkedBigNumberify('./index.rsh:353:36:decimal', stdlib.UInt_max, '0'));
        const v3827 = v3826 ? false : true;
        stdlib.assert(v3827, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:353:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:357:13:application call to [unknown function] (defined at: ./index.rsh:357:13:function exp)'],
          msg: 'no subscribers',
          who: 'Alice'
          });
        const v3829 = v2174.providerCount;
        const v3830 = stdlib.eq(v3829, stdlib.checkedBigNumberify('./index.rsh:354:32:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v3830, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:354:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:357:13:application call to [unknown function] (defined at: ./index.rsh:357:13:function exp)'],
          msg: 'providers not empty',
          who: 'Alice'
          });
        const v3832 = v2174.subscriberCount;
        const v3833 = stdlib.eq(v3832, stdlib.checkedBigNumberify('./index.rsh:355:34:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v3833, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:355:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:357:13:application call to [unknown function] (defined at: ./index.rsh:357:13:function exp)'],
          msg: 'subscribers not empty',
          who: 'Alice'
          });
        const v3840 = undefined /* Remote */;
        const v3841 = await txn4.getOutput('internal', 'v3840', ctc9, v3840);
        const v3843 = v3841[stdlib.checkedBigNumberify('./index.rsh:359:26:application', stdlib.UInt_max, '0')];
        const v3844 = v3841[stdlib.checkedBigNumberify('./index.rsh:359:26:application', stdlib.UInt_max, '1')];
        const v3849 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3843);
        stdlib.assert(v3849, {
          at: './index.rsh:359:26:application',
          fs: ['at ./index.rsh:357:13:application call to [unknown function] (defined at: ./index.rsh:357:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v3844, {
          at: './index.rsh:358:18:application',
          fs: ['at ./index.rsh:357:13:application call to [unknown function] (defined at: ./index.rsh:357:13:function exp)'],
          msg: 'Child app rejected close',
          who: 'Alice'
          });
        const v3850 = true;
        await txn4.getOutput('C_close', 'v3850', ctc4, v3850);
        const v3857 = v2174.constructor;
        const v3860 = v2174.safeAmount;
        const v3861 = v2174.safeSize;
        const v3864 = v2174.token;
        const v3865 = v2174.tokenAmount;
        const v3866 = {
          closed: true,
          constructor: v3857,
          providerCount: v3829,
          providerCounter: v3821,
          safeAmount: v3860,
          safeSize: v3861,
          subscriberCount: v3832,
          subscriberCounter: v3825,
          token: v3864,
          tokenAmount: v3865
          };
        const cv2174 = v3866;
        const cv2175 = v2427;
        
        v2174 = cv2174;
        v2175 = cv2175;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'C_grant0_208': {
        const v4229 = v2426[1];
        undefined /* setApiDetails */;
        ;
        const v4470 = v4229[stdlib.checkedBigNumberify('./index.rsh:367:10:spread', stdlib.UInt_max, '0')];
        const v4471 = v2174.constructor;
        const v4472 = stdlib.addressEq(v2425, v4471);
        stdlib.assert(v4472, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:368:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:370:13:application call to [unknown function] (defined at: ./index.rsh:370:13:function exp)'],
          msg: 'Only constructor can grant',
          who: 'Alice'
          });
        const v4479 = [v2158, v2154, v4470];
        const v4480 = undefined /* Remote */;
        const v4481 = await txn4.getOutput('internal', 'v4480', ctc9, v4480);
        const v4483 = v4481[stdlib.checkedBigNumberify('./index.rsh:372:26:application', stdlib.UInt_max, '0')];
        const v4484 = v4481[stdlib.checkedBigNumberify('./index.rsh:372:26:application', stdlib.UInt_max, '1')];
        const v4489 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4483);
        stdlib.assert(v4489, {
          at: './index.rsh:372:26:application',
          fs: ['at ./index.rsh:370:13:application call to [unknown function] (defined at: ./index.rsh:370:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v4484, {
          at: './index.rsh:371:18:application',
          fs: ['at ./index.rsh:370:13:application call to [unknown function] (defined at: ./index.rsh:370:13:function exp)'],
          msg: 'Child app rejected grant',
          who: 'Alice'
          });
        const v4490 = true;
        await txn4.getOutput('C_grant', 'v4490', ctc4, v4490);
        const v4497 = v2174.closed;
        const v4499 = v2174.providerCount;
        const v4500 = v2174.providerCounter;
        const v4501 = v2174.safeAmount;
        const v4502 = v2174.safeSize;
        const v4503 = v2174.subscriberCount;
        const v4504 = v2174.subscriberCounter;
        const v4505 = v2174.token;
        const v4506 = v2174.tokenAmount;
        const v4507 = {
          closed: v4497,
          constructor: v4470,
          providerCount: v4499,
          providerCounter: v4500,
          safeAmount: v4501,
          safeSize: v4502,
          subscriberCount: v4503,
          subscriberCounter: v4504,
          token: v4505,
          tokenAmount: v4506
          };
        const cv2174 = v4507;
        const cv2175 = v2427;
        
        v2174 = cv2174;
        v2175 = cv2175;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U1_announce0_208': {
        const v4829 = v2426[1];
        undefined /* setApiDetails */;
        ;
        const v5111 = v4829[stdlib.checkedBigNumberify('./index.rsh:147:10:spread', stdlib.UInt_max, '0')];
        const v5112 = v4829[stdlib.checkedBigNumberify('./index.rsh:147:10:spread', stdlib.UInt_max, '1')];
        const v5113 = v4829[stdlib.checkedBigNumberify('./index.rsh:147:10:spread', stdlib.UInt_max, '2')];
        const v5114 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v2425, ctc2), null);
        const v5115 = {
          None: 0,
          Some: 1
          }[v5114[0]];
        const v5116 = stdlib.eq(v5115, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v5116, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:148:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:150:13:application call to [unknown function] (defined at: ./index.rsh:150:13:function exp)'],
          msg: 'provider already exists',
          who: 'Alice'
          });
        const v5121 = {
          periodAmount: v5112,
          periodCount: v5111,
          periodLength: v5113,
          subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          subscriberCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        await stdlib.mapSet(map0, ctc10, v2425, ctc2, v5121);
        const v5126 = [v2158, v2154, v2425, v5111, v5112, v5113];
        const v5127 = undefined /* Remote */;
        const v5128 = await txn4.getOutput('internal', 'v5127', ctc9, v5127);
        const v5130 = v5128[stdlib.checkedBigNumberify('./index.rsh:160:29:application', stdlib.UInt_max, '0')];
        const v5131 = v5128[stdlib.checkedBigNumberify('./index.rsh:160:29:application', stdlib.UInt_max, '1')];
        const v5136 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5130);
        stdlib.assert(v5136, {
          at: './index.rsh:160:29:application',
          fs: ['at ./index.rsh:150:13:application call to [unknown function] (defined at: ./index.rsh:150:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v5131, {
          at: './index.rsh:159:18:application',
          fs: ['at ./index.rsh:150:13:application call to [unknown function] (defined at: ./index.rsh:150:13:function exp)'],
          msg: 'Child app rejected announcement',
          who: 'Alice'
          });
        const v5137 = true;
        await txn4.getOutput('U1_announce', 'v5137', ctc4, v5137);
        const v5146 = v2174.closed;
        const v5147 = v2174.constructor;
        const v5148 = v2174.providerCount;
        const v5149 = v2174.providerCounter;
        const v5150 = v2174.safeAmount;
        const v5151 = v2174.safeSize;
        const v5152 = v2174.subscriberCount;
        const v5153 = v2174.subscriberCounter;
        const v5154 = v2174.token;
        const v5155 = v2174.tokenAmount;
        const v5157 = stdlib.safeAdd(v5148, stdlib.checkedBigNumberify('./index.rsh:174:48:decimal', stdlib.UInt_max, '1'));
        const v5159 = stdlib.safeAdd(v5149, stdlib.checkedBigNumberify('./index.rsh:175:52:decimal', stdlib.UInt_max, '1'));
        const v5160 = {
          closed: v5146,
          constructor: v5147,
          providerCount: v5157,
          providerCounter: v5159,
          safeAmount: v5150,
          safeSize: v5151,
          subscriberCount: v5152,
          subscriberCounter: v5153,
          token: v5154,
          tokenAmount: v5155
          };
        const cv2174 = v5160;
        const cv2175 = v2427;
        
        v2174 = cv2174;
        v2175 = cv2175;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U2_claim0_208': {
        const v5429 = v2426[1];
        undefined /* setApiDetails */;
        ;
        const v5764 = v5429[stdlib.checkedBigNumberify('./index.rsh:244:10:spread', stdlib.UInt_max, '0')];
        const v5765 = v5429[stdlib.checkedBigNumberify('./index.rsh:244:10:spread', stdlib.UInt_max, '1')];
        const v5766 = v5429[stdlib.checkedBigNumberify('./index.rsh:244:10:spread', stdlib.UInt_max, '2')];
        const v5767 = [v5764, v5765];
        const v5768 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v5767, ctc5), null);
        const v5769 = {
          None: 0,
          Some: 1
          }[v5768[0]];
        const v5770 = stdlib.eq(v5769, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5770, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:245:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
          msg: 'not subscribed',
          who: 'Alice'
          });
        const v5772 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v5764, ctc2), null);
        let v5773;
        switch (v5772[0]) {
          case 'None': {
            const v5774 = v5772[1];
            v5773 = stdlib.checkedBigNumberify('./index.rsh:234:39:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v5775 = v5772[1];
            const v5776 = v5775.periodAmount;
            const v5777 = stdlib.safeMul(v5776, v5766);
            v5773 = v5777;
            
            break;
            }
          }
        const v5780 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
        const v5781 = stdlib.fromSome(v5768, v5780);
        const v5782 = v5781[stdlib.checkedBigNumberify('./index.rsh:247:73:array ref', stdlib.UInt_max, '0')];
        const v5783 = stdlib.le(v5773, v5782);
        stdlib.assert(v5783, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:246:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
          msg: 'not enough remaining',
          who: 'Alice'
          });
        const v5793 = v5781[stdlib.checkedBigNumberify('./index.rsh:252:17:array', stdlib.UInt_max, '1')];
        let v5797;
        switch (v5772[0]) {
          case 'None': {
            const v5798 = v5772[1];
            v5797 = stdlib.checkedBigNumberify('./index.rsh:239:39:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v5799 = v5772[1];
            const v5800 = v5799.periodLength;
            const v5801 = stdlib.safeMul(v5766, v5800);
            v5797 = v5801;
            
            break;
            }
          }
        const v5802 = stdlib.safeAdd(v5793, v5797);
        const v5803 = stdlib.ge(v2427, v5802);
        stdlib.assert(v5803, {
          at: './index.rsh:253:18:application',
          fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
          msg: 'not enough time has passed',
          who: 'Alice'
          });
        const v5804 = await ctc.getContractAddress();
        const v5805 = [v2154, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5765];
        const v5806 = [v2154, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5764];
        const v5807 = [v5765, v5804];
        const v5808 = [v2154, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v5807];
        let v5810;
        switch (v5772[0]) {
          case 'None': {
            const v5811 = v5772[1];
            v5810 = stdlib.checkedBigNumberify('./index.rsh:234:39:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v5812 = v5772[1];
            const v5813 = v5812.periodAmount;
            const v5814 = stdlib.safeMul(v5813, v5766);
            v5810 = v5814;
            
            break;
            }
          }
        const v5818 = undefined /* Remote */;
        const v5819 = await txn4.getOutput('internal', 'v5818', ctc9, v5818);
        const v5821 = v5819[stdlib.checkedBigNumberify('./index.rsh:270:15:application', stdlib.UInt_max, '0')];
        const v5822 = v5819[stdlib.checkedBigNumberify('./index.rsh:270:15:application', stdlib.UInt_max, '1')];
        const v5827 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5821);
        stdlib.assert(v5827, {
          at: './index.rsh:270:15:application',
          fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v5822, {
          at: './index.rsh:261:18:application',
          fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
          msg: 'transfer failed',
          who: 'Alice'
          });
        const v5829 = [v2158, v2154, v5764, v5765, v5766];
        null;
        let v5832;
        switch (v5772[0]) {
          case 'None': {
            const v5833 = v5772[1];
            v5832 = stdlib.checkedBigNumberify('./index.rsh:234:39:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v5834 = v5772[1];
            const v5835 = v5834.periodAmount;
            const v5836 = stdlib.safeMul(v5835, v5766);
            v5832 = v5836;
            
            break;
            }
          }
        const v5837 = stdlib.safeSub(v5782, v5832);
        let v5839;
        switch (v5772[0]) {
          case 'None': {
            const v5840 = v5772[1];
            v5839 = stdlib.checkedBigNumberify('./index.rsh:239:39:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v5841 = v5772[1];
            const v5842 = v5841.periodLength;
            const v5843 = stdlib.safeMul(v5766, v5842);
            v5839 = v5843;
            
            break;
            }
          }
        const v5844 = stdlib.safeAdd(v5793, v5839);
        const v5845 = [v5837, v5844, true];
        await stdlib.mapSet(map1, ctc12, v5767, ctc5, v5845);
        const v5846 = true;
        await txn4.getOutput('U2_claim', 'v5846', ctc4, v5846);
        const v5855 = v2174.closed;
        const v5856 = v2174.constructor;
        const v5857 = v2174.providerCount;
        const v5858 = v2174.providerCounter;
        const v5859 = v2174.safeAmount;
        const v5860 = v2174.safeSize;
        const v5861 = v2174.subscriberCount;
        const v5862 = v2174.subscriberCounter;
        const v5863 = v2174.token;
        const v5864 = v2174.tokenAmount;
        let v5867;
        switch (v5772[0]) {
          case 'None': {
            const v5868 = v5772[1];
            v5867 = stdlib.checkedBigNumberify('./index.rsh:234:39:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v5869 = v5772[1];
            const v5870 = v5869.periodAmount;
            const v5871 = stdlib.safeMul(v5870, v5766);
            v5867 = v5871;
            
            break;
            }
          }
        const v5872 = stdlib.safeSub(v5859, v5867);
        const v5873 = {
          closed: v5855,
          constructor: v5856,
          providerCount: v5857,
          providerCounter: v5858,
          safeAmount: v5872,
          safeSize: v5860,
          subscriberCount: v5861,
          subscriberCounter: v5862,
          token: v5863,
          tokenAmount: v5864
          };
        const cv2174 = v5873;
        const cv2175 = v2427;
        
        v2174 = cv2174;
        v2175 = cv2175;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U2_subscribe0_208': {
        const v6029 = v2426[1];
        undefined /* setApiDetails */;
        ;
        const v6477 = v6029[stdlib.checkedBigNumberify('./index.rsh:193:10:spread', stdlib.UInt_max, '0')];
        const v6478 = [v6477, v2425];
        const v6479 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v6478, ctc5), null);
        const v6480 = {
          None: 0,
          Some: 1
          }[v6479[0]];
        const v6481 = stdlib.eq(v6480, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v6481, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:194:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)'],
          msg: 'already subscribed',
          who: 'Alice'
          });
        const v6483 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v6477, ctc2), null);
        const v6484 = {
          None: 0,
          Some: 1
          }[v6483[0]];
        const v6485 = stdlib.eq(v6484, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v6485, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:195:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)'],
          msg: 'invalid provider',
          who: 'Alice'
          });
        let v6489;
        switch (v6483[0]) {
          case 'None': {
            const v6491 = v6483[1];
            v6489 = stdlib.checkedBigNumberify('./index.rsh:186:20:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v6492 = v6483[1];
            const v6493 = v6492.periodCount;
            const v6494 = v6492.periodAmount;
            const v6495 = stdlib.safeMul(v6494, v6493);
            v6489 = v6495;
            
            break;
            }
          }
        const v6497 = [v6489, v2427, true];
        await stdlib.mapSet(map1, ctc12, v6478, ctc5, v6497);
        switch (v6483[0]) {
          case 'None': {
            const v6499 = v6483[1];
            const v6504 = [v2158, v2154, v6477, v2425];
            const v6505 = undefined /* Remote */;
            const v6506 = await txn4.getOutput('internal', 'v6505', ctc9, v6505);
            const v6508 = v6506[stdlib.checkedBigNumberify('./index.rsh:216:30:application', stdlib.UInt_max, '0')];
            const v6509 = v6506[stdlib.checkedBigNumberify('./index.rsh:216:30:application', stdlib.UInt_max, '1')];
            const v6514 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6508);
            stdlib.assert(v6514, {
              at: './index.rsh:216:30:application',
              fs: ['at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)'],
              msg: 'remote bill check',
              who: 'Alice'
              });
            stdlib.assert(v6509, {
              at: './index.rsh:215:18:application',
              fs: ['at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)'],
              msg: 'Child app rejected subscription',
              who: 'Alice'
              });
            const v6515 = true;
            await txn4.getOutput('U2_subscribe', 'v6515', ctc4, v6515);
            const v6522 = v2174.closed;
            const v6523 = v2174.constructor;
            const v6524 = v2174.providerCount;
            const v6525 = v2174.providerCounter;
            const v6526 = v2174.safeAmount;
            const v6527 = v2174.safeSize;
            const v6528 = v2174.subscriberCount;
            const v6529 = v2174.subscriberCounter;
            const v6530 = v2174.token;
            const v6531 = v2174.tokenAmount;
            const v6533 = stdlib.safeAdd(v6528, stdlib.checkedBigNumberify('./index.rsh:223:52:decimal', stdlib.UInt_max, '1'));
            const v6535 = stdlib.safeAdd(v6529, stdlib.checkedBigNumberify('./index.rsh:224:56:decimal', stdlib.UInt_max, '1'));
            const v6555 = stdlib.gt(v6527, v6526);
            const v6556 = v6555 ? v6527 : v6526;
            const v6557 = {
              closed: v6522,
              constructor: v6523,
              providerCount: v6524,
              providerCounter: v6525,
              safeAmount: v6526,
              safeSize: v6556,
              subscriberCount: v6533,
              subscriberCounter: v6535,
              token: v6530,
              tokenAmount: v6531
              };
            const cv2174 = v6557;
            const cv2175 = v2427;
            
            v2174 = cv2174;
            v2175 = cv2175;
            
            txn3 = txn4;
            continue;
            break;
            }
          case 'Some': {
            const v6560 = v6483[1];
            const v6561 = v6560.periodCount;
            const v6562 = v6560.periodAmount;
            const v6563 = v6560.periodLength;
            const v6564 = v6560.subscriberCounter;
            const v6565 = stdlib.safeAdd(v6564, stdlib.checkedBigNumberify('./index.rsh:211:72:decimal', stdlib.UInt_max, '1'));
            const v6566 = v6560.subscriberCount;
            const v6567 = stdlib.safeAdd(v6566, stdlib.checkedBigNumberify('./index.rsh:212:68:decimal', stdlib.UInt_max, '1'));
            const v6568 = {
              periodAmount: v6562,
              periodCount: v6561,
              periodLength: v6563,
              subscriberCount: v6567,
              subscriberCounter: v6565
              };
            await stdlib.mapSet(map0, ctc10, v6477, ctc2, v6568);
            const v6573 = [v2158, v2154, v6477, v2425];
            const v6574 = undefined /* Remote */;
            const v6575 = await txn4.getOutput('internal', 'v6574', ctc9, v6574);
            const v6577 = v6575[stdlib.checkedBigNumberify('./index.rsh:216:30:application', stdlib.UInt_max, '0')];
            const v6578 = v6575[stdlib.checkedBigNumberify('./index.rsh:216:30:application', stdlib.UInt_max, '1')];
            const v6583 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6577);
            stdlib.assert(v6583, {
              at: './index.rsh:216:30:application',
              fs: ['at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)'],
              msg: 'remote bill check',
              who: 'Alice'
              });
            stdlib.assert(v6578, {
              at: './index.rsh:215:18:application',
              fs: ['at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)'],
              msg: 'Child app rejected subscription',
              who: 'Alice'
              });
            const v6584 = true;
            await txn4.getOutput('U2_subscribe', 'v6584', ctc4, v6584);
            const v6591 = v2174.closed;
            const v6592 = v2174.constructor;
            const v6593 = v2174.providerCount;
            const v6594 = v2174.providerCounter;
            const v6595 = v2174.safeAmount;
            const v6596 = v2174.safeSize;
            const v6597 = v2174.subscriberCount;
            const v6598 = v2174.subscriberCounter;
            const v6599 = v2174.token;
            const v6600 = v2174.tokenAmount;
            const v6602 = stdlib.safeAdd(v6597, stdlib.checkedBigNumberify('./index.rsh:223:52:decimal', stdlib.UInt_max, '1'));
            const v6604 = stdlib.safeAdd(v6598, stdlib.checkedBigNumberify('./index.rsh:224:56:decimal', stdlib.UInt_max, '1'));
            const v6610 = v6568.periodCount;
            const v6611 = v6568.periodAmount;
            const v6612 = stdlib.safeMul(v6611, v6610);
            const v6613 = stdlib.safeAdd(v6595, v6612);
            const v6624 = stdlib.gt(v6596, v6613);
            const v6625 = v6624 ? v6596 : v6613;
            const v6626 = {
              closed: v6591,
              constructor: v6592,
              providerCount: v6593,
              providerCounter: v6594,
              safeAmount: v6613,
              safeSize: v6625,
              subscriberCount: v6602,
              subscriberCounter: v6604,
              token: v6599,
              tokenAmount: v6600
              };
            const cv2174 = v6626;
            const cv2175 = v2427;
            
            v2174 = cv2174;
            v2175 = cv2175;
            
            txn3 = txn4;
            continue;
            break;
            }
          }
        break;
        }
      }
    
    }
  return;
  
  
  
  
  };
export async function _C_close4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _C_close4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _C_close4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Struct([['periodCount', ctc1], ['periodAmount', ctc1], ['periodLength', ctc1], ['subscriberCount', ctc1], ['subscriberCounter', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc4]);
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Object({
    closed: ctc4,
    constructor: ctc10,
    providerCount: ctc1,
    providerCounter: ctc1,
    safeAmount: ctc1,
    safeSize: ctc1,
    subscriberCount: ctc1,
    subscriberCounter: ctc1,
    token: ctc7,
    tokenAmount: ctc1
    });
  const ctc12 = stdlib.T_Tuple([ctc10]);
  const ctc13 = stdlib.T_Tuple([ctc10, ctc10]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc10, ctc10, ctc1]);
  const ctc16 = stdlib.T_Data({
    A_deleteProvider0_208: ctc12,
    A_deleteSubscription0_208: ctc13,
    C_close0_208: ctc8,
    C_grant0_208: ctc12,
    U1_announce0_208: ctc14,
    U2_claim0_208: ctc15,
    U2_subscribe0_208: ctc12
    });
  const ctc17 = stdlib.T_Tuple([ctc1, ctc4]);
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2153, v2154, v2158, v2161, v2162, v2174] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc7, ctc7, ctc7, ctc8, ctc9, ctc11]);
  const v2383 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:351:25:application call to [unknown function] (defined at: ./index.rsh:351:25:function exp)', 'at ./index.rsh:128:29:application call to "runC_close0_208" (defined at: ./index.rsh:351:10:function exp)', 'at ./index.rsh:128:29:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
    msg: 'in',
    who: 'C_close'
    });
  const v2384 = v2174.providerCounter;
  const v2385 = stdlib.eq(v2384, stdlib.checkedBigNumberify('./index.rsh:352:34:decimal', stdlib.UInt_max, '0'));
  const v2386 = v2385 ? false : true;
  stdlib.assert(v2386, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:352:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:351:25:application call to [unknown function] (defined at: ./index.rsh:351:25:function exp)', 'at ./index.rsh:128:29:application call to "runC_close0_208" (defined at: ./index.rsh:351:10:function exp)', 'at ./index.rsh:128:29:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
    msg: 'no providers',
    who: 'C_close'
    });
  const v2388 = v2174.subscriberCounter;
  const v2389 = stdlib.eq(v2388, stdlib.checkedBigNumberify('./index.rsh:353:36:decimal', stdlib.UInt_max, '0'));
  const v2390 = v2389 ? false : true;
  stdlib.assert(v2390, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:353:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:351:25:application call to [unknown function] (defined at: ./index.rsh:351:25:function exp)', 'at ./index.rsh:128:29:application call to "runC_close0_208" (defined at: ./index.rsh:351:10:function exp)', 'at ./index.rsh:128:29:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
    msg: 'no subscribers',
    who: 'C_close'
    });
  const v2392 = v2174.providerCount;
  const v2393 = stdlib.eq(v2392, stdlib.checkedBigNumberify('./index.rsh:354:32:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2393, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:354:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:351:25:application call to [unknown function] (defined at: ./index.rsh:351:25:function exp)', 'at ./index.rsh:128:29:application call to "runC_close0_208" (defined at: ./index.rsh:351:10:function exp)', 'at ./index.rsh:128:29:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
    msg: 'providers not empty',
    who: 'C_close'
    });
  const v2395 = v2174.subscriberCount;
  const v2396 = stdlib.eq(v2395, stdlib.checkedBigNumberify('./index.rsh:355:34:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2396, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:355:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:351:25:application call to [unknown function] (defined at: ./index.rsh:351:25:function exp)', 'at ./index.rsh:128:29:application call to "runC_close0_208" (defined at: ./index.rsh:351:10:function exp)', 'at ./index.rsh:128:29:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
    msg: 'subscribers not empty',
    who: 'C_close'
    });
  const v2401 = ['C_close0_208', v2383];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2153, v2154, v2158, v2161, v2162, v2174, v2401],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:351:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2426], secs: v2428, time: v2427, didSend: v1300, from: v2425 } = txn1;
      
      switch (v2426[0]) {
        case 'A_deleteProvider0_208': {
          const v2429 = v2426[1];
          
          break;
          }
        case 'A_deleteSubscription0_208': {
          const v3029 = v2426[1];
          
          break;
          }
        case 'C_close0_208': {
          const v3629 = v2426[1];
          sim_r.txns.push({
            kind: 'api',
            who: "C_close"
            });
          ;
          const v3821 = v2174.providerCounter;
          const v3825 = v2174.subscriberCounter;
          const v3829 = v2174.providerCount;
          const v3832 = v2174.subscriberCount;
          const v3840 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v2153,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:359:26:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:359:26:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc4.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v3840', ctc17, v3840);
          const v3850 = true;
          const v3851 = await txn1.getOutput('C_close', 'v3850', ctc4, v3850);
          
          const v3857 = v2174.constructor;
          const v3860 = v2174.safeAmount;
          const v3861 = v2174.safeSize;
          const v3864 = v2174.token;
          const v3865 = v2174.tokenAmount;
          const v3866 = {
            closed: true,
            constructor: v3857,
            providerCount: v3829,
            providerCounter: v3821,
            safeAmount: v3860,
            safeSize: v3861,
            subscriberCount: v3832,
            subscriberCounter: v3825,
            token: v3864,
            tokenAmount: v3865
            };
          const v16173 = v3866;
          const v16175 = v3866.closed;
          if (v16175) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'C_grant0_208': {
          const v4229 = v2426[1];
          
          break;
          }
        case 'U1_announce0_208': {
          const v4829 = v2426[1];
          
          break;
          }
        case 'U2_claim0_208': {
          const v5429 = v2426[1];
          
          break;
          }
        case 'U2_subscribe0_208': {
          const v6029 = v2426[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc7, ctc7, ctc8, ctc9, ctc11, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v2426], secs: v2428, time: v2427, didSend: v1300, from: v2425 } = txn1;
  switch (v2426[0]) {
    case 'A_deleteProvider0_208': {
      const v2429 = v2426[1];
      return;
      break;
      }
    case 'A_deleteSubscription0_208': {
      const v3029 = v2426[1];
      return;
      break;
      }
    case 'C_close0_208': {
      const v3629 = v2426[1];
      undefined /* setApiDetails */;
      ;
      const v3821 = v2174.providerCounter;
      const v3822 = stdlib.eq(v3821, stdlib.checkedBigNumberify('./index.rsh:352:34:decimal', stdlib.UInt_max, '0'));
      const v3823 = v3822 ? false : true;
      stdlib.assert(v3823, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:352:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:357:13:application call to [unknown function] (defined at: ./index.rsh:357:13:function exp)'],
        msg: 'no providers',
        who: 'C_close'
        });
      const v3825 = v2174.subscriberCounter;
      const v3826 = stdlib.eq(v3825, stdlib.checkedBigNumberify('./index.rsh:353:36:decimal', stdlib.UInt_max, '0'));
      const v3827 = v3826 ? false : true;
      stdlib.assert(v3827, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:353:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:357:13:application call to [unknown function] (defined at: ./index.rsh:357:13:function exp)'],
        msg: 'no subscribers',
        who: 'C_close'
        });
      const v3829 = v2174.providerCount;
      const v3830 = stdlib.eq(v3829, stdlib.checkedBigNumberify('./index.rsh:354:32:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v3830, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:354:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:357:13:application call to [unknown function] (defined at: ./index.rsh:357:13:function exp)'],
        msg: 'providers not empty',
        who: 'C_close'
        });
      const v3832 = v2174.subscriberCount;
      const v3833 = stdlib.eq(v3832, stdlib.checkedBigNumberify('./index.rsh:355:34:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v3833, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:355:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:357:13:application call to [unknown function] (defined at: ./index.rsh:357:13:function exp)'],
        msg: 'subscribers not empty',
        who: 'C_close'
        });
      const v3840 = undefined /* Remote */;
      const v3841 = await txn1.getOutput('internal', 'v3840', ctc17, v3840);
      const v3843 = v3841[stdlib.checkedBigNumberify('./index.rsh:359:26:application', stdlib.UInt_max, '0')];
      const v3844 = v3841[stdlib.checkedBigNumberify('./index.rsh:359:26:application', stdlib.UInt_max, '1')];
      const v3849 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3843);
      stdlib.assert(v3849, {
        at: './index.rsh:359:26:application',
        fs: ['at ./index.rsh:357:13:application call to [unknown function] (defined at: ./index.rsh:357:13:function exp)'],
        msg: 'remote bill check',
        who: 'C_close'
        });
      stdlib.assert(v3844, {
        at: './index.rsh:358:18:application',
        fs: ['at ./index.rsh:357:13:application call to [unknown function] (defined at: ./index.rsh:357:13:function exp)'],
        msg: 'Child app rejected close',
        who: 'C_close'
        });
      const v3850 = true;
      const v3851 = await txn1.getOutput('C_close', 'v3850', ctc4, v3850);
      if (v1300) {
        stdlib.protect(ctc0, await interact.out(v3629, v3851), {
          at: './index.rsh:351:11:application',
          fs: ['at ./index.rsh:351:11:application call to [unknown function] (defined at: ./index.rsh:351:11:function exp)', 'at ./index.rsh:362:12:application call to "k" (defined at: ./index.rsh:357:13:function exp)', 'at ./index.rsh:357:13:application call to [unknown function] (defined at: ./index.rsh:357:13:function exp)'],
          msg: 'out',
          who: 'C_close'
          });
        }
      else {
        }
      
      const v3857 = v2174.constructor;
      const v3860 = v2174.safeAmount;
      const v3861 = v2174.safeSize;
      const v3864 = v2174.token;
      const v3865 = v2174.tokenAmount;
      const v3866 = {
        closed: true,
        constructor: v3857,
        providerCount: v3829,
        providerCounter: v3821,
        safeAmount: v3860,
        safeSize: v3861,
        subscriberCount: v3832,
        subscriberCounter: v3825,
        token: v3864,
        tokenAmount: v3865
        };
      const v16173 = v3866;
      const v16175 = v3866.closed;
      if (v16175) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'C_grant0_208': {
      const v4229 = v2426[1];
      return;
      break;
      }
    case 'U1_announce0_208': {
      const v4829 = v2426[1];
      return;
      break;
      }
    case 'U2_claim0_208': {
      const v5429 = v2426[1];
      return;
      break;
      }
    case 'U2_subscribe0_208': {
      const v6029 = v2426[1];
      return;
      break;
      }
    }
  
  
  };
export async function _C_grant4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _C_grant4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _C_grant4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Struct([['periodCount', ctc1], ['periodAmount', ctc1], ['periodLength', ctc1], ['subscriberCount', ctc1], ['subscriberCounter', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc4]);
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Object({
    closed: ctc4,
    constructor: ctc10,
    providerCount: ctc1,
    providerCounter: ctc1,
    safeAmount: ctc1,
    safeSize: ctc1,
    subscriberCount: ctc1,
    subscriberCounter: ctc1,
    token: ctc7,
    tokenAmount: ctc1
    });
  const ctc12 = stdlib.T_Tuple([ctc10]);
  const ctc13 = stdlib.T_Tuple([ctc10, ctc10]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc10, ctc10, ctc1]);
  const ctc16 = stdlib.T_Data({
    A_deleteProvider0_208: ctc12,
    A_deleteSubscription0_208: ctc13,
    C_close0_208: ctc8,
    C_grant0_208: ctc12,
    U1_announce0_208: ctc14,
    U2_claim0_208: ctc15,
    U2_subscribe0_208: ctc12
    });
  const ctc17 = stdlib.T_Tuple([ctc1, ctc4]);
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2153, v2154, v2158, v2161, v2162, v2174] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc7, ctc7, ctc7, ctc8, ctc9, ctc11]);
  const v2403 = ctc.selfAddress();
  const v2405 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:367:29:application call to [unknown function] (defined at: ./index.rsh:367:29:function exp)', 'at ./index.rsh:128:29:application call to "runC_grant0_208" (defined at: ./index.rsh:367:10:function exp)', 'at ./index.rsh:128:29:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
    msg: 'in',
    who: 'C_grant'
    });
  const v2408 = v2174.constructor;
  const v2409 = stdlib.addressEq(v2403, v2408);
  stdlib.assert(v2409, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:368:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:367:29:application call to [unknown function] (defined at: ./index.rsh:367:29:function exp)', 'at ./index.rsh:128:29:application call to "runC_grant0_208" (defined at: ./index.rsh:367:10:function exp)', 'at ./index.rsh:128:29:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
    msg: 'Only constructor can grant',
    who: 'C_grant'
    });
  const v2416 = ['C_grant0_208', v2405];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2153, v2154, v2158, v2161, v2162, v2174, v2416],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:367:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2426], secs: v2428, time: v2427, didSend: v1300, from: v2425 } = txn1;
      
      switch (v2426[0]) {
        case 'A_deleteProvider0_208': {
          const v2429 = v2426[1];
          
          break;
          }
        case 'A_deleteSubscription0_208': {
          const v3029 = v2426[1];
          
          break;
          }
        case 'C_close0_208': {
          const v3629 = v2426[1];
          
          break;
          }
        case 'C_grant0_208': {
          const v4229 = v2426[1];
          sim_r.txns.push({
            kind: 'api',
            who: "C_grant"
            });
          ;
          const v4470 = v4229[stdlib.checkedBigNumberify('./index.rsh:367:10:spread', stdlib.UInt_max, '0')];
          const v4479 = [v2158, v2154, v4470];
          const v4480 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v2153,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:372:26:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:372:26:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc4.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v4480', ctc17, v4480);
          const v4490 = true;
          const v4491 = await txn1.getOutput('C_grant', 'v4490', ctc4, v4490);
          
          const v4497 = v2174.closed;
          const v4499 = v2174.providerCount;
          const v4500 = v2174.providerCounter;
          const v4501 = v2174.safeAmount;
          const v4502 = v2174.safeSize;
          const v4503 = v2174.subscriberCount;
          const v4504 = v2174.subscriberCounter;
          const v4505 = v2174.token;
          const v4506 = v2174.tokenAmount;
          const v4507 = {
            closed: v4497,
            constructor: v4470,
            providerCount: v4499,
            providerCounter: v4500,
            safeAmount: v4501,
            safeSize: v4502,
            subscriberCount: v4503,
            subscriberCounter: v4504,
            token: v4505,
            tokenAmount: v4506
            };
          const v16213 = v4507;
          const v16215 = v4507.closed;
          if (v16215) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'U1_announce0_208': {
          const v4829 = v2426[1];
          
          break;
          }
        case 'U2_claim0_208': {
          const v5429 = v2426[1];
          
          break;
          }
        case 'U2_subscribe0_208': {
          const v6029 = v2426[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc7, ctc7, ctc8, ctc9, ctc11, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v2426], secs: v2428, time: v2427, didSend: v1300, from: v2425 } = txn1;
  switch (v2426[0]) {
    case 'A_deleteProvider0_208': {
      const v2429 = v2426[1];
      return;
      break;
      }
    case 'A_deleteSubscription0_208': {
      const v3029 = v2426[1];
      return;
      break;
      }
    case 'C_close0_208': {
      const v3629 = v2426[1];
      return;
      break;
      }
    case 'C_grant0_208': {
      const v4229 = v2426[1];
      undefined /* setApiDetails */;
      ;
      const v4470 = v4229[stdlib.checkedBigNumberify('./index.rsh:367:10:spread', stdlib.UInt_max, '0')];
      const v4471 = v2174.constructor;
      const v4472 = stdlib.addressEq(v2425, v4471);
      stdlib.assert(v4472, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:368:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:370:13:application call to [unknown function] (defined at: ./index.rsh:370:13:function exp)'],
        msg: 'Only constructor can grant',
        who: 'C_grant'
        });
      const v4479 = [v2158, v2154, v4470];
      const v4480 = undefined /* Remote */;
      const v4481 = await txn1.getOutput('internal', 'v4480', ctc17, v4480);
      const v4483 = v4481[stdlib.checkedBigNumberify('./index.rsh:372:26:application', stdlib.UInt_max, '0')];
      const v4484 = v4481[stdlib.checkedBigNumberify('./index.rsh:372:26:application', stdlib.UInt_max, '1')];
      const v4489 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4483);
      stdlib.assert(v4489, {
        at: './index.rsh:372:26:application',
        fs: ['at ./index.rsh:370:13:application call to [unknown function] (defined at: ./index.rsh:370:13:function exp)'],
        msg: 'remote bill check',
        who: 'C_grant'
        });
      stdlib.assert(v4484, {
        at: './index.rsh:371:18:application',
        fs: ['at ./index.rsh:370:13:application call to [unknown function] (defined at: ./index.rsh:370:13:function exp)'],
        msg: 'Child app rejected grant',
        who: 'C_grant'
        });
      const v4490 = true;
      const v4491 = await txn1.getOutput('C_grant', 'v4490', ctc4, v4490);
      if (v1300) {
        stdlib.protect(ctc0, await interact.out(v4229, v4491), {
          at: './index.rsh:367:11:application',
          fs: ['at ./index.rsh:367:11:application call to [unknown function] (defined at: ./index.rsh:367:11:function exp)', 'at ./index.rsh:375:12:application call to "k" (defined at: ./index.rsh:370:13:function exp)', 'at ./index.rsh:370:13:application call to [unknown function] (defined at: ./index.rsh:370:13:function exp)'],
          msg: 'out',
          who: 'C_grant'
          });
        }
      else {
        }
      
      const v4497 = v2174.closed;
      const v4499 = v2174.providerCount;
      const v4500 = v2174.providerCounter;
      const v4501 = v2174.safeAmount;
      const v4502 = v2174.safeSize;
      const v4503 = v2174.subscriberCount;
      const v4504 = v2174.subscriberCounter;
      const v4505 = v2174.token;
      const v4506 = v2174.tokenAmount;
      const v4507 = {
        closed: v4497,
        constructor: v4470,
        providerCount: v4499,
        providerCounter: v4500,
        safeAmount: v4501,
        safeSize: v4502,
        subscriberCount: v4503,
        subscriberCounter: v4504,
        token: v4505,
        tokenAmount: v4506
        };
      const v16213 = v4507;
      const v16215 = v4507.closed;
      if (v16215) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'U1_announce0_208': {
      const v4829 = v2426[1];
      return;
      break;
      }
    case 'U2_claim0_208': {
      const v5429 = v2426[1];
      return;
      break;
      }
    case 'U2_subscribe0_208': {
      const v6029 = v2426[1];
      return;
      break;
      }
    }
  
  
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Struct([['periodCount', ctc1], ['periodAmount', ctc1], ['periodLength', ctc1], ['subscriberCount', ctc1], ['subscriberCounter', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc4]);
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc9, ctc9]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc15 = stdlib.T_Data({
    A_deleteProvider0_208: ctc10,
    A_deleteSubscription0_208: ctc11,
    C_close0_208: ctc12,
    C_grant0_208: ctc10,
    U1_announce0_208: ctc13,
    U2_claim0_208: ctc14,
    U2_subscribe0_208: ctc10
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:89:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:89:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v2144, time: v2143, didSend: v22, from: v2142 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2144, time: v2143, didSend: v22, from: v2142 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc7, ctc7],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v2153, v2154], secs: v2156, time: v2155, didSend: v36, from: v2152 } = txn2;
  ;
  const v2158 = await ctc.getContractInfo();
  const v2161 = [];
  const v2162 = [v2158, v2154];
  const v2163 = undefined /* Remote */;
  const v2164 = await txn2.getOutput('internal', 'v2163', ctc8, v2163);
  const v2166 = v2164[stdlib.checkedBigNumberify('./index.rsh:108:18:application', stdlib.UInt_max, '0')];
  const v2167 = v2164[stdlib.checkedBigNumberify('./index.rsh:108:18:application', stdlib.UInt_max, '1')];
  const v2172 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2166);
  stdlib.assert(v2172, {
    at: './index.rsh:108:18:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Deployer'
    });
  stdlib.assert(v2167, {
    at: './index.rsh:107:10:application',
    fs: [],
    msg: 'Child app not announced as ready',
    who: 'Deployer'
    });
  const v2173 = {
    closed: false,
    constructor: v2152,
    providerCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    providerCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    safeAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    safeSize: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    subscriberCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    token: v2154,
    tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v2174 = v2173;
  let v2175 = v2155;
  
  let txn3 = txn2;
  while (await (async () => {
    const v2206 = v2174.closed;
    const v2207 = v2206 ? false : true;
    
    return v2207;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2426], secs: v2428, time: v2427, didSend: v1300, from: v2425 } = txn4;
    switch (v2426[0]) {
      case 'A_deleteProvider0_208': {
        const v2429 = v2426[1];
        undefined /* setApiDetails */;
        ;
        const v2441 = v2429[stdlib.checkedBigNumberify('./index.rsh:325:10:spread', stdlib.UInt_max, '0')];
        const v2442 = v2174.subscriberCount;
        const v2443 = stdlib.eq(v2442, stdlib.checkedBigNumberify('./index.rsh:326:34:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2443, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:326:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:337:13:application call to [unknown function] (defined at: ./index.rsh:337:13:function exp)'],
          msg: 'not empty',
          who: 'Deployer'
          });
        const v2445 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v2441, ctc2), null);
        const v2446 = {
          None: 0,
          Some: 1
          }[v2445[0]];
        const v2447 = stdlib.eq(v2446, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2447, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:327:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:337:13:application call to [unknown function] (defined at: ./index.rsh:337:13:function exp)'],
          msg: 'invalid provider',
          who: 'Deployer'
          });
        let v2450;
        switch (v2445[0]) {
          case 'None': {
            const v2451 = v2445[1];
            v2450 = false;
            
            break;
            }
          case 'Some': {
            const v2452 = v2445[1];
            const v2453 = v2452.subscriberCount;
            const v2454 = stdlib.eq(v2453, stdlib.checkedBigNumberify('./index.rsh:329:74:decimal', stdlib.UInt_max, '0'));
            v2450 = v2454;
            
            break;
            }
          }
        stdlib.assert(v2450, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:328:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:337:13:application call to [unknown function] (defined at: ./index.rsh:337:13:function exp)'],
          msg: 'has subscribers',
          who: 'Deployer'
          });
        let v2457;
        switch (v2445[0]) {
          case 'None': {
            const v2458 = v2445[1];
            v2457 = false;
            
            break;
            }
          case 'Some': {
            const v2459 = v2445[1];
            const v2460 = v2459.subscriberCounter;
            const v2461 = stdlib.eq(v2460, stdlib.checkedBigNumberify('./index.rsh:333:76:decimal', stdlib.UInt_max, '0'));
            const v2462 = v2461 ? false : true;
            v2457 = v2462;
            
            break;
            }
          }
        stdlib.assert(v2457, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:332:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:337:13:application call to [unknown function] (defined at: ./index.rsh:337:13:function exp)'],
          msg: 'no subscribers',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc9, v2441, ctc2, undefined /* Nothing */);
        const v2465 = true;
        await txn4.getOutput('A_deleteProvider', 'v2465', ctc4, v2465);
        const v2476 = [v2158, v2154, v2441];
        const v2477 = ['DeleteProvider', v2476];
        const v2478 = undefined /* Remote */;
        const v2479 = await txn4.getOutput('internal', 'v2478', ctc8, v2478);
        const v2481 = v2479[stdlib.checkedBigNumberify('./index.rsh:341:27:application', stdlib.UInt_max, '0')];
        const v2482 = v2479[stdlib.checkedBigNumberify('./index.rsh:341:27:application', stdlib.UInt_max, '1')];
        const v2487 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2481);
        stdlib.assert(v2487, {
          at: './index.rsh:341:27:application',
          fs: ['at ./index.rsh:337:13:application call to [unknown function] (defined at: ./index.rsh:337:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v2482, {
          at: './index.rsh:340:18:application',
          fs: ['at ./index.rsh:337:13:application call to [unknown function] (defined at: ./index.rsh:337:13:function exp)'],
          msg: 'Child app rejected deleteProvider',
          who: 'Deployer'
          });
        const v2488 = v2174.closed;
        const v2489 = v2174.constructor;
        const v2490 = v2174.providerCount;
        const v2491 = v2174.providerCounter;
        const v2492 = v2174.safeAmount;
        const v2493 = v2174.safeSize;
        const v2495 = v2174.subscriberCounter;
        const v2496 = v2174.token;
        const v2497 = v2174.tokenAmount;
        const v2499 = stdlib.safeSub(v2490, stdlib.checkedBigNumberify('./index.rsh:346:60:decimal', stdlib.UInt_max, '1'));
        const v2500 = {
          closed: v2488,
          constructor: v2489,
          providerCount: v2499,
          providerCounter: v2491,
          safeAmount: v2492,
          safeSize: v2493,
          subscriberCount: v2442,
          subscriberCounter: v2495,
          token: v2496,
          tokenAmount: v2497
          };
        const cv2174 = v2500;
        const cv2175 = v2427;
        
        v2174 = cv2174;
        v2175 = cv2175;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'A_deleteSubscription0_208': {
        const v3029 = v2426[1];
        undefined /* setApiDetails */;
        ;
        const v3104 = v3029[stdlib.checkedBigNumberify('./index.rsh:286:10:spread', stdlib.UInt_max, '0')];
        const v3105 = v3029[stdlib.checkedBigNumberify('./index.rsh:286:10:spread', stdlib.UInt_max, '1')];
        const v3106 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v3104, ctc2), null);
        const v3107 = {
          None: 0,
          Some: 1
          }[v3106[0]];
        const v3108 = stdlib.eq(v3107, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3108, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:287:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:295:13:application call to [unknown function] (defined at: ./index.rsh:295:13:function exp)'],
          msg: 'invalid provider',
          who: 'Deployer'
          });
        const v3110 = [v3104, v3105];
        const v3111 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v3110, ctc5), null);
        const v3112 = {
          None: 0,
          Some: 1
          }[v3111[0]];
        const v3113 = stdlib.eq(v3112, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3113, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:288:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:295:13:application call to [unknown function] (defined at: ./index.rsh:295:13:function exp)'],
          msg: 'not subscribed',
          who: 'Deployer'
          });
        const v3117 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
        const v3118 = stdlib.fromSome(v3111, v3117);
        const v3119 = v3118[stdlib.checkedBigNumberify('./index.rsh:289:48:array ref', stdlib.UInt_max, '0')];
        const v3120 = stdlib.eq(v3119, stdlib.checkedBigNumberify('./index.rsh:289:55:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v3120, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:289:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:295:13:application call to [unknown function] (defined at: ./index.rsh:295:13:function exp)'],
          msg: 'not empty',
          who: 'Deployer'
          });
        let v3123;
        switch (v3106[0]) {
          case 'None': {
            const v3124 = v3106[1];
            v3123 = false;
            
            break;
            }
          case 'Some': {
            const v3125 = v3106[1];
            const v3126 = v3125.subscriberCount;
            const v3127 = stdlib.gt(v3126, stdlib.checkedBigNumberify('./index.rsh:291:76:decimal', stdlib.UInt_max, '0'));
            v3123 = v3127;
            
            break;
            }
          }
        stdlib.assert(v3123, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:290:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:295:13:application call to [unknown function] (defined at: ./index.rsh:295:13:function exp)'],
          msg: 'no subscribers',
          who: 'Deployer'
          });
        await stdlib.mapSet(map1, ctc11, v3110, ctc5, undefined /* Nothing */);
        switch (v3106[0]) {
          case 'None': {
            const v3133 = v3106[1];
            const v3138 = [v2158, v2154, v3104, v3105];
            const v3139 = ['DeleteSubscription', v3138];
            const v3140 = undefined /* Remote */;
            const v3141 = await txn4.getOutput('internal', 'v3140', ctc8, v3140);
            const v3143 = v3141[stdlib.checkedBigNumberify('./index.rsh:310:27:application', stdlib.UInt_max, '0')];
            const v3144 = v3141[stdlib.checkedBigNumberify('./index.rsh:310:27:application', stdlib.UInt_max, '1')];
            const v3149 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3143);
            stdlib.assert(v3149, {
              at: './index.rsh:310:27:application',
              fs: ['at ./index.rsh:295:13:application call to [unknown function] (defined at: ./index.rsh:295:13:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            stdlib.assert(v3144, {
              at: './index.rsh:309:18:application',
              fs: ['at ./index.rsh:295:13:application call to [unknown function] (defined at: ./index.rsh:295:13:function exp)'],
              msg: 'Child app rejected deleteSubscription',
              who: 'Deployer'
              });
            const v3150 = true;
            await txn4.getOutput('A_deleteSubscription', 'v3150', ctc4, v3150);
            const v3158 = v2174.closed;
            const v3159 = v2174.constructor;
            const v3160 = v2174.providerCount;
            const v3161 = v2174.providerCounter;
            const v3162 = v2174.safeAmount;
            const v3163 = v2174.safeSize;
            const v3164 = v2174.subscriberCount;
            const v3165 = v2174.subscriberCounter;
            const v3166 = v2174.token;
            const v3167 = v2174.tokenAmount;
            const v3169 = stdlib.safeSub(v3164, stdlib.checkedBigNumberify('./index.rsh:321:64:decimal', stdlib.UInt_max, '1'));
            const v3170 = {
              closed: v3158,
              constructor: v3159,
              providerCount: v3160,
              providerCounter: v3161,
              safeAmount: v3162,
              safeSize: v3163,
              subscriberCount: v3169,
              subscriberCounter: v3165,
              token: v3166,
              tokenAmount: v3167
              };
            const cv2174 = v3170;
            const cv2175 = v2427;
            
            v2174 = cv2174;
            v2175 = cv2175;
            
            txn3 = txn4;
            continue;
            break;
            }
          case 'Some': {
            const v3173 = v3106[1];
            const v3174 = v3173.periodCount;
            const v3175 = v3173.periodAmount;
            const v3176 = v3173.periodLength;
            const v3177 = v3173.subscriberCounter;
            const v3178 = v3173.subscriberCount;
            const v3179 = stdlib.safeSub(v3178, stdlib.checkedBigNumberify('./index.rsh:306:68:decimal', stdlib.UInt_max, '1'));
            const v3180 = {
              periodAmount: v3175,
              periodCount: v3174,
              periodLength: v3176,
              subscriberCount: v3179,
              subscriberCounter: v3177
              };
            await stdlib.mapSet(map0, ctc9, v3104, ctc2, v3180);
            const v3185 = [v2158, v2154, v3104, v3105];
            const v3186 = ['DeleteSubscription', v3185];
            const v3187 = undefined /* Remote */;
            const v3188 = await txn4.getOutput('internal', 'v3187', ctc8, v3187);
            const v3190 = v3188[stdlib.checkedBigNumberify('./index.rsh:310:27:application', stdlib.UInt_max, '0')];
            const v3191 = v3188[stdlib.checkedBigNumberify('./index.rsh:310:27:application', stdlib.UInt_max, '1')];
            const v3196 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3190);
            stdlib.assert(v3196, {
              at: './index.rsh:310:27:application',
              fs: ['at ./index.rsh:295:13:application call to [unknown function] (defined at: ./index.rsh:295:13:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            stdlib.assert(v3191, {
              at: './index.rsh:309:18:application',
              fs: ['at ./index.rsh:295:13:application call to [unknown function] (defined at: ./index.rsh:295:13:function exp)'],
              msg: 'Child app rejected deleteSubscription',
              who: 'Deployer'
              });
            const v3197 = true;
            await txn4.getOutput('A_deleteSubscription', 'v3197', ctc4, v3197);
            const v3205 = v2174.closed;
            const v3206 = v2174.constructor;
            const v3207 = v2174.providerCount;
            const v3208 = v2174.providerCounter;
            const v3209 = v2174.safeAmount;
            const v3210 = v2174.safeSize;
            const v3211 = v2174.subscriberCount;
            const v3212 = v2174.subscriberCounter;
            const v3213 = v2174.token;
            const v3214 = v2174.tokenAmount;
            const v3216 = stdlib.safeSub(v3211, stdlib.checkedBigNumberify('./index.rsh:321:64:decimal', stdlib.UInt_max, '1'));
            const v3217 = {
              closed: v3205,
              constructor: v3206,
              providerCount: v3207,
              providerCounter: v3208,
              safeAmount: v3209,
              safeSize: v3210,
              subscriberCount: v3216,
              subscriberCounter: v3212,
              token: v3213,
              tokenAmount: v3214
              };
            const cv2174 = v3217;
            const cv2175 = v2427;
            
            v2174 = cv2174;
            v2175 = cv2175;
            
            txn3 = txn4;
            continue;
            break;
            }
          }
        break;
        }
      case 'C_close0_208': {
        const v3629 = v2426[1];
        undefined /* setApiDetails */;
        ;
        const v3821 = v2174.providerCounter;
        const v3822 = stdlib.eq(v3821, stdlib.checkedBigNumberify('./index.rsh:352:34:decimal', stdlib.UInt_max, '0'));
        const v3823 = v3822 ? false : true;
        stdlib.assert(v3823, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:352:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:357:13:application call to [unknown function] (defined at: ./index.rsh:357:13:function exp)'],
          msg: 'no providers',
          who: 'Deployer'
          });
        const v3825 = v2174.subscriberCounter;
        const v3826 = stdlib.eq(v3825, stdlib.checkedBigNumberify('./index.rsh:353:36:decimal', stdlib.UInt_max, '0'));
        const v3827 = v3826 ? false : true;
        stdlib.assert(v3827, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:353:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:357:13:application call to [unknown function] (defined at: ./index.rsh:357:13:function exp)'],
          msg: 'no subscribers',
          who: 'Deployer'
          });
        const v3829 = v2174.providerCount;
        const v3830 = stdlib.eq(v3829, stdlib.checkedBigNumberify('./index.rsh:354:32:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v3830, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:354:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:357:13:application call to [unknown function] (defined at: ./index.rsh:357:13:function exp)'],
          msg: 'providers not empty',
          who: 'Deployer'
          });
        const v3832 = v2174.subscriberCount;
        const v3833 = stdlib.eq(v3832, stdlib.checkedBigNumberify('./index.rsh:355:34:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v3833, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:355:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:357:13:application call to [unknown function] (defined at: ./index.rsh:357:13:function exp)'],
          msg: 'subscribers not empty',
          who: 'Deployer'
          });
        const v3840 = undefined /* Remote */;
        const v3841 = await txn4.getOutput('internal', 'v3840', ctc8, v3840);
        const v3843 = v3841[stdlib.checkedBigNumberify('./index.rsh:359:26:application', stdlib.UInt_max, '0')];
        const v3844 = v3841[stdlib.checkedBigNumberify('./index.rsh:359:26:application', stdlib.UInt_max, '1')];
        const v3849 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3843);
        stdlib.assert(v3849, {
          at: './index.rsh:359:26:application',
          fs: ['at ./index.rsh:357:13:application call to [unknown function] (defined at: ./index.rsh:357:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v3844, {
          at: './index.rsh:358:18:application',
          fs: ['at ./index.rsh:357:13:application call to [unknown function] (defined at: ./index.rsh:357:13:function exp)'],
          msg: 'Child app rejected close',
          who: 'Deployer'
          });
        const v3850 = true;
        await txn4.getOutput('C_close', 'v3850', ctc4, v3850);
        const v3857 = v2174.constructor;
        const v3860 = v2174.safeAmount;
        const v3861 = v2174.safeSize;
        const v3864 = v2174.token;
        const v3865 = v2174.tokenAmount;
        const v3866 = {
          closed: true,
          constructor: v3857,
          providerCount: v3829,
          providerCounter: v3821,
          safeAmount: v3860,
          safeSize: v3861,
          subscriberCount: v3832,
          subscriberCounter: v3825,
          token: v3864,
          tokenAmount: v3865
          };
        const cv2174 = v3866;
        const cv2175 = v2427;
        
        v2174 = cv2174;
        v2175 = cv2175;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'C_grant0_208': {
        const v4229 = v2426[1];
        undefined /* setApiDetails */;
        ;
        const v4470 = v4229[stdlib.checkedBigNumberify('./index.rsh:367:10:spread', stdlib.UInt_max, '0')];
        const v4471 = v2174.constructor;
        const v4472 = stdlib.addressEq(v2425, v4471);
        stdlib.assert(v4472, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:368:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:370:13:application call to [unknown function] (defined at: ./index.rsh:370:13:function exp)'],
          msg: 'Only constructor can grant',
          who: 'Deployer'
          });
        const v4479 = [v2158, v2154, v4470];
        const v4480 = undefined /* Remote */;
        const v4481 = await txn4.getOutput('internal', 'v4480', ctc8, v4480);
        const v4483 = v4481[stdlib.checkedBigNumberify('./index.rsh:372:26:application', stdlib.UInt_max, '0')];
        const v4484 = v4481[stdlib.checkedBigNumberify('./index.rsh:372:26:application', stdlib.UInt_max, '1')];
        const v4489 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4483);
        stdlib.assert(v4489, {
          at: './index.rsh:372:26:application',
          fs: ['at ./index.rsh:370:13:application call to [unknown function] (defined at: ./index.rsh:370:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v4484, {
          at: './index.rsh:371:18:application',
          fs: ['at ./index.rsh:370:13:application call to [unknown function] (defined at: ./index.rsh:370:13:function exp)'],
          msg: 'Child app rejected grant',
          who: 'Deployer'
          });
        const v4490 = true;
        await txn4.getOutput('C_grant', 'v4490', ctc4, v4490);
        const v4497 = v2174.closed;
        const v4499 = v2174.providerCount;
        const v4500 = v2174.providerCounter;
        const v4501 = v2174.safeAmount;
        const v4502 = v2174.safeSize;
        const v4503 = v2174.subscriberCount;
        const v4504 = v2174.subscriberCounter;
        const v4505 = v2174.token;
        const v4506 = v2174.tokenAmount;
        const v4507 = {
          closed: v4497,
          constructor: v4470,
          providerCount: v4499,
          providerCounter: v4500,
          safeAmount: v4501,
          safeSize: v4502,
          subscriberCount: v4503,
          subscriberCounter: v4504,
          token: v4505,
          tokenAmount: v4506
          };
        const cv2174 = v4507;
        const cv2175 = v2427;
        
        v2174 = cv2174;
        v2175 = cv2175;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U1_announce0_208': {
        const v4829 = v2426[1];
        undefined /* setApiDetails */;
        ;
        const v5111 = v4829[stdlib.checkedBigNumberify('./index.rsh:147:10:spread', stdlib.UInt_max, '0')];
        const v5112 = v4829[stdlib.checkedBigNumberify('./index.rsh:147:10:spread', stdlib.UInt_max, '1')];
        const v5113 = v4829[stdlib.checkedBigNumberify('./index.rsh:147:10:spread', stdlib.UInt_max, '2')];
        const v5114 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v2425, ctc2), null);
        const v5115 = {
          None: 0,
          Some: 1
          }[v5114[0]];
        const v5116 = stdlib.eq(v5115, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v5116, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:148:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:150:13:application call to [unknown function] (defined at: ./index.rsh:150:13:function exp)'],
          msg: 'provider already exists',
          who: 'Deployer'
          });
        const v5121 = {
          periodAmount: v5112,
          periodCount: v5111,
          periodLength: v5113,
          subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          subscriberCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        await stdlib.mapSet(map0, ctc9, v2425, ctc2, v5121);
        const v5126 = [v2158, v2154, v2425, v5111, v5112, v5113];
        const v5127 = undefined /* Remote */;
        const v5128 = await txn4.getOutput('internal', 'v5127', ctc8, v5127);
        const v5130 = v5128[stdlib.checkedBigNumberify('./index.rsh:160:29:application', stdlib.UInt_max, '0')];
        const v5131 = v5128[stdlib.checkedBigNumberify('./index.rsh:160:29:application', stdlib.UInt_max, '1')];
        const v5136 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5130);
        stdlib.assert(v5136, {
          at: './index.rsh:160:29:application',
          fs: ['at ./index.rsh:150:13:application call to [unknown function] (defined at: ./index.rsh:150:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v5131, {
          at: './index.rsh:159:18:application',
          fs: ['at ./index.rsh:150:13:application call to [unknown function] (defined at: ./index.rsh:150:13:function exp)'],
          msg: 'Child app rejected announcement',
          who: 'Deployer'
          });
        const v5137 = true;
        await txn4.getOutput('U1_announce', 'v5137', ctc4, v5137);
        const v5146 = v2174.closed;
        const v5147 = v2174.constructor;
        const v5148 = v2174.providerCount;
        const v5149 = v2174.providerCounter;
        const v5150 = v2174.safeAmount;
        const v5151 = v2174.safeSize;
        const v5152 = v2174.subscriberCount;
        const v5153 = v2174.subscriberCounter;
        const v5154 = v2174.token;
        const v5155 = v2174.tokenAmount;
        const v5157 = stdlib.safeAdd(v5148, stdlib.checkedBigNumberify('./index.rsh:174:48:decimal', stdlib.UInt_max, '1'));
        const v5159 = stdlib.safeAdd(v5149, stdlib.checkedBigNumberify('./index.rsh:175:52:decimal', stdlib.UInt_max, '1'));
        const v5160 = {
          closed: v5146,
          constructor: v5147,
          providerCount: v5157,
          providerCounter: v5159,
          safeAmount: v5150,
          safeSize: v5151,
          subscriberCount: v5152,
          subscriberCounter: v5153,
          token: v5154,
          tokenAmount: v5155
          };
        const cv2174 = v5160;
        const cv2175 = v2427;
        
        v2174 = cv2174;
        v2175 = cv2175;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U2_claim0_208': {
        const v5429 = v2426[1];
        undefined /* setApiDetails */;
        ;
        const v5764 = v5429[stdlib.checkedBigNumberify('./index.rsh:244:10:spread', stdlib.UInt_max, '0')];
        const v5765 = v5429[stdlib.checkedBigNumberify('./index.rsh:244:10:spread', stdlib.UInt_max, '1')];
        const v5766 = v5429[stdlib.checkedBigNumberify('./index.rsh:244:10:spread', stdlib.UInt_max, '2')];
        const v5767 = [v5764, v5765];
        const v5768 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v5767, ctc5), null);
        const v5769 = {
          None: 0,
          Some: 1
          }[v5768[0]];
        const v5770 = stdlib.eq(v5769, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5770, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:245:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
          msg: 'not subscribed',
          who: 'Deployer'
          });
        const v5772 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v5764, ctc2), null);
        let v5773;
        switch (v5772[0]) {
          case 'None': {
            const v5774 = v5772[1];
            v5773 = stdlib.checkedBigNumberify('./index.rsh:234:39:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v5775 = v5772[1];
            const v5776 = v5775.periodAmount;
            const v5777 = stdlib.safeMul(v5776, v5766);
            v5773 = v5777;
            
            break;
            }
          }
        const v5780 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
        const v5781 = stdlib.fromSome(v5768, v5780);
        const v5782 = v5781[stdlib.checkedBigNumberify('./index.rsh:247:73:array ref', stdlib.UInt_max, '0')];
        const v5783 = stdlib.le(v5773, v5782);
        stdlib.assert(v5783, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:246:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
          msg: 'not enough remaining',
          who: 'Deployer'
          });
        const v5793 = v5781[stdlib.checkedBigNumberify('./index.rsh:252:17:array', stdlib.UInt_max, '1')];
        let v5797;
        switch (v5772[0]) {
          case 'None': {
            const v5798 = v5772[1];
            v5797 = stdlib.checkedBigNumberify('./index.rsh:239:39:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v5799 = v5772[1];
            const v5800 = v5799.periodLength;
            const v5801 = stdlib.safeMul(v5766, v5800);
            v5797 = v5801;
            
            break;
            }
          }
        const v5802 = stdlib.safeAdd(v5793, v5797);
        const v5803 = stdlib.ge(v2427, v5802);
        stdlib.assert(v5803, {
          at: './index.rsh:253:18:application',
          fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
          msg: 'not enough time has passed',
          who: 'Deployer'
          });
        const v5804 = await ctc.getContractAddress();
        const v5805 = [v2154, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5765];
        const v5806 = [v2154, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5764];
        const v5807 = [v5765, v5804];
        const v5808 = [v2154, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v5807];
        let v5810;
        switch (v5772[0]) {
          case 'None': {
            const v5811 = v5772[1];
            v5810 = stdlib.checkedBigNumberify('./index.rsh:234:39:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v5812 = v5772[1];
            const v5813 = v5812.periodAmount;
            const v5814 = stdlib.safeMul(v5813, v5766);
            v5810 = v5814;
            
            break;
            }
          }
        const v5818 = undefined /* Remote */;
        const v5819 = await txn4.getOutput('internal', 'v5818', ctc8, v5818);
        const v5821 = v5819[stdlib.checkedBigNumberify('./index.rsh:270:15:application', stdlib.UInt_max, '0')];
        const v5822 = v5819[stdlib.checkedBigNumberify('./index.rsh:270:15:application', stdlib.UInt_max, '1')];
        const v5827 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5821);
        stdlib.assert(v5827, {
          at: './index.rsh:270:15:application',
          fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v5822, {
          at: './index.rsh:261:18:application',
          fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
          msg: 'transfer failed',
          who: 'Deployer'
          });
        const v5829 = [v2158, v2154, v5764, v5765, v5766];
        null;
        let v5832;
        switch (v5772[0]) {
          case 'None': {
            const v5833 = v5772[1];
            v5832 = stdlib.checkedBigNumberify('./index.rsh:234:39:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v5834 = v5772[1];
            const v5835 = v5834.periodAmount;
            const v5836 = stdlib.safeMul(v5835, v5766);
            v5832 = v5836;
            
            break;
            }
          }
        const v5837 = stdlib.safeSub(v5782, v5832);
        let v5839;
        switch (v5772[0]) {
          case 'None': {
            const v5840 = v5772[1];
            v5839 = stdlib.checkedBigNumberify('./index.rsh:239:39:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v5841 = v5772[1];
            const v5842 = v5841.periodLength;
            const v5843 = stdlib.safeMul(v5766, v5842);
            v5839 = v5843;
            
            break;
            }
          }
        const v5844 = stdlib.safeAdd(v5793, v5839);
        const v5845 = [v5837, v5844, true];
        await stdlib.mapSet(map1, ctc11, v5767, ctc5, v5845);
        const v5846 = true;
        await txn4.getOutput('U2_claim', 'v5846', ctc4, v5846);
        const v5855 = v2174.closed;
        const v5856 = v2174.constructor;
        const v5857 = v2174.providerCount;
        const v5858 = v2174.providerCounter;
        const v5859 = v2174.safeAmount;
        const v5860 = v2174.safeSize;
        const v5861 = v2174.subscriberCount;
        const v5862 = v2174.subscriberCounter;
        const v5863 = v2174.token;
        const v5864 = v2174.tokenAmount;
        let v5867;
        switch (v5772[0]) {
          case 'None': {
            const v5868 = v5772[1];
            v5867 = stdlib.checkedBigNumberify('./index.rsh:234:39:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v5869 = v5772[1];
            const v5870 = v5869.periodAmount;
            const v5871 = stdlib.safeMul(v5870, v5766);
            v5867 = v5871;
            
            break;
            }
          }
        const v5872 = stdlib.safeSub(v5859, v5867);
        const v5873 = {
          closed: v5855,
          constructor: v5856,
          providerCount: v5857,
          providerCounter: v5858,
          safeAmount: v5872,
          safeSize: v5860,
          subscriberCount: v5861,
          subscriberCounter: v5862,
          token: v5863,
          tokenAmount: v5864
          };
        const cv2174 = v5873;
        const cv2175 = v2427;
        
        v2174 = cv2174;
        v2175 = cv2175;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U2_subscribe0_208': {
        const v6029 = v2426[1];
        undefined /* setApiDetails */;
        ;
        const v6477 = v6029[stdlib.checkedBigNumberify('./index.rsh:193:10:spread', stdlib.UInt_max, '0')];
        const v6478 = [v6477, v2425];
        const v6479 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v6478, ctc5), null);
        const v6480 = {
          None: 0,
          Some: 1
          }[v6479[0]];
        const v6481 = stdlib.eq(v6480, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v6481, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:194:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)'],
          msg: 'already subscribed',
          who: 'Deployer'
          });
        const v6483 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v6477, ctc2), null);
        const v6484 = {
          None: 0,
          Some: 1
          }[v6483[0]];
        const v6485 = stdlib.eq(v6484, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v6485, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:195:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)'],
          msg: 'invalid provider',
          who: 'Deployer'
          });
        let v6489;
        switch (v6483[0]) {
          case 'None': {
            const v6491 = v6483[1];
            v6489 = stdlib.checkedBigNumberify('./index.rsh:186:20:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v6492 = v6483[1];
            const v6493 = v6492.periodCount;
            const v6494 = v6492.periodAmount;
            const v6495 = stdlib.safeMul(v6494, v6493);
            v6489 = v6495;
            
            break;
            }
          }
        const v6497 = [v6489, v2427, true];
        await stdlib.mapSet(map1, ctc11, v6478, ctc5, v6497);
        switch (v6483[0]) {
          case 'None': {
            const v6499 = v6483[1];
            const v6504 = [v2158, v2154, v6477, v2425];
            const v6505 = undefined /* Remote */;
            const v6506 = await txn4.getOutput('internal', 'v6505', ctc8, v6505);
            const v6508 = v6506[stdlib.checkedBigNumberify('./index.rsh:216:30:application', stdlib.UInt_max, '0')];
            const v6509 = v6506[stdlib.checkedBigNumberify('./index.rsh:216:30:application', stdlib.UInt_max, '1')];
            const v6514 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6508);
            stdlib.assert(v6514, {
              at: './index.rsh:216:30:application',
              fs: ['at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            stdlib.assert(v6509, {
              at: './index.rsh:215:18:application',
              fs: ['at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)'],
              msg: 'Child app rejected subscription',
              who: 'Deployer'
              });
            const v6515 = true;
            await txn4.getOutput('U2_subscribe', 'v6515', ctc4, v6515);
            const v6522 = v2174.closed;
            const v6523 = v2174.constructor;
            const v6524 = v2174.providerCount;
            const v6525 = v2174.providerCounter;
            const v6526 = v2174.safeAmount;
            const v6527 = v2174.safeSize;
            const v6528 = v2174.subscriberCount;
            const v6529 = v2174.subscriberCounter;
            const v6530 = v2174.token;
            const v6531 = v2174.tokenAmount;
            const v6533 = stdlib.safeAdd(v6528, stdlib.checkedBigNumberify('./index.rsh:223:52:decimal', stdlib.UInt_max, '1'));
            const v6535 = stdlib.safeAdd(v6529, stdlib.checkedBigNumberify('./index.rsh:224:56:decimal', stdlib.UInt_max, '1'));
            const v6555 = stdlib.gt(v6527, v6526);
            const v6556 = v6555 ? v6527 : v6526;
            const v6557 = {
              closed: v6522,
              constructor: v6523,
              providerCount: v6524,
              providerCounter: v6525,
              safeAmount: v6526,
              safeSize: v6556,
              subscriberCount: v6533,
              subscriberCounter: v6535,
              token: v6530,
              tokenAmount: v6531
              };
            const cv2174 = v6557;
            const cv2175 = v2427;
            
            v2174 = cv2174;
            v2175 = cv2175;
            
            txn3 = txn4;
            continue;
            break;
            }
          case 'Some': {
            const v6560 = v6483[1];
            const v6561 = v6560.periodCount;
            const v6562 = v6560.periodAmount;
            const v6563 = v6560.periodLength;
            const v6564 = v6560.subscriberCounter;
            const v6565 = stdlib.safeAdd(v6564, stdlib.checkedBigNumberify('./index.rsh:211:72:decimal', stdlib.UInt_max, '1'));
            const v6566 = v6560.subscriberCount;
            const v6567 = stdlib.safeAdd(v6566, stdlib.checkedBigNumberify('./index.rsh:212:68:decimal', stdlib.UInt_max, '1'));
            const v6568 = {
              periodAmount: v6562,
              periodCount: v6561,
              periodLength: v6563,
              subscriberCount: v6567,
              subscriberCounter: v6565
              };
            await stdlib.mapSet(map0, ctc9, v6477, ctc2, v6568);
            const v6573 = [v2158, v2154, v6477, v2425];
            const v6574 = undefined /* Remote */;
            const v6575 = await txn4.getOutput('internal', 'v6574', ctc8, v6574);
            const v6577 = v6575[stdlib.checkedBigNumberify('./index.rsh:216:30:application', stdlib.UInt_max, '0')];
            const v6578 = v6575[stdlib.checkedBigNumberify('./index.rsh:216:30:application', stdlib.UInt_max, '1')];
            const v6583 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6577);
            stdlib.assert(v6583, {
              at: './index.rsh:216:30:application',
              fs: ['at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            stdlib.assert(v6578, {
              at: './index.rsh:215:18:application',
              fs: ['at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)'],
              msg: 'Child app rejected subscription',
              who: 'Deployer'
              });
            const v6584 = true;
            await txn4.getOutput('U2_subscribe', 'v6584', ctc4, v6584);
            const v6591 = v2174.closed;
            const v6592 = v2174.constructor;
            const v6593 = v2174.providerCount;
            const v6594 = v2174.providerCounter;
            const v6595 = v2174.safeAmount;
            const v6596 = v2174.safeSize;
            const v6597 = v2174.subscriberCount;
            const v6598 = v2174.subscriberCounter;
            const v6599 = v2174.token;
            const v6600 = v2174.tokenAmount;
            const v6602 = stdlib.safeAdd(v6597, stdlib.checkedBigNumberify('./index.rsh:223:52:decimal', stdlib.UInt_max, '1'));
            const v6604 = stdlib.safeAdd(v6598, stdlib.checkedBigNumberify('./index.rsh:224:56:decimal', stdlib.UInt_max, '1'));
            const v6610 = v6568.periodCount;
            const v6611 = v6568.periodAmount;
            const v6612 = stdlib.safeMul(v6611, v6610);
            const v6613 = stdlib.safeAdd(v6595, v6612);
            const v6624 = stdlib.gt(v6596, v6613);
            const v6625 = v6624 ? v6596 : v6613;
            const v6626 = {
              closed: v6591,
              constructor: v6592,
              providerCount: v6593,
              providerCounter: v6594,
              safeAmount: v6613,
              safeSize: v6625,
              subscriberCount: v6602,
              subscriberCounter: v6604,
              token: v6599,
              tokenAmount: v6600
              };
            const cv2174 = v6626;
            const cv2175 = v2427;
            
            v2174 = cv2174;
            v2175 = cv2175;
            
            txn3 = txn4;
            continue;
            break;
            }
          }
        break;
        }
      }
    
    }
  return;
  
  
  
  
  };
export async function _U1_announce4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _U1_announce4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _U1_announce4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Struct([['periodCount', ctc1], ['periodAmount', ctc1], ['periodLength', ctc1], ['subscriberCount', ctc1], ['subscriberCounter', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc4]);
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Object({
    closed: ctc4,
    constructor: ctc10,
    providerCount: ctc1,
    providerCounter: ctc1,
    safeAmount: ctc1,
    safeSize: ctc1,
    subscriberCount: ctc1,
    subscriberCounter: ctc1,
    token: ctc7,
    tokenAmount: ctc1
    });
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc10]);
  const ctc14 = stdlib.T_Tuple([ctc10, ctc10]);
  const ctc15 = stdlib.T_Tuple([ctc10, ctc10, ctc1]);
  const ctc16 = stdlib.T_Data({
    A_deleteProvider0_208: ctc13,
    A_deleteSubscription0_208: ctc14,
    C_close0_208: ctc8,
    C_grant0_208: ctc13,
    U1_announce0_208: ctc12,
    U2_claim0_208: ctc15,
    U2_subscribe0_208: ctc13
    });
  const ctc17 = stdlib.T_Tuple([ctc1, ctc4]);
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2153, v2154, v2158, v2161, v2162, v2174] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc7, ctc7, ctc7, ctc8, ctc9, ctc11]);
  const v2225 = ctc.selfAddress();
  const v2227 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:147:68:application call to [unknown function] (defined at: ./index.rsh:147:68:function exp)', 'at ./index.rsh:128:29:application call to "runU1_announce0_208" (defined at: ./index.rsh:147:10:function exp)', 'at ./index.rsh:128:29:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
    msg: 'in',
    who: 'U1_announce'
    });
  const v2234 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v2225, ctc2), null);
  const v2235 = {
    None: 0,
    Some: 1
    }[v2234[0]];
  const v2236 = stdlib.eq(v2235, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v2236, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:148:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:68:application call to [unknown function] (defined at: ./index.rsh:147:68:function exp)', 'at ./index.rsh:128:29:application call to "runU1_announce0_208" (defined at: ./index.rsh:147:10:function exp)', 'at ./index.rsh:128:29:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
    msg: 'provider already exists',
    who: 'U1_announce'
    });
  const v2247 = ['U1_announce0_208', v2227];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2153, v2154, v2158, v2161, v2162, v2174, v2247],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:147:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2426], secs: v2428, time: v2427, didSend: v1300, from: v2425 } = txn1;
      
      switch (v2426[0]) {
        case 'A_deleteProvider0_208': {
          const v2429 = v2426[1];
          
          break;
          }
        case 'A_deleteSubscription0_208': {
          const v3029 = v2426[1];
          
          break;
          }
        case 'C_close0_208': {
          const v3629 = v2426[1];
          
          break;
          }
        case 'C_grant0_208': {
          const v4229 = v2426[1];
          
          break;
          }
        case 'U1_announce0_208': {
          const v4829 = v2426[1];
          sim_r.txns.push({
            kind: 'api',
            who: "U1_announce"
            });
          ;
          const v5111 = v4829[stdlib.checkedBigNumberify('./index.rsh:147:10:spread', stdlib.UInt_max, '0')];
          const v5112 = v4829[stdlib.checkedBigNumberify('./index.rsh:147:10:spread', stdlib.UInt_max, '1')];
          const v5113 = v4829[stdlib.checkedBigNumberify('./index.rsh:147:10:spread', stdlib.UInt_max, '2')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc10, v2425, ctc2), null);
          const v5121 = {
            periodAmount: v5112,
            periodCount: v5111,
            periodLength: v5113,
            subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            subscriberCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          await stdlib.simMapSet(sim_r, 0, ctc10, v2425, ctc2, v5121);
          const v5126 = [v2158, v2154, v2425, v5111, v5112, v5113];
          const v5127 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v2153,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:160:29:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:160:29:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc4.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v5127', ctc17, v5127);
          const v5137 = true;
          const v5138 = await txn1.getOutput('U1_announce', 'v5137', ctc4, v5137);
          
          const v5146 = v2174.closed;
          const v5147 = v2174.constructor;
          const v5148 = v2174.providerCount;
          const v5149 = v2174.providerCounter;
          const v5150 = v2174.safeAmount;
          const v5151 = v2174.safeSize;
          const v5152 = v2174.subscriberCount;
          const v5153 = v2174.subscriberCounter;
          const v5154 = v2174.token;
          const v5155 = v2174.tokenAmount;
          const v5157 = stdlib.safeAdd(v5148, stdlib.checkedBigNumberify('./index.rsh:174:48:decimal', stdlib.UInt_max, '1'));
          const v5159 = stdlib.safeAdd(v5149, stdlib.checkedBigNumberify('./index.rsh:175:52:decimal', stdlib.UInt_max, '1'));
          const v5160 = {
            closed: v5146,
            constructor: v5147,
            providerCount: v5157,
            providerCounter: v5159,
            safeAmount: v5150,
            safeSize: v5151,
            subscriberCount: v5152,
            subscriberCounter: v5153,
            token: v5154,
            tokenAmount: v5155
            };
          const v16253 = v5160;
          const v16255 = v5160.closed;
          if (v16255) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'U2_claim0_208': {
          const v5429 = v2426[1];
          
          break;
          }
        case 'U2_subscribe0_208': {
          const v6029 = v2426[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc7, ctc7, ctc8, ctc9, ctc11, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v2426], secs: v2428, time: v2427, didSend: v1300, from: v2425 } = txn1;
  switch (v2426[0]) {
    case 'A_deleteProvider0_208': {
      const v2429 = v2426[1];
      return;
      break;
      }
    case 'A_deleteSubscription0_208': {
      const v3029 = v2426[1];
      return;
      break;
      }
    case 'C_close0_208': {
      const v3629 = v2426[1];
      return;
      break;
      }
    case 'C_grant0_208': {
      const v4229 = v2426[1];
      return;
      break;
      }
    case 'U1_announce0_208': {
      const v4829 = v2426[1];
      undefined /* setApiDetails */;
      ;
      const v5111 = v4829[stdlib.checkedBigNumberify('./index.rsh:147:10:spread', stdlib.UInt_max, '0')];
      const v5112 = v4829[stdlib.checkedBigNumberify('./index.rsh:147:10:spread', stdlib.UInt_max, '1')];
      const v5113 = v4829[stdlib.checkedBigNumberify('./index.rsh:147:10:spread', stdlib.UInt_max, '2')];
      const v5114 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v2425, ctc2), null);
      const v5115 = {
        None: 0,
        Some: 1
        }[v5114[0]];
      const v5116 = stdlib.eq(v5115, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v5116, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:148:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:150:13:application call to [unknown function] (defined at: ./index.rsh:150:13:function exp)'],
        msg: 'provider already exists',
        who: 'U1_announce'
        });
      const v5121 = {
        periodAmount: v5112,
        periodCount: v5111,
        periodLength: v5113,
        subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        subscriberCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      await stdlib.mapSet(map0, ctc10, v2425, ctc2, v5121);
      const v5126 = [v2158, v2154, v2425, v5111, v5112, v5113];
      const v5127 = undefined /* Remote */;
      const v5128 = await txn1.getOutput('internal', 'v5127', ctc17, v5127);
      const v5130 = v5128[stdlib.checkedBigNumberify('./index.rsh:160:29:application', stdlib.UInt_max, '0')];
      const v5131 = v5128[stdlib.checkedBigNumberify('./index.rsh:160:29:application', stdlib.UInt_max, '1')];
      const v5136 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5130);
      stdlib.assert(v5136, {
        at: './index.rsh:160:29:application',
        fs: ['at ./index.rsh:150:13:application call to [unknown function] (defined at: ./index.rsh:150:13:function exp)'],
        msg: 'remote bill check',
        who: 'U1_announce'
        });
      stdlib.assert(v5131, {
        at: './index.rsh:159:18:application',
        fs: ['at ./index.rsh:150:13:application call to [unknown function] (defined at: ./index.rsh:150:13:function exp)'],
        msg: 'Child app rejected announcement',
        who: 'U1_announce'
        });
      const v5137 = true;
      const v5138 = await txn1.getOutput('U1_announce', 'v5137', ctc4, v5137);
      if (v1300) {
        stdlib.protect(ctc0, await interact.out(v4829, v5138), {
          at: './index.rsh:147:11:application',
          fs: ['at ./index.rsh:147:11:application call to [unknown function] (defined at: ./index.rsh:147:11:function exp)', 'at ./index.rsh:170:12:application call to "k" (defined at: ./index.rsh:150:13:function exp)', 'at ./index.rsh:150:13:application call to [unknown function] (defined at: ./index.rsh:150:13:function exp)'],
          msg: 'out',
          who: 'U1_announce'
          });
        }
      else {
        }
      
      const v5146 = v2174.closed;
      const v5147 = v2174.constructor;
      const v5148 = v2174.providerCount;
      const v5149 = v2174.providerCounter;
      const v5150 = v2174.safeAmount;
      const v5151 = v2174.safeSize;
      const v5152 = v2174.subscriberCount;
      const v5153 = v2174.subscriberCounter;
      const v5154 = v2174.token;
      const v5155 = v2174.tokenAmount;
      const v5157 = stdlib.safeAdd(v5148, stdlib.checkedBigNumberify('./index.rsh:174:48:decimal', stdlib.UInt_max, '1'));
      const v5159 = stdlib.safeAdd(v5149, stdlib.checkedBigNumberify('./index.rsh:175:52:decimal', stdlib.UInt_max, '1'));
      const v5160 = {
        closed: v5146,
        constructor: v5147,
        providerCount: v5157,
        providerCounter: v5159,
        safeAmount: v5150,
        safeSize: v5151,
        subscriberCount: v5152,
        subscriberCounter: v5153,
        token: v5154,
        tokenAmount: v5155
        };
      const v16253 = v5160;
      const v16255 = v5160.closed;
      if (v16255) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'U2_claim0_208': {
      const v5429 = v2426[1];
      return;
      break;
      }
    case 'U2_subscribe0_208': {
      const v6029 = v2426[1];
      return;
      break;
      }
    }
  
  
  };
export async function _U2_claim4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _U2_claim4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _U2_claim4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Struct([['periodCount', ctc1], ['periodAmount', ctc1], ['periodLength', ctc1], ['subscriberCount', ctc1], ['subscriberCounter', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc4]);
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Object({
    closed: ctc4,
    constructor: ctc10,
    providerCount: ctc1,
    providerCounter: ctc1,
    safeAmount: ctc1,
    safeSize: ctc1,
    subscriberCount: ctc1,
    subscriberCounter: ctc1,
    token: ctc7,
    tokenAmount: ctc1
    });
  const ctc12 = stdlib.T_Tuple([ctc10, ctc10, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc10, ctc10]);
  const ctc14 = stdlib.T_Tuple([ctc10]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc16 = stdlib.T_Data({
    A_deleteProvider0_208: ctc14,
    A_deleteSubscription0_208: ctc13,
    C_close0_208: ctc8,
    C_grant0_208: ctc14,
    U1_announce0_208: ctc15,
    U2_claim0_208: ctc12,
    U2_subscribe0_208: ctc14
    });
  const ctc17 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc18 = stdlib.T_Tuple([ctc7, ctc1, ctc10]);
  const ctc19 = stdlib.T_Tuple([ctc7, ctc1, ctc13]);
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const v2137 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const [v2153, v2154, v2158, v2161, v2162, v2174] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc7, ctc7, ctc7, ctc8, ctc9, ctc11]);
  const v2272 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:244:49:application call to [unknown function] (defined at: ./index.rsh:244:49:function exp)', 'at ./index.rsh:128:29:application call to "runU2_claim0_208" (defined at: ./index.rsh:244:10:function exp)', 'at ./index.rsh:128:29:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
    msg: 'in',
    who: 'U2_claim'
    });
  const v2273 = v2272[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2274 = v2272[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2275 = v2272[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2279 = [v2273, v2274];
  const v2280 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc13, v2279, ctc5), null);
  const v2281 = {
    None: 0,
    Some: 1
    }[v2280[0]];
  const v2282 = stdlib.eq(v2281, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2282, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:245:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:244:49:application call to [unknown function] (defined at: ./index.rsh:244:49:function exp)', 'at ./index.rsh:128:29:application call to "runU2_claim0_208" (defined at: ./index.rsh:244:10:function exp)', 'at ./index.rsh:128:29:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
    msg: 'not subscribed',
    who: 'U2_claim'
    });
  const v2284 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v2273, ctc2), null);
  let v2285;
  switch (v2284[0]) {
    case 'None': {
      const v2286 = v2284[1];
      v2285 = stdlib.checkedBigNumberify('./index.rsh:234:39:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    case 'Some': {
      const v2287 = v2284[1];
      const v2288 = v2287.periodAmount;
      const v2289 = stdlib.safeMul(v2288, v2275);
      v2285 = v2289;
      
      break;
      }
    }
  const v2293 = stdlib.fromSome(v2280, v2137);
  const v2294 = v2293[stdlib.checkedBigNumberify('./index.rsh:247:73:array ref', stdlib.UInt_max, '0')];
  const v2295 = stdlib.le(v2285, v2294);
  stdlib.assert(v2295, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:246:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:244:49:application call to [unknown function] (defined at: ./index.rsh:244:49:function exp)', 'at ./index.rsh:128:29:application call to "runU2_claim0_208" (defined at: ./index.rsh:244:10:function exp)', 'at ./index.rsh:128:29:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
    msg: 'not enough remaining',
    who: 'U2_claim'
    });
  const v2306 = ['U2_claim0_208', v2272];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2153, v2154, v2158, v2161, v2162, v2174, v2306],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:244:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2426], secs: v2428, time: v2427, didSend: v1300, from: v2425 } = txn1;
      
      switch (v2426[0]) {
        case 'A_deleteProvider0_208': {
          const v2429 = v2426[1];
          
          break;
          }
        case 'A_deleteSubscription0_208': {
          const v3029 = v2426[1];
          
          break;
          }
        case 'C_close0_208': {
          const v3629 = v2426[1];
          
          break;
          }
        case 'C_grant0_208': {
          const v4229 = v2426[1];
          
          break;
          }
        case 'U1_announce0_208': {
          const v4829 = v2426[1];
          
          break;
          }
        case 'U2_claim0_208': {
          const v5429 = v2426[1];
          sim_r.txns.push({
            kind: 'api',
            who: "U2_claim"
            });
          ;
          const v5764 = v5429[stdlib.checkedBigNumberify('./index.rsh:244:10:spread', stdlib.UInt_max, '0')];
          const v5765 = v5429[stdlib.checkedBigNumberify('./index.rsh:244:10:spread', stdlib.UInt_max, '1')];
          const v5766 = v5429[stdlib.checkedBigNumberify('./index.rsh:244:10:spread', stdlib.UInt_max, '2')];
          const v5767 = [v5764, v5765];
          const v5768 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc13, v5767, ctc5), null);
          const v5772 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc10, v5764, ctc2), null);
          const v5780 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
          const v5781 = stdlib.fromSome(v5768, v5780);
          const v5782 = v5781[stdlib.checkedBigNumberify('./index.rsh:247:73:array ref', stdlib.UInt_max, '0')];
          const v5793 = v5781[stdlib.checkedBigNumberify('./index.rsh:252:17:array', stdlib.UInt_max, '1')];
          const v5804 = await ctc.getContractAddress();
          const v5805 = [v2154, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5765];
          const v5806 = [v2154, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5764];
          const v5807 = [v5765, v5804];
          const v5808 = [v2154, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v5807];
          let v5810;
          switch (v5772[0]) {
            case 'None': {
              const v5811 = v5772[1];
              v5810 = stdlib.checkedBigNumberify('./index.rsh:234:39:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v5812 = v5772[1];
              const v5813 = v5812.periodAmount;
              const v5814 = stdlib.safeMul(v5813, v5766);
              v5810 = v5814;
              
              break;
              }
            }
          const v5818 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v2154,
              remote: ({
                accs: [v5765, v5764],
                apps: [v2154],
                bills: stdlib.checkedBigNumberify('./index.rsh:270:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc18, v5805], [ctc18, v5806], [ctc19, v5808]],
                fees: stdlib.checkedBigNumberify('./index.rsh:263:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:270:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc4.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v5818', ctc17, v5818);
          const v5829 = [v2158, v2154, v5764, v5765, v5766];
          null;
          let v5832;
          switch (v5772[0]) {
            case 'None': {
              const v5833 = v5772[1];
              v5832 = stdlib.checkedBigNumberify('./index.rsh:234:39:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v5834 = v5772[1];
              const v5835 = v5834.periodAmount;
              const v5836 = stdlib.safeMul(v5835, v5766);
              v5832 = v5836;
              
              break;
              }
            }
          const v5837 = stdlib.safeSub(v5782, v5832);
          let v5839;
          switch (v5772[0]) {
            case 'None': {
              const v5840 = v5772[1];
              v5839 = stdlib.checkedBigNumberify('./index.rsh:239:39:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v5841 = v5772[1];
              const v5842 = v5841.periodLength;
              const v5843 = stdlib.safeMul(v5766, v5842);
              v5839 = v5843;
              
              break;
              }
            }
          const v5844 = stdlib.safeAdd(v5793, v5839);
          const v5845 = [v5837, v5844, true];
          await stdlib.simMapSet(sim_r, 1, ctc13, v5767, ctc5, v5845);
          const v5846 = true;
          const v5847 = await txn1.getOutput('U2_claim', 'v5846', ctc4, v5846);
          
          const v5855 = v2174.closed;
          const v5856 = v2174.constructor;
          const v5857 = v2174.providerCount;
          const v5858 = v2174.providerCounter;
          const v5859 = v2174.safeAmount;
          const v5860 = v2174.safeSize;
          const v5861 = v2174.subscriberCount;
          const v5862 = v2174.subscriberCounter;
          const v5863 = v2174.token;
          const v5864 = v2174.tokenAmount;
          let v5867;
          switch (v5772[0]) {
            case 'None': {
              const v5868 = v5772[1];
              v5867 = stdlib.checkedBigNumberify('./index.rsh:234:39:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v5869 = v5772[1];
              const v5870 = v5869.periodAmount;
              const v5871 = stdlib.safeMul(v5870, v5766);
              v5867 = v5871;
              
              break;
              }
            }
          const v5872 = stdlib.safeSub(v5859, v5867);
          const v5873 = {
            closed: v5855,
            constructor: v5856,
            providerCount: v5857,
            providerCounter: v5858,
            safeAmount: v5872,
            safeSize: v5860,
            subscriberCount: v5861,
            subscriberCounter: v5862,
            token: v5863,
            tokenAmount: v5864
            };
          const v16293 = v5873;
          const v16295 = v5873.closed;
          if (v16295) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'U2_subscribe0_208': {
          const v6029 = v2426[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc7, ctc7, ctc8, ctc9, ctc11, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v2426], secs: v2428, time: v2427, didSend: v1300, from: v2425 } = txn1;
  switch (v2426[0]) {
    case 'A_deleteProvider0_208': {
      const v2429 = v2426[1];
      return;
      break;
      }
    case 'A_deleteSubscription0_208': {
      const v3029 = v2426[1];
      return;
      break;
      }
    case 'C_close0_208': {
      const v3629 = v2426[1];
      return;
      break;
      }
    case 'C_grant0_208': {
      const v4229 = v2426[1];
      return;
      break;
      }
    case 'U1_announce0_208': {
      const v4829 = v2426[1];
      return;
      break;
      }
    case 'U2_claim0_208': {
      const v5429 = v2426[1];
      undefined /* setApiDetails */;
      ;
      const v5764 = v5429[stdlib.checkedBigNumberify('./index.rsh:244:10:spread', stdlib.UInt_max, '0')];
      const v5765 = v5429[stdlib.checkedBigNumberify('./index.rsh:244:10:spread', stdlib.UInt_max, '1')];
      const v5766 = v5429[stdlib.checkedBigNumberify('./index.rsh:244:10:spread', stdlib.UInt_max, '2')];
      const v5767 = [v5764, v5765];
      const v5768 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc13, v5767, ctc5), null);
      const v5769 = {
        None: 0,
        Some: 1
        }[v5768[0]];
      const v5770 = stdlib.eq(v5769, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v5770, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:245:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
        msg: 'not subscribed',
        who: 'U2_claim'
        });
      const v5772 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v5764, ctc2), null);
      let v5773;
      switch (v5772[0]) {
        case 'None': {
          const v5774 = v5772[1];
          v5773 = stdlib.checkedBigNumberify('./index.rsh:234:39:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v5775 = v5772[1];
          const v5776 = v5775.periodAmount;
          const v5777 = stdlib.safeMul(v5776, v5766);
          v5773 = v5777;
          
          break;
          }
        }
      const v5780 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
      const v5781 = stdlib.fromSome(v5768, v5780);
      const v5782 = v5781[stdlib.checkedBigNumberify('./index.rsh:247:73:array ref', stdlib.UInt_max, '0')];
      const v5783 = stdlib.le(v5773, v5782);
      stdlib.assert(v5783, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:246:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
        msg: 'not enough remaining',
        who: 'U2_claim'
        });
      const v5793 = v5781[stdlib.checkedBigNumberify('./index.rsh:252:17:array', stdlib.UInt_max, '1')];
      let v5797;
      switch (v5772[0]) {
        case 'None': {
          const v5798 = v5772[1];
          v5797 = stdlib.checkedBigNumberify('./index.rsh:239:39:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v5799 = v5772[1];
          const v5800 = v5799.periodLength;
          const v5801 = stdlib.safeMul(v5766, v5800);
          v5797 = v5801;
          
          break;
          }
        }
      const v5802 = stdlib.safeAdd(v5793, v5797);
      const v5803 = stdlib.ge(v2427, v5802);
      stdlib.assert(v5803, {
        at: './index.rsh:253:18:application',
        fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
        msg: 'not enough time has passed',
        who: 'U2_claim'
        });
      const v5804 = await ctc.getContractAddress();
      const v5805 = [v2154, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5765];
      const v5806 = [v2154, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5764];
      const v5807 = [v5765, v5804];
      const v5808 = [v2154, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v5807];
      let v5810;
      switch (v5772[0]) {
        case 'None': {
          const v5811 = v5772[1];
          v5810 = stdlib.checkedBigNumberify('./index.rsh:234:39:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v5812 = v5772[1];
          const v5813 = v5812.periodAmount;
          const v5814 = stdlib.safeMul(v5813, v5766);
          v5810 = v5814;
          
          break;
          }
        }
      const v5818 = undefined /* Remote */;
      const v5819 = await txn1.getOutput('internal', 'v5818', ctc17, v5818);
      const v5821 = v5819[stdlib.checkedBigNumberify('./index.rsh:270:15:application', stdlib.UInt_max, '0')];
      const v5822 = v5819[stdlib.checkedBigNumberify('./index.rsh:270:15:application', stdlib.UInt_max, '1')];
      const v5827 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5821);
      stdlib.assert(v5827, {
        at: './index.rsh:270:15:application',
        fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
        msg: 'remote bill check',
        who: 'U2_claim'
        });
      stdlib.assert(v5822, {
        at: './index.rsh:261:18:application',
        fs: ['at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
        msg: 'transfer failed',
        who: 'U2_claim'
        });
      const v5829 = [v2158, v2154, v5764, v5765, v5766];
      null;
      let v5832;
      switch (v5772[0]) {
        case 'None': {
          const v5833 = v5772[1];
          v5832 = stdlib.checkedBigNumberify('./index.rsh:234:39:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v5834 = v5772[1];
          const v5835 = v5834.periodAmount;
          const v5836 = stdlib.safeMul(v5835, v5766);
          v5832 = v5836;
          
          break;
          }
        }
      const v5837 = stdlib.safeSub(v5782, v5832);
      let v5839;
      switch (v5772[0]) {
        case 'None': {
          const v5840 = v5772[1];
          v5839 = stdlib.checkedBigNumberify('./index.rsh:239:39:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v5841 = v5772[1];
          const v5842 = v5841.periodLength;
          const v5843 = stdlib.safeMul(v5766, v5842);
          v5839 = v5843;
          
          break;
          }
        }
      const v5844 = stdlib.safeAdd(v5793, v5839);
      const v5845 = [v5837, v5844, true];
      await stdlib.mapSet(map1, ctc13, v5767, ctc5, v5845);
      const v5846 = true;
      const v5847 = await txn1.getOutput('U2_claim', 'v5846', ctc4, v5846);
      if (v1300) {
        stdlib.protect(ctc0, await interact.out(v5429, v5847), {
          at: './index.rsh:244:11:application',
          fs: ['at ./index.rsh:244:11:application call to [unknown function] (defined at: ./index.rsh:244:11:function exp)', 'at ./index.rsh:279:12:application call to "k" (defined at: ./index.rsh:251:13:function exp)', 'at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
          msg: 'out',
          who: 'U2_claim'
          });
        }
      else {
        }
      
      const v5855 = v2174.closed;
      const v5856 = v2174.constructor;
      const v5857 = v2174.providerCount;
      const v5858 = v2174.providerCounter;
      const v5859 = v2174.safeAmount;
      const v5860 = v2174.safeSize;
      const v5861 = v2174.subscriberCount;
      const v5862 = v2174.subscriberCounter;
      const v5863 = v2174.token;
      const v5864 = v2174.tokenAmount;
      let v5867;
      switch (v5772[0]) {
        case 'None': {
          const v5868 = v5772[1];
          v5867 = stdlib.checkedBigNumberify('./index.rsh:234:39:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v5869 = v5772[1];
          const v5870 = v5869.periodAmount;
          const v5871 = stdlib.safeMul(v5870, v5766);
          v5867 = v5871;
          
          break;
          }
        }
      const v5872 = stdlib.safeSub(v5859, v5867);
      const v5873 = {
        closed: v5855,
        constructor: v5856,
        providerCount: v5857,
        providerCounter: v5858,
        safeAmount: v5872,
        safeSize: v5860,
        subscriberCount: v5861,
        subscriberCounter: v5862,
        token: v5863,
        tokenAmount: v5864
        };
      const v16293 = v5873;
      const v16295 = v5873.closed;
      if (v16295) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'U2_subscribe0_208': {
      const v6029 = v2426[1];
      return;
      break;
      }
    }
  
  
  };
export async function _U2_subscribe4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _U2_subscribe4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _U2_subscribe4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Struct([['periodCount', ctc1], ['periodAmount', ctc1], ['periodLength', ctc1], ['subscriberCount', ctc1], ['subscriberCounter', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc4]);
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Object({
    closed: ctc4,
    constructor: ctc10,
    providerCount: ctc1,
    providerCounter: ctc1,
    safeAmount: ctc1,
    safeSize: ctc1,
    subscriberCount: ctc1,
    subscriberCounter: ctc1,
    token: ctc7,
    tokenAmount: ctc1
    });
  const ctc12 = stdlib.T_Tuple([ctc10]);
  const ctc13 = stdlib.T_Tuple([ctc10, ctc10]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc10, ctc10, ctc1]);
  const ctc16 = stdlib.T_Data({
    A_deleteProvider0_208: ctc12,
    A_deleteSubscription0_208: ctc13,
    C_close0_208: ctc8,
    C_grant0_208: ctc12,
    U1_announce0_208: ctc14,
    U2_claim0_208: ctc15,
    U2_subscribe0_208: ctc12
    });
  const ctc17 = stdlib.T_Tuple([ctc1, ctc4]);
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2153, v2154, v2158, v2161, v2162, v2174] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc7, ctc7, ctc7, ctc8, ctc9, ctc11]);
  const v2249 = ctc.selfAddress();
  const v2251 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:193:34:application call to [unknown function] (defined at: ./index.rsh:193:34:function exp)', 'at ./index.rsh:128:29:application call to "runU2_subscribe0_208" (defined at: ./index.rsh:193:10:function exp)', 'at ./index.rsh:128:29:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
    msg: 'in',
    who: 'U2_subscribe'
    });
  const v2252 = v2251[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2254 = [v2252, v2249];
  const v2255 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc13, v2254, ctc5), null);
  const v2256 = {
    None: 0,
    Some: 1
    }[v2255[0]];
  const v2257 = stdlib.eq(v2256, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v2257, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:194:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:193:34:application call to [unknown function] (defined at: ./index.rsh:193:34:function exp)', 'at ./index.rsh:128:29:application call to "runU2_subscribe0_208" (defined at: ./index.rsh:193:10:function exp)', 'at ./index.rsh:128:29:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
    msg: 'already subscribed',
    who: 'U2_subscribe'
    });
  const v2259 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v2252, ctc2), null);
  const v2260 = {
    None: 0,
    Some: 1
    }[v2259[0]];
  const v2261 = stdlib.eq(v2260, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2261, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:195:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:193:34:application call to [unknown function] (defined at: ./index.rsh:193:34:function exp)', 'at ./index.rsh:128:29:application call to "runU2_subscribe0_208" (defined at: ./index.rsh:193:10:function exp)', 'at ./index.rsh:128:29:application call to [unknown function] (defined at: ./index.rsh:128:29:function exp)'],
    msg: 'invalid provider',
    who: 'U2_subscribe'
    });
  const v2268 = ['U2_subscribe0_208', v2251];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2153, v2154, v2158, v2161, v2162, v2174, v2268],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:193:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2426], secs: v2428, time: v2427, didSend: v1300, from: v2425 } = txn1;
      
      switch (v2426[0]) {
        case 'A_deleteProvider0_208': {
          const v2429 = v2426[1];
          
          break;
          }
        case 'A_deleteSubscription0_208': {
          const v3029 = v2426[1];
          
          break;
          }
        case 'C_close0_208': {
          const v3629 = v2426[1];
          
          break;
          }
        case 'C_grant0_208': {
          const v4229 = v2426[1];
          
          break;
          }
        case 'U1_announce0_208': {
          const v4829 = v2426[1];
          
          break;
          }
        case 'U2_claim0_208': {
          const v5429 = v2426[1];
          
          break;
          }
        case 'U2_subscribe0_208': {
          const v6029 = v2426[1];
          sim_r.txns.push({
            kind: 'api',
            who: "U2_subscribe"
            });
          ;
          const v6477 = v6029[stdlib.checkedBigNumberify('./index.rsh:193:10:spread', stdlib.UInt_max, '0')];
          const v6478 = [v6477, v2425];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc13, v6478, ctc5), null);
          const v6483 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc10, v6477, ctc2), null);
          let v6489;
          switch (v6483[0]) {
            case 'None': {
              const v6491 = v6483[1];
              v6489 = stdlib.checkedBigNumberify('./index.rsh:186:20:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v6492 = v6483[1];
              const v6493 = v6492.periodCount;
              const v6494 = v6492.periodAmount;
              const v6495 = stdlib.safeMul(v6494, v6493);
              v6489 = v6495;
              
              break;
              }
            }
          const v6497 = [v6489, v2427, true];
          await stdlib.simMapSet(sim_r, 1, ctc13, v6478, ctc5, v6497);
          switch (v6483[0]) {
            case 'None': {
              const v6499 = v6483[1];
              const v6504 = [v2158, v2154, v6477, v2425];
              const v6505 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v2153,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:216:30:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:216:30:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc4.defaultValue /* simReturnVal */];})();
              await txn1.getOutput('internal', 'v6505', ctc17, v6505);
              const v6515 = true;
              const v6516 = await txn1.getOutput('U2_subscribe', 'v6515', ctc4, v6515);
              
              const v6522 = v2174.closed;
              const v6523 = v2174.constructor;
              const v6524 = v2174.providerCount;
              const v6525 = v2174.providerCounter;
              const v6526 = v2174.safeAmount;
              const v6527 = v2174.safeSize;
              const v6528 = v2174.subscriberCount;
              const v6529 = v2174.subscriberCounter;
              const v6530 = v2174.token;
              const v6531 = v2174.tokenAmount;
              const v6533 = stdlib.safeAdd(v6528, stdlib.checkedBigNumberify('./index.rsh:223:52:decimal', stdlib.UInt_max, '1'));
              const v6535 = stdlib.safeAdd(v6529, stdlib.checkedBigNumberify('./index.rsh:224:56:decimal', stdlib.UInt_max, '1'));
              const v6555 = stdlib.gt(v6527, v6526);
              const v6556 = v6555 ? v6527 : v6526;
              const v6557 = {
                closed: v6522,
                constructor: v6523,
                providerCount: v6524,
                providerCounter: v6525,
                safeAmount: v6526,
                safeSize: v6556,
                subscriberCount: v6533,
                subscriberCounter: v6535,
                token: v6530,
                tokenAmount: v6531
                };
              const v16333 = v6557;
              const v16335 = v6557.closed;
              if (v16335) {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                sim_r.isHalt = false;
                }
              break;
              }
            case 'Some': {
              const v6560 = v6483[1];
              const v6561 = v6560.periodCount;
              const v6562 = v6560.periodAmount;
              const v6563 = v6560.periodLength;
              const v6564 = v6560.subscriberCounter;
              const v6565 = stdlib.safeAdd(v6564, stdlib.checkedBigNumberify('./index.rsh:211:72:decimal', stdlib.UInt_max, '1'));
              const v6566 = v6560.subscriberCount;
              const v6567 = stdlib.safeAdd(v6566, stdlib.checkedBigNumberify('./index.rsh:212:68:decimal', stdlib.UInt_max, '1'));
              const v6568 = {
                periodAmount: v6562,
                periodCount: v6561,
                periodLength: v6563,
                subscriberCount: v6567,
                subscriberCounter: v6565
                };
              await stdlib.simMapSet(sim_r, 0, ctc10, v6477, ctc2, v6568);
              const v6573 = [v2158, v2154, v6477, v2425];
              const v6574 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v2153,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:216:30:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:216:30:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc4.defaultValue /* simReturnVal */];})();
              await txn1.getOutput('internal', 'v6574', ctc17, v6574);
              const v6584 = true;
              const v6585 = await txn1.getOutput('U2_subscribe', 'v6584', ctc4, v6584);
              
              const v6591 = v2174.closed;
              const v6592 = v2174.constructor;
              const v6593 = v2174.providerCount;
              const v6594 = v2174.providerCounter;
              const v6595 = v2174.safeAmount;
              const v6596 = v2174.safeSize;
              const v6597 = v2174.subscriberCount;
              const v6598 = v2174.subscriberCounter;
              const v6599 = v2174.token;
              const v6600 = v2174.tokenAmount;
              const v6602 = stdlib.safeAdd(v6597, stdlib.checkedBigNumberify('./index.rsh:223:52:decimal', stdlib.UInt_max, '1'));
              const v6604 = stdlib.safeAdd(v6598, stdlib.checkedBigNumberify('./index.rsh:224:56:decimal', stdlib.UInt_max, '1'));
              const v6610 = v6568.periodCount;
              const v6611 = v6568.periodAmount;
              const v6612 = stdlib.safeMul(v6611, v6610);
              const v6613 = stdlib.safeAdd(v6595, v6612);
              const v6624 = stdlib.gt(v6596, v6613);
              const v6625 = v6624 ? v6596 : v6613;
              const v6626 = {
                closed: v6591,
                constructor: v6592,
                providerCount: v6593,
                providerCounter: v6594,
                safeAmount: v6613,
                safeSize: v6625,
                subscriberCount: v6602,
                subscriberCounter: v6604,
                token: v6599,
                tokenAmount: v6600
                };
              const v16337 = v6626;
              const v16339 = v6626.closed;
              if (v16339) {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                sim_r.isHalt = false;
                }
              break;
              }
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc7, ctc7, ctc8, ctc9, ctc11, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v2426], secs: v2428, time: v2427, didSend: v1300, from: v2425 } = txn1;
  switch (v2426[0]) {
    case 'A_deleteProvider0_208': {
      const v2429 = v2426[1];
      return;
      break;
      }
    case 'A_deleteSubscription0_208': {
      const v3029 = v2426[1];
      return;
      break;
      }
    case 'C_close0_208': {
      const v3629 = v2426[1];
      return;
      break;
      }
    case 'C_grant0_208': {
      const v4229 = v2426[1];
      return;
      break;
      }
    case 'U1_announce0_208': {
      const v4829 = v2426[1];
      return;
      break;
      }
    case 'U2_claim0_208': {
      const v5429 = v2426[1];
      return;
      break;
      }
    case 'U2_subscribe0_208': {
      const v6029 = v2426[1];
      undefined /* setApiDetails */;
      ;
      const v6477 = v6029[stdlib.checkedBigNumberify('./index.rsh:193:10:spread', stdlib.UInt_max, '0')];
      const v6478 = [v6477, v2425];
      const v6479 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc13, v6478, ctc5), null);
      const v6480 = {
        None: 0,
        Some: 1
        }[v6479[0]];
      const v6481 = stdlib.eq(v6480, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v6481, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:194:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)'],
        msg: 'already subscribed',
        who: 'U2_subscribe'
        });
      const v6483 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v6477, ctc2), null);
      const v6484 = {
        None: 0,
        Some: 1
        }[v6483[0]];
      const v6485 = stdlib.eq(v6484, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v6485, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:195:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)'],
        msg: 'invalid provider',
        who: 'U2_subscribe'
        });
      let v6489;
      switch (v6483[0]) {
        case 'None': {
          const v6491 = v6483[1];
          v6489 = stdlib.checkedBigNumberify('./index.rsh:186:20:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v6492 = v6483[1];
          const v6493 = v6492.periodCount;
          const v6494 = v6492.periodAmount;
          const v6495 = stdlib.safeMul(v6494, v6493);
          v6489 = v6495;
          
          break;
          }
        }
      const v6497 = [v6489, v2427, true];
      await stdlib.mapSet(map1, ctc13, v6478, ctc5, v6497);
      switch (v6483[0]) {
        case 'None': {
          const v6499 = v6483[1];
          const v6504 = [v2158, v2154, v6477, v2425];
          const v6505 = undefined /* Remote */;
          const v6506 = await txn1.getOutput('internal', 'v6505', ctc17, v6505);
          const v6508 = v6506[stdlib.checkedBigNumberify('./index.rsh:216:30:application', stdlib.UInt_max, '0')];
          const v6509 = v6506[stdlib.checkedBigNumberify('./index.rsh:216:30:application', stdlib.UInt_max, '1')];
          const v6514 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6508);
          stdlib.assert(v6514, {
            at: './index.rsh:216:30:application',
            fs: ['at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)'],
            msg: 'remote bill check',
            who: 'U2_subscribe'
            });
          stdlib.assert(v6509, {
            at: './index.rsh:215:18:application',
            fs: ['at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)'],
            msg: 'Child app rejected subscription',
            who: 'U2_subscribe'
            });
          const v6515 = true;
          const v6516 = await txn1.getOutput('U2_subscribe', 'v6515', ctc4, v6515);
          if (v1300) {
            stdlib.protect(ctc0, await interact.out(v6029, v6516), {
              at: './index.rsh:193:11:application',
              fs: ['at ./index.rsh:193:11:application call to [unknown function] (defined at: ./index.rsh:193:11:function exp)', 'at ./index.rsh:219:12:application call to "k" (defined at: ./index.rsh:197:13:function exp)', 'at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)'],
              msg: 'out',
              who: 'U2_subscribe'
              });
            }
          else {
            }
          
          const v6522 = v2174.closed;
          const v6523 = v2174.constructor;
          const v6524 = v2174.providerCount;
          const v6525 = v2174.providerCounter;
          const v6526 = v2174.safeAmount;
          const v6527 = v2174.safeSize;
          const v6528 = v2174.subscriberCount;
          const v6529 = v2174.subscriberCounter;
          const v6530 = v2174.token;
          const v6531 = v2174.tokenAmount;
          const v6533 = stdlib.safeAdd(v6528, stdlib.checkedBigNumberify('./index.rsh:223:52:decimal', stdlib.UInt_max, '1'));
          const v6535 = stdlib.safeAdd(v6529, stdlib.checkedBigNumberify('./index.rsh:224:56:decimal', stdlib.UInt_max, '1'));
          const v6555 = stdlib.gt(v6527, v6526);
          const v6556 = v6555 ? v6527 : v6526;
          const v6557 = {
            closed: v6522,
            constructor: v6523,
            providerCount: v6524,
            providerCounter: v6525,
            safeAmount: v6526,
            safeSize: v6556,
            subscriberCount: v6533,
            subscriberCounter: v6535,
            token: v6530,
            tokenAmount: v6531
            };
          const v16333 = v6557;
          const v16335 = v6557.closed;
          if (v16335) {
            return;
            }
          else {
            return;
            }
          break;
          }
        case 'Some': {
          const v6560 = v6483[1];
          const v6561 = v6560.periodCount;
          const v6562 = v6560.periodAmount;
          const v6563 = v6560.periodLength;
          const v6564 = v6560.subscriberCounter;
          const v6565 = stdlib.safeAdd(v6564, stdlib.checkedBigNumberify('./index.rsh:211:72:decimal', stdlib.UInt_max, '1'));
          const v6566 = v6560.subscriberCount;
          const v6567 = stdlib.safeAdd(v6566, stdlib.checkedBigNumberify('./index.rsh:212:68:decimal', stdlib.UInt_max, '1'));
          const v6568 = {
            periodAmount: v6562,
            periodCount: v6561,
            periodLength: v6563,
            subscriberCount: v6567,
            subscriberCounter: v6565
            };
          await stdlib.mapSet(map0, ctc10, v6477, ctc2, v6568);
          const v6573 = [v2158, v2154, v6477, v2425];
          const v6574 = undefined /* Remote */;
          const v6575 = await txn1.getOutput('internal', 'v6574', ctc17, v6574);
          const v6577 = v6575[stdlib.checkedBigNumberify('./index.rsh:216:30:application', stdlib.UInt_max, '0')];
          const v6578 = v6575[stdlib.checkedBigNumberify('./index.rsh:216:30:application', stdlib.UInt_max, '1')];
          const v6583 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6577);
          stdlib.assert(v6583, {
            at: './index.rsh:216:30:application',
            fs: ['at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)'],
            msg: 'remote bill check',
            who: 'U2_subscribe'
            });
          stdlib.assert(v6578, {
            at: './index.rsh:215:18:application',
            fs: ['at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)'],
            msg: 'Child app rejected subscription',
            who: 'U2_subscribe'
            });
          const v6584 = true;
          const v6585 = await txn1.getOutput('U2_subscribe', 'v6584', ctc4, v6584);
          if (v1300) {
            stdlib.protect(ctc0, await interact.out(v6029, v6585), {
              at: './index.rsh:193:11:application',
              fs: ['at ./index.rsh:193:11:application call to [unknown function] (defined at: ./index.rsh:193:11:function exp)', 'at ./index.rsh:219:12:application call to "k" (defined at: ./index.rsh:197:13:function exp)', 'at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)'],
              msg: 'out',
              who: 'U2_subscribe'
              });
            }
          else {
            }
          
          const v6591 = v2174.closed;
          const v6592 = v2174.constructor;
          const v6593 = v2174.providerCount;
          const v6594 = v2174.providerCounter;
          const v6595 = v2174.safeAmount;
          const v6596 = v2174.safeSize;
          const v6597 = v2174.subscriberCount;
          const v6598 = v2174.subscriberCounter;
          const v6599 = v2174.token;
          const v6600 = v2174.tokenAmount;
          const v6602 = stdlib.safeAdd(v6597, stdlib.checkedBigNumberify('./index.rsh:223:52:decimal', stdlib.UInt_max, '1'));
          const v6604 = stdlib.safeAdd(v6598, stdlib.checkedBigNumberify('./index.rsh:224:56:decimal', stdlib.UInt_max, '1'));
          const v6610 = v6568.periodCount;
          const v6611 = v6568.periodAmount;
          const v6612 = stdlib.safeMul(v6611, v6610);
          const v6613 = stdlib.safeAdd(v6595, v6612);
          const v6624 = stdlib.gt(v6596, v6613);
          const v6625 = v6624 ? v6596 : v6613;
          const v6626 = {
            closed: v6591,
            constructor: v6592,
            providerCount: v6593,
            providerCounter: v6594,
            safeAmount: v6613,
            safeSize: v6625,
            subscriberCount: v6602,
            subscriberCounter: v6604,
            token: v6599,
            tokenAmount: v6600
            };
          const v16337 = v6626;
          const v16339 = v6626.closed;
          if (v16339) {
            return;
            }
          else {
            return;
            }
          break;
          }
        }
      break;
      }
    }
  
  
  };
export async function A_deleteProvider(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for A_deleteProvider expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for A_deleteProvider expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _A_deleteProvider4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function A_deleteSubscription(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for A_deleteSubscription expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for A_deleteSubscription expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _A_deleteSubscription4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function C_close(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for C_close expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for C_close expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _C_close4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function C_grant(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for C_grant expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for C_grant expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _C_grant4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function U1_announce(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for U1_announce expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for U1_announce expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _U1_announce4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function U2_claim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for U2_claim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for U2_claim expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _U2_claim4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function U2_subscribe(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for U2_subscribe expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for U2_subscribe expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _U2_subscribe4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`A_deleteProvider(address)byte`, `A_deleteSubscription(address,address)byte`, `C_close()byte`, `C_grant(address)byte`, `U1_announce(uint64,uint64,uint64)byte`, `U2_claim(address,address,uint64)byte`, `U2_subscribe(address)byte`, `_reachp_0((uint64))void`, `_reachp_1((uint64,uint64,uint64))void`, `_reachp_3((uint64,(byte,byte[72])))void`],
    pure: [`state()(address,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64)`, `subscription(address,address)(uint64,uint64,byte)`],
    sigs: [`A_deleteProvider(address)byte`, `A_deleteSubscription(address,address)byte`, `C_close()byte`, `C_grant(address)byte`, `U1_announce(uint64,uint64,uint64)byte`, `U2_claim(address,address,uint64)byte`, `U2_subscribe(address)byte`, `_reachp_0((uint64))void`, `_reachp_1((uint64,uint64,uint64))void`, `_reachp_3((uint64,(byte,byte[72])))void`, `state()(address,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64)`, `subscription(address,address)(uint64,uint64,byte)`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCATAAEIBigRQRAE1PcBGEkh1KwBMSmJASA5JgcAAQAFYXBwSUQBAQgAAAAAAAAAAQQeFJVeBPv94xoxGEEHXShkSSJbNQEkWzUCKWQrZFCCDAQMRo+ABA4LmoQEFEWq5gQtoHmkBC/5nE4EdtbzNQSulFkABLGccKUEvkaHvgTBlK2ZBMK2HYME+9X8izYaAI4MBtwAAQEwAFMG5wBvAN4Osg61BsoAxwELADYaATULJK8pNAtQIQSvUFA1CyEINAESRIgPBzQLIls1DDQLVwhJNQ2ABJ3BTlc0DBZQNA1QsDQMiA7UNA0iVY0HDlUOWAbCBsUGyAbSBtxC/602GgE2GgI1CzUMJK8rNAw0C1BQJK9QUDULQv+kgFEAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L/TDYaATULJK+AAQM0C1AhBK9QUDULQv81NhoBFzYaAhc2GgMXNQs1DDUNJK+AAQQ0DRY0DBZQNAsWUFCBMK9QUDULQv8INhoBNhoCNhoDFzULNQw1DSSvgAEFNA00DFA0CxZQUFA1C0L+4zYaATULJK+AAQY0C1AhBK9QUDULQv7MNA1XASA1CzQPIQZbSTUNIhJEKCEEryk0C1CIDY9JNRUiVSMSRDQVIlWNAgXJBc9C/oc0C1cAIDUNNAtXICA1DCghBK8pNA1QiA1hSTUVIlUjEkQ0DTQMUDUWKCEFrycENBZQAYgNRUk1CyJVIxJEIQWvNAuIDVwiWyISRDQVIlWNAgaRBpdC/jA0DyEPW0k1FkQ0DyELW0k1FUQ0DyEMW0k1DSISRDQPIQZbSTUMIhJEKjQUFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJbIQNBSyGIAEZS08q7IaNBCyGrMyCmA0CQk0ChcJFrcAPlcEAFA1F4AIAAAAAAAADwA0F1CwNBc1CyI0CyJbEkQ0C1cIARdEIzULgAgAAAAAAAAPCjQLFlEHCFCwNAsWUQcINQQrNA9XASBQNA0WUDQWFlA0D1cxCFA0D1c5CFA0DBZQNBUWUDQPV1EIUDQPV1kIUDIGNQ41DzQPVwABF0ELwzEZgQUSRIgMhSIyCjIJiAyeNANAAAqABBUffHU0BFCwI0M0DVcBIDULMQA0D1cBIBJEKjQUFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJbIQNBSyGIAEb2DnqrIaNBIWNBMWUDQLULIaszIKYDQJCTQKFwkWtwA+VwQAUDUNgAgAAAAAAAARgDQNULA0DTUMIjQMIlsSRDQMVwgBF0QjNQyACAAAAAAAABGKNAwWUQcIULA0DBZRBwg1BDQPVwABNAtQNA9XIQhQNA9XKQhQNA9XMQhQNA9XOQhQNA9XQQhQNA9XSQhQNA9XUQhQNA9XWQhQMgY1DjUPQv78NAsiWzUVNAskWzUNNAshB1s1DCghBK8pMQBQiAskIlUiEkQhCSkxAFA0FRY0DRZQNAwWUCSvUCSvUIgLECo0FBZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASWyEDQUshiABJvZG2ayGjQSFjQTFlAxAFA0FRZQNA0WUDQMFlCyGrMyCmA0CQk0ChcJFrcAPlcEAFA1C4AIAAAAAAAAFAc0C1CwNAs1DCI0DCJbEkQ0DFcIARdEIzULgAgAAAAAAAAUETQLFlEHCFCwNAsWUQcINQQ0D1cAATQPVwEgUDQPIQxbIwgWUDQPIQ9bIwgWUDQPVzEIUDQPVzkIUDQPV0EIUDQPV0kIUDQPV1EIUDQPV1kIUDIGNQ41D0L94TQLVwAgNRU0C1cgIDUNNAuBQFs1DDQVNA1QNRkoIQWvJwQ0GVABiAn+STUXIlUjEkQoIQSvKTQVUIgJ60k1GCJVjQIFWAVeQvrqNA1XASBJNQsxAFA1FighBa8nBDQWUAGICcMiVSISRCghBK8pNAtQiAmzSTUNIlUjEkQ0DSJVjQIHCQcPQvqrNAEhCBJEiAnFNA9XASA0D1dRCFA0D1dZCFA0D1chCFA0D1cpCFA0D1dBCFA0D1dJCFA0D1cxCFA0D1c5CFA1BDEZIhJEQv0vNAEhCBJEiAl9IQWvKCEFrycENAw0C1BQAYgJOogJXjUEQv/UNAsXNQyABILEYf40DBZQsDQMiAk6IRCvIzIGNQI1ASlLAVcAf2crTFd/CmcoNAEWNAIWUGcxGSISRIgJRkL8xiM0ARJENAsiWzUMNAskWzUUNAshB1s1E4AEzfmklDQMFlA0FBZQNBMWULA0DIgI3zEYNRIoNRE0EhY0ExZQNRAqNBQWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgElshA0FLIYgATR8uHosho0ELIaszIKYDQJCTQKFwkWtwA+VwQAUDUMgAgAAAAAAAAIczQMULA0DDULIjQLIlsSRDQLVwgBF0QpMQBQJK9QJK9QJK9QJK9QJK9QJK9QNBMWUCSvUDIGNQ41D0L744gIP4GgjQaICIc2GgE1C0L+5YgILTYaATULQv8aiAgiNhoBNQtC+SEiMTQSRIEDMTUSRCIxNhJEIjE3EkSICAIhEK8iIkL+ykL6u0L7wDQNVwEYNQtC/I80DVcBSDULQv2gQv3nNAxENBUiVY0CAPIA+EL4wSI1DEL/6jQVVwEoIQpbIhI1DEL/2zQMRCEJKTQLUIgH8CM1DIAIAAAAAAAACaE0DBZRBwhQsDQMFlEHCDUEKjQUFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJbIQNBSyGCcFshopNBIWNBMWUDQLUFAyA1CyGrMyCmA0CQk0ChcJFrcAPlcEAFA1DIAIAAAAAAAACa40DFCwNAw1CyI0CyJbEkQ0C1cIARdENA9XAAE0D1cBIFA0DyEMWyMJFlA0D1cpCFA0D1cxCFA0D1c5CFA0DRZQNA9XSQhQNA9XUQhQNA9XWQhQMgY1DjUPQvp/IjUMQv8gNBVXASghEVsiEzUMQv8RNAtEIQ0nBDQWUAGIBv80FSJVjQIAGADoQveiIjULQv/fNBVXASghClsiDTULQv/QKjQUFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJbIQNBSyGCcFshorNBIWNBMWUDQNUDQMUFCyGrMyCmA0CQk0ChcJFrcAPlcEAFA1C4AIAAAAAAAADEQ0C1CwNAs1DCI0DCJbEkQ0DFcIARdEIzULgAgAAAAAAAAMTjQLFlEHCFCwNAsWUQcINQQ0D1cAATQPVwEgUDQPVyEIUDQPVykIUDQPVzEIUDQPVzkIUDQPIQZbIwkWUDQPV0kIUDQPV1EIUDQPV1kIUDIGNQ41D0L5ajQVVwEoNQshCSk0DVA0C1cACDQLVwgIUDQLVxAIUDQLIQpbIwkWUDQLVyAIUIgFiyo0FBZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASWyEDQUshgnBbIaKzQSFjQTFlA0DVA0DFBQshqzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAAAxzNAtQsDQLNQwiNAwiWxJENAxXCAEXRCM1C4AIAAAAAAAADH00CxZRBwhQsDQLFlEHCDUENA9XAAE0D1cBIFA0D1chCFA0D1cpCFA0D1cxCFA0D1c5CFA0DyEGWyMJFlA0D1dJCFA0D1dRCFA0D1dZCFAyBjUONQ9C+GohBa80F4gEz0k1CyJbNRc0FjQXDkQ0CyRbNRY0GCJVjQIALgA0QvWVIjUWQv/SNBhXASgkWzQMCzUWQv/DMgY0FjQLCA9ENBgiVY0CALkAv0L1aiI1C0L/5DQMNBhXASghB1sLNQtC/9QqNBMWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgElshA0E7IYgARYN5+hsho0DUmyHLIaNBVJshyyGjQLFrIaNBOyMrMyCmA0CQk0ChcJFrcAPlcEAFA1GoAIAAAAAAAAFro0GlCwNBo1CyI0CyJbEkQ0C1cIARdENBIWNBMWUDQVUDQNUDQMFlA1C4AEGbpNpjQLULA0GCJVjQIAJQArQvS0IjULQv9aNBhXASgkWzQMCzULQv9LNBgiVY0CAFwAYkL0kiI1DUL/7TQYVwEoJFs0DAs1DUL/3iENJwQ0GVABNBc0DQkWNBY0CwgWUCtQiANhIzULgAgAAAAAAAAW1jQLFlEHCFCwNAsWUQcINQQ0GCJVjQIAYQBnQvQ5IjULQv+2NAw0GFcBKCEHWws1C0L/pjQPVwABNA9XASBQNA9XIQhQNA9XKQhQNA8hDls0CwkWUDQPVzkIUDQPV0EIUDQPV0kIUDQPV1EIUDQPV1kIUDIGNQ41D0L2iCI1C0L/sjQYVwEoJFs0DAs1C0L/oyENJwQ0FlABNBUWMgYWUCtQiAKwNA0iVY0CAB0A/0LzpSI1FUL/2TQNVwEoSTUMJFs0DCJbCzUVQv/FKjQUFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJbIQNBSyGCcGsho0EhY0ExZQNAtQMQBQshqzMgpgNAkJNAoXCRa3AD5XBABQNQyACAAAAAAAABlpNAxQsDQMNQsiNAsiWxJENAtXCAEXRCM1C4AIAAAAAAAAGXM0CxZRBwhQsDQLFlEHCDUENA8hDls1DDQPIRJbNQs0D1cAATQPVwEgUDQPVyEIUDQPVykIUDQMFlA0DDQLSTQMDU0WUDQPIQZbIwgWUDQPIQtbIwgWUDQPV1EIUDQPV1kIUDIGNQ41D0L1VjQNVwEoSTUMVwAINAxXCAhQNAxXEAhQNAwhClsjCBZQNAwhEVsjCBZQNQ0hCSk0C1A0DYgBcSo0FBZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASWyEDQUshgnBrIaNBIWNBMWUDQLUDEAULIaszIKYDQJCTQKFwkWtwA+VwQAUDUMgAgAAAAAAAAZrjQMULA0DDULIjQLIlsSRDQLVwgBF0QjNQuACAAAAAAAABm4NAsWUQcIULA0CxZRBwg1BDQPIRJbNQw0DyEOWzQNJFs0DSJbCwg1CzQPVwABNA9XASBQNA9XIQhQNA9XKQhQNAsWUDQLNAxJNAsNTRZQNA8hBlsjCBZQNA8hC1sjCBZQNA9XUQhQNA9XWQhQMgY1DjUPQvQ0NBQWNBMWUDQSFlA0EVA0EFA0D1AhCDIGQvdISEy/SIkisgEjshCyB7IIs4lC8p80DVcBQDULQvLHQvagNhoBNhoCNQs1DEL220iJTAlJNQYyCYgAk4kJSUH/7kk1BjEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRIm+SRZRBwhFBE1QiUxJvUD/kEsDiABSQv+IIzUDiUkiEkw0AhIRRIlJVwEATCJVTYlJIls1FEkkWzUTSSEHWzUSSUgoNRFJVxgQNRBXKGE1D4k0BjQHSg9B/3dC/3+8Ik4CTTQHCDUHiTQGCDUGibFC/zSxsglC/y4=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `527`,
    1001: `527`,
    1002: `528`,
    1003: `529`,
    1004: `530`,
    1005: `530`,
    1006: `531`,
    1007: `531`,
    1008: `532`,
    1009: `533`,
    101: `21`,
    1010: `533`,
    1011: `534`,
    1012: `535`,
    1013: `536`,
    1014: `537`,
    1015: `541`,
    1016: `541`,
    1017: `542`,
    1018: `542`,
    1019: `542`,
    102: `21`,
    1020: `543`,
    1021: `544`,
    1022: `548`,
    1023: `549`,
    1024: `549`,
    1025: `550`,
    1026: `550`,
    1027: `550`,
    1028: `550`,
    1029: `550`,
    103: `21`,
    1030: `550`,
    1031: `550`,
    1032: `550`,
    1033: `550`,
    1034: `550`,
    1035: `551`,
    1036: `551`,
    1037: `552`,
    1038: `553`,
    1039: `553`,
    104: `21`,
    1040: `553`,
    1041: `554`,
    1042: `555`,
    1043: `556`,
    1044: `556`,
    1045: `557`,
    1046: `558`,
    1047: `558`,
    1048: `558`,
    1049: `559`,
    105: `21`,
    1050: `559`,
    1051: `560`,
    1052: `560`,
    1053: `561`,
    1054: `561`,
    1055: `561`,
    1056: `562`,
    1057: `562`,
    1058: `563`,
    1059: `564`,
    106: `21`,
    1060: `564`,
    1061: `565`,
    1062: `565`,
    1063: `565`,
    1064: `566`,
    1065: `567`,
    1066: `567`,
    1067: `568`,
    1068: `568`,
    1069: `568`,
    107: `21`,
    1070: `569`,
    1071: `570`,
    1072: `570`,
    1073: `571`,
    1074: `571`,
    1075: `571`,
    1076: `572`,
    1077: `573`,
    1078: `573`,
    1079: `574`,
    108: `21`,
    1080: `574`,
    1081: `574`,
    1082: `575`,
    1083: `576`,
    1084: `576`,
    1085: `577`,
    1086: `577`,
    1087: `577`,
    1088: `578`,
    1089: `579`,
    109: `21`,
    1090: `579`,
    1091: `580`,
    1092: `580`,
    1093: `580`,
    1094: `581`,
    1095: `582`,
    1096: `582`,
    1097: `583`,
    1098: `583`,
    1099: `583`,
    11: `2`,
    110: `21`,
    1100: `584`,
    1101: `585`,
    1102: `585`,
    1103: `586`,
    1104: `586`,
    1105: `586`,
    1106: `587`,
    1107: `588`,
    1108: `588`,
    1109: `589`,
    111: `21`,
    1110: `589`,
    1111: `590`,
    1112: `590`,
    1113: `591`,
    1114: `591`,
    1115: `591`,
    1116: `593`,
    1117: `593`,
    1118: `594`,
    1119: `595`,
    112: `21`,
    1120: `596`,
    1121: `596`,
    1122: `597`,
    1123: `597`,
    1124: `598`,
    1125: `599`,
    1126: `600`,
    1127: `600`,
    1128: `601`,
    1129: `601`,
    113: `21`,
    1130: `602`,
    1131: `602`,
    1132: `603`,
    1133: `604`,
    1134: `604`,
    1135: `606`,
    1136: `607`,
    1137: `607`,
    1138: `608`,
    1139: `609`,
    114: `21`,
    1140: `610`,
    1141: `610`,
    1142: `611`,
    1143: `612`,
    1144: `612`,
    1145: `612`,
    1146: `613`,
    1147: `614`,
    1148: `615`,
    1149: `616`,
    115: `21`,
    1150: `617`,
    1151: `622`,
    1152: `622`,
    1153: `623`,
    1154: `624`,
    1155: `624`,
    1156: `625`,
    1157: `626`,
    1158: `626`,
    1159: `627`,
    116: `21`,
    1160: `628`,
    1161: `628`,
    1162: `629`,
    1163: `630`,
    1164: `631`,
    1165: `631`,
    1166: `632`,
    1167: `633`,
    1168: `634`,
    1169: `635`,
    117: `21`,
    1170: `636`,
    1171: `637`,
    1172: `638`,
    1173: `639`,
    1174: `640`,
    1175: `640`,
    1176: `640`,
    1177: `641`,
    1178: `642`,
    1179: `642`,
    118: `21`,
    1180: `643`,
    1181: `644`,
    1182: `645`,
    1183: `646`,
    1184: `646`,
    1185: `647`,
    1186: `647`,
    1187: `648`,
    1188: `649`,
    1189: `649`,
    119: `21`,
    1190: `650`,
    1191: `651`,
    1192: `651`,
    1193: `652`,
    1194: `653`,
    1195: `653`,
    1196: `654`,
    1197: `655`,
    1198: `656`,
    1199: `656`,
    12: `2`,
    120: `21`,
    1200: `657`,
    1201: `658`,
    1202: `659`,
    1203: `659`,
    1204: `660`,
    1205: `661`,
    1206: `661`,
    1207: `662`,
    1208: `662`,
    1209: `664`,
    121: `21`,
    1210: `664`,
    1211: `665`,
    1212: `665`,
    1213: `665`,
    1214: `665`,
    1215: `665`,
    1216: `665`,
    1217: `666`,
    1218: `666`,
    1219: `667`,
    122: `21`,
    1220: `667`,
    1221: `668`,
    1222: `669`,
    1223: `669`,
    1224: `670`,
    1225: `671`,
    1226: `672`,
    1227: `672`,
    1228: `673`,
    1229: `674`,
    123: `21`,
    1230: `674`,
    1231: `675`,
    1232: `676`,
    1233: `677`,
    1234: `677`,
    1235: `678`,
    1236: `679`,
    1237: `680`,
    1238: `680`,
    1239: `681`,
    124: `21`,
    1240: `682`,
    1241: `683`,
    1242: `683`,
    1243: `684`,
    1244: `688`,
    1245: `688`,
    1246: `689`,
    1247: `690`,
    1248: `690`,
    1249: `691`,
    125: `21`,
    1250: `692`,
    1251: `692`,
    1252: `693`,
    1253: `694`,
    1254: `695`,
    1255: `696`,
    1256: `696`,
    1257: `696`,
    1258: `697`,
    1259: `697`,
    126: `21`,
    1260: `697`,
    1261: `698`,
    1262: `699`,
    1263: `699`,
    1264: `700`,
    1265: `700`,
    1266: `700`,
    1267: `700`,
    1268: `700`,
    1269: `700`,
    127: `21`,
    1270: `700`,
    1271: `700`,
    1272: `700`,
    1273: `700`,
    1274: `701`,
    1275: `701`,
    1276: `702`,
    1277: `703`,
    1278: `704`,
    1279: `704`,
    128: `21`,
    1280: `705`,
    1281: `705`,
    1282: `706`,
    1283: `707`,
    1284: `707`,
    1285: `708`,
    1286: `709`,
    1287: `710`,
    1288: `711`,
    1289: `715`,
    129: `21`,
    1290: `715`,
    1291: `716`,
    1292: `716`,
    1293: `716`,
    1294: `717`,
    1295: `718`,
    1296: `722`,
    1297: `723`,
    1298: `723`,
    1299: `724`,
    13: `2`,
    130: `21`,
    1300: `724`,
    1301: `724`,
    1302: `724`,
    1303: `724`,
    1304: `724`,
    1305: `724`,
    1306: `724`,
    1307: `724`,
    1308: `724`,
    1309: `725`,
    131: `21`,
    1310: `725`,
    1311: `726`,
    1312: `727`,
    1313: `727`,
    1314: `727`,
    1315: `728`,
    1316: `729`,
    1317: `730`,
    1318: `730`,
    1319: `731`,
    132: `21`,
    1320: `732`,
    1321: `732`,
    1322: `732`,
    1323: `733`,
    1324: `733`,
    1325: `734`,
    1326: `734`,
    1327: `735`,
    1328: `735`,
    1329: `735`,
    133: `21`,
    1330: `736`,
    1331: `736`,
    1332: `737`,
    1333: `737`,
    1334: `737`,
    1335: `738`,
    1336: `739`,
    1337: `739`,
    1338: `740`,
    1339: `740`,
    134: `21`,
    1340: `741`,
    1341: `742`,
    1342: `743`,
    1343: `744`,
    1344: `745`,
    1345: `746`,
    1346: `746`,
    1347: `747`,
    1348: `747`,
    1349: `748`,
    135: `21`,
    1350: `749`,
    1351: `750`,
    1352: `751`,
    1353: `752`,
    1354: `753`,
    1355: `753`,
    1356: `754`,
    1357: `754`,
    1358: `754`,
    1359: `755`,
    136: `21`,
    1360: `756`,
    1361: `756`,
    1362: `757`,
    1363: `757`,
    1364: `757`,
    1365: `758`,
    1366: `759`,
    1367: `759`,
    1368: `760`,
    1369: `760`,
    137: `21`,
    1370: `760`,
    1371: `761`,
    1372: `762`,
    1373: `762`,
    1374: `763`,
    1375: `763`,
    1376: `763`,
    1377: `764`,
    1378: `765`,
    1379: `765`,
    138: `21`,
    1380: `766`,
    1381: `766`,
    1382: `766`,
    1383: `767`,
    1384: `768`,
    1385: `768`,
    1386: `769`,
    1387: `769`,
    1388: `769`,
    1389: `770`,
    139: `21`,
    1390: `771`,
    1391: `771`,
    1392: `772`,
    1393: `772`,
    1394: `773`,
    1395: `773`,
    1396: `774`,
    1397: `774`,
    1398: `774`,
    1399: `776`,
    14: `2`,
    140: `21`,
    1400: `776`,
    1401: `777`,
    1402: `777`,
    1403: `777`,
    1404: `778`,
    1405: `778`,
    1406: `779`,
    1407: `779`,
    1408: `780`,
    1409: `780`,
    141: `21`,
    1410: `780`,
    1411: `781`,
    1412: `781`,
    1413: `782`,
    1414: `782`,
    1415: `783`,
    1416: `783`,
    1417: `784`,
    1418: `785`,
    1419: `785`,
    142: `22`,
    1420: `786`,
    1421: `786`,
    1422: `787`,
    1423: `787`,
    1424: `788`,
    1425: `789`,
    1426: `789`,
    1427: `791`,
    1428: `792`,
    1429: `792`,
    143: `22`,
    1430: `793`,
    1431: `794`,
    1432: `794`,
    1433: `795`,
    1434: `795`,
    1435: `796`,
    1436: `797`,
    1437: `798`,
    1438: `798`,
    1439: `798`,
    144: `22`,
    1440: `799`,
    1441: `800`,
    1442: `800`,
    1443: `801`,
    1444: `802`,
    1445: `803`,
    1446: `804`,
    1447: `805`,
    1448: `811`,
    1449: `812`,
    145: `23`,
    1450: `812`,
    1451: `813`,
    1452: `814`,
    1453: `815`,
    1454: `815`,
    1455: `816`,
    1456: `817`,
    1457: `817`,
    1458: `817`,
    1459: `818`,
    146: `23`,
    1460: `819`,
    1461: `819`,
    1462: `820`,
    1463: `821`,
    1464: `822`,
    1465: `822`,
    1466: `822`,
    1467: `822`,
    1468: `822`,
    1469: `822`,
    147: `23`,
    1470: `823`,
    1471: `823`,
    1472: `823`,
    1473: `825`,
    1474: `825`,
    1475: `826`,
    1476: `826`,
    1477: `826`,
    1478: `827`,
    1479: `828`,
    148: `23`,
    1480: `828`,
    1481: `829`,
    1482: `829`,
    1483: `830`,
    1484: `831`,
    1485: `831`,
    1486: `833`,
    1487: `834`,
    1488: `834`,
    1489: `835`,
    149: `23`,
    1490: `836`,
    1491: `836`,
    1492: `837`,
    1493: `837`,
    1494: `838`,
    1495: `839`,
    1496: `840`,
    1497: `840`,
    1498: `840`,
    1499: `841`,
    15: `2`,
    150: `23`,
    1500: `842`,
    1501: `843`,
    1502: `844`,
    1503: `845`,
    1504: `851`,
    1505: `852`,
    1506: `852`,
    1507: `853`,
    1508: `854`,
    1509: `855`,
    151: `23`,
    1510: `855`,
    1511: `856`,
    1512: `857`,
    1513: `857`,
    1514: `857`,
    1515: `858`,
    1516: `859`,
    1517: `859`,
    1518: `860`,
    1519: `861`,
    152: `23`,
    1520: `862`,
    1521: `863`,
    1522: `864`,
    1523: `869`,
    1524: `869`,
    1525: `870`,
    1526: `871`,
    1527: `872`,
    1528: `872`,
    1529: `872`,
    153: `23`,
    1530: `872`,
    1531: `872`,
    1532: `872`,
    1533: `873`,
    1534: `873`,
    1535: `873`,
    1536: `875`,
    1537: `875`,
    1538: `876`,
    1539: `876`,
    154: `23`,
    1540: `877`,
    1541: `878`,
    1542: `881`,
    1543: `881`,
    1544: `881`,
    1545: `882`,
    1546: `882`,
    1547: `883`,
    1548: `883`,
    1549: `883`,
    155: `23`,
    1550: `884`,
    1551: `884`,
    1552: `885`,
    1553: `885`,
    1554: `885`,
    1555: `886`,
    1556: `887`,
    1557: `887`,
    1558: `888`,
    1559: `888`,
    156: `23`,
    1560: `888`,
    1561: `889`,
    1562: `890`,
    1563: `890`,
    1564: `891`,
    1565: `891`,
    1566: `891`,
    1567: `892`,
    1568: `893`,
    1569: `893`,
    157: `23`,
    1570: `894`,
    1571: `894`,
    1572: `894`,
    1573: `895`,
    1574: `896`,
    1575: `896`,
    1576: `897`,
    1577: `897`,
    1578: `897`,
    1579: `898`,
    158: `23`,
    1580: `899`,
    1581: `899`,
    1582: `900`,
    1583: `900`,
    1584: `900`,
    1585: `901`,
    1586: `902`,
    1587: `902`,
    1588: `903`,
    1589: `903`,
    159: `23`,
    1590: `903`,
    1591: `904`,
    1592: `905`,
    1593: `905`,
    1594: `906`,
    1595: `906`,
    1596: `906`,
    1597: `907`,
    1598: `908`,
    1599: `908`,
    16: `2`,
    160: `23`,
    1600: `910`,
    1601: `910`,
    1602: `911`,
    1603: `912`,
    1604: `913`,
    1605: `915`,
    1606: `915`,
    1607: `915`,
    1608: `917`,
    1609: `917`,
    161: `23`,
    1610: `918`,
    1611: `918`,
    1612: `919`,
    1613: `920`,
    1614: `923`,
    1615: `923`,
    1616: `923`,
    1617: `924`,
    1618: `924`,
    1619: `925`,
    162: `23`,
    1620: `927`,
    1621: `928`,
    1622: `928`,
    1623: `929`,
    1624: `930`,
    1625: `930`,
    1626: `931`,
    1627: `931`,
    1628: `932`,
    1629: `932`,
    163: `23`,
    1630: `933`,
    1631: `934`,
    1632: `935`,
    1633: `936`,
    1634: `936`,
    1635: `936`,
    1636: `937`,
    1637: `937`,
    1638: `937`,
    1639: `938`,
    164: `23`,
    1640: `938`,
    1641: `939`,
    1642: `939`,
    1643: `939`,
    1644: `941`,
    1645: `941`,
    1646: `942`,
    1647: `943`,
    1648: `943`,
    1649: `944`,
    165: `23`,
    1650: `944`,
    1651: `944`,
    1652: `944`,
    1653: `944`,
    1654: `944`,
    1655: `945`,
    1656: `945`,
    1657: `946`,
    1658: `947`,
    1659: `948`,
    166: `23`,
    1660: `950`,
    1661: `950`,
    1662: `951`,
    1663: `951`,
    1664: `951`,
    1665: `953`,
    1666: `953`,
    1667: `954`,
    1668: `955`,
    1669: `956`,
    167: `23`,
    1670: `956`,
    1671: `958`,
    1672: `958`,
    1673: `959`,
    1674: `959`,
    1675: `960`,
    1676: `961`,
    1677: `961`,
    1678: `962`,
    1679: `962`,
    168: `23`,
    1680: `962`,
    1681: `963`,
    1682: `964`,
    1683: `965`,
    1684: `966`,
    1685: `966`,
    1686: `966`,
    1687: `967`,
    1688: `968`,
    1689: `969`,
    169: `23`,
    1690: `969`,
    1691: `970`,
    1692: `971`,
    1693: `971`,
    1694: `972`,
    1695: `973`,
    1696: `974`,
    1697: `975`,
    1698: `975`,
    1699: `976`,
    17: `2`,
    170: `23`,
    1700: `977`,
    1701: `978`,
    1702: `980`,
    1703: `980`,
    1704: `980`,
    1705: `981`,
    1706: `981`,
    1707: `981`,
    1708: `983`,
    1709: `984`,
    171: `25`,
    1710: `984`,
    1711: `985`,
    1712: `986`,
    1713: `988`,
    1714: `988`,
    1715: `989`,
    1716: `990`,
    1717: `991`,
    1718: `991`,
    1719: `992`,
    172: `27`,
    1720: `992`,
    1721: `993`,
    1722: `994`,
    1723: `995`,
    1724: `995`,
    1725: `996`,
    1726: `996`,
    1727: `997`,
    1728: `997`,
    1729: `998`,
    173: `27`,
    1730: `999`,
    1731: `999`,
    1732: `1000`,
    1733: `1000`,
    1734: `1000`,
    1735: `1000`,
    1736: `1000`,
    1737: `1000`,
    1738: `1001`,
    1739: `1001`,
    174: `27`,
    1740: `1002`,
    1741: `1003`,
    1742: `1004`,
    1743: `1004`,
    1744: `1005`,
    1745: `1006`,
    1746: `1007`,
    1747: `1007`,
    1748: `1008`,
    1749: `1009`,
    175: `28`,
    1750: `1010`,
    1751: `1012`,
    1752: `1012`,
    1753: `1013`,
    1754: `1013`,
    1755: `1013`,
    1756: `1014`,
    1757: `1014`,
    1758: `1015`,
    1759: `1015`,
    176: `28`,
    1760: `1016`,
    1761: `1017`,
    1762: `1017`,
    1763: `1018`,
    1764: `1018`,
    1765: `1019`,
    1766: `1020`,
    1767: `1020`,
    1768: `1021`,
    1769: `1022`,
    177: `30`,
    1770: `1023`,
    1771: `1023`,
    1772: `1024`,
    1773: `1025`,
    1774: `1025`,
    1775: `1026`,
    1776: `1027`,
    1777: `1028`,
    1778: `1029`,
    1779: `1029`,
    178: `31`,
    1780: `1030`,
    1781: `1030`,
    1782: `1031`,
    1783: `1032`,
    1784: `1032`,
    1785: `1033`,
    1786: `1034`,
    1787: `1034`,
    1788: `1035`,
    1789: `1036`,
    179: `32`,
    1790: `1036`,
    1791: `1037`,
    1792: `1038`,
    1793: `1039`,
    1794: `1039`,
    1795: `1040`,
    1796: `1041`,
    1797: `1042`,
    1798: `1042`,
    1799: `1043`,
    18: `2`,
    180: `33`,
    1800: `1044`,
    1801: `1044`,
    1802: `1045`,
    1803: `1045`,
    1804: `1047`,
    1805: `1047`,
    1806: `1048`,
    1807: `1048`,
    1808: `1048`,
    1809: `1048`,
    181: `33`,
    1810: `1048`,
    1811: `1048`,
    1812: `1049`,
    1813: `1049`,
    1814: `1050`,
    1815: `1050`,
    1816: `1051`,
    1817: `1051`,
    1818: `1052`,
    1819: `1055`,
    182: `34`,
    1820: `1055`,
    1821: `1056`,
    1822: `1057`,
    1823: `1057`,
    1824: `1058`,
    1825: `1059`,
    1826: `1059`,
    1827: `1060`,
    1828: `1061`,
    1829: `1062`,
    183: `35`,
    1830: `1063`,
    1831: `1063`,
    1832: `1063`,
    1833: `1064`,
    1834: `1064`,
    1835: `1064`,
    1836: `1065`,
    1837: `1066`,
    1838: `1066`,
    1839: `1067`,
    184: `35`,
    1840: `1067`,
    1841: `1067`,
    1842: `1067`,
    1843: `1067`,
    1844: `1067`,
    1845: `1067`,
    1846: `1067`,
    1847: `1067`,
    1848: `1067`,
    1849: `1068`,
    185: `36`,
    1850: `1068`,
    1851: `1069`,
    1852: `1070`,
    1853: `1071`,
    1854: `1071`,
    1855: `1072`,
    1856: `1072`,
    1857: `1073`,
    1858: `1074`,
    1859: `1074`,
    186: `37`,
    1860: `1075`,
    1861: `1076`,
    1862: `1077`,
    1863: `1078`,
    1864: `1081`,
    1865: `1081`,
    1866: `1082`,
    1867: `1082`,
    1868: `1082`,
    1869: `1083`,
    187: `38`,
    1870: `1084`,
    1871: `1087`,
    1872: `1088`,
    1873: `1088`,
    1874: `1089`,
    1875: `1090`,
    1876: `1091`,
    1877: `1092`,
    1878: `1093`,
    1879: `1094`,
    188: `39`,
    1880: `1095`,
    1881: `1096`,
    1882: `1097`,
    1883: `1098`,
    1884: `1099`,
    1885: `1100`,
    1886: `1101`,
    1887: `1102`,
    1888: `1103`,
    1889: `1104`,
    189: `39`,
    1890: `1105`,
    1891: `1106`,
    1892: `1107`,
    1893: `1108`,
    1894: `1108`,
    1895: `1109`,
    1896: `1110`,
    1897: `1111`,
    1898: `1112`,
    1899: `1113`,
    19: `2`,
    190: `41`,
    1900: `1114`,
    1901: `1114`,
    1902: `1115`,
    1903: `1115`,
    1904: `1116`,
    1905: `1116`,
    1906: `1117`,
    1907: `1117`,
    1908: `1117`,
    1909: `1119`,
    191: `41`,
    1910: `1119`,
    1911: `1119`,
    1912: `1120`,
    1913: `1120`,
    1914: `1120`,
    1915: `1120`,
    1916: `1121`,
    1917: `1121`,
    1918: `1121`,
    1919: `1122`,
    192: `42`,
    1920: `1122`,
    1921: `1122`,
    1922: `1123`,
    1923: `1123`,
    1924: `1124`,
    1925: `1124`,
    1926: `1124`,
    1927: `1126`,
    1928: `1126`,
    1929: `1126`,
    193: `42`,
    1930: `1127`,
    1931: `1127`,
    1932: `1127`,
    1933: `1128`,
    1934: `1128`,
    1935: `1129`,
    1936: `1129`,
    1937: `1129`,
    1938: `1131`,
    1939: `1131`,
    194: `43`,
    1940: `1131`,
    1941: `1132`,
    1942: `1132`,
    1943: `1132`,
    1944: `1133`,
    1945: `1133`,
    1946: `1134`,
    1947: `1134`,
    1948: `1134`,
    1949: `1136`,
    195: `44`,
    1950: `1137`,
    1951: `1137`,
    1952: `1138`,
    1953: `1139`,
    1954: `1140`,
    1955: `1140`,
    1956: `1141`,
    1957: `1141`,
    1958: `1142`,
    1959: `1143`,
    196: `45`,
    1960: `1144`,
    1961: `1145`,
    1962: `1145`,
    1963: `1146`,
    1964: `1147`,
    1965: `1148`,
    1966: `1149`,
    1967: `1149`,
    1968: `1150`,
    1969: `1151`,
    197: `45`,
    1970: `1152`,
    1971: `1152`,
    1972: `1152`,
    1973: `1153`,
    1974: `1153`,
    1975: `1154`,
    1976: `1155`,
    1977: `1156`,
    1978: `1157`,
    1979: `1157`,
    198: `45`,
    1980: `1157`,
    1981: `1159`,
    1982: `1159`,
    1983: `1159`,
    1984: `1161`,
    1985: `1161`,
    1986: `1161`,
    1987: `1163`,
    1988: `1163`,
    1989: `1164`,
    199: `46`,
    1990: `1164`,
    1991: `1164`,
    1992: `1165`,
    1993: `1165`,
    1994: `1166`,
    1995: `1166`,
    1996: `1166`,
    1997: `1168`,
    1998: `1168`,
    1999: `1169`,
    2: `2`,
    20: `2`,
    200: `46`,
    2000: `1169`,
    2001: `1169`,
    2002: `1170`,
    2003: `1170`,
    2004: `1171`,
    2005: `1171`,
    2006: `1171`,
    2007: `1173`,
    2008: `1173`,
    2009: `1173`,
    201: `47`,
    2010: `1175`,
    2011: `1175`,
    2012: `1176`,
    2013: `1181`,
    2014: `1181`,
    2015: `1182`,
    2016: `1183`,
    2017: `1184`,
    2018: `1184`,
    2019: `1184`,
    202: `48`,
    2020: `1184`,
    2021: `1184`,
    2022: `1184`,
    2023: `1185`,
    2024: `1185`,
    2025: `1185`,
    2026: `1187`,
    2027: `1188`,
    2028: `1188`,
    2029: `1189`,
    203: `49`,
    2030: `1189`,
    2031: `1189`,
    2032: `1191`,
    2033: `1191`,
    2034: `1192`,
    2035: `1192`,
    2036: `1192`,
    2037: `1193`,
    2038: `1193`,
    2039: `1194`,
    204: `49`,
    2040: `1195`,
    2041: `1196`,
    2042: `1197`,
    2043: `1197`,
    2044: `1198`,
    2045: `1198`,
    2046: `1198`,
    2047: `1200`,
    2048: `1200`,
    2049: `1201`,
    205: `50`,
    2050: `1206`,
    2051: `1206`,
    2052: `1207`,
    2053: `1208`,
    2054: `1208`,
    2055: `1209`,
    2056: `1210`,
    2057: `1210`,
    2058: `1210`,
    2059: `1211`,
    206: `50`,
    2060: `1212`,
    2061: `1212`,
    2062: `1213`,
    2063: `1213`,
    2064: `1213`,
    2065: `1213`,
    2066: `1213`,
    2067: `1213`,
    2068: `1213`,
    2069: `1213`,
    207: `51`,
    2070: `1213`,
    2071: `1213`,
    2072: `1214`,
    2073: `1214`,
    2074: `1215`,
    2075: `1216`,
    2076: `1216`,
    2077: `1216`,
    2078: `1217`,
    2079: `1218`,
    208: `51`,
    2080: `1219`,
    2081: `1219`,
    2082: `1220`,
    2083: `1221`,
    2084: `1221`,
    2085: `1221`,
    2086: `1222`,
    2087: `1222`,
    2088: `1223`,
    2089: `1224`,
    209: `51`,
    2090: `1224`,
    2091: `1225`,
    2092: `1226`,
    2093: `1227`,
    2094: `1228`,
    2095: `1228`,
    2096: `1229`,
    2097: `1229`,
    2098: `1230`,
    2099: `1231`,
    21: `2`,
    210: `52`,
    2100: `1231`,
    2101: `1232`,
    2102: `1233`,
    2103: `1233`,
    2104: `1234`,
    2105: `1235`,
    2106: `1235`,
    2107: `1236`,
    2108: `1237`,
    2109: `1238`,
    211: `52`,
    2110: `1238`,
    2111: `1239`,
    2112: `1240`,
    2113: `1241`,
    2114: `1241`,
    2115: `1242`,
    2116: `1243`,
    2117: `1243`,
    2118: `1244`,
    2119: `1244`,
    212: `53`,
    2120: `1246`,
    2121: `1246`,
    2122: `1247`,
    2123: `1247`,
    2124: `1248`,
    2125: `1248`,
    2126: `1249`,
    2127: `1250`,
    2128: `1250`,
    2129: `1251`,
    213: `53`,
    2130: `1252`,
    2131: `1252`,
    2132: `1253`,
    2133: `1254`,
    2134: `1255`,
    2135: `1255`,
    2136: `1256`,
    2137: `1257`,
    2138: `1258`,
    2139: `1258`,
    214: `53`,
    2140: `1259`,
    2141: `1260`,
    2142: `1260`,
    2143: `1261`,
    2144: `1265`,
    2145: `1265`,
    2146: `1266`,
    2147: `1267`,
    2148: `1267`,
    2149: `1268`,
    215: `53`,
    2150: `1269`,
    2151: `1269`,
    2152: `1270`,
    2153: `1271`,
    2154: `1272`,
    2155: `1273`,
    2156: `1273`,
    2157: `1273`,
    2158: `1274`,
    2159: `1274`,
    216: `53`,
    2160: `1274`,
    2161: `1275`,
    2162: `1276`,
    2163: `1276`,
    2164: `1277`,
    2165: `1277`,
    2166: `1277`,
    2167: `1277`,
    2168: `1277`,
    2169: `1277`,
    217: `53`,
    2170: `1277`,
    2171: `1277`,
    2172: `1277`,
    2173: `1277`,
    2174: `1278`,
    2175: `1278`,
    2176: `1279`,
    2177: `1280`,
    2178: `1281`,
    2179: `1281`,
    218: `54`,
    2180: `1282`,
    2181: `1282`,
    2182: `1283`,
    2183: `1284`,
    2184: `1284`,
    2185: `1285`,
    2186: `1286`,
    2187: `1287`,
    2188: `1288`,
    2189: `1292`,
    219: `54`,
    2190: `1292`,
    2191: `1293`,
    2192: `1293`,
    2193: `1293`,
    2194: `1294`,
    2195: `1295`,
    2196: `1299`,
    2197: `1299`,
    2198: `1300`,
    2199: `1300`,
    22: `2`,
    220: `55`,
    2200: `1300`,
    2201: `1301`,
    2202: `1301`,
    2203: `1302`,
    2204: `1302`,
    2205: `1302`,
    2206: `1303`,
    2207: `1304`,
    2208: `1304`,
    2209: `1305`,
    221: `56`,
    2210: `1305`,
    2211: `1306`,
    2212: `1307`,
    2213: `1308`,
    2214: `1309`,
    2215: `1310`,
    2216: `1311`,
    2217: `1311`,
    2218: `1312`,
    2219: `1312`,
    222: `57`,
    2220: `1312`,
    2221: `1313`,
    2222: `1314`,
    2223: `1314`,
    2224: `1315`,
    2225: `1315`,
    2226: `1315`,
    2227: `1316`,
    2228: `1317`,
    2229: `1317`,
    223: `57`,
    2230: `1318`,
    2231: `1318`,
    2232: `1318`,
    2233: `1319`,
    2234: `1320`,
    2235: `1320`,
    2236: `1321`,
    2237: `1322`,
    2238: `1323`,
    2239: `1323`,
    224: `58`,
    2240: `1324`,
    2241: `1324`,
    2242: `1324`,
    2243: `1325`,
    2244: `1326`,
    2245: `1326`,
    2246: `1327`,
    2247: `1327`,
    2248: `1327`,
    2249: `1328`,
    225: `59`,
    2250: `1329`,
    2251: `1329`,
    2252: `1330`,
    2253: `1330`,
    2254: `1330`,
    2255: `1331`,
    2256: `1332`,
    2257: `1332`,
    2258: `1333`,
    2259: `1333`,
    226: `61`,
    2260: `1334`,
    2261: `1334`,
    2262: `1335`,
    2263: `1335`,
    2264: `1335`,
    2265: `1337`,
    2266: `1338`,
    2267: `1338`,
    2268: `1339`,
    2269: `1339`,
    227: `61`,
    2270: `1339`,
    2271: `1341`,
    2272: `1341`,
    2273: `1342`,
    2274: `1342`,
    2275: `1342`,
    2276: `1343`,
    2277: `1343`,
    2278: `1344`,
    2279: `1345`,
    228: `62`,
    2280: `1346`,
    2281: `1347`,
    2282: `1347`,
    2283: `1348`,
    2284: `1348`,
    2285: `1348`,
    2286: `1350`,
    2287: `1350`,
    2288: `1351`,
    2289: `1356`,
    229: `62`,
    2290: `1356`,
    2291: `1357`,
    2292: `1357`,
    2293: `1358`,
    2294: `1358`,
    2295: `1359`,
    2296: `1360`,
    2297: `1361`,
    2298: `1361`,
    2299: `1361`,
    23: `2`,
    230: `62`,
    2300: `1362`,
    2301: `1362`,
    2302: `1363`,
    2303: `1364`,
    2304: `1365`,
    2305: `1365`,
    2306: `1365`,
    2307: `1365`,
    2308: `1365`,
    2309: `1365`,
    231: `63`,
    2310: `1366`,
    2311: `1366`,
    2312: `1366`,
    2313: `1368`,
    2314: `1369`,
    2315: `1369`,
    2316: `1370`,
    2317: `1370`,
    2318: `1370`,
    2319: `1372`,
    232: `63`,
    2320: `1372`,
    2321: `1373`,
    2322: `1373`,
    2323: `1373`,
    2324: `1374`,
    2325: `1374`,
    2326: `1375`,
    2327: `1376`,
    2328: `1377`,
    2329: `1378`,
    233: `64`,
    2330: `1378`,
    2331: `1379`,
    2332: `1379`,
    2333: `1379`,
    2334: `1381`,
    2335: `1382`,
    2336: `1382`,
    2337: `1383`,
    2338: `1384`,
    2339: `1385`,
    234: `65`,
    2340: `1386`,
    2341: `1386`,
    2342: `1387`,
    2343: `1387`,
    2344: `1388`,
    2345: `1389`,
    2346: `1389`,
    2347: `1390`,
    2348: `1391`,
    2349: `1391`,
    235: `66`,
    2350: `1392`,
    2351: `1393`,
    2352: `1393`,
    2353: `1394`,
    2354: `1395`,
    2355: `1396`,
    2356: `1396`,
    2357: `1397`,
    2358: `1398`,
    2359: `1399`,
    236: `66`,
    2360: `1399`,
    2361: `1400`,
    2362: `1401`,
    2363: `1401`,
    2364: `1402`,
    2365: `1402`,
    2366: `1404`,
    2367: `1404`,
    2368: `1405`,
    2369: `1405`,
    237: `66`,
    2370: `1406`,
    2371: `1406`,
    2372: `1407`,
    2373: `1408`,
    2374: `1408`,
    2375: `1409`,
    2376: `1410`,
    2377: `1410`,
    2378: `1411`,
    2379: `1412`,
    238: `66`,
    2380: `1413`,
    2381: `1413`,
    2382: `1414`,
    2383: `1415`,
    2384: `1415`,
    2385: `1416`,
    2386: `1417`,
    2387: `1418`,
    2388: `1418`,
    2389: `1419`,
    239: `66`,
    2390: `1423`,
    2391: `1423`,
    2392: `1424`,
    2393: `1425`,
    2394: `1425`,
    2395: `1426`,
    2396: `1427`,
    2397: `1427`,
    2398: `1428`,
    2399: `1429`,
    24: `2`,
    240: `66`,
    2400: `1430`,
    2401: `1431`,
    2402: `1431`,
    2403: `1431`,
    2404: `1432`,
    2405: `1432`,
    2406: `1432`,
    2407: `1433`,
    2408: `1434`,
    2409: `1434`,
    241: `66`,
    2410: `1435`,
    2411: `1435`,
    2412: `1435`,
    2413: `1435`,
    2414: `1435`,
    2415: `1435`,
    2416: `1435`,
    2417: `1435`,
    2418: `1435`,
    2419: `1435`,
    242: `66`,
    2420: `1436`,
    2421: `1436`,
    2422: `1437`,
    2423: `1438`,
    2424: `1439`,
    2425: `1439`,
    2426: `1440`,
    2427: `1440`,
    2428: `1441`,
    2429: `1442`,
    243: `66`,
    2430: `1442`,
    2431: `1443`,
    2432: `1444`,
    2433: `1445`,
    2434: `1446`,
    2435: `1450`,
    2436: `1450`,
    2437: `1451`,
    2438: `1451`,
    2439: `1451`,
    244: `66`,
    2440: `1452`,
    2441: `1453`,
    2442: `1457`,
    2443: `1458`,
    2444: `1458`,
    2445: `1459`,
    2446: `1459`,
    2447: `1459`,
    2448: `1459`,
    2449: `1459`,
    245: `66`,
    2450: `1459`,
    2451: `1459`,
    2452: `1459`,
    2453: `1459`,
    2454: `1459`,
    2455: `1460`,
    2456: `1460`,
    2457: `1461`,
    2458: `1462`,
    2459: `1462`,
    246: `66`,
    2460: `1462`,
    2461: `1463`,
    2462: `1464`,
    2463: `1465`,
    2464: `1465`,
    2465: `1466`,
    2466: `1467`,
    2467: `1467`,
    2468: `1467`,
    2469: `1468`,
    247: `66`,
    2470: `1468`,
    2471: `1469`,
    2472: `1469`,
    2473: `1470`,
    2474: `1470`,
    2475: `1470`,
    2476: `1471`,
    2477: `1471`,
    2478: `1472`,
    2479: `1472`,
    248: `66`,
    2480: `1472`,
    2481: `1473`,
    2482: `1474`,
    2483: `1474`,
    2484: `1475`,
    2485: `1475`,
    2486: `1475`,
    2487: `1476`,
    2488: `1477`,
    2489: `1477`,
    249: `66`,
    2490: `1478`,
    2491: `1478`,
    2492: `1478`,
    2493: `1479`,
    2494: `1480`,
    2495: `1480`,
    2496: `1481`,
    2497: `1481`,
    2498: `1481`,
    2499: `1482`,
    25: `2`,
    250: `66`,
    2500: `1483`,
    2501: `1483`,
    2502: `1484`,
    2503: `1484`,
    2504: `1484`,
    2505: `1485`,
    2506: `1486`,
    2507: `1486`,
    2508: `1487`,
    2509: `1487`,
    251: `67`,
    2510: `1488`,
    2511: `1489`,
    2512: `1490`,
    2513: `1491`,
    2514: `1492`,
    2515: `1493`,
    2516: `1493`,
    2517: `1494`,
    2518: `1494`,
    2519: `1494`,
    252: `67`,
    2520: `1495`,
    2521: `1496`,
    2522: `1496`,
    2523: `1497`,
    2524: `1497`,
    2525: `1497`,
    2526: `1498`,
    2527: `1499`,
    2528: `1499`,
    2529: `1500`,
    253: `67`,
    2530: `1500`,
    2531: `1500`,
    2532: `1501`,
    2533: `1502`,
    2534: `1502`,
    2535: `1503`,
    2536: `1503`,
    2537: `1504`,
    2538: `1504`,
    2539: `1505`,
    254: `69`,
    2540: `1505`,
    2541: `1505`,
    2542: `1507`,
    2543: `1507`,
    2544: `1508`,
    2545: `1508`,
    2546: `1508`,
    2547: `1509`,
    2548: `1509`,
    2549: `1510`,
    255: `69`,
    2550: `1510`,
    2551: `1511`,
    2552: `1512`,
    2553: `1512`,
    2554: `1513`,
    2555: `1514`,
    2556: `1514`,
    2557: `1515`,
    2558: `1515`,
    2559: `1515`,
    256: `69`,
    2560: `1516`,
    2561: `1516`,
    2562: `1517`,
    2563: `1517`,
    2564: `1517`,
    2565: `1518`,
    2566: `1519`,
    2567: `1519`,
    2568: `1520`,
    2569: `1520`,
    257: `70`,
    2570: `1520`,
    2571: `1521`,
    2572: `1522`,
    2573: `1522`,
    2574: `1523`,
    2575: `1523`,
    2576: `1524`,
    2577: `1525`,
    2578: `1526`,
    2579: `1527`,
    258: `70`,
    2580: `1528`,
    2581: `1529`,
    2582: `1529`,
    2583: `1530`,
    2584: `1530`,
    2585: `1530`,
    2586: `1531`,
    2587: `1532`,
    2588: `1532`,
    2589: `1532`,
    259: `70`,
    2590: `1533`,
    2591: `1534`,
    2592: `1534`,
    2593: `1535`,
    2594: `1536`,
    2595: `1537`,
    2596: `1538`,
    2597: `1538`,
    2598: `1539`,
    2599: `1539`,
    26: `2`,
    260: `71`,
    2600: `1540`,
    2601: `1541`,
    2602: `1541`,
    2603: `1542`,
    2604: `1543`,
    2605: `1543`,
    2606: `1544`,
    2607: `1545`,
    2608: `1545`,
    2609: `1546`,
    261: `71`,
    2610: `1547`,
    2611: `1548`,
    2612: `1548`,
    2613: `1549`,
    2614: `1550`,
    2615: `1551`,
    2616: `1551`,
    2617: `1552`,
    2618: `1553`,
    2619: `1553`,
    262: `72`,
    2620: `1554`,
    2621: `1554`,
    2622: `1556`,
    2623: `1556`,
    2624: `1557`,
    2625: `1557`,
    2626: `1558`,
    2627: `1558`,
    2628: `1559`,
    2629: `1560`,
    263: `72`,
    2630: `1560`,
    2631: `1561`,
    2632: `1562`,
    2633: `1562`,
    2634: `1563`,
    2635: `1564`,
    2636: `1565`,
    2637: `1565`,
    2638: `1566`,
    2639: `1567`,
    264: `74`,
    2640: `1567`,
    2641: `1568`,
    2642: `1569`,
    2643: `1570`,
    2644: `1570`,
    2645: `1571`,
    2646: `1575`,
    2647: `1575`,
    2648: `1576`,
    2649: `1577`,
    265: `75`,
    2650: `1577`,
    2651: `1578`,
    2652: `1579`,
    2653: `1579`,
    2654: `1580`,
    2655: `1581`,
    2656: `1582`,
    2657: `1583`,
    2658: `1583`,
    2659: `1583`,
    266: `76`,
    2660: `1584`,
    2661: `1584`,
    2662: `1584`,
    2663: `1585`,
    2664: `1586`,
    2665: `1586`,
    2666: `1587`,
    2667: `1587`,
    2668: `1587`,
    2669: `1587`,
    267: `77`,
    2670: `1587`,
    2671: `1587`,
    2672: `1587`,
    2673: `1587`,
    2674: `1587`,
    2675: `1587`,
    2676: `1588`,
    2677: `1588`,
    2678: `1589`,
    2679: `1590`,
    268: `77`,
    2680: `1591`,
    2681: `1591`,
    2682: `1592`,
    2683: `1592`,
    2684: `1593`,
    2685: `1594`,
    2686: `1594`,
    2687: `1595`,
    2688: `1596`,
    2689: `1597`,
    269: `78`,
    2690: `1598`,
    2691: `1602`,
    2692: `1602`,
    2693: `1603`,
    2694: `1603`,
    2695: `1603`,
    2696: `1604`,
    2697: `1605`,
    2698: `1609`,
    2699: `1610`,
    27: `2`,
    270: `78`,
    2700: `1610`,
    2701: `1611`,
    2702: `1611`,
    2703: `1611`,
    2704: `1611`,
    2705: `1611`,
    2706: `1611`,
    2707: `1611`,
    2708: `1611`,
    2709: `1611`,
    271: `79`,
    2710: `1611`,
    2711: `1612`,
    2712: `1612`,
    2713: `1613`,
    2714: `1614`,
    2715: `1614`,
    2716: `1614`,
    2717: `1615`,
    2718: `1616`,
    2719: `1617`,
    272: `80`,
    2720: `1617`,
    2721: `1618`,
    2722: `1619`,
    2723: `1619`,
    2724: `1619`,
    2725: `1620`,
    2726: `1620`,
    2727: `1621`,
    2728: `1621`,
    2729: `1622`,
    273: `81`,
    2730: `1622`,
    2731: `1622`,
    2732: `1623`,
    2733: `1623`,
    2734: `1624`,
    2735: `1624`,
    2736: `1624`,
    2737: `1625`,
    2738: `1626`,
    2739: `1626`,
    274: `82`,
    2740: `1627`,
    2741: `1627`,
    2742: `1627`,
    2743: `1628`,
    2744: `1629`,
    2745: `1629`,
    2746: `1630`,
    2747: `1630`,
    2748: `1630`,
    2749: `1631`,
    275: `83`,
    2750: `1632`,
    2751: `1632`,
    2752: `1633`,
    2753: `1633`,
    2754: `1633`,
    2755: `1634`,
    2756: `1635`,
    2757: `1635`,
    2758: `1636`,
    2759: `1636`,
    276: `84`,
    2760: `1636`,
    2761: `1637`,
    2762: `1638`,
    2763: `1638`,
    2764: `1639`,
    2765: `1639`,
    2766: `1640`,
    2767: `1641`,
    2768: `1642`,
    2769: `1643`,
    277: `85`,
    2770: `1644`,
    2771: `1645`,
    2772: `1645`,
    2773: `1646`,
    2774: `1646`,
    2775: `1646`,
    2776: `1647`,
    2777: `1648`,
    2778: `1648`,
    2779: `1649`,
    278: `85`,
    2780: `1649`,
    2781: `1649`,
    2782: `1650`,
    2783: `1651`,
    2784: `1651`,
    2785: `1652`,
    2786: `1652`,
    2787: `1652`,
    2788: `1653`,
    2789: `1654`,
    279: `86`,
    2790: `1654`,
    2791: `1655`,
    2792: `1655`,
    2793: `1656`,
    2794: `1656`,
    2795: `1657`,
    2796: `1657`,
    2797: `1657`,
    2798: `1659`,
    2799: `1659`,
    28: `2`,
    280: `86`,
    2800: `1660`,
    2801: `1661`,
    2802: `1661`,
    2803: `1662`,
    2804: `1662`,
    2805: `1662`,
    2806: `1663`,
    2807: `1664`,
    2808: `1664`,
    2809: `1665`,
    281: `86`,
    2810: `1666`,
    2811: `1667`,
    2812: `1667`,
    2813: `1668`,
    2814: `1668`,
    2815: `1669`,
    2816: `1669`,
    2817: `1670`,
    2818: `1671`,
    2819: `1676`,
    282: `89`,
    2820: `1676`,
    2821: `1677`,
    2822: `1678`,
    2823: `1679`,
    2824: `1679`,
    2825: `1680`,
    2826: `1680`,
    2827: `1681`,
    2828: `1682`,
    2829: `1683`,
    283: `89`,
    2830: `1683`,
    2831: `1683`,
    2832: `1683`,
    2833: `1683`,
    2834: `1683`,
    2835: `1684`,
    2836: `1684`,
    2837: `1684`,
    2838: `1686`,
    2839: `1687`,
    284: `89`,
    2840: `1687`,
    2841: `1688`,
    2842: `1688`,
    2843: `1688`,
    2844: `1690`,
    2845: `1690`,
    2846: `1691`,
    2847: `1691`,
    2848: `1691`,
    2849: `1692`,
    285: `89`,
    2850: `1693`,
    2851: `1694`,
    2852: `1694`,
    2853: `1695`,
    2854: `1696`,
    2855: `1696`,
    2856: `1697`,
    2857: `1697`,
    2858: `1697`,
    2859: `1699`,
    286: `89`,
    2860: `1699`,
    2861: `1700`,
    2862: `1700`,
    2863: `1701`,
    2864: `1701`,
    2865: `1702`,
    2866: `1703`,
    2867: `1704`,
    2868: `1708`,
    2869: `1708`,
    287: `89`,
    2870: `1709`,
    2871: `1710`,
    2872: `1711`,
    2873: `1711`,
    2874: `1711`,
    2875: `1711`,
    2876: `1711`,
    2877: `1711`,
    2878: `1712`,
    2879: `1712`,
    288: `89`,
    2880: `1712`,
    2881: `1714`,
    2882: `1715`,
    2883: `1715`,
    2884: `1716`,
    2885: `1716`,
    2886: `1716`,
    2887: `1718`,
    2888: `1718`,
    2889: `1719`,
    289: `89`,
    2890: `1719`,
    2891: `1720`,
    2892: `1720`,
    2893: `1720`,
    2894: `1721`,
    2895: `1721`,
    2896: `1722`,
    2897: `1723`,
    2898: `1724`,
    2899: `1724`,
    29: `2`,
    290: `89`,
    2900: `1725`,
    2901: `1725`,
    2902: `1725`,
    2903: `1727`,
    2904: `1728`,
    2905: `1728`,
    2906: `1729`,
    2907: `1730`,
    2908: `1731`,
    2909: `1732`,
    291: `89`,
    2910: `1732`,
    2911: `1733`,
    2912: `1733`,
    2913: `1734`,
    2914: `1735`,
    2915: `1735`,
    2916: `1736`,
    2917: `1737`,
    2918: `1737`,
    2919: `1738`,
    292: `89`,
    2920: `1739`,
    2921: `1739`,
    2922: `1740`,
    2923: `1741`,
    2924: `1742`,
    2925: `1742`,
    2926: `1743`,
    2927: `1744`,
    2928: `1745`,
    2929: `1745`,
    293: `89`,
    2930: `1746`,
    2931: `1747`,
    2932: `1747`,
    2933: `1748`,
    2934: `1748`,
    2935: `1750`,
    2936: `1750`,
    2937: `1751`,
    2938: `1751`,
    2939: `1751`,
    294: `89`,
    2940: `1751`,
    2941: `1751`,
    2942: `1751`,
    2943: `1752`,
    2944: `1752`,
    2945: `1753`,
    2946: `1753`,
    2947: `1755`,
    2948: `1756`,
    2949: `1756`,
    295: `89`,
    2950: `1757`,
    2951: `1757`,
    2952: `1758`,
    2953: `1758`,
    2954: `1760`,
    2955: `1761`,
    2956: `1761`,
    2957: `1762`,
    2958: `1762`,
    2959: `1763`,
    296: `89`,
    2960: `1763`,
    2961: `1764`,
    2962: `1765`,
    2963: `1765`,
    2964: `1769`,
    2965: `1769`,
    2966: `1770`,
    2967: `1770`,
    2968: `1771`,
    2969: `1775`,
    297: `89`,
    2970: `1775`,
    2971: `1776`,
    2972: `1777`,
    2973: `1777`,
    2974: `1778`,
    2975: `1779`,
    2976: `1779`,
    2977: `1780`,
    2978: `1781`,
    2979: `1782`,
    298: `89`,
    2980: `1783`,
    2981: `1783`,
    2982: `1783`,
    2983: `1784`,
    2984: `1784`,
    2985: `1784`,
    2986: `1785`,
    2987: `1786`,
    2988: `1786`,
    2989: `1787`,
    299: `89`,
    2990: `1787`,
    2991: `1787`,
    2992: `1787`,
    2993: `1787`,
    2994: `1787`,
    2995: `1787`,
    2996: `1787`,
    2997: `1787`,
    2998: `1787`,
    2999: `1788`,
    3: `2`,
    30: `2`,
    300: `89`,
    3000: `1788`,
    3001: `1789`,
    3002: `1790`,
    3003: `1791`,
    3004: `1791`,
    3005: `1792`,
    3006: `1792`,
    3007: `1793`,
    3008: `1794`,
    3009: `1794`,
    301: `89`,
    3010: `1795`,
    3011: `1796`,
    3012: `1797`,
    3013: `1798`,
    3014: `1802`,
    3015: `1802`,
    3016: `1803`,
    3017: `1803`,
    3018: `1803`,
    3019: `1804`,
    302: `89`,
    3020: `1805`,
    3021: `1809`,
    3022: `1809`,
    3023: `1810`,
    3024: `1811`,
    3025: `1811`,
    3026: `1812`,
    3027: `1813`,
    3028: `1814`,
    3029: `1814`,
    303: `89`,
    3030: `1815`,
    3031: `1816`,
    3032: `1816`,
    3033: `1817`,
    3034: `1818`,
    3035: `1818`,
    3036: `1819`,
    3037: `1820`,
    3038: `1821`,
    3039: `1821`,
    304: `89`,
    3040: `1822`,
    3041: `1822`,
    3042: `1822`,
    3043: `1822`,
    3044: `1822`,
    3045: `1822`,
    3046: `1823`,
    3047: `1823`,
    3048: `1824`,
    3049: `1825`,
    305: `89`,
    3050: `1827`,
    3051: `1827`,
    3052: `1828`,
    3053: `1829`,
    3054: `1830`,
    3055: `1830`,
    3056: `1830`,
    3057: `1830`,
    3058: `1830`,
    3059: `1830`,
    306: `89`,
    3060: `1831`,
    3061: `1831`,
    3062: `1831`,
    3063: `1833`,
    3064: `1834`,
    3065: `1834`,
    3066: `1835`,
    3067: `1835`,
    3068: `1835`,
    3069: `1837`,
    307: `89`,
    3070: `1837`,
    3071: `1838`,
    3072: `1838`,
    3073: `1838`,
    3074: `1839`,
    3075: `1840`,
    3076: `1841`,
    3077: `1841`,
    3078: `1842`,
    3079: `1843`,
    308: `89`,
    3080: `1843`,
    3081: `1844`,
    3082: `1844`,
    3083: `1844`,
    3084: `1846`,
    3085: `1846`,
    3086: `1847`,
    3087: `1848`,
    3088: `1849`,
    3089: `1849`,
    309: `89`,
    3090: `1849`,
    3091: `1849`,
    3092: `1849`,
    3093: `1849`,
    3094: `1850`,
    3095: `1850`,
    3096: `1850`,
    3097: `1852`,
    3098: `1853`,
    3099: `1853`,
    31: `2`,
    310: `89`,
    3100: `1854`,
    3101: `1854`,
    3102: `1854`,
    3103: `1856`,
    3104: `1856`,
    3105: `1857`,
    3106: `1857`,
    3107: `1857`,
    3108: `1858`,
    3109: `1859`,
    311: `89`,
    3110: `1860`,
    3111: `1860`,
    3112: `1861`,
    3113: `1862`,
    3114: `1862`,
    3115: `1863`,
    3116: `1863`,
    3117: `1863`,
    3118: `1865`,
    3119: `1865`,
    312: `89`,
    3120: `1866`,
    3121: `1866`,
    3122: `1867`,
    3123: `1867`,
    3124: `1868`,
    3125: `1869`,
    3126: `1870`,
    3127: `1870`,
    3128: `1871`,
    3129: `1871`,
    313: `89`,
    3130: `1872`,
    3131: `1873`,
    3132: `1874`,
    3133: `1874`,
    3134: `1875`,
    3135: `1875`,
    3136: `1876`,
    3137: `1877`,
    3138: `1878`,
    3139: `1879`,
    314: `89`,
    3140: `1880`,
    3141: `1881`,
    3142: `1881`,
    3143: `1881`,
    3144: `1882`,
    3145: `1883`,
    3146: `1883`,
    3147: `1884`,
    3148: `1884`,
    3149: `1884`,
    315: `89`,
    3150: `1884`,
    3151: `1884`,
    3152: `1884`,
    3153: `1884`,
    3154: `1884`,
    3155: `1884`,
    3156: `1884`,
    3157: `1885`,
    3158: `1885`,
    3159: `1886`,
    316: `89`,
    3160: `1887`,
    3161: `1887`,
    3162: `1887`,
    3163: `1888`,
    3164: `1889`,
    3165: `1890`,
    3166: `1890`,
    3167: `1891`,
    3168: `1892`,
    3169: `1892`,
    317: `89`,
    3170: `1892`,
    3171: `1893`,
    3172: `1893`,
    3173: `1894`,
    3174: `1894`,
    3175: `1895`,
    3176: `1896`,
    3177: `1897`,
    3178: `1897`,
    3179: `1897`,
    318: `89`,
    3180: `1897`,
    3181: `1897`,
    3182: `1897`,
    3183: `1898`,
    3184: `1898`,
    3185: `1898`,
    3186: `1900`,
    3187: `1901`,
    3188: `1901`,
    3189: `1902`,
    319: `89`,
    3190: `1902`,
    3191: `1902`,
    3192: `1904`,
    3193: `1904`,
    3194: `1905`,
    3195: `1905`,
    3196: `1906`,
    3197: `1906`,
    3198: `1906`,
    3199: `1907`,
    32: `2`,
    320: `89`,
    3200: `1907`,
    3201: `1908`,
    3202: `1909`,
    3203: `1910`,
    3204: `1910`,
    3205: `1911`,
    3206: `1911`,
    3207: `1911`,
    3208: `1913`,
    3209: `1913`,
    321: `89`,
    3210: `1914`,
    3211: `1914`,
    3212: `1914`,
    3213: `1915`,
    3214: `1915`,
    3215: `1916`,
    3216: `1916`,
    3217: `1916`,
    3218: `1917`,
    3219: `1918`,
    322: `89`,
    3220: `1918`,
    3221: `1919`,
    3222: `1919`,
    3223: `1919`,
    3224: `1920`,
    3225: `1921`,
    3226: `1921`,
    3227: `1922`,
    3228: `1922`,
    3229: `1922`,
    323: `89`,
    3230: `1923`,
    3231: `1924`,
    3232: `1924`,
    3233: `1925`,
    3234: `1925`,
    3235: `1926`,
    3236: `1927`,
    3237: `1927`,
    3238: `1928`,
    3239: `1929`,
    324: `89`,
    3240: `1930`,
    3241: `1931`,
    3242: `1931`,
    3243: `1932`,
    3244: `1932`,
    3245: `1932`,
    3246: `1933`,
    3247: `1934`,
    3248: `1934`,
    3249: `1935`,
    325: `89`,
    3250: `1935`,
    3251: `1935`,
    3252: `1936`,
    3253: `1937`,
    3254: `1937`,
    3255: `1938`,
    3256: `1938`,
    3257: `1938`,
    3258: `1939`,
    3259: `1940`,
    326: `89`,
    3260: `1940`,
    3261: `1941`,
    3262: `1941`,
    3263: `1941`,
    3264: `1942`,
    3265: `1943`,
    3266: `1943`,
    3267: `1944`,
    3268: `1944`,
    3269: `1944`,
    327: `89`,
    3270: `1945`,
    3271: `1946`,
    3272: `1946`,
    3273: `1947`,
    3274: `1947`,
    3275: `1948`,
    3276: `1948`,
    3277: `1949`,
    3278: `1949`,
    3279: `1949`,
    328: `89`,
    3280: `1951`,
    3281: `1952`,
    3282: `1952`,
    3283: `1953`,
    3284: `1953`,
    3285: `1953`,
    3286: `1955`,
    3287: `1955`,
    3288: `1956`,
    3289: `1956`,
    329: `89`,
    3290: `1956`,
    3291: `1957`,
    3292: `1958`,
    3293: `1959`,
    3294: `1959`,
    3295: `1960`,
    3296: `1961`,
    3297: `1961`,
    3298: `1962`,
    3299: `1962`,
    33: `2`,
    330: `89`,
    3300: `1962`,
    3301: `1964`,
    3302: `1964`,
    3303: `1965`,
    3304: `1965`,
    3305: `1966`,
    3306: `1966`,
    3307: `1967`,
    3308: `1968`,
    3309: `1969`,
    331: `89`,
    3310: `1969`,
    3311: `1970`,
    3312: `1971`,
    3313: `1971`,
    3314: `1972`,
    3315: `1973`,
    3316: `1974`,
    3317: `1975`,
    3318: `1976`,
    3319: `1976`,
    332: `89`,
    3320: `1976`,
    3321: `1977`,
    3322: `1977`,
    3323: `1978`,
    3324: `1979`,
    3325: `1980`,
    3326: `1980`,
    3327: `1980`,
    3328: `1980`,
    3329: `1980`,
    333: `89`,
    3330: `1980`,
    3331: `1981`,
    3332: `1981`,
    3333: `1981`,
    3334: `1983`,
    3335: `1984`,
    3336: `1984`,
    3337: `1985`,
    3338: `1985`,
    3339: `1985`,
    334: `89`,
    3340: `1987`,
    3341: `1987`,
    3342: `1988`,
    3343: `1988`,
    3344: `1988`,
    3345: `1989`,
    3346: `1990`,
    3347: `1990`,
    3348: `1991`,
    3349: `1992`,
    335: `89`,
    3350: `1993`,
    3351: `1993`,
    3352: `1994`,
    3353: `1995`,
    3354: `1996`,
    3355: `1997`,
    3356: `1997`,
    3357: `1998`,
    3358: `1998`,
    3359: `1998`,
    336: `89`,
    3360: `2000`,
    3361: `2001`,
    3362: `2001`,
    3363: `2002`,
    3364: `2003`,
    3365: `2004`,
    3366: `2005`,
    3367: `2005`,
    3368: `2006`,
    3369: `2006`,
    337: `89`,
    3370: `2007`,
    3371: `2008`,
    3372: `2008`,
    3373: `2009`,
    3374: `2010`,
    3375: `2010`,
    3376: `2011`,
    3377: `2012`,
    3378: `2012`,
    3379: `2013`,
    338: `89`,
    3380: `2014`,
    3381: `2015`,
    3382: `2015`,
    3383: `2016`,
    3384: `2017`,
    3385: `2018`,
    3386: `2018`,
    3387: `2019`,
    3388: `2020`,
    3389: `2020`,
    339: `89`,
    3390: `2021`,
    3391: `2021`,
    3392: `2023`,
    3393: `2023`,
    3394: `2024`,
    3395: `2024`,
    3396: `2025`,
    3397: `2025`,
    3398: `2026`,
    3399: `2026`,
    34: `2`,
    340: `89`,
    3400: `2027`,
    3401: `2028`,
    3402: `2028`,
    3403: `2029`,
    3404: `2030`,
    3405: `2031`,
    3406: `2031`,
    3407: `2032`,
    3408: `2033`,
    3409: `2033`,
    341: `89`,
    3410: `2034`,
    3411: `2035`,
    3412: `2035`,
    3413: `2036`,
    3414: `2040`,
    3415: `2040`,
    3416: `2041`,
    3417: `2042`,
    3418: `2042`,
    3419: `2043`,
    342: `89`,
    3420: `2044`,
    3421: `2044`,
    3422: `2045`,
    3423: `2046`,
    3424: `2047`,
    3425: `2048`,
    3426: `2048`,
    3427: `2048`,
    3428: `2049`,
    3429: `2049`,
    343: `89`,
    3430: `2049`,
    3431: `2050`,
    3432: `2051`,
    3433: `2051`,
    3434: `2052`,
    3435: `2052`,
    3436: `2052`,
    3437: `2052`,
    3438: `2052`,
    3439: `2052`,
    344: `89`,
    3440: `2052`,
    3441: `2052`,
    3442: `2052`,
    3443: `2052`,
    3444: `2053`,
    3445: `2053`,
    3446: `2054`,
    3447: `2055`,
    3448: `2056`,
    3449: `2056`,
    345: `89`,
    3450: `2057`,
    3451: `2057`,
    3452: `2058`,
    3453: `2059`,
    3454: `2059`,
    3455: `2060`,
    3456: `2061`,
    3457: `2062`,
    3458: `2063`,
    3459: `2067`,
    346: `89`,
    3460: `2067`,
    3461: `2068`,
    3462: `2068`,
    3463: `2068`,
    3464: `2069`,
    3465: `2070`,
    3466: `2074`,
    3467: `2075`,
    3468: `2075`,
    3469: `2076`,
    347: `89`,
    3470: `2076`,
    3471: `2076`,
    3472: `2076`,
    3473: `2076`,
    3474: `2076`,
    3475: `2076`,
    3476: `2076`,
    3477: `2076`,
    3478: `2076`,
    3479: `2077`,
    348: `89`,
    3480: `2077`,
    3481: `2078`,
    3482: `2079`,
    3483: `2079`,
    3484: `2079`,
    3485: `2080`,
    3486: `2081`,
    3487: `2082`,
    3488: `2082`,
    3489: `2083`,
    349: `89`,
    3490: `2084`,
    3491: `2084`,
    3492: `2084`,
    3493: `2085`,
    3494: `2085`,
    3495: `2086`,
    3496: `2086`,
    3497: `2087`,
    3498: `2087`,
    3499: `2088`,
    35: `2`,
    350: `89`,
    3500: `2089`,
    3501: `2089`,
    3502: `2090`,
    3503: `2090`,
    3504: `2091`,
    3505: `2091`,
    3506: `2092`,
    3507: `2093`,
    3508: `2093`,
    3509: `2094`,
    351: `89`,
    3510: `2094`,
    3511: `2095`,
    3512: `2095`,
    3513: `2095`,
    3514: `2096`,
    3515: `2096`,
    3516: `2097`,
    3517: `2097`,
    3518: `2097`,
    3519: `2098`,
    352: `89`,
    3520: `2099`,
    3521: `2099`,
    3522: `2100`,
    3523: `2100`,
    3524: `2100`,
    3525: `2101`,
    3526: `2102`,
    3527: `2102`,
    3528: `2103`,
    3529: `2103`,
    353: `89`,
    3530: `2103`,
    3531: `2104`,
    3532: `2105`,
    3533: `2105`,
    3534: `2106`,
    3535: `2107`,
    3536: `2108`,
    3537: `2108`,
    3538: `2109`,
    3539: `2109`,
    354: `89`,
    3540: `2110`,
    3541: `2111`,
    3542: `2111`,
    3543: `2112`,
    3544: `2113`,
    3545: `2114`,
    3546: `2115`,
    3547: `2116`,
    3548: `2116`,
    3549: `2117`,
    355: `89`,
    3550: `2117`,
    3551: `2118`,
    3552: `2119`,
    3553: `2120`,
    3554: `2121`,
    3555: `2122`,
    3556: `2123`,
    3557: `2123`,
    3558: `2124`,
    3559: `2124`,
    356: `89`,
    3560: `2125`,
    3561: `2126`,
    3562: `2127`,
    3563: `2128`,
    3564: `2129`,
    3565: `2130`,
    3566: `2130`,
    3567: `2131`,
    3568: `2131`,
    3569: `2131`,
    357: `89`,
    3570: `2132`,
    3571: `2133`,
    3572: `2133`,
    3573: `2134`,
    3574: `2134`,
    3575: `2134`,
    3576: `2135`,
    3577: `2136`,
    3578: `2136`,
    3579: `2137`,
    358: `89`,
    3580: `2137`,
    3581: `2138`,
    3582: `2138`,
    3583: `2139`,
    3584: `2139`,
    3585: `2139`,
    3586: `2141`,
    3587: `2141`,
    3588: `2142`,
    3589: `2142`,
    359: `89`,
    3590: `2142`,
    3591: `2143`,
    3592: `2144`,
    3593: `2144`,
    3594: `2145`,
    3595: `2145`,
    3596: `2145`,
    3597: `2146`,
    3598: `2146`,
    3599: `2147`,
    36: `2`,
    360: `89`,
    3600: `2147`,
    3601: `2147`,
    3602: `2148`,
    3603: `2149`,
    3604: `2149`,
    3605: `2150`,
    3606: `2150`,
    3607: `2150`,
    3608: `2151`,
    3609: `2152`,
    361: `89`,
    3610: `2152`,
    3611: `2153`,
    3612: `2153`,
    3613: `2154`,
    3614: `2155`,
    3615: `2156`,
    3616: `2157`,
    3617: `2158`,
    3618: `2159`,
    3619: `2159`,
    362: `89`,
    3620: `2160`,
    3621: `2160`,
    3622: `2161`,
    3623: `2162`,
    3624: `2163`,
    3625: `2164`,
    3626: `2165`,
    3627: `2166`,
    3628: `2166`,
    3629: `2167`,
    363: `89`,
    3630: `2167`,
    3631: `2168`,
    3632: `2169`,
    3633: `2169`,
    3634: `2170`,
    3635: `2171`,
    3636: `2171`,
    3637: `2172`,
    3638: `2172`,
    3639: `2172`,
    364: `89`,
    3640: `2173`,
    3641: `2174`,
    3642: `2174`,
    3643: `2175`,
    3644: `2176`,
    3645: `2177`,
    3646: `2178`,
    3647: `2178`,
    3648: `2179`,
    3649: `2179`,
    365: `90`,
    3650: `2180`,
    3651: `2181`,
    3652: `2181`,
    3653: `2182`,
    3654: `2183`,
    3655: `2183`,
    3656: `2184`,
    3657: `2185`,
    3658: `2185`,
    3659: `2186`,
    366: `90`,
    3660: `2187`,
    3661: `2188`,
    3662: `2188`,
    3663: `2189`,
    3664: `2190`,
    3665: `2191`,
    3666: `2191`,
    3667: `2192`,
    3668: `2193`,
    3669: `2193`,
    367: `91`,
    3670: `2194`,
    3671: `2194`,
    3672: `2196`,
    3673: `2196`,
    3674: `2197`,
    3675: `2197`,
    3676: `2198`,
    3677: `2198`,
    3678: `2199`,
    3679: `2199`,
    368: `91`,
    3680: `2200`,
    3681: `2201`,
    3682: `2201`,
    3683: `2202`,
    3684: `2203`,
    3685: `2204`,
    3686: `2204`,
    3687: `2205`,
    3688: `2206`,
    3689: `2206`,
    369: `91`,
    3690: `2207`,
    3691: `2208`,
    3692: `2208`,
    3693: `2209`,
    3694: `2213`,
    3695: `2213`,
    3696: `2214`,
    3697: `2215`,
    3698: `2215`,
    3699: `2216`,
    37: `2`,
    370: `93`,
    3700: `2217`,
    3701: `2217`,
    3702: `2218`,
    3703: `2219`,
    3704: `2220`,
    3705: `2221`,
    3706: `2221`,
    3707: `2221`,
    3708: `2222`,
    3709: `2222`,
    371: `93`,
    3710: `2222`,
    3711: `2223`,
    3712: `2224`,
    3713: `2224`,
    3714: `2225`,
    3715: `2225`,
    3716: `2225`,
    3717: `2225`,
    3718: `2225`,
    3719: `2225`,
    372: `93`,
    3720: `2225`,
    3721: `2225`,
    3722: `2225`,
    3723: `2225`,
    3724: `2226`,
    3725: `2226`,
    3726: `2227`,
    3727: `2228`,
    3728: `2229`,
    3729: `2229`,
    373: `94`,
    3730: `2230`,
    3731: `2230`,
    3732: `2231`,
    3733: `2232`,
    3734: `2232`,
    3735: `2233`,
    3736: `2234`,
    3737: `2235`,
    3738: `2236`,
    3739: `2240`,
    374: `94`,
    3740: `2240`,
    3741: `2241`,
    3742: `2241`,
    3743: `2241`,
    3744: `2242`,
    3745: `2243`,
    3746: `2247`,
    3747: `2248`,
    3748: `2248`,
    3749: `2249`,
    375: `96`,
    3750: `2249`,
    3751: `2249`,
    3752: `2249`,
    3753: `2249`,
    3754: `2249`,
    3755: `2249`,
    3756: `2249`,
    3757: `2249`,
    3758: `2249`,
    3759: `2250`,
    376: `97`,
    3760: `2250`,
    3761: `2251`,
    3762: `2252`,
    3763: `2252`,
    3764: `2252`,
    3765: `2253`,
    3766: `2254`,
    3767: `2255`,
    3768: `2255`,
    3769: `2256`,
    377: `98`,
    3770: `2257`,
    3771: `2257`,
    3772: `2257`,
    3773: `2258`,
    3774: `2258`,
    3775: `2259`,
    3776: `2259`,
    3777: `2260`,
    3778: `2260`,
    3779: `2261`,
    378: `98`,
    3780: `2262`,
    3781: `2262`,
    3782: `2263`,
    3783: `2263`,
    3784: `2264`,
    3785: `2264`,
    3786: `2265`,
    3787: `2266`,
    3788: `2266`,
    3789: `2267`,
    379: `98`,
    3790: `2268`,
    3791: `2269`,
    3792: `2269`,
    3793: `2270`,
    3794: `2271`,
    3795: `2272`,
    3796: `2273`,
    3797: `2274`,
    3798: `2274`,
    3799: `2275`,
    38: `2`,
    380: `99`,
    3800: `2275`,
    3801: `2276`,
    3802: `2276`,
    3803: `2276`,
    3804: `2277`,
    3805: `2277`,
    3806: `2278`,
    3807: `2278`,
    3808: `2278`,
    3809: `2279`,
    381: `99`,
    3810: `2280`,
    3811: `2280`,
    3812: `2281`,
    3813: `2281`,
    3814: `2281`,
    3815: `2282`,
    3816: `2283`,
    3817: `2283`,
    3818: `2284`,
    3819: `2284`,
    382: `100`,
    3820: `2284`,
    3821: `2285`,
    3822: `2286`,
    3823: `2286`,
    3824: `2287`,
    3825: `2288`,
    3826: `2289`,
    3827: `2289`,
    3828: `2290`,
    3829: `2290`,
    383: `101`,
    3830: `2291`,
    3831: `2292`,
    3832: `2292`,
    3833: `2293`,
    3834: `2294`,
    3835: `2295`,
    3836: `2296`,
    3837: `2297`,
    3838: `2297`,
    3839: `2298`,
    384: `101`,
    3840: `2298`,
    3841: `2299`,
    3842: `2300`,
    3843: `2301`,
    3844: `2302`,
    3845: `2303`,
    3846: `2304`,
    3847: `2304`,
    3848: `2305`,
    3849: `2305`,
    385: `102`,
    3850: `2306`,
    3851: `2307`,
    3852: `2308`,
    3853: `2309`,
    3854: `2310`,
    3855: `2311`,
    3856: `2311`,
    3857: `2312`,
    3858: `2312`,
    3859: `2312`,
    386: `103`,
    3860: `2313`,
    3861: `2314`,
    3862: `2314`,
    3863: `2315`,
    3864: `2315`,
    3865: `2315`,
    3866: `2316`,
    3867: `2317`,
    3868: `2317`,
    3869: `2318`,
    387: `104`,
    3870: `2318`,
    3871: `2319`,
    3872: `2319`,
    3873: `2320`,
    3874: `2320`,
    3875: `2320`,
    3876: `2323`,
    3877: `2323`,
    3878: `2324`,
    3879: `2325`,
    388: `105`,
    3880: `2325`,
    3881: `2326`,
    3882: `2327`,
    3883: `2328`,
    3884: `2328`,
    3885: `2329`,
    3886: `2330`,
    3887: `2331`,
    3888: `2331`,
    3889: `2332`,
    389: `105`,
    3890: `2333`,
    3891: `2333`,
    3892: `2334`,
    3893: `2335`,
    3894: `2335`,
    3895: `2336`,
    3896: `2337`,
    3897: `2337`,
    3898: `2338`,
    3899: `2338`,
    39: `2`,
    390: `106`,
    3900: `2339`,
    3901: `2339`,
    3902: `2339`,
    3903: `2341`,
    3904: `2342`,
    3905: `2343`,
    3906: `2344`,
    3907: `2345`,
    3908: `2347`,
    3909: `2348`,
    391: `106`,
    3910: `2348`,
    3911: `2349`,
    3912: `2350`,
    3913: `2350`,
    3914: `2351`,
    3915: `2351`,
    3916: `2352`,
    3917: `2352`,
    3918: `2353`,
    3919: `2354`,
    392: `106`,
    3920: `2356`,
    3921: `2356`,
    3922: `2356`,
    3923: `2358`,
    3924: `2358`,
    3925: `2359`,
    3926: `2359`,
    3927: `2359`,
    3928: `2360`,
    3929: `2360`,
    393: `108`,
    3930: `2361`,
    3931: `2361`,
    3932: `2361`,
    3933: `2363`,
    3934: `2363`,
    3935: `2363`,
    3936: `2365`,
    3937: `2365`,
    3938: `2365`,
    3939: `2366`,
    394: `108`,
    3940: `2366`,
    3941: `2366`,
    3942: `2367`,
    3943: `2367`,
    3944: `2368`,
    3945: `2368`,
    3946: `2369`,
    3947: `2369`,
    3948: `2369`,
    3949: `2371`,
    395: `108`,
    3950: `2372`,
    3951: `2374`,
    3952: `2375`,
    3953: `2376`,
    3954: `2377`,
    3955: `2377`,
    3956: `2378`,
    3957: `2378`,
    3958: `2379`,
    3959: `2379`,
    396: `109`,
    3960: `2379`,
    3961: `2380`,
    3962: `2382`,
    3963: `2383`,
    3964: `2384`,
    3965: `2384`,
    3966: `2384`,
    3967: `2385`,
    3968: `2386`,
    3969: `2386`,
    397: `110`,
    3970: `2389`,
    3971: `2389`,
    3972: `2390`,
    3973: `2390`,
    3974: `2391`,
    3975: `2392`,
    3976: `2393`,
    3977: `2394`,
    3978: `2394`,
    3979: `2395`,
    398: `110`,
    3980: `2396`,
    3981: `2396`,
    3982: `2397`,
    3983: `2397`,
    3984: `2398`,
    3985: `2398`,
    3986: `2399`,
    3987: `2400`,
    3988: `2401`,
    3989: `2401`,
    399: `110`,
    3990: `2402`,
    3991: `2403`,
    3992: `2404`,
    3993: `2405`,
    3994: `2405`,
    3995: `2406`,
    3996: `2407`,
    3997: `2408`,
    3998: `2410`,
    3999: `2411`,
    4: `2`,
    40: `2`,
    400: `111`,
    4000: `2412`,
    4001: `2413`,
    4002: `2413`,
    4003: `2413`,
    4004: `2414`,
    4005: `2414`,
    4006: `2415`,
    4007: `2416`,
    4008: `2417`,
    4009: `2419`,
    401: `112`,
    4010: `2420`,
    4011: `2421`,
    4012: `2422`,
    4013: `2422`,
    4014: `2422`,
    4015: `2423`,
    4016: `2423`,
    4017: `2424`,
    4018: `2424`,
    4019: `2424`,
    402: `112`,
    4020: `2425`,
    4021: `2425`,
    4022: `2425`,
    4023: `2427`,
    4024: `2428`,
    4025: `2428`,
    4026: `2429`,
    4027: `2431`,
    4028: `2432`,
    4029: `2433`,
    403: `112`,
    4030: `2434`,
    4031: `2435`,
    4032: `2435`,
    4033: `2436`,
    4034: `2437`,
    4035: `2438`,
    4036: `2439`,
    4037: `2441`,
    4038: `2442`,
    4039: `2442`,
    404: `113`,
    4040: `2442`,
    4041: `2443`,
    4042: `2444`,
    4043: `2445`,
    4044: `2446`,
    4045: `2447`,
    4046: `2449`,
    4047: `2450`,
    4048: `2451`,
    4049: `2452`,
    405: `114`,
    4050: `2452`,
    4051: `2453`,
    4052: `2454`,
    4053: `2455`,
    4054: `2456`,
    4055: `2456`,
    4056: `2457`,
    4057: `2458`,
    4058: `2458`,
    4059: `2459`,
    406: `114`,
    4060: `2460`,
    4061: `2460`,
    4062: `2461`,
    4063: `2462`,
    4064: `2463`,
    4065: `2464`,
    4066: `2464`,
    4067: `2465`,
    4068: `2466`,
    4069: `2466`,
    407: `115`,
    4070: `2466`,
    4071: `2467`,
    4072: `2467`,
    4073: `2468`,
    4074: `2468`,
    4075: `2468`,
    4076: `2469`,
    4077: `2469`,
    4078: `2470`,
    4079: `2472`,
    408: `115`,
    4080: `2472`,
    4081: `2473`,
    4082: `2473`,
    4083: `2474`,
    4084: `2475`,
    4085: `2476`,
    4086: `2476`,
    4087: `2476`,
    4088: `2477`,
    4089: `2477`,
    409: `116`,
    4090: `2477`,
    4091: `2479`,
    4092: `2480`,
    4093: `2481`,
    4094: `2481`,
    4095: `2482`,
    4096: `2484`,
    4097: `2484`,
    4098: `2485`,
    4099: `2486`,
    41: `2`,
    410: `116`,
    4100: `2486`,
    4101: `2487`,
    4102: `2489`,
    4103: `2489`,
    4104: `2490`,
    4105: `2491`,
    4106: `2491`,
    4107: `2492`,
    4108: `2494`,
    4109: `2495`,
    411: `118`,
    4110: `2495`,
    4111: `2495`,
    4112: `2497`,
    4113: `2498`,
    4114: `2498`,
    4115: `2499`,
    412: `119`,
    413: `120`,
    414: `120`,
    415: `120`,
    416: `121`,
    417: `121`,
    418: `122`,
    419: `123`,
    42: `2`,
    420: `123`,
    421: `124`,
    422: `125`,
    423: `126`,
    424: `126`,
    425: `127`,
    426: `128`,
    427: `129`,
    428: `130`,
    429: `130`,
    43: `2`,
    430: `131`,
    431: `132`,
    432: `133`,
    433: `134`,
    434: `134`,
    435: `135`,
    436: `135`,
    437: `135`,
    438: `137`,
    439: `137`,
    44: `2`,
    440: `137`,
    441: `138`,
    442: `138`,
    443: `138`,
    444: `139`,
    445: `139`,
    446: `139`,
    447: `140`,
    448: `141`,
    449: `141`,
    45: `2`,
    450: `142`,
    451: `142`,
    452: `143`,
    453: `143`,
    454: `145`,
    455: `146`,
    456: `147`,
    457: `147`,
    458: `147`,
    459: `148`,
    46: `2`,
    460: `148`,
    461: `149`,
    462: `149`,
    463: `150`,
    464: `151`,
    465: `151`,
    466: `152`,
    467: `153`,
    468: `154`,
    469: `155`,
    47: `2`,
    470: `156`,
    471: `156`,
    472: `157`,
    473: `157`,
    474: `157`,
    475: `159`,
    476: `159`,
    477: `159`,
    478: `160`,
    479: `160`,
    48: `2`,
    480: `162`,
    481: `163`,
    482: `164`,
    483: `164`,
    484: `164`,
    485: `165`,
    486: `165`,
    487: `166`,
    488: `167`,
    489: `167`,
    49: `2`,
    490: `168`,
    491: `169`,
    492: `170`,
    493: `171`,
    494: `171`,
    495: `172`,
    496: `172`,
    497: `172`,
    498: `174`,
    499: `174`,
    5: `2`,
    50: `2`,
    500: `175`,
    501: `175`,
    502: `175`,
    503: `176`,
    504: `176`,
    505: `177`,
    506: `177`,
    507: `178`,
    508: `178`,
    509: `179`,
    51: `2`,
    510: `180`,
    511: `181`,
    512: `181`,
    513: `182`,
    514: `183`,
    515: `184`,
    516: `190`,
    517: `191`,
    518: `191`,
    519: `192`,
    52: `2`,
    520: `193`,
    521: `194`,
    522: `194`,
    523: `195`,
    524: `196`,
    525: `196`,
    526: `196`,
    527: `197`,
    528: `198`,
    529: `198`,
    53: `2`,
    530: `199`,
    531: `200`,
    532: `201`,
    533: `202`,
    534: `203`,
    535: `208`,
    536: `208`,
    537: `209`,
    538: `210`,
    539: `211`,
    54: `2`,
    540: `211`,
    541: `211`,
    542: `211`,
    543: `211`,
    544: `211`,
    545: `212`,
    546: `212`,
    547: `212`,
    548: `214`,
    549: `214`,
    55: `2`,
    550: `215`,
    551: `215`,
    552: `215`,
    553: `216`,
    554: `216`,
    555: `217`,
    556: `217`,
    557: `218`,
    558: `218`,
    559: `218`,
    56: `2`,
    560: `219`,
    561: `219`,
    562: `221`,
    563: `222`,
    564: `222`,
    565: `223`,
    566: `224`,
    567: `225`,
    568: `225`,
    569: `226`,
    57: `2`,
    570: `227`,
    571: `227`,
    572: `227`,
    573: `228`,
    574: `229`,
    575: `229`,
    576: `230`,
    577: `231`,
    578: `232`,
    579: `233`,
    58: `2`,
    580: `234`,
    581: `239`,
    582: `239`,
    583: `240`,
    584: `240`,
    585: `241`,
    586: `242`,
    587: `242`,
    588: `244`,
    589: `245`,
    59: `4`,
    590: `245`,
    591: `246`,
    592: `247`,
    593: `247`,
    594: `248`,
    595: `248`,
    596: `249`,
    597: `250`,
    598: `251`,
    599: `251`,
    6: `2`,
    60: `4`,
    600: `251`,
    601: `252`,
    602: `253`,
    603: `253`,
    604: `254`,
    605: `255`,
    606: `256`,
    607: `257`,
    608: `258`,
    609: `263`,
    61: `5`,
    610: `263`,
    611: `264`,
    612: `265`,
    613: `265`,
    614: `266`,
    615: `266`,
    616: `266`,
    617: `267`,
    618: `268`,
    619: `269`,
    62: `5`,
    620: `270`,
    621: `271`,
    622: `276`,
    623: `276`,
    624: `277`,
    625: `278`,
    626: `279`,
    627: `279`,
    628: `279`,
    629: `279`,
    63: `5`,
    630: `279`,
    631: `279`,
    632: `280`,
    633: `280`,
    634: `280`,
    635: `282`,
    636: `282`,
    637: `283`,
    638: `283`,
    639: `284`,
    64: `6`,
    640: `285`,
    641: `286`,
    642: `286`,
    643: `287`,
    644: `292`,
    645: `292`,
    646: `293`,
    647: `293`,
    648: `294`,
    649: `295`,
    65: `7`,
    650: `296`,
    651: `296`,
    652: `297`,
    653: `302`,
    654: `302`,
    655: `303`,
    656: `303`,
    657: `304`,
    658: `305`,
    659: `306`,
    66: `8`,
    660: `306`,
    661: `307`,
    662: `308`,
    663: `309`,
    664: `314`,
    665: `314`,
    666: `315`,
    667: `315`,
    668: `316`,
    669: `317`,
    67: `9`,
    670: `318`,
    671: `318`,
    672: `319`,
    673: `320`,
    674: `321`,
    675: `326`,
    676: `327`,
    677: `327`,
    678: `328`,
    679: `329`,
    68: `10`,
    680: `330`,
    681: `331`,
    682: `331`,
    683: `332`,
    684: `332`,
    685: `333`,
    686: `334`,
    687: `334`,
    688: `335`,
    689: `336`,
    69: `11`,
    690: `336`,
    691: `337`,
    692: `338`,
    693: `338`,
    694: `339`,
    695: `340`,
    696: `341`,
    697: `341`,
    698: `342`,
    699: `343`,
    7: `2`,
    70: `11`,
    700: `344`,
    701: `344`,
    702: `345`,
    703: `346`,
    704: `346`,
    705: `347`,
    706: `347`,
    707: `349`,
    708: `349`,
    709: `350`,
    71: `12`,
    710: `350`,
    711: `350`,
    712: `350`,
    713: `350`,
    714: `350`,
    715: `351`,
    716: `351`,
    717: `352`,
    718: `352`,
    719: `353`,
    72: `13`,
    720: `353`,
    721: `354`,
    722: `358`,
    723: `358`,
    724: `359`,
    725: `360`,
    726: `360`,
    727: `361`,
    728: `362`,
    729: `362`,
    73: `14`,
    730: `363`,
    731: `364`,
    732: `365`,
    733: `366`,
    734: `366`,
    735: `366`,
    736: `367`,
    737: `367`,
    738: `367`,
    739: `368`,
    74: `14`,
    740: `369`,
    741: `369`,
    742: `370`,
    743: `370`,
    744: `370`,
    745: `370`,
    746: `370`,
    747: `370`,
    748: `370`,
    749: `370`,
    75: `15`,
    750: `370`,
    751: `370`,
    752: `371`,
    753: `371`,
    754: `372`,
    755: `373`,
    756: `374`,
    757: `374`,
    758: `375`,
    759: `375`,
    76: `16`,
    760: `376`,
    761: `377`,
    762: `377`,
    763: `378`,
    764: `379`,
    765: `380`,
    766: `381`,
    767: `385`,
    768: `385`,
    769: `386`,
    77: `17`,
    770: `386`,
    771: `386`,
    772: `387`,
    773: `388`,
    774: `392`,
    775: `393`,
    776: `393`,
    777: `394`,
    778: `394`,
    779: `394`,
    78: `18`,
    780: `394`,
    781: `394`,
    782: `394`,
    783: `394`,
    784: `394`,
    785: `394`,
    786: `394`,
    787: `395`,
    788: `395`,
    789: `396`,
    79: `19`,
    790: `397`,
    791: `397`,
    792: `397`,
    793: `398`,
    794: `399`,
    795: `400`,
    796: `400`,
    797: `401`,
    798: `402`,
    799: `402`,
    8: `2`,
    80: `21`,
    800: `402`,
    801: `403`,
    802: `403`,
    803: `404`,
    804: `405`,
    805: `405`,
    806: `406`,
    807: `406`,
    808: `406`,
    809: `407`,
    81: `21`,
    810: `408`,
    811: `408`,
    812: `409`,
    813: `410`,
    814: `411`,
    815: `411`,
    816: `412`,
    817: `413`,
    818: `414`,
    819: `414`,
    82: `21`,
    820: `415`,
    821: `415`,
    822: `415`,
    823: `416`,
    824: `417`,
    825: `417`,
    826: `418`,
    827: `418`,
    828: `418`,
    829: `419`,
    83: `21`,
    830: `420`,
    831: `420`,
    832: `421`,
    833: `422`,
    834: `423`,
    835: `423`,
    836: `424`,
    837: `425`,
    838: `426`,
    839: `426`,
    84: `21`,
    840: `427`,
    841: `427`,
    842: `427`,
    843: `428`,
    844: `429`,
    845: `429`,
    846: `430`,
    847: `430`,
    848: `430`,
    849: `431`,
    85: `21`,
    850: `432`,
    851: `432`,
    852: `433`,
    853: `433`,
    854: `434`,
    855: `434`,
    856: `436`,
    857: `436`,
    858: `437`,
    859: `437`,
    86: `21`,
    860: `437`,
    861: `438`,
    862: `439`,
    863: `439`,
    864: `439`,
    865: `441`,
    866: `441`,
    867: `442`,
    868: `442`,
    869: `443`,
    87: `21`,
    870: `444`,
    871: `446`,
    872: `446`,
    873: `446`,
    874: `448`,
    875: `449`,
    876: `449`,
    877: `450`,
    878: `450`,
    879: `451`,
    88: `21`,
    880: `451`,
    881: `451`,
    882: `453`,
    883: `453`,
    884: `454`,
    885: `454`,
    886: `454`,
    887: `456`,
    888: `456`,
    889: `456`,
    89: `21`,
    890: `456`,
    891: `456`,
    892: `456`,
    893: `457`,
    894: `457`,
    895: `458`,
    896: `459`,
    897: `461`,
    898: `462`,
    899: `464`,
    9: `2`,
    90: `21`,
    900: `464`,
    901: `465`,
    902: `465`,
    903: `465`,
    904: `466`,
    905: `466`,
    906: `467`,
    907: `467`,
    908: `468`,
    909: `468`,
    91: `21`,
    910: `469`,
    911: `469`,
    912: `469`,
    913: `470`,
    914: `471`,
    915: `476`,
    916: `477`,
    917: `477`,
    918: `478`,
    919: `479`,
    92: `21`,
    920: `480`,
    921: `481`,
    922: `481`,
    923: `482`,
    924: `482`,
    925: `483`,
    926: `484`,
    927: `484`,
    928: `485`,
    929: `486`,
    93: `21`,
    930: `486`,
    931: `487`,
    932: `488`,
    933: `488`,
    934: `489`,
    935: `490`,
    936: `491`,
    937: `491`,
    938: `492`,
    939: `493`,
    94: `21`,
    940: `494`,
    941: `494`,
    942: `495`,
    943: `496`,
    944: `496`,
    945: `497`,
    946: `497`,
    947: `499`,
    948: `499`,
    949: `500`,
    95: `21`,
    950: `500`,
    951: `500`,
    952: `500`,
    953: `500`,
    954: `500`,
    955: `501`,
    956: `501`,
    957: `502`,
    958: `502`,
    959: `503`,
    96: `21`,
    960: `504`,
    961: `504`,
    962: `505`,
    963: `506`,
    964: `507`,
    965: `507`,
    966: `508`,
    967: `509`,
    968: `509`,
    969: `510`,
    97: `21`,
    970: `514`,
    971: `514`,
    972: `515`,
    973: `516`,
    974: `516`,
    975: `517`,
    976: `518`,
    977: `518`,
    978: `519`,
    979: `520`,
    98: `21`,
    980: `521`,
    981: `522`,
    982: `522`,
    983: `522`,
    984: `523`,
    985: `523`,
    986: `523`,
    987: `524`,
    988: `525`,
    989: `525`,
    99: `21`,
    990: `526`,
    991: `526`,
    992: `526`,
    993: `526`,
    994: `526`,
    995: `526`,
    996: `526`,
    997: `526`,
    998: `526`,
    999: `526`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 2,
  stateKeys: 2,
  stateSize: 137,
  unsupported: [],
  version: 13,
  warnings: [`API U2_claim may use up to 9 transaction references, but the limit is 8. API U2_claim starts at /app/index.rsh:128:29:application.`, `Step 1 calls a remote object at /app/index.rsh:108:18:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:160:29:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:216:30:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:270:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:310:27:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:341:27:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:359:26:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:372:26:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 may use up to 9 transaction references, but the limit is 8. Step 3 starts at /app/index.rsh:128:29:dot.`, `This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:90:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:385:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:128:29:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "A_deleteProvider": A_deleteProvider,
  "A_deleteSubscription": A_deleteSubscription,
  "Alice": Alice,
  "C_close": C_close,
  "C_grant": C_grant,
  "Deployer": Deployer,
  "U1_announce": U1_announce,
  "U2_claim": U2_claim,
  "U2_subscribe": U2_subscribe
  };
export const _APIs = {
  A: {
    deleteProvider: A_deleteProvider,
    deleteSubscription: A_deleteSubscription
    },
  C: {
    close: C_close,
    grant: C_grant
    },
  U1: {
    announce: U1_announce
    },
  U2: {
    claim: U2_claim,
    subscribe: U2_subscribe
    }
  };
