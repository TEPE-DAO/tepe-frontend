// Automatically generated with Reach 0.1.13 (88e48902)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (88e48902)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  return {
    Approval: [ctc0, ctc0, ctc0, ctc1],
    Mint: [ctc0],
    Transfer: [ctc0, ctc0, ctc0, ctc1]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0, ctc0]);
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Struct([['name', ctc4], ['symbol', ctc5], ['decimals', ctc1], ['totalSupply', ctc1]]);
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Data({
    None: ctc7,
    Some: ctc6
    });
  const ctc9 = stdlib.T_Data({
    None: ctc7,
    Some: ctc1
    });
  const map0_ctc = ctc8;
  
  const map1_ctc = ctc9;
  
  const map2_ctc = ctc9;
  
  
  const _allowance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1394] = svs;
      return (await ((async (_v1438, _v1439, _v1440 ) => {
          const v1438 = stdlib.protect(ctc0, _v1438, null);
          const v1439 = stdlib.protect(ctc0, _v1439, null);
          const v1440 = stdlib.protect(ctc0, _v1440, null);
        
        const v1441 = [v1438, v1439, v1440];
        const v1442 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, ctc2, v1441, ctc1), null);
        const v1443 = stdlib.fromSome(v1442, stdlib.checkedBigNumberify('./index.rsh:97:32:decimal', stdlib.UInt_max, '0'));
        
        return v1443;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _balanceOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1394] = svs;
      return (await ((async (_v1433, _v1434 ) => {
          const v1433 = stdlib.protect(ctc0, _v1433, null);
          const v1434 = stdlib.protect(ctc0, _v1434, null);
        
        const v1435 = [v1433, v1434];
        const v1436 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc3, v1435, ctc1), null);
        const v1437 = stdlib.fromSome(v1436, stdlib.checkedBigNumberify('./index.rsh:92:32:decimal', stdlib.UInt_max, '0'));
        
        return v1437;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _decimals = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1394] = svs;
      return (await ((async (_v1413 ) => {
          const v1413 = stdlib.protect(ctc0, _v1413, null);
        
        const v1414 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v1413, ctc6), null);
        const v1415 = '                                ';
        const v1416 = '        ';
        const v1417 = {
          decimals: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          name: v1415,
          symbol: v1416,
          totalSupply: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v1418 = stdlib.fromSome(v1414, v1417);
        const v1419 = v1418.decimals;
        
        return v1419;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _name = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1394] = svs;
      return (await ((async (_v1399 ) => {
          const v1399 = stdlib.protect(ctc0, _v1399, null);
        
        const v1400 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v1399, ctc6), null);
        const v1401 = '                                ';
        const v1402 = '        ';
        const v1403 = {
          decimals: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          name: v1401,
          symbol: v1402,
          totalSupply: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v1404 = stdlib.fromSome(v1400, v1403);
        const v1405 = v1404.name;
        
        return v1405;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _symbol = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1394] = svs;
      return (await ((async (_v1406 ) => {
          const v1406 = stdlib.protect(ctc0, _v1406, null);
        
        const v1407 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v1406, ctc6), null);
        const v1408 = '                                ';
        const v1409 = '        ';
        const v1410 = {
          decimals: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          name: v1408,
          symbol: v1409,
          totalSupply: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v1411 = stdlib.fromSome(v1407, v1410);
        const v1412 = v1411.symbol;
        
        return v1412;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _totalSupply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1394] = svs;
      return (await ((async (_v1420 ) => {
          const v1420 = stdlib.protect(ctc0, _v1420, null);
        
        const v1421 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v1420, ctc6), null);
        const v1422 = '                                ';
        const v1423 = '        ';
        const v1424 = {
          decimals: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          name: v1422,
          symbol: v1423,
          totalSupply: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v1425 = stdlib.fromSome(v1421, v1424);
        const v1426 = v1425.totalSupply;
        
        return v1426;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      allowance: {
        decode: _allowance,
        dom: [ctc0, ctc0, ctc0],
        rng: ctc1
        },
      balanceOf: {
        decode: _balanceOf,
        dom: [ctc0, ctc0],
        rng: ctc1
        },
      decimals: {
        decode: _decimals,
        dom: [ctc0],
        rng: ctc1
        },
      name: {
        decode: _name,
        dom: [ctc0],
        rng: ctc4
        },
      symbol: {
        decode: _symbol,
        dom: [ctc0],
        rng: ctc5
        },
      totalSupply: {
        decode: _totalSupply,
        dom: [ctc0],
        rng: ctc1
        }
      },
    views: {
      3: [ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['name', ctc1], ['symbol', ctc2], ['decimals', ctc3], ['totalSupply', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc7 = stdlib.T_Tuple([ctc5, ctc6, ctc6]);
  return {
    mapDataTy: ctc7
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['name', ctc1], ['symbol', ctc2], ['decimals', ctc3], ['totalSupply', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Object({
    zeroAddress: ctc7
    });
  const ctc9 = stdlib.T_Tuple([ctc7, ctc7, ctc3]);
  const ctc10 = stdlib.T_Tuple([ctc7, ctc7, ctc7]);
  const ctc11 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc12 = stdlib.T_Tuple([ctc7, ctc7, ctc4]);
  const ctc13 = stdlib.T_Tuple([ctc7, ctc7, ctc7, ctc3]);
  const ctc14 = stdlib.T_Data({
    approve0_117: ctc9,
    deleteAllowanceBox0_117: ctc10,
    deleteBalanceBox0_117: ctc11,
    mint0_117: ctc12,
    transfer0_117: ctc9,
    transferFrom0_117: ctc13
    });
  const ctc15 = stdlib.T_Bool;
  
  const map0_ctc = ctc5;
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
  
  const map2_ctc = ctc6;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false
    });
  
  
  const v1388 = stdlib.protect(ctc8, interact.params, 'for Deployer\'s interact field params');
  const v1389 = v1388.zeroAddress;
  
  const txn1 = await (ctc.sendrecv({
    args: [v1389],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:74:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:74:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1394], secs: v1396, time: v1395, didSend: v29, from: v1393 } = txn1;
      
      ;
      const v1397 = await ctc.getContractInfo();
      
      const v1427 = v1395;
      
      if (await (async () => {
        
        return true;})()) {
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
    tys: [ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v1394], secs: v1396, time: v1395, didSend: v29, from: v1393 } = txn1;
  ;
  const v1397 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.ready(v1397), {
    at: './index.rsh:75:19:application',
    fs: ['at ./index.rsh:75:19:application call to [unknown function] (defined at: ./index.rsh:75:19:function exp)', 'at ./index.rsh:75:19:application call to "liftedInteract" (defined at: ./index.rsh:75:19:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  let v1427 = v1395;
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc14],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1631], secs: v1633, time: v1632, didSend: v928, from: v1630 } = txn3;
    switch (v1631[0]) {
      case 'approve0_117': {
        const v1634 = v1631[1];
        undefined /* setApiDetails */;
        ;
        const v1645 = v1634[stdlib.checkedBigNumberify('./index.rsh:163:10:spread', stdlib.UInt_max, '0')];
        const v1646 = v1634[stdlib.checkedBigNumberify('./index.rsh:163:10:spread', stdlib.UInt_max, '1')];
        const v1647 = v1634[stdlib.checkedBigNumberify('./index.rsh:163:10:spread', stdlib.UInt_max, '2')];
        const v1648 = stdlib.addressEq(v1646, v1394);
        const v1649 = v1648 ? false : true;
        stdlib.assert(v1649, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:166:13:application call to [unknown function] (defined at: ./index.rsh:166:13:function exp)'],
          msg: 'ARC200: Approve to zero address',
          who: 'Deployer'
          });
        const v1654 = [v1645, v1630, v1646];
        await stdlib.mapSet(map2, ctc10, v1654, ctc3, v1647);
        null;
        const v1655 = true;
        await txn3.getOutput('approve', 'v1655', ctc15, v1655);
        const cv1427 = v1632;
        
        v1427 = cv1427;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteAllowanceBox0_117': {
        const v1867 = v1631[1];
        undefined /* setApiDetails */;
        ;
        const v1899 = v1867[stdlib.checkedBigNumberify('./index.rsh:188:10:spread', stdlib.UInt_max, '0')];
        const v1900 = v1867[stdlib.checkedBigNumberify('./index.rsh:188:10:spread', stdlib.UInt_max, '1')];
        const v1901 = v1867[stdlib.checkedBigNumberify('./index.rsh:188:10:spread', stdlib.UInt_max, '2')];
        const v1902 = stdlib.addressEq(v1900, v1394);
        const v1903 = v1902 ? false : true;
        stdlib.assert(v1903, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:189:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:13:application call to [unknown function] (defined at: ./index.rsh:202:13:function exp)'],
          msg: 'ARC200: Delete allowance box of zero address',
          who: 'Deployer'
          });
        const v1905 = stdlib.addressEq(v1901, v1394);
        const v1906 = v1905 ? false : true;
        stdlib.assert(v1906, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:13:application call to [unknown function] (defined at: ./index.rsh:202:13:function exp)'],
          msg: 'ARC200: Delete allowance box to zero address',
          who: 'Deployer'
          });
        const v1908 = [v1899, v1900, v1901];
        const v1909 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc10, v1908, ctc3), null);
        const v1910 = {
          None: 0,
          Some: 1
          }[v1909[0]];
        const v1911 = stdlib.eq(v1910, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v1911, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:197:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:13:application call to [unknown function] (defined at: ./index.rsh:202:13:function exp)'],
          msg: 'ARC200: Allowance box not found',
          who: 'Deployer'
          });
        const v1918 = stdlib.fromSome(v1909, stdlib.checkedBigNumberify('./index.rsh:97:32:decimal', stdlib.UInt_max, '0'));
        const v1919 = stdlib.eq(v1918, stdlib.checkedBigNumberify('./index.rsh:204:36:decimal', stdlib.UInt_max, '0'));
        if (v1919) {
          await stdlib.mapSet(map2, ctc10, v1908, ctc3, undefined /* Nothing */);
          const v1921 = true;
          await txn3.getOutput('deleteAllowanceBox', 'v1921', ctc15, v1921);
          const cv1427 = v1632;
          
          v1427 = cv1427;
          
          txn2 = txn3;
          continue;}
        else {
          const v1931 = true;
          await txn3.getOutput('deleteAllowanceBox', 'v1931', ctc15, v1931);
          const cv1427 = v1632;
          
          v1427 = cv1427;
          
          txn2 = txn3;
          continue;}
        break;
        }
      case 'deleteBalanceBox0_117': {
        const v2100 = v1631[1];
        undefined /* setApiDetails */;
        ;
        const v2175 = v2100[stdlib.checkedBigNumberify('./index.rsh:174:10:spread', stdlib.UInt_max, '0')];
        const v2176 = v2100[stdlib.checkedBigNumberify('./index.rsh:174:10:spread', stdlib.UInt_max, '1')];
        const v2177 = stdlib.addressEq(v2176, v1394);
        const v2178 = v2177 ? false : true;
        stdlib.assert(v2178, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:175:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:13:function exp)'],
          msg: 'ARC200: Delete balance box of zero address',
          who: 'Deployer'
          });
        const v2180 = [v2175, v2176];
        const v2181 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v2180, ctc3), null);
        const v2182 = {
          None: 0,
          Some: 1
          }[v2181[0]];
        const v2183 = stdlib.eq(v2182, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2183, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:176:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:13:function exp)'],
          msg: 'ARC200: Balance box not found',
          who: 'Deployer'
          });
        const v2189 = stdlib.fromSome(v2181, stdlib.checkedBigNumberify('./index.rsh:92:32:decimal', stdlib.UInt_max, '0'));
        const v2190 = stdlib.eq(v2189, stdlib.checkedBigNumberify('./index.rsh:180:33:decimal', stdlib.UInt_max, '0'));
        if (v2190) {
          await stdlib.mapSet(map1, ctc11, v2180, ctc3, undefined /* Nothing */);
          const v2192 = true;
          await txn3.getOutput('deleteBalanceBox', 'v2192', ctc15, v2192);
          const cv1427 = v1632;
          
          v1427 = cv1427;
          
          txn2 = txn3;
          continue;}
        else {
          const v2201 = true;
          await txn3.getOutput('deleteBalanceBox', 'v2201', ctc15, v2201);
          const cv1427 = v1632;
          
          v1427 = cv1427;
          
          txn2 = txn3;
          continue;}
        break;
        }
      case 'mint0_117': {
        const v2333 = v1631[1];
        undefined /* setApiDetails */;
        ;
        const v2444 = v2333[stdlib.checkedBigNumberify('./index.rsh:103:10:spread', stdlib.UInt_max, '0')];
        const v2445 = v2333[stdlib.checkedBigNumberify('./index.rsh:103:10:spread', stdlib.UInt_max, '1')];
        const v2446 = v2333[stdlib.checkedBigNumberify('./index.rsh:103:10:spread', stdlib.UInt_max, '2')];
        const v2447 = v2446.totalSupply;
        const v2448 = stdlib.gt(v2447, stdlib.checkedBigNumberify('./index.rsh:104:32:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2448, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:104:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:110:13:application call to [unknown function] (defined at: ./index.rsh:110:13:function exp)'],
          msg: 'totalSupply must be greater than zero',
          who: 'Deployer'
          });
        const v2450 = v2446.decimals;
        const v2451 = stdlib.lt(v2450, stdlib.checkedBigNumberify('./index.rsh:3:22:decimal', stdlib.UInt_max, '256'));
        stdlib.assert(v2451, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:105:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:110:13:application call to [unknown function] (defined at: ./index.rsh:110:13:function exp)'],
          msg: 'decimals must be less than 256 (fits in UInt8)',
          who: 'Deployer'
          });
        const v2456 = v2446.name;
        const v2457 = v2446.symbol;
        const v2460 = {
          decimals: v2450,
          name: v2456,
          symbol: v2457,
          totalSupply: v2447
          };
        await stdlib.mapSet(map0, ctc7, v2444, ctc4, v2460);
        const v2461 = [v2444, v2445];
        await stdlib.mapSet(map1, ctc11, v2461, ctc3, v2447);
        null;
        null;
        const v2464 = true;
        await txn3.getOutput('mint', 'v2464', ctc15, v2464);
        const cv1427 = v1632;
        
        v1427 = cv1427;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'transfer0_117': {
        const v2566 = v1631[1];
        undefined /* setApiDetails */;
        ;
        const v2712 = v2566[stdlib.checkedBigNumberify('./index.rsh:127:10:spread', stdlib.UInt_max, '0')];
        const v2713 = v2566[stdlib.checkedBigNumberify('./index.rsh:127:10:spread', stdlib.UInt_max, '1')];
        const v2714 = v2566[stdlib.checkedBigNumberify('./index.rsh:127:10:spread', stdlib.UInt_max, '2')];
        const v2715 = stdlib.addressEq(v2713, v1394);
        const v2716 = v2715 ? false : true;
        stdlib.assert(v2716, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:128:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
          msg: 'ARC200: Transfer to zero address',
          who: 'Deployer'
          });
        const v2718 = [v2712, v1630];
        const v2719 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v2718, ctc3), null);
        const v2720 = stdlib.fromSome(v2719, stdlib.checkedBigNumberify('./index.rsh:92:32:decimal', stdlib.UInt_max, '0'));
        const v2721 = stdlib.ge(v2720, v2714);
        stdlib.assert(v2721, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:129:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
          msg: 'amount must not be greater than balance',
          who: 'Deployer'
          });
        const v2730 = stdlib.safeSub(v2720, v2714);
        await stdlib.mapSet(map1, ctc11, v2718, ctc3, v2730);
        const v2731 = [v2712, v2713];
        const v2733 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v2731, ctc3), null);
        const v2734 = stdlib.fromSome(v2733, stdlib.checkedBigNumberify('./index.rsh:92:32:decimal', stdlib.UInt_max, '0'));
        const v2735 = stdlib.safeAdd(v2734, v2714);
        await stdlib.mapSet(map1, ctc11, v2731, ctc3, v2735);
        null;
        const v2737 = true;
        await txn3.getOutput('transfer', 'v2737', ctc15, v2737);
        const cv1427 = v1632;
        
        v1427 = cv1427;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'transferFrom0_117': {
        const v2799 = v1631[1];
        undefined /* setApiDetails */;
        ;
        const v2981 = v2799[stdlib.checkedBigNumberify('./index.rsh:141:10:spread', stdlib.UInt_max, '0')];
        const v2982 = v2799[stdlib.checkedBigNumberify('./index.rsh:141:10:spread', stdlib.UInt_max, '1')];
        const v2983 = v2799[stdlib.checkedBigNumberify('./index.rsh:141:10:spread', stdlib.UInt_max, '2')];
        const v2984 = v2799[stdlib.checkedBigNumberify('./index.rsh:141:10:spread', stdlib.UInt_max, '3')];
        const v2985 = stdlib.addressEq(v2982, v1394);
        const v2986 = v2985 ? false : true;
        stdlib.assert(v2986, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:142:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:153:13:application call to [unknown function] (defined at: ./index.rsh:153:13:function exp)'],
          msg: 'ARC200: Transfer from zero address',
          who: 'Deployer'
          });
        const v2988 = stdlib.addressEq(v2983, v1394);
        const v2989 = v2988 ? false : true;
        stdlib.assert(v2989, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:143:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:153:13:application call to [unknown function] (defined at: ./index.rsh:153:13:function exp)'],
          msg: 'ARC200: Transfer to zero address',
          who: 'Deployer'
          });
        const v2991 = [v2981, v2982];
        const v2992 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v2991, ctc3), null);
        const v2993 = stdlib.fromSome(v2992, stdlib.checkedBigNumberify('./index.rsh:92:32:decimal', stdlib.UInt_max, '0'));
        const v2994 = stdlib.ge(v2993, v2984);
        stdlib.assert(v2994, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:144:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:153:13:application call to [unknown function] (defined at: ./index.rsh:153:13:function exp)'],
          msg: 'amount must not be greater than balance',
          who: 'Deployer'
          });
        const v2996 = [v2981, v2982, v1630];
        const v2997 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc10, v2996, ctc3), null);
        const v2998 = stdlib.fromSome(v2997, stdlib.checkedBigNumberify('./index.rsh:97:32:decimal', stdlib.UInt_max, '0'));
        const v2999 = stdlib.ge(v2998, v2984);
        stdlib.assert(v2999, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:148:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:153:13:application call to [unknown function] (defined at: ./index.rsh:153:13:function exp)'],
          msg: 'amount must not be greater than allowance',
          who: 'Deployer'
          });
        const v3009 = stdlib.safeSub(v2993, v2984);
        await stdlib.mapSet(map1, ctc11, v2991, ctc3, v3009);
        const v3010 = [v2981, v2983];
        const v3012 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v3010, ctc3), null);
        const v3013 = stdlib.fromSome(v3012, stdlib.checkedBigNumberify('./index.rsh:92:32:decimal', stdlib.UInt_max, '0'));
        const v3014 = stdlib.safeAdd(v3013, v2984);
        await stdlib.mapSet(map1, ctc11, v3010, ctc3, v3014);
        null;
        const v3019 = stdlib.safeSub(v2998, v2984);
        await stdlib.mapSet(map2, ctc10, v2996, ctc3, v3019);
        null;
        const v3021 = true;
        await txn3.getOutput('transferFrom', 'v3021', ctc15, v3021);
        const cv1427 = v1632;
        
        v1427 = cv1427;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _approve3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _approve3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _approve3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['name', ctc1], ['symbol', ctc2], ['decimals', ctc3], ['totalSupply', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc7, ctc7, ctc3]);
  const ctc9 = stdlib.T_Tuple([ctc7, ctc7, ctc7]);
  const ctc10 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc11 = stdlib.T_Tuple([ctc7, ctc7, ctc4]);
  const ctc12 = stdlib.T_Tuple([ctc7, ctc7, ctc7, ctc3]);
  const ctc13 = stdlib.T_Data({
    approve0_117: ctc8,
    deleteAllowanceBox0_117: ctc9,
    deleteBalanceBox0_117: ctc10,
    mint0_117: ctc11,
    transfer0_117: ctc8,
    transferFrom0_117: ctc12
    });
  const ctc14 = stdlib.T_Bool;
  
  const map0_ctc = ctc5;
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
  
  const map2_ctc = ctc6;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  
  const [v1394] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc7]);
  const v1548 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:163:49:application call to [unknown function] (defined at: ./index.rsh:163:49:function exp)', 'at ./index.rsh:88:28:application call to "runapprove0_117" (defined at: ./index.rsh:163:10:function exp)', 'at ./index.rsh:88:28:application call to [unknown function] (defined at: ./index.rsh:88:28:function exp)'],
    msg: 'in',
    who: 'approve'
    });
  const v1550 = v1548[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1555 = stdlib.addressEq(v1550, v1394);
  const v1556 = v1555 ? false : true;
  stdlib.assert(v1556, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:163:49:application call to [unknown function] (defined at: ./index.rsh:163:49:function exp)', 'at ./index.rsh:88:28:application call to "runapprove0_117" (defined at: ./index.rsh:163:10:function exp)', 'at ./index.rsh:88:28:application call to [unknown function] (defined at: ./index.rsh:88:28:function exp)'],
    msg: 'ARC200: Approve to zero address',
    who: 'approve'
    });
  const v1567 = ['approve0_117', v1548];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1394, v1567],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:163:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1631], secs: v1633, time: v1632, didSend: v928, from: v1630 } = txn1;
      
      switch (v1631[0]) {
        case 'approve0_117': {
          const v1634 = v1631[1];
          sim_r.txns.push({
            kind: 'api',
            who: "approve"
            });
          ;
          const v1645 = v1634[stdlib.checkedBigNumberify('./index.rsh:163:10:spread', stdlib.UInt_max, '0')];
          const v1646 = v1634[stdlib.checkedBigNumberify('./index.rsh:163:10:spread', stdlib.UInt_max, '1')];
          const v1647 = v1634[stdlib.checkedBigNumberify('./index.rsh:163:10:spread', stdlib.UInt_max, '2')];
          const v1654 = [v1645, v1630, v1646];
          await stdlib.simMapSet(sim_r, 2, ctc9, v1654, ctc3, v1647);
          null;
          const v1655 = true;
          const v1656 = await txn1.getOutput('approve', 'v1655', ctc14, v1655);
          
          sim_r.isHalt = false;
          
          break;
          }
        case 'deleteAllowanceBox0_117': {
          const v1867 = v1631[1];
          
          break;
          }
        case 'deleteBalanceBox0_117': {
          const v2100 = v1631[1];
          
          break;
          }
        case 'mint0_117': {
          const v2333 = v1631[1];
          
          break;
          }
        case 'transfer0_117': {
          const v2566 = v1631[1];
          
          break;
          }
        case 'transferFrom0_117': {
          const v2799 = v1631[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1631], secs: v1633, time: v1632, didSend: v928, from: v1630 } = txn1;
  switch (v1631[0]) {
    case 'approve0_117': {
      const v1634 = v1631[1];
      undefined /* setApiDetails */;
      ;
      const v1645 = v1634[stdlib.checkedBigNumberify('./index.rsh:163:10:spread', stdlib.UInt_max, '0')];
      const v1646 = v1634[stdlib.checkedBigNumberify('./index.rsh:163:10:spread', stdlib.UInt_max, '1')];
      const v1647 = v1634[stdlib.checkedBigNumberify('./index.rsh:163:10:spread', stdlib.UInt_max, '2')];
      const v1648 = stdlib.addressEq(v1646, v1394);
      const v1649 = v1648 ? false : true;
      stdlib.assert(v1649, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:166:13:application call to [unknown function] (defined at: ./index.rsh:166:13:function exp)'],
        msg: 'ARC200: Approve to zero address',
        who: 'approve'
        });
      const v1654 = [v1645, v1630, v1646];
      await stdlib.mapSet(map2, ctc9, v1654, ctc3, v1647);
      null;
      const v1655 = true;
      const v1656 = await txn1.getOutput('approve', 'v1655', ctc14, v1655);
      if (v928) {
        stdlib.protect(ctc0, await interact.out(v1634, v1656), {
          at: './index.rsh:163:11:application',
          fs: ['at ./index.rsh:163:11:application call to [unknown function] (defined at: ./index.rsh:163:11:function exp)', 'at ./index.rsh:169:12:application call to "k" (defined at: ./index.rsh:166:13:function exp)', 'at ./index.rsh:166:13:application call to [unknown function] (defined at: ./index.rsh:166:13:function exp)'],
          msg: 'out',
          who: 'approve'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'deleteAllowanceBox0_117': {
      const v1867 = v1631[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_117': {
      const v2100 = v1631[1];
      return;
      break;
      }
    case 'mint0_117': {
      const v2333 = v1631[1];
      return;
      break;
      }
    case 'transfer0_117': {
      const v2566 = v1631[1];
      return;
      break;
      }
    case 'transferFrom0_117': {
      const v2799 = v1631[1];
      return;
      break;
      }
    }
  
  
  };
export async function _deleteAllowanceBox3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _deleteAllowanceBox3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _deleteAllowanceBox3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['name', ctc1], ['symbol', ctc2], ['decimals', ctc3], ['totalSupply', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc7, ctc7, ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc7, ctc7, ctc3]);
  const ctc10 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc11 = stdlib.T_Tuple([ctc7, ctc7, ctc4]);
  const ctc12 = stdlib.T_Tuple([ctc7, ctc7, ctc7, ctc3]);
  const ctc13 = stdlib.T_Data({
    approve0_117: ctc9,
    deleteAllowanceBox0_117: ctc8,
    deleteBalanceBox0_117: ctc10,
    mint0_117: ctc11,
    transfer0_117: ctc9,
    transferFrom0_117: ctc12
    });
  const ctc14 = stdlib.T_Bool;
  
  const map0_ctc = ctc5;
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
  
  const map2_ctc = ctc6;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  
  const [v1394] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc7]);
  const v1595 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:188:59:application call to [unknown function] (defined at: ./index.rsh:188:59:function exp)', 'at ./index.rsh:88:28:application call to "rundeleteAllowanceBox0_117" (defined at: ./index.rsh:188:10:function exp)', 'at ./index.rsh:88:28:application call to [unknown function] (defined at: ./index.rsh:88:28:function exp)'],
    msg: 'in',
    who: 'deleteAllowanceBox'
    });
  const v1596 = v1595[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1597 = v1595[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1598 = v1595[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v1602 = stdlib.addressEq(v1597, v1394);
  const v1603 = v1602 ? false : true;
  stdlib.assert(v1603, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:189:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:188:59:application call to [unknown function] (defined at: ./index.rsh:188:59:function exp)', 'at ./index.rsh:88:28:application call to "rundeleteAllowanceBox0_117" (defined at: ./index.rsh:188:10:function exp)', 'at ./index.rsh:88:28:application call to [unknown function] (defined at: ./index.rsh:88:28:function exp)'],
    msg: 'ARC200: Delete allowance box of zero address',
    who: 'deleteAllowanceBox'
    });
  const v1605 = stdlib.addressEq(v1598, v1394);
  const v1606 = v1605 ? false : true;
  stdlib.assert(v1606, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:188:59:application call to [unknown function] (defined at: ./index.rsh:188:59:function exp)', 'at ./index.rsh:88:28:application call to "rundeleteAllowanceBox0_117" (defined at: ./index.rsh:188:10:function exp)', 'at ./index.rsh:88:28:application call to [unknown function] (defined at: ./index.rsh:88:28:function exp)'],
    msg: 'ARC200: Delete allowance box to zero address',
    who: 'deleteAllowanceBox'
    });
  const v1608 = [v1596, v1597, v1598];
  const v1609 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v1608, ctc3), null);
  const v1610 = {
    None: 0,
    Some: 1
    }[v1609[0]];
  const v1611 = stdlib.eq(v1610, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1611, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:197:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:188:59:application call to [unknown function] (defined at: ./index.rsh:188:59:function exp)', 'at ./index.rsh:88:28:application call to "rundeleteAllowanceBox0_117" (defined at: ./index.rsh:188:10:function exp)', 'at ./index.rsh:88:28:application call to [unknown function] (defined at: ./index.rsh:88:28:function exp)'],
    msg: 'ARC200: Allowance box not found',
    who: 'deleteAllowanceBox'
    });
  const v1622 = ['deleteAllowanceBox0_117', v1595];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1394, v1622],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:188:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1631], secs: v1633, time: v1632, didSend: v928, from: v1630 } = txn1;
      
      switch (v1631[0]) {
        case 'approve0_117': {
          const v1634 = v1631[1];
          
          break;
          }
        case 'deleteAllowanceBox0_117': {
          const v1867 = v1631[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteAllowanceBox"
            });
          ;
          const v1899 = v1867[stdlib.checkedBigNumberify('./index.rsh:188:10:spread', stdlib.UInt_max, '0')];
          const v1900 = v1867[stdlib.checkedBigNumberify('./index.rsh:188:10:spread', stdlib.UInt_max, '1')];
          const v1901 = v1867[stdlib.checkedBigNumberify('./index.rsh:188:10:spread', stdlib.UInt_max, '2')];
          const v1908 = [v1899, v1900, v1901];
          const v1909 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc8, v1908, ctc3), null);
          const v1918 = stdlib.fromSome(v1909, stdlib.checkedBigNumberify('./index.rsh:97:32:decimal', stdlib.UInt_max, '0'));
          const v1919 = stdlib.eq(v1918, stdlib.checkedBigNumberify('./index.rsh:204:36:decimal', stdlib.UInt_max, '0'));
          if (v1919) {
            await stdlib.simMapSet(sim_r, 2, ctc8, v1908, ctc3, undefined /* Nothing */);
            const v1921 = true;
            const v1922 = await txn1.getOutput('deleteAllowanceBox', 'v1921', ctc14, v1921);
            
            sim_r.isHalt = false;
            }
          else {
            const v1931 = true;
            const v1932 = await txn1.getOutput('deleteAllowanceBox', 'v1931', ctc14, v1931);
            
            sim_r.isHalt = false;
            }
          break;
          }
        case 'deleteBalanceBox0_117': {
          const v2100 = v1631[1];
          
          break;
          }
        case 'mint0_117': {
          const v2333 = v1631[1];
          
          break;
          }
        case 'transfer0_117': {
          const v2566 = v1631[1];
          
          break;
          }
        case 'transferFrom0_117': {
          const v2799 = v1631[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1631], secs: v1633, time: v1632, didSend: v928, from: v1630 } = txn1;
  switch (v1631[0]) {
    case 'approve0_117': {
      const v1634 = v1631[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_117': {
      const v1867 = v1631[1];
      undefined /* setApiDetails */;
      ;
      const v1899 = v1867[stdlib.checkedBigNumberify('./index.rsh:188:10:spread', stdlib.UInt_max, '0')];
      const v1900 = v1867[stdlib.checkedBigNumberify('./index.rsh:188:10:spread', stdlib.UInt_max, '1')];
      const v1901 = v1867[stdlib.checkedBigNumberify('./index.rsh:188:10:spread', stdlib.UInt_max, '2')];
      const v1902 = stdlib.addressEq(v1900, v1394);
      const v1903 = v1902 ? false : true;
      stdlib.assert(v1903, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:189:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:13:application call to [unknown function] (defined at: ./index.rsh:202:13:function exp)'],
        msg: 'ARC200: Delete allowance box of zero address',
        who: 'deleteAllowanceBox'
        });
      const v1905 = stdlib.addressEq(v1901, v1394);
      const v1906 = v1905 ? false : true;
      stdlib.assert(v1906, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:193:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:13:application call to [unknown function] (defined at: ./index.rsh:202:13:function exp)'],
        msg: 'ARC200: Delete allowance box to zero address',
        who: 'deleteAllowanceBox'
        });
      const v1908 = [v1899, v1900, v1901];
      const v1909 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v1908, ctc3), null);
      const v1910 = {
        None: 0,
        Some: 1
        }[v1909[0]];
      const v1911 = stdlib.eq(v1910, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1911, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:197:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:13:application call to [unknown function] (defined at: ./index.rsh:202:13:function exp)'],
        msg: 'ARC200: Allowance box not found',
        who: 'deleteAllowanceBox'
        });
      const v1918 = stdlib.fromSome(v1909, stdlib.checkedBigNumberify('./index.rsh:97:32:decimal', stdlib.UInt_max, '0'));
      const v1919 = stdlib.eq(v1918, stdlib.checkedBigNumberify('./index.rsh:204:36:decimal', stdlib.UInt_max, '0'));
      if (v1919) {
        await stdlib.mapSet(map2, ctc8, v1908, ctc3, undefined /* Nothing */);
        const v1921 = true;
        const v1922 = await txn1.getOutput('deleteAllowanceBox', 'v1921', ctc14, v1921);
        if (v928) {
          stdlib.protect(ctc0, await interact.out(v1867, v1922), {
            at: './index.rsh:188:11:application',
            fs: ['at ./index.rsh:188:11:application call to [unknown function] (defined at: ./index.rsh:188:11:function exp)', 'at ./index.rsh:207:12:application call to "k" (defined at: ./index.rsh:202:13:function exp)', 'at ./index.rsh:202:13:application call to [unknown function] (defined at: ./index.rsh:202:13:function exp)'],
            msg: 'out',
            who: 'deleteAllowanceBox'
            });
          }
        else {
          }
        
        return;
        }
      else {
        const v1931 = true;
        const v1932 = await txn1.getOutput('deleteAllowanceBox', 'v1931', ctc14, v1931);
        if (v928) {
          stdlib.protect(ctc0, await interact.out(v1867, v1932), {
            at: './index.rsh:188:11:application',
            fs: ['at ./index.rsh:188:11:application call to [unknown function] (defined at: ./index.rsh:188:11:function exp)', 'at ./index.rsh:207:12:application call to "k" (defined at: ./index.rsh:202:13:function exp)', 'at ./index.rsh:202:13:application call to [unknown function] (defined at: ./index.rsh:202:13:function exp)'],
            msg: 'out',
            who: 'deleteAllowanceBox'
            });
          }
        else {
          }
        
        return;
        }
      break;
      }
    case 'deleteBalanceBox0_117': {
      const v2100 = v1631[1];
      return;
      break;
      }
    case 'mint0_117': {
      const v2333 = v1631[1];
      return;
      break;
      }
    case 'transfer0_117': {
      const v2566 = v1631[1];
      return;
      break;
      }
    case 'transferFrom0_117': {
      const v2799 = v1631[1];
      return;
      break;
      }
    }
  
  
  };
export async function _deleteBalanceBox3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _deleteBalanceBox3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _deleteBalanceBox3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['name', ctc1], ['symbol', ctc2], ['decimals', ctc3], ['totalSupply', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc7, ctc7, ctc3]);
  const ctc10 = stdlib.T_Tuple([ctc7, ctc7, ctc7]);
  const ctc11 = stdlib.T_Tuple([ctc7, ctc7, ctc4]);
  const ctc12 = stdlib.T_Tuple([ctc7, ctc7, ctc7, ctc3]);
  const ctc13 = stdlib.T_Data({
    approve0_117: ctc9,
    deleteAllowanceBox0_117: ctc10,
    deleteBalanceBox0_117: ctc8,
    mint0_117: ctc11,
    transfer0_117: ctc9,
    transferFrom0_117: ctc12
    });
  const ctc14 = stdlib.T_Bool;
  
  const map0_ctc = ctc5;
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
  
  const map2_ctc = ctc6;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  
  const [v1394] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc7]);
  const v1571 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:174:47:application call to [unknown function] (defined at: ./index.rsh:174:47:function exp)', 'at ./index.rsh:88:28:application call to "rundeleteBalanceBox0_117" (defined at: ./index.rsh:174:10:function exp)', 'at ./index.rsh:88:28:application call to [unknown function] (defined at: ./index.rsh:88:28:function exp)'],
    msg: 'in',
    who: 'deleteBalanceBox'
    });
  const v1572 = v1571[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1573 = v1571[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1576 = stdlib.addressEq(v1573, v1394);
  const v1577 = v1576 ? false : true;
  stdlib.assert(v1577, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:175:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:174:47:application call to [unknown function] (defined at: ./index.rsh:174:47:function exp)', 'at ./index.rsh:88:28:application call to "rundeleteBalanceBox0_117" (defined at: ./index.rsh:174:10:function exp)', 'at ./index.rsh:88:28:application call to [unknown function] (defined at: ./index.rsh:88:28:function exp)'],
    msg: 'ARC200: Delete balance box of zero address',
    who: 'deleteBalanceBox'
    });
  const v1579 = [v1572, v1573];
  const v1580 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc8, v1579, ctc3), null);
  const v1581 = {
    None: 0,
    Some: 1
    }[v1580[0]];
  const v1582 = stdlib.eq(v1581, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1582, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:176:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:174:47:application call to [unknown function] (defined at: ./index.rsh:174:47:function exp)', 'at ./index.rsh:88:28:application call to "rundeleteBalanceBox0_117" (defined at: ./index.rsh:174:10:function exp)', 'at ./index.rsh:88:28:application call to [unknown function] (defined at: ./index.rsh:88:28:function exp)'],
    msg: 'ARC200: Balance box not found',
    who: 'deleteBalanceBox'
    });
  const v1591 = ['deleteBalanceBox0_117', v1571];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1394, v1591],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:174:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1631], secs: v1633, time: v1632, didSend: v928, from: v1630 } = txn1;
      
      switch (v1631[0]) {
        case 'approve0_117': {
          const v1634 = v1631[1];
          
          break;
          }
        case 'deleteAllowanceBox0_117': {
          const v1867 = v1631[1];
          
          break;
          }
        case 'deleteBalanceBox0_117': {
          const v2100 = v1631[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteBalanceBox"
            });
          ;
          const v2175 = v2100[stdlib.checkedBigNumberify('./index.rsh:174:10:spread', stdlib.UInt_max, '0')];
          const v2176 = v2100[stdlib.checkedBigNumberify('./index.rsh:174:10:spread', stdlib.UInt_max, '1')];
          const v2180 = [v2175, v2176];
          const v2181 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc8, v2180, ctc3), null);
          const v2189 = stdlib.fromSome(v2181, stdlib.checkedBigNumberify('./index.rsh:92:32:decimal', stdlib.UInt_max, '0'));
          const v2190 = stdlib.eq(v2189, stdlib.checkedBigNumberify('./index.rsh:180:33:decimal', stdlib.UInt_max, '0'));
          if (v2190) {
            await stdlib.simMapSet(sim_r, 1, ctc8, v2180, ctc3, undefined /* Nothing */);
            const v2192 = true;
            const v2193 = await txn1.getOutput('deleteBalanceBox', 'v2192', ctc14, v2192);
            
            sim_r.isHalt = false;
            }
          else {
            const v2201 = true;
            const v2202 = await txn1.getOutput('deleteBalanceBox', 'v2201', ctc14, v2201);
            
            sim_r.isHalt = false;
            }
          break;
          }
        case 'mint0_117': {
          const v2333 = v1631[1];
          
          break;
          }
        case 'transfer0_117': {
          const v2566 = v1631[1];
          
          break;
          }
        case 'transferFrom0_117': {
          const v2799 = v1631[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1631], secs: v1633, time: v1632, didSend: v928, from: v1630 } = txn1;
  switch (v1631[0]) {
    case 'approve0_117': {
      const v1634 = v1631[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_117': {
      const v1867 = v1631[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_117': {
      const v2100 = v1631[1];
      undefined /* setApiDetails */;
      ;
      const v2175 = v2100[stdlib.checkedBigNumberify('./index.rsh:174:10:spread', stdlib.UInt_max, '0')];
      const v2176 = v2100[stdlib.checkedBigNumberify('./index.rsh:174:10:spread', stdlib.UInt_max, '1')];
      const v2177 = stdlib.addressEq(v2176, v1394);
      const v2178 = v2177 ? false : true;
      stdlib.assert(v2178, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:175:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:13:function exp)'],
        msg: 'ARC200: Delete balance box of zero address',
        who: 'deleteBalanceBox'
        });
      const v2180 = [v2175, v2176];
      const v2181 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc8, v2180, ctc3), null);
      const v2182 = {
        None: 0,
        Some: 1
        }[v2181[0]];
      const v2183 = stdlib.eq(v2182, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2183, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:176:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:13:function exp)'],
        msg: 'ARC200: Balance box not found',
        who: 'deleteBalanceBox'
        });
      const v2189 = stdlib.fromSome(v2181, stdlib.checkedBigNumberify('./index.rsh:92:32:decimal', stdlib.UInt_max, '0'));
      const v2190 = stdlib.eq(v2189, stdlib.checkedBigNumberify('./index.rsh:180:33:decimal', stdlib.UInt_max, '0'));
      if (v2190) {
        await stdlib.mapSet(map1, ctc8, v2180, ctc3, undefined /* Nothing */);
        const v2192 = true;
        const v2193 = await txn1.getOutput('deleteBalanceBox', 'v2192', ctc14, v2192);
        if (v928) {
          stdlib.protect(ctc0, await interact.out(v2100, v2193), {
            at: './index.rsh:174:11:application',
            fs: ['at ./index.rsh:174:11:application call to [unknown function] (defined at: ./index.rsh:174:11:function exp)', 'at ./index.rsh:183:12:application call to "k" (defined at: ./index.rsh:178:13:function exp)', 'at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:13:function exp)'],
            msg: 'out',
            who: 'deleteBalanceBox'
            });
          }
        else {
          }
        
        return;
        }
      else {
        const v2201 = true;
        const v2202 = await txn1.getOutput('deleteBalanceBox', 'v2201', ctc14, v2201);
        if (v928) {
          stdlib.protect(ctc0, await interact.out(v2100, v2202), {
            at: './index.rsh:174:11:application',
            fs: ['at ./index.rsh:174:11:application call to [unknown function] (defined at: ./index.rsh:174:11:function exp)', 'at ./index.rsh:183:12:application call to "k" (defined at: ./index.rsh:178:13:function exp)', 'at ./index.rsh:178:13:application call to [unknown function] (defined at: ./index.rsh:178:13:function exp)'],
            msg: 'out',
            who: 'deleteBalanceBox'
            });
          }
        else {
          }
        
        return;
        }
      break;
      }
    case 'mint0_117': {
      const v2333 = v1631[1];
      return;
      break;
      }
    case 'transfer0_117': {
      const v2566 = v1631[1];
      return;
      break;
      }
    case 'transferFrom0_117': {
      const v2799 = v1631[1];
      return;
      break;
      }
    }
  
  
  };
export async function _mint3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _mint3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _mint3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['name', ctc1], ['symbol', ctc2], ['decimals', ctc3], ['totalSupply', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc7, ctc7, ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc7, ctc7, ctc3]);
  const ctc10 = stdlib.T_Tuple([ctc7, ctc7, ctc7]);
  const ctc11 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc12 = stdlib.T_Tuple([ctc7, ctc7, ctc7, ctc3]);
  const ctc13 = stdlib.T_Data({
    approve0_117: ctc9,
    deleteAllowanceBox0_117: ctc10,
    deleteBalanceBox0_117: ctc11,
    mint0_117: ctc8,
    transfer0_117: ctc9,
    transferFrom0_117: ctc12
    });
  const ctc14 = stdlib.T_Bool;
  
  const map0_ctc = ctc5;
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
  
  const map2_ctc = ctc6;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  
  const [v1394] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc7]);
  const v1446 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:103:41:application call to [unknown function] (defined at: ./index.rsh:103:41:function exp)', 'at ./index.rsh:88:28:application call to "runmint0_117" (defined at: ./index.rsh:103:10:function exp)', 'at ./index.rsh:88:28:application call to [unknown function] (defined at: ./index.rsh:88:28:function exp)'],
    msg: 'in',
    who: 'mint'
    });
  const v1449 = v1446[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v1452 = v1449.decimals;
  const v1453 = v1449.totalSupply;
  const v1458 = stdlib.gt(v1453, stdlib.checkedBigNumberify('./index.rsh:104:32:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1458, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:104:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:103:41:application call to [unknown function] (defined at: ./index.rsh:103:41:function exp)', 'at ./index.rsh:88:28:application call to "runmint0_117" (defined at: ./index.rsh:103:10:function exp)', 'at ./index.rsh:88:28:application call to [unknown function] (defined at: ./index.rsh:88:28:function exp)'],
    msg: 'totalSupply must be greater than zero',
    who: 'mint'
    });
  const v1461 = stdlib.lt(v1452, stdlib.checkedBigNumberify('./index.rsh:3:22:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v1461, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:105:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:103:41:application call to [unknown function] (defined at: ./index.rsh:103:41:function exp)', 'at ./index.rsh:88:28:application call to "runmint0_117" (defined at: ./index.rsh:103:10:function exp)', 'at ./index.rsh:88:28:application call to [unknown function] (defined at: ./index.rsh:88:28:function exp)'],
    msg: 'decimals must be less than 256 (fits in UInt8)',
    who: 'mint'
    });
  const v1476 = ['mint0_117', v1446];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1394, v1476],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:103:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1631], secs: v1633, time: v1632, didSend: v928, from: v1630 } = txn1;
      
      switch (v1631[0]) {
        case 'approve0_117': {
          const v1634 = v1631[1];
          
          break;
          }
        case 'deleteAllowanceBox0_117': {
          const v1867 = v1631[1];
          
          break;
          }
        case 'deleteBalanceBox0_117': {
          const v2100 = v1631[1];
          
          break;
          }
        case 'mint0_117': {
          const v2333 = v1631[1];
          sim_r.txns.push({
            kind: 'api',
            who: "mint"
            });
          ;
          const v2444 = v2333[stdlib.checkedBigNumberify('./index.rsh:103:10:spread', stdlib.UInt_max, '0')];
          const v2445 = v2333[stdlib.checkedBigNumberify('./index.rsh:103:10:spread', stdlib.UInt_max, '1')];
          const v2446 = v2333[stdlib.checkedBigNumberify('./index.rsh:103:10:spread', stdlib.UInt_max, '2')];
          const v2447 = v2446.totalSupply;
          const v2450 = v2446.decimals;
          const v2456 = v2446.name;
          const v2457 = v2446.symbol;
          const v2460 = {
            decimals: v2450,
            name: v2456,
            symbol: v2457,
            totalSupply: v2447
            };
          await stdlib.simMapSet(sim_r, 0, ctc7, v2444, ctc4, v2460);
          const v2461 = [v2444, v2445];
          await stdlib.simMapSet(sim_r, 1, ctc11, v2461, ctc3, v2447);
          null;
          null;
          const v2464 = true;
          const v2465 = await txn1.getOutput('mint', 'v2464', ctc14, v2464);
          
          sim_r.isHalt = false;
          
          break;
          }
        case 'transfer0_117': {
          const v2566 = v1631[1];
          
          break;
          }
        case 'transferFrom0_117': {
          const v2799 = v1631[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1631], secs: v1633, time: v1632, didSend: v928, from: v1630 } = txn1;
  switch (v1631[0]) {
    case 'approve0_117': {
      const v1634 = v1631[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_117': {
      const v1867 = v1631[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_117': {
      const v2100 = v1631[1];
      return;
      break;
      }
    case 'mint0_117': {
      const v2333 = v1631[1];
      undefined /* setApiDetails */;
      ;
      const v2444 = v2333[stdlib.checkedBigNumberify('./index.rsh:103:10:spread', stdlib.UInt_max, '0')];
      const v2445 = v2333[stdlib.checkedBigNumberify('./index.rsh:103:10:spread', stdlib.UInt_max, '1')];
      const v2446 = v2333[stdlib.checkedBigNumberify('./index.rsh:103:10:spread', stdlib.UInt_max, '2')];
      const v2447 = v2446.totalSupply;
      const v2448 = stdlib.gt(v2447, stdlib.checkedBigNumberify('./index.rsh:104:32:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v2448, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:104:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:110:13:application call to [unknown function] (defined at: ./index.rsh:110:13:function exp)'],
        msg: 'totalSupply must be greater than zero',
        who: 'mint'
        });
      const v2450 = v2446.decimals;
      const v2451 = stdlib.lt(v2450, stdlib.checkedBigNumberify('./index.rsh:3:22:decimal', stdlib.UInt_max, '256'));
      stdlib.assert(v2451, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:105:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:110:13:application call to [unknown function] (defined at: ./index.rsh:110:13:function exp)'],
        msg: 'decimals must be less than 256 (fits in UInt8)',
        who: 'mint'
        });
      const v2456 = v2446.name;
      const v2457 = v2446.symbol;
      const v2460 = {
        decimals: v2450,
        name: v2456,
        symbol: v2457,
        totalSupply: v2447
        };
      await stdlib.mapSet(map0, ctc7, v2444, ctc4, v2460);
      const v2461 = [v2444, v2445];
      await stdlib.mapSet(map1, ctc11, v2461, ctc3, v2447);
      null;
      null;
      const v2464 = true;
      const v2465 = await txn1.getOutput('mint', 'v2464', ctc14, v2464);
      if (v928) {
        stdlib.protect(ctc0, await interact.out(v2333, v2465), {
          at: './index.rsh:103:11:application',
          fs: ['at ./index.rsh:103:11:application call to [unknown function] (defined at: ./index.rsh:103:11:function exp)', 'at ./index.rsh:115:12:application call to "k" (defined at: ./index.rsh:110:13:function exp)', 'at ./index.rsh:110:13:application call to [unknown function] (defined at: ./index.rsh:110:13:function exp)'],
          msg: 'out',
          who: 'mint'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'transfer0_117': {
      const v2566 = v1631[1];
      return;
      break;
      }
    case 'transferFrom0_117': {
      const v2799 = v1631[1];
      return;
      break;
      }
    }
  
  
  };
export async function _transfer3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _transfer3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _transfer3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['name', ctc1], ['symbol', ctc2], ['decimals', ctc3], ['totalSupply', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc7, ctc7, ctc3]);
  const ctc9 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc10 = stdlib.T_Tuple([ctc7, ctc7, ctc7]);
  const ctc11 = stdlib.T_Tuple([ctc7, ctc7, ctc4]);
  const ctc12 = stdlib.T_Tuple([ctc7, ctc7, ctc7, ctc3]);
  const ctc13 = stdlib.T_Data({
    approve0_117: ctc8,
    deleteAllowanceBox0_117: ctc10,
    deleteBalanceBox0_117: ctc9,
    mint0_117: ctc11,
    transfer0_117: ctc8,
    transferFrom0_117: ctc12
    });
  const ctc14 = stdlib.T_Bool;
  
  const map0_ctc = ctc5;
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
  
  const map2_ctc = ctc6;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  
  const [v1394] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc7]);
  const v1478 = ctc.selfAddress();
  const v1480 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:127:45:application call to [unknown function] (defined at: ./index.rsh:127:45:function exp)', 'at ./index.rsh:88:28:application call to "runtransfer0_117" (defined at: ./index.rsh:127:10:function exp)', 'at ./index.rsh:88:28:application call to [unknown function] (defined at: ./index.rsh:88:28:function exp)'],
    msg: 'in',
    who: 'transfer'
    });
  const v1481 = v1480[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1482 = v1480[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1483 = v1480[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v1487 = stdlib.addressEq(v1482, v1394);
  const v1488 = v1487 ? false : true;
  stdlib.assert(v1488, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:128:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:127:45:application call to [unknown function] (defined at: ./index.rsh:127:45:function exp)', 'at ./index.rsh:88:28:application call to "runtransfer0_117" (defined at: ./index.rsh:127:10:function exp)', 'at ./index.rsh:88:28:application call to [unknown function] (defined at: ./index.rsh:88:28:function exp)'],
    msg: 'ARC200: Transfer to zero address',
    who: 'transfer'
    });
  const v1490 = [v1481, v1478];
  const v1491 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc9, v1490, ctc3), null);
  const v1492 = stdlib.fromSome(v1491, stdlib.checkedBigNumberify('./index.rsh:92:32:decimal', stdlib.UInt_max, '0'));
  const v1493 = stdlib.ge(v1492, v1483);
  stdlib.assert(v1493, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:129:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:127:45:application call to [unknown function] (defined at: ./index.rsh:127:45:function exp)', 'at ./index.rsh:88:28:application call to "runtransfer0_117" (defined at: ./index.rsh:127:10:function exp)', 'at ./index.rsh:88:28:application call to [unknown function] (defined at: ./index.rsh:88:28:function exp)'],
    msg: 'amount must not be greater than balance',
    who: 'transfer'
    });
  const v1504 = ['transfer0_117', v1480];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1394, v1504],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:127:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1631], secs: v1633, time: v1632, didSend: v928, from: v1630 } = txn1;
      
      switch (v1631[0]) {
        case 'approve0_117': {
          const v1634 = v1631[1];
          
          break;
          }
        case 'deleteAllowanceBox0_117': {
          const v1867 = v1631[1];
          
          break;
          }
        case 'deleteBalanceBox0_117': {
          const v2100 = v1631[1];
          
          break;
          }
        case 'mint0_117': {
          const v2333 = v1631[1];
          
          break;
          }
        case 'transfer0_117': {
          const v2566 = v1631[1];
          sim_r.txns.push({
            kind: 'api',
            who: "transfer"
            });
          ;
          const v2712 = v2566[stdlib.checkedBigNumberify('./index.rsh:127:10:spread', stdlib.UInt_max, '0')];
          const v2713 = v2566[stdlib.checkedBigNumberify('./index.rsh:127:10:spread', stdlib.UInt_max, '1')];
          const v2714 = v2566[stdlib.checkedBigNumberify('./index.rsh:127:10:spread', stdlib.UInt_max, '2')];
          const v2718 = [v2712, v1630];
          const v2719 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc9, v2718, ctc3), null);
          const v2720 = stdlib.fromSome(v2719, stdlib.checkedBigNumberify('./index.rsh:92:32:decimal', stdlib.UInt_max, '0'));
          const v2730 = stdlib.safeSub(v2720, v2714);
          await stdlib.simMapSet(sim_r, 1, ctc9, v2718, ctc3, v2730);
          const v2731 = [v2712, v2713];
          const v2733 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc9, v2731, ctc3), null);
          const v2734 = stdlib.fromSome(v2733, stdlib.checkedBigNumberify('./index.rsh:92:32:decimal', stdlib.UInt_max, '0'));
          const v2735 = stdlib.safeAdd(v2734, v2714);
          await stdlib.simMapSet(sim_r, 1, ctc9, v2731, ctc3, v2735);
          null;
          const v2737 = true;
          const v2738 = await txn1.getOutput('transfer', 'v2737', ctc14, v2737);
          
          sim_r.isHalt = false;
          
          break;
          }
        case 'transferFrom0_117': {
          const v2799 = v1631[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1631], secs: v1633, time: v1632, didSend: v928, from: v1630 } = txn1;
  switch (v1631[0]) {
    case 'approve0_117': {
      const v1634 = v1631[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_117': {
      const v1867 = v1631[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_117': {
      const v2100 = v1631[1];
      return;
      break;
      }
    case 'mint0_117': {
      const v2333 = v1631[1];
      return;
      break;
      }
    case 'transfer0_117': {
      const v2566 = v1631[1];
      undefined /* setApiDetails */;
      ;
      const v2712 = v2566[stdlib.checkedBigNumberify('./index.rsh:127:10:spread', stdlib.UInt_max, '0')];
      const v2713 = v2566[stdlib.checkedBigNumberify('./index.rsh:127:10:spread', stdlib.UInt_max, '1')];
      const v2714 = v2566[stdlib.checkedBigNumberify('./index.rsh:127:10:spread', stdlib.UInt_max, '2')];
      const v2715 = stdlib.addressEq(v2713, v1394);
      const v2716 = v2715 ? false : true;
      stdlib.assert(v2716, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:128:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
        msg: 'ARC200: Transfer to zero address',
        who: 'transfer'
        });
      const v2718 = [v2712, v1630];
      const v2719 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc9, v2718, ctc3), null);
      const v2720 = stdlib.fromSome(v2719, stdlib.checkedBigNumberify('./index.rsh:92:32:decimal', stdlib.UInt_max, '0'));
      const v2721 = stdlib.ge(v2720, v2714);
      stdlib.assert(v2721, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:129:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
        msg: 'amount must not be greater than balance',
        who: 'transfer'
        });
      const v2730 = stdlib.safeSub(v2720, v2714);
      await stdlib.mapSet(map1, ctc9, v2718, ctc3, v2730);
      const v2731 = [v2712, v2713];
      const v2733 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc9, v2731, ctc3), null);
      const v2734 = stdlib.fromSome(v2733, stdlib.checkedBigNumberify('./index.rsh:92:32:decimal', stdlib.UInt_max, '0'));
      const v2735 = stdlib.safeAdd(v2734, v2714);
      await stdlib.mapSet(map1, ctc9, v2731, ctc3, v2735);
      null;
      const v2737 = true;
      const v2738 = await txn1.getOutput('transfer', 'v2737', ctc14, v2737);
      if (v928) {
        stdlib.protect(ctc0, await interact.out(v2566, v2738), {
          at: './index.rsh:127:11:application',
          fs: ['at ./index.rsh:127:11:application call to [unknown function] (defined at: ./index.rsh:127:11:function exp)', 'at ./index.rsh:136:12:application call to "k" (defined at: ./index.rsh:134:13:function exp)', 'at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
          msg: 'out',
          who: 'transfer'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'transferFrom0_117': {
      const v2799 = v1631[1];
      return;
      break;
      }
    }
  
  
  };
export async function _transferFrom3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _transferFrom3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _transferFrom3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['name', ctc1], ['symbol', ctc2], ['decimals', ctc3], ['totalSupply', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc7, ctc7, ctc7, ctc3]);
  const ctc9 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc10 = stdlib.T_Tuple([ctc7, ctc7, ctc7]);
  const ctc11 = stdlib.T_Tuple([ctc7, ctc7, ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc7, ctc7, ctc4]);
  const ctc13 = stdlib.T_Data({
    approve0_117: ctc11,
    deleteAllowanceBox0_117: ctc10,
    deleteBalanceBox0_117: ctc9,
    mint0_117: ctc12,
    transfer0_117: ctc11,
    transferFrom0_117: ctc8
    });
  const ctc14 = stdlib.T_Bool;
  
  const map0_ctc = ctc5;
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
  
  const map2_ctc = ctc6;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  
  const [v1394] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc7]);
  const v1506 = ctc.selfAddress();
  const v1508 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:141:56:application call to [unknown function] (defined at: ./index.rsh:141:56:function exp)', 'at ./index.rsh:88:28:application call to "runtransferFrom0_117" (defined at: ./index.rsh:141:10:function exp)', 'at ./index.rsh:88:28:application call to [unknown function] (defined at: ./index.rsh:88:28:function exp)'],
    msg: 'in',
    who: 'transferFrom'
    });
  const v1509 = v1508[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1510 = v1508[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1511 = v1508[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v1512 = v1508[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '3')];
  const v1517 = stdlib.addressEq(v1510, v1394);
  const v1518 = v1517 ? false : true;
  stdlib.assert(v1518, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:142:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:141:56:application call to [unknown function] (defined at: ./index.rsh:141:56:function exp)', 'at ./index.rsh:88:28:application call to "runtransferFrom0_117" (defined at: ./index.rsh:141:10:function exp)', 'at ./index.rsh:88:28:application call to [unknown function] (defined at: ./index.rsh:88:28:function exp)'],
    msg: 'ARC200: Transfer from zero address',
    who: 'transferFrom'
    });
  const v1520 = stdlib.addressEq(v1511, v1394);
  const v1521 = v1520 ? false : true;
  stdlib.assert(v1521, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:143:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:141:56:application call to [unknown function] (defined at: ./index.rsh:141:56:function exp)', 'at ./index.rsh:88:28:application call to "runtransferFrom0_117" (defined at: ./index.rsh:141:10:function exp)', 'at ./index.rsh:88:28:application call to [unknown function] (defined at: ./index.rsh:88:28:function exp)'],
    msg: 'ARC200: Transfer to zero address',
    who: 'transferFrom'
    });
  const v1523 = [v1509, v1510];
  const v1524 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc9, v1523, ctc3), null);
  const v1525 = stdlib.fromSome(v1524, stdlib.checkedBigNumberify('./index.rsh:92:32:decimal', stdlib.UInt_max, '0'));
  const v1526 = stdlib.ge(v1525, v1512);
  stdlib.assert(v1526, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:144:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:141:56:application call to [unknown function] (defined at: ./index.rsh:141:56:function exp)', 'at ./index.rsh:88:28:application call to "runtransferFrom0_117" (defined at: ./index.rsh:141:10:function exp)', 'at ./index.rsh:88:28:application call to [unknown function] (defined at: ./index.rsh:88:28:function exp)'],
    msg: 'amount must not be greater than balance',
    who: 'transferFrom'
    });
  const v1528 = [v1509, v1510, v1506];
  const v1529 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc10, v1528, ctc3), null);
  const v1530 = stdlib.fromSome(v1529, stdlib.checkedBigNumberify('./index.rsh:97:32:decimal', stdlib.UInt_max, '0'));
  const v1531 = stdlib.ge(v1530, v1512);
  stdlib.assert(v1531, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:148:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:141:56:application call to [unknown function] (defined at: ./index.rsh:141:56:function exp)', 'at ./index.rsh:88:28:application call to "runtransferFrom0_117" (defined at: ./index.rsh:141:10:function exp)', 'at ./index.rsh:88:28:application call to [unknown function] (defined at: ./index.rsh:88:28:function exp)'],
    msg: 'amount must not be greater than allowance',
    who: 'transferFrom'
    });
  const v1544 = ['transferFrom0_117', v1508];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1394, v1544],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:141:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1631], secs: v1633, time: v1632, didSend: v928, from: v1630 } = txn1;
      
      switch (v1631[0]) {
        case 'approve0_117': {
          const v1634 = v1631[1];
          
          break;
          }
        case 'deleteAllowanceBox0_117': {
          const v1867 = v1631[1];
          
          break;
          }
        case 'deleteBalanceBox0_117': {
          const v2100 = v1631[1];
          
          break;
          }
        case 'mint0_117': {
          const v2333 = v1631[1];
          
          break;
          }
        case 'transfer0_117': {
          const v2566 = v1631[1];
          
          break;
          }
        case 'transferFrom0_117': {
          const v2799 = v1631[1];
          sim_r.txns.push({
            kind: 'api',
            who: "transferFrom"
            });
          ;
          const v2981 = v2799[stdlib.checkedBigNumberify('./index.rsh:141:10:spread', stdlib.UInt_max, '0')];
          const v2982 = v2799[stdlib.checkedBigNumberify('./index.rsh:141:10:spread', stdlib.UInt_max, '1')];
          const v2983 = v2799[stdlib.checkedBigNumberify('./index.rsh:141:10:spread', stdlib.UInt_max, '2')];
          const v2984 = v2799[stdlib.checkedBigNumberify('./index.rsh:141:10:spread', stdlib.UInt_max, '3')];
          const v2991 = [v2981, v2982];
          const v2992 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc9, v2991, ctc3), null);
          const v2993 = stdlib.fromSome(v2992, stdlib.checkedBigNumberify('./index.rsh:92:32:decimal', stdlib.UInt_max, '0'));
          const v2996 = [v2981, v2982, v1630];
          const v2997 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc10, v2996, ctc3), null);
          const v2998 = stdlib.fromSome(v2997, stdlib.checkedBigNumberify('./index.rsh:97:32:decimal', stdlib.UInt_max, '0'));
          const v3009 = stdlib.safeSub(v2993, v2984);
          await stdlib.simMapSet(sim_r, 1, ctc9, v2991, ctc3, v3009);
          const v3010 = [v2981, v2983];
          const v3012 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc9, v3010, ctc3), null);
          const v3013 = stdlib.fromSome(v3012, stdlib.checkedBigNumberify('./index.rsh:92:32:decimal', stdlib.UInt_max, '0'));
          const v3014 = stdlib.safeAdd(v3013, v2984);
          await stdlib.simMapSet(sim_r, 1, ctc9, v3010, ctc3, v3014);
          null;
          const v3019 = stdlib.safeSub(v2998, v2984);
          await stdlib.simMapSet(sim_r, 2, ctc10, v2996, ctc3, v3019);
          null;
          const v3021 = true;
          const v3022 = await txn1.getOutput('transferFrom', 'v3021', ctc14, v3021);
          
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1631], secs: v1633, time: v1632, didSend: v928, from: v1630 } = txn1;
  switch (v1631[0]) {
    case 'approve0_117': {
      const v1634 = v1631[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_117': {
      const v1867 = v1631[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_117': {
      const v2100 = v1631[1];
      return;
      break;
      }
    case 'mint0_117': {
      const v2333 = v1631[1];
      return;
      break;
      }
    case 'transfer0_117': {
      const v2566 = v1631[1];
      return;
      break;
      }
    case 'transferFrom0_117': {
      const v2799 = v1631[1];
      undefined /* setApiDetails */;
      ;
      const v2981 = v2799[stdlib.checkedBigNumberify('./index.rsh:141:10:spread', stdlib.UInt_max, '0')];
      const v2982 = v2799[stdlib.checkedBigNumberify('./index.rsh:141:10:spread', stdlib.UInt_max, '1')];
      const v2983 = v2799[stdlib.checkedBigNumberify('./index.rsh:141:10:spread', stdlib.UInt_max, '2')];
      const v2984 = v2799[stdlib.checkedBigNumberify('./index.rsh:141:10:spread', stdlib.UInt_max, '3')];
      const v2985 = stdlib.addressEq(v2982, v1394);
      const v2986 = v2985 ? false : true;
      stdlib.assert(v2986, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:142:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:153:13:application call to [unknown function] (defined at: ./index.rsh:153:13:function exp)'],
        msg: 'ARC200: Transfer from zero address',
        who: 'transferFrom'
        });
      const v2988 = stdlib.addressEq(v2983, v1394);
      const v2989 = v2988 ? false : true;
      stdlib.assert(v2989, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:143:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:153:13:application call to [unknown function] (defined at: ./index.rsh:153:13:function exp)'],
        msg: 'ARC200: Transfer to zero address',
        who: 'transferFrom'
        });
      const v2991 = [v2981, v2982];
      const v2992 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc9, v2991, ctc3), null);
      const v2993 = stdlib.fromSome(v2992, stdlib.checkedBigNumberify('./index.rsh:92:32:decimal', stdlib.UInt_max, '0'));
      const v2994 = stdlib.ge(v2993, v2984);
      stdlib.assert(v2994, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:144:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:153:13:application call to [unknown function] (defined at: ./index.rsh:153:13:function exp)'],
        msg: 'amount must not be greater than balance',
        who: 'transferFrom'
        });
      const v2996 = [v2981, v2982, v1630];
      const v2997 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc10, v2996, ctc3), null);
      const v2998 = stdlib.fromSome(v2997, stdlib.checkedBigNumberify('./index.rsh:97:32:decimal', stdlib.UInt_max, '0'));
      const v2999 = stdlib.ge(v2998, v2984);
      stdlib.assert(v2999, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:148:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:153:13:application call to [unknown function] (defined at: ./index.rsh:153:13:function exp)'],
        msg: 'amount must not be greater than allowance',
        who: 'transferFrom'
        });
      const v3009 = stdlib.safeSub(v2993, v2984);
      await stdlib.mapSet(map1, ctc9, v2991, ctc3, v3009);
      const v3010 = [v2981, v2983];
      const v3012 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc9, v3010, ctc3), null);
      const v3013 = stdlib.fromSome(v3012, stdlib.checkedBigNumberify('./index.rsh:92:32:decimal', stdlib.UInt_max, '0'));
      const v3014 = stdlib.safeAdd(v3013, v2984);
      await stdlib.mapSet(map1, ctc9, v3010, ctc3, v3014);
      null;
      const v3019 = stdlib.safeSub(v2998, v2984);
      await stdlib.mapSet(map2, ctc10, v2996, ctc3, v3019);
      null;
      const v3021 = true;
      const v3022 = await txn1.getOutput('transferFrom', 'v3021', ctc14, v3021);
      if (v928) {
        stdlib.protect(ctc0, await interact.out(v2799, v3022), {
          at: './index.rsh:141:11:application',
          fs: ['at ./index.rsh:141:11:application call to [unknown function] (defined at: ./index.rsh:141:11:function exp)', 'at ./index.rsh:158:12:application call to "k" (defined at: ./index.rsh:153:13:function exp)', 'at ./index.rsh:153:13:application call to [unknown function] (defined at: ./index.rsh:153:13:function exp)'],
          msg: 'out',
          who: 'transferFrom'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    }
  
  
  };
export async function approve(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for approve expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for approve expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _approve3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function deleteAllowanceBox(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for deleteAllowanceBox expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for deleteAllowanceBox expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _deleteAllowanceBox3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function deleteBalanceBox(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for deleteBalanceBox expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for deleteBalanceBox expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _deleteBalanceBox3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function mint(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for mint expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for mint expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _mint3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function transfer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for transfer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for transfer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _transfer3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function transferFrom(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for transferFrom expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for transferFrom expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _transferFrom3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`_reachp_0((uint64,address))void`, `_reachp_2((uint64,(byte,byte[120])))void`, `approve(address,address,uint64)byte`, `deleteAllowanceBox(address,address,address)byte`, `deleteBalanceBox(address,address)byte`, `mint(address,address,(byte[32],byte[8],uint64,uint64))byte`, `transfer(address,address,uint64)byte`, `transferFrom(address,address,address,uint64)byte`],
    pure: [`allowance(address,address,address)uint64`, `balanceOf(address,address)uint64`, `decimals(address)uint64`, `name(address)byte[32]`, `symbol(address)byte[8]`, `totalSupply(address)uint64`],
    sigs: [`_reachp_0((uint64,address))void`, `_reachp_2((uint64,(byte,byte[120])))void`, `allowance(address,address,address)uint64`, `approve(address,address,uint64)byte`, `balanceOf(address,address)uint64`, `decimals(address)uint64`, `deleteAllowanceBox(address,address,address)byte`, `deleteBalanceBox(address,address)byte`, `mint(address,address,(byte[32],byte[8],uint64,uint64))byte`, `name(address)byte[32]`, `symbol(address)byte[8]`, `totalSupply(address)uint64`, `transfer(address,address,uint64)byte`, `transferFrom(address,address,address,uint64)byte`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAICAABxJABAzgwQCYHAAgAAAAAAAAAAQEACAAAAAAAAAACOCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABECSoMME0j/iMjEYQQXhKGRJI1s1ASJbNQIqZIIOBB9BKlQEITmUwgQ1x8/sBDvjuUUEYcn1JgR8RRs4BIcQxHEEjiHOxwSOgfRrBKe4vh0EqLposwS13rYrBM49FCQEzo8iKzYaAI4OBqIFrwVOBroGigWcBWAGkgZ4BdYFxAaaBbwFigA0C1cAIDUQNAtXICA1DTQLIQdbNQw0DTQPE0QlKzQQMQBQNA1QUAE0DBaIBvgnBjQQUDEAUDQNUDQMFlCwJDULgAgAAAAAAAAGdzQLFlEHCFCwNAsWUQcINQQyBjUONA8hBDIGNQI1ASpMVwAgZyg0ARY0AhZQZzEZIxJEiAbONANAAAqABBUffHU0BFCwJEM0C1cgIDUQNAtXQCA1DTQQNA8TRDQNNA8TRDQLVwAgNBBQNA1QNQwoIq8rNAxQAYgGWEk1CyNVJBJEIq80C4gGQBdABSElKzQMUAGIBnskNQuACAAAAAAAAAeBNAsWUQcIULA0CxZRBwg1BDIGNQ5C/1w0C1cgIEk1DTQPE0Q0C1cAIDQNUDUMKCKvKTQMUAGIBfdJNQsjVSQSRCKvNAuIBd8XQATkJSk0DFABiAYaJDULgAgAAAAAAAAIkDQLFlEHCFCwNAsWUQcINQQyBjUOQv77NAtXACA1EDQLVyAgNQ00C1dAOEk1DCEGW0k1ESMNRDQMgShbSTULgYACDESB1KkCKjQQUDQMVwAgNAxXIAhQNAsWUDQRFlCIBXglKTQQNA1QUAE0ERaIBWmABFHNkFQ0EFCwJwU0EFA0D1A0DVA0ERZQsCQ1C4AIAAAAAAAACaA0CxZRBwhQsDQLFlEHCDUEMgY1DkL+ZDQLVwAgNRA0C1cgIDUNNAshB1s1DDQNNA8TRDQQMQBQNREirygiryk0EVABiATxiATlF0k1CzQMD0QlKTQRUAE0CzQMCRaIBOI0EDQNUDULJSk0C1ABIq8oIq8pNAtQAYgEvYgEsRc0DAgWiAS9JwU0EFAxAFA0DVA0DBZQsCQ1C4AIAAAAAAAACrE0CxZRBwhQsDQLFlEHCDUEMgY1DkL9wjQLVwAgNRE0C1cgIDUQNAtXQCA1DTQLgWBbNQw0EDQPE0Q0DTQPE0Q0ETQQUDUUIq8oIq8pNBRQAYgEQogENhdJNQs0DA9ENBE0EFAxAFA1EyKvKCKvKzQTUAGIBCCIBBQXSTUSNAwPRCUpNBRQATQLNAwJFogEETQRNA1QNQslKTQLUAEirygiryk0C1ABiAPsiAPgFzQMCBaIA+wnBTQRUDQQUDQNUDQMFlCwNBI0DAk1CyUrNBNQATQLFogDyScGNBFQNBBQMQBQNAsWULAkNQuACAAAAAAAAAvNNAsWUQcIULA0CxZRBwg1BDIGNQ5C/M40ASEEEkSIA5oirygirys0DTQMUDQLUFABiANuiANiNQQxGSMSREL8yyKvKjQNNAxQNAsWUFAhBq9QUDULIQQ0ARJEiANdNAsjWzUMNAtXCHk1DYAEUJ0nsjQMFlA0DVCwNAyIA0c0DSNVjQYCRwJRAlsCZQHaAeRC+/Q0ASEEEkSIAx8irygiryk0DDQLUFABiAL2iALqNQRC/4U0ASEEEkSIAv4nBCghBa8qNAtQiALYiALMVygINQRC/2Qir4ABATQNNAxQNAtQUIEYr1BQNQtC/2gir4ABAjQMNAtQUCEFr1BQNQtC/1Mir4ABAzQNNAxQNAtQUFA1C0L/PzQBIQQSRIgCnCcEKCEFryo0C1CIAnaIAmpXACA1BEL/AjQBIQQSRIgCeycEKCEFryo0C1CIAlWIAklXIAg1BEL+4TQBIQQSRIgCWicEKCEFryo0C1CIAjSIAihXMAg1BEL+wCKvgAEENA00DFA0CxZQUCEGr1BQNQtC/sMir4ABBTQONA1QNAxQNAsWUFCBEK9QUDULQv6nNAsjWzUMNAtXCCA1D4AE6ZLS0jQMFlA0D1CwNAyIAfcyBjUOQvsRiAHpgaCNBogB8DYaATULQv/HiAHXNhoBNQtC/mMjMTQSRIECMTUSRCMxNhJEIzE3EkSIAbcyAyMjQvrbNhoBNhoCNhoDNQs1DDUNQv31NhoBNhoCNhoDFzULNQw1DUL+CzYaATYaAjULNQxC/lA2GgE1C0L+aTYaATYaAjYaAzULNQw1DUL+eDYaATYaAjULNQxC/oM0DVcBSDULQvwONA1XAWg1C0L8piQ1C4AIAAAAAAAAB4s0CxZRBwhQsDQLFlEHCDUEMgY1DkL6RCQ1C4AIAAAAAAAACJk0CxZRBwhQsDQLFlEHCDUEMgY1DkL6IEhMv0iJI7IBJLIQsgeyCLOJNA1XAUg1C0L5pzQNVwFgNQtC+i00DVcBQDULQvqVNA1XAXg1C0L67DYaATYaAjYaAzULNQw1DUL98TYaATULQv39NhoBNQtC/hY2GgE1C0L+LzYaATYaAjYaAzYaBBc1CzUMNQ01DkL+UTYaATYaAjYaAxc1CzUMNQ1C/iVIiUwJSTUGMgmIAIyJCUlB/+5JNQYxFjQAJAhJNQAJRwI4BzIKEkQ4ECQSRDgIEkSJMRmBBRJEiABHIzIKMgmIAFpC+W5JVwEATCNVTYm+SRZRBwhFBE1QiUxJvUD/E0sDiAAXQv8LVwAgNQ+JJDUDiUkjEkw0AhIRRIk0Bgg1Bok0BjQHSg9B/3hC/4C8I04CTTQHCDUHibFC/tuxsglC/tU=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `2`,
    1000: `544`,
    1001: `545`,
    1002: `546`,
    1003: `546`,
    1004: `547`,
    1005: `548`,
    1006: `549`,
    1007: `549`,
    1008: `550`,
    1009: `550`,
    101: `2`,
    1010: `551`,
    1011: `552`,
    1012: `553`,
    1013: `553`,
    1014: `553`,
    1015: `554`,
    1016: `554`,
    1017: `555`,
    1018: `555`,
    1019: `556`,
    102: `2`,
    1020: `557`,
    1021: `557`,
    1022: `559`,
    1023: `560`,
    1024: `561`,
    1025: `561`,
    1026: `562`,
    1027: `563`,
    1028: `564`,
    1029: `565`,
    103: `4`,
    1030: `566`,
    1031: `567`,
    1032: `568`,
    1033: `569`,
    1034: `570`,
    1035: `570`,
    1036: `571`,
    1037: `572`,
    1038: `573`,
    1039: `573`,
    104: `4`,
    1040: `573`,
    1041: `574`,
    1042: `574`,
    1043: `574`,
    1044: `575`,
    1045: `576`,
    1046: `576`,
    1047: `577`,
    1048: `578`,
    1049: `579`,
    105: `5`,
    1050: `579`,
    1051: `579`,
    1052: `580`,
    1053: `580`,
    1054: `581`,
    1055: `581`,
    1056: `582`,
    1057: `583`,
    1058: `583`,
    1059: `584`,
    106: `5`,
    1060: `585`,
    1061: `585`,
    1062: `586`,
    1063: `587`,
    1064: `587`,
    1065: `588`,
    1066: `589`,
    1067: `590`,
    1068: `592`,
    1069: `592`,
    107: `5`,
    1070: `593`,
    1071: `593`,
    1072: `594`,
    1073: `595`,
    1074: `595`,
    1075: `596`,
    1076: `597`,
    1077: `598`,
    1078: `598`,
    1079: `599`,
    108: `6`,
    1080: `600`,
    1081: `601`,
    1082: `601`,
    1083: `602`,
    1084: `603`,
    1085: `603`,
    1086: `603`,
    1087: `604`,
    1088: `604`,
    1089: `605`,
    109: `7`,
    1090: `605`,
    1091: `606`,
    1092: `607`,
    1093: `607`,
    1094: `608`,
    1095: `609`,
    1096: `609`,
    1097: `610`,
    1098: `611`,
    1099: `611`,
    11: `2`,
    110: `8`,
    1100: `612`,
    1101: `613`,
    1102: `614`,
    1103: `616`,
    1104: `617`,
    1105: `617`,
    1106: `618`,
    1107: `618`,
    1108: `618`,
    1109: `618`,
    111: `9`,
    1110: `618`,
    1111: `618`,
    1112: `618`,
    1113: `618`,
    1114: `618`,
    1115: `618`,
    1116: `619`,
    1117: `619`,
    1118: `620`,
    1119: `621`,
    112: `10`,
    1120: `621`,
    1121: `621`,
    1122: `622`,
    1123: `623`,
    1124: `624`,
    1125: `624`,
    1126: `625`,
    1127: `626`,
    1128: `626`,
    1129: `626`,
    113: `11`,
    1130: `627`,
    1131: `627`,
    1132: `628`,
    1133: `628`,
    1134: `629`,
    1135: `629`,
    1136: `630`,
    1137: `630`,
    1138: `630`,
    1139: `632`,
    114: `11`,
    1140: `632`,
    1141: `633`,
    1142: `633`,
    1143: `634`,
    1144: `635`,
    1145: `638`,
    1146: `638`,
    1147: `638`,
    1148: `639`,
    1149: `640`,
    115: `12`,
    1150: `642`,
    1151: `643`,
    1152: `644`,
    1153: `645`,
    1154: `646`,
    1155: `646`,
    1156: `647`,
    1157: `647`,
    1158: `648`,
    1159: `649`,
    116: `13`,
    1160: `649`,
    1161: `650`,
    1162: `651`,
    1163: `652`,
    1164: `653`,
    1165: `653`,
    1166: `653`,
    1167: `654`,
    1168: `654`,
    1169: `654`,
    117: `14`,
    1170: `655`,
    1171: `655`,
    1172: `657`,
    1173: `657`,
    1174: `658`,
    1175: `659`,
    1176: `660`,
    1177: `662`,
    1178: `662`,
    1179: `662`,
    118: `14`,
    1180: `664`,
    1181: `665`,
    1182: `666`,
    1183: `667`,
    1184: `667`,
    1185: `668`,
    1186: `668`,
    1187: `669`,
    1188: `670`,
    1189: `670`,
    119: `15`,
    1190: `671`,
    1191: `672`,
    1192: `673`,
    1193: `674`,
    1194: `674`,
    1195: `675`,
    1196: `676`,
    1197: `677`,
    1198: `678`,
    1199: `678`,
    12: `2`,
    120: `16`,
    1200: `680`,
    1201: `680`,
    1202: `681`,
    1203: `681`,
    1204: `682`,
    1205: `683`,
    1206: `684`,
    1207: `684`,
    1208: `684`,
    1209: `685`,
    121: `18`,
    1210: `685`,
    1211: `686`,
    1212: `687`,
    1213: `688`,
    1214: `688`,
    1215: `689`,
    1216: `689`,
    1217: `690`,
    1218: `690`,
    1219: `690`,
    122: `18`,
    1220: `691`,
    1221: `691`,
    1222: `692`,
    1223: `692`,
    1224: `692`,
    1225: `692`,
    1226: `692`,
    1227: `692`,
    1228: `693`,
    1229: `693`,
    123: `18`,
    1230: `694`,
    1231: `695`,
    1232: `696`,
    1233: `696`,
    1234: `697`,
    1235: `698`,
    1236: `700`,
    1237: `700`,
    1238: `701`,
    1239: `701`,
    124: `18`,
    1240: `701`,
    1241: `702`,
    1242: `702`,
    1243: `703`,
    1244: `704`,
    1245: `705`,
    1246: `705`,
    1247: `705`,
    1248: `705`,
    1249: `705`,
    125: `18`,
    1250: `705`,
    1251: `705`,
    1252: `705`,
    1253: `705`,
    1254: `705`,
    1255: `705`,
    1256: `705`,
    1257: `705`,
    1258: `705`,
    1259: `706`,
    126: `18`,
    1260: `706`,
    1261: `706`,
    1262: `708`,
    1263: `708`,
    1264: `709`,
    1265: `709`,
    1266: `710`,
    1267: `711`,
    1268: `714`,
    1269: `714`,
    127: `18`,
    1270: `714`,
    1271: `715`,
    1272: `716`,
    1273: `718`,
    1274: `719`,
    1275: `720`,
    1276: `721`,
    1277: `722`,
    1278: `722`,
    1279: `723`,
    128: `18`,
    1280: `723`,
    1281: `724`,
    1282: `725`,
    1283: `726`,
    1284: `727`,
    1285: `727`,
    1286: `727`,
    1287: `728`,
    1288: `728`,
    1289: `728`,
    129: `18`,
    1290: `729`,
    1291: `729`,
    1292: `730`,
    1293: `730`,
    1294: `730`,
    1295: `732`,
    1296: `732`,
    1297: `733`,
    1298: `733`,
    1299: `734`,
    13: `2`,
    130: `18`,
    1300: `735`,
    1301: `738`,
    1302: `738`,
    1303: `738`,
    1304: `739`,
    1305: `739`,
    1306: `741`,
    1307: `742`,
    1308: `742`,
    1309: `743`,
    131: `18`,
    1310: `744`,
    1311: `745`,
    1312: `745`,
    1313: `746`,
    1314: `747`,
    1315: `747`,
    1316: `747`,
    1317: `748`,
    1318: `748`,
    1319: `748`,
    132: `18`,
    1320: `749`,
    1321: `749`,
    1322: `749`,
    1323: `750`,
    1324: `750`,
    1325: `751`,
    1326: `751`,
    1327: `751`,
    1328: `753`,
    1329: `754`,
    133: `18`,
    1330: `755`,
    1331: `755`,
    1332: `755`,
    1333: `756`,
    1334: `756`,
    1335: `757`,
    1336: `757`,
    1337: `758`,
    1338: `759`,
    1339: `759`,
    134: `18`,
    1340: `760`,
    1341: `761`,
    1342: `762`,
    1343: `762`,
    1344: `763`,
    1345: `764`,
    1346: `765`,
    1347: `766`,
    1348: `766`,
    1349: `767`,
    135: `18`,
    1350: `767`,
    1351: `767`,
    1352: `769`,
    1353: `770`,
    1354: `771`,
    1355: `771`,
    1356: `771`,
    1357: `772`,
    1358: `772`,
    1359: `773`,
    136: `18`,
    1360: `773`,
    1361: `774`,
    1362: `775`,
    1363: `776`,
    1364: `776`,
    1365: `777`,
    1366: `778`,
    1367: `779`,
    1368: `780`,
    1369: `780`,
    137: `18`,
    1370: `781`,
    1371: `781`,
    1372: `781`,
    1373: `783`,
    1374: `784`,
    1375: `785`,
    1376: `785`,
    1377: `785`,
    1378: `786`,
    1379: `786`,
    138: `18`,
    1380: `787`,
    1381: `787`,
    1382: `788`,
    1383: `789`,
    1384: `789`,
    1385: `790`,
    1386: `791`,
    1387: `792`,
    1388: `793`,
    1389: `793`,
    139: `18`,
    1390: `794`,
    1391: `794`,
    1392: `794`,
    1393: `796`,
    1394: `796`,
    1395: `797`,
    1396: `797`,
    1397: `798`,
    1398: `799`,
    1399: `802`,
    14: `2`,
    140: `18`,
    1400: `802`,
    1401: `802`,
    1402: `803`,
    1403: `803`,
    1404: `805`,
    1405: `806`,
    1406: `806`,
    1407: `807`,
    1408: `808`,
    1409: `809`,
    141: `18`,
    1410: `809`,
    1411: `810`,
    1412: `811`,
    1413: `811`,
    1414: `811`,
    1415: `812`,
    1416: `812`,
    1417: `812`,
    1418: `813`,
    1419: `813`,
    142: `18`,
    1420: `813`,
    1421: `814`,
    1422: `814`,
    1423: `815`,
    1424: `815`,
    1425: `815`,
    1426: `817`,
    1427: `817`,
    1428: `818`,
    1429: `818`,
    143: `18`,
    1430: `819`,
    1431: `820`,
    1432: `823`,
    1433: `823`,
    1434: `823`,
    1435: `824`,
    1436: `824`,
    1437: `826`,
    1438: `827`,
    1439: `827`,
    144: `18`,
    1440: `828`,
    1441: `829`,
    1442: `830`,
    1443: `830`,
    1444: `831`,
    1445: `832`,
    1446: `832`,
    1447: `832`,
    1448: `833`,
    1449: `833`,
    145: `18`,
    1450: `833`,
    1451: `834`,
    1452: `834`,
    1453: `834`,
    1454: `835`,
    1455: `835`,
    1456: `836`,
    1457: `836`,
    1458: `836`,
    1459: `838`,
    146: `18`,
    1460: `838`,
    1461: `839`,
    1462: `839`,
    1463: `840`,
    1464: `841`,
    1465: `844`,
    1466: `844`,
    1467: `844`,
    1468: `845`,
    1469: `845`,
    147: `18`,
    1470: `847`,
    1471: `848`,
    1472: `848`,
    1473: `849`,
    1474: `850`,
    1475: `851`,
    1476: `851`,
    1477: `852`,
    1478: `853`,
    1479: `853`,
    148: `18`,
    1480: `853`,
    1481: `854`,
    1482: `854`,
    1483: `854`,
    1484: `855`,
    1485: `855`,
    1486: `855`,
    1487: `856`,
    1488: `856`,
    1489: `857`,
    149: `18`,
    1490: `857`,
    1491: `857`,
    1492: `859`,
    1493: `860`,
    1494: `861`,
    1495: `861`,
    1496: `861`,
    1497: `862`,
    1498: `862`,
    1499: `863`,
    15: `2`,
    150: `18`,
    1500: `863`,
    1501: `864`,
    1502: `865`,
    1503: `865`,
    1504: `866`,
    1505: `867`,
    1506: `868`,
    1507: `869`,
    1508: `869`,
    1509: `870`,
    151: `18`,
    1510: `871`,
    1511: `872`,
    1512: `873`,
    1513: `873`,
    1514: `874`,
    1515: `874`,
    1516: `874`,
    1517: `876`,
    1518: `877`,
    1519: `878`,
    152: `18`,
    1520: `878`,
    1521: `878`,
    1522: `879`,
    1523: `879`,
    1524: `880`,
    1525: `880`,
    1526: `881`,
    1527: `882`,
    1528: `882`,
    1529: `883`,
    153: `18`,
    1530: `884`,
    1531: `884`,
    1532: `885`,
    1533: `886`,
    1534: `887`,
    1535: `888`,
    1536: `888`,
    1537: `889`,
    1538: `890`,
    1539: `891`,
    154: `18`,
    1540: `892`,
    1541: `892`,
    1542: `893`,
    1543: `893`,
    1544: `893`,
    1545: `895`,
    1546: `895`,
    1547: `896`,
    1548: `897`,
    1549: `898`,
    155: `18`,
    1550: `898`,
    1551: `899`,
    1552: `899`,
    1553: `900`,
    1554: `900`,
    1555: `900`,
    1556: `901`,
    1557: `901`,
    1558: `902`,
    1559: `902`,
    156: `18`,
    1560: `902`,
    1561: `902`,
    1562: `902`,
    1563: `902`,
    1564: `903`,
    1565: `903`,
    1566: `904`,
    1567: `905`,
    1568: `906`,
    1569: `906`,
    157: `18`,
    1570: `907`,
    1571: `908`,
    1572: `910`,
    1573: `910`,
    1574: `911`,
    1575: `911`,
    1576: `911`,
    1577: `912`,
    1578: `912`,
    1579: `913`,
    158: `18`,
    1580: `913`,
    1581: `914`,
    1582: `914`,
    1583: `914`,
    1584: `916`,
    1585: `916`,
    1586: `916`,
    1587: `917`,
    1588: `917`,
    1589: `917`,
    159: `18`,
    1590: `917`,
    1591: `918`,
    1592: `918`,
    1593: `918`,
    1594: `919`,
    1595: `919`,
    1596: `919`,
    1597: `920`,
    1598: `920`,
    1599: `921`,
    16: `2`,
    160: `18`,
    1600: `921`,
    1601: `921`,
    1602: `923`,
    1603: `923`,
    1604: `923`,
    1605: `924`,
    1606: `924`,
    1607: `924`,
    1608: `925`,
    1609: `925`,
    161: `18`,
    1610: `926`,
    1611: `926`,
    1612: `926`,
    1613: `928`,
    1614: `929`,
    1615: `929`,
    1616: `930`,
    1617: `931`,
    1618: `932`,
    1619: `932`,
    162: `18`,
    1620: `933`,
    1621: `933`,
    1622: `934`,
    1623: `935`,
    1624: `936`,
    1625: `937`,
    1626: `937`,
    1627: `938`,
    1628: `939`,
    1629: `940`,
    163: `18`,
    1630: `941`,
    1631: `941`,
    1632: `942`,
    1633: `943`,
    1634: `944`,
    1635: `944`,
    1636: `944`,
    1637: `945`,
    1638: `945`,
    1639: `946`,
    164: `18`,
    1640: `947`,
    1641: `948`,
    1642: `948`,
    1643: `948`,
    1644: `950`,
    1645: `950`,
    1646: `950`,
    1647: `951`,
    1648: `951`,
    1649: `951`,
    165: `18`,
    1650: `952`,
    1651: `952`,
    1652: `952`,
    1653: `953`,
    1654: `953`,
    1655: `954`,
    1656: `954`,
    1657: `955`,
    1658: `955`,
    1659: `956`,
    166: `18`,
    1660: `956`,
    1661: `956`,
    1662: `958`,
    1663: `958`,
    1664: `958`,
    1665: `959`,
    1666: `959`,
    1667: `959`,
    1668: `960`,
    1669: `960`,
    167: `18`,
    1670: `960`,
    1671: `961`,
    1672: `962`,
    1673: `962`,
    1674: `963`,
    1675: `963`,
    1676: `964`,
    1677: `964`,
    1678: `965`,
    1679: `965`,
    168: `18`,
    1680: `965`,
    1681: `967`,
    1682: `967`,
    1683: `967`,
    1684: `968`,
    1685: `968`,
    1686: `968`,
    1687: `969`,
    1688: `969`,
    1689: `970`,
    169: `18`,
    1690: `970`,
    1691: `971`,
    1692: `971`,
    1693: `971`,
    1694: `973`,
    1695: `973`,
    1696: `973`,
    1697: `974`,
    1698: `974`,
    1699: `975`,
    17: `2`,
    170: `18`,
    1700: `975`,
    1701: `975`,
    1702: `977`,
    1703: `977`,
    1704: `977`,
    1705: `978`,
    1706: `978`,
    1707: `978`,
    1708: `979`,
    1709: `979`,
    171: `18`,
    1710: `979`,
    1711: `980`,
    1712: `980`,
    1713: `981`,
    1714: `981`,
    1715: `982`,
    1716: `982`,
    1717: `983`,
    1718: `983`,
    1719: `983`,
    172: `18`,
    1720: `985`,
    1721: `985`,
    1722: `985`,
    1723: `986`,
    1724: `986`,
    1725: `986`,
    1726: `987`,
    1727: `987`,
    1728: `988`,
    1729: `988`,
    173: `18`,
    1730: `989`,
    1731: `989`,
    1732: `989`,
    1733: `991`,
    1734: `991`,
    1735: `992`,
    1736: `992`,
    1737: `992`,
    1738: `993`,
    1739: `993`,
    174: `18`,
    1740: `994`,
    1741: `994`,
    1742: `994`,
    1743: `996`,
    1744: `996`,
    1745: `997`,
    1746: `997`,
    1747: `997`,
    1748: `998`,
    1749: `998`,
    175: `18`,
    1750: `999`,
    1751: `999`,
    1752: `999`,
    1753: `1001`,
    1754: `1002`,
    1755: `1002`,
    1756: `1003`,
    1757: `1003`,
    1758: `1003`,
    1759: `1003`,
    176: `18`,
    1760: `1003`,
    1761: `1003`,
    1762: `1003`,
    1763: `1003`,
    1764: `1003`,
    1765: `1003`,
    1766: `1004`,
    1767: `1004`,
    1768: `1005`,
    1769: `1006`,
    177: `18`,
    1770: `1006`,
    1771: `1006`,
    1772: `1007`,
    1773: `1008`,
    1774: `1009`,
    1775: `1009`,
    1776: `1010`,
    1777: `1011`,
    1778: `1011`,
    1779: `1011`,
    178: `18`,
    1780: `1012`,
    1781: `1012`,
    1782: `1013`,
    1783: `1013`,
    1784: `1014`,
    1785: `1014`,
    1786: `1015`,
    1787: `1015`,
    1788: `1015`,
    1789: `1017`,
    179: `18`,
    1790: `1018`,
    1791: `1018`,
    1792: `1019`,
    1793: `1019`,
    1794: `1019`,
    1795: `1019`,
    1796: `1019`,
    1797: `1019`,
    1798: `1019`,
    1799: `1019`,
    18: `2`,
    180: `18`,
    1800: `1019`,
    1801: `1019`,
    1802: `1020`,
    1803: `1020`,
    1804: `1021`,
    1805: `1022`,
    1806: `1022`,
    1807: `1022`,
    1808: `1023`,
    1809: `1024`,
    181: `18`,
    1810: `1025`,
    1811: `1025`,
    1812: `1026`,
    1813: `1027`,
    1814: `1027`,
    1815: `1027`,
    1816: `1028`,
    1817: `1028`,
    1818: `1029`,
    1819: `1029`,
    182: `18`,
    1820: `1030`,
    1821: `1030`,
    1822: `1031`,
    1823: `1031`,
    1824: `1031`,
    1825: `1033`,
    1826: `1034`,
    1827: `1035`,
    1828: `1036`,
    1829: `1037`,
    183: `18`,
    1830: `1039`,
    1831: `1040`,
    1832: `1040`,
    1833: `1041`,
    1834: `1042`,
    1835: `1042`,
    1836: `1043`,
    1837: `1043`,
    1838: `1044`,
    1839: `1044`,
    184: `18`,
    1840: `1045`,
    1841: `1046`,
    1842: `1048`,
    1843: `1048`,
    1844: `1049`,
    1845: `1049`,
    1846: `1049`,
    1847: `1050`,
    1848: `1050`,
    1849: `1051`,
    185: `18`,
    1850: `1051`,
    1851: `1051`,
    1852: `1053`,
    1853: `1053`,
    1854: `1054`,
    1855: `1054`,
    1856: `1054`,
    1857: `1055`,
    1858: `1055`,
    1859: `1056`,
    186: `18`,
    1860: `1056`,
    1861: `1056`,
    1862: `1058`,
    1863: `1058`,
    1864: `1059`,
    1865: `1059`,
    1866: `1059`,
    1867: `1060`,
    1868: `1060`,
    1869: `1061`,
    187: `18`,
    1870: `1061`,
    1871: `1061`,
    1872: `1063`,
    1873: `1063`,
    1874: `1064`,
    1875: `1064`,
    1876: `1064`,
    1877: `1065`,
    1878: `1065`,
    1879: `1066`,
    188: `18`,
    1880: `1066`,
    1881: `1066`,
    1882: `1068`,
    1883: `1068`,
    1884: `1068`,
    1885: `1069`,
    1886: `1069`,
    1887: `1069`,
    1888: `1070`,
    1889: `1070`,
    189: `18`,
    1890: `1070`,
    1891: `1071`,
    1892: `1071`,
    1893: `1072`,
    1894: `1072`,
    1895: `1073`,
    1896: `1073`,
    1897: `1074`,
    1898: `1074`,
    1899: `1074`,
    19: `2`,
    190: `18`,
    1900: `1076`,
    1901: `1076`,
    1902: `1076`,
    1903: `1077`,
    1904: `1077`,
    1905: `1078`,
    1906: `1078`,
    1907: `1078`,
    1908: `1080`,
    1909: `1080`,
    191: `18`,
    1910: `1080`,
    1911: `1081`,
    1912: `1081`,
    1913: `1082`,
    1914: `1082`,
    1915: `1082`,
    1916: `1084`,
    1917: `1084`,
    1918: `1084`,
    1919: `1085`,
    192: `18`,
    1920: `1085`,
    1921: `1086`,
    1922: `1086`,
    1923: `1086`,
    1924: `1088`,
    1925: `1088`,
    1926: `1088`,
    1927: `1089`,
    1928: `1089`,
    1929: `1089`,
    193: `19`,
    1930: `1090`,
    1931: `1090`,
    1932: `1090`,
    1933: `1091`,
    1934: `1091`,
    1935: `1091`,
    1936: `1092`,
    1937: `1093`,
    1938: `1093`,
    1939: `1094`,
    194: `19`,
    1940: `1094`,
    1941: `1095`,
    1942: `1095`,
    1943: `1096`,
    1944: `1096`,
    1945: `1097`,
    1946: `1097`,
    1947: `1097`,
    1948: `1099`,
    1949: `1099`,
    195: `19`,
    1950: `1099`,
    1951: `1100`,
    1952: `1100`,
    1953: `1100`,
    1954: `1101`,
    1955: `1101`,
    1956: `1101`,
    1957: `1102`,
    1958: `1103`,
    1959: `1103`,
    196: `20`,
    1960: `1104`,
    1961: `1104`,
    1962: `1105`,
    1963: `1105`,
    1964: `1106`,
    1965: `1106`,
    1966: `1106`,
    1967: `1108`,
    1968: `1109`,
    1969: `1111`,
    197: `20`,
    1970: `1112`,
    1971: `1113`,
    1972: `1114`,
    1973: `1114`,
    1974: `1115`,
    1975: `1115`,
    1976: `1116`,
    1977: `1116`,
    1978: `1116`,
    1979: `1117`,
    198: `20`,
    1980: `1119`,
    1981: `1120`,
    1982: `1121`,
    1983: `1121`,
    1984: `1121`,
    1985: `1122`,
    1986: `1123`,
    1987: `1123`,
    1988: `1126`,
    1989: `1126`,
    199: `20`,
    1990: `1127`,
    1991: `1127`,
    1992: `1128`,
    1993: `1129`,
    1994: `1130`,
    1995: `1131`,
    1996: `1131`,
    1997: `1132`,
    1998: `1133`,
    1999: `1133`,
    2: `2`,
    20: `2`,
    200: `20`,
    2000: `1134`,
    2001: `1134`,
    2002: `1135`,
    2003: `1135`,
    2004: `1136`,
    2005: `1137`,
    2006: `1138`,
    2007: `1138`,
    2008: `1139`,
    2009: `1140`,
    201: `20`,
    2010: `1141`,
    2011: `1142`,
    2012: `1142`,
    2013: `1143`,
    2014: `1144`,
    2015: `1145`,
    2016: `1147`,
    2017: `1147`,
    2018: `1148`,
    2019: `1148`,
    202: `20`,
    2020: `1149`,
    2021: `1150`,
    2022: `1152`,
    2023: `1152`,
    2024: `1152`,
    2025: `1154`,
    2026: `1155`,
    2027: `1155`,
    2028: `1156`,
    2029: `1156`,
    203: `20`,
    2030: `1157`,
    2031: `1157`,
    2032: `1157`,
    2033: `1158`,
    2034: `1158`,
    2035: `1158`,
    2036: `1160`,
    2037: `1161`,
    2038: `1161`,
    2039: `1161`,
    204: `20`,
    2040: `1162`,
    2041: `1163`,
    2042: `1164`,
    2043: `1165`,
    2044: `1166`,
    2045: `1168`,
    2046: `1169`,
    2047: `1170`,
    2048: `1171`,
    2049: `1171`,
    205: `20`,
    2050: `1171`,
    2051: `1172`,
    2052: `1172`,
    2053: `1173`,
    2054: `1174`,
    2055: `1175`,
    2056: `1177`,
    2057: `1178`,
    2058: `1179`,
    2059: `1180`,
    206: `20`,
    2060: `1180`,
    2061: `1180`,
    2062: `1181`,
    2063: `1181`,
    2064: `1182`,
    2065: `1182`,
    2066: `1182`,
    2067: `1183`,
    2068: `1183`,
    2069: `1183`,
    207: `20`,
    2070: `1185`,
    2071: `1185`,
    2072: `1185`,
    2073: `1186`,
    2074: `1186`,
    2075: `1187`,
    2076: `1189`,
    2077: `1190`,
    2078: `1190`,
    2079: `1191`,
    208: `20`,
    2080: `1193`,
    2081: `1194`,
    2082: `1195`,
    2083: `1196`,
    2084: `1197`,
    2085: `1197`,
    2086: `1198`,
    2087: `1199`,
    2088: `1200`,
    2089: `1201`,
    209: `20`,
    2090: `1203`,
    2091: `1203`,
    2092: `1204`,
    2093: `1205`,
    2094: `1205`,
    2095: `1206`,
    2096: `1208`,
    2097: `1208`,
    2098: `1209`,
    2099: `1209`,
    21: `2`,
    210: `20`,
    2100: `1210`,
    2101: `1211`,
    2102: `1212`,
    2103: `1212`,
    2104: `1212`,
    2105: `1213`,
    2106: `1213`,
    2107: `1213`,
    2108: `1215`,
    2109: `1216`,
    211: `20`,
    2110: `1217`,
    2111: `1217`,
    2112: `1218`,
    2113: `1220`,
    2114: `1220`,
    2115: `1221`,
    2116: `1222`,
    2117: `1222`,
    2118: `1223`,
    2119: `1225`,
    212: `20`,
    2120: `1226`,
    2121: `1226`,
    2122: `1226`,
    2123: `1228`,
    2124: `1229`,
    2125: `1229`,
    2126: `1230`,
    213: `20`,
    214: `20`,
    215: `20`,
    216: `20`,
    217: `20`,
    218: `20`,
    219: `20`,
    22: `2`,
    220: `20`,
    221: `20`,
    222: `20`,
    223: `20`,
    224: `20`,
    225: `20`,
    226: `22`,
    227: `24`,
    228: `24`,
    229: `25`,
    23: `2`,
    230: `25`,
    231: `25`,
    232: `26`,
    233: `26`,
    234: `27`,
    235: `27`,
    236: `28`,
    237: `28`,
    238: `28`,
    239: `29`,
    24: `2`,
    240: `29`,
    241: `30`,
    242: `30`,
    243: `31`,
    244: `31`,
    245: `32`,
    246: `33`,
    247: `33`,
    248: `34`,
    249: `34`,
    25: `2`,
    250: `35`,
    251: `35`,
    252: `36`,
    253: `37`,
    254: `43`,
    255: `44`,
    256: `45`,
    257: `45`,
    258: `46`,
    259: `46`,
    26: `2`,
    260: `47`,
    261: `48`,
    262: `48`,
    263: `49`,
    264: `50`,
    265: `51`,
    266: `52`,
    267: `52`,
    268: `53`,
    269: `54`,
    27: `2`,
    270: `54`,
    271: `54`,
    272: `55`,
    273: `55`,
    274: `56`,
    275: `56`,
    276: `57`,
    277: `58`,
    278: `58`,
    279: `59`,
    28: `2`,
    280: `60`,
    281: `60`,
    282: `61`,
    283: `62`,
    284: `62`,
    285: `63`,
    286: `64`,
    287: `65`,
    288: `67`,
    289: `68`,
    29: `2`,
    290: `68`,
    291: `69`,
    292: `69`,
    293: `69`,
    294: `69`,
    295: `69`,
    296: `69`,
    297: `69`,
    298: `69`,
    299: `69`,
    3: `2`,
    30: `2`,
    300: `69`,
    301: `70`,
    302: `70`,
    303: `71`,
    304: `72`,
    305: `72`,
    306: `72`,
    307: `73`,
    308: `74`,
    309: `75`,
    31: `2`,
    310: `75`,
    311: `76`,
    312: `77`,
    313: `77`,
    314: `77`,
    315: `78`,
    316: `78`,
    317: `79`,
    318: `79`,
    319: `80`,
    32: `2`,
    320: `80`,
    321: `83`,
    322: `83`,
    323: `84`,
    324: `84`,
    325: `85`,
    326: `85`,
    327: `87`,
    328: `87`,
    329: `88`,
    33: `2`,
    330: `88`,
    331: `89`,
    332: `90`,
    333: `91`,
    334: `91`,
    335: `91`,
    336: `92`,
    337: `93`,
    338: `94`,
    339: `94`,
    34: `2`,
    340: `95`,
    341: `96`,
    342: `96`,
    343: `97`,
    344: `98`,
    345: `99`,
    346: `100`,
    347: `100`,
    348: `101`,
    349: `102`,
    35: `2`,
    350: `103`,
    351: `105`,
    352: `105`,
    353: `105`,
    354: `107`,
    355: `107`,
    356: `108`,
    357: `108`,
    358: `108`,
    359: `110`,
    36: `2`,
    360: `110`,
    361: `110`,
    362: `110`,
    363: `110`,
    364: `110`,
    365: `111`,
    366: `111`,
    367: `112`,
    368: `113`,
    369: `115`,
    37: `2`,
    370: `116`,
    371: `118`,
    372: `118`,
    373: `119`,
    374: `119`,
    375: `119`,
    376: `120`,
    377: `120`,
    378: `121`,
    379: `121`,
    38: `2`,
    380: `122`,
    381: `122`,
    382: `122`,
    383: `123`,
    384: `123`,
    385: `124`,
    386: `124`,
    387: `125`,
    388: `125`,
    389: `126`,
    39: `2`,
    390: `127`,
    391: `132`,
    392: `132`,
    393: `133`,
    394: `133`,
    395: `134`,
    396: `135`,
    397: `140`,
    398: `140`,
    399: `141`,
    4: `2`,
    40: `2`,
    400: `141`,
    401: `141`,
    402: `142`,
    403: `142`,
    404: `143`,
    405: `144`,
    406: `144`,
    407: `145`,
    408: `146`,
    409: `146`,
    41: `2`,
    410: `148`,
    411: `149`,
    412: `150`,
    413: `151`,
    414: `152`,
    415: `152`,
    416: `153`,
    417: `154`,
    418: `155`,
    419: `155`,
    42: `2`,
    420: `155`,
    421: `156`,
    422: `157`,
    423: `157`,
    424: `158`,
    425: `159`,
    426: `160`,
    427: `161`,
    428: `162`,
    429: `167`,
    43: `2`,
    430: `168`,
    431: `169`,
    432: `169`,
    433: `170`,
    434: `170`,
    435: `170`,
    436: `171`,
    437: `172`,
    438: `172`,
    439: `172`,
    44: `2`,
    440: `173`,
    441: `174`,
    442: `175`,
    443: `175`,
    444: `176`,
    445: `177`,
    446: `178`,
    447: `178`,
    448: `178`,
    449: `179`,
    45: `2`,
    450: `180`,
    451: `180`,
    452: `181`,
    453: `181`,
    454: `181`,
    455: `181`,
    456: `181`,
    457: `181`,
    458: `181`,
    459: `181`,
    46: `2`,
    460: `181`,
    461: `181`,
    462: `182`,
    463: `182`,
    464: `183`,
    465: `184`,
    466: `184`,
    467: `184`,
    468: `185`,
    469: `186`,
    47: `2`,
    470: `187`,
    471: `187`,
    472: `188`,
    473: `189`,
    474: `189`,
    475: `189`,
    476: `190`,
    477: `190`,
    478: `191`,
    479: `191`,
    48: `2`,
    480: `192`,
    481: `192`,
    482: `193`,
    483: `193`,
    484: `193`,
    485: `195`,
    486: `195`,
    487: `196`,
    488: `196`,
    489: `196`,
    49: `2`,
    490: `197`,
    491: `198`,
    492: `198`,
    493: `199`,
    494: `199`,
    495: `200`,
    496: `201`,
    497: `206`,
    498: `206`,
    499: `207`,
    5: `2`,
    50: `2`,
    500: `207`,
    501: `207`,
    502: `208`,
    503: `208`,
    504: `209`,
    505: `210`,
    506: `210`,
    507: `212`,
    508: `213`,
    509: `214`,
    51: `2`,
    510: `215`,
    511: `216`,
    512: `216`,
    513: `217`,
    514: `218`,
    515: `219`,
    516: `219`,
    517: `219`,
    518: `220`,
    519: `221`,
    52: `2`,
    520: `221`,
    521: `222`,
    522: `223`,
    523: `224`,
    524: `225`,
    525: `226`,
    526: `231`,
    527: `232`,
    528: `233`,
    529: `233`,
    53: `2`,
    530: `234`,
    531: `234`,
    532: `234`,
    533: `235`,
    534: `236`,
    535: `236`,
    536: `236`,
    537: `237`,
    538: `238`,
    539: `239`,
    54: `2`,
    540: `239`,
    541: `240`,
    542: `241`,
    543: `242`,
    544: `242`,
    545: `242`,
    546: `243`,
    547: `244`,
    548: `244`,
    549: `245`,
    55: `2`,
    550: `245`,
    551: `245`,
    552: `245`,
    553: `245`,
    554: `245`,
    555: `245`,
    556: `245`,
    557: `245`,
    558: `245`,
    559: `246`,
    56: `2`,
    560: `246`,
    561: `247`,
    562: `248`,
    563: `248`,
    564: `248`,
    565: `249`,
    566: `250`,
    567: `251`,
    568: `251`,
    569: `252`,
    57: `2`,
    570: `253`,
    571: `253`,
    572: `253`,
    573: `254`,
    574: `254`,
    575: `255`,
    576: `255`,
    577: `256`,
    578: `256`,
    579: `257`,
    58: `2`,
    580: `257`,
    581: `257`,
    582: `259`,
    583: `259`,
    584: `260`,
    585: `260`,
    586: `260`,
    587: `261`,
    588: `261`,
    589: `262`,
    59: `2`,
    590: `262`,
    591: `263`,
    592: `263`,
    593: `263`,
    594: `264`,
    595: `264`,
    596: `265`,
    597: `265`,
    598: `266`,
    599: `266`,
    6: `2`,
    60: `2`,
    600: `266`,
    601: `267`,
    602: `268`,
    603: `268`,
    604: `269`,
    605: `269`,
    606: `270`,
    607: `271`,
    608: `272`,
    609: `272`,
    61: `2`,
    610: `273`,
    611: `274`,
    612: `275`,
    613: `280`,
    614: `280`,
    615: `281`,
    616: `281`,
    617: `282`,
    618: `283`,
    619: `284`,
    62: `2`,
    620: `284`,
    621: `285`,
    622: `285`,
    623: `285`,
    624: `286`,
    625: `287`,
    626: `293`,
    627: `293`,
    628: `293`,
    629: `293`,
    63: `2`,
    630: `294`,
    631: `295`,
    632: `295`,
    633: `296`,
    634: `297`,
    635: `297`,
    636: `298`,
    637: `298`,
    638: `298`,
    639: `299`,
    64: `2`,
    640: `299`,
    641: `300`,
    642: `300`,
    643: `300`,
    644: `301`,
    645: `302`,
    646: `302`,
    647: `303`,
    648: `304`,
    649: `305`,
    65: `2`,
    650: `305`,
    651: `306`,
    652: `307`,
    653: `308`,
    654: `308`,
    655: `308`,
    656: `310`,
    657: `311`,
    658: `312`,
    659: `312`,
    66: `2`,
    660: `313`,
    661: `313`,
    662: `314`,
    663: `315`,
    664: `316`,
    665: `317`,
    666: `317`,
    667: `318`,
    668: `319`,
    669: `319`,
    67: `2`,
    670: `319`,
    671: `320`,
    672: `320`,
    673: `320`,
    674: `320`,
    675: `320`,
    676: `320`,
    677: `321`,
    678: `321`,
    679: `322`,
    68: `2`,
    680: `323`,
    681: `325`,
    682: `325`,
    683: `326`,
    684: `326`,
    685: `327`,
    686: `328`,
    687: `328`,
    688: `329`,
    689: `330`,
    69: `2`,
    690: `330`,
    691: `331`,
    692: `332`,
    693: `332`,
    694: `333`,
    695: `334`,
    696: `335`,
    697: `337`,
    698: `338`,
    699: `338`,
    7: `2`,
    70: `2`,
    700: `339`,
    701: `339`,
    702: `339`,
    703: `339`,
    704: `339`,
    705: `339`,
    706: `339`,
    707: `339`,
    708: `339`,
    709: `339`,
    71: `2`,
    710: `340`,
    711: `340`,
    712: `341`,
    713: `342`,
    714: `342`,
    715: `342`,
    716: `343`,
    717: `344`,
    718: `345`,
    719: `345`,
    72: `2`,
    720: `346`,
    721: `347`,
    722: `347`,
    723: `347`,
    724: `348`,
    725: `348`,
    726: `349`,
    727: `349`,
    728: `350`,
    729: `350`,
    73: `2`,
    730: `351`,
    731: `351`,
    732: `351`,
    733: `353`,
    734: `353`,
    735: `354`,
    736: `354`,
    737: `354`,
    738: `355`,
    739: `355`,
    74: `2`,
    740: `356`,
    741: `356`,
    742: `357`,
    743: `357`,
    744: `357`,
    745: `358`,
    746: `358`,
    747: `359`,
    748: `359`,
    749: `360`,
    75: `2`,
    750: `360`,
    751: `361`,
    752: `362`,
    753: `362`,
    754: `363`,
    755: `363`,
    756: `364`,
    757: `364`,
    758: `365`,
    759: `366`,
    76: `2`,
    760: `371`,
    761: `371`,
    762: `372`,
    763: `372`,
    764: `373`,
    765: `374`,
    766: `374`,
    767: `375`,
    768: `376`,
    769: `378`,
    77: `2`,
    770: `379`,
    771: `380`,
    772: `381`,
    773: `382`,
    774: `382`,
    775: `383`,
    776: `384`,
    777: `385`,
    778: `385`,
    779: `385`,
    78: `2`,
    780: `386`,
    781: `386`,
    782: `386`,
    783: `387`,
    784: `388`,
    785: `389`,
    786: `389`,
    787: `390`,
    788: `390`,
    789: `391`,
    79: `2`,
    790: `392`,
    791: `397`,
    792: `398`,
    793: `399`,
    794: `399`,
    795: `400`,
    796: `401`,
    797: `402`,
    798: `402`,
    799: `403`,
    8: `2`,
    80: `2`,
    800: `403`,
    801: `404`,
    802: `405`,
    803: `406`,
    804: `406`,
    805: `406`,
    806: `407`,
    807: `407`,
    808: `408`,
    809: `408`,
    81: `2`,
    810: `409`,
    811: `410`,
    812: `410`,
    813: `412`,
    814: `413`,
    815: `414`,
    816: `414`,
    817: `415`,
    818: `416`,
    819: `417`,
    82: `2`,
    820: `418`,
    821: `419`,
    822: `420`,
    823: `421`,
    824: `422`,
    825: `423`,
    826: `423`,
    827: `424`,
    828: `425`,
    829: `426`,
    83: `2`,
    830: `426`,
    831: `426`,
    832: `427`,
    833: `427`,
    834: `427`,
    835: `428`,
    836: `429`,
    837: `429`,
    838: `430`,
    839: `431`,
    84: `2`,
    840: `432`,
    841: `432`,
    842: `432`,
    843: `433`,
    844: `433`,
    845: `434`,
    846: `434`,
    847: `435`,
    848: `436`,
    849: `436`,
    85: `2`,
    850: `437`,
    851: `438`,
    852: `438`,
    853: `439`,
    854: `440`,
    855: `440`,
    856: `441`,
    857: `442`,
    858: `443`,
    859: `445`,
    86: `2`,
    860: `446`,
    861: `446`,
    862: `447`,
    863: `447`,
    864: `447`,
    865: `447`,
    866: `447`,
    867: `447`,
    868: `447`,
    869: `447`,
    87: `2`,
    870: `447`,
    871: `447`,
    872: `448`,
    873: `448`,
    874: `449`,
    875: `450`,
    876: `450`,
    877: `450`,
    878: `451`,
    879: `452`,
    88: `2`,
    880: `453`,
    881: `453`,
    882: `454`,
    883: `455`,
    884: `455`,
    885: `455`,
    886: `456`,
    887: `456`,
    888: `457`,
    889: `457`,
    89: `2`,
    890: `458`,
    891: `458`,
    892: `459`,
    893: `459`,
    894: `459`,
    895: `461`,
    896: `461`,
    897: `462`,
    898: `462`,
    899: `462`,
    9: `2`,
    90: `2`,
    900: `463`,
    901: `463`,
    902: `464`,
    903: `464`,
    904: `465`,
    905: `465`,
    906: `465`,
    907: `466`,
    908: `466`,
    909: `467`,
    91: `2`,
    910: `467`,
    911: `468`,
    912: `468`,
    913: `468`,
    914: `469`,
    915: `469`,
    916: `470`,
    917: `470`,
    918: `471`,
    919: `471`,
    92: `2`,
    920: `472`,
    921: `473`,
    922: `473`,
    923: `474`,
    924: `474`,
    925: `475`,
    926: `475`,
    927: `476`,
    928: `477`,
    929: `482`,
    93: `2`,
    930: `482`,
    931: `483`,
    932: `483`,
    933: `484`,
    934: `485`,
    935: `490`,
    936: `490`,
    937: `491`,
    938: `491`,
    939: `492`,
    94: `2`,
    940: `493`,
    941: `493`,
    942: `494`,
    943: `495`,
    944: `497`,
    945: `498`,
    946: `499`,
    947: `500`,
    948: `501`,
    949: `501`,
    95: `2`,
    950: `502`,
    951: `503`,
    952: `504`,
    953: `504`,
    954: `504`,
    955: `505`,
    956: `505`,
    957: `505`,
    958: `506`,
    959: `507`,
    96: `2`,
    960: `508`,
    961: `508`,
    962: `509`,
    963: `509`,
    964: `510`,
    965: `511`,
    966: `516`,
    967: `516`,
    968: `517`,
    969: `517`,
    97: `2`,
    970: `518`,
    971: `519`,
    972: `519`,
    973: `520`,
    974: `521`,
    975: `521`,
    976: `522`,
    977: `523`,
    978: `525`,
    979: `526`,
    98: `2`,
    980: `527`,
    981: `528`,
    982: `529`,
    983: `529`,
    984: `530`,
    985: `531`,
    986: `532`,
    987: `532`,
    988: `532`,
    989: `533`,
    99: `2`,
    990: `533`,
    991: `533`,
    992: `534`,
    993: `535`,
    994: `536`,
    995: `536`,
    996: `537`,
    997: `537`,
    998: `538`,
    999: `539`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 1,
  stateSize: 32,
  unsupported: [],
  version: 13,
  warnings: [`This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:213:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:88:28:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Deployer": Deployer,
  "approve": approve,
  "deleteAllowanceBox": deleteAllowanceBox,
  "deleteBalanceBox": deleteBalanceBox,
  "mint": mint,
  "transfer": transfer,
  "transferFrom": transferFrom
  };
export const _APIs = {
  approve: approve,
  deleteAllowanceBox: deleteAllowanceBox,
  deleteBalanceBox: deleteBalanceBox,
  mint: mint,
  transfer: transfer,
  transferFrom: transferFrom
  };
