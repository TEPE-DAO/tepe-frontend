// Automatically generated with Reach 0.1.13 (88e48902)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (88e48902)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    minBal: (() => {
      
      
      return stdlib.checkedBigNumberify('./index.rsh:6:23:decimal', stdlib.UInt_max, '100000');})()
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Object({
    constructor: ctc3,
    manager: ctc3,
    token: ctc1,
    tokenAmount: ctc4
    });
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc7 = stdlib.T_Struct([['constructor', ctc3], ['manager', ctc3], ['token', ctc1], ['tokenAmount', ctc4]]);
  const ctc8 = stdlib.T_Null;
  const ctc9 = stdlib.T_Data({
    None: ctc8,
    Some: ctc4
    });
  const map0_ctc = ctc9;
  
  const map1_ctc = ctc9;
  
  
  const _allowance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2011, v2012, v2023, v2043] = svs;
      return (await ((async (_v2034, _v2035 ) => {
          const v2034 = stdlib.protect(ctc3, _v2034, null);
          const v2035 = stdlib.protect(ctc3, _v2035, null);
        
        const v2036 = [v2034, v2035];
        const v2037 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc6, v2036, ctc4), null);
        const v2038 = stdlib.fromSome(v2037, stdlib.checkedBigNumberify('./index.rsh:79:68:decimal', stdlib.UInt_max, '0'));
        
        return v2038;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _balanceOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2011, v2012, v2023, v2043] = svs;
      return (await ((async (_v2039 ) => {
          const v2039 = stdlib.protect(ctc3, _v2039, null);
        
        const v2040 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc3, v2039, ctc4), null);
        const v2041 = stdlib.fromSome(v2040, stdlib.checkedBigNumberify('./index.rsh:80:51:decimal', stdlib.UInt_max, '0'));
        
        return v2041;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2011, v2012, v2023, v2043] = svs;
      return (await ((async () => {
        
        const v2066 = v2043.constructor;
        const v2067 = v2043.manager;
        const v2068 = v2043.token;
        const v2069 = v2043.tokenAmount;
        const v2070 = {
          constructor: v2066,
          manager: v2067,
          token: v2068,
          tokenAmount: v2069
          };
        
        return v2070;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _totalSupply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2011, v2012, v2023, v2043] = svs;
      return (await ((async () => {
        
        const v2065 = v2043.tokenAmount;
        
        return v2065;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      allowance: {
        decode: _allowance,
        dom: [ctc3, ctc3],
        rng: ctc4
        },
      balanceOf: {
        decode: _balanceOf,
        dom: [ctc3],
        rng: ctc4
        },
      state: {
        decode: _state,
        dom: [],
        rng: ctc7
        },
      totalSupply: {
        decode: _totalSupply,
        dom: [],
        rng: ctc4
        }
      },
    views: {
      1: [],
      4: [ctc0, ctc1, ctc2, ctc5]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2]);
  return {
    mapDataTy: ctc3
    };
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
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Object({
    ctc: ctc3,
    token: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc6]);
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc12 = stdlib.T_Data({
    C_grant0_135: ctc9,
    U1_approve0_135: ctc10,
    U1_transfer0_135: ctc10,
    U1_transferFrom0_135: ctc11,
    U2_deposit0_135: ctc10,
    U2_withdraw0_135: ctc10,
    U3_transferFrom0_135: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc8, ctc8]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  const map1_ctc = ctc2;
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
  const {data: [], secs: v2002, time: v2001, didSend: v22, from: v2000 } = txn1;
  ;
  const v2005 = stdlib.protect(ctc5, await interact.getParams(), {
    at: './index.rsh:54:57:application',
    fs: ['at ./index.rsh:53:9:application call to [unknown function] (defined at: ./index.rsh:53:13:function exp)'],
    msg: 'getParams',
    who: 'Alice'
    });
  const v2006 = v2005.ctc;
  const v2007 = v2005.token;
  
  const txn2 = await (ctc.sendrecv({
    args: [v2006, v2007],
    evt_cnt: 2,
    funcNum: 1,
    lct: v2001,
    onlyIf: true,
    out_tys: [ctc3, ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:56:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2011, v2012], secs: v2014, time: v2013, didSend: v36, from: v2010 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2012
        });
      ;
      
      const v2020 = await ctc.getContractInfo();
      const v2023 = [];
      const v2024 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v2011,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:68:18:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./index.rsh:68:18:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc6.defaultValue /* simReturnVal */];})();
      await txn2.getOutput('internal', 'v2024', ctc7, v2024);
      const v2042 = {
        constructor: v2010,
        manager: v2010,
        token: v2012,
        tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v2043 = v2042;
      const v2044 = v2013;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v2012
          })
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
    tys: [ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v2011, v2012], secs: v2014, time: v2013, didSend: v36, from: v2010 } = txn2;
  ;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:57:19:application',
    fs: ['at ./index.rsh:57:19:application call to [unknown function] (defined at: ./index.rsh:57:19:function exp)', 'at ./index.rsh:57:19:application call to "liftedInteract" (defined at: ./index.rsh:57:19:application)'],
    msg: 'ready',
    who: 'Alice'
    });
  
  const v2020 = await ctc.getContractInfo();
  const v2023 = [];
  const v2024 = undefined /* Remote */;
  const v2025 = await txn2.getOutput('internal', 'v2024', ctc7, v2024);
  const v2027 = v2025[stdlib.checkedBigNumberify('./index.rsh:68:18:application', stdlib.UInt_max, '0')];
  const v2028 = v2025[stdlib.checkedBigNumberify('./index.rsh:68:18:application', stdlib.UInt_max, '1')];
  const v2033 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2027);
  stdlib.assert(v2033, {
    at: './index.rsh:68:18:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Alice'
    });
  stdlib.assert(v2028, {
    at: './index.rsh:67:10:application',
    fs: [],
    msg: 'Child app not announced as ready',
    who: 'Alice'
    });
  const v2042 = {
    constructor: v2010,
    manager: v2010,
    token: v2012,
    tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v2043 = v2042;
  let v2044 = v2013;
  
  let txn3 = txn2;
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc12],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2308], secs: v2310, time: v2309, didSend: v1376, from: v2307 } = txn4;
    switch (v2308[0]) {
      case 'C_grant0_135': {
        const v2311 = v2308[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v2370 = v2311[stdlib.checkedBigNumberify('./index.rsh:240:10:spread', stdlib.UInt_max, '0')];
        const v2371 = v2043.manager;
        const v2372 = stdlib.addressEq(v2307, v2371);
        stdlib.assert(v2372, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:241:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)'],
          msg: 'Only constructor can grant',
          who: 'Alice'
          });
        const v2378 = undefined /* Remote */;
        const v2379 = await txn4.getOutput('internal', 'v2378', ctc7, v2378);
        const v2381 = v2379[stdlib.checkedBigNumberify('./index.rsh:244:32:application', stdlib.UInt_max, '0')];
        const v2382 = v2379[stdlib.checkedBigNumberify('./index.rsh:244:32:application', stdlib.UInt_max, '1')];
        const v2387 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2381);
        stdlib.assert(v2387, {
          at: './index.rsh:244:32:application',
          fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v2382, {
          at: './index.rsh:244:18:application',
          fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)'],
          msg: 'Child app rejected grant',
          who: 'Alice'
          });
        const v2388 = true;
        await txn4.getOutput('C_grant', 'v2388', ctc6, v2388);
        const v2395 = v2043.constructor;
        const v2397 = v2043.token;
        const v2398 = v2043.tokenAmount;
        const v2399 = {
          constructor: v2395,
          manager: v2370,
          token: v2397,
          tokenAmount: v2398
          };
        const cv2043 = v2399;
        const cv2044 = v2309;
        
        v2043 = cv2043;
        v2044 = cv2044;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U1_approve0_135': {
        const v2751 = v2308[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v2843 = v2751[stdlib.checkedBigNumberify('./index.rsh:173:10:spread', stdlib.UInt_max, '0')];
        const v2844 = v2751[stdlib.checkedBigNumberify('./index.rsh:173:10:spread', stdlib.UInt_max, '1')];
        const v2847 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v2307, ctc1), null);
        const v2848 = {
          None: 0,
          Some: 1
          }[v2847[0]];
        const v2849 = stdlib.eq(v2848, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        if (v2849) {
          await stdlib.mapSet(map0, ctc8, v2307, ctc1, stdlib.checkedBigNumberify('./index.rsh:177:62:decimal', stdlib.UInt_max, '0'));
          const v2850 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v2843, ctc1), null);
          const v2851 = {
            None: 0,
            Some: 1
            }[v2850[0]];
          const v2852 = stdlib.eq(v2851, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          if (v2852) {
            await stdlib.mapSet(map0, ctc8, v2843, ctc1, stdlib.checkedBigNumberify('./index.rsh:178:66:decimal', stdlib.UInt_max, '0'));
            const v2853 = [v2307, v2843];
            await stdlib.mapSet(map1, ctc13, v2853, ctc1, v2844);
            const v2857 = undefined /* Remote */;
            const v2858 = await txn4.getOutput('internal', 'v2857', ctc7, v2857);
            const v2860 = v2858[stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '0')];
            const v2861 = v2858[stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '1')];
            const v2866 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2860);
            stdlib.assert(v2866, {
              at: './index.rsh:181:28:application',
              fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)'],
              msg: 'remote bill check',
              who: 'Alice'
              });
            stdlib.assert(v2861, {
              at: './index.rsh:180:18:application',
              fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)'],
              msg: 'Child app rejected allow',
              who: 'Alice'
              });
            const v2867 = true;
            await txn4.getOutput('U1_approve', 'v2867', ctc6, v2867);
            const cv2043 = v2043;
            const cv2044 = v2309;
            
            v2043 = cv2043;
            v2044 = cv2044;
            
            txn3 = txn4;
            continue;}
          else {
            const v2876 = [v2307, v2843];
            await stdlib.mapSet(map1, ctc13, v2876, ctc1, v2844);
            const v2880 = undefined /* Remote */;
            const v2881 = await txn4.getOutput('internal', 'v2880', ctc7, v2880);
            const v2883 = v2881[stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '0')];
            const v2884 = v2881[stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '1')];
            const v2889 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2883);
            stdlib.assert(v2889, {
              at: './index.rsh:181:28:application',
              fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)'],
              msg: 'remote bill check',
              who: 'Alice'
              });
            stdlib.assert(v2884, {
              at: './index.rsh:180:18:application',
              fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)'],
              msg: 'Child app rejected allow',
              who: 'Alice'
              });
            const v2890 = true;
            await txn4.getOutput('U1_approve', 'v2890', ctc6, v2890);
            const cv2043 = v2043;
            const cv2044 = v2309;
            
            v2043 = cv2043;
            v2044 = cv2044;
            
            txn3 = txn4;
            continue;}}
        else {
          const v2899 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v2843, ctc1), null);
          const v2900 = {
            None: 0,
            Some: 1
            }[v2899[0]];
          const v2901 = stdlib.eq(v2900, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          if (v2901) {
            await stdlib.mapSet(map0, ctc8, v2843, ctc1, stdlib.checkedBigNumberify('./index.rsh:178:66:decimal', stdlib.UInt_max, '0'));
            const v2902 = [v2307, v2843];
            await stdlib.mapSet(map1, ctc13, v2902, ctc1, v2844);
            const v2906 = undefined /* Remote */;
            const v2907 = await txn4.getOutput('internal', 'v2906', ctc7, v2906);
            const v2909 = v2907[stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '0')];
            const v2910 = v2907[stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '1')];
            const v2915 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2909);
            stdlib.assert(v2915, {
              at: './index.rsh:181:28:application',
              fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)'],
              msg: 'remote bill check',
              who: 'Alice'
              });
            stdlib.assert(v2910, {
              at: './index.rsh:180:18:application',
              fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)'],
              msg: 'Child app rejected allow',
              who: 'Alice'
              });
            const v2916 = true;
            await txn4.getOutput('U1_approve', 'v2916', ctc6, v2916);
            const cv2043 = v2043;
            const cv2044 = v2309;
            
            v2043 = cv2043;
            v2044 = cv2044;
            
            txn3 = txn4;
            continue;}
          else {
            const v2925 = [v2307, v2843];
            await stdlib.mapSet(map1, ctc13, v2925, ctc1, v2844);
            const v2929 = undefined /* Remote */;
            const v2930 = await txn4.getOutput('internal', 'v2929', ctc7, v2929);
            const v2932 = v2930[stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '0')];
            const v2933 = v2930[stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '1')];
            const v2938 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2932);
            stdlib.assert(v2938, {
              at: './index.rsh:181:28:application',
              fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)'],
              msg: 'remote bill check',
              who: 'Alice'
              });
            stdlib.assert(v2933, {
              at: './index.rsh:180:18:application',
              fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)'],
              msg: 'Child app rejected allow',
              who: 'Alice'
              });
            const v2939 = true;
            await txn4.getOutput('U1_approve', 'v2939', ctc6, v2939);
            const cv2043 = v2043;
            const cv2044 = v2309;
            
            v2043 = cv2043;
            v2044 = cv2044;
            
            txn3 = txn4;
            continue;}}
        break;
        }
      case 'U1_transfer0_135': {
        const v3191 = v2308[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v3389 = v3191[stdlib.checkedBigNumberify('./index.rsh:95:10:spread', stdlib.UInt_max, '0')];
        const v3390 = v3191[stdlib.checkedBigNumberify('./index.rsh:95:10:spread', stdlib.UInt_max, '1')];
        const v3391 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v2307, ctc1), null);
        const v3392 = {
          None: 0,
          Some: 1
          }[v3391[0]];
        const v3393 = stdlib.eq(v3392, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3393, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:96:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:13:function exp)'],
          msg: 'Sender has no balance',
          who: 'Alice'
          });
        const v3396 = stdlib.fromSome(v3391, stdlib.checkedBigNumberify('./index.rsh:97:42:decimal', stdlib.UInt_max, '0'));
        const v3397 = stdlib.le(v3390, v3396);
        stdlib.assert(v3397, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:97:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:13:function exp)'],
          msg: 'Insufficient funds',
          who: 'Alice'
          });
        const v3403 = stdlib.safeSub(v3396, v3390);
        await stdlib.mapSet(map0, ctc8, v2307, ctc1, v3403);
        const v3404 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v3389, ctc1), null);
        const v3405 = stdlib.fromSome(v3404, stdlib.checkedBigNumberify('./index.rsh:102:53:decimal', stdlib.UInt_max, '0'));
        const v3406 = stdlib.safeAdd(v3405, v3390);
        await stdlib.mapSet(map0, ctc8, v3389, ctc1, v3406);
        const v3410 = undefined /* Remote */;
        const v3411 = await txn4.getOutput('internal', 'v3410', ctc7, v3410);
        const v3413 = v3411[stdlib.checkedBigNumberify('./index.rsh:104:29:application', stdlib.UInt_max, '0')];
        const v3414 = v3411[stdlib.checkedBigNumberify('./index.rsh:104:29:application', stdlib.UInt_max, '1')];
        const v3419 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3413);
        stdlib.assert(v3419, {
          at: './index.rsh:104:29:application',
          fs: ['at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v3414, {
          at: './index.rsh:103:18:application',
          fs: ['at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:13:function exp)'],
          msg: 'Child app rejected send',
          who: 'Alice'
          });
        const v3420 = true;
        await txn4.getOutput('U1_transfer', 'v3420', ctc6, v3420);
        const cv2043 = v2043;
        const cv2044 = v2309;
        
        v2043 = cv2043;
        v2044 = cv2044;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U1_transferFrom0_135': {
        const v3631 = v2308[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v3870 = v3631[stdlib.checkedBigNumberify('./index.rsh:117:10:spread', stdlib.UInt_max, '0')];
        const v3871 = v3631[stdlib.checkedBigNumberify('./index.rsh:117:10:spread', stdlib.UInt_max, '1')];
        const v3872 = v3631[stdlib.checkedBigNumberify('./index.rsh:117:10:spread', stdlib.UInt_max, '2')];
        const v3873 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v3870, ctc1), null);
        const v3874 = {
          None: 0,
          Some: 1
          }[v3873[0]];
        const v3875 = stdlib.eq(v3874, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3875, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:127:13:application call to [unknown function] (defined at: ./index.rsh:127:13:function exp)'],
          msg: 'Sender has no balance',
          who: 'Alice'
          });
        const v3877 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v3871, ctc1), null);
        const v3878 = {
          None: 0,
          Some: 1
          }[v3877[0]];
        const v3879 = stdlib.eq(v3878, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3879, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:127:13:application call to [unknown function] (defined at: ./index.rsh:127:13:function exp)'],
          msg: 'Recipient has no balance',
          who: 'Alice'
          });
        const v3881 = [v3870, v2307];
        const v3882 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc13, v3881, ctc1), null);
        const v3883 = {
          None: 0,
          Some: 1
          }[v3882[0]];
        const v3884 = stdlib.eq(v3883, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3884, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:120:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:127:13:application call to [unknown function] (defined at: ./index.rsh:127:13:function exp)'],
          msg: 'No allowance',
          who: 'Alice'
          });
        const v3888 = stdlib.fromSome(v3882, stdlib.checkedBigNumberify('./index.rsh:122:52:decimal', stdlib.UInt_max, '0'));
        const v3889 = stdlib.le(v3872, v3888);
        stdlib.assert(v3889, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:121:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:127:13:application call to [unknown function] (defined at: ./index.rsh:127:13:function exp)'],
          msg: 'Insufficient allowance',
          who: 'Alice'
          });
        const v3892 = stdlib.fromSome(v3873, stdlib.checkedBigNumberify('./index.rsh:125:47:decimal', stdlib.UInt_max, '0'));
        const v3893 = stdlib.le(v3872, v3892);
        stdlib.assert(v3893, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:125:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:127:13:application call to [unknown function] (defined at: ./index.rsh:127:13:function exp)'],
          msg: 'Insufficient funds',
          who: 'Alice'
          });
        const v3900 = stdlib.safeSub(v3892, v3872);
        await stdlib.mapSet(map0, ctc8, v3870, ctc1, v3900);
        const v3901 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v3871, ctc1), null);
        const v3902 = stdlib.fromSome(v3901, stdlib.checkedBigNumberify('./index.rsh:130:53:decimal', stdlib.UInt_max, '0'));
        const v3903 = stdlib.safeAdd(v3902, v3872);
        await stdlib.mapSet(map0, ctc8, v3871, ctc1, v3903);
        const v3908 = stdlib.safeSub(v3888, v3872);
        await stdlib.mapSet(map1, ctc13, v3881, ctc1, v3908);
        const v3912 = undefined /* Remote */;
        const v3913 = await txn4.getOutput('internal', 'v3912', ctc7, v3912);
        const v3915 = v3913[stdlib.checkedBigNumberify('./index.rsh:134:33:application', stdlib.UInt_max, '0')];
        const v3916 = v3913[stdlib.checkedBigNumberify('./index.rsh:134:33:application', stdlib.UInt_max, '1')];
        const v3921 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3915);
        stdlib.assert(v3921, {
          at: './index.rsh:134:33:application',
          fs: ['at ./index.rsh:127:13:application call to [unknown function] (defined at: ./index.rsh:127:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v3916, {
          at: './index.rsh:133:18:application',
          fs: ['at ./index.rsh:127:13:application call to [unknown function] (defined at: ./index.rsh:127:13:function exp)'],
          msg: 'Child app rejected transferFrom',
          who: 'Alice'
          });
        const v3922 = true;
        await txn4.getOutput('U1_transferFrom', 'v3922', ctc6, v3922);
        const cv2043 = v2043;
        const cv2044 = v2309;
        
        v2043 = cv2043;
        v2044 = cv2044;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U2_deposit0_135': {
        const v4071 = v2308[1];
        undefined /* setApiDetails */;
        const v4097 = v4071[stdlib.checkedBigNumberify('./index.rsh:193:10:spread', stdlib.UInt_max, '1')];
        ;
        ;
        const v4373 = v4071[stdlib.checkedBigNumberify('./index.rsh:193:10:spread', stdlib.UInt_max, '0')];
        const v4377 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v4373, ctc1), null);
        const v4378 = stdlib.fromSome(v4377, stdlib.checkedBigNumberify('./index.rsh:197:47:decimal', stdlib.UInt_max, '0'));
        const v4379 = stdlib.safeAdd(v4378, v4097);
        await stdlib.mapSet(map0, ctc8, v4373, ctc1, v4379);
        const v4383 = undefined /* Remote */;
        const v4384 = await txn4.getOutput('internal', 'v4383', ctc7, v4383);
        const v4386 = v4384[stdlib.checkedBigNumberify('./index.rsh:199:28:application', stdlib.UInt_max, '0')];
        const v4387 = v4384[stdlib.checkedBigNumberify('./index.rsh:199:28:application', stdlib.UInt_max, '1')];
        const v4392 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4386);
        stdlib.assert(v4392, {
          at: './index.rsh:199:28:application',
          fs: ['at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v4387, {
          at: './index.rsh:198:18:application',
          fs: ['at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:13:function exp)'],
          msg: 'Child app rejected send',
          who: 'Alice'
          });
        const v4393 = true;
        await txn4.getOutput('U2_deposit', 'v4393', ctc6, v4393);
        const v4401 = v2043.constructor;
        const v4402 = v2043.manager;
        const v4403 = v2043.token;
        const v4404 = v2043.tokenAmount;
        const v4406 = stdlib.safeAdd(v4404, v4097);
        const v4407 = {
          constructor: v4401,
          manager: v4402,
          token: v4403,
          tokenAmount: v4406
          };
        const cv2043 = v4407;
        const cv2044 = v2309;
        
        v2043 = cv2043;
        v2044 = cv2044;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U2_withdraw0_135': {
        const v4511 = v2308[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v4851 = v4511[stdlib.checkedBigNumberify('./index.rsh:216:10:spread', stdlib.UInt_max, '0')];
        const v4852 = v4511[stdlib.checkedBigNumberify('./index.rsh:216:10:spread', stdlib.UInt_max, '1')];
        const v4853 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v2307, ctc1), null);
        const v4854 = stdlib.fromSome(v4853, stdlib.checkedBigNumberify('./index.rsh:217:42:decimal', stdlib.UInt_max, '0'));
        const v4855 = stdlib.le(v4852, v4854);
        stdlib.assert(v4855, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:217:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:219:13:application call to [unknown function] (defined at: ./index.rsh:219:13:function exp)'],
          msg: 'Insufficient funds',
          who: 'Alice'
          });
        ;
        const v4870 = stdlib.safeSub(v4854, v4852);
        await stdlib.mapSet(map0, ctc8, v2307, ctc1, v4870);
        const v4874 = undefined /* Remote */;
        const v4875 = await txn4.getOutput('internal', 'v4874', ctc7, v4874);
        const v4877 = v4875[stdlib.checkedBigNumberify('./index.rsh:223:29:application', stdlib.UInt_max, '0')];
        const v4878 = v4875[stdlib.checkedBigNumberify('./index.rsh:223:29:application', stdlib.UInt_max, '1')];
        const v4883 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4877);
        stdlib.assert(v4883, {
          at: './index.rsh:223:29:application',
          fs: ['at ./index.rsh:219:13:application call to [unknown function] (defined at: ./index.rsh:219:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v4878, {
          at: './index.rsh:222:18:application',
          fs: ['at ./index.rsh:219:13:application call to [unknown function] (defined at: ./index.rsh:219:13:function exp)'],
          msg: 'Child app rejected withdraw',
          who: 'Alice'
          });
        const v4884 = true;
        await txn4.getOutput('U2_withdraw', 'v4884', ctc6, v4884);
        const v4892 = v2043.constructor;
        const v4893 = v2043.manager;
        const v4894 = v2043.token;
        const v4895 = v2043.tokenAmount;
        const v4897 = stdlib.safeSub(v4895, v4852);
        const v4898 = {
          constructor: v4892,
          manager: v4893,
          token: v4894,
          tokenAmount: v4897
          };
        const cv2043 = v4898;
        const cv2044 = v2309;
        
        v2043 = cv2043;
        v2044 = cv2044;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U3_transferFrom0_135': {
        const v4951 = v2308[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v5342 = v4951[stdlib.checkedBigNumberify('./index.rsh:147:10:spread', stdlib.UInt_max, '0')];
        const v5343 = v4951[stdlib.checkedBigNumberify('./index.rsh:147:10:spread', stdlib.UInt_max, '1')];
        const v5344 = v4951[stdlib.checkedBigNumberify('./index.rsh:147:10:spread', stdlib.UInt_max, '2')];
        const v5345 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v5342, ctc1), null);
        const v5346 = {
          None: 0,
          Some: 1
          }[v5345[0]];
        const v5347 = stdlib.eq(v5346, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5347, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:148:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:157:13:application call to [unknown function] (defined at: ./index.rsh:157:13:function exp)'],
          msg: 'Sender has no balance',
          who: 'Alice'
          });
        const v5349 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v5343, ctc1), null);
        const v5350 = {
          None: 0,
          Some: 1
          }[v5349[0]];
        const v5351 = stdlib.eq(v5350, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5351, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:149:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:157:13:application call to [unknown function] (defined at: ./index.rsh:157:13:function exp)'],
          msg: 'Recipient has no balance',
          who: 'Alice'
          });
        const v5353 = [v5342, v2307];
        const v5354 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc13, v5353, ctc1), null);
        const v5355 = {
          None: 0,
          Some: 1
          }[v5354[0]];
        const v5356 = stdlib.eq(v5355, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5356, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:150:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:157:13:application call to [unknown function] (defined at: ./index.rsh:157:13:function exp)'],
          msg: 'No allowance',
          who: 'Alice'
          });
        const v5360 = stdlib.fromSome(v5354, stdlib.checkedBigNumberify('./index.rsh:152:52:decimal', stdlib.UInt_max, '0'));
        const v5361 = stdlib.le(v5344, v5360);
        stdlib.assert(v5361, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:151:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:157:13:application call to [unknown function] (defined at: ./index.rsh:157:13:function exp)'],
          msg: 'Insufficient allowance',
          who: 'Alice'
          });
        const v5364 = stdlib.fromSome(v5345, stdlib.checkedBigNumberify('./index.rsh:155:47:decimal', stdlib.UInt_max, '0'));
        const v5365 = stdlib.le(v5344, v5364);
        stdlib.assert(v5365, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:157:13:application call to [unknown function] (defined at: ./index.rsh:157:13:function exp)'],
          msg: 'Insufficient funds',
          who: 'Alice'
          });
        const v5372 = stdlib.safeSub(v5364, v5344);
        await stdlib.mapSet(map0, ctc8, v5342, ctc1, v5372);
        const v5373 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v5343, ctc1), null);
        const v5374 = stdlib.fromSome(v5373, stdlib.checkedBigNumberify('./index.rsh:160:53:decimal', stdlib.UInt_max, '0'));
        const v5375 = stdlib.safeAdd(v5374, v5344);
        await stdlib.mapSet(map0, ctc8, v5343, ctc1, v5375);
        const v5380 = stdlib.safeSub(v5360, v5344);
        await stdlib.mapSet(map1, ctc13, v5353, ctc1, v5380);
        const v5381 = true;
        await txn4.getOutput('U3_transferFrom', 'v5381', ctc6, v5381);
        const cv2043 = v2043;
        const cv2044 = v2309;
        
        v2043 = cv2043;
        v2044 = cv2044;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  
  
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
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Object({
    constructor: ctc6,
    manager: ctc6,
    token: ctc4,
    tokenAmount: ctc1
    });
  const ctc8 = stdlib.T_Tuple([ctc6]);
  const ctc9 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc6, ctc6, ctc1]);
  const ctc11 = stdlib.T_Data({
    C_grant0_135: ctc8,
    U1_approve0_135: ctc9,
    U1_transfer0_135: ctc9,
    U1_transferFrom0_135: ctc10,
    U2_deposit0_135: ctc9,
    U2_withdraw0_135: ctc9,
    U3_transferFrom0_135: ctc10
    });
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Tuple([ctc1, ctc12]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2011, v2012, v2023, v2043] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc4, ctc5, ctc7]);
  const v2232 = ctc.selfAddress();
  const v2234 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:240:29:application call to [unknown function] (defined at: ./index.rsh:240:29:function exp)', 'at ./index.rsh:81:29:application call to "runC_grant0_135" (defined at: ./index.rsh:240:10:function exp)', 'at ./index.rsh:81:29:application call to [unknown function] (defined at: ./index.rsh:81:29:function exp)'],
    msg: 'in',
    who: 'C_grant'
    });
  const v2237 = v2043.manager;
  const v2238 = stdlib.addressEq(v2232, v2237);
  stdlib.assert(v2238, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:241:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:240:29:application call to [unknown function] (defined at: ./index.rsh:240:29:function exp)', 'at ./index.rsh:81:29:application call to "runC_grant0_135" (defined at: ./index.rsh:240:10:function exp)', 'at ./index.rsh:81:29:application call to [unknown function] (defined at: ./index.rsh:81:29:function exp)'],
    msg: 'Only constructor can grant',
    who: 'C_grant'
    });
  const v2245 = ['C_grant0_135', v2234];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2011, v2012, v2023, v2043, v2245],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:240:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:89:14:decimal', stdlib.UInt_max, '0'), v2012]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2308], secs: v2310, time: v2309, didSend: v1376, from: v2307 } = txn1;
      
      switch (v2308[0]) {
        case 'C_grant0_135': {
          const v2311 = v2308[1];
          sim_r.txns.push({
            kind: 'api',
            who: "C_grant"
            });
          ;
          ;
          const v2370 = v2311[stdlib.checkedBigNumberify('./index.rsh:240:10:spread', stdlib.UInt_max, '0')];
          const v2378 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v2011,
              remote: ({
                accs: [v2370],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:244:32:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:244:32:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v2378', ctc13, v2378);
          const v2388 = true;
          const v2389 = await txn1.getOutput('C_grant', 'v2388', ctc12, v2388);
          
          const v2395 = v2043.constructor;
          const v2397 = v2043.token;
          const v2398 = v2043.tokenAmount;
          const v2399 = {
            constructor: v2395,
            manager: v2370,
            token: v2397,
            tokenAmount: v2398
            };
          const v13879 = v2399;
          sim_r.isHalt = false;
          
          break;
          }
        case 'U1_approve0_135': {
          const v2751 = v2308[1];
          
          break;
          }
        case 'U1_transfer0_135': {
          const v3191 = v2308[1];
          
          break;
          }
        case 'U1_transferFrom0_135': {
          const v3631 = v2308[1];
          
          break;
          }
        case 'U2_deposit0_135': {
          const v4071 = v2308[1];
          
          break;
          }
        case 'U2_withdraw0_135': {
          const v4511 = v2308[1];
          
          break;
          }
        case 'U3_transferFrom0_135': {
          const v4951 = v2308[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc5, ctc7, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v2308], secs: v2310, time: v2309, didSend: v1376, from: v2307 } = txn1;
  switch (v2308[0]) {
    case 'C_grant0_135': {
      const v2311 = v2308[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v2370 = v2311[stdlib.checkedBigNumberify('./index.rsh:240:10:spread', stdlib.UInt_max, '0')];
      const v2371 = v2043.manager;
      const v2372 = stdlib.addressEq(v2307, v2371);
      stdlib.assert(v2372, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:241:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)'],
        msg: 'Only constructor can grant',
        who: 'C_grant'
        });
      const v2378 = undefined /* Remote */;
      const v2379 = await txn1.getOutput('internal', 'v2378', ctc13, v2378);
      const v2381 = v2379[stdlib.checkedBigNumberify('./index.rsh:244:32:application', stdlib.UInt_max, '0')];
      const v2382 = v2379[stdlib.checkedBigNumberify('./index.rsh:244:32:application', stdlib.UInt_max, '1')];
      const v2387 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2381);
      stdlib.assert(v2387, {
        at: './index.rsh:244:32:application',
        fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)'],
        msg: 'remote bill check',
        who: 'C_grant'
        });
      stdlib.assert(v2382, {
        at: './index.rsh:244:18:application',
        fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)'],
        msg: 'Child app rejected grant',
        who: 'C_grant'
        });
      const v2388 = true;
      const v2389 = await txn1.getOutput('C_grant', 'v2388', ctc12, v2388);
      if (v1376) {
        stdlib.protect(ctc0, await interact.out(v2311, v2389), {
          at: './index.rsh:240:11:application',
          fs: ['at ./index.rsh:240:11:application call to [unknown function] (defined at: ./index.rsh:240:11:function exp)', 'at ./index.rsh:245:12:application call to "k" (defined at: ./index.rsh:243:13:function exp)', 'at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)'],
          msg: 'out',
          who: 'C_grant'
          });
        }
      else {
        }
      
      const v2395 = v2043.constructor;
      const v2397 = v2043.token;
      const v2398 = v2043.tokenAmount;
      const v2399 = {
        constructor: v2395,
        manager: v2370,
        token: v2397,
        tokenAmount: v2398
        };
      const v13879 = v2399;
      return;
      
      break;
      }
    case 'U1_approve0_135': {
      const v2751 = v2308[1];
      return;
      break;
      }
    case 'U1_transfer0_135': {
      const v3191 = v2308[1];
      return;
      break;
      }
    case 'U1_transferFrom0_135': {
      const v3631 = v2308[1];
      return;
      break;
      }
    case 'U2_deposit0_135': {
      const v4071 = v2308[1];
      return;
      break;
      }
    case 'U2_withdraw0_135': {
      const v4511 = v2308[1];
      return;
      break;
      }
    case 'U3_transferFrom0_135': {
      const v4951 = v2308[1];
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
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc7, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc11 = stdlib.T_Data({
    C_grant0_135: ctc8,
    U1_approve0_135: ctc9,
    U1_transfer0_135: ctc9,
    U1_transferFrom0_135: ctc10,
    U2_deposit0_135: ctc9,
    U2_withdraw0_135: ctc9,
    U3_transferFrom0_135: ctc10
    });
  const ctc12 = stdlib.T_Tuple([ctc7, ctc7]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:51:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:51:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v2002, time: v2001, didSend: v22, from: v2000 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2002, time: v2001, didSend: v22, from: v2000 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc3, ctc4],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v2011, v2012], secs: v2014, time: v2013, didSend: v36, from: v2010 } = txn2;
  ;
  ;
  const v2020 = await ctc.getContractInfo();
  const v2023 = [];
  const v2024 = undefined /* Remote */;
  const v2025 = await txn2.getOutput('internal', 'v2024', ctc6, v2024);
  const v2027 = v2025[stdlib.checkedBigNumberify('./index.rsh:68:18:application', stdlib.UInt_max, '0')];
  const v2028 = v2025[stdlib.checkedBigNumberify('./index.rsh:68:18:application', stdlib.UInt_max, '1')];
  const v2033 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2027);
  stdlib.assert(v2033, {
    at: './index.rsh:68:18:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Deployer'
    });
  stdlib.assert(v2028, {
    at: './index.rsh:67:10:application',
    fs: [],
    msg: 'Child app not announced as ready',
    who: 'Deployer'
    });
  const v2042 = {
    constructor: v2010,
    manager: v2010,
    token: v2012,
    tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v2043 = v2042;
  let v2044 = v2013;
  
  let txn3 = txn2;
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc11],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2308], secs: v2310, time: v2309, didSend: v1376, from: v2307 } = txn4;
    switch (v2308[0]) {
      case 'C_grant0_135': {
        const v2311 = v2308[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v2370 = v2311[stdlib.checkedBigNumberify('./index.rsh:240:10:spread', stdlib.UInt_max, '0')];
        const v2371 = v2043.manager;
        const v2372 = stdlib.addressEq(v2307, v2371);
        stdlib.assert(v2372, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:241:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)'],
          msg: 'Only constructor can grant',
          who: 'Deployer'
          });
        const v2378 = undefined /* Remote */;
        const v2379 = await txn4.getOutput('internal', 'v2378', ctc6, v2378);
        const v2381 = v2379[stdlib.checkedBigNumberify('./index.rsh:244:32:application', stdlib.UInt_max, '0')];
        const v2382 = v2379[stdlib.checkedBigNumberify('./index.rsh:244:32:application', stdlib.UInt_max, '1')];
        const v2387 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2381);
        stdlib.assert(v2387, {
          at: './index.rsh:244:32:application',
          fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v2382, {
          at: './index.rsh:244:18:application',
          fs: ['at ./index.rsh:243:13:application call to [unknown function] (defined at: ./index.rsh:243:13:function exp)'],
          msg: 'Child app rejected grant',
          who: 'Deployer'
          });
        const v2388 = true;
        await txn4.getOutput('C_grant', 'v2388', ctc5, v2388);
        const v2395 = v2043.constructor;
        const v2397 = v2043.token;
        const v2398 = v2043.tokenAmount;
        const v2399 = {
          constructor: v2395,
          manager: v2370,
          token: v2397,
          tokenAmount: v2398
          };
        const cv2043 = v2399;
        const cv2044 = v2309;
        
        v2043 = cv2043;
        v2044 = cv2044;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U1_approve0_135': {
        const v2751 = v2308[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v2843 = v2751[stdlib.checkedBigNumberify('./index.rsh:173:10:spread', stdlib.UInt_max, '0')];
        const v2844 = v2751[stdlib.checkedBigNumberify('./index.rsh:173:10:spread', stdlib.UInt_max, '1')];
        const v2847 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2307, ctc1), null);
        const v2848 = {
          None: 0,
          Some: 1
          }[v2847[0]];
        const v2849 = stdlib.eq(v2848, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        if (v2849) {
          await stdlib.mapSet(map0, ctc7, v2307, ctc1, stdlib.checkedBigNumberify('./index.rsh:177:62:decimal', stdlib.UInt_max, '0'));
          const v2850 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2843, ctc1), null);
          const v2851 = {
            None: 0,
            Some: 1
            }[v2850[0]];
          const v2852 = stdlib.eq(v2851, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          if (v2852) {
            await stdlib.mapSet(map0, ctc7, v2843, ctc1, stdlib.checkedBigNumberify('./index.rsh:178:66:decimal', stdlib.UInt_max, '0'));
            const v2853 = [v2307, v2843];
            await stdlib.mapSet(map1, ctc12, v2853, ctc1, v2844);
            const v2857 = undefined /* Remote */;
            const v2858 = await txn4.getOutput('internal', 'v2857', ctc6, v2857);
            const v2860 = v2858[stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '0')];
            const v2861 = v2858[stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '1')];
            const v2866 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2860);
            stdlib.assert(v2866, {
              at: './index.rsh:181:28:application',
              fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            stdlib.assert(v2861, {
              at: './index.rsh:180:18:application',
              fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)'],
              msg: 'Child app rejected allow',
              who: 'Deployer'
              });
            const v2867 = true;
            await txn4.getOutput('U1_approve', 'v2867', ctc5, v2867);
            const cv2043 = v2043;
            const cv2044 = v2309;
            
            v2043 = cv2043;
            v2044 = cv2044;
            
            txn3 = txn4;
            continue;}
          else {
            const v2876 = [v2307, v2843];
            await stdlib.mapSet(map1, ctc12, v2876, ctc1, v2844);
            const v2880 = undefined /* Remote */;
            const v2881 = await txn4.getOutput('internal', 'v2880', ctc6, v2880);
            const v2883 = v2881[stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '0')];
            const v2884 = v2881[stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '1')];
            const v2889 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2883);
            stdlib.assert(v2889, {
              at: './index.rsh:181:28:application',
              fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            stdlib.assert(v2884, {
              at: './index.rsh:180:18:application',
              fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)'],
              msg: 'Child app rejected allow',
              who: 'Deployer'
              });
            const v2890 = true;
            await txn4.getOutput('U1_approve', 'v2890', ctc5, v2890);
            const cv2043 = v2043;
            const cv2044 = v2309;
            
            v2043 = cv2043;
            v2044 = cv2044;
            
            txn3 = txn4;
            continue;}}
        else {
          const v2899 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2843, ctc1), null);
          const v2900 = {
            None: 0,
            Some: 1
            }[v2899[0]];
          const v2901 = stdlib.eq(v2900, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          if (v2901) {
            await stdlib.mapSet(map0, ctc7, v2843, ctc1, stdlib.checkedBigNumberify('./index.rsh:178:66:decimal', stdlib.UInt_max, '0'));
            const v2902 = [v2307, v2843];
            await stdlib.mapSet(map1, ctc12, v2902, ctc1, v2844);
            const v2906 = undefined /* Remote */;
            const v2907 = await txn4.getOutput('internal', 'v2906', ctc6, v2906);
            const v2909 = v2907[stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '0')];
            const v2910 = v2907[stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '1')];
            const v2915 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2909);
            stdlib.assert(v2915, {
              at: './index.rsh:181:28:application',
              fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            stdlib.assert(v2910, {
              at: './index.rsh:180:18:application',
              fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)'],
              msg: 'Child app rejected allow',
              who: 'Deployer'
              });
            const v2916 = true;
            await txn4.getOutput('U1_approve', 'v2916', ctc5, v2916);
            const cv2043 = v2043;
            const cv2044 = v2309;
            
            v2043 = cv2043;
            v2044 = cv2044;
            
            txn3 = txn4;
            continue;}
          else {
            const v2925 = [v2307, v2843];
            await stdlib.mapSet(map1, ctc12, v2925, ctc1, v2844);
            const v2929 = undefined /* Remote */;
            const v2930 = await txn4.getOutput('internal', 'v2929', ctc6, v2929);
            const v2932 = v2930[stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '0')];
            const v2933 = v2930[stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '1')];
            const v2938 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2932);
            stdlib.assert(v2938, {
              at: './index.rsh:181:28:application',
              fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            stdlib.assert(v2933, {
              at: './index.rsh:180:18:application',
              fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)'],
              msg: 'Child app rejected allow',
              who: 'Deployer'
              });
            const v2939 = true;
            await txn4.getOutput('U1_approve', 'v2939', ctc5, v2939);
            const cv2043 = v2043;
            const cv2044 = v2309;
            
            v2043 = cv2043;
            v2044 = cv2044;
            
            txn3 = txn4;
            continue;}}
        break;
        }
      case 'U1_transfer0_135': {
        const v3191 = v2308[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v3389 = v3191[stdlib.checkedBigNumberify('./index.rsh:95:10:spread', stdlib.UInt_max, '0')];
        const v3390 = v3191[stdlib.checkedBigNumberify('./index.rsh:95:10:spread', stdlib.UInt_max, '1')];
        const v3391 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2307, ctc1), null);
        const v3392 = {
          None: 0,
          Some: 1
          }[v3391[0]];
        const v3393 = stdlib.eq(v3392, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3393, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:96:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:13:function exp)'],
          msg: 'Sender has no balance',
          who: 'Deployer'
          });
        const v3396 = stdlib.fromSome(v3391, stdlib.checkedBigNumberify('./index.rsh:97:42:decimal', stdlib.UInt_max, '0'));
        const v3397 = stdlib.le(v3390, v3396);
        stdlib.assert(v3397, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:97:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:13:function exp)'],
          msg: 'Insufficient funds',
          who: 'Deployer'
          });
        const v3403 = stdlib.safeSub(v3396, v3390);
        await stdlib.mapSet(map0, ctc7, v2307, ctc1, v3403);
        const v3404 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v3389, ctc1), null);
        const v3405 = stdlib.fromSome(v3404, stdlib.checkedBigNumberify('./index.rsh:102:53:decimal', stdlib.UInt_max, '0'));
        const v3406 = stdlib.safeAdd(v3405, v3390);
        await stdlib.mapSet(map0, ctc7, v3389, ctc1, v3406);
        const v3410 = undefined /* Remote */;
        const v3411 = await txn4.getOutput('internal', 'v3410', ctc6, v3410);
        const v3413 = v3411[stdlib.checkedBigNumberify('./index.rsh:104:29:application', stdlib.UInt_max, '0')];
        const v3414 = v3411[stdlib.checkedBigNumberify('./index.rsh:104:29:application', stdlib.UInt_max, '1')];
        const v3419 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3413);
        stdlib.assert(v3419, {
          at: './index.rsh:104:29:application',
          fs: ['at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v3414, {
          at: './index.rsh:103:18:application',
          fs: ['at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:13:function exp)'],
          msg: 'Child app rejected send',
          who: 'Deployer'
          });
        const v3420 = true;
        await txn4.getOutput('U1_transfer', 'v3420', ctc5, v3420);
        const cv2043 = v2043;
        const cv2044 = v2309;
        
        v2043 = cv2043;
        v2044 = cv2044;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U1_transferFrom0_135': {
        const v3631 = v2308[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v3870 = v3631[stdlib.checkedBigNumberify('./index.rsh:117:10:spread', stdlib.UInt_max, '0')];
        const v3871 = v3631[stdlib.checkedBigNumberify('./index.rsh:117:10:spread', stdlib.UInt_max, '1')];
        const v3872 = v3631[stdlib.checkedBigNumberify('./index.rsh:117:10:spread', stdlib.UInt_max, '2')];
        const v3873 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v3870, ctc1), null);
        const v3874 = {
          None: 0,
          Some: 1
          }[v3873[0]];
        const v3875 = stdlib.eq(v3874, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3875, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:127:13:application call to [unknown function] (defined at: ./index.rsh:127:13:function exp)'],
          msg: 'Sender has no balance',
          who: 'Deployer'
          });
        const v3877 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v3871, ctc1), null);
        const v3878 = {
          None: 0,
          Some: 1
          }[v3877[0]];
        const v3879 = stdlib.eq(v3878, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3879, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:127:13:application call to [unknown function] (defined at: ./index.rsh:127:13:function exp)'],
          msg: 'Recipient has no balance',
          who: 'Deployer'
          });
        const v3881 = [v3870, v2307];
        const v3882 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v3881, ctc1), null);
        const v3883 = {
          None: 0,
          Some: 1
          }[v3882[0]];
        const v3884 = stdlib.eq(v3883, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3884, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:120:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:127:13:application call to [unknown function] (defined at: ./index.rsh:127:13:function exp)'],
          msg: 'No allowance',
          who: 'Deployer'
          });
        const v3888 = stdlib.fromSome(v3882, stdlib.checkedBigNumberify('./index.rsh:122:52:decimal', stdlib.UInt_max, '0'));
        const v3889 = stdlib.le(v3872, v3888);
        stdlib.assert(v3889, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:121:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:127:13:application call to [unknown function] (defined at: ./index.rsh:127:13:function exp)'],
          msg: 'Insufficient allowance',
          who: 'Deployer'
          });
        const v3892 = stdlib.fromSome(v3873, stdlib.checkedBigNumberify('./index.rsh:125:47:decimal', stdlib.UInt_max, '0'));
        const v3893 = stdlib.le(v3872, v3892);
        stdlib.assert(v3893, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:125:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:127:13:application call to [unknown function] (defined at: ./index.rsh:127:13:function exp)'],
          msg: 'Insufficient funds',
          who: 'Deployer'
          });
        const v3900 = stdlib.safeSub(v3892, v3872);
        await stdlib.mapSet(map0, ctc7, v3870, ctc1, v3900);
        const v3901 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v3871, ctc1), null);
        const v3902 = stdlib.fromSome(v3901, stdlib.checkedBigNumberify('./index.rsh:130:53:decimal', stdlib.UInt_max, '0'));
        const v3903 = stdlib.safeAdd(v3902, v3872);
        await stdlib.mapSet(map0, ctc7, v3871, ctc1, v3903);
        const v3908 = stdlib.safeSub(v3888, v3872);
        await stdlib.mapSet(map1, ctc12, v3881, ctc1, v3908);
        const v3912 = undefined /* Remote */;
        const v3913 = await txn4.getOutput('internal', 'v3912', ctc6, v3912);
        const v3915 = v3913[stdlib.checkedBigNumberify('./index.rsh:134:33:application', stdlib.UInt_max, '0')];
        const v3916 = v3913[stdlib.checkedBigNumberify('./index.rsh:134:33:application', stdlib.UInt_max, '1')];
        const v3921 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3915);
        stdlib.assert(v3921, {
          at: './index.rsh:134:33:application',
          fs: ['at ./index.rsh:127:13:application call to [unknown function] (defined at: ./index.rsh:127:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v3916, {
          at: './index.rsh:133:18:application',
          fs: ['at ./index.rsh:127:13:application call to [unknown function] (defined at: ./index.rsh:127:13:function exp)'],
          msg: 'Child app rejected transferFrom',
          who: 'Deployer'
          });
        const v3922 = true;
        await txn4.getOutput('U1_transferFrom', 'v3922', ctc5, v3922);
        const cv2043 = v2043;
        const cv2044 = v2309;
        
        v2043 = cv2043;
        v2044 = cv2044;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U2_deposit0_135': {
        const v4071 = v2308[1];
        undefined /* setApiDetails */;
        const v4097 = v4071[stdlib.checkedBigNumberify('./index.rsh:193:10:spread', stdlib.UInt_max, '1')];
        ;
        ;
        const v4373 = v4071[stdlib.checkedBigNumberify('./index.rsh:193:10:spread', stdlib.UInt_max, '0')];
        const v4377 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v4373, ctc1), null);
        const v4378 = stdlib.fromSome(v4377, stdlib.checkedBigNumberify('./index.rsh:197:47:decimal', stdlib.UInt_max, '0'));
        const v4379 = stdlib.safeAdd(v4378, v4097);
        await stdlib.mapSet(map0, ctc7, v4373, ctc1, v4379);
        const v4383 = undefined /* Remote */;
        const v4384 = await txn4.getOutput('internal', 'v4383', ctc6, v4383);
        const v4386 = v4384[stdlib.checkedBigNumberify('./index.rsh:199:28:application', stdlib.UInt_max, '0')];
        const v4387 = v4384[stdlib.checkedBigNumberify('./index.rsh:199:28:application', stdlib.UInt_max, '1')];
        const v4392 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4386);
        stdlib.assert(v4392, {
          at: './index.rsh:199:28:application',
          fs: ['at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v4387, {
          at: './index.rsh:198:18:application',
          fs: ['at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:13:function exp)'],
          msg: 'Child app rejected send',
          who: 'Deployer'
          });
        const v4393 = true;
        await txn4.getOutput('U2_deposit', 'v4393', ctc5, v4393);
        const v4401 = v2043.constructor;
        const v4402 = v2043.manager;
        const v4403 = v2043.token;
        const v4404 = v2043.tokenAmount;
        const v4406 = stdlib.safeAdd(v4404, v4097);
        const v4407 = {
          constructor: v4401,
          manager: v4402,
          token: v4403,
          tokenAmount: v4406
          };
        const cv2043 = v4407;
        const cv2044 = v2309;
        
        v2043 = cv2043;
        v2044 = cv2044;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U2_withdraw0_135': {
        const v4511 = v2308[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v4851 = v4511[stdlib.checkedBigNumberify('./index.rsh:216:10:spread', stdlib.UInt_max, '0')];
        const v4852 = v4511[stdlib.checkedBigNumberify('./index.rsh:216:10:spread', stdlib.UInt_max, '1')];
        const v4853 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2307, ctc1), null);
        const v4854 = stdlib.fromSome(v4853, stdlib.checkedBigNumberify('./index.rsh:217:42:decimal', stdlib.UInt_max, '0'));
        const v4855 = stdlib.le(v4852, v4854);
        stdlib.assert(v4855, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:217:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:219:13:application call to [unknown function] (defined at: ./index.rsh:219:13:function exp)'],
          msg: 'Insufficient funds',
          who: 'Deployer'
          });
        ;
        const v4870 = stdlib.safeSub(v4854, v4852);
        await stdlib.mapSet(map0, ctc7, v2307, ctc1, v4870);
        const v4874 = undefined /* Remote */;
        const v4875 = await txn4.getOutput('internal', 'v4874', ctc6, v4874);
        const v4877 = v4875[stdlib.checkedBigNumberify('./index.rsh:223:29:application', stdlib.UInt_max, '0')];
        const v4878 = v4875[stdlib.checkedBigNumberify('./index.rsh:223:29:application', stdlib.UInt_max, '1')];
        const v4883 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4877);
        stdlib.assert(v4883, {
          at: './index.rsh:223:29:application',
          fs: ['at ./index.rsh:219:13:application call to [unknown function] (defined at: ./index.rsh:219:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v4878, {
          at: './index.rsh:222:18:application',
          fs: ['at ./index.rsh:219:13:application call to [unknown function] (defined at: ./index.rsh:219:13:function exp)'],
          msg: 'Child app rejected withdraw',
          who: 'Deployer'
          });
        const v4884 = true;
        await txn4.getOutput('U2_withdraw', 'v4884', ctc5, v4884);
        const v4892 = v2043.constructor;
        const v4893 = v2043.manager;
        const v4894 = v2043.token;
        const v4895 = v2043.tokenAmount;
        const v4897 = stdlib.safeSub(v4895, v4852);
        const v4898 = {
          constructor: v4892,
          manager: v4893,
          token: v4894,
          tokenAmount: v4897
          };
        const cv2043 = v4898;
        const cv2044 = v2309;
        
        v2043 = cv2043;
        v2044 = cv2044;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U3_transferFrom0_135': {
        const v4951 = v2308[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v5342 = v4951[stdlib.checkedBigNumberify('./index.rsh:147:10:spread', stdlib.UInt_max, '0')];
        const v5343 = v4951[stdlib.checkedBigNumberify('./index.rsh:147:10:spread', stdlib.UInt_max, '1')];
        const v5344 = v4951[stdlib.checkedBigNumberify('./index.rsh:147:10:spread', stdlib.UInt_max, '2')];
        const v5345 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v5342, ctc1), null);
        const v5346 = {
          None: 0,
          Some: 1
          }[v5345[0]];
        const v5347 = stdlib.eq(v5346, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5347, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:148:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:157:13:application call to [unknown function] (defined at: ./index.rsh:157:13:function exp)'],
          msg: 'Sender has no balance',
          who: 'Deployer'
          });
        const v5349 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v5343, ctc1), null);
        const v5350 = {
          None: 0,
          Some: 1
          }[v5349[0]];
        const v5351 = stdlib.eq(v5350, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5351, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:149:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:157:13:application call to [unknown function] (defined at: ./index.rsh:157:13:function exp)'],
          msg: 'Recipient has no balance',
          who: 'Deployer'
          });
        const v5353 = [v5342, v2307];
        const v5354 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v5353, ctc1), null);
        const v5355 = {
          None: 0,
          Some: 1
          }[v5354[0]];
        const v5356 = stdlib.eq(v5355, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5356, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:150:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:157:13:application call to [unknown function] (defined at: ./index.rsh:157:13:function exp)'],
          msg: 'No allowance',
          who: 'Deployer'
          });
        const v5360 = stdlib.fromSome(v5354, stdlib.checkedBigNumberify('./index.rsh:152:52:decimal', stdlib.UInt_max, '0'));
        const v5361 = stdlib.le(v5344, v5360);
        stdlib.assert(v5361, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:151:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:157:13:application call to [unknown function] (defined at: ./index.rsh:157:13:function exp)'],
          msg: 'Insufficient allowance',
          who: 'Deployer'
          });
        const v5364 = stdlib.fromSome(v5345, stdlib.checkedBigNumberify('./index.rsh:155:47:decimal', stdlib.UInt_max, '0'));
        const v5365 = stdlib.le(v5344, v5364);
        stdlib.assert(v5365, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:157:13:application call to [unknown function] (defined at: ./index.rsh:157:13:function exp)'],
          msg: 'Insufficient funds',
          who: 'Deployer'
          });
        const v5372 = stdlib.safeSub(v5364, v5344);
        await stdlib.mapSet(map0, ctc7, v5342, ctc1, v5372);
        const v5373 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v5343, ctc1), null);
        const v5374 = stdlib.fromSome(v5373, stdlib.checkedBigNumberify('./index.rsh:160:53:decimal', stdlib.UInt_max, '0'));
        const v5375 = stdlib.safeAdd(v5374, v5344);
        await stdlib.mapSet(map0, ctc7, v5343, ctc1, v5375);
        const v5380 = stdlib.safeSub(v5360, v5344);
        await stdlib.mapSet(map1, ctc12, v5353, ctc1, v5380);
        const v5381 = true;
        await txn4.getOutput('U3_transferFrom', 'v5381', ctc5, v5381);
        const cv2043 = v2043;
        const cv2044 = v2309;
        
        v2043 = cv2043;
        v2044 = cv2044;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  
  
  };
export async function _U1_approve4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _U1_approve4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _U1_approve4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Object({
    constructor: ctc6,
    manager: ctc6,
    token: ctc4,
    tokenAmount: ctc1
    });
  const ctc8 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc6]);
  const ctc10 = stdlib.T_Tuple([ctc6, ctc6, ctc1]);
  const ctc11 = stdlib.T_Data({
    C_grant0_135: ctc9,
    U1_approve0_135: ctc8,
    U1_transfer0_135: ctc8,
    U1_transferFrom0_135: ctc10,
    U2_deposit0_135: ctc8,
    U2_withdraw0_135: ctc8,
    U3_transferFrom0_135: ctc10
    });
  const ctc12 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc13 = stdlib.T_Bool;
  const ctc14 = stdlib.T_Tuple([ctc1, ctc13]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2011, v2012, v2023, v2043] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc4, ctc5, ctc7]);
  const v2182 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:173:45:application call to [unknown function] (defined at: ./index.rsh:173:45:function exp)', 'at ./index.rsh:81:29:application call to "runU1_approve0_135" (defined at: ./index.rsh:173:10:function exp)', 'at ./index.rsh:81:29:application call to [unknown function] (defined at: ./index.rsh:81:29:function exp)'],
    msg: 'in',
    who: 'U1_approve'
    });
  const v2194 = ['U1_approve0_135', v2182];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2011, v2012, v2023, v2043, v2194],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:173:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:89:14:decimal', stdlib.UInt_max, '0'), v2012]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2308], secs: v2310, time: v2309, didSend: v1376, from: v2307 } = txn1;
      
      switch (v2308[0]) {
        case 'C_grant0_135': {
          const v2311 = v2308[1];
          
          break;
          }
        case 'U1_approve0_135': {
          const v2751 = v2308[1];
          sim_r.txns.push({
            kind: 'api',
            who: "U1_approve"
            });
          ;
          ;
          const v2843 = v2751[stdlib.checkedBigNumberify('./index.rsh:173:10:spread', stdlib.UInt_max, '0')];
          const v2844 = v2751[stdlib.checkedBigNumberify('./index.rsh:173:10:spread', stdlib.UInt_max, '1')];
          const v2847 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v2307, ctc1), null);
          const v2848 = {
            None: 0,
            Some: 1
            }[v2847[0]];
          const v2849 = stdlib.eq(v2848, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          if (v2849) {
            await stdlib.simMapSet(sim_r, 0, ctc6, v2307, ctc1, stdlib.checkedBigNumberify('./index.rsh:177:62:decimal', stdlib.UInt_max, '0'));
            const v2850 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v2843, ctc1), null);
            const v2851 = {
              None: 0,
              Some: 1
              }[v2850[0]];
            const v2852 = stdlib.eq(v2851, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            if (v2852) {
              await stdlib.simMapSet(sim_r, 0, ctc6, v2843, ctc1, stdlib.checkedBigNumberify('./index.rsh:178:66:decimal', stdlib.UInt_max, '0'));
              const v2853 = [v2307, v2843];
              await stdlib.simMapSet(sim_r, 1, ctc12, v2853, ctc1, v2844);
              const v2857 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v2011,
                  remote: ({
                    accs: [v2307, v2843],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc13.defaultValue /* simReturnVal */];})();
              await txn1.getOutput('internal', 'v2857', ctc14, v2857);
              const v2867 = true;
              const v2868 = await txn1.getOutput('U1_approve', 'v2867', ctc13, v2867);
              
              const v13901 = v2043;
              sim_r.isHalt = false;
              }
            else {
              const v2876 = [v2307, v2843];
              await stdlib.simMapSet(sim_r, 1, ctc12, v2876, ctc1, v2844);
              const v2880 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v2011,
                  remote: ({
                    accs: [v2307, v2843],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc13.defaultValue /* simReturnVal */];})();
              await txn1.getOutput('internal', 'v2880', ctc14, v2880);
              const v2890 = true;
              const v2891 = await txn1.getOutput('U1_approve', 'v2890', ctc13, v2890);
              
              const v13903 = v2043;
              sim_r.isHalt = false;
              }}
          else {
            const v2899 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v2843, ctc1), null);
            const v2900 = {
              None: 0,
              Some: 1
              }[v2899[0]];
            const v2901 = stdlib.eq(v2900, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            if (v2901) {
              await stdlib.simMapSet(sim_r, 0, ctc6, v2843, ctc1, stdlib.checkedBigNumberify('./index.rsh:178:66:decimal', stdlib.UInt_max, '0'));
              const v2902 = [v2307, v2843];
              await stdlib.simMapSet(sim_r, 1, ctc12, v2902, ctc1, v2844);
              const v2906 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v2011,
                  remote: ({
                    accs: [v2307, v2843],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc13.defaultValue /* simReturnVal */];})();
              await txn1.getOutput('internal', 'v2906', ctc14, v2906);
              const v2916 = true;
              const v2917 = await txn1.getOutput('U1_approve', 'v2916', ctc13, v2916);
              
              const v13905 = v2043;
              sim_r.isHalt = false;
              }
            else {
              const v2925 = [v2307, v2843];
              await stdlib.simMapSet(sim_r, 1, ctc12, v2925, ctc1, v2844);
              const v2929 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v2011,
                  remote: ({
                    accs: [v2307, v2843],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc13.defaultValue /* simReturnVal */];})();
              await txn1.getOutput('internal', 'v2929', ctc14, v2929);
              const v2939 = true;
              const v2940 = await txn1.getOutput('U1_approve', 'v2939', ctc13, v2939);
              
              const v13907 = v2043;
              sim_r.isHalt = false;
              }}
          break;
          }
        case 'U1_transfer0_135': {
          const v3191 = v2308[1];
          
          break;
          }
        case 'U1_transferFrom0_135': {
          const v3631 = v2308[1];
          
          break;
          }
        case 'U2_deposit0_135': {
          const v4071 = v2308[1];
          
          break;
          }
        case 'U2_withdraw0_135': {
          const v4511 = v2308[1];
          
          break;
          }
        case 'U3_transferFrom0_135': {
          const v4951 = v2308[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc5, ctc7, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v2308], secs: v2310, time: v2309, didSend: v1376, from: v2307 } = txn1;
  switch (v2308[0]) {
    case 'C_grant0_135': {
      const v2311 = v2308[1];
      return;
      break;
      }
    case 'U1_approve0_135': {
      const v2751 = v2308[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v2843 = v2751[stdlib.checkedBigNumberify('./index.rsh:173:10:spread', stdlib.UInt_max, '0')];
      const v2844 = v2751[stdlib.checkedBigNumberify('./index.rsh:173:10:spread', stdlib.UInt_max, '1')];
      const v2847 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2307, ctc1), null);
      const v2848 = {
        None: 0,
        Some: 1
        }[v2847[0]];
      const v2849 = stdlib.eq(v2848, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      if (v2849) {
        await stdlib.mapSet(map0, ctc6, v2307, ctc1, stdlib.checkedBigNumberify('./index.rsh:177:62:decimal', stdlib.UInt_max, '0'));
        const v2850 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2843, ctc1), null);
        const v2851 = {
          None: 0,
          Some: 1
          }[v2850[0]];
        const v2852 = stdlib.eq(v2851, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        if (v2852) {
          await stdlib.mapSet(map0, ctc6, v2843, ctc1, stdlib.checkedBigNumberify('./index.rsh:178:66:decimal', stdlib.UInt_max, '0'));
          const v2853 = [v2307, v2843];
          await stdlib.mapSet(map1, ctc12, v2853, ctc1, v2844);
          const v2857 = undefined /* Remote */;
          const v2858 = await txn1.getOutput('internal', 'v2857', ctc14, v2857);
          const v2860 = v2858[stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '0')];
          const v2861 = v2858[stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '1')];
          const v2866 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2860);
          stdlib.assert(v2866, {
            at: './index.rsh:181:28:application',
            fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)'],
            msg: 'remote bill check',
            who: 'U1_approve'
            });
          stdlib.assert(v2861, {
            at: './index.rsh:180:18:application',
            fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)'],
            msg: 'Child app rejected allow',
            who: 'U1_approve'
            });
          const v2867 = true;
          const v2868 = await txn1.getOutput('U1_approve', 'v2867', ctc13, v2867);
          if (v1376) {
            stdlib.protect(ctc0, await interact.out(v2751, v2868), {
              at: './index.rsh:173:11:application',
              fs: ['at ./index.rsh:173:11:application call to [unknown function] (defined at: ./index.rsh:173:11:function exp)', 'at ./index.rsh:184:12:application call to "k" (defined at: ./index.rsh:175:13:function exp)', 'at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)'],
              msg: 'out',
              who: 'U1_approve'
              });
            }
          else {
            }
          
          const v13901 = v2043;
          return;
          }
        else {
          const v2876 = [v2307, v2843];
          await stdlib.mapSet(map1, ctc12, v2876, ctc1, v2844);
          const v2880 = undefined /* Remote */;
          const v2881 = await txn1.getOutput('internal', 'v2880', ctc14, v2880);
          const v2883 = v2881[stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '0')];
          const v2884 = v2881[stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '1')];
          const v2889 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2883);
          stdlib.assert(v2889, {
            at: './index.rsh:181:28:application',
            fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)'],
            msg: 'remote bill check',
            who: 'U1_approve'
            });
          stdlib.assert(v2884, {
            at: './index.rsh:180:18:application',
            fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)'],
            msg: 'Child app rejected allow',
            who: 'U1_approve'
            });
          const v2890 = true;
          const v2891 = await txn1.getOutput('U1_approve', 'v2890', ctc13, v2890);
          if (v1376) {
            stdlib.protect(ctc0, await interact.out(v2751, v2891), {
              at: './index.rsh:173:11:application',
              fs: ['at ./index.rsh:173:11:application call to [unknown function] (defined at: ./index.rsh:173:11:function exp)', 'at ./index.rsh:184:12:application call to "k" (defined at: ./index.rsh:175:13:function exp)', 'at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)'],
              msg: 'out',
              who: 'U1_approve'
              });
            }
          else {
            }
          
          const v13903 = v2043;
          return;
          }}
      else {
        const v2899 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2843, ctc1), null);
        const v2900 = {
          None: 0,
          Some: 1
          }[v2899[0]];
        const v2901 = stdlib.eq(v2900, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        if (v2901) {
          await stdlib.mapSet(map0, ctc6, v2843, ctc1, stdlib.checkedBigNumberify('./index.rsh:178:66:decimal', stdlib.UInt_max, '0'));
          const v2902 = [v2307, v2843];
          await stdlib.mapSet(map1, ctc12, v2902, ctc1, v2844);
          const v2906 = undefined /* Remote */;
          const v2907 = await txn1.getOutput('internal', 'v2906', ctc14, v2906);
          const v2909 = v2907[stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '0')];
          const v2910 = v2907[stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '1')];
          const v2915 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2909);
          stdlib.assert(v2915, {
            at: './index.rsh:181:28:application',
            fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)'],
            msg: 'remote bill check',
            who: 'U1_approve'
            });
          stdlib.assert(v2910, {
            at: './index.rsh:180:18:application',
            fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)'],
            msg: 'Child app rejected allow',
            who: 'U1_approve'
            });
          const v2916 = true;
          const v2917 = await txn1.getOutput('U1_approve', 'v2916', ctc13, v2916);
          if (v1376) {
            stdlib.protect(ctc0, await interact.out(v2751, v2917), {
              at: './index.rsh:173:11:application',
              fs: ['at ./index.rsh:173:11:application call to [unknown function] (defined at: ./index.rsh:173:11:function exp)', 'at ./index.rsh:184:12:application call to "k" (defined at: ./index.rsh:175:13:function exp)', 'at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)'],
              msg: 'out',
              who: 'U1_approve'
              });
            }
          else {
            }
          
          const v13905 = v2043;
          return;
          }
        else {
          const v2925 = [v2307, v2843];
          await stdlib.mapSet(map1, ctc12, v2925, ctc1, v2844);
          const v2929 = undefined /* Remote */;
          const v2930 = await txn1.getOutput('internal', 'v2929', ctc14, v2929);
          const v2932 = v2930[stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '0')];
          const v2933 = v2930[stdlib.checkedBigNumberify('./index.rsh:181:28:application', stdlib.UInt_max, '1')];
          const v2938 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2932);
          stdlib.assert(v2938, {
            at: './index.rsh:181:28:application',
            fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)'],
            msg: 'remote bill check',
            who: 'U1_approve'
            });
          stdlib.assert(v2933, {
            at: './index.rsh:180:18:application',
            fs: ['at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)'],
            msg: 'Child app rejected allow',
            who: 'U1_approve'
            });
          const v2939 = true;
          const v2940 = await txn1.getOutput('U1_approve', 'v2939', ctc13, v2939);
          if (v1376) {
            stdlib.protect(ctc0, await interact.out(v2751, v2940), {
              at: './index.rsh:173:11:application',
              fs: ['at ./index.rsh:173:11:application call to [unknown function] (defined at: ./index.rsh:173:11:function exp)', 'at ./index.rsh:184:12:application call to "k" (defined at: ./index.rsh:175:13:function exp)', 'at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:13:function exp)'],
              msg: 'out',
              who: 'U1_approve'
              });
            }
          else {
            }
          
          const v13907 = v2043;
          return;
          }}
      break;
      }
    case 'U1_transfer0_135': {
      const v3191 = v2308[1];
      return;
      break;
      }
    case 'U1_transferFrom0_135': {
      const v3631 = v2308[1];
      return;
      break;
      }
    case 'U2_deposit0_135': {
      const v4071 = v2308[1];
      return;
      break;
      }
    case 'U2_withdraw0_135': {
      const v4511 = v2308[1];
      return;
      break;
      }
    case 'U3_transferFrom0_135': {
      const v4951 = v2308[1];
      return;
      break;
      }
    }
  
  
  };
export async function _U1_transfer4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _U1_transfer4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _U1_transfer4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Object({
    constructor: ctc6,
    manager: ctc6,
    token: ctc4,
    tokenAmount: ctc1
    });
  const ctc8 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc6]);
  const ctc10 = stdlib.T_Tuple([ctc6, ctc6, ctc1]);
  const ctc11 = stdlib.T_Data({
    C_grant0_135: ctc9,
    U1_approve0_135: ctc8,
    U1_transfer0_135: ctc8,
    U1_transferFrom0_135: ctc10,
    U2_deposit0_135: ctc8,
    U2_withdraw0_135: ctc8,
    U3_transferFrom0_135: ctc10
    });
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Tuple([ctc1, ctc12]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2011, v2012, v2023, v2043] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc4, ctc5, ctc7]);
  const v2072 = ctc.selfAddress();
  const v2074 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:95:41:application call to [unknown function] (defined at: ./index.rsh:95:41:function exp)', 'at ./index.rsh:81:29:application call to "runU1_transfer0_135" (defined at: ./index.rsh:95:10:function exp)', 'at ./index.rsh:81:29:application call to [unknown function] (defined at: ./index.rsh:81:29:function exp)'],
    msg: 'in',
    who: 'U1_transfer'
    });
  const v2076 = v2074[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2079 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2072, ctc1), null);
  const v2080 = {
    None: 0,
    Some: 1
    }[v2079[0]];
  const v2081 = stdlib.eq(v2080, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2081, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:96:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:95:41:application call to [unknown function] (defined at: ./index.rsh:95:41:function exp)', 'at ./index.rsh:81:29:application call to "runU1_transfer0_135" (defined at: ./index.rsh:95:10:function exp)', 'at ./index.rsh:81:29:application call to [unknown function] (defined at: ./index.rsh:81:29:function exp)'],
    msg: 'Sender has no balance',
    who: 'U1_transfer'
    });
  const v2084 = stdlib.fromSome(v2079, stdlib.checkedBigNumberify('./index.rsh:97:42:decimal', stdlib.UInt_max, '0'));
  const v2085 = stdlib.le(v2076, v2084);
  stdlib.assert(v2085, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:97:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:95:41:application call to [unknown function] (defined at: ./index.rsh:95:41:function exp)', 'at ./index.rsh:81:29:application call to "runU1_transfer0_135" (defined at: ./index.rsh:95:10:function exp)', 'at ./index.rsh:81:29:application call to [unknown function] (defined at: ./index.rsh:81:29:function exp)'],
    msg: 'Insufficient funds',
    who: 'U1_transfer'
    });
  const v2094 = ['U1_transfer0_135', v2074];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2011, v2012, v2023, v2043, v2094],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:95:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:89:14:decimal', stdlib.UInt_max, '0'), v2012]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2308], secs: v2310, time: v2309, didSend: v1376, from: v2307 } = txn1;
      
      switch (v2308[0]) {
        case 'C_grant0_135': {
          const v2311 = v2308[1];
          
          break;
          }
        case 'U1_approve0_135': {
          const v2751 = v2308[1];
          
          break;
          }
        case 'U1_transfer0_135': {
          const v3191 = v2308[1];
          sim_r.txns.push({
            kind: 'api',
            who: "U1_transfer"
            });
          ;
          ;
          const v3389 = v3191[stdlib.checkedBigNumberify('./index.rsh:95:10:spread', stdlib.UInt_max, '0')];
          const v3390 = v3191[stdlib.checkedBigNumberify('./index.rsh:95:10:spread', stdlib.UInt_max, '1')];
          const v3391 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v2307, ctc1), null);
          const v3396 = stdlib.fromSome(v3391, stdlib.checkedBigNumberify('./index.rsh:97:42:decimal', stdlib.UInt_max, '0'));
          const v3403 = stdlib.safeSub(v3396, v3390);
          await stdlib.simMapSet(sim_r, 0, ctc6, v2307, ctc1, v3403);
          const v3404 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v3389, ctc1), null);
          const v3405 = stdlib.fromSome(v3404, stdlib.checkedBigNumberify('./index.rsh:102:53:decimal', stdlib.UInt_max, '0'));
          const v3406 = stdlib.safeAdd(v3405, v3390);
          await stdlib.simMapSet(sim_r, 0, ctc6, v3389, ctc1, v3406);
          const v3410 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v2011,
              remote: ({
                accs: [v2307, v3389],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:104:29:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:104:29:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v3410', ctc13, v3410);
          const v3420 = true;
          const v3421 = await txn1.getOutput('U1_transfer', 'v3420', ctc12, v3420);
          
          const v13929 = v2043;
          sim_r.isHalt = false;
          
          break;
          }
        case 'U1_transferFrom0_135': {
          const v3631 = v2308[1];
          
          break;
          }
        case 'U2_deposit0_135': {
          const v4071 = v2308[1];
          
          break;
          }
        case 'U2_withdraw0_135': {
          const v4511 = v2308[1];
          
          break;
          }
        case 'U3_transferFrom0_135': {
          const v4951 = v2308[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc5, ctc7, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v2308], secs: v2310, time: v2309, didSend: v1376, from: v2307 } = txn1;
  switch (v2308[0]) {
    case 'C_grant0_135': {
      const v2311 = v2308[1];
      return;
      break;
      }
    case 'U1_approve0_135': {
      const v2751 = v2308[1];
      return;
      break;
      }
    case 'U1_transfer0_135': {
      const v3191 = v2308[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v3389 = v3191[stdlib.checkedBigNumberify('./index.rsh:95:10:spread', stdlib.UInt_max, '0')];
      const v3390 = v3191[stdlib.checkedBigNumberify('./index.rsh:95:10:spread', stdlib.UInt_max, '1')];
      const v3391 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2307, ctc1), null);
      const v3392 = {
        None: 0,
        Some: 1
        }[v3391[0]];
      const v3393 = stdlib.eq(v3392, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3393, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:96:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:13:function exp)'],
        msg: 'Sender has no balance',
        who: 'U1_transfer'
        });
      const v3396 = stdlib.fromSome(v3391, stdlib.checkedBigNumberify('./index.rsh:97:42:decimal', stdlib.UInt_max, '0'));
      const v3397 = stdlib.le(v3390, v3396);
      stdlib.assert(v3397, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:97:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:13:function exp)'],
        msg: 'Insufficient funds',
        who: 'U1_transfer'
        });
      const v3403 = stdlib.safeSub(v3396, v3390);
      await stdlib.mapSet(map0, ctc6, v2307, ctc1, v3403);
      const v3404 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v3389, ctc1), null);
      const v3405 = stdlib.fromSome(v3404, stdlib.checkedBigNumberify('./index.rsh:102:53:decimal', stdlib.UInt_max, '0'));
      const v3406 = stdlib.safeAdd(v3405, v3390);
      await stdlib.mapSet(map0, ctc6, v3389, ctc1, v3406);
      const v3410 = undefined /* Remote */;
      const v3411 = await txn1.getOutput('internal', 'v3410', ctc13, v3410);
      const v3413 = v3411[stdlib.checkedBigNumberify('./index.rsh:104:29:application', stdlib.UInt_max, '0')];
      const v3414 = v3411[stdlib.checkedBigNumberify('./index.rsh:104:29:application', stdlib.UInt_max, '1')];
      const v3419 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3413);
      stdlib.assert(v3419, {
        at: './index.rsh:104:29:application',
        fs: ['at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:13:function exp)'],
        msg: 'remote bill check',
        who: 'U1_transfer'
        });
      stdlib.assert(v3414, {
        at: './index.rsh:103:18:application',
        fs: ['at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:13:function exp)'],
        msg: 'Child app rejected send',
        who: 'U1_transfer'
        });
      const v3420 = true;
      const v3421 = await txn1.getOutput('U1_transfer', 'v3420', ctc12, v3420);
      if (v1376) {
        stdlib.protect(ctc0, await interact.out(v3191, v3421), {
          at: './index.rsh:95:11:application',
          fs: ['at ./index.rsh:95:11:application call to [unknown function] (defined at: ./index.rsh:95:11:function exp)', 'at ./index.rsh:107:12:application call to "k" (defined at: ./index.rsh:99:13:function exp)', 'at ./index.rsh:99:13:application call to [unknown function] (defined at: ./index.rsh:99:13:function exp)'],
          msg: 'out',
          who: 'U1_transfer'
          });
        }
      else {
        }
      
      const v13929 = v2043;
      return;
      
      break;
      }
    case 'U1_transferFrom0_135': {
      const v3631 = v2308[1];
      return;
      break;
      }
    case 'U2_deposit0_135': {
      const v4071 = v2308[1];
      return;
      break;
      }
    case 'U2_withdraw0_135': {
      const v4511 = v2308[1];
      return;
      break;
      }
    case 'U3_transferFrom0_135': {
      const v4951 = v2308[1];
      return;
      break;
      }
    }
  
  
  };
export async function _U1_transferFrom4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _U1_transferFrom4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _U1_transferFrom4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Object({
    constructor: ctc6,
    manager: ctc6,
    token: ctc4,
    tokenAmount: ctc1
    });
  const ctc8 = stdlib.T_Tuple([ctc6, ctc6, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc10 = stdlib.T_Tuple([ctc6]);
  const ctc11 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc12 = stdlib.T_Data({
    C_grant0_135: ctc10,
    U1_approve0_135: ctc11,
    U1_transfer0_135: ctc11,
    U1_transferFrom0_135: ctc8,
    U2_deposit0_135: ctc11,
    U2_withdraw0_135: ctc11,
    U3_transferFrom0_135: ctc8
    });
  const ctc13 = stdlib.T_Bool;
  const ctc14 = stdlib.T_Tuple([ctc1, ctc13]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2011, v2012, v2023, v2043] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc4, ctc5, ctc7]);
  const v2096 = ctc.selfAddress();
  const v2098 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:117:56:application call to [unknown function] (defined at: ./index.rsh:117:56:function exp)', 'at ./index.rsh:81:29:application call to "runU1_transferFrom0_135" (defined at: ./index.rsh:117:10:function exp)', 'at ./index.rsh:81:29:application call to [unknown function] (defined at: ./index.rsh:81:29:function exp)'],
    msg: 'in',
    who: 'U1_transferFrom'
    });
  const v2099 = v2098[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2100 = v2098[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2101 = v2098[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2105 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2099, ctc1), null);
  const v2106 = {
    None: 0,
    Some: 1
    }[v2105[0]];
  const v2107 = stdlib.eq(v2106, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2107, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:117:56:application call to [unknown function] (defined at: ./index.rsh:117:56:function exp)', 'at ./index.rsh:81:29:application call to "runU1_transferFrom0_135" (defined at: ./index.rsh:117:10:function exp)', 'at ./index.rsh:81:29:application call to [unknown function] (defined at: ./index.rsh:81:29:function exp)'],
    msg: 'Sender has no balance',
    who: 'U1_transferFrom'
    });
  const v2109 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2100, ctc1), null);
  const v2110 = {
    None: 0,
    Some: 1
    }[v2109[0]];
  const v2111 = stdlib.eq(v2110, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2111, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:117:56:application call to [unknown function] (defined at: ./index.rsh:117:56:function exp)', 'at ./index.rsh:81:29:application call to "runU1_transferFrom0_135" (defined at: ./index.rsh:117:10:function exp)', 'at ./index.rsh:81:29:application call to [unknown function] (defined at: ./index.rsh:81:29:function exp)'],
    msg: 'Recipient has no balance',
    who: 'U1_transferFrom'
    });
  const v2113 = [v2099, v2096];
  const v2114 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc9, v2113, ctc1), null);
  const v2115 = {
    None: 0,
    Some: 1
    }[v2114[0]];
  const v2116 = stdlib.eq(v2115, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2116, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:120:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:117:56:application call to [unknown function] (defined at: ./index.rsh:117:56:function exp)', 'at ./index.rsh:81:29:application call to "runU1_transferFrom0_135" (defined at: ./index.rsh:117:10:function exp)', 'at ./index.rsh:81:29:application call to [unknown function] (defined at: ./index.rsh:81:29:function exp)'],
    msg: 'No allowance',
    who: 'U1_transferFrom'
    });
  const v2120 = stdlib.fromSome(v2114, stdlib.checkedBigNumberify('./index.rsh:122:52:decimal', stdlib.UInt_max, '0'));
  const v2121 = stdlib.le(v2101, v2120);
  stdlib.assert(v2121, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:121:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:117:56:application call to [unknown function] (defined at: ./index.rsh:117:56:function exp)', 'at ./index.rsh:81:29:application call to "runU1_transferFrom0_135" (defined at: ./index.rsh:117:10:function exp)', 'at ./index.rsh:81:29:application call to [unknown function] (defined at: ./index.rsh:81:29:function exp)'],
    msg: 'Insufficient allowance',
    who: 'U1_transferFrom'
    });
  const v2124 = stdlib.fromSome(v2105, stdlib.checkedBigNumberify('./index.rsh:125:47:decimal', stdlib.UInt_max, '0'));
  const v2125 = stdlib.le(v2101, v2124);
  stdlib.assert(v2125, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:125:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:117:56:application call to [unknown function] (defined at: ./index.rsh:117:56:function exp)', 'at ./index.rsh:81:29:application call to "runU1_transferFrom0_135" (defined at: ./index.rsh:117:10:function exp)', 'at ./index.rsh:81:29:application call to [unknown function] (defined at: ./index.rsh:81:29:function exp)'],
    msg: 'Insufficient funds',
    who: 'U1_transferFrom'
    });
  const v2136 = ['U1_transferFrom0_135', v2098];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2011, v2012, v2023, v2043, v2136],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:117:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:89:14:decimal', stdlib.UInt_max, '0'), v2012]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2308], secs: v2310, time: v2309, didSend: v1376, from: v2307 } = txn1;
      
      switch (v2308[0]) {
        case 'C_grant0_135': {
          const v2311 = v2308[1];
          
          break;
          }
        case 'U1_approve0_135': {
          const v2751 = v2308[1];
          
          break;
          }
        case 'U1_transfer0_135': {
          const v3191 = v2308[1];
          
          break;
          }
        case 'U1_transferFrom0_135': {
          const v3631 = v2308[1];
          sim_r.txns.push({
            kind: 'api',
            who: "U1_transferFrom"
            });
          ;
          ;
          const v3870 = v3631[stdlib.checkedBigNumberify('./index.rsh:117:10:spread', stdlib.UInt_max, '0')];
          const v3871 = v3631[stdlib.checkedBigNumberify('./index.rsh:117:10:spread', stdlib.UInt_max, '1')];
          const v3872 = v3631[stdlib.checkedBigNumberify('./index.rsh:117:10:spread', stdlib.UInt_max, '2')];
          const v3873 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v3870, ctc1), null);
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v3871, ctc1), null);
          const v3881 = [v3870, v2307];
          const v3882 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc9, v3881, ctc1), null);
          const v3888 = stdlib.fromSome(v3882, stdlib.checkedBigNumberify('./index.rsh:122:52:decimal', stdlib.UInt_max, '0'));
          const v3892 = stdlib.fromSome(v3873, stdlib.checkedBigNumberify('./index.rsh:125:47:decimal', stdlib.UInt_max, '0'));
          const v3900 = stdlib.safeSub(v3892, v3872);
          await stdlib.simMapSet(sim_r, 0, ctc6, v3870, ctc1, v3900);
          const v3901 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v3871, ctc1), null);
          const v3902 = stdlib.fromSome(v3901, stdlib.checkedBigNumberify('./index.rsh:130:53:decimal', stdlib.UInt_max, '0'));
          const v3903 = stdlib.safeAdd(v3902, v3872);
          await stdlib.simMapSet(sim_r, 0, ctc6, v3871, ctc1, v3903);
          const v3908 = stdlib.safeSub(v3888, v3872);
          await stdlib.simMapSet(sim_r, 1, ctc9, v3881, ctc1, v3908);
          const v3912 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v2011,
              remote: ({
                accs: [v3870, v3871],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:134:33:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:134:33:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc13.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v3912', ctc14, v3912);
          const v3922 = true;
          const v3923 = await txn1.getOutput('U1_transferFrom', 'v3922', ctc13, v3922);
          
          const v13951 = v2043;
          sim_r.isHalt = false;
          
          break;
          }
        case 'U2_deposit0_135': {
          const v4071 = v2308[1];
          
          break;
          }
        case 'U2_withdraw0_135': {
          const v4511 = v2308[1];
          
          break;
          }
        case 'U3_transferFrom0_135': {
          const v4951 = v2308[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc5, ctc7, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v2308], secs: v2310, time: v2309, didSend: v1376, from: v2307 } = txn1;
  switch (v2308[0]) {
    case 'C_grant0_135': {
      const v2311 = v2308[1];
      return;
      break;
      }
    case 'U1_approve0_135': {
      const v2751 = v2308[1];
      return;
      break;
      }
    case 'U1_transfer0_135': {
      const v3191 = v2308[1];
      return;
      break;
      }
    case 'U1_transferFrom0_135': {
      const v3631 = v2308[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v3870 = v3631[stdlib.checkedBigNumberify('./index.rsh:117:10:spread', stdlib.UInt_max, '0')];
      const v3871 = v3631[stdlib.checkedBigNumberify('./index.rsh:117:10:spread', stdlib.UInt_max, '1')];
      const v3872 = v3631[stdlib.checkedBigNumberify('./index.rsh:117:10:spread', stdlib.UInt_max, '2')];
      const v3873 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v3870, ctc1), null);
      const v3874 = {
        None: 0,
        Some: 1
        }[v3873[0]];
      const v3875 = stdlib.eq(v3874, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3875, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:127:13:application call to [unknown function] (defined at: ./index.rsh:127:13:function exp)'],
        msg: 'Sender has no balance',
        who: 'U1_transferFrom'
        });
      const v3877 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v3871, ctc1), null);
      const v3878 = {
        None: 0,
        Some: 1
        }[v3877[0]];
      const v3879 = stdlib.eq(v3878, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3879, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:127:13:application call to [unknown function] (defined at: ./index.rsh:127:13:function exp)'],
        msg: 'Recipient has no balance',
        who: 'U1_transferFrom'
        });
      const v3881 = [v3870, v2307];
      const v3882 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc9, v3881, ctc1), null);
      const v3883 = {
        None: 0,
        Some: 1
        }[v3882[0]];
      const v3884 = stdlib.eq(v3883, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3884, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:120:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:127:13:application call to [unknown function] (defined at: ./index.rsh:127:13:function exp)'],
        msg: 'No allowance',
        who: 'U1_transferFrom'
        });
      const v3888 = stdlib.fromSome(v3882, stdlib.checkedBigNumberify('./index.rsh:122:52:decimal', stdlib.UInt_max, '0'));
      const v3889 = stdlib.le(v3872, v3888);
      stdlib.assert(v3889, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:121:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:127:13:application call to [unknown function] (defined at: ./index.rsh:127:13:function exp)'],
        msg: 'Insufficient allowance',
        who: 'U1_transferFrom'
        });
      const v3892 = stdlib.fromSome(v3873, stdlib.checkedBigNumberify('./index.rsh:125:47:decimal', stdlib.UInt_max, '0'));
      const v3893 = stdlib.le(v3872, v3892);
      stdlib.assert(v3893, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:125:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:127:13:application call to [unknown function] (defined at: ./index.rsh:127:13:function exp)'],
        msg: 'Insufficient funds',
        who: 'U1_transferFrom'
        });
      const v3900 = stdlib.safeSub(v3892, v3872);
      await stdlib.mapSet(map0, ctc6, v3870, ctc1, v3900);
      const v3901 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v3871, ctc1), null);
      const v3902 = stdlib.fromSome(v3901, stdlib.checkedBigNumberify('./index.rsh:130:53:decimal', stdlib.UInt_max, '0'));
      const v3903 = stdlib.safeAdd(v3902, v3872);
      await stdlib.mapSet(map0, ctc6, v3871, ctc1, v3903);
      const v3908 = stdlib.safeSub(v3888, v3872);
      await stdlib.mapSet(map1, ctc9, v3881, ctc1, v3908);
      const v3912 = undefined /* Remote */;
      const v3913 = await txn1.getOutput('internal', 'v3912', ctc14, v3912);
      const v3915 = v3913[stdlib.checkedBigNumberify('./index.rsh:134:33:application', stdlib.UInt_max, '0')];
      const v3916 = v3913[stdlib.checkedBigNumberify('./index.rsh:134:33:application', stdlib.UInt_max, '1')];
      const v3921 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3915);
      stdlib.assert(v3921, {
        at: './index.rsh:134:33:application',
        fs: ['at ./index.rsh:127:13:application call to [unknown function] (defined at: ./index.rsh:127:13:function exp)'],
        msg: 'remote bill check',
        who: 'U1_transferFrom'
        });
      stdlib.assert(v3916, {
        at: './index.rsh:133:18:application',
        fs: ['at ./index.rsh:127:13:application call to [unknown function] (defined at: ./index.rsh:127:13:function exp)'],
        msg: 'Child app rejected transferFrom',
        who: 'U1_transferFrom'
        });
      const v3922 = true;
      const v3923 = await txn1.getOutput('U1_transferFrom', 'v3922', ctc13, v3922);
      if (v1376) {
        stdlib.protect(ctc0, await interact.out(v3631, v3923), {
          at: './index.rsh:117:11:application',
          fs: ['at ./index.rsh:117:11:application call to [unknown function] (defined at: ./index.rsh:117:11:function exp)', 'at ./index.rsh:137:12:application call to "k" (defined at: ./index.rsh:127:13:function exp)', 'at ./index.rsh:127:13:application call to [unknown function] (defined at: ./index.rsh:127:13:function exp)'],
          msg: 'out',
          who: 'U1_transferFrom'
          });
        }
      else {
        }
      
      const v13951 = v2043;
      return;
      
      break;
      }
    case 'U2_deposit0_135': {
      const v4071 = v2308[1];
      return;
      break;
      }
    case 'U2_withdraw0_135': {
      const v4511 = v2308[1];
      return;
      break;
      }
    case 'U3_transferFrom0_135': {
      const v4951 = v2308[1];
      return;
      break;
      }
    }
  
  
  };
export async function _U2_deposit4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _U2_deposit4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _U2_deposit4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Object({
    constructor: ctc6,
    manager: ctc6,
    token: ctc4,
    tokenAmount: ctc1
    });
  const ctc8 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc6]);
  const ctc10 = stdlib.T_Tuple([ctc6, ctc6, ctc1]);
  const ctc11 = stdlib.T_Data({
    C_grant0_135: ctc9,
    U1_approve0_135: ctc8,
    U1_transfer0_135: ctc8,
    U1_transferFrom0_135: ctc10,
    U2_deposit0_135: ctc8,
    U2_withdraw0_135: ctc8,
    U3_transferFrom0_135: ctc10
    });
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Tuple([ctc1, ctc12]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2011, v2012, v2023, v2043] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc4, ctc5, ctc7]);
  const v2198 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:193:37:application call to [unknown function] (defined at: ./index.rsh:193:37:function exp)', 'at ./index.rsh:81:29:application call to "runU2_deposit0_135" (defined at: ./index.rsh:193:10:function exp)', 'at ./index.rsh:81:29:application call to [unknown function] (defined at: ./index.rsh:81:29:function exp)'],
    msg: 'in',
    who: 'U2_deposit'
    });
  const v2200 = v2198[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2210 = ['U2_deposit0_135', v2198];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2011, v2012, v2023, v2043, v2210],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:195:10:decimal', stdlib.UInt_max, '0'), [[v2200, v2012]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2308], secs: v2310, time: v2309, didSend: v1376, from: v2307 } = txn1;
      
      switch (v2308[0]) {
        case 'C_grant0_135': {
          const v2311 = v2308[1];
          
          break;
          }
        case 'U1_approve0_135': {
          const v2751 = v2308[1];
          
          break;
          }
        case 'U1_transfer0_135': {
          const v3191 = v2308[1];
          
          break;
          }
        case 'U1_transferFrom0_135': {
          const v3631 = v2308[1];
          
          break;
          }
        case 'U2_deposit0_135': {
          const v4071 = v2308[1];
          sim_r.txns.push({
            kind: 'api',
            who: "U2_deposit"
            });
          const v4097 = v4071[stdlib.checkedBigNumberify('./index.rsh:193:10:spread', stdlib.UInt_max, '1')];
          ;
          sim_r.txns.push({
            amt: v4097,
            kind: 'to',
            tok: v2012
            });
          const v4373 = v4071[stdlib.checkedBigNumberify('./index.rsh:193:10:spread', stdlib.UInt_max, '0')];
          const v4377 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v4373, ctc1), null);
          const v4378 = stdlib.fromSome(v4377, stdlib.checkedBigNumberify('./index.rsh:197:47:decimal', stdlib.UInt_max, '0'));
          const v4379 = stdlib.safeAdd(v4378, v4097);
          await stdlib.simMapSet(sim_r, 0, ctc6, v4373, ctc1, v4379);
          const v4383 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v2011,
              remote: ({
                accs: [v2307, v4373],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:199:28:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:199:28:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v4383', ctc13, v4383);
          const v4393 = true;
          const v4394 = await txn1.getOutput('U2_deposit', 'v4393', ctc12, v4393);
          
          const v4401 = v2043.constructor;
          const v4402 = v2043.manager;
          const v4403 = v2043.token;
          const v4404 = v2043.tokenAmount;
          const v4406 = stdlib.safeAdd(v4404, v4097);
          const v4407 = {
            constructor: v4401,
            manager: v4402,
            token: v4403,
            tokenAmount: v4406
            };
          const v13973 = v4407;
          sim_r.isHalt = false;
          
          break;
          }
        case 'U2_withdraw0_135': {
          const v4511 = v2308[1];
          
          break;
          }
        case 'U3_transferFrom0_135': {
          const v4951 = v2308[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc5, ctc7, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v2308], secs: v2310, time: v2309, didSend: v1376, from: v2307 } = txn1;
  switch (v2308[0]) {
    case 'C_grant0_135': {
      const v2311 = v2308[1];
      return;
      break;
      }
    case 'U1_approve0_135': {
      const v2751 = v2308[1];
      return;
      break;
      }
    case 'U1_transfer0_135': {
      const v3191 = v2308[1];
      return;
      break;
      }
    case 'U1_transferFrom0_135': {
      const v3631 = v2308[1];
      return;
      break;
      }
    case 'U2_deposit0_135': {
      const v4071 = v2308[1];
      undefined /* setApiDetails */;
      const v4097 = v4071[stdlib.checkedBigNumberify('./index.rsh:193:10:spread', stdlib.UInt_max, '1')];
      ;
      ;
      const v4373 = v4071[stdlib.checkedBigNumberify('./index.rsh:193:10:spread', stdlib.UInt_max, '0')];
      const v4377 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v4373, ctc1), null);
      const v4378 = stdlib.fromSome(v4377, stdlib.checkedBigNumberify('./index.rsh:197:47:decimal', stdlib.UInt_max, '0'));
      const v4379 = stdlib.safeAdd(v4378, v4097);
      await stdlib.mapSet(map0, ctc6, v4373, ctc1, v4379);
      const v4383 = undefined /* Remote */;
      const v4384 = await txn1.getOutput('internal', 'v4383', ctc13, v4383);
      const v4386 = v4384[stdlib.checkedBigNumberify('./index.rsh:199:28:application', stdlib.UInt_max, '0')];
      const v4387 = v4384[stdlib.checkedBigNumberify('./index.rsh:199:28:application', stdlib.UInt_max, '1')];
      const v4392 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4386);
      stdlib.assert(v4392, {
        at: './index.rsh:199:28:application',
        fs: ['at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:13:function exp)'],
        msg: 'remote bill check',
        who: 'U2_deposit'
        });
      stdlib.assert(v4387, {
        at: './index.rsh:198:18:application',
        fs: ['at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:13:function exp)'],
        msg: 'Child app rejected send',
        who: 'U2_deposit'
        });
      const v4393 = true;
      const v4394 = await txn1.getOutput('U2_deposit', 'v4393', ctc12, v4393);
      if (v1376) {
        stdlib.protect(ctc0, await interact.out(v4071, v4394), {
          at: './index.rsh:193:11:application',
          fs: ['at ./index.rsh:193:11:application call to [unknown function] (defined at: ./index.rsh:193:11:function exp)', 'at ./index.rsh:202:12:application call to "k" (defined at: ./index.rsh:196:13:function exp)', 'at ./index.rsh:196:13:application call to [unknown function] (defined at: ./index.rsh:196:13:function exp)'],
          msg: 'out',
          who: 'U2_deposit'
          });
        }
      else {
        }
      
      const v4401 = v2043.constructor;
      const v4402 = v2043.manager;
      const v4403 = v2043.token;
      const v4404 = v2043.tokenAmount;
      const v4406 = stdlib.safeAdd(v4404, v4097);
      const v4407 = {
        constructor: v4401,
        manager: v4402,
        token: v4403,
        tokenAmount: v4406
        };
      const v13973 = v4407;
      return;
      
      break;
      }
    case 'U2_withdraw0_135': {
      const v4511 = v2308[1];
      return;
      break;
      }
    case 'U3_transferFrom0_135': {
      const v4951 = v2308[1];
      return;
      break;
      }
    }
  
  
  };
export async function _U2_withdraw4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _U2_withdraw4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _U2_withdraw4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Object({
    constructor: ctc6,
    manager: ctc6,
    token: ctc4,
    tokenAmount: ctc1
    });
  const ctc8 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc6]);
  const ctc10 = stdlib.T_Tuple([ctc6, ctc6, ctc1]);
  const ctc11 = stdlib.T_Data({
    C_grant0_135: ctc9,
    U1_approve0_135: ctc8,
    U1_transfer0_135: ctc8,
    U1_transferFrom0_135: ctc10,
    U2_deposit0_135: ctc8,
    U2_withdraw0_135: ctc8,
    U3_transferFrom0_135: ctc10
    });
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Tuple([ctc1, ctc12]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2011, v2012, v2023, v2043] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc4, ctc5, ctc7]);
  const v2212 = ctc.selfAddress();
  const v2214 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:216:38:application call to [unknown function] (defined at: ./index.rsh:216:38:function exp)', 'at ./index.rsh:81:29:application call to "runU2_withdraw0_135" (defined at: ./index.rsh:216:10:function exp)', 'at ./index.rsh:81:29:application call to [unknown function] (defined at: ./index.rsh:81:29:function exp)'],
    msg: 'in',
    who: 'U2_withdraw'
    });
  const v2216 = v2214[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2219 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2212, ctc1), null);
  const v2220 = stdlib.fromSome(v2219, stdlib.checkedBigNumberify('./index.rsh:217:42:decimal', stdlib.UInt_max, '0'));
  const v2221 = stdlib.le(v2216, v2220);
  stdlib.assert(v2221, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:217:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:216:38:application call to [unknown function] (defined at: ./index.rsh:216:38:function exp)', 'at ./index.rsh:81:29:application call to "runU2_withdraw0_135" (defined at: ./index.rsh:216:10:function exp)', 'at ./index.rsh:81:29:application call to [unknown function] (defined at: ./index.rsh:81:29:function exp)'],
    msg: 'Insufficient funds',
    who: 'U2_withdraw'
    });
  const v2230 = ['U2_withdraw0_135', v2214];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2011, v2012, v2023, v2043, v2230],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:216:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:89:14:decimal', stdlib.UInt_max, '0'), v2012]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2308], secs: v2310, time: v2309, didSend: v1376, from: v2307 } = txn1;
      
      switch (v2308[0]) {
        case 'C_grant0_135': {
          const v2311 = v2308[1];
          
          break;
          }
        case 'U1_approve0_135': {
          const v2751 = v2308[1];
          
          break;
          }
        case 'U1_transfer0_135': {
          const v3191 = v2308[1];
          
          break;
          }
        case 'U1_transferFrom0_135': {
          const v3631 = v2308[1];
          
          break;
          }
        case 'U2_deposit0_135': {
          const v4071 = v2308[1];
          
          break;
          }
        case 'U2_withdraw0_135': {
          const v4511 = v2308[1];
          sim_r.txns.push({
            kind: 'api',
            who: "U2_withdraw"
            });
          ;
          ;
          const v4851 = v4511[stdlib.checkedBigNumberify('./index.rsh:216:10:spread', stdlib.UInt_max, '0')];
          const v4852 = v4511[stdlib.checkedBigNumberify('./index.rsh:216:10:spread', stdlib.UInt_max, '1')];
          const v4853 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v2307, ctc1), null);
          const v4854 = stdlib.fromSome(v4853, stdlib.checkedBigNumberify('./index.rsh:217:42:decimal', stdlib.UInt_max, '0'));
          sim_r.txns.push({
            kind: 'from',
            to: v4851,
            tok: v2012
            });
          const v4870 = stdlib.safeSub(v4854, v4852);
          await stdlib.simMapSet(sim_r, 0, ctc6, v2307, ctc1, v4870);
          const v4874 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v2011,
              remote: ({
                accs: [v2307, v4851],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:223:29:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:223:29:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v4874', ctc13, v4874);
          const v4884 = true;
          const v4885 = await txn1.getOutput('U2_withdraw', 'v4884', ctc12, v4884);
          
          const v4892 = v2043.constructor;
          const v4893 = v2043.manager;
          const v4894 = v2043.token;
          const v4895 = v2043.tokenAmount;
          const v4897 = stdlib.safeSub(v4895, v4852);
          const v4898 = {
            constructor: v4892,
            manager: v4893,
            token: v4894,
            tokenAmount: v4897
            };
          const v13995 = v4898;
          sim_r.isHalt = false;
          
          break;
          }
        case 'U3_transferFrom0_135': {
          const v4951 = v2308[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc5, ctc7, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v2308], secs: v2310, time: v2309, didSend: v1376, from: v2307 } = txn1;
  switch (v2308[0]) {
    case 'C_grant0_135': {
      const v2311 = v2308[1];
      return;
      break;
      }
    case 'U1_approve0_135': {
      const v2751 = v2308[1];
      return;
      break;
      }
    case 'U1_transfer0_135': {
      const v3191 = v2308[1];
      return;
      break;
      }
    case 'U1_transferFrom0_135': {
      const v3631 = v2308[1];
      return;
      break;
      }
    case 'U2_deposit0_135': {
      const v4071 = v2308[1];
      return;
      break;
      }
    case 'U2_withdraw0_135': {
      const v4511 = v2308[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v4851 = v4511[stdlib.checkedBigNumberify('./index.rsh:216:10:spread', stdlib.UInt_max, '0')];
      const v4852 = v4511[stdlib.checkedBigNumberify('./index.rsh:216:10:spread', stdlib.UInt_max, '1')];
      const v4853 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2307, ctc1), null);
      const v4854 = stdlib.fromSome(v4853, stdlib.checkedBigNumberify('./index.rsh:217:42:decimal', stdlib.UInt_max, '0'));
      const v4855 = stdlib.le(v4852, v4854);
      stdlib.assert(v4855, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:217:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:219:13:application call to [unknown function] (defined at: ./index.rsh:219:13:function exp)'],
        msg: 'Insufficient funds',
        who: 'U2_withdraw'
        });
      ;
      const v4870 = stdlib.safeSub(v4854, v4852);
      await stdlib.mapSet(map0, ctc6, v2307, ctc1, v4870);
      const v4874 = undefined /* Remote */;
      const v4875 = await txn1.getOutput('internal', 'v4874', ctc13, v4874);
      const v4877 = v4875[stdlib.checkedBigNumberify('./index.rsh:223:29:application', stdlib.UInt_max, '0')];
      const v4878 = v4875[stdlib.checkedBigNumberify('./index.rsh:223:29:application', stdlib.UInt_max, '1')];
      const v4883 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4877);
      stdlib.assert(v4883, {
        at: './index.rsh:223:29:application',
        fs: ['at ./index.rsh:219:13:application call to [unknown function] (defined at: ./index.rsh:219:13:function exp)'],
        msg: 'remote bill check',
        who: 'U2_withdraw'
        });
      stdlib.assert(v4878, {
        at: './index.rsh:222:18:application',
        fs: ['at ./index.rsh:219:13:application call to [unknown function] (defined at: ./index.rsh:219:13:function exp)'],
        msg: 'Child app rejected withdraw',
        who: 'U2_withdraw'
        });
      const v4884 = true;
      const v4885 = await txn1.getOutput('U2_withdraw', 'v4884', ctc12, v4884);
      if (v1376) {
        stdlib.protect(ctc0, await interact.out(v4511, v4885), {
          at: './index.rsh:216:11:application',
          fs: ['at ./index.rsh:216:11:application call to [unknown function] (defined at: ./index.rsh:216:11:function exp)', 'at ./index.rsh:226:12:application call to "k" (defined at: ./index.rsh:219:13:function exp)', 'at ./index.rsh:219:13:application call to [unknown function] (defined at: ./index.rsh:219:13:function exp)'],
          msg: 'out',
          who: 'U2_withdraw'
          });
        }
      else {
        }
      
      const v4892 = v2043.constructor;
      const v4893 = v2043.manager;
      const v4894 = v2043.token;
      const v4895 = v2043.tokenAmount;
      const v4897 = stdlib.safeSub(v4895, v4852);
      const v4898 = {
        constructor: v4892,
        manager: v4893,
        token: v4894,
        tokenAmount: v4897
        };
      const v13995 = v4898;
      return;
      
      break;
      }
    case 'U3_transferFrom0_135': {
      const v4951 = v2308[1];
      return;
      break;
      }
    }
  
  
  };
export async function _U3_transferFrom4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _U3_transferFrom4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _U3_transferFrom4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Object({
    constructor: ctc6,
    manager: ctc6,
    token: ctc4,
    tokenAmount: ctc1
    });
  const ctc8 = stdlib.T_Tuple([ctc6, ctc6, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc10 = stdlib.T_Tuple([ctc6]);
  const ctc11 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc12 = stdlib.T_Data({
    C_grant0_135: ctc10,
    U1_approve0_135: ctc11,
    U1_transfer0_135: ctc11,
    U1_transferFrom0_135: ctc8,
    U2_deposit0_135: ctc11,
    U2_withdraw0_135: ctc11,
    U3_transferFrom0_135: ctc8
    });
  const ctc13 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2011, v2012, v2023, v2043] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc4, ctc5, ctc7]);
  const v2138 = ctc.selfAddress();
  const v2140 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:147:56:application call to [unknown function] (defined at: ./index.rsh:147:56:function exp)', 'at ./index.rsh:81:29:application call to "runU3_transferFrom0_135" (defined at: ./index.rsh:147:10:function exp)', 'at ./index.rsh:81:29:application call to [unknown function] (defined at: ./index.rsh:81:29:function exp)'],
    msg: 'in',
    who: 'U3_transferFrom'
    });
  const v2141 = v2140[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2142 = v2140[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2143 = v2140[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2147 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2141, ctc1), null);
  const v2148 = {
    None: 0,
    Some: 1
    }[v2147[0]];
  const v2149 = stdlib.eq(v2148, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2149, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:148:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:56:application call to [unknown function] (defined at: ./index.rsh:147:56:function exp)', 'at ./index.rsh:81:29:application call to "runU3_transferFrom0_135" (defined at: ./index.rsh:147:10:function exp)', 'at ./index.rsh:81:29:application call to [unknown function] (defined at: ./index.rsh:81:29:function exp)'],
    msg: 'Sender has no balance',
    who: 'U3_transferFrom'
    });
  const v2151 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2142, ctc1), null);
  const v2152 = {
    None: 0,
    Some: 1
    }[v2151[0]];
  const v2153 = stdlib.eq(v2152, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2153, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:149:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:56:application call to [unknown function] (defined at: ./index.rsh:147:56:function exp)', 'at ./index.rsh:81:29:application call to "runU3_transferFrom0_135" (defined at: ./index.rsh:147:10:function exp)', 'at ./index.rsh:81:29:application call to [unknown function] (defined at: ./index.rsh:81:29:function exp)'],
    msg: 'Recipient has no balance',
    who: 'U3_transferFrom'
    });
  const v2155 = [v2141, v2138];
  const v2156 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc9, v2155, ctc1), null);
  const v2157 = {
    None: 0,
    Some: 1
    }[v2156[0]];
  const v2158 = stdlib.eq(v2157, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2158, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:150:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:56:application call to [unknown function] (defined at: ./index.rsh:147:56:function exp)', 'at ./index.rsh:81:29:application call to "runU3_transferFrom0_135" (defined at: ./index.rsh:147:10:function exp)', 'at ./index.rsh:81:29:application call to [unknown function] (defined at: ./index.rsh:81:29:function exp)'],
    msg: 'No allowance',
    who: 'U3_transferFrom'
    });
  const v2162 = stdlib.fromSome(v2156, stdlib.checkedBigNumberify('./index.rsh:152:52:decimal', stdlib.UInt_max, '0'));
  const v2163 = stdlib.le(v2143, v2162);
  stdlib.assert(v2163, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:151:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:56:application call to [unknown function] (defined at: ./index.rsh:147:56:function exp)', 'at ./index.rsh:81:29:application call to "runU3_transferFrom0_135" (defined at: ./index.rsh:147:10:function exp)', 'at ./index.rsh:81:29:application call to [unknown function] (defined at: ./index.rsh:81:29:function exp)'],
    msg: 'Insufficient allowance',
    who: 'U3_transferFrom'
    });
  const v2166 = stdlib.fromSome(v2147, stdlib.checkedBigNumberify('./index.rsh:155:47:decimal', stdlib.UInt_max, '0'));
  const v2167 = stdlib.le(v2143, v2166);
  stdlib.assert(v2167, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:56:application call to [unknown function] (defined at: ./index.rsh:147:56:function exp)', 'at ./index.rsh:81:29:application call to "runU3_transferFrom0_135" (defined at: ./index.rsh:147:10:function exp)', 'at ./index.rsh:81:29:application call to [unknown function] (defined at: ./index.rsh:81:29:function exp)'],
    msg: 'Insufficient funds',
    who: 'U3_transferFrom'
    });
  const v2178 = ['U3_transferFrom0_135', v2140];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2011, v2012, v2023, v2043, v2178],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:147:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:89:14:decimal', stdlib.UInt_max, '0'), v2012]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2308], secs: v2310, time: v2309, didSend: v1376, from: v2307 } = txn1;
      
      switch (v2308[0]) {
        case 'C_grant0_135': {
          const v2311 = v2308[1];
          
          break;
          }
        case 'U1_approve0_135': {
          const v2751 = v2308[1];
          
          break;
          }
        case 'U1_transfer0_135': {
          const v3191 = v2308[1];
          
          break;
          }
        case 'U1_transferFrom0_135': {
          const v3631 = v2308[1];
          
          break;
          }
        case 'U2_deposit0_135': {
          const v4071 = v2308[1];
          
          break;
          }
        case 'U2_withdraw0_135': {
          const v4511 = v2308[1];
          
          break;
          }
        case 'U3_transferFrom0_135': {
          const v4951 = v2308[1];
          sim_r.txns.push({
            kind: 'api',
            who: "U3_transferFrom"
            });
          ;
          ;
          const v5342 = v4951[stdlib.checkedBigNumberify('./index.rsh:147:10:spread', stdlib.UInt_max, '0')];
          const v5343 = v4951[stdlib.checkedBigNumberify('./index.rsh:147:10:spread', stdlib.UInt_max, '1')];
          const v5344 = v4951[stdlib.checkedBigNumberify('./index.rsh:147:10:spread', stdlib.UInt_max, '2')];
          const v5345 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v5342, ctc1), null);
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v5343, ctc1), null);
          const v5353 = [v5342, v2307];
          const v5354 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc9, v5353, ctc1), null);
          const v5360 = stdlib.fromSome(v5354, stdlib.checkedBigNumberify('./index.rsh:152:52:decimal', stdlib.UInt_max, '0'));
          const v5364 = stdlib.fromSome(v5345, stdlib.checkedBigNumberify('./index.rsh:155:47:decimal', stdlib.UInt_max, '0'));
          const v5372 = stdlib.safeSub(v5364, v5344);
          await stdlib.simMapSet(sim_r, 0, ctc6, v5342, ctc1, v5372);
          const v5373 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v5343, ctc1), null);
          const v5374 = stdlib.fromSome(v5373, stdlib.checkedBigNumberify('./index.rsh:160:53:decimal', stdlib.UInt_max, '0'));
          const v5375 = stdlib.safeAdd(v5374, v5344);
          await stdlib.simMapSet(sim_r, 0, ctc6, v5343, ctc1, v5375);
          const v5380 = stdlib.safeSub(v5360, v5344);
          await stdlib.simMapSet(sim_r, 1, ctc9, v5353, ctc1, v5380);
          const v5381 = true;
          const v5382 = await txn1.getOutput('U3_transferFrom', 'v5381', ctc13, v5381);
          
          const v14017 = v2043;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc5, ctc7, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v2308], secs: v2310, time: v2309, didSend: v1376, from: v2307 } = txn1;
  switch (v2308[0]) {
    case 'C_grant0_135': {
      const v2311 = v2308[1];
      return;
      break;
      }
    case 'U1_approve0_135': {
      const v2751 = v2308[1];
      return;
      break;
      }
    case 'U1_transfer0_135': {
      const v3191 = v2308[1];
      return;
      break;
      }
    case 'U1_transferFrom0_135': {
      const v3631 = v2308[1];
      return;
      break;
      }
    case 'U2_deposit0_135': {
      const v4071 = v2308[1];
      return;
      break;
      }
    case 'U2_withdraw0_135': {
      const v4511 = v2308[1];
      return;
      break;
      }
    case 'U3_transferFrom0_135': {
      const v4951 = v2308[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v5342 = v4951[stdlib.checkedBigNumberify('./index.rsh:147:10:spread', stdlib.UInt_max, '0')];
      const v5343 = v4951[stdlib.checkedBigNumberify('./index.rsh:147:10:spread', stdlib.UInt_max, '1')];
      const v5344 = v4951[stdlib.checkedBigNumberify('./index.rsh:147:10:spread', stdlib.UInt_max, '2')];
      const v5345 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v5342, ctc1), null);
      const v5346 = {
        None: 0,
        Some: 1
        }[v5345[0]];
      const v5347 = stdlib.eq(v5346, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v5347, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:148:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:157:13:application call to [unknown function] (defined at: ./index.rsh:157:13:function exp)'],
        msg: 'Sender has no balance',
        who: 'U3_transferFrom'
        });
      const v5349 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v5343, ctc1), null);
      const v5350 = {
        None: 0,
        Some: 1
        }[v5349[0]];
      const v5351 = stdlib.eq(v5350, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v5351, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:149:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:157:13:application call to [unknown function] (defined at: ./index.rsh:157:13:function exp)'],
        msg: 'Recipient has no balance',
        who: 'U3_transferFrom'
        });
      const v5353 = [v5342, v2307];
      const v5354 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc9, v5353, ctc1), null);
      const v5355 = {
        None: 0,
        Some: 1
        }[v5354[0]];
      const v5356 = stdlib.eq(v5355, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v5356, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:150:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:157:13:application call to [unknown function] (defined at: ./index.rsh:157:13:function exp)'],
        msg: 'No allowance',
        who: 'U3_transferFrom'
        });
      const v5360 = stdlib.fromSome(v5354, stdlib.checkedBigNumberify('./index.rsh:152:52:decimal', stdlib.UInt_max, '0'));
      const v5361 = stdlib.le(v5344, v5360);
      stdlib.assert(v5361, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:151:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:157:13:application call to [unknown function] (defined at: ./index.rsh:157:13:function exp)'],
        msg: 'Insufficient allowance',
        who: 'U3_transferFrom'
        });
      const v5364 = stdlib.fromSome(v5345, stdlib.checkedBigNumberify('./index.rsh:155:47:decimal', stdlib.UInt_max, '0'));
      const v5365 = stdlib.le(v5344, v5364);
      stdlib.assert(v5365, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:157:13:application call to [unknown function] (defined at: ./index.rsh:157:13:function exp)'],
        msg: 'Insufficient funds',
        who: 'U3_transferFrom'
        });
      const v5372 = stdlib.safeSub(v5364, v5344);
      await stdlib.mapSet(map0, ctc6, v5342, ctc1, v5372);
      const v5373 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v5343, ctc1), null);
      const v5374 = stdlib.fromSome(v5373, stdlib.checkedBigNumberify('./index.rsh:160:53:decimal', stdlib.UInt_max, '0'));
      const v5375 = stdlib.safeAdd(v5374, v5344);
      await stdlib.mapSet(map0, ctc6, v5343, ctc1, v5375);
      const v5380 = stdlib.safeSub(v5360, v5344);
      await stdlib.mapSet(map1, ctc9, v5353, ctc1, v5380);
      const v5381 = true;
      const v5382 = await txn1.getOutput('U3_transferFrom', 'v5381', ctc13, v5381);
      if (v1376) {
        stdlib.protect(ctc0, await interact.out(v4951, v5382), {
          at: './index.rsh:147:11:application',
          fs: ['at ./index.rsh:147:11:application call to [unknown function] (defined at: ./index.rsh:147:11:function exp)', 'at ./index.rsh:163:12:application call to "k" (defined at: ./index.rsh:157:13:function exp)', 'at ./index.rsh:157:13:application call to [unknown function] (defined at: ./index.rsh:157:13:function exp)'],
          msg: 'out',
          who: 'U3_transferFrom'
          });
        }
      else {
        }
      
      const v14017 = v2043;
      return;
      
      break;
      }
    }
  
  
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
export async function U1_approve(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for U1_approve expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for U1_approve expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _U1_approve4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function U1_transfer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for U1_transfer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for U1_transfer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _U1_transfer4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function U1_transferFrom(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for U1_transferFrom expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for U1_transferFrom expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _U1_transferFrom4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function U2_deposit(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for U2_deposit expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for U2_deposit expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _U2_deposit4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function U2_withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for U2_withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for U2_withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _U2_withdraw4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function U3_transferFrom(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for U3_transferFrom expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for U3_transferFrom expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _U3_transferFrom4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`C_grant(address)byte`, `U1_approve(address,uint64)byte`, `U1_transfer(address,uint64)byte`, `U1_transferFrom(address,address,uint64)byte`, `U2_deposit(address,uint64)byte`, `U2_withdraw(address,uint64)byte`, `U3_transferFrom(address,address,uint64)byte`, `_reachp_0((uint64))void`, `_reachp_1((uint64,uint64,uint64))void`, `_reachp_3((uint64,(byte,byte[72])))void`],
    pure: [`allowance(address,address)uint64`, `balanceOf(address)uint64`, `state()(address,address,uint64,uint64)`, `totalSupply()uint64`],
    sigs: [`C_grant(address)byte`, `U1_approve(address,uint64)byte`, `U1_transfer(address,uint64)byte`, `U1_transferFrom(address,address,uint64)byte`, `U2_deposit(address,uint64)byte`, `U2_withdraw(address,uint64)byte`, `U3_transferFrom(address,address,uint64)byte`, `_reachp_0((uint64))void`, `_reachp_1((uint64,uint64,uint64))void`, `_reachp_3((uint64,(byte,byte[72])))void`, `allowance(address,address)uint64`, `balanceOf(address)uint64`, `state()(address,address,uint64,uint64)`, `totalSupply()uint64`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAMAAgB1JMBBgTEkAEgQEhgoI0GJgUAAQAFYXBwSUQIAAAAAAAAAAEE7pexmTEYQQoPKGRJIls1ASNbNQIpZIIOBAxGj4AEFwUKvQQv+ZxOBEZ7x6QETe5BTARQyvb7BFcFSXoEWDefoQRwpwd5BIJGKwwEnm8OMQTBlK2ZBMK2HYME9LwkJDYaAI4OCYMJxgmOCbkAUwBzAJgA+ADYALgMTQlzAAEMUAA2GgE1CyOvKTQLUIEor1BQNQshBTQBEkSIDJ40CyJbNQw0C1cISTUNgASdwU5XNAwWUDQNULA0DIgMlzQNIlWNBwv6CX4JiAmSCZwJpgmwQv+tNhoBNhoCFzULNQwjr4ABATQMNAsWUFAyA1BQNQtC/6A2GgE2GgI2GgMXNQs1DDUNI6+AAQM0DTQMUDQLFlBQUDULQv97NhoBNhoCFzULNQwjr4ABAjQMNAsWUFAyA1BQNQtC/1s2GgE2GgIXNQs1DCOvgAEENAw0CxZQUDIDUFA1C0L/OzYaATYaAhc1CzUMI6+AAQU0DDQLFlBQMgNQUDULQv8bNhoBNhoCNhoDFzULNQw1DSOvgAEGNA00DFA0CxZQUFA1C0L+9jQNVwEgNQsxADQPVyAgEkQqNBIWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEhBLIQNBKyGIAEHgIVW7IaNBIWsho0ERayGjQLSbIcshqzMgpgNAkJNAoXCRa3AD5XBABQNQ2ACAAAAAAAAAlKNA1QsDQNNQwiNAwiWxJENAxXCAEXRCQ1DIAIAAAAAAAACVQ0DBZRBwhQsDQMFlEHCDUENA9XACA0C1A0D1dACFA0D1dICFAyBjUONQ80EhY0ERZQNBBQNA9QIQUyBjUCNQEpTFcAYGcoNAEWNAIWUGcxGSISRIgK5jQDQAAKgAQVH3x1NARQsCRDNAtXACA1DTQLIQdbNQwoI68pMQBQiApuIlVAB9slKTEAUCOviApqKCOvKTQNUIgKVSJVQAiIJSk0DVAjr4gKUSEGKzEANA1QUAE0DBaICkEqNBIWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEhBLIQNBKyGCcEsho0EhayGjQRFrIaMQBJshyyGjQNSbIcsho0DBayGrMyCmA0CQk0ChcJFrcAPlcEAFA1C4AIAAAAAAAACyk0C1CwNAs1DCI0DCJbEkQ0DFcIARdEJDULgAgAAAAAAAALMzQLFlEHCFCwNAsWUQcINQQyBjUOQv7WNAtXACA1DTQLIQdbNQwoI68pMQBQiAmBSTUTIlUkEkQjrzQTiAmLFzULNAw0Cw5EJSkxAFA0CzQMCRaICWYlKTQNUCOvKCOvKTQNUIgJSogJYBc0DAgWiAlKKjQSFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBIQSyEDQSshiABA6+77qyGjQSFrIaNBEWshoxAEmyHLIaNA1JshyyGjQMFrIaszIKYDQJCTQKFwkWtwA+VwQAUDULgAgAAAAAAAANUjQLULA0CzUMIjQMIlsSRDQMVwgBF0QkNQuACAAAAAAAAA1cNAsWUQcIULA0CxZRBwg1BDIGNQ5C/ds0C1cAIDUTNAtXICA1DTQLIQhbNQwoI68pNBNQiAh/STUWIlUkEkQoI68pNA1QiAhtIlUkEkQ0EzEAUDUVKCOvKzQVUAGICFZJNQsiVSQSRCOvNAuICGAXNRQ0DDQUDkQjrzQWiAhQFzULNAw0Cw5EJSk0E1A0CzQMCRaICCslKTQNUCOvKCOvKTQNUIgID4gIJRc0DAgWiAgPIQYrNBVQATQUNAwJFogH/yo0EhZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEEshA0ErIYgAQiI8f5sho0EhayGjQRFrIaNBNJshyyGjQNSbIcsho0DBayGrMyCmA0CQk0ChcJFrcAPlcEAFA1C4AIAAAAAAAAD0g0C1CwNAs1DCI0DCJbEkQ0DFcIARdEJDULgAgAAAAAAAAPUjQLFlEHCFCwNAsWUQcINQQyBjUOQvyQNAshB1tJNQ00ETEWNAAkCEk1AAlHAzgUMgoSRDgQIQUSRDgRTwISRDgSEkQ0C1cAIDUMJSk0DFAjrygjryk0DFCIBw+IByUXNA0IFogHDyo0EhZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEEshA0ErIYgAQgohohsho0EhayGjQRFrIaMQBJshyyGjQMSbIcsho0DRayGrMyCmA0CQk0ChcJFrcAPlcEAFA1C4AIAAAAAAAAER80C1CwNAs1DCI0DCJbEkQ0DFcIARdEJDULgAgAAAAAAAARKTQLFlEHCFCwNAsWUQcINQQ0D1cAIDQPVyAgUDQPV0AIUDQPIQlbNA0IFlAyBjUONQ9C+4M0C1cAIDUNNAshB1s1DCOvKCOvKTEAUIgGLIgGQhc1CzQMNAsORDQMNBE0DYgGYiUpMQBQNAs0DAkWiAYUKjQSFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBIQSyEDQSshiABEyqGpmyGjQSFrIaNBEWshoxAEmyHLIaNA1JshyyGjQMFrIaszIKYDQJCTQKFwkWtwA+VwQAUDULgAgAAAAAAAATCjQLULA0CzUNIjQNIlsSRDQNVwgBF0QkNQuACAAAAAAAABMUNAsWUQcIULA0CxZRBwg1BDQPVwAgNA9XICBQNA9XQAhQNA8hCVs0DAkWUDIGNQ41D0L6iDQLVwAgNRM0C1cgIDUNNAshCFs1DCgjryk0E1CIBSxJNRYiVSQSRCgjryk0DVCIBRoiVSQSRDQTMQBQNRUoI68rNBVQAYgFA0k1CyJVJBJEI680C4gFDRc1FDQMNBQORCOvNBaIBP0XNQs0DDQLDkQlKTQTUDQLNAwJFogE2CUpNA1QI68oI68pNA1QiAS8iATSFzQMCBaIBLwhBis0FVABNBQ0DAkWiASsJDULgAgAAAAAAAAVBTQLFlEHCFCwNAsWUQcINQQyBjUOQvm6NAEhBRJEiASWI68oI68rNAw0C1BQAYgEZIgEejUEMRkiEkRC+cU0ASEFEkSIBHAjrygjryk0C1CIBEKIBFg1BEL/2zQBIQUSRIgEUzQPVwAgNA9XICBQNA9XQAhQNA9XSAhQNQRC/7Y0ASEFEkSIBC40D1dICDUEQv+jNAsXNQyABILEYf40DBZQsDQMiAQoIQqvJDIGQvkyJDQBEkQ0CyJbNQw0CyNbNRI0C4EQWzURgATN+aSUNAwWUDQSFlA0ERZQsDQMiAPvIQuIA/QiNBEyCogD8ig1ECo0EhZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEEshA0ErIYgAS36GmUshoxGBayGjQRFrIaszIKYDQJCTQKFwkWtwA+VwQAUDUMgAgAAAAAAAAH6DQMULA0DDULIjQLIlsSRDQLVwgBF0QxADEAUDQRFlAjr1AyBjUONQ9C+GKIA1khC4gDYjYaATULQv8TiANJNhoBNQtC/yaIAz42GgE1C0L2eiIxNBJEgQIxNRJEIjE2EkQiMTcSRIgDHiEKryIiQvgtNhoBNhoCNQs1DEL+VTYaATULQv5zNA1XASg1C0L4OjQNVwEoNQtC+R00DVcBSDULQvoONA1XASg1C0L7TzQNVwEoNQtC/FI0DVcBSDULQv1DKCOvKTQNUIgChCJVQAFkJSk0DVAjr4gCgCEGKzEANA1QUAE0DBaIAnAqNBIWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEhBLIQNBKyGCcEsho0EhayGjQRFrIaMQBJshyyGjQNSbIcsho0DBayGrMyCmA0CQk0ChcJFrcAPlcEAFA1C4AIAAAAAAAAC1o0C1CwNAs1DCI0DCJbEkQ0DFcIARdEJDULgAgAAAAAAAALZDQLFlEHCFCwNAsWUQcINQQyBjUOQvcFIQYrMQA0DVBQATQMFogBwyo0EhZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEEshA0ErIYJwSyGjQSFrIaNBEWshoxAEmyHLIaNA1JshyyGjQMFrIaszIKYDQJCTQKFwkWtwA+VwQAUDULgAgAAAAAAAALQDQLULA0CzUMIjQMIlsSRDQMVwgBF0QkNQuACAAAAAAAAAtKNAsWUQcIULA0CxZRBwg1BDIGNQ5C9lghBisxADQNUFABNAwWiAEWKjQSFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBIQSyEDQSshgnBLIaNBIWsho0ERayGjEASbIcsho0DUmyHLIaNAwWshqzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAAAtxNAtQsDQLNQwiNAwiWxJENAxXCAEXRCQ1C4AIAAAAAAAAC3s0CxZRBwhQsDQLFlEHCDUEMgY1DkL1q0hMv0iJIrIBIQWyELIUshGyErOJIrIBJLIQsgeyCLOJQvTQQvwOQvwwSIlMCUk1BjIJiACUiQlJQf/uSTUGMRY0ACQISTUACUcCOAcyChJEOBAkEkQ4CBJEiTEZgQUSRIgAWiIyCjIJiABiQvVpvkkWUQcIRQRNUIlMSb1A/4FLA4gAL0L/eUlXAQBMIlVNiUkiWzUSSSNbNRFJSCg1EFcQUDUPiSQ1A4lJIhJMNAISEUSJNAYINQaJsUL/SDQGNAdKD0H/ZUL/bbFC/0exsglC/0E=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `18`,
    1000: `551`,
    1001: `551`,
    1002: `552`,
    1003: `553`,
    1004: `554`,
    1005: `555`,
    1006: `556`,
    1007: `557`,
    1008: `558`,
    1009: `559`,
    101: `18`,
    1010: `559`,
    1011: `560`,
    1012: `561`,
    1013: `561`,
    1014: `561`,
    1015: `562`,
    1016: `562`,
    1017: `562`,
    1018: `563`,
    1019: `564`,
    102: `18`,
    1020: `564`,
    1021: `565`,
    1022: `566`,
    1023: `567`,
    1024: `567`,
    1025: `567`,
    1026: `568`,
    1027: `569`,
    1028: `569`,
    1029: `570`,
    103: `18`,
    1030: `571`,
    1031: `572`,
    1032: `573`,
    1033: `573`,
    1034: `574`,
    1035: `574`,
    1036: `575`,
    1037: `576`,
    1038: `576`,
    1039: `577`,
    104: `18`,
    1040: `578`,
    1041: `578`,
    1042: `579`,
    1043: `580`,
    1044: `580`,
    1045: `581`,
    1046: `582`,
    1047: `583`,
    1048: `583`,
    1049: `584`,
    105: `18`,
    1050: `585`,
    1051: `586`,
    1052: `586`,
    1053: `587`,
    1054: `587`,
    1055: `588`,
    1056: `588`,
    1057: `589`,
    1058: `589`,
    1059: `591`,
    106: `18`,
    1060: `591`,
    1061: `592`,
    1062: `592`,
    1063: `592`,
    1064: `592`,
    1065: `592`,
    1066: `592`,
    1067: `593`,
    1068: `593`,
    1069: `594`,
    107: `18`,
    1070: `594`,
    1071: `595`,
    1072: `596`,
    1073: `596`,
    1074: `597`,
    1075: `597`,
    1076: `598`,
    1077: `599`,
    1078: `599`,
    1079: `600`,
    108: `18`,
    1080: `600`,
    1081: `601`,
    1082: `602`,
    1083: `602`,
    1084: `603`,
    1085: `603`,
    1086: `604`,
    1087: `604`,
    1088: `606`,
    1089: `607`,
    109: `18`,
    1090: `607`,
    1091: `608`,
    1092: `608`,
    1093: `609`,
    1094: `609`,
    1095: `610`,
    1096: `611`,
    1097: `611`,
    1098: `612`,
    1099: `616`,
    11: `2`,
    110: `18`,
    1100: `616`,
    1101: `617`,
    1102: `618`,
    1103: `618`,
    1104: `619`,
    1105: `620`,
    1106: `620`,
    1107: `621`,
    1108: `622`,
    1109: `623`,
    111: `18`,
    1110: `624`,
    1111: `624`,
    1112: `624`,
    1113: `625`,
    1114: `625`,
    1115: `625`,
    1116: `626`,
    1117: `627`,
    1118: `627`,
    1119: `628`,
    112: `18`,
    1120: `628`,
    1121: `628`,
    1122: `628`,
    1123: `628`,
    1124: `628`,
    1125: `628`,
    1126: `628`,
    1127: `628`,
    1128: `628`,
    1129: `629`,
    113: `18`,
    1130: `629`,
    1131: `630`,
    1132: `631`,
    1133: `632`,
    1134: `632`,
    1135: `633`,
    1136: `633`,
    1137: `634`,
    1138: `635`,
    1139: `635`,
    114: `18`,
    1140: `636`,
    1141: `637`,
    1142: `638`,
    1143: `639`,
    1144: `643`,
    1145: `643`,
    1146: `644`,
    1147: `644`,
    1148: `644`,
    1149: `645`,
    115: `18`,
    1150: `646`,
    1151: `650`,
    1152: `651`,
    1153: `651`,
    1154: `652`,
    1155: `652`,
    1156: `652`,
    1157: `652`,
    1158: `652`,
    1159: `652`,
    116: `18`,
    1160: `652`,
    1161: `652`,
    1162: `652`,
    1163: `652`,
    1164: `653`,
    1165: `653`,
    1166: `654`,
    1167: `655`,
    1168: `655`,
    1169: `655`,
    117: `18`,
    1170: `656`,
    1171: `657`,
    1172: `658`,
    1173: `658`,
    1174: `659`,
    1175: `660`,
    1176: `660`,
    1177: `660`,
    1178: `661`,
    1179: `661`,
    118: `18`,
    1180: `662`,
    1181: `662`,
    1182: `663`,
    1183: `663`,
    1184: `664`,
    1185: `664`,
    1186: `664`,
    1187: `666`,
    1188: `666`,
    1189: `667`,
    119: `18`,
    1190: `667`,
    1191: `667`,
    1192: `668`,
    1193: `668`,
    1194: `669`,
    1195: `669`,
    1196: `670`,
    1197: `670`,
    1198: `670`,
    1199: `671`,
    12: `2`,
    120: `18`,
    1200: `671`,
    1201: `672`,
    1202: `672`,
    1203: `673`,
    1204: `673`,
    1205: `674`,
    1206: `675`,
    1207: `675`,
    1208: `677`,
    1209: `678`,
    121: `18`,
    1210: `679`,
    1211: `680`,
    1212: `681`,
    1213: `681`,
    1214: `682`,
    1215: `683`,
    1216: `683`,
    1217: `683`,
    1218: `684`,
    1219: `685`,
    122: `18`,
    1220: `685`,
    1221: `686`,
    1222: `687`,
    1223: `688`,
    1224: `689`,
    1225: `690`,
    1226: `696`,
    1227: `697`,
    1228: `698`,
    1229: `699`,
    123: `18`,
    1230: `700`,
    1231: `700`,
    1232: `701`,
    1233: `702`,
    1234: `702`,
    1235: `702`,
    1236: `703`,
    1237: `704`,
    1238: `705`,
    1239: `706`,
    124: `18`,
    1240: `707`,
    1241: `712`,
    1242: `712`,
    1243: `713`,
    1244: `713`,
    1245: `714`,
    1246: `715`,
    1247: `715`,
    1248: `717`,
    1249: `718`,
    125: `18`,
    1250: `719`,
    1251: `720`,
    1252: `721`,
    1253: `721`,
    1254: `722`,
    1255: `723`,
    1256: `724`,
    1257: `724`,
    1258: `724`,
    1259: `725`,
    126: `18`,
    1260: `726`,
    1261: `726`,
    1262: `727`,
    1263: `728`,
    1264: `729`,
    1265: `730`,
    1266: `731`,
    1267: `736`,
    1268: `737`,
    1269: `738`,
    127: `18`,
    1270: `738`,
    1271: `739`,
    1272: `739`,
    1273: `739`,
    1274: `740`,
    1275: `741`,
    1276: `741`,
    1277: `742`,
    1278: `742`,
    1279: `743`,
    128: `18`,
    1280: `743`,
    1281: `744`,
    1282: `745`,
    1283: `750`,
    1284: `751`,
    1285: `752`,
    1286: `752`,
    1287: `753`,
    1288: `753`,
    1289: `753`,
    129: `18`,
    1290: `754`,
    1291: `755`,
    1292: `755`,
    1293: `756`,
    1294: `756`,
    1295: `757`,
    1296: `757`,
    1297: `758`,
    1298: `759`,
    1299: `764`,
    13: `2`,
    130: `18`,
    1300: `765`,
    1301: `766`,
    1302: `766`,
    1303: `767`,
    1304: `768`,
    1305: `768`,
    1306: `769`,
    1307: `769`,
    1308: `770`,
    1309: `771`,
    131: `18`,
    1310: `772`,
    1311: `772`,
    1312: `772`,
    1313: `773`,
    1314: `774`,
    1315: `775`,
    1316: `775`,
    1317: `776`,
    1318: `777`,
    1319: `778`,
    132: `18`,
    1320: `779`,
    1321: `780`,
    1322: `781`,
    1323: `782`,
    1324: `783`,
    1325: `783`,
    1326: `784`,
    1327: `785`,
    1328: `785`,
    1329: `785`,
    133: `18`,
    1330: `786`,
    1331: `786`,
    1332: `786`,
    1333: `787`,
    1334: `788`,
    1335: `788`,
    1336: `789`,
    1337: `790`,
    1338: `791`,
    1339: `791`,
    134: `18`,
    1340: `791`,
    1341: `792`,
    1342: `792`,
    1343: `793`,
    1344: `794`,
    1345: `794`,
    1346: `795`,
    1347: `796`,
    1348: `797`,
    1349: `797`,
    135: `18`,
    1350: `798`,
    1351: `798`,
    1352: `799`,
    1353: `800`,
    1354: `801`,
    1355: `801`,
    1356: `801`,
    1357: `802`,
    1358: `803`,
    1359: `803`,
    136: `19`,
    1360: `804`,
    1361: `805`,
    1362: `806`,
    1363: `807`,
    1364: `807`,
    1365: `808`,
    1366: `808`,
    1367: `809`,
    1368: `810`,
    1369: `810`,
    137: `19`,
    1370: `811`,
    1371: `812`,
    1372: `812`,
    1373: `813`,
    1374: `814`,
    1375: `814`,
    1376: `815`,
    1377: `816`,
    1378: `817`,
    1379: `817`,
    138: `19`,
    1380: `818`,
    1381: `819`,
    1382: `820`,
    1383: `820`,
    1384: `821`,
    1385: `821`,
    1386: `822`,
    1387: `822`,
    1388: `823`,
    1389: `823`,
    139: `20`,
    1390: `825`,
    1391: `825`,
    1392: `826`,
    1393: `826`,
    1394: `826`,
    1395: `826`,
    1396: `826`,
    1397: `826`,
    1398: `827`,
    1399: `827`,
    14: `2`,
    140: `20`,
    1400: `828`,
    1401: `828`,
    1402: `829`,
    1403: `830`,
    1404: `830`,
    1405: `831`,
    1406: `831`,
    1407: `832`,
    1408: `833`,
    1409: `833`,
    141: `20`,
    1410: `834`,
    1411: `834`,
    1412: `836`,
    1413: `837`,
    1414: `837`,
    1415: `838`,
    1416: `838`,
    1417: `839`,
    1418: `839`,
    1419: `841`,
    142: `20`,
    1420: `842`,
    1421: `842`,
    1422: `843`,
    1423: `843`,
    1424: `844`,
    1425: `844`,
    1426: `845`,
    1427: `846`,
    1428: `846`,
    1429: `847`,
    143: `20`,
    1430: `851`,
    1431: `851`,
    1432: `852`,
    1433: `853`,
    1434: `853`,
    1435: `854`,
    1436: `855`,
    1437: `855`,
    1438: `856`,
    1439: `857`,
    144: `20`,
    1440: `858`,
    1441: `859`,
    1442: `859`,
    1443: `859`,
    1444: `860`,
    1445: `860`,
    1446: `860`,
    1447: `861`,
    1448: `862`,
    1449: `862`,
    145: `20`,
    1450: `863`,
    1451: `863`,
    1452: `863`,
    1453: `863`,
    1454: `863`,
    1455: `863`,
    1456: `863`,
    1457: `863`,
    1458: `863`,
    1459: `863`,
    146: `20`,
    1460: `864`,
    1461: `864`,
    1462: `865`,
    1463: `866`,
    1464: `867`,
    1465: `867`,
    1466: `868`,
    1467: `868`,
    1468: `869`,
    1469: `870`,
    147: `20`,
    1470: `870`,
    1471: `871`,
    1472: `872`,
    1473: `873`,
    1474: `874`,
    1475: `878`,
    1476: `878`,
    1477: `879`,
    1478: `879`,
    1479: `879`,
    148: `20`,
    1480: `880`,
    1481: `881`,
    1482: `885`,
    1483: `886`,
    1484: `886`,
    1485: `887`,
    1486: `887`,
    1487: `887`,
    1488: `887`,
    1489: `887`,
    149: `20`,
    1490: `887`,
    1491: `887`,
    1492: `887`,
    1493: `887`,
    1494: `887`,
    1495: `888`,
    1496: `888`,
    1497: `889`,
    1498: `890`,
    1499: `890`,
    15: `2`,
    150: `20`,
    1500: `890`,
    1501: `891`,
    1502: `892`,
    1503: `893`,
    1504: `893`,
    1505: `894`,
    1506: `895`,
    1507: `895`,
    1508: `895`,
    1509: `896`,
    151: `20`,
    1510: `896`,
    1511: `897`,
    1512: `897`,
    1513: `898`,
    1514: `898`,
    1515: `899`,
    1516: `899`,
    1517: `899`,
    1518: `901`,
    1519: `901`,
    152: `20`,
    1520: `902`,
    1521: `902`,
    1522: `903`,
    1523: `904`,
    1524: `905`,
    1525: `905`,
    1526: `906`,
    1527: `906`,
    1528: `909`,
    1529: `909`,
    153: `20`,
    1530: `910`,
    1531: `910`,
    1532: `911`,
    1533: `912`,
    1534: `913`,
    1535: `914`,
    1536: `914`,
    1537: `915`,
    1538: `916`,
    1539: `916`,
    154: `20`,
    1540: `917`,
    1541: `917`,
    1542: `918`,
    1543: `918`,
    1544: `919`,
    1545: `920`,
    1546: `921`,
    1547: `921`,
    1548: `922`,
    1549: `922`,
    155: `20`,
    1550: `923`,
    1551: `924`,
    1552: `925`,
    1553: `925`,
    1554: `926`,
    1555: `926`,
    1556: `927`,
    1557: `928`,
    1558: `929`,
    1559: `929`,
    156: `20`,
    1560: `930`,
    1561: `931`,
    1562: `934`,
    1563: `934`,
    1564: `935`,
    1565: `935`,
    1566: `935`,
    1567: `936`,
    1568: `936`,
    1569: `938`,
    157: `20`,
    1570: `939`,
    1571: `940`,
    1572: `940`,
    1573: `941`,
    1574: `942`,
    1575: `943`,
    1576: `944`,
    1577: `945`,
    1578: `946`,
    1579: `947`,
    158: `20`,
    1580: `948`,
    1581: `948`,
    1582: `949`,
    1583: `950`,
    1584: `950`,
    1585: `950`,
    1586: `951`,
    1587: `951`,
    1588: `951`,
    1589: `952`,
    159: `20`,
    1590: `953`,
    1591: `953`,
    1592: `954`,
    1593: `955`,
    1594: `956`,
    1595: `956`,
    1596: `956`,
    1597: `957`,
    1598: `958`,
    1599: `958`,
    16: `2`,
    160: `20`,
    1600: `959`,
    1601: `960`,
    1602: `961`,
    1603: `962`,
    1604: `962`,
    1605: `963`,
    1606: `963`,
    1607: `964`,
    1608: `965`,
    1609: `965`,
    161: `20`,
    1610: `966`,
    1611: `967`,
    1612: `967`,
    1613: `968`,
    1614: `969`,
    1615: `969`,
    1616: `970`,
    1617: `971`,
    1618: `972`,
    1619: `972`,
    162: `20`,
    1620: `973`,
    1621: `974`,
    1622: `975`,
    1623: `975`,
    1624: `976`,
    1625: `976`,
    1626: `977`,
    1627: `977`,
    1628: `978`,
    1629: `978`,
    163: `20`,
    1630: `980`,
    1631: `980`,
    1632: `981`,
    1633: `981`,
    1634: `981`,
    1635: `981`,
    1636: `981`,
    1637: `981`,
    1638: `982`,
    1639: `982`,
    164: `20`,
    1640: `983`,
    1641: `983`,
    1642: `984`,
    1643: `985`,
    1644: `985`,
    1645: `986`,
    1646: `986`,
    1647: `987`,
    1648: `988`,
    1649: `988`,
    165: `20`,
    1650: `989`,
    1651: `989`,
    1652: `990`,
    1653: `991`,
    1654: `991`,
    1655: `992`,
    1656: `992`,
    1657: `993`,
    1658: `993`,
    1659: `995`,
    166: `20`,
    1660: `996`,
    1661: `996`,
    1662: `997`,
    1663: `997`,
    1664: `998`,
    1665: `998`,
    1666: `999`,
    1667: `1000`,
    1668: `1000`,
    1669: `1001`,
    167: `20`,
    1670: `1005`,
    1671: `1005`,
    1672: `1006`,
    1673: `1007`,
    1674: `1007`,
    1675: `1008`,
    1676: `1009`,
    1677: `1009`,
    1678: `1010`,
    1679: `1011`,
    168: `20`,
    1680: `1012`,
    1681: `1013`,
    1682: `1013`,
    1683: `1013`,
    1684: `1014`,
    1685: `1014`,
    1686: `1014`,
    1687: `1015`,
    1688: `1016`,
    1689: `1016`,
    169: `22`,
    1690: `1017`,
    1691: `1017`,
    1692: `1017`,
    1693: `1017`,
    1694: `1017`,
    1695: `1017`,
    1696: `1017`,
    1697: `1017`,
    1698: `1017`,
    1699: `1017`,
    17: `2`,
    170: `24`,
    1700: `1018`,
    1701: `1018`,
    1702: `1019`,
    1703: `1020`,
    1704: `1021`,
    1705: `1021`,
    1706: `1022`,
    1707: `1022`,
    1708: `1023`,
    1709: `1024`,
    171: `24`,
    1710: `1024`,
    1711: `1025`,
    1712: `1026`,
    1713: `1027`,
    1714: `1028`,
    1715: `1032`,
    1716: `1032`,
    1717: `1033`,
    1718: `1033`,
    1719: `1033`,
    172: `24`,
    1720: `1034`,
    1721: `1035`,
    1722: `1039`,
    1723: `1040`,
    1724: `1040`,
    1725: `1041`,
    1726: `1041`,
    1727: `1041`,
    1728: `1041`,
    1729: `1041`,
    173: `25`,
    1730: `1041`,
    1731: `1041`,
    1732: `1041`,
    1733: `1041`,
    1734: `1041`,
    1735: `1042`,
    1736: `1042`,
    1737: `1043`,
    1738: `1044`,
    1739: `1044`,
    174: `25`,
    1740: `1044`,
    1741: `1045`,
    1742: `1046`,
    1743: `1047`,
    1744: `1047`,
    1745: `1048`,
    1746: `1049`,
    1747: `1049`,
    1748: `1049`,
    1749: `1050`,
    175: `27`,
    1750: `1050`,
    1751: `1051`,
    1752: `1051`,
    1753: `1052`,
    1754: `1052`,
    1755: `1052`,
    1756: `1053`,
    1757: `1053`,
    1758: `1054`,
    1759: `1054`,
    176: `28`,
    1760: `1054`,
    1761: `1055`,
    1762: `1056`,
    1763: `1056`,
    1764: `1057`,
    1765: `1057`,
    1766: `1057`,
    1767: `1058`,
    1768: `1059`,
    1769: `1059`,
    177: `29`,
    1770: `1060`,
    1771: `1060`,
    1772: `1061`,
    1773: `1062`,
    1774: `1062`,
    1775: `1063`,
    1776: `1064`,
    1777: `1065`,
    1778: `1066`,
    1779: `1066`,
    178: `30`,
    1780: `1067`,
    1781: `1067`,
    1782: `1068`,
    1783: `1068`,
    1784: `1069`,
    1785: `1069`,
    1786: `1069`,
    1787: `1071`,
    1788: `1071`,
    1789: `1072`,
    179: `30`,
    1790: `1072`,
    1791: `1072`,
    1792: `1073`,
    1793: `1073`,
    1794: `1074`,
    1795: `1074`,
    1796: `1075`,
    1797: `1075`,
    1798: `1076`,
    1799: `1077`,
    18: `2`,
    180: `31`,
    1800: `1077`,
    1801: `1078`,
    1802: `1079`,
    1803: `1081`,
    1804: `1082`,
    1805: `1083`,
    1806: `1084`,
    1807: `1085`,
    1808: `1085`,
    1809: `1086`,
    181: `32`,
    1810: `1087`,
    1811: `1087`,
    1812: `1087`,
    1813: `1088`,
    1814: `1088`,
    1815: `1088`,
    1816: `1089`,
    1817: `1090`,
    1818: `1090`,
    1819: `1091`,
    182: `32`,
    1820: `1091`,
    1821: `1092`,
    1822: `1092`,
    1823: `1093`,
    1824: `1094`,
    1825: `1099`,
    1826: `1099`,
    1827: `1101`,
    1828: `1101`,
    1829: `1103`,
    183: `33`,
    1830: `1103`,
    1831: `1104`,
    1832: `1104`,
    1833: `1104`,
    1834: `1105`,
    1835: `1106`,
    1836: `1107`,
    1837: `1107`,
    1838: `1108`,
    1839: `1109`,
    184: `34`,
    1840: `1109`,
    1841: `1110`,
    1842: `1110`,
    1843: `1111`,
    1844: `1112`,
    1845: `1113`,
    1846: `1113`,
    1847: `1113`,
    1848: `1114`,
    1849: `1115`,
    185: `35`,
    1850: `1115`,
    1851: `1116`,
    1852: `1117`,
    1853: `1118`,
    1854: `1119`,
    1855: `1119`,
    1856: `1120`,
    1857: `1120`,
    1858: `1121`,
    1859: `1122`,
    186: `36`,
    1860: `1122`,
    1861: `1123`,
    1862: `1124`,
    1863: `1124`,
    1864: `1125`,
    1865: `1126`,
    1866: `1126`,
    1867: `1127`,
    1868: `1128`,
    1869: `1129`,
    187: `36`,
    1870: `1129`,
    1871: `1130`,
    1872: `1131`,
    1873: `1132`,
    1874: `1132`,
    1875: `1133`,
    1876: `1133`,
    1877: `1134`,
    1878: `1134`,
    1879: `1135`,
    188: `38`,
    1880: `1135`,
    1881: `1137`,
    1882: `1137`,
    1883: `1138`,
    1884: `1138`,
    1885: `1138`,
    1886: `1138`,
    1887: `1138`,
    1888: `1138`,
    1889: `1139`,
    189: `38`,
    1890: `1139`,
    1891: `1140`,
    1892: `1140`,
    1893: `1141`,
    1894: `1142`,
    1895: `1142`,
    1896: `1143`,
    1897: `1143`,
    1898: `1144`,
    1899: `1145`,
    19: `2`,
    190: `39`,
    1900: `1145`,
    1901: `1146`,
    1902: `1146`,
    1903: `1147`,
    1904: `1148`,
    1905: `1148`,
    1906: `1149`,
    1907: `1149`,
    1908: `1150`,
    1909: `1150`,
    191: `39`,
    1910: `1151`,
    1911: `1152`,
    1912: `1152`,
    1913: `1153`,
    1914: `1153`,
    1915: `1154`,
    1916: `1154`,
    1917: `1155`,
    1918: `1156`,
    1919: `1156`,
    192: `40`,
    1920: `1157`,
    1921: `1161`,
    1922: `1161`,
    1923: `1162`,
    1924: `1163`,
    1925: `1163`,
    1926: `1164`,
    1927: `1165`,
    1928: `1165`,
    1929: `1166`,
    193: `41`,
    1930: `1167`,
    1931: `1168`,
    1932: `1169`,
    1933: `1169`,
    1934: `1169`,
    1935: `1170`,
    1936: `1170`,
    1937: `1170`,
    1938: `1171`,
    1939: `1172`,
    194: `42`,
    1940: `1172`,
    1941: `1173`,
    1942: `1173`,
    1943: `1173`,
    1944: `1173`,
    1945: `1173`,
    1946: `1173`,
    1947: `1173`,
    1948: `1173`,
    1949: `1173`,
    195: `42`,
    1950: `1173`,
    1951: `1174`,
    1952: `1174`,
    1953: `1175`,
    1954: `1176`,
    1955: `1177`,
    1956: `1177`,
    1957: `1178`,
    1958: `1178`,
    1959: `1179`,
    196: `42`,
    1960: `1180`,
    1961: `1180`,
    1962: `1181`,
    1963: `1182`,
    1964: `1183`,
    1965: `1184`,
    1966: `1188`,
    1967: `1188`,
    1968: `1189`,
    1969: `1189`,
    197: `43`,
    1970: `1189`,
    1971: `1190`,
    1972: `1191`,
    1973: `1195`,
    1974: `1196`,
    1975: `1196`,
    1976: `1197`,
    1977: `1197`,
    1978: `1197`,
    1979: `1197`,
    198: `43`,
    1980: `1197`,
    1981: `1197`,
    1982: `1197`,
    1983: `1197`,
    1984: `1197`,
    1985: `1197`,
    1986: `1198`,
    1987: `1198`,
    1988: `1199`,
    1989: `1200`,
    199: `44`,
    1990: `1200`,
    1991: `1200`,
    1992: `1201`,
    1993: `1202`,
    1994: `1203`,
    1995: `1203`,
    1996: `1204`,
    1997: `1205`,
    1998: `1205`,
    1999: `1205`,
    2: `2`,
    20: `2`,
    200: `45`,
    2000: `1206`,
    2001: `1206`,
    2002: `1207`,
    2003: `1207`,
    2004: `1208`,
    2005: `1208`,
    2006: `1208`,
    2007: `1209`,
    2008: `1209`,
    2009: `1210`,
    201: `46`,
    2010: `1210`,
    2011: `1210`,
    2012: `1211`,
    2013: `1212`,
    2014: `1212`,
    2015: `1213`,
    2016: `1213`,
    2017: `1213`,
    2018: `1214`,
    2019: `1215`,
    202: `46`,
    2020: `1215`,
    2021: `1216`,
    2022: `1216`,
    2023: `1217`,
    2024: `1218`,
    2025: `1218`,
    2026: `1219`,
    2027: `1220`,
    2028: `1221`,
    2029: `1222`,
    203: `47`,
    2030: `1222`,
    2031: `1223`,
    2032: `1223`,
    2033: `1224`,
    2034: `1224`,
    2035: `1225`,
    2036: `1225`,
    2037: `1225`,
    2038: `1227`,
    2039: `1227`,
    204: `47`,
    2040: `1228`,
    2041: `1228`,
    2042: `1228`,
    2043: `1229`,
    2044: `1229`,
    2045: `1230`,
    2046: `1230`,
    2047: `1231`,
    2048: `1231`,
    2049: `1231`,
    205: `48`,
    2050: `1232`,
    2051: `1232`,
    2052: `1233`,
    2053: `1233`,
    2054: `1234`,
    2055: `1234`,
    2056: `1235`,
    2057: `1236`,
    2058: `1236`,
    2059: `1238`,
    206: `48`,
    2060: `1239`,
    2061: `1240`,
    2062: `1241`,
    2063: `1242`,
    2064: `1242`,
    2065: `1243`,
    2066: `1244`,
    2067: `1244`,
    2068: `1244`,
    2069: `1245`,
    207: `48`,
    2070: `1246`,
    2071: `1246`,
    2072: `1247`,
    2073: `1248`,
    2074: `1249`,
    2075: `1250`,
    2076: `1251`,
    2077: `1257`,
    2078: `1258`,
    2079: `1259`,
    208: `49`,
    2080: `1260`,
    2081: `1261`,
    2082: `1261`,
    2083: `1262`,
    2084: `1263`,
    2085: `1263`,
    2086: `1263`,
    2087: `1264`,
    2088: `1265`,
    2089: `1266`,
    209: `49`,
    2090: `1267`,
    2091: `1268`,
    2092: `1273`,
    2093: `1273`,
    2094: `1274`,
    2095: `1274`,
    2096: `1275`,
    2097: `1276`,
    2098: `1276`,
    2099: `1278`,
    21: `2`,
    210: `50`,
    2100: `1279`,
    2101: `1280`,
    2102: `1281`,
    2103: `1282`,
    2104: `1282`,
    2105: `1283`,
    2106: `1284`,
    2107: `1285`,
    2108: `1285`,
    2109: `1285`,
    211: `50`,
    2110: `1286`,
    2111: `1287`,
    2112: `1287`,
    2113: `1288`,
    2114: `1289`,
    2115: `1290`,
    2116: `1291`,
    2117: `1292`,
    2118: `1297`,
    2119: `1298`,
    212: `50`,
    2120: `1299`,
    2121: `1299`,
    2122: `1300`,
    2123: `1300`,
    2124: `1300`,
    2125: `1301`,
    2126: `1302`,
    2127: `1302`,
    2128: `1303`,
    2129: `1303`,
    213: `50`,
    2130: `1304`,
    2131: `1304`,
    2132: `1305`,
    2133: `1306`,
    2134: `1311`,
    2135: `1312`,
    2136: `1313`,
    2137: `1313`,
    2138: `1314`,
    2139: `1314`,
    214: `50`,
    2140: `1314`,
    2141: `1315`,
    2142: `1316`,
    2143: `1316`,
    2144: `1317`,
    2145: `1317`,
    2146: `1318`,
    2147: `1318`,
    2148: `1319`,
    2149: `1320`,
    215: `50`,
    2150: `1325`,
    2151: `1326`,
    2152: `1327`,
    2153: `1327`,
    2154: `1328`,
    2155: `1329`,
    2156: `1329`,
    2157: `1330`,
    2158: `1330`,
    2159: `1331`,
    216: `51`,
    2160: `1332`,
    2161: `1333`,
    2162: `1333`,
    2163: `1333`,
    2164: `1334`,
    2165: `1335`,
    2166: `1336`,
    2167: `1336`,
    2168: `1337`,
    2169: `1338`,
    217: `51`,
    2170: `1339`,
    2171: `1340`,
    2172: `1341`,
    2173: `1342`,
    2174: `1343`,
    2175: `1344`,
    2176: `1344`,
    2177: `1345`,
    2178: `1346`,
    2179: `1346`,
    218: `52`,
    2180: `1346`,
    2181: `1347`,
    2182: `1347`,
    2183: `1347`,
    2184: `1348`,
    2185: `1349`,
    2186: `1349`,
    2187: `1350`,
    2188: `1351`,
    2189: `1352`,
    219: `53`,
    2190: `1352`,
    2191: `1352`,
    2192: `1353`,
    2193: `1353`,
    2194: `1354`,
    2195: `1355`,
    2196: `1355`,
    2197: `1356`,
    2198: `1357`,
    2199: `1358`,
    22: `2`,
    220: `54`,
    2200: `1358`,
    2201: `1359`,
    2202: `1359`,
    2203: `1360`,
    2204: `1361`,
    2205: `1362`,
    2206: `1362`,
    2207: `1362`,
    2208: `1363`,
    2209: `1364`,
    221: `54`,
    2210: `1364`,
    2211: `1365`,
    2212: `1365`,
    2213: `1365`,
    2214: `1365`,
    2215: `1365`,
    2216: `1365`,
    2217: `1365`,
    2218: `1365`,
    2219: `1365`,
    222: `55`,
    2220: `1365`,
    2221: `1366`,
    2222: `1366`,
    2223: `1367`,
    2224: `1368`,
    2225: `1368`,
    2226: `1368`,
    2227: `1369`,
    2228: `1370`,
    2229: `1371`,
    223: `56`,
    2230: `1371`,
    2231: `1372`,
    2232: `1373`,
    2233: `1373`,
    2234: `1373`,
    2235: `1374`,
    2236: `1374`,
    2237: `1375`,
    2238: `1375`,
    2239: `1376`,
    224: `58`,
    2240: `1376`,
    2241: `1377`,
    2242: `1377`,
    2243: `1377`,
    2244: `1379`,
    2245: `1379`,
    2246: `1380`,
    2247: `1380`,
    2248: `1381`,
    2249: `1382`,
    225: `58`,
    2250: `1385`,
    2251: `1385`,
    2252: `1385`,
    2253: `1386`,
    2254: `1387`,
    2255: `1389`,
    2256: `1390`,
    2257: `1391`,
    2258: `1392`,
    2259: `1393`,
    226: `59`,
    2260: `1393`,
    2261: `1394`,
    2262: `1394`,
    2263: `1395`,
    2264: `1396`,
    2265: `1397`,
    2266: `1398`,
    2267: `1398`,
    2268: `1398`,
    2269: `1399`,
    227: `59`,
    2270: `1399`,
    2271: `1399`,
    2272: `1400`,
    2273: `1400`,
    2274: `1402`,
    2275: `1402`,
    2276: `1403`,
    2277: `1404`,
    2278: `1405`,
    2279: `1407`,
    228: `59`,
    2280: `1407`,
    2281: `1407`,
    2282: `1409`,
    2283: `1409`,
    2284: `1410`,
    2285: `1410`,
    2286: `1411`,
    2287: `1412`,
    2288: `1415`,
    2289: `1415`,
    229: `60`,
    2290: `1415`,
    2291: `1416`,
    2292: `1417`,
    2293: `1419`,
    2294: `1420`,
    2295: `1421`,
    2296: `1422`,
    2297: `1423`,
    2298: `1423`,
    2299: `1424`,
    23: `2`,
    230: `60`,
    2300: `1425`,
    2301: `1425`,
    2302: `1425`,
    2303: `1426`,
    2304: `1426`,
    2305: `1426`,
    2306: `1427`,
    2307: `1427`,
    2308: `1428`,
    2309: `1428`,
    231: `61`,
    2310: `1428`,
    2311: `1430`,
    2312: `1430`,
    2313: `1431`,
    2314: `1431`,
    2315: `1432`,
    2316: `1433`,
    2317: `1436`,
    2318: `1436`,
    2319: `1436`,
    232: `62`,
    2320: `1437`,
    2321: `1437`,
    2322: `1438`,
    2323: `1438`,
    2324: `1438`,
    2325: `1439`,
    2326: `1439`,
    2327: `1440`,
    2328: `1440`,
    2329: `1440`,
    233: `63`,
    2330: `1441`,
    2331: `1442`,
    2332: `1442`,
    2333: `1443`,
    2334: `1443`,
    2335: `1443`,
    2336: `1444`,
    2337: `1445`,
    2338: `1445`,
    2339: `1446`,
    234: `63`,
    2340: `1446`,
    2341: `1446`,
    2342: `1447`,
    2343: `1448`,
    2344: `1448`,
    2345: `1449`,
    2346: `1449`,
    2347: `1449`,
    2348: `1451`,
    2349: `1451`,
    235: `63`,
    2350: `1452`,
    2351: `1452`,
    2352: `1453`,
    2353: `1454`,
    2354: `1457`,
    2355: `1457`,
    2356: `1457`,
    2357: `1458`,
    2358: `1458`,
    2359: `1459`,
    236: `63`,
    2360: `1459`,
    2361: `1459`,
    2362: `1460`,
    2363: `1460`,
    2364: `1461`,
    2365: `1461`,
    2366: `1461`,
    2367: `1463`,
    2368: `1463`,
    2369: `1464`,
    237: `63`,
    2370: `1465`,
    2371: `1465`,
    2372: `1466`,
    2373: `1466`,
    2374: `1466`,
    2375: `1466`,
    2376: `1466`,
    2377: `1466`,
    2378: `1467`,
    2379: `1467`,
    238: `63`,
    2380: `1468`,
    2381: `1469`,
    2382: `1470`,
    2383: `1472`,
    2384: `1472`,
    2385: `1473`,
    2386: `1473`,
    2387: `1473`,
    2388: `1475`,
    2389: `1475`,
    239: `63`,
    2390: `1476`,
    2391: `1477`,
    2392: `1478`,
    2393: `1478`,
    2394: `1479`,
    2395: `1479`,
    2396: `1479`,
    2397: `1481`,
    2398: `1482`,
    2399: `1482`,
    24: `2`,
    240: `63`,
    2400: `1483`,
    2401: `1484`,
    2402: `1486`,
    2403: `1486`,
    2404: `1487`,
    2405: `1488`,
    2406: `1489`,
    2407: `1489`,
    2408: `1490`,
    2409: `1490`,
    241: `63`,
    2410: `1491`,
    2411: `1492`,
    2412: `1493`,
    2413: `1493`,
    2414: `1494`,
    2415: `1494`,
    2416: `1495`,
    2417: `1495`,
    2418: `1496`,
    2419: `1497`,
    242: `63`,
    2420: `1497`,
    2421: `1498`,
    2422: `1498`,
    2423: `1498`,
    2424: `1498`,
    2425: `1498`,
    2426: `1498`,
    2427: `1499`,
    2428: `1499`,
    2429: `1500`,
    243: `63`,
    2430: `1501`,
    2431: `1502`,
    2432: `1502`,
    2433: `1503`,
    2434: `1504`,
    2435: `1505`,
    2436: `1505`,
    2437: `1506`,
    2438: `1507`,
    2439: `1508`,
    244: `63`,
    2440: `1510`,
    2441: `1510`,
    2442: `1511`,
    2443: `1511`,
    2444: `1511`,
    2445: `1512`,
    2446: `1512`,
    2447: `1513`,
    2448: `1513`,
    2449: `1513`,
    245: `63`,
    2450: `1514`,
    2451: `1516`,
    2452: `1516`,
    2453: `1517`,
    2454: `1517`,
    2455: `1518`,
    2456: `1518`,
    2457: `1518`,
    2458: `1519`,
    2459: `1520`,
    246: `63`,
    2460: `1520`,
    2461: `1521`,
    2462: `1522`,
    2463: `1522`,
    2464: `1523`,
    2465: `1524`,
    2466: `1525`,
    2467: `1526`,
    2468: `1526`,
    2469: `1527`,
    247: `63`,
    2470: `1527`,
    2471: `1528`,
    2472: `1529`,
    2473: `1529`,
    2474: `1530`,
    2475: `1531`,
    2476: `1531`,
    2477: `1532`,
    2478: `1533`,
    2479: `1533`,
    248: `63`,
    2480: `1534`,
    2481: `1535`,
    2482: `1536`,
    2483: `1536`,
    2484: `1537`,
    2485: `1538`,
    2486: `1539`,
    2487: `1539`,
    2488: `1540`,
    2489: `1540`,
    249: `64`,
    2490: `1541`,
    2491: `1541`,
    2492: `1542`,
    2493: `1542`,
    2494: `1544`,
    2495: `1544`,
    2496: `1545`,
    2497: `1545`,
    2498: `1545`,
    2499: `1545`,
    25: `2`,
    250: `64`,
    2500: `1545`,
    2501: `1545`,
    2502: `1546`,
    2503: `1546`,
    2504: `1547`,
    2505: `1547`,
    2506: `1548`,
    2507: `1549`,
    2508: `1549`,
    2509: `1550`,
    251: `64`,
    2510: `1550`,
    2511: `1551`,
    2512: `1552`,
    2513: `1552`,
    2514: `1553`,
    2515: `1556`,
    2516: `1556`,
    2517: `1557`,
    2518: `1558`,
    2519: `1558`,
    252: `66`,
    2520: `1559`,
    2521: `1560`,
    2522: `1560`,
    2523: `1561`,
    2524: `1562`,
    2525: `1563`,
    2526: `1564`,
    2527: `1564`,
    2528: `1564`,
    2529: `1565`,
    253: `66`,
    2530: `1565`,
    2531: `1565`,
    2532: `1566`,
    2533: `1567`,
    2534: `1567`,
    2535: `1568`,
    2536: `1568`,
    2537: `1568`,
    2538: `1568`,
    2539: `1568`,
    254: `66`,
    2540: `1568`,
    2541: `1568`,
    2542: `1568`,
    2543: `1568`,
    2544: `1568`,
    2545: `1569`,
    2546: `1569`,
    2547: `1570`,
    2548: `1571`,
    2549: `1572`,
    255: `67`,
    2550: `1572`,
    2551: `1573`,
    2552: `1573`,
    2553: `1574`,
    2554: `1575`,
    2555: `1575`,
    2556: `1576`,
    2557: `1577`,
    2558: `1578`,
    2559: `1579`,
    256: `67`,
    2560: `1582`,
    2561: `1582`,
    2562: `1583`,
    2563: `1583`,
    2564: `1583`,
    2565: `1584`,
    2566: `1585`,
    2567: `1588`,
    2568: `1588`,
    2569: `1589`,
    257: `67`,
    2570: `1589`,
    2571: `1590`,
    2572: `1591`,
    2573: `1591`,
    2574: `1592`,
    2575: `1593`,
    2576: `1594`,
    2577: `1595`,
    2578: `1596`,
    2579: `1597`,
    258: `68`,
    2580: `1597`,
    2581: `1598`,
    2582: `1598`,
    2583: `1599`,
    2584: `1599`,
    2585: `1600`,
    2586: `1600`,
    2587: `1600`,
    2588: `1602`,
    2589: `1602`,
    259: `69`,
    2590: `1602`,
    2591: `1603`,
    2592: `1603`,
    2593: `1604`,
    2594: `1604`,
    2595: `1604`,
    2596: `1605`,
    2597: `1605`,
    2598: `1605`,
    2599: `1606`,
    26: `2`,
    260: `69`,
    2600: `1606`,
    2601: `1607`,
    2602: `1607`,
    2603: `1607`,
    2604: `1609`,
    2605: `1609`,
    2606: `1609`,
    2607: `1610`,
    2608: `1610`,
    2609: `1610`,
    261: `70`,
    2610: `1611`,
    2611: `1611`,
    2612: `1612`,
    2613: `1612`,
    2614: `1612`,
    2615: `1614`,
    2616: `1614`,
    2617: `1614`,
    2618: `1615`,
    2619: `1615`,
    262: `70`,
    2620: `1615`,
    2621: `1616`,
    2622: `1616`,
    2623: `1617`,
    2624: `1617`,
    2625: `1617`,
    2626: `1619`,
    2627: `1620`,
    2628: `1620`,
    2629: `1621`,
    263: `72`,
    2630: `1622`,
    2631: `1623`,
    2632: `1623`,
    2633: `1624`,
    2634: `1624`,
    2635: `1625`,
    2636: `1626`,
    2637: `1627`,
    2638: `1628`,
    2639: `1628`,
    264: `73`,
    2640: `1629`,
    2641: `1630`,
    2642: `1631`,
    2643: `1632`,
    2644: `1632`,
    2645: `1633`,
    2646: `1634`,
    2647: `1635`,
    2648: `1635`,
    2649: `1635`,
    265: `74`,
    2650: `1636`,
    2651: `1636`,
    2652: `1637`,
    2653: `1638`,
    2654: `1639`,
    2655: `1640`,
    2656: `1640`,
    2657: `1640`,
    2658: `1642`,
    2659: `1642`,
    266: `74`,
    2660: `1642`,
    2661: `1643`,
    2662: `1643`,
    2663: `1643`,
    2664: `1644`,
    2665: `1644`,
    2666: `1645`,
    2667: `1645`,
    2668: `1646`,
    2669: `1646`,
    267: `74`,
    2670: `1646`,
    2671: `1648`,
    2672: `1648`,
    2673: `1648`,
    2674: `1649`,
    2675: `1649`,
    2676: `1650`,
    2677: `1650`,
    2678: `1650`,
    2679: `1652`,
    268: `75`,
    2680: `1652`,
    2681: `1653`,
    2682: `1653`,
    2683: `1653`,
    2684: `1654`,
    2685: `1654`,
    2686: `1655`,
    2687: `1655`,
    2688: `1655`,
    2689: `1657`,
    269: `75`,
    2690: `1657`,
    2691: `1658`,
    2692: `1658`,
    2693: `1658`,
    2694: `1659`,
    2695: `1659`,
    2696: `1660`,
    2697: `1660`,
    2698: `1660`,
    2699: `1662`,
    27: `2`,
    270: `76`,
    2700: `1662`,
    2701: `1663`,
    2702: `1663`,
    2703: `1663`,
    2704: `1664`,
    2705: `1664`,
    2706: `1665`,
    2707: `1665`,
    2708: `1665`,
    2709: `1667`,
    271: `76`,
    2710: `1667`,
    2711: `1668`,
    2712: `1668`,
    2713: `1668`,
    2714: `1669`,
    2715: `1669`,
    2716: `1670`,
    2717: `1670`,
    2718: `1670`,
    2719: `1672`,
    272: `77`,
    2720: `1672`,
    2721: `1673`,
    2722: `1673`,
    2723: `1673`,
    2724: `1674`,
    2725: `1674`,
    2726: `1675`,
    2727: `1675`,
    2728: `1675`,
    2729: `1677`,
    273: `78`,
    2730: `1677`,
    2731: `1678`,
    2732: `1678`,
    2733: `1678`,
    2734: `1679`,
    2735: `1679`,
    2736: `1680`,
    2737: `1680`,
    2738: `1680`,
    2739: `1683`,
    274: `79`,
    2740: `1684`,
    2741: `1685`,
    2742: `1686`,
    2743: `1687`,
    2744: `1687`,
    2745: `1688`,
    2746: `1689`,
    2747: `1689`,
    2748: `1689`,
    2749: `1690`,
    275: `80`,
    2750: `1691`,
    2751: `1692`,
    2752: `1692`,
    2753: `1692`,
    2754: `1693`,
    2755: `1694`,
    2756: `1695`,
    2757: `1695`,
    2758: `1696`,
    2759: `1697`,
    276: `80`,
    2760: `1698`,
    2761: `1699`,
    2762: `1699`,
    2763: `1699`,
    2764: `1701`,
    2765: `1701`,
    2766: `1702`,
    2767: `1703`,
    2768: `1703`,
    2769: `1704`,
    277: `81`,
    2770: `1704`,
    2771: `1705`,
    2772: `1706`,
    2773: `1707`,
    2774: `1708`,
    2775: `1708`,
    2776: `1709`,
    2777: `1710`,
    2778: `1710`,
    2779: `1710`,
    278: `82`,
    2780: `1711`,
    2781: `1712`,
    2782: `1712`,
    2783: `1713`,
    2784: `1714`,
    2785: `1715`,
    2786: `1716`,
    2787: `1716`,
    2788: `1717`,
    2789: `1717`,
    279: `83`,
    2790: `1718`,
    2791: `1719`,
    2792: `1719`,
    2793: `1720`,
    2794: `1721`,
    2795: `1721`,
    2796: `1722`,
    2797: `1723`,
    2798: `1723`,
    2799: `1724`,
    28: `2`,
    280: `83`,
    2800: `1725`,
    2801: `1726`,
    2802: `1726`,
    2803: `1727`,
    2804: `1728`,
    2805: `1729`,
    2806: `1729`,
    2807: `1730`,
    2808: `1730`,
    2809: `1731`,
    281: `84`,
    2810: `1731`,
    2811: `1732`,
    2812: `1732`,
    2813: `1734`,
    2814: `1734`,
    2815: `1735`,
    2816: `1735`,
    2817: `1736`,
    2818: `1736`,
    2819: `1737`,
    282: `84`,
    2820: `1737`,
    2821: `1738`,
    2822: `1739`,
    2823: `1739`,
    2824: `1740`,
    2825: `1740`,
    2826: `1741`,
    2827: `1742`,
    2828: `1742`,
    2829: `1743`,
    283: `84`,
    2830: `1743`,
    2831: `1744`,
    2832: `1745`,
    2833: `1745`,
    2834: `1746`,
    2835: `1746`,
    2836: `1747`,
    2837: `1747`,
    2838: `1749`,
    2839: `1750`,
    284: `86`,
    2840: `1750`,
    2841: `1751`,
    2842: `1751`,
    2843: `1752`,
    2844: `1752`,
    2845: `1753`,
    2846: `1754`,
    2847: `1754`,
    2848: `1755`,
    2849: `1759`,
    285: `86`,
    2850: `1759`,
    2851: `1760`,
    2852: `1761`,
    2853: `1761`,
    2854: `1762`,
    2855: `1763`,
    2856: `1763`,
    2857: `1764`,
    2858: `1765`,
    2859: `1766`,
    286: `86`,
    2860: `1767`,
    2861: `1767`,
    2862: `1767`,
    2863: `1768`,
    2864: `1768`,
    2865: `1768`,
    2866: `1769`,
    2867: `1770`,
    2868: `1770`,
    2869: `1771`,
    287: `87`,
    2870: `1771`,
    2871: `1771`,
    2872: `1771`,
    2873: `1771`,
    2874: `1771`,
    2875: `1771`,
    2876: `1771`,
    2877: `1771`,
    2878: `1771`,
    2879: `1772`,
    288: `87`,
    2880: `1772`,
    2881: `1773`,
    2882: `1774`,
    2883: `1775`,
    2884: `1775`,
    2885: `1776`,
    2886: `1776`,
    2887: `1777`,
    2888: `1778`,
    2889: `1778`,
    289: `87`,
    2890: `1779`,
    2891: `1780`,
    2892: `1781`,
    2893: `1782`,
    2894: `1786`,
    2895: `1786`,
    2896: `1787`,
    2897: `1787`,
    2898: `1787`,
    2899: `1788`,
    29: `2`,
    290: `88`,
    2900: `1789`,
    2901: `1793`,
    2902: `1794`,
    2903: `1794`,
    2904: `1795`,
    2905: `1795`,
    2906: `1795`,
    2907: `1795`,
    2908: `1795`,
    2909: `1795`,
    291: `88`,
    2910: `1795`,
    2911: `1795`,
    2912: `1795`,
    2913: `1795`,
    2914: `1796`,
    2915: `1796`,
    2916: `1797`,
    2917: `1798`,
    2918: `1798`,
    2919: `1798`,
    292: `88`,
    2920: `1799`,
    2921: `1800`,
    2922: `1801`,
    2923: `1801`,
    2924: `1802`,
    2925: `1803`,
    2926: `1803`,
    2927: `1803`,
    2928: `1804`,
    2929: `1804`,
    293: `89`,
    2930: `1805`,
    2931: `1805`,
    2932: `1806`,
    2933: `1806`,
    2934: `1807`,
    2935: `1807`,
    2936: `1807`,
    2937: `1810`,
    2938: `1810`,
    2939: `1811`,
    294: `90`,
    2940: `1812`,
    2941: `1812`,
    2942: `1813`,
    2943: `1813`,
    2944: `1814`,
    2945: `1815`,
    2946: `1816`,
    2947: `1817`,
    2948: `1817`,
    2949: `1818`,
    295: `90`,
    2950: `1819`,
    2951: `1819`,
    2952: `1819`,
    2953: `1820`,
    2954: `1821`,
    2955: `1821`,
    2956: `1822`,
    2957: `1823`,
    2958: `1824`,
    2959: `1825`,
    296: `91`,
    2960: `1825`,
    2961: `1826`,
    2962: `1826`,
    2963: `1827`,
    2964: `1828`,
    2965: `1828`,
    2966: `1829`,
    2967: `1830`,
    2968: `1830`,
    2969: `1831`,
    297: `91`,
    2970: `1832`,
    2971: `1832`,
    2972: `1833`,
    2973: `1834`,
    2974: `1835`,
    2975: `1835`,
    2976: `1836`,
    2977: `1837`,
    2978: `1838`,
    2979: `1838`,
    298: `92`,
    2980: `1839`,
    2981: `1839`,
    2982: `1840`,
    2983: `1840`,
    2984: `1841`,
    2985: `1841`,
    2986: `1843`,
    2987: `1843`,
    2988: `1844`,
    2989: `1844`,
    299: `92`,
    2990: `1845`,
    2991: `1845`,
    2992: `1846`,
    2993: `1846`,
    2994: `1847`,
    2995: `1848`,
    2996: `1848`,
    2997: `1849`,
    2998: `1849`,
    2999: `1850`,
    3: `2`,
    30: `2`,
    300: `94`,
    3000: `1851`,
    3001: `1851`,
    3002: `1852`,
    3003: `1852`,
    3004: `1853`,
    3005: `1854`,
    3006: `1854`,
    3007: `1855`,
    3008: `1855`,
    3009: `1856`,
    301: `95`,
    3010: `1856`,
    3011: `1858`,
    3012: `1859`,
    3013: `1859`,
    3014: `1860`,
    3015: `1860`,
    3016: `1861`,
    3017: `1861`,
    3018: `1862`,
    3019: `1863`,
    302: `96`,
    3020: `1863`,
    3021: `1864`,
    3022: `1868`,
    3023: `1868`,
    3024: `1869`,
    3025: `1870`,
    3026: `1870`,
    3027: `1871`,
    3028: `1872`,
    3029: `1872`,
    303: `96`,
    3030: `1873`,
    3031: `1874`,
    3032: `1875`,
    3033: `1876`,
    3034: `1876`,
    3035: `1876`,
    3036: `1877`,
    3037: `1877`,
    3038: `1877`,
    3039: `1878`,
    304: `96`,
    3040: `1879`,
    3041: `1879`,
    3042: `1880`,
    3043: `1880`,
    3044: `1880`,
    3045: `1880`,
    3046: `1880`,
    3047: `1880`,
    3048: `1880`,
    3049: `1880`,
    305: `97`,
    3050: `1880`,
    3051: `1880`,
    3052: `1881`,
    3053: `1881`,
    3054: `1882`,
    3055: `1883`,
    3056: `1884`,
    3057: `1884`,
    3058: `1885`,
    3059: `1885`,
    306: `97`,
    3060: `1886`,
    3061: `1887`,
    3062: `1887`,
    3063: `1888`,
    3064: `1889`,
    3065: `1890`,
    3066: `1891`,
    3067: `1895`,
    3068: `1895`,
    3069: `1896`,
    307: `98`,
    3070: `1896`,
    3071: `1896`,
    3072: `1897`,
    3073: `1898`,
    3074: `1902`,
    3075: `1903`,
    3076: `1903`,
    3077: `1904`,
    3078: `1904`,
    3079: `1904`,
    308: `98`,
    3080: `1904`,
    3081: `1904`,
    3082: `1904`,
    3083: `1904`,
    3084: `1904`,
    3085: `1904`,
    3086: `1904`,
    3087: `1905`,
    3088: `1905`,
    3089: `1906`,
    309: `99`,
    3090: `1907`,
    3091: `1907`,
    3092: `1907`,
    3093: `1908`,
    3094: `1909`,
    3095: `1910`,
    3096: `1910`,
    3097: `1911`,
    3098: `1912`,
    3099: `1912`,
    31: `2`,
    310: `100`,
    3100: `1912`,
    3101: `1913`,
    3102: `1913`,
    3103: `1914`,
    3104: `1914`,
    3105: `1915`,
    3106: `1915`,
    3107: `1916`,
    3108: `1916`,
    3109: `1916`,
    311: `100`,
    3110: `1919`,
    3111: `1919`,
    3112: `1920`,
    3113: `1921`,
    3114: `1921`,
    3115: `1922`,
    3116: `1922`,
    3117: `1923`,
    3118: `1924`,
    3119: `1925`,
    312: `101`,
    3120: `1926`,
    3121: `1926`,
    3122: `1927`,
    3123: `1928`,
    3124: `1928`,
    3125: `1928`,
    3126: `1929`,
    3127: `1930`,
    3128: `1930`,
    3129: `1931`,
    313: `102`,
    3130: `1932`,
    3131: `1933`,
    3132: `1934`,
    3133: `1934`,
    3134: `1935`,
    3135: `1935`,
    3136: `1936`,
    3137: `1937`,
    3138: `1937`,
    3139: `1938`,
    314: `103`,
    3140: `1939`,
    3141: `1939`,
    3142: `1940`,
    3143: `1941`,
    3144: `1941`,
    3145: `1942`,
    3146: `1943`,
    3147: `1944`,
    3148: `1944`,
    3149: `1945`,
    315: `104`,
    3150: `1946`,
    3151: `1947`,
    3152: `1947`,
    3153: `1948`,
    3154: `1948`,
    3155: `1949`,
    3156: `1949`,
    3157: `1950`,
    3158: `1950`,
    3159: `1952`,
    316: `105`,
    3160: `1952`,
    3161: `1953`,
    3162: `1953`,
    3163: `1954`,
    3164: `1954`,
    3165: `1955`,
    3166: `1955`,
    3167: `1956`,
    3168: `1957`,
    3169: `1957`,
    317: `105`,
    3170: `1958`,
    3171: `1958`,
    3172: `1959`,
    3173: `1960`,
    3174: `1960`,
    3175: `1961`,
    3176: `1961`,
    3177: `1962`,
    3178: `1963`,
    3179: `1963`,
    318: `106`,
    3180: `1964`,
    3181: `1964`,
    3182: `1965`,
    3183: `1965`,
    3184: `1967`,
    3185: `1968`,
    3186: `1968`,
    3187: `1969`,
    3188: `1969`,
    3189: `1970`,
    319: `106`,
    3190: `1970`,
    3191: `1971`,
    3192: `1972`,
    3193: `1972`,
    3194: `1973`,
    3195: `1977`,
    3196: `1977`,
    3197: `1978`,
    3198: `1979`,
    3199: `1979`,
    32: `2`,
    320: `106`,
    3200: `1980`,
    3201: `1981`,
    3202: `1981`,
    3203: `1982`,
    3204: `1983`,
    3205: `1984`,
    3206: `1985`,
    3207: `1985`,
    3208: `1985`,
    3209: `1986`,
    321: `108`,
    3210: `1986`,
    3211: `1986`,
    3212: `1987`,
    3213: `1988`,
    3214: `1988`,
    3215: `1989`,
    3216: `1989`,
    3217: `1989`,
    3218: `1989`,
    3219: `1989`,
    322: `108`,
    3220: `1989`,
    3221: `1989`,
    3222: `1989`,
    3223: `1989`,
    3224: `1989`,
    3225: `1990`,
    3226: `1990`,
    3227: `1991`,
    3228: `1992`,
    3229: `1993`,
    323: `108`,
    3230: `1993`,
    3231: `1994`,
    3232: `1994`,
    3233: `1995`,
    3234: `1996`,
    3235: `1996`,
    3236: `1997`,
    3237: `1998`,
    3238: `1999`,
    3239: `2000`,
    324: `109`,
    3240: `2004`,
    3241: `2004`,
    3242: `2005`,
    3243: `2005`,
    3244: `2005`,
    3245: `2006`,
    3246: `2007`,
    3247: `2011`,
    3248: `2012`,
    3249: `2012`,
    325: `109`,
    3250: `2013`,
    3251: `2013`,
    3252: `2013`,
    3253: `2013`,
    3254: `2013`,
    3255: `2013`,
    3256: `2013`,
    3257: `2013`,
    3258: `2013`,
    3259: `2013`,
    326: `109`,
    3260: `2014`,
    3261: `2014`,
    3262: `2015`,
    3263: `2016`,
    3264: `2016`,
    3265: `2016`,
    3266: `2017`,
    3267: `2018`,
    3268: `2019`,
    3269: `2019`,
    327: `110`,
    3270: `2020`,
    3271: `2021`,
    3272: `2021`,
    3273: `2021`,
    3274: `2022`,
    3275: `2022`,
    3276: `2023`,
    3277: `2023`,
    3278: `2024`,
    3279: `2024`,
    328: `111`,
    3280: `2025`,
    3281: `2025`,
    3282: `2025`,
    3283: `2027`,
    3284: `2028`,
    3285: `2029`,
    3286: `2030`,
    3287: `2031`,
    3288: `2033`,
    3289: `2034`,
    329: `111`,
    3290: `2034`,
    3291: `2035`,
    3292: `2035`,
    3293: `2036`,
    3294: `2036`,
    3295: `2037`,
    3296: `2037`,
    3297: `2038`,
    3298: `2038`,
    3299: `2039`,
    33: `2`,
    330: `112`,
    3300: `2039`,
    3301: `2040`,
    3302: `2041`,
    3303: `2043`,
    3304: `2044`,
    3305: `2044`,
    3306: `2045`,
    3307: `2046`,
    3308: `2046`,
    3309: `2047`,
    331: `112`,
    3310: `2047`,
    3311: `2048`,
    3312: `2048`,
    3313: `2049`,
    3314: `2050`,
    3315: `2052`,
    3316: `2052`,
    3317: `2052`,
    3318: `2054`,
    3319: `2054`,
    332: `114`,
    3320: `2054`,
    3321: `2056`,
    3322: `2056`,
    3323: `2056`,
    3324: `2058`,
    3325: `2059`,
    3326: `2061`,
    3327: `2062`,
    3328: `2063`,
    3329: `2064`,
    333: `115`,
    3330: `2064`,
    3331: `2065`,
    3332: `2065`,
    3333: `2066`,
    3334: `2066`,
    3335: `2066`,
    3336: `2067`,
    3337: `2069`,
    3338: `2070`,
    3339: `2071`,
    334: `116`,
    3340: `2071`,
    3341: `2071`,
    3342: `2072`,
    3343: `2073`,
    3344: `2073`,
    3345: `2076`,
    3346: `2076`,
    3347: `2077`,
    3348: `2077`,
    3349: `2078`,
    335: `116`,
    3350: `2079`,
    3351: `2080`,
    3352: `2081`,
    3353: `2081`,
    3354: `2082`,
    3355: `2083`,
    3356: `2083`,
    3357: `2084`,
    3358: `2084`,
    3359: `2085`,
    336: `116`,
    3360: `2085`,
    3361: `2086`,
    3362: `2087`,
    3363: `2088`,
    3364: `2088`,
    3365: `2089`,
    3366: `2090`,
    3367: `2091`,
    3368: `2092`,
    3369: `2092`,
    337: `117`,
    3370: `2093`,
    3371: `2094`,
    3372: `2095`,
    3373: `2097`,
    3374: `2097`,
    3375: `2098`,
    3376: `2098`,
    3377: `2099`,
    3378: `2100`,
    3379: `2102`,
    338: `117`,
    3380: `2102`,
    3381: `2102`,
    3382: `2104`,
    3383: `2105`,
    3384: `2105`,
    3385: `2106`,
    3386: `2106`,
    3387: `2107`,
    3388: `2107`,
    3389: `2107`,
    339: `118`,
    3390: `2108`,
    3391: `2108`,
    3392: `2108`,
    3393: `2110`,
    3394: `2111`,
    3395: `2112`,
    3396: `2113`,
    3397: `2113`,
    3398: `2113`,
    3399: `2114`,
    34: `2`,
    340: `118`,
    3400: `2114`,
    3401: `2115`,
    3402: `2116`,
    3403: `2117`,
    3404: `2119`,
    3405: `2120`,
    3406: `2121`,
    3407: `2122`,
    3408: `2122`,
    3409: `2122`,
    341: `119`,
    3410: `2123`,
    3411: `2123`,
    3412: `2124`,
    3413: `2124`,
    3414: `2124`,
    3415: `2125`,
    3416: `2125`,
    3417: `2125`,
    3418: `2127`,
    3419: `2128`,
    342: `120`,
    3420: `2128`,
    3421: `2128`,
    3422: `2129`,
    3423: `2130`,
    3424: `2131`,
    3425: `2132`,
    3426: `2133`,
    3427: `2135`,
    3428: `2136`,
    3429: `2137`,
    343: `121`,
    3430: `2138`,
    3431: `2138`,
    3432: `2139`,
    3433: `2140`,
    3434: `2141`,
    3435: `2142`,
    3436: `2142`,
    3437: `2143`,
    3438: `2144`,
    3439: `2145`,
    344: `122`,
    3440: `2146`,
    3441: `2146`,
    3442: `2147`,
    3443: `2147`,
    3444: `2147`,
    3445: `2148`,
    3446: `2148`,
    3447: `2149`,
    3448: `2151`,
    3449: `2152`,
    345: `122`,
    3450: `2152`,
    3451: `2153`,
    3452: `2155`,
    3453: `2156`,
    3454: `2157`,
    3455: `2158`,
    3456: `2159`,
    3457: `2159`,
    3458: `2160`,
    3459: `2161`,
    346: `123`,
    3460: `2162`,
    3461: `2163`,
    3462: `2165`,
    3463: `2165`,
    3464: `2166`,
    3465: `2167`,
    3466: `2167`,
    3467: `2168`,
    3468: `2170`,
    3469: `2171`,
    347: `124`,
    3470: `2171`,
    3471: `2171`,
    3472: `2173`,
    3473: `2173`,
    3474: `2174`,
    3475: `2174`,
    3476: `2175`,
    3477: `2176`,
    3478: `2177`,
    3479: `2177`,
    348: `125`,
    3480: `2177`,
    3481: `2178`,
    3482: `2178`,
    3483: `2178`,
    3484: `2180`,
    3485: `2181`,
    3486: `2181`,
    3487: `2181`,
    3488: `2183`,
    3489: `2184`,
    349: `125`,
    3490: `2184`,
    3491: `2185`,
    35: `2`,
    350: `126`,
    351: `126`,
    352: `126`,
    353: `128`,
    354: `128`,
    355: `128`,
    356: `129`,
    357: `129`,
    358: `129`,
    359: `130`,
    36: `2`,
    360: `131`,
    361: `131`,
    362: `132`,
    363: `132`,
    364: `134`,
    365: `135`,
    366: `136`,
    367: `136`,
    368: `136`,
    369: `137`,
    37: `2`,
    370: `137`,
    371: `138`,
    372: `138`,
    373: `139`,
    374: `140`,
    375: `141`,
    376: `142`,
    377: `142`,
    378: `143`,
    379: `144`,
    38: `2`,
    380: `145`,
    381: `145`,
    382: `146`,
    383: `146`,
    384: `146`,
    385: `148`,
    386: `148`,
    387: `148`,
    388: `149`,
    389: `149`,
    39: `2`,
    390: `149`,
    391: `150`,
    392: `151`,
    393: `151`,
    394: `152`,
    395: `152`,
    396: `154`,
    397: `155`,
    398: `156`,
    399: `156`,
    4: `2`,
    40: `2`,
    400: `156`,
    401: `157`,
    402: `157`,
    403: `158`,
    404: `158`,
    405: `159`,
    406: `160`,
    407: `161`,
    408: `162`,
    409: `162`,
    41: `2`,
    410: `163`,
    411: `164`,
    412: `165`,
    413: `165`,
    414: `166`,
    415: `166`,
    416: `166`,
    417: `168`,
    418: `168`,
    419: `168`,
    42: `2`,
    420: `169`,
    421: `169`,
    422: `169`,
    423: `170`,
    424: `170`,
    425: `170`,
    426: `171`,
    427: `172`,
    428: `172`,
    429: `173`,
    43: `2`,
    430: `173`,
    431: `174`,
    432: `174`,
    433: `176`,
    434: `177`,
    435: `178`,
    436: `178`,
    437: `178`,
    438: `179`,
    439: `179`,
    44: `2`,
    440: `180`,
    441: `180`,
    442: `181`,
    443: `182`,
    444: `182`,
    445: `183`,
    446: `184`,
    447: `185`,
    448: `186`,
    449: `187`,
    45: `2`,
    450: `187`,
    451: `188`,
    452: `188`,
    453: `188`,
    454: `190`,
    455: `190`,
    456: `191`,
    457: `191`,
    458: `191`,
    459: `192`,
    46: `4`,
    460: `192`,
    461: `193`,
    462: `193`,
    463: `194`,
    464: `194`,
    465: `195`,
    466: `195`,
    467: `195`,
    468: `196`,
    469: `197`,
    47: `4`,
    470: `202`,
    471: `203`,
    472: `203`,
    473: `204`,
    474: `205`,
    475: `206`,
    476: `207`,
    477: `207`,
    478: `208`,
    479: `208`,
    48: `5`,
    480: `209`,
    481: `210`,
    482: `210`,
    483: `211`,
    484: `212`,
    485: `212`,
    486: `213`,
    487: `214`,
    488: `214`,
    489: `215`,
    49: `5`,
    490: `216`,
    491: `217`,
    492: `217`,
    493: `218`,
    494: `219`,
    495: `220`,
    496: `220`,
    497: `221`,
    498: `221`,
    499: `222`,
    5: `2`,
    50: `5`,
    500: `222`,
    501: `223`,
    502: `223`,
    503: `225`,
    504: `225`,
    505: `226`,
    506: `226`,
    507: `226`,
    508: `226`,
    509: `226`,
    51: `6`,
    510: `226`,
    511: `227`,
    512: `227`,
    513: `228`,
    514: `228`,
    515: `229`,
    516: `230`,
    517: `230`,
    518: `231`,
    519: `231`,
    52: `7`,
    520: `232`,
    521: `233`,
    522: `233`,
    523: `234`,
    524: `234`,
    525: `236`,
    526: `237`,
    527: `237`,
    528: `238`,
    529: `238`,
    53: `8`,
    530: `239`,
    531: `243`,
    532: `243`,
    533: `244`,
    534: `245`,
    535: `245`,
    536: `246`,
    537: `247`,
    538: `247`,
    539: `248`,
    54: `9`,
    540: `249`,
    541: `250`,
    542: `251`,
    543: `251`,
    544: `251`,
    545: `252`,
    546: `252`,
    547: `252`,
    548: `253`,
    549: `254`,
    55: `10`,
    550: `254`,
    551: `255`,
    552: `255`,
    553: `255`,
    554: `255`,
    555: `255`,
    556: `255`,
    557: `255`,
    558: `255`,
    559: `255`,
    56: `11`,
    560: `255`,
    561: `256`,
    562: `256`,
    563: `257`,
    564: `258`,
    565: `259`,
    566: `259`,
    567: `260`,
    568: `260`,
    569: `261`,
    57: `11`,
    570: `262`,
    571: `262`,
    572: `263`,
    573: `264`,
    574: `265`,
    575: `266`,
    576: `270`,
    577: `270`,
    578: `271`,
    579: `271`,
    58: `12`,
    580: `271`,
    581: `272`,
    582: `273`,
    583: `277`,
    584: `278`,
    585: `278`,
    586: `279`,
    587: `279`,
    588: `279`,
    589: `279`,
    59: `13`,
    590: `279`,
    591: `279`,
    592: `279`,
    593: `279`,
    594: `279`,
    595: `279`,
    596: `280`,
    597: `280`,
    598: `281`,
    599: `282`,
    6: `2`,
    60: `14`,
    600: `282`,
    601: `282`,
    602: `283`,
    603: `284`,
    604: `285`,
    605: `285`,
    606: `286`,
    607: `287`,
    608: `287`,
    609: `287`,
    61: `14`,
    610: `288`,
    611: `288`,
    612: `289`,
    613: `289`,
    614: `290`,
    615: `290`,
    616: `290`,
    617: `291`,
    618: `291`,
    619: `292`,
    62: `15`,
    620: `293`,
    621: `293`,
    622: `294`,
    623: `294`,
    624: `294`,
    625: `295`,
    626: `296`,
    627: `296`,
    628: `297`,
    629: `297`,
    63: `16`,
    630: `297`,
    631: `298`,
    632: `299`,
    633: `299`,
    634: `300`,
    635: `300`,
    636: `301`,
    637: `301`,
    638: `304`,
    639: `304`,
    64: `18`,
    640: `305`,
    641: `306`,
    642: `306`,
    643: `307`,
    644: `308`,
    645: `309`,
    646: `309`,
    647: `310`,
    648: `311`,
    649: `311`,
    65: `18`,
    650: `312`,
    651: `313`,
    652: `313`,
    653: `314`,
    654: `314`,
    655: `316`,
    656: `316`,
    657: `317`,
    658: `317`,
    659: `318`,
    66: `18`,
    660: `319`,
    661: `320`,
    662: `320`,
    663: `320`,
    664: `321`,
    665: `322`,
    666: `323`,
    667: `323`,
    668: `324`,
    669: `325`,
    67: `18`,
    670: `325`,
    671: `326`,
    672: `327`,
    673: `328`,
    674: `329`,
    675: `329`,
    676: `330`,
    677: `331`,
    678: `332`,
    679: `334`,
    68: `18`,
    680: `334`,
    681: `334`,
    682: `336`,
    683: `336`,
    684: `337`,
    685: `337`,
    686: `337`,
    687: `339`,
    688: `339`,
    689: `339`,
    69: `18`,
    690: `339`,
    691: `339`,
    692: `339`,
    693: `340`,
    694: `340`,
    695: `341`,
    696: `342`,
    697: `344`,
    698: `345`,
    699: `347`,
    7: `2`,
    70: `18`,
    700: `347`,
    701: `348`,
    702: `348`,
    703: `348`,
    704: `349`,
    705: `349`,
    706: `350`,
    707: `350`,
    708: `351`,
    709: `351`,
    71: `18`,
    710: `352`,
    711: `353`,
    712: `353`,
    713: `355`,
    714: `356`,
    715: `357`,
    716: `358`,
    717: `359`,
    718: `359`,
    719: `360`,
    72: `18`,
    720: `361`,
    721: `361`,
    722: `361`,
    723: `362`,
    724: `363`,
    725: `364`,
    726: `364`,
    727: `364`,
    728: `365`,
    729: `366`,
    73: `18`,
    730: `367`,
    731: `367`,
    732: `368`,
    733: `369`,
    734: `370`,
    735: `371`,
    736: `371`,
    737: `371`,
    738: `373`,
    739: `374`,
    74: `18`,
    740: `375`,
    741: `376`,
    742: `377`,
    743: `377`,
    744: `378`,
    745: `379`,
    746: `379`,
    747: `379`,
    748: `380`,
    749: `381`,
    75: `18`,
    750: `382`,
    751: `382`,
    752: `382`,
    753: `383`,
    754: `384`,
    755: `385`,
    756: `385`,
    757: `386`,
    758: `387`,
    759: `388`,
    76: `18`,
    760: `389`,
    761: `389`,
    762: `389`,
    763: `391`,
    764: `391`,
    765: `392`,
    766: `393`,
    767: `393`,
    768: `394`,
    769: `394`,
    77: `18`,
    770: `395`,
    771: `396`,
    772: `397`,
    773: `398`,
    774: `398`,
    775: `399`,
    776: `400`,
    777: `400`,
    778: `400`,
    779: `401`,
    78: `18`,
    780: `402`,
    781: `402`,
    782: `403`,
    783: `404`,
    784: `405`,
    785: `406`,
    786: `406`,
    787: `407`,
    788: `407`,
    789: `408`,
    79: `18`,
    790: `409`,
    791: `409`,
    792: `410`,
    793: `411`,
    794: `411`,
    795: `412`,
    796: `413`,
    797: `413`,
    798: `414`,
    799: `415`,
    8: `2`,
    80: `18`,
    800: `416`,
    801: `416`,
    802: `417`,
    803: `418`,
    804: `419`,
    805: `419`,
    806: `420`,
    807: `420`,
    808: `421`,
    809: `421`,
    81: `18`,
    810: `422`,
    811: `422`,
    812: `424`,
    813: `424`,
    814: `425`,
    815: `425`,
    816: `426`,
    817: `426`,
    818: `427`,
    819: `427`,
    82: `18`,
    820: `428`,
    821: `429`,
    822: `429`,
    823: `430`,
    824: `430`,
    825: `431`,
    826: `432`,
    827: `432`,
    828: `433`,
    829: `433`,
    83: `18`,
    830: `434`,
    831: `435`,
    832: `435`,
    833: `436`,
    834: `436`,
    835: `437`,
    836: `437`,
    837: `439`,
    838: `440`,
    839: `440`,
    84: `18`,
    840: `441`,
    841: `441`,
    842: `442`,
    843: `442`,
    844: `443`,
    845: `444`,
    846: `444`,
    847: `445`,
    848: `449`,
    849: `449`,
    85: `18`,
    850: `450`,
    851: `451`,
    852: `451`,
    853: `452`,
    854: `453`,
    855: `453`,
    856: `454`,
    857: `455`,
    858: `456`,
    859: `457`,
    86: `18`,
    860: `457`,
    861: `457`,
    862: `458`,
    863: `458`,
    864: `458`,
    865: `459`,
    866: `460`,
    867: `460`,
    868: `461`,
    869: `461`,
    87: `18`,
    870: `461`,
    871: `461`,
    872: `461`,
    873: `461`,
    874: `461`,
    875: `461`,
    876: `461`,
    877: `461`,
    878: `462`,
    879: `462`,
    88: `18`,
    880: `463`,
    881: `464`,
    882: `465`,
    883: `465`,
    884: `466`,
    885: `466`,
    886: `467`,
    887: `468`,
    888: `468`,
    889: `469`,
    89: `18`,
    890: `470`,
    891: `471`,
    892: `472`,
    893: `476`,
    894: `476`,
    895: `477`,
    896: `477`,
    897: `477`,
    898: `478`,
    899: `479`,
    9: `2`,
    90: `18`,
    900: `483`,
    901: `484`,
    902: `484`,
    903: `485`,
    904: `485`,
    905: `485`,
    906: `485`,
    907: `485`,
    908: `485`,
    909: `485`,
    91: `18`,
    910: `485`,
    911: `485`,
    912: `485`,
    913: `486`,
    914: `486`,
    915: `487`,
    916: `488`,
    917: `488`,
    918: `488`,
    919: `489`,
    92: `18`,
    920: `490`,
    921: `491`,
    922: `491`,
    923: `492`,
    924: `493`,
    925: `493`,
    926: `493`,
    927: `494`,
    928: `494`,
    929: `495`,
    93: `18`,
    930: `495`,
    931: `496`,
    932: `496`,
    933: `497`,
    934: `497`,
    935: `497`,
    936: `499`,
    937: `499`,
    938: `500`,
    939: `500`,
    94: `18`,
    940: `500`,
    941: `501`,
    942: `501`,
    943: `502`,
    944: `502`,
    945: `503`,
    946: `503`,
    947: `504`,
    948: `505`,
    949: `505`,
    95: `18`,
    950: `507`,
    951: `508`,
    952: `509`,
    953: `510`,
    954: `511`,
    955: `511`,
    956: `512`,
    957: `513`,
    958: `513`,
    959: `513`,
    96: `18`,
    960: `514`,
    961: `515`,
    962: `515`,
    963: `516`,
    964: `517`,
    965: `518`,
    966: `519`,
    967: `520`,
    968: `525`,
    969: `526`,
    97: `18`,
    970: `527`,
    971: `527`,
    972: `528`,
    973: `528`,
    974: `528`,
    975: `529`,
    976: `530`,
    977: `530`,
    978: `531`,
    979: `531`,
    98: `18`,
    980: `532`,
    981: `532`,
    982: `533`,
    983: `534`,
    984: `539`,
    985: `540`,
    986: `541`,
    987: `541`,
    988: `542`,
    989: `543`,
    99: `18`,
    990: `543`,
    991: `544`,
    992: `544`,
    993: `545`,
    994: `546`,
    995: `547`,
    996: `547`,
    997: `547`,
    998: `549`,
    999: `550`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 1,
  stateSize: 96,
  unsupported: [],
  version: 13,
  warnings: [`Step 1 calls a remote object at /app/index.rsh:68:18:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:104:29:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:134:33:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:181:28:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:199:28:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:223:29:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:244:32:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:52:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:255:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:81:29:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Alice": Alice,
  "C_grant": C_grant,
  "Deployer": Deployer,
  "U1_approve": U1_approve,
  "U1_transfer": U1_transfer,
  "U1_transferFrom": U1_transferFrom,
  "U2_deposit": U2_deposit,
  "U2_withdraw": U2_withdraw,
  "U3_transferFrom": U3_transferFrom
  };
export const _APIs = {
  C: {
    grant: C_grant
    },
  U1: {
    approve: U1_approve,
    transfer: U1_transfer,
    transferFrom: U1_transferFrom
    },
  U2: {
    deposit: U2_deposit,
    withdraw: U2_withdraw
    },
  U3: {
    transferFrom: U3_transferFrom
    }
  };
