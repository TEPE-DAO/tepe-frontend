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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Object({
    closed: ctc4,
    manager: ctc0,
    token: ctc1
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Tuple([ctc0, ctc0, ctc0]);
  const ctc8 = stdlib.T_Struct([['manager', ctc0], ['token', ctc1]]);
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc6, ctc6]);
  const ctc11 = stdlib.T_Data({
    None: ctc9,
    Some: ctc10
    });
  const ctc12 = stdlib.T_Data({
    None: ctc9,
    Some: ctc6
    });
  const map0_ctc = ctc11;
  
  const map1_ctc = ctc12;
  
  
  const _constructor = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1594, v1595, v1596, v1600, v1603, v1604, v1616] = svs;
      return (await ((async () => {
        
        
        return v1594;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _purchase = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1594, v1595, v1596, v1600, v1603, v1604, v1616] = svs;
      return (await ((async (_v1633, _v1634, _v1635 ) => {
          const v1633 = stdlib.protect(ctc0, _v1633, null);
          const v1634 = stdlib.protect(ctc0, _v1634, null);
          const v1635 = stdlib.protect(ctc0, _v1635, null);
        
        const v1636 = [v1633, v1634, v1635];
        const v1637 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc7, v1636, ctc6), null);
        const v1638 = stdlib.fromSome(v1637, stdlib.checkedBigNumberify('./index.rsh:115:65:decimal', stdlib.UInt_max, '0'));
        
        return v1638;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1594, v1595, v1596, v1600, v1603, v1604, v1616] = svs;
      return (await ((async () => {
        
        const v1629 = v1616.manager;
        const v1630 = v1616.token;
        const v1631 = {
          manager: v1629,
          token: v1630
          };
        
        return v1631;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      constructor: {
        decode: _constructor,
        dom: [],
        rng: ctc0
        },
      purchase: {
        decode: _purchase,
        dom: [ctc0, ctc0, ctc0],
        rng: ctc6
        },
      state: {
        decode: _state,
        dom: [],
        rng: ctc8
        }
      },
    views: {
      1: [],
      4: [ctc0, ctc1, ctc1, ctc1, ctc2, ctc3, ctc5]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc2, ctc2]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc6 = stdlib.T_Tuple([ctc4, ctc5]);
  return {
    mapDataTy: ctc6
    };
  };
export async function _A_deletePurchase4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _A_deletePurchase4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _A_deletePurchase4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc2, ctc2]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    closed: ctc9,
    manager: ctc6,
    token: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc6, ctc6, ctc6]);
  const ctc12 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc13 = stdlib.T_Tuple([ctc6]);
  const ctc14 = stdlib.T_Tuple([ctc6, ctc1, ctc2, ctc2]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6, ctc2]);
  const ctc16 = stdlib.T_Data({
    A_deletePurchase0_114: ctc11,
    A_deleteSale0_114: ctc12,
    C_close0_114: ctc7,
    C_grant0_114: ctc13,
    U1_announce0_114: ctc14,
    U2_buy0_114: ctc15
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v1594, v1595, v1596, v1600, v1603, v1604, v1616] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc1, ctc1, ctc1, ctc7, ctc8, ctc10]);
  const v1723 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:236:66:application call to [unknown function] (defined at: ./index.rsh:236:66:function exp)', 'at ./index.rsh:107:29:application call to "runA_deletePurchase0_114" (defined at: ./index.rsh:236:10:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
    msg: 'in',
    who: 'A_deletePurchase'
    });
  const v1724 = v1723[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1725 = v1723[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1726 = v1723[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v1730 = [v1724, v1725];
  const v1731 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc12, v1730, ctc3), null);
  const v1732 = {
    None: 0,
    Some: 1
    }[v1731[0]];
  const v1733 = stdlib.eq(v1732, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v1733, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:236:66:application call to [unknown function] (defined at: ./index.rsh:236:66:function exp)', 'at ./index.rsh:107:29:application call to "runA_deletePurchase0_114" (defined at: ./index.rsh:236:10:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
    msg: 'No sale announced',
    who: 'A_deletePurchase'
    });
  const v1735 = [v1724, v1725, v1726];
  const v1736 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v1735, ctc2), null);
  const v1737 = {
    None: 0,
    Some: 1
    }[v1736[0]];
  const v1738 = stdlib.eq(v1737, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1738, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:238:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:236:66:application call to [unknown function] (defined at: ./index.rsh:236:66:function exp)', 'at ./index.rsh:107:29:application call to "runA_deletePurchase0_114" (defined at: ./index.rsh:236:10:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
    msg: 'Not purchased',
    who: 'A_deletePurchase'
    });
  const v1749 = ['A_deletePurchase0_114', v1723];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1594, v1595, v1596, v1600, v1603, v1604, v1616, v1749],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:236:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1792], secs: v1794, time: v1793, didSend: v1102, from: v1791 } = txn1;
      
      switch (v1792[0]) {
        case 'A_deletePurchase0_114': {
          const v1795 = v1792[1];
          sim_r.txns.push({
            kind: 'api',
            who: "A_deletePurchase"
            });
          ;
          const v1819 = v1795[stdlib.checkedBigNumberify('./index.rsh:236:10:spread', stdlib.UInt_max, '0')];
          const v1820 = v1795[stdlib.checkedBigNumberify('./index.rsh:236:10:spread', stdlib.UInt_max, '1')];
          const v1821 = v1795[stdlib.checkedBigNumberify('./index.rsh:236:10:spread', stdlib.UInt_max, '2')];
          const v1822 = [v1819, v1820];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc12, v1822, ctc3), null);
          const v1827 = [v1819, v1820, v1821];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc11, v1827, ctc2), null);
          await stdlib.simMapSet(sim_r, 1, ctc11, v1827, ctc2, undefined /* Nothing */);
          const v1836 = true;
          const v1837 = await txn1.getOutput('A_deletePurchase', 'v1836', ctc9, v1836);
          
          const v5103 = v1616;
          const v5105 = v1616.closed;
          if (v5105) {
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
        case 'A_deleteSale0_114': {
          const v2124 = v1792[1];
          
          break;
          }
        case 'C_close0_114': {
          const v2453 = v1792[1];
          
          break;
          }
        case 'C_grant0_114': {
          const v2782 = v1792[1];
          
          break;
          }
        case 'U1_announce0_114': {
          const v3111 = v1792[1];
          
          break;
          }
        case 'U2_buy0_114': {
          const v3440 = v1792[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc1, ctc1, ctc1, ctc7, ctc8, ctc10, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v1792], secs: v1794, time: v1793, didSend: v1102, from: v1791 } = txn1;
  switch (v1792[0]) {
    case 'A_deletePurchase0_114': {
      const v1795 = v1792[1];
      undefined /* setApiDetails */;
      ;
      const v1819 = v1795[stdlib.checkedBigNumberify('./index.rsh:236:10:spread', stdlib.UInt_max, '0')];
      const v1820 = v1795[stdlib.checkedBigNumberify('./index.rsh:236:10:spread', stdlib.UInt_max, '1')];
      const v1821 = v1795[stdlib.checkedBigNumberify('./index.rsh:236:10:spread', stdlib.UInt_max, '2')];
      const v1822 = [v1819, v1820];
      const v1823 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc12, v1822, ctc3), null);
      const v1824 = {
        None: 0,
        Some: 1
        }[v1823[0]];
      const v1825 = stdlib.eq(v1824, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v1825, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:13:function exp)'],
        msg: 'No sale announced',
        who: 'A_deletePurchase'
        });
      const v1827 = [v1819, v1820, v1821];
      const v1828 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v1827, ctc2), null);
      const v1829 = {
        None: 0,
        Some: 1
        }[v1828[0]];
      const v1830 = stdlib.eq(v1829, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1830, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:238:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:13:function exp)'],
        msg: 'Not purchased',
        who: 'A_deletePurchase'
        });
      await stdlib.mapSet(map1, ctc11, v1827, ctc2, undefined /* Nothing */);
      const v1836 = true;
      const v1837 = await txn1.getOutput('A_deletePurchase', 'v1836', ctc9, v1836);
      if (v1102) {
        stdlib.protect(ctc0, await interact.out(v1795, v1837), {
          at: './index.rsh:236:11:application',
          fs: ['at ./index.rsh:236:11:application call to [unknown function] (defined at: ./index.rsh:236:11:function exp)', 'at ./index.rsh:243:12:application call to "k" (defined at: ./index.rsh:240:13:function exp)', 'at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:13:function exp)'],
          msg: 'out',
          who: 'A_deletePurchase'
          });
        }
      else {
        }
      
      const v5103 = v1616;
      const v5105 = v1616.closed;
      if (v5105) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'A_deleteSale0_114': {
      const v2124 = v1792[1];
      return;
      break;
      }
    case 'C_close0_114': {
      const v2453 = v1792[1];
      return;
      break;
      }
    case 'C_grant0_114': {
      const v2782 = v1792[1];
      return;
      break;
      }
    case 'U1_announce0_114': {
      const v3111 = v1792[1];
      return;
      break;
      }
    case 'U2_buy0_114': {
      const v3440 = v1792[1];
      return;
      break;
      }
    }
  
  
  };
export async function _A_deleteSale4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _A_deleteSale4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _A_deleteSale4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc2, ctc2]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    closed: ctc9,
    manager: ctc6,
    token: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc12 = stdlib.T_Tuple([ctc6, ctc6, ctc6]);
  const ctc13 = stdlib.T_Tuple([ctc6]);
  const ctc14 = stdlib.T_Tuple([ctc6, ctc1, ctc2, ctc2]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6, ctc2]);
  const ctc16 = stdlib.T_Data({
    A_deletePurchase0_114: ctc12,
    A_deleteSale0_114: ctc11,
    C_close0_114: ctc7,
    C_grant0_114: ctc13,
    U1_announce0_114: ctc14,
    U2_buy0_114: ctc15
    });
  const ctc17 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc2, ctc6]);
  const ctc19 = stdlib.T_Tuple([ctc1, ctc2, ctc11]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v1594, v1595, v1596, v1600, v1603, v1604, v1616] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc1, ctc1, ctc1, ctc7, ctc8, ctc10]);
  const v1702 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:200:53:application call to [unknown function] (defined at: ./index.rsh:200:53:function exp)', 'at ./index.rsh:107:29:application call to "runA_deleteSale0_114" (defined at: ./index.rsh:200:10:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
    msg: 'in',
    who: 'A_deleteSale'
    });
  const v1703 = v1702[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1704 = v1702[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1707 = [v1703, v1704];
  const v1708 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc11, v1707, ctc3), null);
  const v1709 = {
    None: 0,
    Some: 1
    }[v1708[0]];
  const v1710 = stdlib.eq(v1709, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1710, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:201:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:200:53:application call to [unknown function] (defined at: ./index.rsh:200:53:function exp)', 'at ./index.rsh:107:29:application call to "runA_deleteSale0_114" (defined at: ./index.rsh:200:10:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
    msg: 'No sale announced',
    who: 'A_deleteSale'
    });
  const v1719 = ['A_deleteSale0_114', v1702];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1594, v1595, v1596, v1600, v1603, v1604, v1616, v1719],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:200:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1792], secs: v1794, time: v1793, didSend: v1102, from: v1791 } = txn1;
      
      switch (v1792[0]) {
        case 'A_deletePurchase0_114': {
          const v1795 = v1792[1];
          
          break;
          }
        case 'A_deleteSale0_114': {
          const v2124 = v1792[1];
          sim_r.txns.push({
            kind: 'api',
            who: "A_deleteSale"
            });
          ;
          const v2176 = v2124[stdlib.checkedBigNumberify('./index.rsh:200:10:spread', stdlib.UInt_max, '0')];
          const v2177 = v2124[stdlib.checkedBigNumberify('./index.rsh:200:10:spread', stdlib.UInt_max, '1')];
          const v2178 = [v2176, v2177];
          const v2179 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc11, v2178, ctc3), null);
          switch (v2179[0]) {
            case 'None': {
              const v2187 = v2179[1];
              const v2188 = false;
              const v2189 = await txn1.getOutput('A_deleteSale', 'v2188', ctc9, v2188);
              
              const v5139 = v1616;
              const v5141 = v1616.closed;
              if (v5141) {
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
              const v2198 = v2179[1];
              const v2199 = v2198[stdlib.checkedBigNumberify('./index.rsh:210:21:array', stdlib.UInt_max, '0')];
              const v2202 = await ctc.getContractAddress();
              const v2203 = [v2199, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2176];
              const v2207 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v2199,
                  remote: ({
                    accs: [v2176],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:219:19:application', stdlib.UInt_max, '0'),
                    boxes: [[ctc18, v2203]],
                    fees: stdlib.checkedBigNumberify('./index.rsh:217:38:application', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:219:19:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc2.defaultValue /* simReturnVal */];})();
              await txn1.getOutput('internal', 'v2207', ctc17, v2207);
              const v2218 = [v2176, v2202];
              const v2219 = [v2199, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v2218];
              const v2223 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v2199,
                  remote: ({
                    accs: [v2176, v2202],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:225:19:application', stdlib.UInt_max, '0'),
                    boxes: [[ctc19, v2219]],
                    fees: stdlib.checkedBigNumberify('./index.rsh:223:38:application', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:225:19:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc2.defaultValue /* simReturnVal */];})();
              await txn1.getOutput('internal', 'v2223', ctc17, v2223);
              await stdlib.simMapSet(sim_r, 0, ctc11, v2178, ctc3, undefined /* Nothing */);
              const v2235 = true;
              const v2236 = await txn1.getOutput('A_deleteSale', 'v2235', ctc9, v2235);
              
              const v5143 = v1616;
              const v5145 = v1616.closed;
              if (v5145) {
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
        case 'C_close0_114': {
          const v2453 = v1792[1];
          
          break;
          }
        case 'C_grant0_114': {
          const v2782 = v1792[1];
          
          break;
          }
        case 'U1_announce0_114': {
          const v3111 = v1792[1];
          
          break;
          }
        case 'U2_buy0_114': {
          const v3440 = v1792[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc1, ctc1, ctc1, ctc7, ctc8, ctc10, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v1792], secs: v1794, time: v1793, didSend: v1102, from: v1791 } = txn1;
  switch (v1792[0]) {
    case 'A_deletePurchase0_114': {
      const v1795 = v1792[1];
      return;
      break;
      }
    case 'A_deleteSale0_114': {
      const v2124 = v1792[1];
      undefined /* setApiDetails */;
      ;
      const v2176 = v2124[stdlib.checkedBigNumberify('./index.rsh:200:10:spread', stdlib.UInt_max, '0')];
      const v2177 = v2124[stdlib.checkedBigNumberify('./index.rsh:200:10:spread', stdlib.UInt_max, '1')];
      const v2178 = [v2176, v2177];
      const v2179 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc11, v2178, ctc3), null);
      const v2180 = {
        None: 0,
        Some: 1
        }[v2179[0]];
      const v2181 = stdlib.eq(v2180, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2181, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:201:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:203:13:application call to [unknown function] (defined at: ./index.rsh:203:13:function exp)'],
        msg: 'No sale announced',
        who: 'A_deleteSale'
        });
      switch (v2179[0]) {
        case 'None': {
          const v2187 = v2179[1];
          const v2188 = false;
          const v2189 = await txn1.getOutput('A_deleteSale', 'v2188', ctc9, v2188);
          if (v1102) {
            stdlib.protect(ctc0, await interact.out(v2124, v2189), {
              at: './index.rsh:200:11:application',
              fs: ['at ./index.rsh:200:11:application call to [unknown function] (defined at: ./index.rsh:200:11:function exp)', 'at ./index.rsh:207:16:application call to "k" (defined at: ./index.rsh:203:13:function exp)', 'at ./index.rsh:203:13:application call to [unknown function] (defined at: ./index.rsh:203:13:function exp)'],
              msg: 'out',
              who: 'A_deleteSale'
              });
            }
          else {
            }
          
          const v5139 = v1616;
          const v5141 = v1616.closed;
          if (v5141) {
            return;
            }
          else {
            return;
            }
          break;
          }
        case 'Some': {
          const v2198 = v2179[1];
          const v2199 = v2198[stdlib.checkedBigNumberify('./index.rsh:210:21:array', stdlib.UInt_max, '0')];
          const v2200 = v2198[stdlib.checkedBigNumberify('./index.rsh:210:21:array', stdlib.UInt_max, '1')];
          const v2202 = await ctc.getContractAddress();
          const v2203 = [v2199, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2176];
          const v2207 = undefined /* Remote */;
          const v2208 = await txn1.getOutput('internal', 'v2207', ctc17, v2207);
          const v2210 = v2208[stdlib.checkedBigNumberify('./index.rsh:219:19:application', stdlib.UInt_max, '0')];
          const v2211 = v2208[stdlib.checkedBigNumberify('./index.rsh:219:19:application', stdlib.UInt_max, '1')];
          const v2216 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2210);
          stdlib.assert(v2216, {
            at: './index.rsh:219:19:application',
            fs: ['at ./index.rsh:203:13:application call to [unknown function] (defined at: ./index.rsh:203:13:function exp)'],
            msg: 'remote bill check',
            who: 'A_deleteSale'
            });
          const v2217 = stdlib.ge(v2211, v2200);
          stdlib.assert(v2217, {
            at: './index.rsh:216:22:application',
            fs: ['at ./index.rsh:203:13:application call to [unknown function] (defined at: ./index.rsh:203:13:function exp)'],
            msg: 'Tokens still held',
            who: 'A_deleteSale'
            });
          const v2218 = [v2176, v2202];
          const v2219 = [v2199, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v2218];
          const v2223 = undefined /* Remote */;
          const v2224 = await txn1.getOutput('internal', 'v2223', ctc17, v2223);
          const v2226 = v2224[stdlib.checkedBigNumberify('./index.rsh:225:19:application', stdlib.UInt_max, '0')];
          const v2227 = v2224[stdlib.checkedBigNumberify('./index.rsh:225:19:application', stdlib.UInt_max, '1')];
          const v2232 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2226);
          stdlib.assert(v2232, {
            at: './index.rsh:225:19:application',
            fs: ['at ./index.rsh:203:13:application call to [unknown function] (defined at: ./index.rsh:203:13:function exp)'],
            msg: 'remote bill check',
            who: 'A_deleteSale'
            });
          const v2233 = stdlib.ge(v2227, v2200);
          stdlib.assert(v2233, {
            at: './index.rsh:222:22:application',
            fs: ['at ./index.rsh:203:13:application call to [unknown function] (defined at: ./index.rsh:203:13:function exp)'],
            msg: 'Tokens still allowed',
            who: 'A_deleteSale'
            });
          await stdlib.mapSet(map0, ctc11, v2178, ctc3, undefined /* Nothing */);
          const v2235 = true;
          const v2236 = await txn1.getOutput('A_deleteSale', 'v2235', ctc9, v2235);
          if (v1102) {
            stdlib.protect(ctc0, await interact.out(v2124, v2236), {
              at: './index.rsh:200:11:application',
              fs: ['at ./index.rsh:200:11:application call to [unknown function] (defined at: ./index.rsh:200:11:function exp)', 'at ./index.rsh:230:16:application call to "k" (defined at: ./index.rsh:203:13:function exp)', 'at ./index.rsh:203:13:application call to [unknown function] (defined at: ./index.rsh:203:13:function exp)'],
              msg: 'out',
              who: 'A_deleteSale'
              });
            }
          else {
            }
          
          const v5143 = v1616;
          const v5145 = v1616.closed;
          if (v5145) {
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
    case 'C_close0_114': {
      const v2453 = v1792[1];
      return;
      break;
      }
    case 'C_grant0_114': {
      const v2782 = v1792[1];
      return;
      break;
      }
    case 'U1_announce0_114': {
      const v3111 = v1792[1];
      return;
      break;
      }
    case 'U2_buy0_114': {
      const v3440 = v1792[1];
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
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc2, ctc2]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc6 = stdlib.T_Object({
    ctc: ctc1,
    token: ctc1
    });
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc2, ctc7]);
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Tuple([ctc9, ctc9, ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc9, ctc9]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc9]);
  const ctc14 = stdlib.T_Tuple([ctc9, ctc1, ctc2, ctc2]);
  const ctc15 = stdlib.T_Tuple([ctc9, ctc9, ctc2]);
  const ctc16 = stdlib.T_Data({
    A_deletePurchase0_114: ctc10,
    A_deleteSale0_114: ctc11,
    C_close0_114: ctc12,
    C_grant0_114: ctc13,
    U1_announce0_114: ctc14,
    U2_buy0_114: ctc15
    });
  const ctc17 = stdlib.T_Tuple([ctc2, ctc2]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  const map1_ctc = ctc5;
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
  const {data: [], secs: v1586, time: v1585, didSend: v22, from: v1584 } = txn1;
  ;
  const v1589 = stdlib.protect(ctc6, await interact.getParams(), {
    at: './index.rsh:78:57:application',
    fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:13:function exp)'],
    msg: 'getParams',
    who: 'Alice'
    });
  const v1590 = v1589.ctc;
  const v1591 = v1589.token;
  
  const txn2 = await (ctc.sendrecv({
    args: [v1590, v1591],
    evt_cnt: 2,
    funcNum: 1,
    lct: v1585,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:80:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1595, v1596], secs: v1598, time: v1597, didSend: v36, from: v1594 } = txn2;
      
      ;
      
      const v1600 = await ctc.getContractInfo();
      const v1603 = [];
      const v1604 = [v1600, v1596];
      const v1605 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v1595,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:94:18:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./index.rsh:94:18:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc7.defaultValue /* simReturnVal */];})();
      await txn2.getOutput('internal', 'v1605', ctc8, v1605);
      const v1615 = {
        closed: false,
        manager: v1594,
        token: v1596
        };
      const v1616 = v1615;
      const v1617 = v1597;
      
      if (await (async () => {
        const v1627 = v1616.closed;
        const v1628 = v1627 ? false : true;
        
        return v1628;})()) {
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
    tys: [ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v1595, v1596], secs: v1598, time: v1597, didSend: v36, from: v1594 } = txn2;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:81:19:application',
    fs: ['at ./index.rsh:81:19:application call to [unknown function] (defined at: ./index.rsh:81:19:function exp)', 'at ./index.rsh:81:19:application call to "liftedInteract" (defined at: ./index.rsh:81:19:application)'],
    msg: 'ready',
    who: 'Alice'
    });
  
  const v1600 = await ctc.getContractInfo();
  const v1603 = [];
  const v1604 = [v1600, v1596];
  const v1605 = undefined /* Remote */;
  const v1606 = await txn2.getOutput('internal', 'v1605', ctc8, v1605);
  const v1608 = v1606[stdlib.checkedBigNumberify('./index.rsh:94:18:application', stdlib.UInt_max, '0')];
  const v1609 = v1606[stdlib.checkedBigNumberify('./index.rsh:94:18:application', stdlib.UInt_max, '1')];
  const v1614 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1608);
  stdlib.assert(v1614, {
    at: './index.rsh:94:18:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Alice'
    });
  stdlib.assert(v1609, {
    at: './index.rsh:93:10:application',
    fs: [],
    msg: 'Child app not announced as ready',
    who: 'Alice'
    });
  const v1615 = {
    closed: false,
    manager: v1594,
    token: v1596
    };
  let v1616 = v1615;
  let v1617 = v1597;
  
  let txn3 = txn2;
  while (await (async () => {
    const v1627 = v1616.closed;
    const v1628 = v1627 ? false : true;
    
    return v1628;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc16],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1792], secs: v1794, time: v1793, didSend: v1102, from: v1791 } = txn4;
    switch (v1792[0]) {
      case 'A_deletePurchase0_114': {
        const v1795 = v1792[1];
        undefined /* setApiDetails */;
        ;
        const v1819 = v1795[stdlib.checkedBigNumberify('./index.rsh:236:10:spread', stdlib.UInt_max, '0')];
        const v1820 = v1795[stdlib.checkedBigNumberify('./index.rsh:236:10:spread', stdlib.UInt_max, '1')];
        const v1821 = v1795[stdlib.checkedBigNumberify('./index.rsh:236:10:spread', stdlib.UInt_max, '2')];
        const v1822 = [v1819, v1820];
        const v1823 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc11, v1822, ctc3), null);
        const v1824 = {
          None: 0,
          Some: 1
          }[v1823[0]];
        const v1825 = stdlib.eq(v1824, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v1825, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:13:function exp)'],
          msg: 'No sale announced',
          who: 'Alice'
          });
        const v1827 = [v1819, v1820, v1821];
        const v1828 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc10, v1827, ctc2), null);
        const v1829 = {
          None: 0,
          Some: 1
          }[v1828[0]];
        const v1830 = stdlib.eq(v1829, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v1830, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:238:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:13:function exp)'],
          msg: 'Not purchased',
          who: 'Alice'
          });
        await stdlib.mapSet(map1, ctc10, v1827, ctc2, undefined /* Nothing */);
        const v1836 = true;
        await txn4.getOutput('A_deletePurchase', 'v1836', ctc7, v1836);
        const cv1616 = v1616;
        const cv1617 = v1793;
        
        v1616 = cv1616;
        v1617 = cv1617;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'A_deleteSale0_114': {
        const v2124 = v1792[1];
        undefined /* setApiDetails */;
        ;
        const v2176 = v2124[stdlib.checkedBigNumberify('./index.rsh:200:10:spread', stdlib.UInt_max, '0')];
        const v2177 = v2124[stdlib.checkedBigNumberify('./index.rsh:200:10:spread', stdlib.UInt_max, '1')];
        const v2178 = [v2176, v2177];
        const v2179 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc11, v2178, ctc3), null);
        const v2180 = {
          None: 0,
          Some: 1
          }[v2179[0]];
        const v2181 = stdlib.eq(v2180, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2181, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:201:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:203:13:application call to [unknown function] (defined at: ./index.rsh:203:13:function exp)'],
          msg: 'No sale announced',
          who: 'Alice'
          });
        switch (v2179[0]) {
          case 'None': {
            const v2187 = v2179[1];
            const v2188 = false;
            await txn4.getOutput('A_deleteSale', 'v2188', ctc7, v2188);
            const cv1616 = v1616;
            const cv1617 = v1793;
            
            v1616 = cv1616;
            v1617 = cv1617;
            
            txn3 = txn4;
            continue;
            break;
            }
          case 'Some': {
            const v2198 = v2179[1];
            const v2199 = v2198[stdlib.checkedBigNumberify('./index.rsh:210:21:array', stdlib.UInt_max, '0')];
            const v2200 = v2198[stdlib.checkedBigNumberify('./index.rsh:210:21:array', stdlib.UInt_max, '1')];
            const v2202 = await ctc.getContractAddress();
            const v2203 = [v2199, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2176];
            const v2207 = undefined /* Remote */;
            const v2208 = await txn4.getOutput('internal', 'v2207', ctc17, v2207);
            const v2210 = v2208[stdlib.checkedBigNumberify('./index.rsh:219:19:application', stdlib.UInt_max, '0')];
            const v2211 = v2208[stdlib.checkedBigNumberify('./index.rsh:219:19:application', stdlib.UInt_max, '1')];
            const v2216 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2210);
            stdlib.assert(v2216, {
              at: './index.rsh:219:19:application',
              fs: ['at ./index.rsh:203:13:application call to [unknown function] (defined at: ./index.rsh:203:13:function exp)'],
              msg: 'remote bill check',
              who: 'Alice'
              });
            const v2217 = stdlib.ge(v2211, v2200);
            stdlib.assert(v2217, {
              at: './index.rsh:216:22:application',
              fs: ['at ./index.rsh:203:13:application call to [unknown function] (defined at: ./index.rsh:203:13:function exp)'],
              msg: 'Tokens still held',
              who: 'Alice'
              });
            const v2218 = [v2176, v2202];
            const v2219 = [v2199, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v2218];
            const v2223 = undefined /* Remote */;
            const v2224 = await txn4.getOutput('internal', 'v2223', ctc17, v2223);
            const v2226 = v2224[stdlib.checkedBigNumberify('./index.rsh:225:19:application', stdlib.UInt_max, '0')];
            const v2227 = v2224[stdlib.checkedBigNumberify('./index.rsh:225:19:application', stdlib.UInt_max, '1')];
            const v2232 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2226);
            stdlib.assert(v2232, {
              at: './index.rsh:225:19:application',
              fs: ['at ./index.rsh:203:13:application call to [unknown function] (defined at: ./index.rsh:203:13:function exp)'],
              msg: 'remote bill check',
              who: 'Alice'
              });
            const v2233 = stdlib.ge(v2227, v2200);
            stdlib.assert(v2233, {
              at: './index.rsh:222:22:application',
              fs: ['at ./index.rsh:203:13:application call to [unknown function] (defined at: ./index.rsh:203:13:function exp)'],
              msg: 'Tokens still allowed',
              who: 'Alice'
              });
            await stdlib.mapSet(map0, ctc11, v2178, ctc3, undefined /* Nothing */);
            const v2235 = true;
            await txn4.getOutput('A_deleteSale', 'v2235', ctc7, v2235);
            const cv1616 = v1616;
            const cv1617 = v1793;
            
            v1616 = cv1616;
            v1617 = cv1617;
            
            txn3 = txn4;
            continue;
            break;
            }
          }
        break;
        }
      case 'C_close0_114': {
        const v2453 = v1792[1];
        undefined /* setApiDetails */;
        ;
        const v2580 = undefined /* Remote */;
        const v2581 = await txn4.getOutput('internal', 'v2580', ctc8, v2580);
        const v2583 = v2581[stdlib.checkedBigNumberify('./index.rsh:254:26:application', stdlib.UInt_max, '0')];
        const v2584 = v2581[stdlib.checkedBigNumberify('./index.rsh:254:26:application', stdlib.UInt_max, '1')];
        const v2589 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2583);
        stdlib.assert(v2589, {
          at: './index.rsh:254:26:application',
          fs: ['at ./index.rsh:252:13:application call to [unknown function] (defined at: ./index.rsh:252:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v2584, {
          at: './index.rsh:253:18:application',
          fs: ['at ./index.rsh:252:13:application call to [unknown function] (defined at: ./index.rsh:252:13:function exp)'],
          msg: 'Child app rejected close',
          who: 'Alice'
          });
        const v2590 = true;
        await txn4.getOutput('C_close', 'v2590', ctc7, v2590);
        const v2597 = v1616.manager;
        const v2598 = v1616.token;
        const v2599 = {
          closed: true,
          manager: v2597,
          token: v2598
          };
        const cv1616 = v2599;
        const cv1617 = v1793;
        
        v1616 = cv1616;
        v1617 = cv1617;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'C_grant0_114': {
        const v2782 = v1792[1];
        undefined /* setApiDetails */;
        ;
        const v2932 = v2782[stdlib.checkedBigNumberify('./index.rsh:262:10:spread', stdlib.UInt_max, '0')];
        const v2933 = v1616.manager;
        const v2934 = stdlib.addressEq(v1791, v2933);
        stdlib.assert(v2934, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:263:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:265:13:application call to [unknown function] (defined at: ./index.rsh:265:13:function exp)'],
          msg: 'Only constructor can grant',
          who: 'Alice'
          });
        const v2941 = [v1600, v1596, v2932];
        const v2942 = undefined /* Remote */;
        const v2943 = await txn4.getOutput('internal', 'v2942', ctc8, v2942);
        const v2945 = v2943[stdlib.checkedBigNumberify('./index.rsh:267:26:application', stdlib.UInt_max, '0')];
        const v2946 = v2943[stdlib.checkedBigNumberify('./index.rsh:267:26:application', stdlib.UInt_max, '1')];
        const v2951 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2945);
        stdlib.assert(v2951, {
          at: './index.rsh:267:26:application',
          fs: ['at ./index.rsh:265:13:application call to [unknown function] (defined at: ./index.rsh:265:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v2946, {
          at: './index.rsh:266:18:application',
          fs: ['at ./index.rsh:265:13:application call to [unknown function] (defined at: ./index.rsh:265:13:function exp)'],
          msg: 'Child app rejected grant',
          who: 'Alice'
          });
        const v2952 = true;
        await txn4.getOutput('C_grant', 'v2952', ctc7, v2952);
        const v2959 = v1616.closed;
        const v2961 = v1616.token;
        const v2962 = {
          closed: v2959,
          manager: v2932,
          token: v2961
          };
        const cv1616 = v2962;
        const cv1617 = v1793;
        
        v1616 = cv1616;
        v1617 = cv1617;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U1_announce0_114': {
        const v3111 = v1792[1];
        undefined /* setApiDetails */;
        ;
        const v3295 = v3111[stdlib.checkedBigNumberify('./index.rsh:118:10:spread', stdlib.UInt_max, '0')];
        const v3296 = v3111[stdlib.checkedBigNumberify('./index.rsh:118:10:spread', stdlib.UInt_max, '1')];
        const v3297 = v3111[stdlib.checkedBigNumberify('./index.rsh:118:10:spread', stdlib.UInt_max, '2')];
        const v3298 = v3111[stdlib.checkedBigNumberify('./index.rsh:118:10:spread', stdlib.UInt_max, '3')];
        const v3299 = [v1791, v3295];
        const v3300 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc11, v3299, ctc3), null);
        const v3301 = {
          None: 0,
          Some: 1
          }[v3300[0]];
        const v3302 = stdlib.eq(v3301, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3302, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
          msg: 'already announced',
          who: 'Alice'
          });
        const v3304 = stdlib.gt(v3297, stdlib.checkedBigNumberify('./index.rsh:120:19:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v3304, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:120:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
          msg: 'Must sell at least one token',
          who: 'Alice'
          });
        const v3306 = stdlib.gt(v3298, stdlib.checkedBigNumberify('./index.rsh:121:19:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v3306, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:121:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
          msg: 'Price must be positive',
          who: 'Alice'
          });
        const v3312 = await ctc.getContractAddress();
        const v3313 = [v1791, v3312];
        const v3314 = [v3296, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v3313];
        const v3319 = undefined /* Remote */;
        const v3320 = await txn4.getOutput('internal', 'v3319', ctc17, v3319);
        const v3322 = v3320[stdlib.checkedBigNumberify('./index.rsh:131:15:application', stdlib.UInt_max, '0')];
        const v3323 = v3320[stdlib.checkedBigNumberify('./index.rsh:131:15:application', stdlib.UInt_max, '1')];
        const v3328 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3322);
        stdlib.assert(v3328, {
          at: './index.rsh:131:15:application',
          fs: ['at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        const v3329 = stdlib.ge(v3323, v3297);
        stdlib.assert(v3329, {
          at: './index.rsh:128:18:application',
          fs: ['at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
          msg: 'Not enough allowance',
          who: 'Alice'
          });
        const v3330 = [v3296, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1791];
        const v3334 = undefined /* Remote */;
        const v3335 = await txn4.getOutput('internal', 'v3334', ctc17, v3334);
        const v3337 = v3335[stdlib.checkedBigNumberify('./index.rsh:136:13:application', stdlib.UInt_max, '0')];
        const v3338 = v3335[stdlib.checkedBigNumberify('./index.rsh:136:13:application', stdlib.UInt_max, '1')];
        const v3343 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3337);
        stdlib.assert(v3343, {
          at: './index.rsh:136:13:application',
          fs: ['at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        const v3344 = stdlib.ge(v3338, v3297);
        stdlib.assert(v3344, {
          at: './index.rsh:134:18:application',
          fs: ['at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
          msg: 'Not enough tokens',
          who: 'Alice'
          });
        const v3346 = [v3296, v3297, v3298];
        await stdlib.mapSet(map0, ctc11, v3299, ctc3, v3346);
        const v3347 = true;
        await txn4.getOutput('U1_announce', 'v3347', ctc7, v3347);
        const cv1616 = v1616;
        const cv1617 = v1793;
        
        v1616 = cv1616;
        v1617 = cv1617;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U2_buy0_114': {
        const v3440 = v1792[1];
        undefined /* setApiDetails */;
        const v3450 = v3440[stdlib.checkedBigNumberify('./index.rsh:144:10:spread', stdlib.UInt_max, '0')];
        const v3451 = v3440[stdlib.checkedBigNumberify('./index.rsh:144:10:spread', stdlib.UInt_max, '1')];
        const v3452 = v3440[stdlib.checkedBigNumberify('./index.rsh:144:10:spread', stdlib.UInt_max, '2')];
        const v3453 = [v3450, v3451];
        const v3454 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc11, v3453, ctc3), null);
        const v3455 = {
          None: 0,
          Some: 1
          }[v3454[0]];
        const v3456 = stdlib.eq(v3455, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3456, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:145:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:144:52:application call to [unknown function] (defined at: ./index.rsh:144:52:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:144:52:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
          msg: 'No sale announced',
          who: 'Alice'
          });
        const v3458 = stdlib.eq(v3452, stdlib.checkedBigNumberify('./index.rsh:146:20:decimal', stdlib.UInt_max, '0'));
        const v3459 = v3458 ? false : true;
        stdlib.assert(v3459, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:146:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:144:52:application call to [unknown function] (defined at: ./index.rsh:144:52:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:144:52:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
          msg: 'Must pay something',
          who: 'Alice'
          });
        ;
        switch (v3454[0]) {
          case 'None': {
            const v3704 = v3454[1];
            ;
            const v3709 = stdlib.checkedBigNumberify('./index.rsh:164:17:decimal', stdlib.UInt_max, '0');
            await txn4.getOutput('U2_buy', 'v3709', ctc2, v3709);
            const cv1616 = v1616;
            const cv1617 = v1793;
            
            v1616 = cv1616;
            v1617 = cv1617;
            
            txn3 = txn4;
            continue;
            break;
            }
          case 'Some': {
            const v3720 = v3454[1];
            const v3721 = v3720[stdlib.checkedBigNumberify('./index.rsh:167:21:array', stdlib.UInt_max, '0')];
            const v3722 = v3720[stdlib.checkedBigNumberify('./index.rsh:167:21:array', stdlib.UInt_max, '1')];
            const v3723 = v3720[stdlib.checkedBigNumberify('./index.rsh:167:21:array', stdlib.UInt_max, '2')];
            const v3724 = await ctc.getContractAddress();
            const v3725 = stdlib.safeDiv(v3452, v3723);
            const v3726 = stdlib.safeMul(v3725, v3723);
            const v3727 = stdlib.safeSub(v3452, v3726);
            const v3728 = stdlib.safeMul(v3722, v3725);
            const v3729 = [v3450, v3451, v1791];
            const v3731 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc10, v3729, ctc2), null);
            const v3732 = stdlib.fromSome(v3731, stdlib.checkedBigNumberify('./index.rsh:180:70:decimal', stdlib.UInt_max, '0'));
            const v3733 = stdlib.safeAdd(v3732, v3728);
            await stdlib.mapSet(map1, ctc10, v3729, ctc2, v3733);
            const v3734 = [v3721, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3450];
            const v3735 = [v3721, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1791];
            const v3736 = [v3450, v3724];
            const v3737 = [v3721, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v3736];
            const v3741 = undefined /* Remote */;
            const v3742 = await txn4.getOutput('internal', 'v3741', ctc8, v3741);
            const v3744 = v3742[stdlib.checkedBigNumberify('./index.rsh:189:19:application', stdlib.UInt_max, '0')];
            const v3745 = v3742[stdlib.checkedBigNumberify('./index.rsh:189:19:application', stdlib.UInt_max, '1')];
            const v3750 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3744);
            stdlib.assert(v3750, {
              at: './index.rsh:189:19:application',
              fs: ['at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:13:function exp)'],
              msg: 'remote bill check',
              who: 'Alice'
              });
            stdlib.assert(v3745, {
              at: './index.rsh:182:22:application',
              fs: ['at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:13:function exp)'],
              msg: 'Transfer failed',
              who: 'Alice'
              });
            ;
            ;
            await txn4.getOutput('U2_buy', 'v3728', ctc2, v3728);
            const cv1616 = v1616;
            const cv1617 = v1793;
            
            v1616 = cv1616;
            v1617 = cv1617;
            
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
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc2, ctc2]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    closed: ctc9,
    manager: ctc6,
    token: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc6, ctc6, ctc6]);
  const ctc12 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc13 = stdlib.T_Tuple([ctc6]);
  const ctc14 = stdlib.T_Tuple([ctc6, ctc1, ctc2, ctc2]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6, ctc2]);
  const ctc16 = stdlib.T_Data({
    A_deletePurchase0_114: ctc11,
    A_deleteSale0_114: ctc12,
    C_close0_114: ctc7,
    C_grant0_114: ctc13,
    U1_announce0_114: ctc14,
    U2_buy0_114: ctc15
    });
  const ctc17 = stdlib.T_Tuple([ctc2, ctc9]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v1594, v1595, v1596, v1600, v1603, v1604, v1616] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc1, ctc1, ctc1, ctc7, ctc8, ctc10]);
  const v1753 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:249:25:application call to [unknown function] (defined at: ./index.rsh:249:25:function exp)', 'at ./index.rsh:107:29:application call to "runC_close0_114" (defined at: ./index.rsh:249:10:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
    msg: 'in',
    who: 'C_close'
    });
  const v1757 = ['C_close0_114', v1753];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1594, v1595, v1596, v1600, v1603, v1604, v1616, v1757],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:249:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1792], secs: v1794, time: v1793, didSend: v1102, from: v1791 } = txn1;
      
      switch (v1792[0]) {
        case 'A_deletePurchase0_114': {
          const v1795 = v1792[1];
          
          break;
          }
        case 'A_deleteSale0_114': {
          const v2124 = v1792[1];
          
          break;
          }
        case 'C_close0_114': {
          const v2453 = v1792[1];
          sim_r.txns.push({
            kind: 'api',
            who: "C_close"
            });
          ;
          const v2580 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v1595,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:254:26:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:254:26:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc9.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v2580', ctc17, v2580);
          const v2590 = true;
          const v2591 = await txn1.getOutput('C_close', 'v2590', ctc9, v2590);
          
          const v2597 = v1616.manager;
          const v2598 = v1616.token;
          const v2599 = {
            closed: true,
            manager: v2597,
            token: v2598
            };
          const v5179 = v2599;
          const v5181 = v2599.closed;
          if (v5181) {
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
        case 'C_grant0_114': {
          const v2782 = v1792[1];
          
          break;
          }
        case 'U1_announce0_114': {
          const v3111 = v1792[1];
          
          break;
          }
        case 'U2_buy0_114': {
          const v3440 = v1792[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc1, ctc1, ctc1, ctc7, ctc8, ctc10, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v1792], secs: v1794, time: v1793, didSend: v1102, from: v1791 } = txn1;
  switch (v1792[0]) {
    case 'A_deletePurchase0_114': {
      const v1795 = v1792[1];
      return;
      break;
      }
    case 'A_deleteSale0_114': {
      const v2124 = v1792[1];
      return;
      break;
      }
    case 'C_close0_114': {
      const v2453 = v1792[1];
      undefined /* setApiDetails */;
      ;
      const v2580 = undefined /* Remote */;
      const v2581 = await txn1.getOutput('internal', 'v2580', ctc17, v2580);
      const v2583 = v2581[stdlib.checkedBigNumberify('./index.rsh:254:26:application', stdlib.UInt_max, '0')];
      const v2584 = v2581[stdlib.checkedBigNumberify('./index.rsh:254:26:application', stdlib.UInt_max, '1')];
      const v2589 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2583);
      stdlib.assert(v2589, {
        at: './index.rsh:254:26:application',
        fs: ['at ./index.rsh:252:13:application call to [unknown function] (defined at: ./index.rsh:252:13:function exp)'],
        msg: 'remote bill check',
        who: 'C_close'
        });
      stdlib.assert(v2584, {
        at: './index.rsh:253:18:application',
        fs: ['at ./index.rsh:252:13:application call to [unknown function] (defined at: ./index.rsh:252:13:function exp)'],
        msg: 'Child app rejected close',
        who: 'C_close'
        });
      const v2590 = true;
      const v2591 = await txn1.getOutput('C_close', 'v2590', ctc9, v2590);
      if (v1102) {
        stdlib.protect(ctc0, await interact.out(v2453, v2591), {
          at: './index.rsh:249:11:application',
          fs: ['at ./index.rsh:249:11:application call to [unknown function] (defined at: ./index.rsh:249:11:function exp)', 'at ./index.rsh:257:12:application call to "k" (defined at: ./index.rsh:252:13:function exp)', 'at ./index.rsh:252:13:application call to [unknown function] (defined at: ./index.rsh:252:13:function exp)'],
          msg: 'out',
          who: 'C_close'
          });
        }
      else {
        }
      
      const v2597 = v1616.manager;
      const v2598 = v1616.token;
      const v2599 = {
        closed: true,
        manager: v2597,
        token: v2598
        };
      const v5179 = v2599;
      const v5181 = v2599.closed;
      if (v5181) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'C_grant0_114': {
      const v2782 = v1792[1];
      return;
      break;
      }
    case 'U1_announce0_114': {
      const v3111 = v1792[1];
      return;
      break;
      }
    case 'U2_buy0_114': {
      const v3440 = v1792[1];
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
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc2, ctc2]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    closed: ctc9,
    manager: ctc6,
    token: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc6]);
  const ctc12 = stdlib.T_Tuple([ctc6, ctc6, ctc6]);
  const ctc13 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc14 = stdlib.T_Tuple([ctc6, ctc1, ctc2, ctc2]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6, ctc2]);
  const ctc16 = stdlib.T_Data({
    A_deletePurchase0_114: ctc12,
    A_deleteSale0_114: ctc13,
    C_close0_114: ctc7,
    C_grant0_114: ctc11,
    U1_announce0_114: ctc14,
    U2_buy0_114: ctc15
    });
  const ctc17 = stdlib.T_Tuple([ctc2, ctc9]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v1594, v1595, v1596, v1600, v1603, v1604, v1616] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc1, ctc1, ctc1, ctc7, ctc8, ctc10]);
  const v1759 = ctc.selfAddress();
  const v1761 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:262:29:application call to [unknown function] (defined at: ./index.rsh:262:29:function exp)', 'at ./index.rsh:107:29:application call to "runC_grant0_114" (defined at: ./index.rsh:262:10:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
    msg: 'in',
    who: 'C_grant'
    });
  const v1764 = v1616.manager;
  const v1765 = stdlib.addressEq(v1759, v1764);
  stdlib.assert(v1765, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:263:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:262:29:application call to [unknown function] (defined at: ./index.rsh:262:29:function exp)', 'at ./index.rsh:107:29:application call to "runC_grant0_114" (defined at: ./index.rsh:262:10:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
    msg: 'Only constructor can grant',
    who: 'C_grant'
    });
  const v1772 = ['C_grant0_114', v1761];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1594, v1595, v1596, v1600, v1603, v1604, v1616, v1772],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:262:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1792], secs: v1794, time: v1793, didSend: v1102, from: v1791 } = txn1;
      
      switch (v1792[0]) {
        case 'A_deletePurchase0_114': {
          const v1795 = v1792[1];
          
          break;
          }
        case 'A_deleteSale0_114': {
          const v2124 = v1792[1];
          
          break;
          }
        case 'C_close0_114': {
          const v2453 = v1792[1];
          
          break;
          }
        case 'C_grant0_114': {
          const v2782 = v1792[1];
          sim_r.txns.push({
            kind: 'api',
            who: "C_grant"
            });
          ;
          const v2932 = v2782[stdlib.checkedBigNumberify('./index.rsh:262:10:spread', stdlib.UInt_max, '0')];
          const v2941 = [v1600, v1596, v2932];
          const v2942 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v1595,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:267:26:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:267:26:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc9.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v2942', ctc17, v2942);
          const v2952 = true;
          const v2953 = await txn1.getOutput('C_grant', 'v2952', ctc9, v2952);
          
          const v2959 = v1616.closed;
          const v2961 = v1616.token;
          const v2962 = {
            closed: v2959,
            manager: v2932,
            token: v2961
            };
          const v5215 = v2962;
          const v5217 = v2962.closed;
          if (v5217) {
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
        case 'U1_announce0_114': {
          const v3111 = v1792[1];
          
          break;
          }
        case 'U2_buy0_114': {
          const v3440 = v1792[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc1, ctc1, ctc1, ctc7, ctc8, ctc10, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v1792], secs: v1794, time: v1793, didSend: v1102, from: v1791 } = txn1;
  switch (v1792[0]) {
    case 'A_deletePurchase0_114': {
      const v1795 = v1792[1];
      return;
      break;
      }
    case 'A_deleteSale0_114': {
      const v2124 = v1792[1];
      return;
      break;
      }
    case 'C_close0_114': {
      const v2453 = v1792[1];
      return;
      break;
      }
    case 'C_grant0_114': {
      const v2782 = v1792[1];
      undefined /* setApiDetails */;
      ;
      const v2932 = v2782[stdlib.checkedBigNumberify('./index.rsh:262:10:spread', stdlib.UInt_max, '0')];
      const v2933 = v1616.manager;
      const v2934 = stdlib.addressEq(v1791, v2933);
      stdlib.assert(v2934, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:263:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:265:13:application call to [unknown function] (defined at: ./index.rsh:265:13:function exp)'],
        msg: 'Only constructor can grant',
        who: 'C_grant'
        });
      const v2941 = [v1600, v1596, v2932];
      const v2942 = undefined /* Remote */;
      const v2943 = await txn1.getOutput('internal', 'v2942', ctc17, v2942);
      const v2945 = v2943[stdlib.checkedBigNumberify('./index.rsh:267:26:application', stdlib.UInt_max, '0')];
      const v2946 = v2943[stdlib.checkedBigNumberify('./index.rsh:267:26:application', stdlib.UInt_max, '1')];
      const v2951 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2945);
      stdlib.assert(v2951, {
        at: './index.rsh:267:26:application',
        fs: ['at ./index.rsh:265:13:application call to [unknown function] (defined at: ./index.rsh:265:13:function exp)'],
        msg: 'remote bill check',
        who: 'C_grant'
        });
      stdlib.assert(v2946, {
        at: './index.rsh:266:18:application',
        fs: ['at ./index.rsh:265:13:application call to [unknown function] (defined at: ./index.rsh:265:13:function exp)'],
        msg: 'Child app rejected grant',
        who: 'C_grant'
        });
      const v2952 = true;
      const v2953 = await txn1.getOutput('C_grant', 'v2952', ctc9, v2952);
      if (v1102) {
        stdlib.protect(ctc0, await interact.out(v2782, v2953), {
          at: './index.rsh:262:11:application',
          fs: ['at ./index.rsh:262:11:application call to [unknown function] (defined at: ./index.rsh:262:11:function exp)', 'at ./index.rsh:270:12:application call to "k" (defined at: ./index.rsh:265:13:function exp)', 'at ./index.rsh:265:13:application call to [unknown function] (defined at: ./index.rsh:265:13:function exp)'],
          msg: 'out',
          who: 'C_grant'
          });
        }
      else {
        }
      
      const v2959 = v1616.closed;
      const v2961 = v1616.token;
      const v2962 = {
        closed: v2959,
        manager: v2932,
        token: v2961
        };
      const v5215 = v2962;
      const v5217 = v2962.closed;
      if (v5217) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'U1_announce0_114': {
      const v3111 = v1792[1];
      return;
      break;
      }
    case 'U2_buy0_114': {
      const v3440 = v1792[1];
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
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc2, ctc2]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc2, ctc6]);
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([ctc8, ctc8, ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc8]);
  const ctc13 = stdlib.T_Tuple([ctc8, ctc1, ctc2, ctc2]);
  const ctc14 = stdlib.T_Tuple([ctc8, ctc8, ctc2]);
  const ctc15 = stdlib.T_Data({
    A_deletePurchase0_114: ctc9,
    A_deleteSale0_114: ctc10,
    C_close0_114: ctc11,
    C_grant0_114: ctc12,
    U1_announce0_114: ctc13,
    U2_buy0_114: ctc14
    });
  const ctc16 = stdlib.T_Tuple([ctc2, ctc2]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:75:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:75:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v1586, time: v1585, didSend: v22, from: v1584 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1586, time: v1585, didSend: v22, from: v1584 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1595, v1596], secs: v1598, time: v1597, didSend: v36, from: v1594 } = txn2;
  ;
  const v1600 = await ctc.getContractInfo();
  const v1603 = [];
  const v1604 = [v1600, v1596];
  const v1605 = undefined /* Remote */;
  const v1606 = await txn2.getOutput('internal', 'v1605', ctc7, v1605);
  const v1608 = v1606[stdlib.checkedBigNumberify('./index.rsh:94:18:application', stdlib.UInt_max, '0')];
  const v1609 = v1606[stdlib.checkedBigNumberify('./index.rsh:94:18:application', stdlib.UInt_max, '1')];
  const v1614 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1608);
  stdlib.assert(v1614, {
    at: './index.rsh:94:18:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Deployer'
    });
  stdlib.assert(v1609, {
    at: './index.rsh:93:10:application',
    fs: [],
    msg: 'Child app not announced as ready',
    who: 'Deployer'
    });
  const v1615 = {
    closed: false,
    manager: v1594,
    token: v1596
    };
  let v1616 = v1615;
  let v1617 = v1597;
  
  let txn3 = txn2;
  while (await (async () => {
    const v1627 = v1616.closed;
    const v1628 = v1627 ? false : true;
    
    return v1628;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1792], secs: v1794, time: v1793, didSend: v1102, from: v1791 } = txn4;
    switch (v1792[0]) {
      case 'A_deletePurchase0_114': {
        const v1795 = v1792[1];
        undefined /* setApiDetails */;
        ;
        const v1819 = v1795[stdlib.checkedBigNumberify('./index.rsh:236:10:spread', stdlib.UInt_max, '0')];
        const v1820 = v1795[stdlib.checkedBigNumberify('./index.rsh:236:10:spread', stdlib.UInt_max, '1')];
        const v1821 = v1795[stdlib.checkedBigNumberify('./index.rsh:236:10:spread', stdlib.UInt_max, '2')];
        const v1822 = [v1819, v1820];
        const v1823 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v1822, ctc3), null);
        const v1824 = {
          None: 0,
          Some: 1
          }[v1823[0]];
        const v1825 = stdlib.eq(v1824, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v1825, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:13:function exp)'],
          msg: 'No sale announced',
          who: 'Deployer'
          });
        const v1827 = [v1819, v1820, v1821];
        const v1828 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc9, v1827, ctc2), null);
        const v1829 = {
          None: 0,
          Some: 1
          }[v1828[0]];
        const v1830 = stdlib.eq(v1829, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v1830, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:238:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:13:function exp)'],
          msg: 'Not purchased',
          who: 'Deployer'
          });
        await stdlib.mapSet(map1, ctc9, v1827, ctc2, undefined /* Nothing */);
        const v1836 = true;
        await txn4.getOutput('A_deletePurchase', 'v1836', ctc6, v1836);
        const cv1616 = v1616;
        const cv1617 = v1793;
        
        v1616 = cv1616;
        v1617 = cv1617;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'A_deleteSale0_114': {
        const v2124 = v1792[1];
        undefined /* setApiDetails */;
        ;
        const v2176 = v2124[stdlib.checkedBigNumberify('./index.rsh:200:10:spread', stdlib.UInt_max, '0')];
        const v2177 = v2124[stdlib.checkedBigNumberify('./index.rsh:200:10:spread', stdlib.UInt_max, '1')];
        const v2178 = [v2176, v2177];
        const v2179 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v2178, ctc3), null);
        const v2180 = {
          None: 0,
          Some: 1
          }[v2179[0]];
        const v2181 = stdlib.eq(v2180, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2181, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:201:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:203:13:application call to [unknown function] (defined at: ./index.rsh:203:13:function exp)'],
          msg: 'No sale announced',
          who: 'Deployer'
          });
        switch (v2179[0]) {
          case 'None': {
            const v2187 = v2179[1];
            const v2188 = false;
            await txn4.getOutput('A_deleteSale', 'v2188', ctc6, v2188);
            const cv1616 = v1616;
            const cv1617 = v1793;
            
            v1616 = cv1616;
            v1617 = cv1617;
            
            txn3 = txn4;
            continue;
            break;
            }
          case 'Some': {
            const v2198 = v2179[1];
            const v2199 = v2198[stdlib.checkedBigNumberify('./index.rsh:210:21:array', stdlib.UInt_max, '0')];
            const v2200 = v2198[stdlib.checkedBigNumberify('./index.rsh:210:21:array', stdlib.UInt_max, '1')];
            const v2202 = await ctc.getContractAddress();
            const v2203 = [v2199, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2176];
            const v2207 = undefined /* Remote */;
            const v2208 = await txn4.getOutput('internal', 'v2207', ctc16, v2207);
            const v2210 = v2208[stdlib.checkedBigNumberify('./index.rsh:219:19:application', stdlib.UInt_max, '0')];
            const v2211 = v2208[stdlib.checkedBigNumberify('./index.rsh:219:19:application', stdlib.UInt_max, '1')];
            const v2216 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2210);
            stdlib.assert(v2216, {
              at: './index.rsh:219:19:application',
              fs: ['at ./index.rsh:203:13:application call to [unknown function] (defined at: ./index.rsh:203:13:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            const v2217 = stdlib.ge(v2211, v2200);
            stdlib.assert(v2217, {
              at: './index.rsh:216:22:application',
              fs: ['at ./index.rsh:203:13:application call to [unknown function] (defined at: ./index.rsh:203:13:function exp)'],
              msg: 'Tokens still held',
              who: 'Deployer'
              });
            const v2218 = [v2176, v2202];
            const v2219 = [v2199, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v2218];
            const v2223 = undefined /* Remote */;
            const v2224 = await txn4.getOutput('internal', 'v2223', ctc16, v2223);
            const v2226 = v2224[stdlib.checkedBigNumberify('./index.rsh:225:19:application', stdlib.UInt_max, '0')];
            const v2227 = v2224[stdlib.checkedBigNumberify('./index.rsh:225:19:application', stdlib.UInt_max, '1')];
            const v2232 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2226);
            stdlib.assert(v2232, {
              at: './index.rsh:225:19:application',
              fs: ['at ./index.rsh:203:13:application call to [unknown function] (defined at: ./index.rsh:203:13:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            const v2233 = stdlib.ge(v2227, v2200);
            stdlib.assert(v2233, {
              at: './index.rsh:222:22:application',
              fs: ['at ./index.rsh:203:13:application call to [unknown function] (defined at: ./index.rsh:203:13:function exp)'],
              msg: 'Tokens still allowed',
              who: 'Deployer'
              });
            await stdlib.mapSet(map0, ctc10, v2178, ctc3, undefined /* Nothing */);
            const v2235 = true;
            await txn4.getOutput('A_deleteSale', 'v2235', ctc6, v2235);
            const cv1616 = v1616;
            const cv1617 = v1793;
            
            v1616 = cv1616;
            v1617 = cv1617;
            
            txn3 = txn4;
            continue;
            break;
            }
          }
        break;
        }
      case 'C_close0_114': {
        const v2453 = v1792[1];
        undefined /* setApiDetails */;
        ;
        const v2580 = undefined /* Remote */;
        const v2581 = await txn4.getOutput('internal', 'v2580', ctc7, v2580);
        const v2583 = v2581[stdlib.checkedBigNumberify('./index.rsh:254:26:application', stdlib.UInt_max, '0')];
        const v2584 = v2581[stdlib.checkedBigNumberify('./index.rsh:254:26:application', stdlib.UInt_max, '1')];
        const v2589 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2583);
        stdlib.assert(v2589, {
          at: './index.rsh:254:26:application',
          fs: ['at ./index.rsh:252:13:application call to [unknown function] (defined at: ./index.rsh:252:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v2584, {
          at: './index.rsh:253:18:application',
          fs: ['at ./index.rsh:252:13:application call to [unknown function] (defined at: ./index.rsh:252:13:function exp)'],
          msg: 'Child app rejected close',
          who: 'Deployer'
          });
        const v2590 = true;
        await txn4.getOutput('C_close', 'v2590', ctc6, v2590);
        const v2597 = v1616.manager;
        const v2598 = v1616.token;
        const v2599 = {
          closed: true,
          manager: v2597,
          token: v2598
          };
        const cv1616 = v2599;
        const cv1617 = v1793;
        
        v1616 = cv1616;
        v1617 = cv1617;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'C_grant0_114': {
        const v2782 = v1792[1];
        undefined /* setApiDetails */;
        ;
        const v2932 = v2782[stdlib.checkedBigNumberify('./index.rsh:262:10:spread', stdlib.UInt_max, '0')];
        const v2933 = v1616.manager;
        const v2934 = stdlib.addressEq(v1791, v2933);
        stdlib.assert(v2934, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:263:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:265:13:application call to [unknown function] (defined at: ./index.rsh:265:13:function exp)'],
          msg: 'Only constructor can grant',
          who: 'Deployer'
          });
        const v2941 = [v1600, v1596, v2932];
        const v2942 = undefined /* Remote */;
        const v2943 = await txn4.getOutput('internal', 'v2942', ctc7, v2942);
        const v2945 = v2943[stdlib.checkedBigNumberify('./index.rsh:267:26:application', stdlib.UInt_max, '0')];
        const v2946 = v2943[stdlib.checkedBigNumberify('./index.rsh:267:26:application', stdlib.UInt_max, '1')];
        const v2951 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2945);
        stdlib.assert(v2951, {
          at: './index.rsh:267:26:application',
          fs: ['at ./index.rsh:265:13:application call to [unknown function] (defined at: ./index.rsh:265:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v2946, {
          at: './index.rsh:266:18:application',
          fs: ['at ./index.rsh:265:13:application call to [unknown function] (defined at: ./index.rsh:265:13:function exp)'],
          msg: 'Child app rejected grant',
          who: 'Deployer'
          });
        const v2952 = true;
        await txn4.getOutput('C_grant', 'v2952', ctc6, v2952);
        const v2959 = v1616.closed;
        const v2961 = v1616.token;
        const v2962 = {
          closed: v2959,
          manager: v2932,
          token: v2961
          };
        const cv1616 = v2962;
        const cv1617 = v1793;
        
        v1616 = cv1616;
        v1617 = cv1617;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U1_announce0_114': {
        const v3111 = v1792[1];
        undefined /* setApiDetails */;
        ;
        const v3295 = v3111[stdlib.checkedBigNumberify('./index.rsh:118:10:spread', stdlib.UInt_max, '0')];
        const v3296 = v3111[stdlib.checkedBigNumberify('./index.rsh:118:10:spread', stdlib.UInt_max, '1')];
        const v3297 = v3111[stdlib.checkedBigNumberify('./index.rsh:118:10:spread', stdlib.UInt_max, '2')];
        const v3298 = v3111[stdlib.checkedBigNumberify('./index.rsh:118:10:spread', stdlib.UInt_max, '3')];
        const v3299 = [v1791, v3295];
        const v3300 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v3299, ctc3), null);
        const v3301 = {
          None: 0,
          Some: 1
          }[v3300[0]];
        const v3302 = stdlib.eq(v3301, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3302, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
          msg: 'already announced',
          who: 'Deployer'
          });
        const v3304 = stdlib.gt(v3297, stdlib.checkedBigNumberify('./index.rsh:120:19:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v3304, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:120:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
          msg: 'Must sell at least one token',
          who: 'Deployer'
          });
        const v3306 = stdlib.gt(v3298, stdlib.checkedBigNumberify('./index.rsh:121:19:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v3306, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:121:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
          msg: 'Price must be positive',
          who: 'Deployer'
          });
        const v3312 = await ctc.getContractAddress();
        const v3313 = [v1791, v3312];
        const v3314 = [v3296, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v3313];
        const v3319 = undefined /* Remote */;
        const v3320 = await txn4.getOutput('internal', 'v3319', ctc16, v3319);
        const v3322 = v3320[stdlib.checkedBigNumberify('./index.rsh:131:15:application', stdlib.UInt_max, '0')];
        const v3323 = v3320[stdlib.checkedBigNumberify('./index.rsh:131:15:application', stdlib.UInt_max, '1')];
        const v3328 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3322);
        stdlib.assert(v3328, {
          at: './index.rsh:131:15:application',
          fs: ['at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v3329 = stdlib.ge(v3323, v3297);
        stdlib.assert(v3329, {
          at: './index.rsh:128:18:application',
          fs: ['at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
          msg: 'Not enough allowance',
          who: 'Deployer'
          });
        const v3330 = [v3296, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1791];
        const v3334 = undefined /* Remote */;
        const v3335 = await txn4.getOutput('internal', 'v3334', ctc16, v3334);
        const v3337 = v3335[stdlib.checkedBigNumberify('./index.rsh:136:13:application', stdlib.UInt_max, '0')];
        const v3338 = v3335[stdlib.checkedBigNumberify('./index.rsh:136:13:application', stdlib.UInt_max, '1')];
        const v3343 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3337);
        stdlib.assert(v3343, {
          at: './index.rsh:136:13:application',
          fs: ['at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v3344 = stdlib.ge(v3338, v3297);
        stdlib.assert(v3344, {
          at: './index.rsh:134:18:application',
          fs: ['at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
          msg: 'Not enough tokens',
          who: 'Deployer'
          });
        const v3346 = [v3296, v3297, v3298];
        await stdlib.mapSet(map0, ctc10, v3299, ctc3, v3346);
        const v3347 = true;
        await txn4.getOutput('U1_announce', 'v3347', ctc6, v3347);
        const cv1616 = v1616;
        const cv1617 = v1793;
        
        v1616 = cv1616;
        v1617 = cv1617;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U2_buy0_114': {
        const v3440 = v1792[1];
        undefined /* setApiDetails */;
        const v3450 = v3440[stdlib.checkedBigNumberify('./index.rsh:144:10:spread', stdlib.UInt_max, '0')];
        const v3451 = v3440[stdlib.checkedBigNumberify('./index.rsh:144:10:spread', stdlib.UInt_max, '1')];
        const v3452 = v3440[stdlib.checkedBigNumberify('./index.rsh:144:10:spread', stdlib.UInt_max, '2')];
        const v3453 = [v3450, v3451];
        const v3454 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v3453, ctc3), null);
        const v3455 = {
          None: 0,
          Some: 1
          }[v3454[0]];
        const v3456 = stdlib.eq(v3455, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3456, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:145:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:144:52:application call to [unknown function] (defined at: ./index.rsh:144:52:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:144:52:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
          msg: 'No sale announced',
          who: 'Deployer'
          });
        const v3458 = stdlib.eq(v3452, stdlib.checkedBigNumberify('./index.rsh:146:20:decimal', stdlib.UInt_max, '0'));
        const v3459 = v3458 ? false : true;
        stdlib.assert(v3459, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:146:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:144:52:application call to [unknown function] (defined at: ./index.rsh:144:52:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:144:52:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
          msg: 'Must pay something',
          who: 'Deployer'
          });
        ;
        switch (v3454[0]) {
          case 'None': {
            const v3704 = v3454[1];
            ;
            const v3709 = stdlib.checkedBigNumberify('./index.rsh:164:17:decimal', stdlib.UInt_max, '0');
            await txn4.getOutput('U2_buy', 'v3709', ctc2, v3709);
            const cv1616 = v1616;
            const cv1617 = v1793;
            
            v1616 = cv1616;
            v1617 = cv1617;
            
            txn3 = txn4;
            continue;
            break;
            }
          case 'Some': {
            const v3720 = v3454[1];
            const v3721 = v3720[stdlib.checkedBigNumberify('./index.rsh:167:21:array', stdlib.UInt_max, '0')];
            const v3722 = v3720[stdlib.checkedBigNumberify('./index.rsh:167:21:array', stdlib.UInt_max, '1')];
            const v3723 = v3720[stdlib.checkedBigNumberify('./index.rsh:167:21:array', stdlib.UInt_max, '2')];
            const v3724 = await ctc.getContractAddress();
            const v3725 = stdlib.safeDiv(v3452, v3723);
            const v3726 = stdlib.safeMul(v3725, v3723);
            const v3727 = stdlib.safeSub(v3452, v3726);
            const v3728 = stdlib.safeMul(v3722, v3725);
            const v3729 = [v3450, v3451, v1791];
            const v3731 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc9, v3729, ctc2), null);
            const v3732 = stdlib.fromSome(v3731, stdlib.checkedBigNumberify('./index.rsh:180:70:decimal', stdlib.UInt_max, '0'));
            const v3733 = stdlib.safeAdd(v3732, v3728);
            await stdlib.mapSet(map1, ctc9, v3729, ctc2, v3733);
            const v3734 = [v3721, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3450];
            const v3735 = [v3721, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1791];
            const v3736 = [v3450, v3724];
            const v3737 = [v3721, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v3736];
            const v3741 = undefined /* Remote */;
            const v3742 = await txn4.getOutput('internal', 'v3741', ctc7, v3741);
            const v3744 = v3742[stdlib.checkedBigNumberify('./index.rsh:189:19:application', stdlib.UInt_max, '0')];
            const v3745 = v3742[stdlib.checkedBigNumberify('./index.rsh:189:19:application', stdlib.UInt_max, '1')];
            const v3750 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3744);
            stdlib.assert(v3750, {
              at: './index.rsh:189:19:application',
              fs: ['at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:13:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            stdlib.assert(v3745, {
              at: './index.rsh:182:22:application',
              fs: ['at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:13:function exp)'],
              msg: 'Transfer failed',
              who: 'Deployer'
              });
            ;
            ;
            await txn4.getOutput('U2_buy', 'v3728', ctc2, v3728);
            const cv1616 = v1616;
            const cv1617 = v1793;
            
            v1616 = cv1616;
            v1617 = cv1617;
            
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
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc2, ctc2]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    closed: ctc9,
    manager: ctc6,
    token: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc6, ctc1, ctc2, ctc2]);
  const ctc12 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc13 = stdlib.T_Tuple([ctc6, ctc6, ctc6]);
  const ctc14 = stdlib.T_Tuple([ctc6]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6, ctc2]);
  const ctc16 = stdlib.T_Data({
    A_deletePurchase0_114: ctc13,
    A_deleteSale0_114: ctc12,
    C_close0_114: ctc7,
    C_grant0_114: ctc14,
    U1_announce0_114: ctc11,
    U2_buy0_114: ctc15
    });
  const ctc17 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc2, ctc12]);
  const ctc19 = stdlib.T_Tuple([ctc1, ctc2, ctc6]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v1594, v1595, v1596, v1600, v1603, v1604, v1616] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc1, ctc1, ctc1, ctc7, ctc8, ctc10]);
  const v1639 = ctc.selfAddress();
  const v1641 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:118:56:application call to [unknown function] (defined at: ./index.rsh:118:56:function exp)', 'at ./index.rsh:107:29:application call to "runU1_announce0_114" (defined at: ./index.rsh:118:10:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
    msg: 'in',
    who: 'U1_announce'
    });
  const v1642 = v1641[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1644 = v1641[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v1645 = v1641[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '3')];
  const v1650 = [v1639, v1642];
  const v1651 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc12, v1650, ctc3), null);
  const v1652 = {
    None: 0,
    Some: 1
    }[v1651[0]];
  const v1653 = stdlib.eq(v1652, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v1653, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:118:56:application call to [unknown function] (defined at: ./index.rsh:118:56:function exp)', 'at ./index.rsh:107:29:application call to "runU1_announce0_114" (defined at: ./index.rsh:118:10:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
    msg: 'already announced',
    who: 'U1_announce'
    });
  const v1655 = stdlib.gt(v1644, stdlib.checkedBigNumberify('./index.rsh:120:19:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1655, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:120:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:118:56:application call to [unknown function] (defined at: ./index.rsh:118:56:function exp)', 'at ./index.rsh:107:29:application call to "runU1_announce0_114" (defined at: ./index.rsh:118:10:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
    msg: 'Must sell at least one token',
    who: 'U1_announce'
    });
  const v1657 = stdlib.gt(v1645, stdlib.checkedBigNumberify('./index.rsh:121:19:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1657, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:121:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:118:56:application call to [unknown function] (defined at: ./index.rsh:118:56:function exp)', 'at ./index.rsh:107:29:application call to "runU1_announce0_114" (defined at: ./index.rsh:118:10:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
    msg: 'Price must be positive',
    who: 'U1_announce'
    });
  const v1670 = ['U1_announce0_114', v1641];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1594, v1595, v1596, v1600, v1603, v1604, v1616, v1670],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:118:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1792], secs: v1794, time: v1793, didSend: v1102, from: v1791 } = txn1;
      
      switch (v1792[0]) {
        case 'A_deletePurchase0_114': {
          const v1795 = v1792[1];
          
          break;
          }
        case 'A_deleteSale0_114': {
          const v2124 = v1792[1];
          
          break;
          }
        case 'C_close0_114': {
          const v2453 = v1792[1];
          
          break;
          }
        case 'C_grant0_114': {
          const v2782 = v1792[1];
          
          break;
          }
        case 'U1_announce0_114': {
          const v3111 = v1792[1];
          sim_r.txns.push({
            kind: 'api',
            who: "U1_announce"
            });
          ;
          const v3295 = v3111[stdlib.checkedBigNumberify('./index.rsh:118:10:spread', stdlib.UInt_max, '0')];
          const v3296 = v3111[stdlib.checkedBigNumberify('./index.rsh:118:10:spread', stdlib.UInt_max, '1')];
          const v3297 = v3111[stdlib.checkedBigNumberify('./index.rsh:118:10:spread', stdlib.UInt_max, '2')];
          const v3298 = v3111[stdlib.checkedBigNumberify('./index.rsh:118:10:spread', stdlib.UInt_max, '3')];
          const v3299 = [v1791, v3295];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc12, v3299, ctc3), null);
          const v3312 = await ctc.getContractAddress();
          const v3313 = [v1791, v3312];
          const v3314 = [v3296, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v3313];
          const v3319 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v3296,
              remote: ({
                accs: [v1791, v3312],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:131:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc18, v3314]],
                fees: stdlib.checkedBigNumberify('./index.rsh:129:34:application', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:131:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc2.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v3319', ctc17, v3319);
          const v3330 = [v3296, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1791];
          const v3334 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v3296,
              remote: ({
                accs: [v1791],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:136:13:application', stdlib.UInt_max, '0'),
                boxes: [[ctc19, v3330]],
                fees: stdlib.checkedBigNumberify('./index.rsh:134:40:application', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:136:13:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc2.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v3334', ctc17, v3334);
          const v3346 = [v3296, v3297, v3298];
          await stdlib.simMapSet(sim_r, 0, ctc12, v3299, ctc3, v3346);
          const v3347 = true;
          const v3348 = await txn1.getOutput('U1_announce', 'v3347', ctc9, v3347);
          
          const v5251 = v1616;
          const v5253 = v1616.closed;
          if (v5253) {
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
        case 'U2_buy0_114': {
          const v3440 = v1792[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc1, ctc1, ctc1, ctc7, ctc8, ctc10, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v1792], secs: v1794, time: v1793, didSend: v1102, from: v1791 } = txn1;
  switch (v1792[0]) {
    case 'A_deletePurchase0_114': {
      const v1795 = v1792[1];
      return;
      break;
      }
    case 'A_deleteSale0_114': {
      const v2124 = v1792[1];
      return;
      break;
      }
    case 'C_close0_114': {
      const v2453 = v1792[1];
      return;
      break;
      }
    case 'C_grant0_114': {
      const v2782 = v1792[1];
      return;
      break;
      }
    case 'U1_announce0_114': {
      const v3111 = v1792[1];
      undefined /* setApiDetails */;
      ;
      const v3295 = v3111[stdlib.checkedBigNumberify('./index.rsh:118:10:spread', stdlib.UInt_max, '0')];
      const v3296 = v3111[stdlib.checkedBigNumberify('./index.rsh:118:10:spread', stdlib.UInt_max, '1')];
      const v3297 = v3111[stdlib.checkedBigNumberify('./index.rsh:118:10:spread', stdlib.UInt_max, '2')];
      const v3298 = v3111[stdlib.checkedBigNumberify('./index.rsh:118:10:spread', stdlib.UInt_max, '3')];
      const v3299 = [v1791, v3295];
      const v3300 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc12, v3299, ctc3), null);
      const v3301 = {
        None: 0,
        Some: 1
        }[v3300[0]];
      const v3302 = stdlib.eq(v3301, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v3302, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
        msg: 'already announced',
        who: 'U1_announce'
        });
      const v3304 = stdlib.gt(v3297, stdlib.checkedBigNumberify('./index.rsh:120:19:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v3304, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:120:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
        msg: 'Must sell at least one token',
        who: 'U1_announce'
        });
      const v3306 = stdlib.gt(v3298, stdlib.checkedBigNumberify('./index.rsh:121:19:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v3306, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:121:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
        msg: 'Price must be positive',
        who: 'U1_announce'
        });
      const v3312 = await ctc.getContractAddress();
      const v3313 = [v1791, v3312];
      const v3314 = [v3296, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v3313];
      const v3319 = undefined /* Remote */;
      const v3320 = await txn1.getOutput('internal', 'v3319', ctc17, v3319);
      const v3322 = v3320[stdlib.checkedBigNumberify('./index.rsh:131:15:application', stdlib.UInt_max, '0')];
      const v3323 = v3320[stdlib.checkedBigNumberify('./index.rsh:131:15:application', stdlib.UInt_max, '1')];
      const v3328 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3322);
      stdlib.assert(v3328, {
        at: './index.rsh:131:15:application',
        fs: ['at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
        msg: 'remote bill check',
        who: 'U1_announce'
        });
      const v3329 = stdlib.ge(v3323, v3297);
      stdlib.assert(v3329, {
        at: './index.rsh:128:18:application',
        fs: ['at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
        msg: 'Not enough allowance',
        who: 'U1_announce'
        });
      const v3330 = [v3296, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1791];
      const v3334 = undefined /* Remote */;
      const v3335 = await txn1.getOutput('internal', 'v3334', ctc17, v3334);
      const v3337 = v3335[stdlib.checkedBigNumberify('./index.rsh:136:13:application', stdlib.UInt_max, '0')];
      const v3338 = v3335[stdlib.checkedBigNumberify('./index.rsh:136:13:application', stdlib.UInt_max, '1')];
      const v3343 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3337);
      stdlib.assert(v3343, {
        at: './index.rsh:136:13:application',
        fs: ['at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
        msg: 'remote bill check',
        who: 'U1_announce'
        });
      const v3344 = stdlib.ge(v3338, v3297);
      stdlib.assert(v3344, {
        at: './index.rsh:134:18:application',
        fs: ['at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
        msg: 'Not enough tokens',
        who: 'U1_announce'
        });
      const v3346 = [v3296, v3297, v3298];
      await stdlib.mapSet(map0, ctc12, v3299, ctc3, v3346);
      const v3347 = true;
      const v3348 = await txn1.getOutput('U1_announce', 'v3347', ctc9, v3347);
      if (v1102) {
        stdlib.protect(ctc0, await interact.out(v3111, v3348), {
          at: './index.rsh:118:11:application',
          fs: ['at ./index.rsh:118:11:application call to [unknown function] (defined at: ./index.rsh:118:11:function exp)', 'at ./index.rsh:138:12:application call to "k" (defined at: ./index.rsh:123:13:function exp)', 'at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:13:function exp)'],
          msg: 'out',
          who: 'U1_announce'
          });
        }
      else {
        }
      
      const v5251 = v1616;
      const v5253 = v1616.closed;
      if (v5253) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'U2_buy0_114': {
      const v3440 = v1792[1];
      return;
      break;
      }
    }
  
  
  };
export async function _U2_buy4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _U2_buy4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _U2_buy4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc2, ctc2]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    closed: ctc9,
    manager: ctc6,
    token: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc6, ctc6, ctc2]);
  const ctc12 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc13 = stdlib.T_Tuple([ctc6, ctc6, ctc6]);
  const ctc14 = stdlib.T_Tuple([ctc6]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc1, ctc2, ctc2]);
  const ctc16 = stdlib.T_Data({
    A_deletePurchase0_114: ctc13,
    A_deleteSale0_114: ctc12,
    C_close0_114: ctc7,
    C_grant0_114: ctc14,
    U1_announce0_114: ctc15,
    U2_buy0_114: ctc11
    });
  const ctc17 = stdlib.T_Tuple([ctc2, ctc9]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc2, ctc6]);
  const ctc19 = stdlib.T_Tuple([ctc1, ctc2, ctc12]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v1594, v1595, v1596, v1600, v1603, v1604, v1616] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc1, ctc1, ctc1, ctc7, ctc8, ctc10]);
  const v1674 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:144:52:application call to [unknown function] (defined at: ./index.rsh:144:52:function exp)', 'at ./index.rsh:107:29:application call to "runU2_buy0_114" (defined at: ./index.rsh:144:10:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
    msg: 'in',
    who: 'U2_buy'
    });
  const v1675 = v1674[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1676 = v1674[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1677 = v1674[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v1681 = [v1675, v1676];
  const v1682 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc12, v1681, ctc3), null);
  const v1683 = {
    None: 0,
    Some: 1
    }[v1682[0]];
  const v1684 = stdlib.eq(v1683, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1684, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:145:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:144:52:application call to [unknown function] (defined at: ./index.rsh:144:52:function exp)', 'at ./index.rsh:107:29:application call to "runU2_buy0_114" (defined at: ./index.rsh:144:10:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
    msg: 'No sale announced',
    who: 'U2_buy'
    });
  const v1686 = stdlib.eq(v1677, stdlib.checkedBigNumberify('./index.rsh:146:20:decimal', stdlib.UInt_max, '0'));
  const v1687 = v1686 ? false : true;
  stdlib.assert(v1687, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:146:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:144:52:application call to [unknown function] (defined at: ./index.rsh:144:52:function exp)', 'at ./index.rsh:107:29:application call to "runU2_buy0_114" (defined at: ./index.rsh:144:10:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
    msg: 'Must pay something',
    who: 'U2_buy'
    });
  const v1698 = ['U2_buy0_114', v1674];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1594, v1595, v1596, v1600, v1603, v1604, v1616, v1698],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [v1677, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1792], secs: v1794, time: v1793, didSend: v1102, from: v1791 } = txn1;
      
      switch (v1792[0]) {
        case 'A_deletePurchase0_114': {
          const v1795 = v1792[1];
          
          break;
          }
        case 'A_deleteSale0_114': {
          const v2124 = v1792[1];
          
          break;
          }
        case 'C_close0_114': {
          const v2453 = v1792[1];
          
          break;
          }
        case 'C_grant0_114': {
          const v2782 = v1792[1];
          
          break;
          }
        case 'U1_announce0_114': {
          const v3111 = v1792[1];
          
          break;
          }
        case 'U2_buy0_114': {
          const v3440 = v1792[1];
          sim_r.txns.push({
            kind: 'api',
            who: "U2_buy"
            });
          const v3450 = v3440[stdlib.checkedBigNumberify('./index.rsh:144:10:spread', stdlib.UInt_max, '0')];
          const v3451 = v3440[stdlib.checkedBigNumberify('./index.rsh:144:10:spread', stdlib.UInt_max, '1')];
          const v3452 = v3440[stdlib.checkedBigNumberify('./index.rsh:144:10:spread', stdlib.UInt_max, '2')];
          const v3453 = [v3450, v3451];
          const v3454 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc12, v3453, ctc3), null);
          sim_r.txns.push({
            amt: v3452,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          switch (v3454[0]) {
            case 'None': {
              const v3704 = v3454[1];
              sim_r.txns.push({
                kind: 'from',
                to: v1791,
                tok: undefined /* Nothing */
                });
              const v3709 = stdlib.checkedBigNumberify('./index.rsh:164:17:decimal', stdlib.UInt_max, '0');
              const v3710 = await txn1.getOutput('U2_buy', 'v3709', ctc2, v3709);
              
              const v5287 = v1616;
              const v5289 = v1616.closed;
              if (v5289) {
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
              const v3720 = v3454[1];
              const v3721 = v3720[stdlib.checkedBigNumberify('./index.rsh:167:21:array', stdlib.UInt_max, '0')];
              const v3722 = v3720[stdlib.checkedBigNumberify('./index.rsh:167:21:array', stdlib.UInt_max, '1')];
              const v3723 = v3720[stdlib.checkedBigNumberify('./index.rsh:167:21:array', stdlib.UInt_max, '2')];
              const v3724 = await ctc.getContractAddress();
              const v3725 = stdlib.safeDiv(v3452, v3723);
              const v3726 = stdlib.safeMul(v3725, v3723);
              const v3727 = stdlib.safeSub(v3452, v3726);
              const v3728 = stdlib.safeMul(v3722, v3725);
              const v3729 = [v3450, v3451, v1791];
              const v3731 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc13, v3729, ctc2), null);
              const v3732 = stdlib.fromSome(v3731, stdlib.checkedBigNumberify('./index.rsh:180:70:decimal', stdlib.UInt_max, '0'));
              const v3733 = stdlib.safeAdd(v3732, v3728);
              await stdlib.simMapSet(sim_r, 1, ctc13, v3729, ctc2, v3733);
              const v3734 = [v3721, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3450];
              const v3735 = [v3721, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1791];
              const v3736 = [v3450, v3724];
              const v3737 = [v3721, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v3736];
              const v3741 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v3721,
                  remote: ({
                    accs: [v3450, v1791],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:189:19:application', stdlib.UInt_max, '0'),
                    boxes: [[ctc18, v3734], [ctc18, v3735], [ctc19, v3737]],
                    fees: stdlib.checkedBigNumberify('./index.rsh:183:44:application', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:189:19:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc9.defaultValue /* simReturnVal */];})();
              await txn1.getOutput('internal', 'v3741', ctc17, v3741);
              sim_r.txns.push({
                kind: 'from',
                to: v3450,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v1791,
                tok: undefined /* Nothing */
                });
              const v3759 = await txn1.getOutput('U2_buy', 'v3728', ctc2, v3728);
              
              const v5291 = v1616;
              const v5293 = v1616.closed;
              if (v5293) {
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
    tys: [ctc6, ctc1, ctc1, ctc1, ctc7, ctc8, ctc10, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v1792], secs: v1794, time: v1793, didSend: v1102, from: v1791 } = txn1;
  switch (v1792[0]) {
    case 'A_deletePurchase0_114': {
      const v1795 = v1792[1];
      return;
      break;
      }
    case 'A_deleteSale0_114': {
      const v2124 = v1792[1];
      return;
      break;
      }
    case 'C_close0_114': {
      const v2453 = v1792[1];
      return;
      break;
      }
    case 'C_grant0_114': {
      const v2782 = v1792[1];
      return;
      break;
      }
    case 'U1_announce0_114': {
      const v3111 = v1792[1];
      return;
      break;
      }
    case 'U2_buy0_114': {
      const v3440 = v1792[1];
      undefined /* setApiDetails */;
      const v3450 = v3440[stdlib.checkedBigNumberify('./index.rsh:144:10:spread', stdlib.UInt_max, '0')];
      const v3451 = v3440[stdlib.checkedBigNumberify('./index.rsh:144:10:spread', stdlib.UInt_max, '1')];
      const v3452 = v3440[stdlib.checkedBigNumberify('./index.rsh:144:10:spread', stdlib.UInt_max, '2')];
      const v3453 = [v3450, v3451];
      const v3454 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc12, v3453, ctc3), null);
      const v3455 = {
        None: 0,
        Some: 1
        }[v3454[0]];
      const v3456 = stdlib.eq(v3455, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3456, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:145:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:144:52:application call to [unknown function] (defined at: ./index.rsh:144:52:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:144:52:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
        msg: 'No sale announced',
        who: 'U2_buy'
        });
      const v3458 = stdlib.eq(v3452, stdlib.checkedBigNumberify('./index.rsh:146:20:decimal', stdlib.UInt_max, '0'));
      const v3459 = v3458 ? false : true;
      stdlib.assert(v3459, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:146:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:144:52:application call to [unknown function] (defined at: ./index.rsh:144:52:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:144:52:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
        msg: 'Must pay something',
        who: 'U2_buy'
        });
      ;
      switch (v3454[0]) {
        case 'None': {
          const v3704 = v3454[1];
          ;
          const v3709 = stdlib.checkedBigNumberify('./index.rsh:164:17:decimal', stdlib.UInt_max, '0');
          const v3710 = await txn1.getOutput('U2_buy', 'v3709', ctc2, v3709);
          if (v1102) {
            stdlib.protect(ctc0, await interact.out(v3440, v3710), {
              at: './index.rsh:144:11:application',
              fs: ['at ./index.rsh:144:11:application call to [unknown function] (defined at: ./index.rsh:144:11:function exp)', 'at ./index.rsh:164:16:application call to "k" (defined at: ./index.rsh:159:13:function exp)', 'at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:13:function exp)'],
              msg: 'out',
              who: 'U2_buy'
              });
            }
          else {
            }
          
          const v5287 = v1616;
          const v5289 = v1616.closed;
          if (v5289) {
            return;
            }
          else {
            return;
            }
          break;
          }
        case 'Some': {
          const v3720 = v3454[1];
          const v3721 = v3720[stdlib.checkedBigNumberify('./index.rsh:167:21:array', stdlib.UInt_max, '0')];
          const v3722 = v3720[stdlib.checkedBigNumberify('./index.rsh:167:21:array', stdlib.UInt_max, '1')];
          const v3723 = v3720[stdlib.checkedBigNumberify('./index.rsh:167:21:array', stdlib.UInt_max, '2')];
          const v3724 = await ctc.getContractAddress();
          const v3725 = stdlib.safeDiv(v3452, v3723);
          const v3726 = stdlib.safeMul(v3725, v3723);
          const v3727 = stdlib.safeSub(v3452, v3726);
          const v3728 = stdlib.safeMul(v3722, v3725);
          const v3729 = [v3450, v3451, v1791];
          const v3731 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc13, v3729, ctc2), null);
          const v3732 = stdlib.fromSome(v3731, stdlib.checkedBigNumberify('./index.rsh:180:70:decimal', stdlib.UInt_max, '0'));
          const v3733 = stdlib.safeAdd(v3732, v3728);
          await stdlib.mapSet(map1, ctc13, v3729, ctc2, v3733);
          const v3734 = [v3721, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3450];
          const v3735 = [v3721, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1791];
          const v3736 = [v3450, v3724];
          const v3737 = [v3721, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v3736];
          const v3741 = undefined /* Remote */;
          const v3742 = await txn1.getOutput('internal', 'v3741', ctc17, v3741);
          const v3744 = v3742[stdlib.checkedBigNumberify('./index.rsh:189:19:application', stdlib.UInt_max, '0')];
          const v3745 = v3742[stdlib.checkedBigNumberify('./index.rsh:189:19:application', stdlib.UInt_max, '1')];
          const v3750 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3744);
          stdlib.assert(v3750, {
            at: './index.rsh:189:19:application',
            fs: ['at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:13:function exp)'],
            msg: 'remote bill check',
            who: 'U2_buy'
            });
          stdlib.assert(v3745, {
            at: './index.rsh:182:22:application',
            fs: ['at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:13:function exp)'],
            msg: 'Transfer failed',
            who: 'U2_buy'
            });
          ;
          ;
          const v3759 = await txn1.getOutput('U2_buy', 'v3728', ctc2, v3728);
          if (v1102) {
            stdlib.protect(ctc0, await interact.out(v3440, v3759), {
              at: './index.rsh:144:11:application',
              fs: ['at ./index.rsh:144:11:application call to [unknown function] (defined at: ./index.rsh:144:11:function exp)', 'at ./index.rsh:194:16:application call to "k" (defined at: ./index.rsh:159:13:function exp)', 'at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:13:function exp)'],
              msg: 'out',
              who: 'U2_buy'
              });
            }
          else {
            }
          
          const v5291 = v1616;
          const v5293 = v1616.closed;
          if (v5293) {
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
export async function A_deletePurchase(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for A_deletePurchase expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for A_deletePurchase expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _A_deletePurchase4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function A_deleteSale(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for A_deleteSale expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for A_deleteSale expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _A_deleteSale4(ctcTop, interact);}
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
export async function U2_buy(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for U2_buy expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for U2_buy expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _U2_buy4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`A_deletePurchase(address,address,address)byte`, `A_deleteSale(address,address)byte`, `C_close()byte`, `C_grant(address)byte`, `U1_announce(address,uint64,uint64,uint64)byte`, `U2_buy(address,address,uint64)uint64`, `_reachp_0((uint64))void`, `_reachp_1((uint64,uint64,uint64))void`, `_reachp_3((uint64,(byte,byte[96])))void`],
    pure: [`constructor()address`, `purchase(address,address,address)uint64`, `state()(address,uint64)`],
    sigs: [`A_deletePurchase(address,address,address)byte`, `A_deleteSale(address,address)byte`, `C_close()byte`, `C_grant(address)byte`, `U1_announce(address,uint64,uint64,uint64)byte`, `U2_buy(address,address,uint64)uint64`, `_reachp_0((uint64))void`, `_reachp_1((uint64,uint64,uint64))void`, `_reachp_3((uint64,(byte,byte[96])))void`, `constructor()address`, `purchase(address,address,address)uint64`, `state()(address,uint64)`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAOAAgBBgQYKEDEkAEgMMTCAXEQJgcABWFwcElECAAAAAAAAAABAQABAQRGe8ekBBcFCr0xGEEGyChkSSJbNQEjWzUCK2SCDAQKlMQ2BAxGj4AEIvrlTwREPaYQBHbW8zUEh/2DTASbpwsaBK6DF/kEwZStmQTCth2DBNhR3icE/RhxPDYaAI4MAQEGSgZVAF0Aegk9CSsAAQY4AOoGgAE2ADYaATYaAjYaAzULNQw1DSOvKzQNNAxQNAtQUFA1CyEENAESRIgJPDQLIls1DDQLVwhhNQ2ABNKKwis0DBZQNA1QsDQMiAlNNA0iVY0GCL0IxwYpBiwGLwY5Qv+jNhoBNhoCNQs1DCOvJwQ0DDQLUFAyA1BQNQtC/6WAaQAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv81NhoBNQsjr4ABAzQLUCEHr1BQNQtC/x42GgE2GgIXNhoDFzYaBBc1CzUMNQ01DiOvgAEENA40DRZQNAwWUDQLFlBQIQavUFA1C0L+6TYaATYaAjYaAxc1CzUMNQ0jr4ABBTQNNAxQNAsWUFAhBa9QUDULQv7ANAtXACA1FjQLVyAgNQ0oIQWvI680FjQNUFABiAfcIlUiEkQ0FjQNUDQLV0AgUDUMKCOvKjQMUAGIB78iVSQSRCEIKjQMUAGICDskNQuACAAAAAAAAAcsNAsWUQcIULA0CxZRBwg1BDIGNQ40D1cAARdBBxUxGYEFEkSIB8wiMgoyCYgICzQDQAAKgAQVH3x1NARQsCRDNAtXACBJNQ00C1cgIFA1DCghBa8jrzQMUAGIB0dJNRYiVSQSRDQWIlWNAgR5BJ1C/dkpNBQWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgElshA0FLIYgARlLTyrsho0ELIaszIKYDQJCTQKFwkWtwA+VwQAUDUMgAgAAAAAAAAKFDQMULA0DDULIjQLIlsSRDQLVwgBF0QkNQuACAAAAAAAAAoeNAsWUQcIULA0CxZRBwg1BCcENA9XASBQNA9XIQhQMgY1DjUPQv8MNA1XASA1CzEANA9XASASRCk0FBZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASWyEDQUshiABG9g56qyGjQSFjQTFlA0C1CyGrMyCmA0CQk0ChcJFrcAPlcEAFA1DYAIAAAAAAAAC340DVCwNA01DCI0DCJbEkQ0DFcIARdEJDUMgAgAAAAAAAALiDQMFlEHCFCwNAwWUQcINQQ0D1cAATQLUDQPVyEIUDIGNQ41D0L+XTQLIQlbNRc0CyEGWzUWNAshCls1DTEANAtXACBQNQwoIQWvI680DFABiAXAIlUiEkQ0FiINRDQNIg1EMgo1Cyk0FxZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASWyEDQXshgnBbIaMQBJshyyGjQLSbIcshqzMgpgNAkJNAoXCRa3AD5XBABQNRiACAAAAAAAAAz3NBhQsDQYNQsiNAsiWxJENAsjWzQWD0QpNBcWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgElshA0F7IYJwayGjEASbIcshqzMgpgNAkJNAoXCRa3AD5XBABQNRiACAAAAAAAAA0GNBhQsDQYNQsiNAsiWxJENAsjWzQWD0QhCyOvNAxQATQXFjQWFlA0DRZQiAVHJDULgAgAAAAAAAANEzQLFlEHCFCwNAsWUQcINQQyBjUOQv0XNAtXACA1FjQLVyAgNQ00CyEHWzUMKCEFryOvNBY0DVBQAYgEgUk1CyJVJBJENAxENAyIBNI0CyJVjQIC4QMGQvsLNAEhBBJEiARmNBU1BDEZIhJEQvzfNAEhBBJEiARRI68oI68qNA00DFA0C1BQAYgEM4gEdjUEQv/UNAEhBBJEiAQtNA9XASA0D1chCFA1BEL/uzQLFzUMgASCxGH+NAwWULA0DIgEOSEMryQyBjUCNQErTFcAcWcoNAEWNAIWUGcxGSISRIgEK0L8ZDEANRUkNAESRDQLIls1DDQLI1s1FDQLIQ1bNROABM35pJQ0DBZQNBQWUDQTFlCwNAyIA+ExGDUSKDURNBIWNBMWUDUQKTQUFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJbIQNBSyGIAE0fLh6LIaNBCyGrMyCmA0CQk0ChcJFrcAPlcEAFA1DIAIAAAAAAAABkU0DFCwNAw1CyI0CyJbEkQ0C1cIARdEKzQVUDQTFlAyBjUONQ9C+5KIA1aBoI0GiANyNhoBNQtC/v2IA0Q2GgE1C0L/K4gDOTYaATULQvm/IjE0EkSBAjE1EkQiMTYSRCIxNxJEiAMZIQyvIiJC/uJC/nJC+6FC/DU0DVcBODULQvzaNA1XAUg1C0L+FiI1C4AIAAAAAAAACIw0CxZRBwhQsDQLFlEHCDUEMgY1DkL7CTQWVwEYSTULIls1GDQLI1s1FzIKNRYpNBgWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgElshA0GLIYJwayGjQNSbIcshqzMgpgNAkJNAoXCRa3AD5XBABQNRmACAAAAAAAAAifNBlQsDQZNQsiNAsiWxJENAsjWzQXD0QpNBgWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgElshA0GLIYJwWyGjQNSbIcsho0FkmyHLIaszIKYDQJCTQKFwkWtwA+VwQAUDULgAgAAAAAAAAIrzQLULA0CzUNIjQNIlsSRDQNI1s0Fw9EIQsjrzQMUAGIAjUkNQuACAAAAAAAAAi7NAsWUQcIULA0CxZRBwg1BDIGNQ5C+fc0DDEAiAGzIjULgAgAAAAAAAAOfTQLFlCwNAsWNQQyBjUOQvnSNAtXARhJNRoiWzUZNBohDVs1FzQMNBcKSTULNBcLNRg0GiNbNAsLNRc0FjQNUDEAUDULIQgqNAtQASOvKCOvKjQLUAGIARqIAV0XNBcIFogBjCk0GRZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASWyEDQZshiABFg3n6GyGjQWSbIcshoxAEmyHLIaNBcWshqzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAAA6dNAtQsDQLNQ0iNA0iWxJENA1XCAEXRDQYNBaIAMo0DDQYCTEAiADAgAgAAAAAAAAOkDQXFlCwNBcWNQQyBjUOQvjiNBU0FBZQNBMWUDQSFlA0EVA0EFA0D1AhBDIGQvxcSEy/SIkisgEkshCyB7IIs4k0DVcBYDULQvg+NA1XAUA1C0L4yjYaATYaAjYaAzULNQw1DUL7zUL77kiJTAlJNQYyCYgAQYkJSUH/7kk1BogAYom+SRZRBwhFBE1QiUlXACA1FUkhCVs1FEkhBls1E0khCls1EklIKDURSVc4EDUQV0gpNQ+JsUL/eiQ1A4lJIhJMNAISEUSJSVcBAEwiVU2JNAY0B0oPQf+RQv+ZNAYINQaJMRY0ACQISTUACUcCOAcyChJEOBAkEkQ4CBJEiUxJvUD/KksDiP/TQv8ivCJOAk00Bwg1B4mxsglC/xY=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `18`,
    1000: `480`,
    1001: `480`,
    1002: `481`,
    1003: `482`,
    1004: `482`,
    1005: `482`,
    1006: `483`,
    1007: `484`,
    1008: `485`,
    1009: `485`,
    101: `18`,
    1010: `486`,
    1011: `487`,
    1012: `487`,
    1013: `487`,
    1014: `488`,
    1015: `488`,
    1016: `489`,
    1017: `489`,
    1018: `490`,
    1019: `490`,
    102: `18`,
    1020: `490`,
    1021: `491`,
    1022: `491`,
    1023: `492`,
    1024: `493`,
    1025: `493`,
    1026: `494`,
    1027: `494`,
    1028: `494`,
    1029: `495`,
    103: `18`,
    1030: `496`,
    1031: `496`,
    1032: `497`,
    1033: `497`,
    1034: `498`,
    1035: `498`,
    1036: `499`,
    1037: `499`,
    1038: `499`,
    1039: `501`,
    104: `18`,
    1040: `501`,
    1041: `502`,
    1042: `502`,
    1043: `503`,
    1044: `504`,
    1045: `504`,
    1046: `505`,
    1047: `505`,
    1048: `506`,
    1049: `506`,
    105: `18`,
    1050: `507`,
    1051: `508`,
    1052: `508`,
    1053: `509`,
    1054: `509`,
    1055: `510`,
    1056: `510`,
    1057: `511`,
    1058: `512`,
    1059: `512`,
    106: `18`,
    1060: `513`,
    1061: `513`,
    1062: `514`,
    1063: `514`,
    1064: `515`,
    1065: `515`,
    1066: `515`,
    1067: `516`,
    1068: `517`,
    1069: `517`,
    107: `18`,
    1070: `519`,
    1071: `520`,
    1072: `520`,
    1073: `521`,
    1074: `522`,
    1075: `523`,
    1076: `524`,
    1077: `524`,
    1078: `525`,
    1079: `526`,
    108: `18`,
    1080: `527`,
    1081: `527`,
    1082: `527`,
    1083: `528`,
    1084: `529`,
    1085: `530`,
    1086: `531`,
    1087: `532`,
    1088: `537`,
    1089: `537`,
    109: `18`,
    1090: `538`,
    1091: `539`,
    1092: `540`,
    1093: `545`,
    1094: `545`,
    1095: `546`,
    1096: `547`,
    1097: `548`,
    1098: `553`,
    1099: `553`,
    11: `2`,
    110: `18`,
    1100: `554`,
    1101: `554`,
    1102: `555`,
    1103: `556`,
    1104: `556`,
    1105: `557`,
    1106: `558`,
    1107: `559`,
    1108: `560`,
    1109: `560`,
    111: `18`,
    1110: `561`,
    1111: `561`,
    1112: `562`,
    1113: `563`,
    1114: `563`,
    1115: `564`,
    1116: `565`,
    1117: `565`,
    1118: `566`,
    1119: `567`,
    112: `18`,
    1120: `567`,
    1121: `568`,
    1122: `569`,
    1123: `570`,
    1124: `570`,
    1125: `571`,
    1126: `572`,
    1127: `573`,
    1128: `573`,
    1129: `574`,
    113: `18`,
    1130: `575`,
    1131: `575`,
    1132: `576`,
    1133: `576`,
    1134: `578`,
    1135: `578`,
    1136: `579`,
    1137: `579`,
    1138: `580`,
    1139: `580`,
    114: `18`,
    1140: `581`,
    1141: `581`,
    1142: `582`,
    1143: `583`,
    1144: `583`,
    1145: `584`,
    1146: `584`,
    1147: `585`,
    1148: `585`,
    1149: `587`,
    115: `18`,
    1150: `588`,
    1151: `588`,
    1152: `589`,
    1153: `589`,
    1154: `591`,
    1155: `595`,
    1156: `595`,
    1157: `596`,
    1158: `597`,
    1159: `597`,
    116: `18`,
    1160: `598`,
    1161: `599`,
    1162: `599`,
    1163: `600`,
    1164: `601`,
    1165: `602`,
    1166: `603`,
    1167: `603`,
    1168: `603`,
    1169: `604`,
    117: `18`,
    1170: `604`,
    1171: `604`,
    1172: `605`,
    1173: `606`,
    1174: `606`,
    1175: `607`,
    1176: `607`,
    1177: `607`,
    1178: `607`,
    1179: `607`,
    118: `18`,
    1180: `607`,
    1181: `607`,
    1182: `607`,
    1183: `607`,
    1184: `607`,
    1185: `608`,
    1186: `608`,
    1187: `609`,
    1188: `610`,
    1189: `611`,
    119: `18`,
    1190: `611`,
    1191: `612`,
    1192: `612`,
    1193: `613`,
    1194: `614`,
    1195: `614`,
    1196: `615`,
    1197: `616`,
    1198: `617`,
    1199: `618`,
    12: `2`,
    120: `18`,
    1200: `622`,
    1201: `622`,
    1202: `623`,
    1203: `624`,
    1204: `625`,
    1205: `625`,
    1206: `626`,
    1207: `627`,
    1208: `631`,
    1209: `632`,
    121: `18`,
    1210: `632`,
    1211: `633`,
    1212: `634`,
    1213: `635`,
    1214: `636`,
    1215: `636`,
    1216: `637`,
    1217: `637`,
    1218: `638`,
    1219: `639`,
    122: `18`,
    1220: `639`,
    1221: `640`,
    1222: `641`,
    1223: `641`,
    1224: `642`,
    1225: `643`,
    1226: `643`,
    1227: `644`,
    1228: `645`,
    1229: `646`,
    123: `18`,
    1230: `646`,
    1231: `647`,
    1232: `648`,
    1233: `649`,
    1234: `649`,
    1235: `650`,
    1236: `651`,
    1237: `651`,
    1238: `652`,
    1239: `652`,
    124: `18`,
    1240: `653`,
    1241: `653`,
    1242: `654`,
    1243: `654`,
    1244: `655`,
    1245: `655`,
    1246: `656`,
    1247: `656`,
    1248: `657`,
    1249: `658`,
    125: `18`,
    1250: `658`,
    1251: `659`,
    1252: `659`,
    1253: `661`,
    1254: `665`,
    1255: `665`,
    1256: `666`,
    1257: `667`,
    1258: `667`,
    1259: `668`,
    126: `18`,
    1260: `669`,
    1261: `669`,
    1262: `670`,
    1263: `671`,
    1264: `672`,
    1265: `673`,
    1266: `673`,
    1267: `673`,
    1268: `674`,
    1269: `674`,
    127: `18`,
    1270: `674`,
    1271: `675`,
    1272: `676`,
    1273: `676`,
    1274: `677`,
    1275: `677`,
    1276: `677`,
    1277: `677`,
    1278: `677`,
    1279: `677`,
    128: `18`,
    1280: `677`,
    1281: `677`,
    1282: `677`,
    1283: `677`,
    1284: `678`,
    1285: `678`,
    1286: `679`,
    1287: `680`,
    1288: `681`,
    1289: `681`,
    129: `18`,
    1290: `682`,
    1291: `682`,
    1292: `683`,
    1293: `684`,
    1294: `684`,
    1295: `685`,
    1296: `686`,
    1297: `687`,
    1298: `688`,
    1299: `692`,
    13: `2`,
    130: `18`,
    1300: `692`,
    1301: `693`,
    1302: `694`,
    1303: `695`,
    1304: `695`,
    1305: `696`,
    1306: `697`,
    1307: `701`,
    1308: `701`,
    1309: `702`,
    131: `18`,
    1310: `703`,
    1311: `704`,
    1312: `704`,
    1313: `705`,
    1314: `706`,
    1315: `707`,
    1316: `707`,
    1317: `708`,
    1318: `709`,
    1319: `709`,
    132: `18`,
    1320: `710`,
    1321: `711`,
    1322: `712`,
    1323: `712`,
    1324: `713`,
    1325: `714`,
    1326: `715`,
    1327: `715`,
    1328: `715`,
    1329: `716`,
    133: `19`,
    1330: `717`,
    1331: `717`,
    1332: `718`,
    1333: `718`,
    1334: `718`,
    1335: `718`,
    1336: `718`,
    1337: `718`,
    1338: `718`,
    1339: `718`,
    134: `19`,
    1340: `718`,
    1341: `718`,
    1342: `719`,
    1343: `719`,
    1344: `720`,
    1345: `721`,
    1346: `721`,
    1347: `721`,
    1348: `722`,
    1349: `723`,
    135: `19`,
    1350: `724`,
    1351: `724`,
    1352: `725`,
    1353: `726`,
    1354: `726`,
    1355: `726`,
    1356: `727`,
    1357: `727`,
    1358: `728`,
    1359: `728`,
    136: `20`,
    1360: `729`,
    1361: `729`,
    1362: `730`,
    1363: `730`,
    1364: `730`,
    1365: `732`,
    1366: `732`,
    1367: `733`,
    1368: `733`,
    1369: `733`,
    137: `20`,
    1370: `734`,
    1371: `734`,
    1372: `735`,
    1373: `735`,
    1374: `736`,
    1375: `736`,
    1376: `736`,
    1377: `737`,
    1378: `737`,
    1379: `738`,
    138: `20`,
    1380: `738`,
    1381: `739`,
    1382: `739`,
    1383: `740`,
    1384: `741`,
    1385: `741`,
    1386: `743`,
    1387: `744`,
    1388: `744`,
    1389: `745`,
    139: `20`,
    1390: `746`,
    1391: `747`,
    1392: `748`,
    1393: `748`,
    1394: `749`,
    1395: `749`,
    1396: `750`,
    1397: `751`,
    1398: `752`,
    1399: `753`,
    14: `2`,
    140: `20`,
    1400: `753`,
    1401: `753`,
    1402: `754`,
    1403: `755`,
    1404: `755`,
    1405: `756`,
    1406: `757`,
    1407: `758`,
    1408: `759`,
    1409: `760`,
    141: `20`,
    1410: `767`,
    1411: `767`,
    1412: `768`,
    1413: `775`,
    1414: `775`,
    1415: `776`,
    1416: `776`,
    1417: `776`,
    1418: `779`,
    1419: `779`,
    142: `20`,
    1420: `780`,
    1421: `781`,
    1422: `782`,
    1423: `782`,
    1424: `782`,
    1425: `782`,
    1426: `782`,
    1427: `782`,
    1428: `783`,
    1429: `783`,
    143: `20`,
    1430: `783`,
    1431: `785`,
    1432: `785`,
    1433: `786`,
    1434: `786`,
    1435: `787`,
    1436: `788`,
    1437: `791`,
    1438: `791`,
    1439: `791`,
    144: `20`,
    1440: `792`,
    1441: `792`,
    1442: `793`,
    1443: `793`,
    1444: `795`,
    1445: `795`,
    1446: `796`,
    1447: `797`,
    1448: `798`,
    1449: `800`,
    145: `20`,
    1450: `800`,
    1451: `800`,
    1452: `802`,
    1453: `802`,
    1454: `803`,
    1455: `803`,
    1456: `804`,
    1457: `805`,
    1458: `808`,
    1459: `808`,
    146: `20`,
    1460: `808`,
    1461: `809`,
    1462: `810`,
    1463: `812`,
    1464: `813`,
    1465: `814`,
    1466: `815`,
    1467: `816`,
    1468: `816`,
    1469: `817`,
    147: `20`,
    1470: `817`,
    1471: `818`,
    1472: `819`,
    1473: `819`,
    1474: `820`,
    1475: `821`,
    1476: `822`,
    1477: `823`,
    1478: `823`,
    1479: `823`,
    148: `20`,
    1480: `824`,
    1481: `824`,
    1482: `824`,
    1483: `825`,
    1484: `825`,
    1485: `826`,
    1486: `826`,
    1487: `826`,
    1488: `828`,
    1489: `828`,
    149: `20`,
    1490: `829`,
    1491: `829`,
    1492: `830`,
    1493: `831`,
    1494: `834`,
    1495: `834`,
    1496: `834`,
    1497: `835`,
    1498: `835`,
    1499: `836`,
    15: `2`,
    150: `20`,
    1500: `836`,
    1501: `836`,
    1502: `837`,
    1503: `837`,
    1504: `838`,
    1505: `838`,
    1506: `838`,
    1507: `839`,
    1508: `840`,
    1509: `840`,
    151: `20`,
    1510: `841`,
    1511: `841`,
    1512: `841`,
    1513: `843`,
    1514: `843`,
    1515: `844`,
    1516: `845`,
    1517: `845`,
    1518: `846`,
    1519: `846`,
    152: `20`,
    1520: `846`,
    1521: `846`,
    1522: `846`,
    1523: `846`,
    1524: `847`,
    1525: `847`,
    1526: `848`,
    1527: `849`,
    1528: `850`,
    1529: `852`,
    153: `20`,
    1530: `852`,
    1531: `853`,
    1532: `853`,
    1533: `853`,
    1534: `855`,
    1535: `855`,
    1536: `856`,
    1537: `857`,
    1538: `858`,
    1539: `858`,
    154: `20`,
    1540: `860`,
    1541: `860`,
    1542: `861`,
    1543: `861`,
    1544: `862`,
    1545: `863`,
    1546: `864`,
    1547: `864`,
    1548: `864`,
    1549: `865`,
    155: `20`,
    1550: `866`,
    1551: `867`,
    1552: `867`,
    1553: `868`,
    1554: `869`,
    1555: `869`,
    1556: `870`,
    1557: `871`,
    1558: `872`,
    1559: `873`,
    156: `20`,
    1560: `873`,
    1561: `874`,
    1562: `875`,
    1563: `876`,
    1564: `878`,
    1565: `878`,
    1566: `878`,
    1567: `879`,
    1568: `879`,
    1569: `879`,
    157: `20`,
    1570: `881`,
    1571: `881`,
    1572: `882`,
    1573: `882`,
    1574: `883`,
    1575: `884`,
    1576: `884`,
    1577: `885`,
    1578: `886`,
    1579: `888`,
    158: `20`,
    1580: `888`,
    1581: `889`,
    1582: `890`,
    1583: `891`,
    1584: `891`,
    1585: `892`,
    1586: `892`,
    1587: `893`,
    1588: `894`,
    1589: `895`,
    159: `20`,
    1590: `895`,
    1591: `896`,
    1592: `896`,
    1593: `897`,
    1594: `897`,
    1595: `898`,
    1596: `899`,
    1597: `899`,
    1598: `900`,
    1599: `900`,
    16: `2`,
    160: `20`,
    1600: `900`,
    1601: `900`,
    1602: `900`,
    1603: `900`,
    1604: `901`,
    1605: `901`,
    1606: `902`,
    1607: `903`,
    1608: `904`,
    1609: `904`,
    161: `20`,
    1610: `905`,
    1611: `906`,
    1612: `907`,
    1613: `907`,
    1614: `908`,
    1615: `909`,
    1616: `910`,
    1617: `912`,
    1618: `912`,
    1619: `913`,
    162: `22`,
    1620: `913`,
    1621: `913`,
    1622: `914`,
    1623: `914`,
    1624: `915`,
    1625: `915`,
    1626: `916`,
    1627: `917`,
    1628: `917`,
    1629: `918`,
    163: `24`,
    1630: `918`,
    1631: `919`,
    1632: `920`,
    1633: `920`,
    1634: `921`,
    1635: `922`,
    1636: `923`,
    1637: `923`,
    1638: `924`,
    1639: `925`,
    164: `24`,
    1640: `925`,
    1641: `926`,
    1642: `927`,
    1643: `928`,
    1644: `929`,
    1645: `929`,
    1646: `930`,
    1647: `930`,
    1648: `931`,
    1649: `932`,
    165: `24`,
    1650: `932`,
    1651: `933`,
    1652: `934`,
    1653: `934`,
    1654: `935`,
    1655: `936`,
    1656: `936`,
    1657: `937`,
    1658: `938`,
    1659: `939`,
    166: `25`,
    1660: `939`,
    1661: `940`,
    1662: `941`,
    1663: `942`,
    1664: `942`,
    1665: `943`,
    1666: `944`,
    1667: `944`,
    1668: `945`,
    1669: `945`,
    167: `25`,
    1670: `947`,
    1671: `947`,
    1672: `948`,
    1673: `948`,
    1674: `948`,
    1675: `948`,
    1676: `948`,
    1677: `948`,
    1678: `949`,
    1679: `949`,
    168: `25`,
    1680: `950`,
    1681: `950`,
    1682: `951`,
    1683: `951`,
    1684: `952`,
    1685: `955`,
    1686: `955`,
    1687: `956`,
    1688: `957`,
    1689: `957`,
    169: `26`,
    1690: `958`,
    1691: `959`,
    1692: `959`,
    1693: `960`,
    1694: `961`,
    1695: `962`,
    1696: `963`,
    1697: `963`,
    1698: `963`,
    1699: `964`,
    17: `2`,
    170: `26`,
    1700: `964`,
    1701: `964`,
    1702: `965`,
    1703: `966`,
    1704: `966`,
    1705: `967`,
    1706: `967`,
    1707: `967`,
    1708: `967`,
    1709: `967`,
    171: `26`,
    1710: `967`,
    1711: `967`,
    1712: `967`,
    1713: `967`,
    1714: `967`,
    1715: `968`,
    1716: `968`,
    1717: `969`,
    1718: `970`,
    1719: `971`,
    172: `27`,
    1720: `971`,
    1721: `972`,
    1722: `972`,
    1723: `973`,
    1724: `974`,
    1725: `974`,
    1726: `975`,
    1727: `976`,
    1728: `977`,
    1729: `978`,
    173: `27`,
    1730: `981`,
    1731: `981`,
    1732: `982`,
    1733: `982`,
    1734: `982`,
    1735: `983`,
    1736: `984`,
    1737: `987`,
    1738: `988`,
    1739: `988`,
    174: `28`,
    1740: `989`,
    1741: `990`,
    1742: `990`,
    1743: `991`,
    1744: `992`,
    1745: `993`,
    1746: `993`,
    1747: `994`,
    1748: `994`,
    1749: `995`,
    175: `28`,
    1750: `995`,
    1751: `996`,
    1752: `996`,
    1753: `996`,
    1754: `998`,
    1755: `998`,
    1756: `998`,
    1757: `999`,
    1758: `999`,
    1759: `999`,
    176: `29`,
    1760: `999`,
    1761: `1000`,
    1762: `1000`,
    1763: `1000`,
    1764: `1001`,
    1765: `1001`,
    1766: `1001`,
    1767: `1002`,
    1768: `1002`,
    1769: `1003`,
    177: `29`,
    1770: `1003`,
    1771: `1003`,
    1772: `1005`,
    1773: `1005`,
    1774: `1005`,
    1775: `1006`,
    1776: `1006`,
    1777: `1006`,
    1778: `1007`,
    1779: `1007`,
    178: `31`,
    1780: `1008`,
    1781: `1008`,
    1782: `1008`,
    1783: `1010`,
    1784: `1010`,
    1785: `1010`,
    1786: `1011`,
    1787: `1011`,
    1788: `1011`,
    1789: `1012`,
    179: `32`,
    1790: `1012`,
    1791: `1013`,
    1792: `1013`,
    1793: `1013`,
    1794: `1015`,
    1795: `1016`,
    1796: `1016`,
    1797: `1017`,
    1798: `1018`,
    1799: `1019`,
    18: `2`,
    180: `33`,
    1800: `1019`,
    1801: `1020`,
    1802: `1020`,
    1803: `1021`,
    1804: `1022`,
    1805: `1023`,
    1806: `1024`,
    1807: `1024`,
    1808: `1025`,
    1809: `1026`,
    181: `34`,
    1810: `1027`,
    1811: `1028`,
    1812: `1028`,
    1813: `1029`,
    1814: `1030`,
    1815: `1031`,
    1816: `1031`,
    1817: `1031`,
    1818: `1032`,
    1819: `1032`,
    182: `34`,
    1820: `1033`,
    1821: `1034`,
    1822: `1035`,
    1823: `1036`,
    1824: `1036`,
    1825: `1036`,
    1826: `1038`,
    1827: `1038`,
    1828: `1038`,
    1829: `1040`,
    183: `35`,
    1830: `1040`,
    1831: `1040`,
    1832: `1042`,
    1833: `1042`,
    1834: `1042`,
    1835: `1044`,
    1836: `1044`,
    1837: `1045`,
    1838: `1045`,
    1839: `1045`,
    184: `35`,
    1840: `1046`,
    1841: `1046`,
    1842: `1047`,
    1843: `1047`,
    1844: `1047`,
    1845: `1049`,
    1846: `1049`,
    1847: `1050`,
    1848: `1050`,
    1849: `1050`,
    185: `36`,
    1850: `1051`,
    1851: `1051`,
    1852: `1052`,
    1853: `1052`,
    1854: `1052`,
    1855: `1054`,
    1856: `1055`,
    1857: `1055`,
    1858: `1056`,
    1859: `1056`,
    186: `37`,
    1860: `1056`,
    1861: `1056`,
    1862: `1056`,
    1863: `1056`,
    1864: `1056`,
    1865: `1056`,
    1866: `1056`,
    1867: `1056`,
    1868: `1057`,
    1869: `1057`,
    187: `37`,
    1870: `1058`,
    1871: `1059`,
    1872: `1059`,
    1873: `1059`,
    1874: `1060`,
    1875: `1061`,
    1876: `1062`,
    1877: `1062`,
    1878: `1063`,
    1879: `1064`,
    188: `38`,
    1880: `1064`,
    1881: `1064`,
    1882: `1065`,
    1883: `1065`,
    1884: `1066`,
    1885: `1066`,
    1886: `1067`,
    1887: `1067`,
    1888: `1068`,
    1889: `1068`,
    189: `39`,
    1890: `1068`,
    1891: `1070`,
    1892: `1070`,
    1893: `1071`,
    1894: `1071`,
    1895: `1071`,
    1896: `1072`,
    1897: `1073`,
    1898: `1073`,
    1899: `1074`,
    19: `2`,
    190: `40`,
    1900: `1075`,
    1901: `1076`,
    1902: `1076`,
    1903: `1077`,
    1904: `1077`,
    1905: `1078`,
    1906: `1079`,
    1907: `1080`,
    1908: `1080`,
    1909: `1081`,
    191: `41`,
    1910: `1081`,
    1911: `1082`,
    1912: `1082`,
    1913: `1083`,
    1914: `1084`,
    1915: `1084`,
    1916: `1085`,
    1917: `1086`,
    1918: `1087`,
    1919: `1088`,
    192: `41`,
    1920: `1088`,
    1921: `1089`,
    1922: `1089`,
    1923: `1090`,
    1924: `1091`,
    1925: `1091`,
    1926: `1092`,
    1927: `1093`,
    1928: `1093`,
    1929: `1094`,
    193: `43`,
    1930: `1095`,
    1931: `1095`,
    1932: `1096`,
    1933: `1097`,
    1934: `1098`,
    1935: `1098`,
    1936: `1099`,
    1937: `1100`,
    1938: `1101`,
    1939: `1101`,
    194: `43`,
    1940: `1102`,
    1941: `1103`,
    1942: `1103`,
    1943: `1104`,
    1944: `1104`,
    1945: `1106`,
    1946: `1106`,
    1947: `1107`,
    1948: `1107`,
    1949: `1108`,
    195: `44`,
    1950: `1108`,
    1951: `1109`,
    1952: `1109`,
    1953: `1111`,
    1954: `1112`,
    1955: `1112`,
    1956: `1113`,
    1957: `1113`,
    1958: `1115`,
    1959: `1119`,
    196: `44`,
    1960: `1119`,
    1961: `1120`,
    1962: `1121`,
    1963: `1121`,
    1964: `1122`,
    1965: `1123`,
    1966: `1123`,
    1967: `1124`,
    1968: `1125`,
    1969: `1126`,
    197: `45`,
    1970: `1127`,
    1971: `1127`,
    1972: `1127`,
    1973: `1128`,
    1974: `1128`,
    1975: `1128`,
    1976: `1129`,
    1977: `1130`,
    1978: `1130`,
    1979: `1131`,
    198: `46`,
    1980: `1131`,
    1981: `1131`,
    1982: `1131`,
    1983: `1131`,
    1984: `1131`,
    1985: `1131`,
    1986: `1131`,
    1987: `1131`,
    1988: `1131`,
    1989: `1132`,
    199: `47`,
    1990: `1132`,
    1991: `1133`,
    1992: `1134`,
    1993: `1135`,
    1994: `1135`,
    1995: `1136`,
    1996: `1136`,
    1997: `1137`,
    1998: `1138`,
    1999: `1138`,
    2: `2`,
    20: `2`,
    200: `47`,
    2000: `1139`,
    2001: `1140`,
    2002: `1141`,
    2003: `1142`,
    2004: `1146`,
    2005: `1146`,
    2006: `1147`,
    2007: `1148`,
    2008: `1149`,
    2009: `1149`,
    201: `47`,
    2010: `1150`,
    2011: `1151`,
    2012: `1155`,
    2013: `1156`,
    2014: `1156`,
    2015: `1157`,
    2016: `1158`,
    2017: `1159`,
    2018: `1160`,
    2019: `1160`,
    202: `48`,
    2020: `1161`,
    2021: `1161`,
    2022: `1162`,
    2023: `1163`,
    2024: `1163`,
    2025: `1164`,
    2026: `1165`,
    2027: `1165`,
    2028: `1166`,
    2029: `1167`,
    203: `48`,
    2030: `1167`,
    2031: `1168`,
    2032: `1169`,
    2033: `1170`,
    2034: `1170`,
    2035: `1171`,
    2036: `1172`,
    2037: `1173`,
    2038: `1173`,
    2039: `1174`,
    204: `49`,
    2040: `1175`,
    2041: `1175`,
    2042: `1176`,
    2043: `1176`,
    2044: `1177`,
    2045: `1177`,
    2046: `1178`,
    2047: `1178`,
    2048: `1179`,
    2049: `1179`,
    205: `50`,
    2050: `1180`,
    2051: `1180`,
    2052: `1181`,
    2053: `1182`,
    2054: `1182`,
    2055: `1183`,
    2056: `1183`,
    2057: `1184`,
    2058: `1184`,
    2059: `1186`,
    206: `51`,
    2060: `1187`,
    2061: `1187`,
    2062: `1188`,
    2063: `1188`,
    2064: `1190`,
    2065: `1194`,
    2066: `1194`,
    2067: `1195`,
    2068: `1196`,
    2069: `1196`,
    207: `51`,
    2070: `1197`,
    2071: `1198`,
    2072: `1198`,
    2073: `1199`,
    2074: `1200`,
    2075: `1201`,
    2076: `1202`,
    2077: `1202`,
    2078: `1202`,
    2079: `1203`,
    208: `52`,
    2080: `1203`,
    2081: `1203`,
    2082: `1204`,
    2083: `1205`,
    2084: `1205`,
    2085: `1206`,
    2086: `1206`,
    2087: `1206`,
    2088: `1206`,
    2089: `1206`,
    209: `52`,
    2090: `1206`,
    2091: `1206`,
    2092: `1206`,
    2093: `1206`,
    2094: `1206`,
    2095: `1207`,
    2096: `1207`,
    2097: `1208`,
    2098: `1209`,
    2099: `1210`,
    21: `2`,
    210: `53`,
    2100: `1210`,
    2101: `1211`,
    2102: `1211`,
    2103: `1212`,
    2104: `1213`,
    2105: `1213`,
    2106: `1214`,
    2107: `1215`,
    2108: `1216`,
    2109: `1217`,
    211: `53`,
    2110: `1221`,
    2111: `1221`,
    2112: `1222`,
    2113: `1223`,
    2114: `1224`,
    2115: `1224`,
    2116: `1225`,
    2117: `1226`,
    2118: `1230`,
    2119: `1230`,
    212: `53`,
    2120: `1231`,
    2121: `1232`,
    2122: `1233`,
    2123: `1233`,
    2124: `1234`,
    2125: `1235`,
    2126: `1236`,
    2127: `1236`,
    2128: `1236`,
    2129: `1237`,
    213: `54`,
    2130: `1238`,
    2131: `1238`,
    2132: `1239`,
    2133: `1239`,
    2134: `1239`,
    2135: `1239`,
    2136: `1239`,
    2137: `1239`,
    2138: `1239`,
    2139: `1239`,
    214: `54`,
    2140: `1239`,
    2141: `1239`,
    2142: `1240`,
    2143: `1240`,
    2144: `1241`,
    2145: `1242`,
    2146: `1242`,
    2147: `1242`,
    2148: `1243`,
    2149: `1244`,
    215: `55`,
    2150: `1245`,
    2151: `1245`,
    2152: `1246`,
    2153: `1247`,
    2154: `1247`,
    2155: `1247`,
    2156: `1248`,
    2157: `1248`,
    2158: `1249`,
    2159: `1249`,
    216: `55`,
    2160: `1250`,
    2161: `1250`,
    2162: `1251`,
    2163: `1251`,
    2164: `1251`,
    2165: `1253`,
    2166: `1253`,
    2167: `1255`,
    2168: `1255`,
    2169: `1256`,
    217: `55`,
    2170: `1256`,
    2171: `1256`,
    2172: `1257`,
    2173: `1258`,
    2174: `1258`,
    2175: `1259`,
    2176: `1259`,
    2177: `1259`,
    2178: `1259`,
    2179: `1259`,
    218: `55`,
    2180: `1259`,
    2181: `1259`,
    2182: `1259`,
    2183: `1259`,
    2184: `1259`,
    2185: `1260`,
    2186: `1260`,
    2187: `1261`,
    2188: `1262`,
    2189: `1263`,
    219: `55`,
    2190: `1264`,
    2191: `1264`,
    2192: `1265`,
    2193: `1266`,
    2194: `1266`,
    2195: `1267`,
    2196: `1267`,
    2197: `1268`,
    2198: `1268`,
    2199: `1269`,
    22: `2`,
    220: `55`,
    2200: `1269`,
    2201: `1269`,
    2202: `1271`,
    2203: `1271`,
    2204: `1272`,
    2205: `1272`,
    2206: `1272`,
    2207: `1273`,
    2208: `1274`,
    2209: `1274`,
    221: `56`,
    2210: `1275`,
    2211: `1276`,
    2212: `1277`,
    2213: `1277`,
    2214: `1278`,
    2215: `1278`,
    2216: `1279`,
    2217: `1279`,
    2218: `1280`,
    2219: `1281`,
    222: `56`,
    2220: `1281`,
    2221: `1282`,
    2222: `1282`,
    2223: `1283`,
    2224: `1283`,
    2225: `1284`,
    2226: `1285`,
    2227: `1286`,
    2228: `1286`,
    2229: `1287`,
    223: `57`,
    2230: `1287`,
    2231: `1288`,
    2232: `1289`,
    2233: `1289`,
    2234: `1290`,
    2235: `1290`,
    2236: `1291`,
    2237: `1292`,
    2238: `1293`,
    2239: `1293`,
    224: `58`,
    2240: `1294`,
    2241: `1295`,
    2242: `1295`,
    2243: `1296`,
    2244: `1296`,
    2245: `1297`,
    2246: `1297`,
    2247: `1298`,
    2248: `1299`,
    2249: `1299`,
    225: `59`,
    2250: `1300`,
    2251: `1301`,
    2252: `1301`,
    2253: `1303`,
    2254: `1303`,
    2255: `1304`,
    2256: `1305`,
    2257: `1305`,
    2258: `1306`,
    2259: `1307`,
    226: `59`,
    2260: `1308`,
    2261: `1309`,
    2262: `1310`,
    2263: `1311`,
    2264: `1312`,
    2265: `1313`,
    2266: `1314`,
    2267: `1314`,
    2268: `1315`,
    2269: `1316`,
    227: `60`,
    2270: `1317`,
    2271: `1317`,
    2272: `1317`,
    2273: `1318`,
    2274: `1318`,
    2275: `1318`,
    2276: `1319`,
    2277: `1320`,
    2278: `1320`,
    2279: `1321`,
    228: `61`,
    2280: `1322`,
    2281: `1323`,
    2282: `1323`,
    2283: `1323`,
    2284: `1324`,
    2285: `1325`,
    2286: `1325`,
    2287: `1326`,
    2288: `1327`,
    2289: `1328`,
    229: `63`,
    2290: `1329`,
    2291: `1329`,
    2292: `1330`,
    2293: `1330`,
    2294: `1331`,
    2295: `1332`,
    2296: `1332`,
    2297: `1333`,
    2298: `1334`,
    2299: `1334`,
    23: `2`,
    230: `63`,
    2300: `1335`,
    2301: `1336`,
    2302: `1336`,
    2303: `1337`,
    2304: `1338`,
    2305: `1339`,
    2306: `1339`,
    2307: `1340`,
    2308: `1341`,
    2309: `1342`,
    231: `64`,
    2310: `1342`,
    2311: `1343`,
    2312: `1344`,
    2313: `1344`,
    2314: `1345`,
    2315: `1345`,
    2316: `1347`,
    2317: `1347`,
    2318: `1348`,
    2319: `1348`,
    232: `64`,
    2320: `1348`,
    2321: `1348`,
    2322: `1348`,
    2323: `1348`,
    2324: `1349`,
    2325: `1349`,
    2326: `1350`,
    2327: `1350`,
    2328: `1352`,
    2329: `1353`,
    233: `64`,
    2330: `1353`,
    2331: `1354`,
    2332: `1354`,
    2333: `1355`,
    2334: `1355`,
    2335: `1356`,
    2336: `1357`,
    2337: `1357`,
    2338: `1358`,
    2339: `1358`,
    234: `65`,
    2340: `1359`,
    2341: `1359`,
    2342: `1360`,
    2343: `1361`,
    2344: `1361`,
    2345: `1365`,
    2346: `1369`,
    2347: `1369`,
    2348: `1370`,
    2349: `1371`,
    235: `65`,
    2350: `1371`,
    2351: `1372`,
    2352: `1373`,
    2353: `1373`,
    2354: `1374`,
    2355: `1375`,
    2356: `1376`,
    2357: `1377`,
    2358: `1377`,
    2359: `1377`,
    236: `66`,
    2360: `1378`,
    2361: `1378`,
    2362: `1378`,
    2363: `1379`,
    2364: `1380`,
    2365: `1380`,
    2366: `1381`,
    2367: `1381`,
    2368: `1381`,
    2369: `1381`,
    237: `67`,
    2370: `1381`,
    2371: `1381`,
    2372: `1381`,
    2373: `1381`,
    2374: `1381`,
    2375: `1381`,
    2376: `1382`,
    2377: `1382`,
    2378: `1383`,
    2379: `1384`,
    238: `68`,
    2380: `1385`,
    2381: `1385`,
    2382: `1386`,
    2383: `1386`,
    2384: `1387`,
    2385: `1388`,
    2386: `1388`,
    2387: `1389`,
    2388: `1390`,
    2389: `1391`,
    239: `68`,
    2390: `1392`,
    2391: `1396`,
    2392: `1396`,
    2393: `1397`,
    2394: `1397`,
    2395: `1397`,
    2396: `1398`,
    2397: `1399`,
    2398: `1403`,
    2399: `1403`,
    24: `2`,
    240: `68`,
    2400: `1404`,
    2401: `1404`,
    2402: `1405`,
    2403: `1405`,
    2404: `1405`,
    2405: `1406`,
    2406: `1406`,
    2407: `1407`,
    2408: `1407`,
    2409: `1408`,
    241: `68`,
    2410: `1409`,
    2411: `1409`,
    2412: `1410`,
    2413: `1410`,
    2414: `1410`,
    2415: `1411`,
    2416: `1411`,
    2417: `1411`,
    2418: `1411`,
    2419: `1411`,
    242: `68`,
    2420: `1411`,
    2421: `1411`,
    2422: `1411`,
    2423: `1411`,
    2424: `1411`,
    2425: `1412`,
    2426: `1412`,
    2427: `1413`,
    2428: `1414`,
    2429: `1415`,
    243: `68`,
    2430: `1416`,
    2431: `1416`,
    2432: `1417`,
    2433: `1418`,
    2434: `1418`,
    2435: `1419`,
    2436: `1419`,
    2437: `1420`,
    2438: `1420`,
    2439: `1421`,
    244: `68`,
    2440: `1421`,
    2441: `1421`,
    2442: `1424`,
    2443: `1424`,
    2444: `1425`,
    2445: `1425`,
    2446: `1426`,
    2447: `1427`,
    2448: `1428`,
    2449: `1428`,
    245: `68`,
    2450: `1429`,
    2451: `1430`,
    2452: `1431`,
    2453: `1431`,
    2454: `1432`,
    2455: `1433`,
    2456: `1434`,
    2457: `1434`,
    2458: `1435`,
    2459: `1436`,
    246: `68`,
    2460: `1436`,
    2461: `1437`,
    2462: `1438`,
    2463: `1438`,
    2464: `1439`,
    2465: `1440`,
    2466: `1440`,
    2467: `1441`,
    2468: `1441`,
    2469: `1442`,
    247: `68`,
    2470: `1442`,
    2471: `1442`,
    2472: `1444`,
    2473: `1445`,
    2474: `1446`,
    2475: `1447`,
    2476: `1448`,
    2477: `1450`,
    2478: `1451`,
    2479: `1451`,
    248: `68`,
    2480: `1452`,
    2481: `1453`,
    2482: `1453`,
    2483: `1454`,
    2484: `1454`,
    2485: `1455`,
    2486: `1455`,
    2487: `1456`,
    2488: `1457`,
    2489: `1459`,
    249: `68`,
    2490: `1459`,
    2491: `1460`,
    2492: `1460`,
    2493: `1460`,
    2494: `1461`,
    2495: `1461`,
    2496: `1462`,
    2497: `1462`,
    2498: `1462`,
    2499: `1464`,
    25: `2`,
    250: `68`,
    2500: `1464`,
    2501: `1465`,
    2502: `1465`,
    2503: `1465`,
    2504: `1466`,
    2505: `1466`,
    2506: `1467`,
    2507: `1467`,
    2508: `1467`,
    2509: `1469`,
    251: `68`,
    2510: `1469`,
    2511: `1469`,
    2512: `1470`,
    2513: `1470`,
    2514: `1470`,
    2515: `1471`,
    2516: `1471`,
    2517: `1471`,
    2518: `1472`,
    2519: `1472`,
    252: `69`,
    2520: `1473`,
    2521: `1473`,
    2522: `1474`,
    2523: `1474`,
    2524: `1475`,
    2525: `1475`,
    2526: `1475`,
    2527: `1477`,
    2528: `1477`,
    2529: `1477`,
    253: `69`,
    2530: `1479`,
    2531: `1480`,
    2532: `1482`,
    2533: `1483`,
    2534: `1484`,
    2535: `1485`,
    2536: `1485`,
    2537: `1486`,
    2538: `1486`,
    2539: `1487`,
    254: `69`,
    2540: `1487`,
    2541: `1487`,
    2542: `1488`,
    2543: `1490`,
    2544: `1491`,
    2545: `1492`,
    2546: `1492`,
    2547: `1492`,
    2548: `1493`,
    2549: `1494`,
    255: `71`,
    2550: `1494`,
    2551: `1495`,
    2552: `1495`,
    2553: `1495`,
    2554: `1496`,
    2555: `1498`,
    2556: `1499`,
    2557: `1500`,
    2558: `1501`,
    2559: `1501`,
    256: `71`,
    2560: `1501`,
    2561: `1502`,
    2562: `1502`,
    2563: `1503`,
    2564: `1504`,
    2565: `1505`,
    2566: `1507`,
    2567: `1508`,
    2568: `1508`,
    2569: `1508`,
    257: `71`,
    2570: `1509`,
    2571: `1509`,
    2572: `1510`,
    2573: `1511`,
    2574: `1511`,
    2575: `1512`,
    2576: `1513`,
    2577: `1513`,
    2578: `1514`,
    2579: `1515`,
    258: `72`,
    2580: `1515`,
    2581: `1516`,
    2582: `1517`,
    2583: `1517`,
    2584: `1518`,
    2585: `1519`,
    2586: `1519`,
    2587: `1520`,
    2588: `1521`,
    2589: `1521`,
    259: `72`,
    2590: `1522`,
    2591: `1523`,
    2592: `1524`,
    2593: `1525`,
    2594: `1525`,
    2595: `1526`,
    2596: `1527`,
    2597: `1527`,
    2598: `1527`,
    2599: `1528`,
    26: `2`,
    260: `72`,
    2600: `1528`,
    2601: `1529`,
    2602: `1529`,
    2603: `1529`,
    2604: `1530`,
    2605: `1530`,
    2606: `1531`,
    2607: `1533`,
    2608: `1534`,
    2609: `1534`,
    261: `73`,
    2610: `1534`,
    2611: `1536`,
    2612: `1537`,
    2613: `1537`,
    2614: `1538`,
    2615: `1540`,
    2616: `1541`,
    2617: `1542`,
    2618: `1543`,
    2619: `1544`,
    262: `73`,
    2620: `1544`,
    2621: `1545`,
    2622: `1546`,
    2623: `1547`,
    2624: `1548`,
    2625: `1550`,
    2626: `1551`,
    2627: `1551`,
    2628: `1551`,
    2629: `1552`,
    263: `74`,
    2630: `1553`,
    2631: `1554`,
    2632: `1555`,
    2633: `1556`,
    2634: `1558`,
    2635: `1558`,
    2636: `1559`,
    2637: `1559`,
    2638: `1560`,
    2639: `1561`,
    264: `74`,
    2640: `1562`,
    2641: `1562`,
    2642: `1562`,
    2643: `1563`,
    2644: `1563`,
    2645: `1563`,
    2646: `1565`,
    2647: `1565`,
    2648: `1566`,
    2649: `1567`,
    265: `76`,
    2650: `1567`,
    2651: `1568`,
    2652: `1571`,
    2653: `1571`,
    2654: `1572`,
    2655: `1572`,
    2656: `1573`,
    2657: `1574`,
    2658: `1575`,
    2659: `1576`,
    266: `77`,
    2660: `1576`,
    2661: `1577`,
    2662: `1578`,
    2663: `1578`,
    2664: `1579`,
    2665: `1579`,
    2666: `1580`,
    2667: `1580`,
    2668: `1581`,
    2669: `1582`,
    267: `78`,
    2670: `1583`,
    2671: `1583`,
    2672: `1584`,
    2673: `1585`,
    2674: `1586`,
    2675: `1587`,
    2676: `1587`,
    2677: `1588`,
    2678: `1589`,
    2679: `1590`,
    268: `78`,
    2680: `1592`,
    2681: `1593`,
    2682: `1594`,
    2683: `1595`,
    2684: `1595`,
    2685: `1595`,
    2686: `1596`,
    2687: `1596`,
    2688: `1597`,
    2689: `1597`,
    269: `79`,
    2690: `1597`,
    2691: `1598`,
    2692: `1598`,
    2693: `1598`,
    2694: `1600`,
    2695: `1601`,
    2696: `1602`,
    2697: `1602`,
    2698: `1603`,
    2699: `1605`,
    27: `2`,
    270: `79`,
    2700: `1605`,
    2701: `1606`,
    2702: `1607`,
    2703: `1607`,
    2704: `1608`,
    2705: `1610`,
    2706: `1611`,
    2707: `1611`,
    2708: `1612`,
    271: `80`,
    272: `80`,
    273: `81`,
    274: `82`,
    275: `83`,
    276: `83`,
    277: `84`,
    278: `85`,
    279: `86`,
    28: `2`,
    280: `86`,
    281: `87`,
    282: `87`,
    283: `87`,
    284: `90`,
    285: `90`,
    286: `90`,
    287: `90`,
    288: `90`,
    289: `90`,
    29: `2`,
    290: `90`,
    291: `90`,
    292: `90`,
    293: `90`,
    294: `90`,
    295: `90`,
    296: `90`,
    297: `90`,
    298: `90`,
    299: `90`,
    3: `2`,
    30: `2`,
    300: `90`,
    301: `90`,
    302: `90`,
    303: `90`,
    304: `90`,
    305: `90`,
    306: `90`,
    307: `90`,
    308: `90`,
    309: `90`,
    31: `2`,
    310: `90`,
    311: `90`,
    312: `90`,
    313: `90`,
    314: `90`,
    315: `90`,
    316: `90`,
    317: `90`,
    318: `90`,
    319: `90`,
    32: `2`,
    320: `90`,
    321: `90`,
    322: `90`,
    323: `90`,
    324: `90`,
    325: `90`,
    326: `90`,
    327: `90`,
    328: `90`,
    329: `90`,
    33: `2`,
    330: `90`,
    331: `90`,
    332: `90`,
    333: `90`,
    334: `90`,
    335: `90`,
    336: `90`,
    337: `90`,
    338: `90`,
    339: `90`,
    34: `2`,
    340: `90`,
    341: `90`,
    342: `90`,
    343: `90`,
    344: `90`,
    345: `90`,
    346: `90`,
    347: `90`,
    348: `90`,
    349: `90`,
    35: `2`,
    350: `90`,
    351: `90`,
    352: `90`,
    353: `90`,
    354: `90`,
    355: `90`,
    356: `90`,
    357: `90`,
    358: `90`,
    359: `90`,
    36: `2`,
    360: `90`,
    361: `90`,
    362: `90`,
    363: `90`,
    364: `90`,
    365: `90`,
    366: `90`,
    367: `90`,
    368: `90`,
    369: `90`,
    37: `2`,
    370: `90`,
    371: `90`,
    372: `90`,
    373: `90`,
    374: `90`,
    375: `90`,
    376: `90`,
    377: `90`,
    378: `90`,
    379: `90`,
    38: `2`,
    380: `90`,
    381: `90`,
    382: `90`,
    383: `90`,
    384: `90`,
    385: `90`,
    386: `90`,
    387: `90`,
    388: `90`,
    389: `90`,
    39: `2`,
    390: `90`,
    391: `91`,
    392: `91`,
    393: `92`,
    394: `92`,
    395: `92`,
    396: `94`,
    397: `94`,
    398: `94`,
    399: `95`,
    4: `2`,
    40: `2`,
    400: `95`,
    401: `97`,
    402: `98`,
    403: `99`,
    404: `99`,
    405: `99`,
    406: `100`,
    407: `100`,
    408: `101`,
    409: `102`,
    41: `2`,
    410: `102`,
    411: `103`,
    412: `104`,
    413: `105`,
    414: `106`,
    415: `106`,
    416: `107`,
    417: `107`,
    418: `107`,
    419: `109`,
    42: `2`,
    420: `109`,
    421: `109`,
    422: `110`,
    423: `110`,
    424: `110`,
    425: `111`,
    426: `112`,
    427: `112`,
    428: `112`,
    429: `113`,
    43: `2`,
    430: `114`,
    431: `114`,
    432: `114`,
    433: `115`,
    434: `116`,
    435: `116`,
    436: `117`,
    437: `117`,
    438: `118`,
    439: `118`,
    44: `2`,
    440: `119`,
    441: `119`,
    442: `121`,
    443: `122`,
    444: `123`,
    445: `123`,
    446: `123`,
    447: `124`,
    448: `124`,
    449: `125`,
    45: `2`,
    450: `125`,
    451: `126`,
    452: `127`,
    453: `128`,
    454: `128`,
    455: `129`,
    456: `130`,
    457: `131`,
    458: `131`,
    459: `132`,
    46: `2`,
    460: `133`,
    461: `134`,
    462: `135`,
    463: `135`,
    464: `136`,
    465: `137`,
    466: `138`,
    467: `139`,
    468: `139`,
    469: `140`,
    47: `2`,
    470: `140`,
    471: `140`,
    472: `142`,
    473: `142`,
    474: `142`,
    475: `143`,
    476: `143`,
    477: `143`,
    478: `144`,
    479: `144`,
    48: `2`,
    480: `144`,
    481: `145`,
    482: `146`,
    483: `146`,
    484: `147`,
    485: `147`,
    486: `148`,
    487: `148`,
    488: `150`,
    489: `151`,
    49: `2`,
    490: `152`,
    491: `152`,
    492: `152`,
    493: `153`,
    494: `153`,
    495: `154`,
    496: `154`,
    497: `155`,
    498: `156`,
    499: `156`,
    5: `2`,
    50: `2`,
    500: `157`,
    501: `158`,
    502: `159`,
    503: `160`,
    504: `160`,
    505: `161`,
    506: `162`,
    507: `163`,
    508: `164`,
    509: `164`,
    51: `2`,
    510: `165`,
    511: `165`,
    512: `165`,
    513: `167`,
    514: `167`,
    515: `168`,
    516: `168`,
    517: `168`,
    518: `169`,
    519: `169`,
    52: `2`,
    520: `170`,
    521: `170`,
    522: `171`,
    523: `171`,
    524: `171`,
    525: `172`,
    526: `172`,
    527: `174`,
    528: `175`,
    529: `175`,
    53: `4`,
    530: `176`,
    531: `177`,
    532: `178`,
    533: `179`,
    534: `179`,
    535: `180`,
    536: `180`,
    537: `181`,
    538: `182`,
    539: `183`,
    54: `4`,
    540: `184`,
    541: `184`,
    542: `184`,
    543: `185`,
    544: `186`,
    545: `187`,
    546: `188`,
    547: `189`,
    548: `194`,
    549: `194`,
    55: `5`,
    550: `195`,
    551: `195`,
    552: `196`,
    553: `197`,
    554: `197`,
    555: `198`,
    556: `198`,
    557: `198`,
    558: `199`,
    559: `200`,
    56: `5`,
    560: `200`,
    561: `202`,
    562: `203`,
    563: `204`,
    564: `205`,
    565: `206`,
    566: `206`,
    567: `207`,
    568: `208`,
    569: `209`,
    57: `5`,
    570: `209`,
    571: `209`,
    572: `210`,
    573: `211`,
    574: `212`,
    575: `213`,
    576: `214`,
    577: `219`,
    578: `219`,
    579: `220`,
    58: `6`,
    580: `221`,
    581: `221`,
    582: `222`,
    583: `223`,
    584: `224`,
    585: `224`,
    586: `224`,
    587: `225`,
    588: `226`,
    589: `226`,
    59: `7`,
    590: `227`,
    591: `227`,
    592: `227`,
    593: `227`,
    594: `227`,
    595: `227`,
    596: `227`,
    597: `227`,
    598: `227`,
    599: `227`,
    6: `2`,
    60: `8`,
    600: `228`,
    601: `228`,
    602: `229`,
    603: `230`,
    604: `230`,
    605: `230`,
    606: `231`,
    607: `232`,
    608: `233`,
    609: `233`,
    61: `9`,
    610: `234`,
    611: `235`,
    612: `235`,
    613: `235`,
    614: `236`,
    615: `236`,
    616: `237`,
    617: `237`,
    618: `238`,
    619: `238`,
    62: `10`,
    620: `240`,
    621: `240`,
    622: `241`,
    623: `241`,
    624: `241`,
    625: `242`,
    626: `243`,
    627: `243`,
    628: `243`,
    629: `245`,
    63: `11`,
    630: `245`,
    631: `246`,
    632: `246`,
    633: `247`,
    634: `248`,
    635: `250`,
    636: `250`,
    637: `250`,
    638: `252`,
    639: `253`,
    64: `11`,
    640: `253`,
    641: `254`,
    642: `254`,
    643: `255`,
    644: `255`,
    645: `255`,
    646: `257`,
    647: `257`,
    648: `258`,
    649: `258`,
    65: `12`,
    650: `258`,
    651: `260`,
    652: `260`,
    653: `260`,
    654: `260`,
    655: `260`,
    656: `260`,
    657: `261`,
    658: `261`,
    659: `262`,
    66: `13`,
    660: `263`,
    661: `265`,
    662: `266`,
    663: `268`,
    664: `268`,
    665: `269`,
    666: `269`,
    667: `269`,
    668: `270`,
    669: `271`,
    67: `14`,
    670: `271`,
    671: `272`,
    672: `272`,
    673: `273`,
    674: `273`,
    675: `273`,
    676: `274`,
    677: `275`,
    678: `275`,
    679: `277`,
    68: `14`,
    680: `278`,
    681: `278`,
    682: `279`,
    683: `280`,
    684: `281`,
    685: `282`,
    686: `282`,
    687: `283`,
    688: `284`,
    689: `285`,
    69: `15`,
    690: `285`,
    691: `285`,
    692: `286`,
    693: `287`,
    694: `287`,
    695: `288`,
    696: `289`,
    697: `290`,
    698: `291`,
    699: `292`,
    7: `2`,
    70: `16`,
    700: `297`,
    701: `297`,
    702: `298`,
    703: `299`,
    704: `300`,
    705: `300`,
    706: `300`,
    707: `300`,
    708: `300`,
    709: `300`,
    71: `18`,
    710: `301`,
    711: `301`,
    712: `301`,
    713: `303`,
    714: `304`,
    715: `304`,
    716: `305`,
    717: `306`,
    718: `307`,
    719: `308`,
    72: `18`,
    720: `308`,
    721: `309`,
    722: `309`,
    723: `310`,
    724: `311`,
    725: `311`,
    726: `312`,
    727: `313`,
    728: `313`,
    729: `314`,
    73: `18`,
    730: `315`,
    731: `315`,
    732: `316`,
    733: `317`,
    734: `318`,
    735: `318`,
    736: `319`,
    737: `320`,
    738: `321`,
    739: `321`,
    74: `18`,
    740: `322`,
    741: `323`,
    742: `323`,
    743: `324`,
    744: `324`,
    745: `326`,
    746: `326`,
    747: `327`,
    748: `327`,
    749: `327`,
    75: `18`,
    750: `327`,
    751: `327`,
    752: `327`,
    753: `328`,
    754: `328`,
    755: `329`,
    756: `329`,
    757: `330`,
    758: `330`,
    759: `331`,
    76: `18`,
    760: `335`,
    761: `335`,
    762: `336`,
    763: `337`,
    764: `337`,
    765: `338`,
    766: `339`,
    767: `339`,
    768: `340`,
    769: `341`,
    77: `18`,
    770: `342`,
    771: `343`,
    772: `343`,
    773: `343`,
    774: `344`,
    775: `344`,
    776: `344`,
    777: `345`,
    778: `346`,
    779: `346`,
    78: `18`,
    780: `347`,
    781: `347`,
    782: `347`,
    783: `347`,
    784: `347`,
    785: `347`,
    786: `347`,
    787: `347`,
    788: `347`,
    789: `347`,
    79: `18`,
    790: `348`,
    791: `348`,
    792: `349`,
    793: `350`,
    794: `351`,
    795: `351`,
    796: `352`,
    797: `352`,
    798: `353`,
    799: `354`,
    8: `2`,
    80: `18`,
    800: `354`,
    801: `355`,
    802: `356`,
    803: `357`,
    804: `358`,
    805: `362`,
    806: `362`,
    807: `363`,
    808: `363`,
    809: `363`,
    81: `18`,
    810: `364`,
    811: `365`,
    812: `369`,
    813: `370`,
    814: `370`,
    815: `371`,
    816: `371`,
    817: `371`,
    818: `371`,
    819: `371`,
    82: `18`,
    820: `371`,
    821: `371`,
    822: `371`,
    823: `371`,
    824: `371`,
    825: `372`,
    826: `372`,
    827: `373`,
    828: `374`,
    829: `374`,
    83: `18`,
    830: `374`,
    831: `375`,
    832: `376`,
    833: `377`,
    834: `377`,
    835: `378`,
    836: `379`,
    837: `379`,
    838: `379`,
    839: `380`,
    84: `18`,
    840: `380`,
    841: `381`,
    842: `381`,
    843: `382`,
    844: `382`,
    845: `383`,
    846: `383`,
    847: `383`,
    848: `384`,
    849: `385`,
    85: `18`,
    850: `385`,
    851: `386`,
    852: `386`,
    853: `386`,
    854: `387`,
    855: `388`,
    856: `388`,
    857: `389`,
    858: `389`,
    859: `390`,
    86: `18`,
    860: `390`,
    861: `391`,
    862: `391`,
    863: `391`,
    864: `393`,
    865: `393`,
    866: `394`,
    867: `394`,
    868: `394`,
    869: `395`,
    87: `18`,
    870: `395`,
    871: `396`,
    872: `396`,
    873: `397`,
    874: `397`,
    875: `398`,
    876: `398`,
    877: `398`,
    878: `399`,
    879: `400`,
    88: `18`,
    880: `405`,
    881: `406`,
    882: `406`,
    883: `407`,
    884: `408`,
    885: `409`,
    886: `410`,
    887: `410`,
    888: `411`,
    889: `411`,
    89: `18`,
    890: `412`,
    891: `413`,
    892: `413`,
    893: `414`,
    894: `415`,
    895: `415`,
    896: `416`,
    897: `417`,
    898: `417`,
    899: `418`,
    9: `2`,
    90: `18`,
    900: `419`,
    901: `420`,
    902: `420`,
    903: `421`,
    904: `422`,
    905: `423`,
    906: `423`,
    907: `424`,
    908: `425`,
    909: `425`,
    91: `18`,
    910: `426`,
    911: `426`,
    912: `428`,
    913: `428`,
    914: `429`,
    915: `429`,
    916: `429`,
    917: `429`,
    918: `429`,
    919: `429`,
    92: `18`,
    920: `430`,
    921: `430`,
    922: `431`,
    923: `431`,
    924: `432`,
    925: `433`,
    926: `433`,
    927: `434`,
    928: `435`,
    929: `436`,
    93: `18`,
    930: `436`,
    931: `437`,
    932: `438`,
    933: `438`,
    934: `439`,
    935: `443`,
    936: `443`,
    937: `444`,
    938: `445`,
    939: `445`,
    94: `18`,
    940: `446`,
    941: `447`,
    942: `447`,
    943: `448`,
    944: `449`,
    945: `450`,
    946: `451`,
    947: `451`,
    948: `451`,
    949: `452`,
    95: `18`,
    950: `452`,
    951: `452`,
    952: `453`,
    953: `454`,
    954: `454`,
    955: `455`,
    956: `455`,
    957: `455`,
    958: `455`,
    959: `455`,
    96: `18`,
    960: `455`,
    961: `455`,
    962: `455`,
    963: `455`,
    964: `455`,
    965: `456`,
    966: `456`,
    967: `457`,
    968: `458`,
    969: `459`,
    97: `18`,
    970: `459`,
    971: `460`,
    972: `460`,
    973: `461`,
    974: `462`,
    975: `462`,
    976: `463`,
    977: `464`,
    978: `465`,
    979: `466`,
    98: `18`,
    980: `470`,
    981: `470`,
    982: `471`,
    983: `471`,
    984: `471`,
    985: `472`,
    986: `473`,
    987: `477`,
    988: `478`,
    989: `478`,
    99: `18`,
    990: `479`,
    991: `479`,
    992: `479`,
    993: `479`,
    994: `479`,
    995: `479`,
    996: `479`,
    997: `479`,
    998: `479`,
    999: `479`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 1,
  stateSize: 113,
  unsupported: [],
  version: 13,
  warnings: [`Step 1 calls a remote object at /app/index.rsh:94:18:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:131:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:136:13:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:189:19:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:219:19:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:225:19:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:254:26:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:267:26:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 may use up to 9 transaction references, but the limit is 8. Step 3 starts at /app/index.rsh:107:29:dot.`, `This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:76:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:280:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:107:29:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "A_deletePurchase": A_deletePurchase,
  "A_deleteSale": A_deleteSale,
  "Alice": Alice,
  "C_close": C_close,
  "C_grant": C_grant,
  "Deployer": Deployer,
  "U1_announce": U1_announce,
  "U2_buy": U2_buy
  };
export const _APIs = {
  A: {
    deletePurchase: A_deletePurchase,
    deleteSale: A_deleteSale
    },
  C: {
    close: C_close,
    grant: C_grant
    },
  U1: {
    announce: U1_announce
    },
  U2: {
    buy: U2_buy
    }
  };
