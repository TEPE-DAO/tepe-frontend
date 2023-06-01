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
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0, ctc1, ctc1, ctc2, ctc1, ctc2]);
  return {
    buy: [ctc3]
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
      const [v1627, v1628, v1629, v1633, v1636, v1637, v1649] = svs;
      return (await ((async () => {
        
        
        return v1627;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _purchase = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1627, v1628, v1629, v1633, v1636, v1637, v1649] = svs;
      return (await ((async (_v1666, _v1667, _v1668 ) => {
          const v1666 = stdlib.protect(ctc0, _v1666, null);
          const v1667 = stdlib.protect(ctc0, _v1667, null);
          const v1668 = stdlib.protect(ctc0, _v1668, null);
        
        const v1669 = [v1666, v1667, v1668];
        const v1670 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc7, v1669, ctc6), null);
        const v1671 = stdlib.fromSome(v1670, stdlib.checkedBigNumberify('./index.rsh:125:65:decimal', stdlib.UInt_max, '0'));
        
        return v1671;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1627, v1628, v1629, v1633, v1636, v1637, v1649] = svs;
      return (await ((async () => {
        
        const v1662 = v1649.manager;
        const v1663 = v1649.token;
        const v1664 = {
          manager: v1662,
          token: v1663
          };
        
        return v1664;}))(...args));
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
  
  
  const [v1627, v1628, v1629, v1633, v1636, v1637, v1649] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc1, ctc1, ctc1, ctc7, ctc8, ctc10]);
  const v1756 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:273:66:application call to [unknown function] (defined at: ./index.rsh:273:66:function exp)', 'at ./index.rsh:117:29:application call to "runA_deletePurchase0_114" (defined at: ./index.rsh:273:10:function exp)', 'at ./index.rsh:117:29:application call to [unknown function] (defined at: ./index.rsh:117:29:function exp)'],
    msg: 'in',
    who: 'A_deletePurchase'
    });
  const v1757 = v1756[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1758 = v1756[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1759 = v1756[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v1763 = [v1757, v1758];
  const v1764 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc12, v1763, ctc3), null);
  const v1765 = {
    None: 0,
    Some: 1
    }[v1764[0]];
  const v1766 = stdlib.eq(v1765, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v1766, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:274:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:273:66:application call to [unknown function] (defined at: ./index.rsh:273:66:function exp)', 'at ./index.rsh:117:29:application call to "runA_deletePurchase0_114" (defined at: ./index.rsh:273:10:function exp)', 'at ./index.rsh:117:29:application call to [unknown function] (defined at: ./index.rsh:117:29:function exp)'],
    msg: 'No sale announced',
    who: 'A_deletePurchase'
    });
  const v1768 = [v1757, v1758, v1759];
  const v1769 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v1768, ctc2), null);
  const v1770 = {
    None: 0,
    Some: 1
    }[v1769[0]];
  const v1771 = stdlib.eq(v1770, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1771, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:275:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:273:66:application call to [unknown function] (defined at: ./index.rsh:273:66:function exp)', 'at ./index.rsh:117:29:application call to "runA_deletePurchase0_114" (defined at: ./index.rsh:273:10:function exp)', 'at ./index.rsh:117:29:application call to [unknown function] (defined at: ./index.rsh:117:29:function exp)'],
    msg: 'Not purchased',
    who: 'A_deletePurchase'
    });
  const v1782 = ['A_deletePurchase0_114', v1756];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1627, v1628, v1629, v1633, v1636, v1637, v1649, v1782],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:273:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1825], secs: v1827, time: v1826, didSend: v1102, from: v1824 } = txn1;
      
      switch (v1825[0]) {
        case 'A_deletePurchase0_114': {
          const v1828 = v1825[1];
          sim_r.txns.push({
            kind: 'api',
            who: "A_deletePurchase"
            });
          ;
          const v1852 = v1828[stdlib.checkedBigNumberify('./index.rsh:273:10:spread', stdlib.UInt_max, '0')];
          const v1853 = v1828[stdlib.checkedBigNumberify('./index.rsh:273:10:spread', stdlib.UInt_max, '1')];
          const v1854 = v1828[stdlib.checkedBigNumberify('./index.rsh:273:10:spread', stdlib.UInt_max, '2')];
          const v1855 = [v1852, v1853];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc12, v1855, ctc3), null);
          const v1860 = [v1852, v1853, v1854];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc11, v1860, ctc2), null);
          await stdlib.simMapSet(sim_r, 1, ctc11, v1860, ctc2, undefined /* Nothing */);
          const v1873 = [v1633, v1629, v1852, v1853, v1854];
          const v1874 = ['DeletePurchase', v1873];
          const v1875 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v1628,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:283:27:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:283:27:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc9.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v1875', ctc17, v1875);
          const v1885 = true;
          const v1886 = await txn1.getOutput('A_deletePurchase', 'v1885', ctc9, v1885);
          
          const v5334 = v1649;
          const v5336 = v1649.closed;
          if (v5336) {
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
          const v2190 = v1825[1];
          
          break;
          }
        case 'C_close0_114': {
          const v2552 = v1825[1];
          
          break;
          }
        case 'C_grant0_114': {
          const v2914 = v1825[1];
          
          break;
          }
        case 'U1_announce0_114': {
          const v3276 = v1825[1];
          
          break;
          }
        case 'U2_buy0_114': {
          const v3638 = v1825[1];
          
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
  const {data: [v1825], secs: v1827, time: v1826, didSend: v1102, from: v1824 } = txn1;
  switch (v1825[0]) {
    case 'A_deletePurchase0_114': {
      const v1828 = v1825[1];
      undefined /* setApiDetails */;
      ;
      const v1852 = v1828[stdlib.checkedBigNumberify('./index.rsh:273:10:spread', stdlib.UInt_max, '0')];
      const v1853 = v1828[stdlib.checkedBigNumberify('./index.rsh:273:10:spread', stdlib.UInt_max, '1')];
      const v1854 = v1828[stdlib.checkedBigNumberify('./index.rsh:273:10:spread', stdlib.UInt_max, '2')];
      const v1855 = [v1852, v1853];
      const v1856 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc12, v1855, ctc3), null);
      const v1857 = {
        None: 0,
        Some: 1
        }[v1856[0]];
      const v1858 = stdlib.eq(v1857, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v1858, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:274:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:280:13:application call to [unknown function] (defined at: ./index.rsh:280:13:function exp)'],
        msg: 'No sale announced',
        who: 'A_deletePurchase'
        });
      const v1860 = [v1852, v1853, v1854];
      const v1861 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v1860, ctc2), null);
      const v1862 = {
        None: 0,
        Some: 1
        }[v1861[0]];
      const v1863 = stdlib.eq(v1862, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1863, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:275:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:280:13:application call to [unknown function] (defined at: ./index.rsh:280:13:function exp)'],
        msg: 'Not purchased',
        who: 'A_deletePurchase'
        });
      await stdlib.mapSet(map1, ctc11, v1860, ctc2, undefined /* Nothing */);
      const v1873 = [v1633, v1629, v1852, v1853, v1854];
      const v1874 = ['DeletePurchase', v1873];
      const v1875 = undefined /* Remote */;
      const v1876 = await txn1.getOutput('internal', 'v1875', ctc17, v1875);
      const v1878 = v1876[stdlib.checkedBigNumberify('./index.rsh:283:27:application', stdlib.UInt_max, '0')];
      const v1879 = v1876[stdlib.checkedBigNumberify('./index.rsh:283:27:application', stdlib.UInt_max, '1')];
      const v1884 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1878);
      stdlib.assert(v1884, {
        at: './index.rsh:283:27:application',
        fs: ['at ./index.rsh:280:13:application call to [unknown function] (defined at: ./index.rsh:280:13:function exp)'],
        msg: 'remote bill check',
        who: 'A_deletePurchase'
        });
      stdlib.assert(v1879, {
        at: './index.rsh:282:18:application',
        fs: ['at ./index.rsh:280:13:application call to [unknown function] (defined at: ./index.rsh:280:13:function exp)'],
        msg: 'Child app rejected delete purchase',
        who: 'A_deletePurchase'
        });
      const v1885 = true;
      const v1886 = await txn1.getOutput('A_deletePurchase', 'v1885', ctc9, v1885);
      if (v1102) {
        stdlib.protect(ctc0, await interact.out(v1828, v1886), {
          at: './index.rsh:273:11:application',
          fs: ['at ./index.rsh:273:11:application call to [unknown function] (defined at: ./index.rsh:273:11:function exp)', 'at ./index.rsh:294:12:application call to "k" (defined at: ./index.rsh:280:13:function exp)', 'at ./index.rsh:280:13:application call to [unknown function] (defined at: ./index.rsh:280:13:function exp)'],
          msg: 'out',
          who: 'A_deletePurchase'
          });
        }
      else {
        }
      
      const v5334 = v1649;
      const v5336 = v1649.closed;
      if (v5336) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'A_deleteSale0_114': {
      const v2190 = v1825[1];
      return;
      break;
      }
    case 'C_close0_114': {
      const v2552 = v1825[1];
      return;
      break;
      }
    case 'C_grant0_114': {
      const v2914 = v1825[1];
      return;
      break;
      }
    case 'U1_announce0_114': {
      const v3276 = v1825[1];
      return;
      break;
      }
    case 'U2_buy0_114': {
      const v3638 = v1825[1];
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
  
  
  const [v1627, v1628, v1629, v1633, v1636, v1637, v1649] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc1, ctc1, ctc1, ctc7, ctc8, ctc10]);
  const v1735 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:237:53:application call to [unknown function] (defined at: ./index.rsh:237:53:function exp)', 'at ./index.rsh:117:29:application call to "runA_deleteSale0_114" (defined at: ./index.rsh:237:10:function exp)', 'at ./index.rsh:117:29:application call to [unknown function] (defined at: ./index.rsh:117:29:function exp)'],
    msg: 'in',
    who: 'A_deleteSale'
    });
  const v1736 = v1735[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1737 = v1735[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1740 = [v1736, v1737];
  const v1741 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc11, v1740, ctc3), null);
  const v1742 = {
    None: 0,
    Some: 1
    }[v1741[0]];
  const v1743 = stdlib.eq(v1742, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1743, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:238:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:237:53:application call to [unknown function] (defined at: ./index.rsh:237:53:function exp)', 'at ./index.rsh:117:29:application call to "runA_deleteSale0_114" (defined at: ./index.rsh:237:10:function exp)', 'at ./index.rsh:117:29:application call to [unknown function] (defined at: ./index.rsh:117:29:function exp)'],
    msg: 'No sale announced',
    who: 'A_deleteSale'
    });
  const v1752 = ['A_deleteSale0_114', v1735];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1627, v1628, v1629, v1633, v1636, v1637, v1649, v1752],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:237:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1825], secs: v1827, time: v1826, didSend: v1102, from: v1824 } = txn1;
      
      switch (v1825[0]) {
        case 'A_deletePurchase0_114': {
          const v1828 = v1825[1];
          
          break;
          }
        case 'A_deleteSale0_114': {
          const v2190 = v1825[1];
          sim_r.txns.push({
            kind: 'api',
            who: "A_deleteSale"
            });
          ;
          const v2258 = v2190[stdlib.checkedBigNumberify('./index.rsh:237:10:spread', stdlib.UInt_max, '0')];
          const v2259 = v2190[stdlib.checkedBigNumberify('./index.rsh:237:10:spread', stdlib.UInt_max, '1')];
          const v2260 = [v2258, v2259];
          const v2261 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc11, v2260, ctc3), null);
          switch (v2261[0]) {
            case 'None': {
              const v2269 = v2261[1];
              const v2270 = false;
              const v2271 = await txn1.getOutput('A_deleteSale', 'v2270', ctc9, v2270);
              
              const v5370 = v1649;
              const v5372 = v1649.closed;
              if (v5372) {
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
              const v2280 = v2261[1];
              const v2281 = v2280[stdlib.checkedBigNumberify('./index.rsh:247:21:array', stdlib.UInt_max, '0')];
              const v2284 = await ctc.getContractAddress();
              const v2285 = [v2281, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2258];
              const v2289 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v2281,
                  remote: ({
                    accs: [v2258],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:256:19:application', stdlib.UInt_max, '0'),
                    boxes: [[ctc18, v2285]],
                    fees: stdlib.checkedBigNumberify('./index.rsh:254:38:application', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:256:19:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc2.defaultValue /* simReturnVal */];})();
              await txn1.getOutput('internal', 'v2289', ctc17, v2289);
              const v2300 = [v2258, v2284];
              const v2301 = [v2281, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v2300];
              const v2305 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v2281,
                  remote: ({
                    accs: [v2258, v2284],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:262:19:application', stdlib.UInt_max, '0'),
                    boxes: [[ctc19, v2301]],
                    fees: stdlib.checkedBigNumberify('./index.rsh:260:38:application', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:262:19:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc2.defaultValue /* simReturnVal */];})();
              await txn1.getOutput('internal', 'v2305', ctc17, v2305);
              await stdlib.simMapSet(sim_r, 0, ctc11, v2260, ctc3, undefined /* Nothing */);
              const v2317 = true;
              const v2318 = await txn1.getOutput('A_deleteSale', 'v2317', ctc9, v2317);
              
              const v5374 = v1649;
              const v5376 = v1649.closed;
              if (v5376) {
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
          const v2552 = v1825[1];
          
          break;
          }
        case 'C_grant0_114': {
          const v2914 = v1825[1];
          
          break;
          }
        case 'U1_announce0_114': {
          const v3276 = v1825[1];
          
          break;
          }
        case 'U2_buy0_114': {
          const v3638 = v1825[1];
          
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
  const {data: [v1825], secs: v1827, time: v1826, didSend: v1102, from: v1824 } = txn1;
  switch (v1825[0]) {
    case 'A_deletePurchase0_114': {
      const v1828 = v1825[1];
      return;
      break;
      }
    case 'A_deleteSale0_114': {
      const v2190 = v1825[1];
      undefined /* setApiDetails */;
      ;
      const v2258 = v2190[stdlib.checkedBigNumberify('./index.rsh:237:10:spread', stdlib.UInt_max, '0')];
      const v2259 = v2190[stdlib.checkedBigNumberify('./index.rsh:237:10:spread', stdlib.UInt_max, '1')];
      const v2260 = [v2258, v2259];
      const v2261 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc11, v2260, ctc3), null);
      const v2262 = {
        None: 0,
        Some: 1
        }[v2261[0]];
      const v2263 = stdlib.eq(v2262, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2263, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:238:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:13:function exp)'],
        msg: 'No sale announced',
        who: 'A_deleteSale'
        });
      switch (v2261[0]) {
        case 'None': {
          const v2269 = v2261[1];
          const v2270 = false;
          const v2271 = await txn1.getOutput('A_deleteSale', 'v2270', ctc9, v2270);
          if (v1102) {
            stdlib.protect(ctc0, await interact.out(v2190, v2271), {
              at: './index.rsh:237:11:application',
              fs: ['at ./index.rsh:237:11:application call to [unknown function] (defined at: ./index.rsh:237:11:function exp)', 'at ./index.rsh:244:16:application call to "k" (defined at: ./index.rsh:240:13:function exp)', 'at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:13:function exp)'],
              msg: 'out',
              who: 'A_deleteSale'
              });
            }
          else {
            }
          
          const v5370 = v1649;
          const v5372 = v1649.closed;
          if (v5372) {
            return;
            }
          else {
            return;
            }
          break;
          }
        case 'Some': {
          const v2280 = v2261[1];
          const v2281 = v2280[stdlib.checkedBigNumberify('./index.rsh:247:21:array', stdlib.UInt_max, '0')];
          const v2282 = v2280[stdlib.checkedBigNumberify('./index.rsh:247:21:array', stdlib.UInt_max, '1')];
          const v2284 = await ctc.getContractAddress();
          const v2285 = [v2281, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2258];
          const v2289 = undefined /* Remote */;
          const v2290 = await txn1.getOutput('internal', 'v2289', ctc17, v2289);
          const v2292 = v2290[stdlib.checkedBigNumberify('./index.rsh:256:19:application', stdlib.UInt_max, '0')];
          const v2293 = v2290[stdlib.checkedBigNumberify('./index.rsh:256:19:application', stdlib.UInt_max, '1')];
          const v2298 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2292);
          stdlib.assert(v2298, {
            at: './index.rsh:256:19:application',
            fs: ['at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:13:function exp)'],
            msg: 'remote bill check',
            who: 'A_deleteSale'
            });
          const v2299 = stdlib.ge(v2293, v2282);
          stdlib.assert(v2299, {
            at: './index.rsh:253:22:application',
            fs: ['at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:13:function exp)'],
            msg: 'Tokens still held',
            who: 'A_deleteSale'
            });
          const v2300 = [v2258, v2284];
          const v2301 = [v2281, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v2300];
          const v2305 = undefined /* Remote */;
          const v2306 = await txn1.getOutput('internal', 'v2305', ctc17, v2305);
          const v2308 = v2306[stdlib.checkedBigNumberify('./index.rsh:262:19:application', stdlib.UInt_max, '0')];
          const v2309 = v2306[stdlib.checkedBigNumberify('./index.rsh:262:19:application', stdlib.UInt_max, '1')];
          const v2314 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2308);
          stdlib.assert(v2314, {
            at: './index.rsh:262:19:application',
            fs: ['at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:13:function exp)'],
            msg: 'remote bill check',
            who: 'A_deleteSale'
            });
          const v2315 = stdlib.ge(v2309, v2282);
          stdlib.assert(v2315, {
            at: './index.rsh:259:22:application',
            fs: ['at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:13:function exp)'],
            msg: 'Tokens still allowed',
            who: 'A_deleteSale'
            });
          await stdlib.mapSet(map0, ctc11, v2260, ctc3, undefined /* Nothing */);
          const v2317 = true;
          const v2318 = await txn1.getOutput('A_deleteSale', 'v2317', ctc9, v2317);
          if (v1102) {
            stdlib.protect(ctc0, await interact.out(v2190, v2318), {
              at: './index.rsh:237:11:application',
              fs: ['at ./index.rsh:237:11:application call to [unknown function] (defined at: ./index.rsh:237:11:function exp)', 'at ./index.rsh:267:16:application call to "k" (defined at: ./index.rsh:240:13:function exp)', 'at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:13:function exp)'],
              msg: 'out',
              who: 'A_deleteSale'
              });
            }
          else {
            }
          
          const v5374 = v1649;
          const v5376 = v1649.closed;
          if (v5376) {
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
      const v2552 = v1825[1];
      return;
      break;
      }
    case 'C_grant0_114': {
      const v2914 = v1825[1];
      return;
      break;
      }
    case 'U1_announce0_114': {
      const v3276 = v1825[1];
      return;
      break;
      }
    case 'U2_buy0_114': {
      const v3638 = v1825[1];
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
  const {data: [], secs: v1619, time: v1618, didSend: v22, from: v1617 } = txn1;
  ;
  const v1622 = stdlib.protect(ctc6, await interact.getParams(), {
    at: './index.rsh:90:57:application',
    fs: ['at ./index.rsh:89:9:application call to [unknown function] (defined at: ./index.rsh:89:13:function exp)'],
    msg: 'getParams',
    who: 'Alice'
    });
  const v1623 = v1622.ctc;
  const v1624 = v1622.token;
  
  const txn2 = await (ctc.sendrecv({
    args: [v1623, v1624],
    evt_cnt: 2,
    funcNum: 1,
    lct: v1618,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:92:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1628, v1629], secs: v1631, time: v1630, didSend: v36, from: v1627 } = txn2;
      
      ;
      
      const v1633 = await ctc.getContractInfo();
      const v1636 = [];
      const v1637 = [v1633, v1629];
      const v1638 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v1628,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:104:18:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./index.rsh:104:18:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc7.defaultValue /* simReturnVal */];})();
      await txn2.getOutput('internal', 'v1638', ctc8, v1638);
      const v1648 = {
        closed: false,
        manager: v1627,
        token: v1629
        };
      const v1649 = v1648;
      const v1650 = v1630;
      
      if (await (async () => {
        const v1660 = v1649.closed;
        const v1661 = v1660 ? false : true;
        
        return v1661;})()) {
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
  const {data: [v1628, v1629], secs: v1631, time: v1630, didSend: v36, from: v1627 } = txn2;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:93:19:application',
    fs: ['at ./index.rsh:93:19:application call to [unknown function] (defined at: ./index.rsh:93:19:function exp)', 'at ./index.rsh:93:19:application call to "liftedInteract" (defined at: ./index.rsh:93:19:application)'],
    msg: 'ready',
    who: 'Alice'
    });
  
  const v1633 = await ctc.getContractInfo();
  const v1636 = [];
  const v1637 = [v1633, v1629];
  const v1638 = undefined /* Remote */;
  const v1639 = await txn2.getOutput('internal', 'v1638', ctc8, v1638);
  const v1641 = v1639[stdlib.checkedBigNumberify('./index.rsh:104:18:application', stdlib.UInt_max, '0')];
  const v1642 = v1639[stdlib.checkedBigNumberify('./index.rsh:104:18:application', stdlib.UInt_max, '1')];
  const v1647 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1641);
  stdlib.assert(v1647, {
    at: './index.rsh:104:18:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Alice'
    });
  stdlib.assert(v1642, {
    at: './index.rsh:103:10:application',
    fs: [],
    msg: 'Child app not announced as ready',
    who: 'Alice'
    });
  const v1648 = {
    closed: false,
    manager: v1627,
    token: v1629
    };
  let v1649 = v1648;
  let v1650 = v1630;
  
  let txn3 = txn2;
  while (await (async () => {
    const v1660 = v1649.closed;
    const v1661 = v1660 ? false : true;
    
    return v1661;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc16],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1825], secs: v1827, time: v1826, didSend: v1102, from: v1824 } = txn4;
    switch (v1825[0]) {
      case 'A_deletePurchase0_114': {
        const v1828 = v1825[1];
        undefined /* setApiDetails */;
        ;
        const v1852 = v1828[stdlib.checkedBigNumberify('./index.rsh:273:10:spread', stdlib.UInt_max, '0')];
        const v1853 = v1828[stdlib.checkedBigNumberify('./index.rsh:273:10:spread', stdlib.UInt_max, '1')];
        const v1854 = v1828[stdlib.checkedBigNumberify('./index.rsh:273:10:spread', stdlib.UInt_max, '2')];
        const v1855 = [v1852, v1853];
        const v1856 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc11, v1855, ctc3), null);
        const v1857 = {
          None: 0,
          Some: 1
          }[v1856[0]];
        const v1858 = stdlib.eq(v1857, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v1858, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:274:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:280:13:application call to [unknown function] (defined at: ./index.rsh:280:13:function exp)'],
          msg: 'No sale announced',
          who: 'Alice'
          });
        const v1860 = [v1852, v1853, v1854];
        const v1861 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc10, v1860, ctc2), null);
        const v1862 = {
          None: 0,
          Some: 1
          }[v1861[0]];
        const v1863 = stdlib.eq(v1862, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v1863, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:275:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:280:13:application call to [unknown function] (defined at: ./index.rsh:280:13:function exp)'],
          msg: 'Not purchased',
          who: 'Alice'
          });
        await stdlib.mapSet(map1, ctc10, v1860, ctc2, undefined /* Nothing */);
        const v1873 = [v1633, v1629, v1852, v1853, v1854];
        const v1874 = ['DeletePurchase', v1873];
        const v1875 = undefined /* Remote */;
        const v1876 = await txn4.getOutput('internal', 'v1875', ctc8, v1875);
        const v1878 = v1876[stdlib.checkedBigNumberify('./index.rsh:283:27:application', stdlib.UInt_max, '0')];
        const v1879 = v1876[stdlib.checkedBigNumberify('./index.rsh:283:27:application', stdlib.UInt_max, '1')];
        const v1884 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1878);
        stdlib.assert(v1884, {
          at: './index.rsh:283:27:application',
          fs: ['at ./index.rsh:280:13:application call to [unknown function] (defined at: ./index.rsh:280:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v1879, {
          at: './index.rsh:282:18:application',
          fs: ['at ./index.rsh:280:13:application call to [unknown function] (defined at: ./index.rsh:280:13:function exp)'],
          msg: 'Child app rejected delete purchase',
          who: 'Alice'
          });
        const v1885 = true;
        await txn4.getOutput('A_deletePurchase', 'v1885', ctc7, v1885);
        const cv1649 = v1649;
        const cv1650 = v1826;
        
        v1649 = cv1649;
        v1650 = cv1650;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'A_deleteSale0_114': {
        const v2190 = v1825[1];
        undefined /* setApiDetails */;
        ;
        const v2258 = v2190[stdlib.checkedBigNumberify('./index.rsh:237:10:spread', stdlib.UInt_max, '0')];
        const v2259 = v2190[stdlib.checkedBigNumberify('./index.rsh:237:10:spread', stdlib.UInt_max, '1')];
        const v2260 = [v2258, v2259];
        const v2261 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc11, v2260, ctc3), null);
        const v2262 = {
          None: 0,
          Some: 1
          }[v2261[0]];
        const v2263 = stdlib.eq(v2262, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2263, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:238:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:13:function exp)'],
          msg: 'No sale announced',
          who: 'Alice'
          });
        switch (v2261[0]) {
          case 'None': {
            const v2269 = v2261[1];
            const v2270 = false;
            await txn4.getOutput('A_deleteSale', 'v2270', ctc7, v2270);
            const cv1649 = v1649;
            const cv1650 = v1826;
            
            v1649 = cv1649;
            v1650 = cv1650;
            
            txn3 = txn4;
            continue;
            break;
            }
          case 'Some': {
            const v2280 = v2261[1];
            const v2281 = v2280[stdlib.checkedBigNumberify('./index.rsh:247:21:array', stdlib.UInt_max, '0')];
            const v2282 = v2280[stdlib.checkedBigNumberify('./index.rsh:247:21:array', stdlib.UInt_max, '1')];
            const v2284 = await ctc.getContractAddress();
            const v2285 = [v2281, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2258];
            const v2289 = undefined /* Remote */;
            const v2290 = await txn4.getOutput('internal', 'v2289', ctc17, v2289);
            const v2292 = v2290[stdlib.checkedBigNumberify('./index.rsh:256:19:application', stdlib.UInt_max, '0')];
            const v2293 = v2290[stdlib.checkedBigNumberify('./index.rsh:256:19:application', stdlib.UInt_max, '1')];
            const v2298 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2292);
            stdlib.assert(v2298, {
              at: './index.rsh:256:19:application',
              fs: ['at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:13:function exp)'],
              msg: 'remote bill check',
              who: 'Alice'
              });
            const v2299 = stdlib.ge(v2293, v2282);
            stdlib.assert(v2299, {
              at: './index.rsh:253:22:application',
              fs: ['at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:13:function exp)'],
              msg: 'Tokens still held',
              who: 'Alice'
              });
            const v2300 = [v2258, v2284];
            const v2301 = [v2281, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v2300];
            const v2305 = undefined /* Remote */;
            const v2306 = await txn4.getOutput('internal', 'v2305', ctc17, v2305);
            const v2308 = v2306[stdlib.checkedBigNumberify('./index.rsh:262:19:application', stdlib.UInt_max, '0')];
            const v2309 = v2306[stdlib.checkedBigNumberify('./index.rsh:262:19:application', stdlib.UInt_max, '1')];
            const v2314 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2308);
            stdlib.assert(v2314, {
              at: './index.rsh:262:19:application',
              fs: ['at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:13:function exp)'],
              msg: 'remote bill check',
              who: 'Alice'
              });
            const v2315 = stdlib.ge(v2309, v2282);
            stdlib.assert(v2315, {
              at: './index.rsh:259:22:application',
              fs: ['at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:13:function exp)'],
              msg: 'Tokens still allowed',
              who: 'Alice'
              });
            await stdlib.mapSet(map0, ctc11, v2260, ctc3, undefined /* Nothing */);
            const v2317 = true;
            await txn4.getOutput('A_deleteSale', 'v2317', ctc7, v2317);
            const cv1649 = v1649;
            const cv1650 = v1826;
            
            v1649 = cv1649;
            v1650 = cv1650;
            
            txn3 = txn4;
            continue;
            break;
            }
          }
        break;
        }
      case 'C_close0_114': {
        const v2552 = v1825[1];
        undefined /* setApiDetails */;
        ;
        const v2695 = undefined /* Remote */;
        const v2696 = await txn4.getOutput('internal', 'v2695', ctc8, v2695);
        const v2698 = v2696[stdlib.checkedBigNumberify('./index.rsh:306:26:application', stdlib.UInt_max, '0')];
        const v2699 = v2696[stdlib.checkedBigNumberify('./index.rsh:306:26:application', stdlib.UInt_max, '1')];
        const v2704 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2698);
        stdlib.assert(v2704, {
          at: './index.rsh:306:26:application',
          fs: ['at ./index.rsh:304:13:application call to [unknown function] (defined at: ./index.rsh:304:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v2699, {
          at: './index.rsh:305:18:application',
          fs: ['at ./index.rsh:304:13:application call to [unknown function] (defined at: ./index.rsh:304:13:function exp)'],
          msg: 'Child app rejected close',
          who: 'Alice'
          });
        const v2705 = true;
        await txn4.getOutput('C_close', 'v2705', ctc7, v2705);
        const v2712 = v1649.manager;
        const v2713 = v1649.token;
        const v2714 = {
          closed: true,
          manager: v2712,
          token: v2713
          };
        const cv1649 = v2714;
        const cv1650 = v1826;
        
        v1649 = cv1649;
        v1650 = cv1650;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'C_grant0_114': {
        const v2914 = v1825[1];
        undefined /* setApiDetails */;
        ;
        const v3080 = v2914[stdlib.checkedBigNumberify('./index.rsh:314:10:spread', stdlib.UInt_max, '0')];
        const v3081 = v1649.manager;
        const v3082 = stdlib.addressEq(v1824, v3081);
        stdlib.assert(v3082, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:315:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:317:13:application call to [unknown function] (defined at: ./index.rsh:317:13:function exp)'],
          msg: 'Only constructor can grant',
          who: 'Alice'
          });
        const v3089 = [v1633, v1629, v3080];
        const v3090 = undefined /* Remote */;
        const v3091 = await txn4.getOutput('internal', 'v3090', ctc8, v3090);
        const v3093 = v3091[stdlib.checkedBigNumberify('./index.rsh:319:26:application', stdlib.UInt_max, '0')];
        const v3094 = v3091[stdlib.checkedBigNumberify('./index.rsh:319:26:application', stdlib.UInt_max, '1')];
        const v3099 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3093);
        stdlib.assert(v3099, {
          at: './index.rsh:319:26:application',
          fs: ['at ./index.rsh:317:13:application call to [unknown function] (defined at: ./index.rsh:317:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v3094, {
          at: './index.rsh:318:18:application',
          fs: ['at ./index.rsh:317:13:application call to [unknown function] (defined at: ./index.rsh:317:13:function exp)'],
          msg: 'Child app rejected grant',
          who: 'Alice'
          });
        const v3100 = true;
        await txn4.getOutput('C_grant', 'v3100', ctc7, v3100);
        const v3107 = v1649.closed;
        const v3109 = v1649.token;
        const v3110 = {
          closed: v3107,
          manager: v3080,
          token: v3109
          };
        const cv1649 = v3110;
        const cv1650 = v1826;
        
        v1649 = cv1649;
        v1650 = cv1650;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U1_announce0_114': {
        const v3276 = v1825[1];
        undefined /* setApiDetails */;
        ;
        const v3476 = v3276[stdlib.checkedBigNumberify('./index.rsh:129:10:spread', stdlib.UInt_max, '0')];
        const v3477 = v3276[stdlib.checkedBigNumberify('./index.rsh:129:10:spread', stdlib.UInt_max, '1')];
        const v3478 = v3276[stdlib.checkedBigNumberify('./index.rsh:129:10:spread', stdlib.UInt_max, '2')];
        const v3479 = v3276[stdlib.checkedBigNumberify('./index.rsh:129:10:spread', stdlib.UInt_max, '3')];
        const v3480 = [v1824, v3476];
        const v3481 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc11, v3480, ctc3), null);
        const v3482 = {
          None: 0,
          Some: 1
          }[v3481[0]];
        const v3483 = stdlib.eq(v3482, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3483, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:130:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
          msg: 'already announced',
          who: 'Alice'
          });
        const v3485 = stdlib.gt(v3478, stdlib.checkedBigNumberify('./index.rsh:131:19:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v3485, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:131:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
          msg: 'Must sell at least one token',
          who: 'Alice'
          });
        const v3487 = stdlib.gt(v3479, stdlib.checkedBigNumberify('./index.rsh:132:19:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v3487, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:132:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
          msg: 'Price must be positive',
          who: 'Alice'
          });
        const v3493 = await ctc.getContractAddress();
        const v3494 = [v1824, v3493];
        const v3495 = [v3477, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v3494];
        const v3500 = undefined /* Remote */;
        const v3501 = await txn4.getOutput('internal', 'v3500', ctc17, v3500);
        const v3503 = v3501[stdlib.checkedBigNumberify('./index.rsh:142:15:application', stdlib.UInt_max, '0')];
        const v3504 = v3501[stdlib.checkedBigNumberify('./index.rsh:142:15:application', stdlib.UInt_max, '1')];
        const v3509 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3503);
        stdlib.assert(v3509, {
          at: './index.rsh:142:15:application',
          fs: ['at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        const v3510 = stdlib.ge(v3504, v3478);
        stdlib.assert(v3510, {
          at: './index.rsh:139:18:application',
          fs: ['at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
          msg: 'Not enough allowance',
          who: 'Alice'
          });
        const v3511 = [v3477, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1824];
        const v3515 = undefined /* Remote */;
        const v3516 = await txn4.getOutput('internal', 'v3515', ctc17, v3515);
        const v3518 = v3516[stdlib.checkedBigNumberify('./index.rsh:148:15:application', stdlib.UInt_max, '0')];
        const v3519 = v3516[stdlib.checkedBigNumberify('./index.rsh:148:15:application', stdlib.UInt_max, '1')];
        const v3524 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3518);
        stdlib.assert(v3524, {
          at: './index.rsh:148:15:application',
          fs: ['at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        const v3525 = stdlib.ge(v3519, v3478);
        stdlib.assert(v3525, {
          at: './index.rsh:145:18:application',
          fs: ['at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
          msg: 'Not enough tokens',
          who: 'Alice'
          });
        const v3530 = [v1633, v1629, v1824, v3476, v3477, v3478, v3479];
        const v3531 = undefined /* Remote */;
        const v3532 = await txn4.getOutput('internal', 'v3531', ctc8, v3531);
        const v3534 = v3532[stdlib.checkedBigNumberify('./index.rsh:152:29:application', stdlib.UInt_max, '0')];
        const v3535 = v3532[stdlib.checkedBigNumberify('./index.rsh:152:29:application', stdlib.UInt_max, '1')];
        const v3540 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3534);
        stdlib.assert(v3540, {
          at: './index.rsh:152:29:application',
          fs: ['at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v3535, {
          at: './index.rsh:151:18:application',
          fs: ['at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
          msg: 'Child app rejected announce',
          who: 'Alice'
          });
        const v3542 = [v3477, v3478, v3479];
        await stdlib.mapSet(map0, ctc11, v3480, ctc3, v3542);
        const v3543 = true;
        await txn4.getOutput('U1_announce', 'v3543', ctc7, v3543);
        const cv1649 = v1649;
        const cv1650 = v1826;
        
        v1649 = cv1649;
        v1650 = cv1650;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U2_buy0_114': {
        const v3638 = v1825[1];
        undefined /* setApiDetails */;
        const v3648 = v3638[stdlib.checkedBigNumberify('./index.rsh:170:10:spread', stdlib.UInt_max, '0')];
        const v3649 = v3638[stdlib.checkedBigNumberify('./index.rsh:170:10:spread', stdlib.UInt_max, '1')];
        const v3650 = v3638[stdlib.checkedBigNumberify('./index.rsh:170:10:spread', stdlib.UInt_max, '2')];
        const v3651 = [v3648, v3649];
        const v3652 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc11, v3651, ctc3), null);
        const v3653 = {
          None: 0,
          Some: 1
          }[v3652[0]];
        const v3654 = stdlib.eq(v3653, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3654, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:171:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:52:application call to [unknown function] (defined at: ./index.rsh:170:52:function exp)', 'at ./index.rsh:117:29:application call to [unknown function] (defined at: ./index.rsh:170:52:function exp)', 'at ./index.rsh:117:29:application call to [unknown function] (defined at: ./index.rsh:117:29:function exp)'],
          msg: 'No sale announced',
          who: 'Alice'
          });
        const v3656 = stdlib.eq(v3650, stdlib.checkedBigNumberify('./index.rsh:172:20:decimal', stdlib.UInt_max, '0'));
        const v3657 = v3656 ? false : true;
        stdlib.assert(v3657, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:172:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:52:application call to [unknown function] (defined at: ./index.rsh:170:52:function exp)', 'at ./index.rsh:117:29:application call to [unknown function] (defined at: ./index.rsh:170:52:function exp)', 'at ./index.rsh:117:29:application call to [unknown function] (defined at: ./index.rsh:117:29:function exp)'],
          msg: 'Must pay something',
          who: 'Alice'
          });
        ;
        switch (v3652[0]) {
          case 'None': {
            const v3933 = v3652[1];
            ;
            const v3938 = stdlib.checkedBigNumberify('./index.rsh:190:17:decimal', stdlib.UInt_max, '0');
            await txn4.getOutput('U2_buy', 'v3938', ctc2, v3938);
            const cv1649 = v1649;
            const cv1650 = v1826;
            
            v1649 = cv1649;
            v1650 = cv1650;
            
            txn3 = txn4;
            continue;
            break;
            }
          case 'Some': {
            const v3949 = v3652[1];
            const v3950 = v3949[stdlib.checkedBigNumberify('./index.rsh:193:21:array', stdlib.UInt_max, '0')];
            const v3951 = v3949[stdlib.checkedBigNumberify('./index.rsh:193:21:array', stdlib.UInt_max, '1')];
            const v3952 = v3949[stdlib.checkedBigNumberify('./index.rsh:193:21:array', stdlib.UInt_max, '2')];
            const v3953 = await ctc.getContractAddress();
            const v3954 = stdlib.safeDiv(v3650, v3952);
            const v3955 = stdlib.safeMul(v3954, v3952);
            const v3956 = stdlib.safeSub(v3650, v3955);
            const v3957 = stdlib.safeMul(v3951, v3954);
            const v3958 = [v3648, v3649, v1824];
            const v3960 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc10, v3958, ctc2), null);
            const v3961 = stdlib.fromSome(v3960, stdlib.checkedBigNumberify('./index.rsh:206:70:decimal', stdlib.UInt_max, '0'));
            const v3962 = stdlib.safeAdd(v3961, v3957);
            await stdlib.mapSet(map1, ctc10, v3958, ctc2, v3962);
            const v3963 = [v3950, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3648];
            const v3964 = [v3950, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1824];
            const v3965 = [v3648, v3953];
            const v3966 = [v3950, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v3965];
            const v3970 = undefined /* Remote */;
            const v3971 = await txn4.getOutput('internal', 'v3970', ctc8, v3970);
            const v3973 = v3971[stdlib.checkedBigNumberify('./index.rsh:216:19:application', stdlib.UInt_max, '0')];
            const v3974 = v3971[stdlib.checkedBigNumberify('./index.rsh:216:19:application', stdlib.UInt_max, '1')];
            const v3979 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3973);
            stdlib.assert(v3979, {
              at: './index.rsh:216:19:application',
              fs: ['at ./index.rsh:185:13:application call to [unknown function] (defined at: ./index.rsh:185:13:function exp)'],
              msg: 'remote bill check',
              who: 'Alice'
              });
            stdlib.assert(v3974, {
              at: './index.rsh:209:22:application',
              fs: ['at ./index.rsh:185:13:application call to [unknown function] (defined at: ./index.rsh:185:13:function exp)'],
              msg: 'Transfer failed',
              who: 'Alice'
              });
            const v3981 = [v1633, v1629, v3648, v3649, v3650, v1824, v3957];
            null;
            ;
            ;
            await txn4.getOutput('U2_buy', 'v3957', ctc2, v3957);
            const cv1649 = v1649;
            const cv1650 = v1826;
            
            v1649 = cv1649;
            v1650 = cv1650;
            
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
  
  
  const [v1627, v1628, v1629, v1633, v1636, v1637, v1649] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc1, ctc1, ctc1, ctc7, ctc8, ctc10]);
  const v1786 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:300:25:application call to [unknown function] (defined at: ./index.rsh:300:25:function exp)', 'at ./index.rsh:117:29:application call to "runC_close0_114" (defined at: ./index.rsh:300:10:function exp)', 'at ./index.rsh:117:29:application call to [unknown function] (defined at: ./index.rsh:117:29:function exp)'],
    msg: 'in',
    who: 'C_close'
    });
  const v1790 = ['C_close0_114', v1786];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1627, v1628, v1629, v1633, v1636, v1637, v1649, v1790],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:300:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1825], secs: v1827, time: v1826, didSend: v1102, from: v1824 } = txn1;
      
      switch (v1825[0]) {
        case 'A_deletePurchase0_114': {
          const v1828 = v1825[1];
          
          break;
          }
        case 'A_deleteSale0_114': {
          const v2190 = v1825[1];
          
          break;
          }
        case 'C_close0_114': {
          const v2552 = v1825[1];
          sim_r.txns.push({
            kind: 'api',
            who: "C_close"
            });
          ;
          const v2695 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v1628,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:306:26:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:306:26:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc9.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v2695', ctc17, v2695);
          const v2705 = true;
          const v2706 = await txn1.getOutput('C_close', 'v2705', ctc9, v2705);
          
          const v2712 = v1649.manager;
          const v2713 = v1649.token;
          const v2714 = {
            closed: true,
            manager: v2712,
            token: v2713
            };
          const v5410 = v2714;
          const v5412 = v2714.closed;
          if (v5412) {
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
          const v2914 = v1825[1];
          
          break;
          }
        case 'U1_announce0_114': {
          const v3276 = v1825[1];
          
          break;
          }
        case 'U2_buy0_114': {
          const v3638 = v1825[1];
          
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
  const {data: [v1825], secs: v1827, time: v1826, didSend: v1102, from: v1824 } = txn1;
  switch (v1825[0]) {
    case 'A_deletePurchase0_114': {
      const v1828 = v1825[1];
      return;
      break;
      }
    case 'A_deleteSale0_114': {
      const v2190 = v1825[1];
      return;
      break;
      }
    case 'C_close0_114': {
      const v2552 = v1825[1];
      undefined /* setApiDetails */;
      ;
      const v2695 = undefined /* Remote */;
      const v2696 = await txn1.getOutput('internal', 'v2695', ctc17, v2695);
      const v2698 = v2696[stdlib.checkedBigNumberify('./index.rsh:306:26:application', stdlib.UInt_max, '0')];
      const v2699 = v2696[stdlib.checkedBigNumberify('./index.rsh:306:26:application', stdlib.UInt_max, '1')];
      const v2704 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2698);
      stdlib.assert(v2704, {
        at: './index.rsh:306:26:application',
        fs: ['at ./index.rsh:304:13:application call to [unknown function] (defined at: ./index.rsh:304:13:function exp)'],
        msg: 'remote bill check',
        who: 'C_close'
        });
      stdlib.assert(v2699, {
        at: './index.rsh:305:18:application',
        fs: ['at ./index.rsh:304:13:application call to [unknown function] (defined at: ./index.rsh:304:13:function exp)'],
        msg: 'Child app rejected close',
        who: 'C_close'
        });
      const v2705 = true;
      const v2706 = await txn1.getOutput('C_close', 'v2705', ctc9, v2705);
      if (v1102) {
        stdlib.protect(ctc0, await interact.out(v2552, v2706), {
          at: './index.rsh:300:11:application',
          fs: ['at ./index.rsh:300:11:application call to [unknown function] (defined at: ./index.rsh:300:11:function exp)', 'at ./index.rsh:309:12:application call to "k" (defined at: ./index.rsh:304:13:function exp)', 'at ./index.rsh:304:13:application call to [unknown function] (defined at: ./index.rsh:304:13:function exp)'],
          msg: 'out',
          who: 'C_close'
          });
        }
      else {
        }
      
      const v2712 = v1649.manager;
      const v2713 = v1649.token;
      const v2714 = {
        closed: true,
        manager: v2712,
        token: v2713
        };
      const v5410 = v2714;
      const v5412 = v2714.closed;
      if (v5412) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'C_grant0_114': {
      const v2914 = v1825[1];
      return;
      break;
      }
    case 'U1_announce0_114': {
      const v3276 = v1825[1];
      return;
      break;
      }
    case 'U2_buy0_114': {
      const v3638 = v1825[1];
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
  
  
  const [v1627, v1628, v1629, v1633, v1636, v1637, v1649] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc1, ctc1, ctc1, ctc7, ctc8, ctc10]);
  const v1792 = ctc.selfAddress();
  const v1794 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:314:29:application call to [unknown function] (defined at: ./index.rsh:314:29:function exp)', 'at ./index.rsh:117:29:application call to "runC_grant0_114" (defined at: ./index.rsh:314:10:function exp)', 'at ./index.rsh:117:29:application call to [unknown function] (defined at: ./index.rsh:117:29:function exp)'],
    msg: 'in',
    who: 'C_grant'
    });
  const v1797 = v1649.manager;
  const v1798 = stdlib.addressEq(v1792, v1797);
  stdlib.assert(v1798, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:315:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:314:29:application call to [unknown function] (defined at: ./index.rsh:314:29:function exp)', 'at ./index.rsh:117:29:application call to "runC_grant0_114" (defined at: ./index.rsh:314:10:function exp)', 'at ./index.rsh:117:29:application call to [unknown function] (defined at: ./index.rsh:117:29:function exp)'],
    msg: 'Only constructor can grant',
    who: 'C_grant'
    });
  const v1805 = ['C_grant0_114', v1794];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1627, v1628, v1629, v1633, v1636, v1637, v1649, v1805],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:314:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1825], secs: v1827, time: v1826, didSend: v1102, from: v1824 } = txn1;
      
      switch (v1825[0]) {
        case 'A_deletePurchase0_114': {
          const v1828 = v1825[1];
          
          break;
          }
        case 'A_deleteSale0_114': {
          const v2190 = v1825[1];
          
          break;
          }
        case 'C_close0_114': {
          const v2552 = v1825[1];
          
          break;
          }
        case 'C_grant0_114': {
          const v2914 = v1825[1];
          sim_r.txns.push({
            kind: 'api',
            who: "C_grant"
            });
          ;
          const v3080 = v2914[stdlib.checkedBigNumberify('./index.rsh:314:10:spread', stdlib.UInt_max, '0')];
          const v3089 = [v1633, v1629, v3080];
          const v3090 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v1628,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:319:26:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:319:26:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc9.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v3090', ctc17, v3090);
          const v3100 = true;
          const v3101 = await txn1.getOutput('C_grant', 'v3100', ctc9, v3100);
          
          const v3107 = v1649.closed;
          const v3109 = v1649.token;
          const v3110 = {
            closed: v3107,
            manager: v3080,
            token: v3109
            };
          const v5446 = v3110;
          const v5448 = v3110.closed;
          if (v5448) {
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
          const v3276 = v1825[1];
          
          break;
          }
        case 'U2_buy0_114': {
          const v3638 = v1825[1];
          
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
  const {data: [v1825], secs: v1827, time: v1826, didSend: v1102, from: v1824 } = txn1;
  switch (v1825[0]) {
    case 'A_deletePurchase0_114': {
      const v1828 = v1825[1];
      return;
      break;
      }
    case 'A_deleteSale0_114': {
      const v2190 = v1825[1];
      return;
      break;
      }
    case 'C_close0_114': {
      const v2552 = v1825[1];
      return;
      break;
      }
    case 'C_grant0_114': {
      const v2914 = v1825[1];
      undefined /* setApiDetails */;
      ;
      const v3080 = v2914[stdlib.checkedBigNumberify('./index.rsh:314:10:spread', stdlib.UInt_max, '0')];
      const v3081 = v1649.manager;
      const v3082 = stdlib.addressEq(v1824, v3081);
      stdlib.assert(v3082, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:315:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:317:13:application call to [unknown function] (defined at: ./index.rsh:317:13:function exp)'],
        msg: 'Only constructor can grant',
        who: 'C_grant'
        });
      const v3089 = [v1633, v1629, v3080];
      const v3090 = undefined /* Remote */;
      const v3091 = await txn1.getOutput('internal', 'v3090', ctc17, v3090);
      const v3093 = v3091[stdlib.checkedBigNumberify('./index.rsh:319:26:application', stdlib.UInt_max, '0')];
      const v3094 = v3091[stdlib.checkedBigNumberify('./index.rsh:319:26:application', stdlib.UInt_max, '1')];
      const v3099 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3093);
      stdlib.assert(v3099, {
        at: './index.rsh:319:26:application',
        fs: ['at ./index.rsh:317:13:application call to [unknown function] (defined at: ./index.rsh:317:13:function exp)'],
        msg: 'remote bill check',
        who: 'C_grant'
        });
      stdlib.assert(v3094, {
        at: './index.rsh:318:18:application',
        fs: ['at ./index.rsh:317:13:application call to [unknown function] (defined at: ./index.rsh:317:13:function exp)'],
        msg: 'Child app rejected grant',
        who: 'C_grant'
        });
      const v3100 = true;
      const v3101 = await txn1.getOutput('C_grant', 'v3100', ctc9, v3100);
      if (v1102) {
        stdlib.protect(ctc0, await interact.out(v2914, v3101), {
          at: './index.rsh:314:11:application',
          fs: ['at ./index.rsh:314:11:application call to [unknown function] (defined at: ./index.rsh:314:11:function exp)', 'at ./index.rsh:322:12:application call to "k" (defined at: ./index.rsh:317:13:function exp)', 'at ./index.rsh:317:13:application call to [unknown function] (defined at: ./index.rsh:317:13:function exp)'],
          msg: 'out',
          who: 'C_grant'
          });
        }
      else {
        }
      
      const v3107 = v1649.closed;
      const v3109 = v1649.token;
      const v3110 = {
        closed: v3107,
        manager: v3080,
        token: v3109
        };
      const v5446 = v3110;
      const v5448 = v3110.closed;
      if (v5448) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'U1_announce0_114': {
      const v3276 = v1825[1];
      return;
      break;
      }
    case 'U2_buy0_114': {
      const v3638 = v1825[1];
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
    lct: stdlib.checkedBigNumberify('./index.rsh:87:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:87:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v1619, time: v1618, didSend: v22, from: v1617 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1619, time: v1618, didSend: v22, from: v1617 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1628, v1629], secs: v1631, time: v1630, didSend: v36, from: v1627 } = txn2;
  ;
  const v1633 = await ctc.getContractInfo();
  const v1636 = [];
  const v1637 = [v1633, v1629];
  const v1638 = undefined /* Remote */;
  const v1639 = await txn2.getOutput('internal', 'v1638', ctc7, v1638);
  const v1641 = v1639[stdlib.checkedBigNumberify('./index.rsh:104:18:application', stdlib.UInt_max, '0')];
  const v1642 = v1639[stdlib.checkedBigNumberify('./index.rsh:104:18:application', stdlib.UInt_max, '1')];
  const v1647 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1641);
  stdlib.assert(v1647, {
    at: './index.rsh:104:18:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Deployer'
    });
  stdlib.assert(v1642, {
    at: './index.rsh:103:10:application',
    fs: [],
    msg: 'Child app not announced as ready',
    who: 'Deployer'
    });
  const v1648 = {
    closed: false,
    manager: v1627,
    token: v1629
    };
  let v1649 = v1648;
  let v1650 = v1630;
  
  let txn3 = txn2;
  while (await (async () => {
    const v1660 = v1649.closed;
    const v1661 = v1660 ? false : true;
    
    return v1661;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1825], secs: v1827, time: v1826, didSend: v1102, from: v1824 } = txn4;
    switch (v1825[0]) {
      case 'A_deletePurchase0_114': {
        const v1828 = v1825[1];
        undefined /* setApiDetails */;
        ;
        const v1852 = v1828[stdlib.checkedBigNumberify('./index.rsh:273:10:spread', stdlib.UInt_max, '0')];
        const v1853 = v1828[stdlib.checkedBigNumberify('./index.rsh:273:10:spread', stdlib.UInt_max, '1')];
        const v1854 = v1828[stdlib.checkedBigNumberify('./index.rsh:273:10:spread', stdlib.UInt_max, '2')];
        const v1855 = [v1852, v1853];
        const v1856 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v1855, ctc3), null);
        const v1857 = {
          None: 0,
          Some: 1
          }[v1856[0]];
        const v1858 = stdlib.eq(v1857, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v1858, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:274:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:280:13:application call to [unknown function] (defined at: ./index.rsh:280:13:function exp)'],
          msg: 'No sale announced',
          who: 'Deployer'
          });
        const v1860 = [v1852, v1853, v1854];
        const v1861 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc9, v1860, ctc2), null);
        const v1862 = {
          None: 0,
          Some: 1
          }[v1861[0]];
        const v1863 = stdlib.eq(v1862, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v1863, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:275:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:280:13:application call to [unknown function] (defined at: ./index.rsh:280:13:function exp)'],
          msg: 'Not purchased',
          who: 'Deployer'
          });
        await stdlib.mapSet(map1, ctc9, v1860, ctc2, undefined /* Nothing */);
        const v1873 = [v1633, v1629, v1852, v1853, v1854];
        const v1874 = ['DeletePurchase', v1873];
        const v1875 = undefined /* Remote */;
        const v1876 = await txn4.getOutput('internal', 'v1875', ctc7, v1875);
        const v1878 = v1876[stdlib.checkedBigNumberify('./index.rsh:283:27:application', stdlib.UInt_max, '0')];
        const v1879 = v1876[stdlib.checkedBigNumberify('./index.rsh:283:27:application', stdlib.UInt_max, '1')];
        const v1884 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1878);
        stdlib.assert(v1884, {
          at: './index.rsh:283:27:application',
          fs: ['at ./index.rsh:280:13:application call to [unknown function] (defined at: ./index.rsh:280:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v1879, {
          at: './index.rsh:282:18:application',
          fs: ['at ./index.rsh:280:13:application call to [unknown function] (defined at: ./index.rsh:280:13:function exp)'],
          msg: 'Child app rejected delete purchase',
          who: 'Deployer'
          });
        const v1885 = true;
        await txn4.getOutput('A_deletePurchase', 'v1885', ctc6, v1885);
        const cv1649 = v1649;
        const cv1650 = v1826;
        
        v1649 = cv1649;
        v1650 = cv1650;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'A_deleteSale0_114': {
        const v2190 = v1825[1];
        undefined /* setApiDetails */;
        ;
        const v2258 = v2190[stdlib.checkedBigNumberify('./index.rsh:237:10:spread', stdlib.UInt_max, '0')];
        const v2259 = v2190[stdlib.checkedBigNumberify('./index.rsh:237:10:spread', stdlib.UInt_max, '1')];
        const v2260 = [v2258, v2259];
        const v2261 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v2260, ctc3), null);
        const v2262 = {
          None: 0,
          Some: 1
          }[v2261[0]];
        const v2263 = stdlib.eq(v2262, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2263, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:238:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:13:function exp)'],
          msg: 'No sale announced',
          who: 'Deployer'
          });
        switch (v2261[0]) {
          case 'None': {
            const v2269 = v2261[1];
            const v2270 = false;
            await txn4.getOutput('A_deleteSale', 'v2270', ctc6, v2270);
            const cv1649 = v1649;
            const cv1650 = v1826;
            
            v1649 = cv1649;
            v1650 = cv1650;
            
            txn3 = txn4;
            continue;
            break;
            }
          case 'Some': {
            const v2280 = v2261[1];
            const v2281 = v2280[stdlib.checkedBigNumberify('./index.rsh:247:21:array', stdlib.UInt_max, '0')];
            const v2282 = v2280[stdlib.checkedBigNumberify('./index.rsh:247:21:array', stdlib.UInt_max, '1')];
            const v2284 = await ctc.getContractAddress();
            const v2285 = [v2281, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2258];
            const v2289 = undefined /* Remote */;
            const v2290 = await txn4.getOutput('internal', 'v2289', ctc16, v2289);
            const v2292 = v2290[stdlib.checkedBigNumberify('./index.rsh:256:19:application', stdlib.UInt_max, '0')];
            const v2293 = v2290[stdlib.checkedBigNumberify('./index.rsh:256:19:application', stdlib.UInt_max, '1')];
            const v2298 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2292);
            stdlib.assert(v2298, {
              at: './index.rsh:256:19:application',
              fs: ['at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:13:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            const v2299 = stdlib.ge(v2293, v2282);
            stdlib.assert(v2299, {
              at: './index.rsh:253:22:application',
              fs: ['at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:13:function exp)'],
              msg: 'Tokens still held',
              who: 'Deployer'
              });
            const v2300 = [v2258, v2284];
            const v2301 = [v2281, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v2300];
            const v2305 = undefined /* Remote */;
            const v2306 = await txn4.getOutput('internal', 'v2305', ctc16, v2305);
            const v2308 = v2306[stdlib.checkedBigNumberify('./index.rsh:262:19:application', stdlib.UInt_max, '0')];
            const v2309 = v2306[stdlib.checkedBigNumberify('./index.rsh:262:19:application', stdlib.UInt_max, '1')];
            const v2314 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2308);
            stdlib.assert(v2314, {
              at: './index.rsh:262:19:application',
              fs: ['at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:13:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            const v2315 = stdlib.ge(v2309, v2282);
            stdlib.assert(v2315, {
              at: './index.rsh:259:22:application',
              fs: ['at ./index.rsh:240:13:application call to [unknown function] (defined at: ./index.rsh:240:13:function exp)'],
              msg: 'Tokens still allowed',
              who: 'Deployer'
              });
            await stdlib.mapSet(map0, ctc10, v2260, ctc3, undefined /* Nothing */);
            const v2317 = true;
            await txn4.getOutput('A_deleteSale', 'v2317', ctc6, v2317);
            const cv1649 = v1649;
            const cv1650 = v1826;
            
            v1649 = cv1649;
            v1650 = cv1650;
            
            txn3 = txn4;
            continue;
            break;
            }
          }
        break;
        }
      case 'C_close0_114': {
        const v2552 = v1825[1];
        undefined /* setApiDetails */;
        ;
        const v2695 = undefined /* Remote */;
        const v2696 = await txn4.getOutput('internal', 'v2695', ctc7, v2695);
        const v2698 = v2696[stdlib.checkedBigNumberify('./index.rsh:306:26:application', stdlib.UInt_max, '0')];
        const v2699 = v2696[stdlib.checkedBigNumberify('./index.rsh:306:26:application', stdlib.UInt_max, '1')];
        const v2704 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2698);
        stdlib.assert(v2704, {
          at: './index.rsh:306:26:application',
          fs: ['at ./index.rsh:304:13:application call to [unknown function] (defined at: ./index.rsh:304:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v2699, {
          at: './index.rsh:305:18:application',
          fs: ['at ./index.rsh:304:13:application call to [unknown function] (defined at: ./index.rsh:304:13:function exp)'],
          msg: 'Child app rejected close',
          who: 'Deployer'
          });
        const v2705 = true;
        await txn4.getOutput('C_close', 'v2705', ctc6, v2705);
        const v2712 = v1649.manager;
        const v2713 = v1649.token;
        const v2714 = {
          closed: true,
          manager: v2712,
          token: v2713
          };
        const cv1649 = v2714;
        const cv1650 = v1826;
        
        v1649 = cv1649;
        v1650 = cv1650;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'C_grant0_114': {
        const v2914 = v1825[1];
        undefined /* setApiDetails */;
        ;
        const v3080 = v2914[stdlib.checkedBigNumberify('./index.rsh:314:10:spread', stdlib.UInt_max, '0')];
        const v3081 = v1649.manager;
        const v3082 = stdlib.addressEq(v1824, v3081);
        stdlib.assert(v3082, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:315:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:317:13:application call to [unknown function] (defined at: ./index.rsh:317:13:function exp)'],
          msg: 'Only constructor can grant',
          who: 'Deployer'
          });
        const v3089 = [v1633, v1629, v3080];
        const v3090 = undefined /* Remote */;
        const v3091 = await txn4.getOutput('internal', 'v3090', ctc7, v3090);
        const v3093 = v3091[stdlib.checkedBigNumberify('./index.rsh:319:26:application', stdlib.UInt_max, '0')];
        const v3094 = v3091[stdlib.checkedBigNumberify('./index.rsh:319:26:application', stdlib.UInt_max, '1')];
        const v3099 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3093);
        stdlib.assert(v3099, {
          at: './index.rsh:319:26:application',
          fs: ['at ./index.rsh:317:13:application call to [unknown function] (defined at: ./index.rsh:317:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v3094, {
          at: './index.rsh:318:18:application',
          fs: ['at ./index.rsh:317:13:application call to [unknown function] (defined at: ./index.rsh:317:13:function exp)'],
          msg: 'Child app rejected grant',
          who: 'Deployer'
          });
        const v3100 = true;
        await txn4.getOutput('C_grant', 'v3100', ctc6, v3100);
        const v3107 = v1649.closed;
        const v3109 = v1649.token;
        const v3110 = {
          closed: v3107,
          manager: v3080,
          token: v3109
          };
        const cv1649 = v3110;
        const cv1650 = v1826;
        
        v1649 = cv1649;
        v1650 = cv1650;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U1_announce0_114': {
        const v3276 = v1825[1];
        undefined /* setApiDetails */;
        ;
        const v3476 = v3276[stdlib.checkedBigNumberify('./index.rsh:129:10:spread', stdlib.UInt_max, '0')];
        const v3477 = v3276[stdlib.checkedBigNumberify('./index.rsh:129:10:spread', stdlib.UInt_max, '1')];
        const v3478 = v3276[stdlib.checkedBigNumberify('./index.rsh:129:10:spread', stdlib.UInt_max, '2')];
        const v3479 = v3276[stdlib.checkedBigNumberify('./index.rsh:129:10:spread', stdlib.UInt_max, '3')];
        const v3480 = [v1824, v3476];
        const v3481 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v3480, ctc3), null);
        const v3482 = {
          None: 0,
          Some: 1
          }[v3481[0]];
        const v3483 = stdlib.eq(v3482, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3483, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:130:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
          msg: 'already announced',
          who: 'Deployer'
          });
        const v3485 = stdlib.gt(v3478, stdlib.checkedBigNumberify('./index.rsh:131:19:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v3485, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:131:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
          msg: 'Must sell at least one token',
          who: 'Deployer'
          });
        const v3487 = stdlib.gt(v3479, stdlib.checkedBigNumberify('./index.rsh:132:19:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v3487, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:132:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
          msg: 'Price must be positive',
          who: 'Deployer'
          });
        const v3493 = await ctc.getContractAddress();
        const v3494 = [v1824, v3493];
        const v3495 = [v3477, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v3494];
        const v3500 = undefined /* Remote */;
        const v3501 = await txn4.getOutput('internal', 'v3500', ctc16, v3500);
        const v3503 = v3501[stdlib.checkedBigNumberify('./index.rsh:142:15:application', stdlib.UInt_max, '0')];
        const v3504 = v3501[stdlib.checkedBigNumberify('./index.rsh:142:15:application', stdlib.UInt_max, '1')];
        const v3509 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3503);
        stdlib.assert(v3509, {
          at: './index.rsh:142:15:application',
          fs: ['at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v3510 = stdlib.ge(v3504, v3478);
        stdlib.assert(v3510, {
          at: './index.rsh:139:18:application',
          fs: ['at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
          msg: 'Not enough allowance',
          who: 'Deployer'
          });
        const v3511 = [v3477, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1824];
        const v3515 = undefined /* Remote */;
        const v3516 = await txn4.getOutput('internal', 'v3515', ctc16, v3515);
        const v3518 = v3516[stdlib.checkedBigNumberify('./index.rsh:148:15:application', stdlib.UInt_max, '0')];
        const v3519 = v3516[stdlib.checkedBigNumberify('./index.rsh:148:15:application', stdlib.UInt_max, '1')];
        const v3524 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3518);
        stdlib.assert(v3524, {
          at: './index.rsh:148:15:application',
          fs: ['at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v3525 = stdlib.ge(v3519, v3478);
        stdlib.assert(v3525, {
          at: './index.rsh:145:18:application',
          fs: ['at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
          msg: 'Not enough tokens',
          who: 'Deployer'
          });
        const v3530 = [v1633, v1629, v1824, v3476, v3477, v3478, v3479];
        const v3531 = undefined /* Remote */;
        const v3532 = await txn4.getOutput('internal', 'v3531', ctc7, v3531);
        const v3534 = v3532[stdlib.checkedBigNumberify('./index.rsh:152:29:application', stdlib.UInt_max, '0')];
        const v3535 = v3532[stdlib.checkedBigNumberify('./index.rsh:152:29:application', stdlib.UInt_max, '1')];
        const v3540 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3534);
        stdlib.assert(v3540, {
          at: './index.rsh:152:29:application',
          fs: ['at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v3535, {
          at: './index.rsh:151:18:application',
          fs: ['at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
          msg: 'Child app rejected announce',
          who: 'Deployer'
          });
        const v3542 = [v3477, v3478, v3479];
        await stdlib.mapSet(map0, ctc10, v3480, ctc3, v3542);
        const v3543 = true;
        await txn4.getOutput('U1_announce', 'v3543', ctc6, v3543);
        const cv1649 = v1649;
        const cv1650 = v1826;
        
        v1649 = cv1649;
        v1650 = cv1650;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U2_buy0_114': {
        const v3638 = v1825[1];
        undefined /* setApiDetails */;
        const v3648 = v3638[stdlib.checkedBigNumberify('./index.rsh:170:10:spread', stdlib.UInt_max, '0')];
        const v3649 = v3638[stdlib.checkedBigNumberify('./index.rsh:170:10:spread', stdlib.UInt_max, '1')];
        const v3650 = v3638[stdlib.checkedBigNumberify('./index.rsh:170:10:spread', stdlib.UInt_max, '2')];
        const v3651 = [v3648, v3649];
        const v3652 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v3651, ctc3), null);
        const v3653 = {
          None: 0,
          Some: 1
          }[v3652[0]];
        const v3654 = stdlib.eq(v3653, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3654, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:171:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:52:application call to [unknown function] (defined at: ./index.rsh:170:52:function exp)', 'at ./index.rsh:117:29:application call to [unknown function] (defined at: ./index.rsh:170:52:function exp)', 'at ./index.rsh:117:29:application call to [unknown function] (defined at: ./index.rsh:117:29:function exp)'],
          msg: 'No sale announced',
          who: 'Deployer'
          });
        const v3656 = stdlib.eq(v3650, stdlib.checkedBigNumberify('./index.rsh:172:20:decimal', stdlib.UInt_max, '0'));
        const v3657 = v3656 ? false : true;
        stdlib.assert(v3657, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:172:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:52:application call to [unknown function] (defined at: ./index.rsh:170:52:function exp)', 'at ./index.rsh:117:29:application call to [unknown function] (defined at: ./index.rsh:170:52:function exp)', 'at ./index.rsh:117:29:application call to [unknown function] (defined at: ./index.rsh:117:29:function exp)'],
          msg: 'Must pay something',
          who: 'Deployer'
          });
        ;
        switch (v3652[0]) {
          case 'None': {
            const v3933 = v3652[1];
            ;
            const v3938 = stdlib.checkedBigNumberify('./index.rsh:190:17:decimal', stdlib.UInt_max, '0');
            await txn4.getOutput('U2_buy', 'v3938', ctc2, v3938);
            const cv1649 = v1649;
            const cv1650 = v1826;
            
            v1649 = cv1649;
            v1650 = cv1650;
            
            txn3 = txn4;
            continue;
            break;
            }
          case 'Some': {
            const v3949 = v3652[1];
            const v3950 = v3949[stdlib.checkedBigNumberify('./index.rsh:193:21:array', stdlib.UInt_max, '0')];
            const v3951 = v3949[stdlib.checkedBigNumberify('./index.rsh:193:21:array', stdlib.UInt_max, '1')];
            const v3952 = v3949[stdlib.checkedBigNumberify('./index.rsh:193:21:array', stdlib.UInt_max, '2')];
            const v3953 = await ctc.getContractAddress();
            const v3954 = stdlib.safeDiv(v3650, v3952);
            const v3955 = stdlib.safeMul(v3954, v3952);
            const v3956 = stdlib.safeSub(v3650, v3955);
            const v3957 = stdlib.safeMul(v3951, v3954);
            const v3958 = [v3648, v3649, v1824];
            const v3960 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc9, v3958, ctc2), null);
            const v3961 = stdlib.fromSome(v3960, stdlib.checkedBigNumberify('./index.rsh:206:70:decimal', stdlib.UInt_max, '0'));
            const v3962 = stdlib.safeAdd(v3961, v3957);
            await stdlib.mapSet(map1, ctc9, v3958, ctc2, v3962);
            const v3963 = [v3950, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3648];
            const v3964 = [v3950, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1824];
            const v3965 = [v3648, v3953];
            const v3966 = [v3950, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v3965];
            const v3970 = undefined /* Remote */;
            const v3971 = await txn4.getOutput('internal', 'v3970', ctc7, v3970);
            const v3973 = v3971[stdlib.checkedBigNumberify('./index.rsh:216:19:application', stdlib.UInt_max, '0')];
            const v3974 = v3971[stdlib.checkedBigNumberify('./index.rsh:216:19:application', stdlib.UInt_max, '1')];
            const v3979 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3973);
            stdlib.assert(v3979, {
              at: './index.rsh:216:19:application',
              fs: ['at ./index.rsh:185:13:application call to [unknown function] (defined at: ./index.rsh:185:13:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            stdlib.assert(v3974, {
              at: './index.rsh:209:22:application',
              fs: ['at ./index.rsh:185:13:application call to [unknown function] (defined at: ./index.rsh:185:13:function exp)'],
              msg: 'Transfer failed',
              who: 'Deployer'
              });
            const v3981 = [v1633, v1629, v3648, v3649, v3650, v1824, v3957];
            null;
            ;
            ;
            await txn4.getOutput('U2_buy', 'v3957', ctc2, v3957);
            const cv1649 = v1649;
            const cv1650 = v1826;
            
            v1649 = cv1649;
            v1650 = cv1650;
            
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
  const ctc18 = stdlib.T_Tuple([ctc2, ctc9]);
  const ctc19 = stdlib.T_Tuple([ctc1, ctc2, ctc12]);
  const ctc20 = stdlib.T_Tuple([ctc1, ctc2, ctc6]);
  
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
  
  
  const [v1627, v1628, v1629, v1633, v1636, v1637, v1649] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc1, ctc1, ctc1, ctc7, ctc8, ctc10]);
  const v1672 = ctc.selfAddress();
  const v1674 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:129:56:application call to [unknown function] (defined at: ./index.rsh:129:56:function exp)', 'at ./index.rsh:117:29:application call to "runU1_announce0_114" (defined at: ./index.rsh:129:10:function exp)', 'at ./index.rsh:117:29:application call to [unknown function] (defined at: ./index.rsh:117:29:function exp)'],
    msg: 'in',
    who: 'U1_announce'
    });
  const v1675 = v1674[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1677 = v1674[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v1678 = v1674[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '3')];
  const v1683 = [v1672, v1675];
  const v1684 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc12, v1683, ctc3), null);
  const v1685 = {
    None: 0,
    Some: 1
    }[v1684[0]];
  const v1686 = stdlib.eq(v1685, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v1686, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:130:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:129:56:application call to [unknown function] (defined at: ./index.rsh:129:56:function exp)', 'at ./index.rsh:117:29:application call to "runU1_announce0_114" (defined at: ./index.rsh:129:10:function exp)', 'at ./index.rsh:117:29:application call to [unknown function] (defined at: ./index.rsh:117:29:function exp)'],
    msg: 'already announced',
    who: 'U1_announce'
    });
  const v1688 = stdlib.gt(v1677, stdlib.checkedBigNumberify('./index.rsh:131:19:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1688, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:131:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:129:56:application call to [unknown function] (defined at: ./index.rsh:129:56:function exp)', 'at ./index.rsh:117:29:application call to "runU1_announce0_114" (defined at: ./index.rsh:129:10:function exp)', 'at ./index.rsh:117:29:application call to [unknown function] (defined at: ./index.rsh:117:29:function exp)'],
    msg: 'Must sell at least one token',
    who: 'U1_announce'
    });
  const v1690 = stdlib.gt(v1678, stdlib.checkedBigNumberify('./index.rsh:132:19:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1690, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:132:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:129:56:application call to [unknown function] (defined at: ./index.rsh:129:56:function exp)', 'at ./index.rsh:117:29:application call to "runU1_announce0_114" (defined at: ./index.rsh:129:10:function exp)', 'at ./index.rsh:117:29:application call to [unknown function] (defined at: ./index.rsh:117:29:function exp)'],
    msg: 'Price must be positive',
    who: 'U1_announce'
    });
  const v1703 = ['U1_announce0_114', v1674];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1627, v1628, v1629, v1633, v1636, v1637, v1649, v1703],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:129:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1825], secs: v1827, time: v1826, didSend: v1102, from: v1824 } = txn1;
      
      switch (v1825[0]) {
        case 'A_deletePurchase0_114': {
          const v1828 = v1825[1];
          
          break;
          }
        case 'A_deleteSale0_114': {
          const v2190 = v1825[1];
          
          break;
          }
        case 'C_close0_114': {
          const v2552 = v1825[1];
          
          break;
          }
        case 'C_grant0_114': {
          const v2914 = v1825[1];
          
          break;
          }
        case 'U1_announce0_114': {
          const v3276 = v1825[1];
          sim_r.txns.push({
            kind: 'api',
            who: "U1_announce"
            });
          ;
          const v3476 = v3276[stdlib.checkedBigNumberify('./index.rsh:129:10:spread', stdlib.UInt_max, '0')];
          const v3477 = v3276[stdlib.checkedBigNumberify('./index.rsh:129:10:spread', stdlib.UInt_max, '1')];
          const v3478 = v3276[stdlib.checkedBigNumberify('./index.rsh:129:10:spread', stdlib.UInt_max, '2')];
          const v3479 = v3276[stdlib.checkedBigNumberify('./index.rsh:129:10:spread', stdlib.UInt_max, '3')];
          const v3480 = [v1824, v3476];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc12, v3480, ctc3), null);
          const v3493 = await ctc.getContractAddress();
          const v3494 = [v1824, v3493];
          const v3495 = [v3477, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v3494];
          const v3500 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v3477,
              remote: ({
                accs: [v1824, v3493],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:142:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc19, v3495]],
                fees: stdlib.checkedBigNumberify('./index.rsh:140:34:application', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:142:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc2.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v3500', ctc17, v3500);
          const v3511 = [v3477, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1824];
          const v3515 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v3477,
              remote: ({
                accs: [v1824],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:148:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc20, v3511]],
                fees: stdlib.checkedBigNumberify('./index.rsh:146:34:application', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:148:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc2.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v3515', ctc17, v3515);
          const v3530 = [v1633, v1629, v1824, v3476, v3477, v3478, v3479];
          const v3531 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v1628,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:152:29:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:152:29:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc9.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v3531', ctc18, v3531);
          const v3542 = [v3477, v3478, v3479];
          await stdlib.simMapSet(sim_r, 0, ctc12, v3480, ctc3, v3542);
          const v3543 = true;
          const v3544 = await txn1.getOutput('U1_announce', 'v3543', ctc9, v3543);
          
          const v5482 = v1649;
          const v5484 = v1649.closed;
          if (v5484) {
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
          const v3638 = v1825[1];
          
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
  const {data: [v1825], secs: v1827, time: v1826, didSend: v1102, from: v1824 } = txn1;
  switch (v1825[0]) {
    case 'A_deletePurchase0_114': {
      const v1828 = v1825[1];
      return;
      break;
      }
    case 'A_deleteSale0_114': {
      const v2190 = v1825[1];
      return;
      break;
      }
    case 'C_close0_114': {
      const v2552 = v1825[1];
      return;
      break;
      }
    case 'C_grant0_114': {
      const v2914 = v1825[1];
      return;
      break;
      }
    case 'U1_announce0_114': {
      const v3276 = v1825[1];
      undefined /* setApiDetails */;
      ;
      const v3476 = v3276[stdlib.checkedBigNumberify('./index.rsh:129:10:spread', stdlib.UInt_max, '0')];
      const v3477 = v3276[stdlib.checkedBigNumberify('./index.rsh:129:10:spread', stdlib.UInt_max, '1')];
      const v3478 = v3276[stdlib.checkedBigNumberify('./index.rsh:129:10:spread', stdlib.UInt_max, '2')];
      const v3479 = v3276[stdlib.checkedBigNumberify('./index.rsh:129:10:spread', stdlib.UInt_max, '3')];
      const v3480 = [v1824, v3476];
      const v3481 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc12, v3480, ctc3), null);
      const v3482 = {
        None: 0,
        Some: 1
        }[v3481[0]];
      const v3483 = stdlib.eq(v3482, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v3483, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:130:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
        msg: 'already announced',
        who: 'U1_announce'
        });
      const v3485 = stdlib.gt(v3478, stdlib.checkedBigNumberify('./index.rsh:131:19:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v3485, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:131:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
        msg: 'Must sell at least one token',
        who: 'U1_announce'
        });
      const v3487 = stdlib.gt(v3479, stdlib.checkedBigNumberify('./index.rsh:132:19:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v3487, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:132:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
        msg: 'Price must be positive',
        who: 'U1_announce'
        });
      const v3493 = await ctc.getContractAddress();
      const v3494 = [v1824, v3493];
      const v3495 = [v3477, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v3494];
      const v3500 = undefined /* Remote */;
      const v3501 = await txn1.getOutput('internal', 'v3500', ctc17, v3500);
      const v3503 = v3501[stdlib.checkedBigNumberify('./index.rsh:142:15:application', stdlib.UInt_max, '0')];
      const v3504 = v3501[stdlib.checkedBigNumberify('./index.rsh:142:15:application', stdlib.UInt_max, '1')];
      const v3509 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3503);
      stdlib.assert(v3509, {
        at: './index.rsh:142:15:application',
        fs: ['at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
        msg: 'remote bill check',
        who: 'U1_announce'
        });
      const v3510 = stdlib.ge(v3504, v3478);
      stdlib.assert(v3510, {
        at: './index.rsh:139:18:application',
        fs: ['at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
        msg: 'Not enough allowance',
        who: 'U1_announce'
        });
      const v3511 = [v3477, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1824];
      const v3515 = undefined /* Remote */;
      const v3516 = await txn1.getOutput('internal', 'v3515', ctc17, v3515);
      const v3518 = v3516[stdlib.checkedBigNumberify('./index.rsh:148:15:application', stdlib.UInt_max, '0')];
      const v3519 = v3516[stdlib.checkedBigNumberify('./index.rsh:148:15:application', stdlib.UInt_max, '1')];
      const v3524 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3518);
      stdlib.assert(v3524, {
        at: './index.rsh:148:15:application',
        fs: ['at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
        msg: 'remote bill check',
        who: 'U1_announce'
        });
      const v3525 = stdlib.ge(v3519, v3478);
      stdlib.assert(v3525, {
        at: './index.rsh:145:18:application',
        fs: ['at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
        msg: 'Not enough tokens',
        who: 'U1_announce'
        });
      const v3530 = [v1633, v1629, v1824, v3476, v3477, v3478, v3479];
      const v3531 = undefined /* Remote */;
      const v3532 = await txn1.getOutput('internal', 'v3531', ctc18, v3531);
      const v3534 = v3532[stdlib.checkedBigNumberify('./index.rsh:152:29:application', stdlib.UInt_max, '0')];
      const v3535 = v3532[stdlib.checkedBigNumberify('./index.rsh:152:29:application', stdlib.UInt_max, '1')];
      const v3540 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3534);
      stdlib.assert(v3540, {
        at: './index.rsh:152:29:application',
        fs: ['at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
        msg: 'remote bill check',
        who: 'U1_announce'
        });
      stdlib.assert(v3535, {
        at: './index.rsh:151:18:application',
        fs: ['at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
        msg: 'Child app rejected announce',
        who: 'U1_announce'
        });
      const v3542 = [v3477, v3478, v3479];
      await stdlib.mapSet(map0, ctc12, v3480, ctc3, v3542);
      const v3543 = true;
      const v3544 = await txn1.getOutput('U1_announce', 'v3543', ctc9, v3543);
      if (v1102) {
        stdlib.protect(ctc0, await interact.out(v3276, v3544), {
          at: './index.rsh:129:11:application',
          fs: ['at ./index.rsh:129:11:application call to [unknown function] (defined at: ./index.rsh:129:11:function exp)', 'at ./index.rsh:164:12:application call to "k" (defined at: ./index.rsh:134:13:function exp)', 'at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:13:function exp)'],
          msg: 'out',
          who: 'U1_announce'
          });
        }
      else {
        }
      
      const v5482 = v1649;
      const v5484 = v1649.closed;
      if (v5484) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'U2_buy0_114': {
      const v3638 = v1825[1];
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
  
  
  const [v1627, v1628, v1629, v1633, v1636, v1637, v1649] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc1, ctc1, ctc1, ctc7, ctc8, ctc10]);
  const v1707 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:170:52:application call to [unknown function] (defined at: ./index.rsh:170:52:function exp)', 'at ./index.rsh:117:29:application call to "runU2_buy0_114" (defined at: ./index.rsh:170:10:function exp)', 'at ./index.rsh:117:29:application call to [unknown function] (defined at: ./index.rsh:117:29:function exp)'],
    msg: 'in',
    who: 'U2_buy'
    });
  const v1708 = v1707[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1709 = v1707[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1710 = v1707[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v1714 = [v1708, v1709];
  const v1715 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc12, v1714, ctc3), null);
  const v1716 = {
    None: 0,
    Some: 1
    }[v1715[0]];
  const v1717 = stdlib.eq(v1716, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1717, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:171:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:52:application call to [unknown function] (defined at: ./index.rsh:170:52:function exp)', 'at ./index.rsh:117:29:application call to "runU2_buy0_114" (defined at: ./index.rsh:170:10:function exp)', 'at ./index.rsh:117:29:application call to [unknown function] (defined at: ./index.rsh:117:29:function exp)'],
    msg: 'No sale announced',
    who: 'U2_buy'
    });
  const v1719 = stdlib.eq(v1710, stdlib.checkedBigNumberify('./index.rsh:172:20:decimal', stdlib.UInt_max, '0'));
  const v1720 = v1719 ? false : true;
  stdlib.assert(v1720, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:172:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:52:application call to [unknown function] (defined at: ./index.rsh:170:52:function exp)', 'at ./index.rsh:117:29:application call to "runU2_buy0_114" (defined at: ./index.rsh:170:10:function exp)', 'at ./index.rsh:117:29:application call to [unknown function] (defined at: ./index.rsh:117:29:function exp)'],
    msg: 'Must pay something',
    who: 'U2_buy'
    });
  const v1731 = ['U2_buy0_114', v1707];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1627, v1628, v1629, v1633, v1636, v1637, v1649, v1731],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [v1710, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1825], secs: v1827, time: v1826, didSend: v1102, from: v1824 } = txn1;
      
      switch (v1825[0]) {
        case 'A_deletePurchase0_114': {
          const v1828 = v1825[1];
          
          break;
          }
        case 'A_deleteSale0_114': {
          const v2190 = v1825[1];
          
          break;
          }
        case 'C_close0_114': {
          const v2552 = v1825[1];
          
          break;
          }
        case 'C_grant0_114': {
          const v2914 = v1825[1];
          
          break;
          }
        case 'U1_announce0_114': {
          const v3276 = v1825[1];
          
          break;
          }
        case 'U2_buy0_114': {
          const v3638 = v1825[1];
          sim_r.txns.push({
            kind: 'api',
            who: "U2_buy"
            });
          const v3648 = v3638[stdlib.checkedBigNumberify('./index.rsh:170:10:spread', stdlib.UInt_max, '0')];
          const v3649 = v3638[stdlib.checkedBigNumberify('./index.rsh:170:10:spread', stdlib.UInt_max, '1')];
          const v3650 = v3638[stdlib.checkedBigNumberify('./index.rsh:170:10:spread', stdlib.UInt_max, '2')];
          const v3651 = [v3648, v3649];
          const v3652 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc12, v3651, ctc3), null);
          sim_r.txns.push({
            amt: v3650,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          switch (v3652[0]) {
            case 'None': {
              const v3933 = v3652[1];
              sim_r.txns.push({
                kind: 'from',
                to: v1824,
                tok: undefined /* Nothing */
                });
              const v3938 = stdlib.checkedBigNumberify('./index.rsh:190:17:decimal', stdlib.UInt_max, '0');
              const v3939 = await txn1.getOutput('U2_buy', 'v3938', ctc2, v3938);
              
              const v5518 = v1649;
              const v5520 = v1649.closed;
              if (v5520) {
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
              const v3949 = v3652[1];
              const v3950 = v3949[stdlib.checkedBigNumberify('./index.rsh:193:21:array', stdlib.UInt_max, '0')];
              const v3951 = v3949[stdlib.checkedBigNumberify('./index.rsh:193:21:array', stdlib.UInt_max, '1')];
              const v3952 = v3949[stdlib.checkedBigNumberify('./index.rsh:193:21:array', stdlib.UInt_max, '2')];
              const v3953 = await ctc.getContractAddress();
              const v3954 = stdlib.safeDiv(v3650, v3952);
              const v3955 = stdlib.safeMul(v3954, v3952);
              const v3956 = stdlib.safeSub(v3650, v3955);
              const v3957 = stdlib.safeMul(v3951, v3954);
              const v3958 = [v3648, v3649, v1824];
              const v3960 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc13, v3958, ctc2), null);
              const v3961 = stdlib.fromSome(v3960, stdlib.checkedBigNumberify('./index.rsh:206:70:decimal', stdlib.UInt_max, '0'));
              const v3962 = stdlib.safeAdd(v3961, v3957);
              await stdlib.simMapSet(sim_r, 1, ctc13, v3958, ctc2, v3962);
              const v3963 = [v3950, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3648];
              const v3964 = [v3950, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1824];
              const v3965 = [v3648, v3953];
              const v3966 = [v3950, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v3965];
              const v3970 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v3950,
                  remote: ({
                    accs: [v3648, v1824],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:216:19:application', stdlib.UInt_max, '0'),
                    boxes: [[ctc18, v3963], [ctc18, v3964], [ctc19, v3966]],
                    fees: stdlib.checkedBigNumberify('./index.rsh:210:44:application', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:216:19:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc9.defaultValue /* simReturnVal */];})();
              await txn1.getOutput('internal', 'v3970', ctc17, v3970);
              const v3981 = [v1633, v1629, v3648, v3649, v3650, v1824, v3957];
              null;
              sim_r.txns.push({
                kind: 'from',
                to: v3648,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v1824,
                tok: undefined /* Nothing */
                });
              const v3990 = await txn1.getOutput('U2_buy', 'v3957', ctc2, v3957);
              
              const v5522 = v1649;
              const v5524 = v1649.closed;
              if (v5524) {
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
  const {data: [v1825], secs: v1827, time: v1826, didSend: v1102, from: v1824 } = txn1;
  switch (v1825[0]) {
    case 'A_deletePurchase0_114': {
      const v1828 = v1825[1];
      return;
      break;
      }
    case 'A_deleteSale0_114': {
      const v2190 = v1825[1];
      return;
      break;
      }
    case 'C_close0_114': {
      const v2552 = v1825[1];
      return;
      break;
      }
    case 'C_grant0_114': {
      const v2914 = v1825[1];
      return;
      break;
      }
    case 'U1_announce0_114': {
      const v3276 = v1825[1];
      return;
      break;
      }
    case 'U2_buy0_114': {
      const v3638 = v1825[1];
      undefined /* setApiDetails */;
      const v3648 = v3638[stdlib.checkedBigNumberify('./index.rsh:170:10:spread', stdlib.UInt_max, '0')];
      const v3649 = v3638[stdlib.checkedBigNumberify('./index.rsh:170:10:spread', stdlib.UInt_max, '1')];
      const v3650 = v3638[stdlib.checkedBigNumberify('./index.rsh:170:10:spread', stdlib.UInt_max, '2')];
      const v3651 = [v3648, v3649];
      const v3652 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc12, v3651, ctc3), null);
      const v3653 = {
        None: 0,
        Some: 1
        }[v3652[0]];
      const v3654 = stdlib.eq(v3653, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3654, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:171:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:52:application call to [unknown function] (defined at: ./index.rsh:170:52:function exp)', 'at ./index.rsh:117:29:application call to [unknown function] (defined at: ./index.rsh:170:52:function exp)', 'at ./index.rsh:117:29:application call to [unknown function] (defined at: ./index.rsh:117:29:function exp)'],
        msg: 'No sale announced',
        who: 'U2_buy'
        });
      const v3656 = stdlib.eq(v3650, stdlib.checkedBigNumberify('./index.rsh:172:20:decimal', stdlib.UInt_max, '0'));
      const v3657 = v3656 ? false : true;
      stdlib.assert(v3657, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:172:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:52:application call to [unknown function] (defined at: ./index.rsh:170:52:function exp)', 'at ./index.rsh:117:29:application call to [unknown function] (defined at: ./index.rsh:170:52:function exp)', 'at ./index.rsh:117:29:application call to [unknown function] (defined at: ./index.rsh:117:29:function exp)'],
        msg: 'Must pay something',
        who: 'U2_buy'
        });
      ;
      switch (v3652[0]) {
        case 'None': {
          const v3933 = v3652[1];
          ;
          const v3938 = stdlib.checkedBigNumberify('./index.rsh:190:17:decimal', stdlib.UInt_max, '0');
          const v3939 = await txn1.getOutput('U2_buy', 'v3938', ctc2, v3938);
          if (v1102) {
            stdlib.protect(ctc0, await interact.out(v3638, v3939), {
              at: './index.rsh:170:11:application',
              fs: ['at ./index.rsh:170:11:application call to [unknown function] (defined at: ./index.rsh:170:11:function exp)', 'at ./index.rsh:190:16:application call to "k" (defined at: ./index.rsh:185:13:function exp)', 'at ./index.rsh:185:13:application call to [unknown function] (defined at: ./index.rsh:185:13:function exp)'],
              msg: 'out',
              who: 'U2_buy'
              });
            }
          else {
            }
          
          const v5518 = v1649;
          const v5520 = v1649.closed;
          if (v5520) {
            return;
            }
          else {
            return;
            }
          break;
          }
        case 'Some': {
          const v3949 = v3652[1];
          const v3950 = v3949[stdlib.checkedBigNumberify('./index.rsh:193:21:array', stdlib.UInt_max, '0')];
          const v3951 = v3949[stdlib.checkedBigNumberify('./index.rsh:193:21:array', stdlib.UInt_max, '1')];
          const v3952 = v3949[stdlib.checkedBigNumberify('./index.rsh:193:21:array', stdlib.UInt_max, '2')];
          const v3953 = await ctc.getContractAddress();
          const v3954 = stdlib.safeDiv(v3650, v3952);
          const v3955 = stdlib.safeMul(v3954, v3952);
          const v3956 = stdlib.safeSub(v3650, v3955);
          const v3957 = stdlib.safeMul(v3951, v3954);
          const v3958 = [v3648, v3649, v1824];
          const v3960 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc13, v3958, ctc2), null);
          const v3961 = stdlib.fromSome(v3960, stdlib.checkedBigNumberify('./index.rsh:206:70:decimal', stdlib.UInt_max, '0'));
          const v3962 = stdlib.safeAdd(v3961, v3957);
          await stdlib.mapSet(map1, ctc13, v3958, ctc2, v3962);
          const v3963 = [v3950, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3648];
          const v3964 = [v3950, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1824];
          const v3965 = [v3648, v3953];
          const v3966 = [v3950, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v3965];
          const v3970 = undefined /* Remote */;
          const v3971 = await txn1.getOutput('internal', 'v3970', ctc17, v3970);
          const v3973 = v3971[stdlib.checkedBigNumberify('./index.rsh:216:19:application', stdlib.UInt_max, '0')];
          const v3974 = v3971[stdlib.checkedBigNumberify('./index.rsh:216:19:application', stdlib.UInt_max, '1')];
          const v3979 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3973);
          stdlib.assert(v3979, {
            at: './index.rsh:216:19:application',
            fs: ['at ./index.rsh:185:13:application call to [unknown function] (defined at: ./index.rsh:185:13:function exp)'],
            msg: 'remote bill check',
            who: 'U2_buy'
            });
          stdlib.assert(v3974, {
            at: './index.rsh:209:22:application',
            fs: ['at ./index.rsh:185:13:application call to [unknown function] (defined at: ./index.rsh:185:13:function exp)'],
            msg: 'Transfer failed',
            who: 'U2_buy'
            });
          const v3981 = [v1633, v1629, v3648, v3649, v3650, v1824, v3957];
          null;
          ;
          ;
          const v3990 = await txn1.getOutput('U2_buy', 'v3957', ctc2, v3957);
          if (v1102) {
            stdlib.protect(ctc0, await interact.out(v3638, v3990), {
              at: './index.rsh:170:11:application',
              fs: ['at ./index.rsh:170:11:application call to [unknown function] (defined at: ./index.rsh:170:11:function exp)', 'at ./index.rsh:231:16:application call to "k" (defined at: ./index.rsh:185:13:function exp)', 'at ./index.rsh:185:13:application call to [unknown function] (defined at: ./index.rsh:185:13:function exp)'],
              msg: 'out',
              who: 'U2_buy'
              });
            }
          else {
            }
          
          const v5522 = v1649;
          const v5524 = v1649.closed;
          if (v5524) {
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
  appApproval: `CCAOAAgBBgQYKEDEkAEgMMTCAXEQJgcABWFwcElEAQAIAAAAAAAAAAEBAQRGe8ekBBcFCr0xGEEHvShkSSJbNQEjWzUCKmSCDAQKlMQ2BAxGj4AEIvrlTwREPaYQBHbW8zUEh/2DTASbpwsaBK6DF/kEwZStmQTCth2DBNhR3icE/RhxPDYaAI4MAQEHPwdKAF0AegpWCkQAAQctAOoHdQE2ADYaATYaAjYaAzULNQw1DSOvKjQNNAxQNAtQUFA1CyEENAESRIgKVTQLIls1DDQLVwhhNQ2ABNKKwis0DBZQNA1QsDQMiApmNA0iVY0GCdYJ4AceByEHJAcuQv+jNhoBNhoCNQs1DCOvJwQ0DDQLUFAyA1BQNQtC/6WAaQAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv81NhoBNQsjr4ABAzQLUCEHr1BQNQtC/x42GgE2GgIXNhoDFzYaBBc1CzUMNQ01DiOvgAEENA40DRZQNAwWUDQLFlBQIQavUFA1C0L+6TYaATYaAjYaAxc1CzUMNQ0jr4ABBTQNNAxQNAsWUFAhBa9QUDULQv7ANAtXACA1FjQLVyAgNQ00C1dAIDUMKCEFryOvNBY0DVBQAYgI7iJVIhJENBY0DVA0DFA1Cygjrys0C1ABiAjUIlUkEkQhCCs0C1ABiAlQKTQUFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJbIQNBSyGIAEi4rEBLIaKjQSFjQTFlA0FlA0DVA0DFBQshqzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAAAdTNAtQsDQLNQwiNAwiWxJENAxXCAEXRCQ1C4AIAAAAAAAAB100CxZRBwhQsDQLFlEHCDUEMgY1DjQPVwABF0EHtzEZgQUSRIgIbiIyCjIJiAitNANAAAqABBUffHU0BFCwJEM0C1cAIEk1DTQLVyAgUDUMKCEFryOvNAxQAYgH6Uk1FiJVJBJENBYiVY0CBPcFG0L9Yik0FBZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASWyEDQUshiABGUtPKuyGjQQshqzMgpgNAkJNAoXCRa3AD5XBABQNQyACAAAAAAAAAqHNAxQsDQMNQsiNAsiWxJENAtXCAEXRCQ1C4AIAAAAAAAACpE0CxZRBwhQsDQLFlEHCDUEJwQ0D1cBIFA0D1chCFAyBjUONQ9C/ww0DVcBIDULMQA0D1cBIBJEKTQUFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJbIQNBSyGIAEb2DnqrIaNBIWNBMWUDQLULIaszIKYDQJCTQKFwkWtwA+VwQAUDUNgAgAAAAAAAAMEjQNULA0DTUMIjQMIlsSRDQMVwgBF0QkNQyACAAAAAAAAAwcNAwWUQcIULA0DBZRBwg1BDQPVwABNAtQNA9XIQhQMgY1DjUPQv5dNAtXACA1FzQLIQlbNRY0CyEGWzUNNAshCls1DDEANBdQNRgoIQWvI680GFABiAZeIlUiEkQ0DSINRDQMIg1EMgo1Cyk0FhZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASWyEDQWshgnBbIaMQBJshyyGjQLSbIcshqzMgpgNAkJNAoXCRa3AD5XBABQNRmACAAAAAAAAA2sNBlQsDQZNQsiNAsiWxJENAsjWzQND0QpNBYWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgElshA0FrIYJwayGjEASbIcshqzMgpgNAkJNAoXCRa3AD5XBABQNRmACAAAAAAAAA27NBlQsDQZNQsiNAsiWxJENAsjWzQND0QpNBQWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgElshA0FLIYgAQxUOWpsho0EhY0ExZQMQBQNBdQNBYWUDQNFlA0DBZQshqzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAAA3LNAtQsDQLNRciNBciWxJENBdXCAEXRCELI680GFABNBYWNA0WUDQMFlCIBWskNQuACAAAAAAAAA3XNAsWUQcIULA0CxZRBwg1BDIGNQ5C/Jk0C1cAIDUWNAtXICA1DTQLIQdbNQwoIQWvI680FjQNUFABiASlSTULIlUkEkQ0DEQ0DIgE9jQLIlWNAgLhAwZC+hY0ASEEEkSIBIo0FTUEMRkiEkRC/GE0ASEEEkSIBHUjrygjrys0DTQMUDQLUFABiARXiASaNQRC/9Q0ASEEEkSIBFE0D1cBIDQPVyEIUDUEQv+7NAsXNQyABILEYf40DBZQsDQMiARdIQyvJDIGNQI1ASpMVwBxZyg0ARY0AhZQZzEZIhJEiARPQvvmMQA1FSQ0ARJENAsiWzUMNAsjWzUUNAshDVs1E4AEzfmklDQMFlA0FBZQNBMWULA0DIgEBTEYNRIoNRE0EhY0ExZQNRApNBQWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgElshA0FLIYgATR8uHosho0ELIaszIKYDQJCTQKFwkWtwA+VwQAUDUMgAgAAAAAAAAGZjQMULA0DDULIjQLIlsSRDQLVwgBF0QqNBVQNBMWUDIGNQ41D0L7FIgDeoGgjQaIA5Y2GgE1C0L+/YgDaDYaATULQv8riANdNhoBNQtC+MoiMTQSRIECMTUSRCIxNhJEIjE3EkSIAz0hDK8iIkL+4kL+ckL7I0L7tzQNVwE4NQtC/Fw0DVcBSDULQv4WIjULgAgAAAAAAAAI3jQLFlEHCFCwNAsWUQcINQQyBjUOQvqLNBZXARhJNQsiWzUYNAsjWzUXMgo1Fik0GBZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASWyEDQYshgnBrIaNA1JshyyGrMyCmA0CQk0ChcJFrcAPlcEAFA1GYAIAAAAAAAACPE0GVCwNBk1CyI0CyJbEkQ0CyNbNBcPRCk0GBZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASWyEDQYshgnBbIaNA1JshyyGjQWSbIcshqzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAAAkBNAtQsDQLNQ0iNA0iWxJENA0jWzQXD0QhCyOvNAxQAYgCWSQ1C4AIAAAAAAAACQ00CxZRBwhQsDQLFlEHCDUEMgY1DkL5eTQMMQCIAdciNQuACAAAAAAAAA9iNAsWULA0CxY1BDIGNQ5C+VQ0C1cBGEk1GiJbNQs0GiENWzUXNAw0FwpJNRk0Fws1GDQaI1s0GQs1FzQWNA1QMQBQNRkhCCs0GVABI68oI68rNBlQAYgBPogBgRc0FwgWiAGwKTQLFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJbIQNAuyGIAEWDefobIaNBZJshyyGjEASbIcsho0FxayGrMyCmA0CQk0ChcJFrcAPlcEAFA1GYAIAAAAAAAAD4I0GVCwNBk1CyI0CyJbEkQ0C1cIARdENBIWNBMWUDQWUDQNUDQMFlAxAFA0FxZQNQuABKK1Vdw0C1CwNBg0FogAyjQMNBgJMQCIAMCACAAAAAAAAA91NBcWULA0FxY1BDIGNQ5C+EA0FTQUFlA0ExZQNBIWUDQRUDQQUDQPUCEEMgZC/DhITL9IiSKyASSyELIHsgiziTQNVwFgNQtC9yU0DVcBQDULQvgoNhoBNhoCNhoDNQs1DDUNQvupQvvKSIlMCUk1BjIJiABBiQlJQf/uSTUGiABiib5JFlEHCEUETVCJSVcAIDUVSSEJWzUUSSEGWzUTSSEKWzUSSUgoNRFJVzgQNRBXSCk1D4mxQv96JDUDiUkiEkw0AhIRRIlJVwEATCJVTYk0BjQHSg9B/5FC/5k0Bgg1BokxFjQAJAhJNQAJRwI4BzIKEkQ4ECQSRDgIEkSJTEm9QP8qSwOI/9NC/yK8Ik4CTTQHCDUHibGyCUL/Fg==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `18`,
    1000: `486`,
    1001: `486`,
    1002: `487`,
    1003: `488`,
    1004: `489`,
    1005: `490`,
    1006: `490`,
    1007: `491`,
    1008: `491`,
    1009: `492`,
    101: `18`,
    1010: `493`,
    1011: `493`,
    1012: `494`,
    1013: `495`,
    1014: `495`,
    1015: `496`,
    1016: `497`,
    1017: `497`,
    1018: `498`,
    1019: `499`,
    102: `18`,
    1020: `500`,
    1021: `500`,
    1022: `501`,
    1023: `502`,
    1024: `503`,
    1025: `503`,
    1026: `504`,
    1027: `505`,
    1028: `505`,
    1029: `506`,
    103: `18`,
    1030: `506`,
    1031: `508`,
    1032: `508`,
    1033: `509`,
    1034: `509`,
    1035: `509`,
    1036: `509`,
    1037: `509`,
    1038: `509`,
    1039: `510`,
    104: `18`,
    1040: `510`,
    1041: `511`,
    1042: `511`,
    1043: `512`,
    1044: `513`,
    1045: `513`,
    1046: `514`,
    1047: `515`,
    1048: `516`,
    1049: `516`,
    105: `18`,
    1050: `517`,
    1051: `518`,
    1052: `518`,
    1053: `519`,
    1054: `523`,
    1055: `523`,
    1056: `524`,
    1057: `525`,
    1058: `525`,
    1059: `526`,
    106: `18`,
    1060: `527`,
    1061: `527`,
    1062: `528`,
    1063: `529`,
    1064: `530`,
    1065: `531`,
    1066: `531`,
    1067: `531`,
    1068: `532`,
    1069: `532`,
    107: `18`,
    1070: `532`,
    1071: `533`,
    1072: `534`,
    1073: `534`,
    1074: `535`,
    1075: `535`,
    1076: `535`,
    1077: `535`,
    1078: `535`,
    1079: `535`,
    108: `18`,
    1080: `535`,
    1081: `535`,
    1082: `535`,
    1083: `535`,
    1084: `536`,
    1085: `536`,
    1086: `537`,
    1087: `538`,
    1088: `539`,
    1089: `539`,
    109: `18`,
    1090: `540`,
    1091: `540`,
    1092: `541`,
    1093: `542`,
    1094: `542`,
    1095: `543`,
    1096: `544`,
    1097: `545`,
    1098: `546`,
    1099: `550`,
    11: `2`,
    110: `18`,
    1100: `550`,
    1101: `551`,
    1102: `551`,
    1103: `551`,
    1104: `552`,
    1105: `553`,
    1106: `557`,
    1107: `558`,
    1108: `558`,
    1109: `559`,
    111: `18`,
    1110: `559`,
    1111: `559`,
    1112: `559`,
    1113: `559`,
    1114: `559`,
    1115: `559`,
    1116: `559`,
    1117: `559`,
    1118: `559`,
    1119: `560`,
    112: `18`,
    1120: `560`,
    1121: `561`,
    1122: `562`,
    1123: `562`,
    1124: `562`,
    1125: `563`,
    1126: `564`,
    1127: `565`,
    1128: `565`,
    1129: `566`,
    113: `18`,
    1130: `567`,
    1131: `567`,
    1132: `567`,
    1133: `568`,
    1134: `568`,
    1135: `569`,
    1136: `569`,
    1137: `570`,
    1138: `570`,
    1139: `570`,
    114: `18`,
    1140: `571`,
    1141: `571`,
    1142: `572`,
    1143: `573`,
    1144: `573`,
    1145: `574`,
    1146: `574`,
    1147: `574`,
    1148: `575`,
    1149: `576`,
    115: `18`,
    1150: `576`,
    1151: `577`,
    1152: `577`,
    1153: `578`,
    1154: `578`,
    1155: `579`,
    1156: `579`,
    1157: `579`,
    1158: `581`,
    1159: `581`,
    116: `18`,
    1160: `582`,
    1161: `582`,
    1162: `582`,
    1163: `583`,
    1164: `583`,
    1165: `584`,
    1166: `584`,
    1167: `585`,
    1168: `585`,
    1169: `586`,
    117: `18`,
    1170: `587`,
    1171: `587`,
    1172: `588`,
    1173: `588`,
    1174: `589`,
    1175: `589`,
    1176: `590`,
    1177: `591`,
    1178: `591`,
    1179: `592`,
    118: `18`,
    1180: `592`,
    1181: `593`,
    1182: `593`,
    1183: `594`,
    1184: `595`,
    1185: `595`,
    1186: `596`,
    1187: `596`,
    1188: `597`,
    1189: `597`,
    119: `18`,
    1190: `598`,
    1191: `599`,
    1192: `599`,
    1193: `601`,
    1194: `602`,
    1195: `602`,
    1196: `603`,
    1197: `604`,
    1198: `605`,
    1199: `606`,
    12: `2`,
    120: `18`,
    1200: `606`,
    1201: `607`,
    1202: `608`,
    1203: `609`,
    1204: `609`,
    1205: `609`,
    1206: `610`,
    1207: `611`,
    1208: `612`,
    1209: `613`,
    121: `18`,
    1210: `614`,
    1211: `619`,
    1212: `619`,
    1213: `620`,
    1214: `621`,
    1215: `622`,
    1216: `627`,
    1217: `627`,
    1218: `628`,
    1219: `629`,
    122: `18`,
    1220: `630`,
    1221: `635`,
    1222: `635`,
    1223: `636`,
    1224: `636`,
    1225: `637`,
    1226: `638`,
    1227: `638`,
    1228: `639`,
    1229: `640`,
    123: `18`,
    1230: `641`,
    1231: `642`,
    1232: `642`,
    1233: `643`,
    1234: `643`,
    1235: `644`,
    1236: `645`,
    1237: `645`,
    1238: `646`,
    1239: `647`,
    124: `18`,
    1240: `647`,
    1241: `648`,
    1242: `649`,
    1243: `649`,
    1244: `650`,
    1245: `651`,
    1246: `652`,
    1247: `652`,
    1248: `653`,
    1249: `654`,
    125: `18`,
    1250: `655`,
    1251: `655`,
    1252: `656`,
    1253: `657`,
    1254: `657`,
    1255: `658`,
    1256: `658`,
    1257: `660`,
    1258: `660`,
    1259: `661`,
    126: `18`,
    1260: `661`,
    1261: `662`,
    1262: `662`,
    1263: `663`,
    1264: `663`,
    1265: `664`,
    1266: `665`,
    1267: `665`,
    1268: `666`,
    1269: `666`,
    127: `18`,
    1270: `667`,
    1271: `667`,
    1272: `669`,
    1273: `670`,
    1274: `670`,
    1275: `671`,
    1276: `671`,
    1277: `673`,
    1278: `677`,
    1279: `677`,
    128: `18`,
    1280: `678`,
    1281: `679`,
    1282: `679`,
    1283: `680`,
    1284: `681`,
    1285: `681`,
    1286: `682`,
    1287: `683`,
    1288: `684`,
    1289: `685`,
    129: `18`,
    1290: `685`,
    1291: `685`,
    1292: `686`,
    1293: `686`,
    1294: `686`,
    1295: `687`,
    1296: `688`,
    1297: `688`,
    1298: `689`,
    1299: `689`,
    13: `2`,
    130: `18`,
    1300: `689`,
    1301: `689`,
    1302: `689`,
    1303: `689`,
    1304: `689`,
    1305: `689`,
    1306: `689`,
    1307: `689`,
    1308: `690`,
    1309: `690`,
    131: `18`,
    1310: `691`,
    1311: `692`,
    1312: `693`,
    1313: `693`,
    1314: `694`,
    1315: `694`,
    1316: `695`,
    1317: `696`,
    1318: `696`,
    1319: `697`,
    132: `18`,
    1320: `698`,
    1321: `699`,
    1322: `700`,
    1323: `704`,
    1324: `704`,
    1325: `705`,
    1326: `706`,
    1327: `707`,
    1328: `707`,
    1329: `708`,
    133: `19`,
    1330: `709`,
    1331: `713`,
    1332: `714`,
    1333: `714`,
    1334: `715`,
    1335: `716`,
    1336: `717`,
    1337: `718`,
    1338: `718`,
    1339: `719`,
    134: `19`,
    1340: `719`,
    1341: `720`,
    1342: `721`,
    1343: `721`,
    1344: `722`,
    1345: `723`,
    1346: `723`,
    1347: `724`,
    1348: `725`,
    1349: `725`,
    135: `19`,
    1350: `726`,
    1351: `727`,
    1352: `728`,
    1353: `728`,
    1354: `729`,
    1355: `730`,
    1356: `731`,
    1357: `731`,
    1358: `732`,
    1359: `733`,
    136: `20`,
    1360: `733`,
    1361: `734`,
    1362: `734`,
    1363: `735`,
    1364: `735`,
    1365: `736`,
    1366: `736`,
    1367: `737`,
    1368: `737`,
    1369: `738`,
    137: `20`,
    1370: `738`,
    1371: `739`,
    1372: `740`,
    1373: `740`,
    1374: `741`,
    1375: `741`,
    1376: `743`,
    1377: `747`,
    1378: `747`,
    1379: `748`,
    138: `20`,
    1380: `749`,
    1381: `749`,
    1382: `750`,
    1383: `751`,
    1384: `751`,
    1385: `752`,
    1386: `753`,
    1387: `754`,
    1388: `755`,
    1389: `755`,
    139: `20`,
    1390: `755`,
    1391: `756`,
    1392: `756`,
    1393: `756`,
    1394: `757`,
    1395: `758`,
    1396: `758`,
    1397: `759`,
    1398: `759`,
    1399: `759`,
    14: `2`,
    140: `20`,
    1400: `759`,
    1401: `759`,
    1402: `759`,
    1403: `759`,
    1404: `759`,
    1405: `759`,
    1406: `759`,
    1407: `760`,
    1408: `760`,
    1409: `761`,
    141: `20`,
    1410: `762`,
    1411: `763`,
    1412: `763`,
    1413: `764`,
    1414: `764`,
    1415: `765`,
    1416: `766`,
    1417: `766`,
    1418: `767`,
    1419: `768`,
    142: `20`,
    1420: `769`,
    1421: `770`,
    1422: `774`,
    1423: `774`,
    1424: `775`,
    1425: `776`,
    1426: `777`,
    1427: `777`,
    1428: `778`,
    1429: `779`,
    143: `20`,
    1430: `783`,
    1431: `784`,
    1432: `784`,
    1433: `785`,
    1434: `786`,
    1435: `787`,
    1436: `788`,
    1437: `788`,
    1438: `789`,
    1439: `789`,
    144: `20`,
    1440: `790`,
    1441: `791`,
    1442: `791`,
    1443: `792`,
    1444: `793`,
    1445: `793`,
    1446: `794`,
    1447: `795`,
    1448: `795`,
    1449: `796`,
    145: `20`,
    1450: `797`,
    1451: `798`,
    1452: `798`,
    1453: `799`,
    1454: `800`,
    1455: `801`,
    1456: `801`,
    1457: `802`,
    1458: `803`,
    1459: `803`,
    146: `20`,
    1460: `804`,
    1461: `804`,
    1462: `806`,
    1463: `806`,
    1464: `807`,
    1465: `807`,
    1466: `807`,
    1467: `807`,
    1468: `807`,
    1469: `807`,
    147: `20`,
    1470: `808`,
    1471: `808`,
    1472: `809`,
    1473: `809`,
    1474: `810`,
    1475: `811`,
    1476: `811`,
    1477: `812`,
    1478: `813`,
    1479: `814`,
    148: `20`,
    1480: `814`,
    1481: `815`,
    1482: `816`,
    1483: `816`,
    1484: `817`,
    1485: `818`,
    1486: `818`,
    1487: `819`,
    1488: `820`,
    1489: `821`,
    149: `20`,
    1490: `821`,
    1491: `822`,
    1492: `823`,
    1493: `824`,
    1494: `824`,
    1495: `825`,
    1496: `826`,
    1497: `827`,
    1498: `827`,
    1499: `828`,
    15: `2`,
    150: `20`,
    1500: `832`,
    1501: `832`,
    1502: `833`,
    1503: `834`,
    1504: `834`,
    1505: `835`,
    1506: `836`,
    1507: `836`,
    1508: `837`,
    1509: `838`,
    151: `20`,
    1510: `839`,
    1511: `840`,
    1512: `840`,
    1513: `840`,
    1514: `841`,
    1515: `841`,
    1516: `841`,
    1517: `842`,
    1518: `843`,
    1519: `843`,
    152: `20`,
    1520: `844`,
    1521: `844`,
    1522: `844`,
    1523: `844`,
    1524: `844`,
    1525: `844`,
    1526: `844`,
    1527: `844`,
    1528: `844`,
    1529: `844`,
    153: `20`,
    1530: `845`,
    1531: `845`,
    1532: `846`,
    1533: `847`,
    1534: `848`,
    1535: `848`,
    1536: `849`,
    1537: `849`,
    1538: `850`,
    1539: `851`,
    154: `20`,
    1540: `851`,
    1541: `852`,
    1542: `853`,
    1543: `854`,
    1544: `855`,
    1545: `859`,
    1546: `859`,
    1547: `860`,
    1548: `860`,
    1549: `860`,
    155: `20`,
    1550: `861`,
    1551: `862`,
    1552: `866`,
    1553: `866`,
    1554: `867`,
    1555: `868`,
    1556: `869`,
    1557: `869`,
    1558: `870`,
    1559: `871`,
    156: `20`,
    1560: `872`,
    1561: `872`,
    1562: `873`,
    1563: `874`,
    1564: `874`,
    1565: `875`,
    1566: `876`,
    1567: `877`,
    1568: `877`,
    1569: `878`,
    157: `20`,
    1570: `879`,
    1571: `880`,
    1572: `880`,
    1573: `880`,
    1574: `881`,
    1575: `882`,
    1576: `882`,
    1577: `883`,
    1578: `883`,
    1579: `883`,
    158: `20`,
    1580: `883`,
    1581: `883`,
    1582: `883`,
    1583: `883`,
    1584: `883`,
    1585: `883`,
    1586: `883`,
    1587: `884`,
    1588: `884`,
    1589: `885`,
    159: `20`,
    1590: `886`,
    1591: `886`,
    1592: `886`,
    1593: `887`,
    1594: `888`,
    1595: `889`,
    1596: `889`,
    1597: `890`,
    1598: `891`,
    1599: `891`,
    16: `2`,
    160: `20`,
    1600: `891`,
    1601: `892`,
    1602: `892`,
    1603: `893`,
    1604: `893`,
    1605: `894`,
    1606: `894`,
    1607: `895`,
    1608: `895`,
    1609: `895`,
    161: `20`,
    1610: `897`,
    1611: `897`,
    1612: `898`,
    1613: `898`,
    1614: `898`,
    1615: `899`,
    1616: `899`,
    1617: `900`,
    1618: `900`,
    1619: `901`,
    162: `22`,
    1620: `901`,
    1621: `901`,
    1622: `902`,
    1623: `902`,
    1624: `903`,
    1625: `903`,
    1626: `904`,
    1627: `904`,
    1628: `905`,
    1629: `906`,
    163: `24`,
    1630: `906`,
    1631: `908`,
    1632: `909`,
    1633: `909`,
    1634: `910`,
    1635: `911`,
    1636: `912`,
    1637: `913`,
    1638: `913`,
    1639: `914`,
    164: `24`,
    1640: `914`,
    1641: `915`,
    1642: `916`,
    1643: `917`,
    1644: `918`,
    1645: `918`,
    1646: `918`,
    1647: `919`,
    1648: `920`,
    1649: `920`,
    165: `24`,
    1650: `921`,
    1651: `922`,
    1652: `923`,
    1653: `924`,
    1654: `925`,
    1655: `932`,
    1656: `932`,
    1657: `933`,
    1658: `940`,
    1659: `940`,
    166: `25`,
    1660: `941`,
    1661: `941`,
    1662: `941`,
    1663: `944`,
    1664: `944`,
    1665: `945`,
    1666: `946`,
    1667: `947`,
    1668: `947`,
    1669: `947`,
    167: `25`,
    1670: `947`,
    1671: `947`,
    1672: `947`,
    1673: `948`,
    1674: `948`,
    1675: `948`,
    1676: `950`,
    1677: `950`,
    1678: `951`,
    1679: `951`,
    168: `25`,
    1680: `952`,
    1681: `953`,
    1682: `956`,
    1683: `956`,
    1684: `956`,
    1685: `957`,
    1686: `957`,
    1687: `958`,
    1688: `958`,
    1689: `960`,
    169: `26`,
    1690: `960`,
    1691: `961`,
    1692: `962`,
    1693: `963`,
    1694: `965`,
    1695: `965`,
    1696: `965`,
    1697: `967`,
    1698: `967`,
    1699: `968`,
    17: `2`,
    170: `26`,
    1700: `968`,
    1701: `969`,
    1702: `970`,
    1703: `973`,
    1704: `973`,
    1705: `973`,
    1706: `974`,
    1707: `975`,
    1708: `977`,
    1709: `978`,
    171: `26`,
    1710: `979`,
    1711: `980`,
    1712: `981`,
    1713: `981`,
    1714: `982`,
    1715: `982`,
    1716: `983`,
    1717: `984`,
    1718: `984`,
    1719: `985`,
    172: `27`,
    1720: `986`,
    1721: `987`,
    1722: `988`,
    1723: `988`,
    1724: `988`,
    1725: `989`,
    1726: `989`,
    1727: `989`,
    1728: `990`,
    1729: `990`,
    173: `27`,
    1730: `991`,
    1731: `991`,
    1732: `991`,
    1733: `993`,
    1734: `993`,
    1735: `994`,
    1736: `994`,
    1737: `995`,
    1738: `996`,
    1739: `999`,
    174: `28`,
    1740: `999`,
    1741: `999`,
    1742: `1000`,
    1743: `1000`,
    1744: `1001`,
    1745: `1001`,
    1746: `1001`,
    1747: `1002`,
    1748: `1002`,
    1749: `1003`,
    175: `28`,
    1750: `1003`,
    1751: `1003`,
    1752: `1004`,
    1753: `1005`,
    1754: `1005`,
    1755: `1006`,
    1756: `1006`,
    1757: `1006`,
    1758: `1008`,
    1759: `1008`,
    176: `29`,
    1760: `1009`,
    1761: `1010`,
    1762: `1010`,
    1763: `1011`,
    1764: `1011`,
    1765: `1011`,
    1766: `1011`,
    1767: `1011`,
    1768: `1011`,
    1769: `1012`,
    177: `29`,
    1770: `1012`,
    1771: `1013`,
    1772: `1014`,
    1773: `1015`,
    1774: `1017`,
    1775: `1017`,
    1776: `1018`,
    1777: `1018`,
    1778: `1018`,
    1779: `1020`,
    178: `31`,
    1780: `1020`,
    1781: `1021`,
    1782: `1022`,
    1783: `1023`,
    1784: `1023`,
    1785: `1025`,
    1786: `1025`,
    1787: `1026`,
    1788: `1026`,
    1789: `1027`,
    179: `32`,
    1790: `1028`,
    1791: `1029`,
    1792: `1029`,
    1793: `1029`,
    1794: `1030`,
    1795: `1031`,
    1796: `1032`,
    1797: `1032`,
    1798: `1033`,
    1799: `1034`,
    18: `2`,
    180: `33`,
    1800: `1034`,
    1801: `1035`,
    1802: `1036`,
    1803: `1037`,
    1804: `1038`,
    1805: `1038`,
    1806: `1039`,
    1807: `1040`,
    1808: `1041`,
    1809: `1043`,
    181: `34`,
    1810: `1043`,
    1811: `1043`,
    1812: `1044`,
    1813: `1044`,
    1814: `1044`,
    1815: `1046`,
    1816: `1046`,
    1817: `1047`,
    1818: `1047`,
    1819: `1048`,
    182: `34`,
    1820: `1049`,
    1821: `1049`,
    1822: `1050`,
    1823: `1051`,
    1824: `1053`,
    1825: `1053`,
    1826: `1054`,
    1827: `1055`,
    1828: `1056`,
    1829: `1056`,
    183: `35`,
    1830: `1057`,
    1831: `1057`,
    1832: `1058`,
    1833: `1059`,
    1834: `1060`,
    1835: `1060`,
    1836: `1061`,
    1837: `1061`,
    1838: `1062`,
    1839: `1062`,
    184: `35`,
    1840: `1063`,
    1841: `1064`,
    1842: `1064`,
    1843: `1065`,
    1844: `1065`,
    1845: `1065`,
    1846: `1065`,
    1847: `1065`,
    1848: `1065`,
    1849: `1066`,
    185: `36`,
    1850: `1066`,
    1851: `1067`,
    1852: `1068`,
    1853: `1069`,
    1854: `1069`,
    1855: `1070`,
    1856: `1071`,
    1857: `1072`,
    1858: `1072`,
    1859: `1073`,
    186: `37`,
    1860: `1074`,
    1861: `1075`,
    1862: `1077`,
    1863: `1077`,
    1864: `1078`,
    1865: `1078`,
    1866: `1078`,
    1867: `1079`,
    1868: `1079`,
    1869: `1080`,
    187: `37`,
    1870: `1080`,
    1871: `1081`,
    1872: `1082`,
    1873: `1082`,
    1874: `1083`,
    1875: `1083`,
    1876: `1084`,
    1877: `1085`,
    1878: `1085`,
    1879: `1086`,
    188: `38`,
    1880: `1087`,
    1881: `1088`,
    1882: `1088`,
    1883: `1089`,
    1884: `1090`,
    1885: `1090`,
    1886: `1091`,
    1887: `1092`,
    1888: `1093`,
    1889: `1094`,
    189: `39`,
    1890: `1094`,
    1891: `1095`,
    1892: `1095`,
    1893: `1096`,
    1894: `1097`,
    1895: `1097`,
    1896: `1098`,
    1897: `1099`,
    1898: `1099`,
    1899: `1100`,
    19: `2`,
    190: `40`,
    1900: `1101`,
    1901: `1101`,
    1902: `1102`,
    1903: `1103`,
    1904: `1104`,
    1905: `1104`,
    1906: `1105`,
    1907: `1106`,
    1908: `1107`,
    1909: `1107`,
    191: `41`,
    1910: `1108`,
    1911: `1109`,
    1912: `1109`,
    1913: `1110`,
    1914: `1110`,
    1915: `1112`,
    1916: `1112`,
    1917: `1113`,
    1918: `1113`,
    1919: `1113`,
    192: `41`,
    1920: `1113`,
    1921: `1113`,
    1922: `1113`,
    1923: `1114`,
    1924: `1114`,
    1925: `1115`,
    1926: `1115`,
    1927: `1116`,
    1928: `1116`,
    1929: `1117`,
    193: `43`,
    1930: `1120`,
    1931: `1120`,
    1932: `1121`,
    1933: `1122`,
    1934: `1122`,
    1935: `1123`,
    1936: `1124`,
    1937: `1124`,
    1938: `1125`,
    1939: `1126`,
    194: `43`,
    1940: `1127`,
    1941: `1128`,
    1942: `1128`,
    1943: `1128`,
    1944: `1129`,
    1945: `1129`,
    1946: `1129`,
    1947: `1130`,
    1948: `1131`,
    1949: `1131`,
    195: `44`,
    1950: `1132`,
    1951: `1132`,
    1952: `1132`,
    1953: `1132`,
    1954: `1132`,
    1955: `1132`,
    1956: `1132`,
    1957: `1132`,
    1958: `1132`,
    1959: `1132`,
    196: `44`,
    1960: `1133`,
    1961: `1133`,
    1962: `1134`,
    1963: `1135`,
    1964: `1136`,
    1965: `1136`,
    1966: `1137`,
    1967: `1137`,
    1968: `1138`,
    1969: `1139`,
    197: `45`,
    1970: `1139`,
    1971: `1140`,
    1972: `1141`,
    1973: `1142`,
    1974: `1143`,
    1975: `1146`,
    1976: `1146`,
    1977: `1147`,
    1978: `1147`,
    1979: `1147`,
    198: `46`,
    1980: `1148`,
    1981: `1149`,
    1982: `1152`,
    1983: `1153`,
    1984: `1153`,
    1985: `1154`,
    1986: `1155`,
    1987: `1155`,
    1988: `1156`,
    1989: `1157`,
    199: `47`,
    1990: `1158`,
    1991: `1158`,
    1992: `1159`,
    1993: `1159`,
    1994: `1160`,
    1995: `1160`,
    1996: `1161`,
    1997: `1161`,
    1998: `1161`,
    1999: `1163`,
    2: `2`,
    20: `2`,
    200: `47`,
    2000: `1163`,
    2001: `1163`,
    2002: `1164`,
    2003: `1164`,
    2004: `1164`,
    2005: `1164`,
    2006: `1165`,
    2007: `1165`,
    2008: `1165`,
    2009: `1166`,
    201: `47`,
    2010: `1166`,
    2011: `1166`,
    2012: `1167`,
    2013: `1167`,
    2014: `1168`,
    2015: `1168`,
    2016: `1168`,
    2017: `1170`,
    2018: `1170`,
    2019: `1170`,
    202: `48`,
    2020: `1171`,
    2021: `1171`,
    2022: `1171`,
    2023: `1172`,
    2024: `1172`,
    2025: `1173`,
    2026: `1173`,
    2027: `1173`,
    2028: `1175`,
    2029: `1175`,
    203: `48`,
    2030: `1175`,
    2031: `1176`,
    2032: `1176`,
    2033: `1176`,
    2034: `1177`,
    2035: `1177`,
    2036: `1178`,
    2037: `1178`,
    2038: `1178`,
    2039: `1180`,
    204: `49`,
    2040: `1181`,
    2041: `1181`,
    2042: `1182`,
    2043: `1183`,
    2044: `1184`,
    2045: `1184`,
    2046: `1185`,
    2047: `1185`,
    2048: `1186`,
    2049: `1187`,
    205: `50`,
    2050: `1188`,
    2051: `1189`,
    2052: `1189`,
    2053: `1190`,
    2054: `1191`,
    2055: `1192`,
    2056: `1193`,
    2057: `1193`,
    2058: `1194`,
    2059: `1195`,
    206: `51`,
    2060: `1196`,
    2061: `1196`,
    2062: `1196`,
    2063: `1197`,
    2064: `1197`,
    2065: `1198`,
    2066: `1199`,
    2067: `1200`,
    2068: `1201`,
    2069: `1201`,
    207: `51`,
    2070: `1201`,
    2071: `1203`,
    2072: `1203`,
    2073: `1203`,
    2074: `1205`,
    2075: `1205`,
    2076: `1205`,
    2077: `1207`,
    2078: `1207`,
    2079: `1207`,
    208: `52`,
    2080: `1209`,
    2081: `1209`,
    2082: `1210`,
    2083: `1210`,
    2084: `1210`,
    2085: `1211`,
    2086: `1211`,
    2087: `1212`,
    2088: `1212`,
    2089: `1212`,
    209: `52`,
    2090: `1214`,
    2091: `1214`,
    2092: `1215`,
    2093: `1215`,
    2094: `1215`,
    2095: `1216`,
    2096: `1216`,
    2097: `1217`,
    2098: `1217`,
    2099: `1217`,
    21: `2`,
    210: `53`,
    2100: `1219`,
    2101: `1220`,
    2102: `1220`,
    2103: `1221`,
    2104: `1221`,
    2105: `1221`,
    2106: `1221`,
    2107: `1221`,
    2108: `1221`,
    2109: `1221`,
    211: `53`,
    2110: `1221`,
    2111: `1221`,
    2112: `1221`,
    2113: `1222`,
    2114: `1222`,
    2115: `1223`,
    2116: `1224`,
    2117: `1224`,
    2118: `1224`,
    2119: `1225`,
    212: `53`,
    2120: `1226`,
    2121: `1227`,
    2122: `1227`,
    2123: `1228`,
    2124: `1229`,
    2125: `1229`,
    2126: `1229`,
    2127: `1230`,
    2128: `1230`,
    2129: `1231`,
    213: `54`,
    2130: `1231`,
    2131: `1232`,
    2132: `1232`,
    2133: `1233`,
    2134: `1233`,
    2135: `1233`,
    2136: `1235`,
    2137: `1235`,
    2138: `1236`,
    2139: `1236`,
    214: `54`,
    2140: `1236`,
    2141: `1237`,
    2142: `1238`,
    2143: `1238`,
    2144: `1239`,
    2145: `1240`,
    2146: `1241`,
    2147: `1241`,
    2148: `1242`,
    2149: `1242`,
    215: `55`,
    2150: `1243`,
    2151: `1244`,
    2152: `1245`,
    2153: `1245`,
    2154: `1246`,
    2155: `1246`,
    2156: `1247`,
    2157: `1247`,
    2158: `1248`,
    2159: `1249`,
    216: `55`,
    2160: `1249`,
    2161: `1250`,
    2162: `1251`,
    2163: `1252`,
    2164: `1253`,
    2165: `1253`,
    2166: `1254`,
    2167: `1254`,
    2168: `1255`,
    2169: `1256`,
    217: `55`,
    2170: `1256`,
    2171: `1257`,
    2172: `1258`,
    2173: `1258`,
    2174: `1259`,
    2175: `1260`,
    2176: `1260`,
    2177: `1261`,
    2178: `1262`,
    2179: `1263`,
    218: `55`,
    2180: `1263`,
    2181: `1264`,
    2182: `1265`,
    2183: `1266`,
    2184: `1266`,
    2185: `1267`,
    2186: `1268`,
    2187: `1268`,
    2188: `1269`,
    2189: `1269`,
    219: `55`,
    2190: `1271`,
    2191: `1271`,
    2192: `1272`,
    2193: `1272`,
    2194: `1273`,
    2195: `1273`,
    2196: `1274`,
    2197: `1274`,
    2198: `1276`,
    2199: `1277`,
    22: `2`,
    220: `55`,
    2200: `1277`,
    2201: `1278`,
    2202: `1278`,
    2203: `1280`,
    2204: `1284`,
    2205: `1284`,
    2206: `1285`,
    2207: `1286`,
    2208: `1286`,
    2209: `1287`,
    221: `56`,
    2210: `1288`,
    2211: `1288`,
    2212: `1289`,
    2213: `1290`,
    2214: `1291`,
    2215: `1292`,
    2216: `1292`,
    2217: `1292`,
    2218: `1293`,
    2219: `1293`,
    222: `56`,
    2220: `1293`,
    2221: `1294`,
    2222: `1295`,
    2223: `1295`,
    2224: `1296`,
    2225: `1296`,
    2226: `1296`,
    2227: `1296`,
    2228: `1296`,
    2229: `1296`,
    223: `57`,
    2230: `1296`,
    2231: `1296`,
    2232: `1296`,
    2233: `1296`,
    2234: `1297`,
    2235: `1297`,
    2236: `1298`,
    2237: `1299`,
    2238: `1300`,
    2239: `1300`,
    224: `58`,
    2240: `1301`,
    2241: `1301`,
    2242: `1302`,
    2243: `1303`,
    2244: `1303`,
    2245: `1304`,
    2246: `1305`,
    2247: `1306`,
    2248: `1307`,
    2249: `1311`,
    225: `59`,
    2250: `1311`,
    2251: `1312`,
    2252: `1313`,
    2253: `1314`,
    2254: `1314`,
    2255: `1315`,
    2256: `1316`,
    2257: `1320`,
    2258: `1321`,
    2259: `1321`,
    226: `59`,
    2260: `1322`,
    2261: `1323`,
    2262: `1324`,
    2263: `1325`,
    2264: `1325`,
    2265: `1326`,
    2266: `1326`,
    2267: `1327`,
    2268: `1328`,
    2269: `1328`,
    227: `60`,
    2270: `1329`,
    2271: `1330`,
    2272: `1330`,
    2273: `1331`,
    2274: `1332`,
    2275: `1332`,
    2276: `1333`,
    2277: `1334`,
    2278: `1335`,
    2279: `1335`,
    228: `61`,
    2280: `1336`,
    2281: `1337`,
    2282: `1338`,
    2283: `1338`,
    2284: `1339`,
    2285: `1340`,
    2286: `1340`,
    2287: `1341`,
    2288: `1341`,
    2289: `1342`,
    229: `63`,
    2290: `1342`,
    2291: `1343`,
    2292: `1343`,
    2293: `1344`,
    2294: `1344`,
    2295: `1345`,
    2296: `1345`,
    2297: `1346`,
    2298: `1347`,
    2299: `1347`,
    23: `2`,
    230: `63`,
    2300: `1348`,
    2301: `1348`,
    2302: `1349`,
    2303: `1349`,
    2304: `1351`,
    2305: `1352`,
    2306: `1352`,
    2307: `1353`,
    2308: `1353`,
    2309: `1355`,
    231: `64`,
    2310: `1359`,
    2311: `1359`,
    2312: `1360`,
    2313: `1361`,
    2314: `1361`,
    2315: `1362`,
    2316: `1363`,
    2317: `1363`,
    2318: `1364`,
    2319: `1365`,
    232: `64`,
    2320: `1366`,
    2321: `1367`,
    2322: `1367`,
    2323: `1367`,
    2324: `1368`,
    2325: `1368`,
    2326: `1368`,
    2327: `1369`,
    2328: `1370`,
    2329: `1370`,
    233: `64`,
    2330: `1371`,
    2331: `1371`,
    2332: `1371`,
    2333: `1371`,
    2334: `1371`,
    2335: `1371`,
    2336: `1371`,
    2337: `1371`,
    2338: `1371`,
    2339: `1371`,
    234: `65`,
    2340: `1372`,
    2341: `1372`,
    2342: `1373`,
    2343: `1374`,
    2344: `1375`,
    2345: `1375`,
    2346: `1376`,
    2347: `1376`,
    2348: `1377`,
    2349: `1378`,
    235: `65`,
    2350: `1378`,
    2351: `1379`,
    2352: `1380`,
    2353: `1381`,
    2354: `1382`,
    2355: `1386`,
    2356: `1386`,
    2357: `1387`,
    2358: `1388`,
    2359: `1389`,
    236: `66`,
    2360: `1389`,
    2361: `1390`,
    2362: `1391`,
    2363: `1395`,
    2364: `1395`,
    2365: `1396`,
    2366: `1397`,
    2367: `1398`,
    2368: `1398`,
    2369: `1399`,
    237: `67`,
    2370: `1400`,
    2371: `1401`,
    2372: `1401`,
    2373: `1401`,
    2374: `1402`,
    2375: `1403`,
    2376: `1403`,
    2377: `1404`,
    2378: `1404`,
    2379: `1404`,
    238: `68`,
    2380: `1404`,
    2381: `1404`,
    2382: `1404`,
    2383: `1404`,
    2384: `1404`,
    2385: `1404`,
    2386: `1404`,
    2387: `1405`,
    2388: `1405`,
    2389: `1406`,
    239: `68`,
    2390: `1407`,
    2391: `1407`,
    2392: `1407`,
    2393: `1408`,
    2394: `1409`,
    2395: `1410`,
    2396: `1410`,
    2397: `1411`,
    2398: `1412`,
    2399: `1412`,
    24: `2`,
    240: `68`,
    2400: `1412`,
    2401: `1413`,
    2402: `1413`,
    2403: `1414`,
    2404: `1414`,
    2405: `1415`,
    2406: `1415`,
    2407: `1416`,
    2408: `1416`,
    2409: `1416`,
    241: `68`,
    2410: `1418`,
    2411: `1418`,
    2412: `1420`,
    2413: `1420`,
    2414: `1421`,
    2415: `1421`,
    2416: `1421`,
    2417: `1422`,
    2418: `1423`,
    2419: `1423`,
    242: `68`,
    2420: `1424`,
    2421: `1424`,
    2422: `1424`,
    2423: `1424`,
    2424: `1424`,
    2425: `1424`,
    2426: `1424`,
    2427: `1424`,
    2428: `1424`,
    2429: `1424`,
    243: `68`,
    2430: `1425`,
    2431: `1425`,
    2432: `1426`,
    2433: `1427`,
    2434: `1428`,
    2435: `1429`,
    2436: `1429`,
    2437: `1430`,
    2438: `1431`,
    2439: `1431`,
    244: `68`,
    2440: `1432`,
    2441: `1432`,
    2442: `1433`,
    2443: `1433`,
    2444: `1434`,
    2445: `1434`,
    2446: `1434`,
    2447: `1436`,
    2448: `1436`,
    2449: `1437`,
    245: `68`,
    2450: `1437`,
    2451: `1437`,
    2452: `1438`,
    2453: `1439`,
    2454: `1439`,
    2455: `1440`,
    2456: `1441`,
    2457: `1442`,
    2458: `1442`,
    2459: `1443`,
    246: `68`,
    2460: `1443`,
    2461: `1444`,
    2462: `1444`,
    2463: `1445`,
    2464: `1446`,
    2465: `1446`,
    2466: `1447`,
    2467: `1447`,
    2468: `1448`,
    2469: `1448`,
    247: `68`,
    2470: `1449`,
    2471: `1450`,
    2472: `1451`,
    2473: `1451`,
    2474: `1452`,
    2475: `1452`,
    2476: `1453`,
    2477: `1454`,
    2478: `1454`,
    2479: `1455`,
    248: `68`,
    2480: `1455`,
    2481: `1456`,
    2482: `1457`,
    2483: `1458`,
    2484: `1458`,
    2485: `1459`,
    2486: `1460`,
    2487: `1460`,
    2488: `1461`,
    2489: `1461`,
    249: `68`,
    2490: `1462`,
    2491: `1462`,
    2492: `1463`,
    2493: `1464`,
    2494: `1464`,
    2495: `1465`,
    2496: `1466`,
    2497: `1466`,
    2498: `1468`,
    2499: `1468`,
    25: `2`,
    250: `68`,
    2500: `1469`,
    2501: `1470`,
    2502: `1470`,
    2503: `1471`,
    2504: `1472`,
    2505: `1473`,
    2506: `1474`,
    2507: `1475`,
    2508: `1476`,
    2509: `1477`,
    251: `68`,
    2510: `1478`,
    2511: `1479`,
    2512: `1479`,
    2513: `1480`,
    2514: `1481`,
    2515: `1482`,
    2516: `1482`,
    2517: `1482`,
    2518: `1483`,
    2519: `1483`,
    252: `69`,
    2520: `1483`,
    2521: `1484`,
    2522: `1485`,
    2523: `1485`,
    2524: `1486`,
    2525: `1487`,
    2526: `1488`,
    2527: `1488`,
    2528: `1488`,
    2529: `1489`,
    253: `69`,
    2530: `1490`,
    2531: `1490`,
    2532: `1491`,
    2533: `1492`,
    2534: `1493`,
    2535: `1494`,
    2536: `1494`,
    2537: `1495`,
    2538: `1495`,
    2539: `1496`,
    254: `69`,
    2540: `1497`,
    2541: `1497`,
    2542: `1498`,
    2543: `1499`,
    2544: `1499`,
    2545: `1500`,
    2546: `1501`,
    2547: `1501`,
    2548: `1502`,
    2549: `1503`,
    255: `71`,
    2550: `1504`,
    2551: `1504`,
    2552: `1505`,
    2553: `1506`,
    2554: `1507`,
    2555: `1507`,
    2556: `1508`,
    2557: `1509`,
    2558: `1509`,
    2559: `1510`,
    256: `71`,
    2560: `1510`,
    2561: `1512`,
    2562: `1512`,
    2563: `1513`,
    2564: `1513`,
    2565: `1513`,
    2566: `1513`,
    2567: `1513`,
    2568: `1513`,
    2569: `1514`,
    257: `71`,
    2570: `1514`,
    2571: `1515`,
    2572: `1515`,
    2573: `1517`,
    2574: `1518`,
    2575: `1518`,
    2576: `1519`,
    2577: `1519`,
    2578: `1520`,
    2579: `1520`,
    258: `72`,
    2580: `1521`,
    2581: `1522`,
    2582: `1522`,
    2583: `1523`,
    2584: `1523`,
    2585: `1524`,
    2586: `1524`,
    2587: `1525`,
    2588: `1526`,
    2589: `1526`,
    259: `72`,
    2590: `1530`,
    2591: `1534`,
    2592: `1534`,
    2593: `1535`,
    2594: `1536`,
    2595: `1536`,
    2596: `1537`,
    2597: `1538`,
    2598: `1538`,
    2599: `1539`,
    26: `2`,
    260: `72`,
    2600: `1540`,
    2601: `1541`,
    2602: `1542`,
    2603: `1542`,
    2604: `1542`,
    2605: `1543`,
    2606: `1543`,
    2607: `1543`,
    2608: `1544`,
    2609: `1545`,
    261: `73`,
    2610: `1545`,
    2611: `1546`,
    2612: `1546`,
    2613: `1546`,
    2614: `1546`,
    2615: `1546`,
    2616: `1546`,
    2617: `1546`,
    2618: `1546`,
    2619: `1546`,
    262: `73`,
    2620: `1546`,
    2621: `1547`,
    2622: `1547`,
    2623: `1548`,
    2624: `1549`,
    2625: `1550`,
    2626: `1550`,
    2627: `1551`,
    2628: `1551`,
    2629: `1552`,
    263: `74`,
    2630: `1553`,
    2631: `1553`,
    2632: `1554`,
    2633: `1555`,
    2634: `1556`,
    2635: `1557`,
    2636: `1561`,
    2637: `1561`,
    2638: `1562`,
    2639: `1562`,
    264: `74`,
    2640: `1562`,
    2641: `1563`,
    2642: `1564`,
    2643: `1568`,
    2644: `1568`,
    2645: `1569`,
    2646: `1570`,
    2647: `1570`,
    2648: `1571`,
    2649: `1572`,
    265: `76`,
    2650: `1573`,
    2651: `1573`,
    2652: `1574`,
    2653: `1575`,
    2654: `1575`,
    2655: `1576`,
    2656: `1577`,
    2657: `1577`,
    2658: `1578`,
    2659: `1579`,
    266: `77`,
    2660: `1580`,
    2661: `1580`,
    2662: `1581`,
    2663: `1582`,
    2664: `1582`,
    2665: `1583`,
    2666: `1584`,
    2667: `1585`,
    2668: `1585`,
    2669: `1586`,
    267: `78`,
    2670: `1586`,
    2671: `1586`,
    2672: `1586`,
    2673: `1586`,
    2674: `1586`,
    2675: `1587`,
    2676: `1587`,
    2677: `1588`,
    2678: `1589`,
    2679: `1591`,
    268: `78`,
    2680: `1591`,
    2681: `1592`,
    2682: `1592`,
    2683: `1593`,
    2684: `1593`,
    2685: `1593`,
    2686: `1594`,
    2687: `1594`,
    2688: `1595`,
    2689: `1595`,
    269: `79`,
    2690: `1596`,
    2691: `1597`,
    2692: `1597`,
    2693: `1598`,
    2694: `1598`,
    2695: `1598`,
    2696: `1599`,
    2697: `1599`,
    2698: `1599`,
    2699: `1599`,
    27: `2`,
    270: `79`,
    2700: `1599`,
    2701: `1599`,
    2702: `1599`,
    2703: `1599`,
    2704: `1599`,
    2705: `1599`,
    2706: `1600`,
    2707: `1600`,
    2708: `1601`,
    2709: `1602`,
    271: `80`,
    2710: `1603`,
    2711: `1604`,
    2712: `1604`,
    2713: `1605`,
    2714: `1606`,
    2715: `1606`,
    2716: `1607`,
    2717: `1607`,
    2718: `1608`,
    2719: `1608`,
    272: `80`,
    2720: `1609`,
    2721: `1609`,
    2722: `1609`,
    2723: `1612`,
    2724: `1612`,
    2725: `1613`,
    2726: `1613`,
    2727: `1614`,
    2728: `1615`,
    2729: `1616`,
    273: `81`,
    2730: `1616`,
    2731: `1617`,
    2732: `1618`,
    2733: `1619`,
    2734: `1619`,
    2735: `1620`,
    2736: `1621`,
    2737: `1622`,
    2738: `1622`,
    2739: `1623`,
    274: `82`,
    2740: `1624`,
    2741: `1624`,
    2742: `1625`,
    2743: `1626`,
    2744: `1626`,
    2745: `1627`,
    2746: `1628`,
    2747: `1628`,
    2748: `1629`,
    2749: `1629`,
    275: `83`,
    2750: `1630`,
    2751: `1630`,
    2752: `1630`,
    2753: `1632`,
    2754: `1633`,
    2755: `1634`,
    2756: `1635`,
    2757: `1636`,
    2758: `1638`,
    2759: `1639`,
    276: `83`,
    2760: `1639`,
    2761: `1640`,
    2762: `1641`,
    2763: `1641`,
    2764: `1642`,
    2765: `1642`,
    2766: `1643`,
    2767: `1643`,
    2768: `1644`,
    2769: `1645`,
    277: `84`,
    2770: `1647`,
    2771: `1647`,
    2772: `1648`,
    2773: `1648`,
    2774: `1648`,
    2775: `1649`,
    2776: `1649`,
    2777: `1650`,
    2778: `1650`,
    2779: `1650`,
    278: `85`,
    2780: `1652`,
    2781: `1652`,
    2782: `1653`,
    2783: `1653`,
    2784: `1653`,
    2785: `1654`,
    2786: `1654`,
    2787: `1655`,
    2788: `1655`,
    2789: `1655`,
    279: `86`,
    2790: `1657`,
    2791: `1657`,
    2792: `1657`,
    2793: `1658`,
    2794: `1658`,
    2795: `1658`,
    2796: `1659`,
    2797: `1659`,
    2798: `1659`,
    2799: `1660`,
    28: `2`,
    280: `86`,
    2800: `1660`,
    2801: `1661`,
    2802: `1661`,
    2803: `1662`,
    2804: `1662`,
    2805: `1663`,
    2806: `1663`,
    2807: `1663`,
    2808: `1665`,
    2809: `1665`,
    281: `87`,
    2810: `1665`,
    2811: `1667`,
    2812: `1668`,
    2813: `1670`,
    2814: `1671`,
    2815: `1672`,
    2816: `1673`,
    2817: `1673`,
    2818: `1674`,
    2819: `1674`,
    282: `87`,
    2820: `1675`,
    2821: `1675`,
    2822: `1675`,
    2823: `1676`,
    2824: `1678`,
    2825: `1679`,
    2826: `1680`,
    2827: `1680`,
    2828: `1680`,
    2829: `1681`,
    283: `87`,
    2830: `1682`,
    2831: `1682`,
    2832: `1683`,
    2833: `1683`,
    2834: `1683`,
    2835: `1684`,
    2836: `1686`,
    2837: `1687`,
    2838: `1688`,
    2839: `1689`,
    284: `90`,
    2840: `1689`,
    2841: `1689`,
    2842: `1690`,
    2843: `1690`,
    2844: `1691`,
    2845: `1692`,
    2846: `1693`,
    2847: `1695`,
    2848: `1696`,
    2849: `1696`,
    285: `90`,
    2850: `1696`,
    2851: `1697`,
    2852: `1697`,
    2853: `1698`,
    2854: `1699`,
    2855: `1699`,
    2856: `1700`,
    2857: `1701`,
    2858: `1701`,
    2859: `1702`,
    286: `90`,
    2860: `1703`,
    2861: `1703`,
    2862: `1704`,
    2863: `1705`,
    2864: `1705`,
    2865: `1706`,
    2866: `1707`,
    2867: `1707`,
    2868: `1708`,
    2869: `1709`,
    287: `90`,
    2870: `1709`,
    2871: `1710`,
    2872: `1711`,
    2873: `1712`,
    2874: `1713`,
    2875: `1713`,
    2876: `1714`,
    2877: `1715`,
    2878: `1715`,
    2879: `1715`,
    288: `90`,
    2880: `1716`,
    2881: `1716`,
    2882: `1717`,
    2883: `1717`,
    2884: `1717`,
    2885: `1718`,
    2886: `1718`,
    2887: `1719`,
    2888: `1721`,
    2889: `1722`,
    289: `90`,
    2890: `1722`,
    2891: `1722`,
    2892: `1724`,
    2893: `1725`,
    2894: `1725`,
    2895: `1726`,
    2896: `1728`,
    2897: `1729`,
    2898: `1730`,
    2899: `1731`,
    29: `2`,
    290: `90`,
    2900: `1732`,
    2901: `1732`,
    2902: `1733`,
    2903: `1734`,
    2904: `1735`,
    2905: `1736`,
    2906: `1738`,
    2907: `1739`,
    2908: `1739`,
    2909: `1739`,
    291: `90`,
    2910: `1740`,
    2911: `1741`,
    2912: `1742`,
    2913: `1743`,
    2914: `1744`,
    2915: `1746`,
    2916: `1746`,
    2917: `1747`,
    2918: `1747`,
    2919: `1748`,
    292: `90`,
    2920: `1749`,
    2921: `1750`,
    2922: `1750`,
    2923: `1750`,
    2924: `1751`,
    2925: `1751`,
    2926: `1751`,
    2927: `1753`,
    2928: `1753`,
    2929: `1754`,
    293: `90`,
    2930: `1755`,
    2931: `1755`,
    2932: `1756`,
    2933: `1759`,
    2934: `1759`,
    2935: `1760`,
    2936: `1760`,
    2937: `1761`,
    2938: `1762`,
    2939: `1763`,
    294: `90`,
    2940: `1764`,
    2941: `1764`,
    2942: `1765`,
    2943: `1766`,
    2944: `1766`,
    2945: `1767`,
    2946: `1767`,
    2947: `1768`,
    2948: `1768`,
    2949: `1769`,
    295: `90`,
    2950: `1770`,
    2951: `1771`,
    2952: `1771`,
    2953: `1772`,
    2954: `1773`,
    2955: `1774`,
    2956: `1775`,
    2957: `1775`,
    2958: `1776`,
    2959: `1777`,
    296: `90`,
    2960: `1778`,
    2961: `1780`,
    2962: `1781`,
    2963: `1782`,
    2964: `1783`,
    2965: `1783`,
    2966: `1783`,
    2967: `1784`,
    2968: `1784`,
    2969: `1785`,
    297: `90`,
    2970: `1785`,
    2971: `1785`,
    2972: `1786`,
    2973: `1786`,
    2974: `1786`,
    2975: `1788`,
    2976: `1789`,
    2977: `1790`,
    2978: `1790`,
    2979: `1791`,
    298: `90`,
    2980: `1793`,
    2981: `1793`,
    2982: `1794`,
    2983: `1795`,
    2984: `1795`,
    2985: `1796`,
    2986: `1798`,
    2987: `1799`,
    2988: `1799`,
    2989: `1800`,
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
    527: `173`,
    528: `173`,
    529: `174`,
    53: `4`,
    530: `174`,
    531: `174`,
    532: `175`,
    533: `175`,
    534: `177`,
    535: `178`,
    536: `178`,
    537: `179`,
    538: `180`,
    539: `181`,
    54: `4`,
    540: `182`,
    541: `182`,
    542: `183`,
    543: `183`,
    544: `184`,
    545: `185`,
    546: `186`,
    547: `187`,
    548: `187`,
    549: `187`,
    55: `5`,
    550: `188`,
    551: `189`,
    552: `190`,
    553: `191`,
    554: `192`,
    555: `197`,
    556: `197`,
    557: `198`,
    558: `198`,
    559: `199`,
    56: `5`,
    560: `200`,
    561: `200`,
    562: `201`,
    563: `202`,
    564: `202`,
    565: `204`,
    566: `205`,
    567: `206`,
    568: `207`,
    569: `208`,
    57: `5`,
    570: `208`,
    571: `209`,
    572: `210`,
    573: `211`,
    574: `211`,
    575: `211`,
    576: `212`,
    577: `213`,
    578: `214`,
    579: `215`,
    58: `6`,
    580: `216`,
    581: `221`,
    582: `221`,
    583: `222`,
    584: `223`,
    585: `223`,
    586: `224`,
    587: `225`,
    588: `226`,
    589: `226`,
    59: `7`,
    590: `226`,
    591: `227`,
    592: `228`,
    593: `228`,
    594: `229`,
    595: `230`,
    596: `231`,
    597: `232`,
    598: `232`,
    599: `233`,
    6: `2`,
    60: `8`,
    600: `233`,
    601: `234`,
    602: `235`,
    603: `235`,
    604: `236`,
    605: `237`,
    606: `237`,
    607: `238`,
    608: `239`,
    609: `239`,
    61: `9`,
    610: `240`,
    611: `241`,
    612: `242`,
    613: `242`,
    614: `243`,
    615: `244`,
    616: `245`,
    617: `245`,
    618: `246`,
    619: `247`,
    62: `10`,
    620: `247`,
    621: `248`,
    622: `248`,
    623: `250`,
    624: `250`,
    625: `251`,
    626: `251`,
    627: `251`,
    628: `251`,
    629: `251`,
    63: `11`,
    630: `251`,
    631: `252`,
    632: `252`,
    633: `253`,
    634: `254`,
    635: `254`,
    636: `255`,
    637: `256`,
    638: `256`,
    639: `257`,
    64: `11`,
    640: `258`,
    641: `259`,
    642: `259`,
    643: `260`,
    644: `261`,
    645: `261`,
    646: `262`,
    647: `263`,
    648: `263`,
    649: `264`,
    65: `12`,
    650: `265`,
    651: `266`,
    652: `266`,
    653: `267`,
    654: `271`,
    655: `271`,
    656: `272`,
    657: `273`,
    658: `273`,
    659: `274`,
    66: `13`,
    660: `275`,
    661: `275`,
    662: `276`,
    663: `277`,
    664: `278`,
    665: `279`,
    666: `279`,
    667: `279`,
    668: `280`,
    669: `280`,
    67: `14`,
    670: `280`,
    671: `281`,
    672: `282`,
    673: `282`,
    674: `283`,
    675: `283`,
    676: `283`,
    677: `283`,
    678: `283`,
    679: `283`,
    68: `14`,
    680: `283`,
    681: `283`,
    682: `283`,
    683: `283`,
    684: `284`,
    685: `284`,
    686: `285`,
    687: `286`,
    688: `287`,
    689: `287`,
    69: `15`,
    690: `288`,
    691: `288`,
    692: `289`,
    693: `290`,
    694: `290`,
    695: `291`,
    696: `292`,
    697: `293`,
    698: `294`,
    699: `298`,
    7: `2`,
    70: `16`,
    700: `298`,
    701: `299`,
    702: `299`,
    703: `299`,
    704: `300`,
    705: `301`,
    706: `305`,
    707: `306`,
    708: `306`,
    709: `307`,
    71: `18`,
    710: `307`,
    711: `307`,
    712: `307`,
    713: `307`,
    714: `307`,
    715: `307`,
    716: `307`,
    717: `307`,
    718: `307`,
    719: `308`,
    72: `18`,
    720: `308`,
    721: `309`,
    722: `310`,
    723: `310`,
    724: `310`,
    725: `311`,
    726: `312`,
    727: `313`,
    728: `313`,
    729: `314`,
    73: `18`,
    730: `315`,
    731: `315`,
    732: `315`,
    733: `316`,
    734: `316`,
    735: `317`,
    736: `317`,
    737: `318`,
    738: `318`,
    739: `320`,
    74: `18`,
    740: `320`,
    741: `321`,
    742: `321`,
    743: `321`,
    744: `322`,
    745: `323`,
    746: `323`,
    747: `323`,
    748: `325`,
    749: `325`,
    75: `18`,
    750: `326`,
    751: `326`,
    752: `327`,
    753: `328`,
    754: `330`,
    755: `330`,
    756: `330`,
    757: `332`,
    758: `333`,
    759: `333`,
    76: `18`,
    760: `334`,
    761: `334`,
    762: `335`,
    763: `335`,
    764: `335`,
    765: `337`,
    766: `337`,
    767: `338`,
    768: `338`,
    769: `338`,
    77: `18`,
    770: `340`,
    771: `340`,
    772: `340`,
    773: `340`,
    774: `340`,
    775: `340`,
    776: `341`,
    777: `341`,
    778: `342`,
    779: `343`,
    78: `18`,
    780: `345`,
    781: `346`,
    782: `348`,
    783: `348`,
    784: `349`,
    785: `349`,
    786: `349`,
    787: `350`,
    788: `351`,
    789: `351`,
    79: `18`,
    790: `352`,
    791: `352`,
    792: `353`,
    793: `353`,
    794: `353`,
    795: `354`,
    796: `355`,
    797: `355`,
    798: `357`,
    799: `358`,
    8: `2`,
    80: `18`,
    800: `358`,
    801: `359`,
    802: `360`,
    803: `361`,
    804: `362`,
    805: `362`,
    806: `363`,
    807: `364`,
    808: `365`,
    809: `365`,
    81: `18`,
    810: `365`,
    811: `366`,
    812: `367`,
    813: `367`,
    814: `368`,
    815: `369`,
    816: `370`,
    817: `371`,
    818: `372`,
    819: `377`,
    82: `18`,
    820: `377`,
    821: `378`,
    822: `379`,
    823: `380`,
    824: `380`,
    825: `380`,
    826: `380`,
    827: `380`,
    828: `380`,
    829: `381`,
    83: `18`,
    830: `381`,
    831: `381`,
    832: `383`,
    833: `384`,
    834: `384`,
    835: `385`,
    836: `386`,
    837: `387`,
    838: `388`,
    839: `388`,
    84: `18`,
    840: `389`,
    841: `389`,
    842: `390`,
    843: `391`,
    844: `391`,
    845: `392`,
    846: `393`,
    847: `393`,
    848: `394`,
    849: `395`,
    85: `18`,
    850: `395`,
    851: `396`,
    852: `397`,
    853: `398`,
    854: `398`,
    855: `399`,
    856: `400`,
    857: `401`,
    858: `401`,
    859: `402`,
    86: `18`,
    860: `403`,
    861: `403`,
    862: `404`,
    863: `404`,
    864: `406`,
    865: `406`,
    866: `407`,
    867: `407`,
    868: `407`,
    869: `407`,
    87: `18`,
    870: `407`,
    871: `407`,
    872: `408`,
    873: `408`,
    874: `409`,
    875: `409`,
    876: `410`,
    877: `410`,
    878: `411`,
    879: `415`,
    88: `18`,
    880: `415`,
    881: `416`,
    882: `417`,
    883: `417`,
    884: `418`,
    885: `419`,
    886: `419`,
    887: `420`,
    888: `421`,
    889: `422`,
    89: `18`,
    890: `423`,
    891: `423`,
    892: `423`,
    893: `424`,
    894: `424`,
    895: `424`,
    896: `425`,
    897: `426`,
    898: `426`,
    899: `427`,
    9: `2`,
    90: `18`,
    900: `427`,
    901: `427`,
    902: `427`,
    903: `427`,
    904: `427`,
    905: `427`,
    906: `427`,
    907: `427`,
    908: `427`,
    909: `428`,
    91: `18`,
    910: `428`,
    911: `429`,
    912: `430`,
    913: `431`,
    914: `431`,
    915: `432`,
    916: `432`,
    917: `433`,
    918: `434`,
    919: `434`,
    92: `18`,
    920: `435`,
    921: `436`,
    922: `437`,
    923: `438`,
    924: `442`,
    925: `442`,
    926: `443`,
    927: `443`,
    928: `443`,
    929: `444`,
    93: `18`,
    930: `445`,
    931: `449`,
    932: `450`,
    933: `450`,
    934: `451`,
    935: `451`,
    936: `451`,
    937: `451`,
    938: `451`,
    939: `451`,
    94: `18`,
    940: `451`,
    941: `451`,
    942: `451`,
    943: `451`,
    944: `452`,
    945: `452`,
    946: `453`,
    947: `454`,
    948: `454`,
    949: `454`,
    95: `18`,
    950: `455`,
    951: `456`,
    952: `457`,
    953: `457`,
    954: `458`,
    955: `459`,
    956: `459`,
    957: `459`,
    958: `460`,
    959: `460`,
    96: `18`,
    960: `461`,
    961: `461`,
    962: `462`,
    963: `462`,
    964: `463`,
    965: `463`,
    966: `463`,
    967: `464`,
    968: `465`,
    969: `465`,
    97: `18`,
    970: `466`,
    971: `466`,
    972: `466`,
    973: `467`,
    974: `468`,
    975: `468`,
    976: `469`,
    977: `469`,
    978: `470`,
    979: `470`,
    98: `18`,
    980: `471`,
    981: `471`,
    982: `471`,
    983: `473`,
    984: `473`,
    985: `474`,
    986: `474`,
    987: `474`,
    988: `475`,
    989: `475`,
    99: `18`,
    990: `476`,
    991: `476`,
    992: `477`,
    993: `477`,
    994: `478`,
    995: `478`,
    996: `478`,
    997: `479`,
    998: `480`,
    999: `485`
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
  warnings: [`Step 1 calls a remote object at /app/index.rsh:104:18:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:142:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:148:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:152:29:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:216:19:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:256:19:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:262:19:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:283:27:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:306:26:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:319:26:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 may use up to 10 transaction references, but the limit is 8. Step 3 starts at /app/index.rsh:117:29:dot.`, `This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:88:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:332:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:117:29:after expr stmt semicolon',
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
