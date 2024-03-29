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
    Approval: [ctc0, ctc0, ctc1],
    Transfer: [ctc0, ctc0, ctc1]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc5 = stdlib.T_Object({
    decimals: ctc2,
    name: ctc3,
    symbol: ctc4,
    totalSupply: ctc2
    });
  const ctc6 = stdlib.T_Object({
    closed: ctc1,
    decimals: ctc2,
    enableZeroAddressBurn: ctc1,
    managerAddress: ctc0,
    name: ctc3,
    symbol: ctc4,
    totalSupply: ctc2,
    zeroAddress: ctc0
    });
  const ctc7 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc8 = stdlib.T_Struct([['name', ctc3], ['symbol', ctc4], ['decimals', ctc2], ['totalSupply', ctc2], ['zeroAddress', ctc0], ['managerAddress', ctc0], ['enableZeroAddressBurn', ctc1], ['closed', ctc1]]);
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Data({
    None: ctc9,
    Some: ctc2
    });
  const map0_ctc = ctc10;
  
  const map1_ctc = ctc10;
  
  
  const _allowance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1544, v1546, v1547, v1553, v1556, v1572] = svs;
      return (await ((async (_v1584, _v1585 ) => {
          const v1584 = stdlib.protect(ctc0, _v1584, null);
          const v1585 = stdlib.protect(ctc0, _v1585, null);
        
        const v1586 = [v1584, v1585];
        const v1587 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc7, v1586, ctc2), null);
        const v1588 = stdlib.fromSome(v1587, stdlib.checkedBigNumberify('./index.rsh:117:32:decimal', stdlib.UInt_max, '0'));
        
        return v1588;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _balanceOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1544, v1546, v1547, v1553, v1556, v1572] = svs;
      return (await ((async (_v1581 ) => {
          const v1581 = stdlib.protect(ctc0, _v1581, null);
        
        const v1582 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v1581, ctc2), null);
        const v1583 = stdlib.fromSome(v1582, stdlib.checkedBigNumberify('./index.rsh:112:32:decimal', stdlib.UInt_max, '0'));
        
        return v1583;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _decimals = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1544, v1546, v1547, v1553, v1556, v1572] = svs;
      return (await ((async () => {
        
        
        return v1556;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _name = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1544, v1546, v1547, v1553, v1556, v1572] = svs;
      return (await ((async () => {
        
        const v1563 = v1547.name;
        
        return v1563;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1544, v1546, v1547, v1553, v1556, v1572] = svs;
      return (await ((async () => {
        
        const v1589 = v1572.name;
        const v1590 = v1572.symbol;
        const v1591 = v1572.decimals;
        const v1592 = v1572.totalSupply;
        const v1593 = v1572.zeroAddress;
        const v1594 = v1572.managerAddress;
        const v1595 = v1572.enableZeroAddressBurn;
        const v1596 = v1572.closed;
        const v1597 = {
          closed: v1596,
          decimals: v1591,
          enableZeroAddressBurn: v1595,
          managerAddress: v1594,
          name: v1589,
          symbol: v1590,
          totalSupply: v1592,
          zeroAddress: v1593
          };
        
        return v1597;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _symbol = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1544, v1546, v1547, v1553, v1556, v1572] = svs;
      return (await ((async () => {
        
        const v1564 = v1547.symbol;
        
        return v1564;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _totalSupply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1544, v1546, v1547, v1553, v1556, v1572] = svs;
      return (await ((async () => {
        
        
        return v1553;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      allowance: {
        decode: _allowance,
        dom: [ctc0, ctc0],
        rng: ctc2
        },
      balanceOf: {
        decode: _balanceOf,
        dom: [ctc0],
        rng: ctc2
        },
      decimals: {
        decode: _decimals,
        dom: [],
        rng: ctc2
        },
      name: {
        decode: _name,
        dom: [],
        rng: ctc3
        },
      state: {
        decode: _state,
        dom: [],
        rng: ctc8
        },
      symbol: {
        decode: _symbol,
        dom: [],
        rng: ctc4
        },
      totalSupply: {
        decode: _totalSupply,
        dom: [],
        rng: ctc2
        }
      },
    views: {
      3: [ctc0, ctc1, ctc5, ctc2, ctc2, ctc6]
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
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc1,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1
    });
  const ctc8 = stdlib.T_Object({
    enableZeroAddressBurn: ctc3,
    managerAddress: ctc4,
    meta: ctc7,
    zeroAddress: ctc4
    });
  const ctc9 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc4]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc14 = stdlib.T_Data({
    approve0_245: ctc9,
    deleteAllowanceBox0_245: ctc10,
    deleteBalanceBox0_245: ctc11,
    destroy0_245: ctc12,
    transfer0_245: ctc9,
    transferFrom0_245: ctc13
    });
  
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
  
  
  const v1519 = stdlib.protect(ctc8, interact.params, 'for Deployer\'s interact field params');
  const v1520 = v1519.enableZeroAddressBurn;
  const v1521 = v1519.managerAddress;
  const v1522 = v1519.meta;
  const v1523 = v1519.zeroAddress;
  const v1524 = v1522.decimals;
  const v1527 = v1522.totalSupply;
  
  const v1534 = stdlib.addressEq(v1523, v1521);
  const v1535 = v1534 ? false : true;
  stdlib.assert(v1535, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:74:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Zero address must not equal manager address',
    who: 'Deployer'
    });
  const v1538 = stdlib.gt(v1527, stdlib.checkedBigNumberify('./index.rsh:78:32:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1538, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:78:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Total supply must be greater than zero',
    who: 'Deployer'
    });
  const v1541 = stdlib.lt(v1524, stdlib.checkedBigNumberify('./index.rsh:3:22:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v1541, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:79:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Decimals must be less than 256 (fits in UInt8)',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1523, v1521, v1520, v1522],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:72:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc4, ctc3, ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:72:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1544, v1545, v1546, v1547], secs: v1549, time: v1548, didSend: v146, from: v1543 } = txn1;
      
      const v1553 = v1547.totalSupply;
      const v1556 = v1547.decimals;
      ;
      await stdlib.simMapSet(sim_r, 0, ctc4, v1545, ctc1, v1553);
      await stdlib.simMapSet(sim_r, 0, ctc4, v1544, ctc1, stdlib.checkedBigNumberify('./index.rsh:90:27:decimal', stdlib.UInt_max, '0'));
      null;
      const v1561 = await ctc.getContractInfo();
      
      const v1568 = v1547.name;
      const v1569 = v1547.symbol;
      const v1571 = {
        closed: false,
        decimals: v1556,
        enableZeroAddressBurn: v1546,
        managerAddress: v1545,
        name: v1568,
        symbol: v1569,
        totalSupply: v1553,
        zeroAddress: v1544
        };
      const v1572 = v1571;
      const v1573 = v1548;
      
      if (await (async () => {
        const v1579 = v1572.closed;
        const v1580 = v1579 ? false : true;
        
        return v1580;})()) {
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
    tys: [ctc4, ctc4, ctc3, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v1544, v1545, v1546, v1547], secs: v1549, time: v1548, didSend: v146, from: v1543 } = txn1;
  const v1550 = stdlib.addressEq(v1544, v1545);
  const v1551 = v1550 ? false : true;
  stdlib.assert(v1551, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:74:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Zero address must not equal manager address',
    who: 'Deployer'
    });
  const v1553 = v1547.totalSupply;
  const v1554 = stdlib.gt(v1553, stdlib.checkedBigNumberify('./index.rsh:78:32:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1554, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:78:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Total supply must be greater than zero',
    who: 'Deployer'
    });
  const v1556 = v1547.decimals;
  const v1557 = stdlib.lt(v1556, stdlib.checkedBigNumberify('./index.rsh:3:22:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v1557, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:79:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Decimals must be less than 256 (fits in UInt8)',
    who: 'Deployer'
    });
  ;
  await stdlib.mapSet(map0, ctc4, v1545, ctc1, v1553);
  await stdlib.mapSet(map0, ctc4, v1544, ctc1, stdlib.checkedBigNumberify('./index.rsh:90:27:decimal', stdlib.UInt_max, '0'));
  null;
  const v1561 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.ready(v1561), {
    at: './index.rsh:93:19:application',
    fs: ['at ./index.rsh:93:19:application call to [unknown function] (defined at: ./index.rsh:93:19:function exp)', 'at ./index.rsh:93:19:application call to "liftedInteract" (defined at: ./index.rsh:93:19:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v1568 = v1547.name;
  const v1569 = v1547.symbol;
  const v1571 = {
    closed: false,
    decimals: v1556,
    enableZeroAddressBurn: v1546,
    managerAddress: v1545,
    name: v1568,
    symbol: v1569,
    totalSupply: v1553,
    zeroAddress: v1544
    };
  let v1572 = v1571;
  let v1573 = v1548;
  
  let txn2 = txn1;
  while (await (async () => {
    const v1579 = v1572.closed;
    const v1580 = v1579 ? false : true;
    
    return v1580;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc14],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1763], secs: v1765, time: v1764, didSend: v1060, from: v1762 } = txn3;
    switch (v1763[0]) {
      case 'approve0_245': {
        const v1766 = v1763[1];
        undefined /* setApiDetails */;
        ;
        const v1777 = v1766[stdlib.checkedBigNumberify('./index.rsh:182:10:spread', stdlib.UInt_max, '0')];
        const v1778 = v1766[stdlib.checkedBigNumberify('./index.rsh:182:10:spread', stdlib.UInt_max, '1')];
        const v1779 = stdlib.addressEq(v1762, v1544);
        const v1780 = v1779 ? false : true;
        stdlib.assert(v1780, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:183:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:186:13:application call to [unknown function] (defined at: ./index.rsh:186:13:function exp)'],
          msg: 'ARC200: Approve this to zero address',
          who: 'Deployer'
          });
        const v1782 = stdlib.addressEq(v1777, v1544);
        const v1783 = v1782 ? false : true;
        stdlib.assert(v1783, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:184:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:186:13:application call to [unknown function] (defined at: ./index.rsh:186:13:function exp)'],
          msg: 'ARC200: Approve to zero address',
          who: 'Deployer'
          });
        const v1787 = [v1762, v1777];
        await stdlib.mapSet(map1, ctc10, v1787, ctc1, v1778);
        null;
        const v1788 = true;
        await txn3.getOutput('approve', 'v1788', ctc3, v1788);
        const cv1572 = v1572;
        const cv1573 = v1764;
        
        v1572 = cv1572;
        v1573 = cv1573;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteAllowanceBox0_245': {
        const v1954 = v1763[1];
        undefined /* setApiDetails */;
        ;
        const v1986 = v1954[stdlib.checkedBigNumberify('./index.rsh:218:10:spread', stdlib.UInt_max, '0')];
        const v1987 = v1954[stdlib.checkedBigNumberify('./index.rsh:218:10:spread', stdlib.UInt_max, '1')];
        const v1988 = [v1986, v1987];
        const v1989 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc10, v1988, ctc1), null);
        const v1990 = {
          None: 0,
          Some: 1
          }[v1989[0]];
        const v1991 = stdlib.eq(v1990, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v1991, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:219:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:229:13:application call to [unknown function] (defined at: ./index.rsh:229:13:function exp)'],
          msg: 'ARC200: Allowance box not found',
          who: 'Deployer'
          });
        const v1995 = stdlib.fromSome(v1989, stdlib.checkedBigNumberify('./index.rsh:117:32:decimal', stdlib.UInt_max, '0'));
        const v1996 = stdlib.eq(v1995, stdlib.checkedBigNumberify('./index.rsh:224:38:decimal', stdlib.UInt_max, '0'));
        const v2000 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:90:27:decimal', stdlib.UInt_max, '0'), v1553);
        const v2001 = v1996 ? true : v2000;
        stdlib.assert(v2001, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:223:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:229:13:application call to [unknown function] (defined at: ./index.rsh:229:13:function exp)'],
          msg: 'ARC200: Allowance box not empty or zero address balance box not total supply',
          who: 'Deployer'
          });
        await stdlib.mapSet(map1, ctc10, v1988, ctc1, undefined /* Nothing */);
        const v2006 = true;
        await txn3.getOutput('deleteAllowanceBox', 'v2006', ctc3, v2006);
        const cv1572 = v1572;
        const cv1573 = v1764;
        
        v1572 = cv1572;
        v1573 = cv1573;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteBalanceBox0_245': {
        const v2142 = v1763[1];
        undefined /* setApiDetails */;
        ;
        const v2204 = v2142[stdlib.checkedBigNumberify('./index.rsh:199:10:spread', stdlib.UInt_max, '0')];
        const v2205 = stdlib.addressEq(v2204, v1544);
        const v2206 = v2205 ? false : true;
        stdlib.assert(v2206, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:200:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
          msg: 'ARC200: Delete balance box to zero address',
          who: 'Deployer'
          });
        const v2208 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2204, ctc1), null);
        const v2209 = {
          None: 0,
          Some: 1
          }[v2208[0]];
        const v2210 = stdlib.eq(v2209, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2210, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:201:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
          msg: 'ARC200: Balance box not found',
          who: 'Deployer'
          });
        const v2213 = stdlib.fromSome(v2208, stdlib.checkedBigNumberify('./index.rsh:112:32:decimal', stdlib.UInt_max, '0'));
        const v2214 = stdlib.eq(v2213, stdlib.checkedBigNumberify('./index.rsh:203:28:decimal', stdlib.UInt_max, '0'));
        const v2218 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:90:27:decimal', stdlib.UInt_max, '0'), v1553);
        const v2219 = v2214 ? true : v2218;
        stdlib.assert(v2219, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:202:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
          msg: 'ARC200: Balance box not empty or zero address balance box not total supply',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc4, v2204, ctc1, undefined /* Nothing */);
        const v2222 = true;
        await txn3.getOutput('deleteBalanceBox', 'v2222', ctc3, v2222);
        const cv1572 = v1572;
        const cv1573 = v1764;
        
        v1572 = cv1572;
        v1573 = cv1573;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'destroy0_245': {
        const v2330 = v1763[1];
        undefined /* setApiDetails */;
        ;
        const v2419 = ['Some', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v2420 = {
          None: 0,
          Some: 1
          }[v2419[0]];
        const v2421 = stdlib.eq(v2420, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2421, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:242:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
          msg: 'ARC200: Zero address balance box not found',
          who: 'Deployer'
          });
        const v2426 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:90:27:decimal', stdlib.UInt_max, '0'), v1553);
        stdlib.assert(v2426, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:246:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
          msg: 'ARC200: Zero address balance box not total supply',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc4, v1544, ctc1, undefined /* Nothing */);
        const v2428 = null;
        await txn3.getOutput('destroy', 'v2428', ctc0, v2428);
        const v2435 = v1572.decimals;
        const v2436 = v1572.enableZeroAddressBurn;
        const v2437 = v1572.managerAddress;
        const v2438 = v1572.name;
        const v2439 = v1572.symbol;
        const v2440 = v1572.totalSupply;
        const v2441 = v1572.zeroAddress;
        const v2442 = {
          closed: true,
          decimals: v2435,
          enableZeroAddressBurn: v2436,
          managerAddress: v2437,
          name: v2438,
          symbol: v2439,
          totalSupply: v2440,
          zeroAddress: v2441
          };
        const cv1572 = v2442;
        const cv1573 = v1764;
        
        v1572 = cv1572;
        v1573 = cv1573;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'transfer0_245': {
        const v2518 = v1763[1];
        undefined /* setApiDetails */;
        ;
        const v2634 = v2518[stdlib.checkedBigNumberify('./index.rsh:135:10:spread', stdlib.UInt_max, '0')];
        const v2635 = v2518[stdlib.checkedBigNumberify('./index.rsh:135:10:spread', stdlib.UInt_max, '1')];
        const v2636 = stdlib.addressEq(v2634, v1544);
        const v2637 = v2636 ? false : true;
        const v2638 = v1546 ? true : v2637;
        stdlib.assert(v2638, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:136:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:13:function exp)'],
          msg: 'ARC200: Transfer to zero address',
          who: 'Deployer'
          });
        const v2640 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v1762, ctc1), null);
        const v2641 = stdlib.fromSome(v2640, stdlib.checkedBigNumberify('./index.rsh:112:32:decimal', stdlib.UInt_max, '0'));
        const v2642 = stdlib.ge(v2641, v2635);
        stdlib.assert(v2642, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:140:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:13:function exp)'],
          msg: 'ARC200: Transfer amount must not be greater than balance',
          who: 'Deployer'
          });
        const v2648 = stdlib.safeSub(v2641, v2635);
        await stdlib.mapSet(map0, ctc4, v1762, ctc1, v2648);
        const v2649 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2634, ctc1), null);
        const v2650 = stdlib.fromSome(v2649, stdlib.checkedBigNumberify('./index.rsh:112:32:decimal', stdlib.UInt_max, '0'));
        const v2651 = stdlib.safeAdd(v2650, v2635);
        await stdlib.mapSet(map0, ctc4, v2634, ctc1, v2651);
        null;
        const v2653 = true;
        await txn3.getOutput('transfer', 'v2653', ctc3, v2653);
        const cv1572 = v1572;
        const cv1573 = v1764;
        
        v1572 = cv1572;
        v1573 = cv1573;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'transferFrom0_245': {
        const v2706 = v1763[1];
        undefined /* setApiDetails */;
        ;
        const v2851 = v2706[stdlib.checkedBigNumberify('./index.rsh:156:10:spread', stdlib.UInt_max, '0')];
        const v2852 = v2706[stdlib.checkedBigNumberify('./index.rsh:156:10:spread', stdlib.UInt_max, '1')];
        const v2853 = v2706[stdlib.checkedBigNumberify('./index.rsh:156:10:spread', stdlib.UInt_max, '2')];
        const v2854 = stdlib.addressEq(v2851, v1544);
        const v2855 = v2854 ? false : true;
        stdlib.assert(v2855, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:157:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:168:13:application call to [unknown function] (defined at: ./index.rsh:168:13:function exp)'],
          msg: 'ARC200: Transfer from zero address',
          who: 'Deployer'
          });
        const v2857 = stdlib.addressEq(v2852, v1544);
        const v2858 = v2857 ? false : true;
        stdlib.assert(v2858, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:168:13:application call to [unknown function] (defined at: ./index.rsh:168:13:function exp)'],
          msg: 'ARC200: Transfer to zero address',
          who: 'Deployer'
          });
        const v2860 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2851, ctc1), null);
        const v2861 = stdlib.fromSome(v2860, stdlib.checkedBigNumberify('./index.rsh:112:32:decimal', stdlib.UInt_max, '0'));
        const v2862 = stdlib.ge(v2861, v2853);
        stdlib.assert(v2862, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:168:13:application call to [unknown function] (defined at: ./index.rsh:168:13:function exp)'],
          msg: 'ARC200: Amount must not be greater than balance',
          who: 'Deployer'
          });
        const v2864 = [v2851, v1762];
        const v2865 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc10, v2864, ctc1), null);
        const v2866 = stdlib.fromSome(v2865, stdlib.checkedBigNumberify('./index.rsh:117:32:decimal', stdlib.UInt_max, '0'));
        const v2867 = stdlib.ge(v2866, v2853);
        stdlib.assert(v2867, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:168:13:application call to [unknown function] (defined at: ./index.rsh:168:13:function exp)'],
          msg: 'ARC200: Amount must not be greater than allowance',
          who: 'Deployer'
          });
        const v2874 = stdlib.safeSub(v2861, v2853);
        await stdlib.mapSet(map0, ctc4, v2851, ctc1, v2874);
        const v2875 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2852, ctc1), null);
        const v2876 = stdlib.fromSome(v2875, stdlib.checkedBigNumberify('./index.rsh:112:32:decimal', stdlib.UInt_max, '0'));
        const v2877 = stdlib.safeAdd(v2876, v2853);
        await stdlib.mapSet(map0, ctc4, v2852, ctc1, v2877);
        null;
        const v2882 = stdlib.safeSub(v2866, v2853);
        await stdlib.mapSet(map1, ctc10, v2864, ctc1, v2882);
        null;
        const v2884 = true;
        await txn3.getOutput('transferFrom', 'v2884', ctc3, v2884);
        const cv1572 = v1572;
        const cv1573 = v1764;
        
        v1572 = cv1572;
        v1573 = cv1573;
        
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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc1,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1
    });
  const ctc8 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc1,
    enableZeroAddressBurn: ctc4,
    managerAddress: ctc3,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc9 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc11 = stdlib.T_Tuple([ctc3]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc14 = stdlib.T_Data({
    approve0_245: ctc9,
    deleteAllowanceBox0_245: ctc10,
    deleteBalanceBox0_245: ctc11,
    destroy0_245: ctc12,
    transfer0_245: ctc9,
    transferFrom0_245: ctc13
    });
  
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
  
  
  const [v1544, v1546, v1547, v1553, v1556, v1572] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8]);
  const v1658 = ctc.selfAddress();
  const v1660 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:182:40:application call to [unknown function] (defined at: ./index.rsh:182:40:function exp)', 'at ./index.rsh:108:29:application call to "runapprove0_245" (defined at: ./index.rsh:182:10:function exp)', 'at ./index.rsh:108:29:application call to [unknown function] (defined at: ./index.rsh:108:29:function exp)'],
    msg: 'in',
    who: 'approve'
    });
  const v1661 = v1660[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1665 = stdlib.addressEq(v1658, v1544);
  const v1666 = v1665 ? false : true;
  stdlib.assert(v1666, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:183:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:182:40:application call to [unknown function] (defined at: ./index.rsh:182:40:function exp)', 'at ./index.rsh:108:29:application call to "runapprove0_245" (defined at: ./index.rsh:182:10:function exp)', 'at ./index.rsh:108:29:application call to [unknown function] (defined at: ./index.rsh:108:29:function exp)'],
    msg: 'ARC200: Approve this to zero address',
    who: 'approve'
    });
  const v1668 = stdlib.addressEq(v1661, v1544);
  const v1669 = v1668 ? false : true;
  stdlib.assert(v1669, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:184:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:182:40:application call to [unknown function] (defined at: ./index.rsh:182:40:function exp)', 'at ./index.rsh:108:29:application call to "runapprove0_245" (defined at: ./index.rsh:182:10:function exp)', 'at ./index.rsh:108:29:application call to [unknown function] (defined at: ./index.rsh:108:29:function exp)'],
    msg: 'ARC200: Approve to zero address',
    who: 'approve'
    });
  const v1678 = ['approve0_245', v1660];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1544, v1546, v1547, v1553, v1556, v1572, v1678],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:182:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1763], secs: v1765, time: v1764, didSend: v1060, from: v1762 } = txn1;
      
      switch (v1763[0]) {
        case 'approve0_245': {
          const v1766 = v1763[1];
          sim_r.txns.push({
            kind: 'api',
            who: "approve"
            });
          ;
          const v1777 = v1766[stdlib.checkedBigNumberify('./index.rsh:182:10:spread', stdlib.UInt_max, '0')];
          const v1778 = v1766[stdlib.checkedBigNumberify('./index.rsh:182:10:spread', stdlib.UInt_max, '1')];
          const v1787 = [v1762, v1777];
          await stdlib.simMapSet(sim_r, 1, ctc10, v1787, ctc1, v1778);
          null;
          const v1788 = true;
          const v1789 = await txn1.getOutput('approve', 'v1788', ctc4, v1788);
          
          const v3762 = v1572;
          const v3764 = v1572.closed;
          if (v3764) {
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
        case 'deleteAllowanceBox0_245': {
          const v1954 = v1763[1];
          
          break;
          }
        case 'deleteBalanceBox0_245': {
          const v2142 = v1763[1];
          
          break;
          }
        case 'destroy0_245': {
          const v2330 = v1763[1];
          
          break;
          }
        case 'transfer0_245': {
          const v2518 = v1763[1];
          
          break;
          }
        case 'transferFrom0_245': {
          const v2706 = v1763[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1763], secs: v1765, time: v1764, didSend: v1060, from: v1762 } = txn1;
  switch (v1763[0]) {
    case 'approve0_245': {
      const v1766 = v1763[1];
      undefined /* setApiDetails */;
      ;
      const v1777 = v1766[stdlib.checkedBigNumberify('./index.rsh:182:10:spread', stdlib.UInt_max, '0')];
      const v1778 = v1766[stdlib.checkedBigNumberify('./index.rsh:182:10:spread', stdlib.UInt_max, '1')];
      const v1779 = stdlib.addressEq(v1762, v1544);
      const v1780 = v1779 ? false : true;
      stdlib.assert(v1780, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:183:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:186:13:application call to [unknown function] (defined at: ./index.rsh:186:13:function exp)'],
        msg: 'ARC200: Approve this to zero address',
        who: 'approve'
        });
      const v1782 = stdlib.addressEq(v1777, v1544);
      const v1783 = v1782 ? false : true;
      stdlib.assert(v1783, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:184:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:186:13:application call to [unknown function] (defined at: ./index.rsh:186:13:function exp)'],
        msg: 'ARC200: Approve to zero address',
        who: 'approve'
        });
      const v1787 = [v1762, v1777];
      await stdlib.mapSet(map1, ctc10, v1787, ctc1, v1778);
      null;
      const v1788 = true;
      const v1789 = await txn1.getOutput('approve', 'v1788', ctc4, v1788);
      if (v1060) {
        stdlib.protect(ctc0, await interact.out(v1766, v1789), {
          at: './index.rsh:182:11:application',
          fs: ['at ./index.rsh:182:11:application call to [unknown function] (defined at: ./index.rsh:182:11:function exp)', 'at ./index.rsh:189:12:application call to "k" (defined at: ./index.rsh:186:13:function exp)', 'at ./index.rsh:186:13:application call to [unknown function] (defined at: ./index.rsh:186:13:function exp)'],
          msg: 'out',
          who: 'approve'
          });
        }
      else {
        }
      
      const v3762 = v1572;
      const v3764 = v1572.closed;
      if (v3764) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'deleteAllowanceBox0_245': {
      const v1954 = v1763[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_245': {
      const v2142 = v1763[1];
      return;
      break;
      }
    case 'destroy0_245': {
      const v2330 = v1763[1];
      return;
      break;
      }
    case 'transfer0_245': {
      const v2518 = v1763[1];
      return;
      break;
      }
    case 'transferFrom0_245': {
      const v2706 = v1763[1];
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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc1,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1
    });
  const ctc8 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc1,
    enableZeroAddressBurn: ctc4,
    managerAddress: ctc3,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc9 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc10 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc3]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc14 = stdlib.T_Data({
    approve0_245: ctc10,
    deleteAllowanceBox0_245: ctc9,
    deleteBalanceBox0_245: ctc11,
    destroy0_245: ctc12,
    transfer0_245: ctc10,
    transferFrom0_245: ctc13
    });
  
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
  
  
  const [v1544, v1546, v1547, v1553, v1556, v1572] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8]);
  const v1710 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:218:50:application call to [unknown function] (defined at: ./index.rsh:218:50:function exp)', 'at ./index.rsh:108:29:application call to "rundeleteAllowanceBox0_245" (defined at: ./index.rsh:218:10:function exp)', 'at ./index.rsh:108:29:application call to [unknown function] (defined at: ./index.rsh:108:29:function exp)'],
    msg: 'in',
    who: 'deleteAllowanceBox'
    });
  const v1711 = v1710[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1712 = v1710[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1715 = [v1711, v1712];
  const v1716 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc9, v1715, ctc1), null);
  const v1717 = {
    None: 0,
    Some: 1
    }[v1716[0]];
  const v1718 = stdlib.eq(v1717, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1718, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:219:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:218:50:application call to [unknown function] (defined at: ./index.rsh:218:50:function exp)', 'at ./index.rsh:108:29:application call to "rundeleteAllowanceBox0_245" (defined at: ./index.rsh:218:10:function exp)', 'at ./index.rsh:108:29:application call to [unknown function] (defined at: ./index.rsh:108:29:function exp)'],
    msg: 'ARC200: Allowance box not found',
    who: 'deleteAllowanceBox'
    });
  const v1722 = stdlib.fromSome(v1716, stdlib.checkedBigNumberify('./index.rsh:117:32:decimal', stdlib.UInt_max, '0'));
  const v1723 = stdlib.eq(v1722, stdlib.checkedBigNumberify('./index.rsh:224:38:decimal', stdlib.UInt_max, '0'));
  const v1727 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:90:27:decimal', stdlib.UInt_max, '0'), v1553);
  const v1728 = v1723 ? true : v1727;
  stdlib.assert(v1728, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:223:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:218:50:application call to [unknown function] (defined at: ./index.rsh:218:50:function exp)', 'at ./index.rsh:108:29:application call to "rundeleteAllowanceBox0_245" (defined at: ./index.rsh:218:10:function exp)', 'at ./index.rsh:108:29:application call to [unknown function] (defined at: ./index.rsh:108:29:function exp)'],
    msg: 'ARC200: Allowance box not empty or zero address balance box not total supply',
    who: 'deleteAllowanceBox'
    });
  const v1737 = ['deleteAllowanceBox0_245', v1710];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1544, v1546, v1547, v1553, v1556, v1572, v1737],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:218:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1763], secs: v1765, time: v1764, didSend: v1060, from: v1762 } = txn1;
      
      switch (v1763[0]) {
        case 'approve0_245': {
          const v1766 = v1763[1];
          
          break;
          }
        case 'deleteAllowanceBox0_245': {
          const v1954 = v1763[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteAllowanceBox"
            });
          ;
          const v1986 = v1954[stdlib.checkedBigNumberify('./index.rsh:218:10:spread', stdlib.UInt_max, '0')];
          const v1987 = v1954[stdlib.checkedBigNumberify('./index.rsh:218:10:spread', stdlib.UInt_max, '1')];
          const v1988 = [v1986, v1987];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc9, v1988, ctc1), null);
          await stdlib.simMapSet(sim_r, 1, ctc9, v1988, ctc1, undefined /* Nothing */);
          const v2006 = true;
          const v2007 = await txn1.getOutput('deleteAllowanceBox', 'v2006', ctc4, v2006);
          
          const v3790 = v1572;
          const v3792 = v1572.closed;
          if (v3792) {
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
        case 'deleteBalanceBox0_245': {
          const v2142 = v1763[1];
          
          break;
          }
        case 'destroy0_245': {
          const v2330 = v1763[1];
          
          break;
          }
        case 'transfer0_245': {
          const v2518 = v1763[1];
          
          break;
          }
        case 'transferFrom0_245': {
          const v2706 = v1763[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1763], secs: v1765, time: v1764, didSend: v1060, from: v1762 } = txn1;
  switch (v1763[0]) {
    case 'approve0_245': {
      const v1766 = v1763[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_245': {
      const v1954 = v1763[1];
      undefined /* setApiDetails */;
      ;
      const v1986 = v1954[stdlib.checkedBigNumberify('./index.rsh:218:10:spread', stdlib.UInt_max, '0')];
      const v1987 = v1954[stdlib.checkedBigNumberify('./index.rsh:218:10:spread', stdlib.UInt_max, '1')];
      const v1988 = [v1986, v1987];
      const v1989 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc9, v1988, ctc1), null);
      const v1990 = {
        None: 0,
        Some: 1
        }[v1989[0]];
      const v1991 = stdlib.eq(v1990, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1991, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:219:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:229:13:application call to [unknown function] (defined at: ./index.rsh:229:13:function exp)'],
        msg: 'ARC200: Allowance box not found',
        who: 'deleteAllowanceBox'
        });
      const v1995 = stdlib.fromSome(v1989, stdlib.checkedBigNumberify('./index.rsh:117:32:decimal', stdlib.UInt_max, '0'));
      const v1996 = stdlib.eq(v1995, stdlib.checkedBigNumberify('./index.rsh:224:38:decimal', stdlib.UInt_max, '0'));
      const v2000 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:90:27:decimal', stdlib.UInt_max, '0'), v1553);
      const v2001 = v1996 ? true : v2000;
      stdlib.assert(v2001, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:223:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:229:13:application call to [unknown function] (defined at: ./index.rsh:229:13:function exp)'],
        msg: 'ARC200: Allowance box not empty or zero address balance box not total supply',
        who: 'deleteAllowanceBox'
        });
      await stdlib.mapSet(map1, ctc9, v1988, ctc1, undefined /* Nothing */);
      const v2006 = true;
      const v2007 = await txn1.getOutput('deleteAllowanceBox', 'v2006', ctc4, v2006);
      if (v1060) {
        stdlib.protect(ctc0, await interact.out(v1954, v2007), {
          at: './index.rsh:218:11:application',
          fs: ['at ./index.rsh:218:11:application call to [unknown function] (defined at: ./index.rsh:218:11:function exp)', 'at ./index.rsh:231:12:application call to "k" (defined at: ./index.rsh:229:13:function exp)', 'at ./index.rsh:229:13:application call to [unknown function] (defined at: ./index.rsh:229:13:function exp)'],
          msg: 'out',
          who: 'deleteAllowanceBox'
          });
        }
      else {
        }
      
      const v3790 = v1572;
      const v3792 = v1572.closed;
      if (v3792) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'deleteBalanceBox0_245': {
      const v2142 = v1763[1];
      return;
      break;
      }
    case 'destroy0_245': {
      const v2330 = v1763[1];
      return;
      break;
      }
    case 'transfer0_245': {
      const v2518 = v1763[1];
      return;
      break;
      }
    case 'transferFrom0_245': {
      const v2706 = v1763[1];
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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc1,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1
    });
  const ctc8 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc1,
    enableZeroAddressBurn: ctc4,
    managerAddress: ctc3,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc9 = stdlib.T_Tuple([ctc3]);
  const ctc10 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc14 = stdlib.T_Data({
    approve0_245: ctc10,
    deleteAllowanceBox0_245: ctc11,
    deleteBalanceBox0_245: ctc9,
    destroy0_245: ctc12,
    transfer0_245: ctc10,
    transferFrom0_245: ctc13
    });
  
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
  
  
  const [v1544, v1546, v1547, v1553, v1556, v1572] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8]);
  const v1682 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:199:38:application call to [unknown function] (defined at: ./index.rsh:199:38:function exp)', 'at ./index.rsh:108:29:application call to "rundeleteBalanceBox0_245" (defined at: ./index.rsh:199:10:function exp)', 'at ./index.rsh:108:29:application call to [unknown function] (defined at: ./index.rsh:108:29:function exp)'],
    msg: 'in',
    who: 'deleteBalanceBox'
    });
  const v1683 = v1682[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1685 = stdlib.addressEq(v1683, v1544);
  const v1686 = v1685 ? false : true;
  stdlib.assert(v1686, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:200:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:199:38:application call to [unknown function] (defined at: ./index.rsh:199:38:function exp)', 'at ./index.rsh:108:29:application call to "rundeleteBalanceBox0_245" (defined at: ./index.rsh:199:10:function exp)', 'at ./index.rsh:108:29:application call to [unknown function] (defined at: ./index.rsh:108:29:function exp)'],
    msg: 'ARC200: Delete balance box to zero address',
    who: 'deleteBalanceBox'
    });
  const v1688 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1683, ctc1), null);
  const v1689 = {
    None: 0,
    Some: 1
    }[v1688[0]];
  const v1690 = stdlib.eq(v1689, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1690, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:201:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:199:38:application call to [unknown function] (defined at: ./index.rsh:199:38:function exp)', 'at ./index.rsh:108:29:application call to "rundeleteBalanceBox0_245" (defined at: ./index.rsh:199:10:function exp)', 'at ./index.rsh:108:29:application call to [unknown function] (defined at: ./index.rsh:108:29:function exp)'],
    msg: 'ARC200: Balance box not found',
    who: 'deleteBalanceBox'
    });
  const v1693 = stdlib.fromSome(v1688, stdlib.checkedBigNumberify('./index.rsh:112:32:decimal', stdlib.UInt_max, '0'));
  const v1694 = stdlib.eq(v1693, stdlib.checkedBigNumberify('./index.rsh:203:28:decimal', stdlib.UInt_max, '0'));
  const v1698 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:90:27:decimal', stdlib.UInt_max, '0'), v1553);
  const v1699 = v1694 ? true : v1698;
  stdlib.assert(v1699, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:202:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:199:38:application call to [unknown function] (defined at: ./index.rsh:199:38:function exp)', 'at ./index.rsh:108:29:application call to "rundeleteBalanceBox0_245" (defined at: ./index.rsh:199:10:function exp)', 'at ./index.rsh:108:29:application call to [unknown function] (defined at: ./index.rsh:108:29:function exp)'],
    msg: 'ARC200: Balance box not empty or zero address balance box not total supply',
    who: 'deleteBalanceBox'
    });
  const v1706 = ['deleteBalanceBox0_245', v1682];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1544, v1546, v1547, v1553, v1556, v1572, v1706],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:199:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1763], secs: v1765, time: v1764, didSend: v1060, from: v1762 } = txn1;
      
      switch (v1763[0]) {
        case 'approve0_245': {
          const v1766 = v1763[1];
          
          break;
          }
        case 'deleteAllowanceBox0_245': {
          const v1954 = v1763[1];
          
          break;
          }
        case 'deleteBalanceBox0_245': {
          const v2142 = v1763[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteBalanceBox"
            });
          ;
          const v2204 = v2142[stdlib.checkedBigNumberify('./index.rsh:199:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2204, ctc1), null);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2204, ctc1, undefined /* Nothing */);
          const v2222 = true;
          const v2223 = await txn1.getOutput('deleteBalanceBox', 'v2222', ctc4, v2222);
          
          const v3818 = v1572;
          const v3820 = v1572.closed;
          if (v3820) {
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
        case 'destroy0_245': {
          const v2330 = v1763[1];
          
          break;
          }
        case 'transfer0_245': {
          const v2518 = v1763[1];
          
          break;
          }
        case 'transferFrom0_245': {
          const v2706 = v1763[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1763], secs: v1765, time: v1764, didSend: v1060, from: v1762 } = txn1;
  switch (v1763[0]) {
    case 'approve0_245': {
      const v1766 = v1763[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_245': {
      const v1954 = v1763[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_245': {
      const v2142 = v1763[1];
      undefined /* setApiDetails */;
      ;
      const v2204 = v2142[stdlib.checkedBigNumberify('./index.rsh:199:10:spread', stdlib.UInt_max, '0')];
      const v2205 = stdlib.addressEq(v2204, v1544);
      const v2206 = v2205 ? false : true;
      stdlib.assert(v2206, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:200:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
        msg: 'ARC200: Delete balance box to zero address',
        who: 'deleteBalanceBox'
        });
      const v2208 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2204, ctc1), null);
      const v2209 = {
        None: 0,
        Some: 1
        }[v2208[0]];
      const v2210 = stdlib.eq(v2209, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2210, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:201:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
        msg: 'ARC200: Balance box not found',
        who: 'deleteBalanceBox'
        });
      const v2213 = stdlib.fromSome(v2208, stdlib.checkedBigNumberify('./index.rsh:112:32:decimal', stdlib.UInt_max, '0'));
      const v2214 = stdlib.eq(v2213, stdlib.checkedBigNumberify('./index.rsh:203:28:decimal', stdlib.UInt_max, '0'));
      const v2218 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:90:27:decimal', stdlib.UInt_max, '0'), v1553);
      const v2219 = v2214 ? true : v2218;
      stdlib.assert(v2219, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:202:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
        msg: 'ARC200: Balance box not empty or zero address balance box not total supply',
        who: 'deleteBalanceBox'
        });
      await stdlib.mapSet(map0, ctc3, v2204, ctc1, undefined /* Nothing */);
      const v2222 = true;
      const v2223 = await txn1.getOutput('deleteBalanceBox', 'v2222', ctc4, v2222);
      if (v1060) {
        stdlib.protect(ctc0, await interact.out(v2142, v2223), {
          at: './index.rsh:199:11:application',
          fs: ['at ./index.rsh:199:11:application call to [unknown function] (defined at: ./index.rsh:199:11:function exp)', 'at ./index.rsh:209:12:application call to "k" (defined at: ./index.rsh:207:13:function exp)', 'at ./index.rsh:207:13:application call to [unknown function] (defined at: ./index.rsh:207:13:function exp)'],
          msg: 'out',
          who: 'deleteBalanceBox'
          });
        }
      else {
        }
      
      const v3818 = v1572;
      const v3820 = v1572.closed;
      if (v3820) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'destroy0_245': {
      const v2330 = v1763[1];
      return;
      break;
      }
    case 'transfer0_245': {
      const v2518 = v1763[1];
      return;
      break;
      }
    case 'transferFrom0_245': {
      const v2706 = v1763[1];
      return;
      break;
      }
    }
  
  
  };
export async function _destroy3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _destroy3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _destroy3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc1,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1
    });
  const ctc8 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc1,
    enableZeroAddressBurn: ctc4,
    managerAddress: ctc3,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc3]);
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc14 = stdlib.T_Data({
    approve0_245: ctc10,
    deleteAllowanceBox0_245: ctc11,
    deleteBalanceBox0_245: ctc12,
    destroy0_245: ctc9,
    transfer0_245: ctc10,
    transferFrom0_245: ctc13
    });
  
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
  
  
  const [v1544, v1546, v1547, v1553, v1556, v1572] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8]);
  const v1741 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:241:25:application call to [unknown function] (defined at: ./index.rsh:241:25:function exp)', 'at ./index.rsh:108:29:application call to "rundestroy0_245" (defined at: ./index.rsh:241:10:function exp)', 'at ./index.rsh:108:29:application call to [unknown function] (defined at: ./index.rsh:108:29:function exp)'],
    msg: 'in',
    who: 'destroy'
    });
  const v1742 = ['Some', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v1743 = {
    None: 0,
    Some: 1
    }[v1742[0]];
  const v1744 = stdlib.eq(v1743, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1744, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:242:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:241:25:application call to [unknown function] (defined at: ./index.rsh:241:25:function exp)', 'at ./index.rsh:108:29:application call to "rundestroy0_245" (defined at: ./index.rsh:241:10:function exp)', 'at ./index.rsh:108:29:application call to [unknown function] (defined at: ./index.rsh:108:29:function exp)'],
    msg: 'ARC200: Zero address balance box not found',
    who: 'destroy'
    });
  const v1749 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:90:27:decimal', stdlib.UInt_max, '0'), v1553);
  stdlib.assert(v1749, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:246:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:241:25:application call to [unknown function] (defined at: ./index.rsh:241:25:function exp)', 'at ./index.rsh:108:29:application call to "rundestroy0_245" (defined at: ./index.rsh:241:10:function exp)', 'at ./index.rsh:108:29:application call to [unknown function] (defined at: ./index.rsh:108:29:function exp)'],
    msg: 'ARC200: Zero address balance box not total supply',
    who: 'destroy'
    });
  const v1754 = ['destroy0_245', v1741];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1544, v1546, v1547, v1553, v1556, v1572, v1754],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:241:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1763], secs: v1765, time: v1764, didSend: v1060, from: v1762 } = txn1;
      
      switch (v1763[0]) {
        case 'approve0_245': {
          const v1766 = v1763[1];
          
          break;
          }
        case 'deleteAllowanceBox0_245': {
          const v1954 = v1763[1];
          
          break;
          }
        case 'deleteBalanceBox0_245': {
          const v2142 = v1763[1];
          
          break;
          }
        case 'destroy0_245': {
          const v2330 = v1763[1];
          sim_r.txns.push({
            kind: 'api',
            who: "destroy"
            });
          ;
          await stdlib.simMapSet(sim_r, 0, ctc3, v1544, ctc1, undefined /* Nothing */);
          const v2428 = null;
          const v2429 = await txn1.getOutput('destroy', 'v2428', ctc0, v2428);
          
          const v2435 = v1572.decimals;
          const v2436 = v1572.enableZeroAddressBurn;
          const v2437 = v1572.managerAddress;
          const v2438 = v1572.name;
          const v2439 = v1572.symbol;
          const v2440 = v1572.totalSupply;
          const v2441 = v1572.zeroAddress;
          const v2442 = {
            closed: true,
            decimals: v2435,
            enableZeroAddressBurn: v2436,
            managerAddress: v2437,
            name: v2438,
            symbol: v2439,
            totalSupply: v2440,
            zeroAddress: v2441
            };
          const v3846 = v2442;
          const v3848 = v2442.closed;
          if (v3848) {
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
        case 'transfer0_245': {
          const v2518 = v1763[1];
          
          break;
          }
        case 'transferFrom0_245': {
          const v2706 = v1763[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1763], secs: v1765, time: v1764, didSend: v1060, from: v1762 } = txn1;
  switch (v1763[0]) {
    case 'approve0_245': {
      const v1766 = v1763[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_245': {
      const v1954 = v1763[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_245': {
      const v2142 = v1763[1];
      return;
      break;
      }
    case 'destroy0_245': {
      const v2330 = v1763[1];
      undefined /* setApiDetails */;
      ;
      const v2419 = ['Some', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v2420 = {
        None: 0,
        Some: 1
        }[v2419[0]];
      const v2421 = stdlib.eq(v2420, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2421, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:242:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
        msg: 'ARC200: Zero address balance box not found',
        who: 'destroy'
        });
      const v2426 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:90:27:decimal', stdlib.UInt_max, '0'), v1553);
      stdlib.assert(v2426, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:246:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
        msg: 'ARC200: Zero address balance box not total supply',
        who: 'destroy'
        });
      await stdlib.mapSet(map0, ctc3, v1544, ctc1, undefined /* Nothing */);
      const v2428 = null;
      const v2429 = await txn1.getOutput('destroy', 'v2428', ctc0, v2428);
      if (v1060) {
        stdlib.protect(ctc0, await interact.out(v2330, v2429), {
          at: './index.rsh:241:11:application',
          fs: ['at ./index.rsh:241:11:application call to [unknown function] (defined at: ./index.rsh:241:11:function exp)', 'at ./index.rsh:253:12:application call to "k" (defined at: ./index.rsh:251:13:function exp)', 'at ./index.rsh:251:13:application call to [unknown function] (defined at: ./index.rsh:251:13:function exp)'],
          msg: 'out',
          who: 'destroy'
          });
        }
      else {
        }
      
      const v2435 = v1572.decimals;
      const v2436 = v1572.enableZeroAddressBurn;
      const v2437 = v1572.managerAddress;
      const v2438 = v1572.name;
      const v2439 = v1572.symbol;
      const v2440 = v1572.totalSupply;
      const v2441 = v1572.zeroAddress;
      const v2442 = {
        closed: true,
        decimals: v2435,
        enableZeroAddressBurn: v2436,
        managerAddress: v2437,
        name: v2438,
        symbol: v2439,
        totalSupply: v2440,
        zeroAddress: v2441
        };
      const v3846 = v2442;
      const v3848 = v2442.closed;
      if (v3848) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'transfer0_245': {
      const v2518 = v1763[1];
      return;
      break;
      }
    case 'transferFrom0_245': {
      const v2706 = v1763[1];
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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc1,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1
    });
  const ctc8 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc1,
    enableZeroAddressBurn: ctc4,
    managerAddress: ctc3,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc9 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc11 = stdlib.T_Tuple([ctc3]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc14 = stdlib.T_Data({
    approve0_245: ctc9,
    deleteAllowanceBox0_245: ctc10,
    deleteBalanceBox0_245: ctc11,
    destroy0_245: ctc12,
    transfer0_245: ctc9,
    transferFrom0_245: ctc13
    });
  
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
  
  
  const [v1544, v1546, v1547, v1553, v1556, v1572] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8]);
  const v1599 = ctc.selfAddress();
  const v1601 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:135:36:application call to [unknown function] (defined at: ./index.rsh:135:36:function exp)', 'at ./index.rsh:108:29:application call to "runtransfer0_245" (defined at: ./index.rsh:135:10:function exp)', 'at ./index.rsh:108:29:application call to [unknown function] (defined at: ./index.rsh:108:29:function exp)'],
    msg: 'in',
    who: 'transfer'
    });
  const v1602 = v1601[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1603 = v1601[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1606 = stdlib.addressEq(v1602, v1544);
  const v1607 = v1606 ? false : true;
  const v1608 = v1546 ? true : v1607;
  stdlib.assert(v1608, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:136:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:135:36:application call to [unknown function] (defined at: ./index.rsh:135:36:function exp)', 'at ./index.rsh:108:29:application call to "runtransfer0_245" (defined at: ./index.rsh:135:10:function exp)', 'at ./index.rsh:108:29:application call to [unknown function] (defined at: ./index.rsh:108:29:function exp)'],
    msg: 'ARC200: Transfer to zero address',
    who: 'transfer'
    });
  const v1610 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1599, ctc1), null);
  const v1611 = stdlib.fromSome(v1610, stdlib.checkedBigNumberify('./index.rsh:112:32:decimal', stdlib.UInt_max, '0'));
  const v1612 = stdlib.ge(v1611, v1603);
  stdlib.assert(v1612, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:140:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:135:36:application call to [unknown function] (defined at: ./index.rsh:135:36:function exp)', 'at ./index.rsh:108:29:application call to "runtransfer0_245" (defined at: ./index.rsh:135:10:function exp)', 'at ./index.rsh:108:29:application call to [unknown function] (defined at: ./index.rsh:108:29:function exp)'],
    msg: 'ARC200: Transfer amount must not be greater than balance',
    who: 'transfer'
    });
  const v1621 = ['transfer0_245', v1601];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1544, v1546, v1547, v1553, v1556, v1572, v1621],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:135:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1763], secs: v1765, time: v1764, didSend: v1060, from: v1762 } = txn1;
      
      switch (v1763[0]) {
        case 'approve0_245': {
          const v1766 = v1763[1];
          
          break;
          }
        case 'deleteAllowanceBox0_245': {
          const v1954 = v1763[1];
          
          break;
          }
        case 'deleteBalanceBox0_245': {
          const v2142 = v1763[1];
          
          break;
          }
        case 'destroy0_245': {
          const v2330 = v1763[1];
          
          break;
          }
        case 'transfer0_245': {
          const v2518 = v1763[1];
          sim_r.txns.push({
            kind: 'api',
            who: "transfer"
            });
          ;
          const v2634 = v2518[stdlib.checkedBigNumberify('./index.rsh:135:10:spread', stdlib.UInt_max, '0')];
          const v2635 = v2518[stdlib.checkedBigNumberify('./index.rsh:135:10:spread', stdlib.UInt_max, '1')];
          const v2640 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v1762, ctc1), null);
          const v2641 = stdlib.fromSome(v2640, stdlib.checkedBigNumberify('./index.rsh:112:32:decimal', stdlib.UInt_max, '0'));
          const v2648 = stdlib.safeSub(v2641, v2635);
          await stdlib.simMapSet(sim_r, 0, ctc3, v1762, ctc1, v2648);
          const v2649 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2634, ctc1), null);
          const v2650 = stdlib.fromSome(v2649, stdlib.checkedBigNumberify('./index.rsh:112:32:decimal', stdlib.UInt_max, '0'));
          const v2651 = stdlib.safeAdd(v2650, v2635);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2634, ctc1, v2651);
          null;
          const v2653 = true;
          const v2654 = await txn1.getOutput('transfer', 'v2653', ctc4, v2653);
          
          const v3874 = v1572;
          const v3876 = v1572.closed;
          if (v3876) {
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
        case 'transferFrom0_245': {
          const v2706 = v1763[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1763], secs: v1765, time: v1764, didSend: v1060, from: v1762 } = txn1;
  switch (v1763[0]) {
    case 'approve0_245': {
      const v1766 = v1763[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_245': {
      const v1954 = v1763[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_245': {
      const v2142 = v1763[1];
      return;
      break;
      }
    case 'destroy0_245': {
      const v2330 = v1763[1];
      return;
      break;
      }
    case 'transfer0_245': {
      const v2518 = v1763[1];
      undefined /* setApiDetails */;
      ;
      const v2634 = v2518[stdlib.checkedBigNumberify('./index.rsh:135:10:spread', stdlib.UInt_max, '0')];
      const v2635 = v2518[stdlib.checkedBigNumberify('./index.rsh:135:10:spread', stdlib.UInt_max, '1')];
      const v2636 = stdlib.addressEq(v2634, v1544);
      const v2637 = v2636 ? false : true;
      const v2638 = v1546 ? true : v2637;
      stdlib.assert(v2638, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:136:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:13:function exp)'],
        msg: 'ARC200: Transfer to zero address',
        who: 'transfer'
        });
      const v2640 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1762, ctc1), null);
      const v2641 = stdlib.fromSome(v2640, stdlib.checkedBigNumberify('./index.rsh:112:32:decimal', stdlib.UInt_max, '0'));
      const v2642 = stdlib.ge(v2641, v2635);
      stdlib.assert(v2642, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:140:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:13:function exp)'],
        msg: 'ARC200: Transfer amount must not be greater than balance',
        who: 'transfer'
        });
      const v2648 = stdlib.safeSub(v2641, v2635);
      await stdlib.mapSet(map0, ctc3, v1762, ctc1, v2648);
      const v2649 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2634, ctc1), null);
      const v2650 = stdlib.fromSome(v2649, stdlib.checkedBigNumberify('./index.rsh:112:32:decimal', stdlib.UInt_max, '0'));
      const v2651 = stdlib.safeAdd(v2650, v2635);
      await stdlib.mapSet(map0, ctc3, v2634, ctc1, v2651);
      null;
      const v2653 = true;
      const v2654 = await txn1.getOutput('transfer', 'v2653', ctc4, v2653);
      if (v1060) {
        stdlib.protect(ctc0, await interact.out(v2518, v2654), {
          at: './index.rsh:135:11:application',
          fs: ['at ./index.rsh:135:11:application call to [unknown function] (defined at: ./index.rsh:135:11:function exp)', 'at ./index.rsh:147:12:application call to "k" (defined at: ./index.rsh:145:13:function exp)', 'at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:13:function exp)'],
          msg: 'out',
          who: 'transfer'
          });
        }
      else {
        }
      
      const v3874 = v1572;
      const v3876 = v1572.closed;
      if (v3876) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'transferFrom0_245': {
      const v2706 = v1763[1];
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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc1,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1
    });
  const ctc8 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc1,
    enableZeroAddressBurn: ctc4,
    managerAddress: ctc3,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc9 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc3]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Data({
    approve0_245: ctc11,
    deleteAllowanceBox0_245: ctc10,
    deleteBalanceBox0_245: ctc12,
    destroy0_245: ctc13,
    transfer0_245: ctc11,
    transferFrom0_245: ctc9
    });
  
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
  
  
  const [v1544, v1546, v1547, v1553, v1556, v1572] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8]);
  const v1623 = ctc.selfAddress();
  const v1625 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:156:47:application call to [unknown function] (defined at: ./index.rsh:156:47:function exp)', 'at ./index.rsh:108:29:application call to "runtransferFrom0_245" (defined at: ./index.rsh:156:10:function exp)', 'at ./index.rsh:108:29:application call to [unknown function] (defined at: ./index.rsh:108:29:function exp)'],
    msg: 'in',
    who: 'transferFrom'
    });
  const v1626 = v1625[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1627 = v1625[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1628 = v1625[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v1632 = stdlib.addressEq(v1626, v1544);
  const v1633 = v1632 ? false : true;
  stdlib.assert(v1633, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:157:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:156:47:application call to [unknown function] (defined at: ./index.rsh:156:47:function exp)', 'at ./index.rsh:108:29:application call to "runtransferFrom0_245" (defined at: ./index.rsh:156:10:function exp)', 'at ./index.rsh:108:29:application call to [unknown function] (defined at: ./index.rsh:108:29:function exp)'],
    msg: 'ARC200: Transfer from zero address',
    who: 'transferFrom'
    });
  const v1635 = stdlib.addressEq(v1627, v1544);
  const v1636 = v1635 ? false : true;
  stdlib.assert(v1636, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:156:47:application call to [unknown function] (defined at: ./index.rsh:156:47:function exp)', 'at ./index.rsh:108:29:application call to "runtransferFrom0_245" (defined at: ./index.rsh:156:10:function exp)', 'at ./index.rsh:108:29:application call to [unknown function] (defined at: ./index.rsh:108:29:function exp)'],
    msg: 'ARC200: Transfer to zero address',
    who: 'transferFrom'
    });
  const v1638 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1626, ctc1), null);
  const v1639 = stdlib.fromSome(v1638, stdlib.checkedBigNumberify('./index.rsh:112:32:decimal', stdlib.UInt_max, '0'));
  const v1640 = stdlib.ge(v1639, v1628);
  stdlib.assert(v1640, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:156:47:application call to [unknown function] (defined at: ./index.rsh:156:47:function exp)', 'at ./index.rsh:108:29:application call to "runtransferFrom0_245" (defined at: ./index.rsh:156:10:function exp)', 'at ./index.rsh:108:29:application call to [unknown function] (defined at: ./index.rsh:108:29:function exp)'],
    msg: 'ARC200: Amount must not be greater than balance',
    who: 'transferFrom'
    });
  const v1642 = [v1626, v1623];
  const v1643 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc10, v1642, ctc1), null);
  const v1644 = stdlib.fromSome(v1643, stdlib.checkedBigNumberify('./index.rsh:117:32:decimal', stdlib.UInt_max, '0'));
  const v1645 = stdlib.ge(v1644, v1628);
  stdlib.assert(v1645, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:156:47:application call to [unknown function] (defined at: ./index.rsh:156:47:function exp)', 'at ./index.rsh:108:29:application call to "runtransferFrom0_245" (defined at: ./index.rsh:156:10:function exp)', 'at ./index.rsh:108:29:application call to [unknown function] (defined at: ./index.rsh:108:29:function exp)'],
    msg: 'ARC200: Amount must not be greater than allowance',
    who: 'transferFrom'
    });
  const v1656 = ['transferFrom0_245', v1625];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1544, v1546, v1547, v1553, v1556, v1572, v1656],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:156:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1763], secs: v1765, time: v1764, didSend: v1060, from: v1762 } = txn1;
      
      switch (v1763[0]) {
        case 'approve0_245': {
          const v1766 = v1763[1];
          
          break;
          }
        case 'deleteAllowanceBox0_245': {
          const v1954 = v1763[1];
          
          break;
          }
        case 'deleteBalanceBox0_245': {
          const v2142 = v1763[1];
          
          break;
          }
        case 'destroy0_245': {
          const v2330 = v1763[1];
          
          break;
          }
        case 'transfer0_245': {
          const v2518 = v1763[1];
          
          break;
          }
        case 'transferFrom0_245': {
          const v2706 = v1763[1];
          sim_r.txns.push({
            kind: 'api',
            who: "transferFrom"
            });
          ;
          const v2851 = v2706[stdlib.checkedBigNumberify('./index.rsh:156:10:spread', stdlib.UInt_max, '0')];
          const v2852 = v2706[stdlib.checkedBigNumberify('./index.rsh:156:10:spread', stdlib.UInt_max, '1')];
          const v2853 = v2706[stdlib.checkedBigNumberify('./index.rsh:156:10:spread', stdlib.UInt_max, '2')];
          const v2860 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2851, ctc1), null);
          const v2861 = stdlib.fromSome(v2860, stdlib.checkedBigNumberify('./index.rsh:112:32:decimal', stdlib.UInt_max, '0'));
          const v2864 = [v2851, v1762];
          const v2865 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc10, v2864, ctc1), null);
          const v2866 = stdlib.fromSome(v2865, stdlib.checkedBigNumberify('./index.rsh:117:32:decimal', stdlib.UInt_max, '0'));
          const v2874 = stdlib.safeSub(v2861, v2853);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2851, ctc1, v2874);
          const v2875 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2852, ctc1), null);
          const v2876 = stdlib.fromSome(v2875, stdlib.checkedBigNumberify('./index.rsh:112:32:decimal', stdlib.UInt_max, '0'));
          const v2877 = stdlib.safeAdd(v2876, v2853);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2852, ctc1, v2877);
          null;
          const v2882 = stdlib.safeSub(v2866, v2853);
          await stdlib.simMapSet(sim_r, 1, ctc10, v2864, ctc1, v2882);
          null;
          const v2884 = true;
          const v2885 = await txn1.getOutput('transferFrom', 'v2884', ctc4, v2884);
          
          const v3902 = v1572;
          const v3904 = v1572.closed;
          if (v3904) {
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
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1763], secs: v1765, time: v1764, didSend: v1060, from: v1762 } = txn1;
  switch (v1763[0]) {
    case 'approve0_245': {
      const v1766 = v1763[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_245': {
      const v1954 = v1763[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_245': {
      const v2142 = v1763[1];
      return;
      break;
      }
    case 'destroy0_245': {
      const v2330 = v1763[1];
      return;
      break;
      }
    case 'transfer0_245': {
      const v2518 = v1763[1];
      return;
      break;
      }
    case 'transferFrom0_245': {
      const v2706 = v1763[1];
      undefined /* setApiDetails */;
      ;
      const v2851 = v2706[stdlib.checkedBigNumberify('./index.rsh:156:10:spread', stdlib.UInt_max, '0')];
      const v2852 = v2706[stdlib.checkedBigNumberify('./index.rsh:156:10:spread', stdlib.UInt_max, '1')];
      const v2853 = v2706[stdlib.checkedBigNumberify('./index.rsh:156:10:spread', stdlib.UInt_max, '2')];
      const v2854 = stdlib.addressEq(v2851, v1544);
      const v2855 = v2854 ? false : true;
      stdlib.assert(v2855, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:157:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:168:13:application call to [unknown function] (defined at: ./index.rsh:168:13:function exp)'],
        msg: 'ARC200: Transfer from zero address',
        who: 'transferFrom'
        });
      const v2857 = stdlib.addressEq(v2852, v1544);
      const v2858 = v2857 ? false : true;
      stdlib.assert(v2858, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:168:13:application call to [unknown function] (defined at: ./index.rsh:168:13:function exp)'],
        msg: 'ARC200: Transfer to zero address',
        who: 'transferFrom'
        });
      const v2860 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2851, ctc1), null);
      const v2861 = stdlib.fromSome(v2860, stdlib.checkedBigNumberify('./index.rsh:112:32:decimal', stdlib.UInt_max, '0'));
      const v2862 = stdlib.ge(v2861, v2853);
      stdlib.assert(v2862, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:168:13:application call to [unknown function] (defined at: ./index.rsh:168:13:function exp)'],
        msg: 'ARC200: Amount must not be greater than balance',
        who: 'transferFrom'
        });
      const v2864 = [v2851, v1762];
      const v2865 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc10, v2864, ctc1), null);
      const v2866 = stdlib.fromSome(v2865, stdlib.checkedBigNumberify('./index.rsh:117:32:decimal', stdlib.UInt_max, '0'));
      const v2867 = stdlib.ge(v2866, v2853);
      stdlib.assert(v2867, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:168:13:application call to [unknown function] (defined at: ./index.rsh:168:13:function exp)'],
        msg: 'ARC200: Amount must not be greater than allowance',
        who: 'transferFrom'
        });
      const v2874 = stdlib.safeSub(v2861, v2853);
      await stdlib.mapSet(map0, ctc3, v2851, ctc1, v2874);
      const v2875 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2852, ctc1), null);
      const v2876 = stdlib.fromSome(v2875, stdlib.checkedBigNumberify('./index.rsh:112:32:decimal', stdlib.UInt_max, '0'));
      const v2877 = stdlib.safeAdd(v2876, v2853);
      await stdlib.mapSet(map0, ctc3, v2852, ctc1, v2877);
      null;
      const v2882 = stdlib.safeSub(v2866, v2853);
      await stdlib.mapSet(map1, ctc10, v2864, ctc1, v2882);
      null;
      const v2884 = true;
      const v2885 = await txn1.getOutput('transferFrom', 'v2884', ctc4, v2884);
      if (v1060) {
        stdlib.protect(ctc0, await interact.out(v2706, v2885), {
          at: './index.rsh:156:11:application',
          fs: ['at ./index.rsh:156:11:application call to [unknown function] (defined at: ./index.rsh:156:11:function exp)', 'at ./index.rsh:173:12:application call to "k" (defined at: ./index.rsh:168:13:function exp)', 'at ./index.rsh:168:13:application call to [unknown function] (defined at: ./index.rsh:168:13:function exp)'],
          msg: 'out',
          who: 'transferFrom'
          });
        }
      else {
        }
      
      const v3902 = v1572;
      const v3904 = v1572.closed;
      if (v3904) {
        return;
        }
      else {
        return;
        }
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
export async function destroy(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for destroy expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for destroy expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _destroy3(ctcTop, interact);}
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
    impure: [`_reachp_0((uint64,address,address,byte,(uint64,byte[32],byte[8],uint64)))void`, `_reachp_2((uint64,(byte,byte[72])))void`, `approve(address,uint64)byte`, `deleteAllowanceBox(address,address)byte`, `deleteBalanceBox(address)byte`, `destroy()void`, `transfer(address,uint64)byte`, `transferFrom(address,address,uint64)byte`],
    pure: [`allowance(address,address)uint64`, `balanceOf(address)uint64`, `decimals()uint64`, `name()byte[32]`, `state()(byte[32],byte[8],uint64,uint64,address,address,byte,byte)`, `symbol()byte[8]`, `totalSupply()uint64`],
    sigs: [`_reachp_0((uint64,address,address,byte,(uint64,byte[32],byte[8],uint64)))void`, `_reachp_2((uint64,(byte,byte[72])))void`, `allowance(address,address)uint64`, `approve(address,uint64)byte`, `balanceOf(address)uint64`, `decimals()uint64`, `deleteAllowanceBox(address,address)byte`, `deleteBalanceBox(address)byte`, `destroy()void`, `name()byte[32]`, `state()(byte[32],byte[8],uint64,uint64,address,address,byte,byte)`, `symbol()byte[8]`, `totalSupply()uint64`, `transfer(address,uint64)byte`, `transferFrom(address,address,uint64)byte`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAHAAgBA9STAcSQASAmBgEAAAgAAAAAAAAAAQEBBLHhNKwEsfXz4jEYQQYEKWRJIls1ASNbNQIoZCtkUIIPBARSJdMED7AkHgQXBQq9BBtgmswEHeAZFQRGJUHTBEZ7x6QETkcyuwRsyzzCBI+VG1kEnIahhQSc1oVYBLh3nucEwj9tBgT0vCQkNhoAjg8FeQZ/BeEGZgZsBdMFxgVnBmAF7AYBBfkF6QZjBmkANAtXACA1DTQLIQZbNQwxADQUE0Q0DTQUE0QhBSoxADQNUFABNAwWiAanJwUxAFA0DVA0DBZQsCQ1C4AIAAAAAAAABvw0CxZRBwhQsDQLFlEHCDUEMgY1DjQPVwABF0EFuTEZgQUSRIgGuSIyCjIJiAbBNANAAAqABBUffHU0BFCwJEM0C1cAIDQLVyAgUDUMKSOvKjQMUAGIBitJNQsiVSQSRCOvNAuIBhMXIhIiNBESEUQhBSo0DFABiAZHJDULgAgAAAAAAAAH1jQLFlEHCFCwNAsWUQcINQQyBjUOQv93NA1XASBJNQs0FBNEKSOvKDQLUIgFz0k1DCJVJBJEI680DIgFtxciEiI0ERIRRCEEKDQLUIgF7CQ1C4AIAAAAAAAACK40CxZRBwhQsDQLFlEHCDUEMgY1DkL/HIAJAQAAAAAAAAAAIlUkEkQiNBESRCEEKDQUUIgFqik1C4AIAAAAAAAACXw0C1CwNAs1BCs0D1cBCFA0D1cJAVA0D1cKIFA0D1cqIFA0D1dKCFA0D1dSCFA0D1daIFAyBjUONQ9C/rU0C1cAIDUNNAshBls1DDQTNA00FBMRRCOvKSOvKDEAUIgFAIgE9BdJNQs0DA9EIQQoMQBQNAs0DAkWiATxIQQoNA1QI68pI68oNA1QiATUiATIFzQMCBaIBNQnBDEAUDQNUDQMFlCwJDULgAgAAAAAAAAKXTQLFlEHCFCwNAsWUQcINQQyBjUOQv4qNAtXACA1FTQLVyAgNQ00C4FAWzUMNBU0FBNENA00FBNEI68pI68oNBVQiARriARfF0k1FzQMD0Q0FTEAUDUWI68pI68qNBZQAYgETIgEQBdJNQs0DA9EIQQoNBVQNBc0DAkWiAQ9IQQoNA1QI68pI68oNA1QiAQgiAQUFzQMCBaIBCAnBDQVUDQNUDQMFlCwNAs0DAk1DSEFKjQWUAE0DRaIA/8nBTQVUDEAUDQNFlCwJDULgAgAAAAAAAALRDQLFlEHCFCwNAsWUQcINQQyBjUOQv1VNAElEkSIA9Qjrykjryo0DDQLUFABiAOriAOfNQQxGSISREL9TyOvKDQMNAsWUFAyA1BQNQslNAESRIgDnzQLIls1DDQLVwhJNQ2ABPmfKRU0DBZQNA1QsDQMiAOzNA0iVY0GAtYC4ALqApEClAKeQvyKNAElEkSIA2Ijrykjryg0C1CIAz2IAzE1BEL/jzQBJRJEiANGNBAWNQRC/38jrys0DDQLUFAjr1BQNQtC/4Ujr4ABAjQLUIEor1BQNQtC/3OAUQAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv8bNAElEkSIAro0ElcIIDUEQv7xNAElEkSIAqg0D1cqIDQPV0oIUDQPVwEIUDQPV1IIUDQPV1ogUDQPVwogUDQPVwkBUDQPVwABUDUEQv61NAElEkSIAmw0ElcoCDUEQv6jNAElEkSIAlo0ERY1BEL+kyOvgAEENAw0CxZQUDIDUFA1C0L+liOvgAEFNA00DFA0CxZQUFA1C0L+gTQMIls1DTQMVwggNRQ0DFcoIDULNAxXSAEXNRM0DFdJODUSgAQfkETYNA0WUDQUUDQLUDQTFlEHCFA0ElCwNA2IAhk0FDQLE0Q0EoEwW0k1ESINRDQSIltJNRCBgAIMRCEEKDQLUDQRFogBriEEKDQUUCOviAGjJwQ0FFA0C1A0ERZQsCg0EBZQNBMWUQcIUDQLUDQSVwggUDQSVygIUDQRFlA0FFAyBjUONQ9C+vKIAaaBoI0GiAGtNhoBNQxC/z+IAZQ2GgE1C0L9tSIxNBJEJTE1EkQiMTYSRCIxNxJEiAF1geMBryIiNQI1AShLAVcAf2crTFd/ZGcpNAEWNAIWUGcxGSISRIgBYUL6rTYaATYaAjULNQxC/TE2GgE2GgIXNQs1DEL9SDYaATULQv2NQv2mNhoBNhoCNQs1DEL9qTYaATULQv2zQv3CQvs2NA1XASg1C0L7kzQNVwFINQtC/BQ0FDQTFlEHCFA0ElA0ERZQNBAWUDQPUCUyBkL/aUhMv0iJIrIBJLIQsgeyCLOJNA1XASg1C0L5rjQNVwFANQtC+idC+oJC/btC/cpC/gNC/hI2GgE2GgI2GgMXNQs1DDUNQv4kNhoBNhoCFzULNQxC/gFIiUwJSTUGMgmIAJeJCUlB/+5JNQYxFjQAJAhJNQAJRwI4BzIKEkQ4ECQSRDgIEkSJSVcBAEwiVU2JvkkWUQcIRQRNUIlMSb1A/2BLA4gAQUL/WElXACA1FElXIAEXNRNJVyE4NRJJgVlbNRFJgWFbNRBXaXo1D4m8Ik4CTTQHCDUHiSQ1A4lJIhJMNAISEUSJNAYINQaJNAY0B0oPQf9iQv9qsUL/CbGyCUL/Aw==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `591`,
    1001: `592`,
    1002: `593`,
    1003: `594`,
    1004: `594`,
    1005: `594`,
    1006: `595`,
    1007: `595`,
    1008: `596`,
    1009: `597`,
    101: `21`,
    1010: `598`,
    1011: `598`,
    1012: `599`,
    1013: `599`,
    1014: `600`,
    1015: `600`,
    1016: `600`,
    1017: `601`,
    1018: `601`,
    1019: `602`,
    102: `21`,
    1020: `602`,
    1021: `602`,
    1022: `602`,
    1023: `602`,
    1024: `602`,
    1025: `603`,
    1026: `603`,
    1027: `604`,
    1028: `605`,
    1029: `606`,
    103: `21`,
    1030: `606`,
    1031: `607`,
    1032: `608`,
    1033: `610`,
    1034: `610`,
    1035: `611`,
    1036: `611`,
    1037: `611`,
    1038: `612`,
    1039: `612`,
    104: `21`,
    1040: `613`,
    1041: `614`,
    1042: `615`,
    1043: `615`,
    1044: `615`,
    1045: `615`,
    1046: `615`,
    1047: `615`,
    1048: `615`,
    1049: `615`,
    105: `21`,
    1050: `615`,
    1051: `615`,
    1052: `615`,
    1053: `615`,
    1054: `615`,
    1055: `615`,
    1056: `616`,
    1057: `616`,
    1058: `616`,
    1059: `618`,
    106: `21`,
    1060: `618`,
    1061: `619`,
    1062: `620`,
    1063: `621`,
    1064: `624`,
    1065: `624`,
    1066: `624`,
    1067: `625`,
    1068: `626`,
    1069: `628`,
    107: `21`,
    1070: `629`,
    1071: `630`,
    1072: `631`,
    1073: `632`,
    1074: `632`,
    1075: `633`,
    1076: `634`,
    1077: `634`,
    1078: `634`,
    1079: `635`,
    108: `21`,
    1080: `635`,
    1081: `635`,
    1082: `636`,
    1083: `636`,
    1084: `637`,
    1085: `637`,
    1086: `637`,
    1087: `639`,
    1088: `639`,
    1089: `640`,
    109: `21`,
    1090: `641`,
    1091: `642`,
    1092: `645`,
    1093: `645`,
    1094: `645`,
    1095: `646`,
    1096: `646`,
    1097: `647`,
    1098: `648`,
    1099: `648`,
    11: `2`,
    110: `21`,
    1100: `649`,
    1101: `649`,
    1102: `649`,
    1103: `651`,
    1104: `652`,
    1105: `653`,
    1106: `654`,
    1107: `654`,
    1108: `655`,
    1109: `655`,
    111: `21`,
    1110: `656`,
    1111: `657`,
    1112: `658`,
    1113: `659`,
    1114: `660`,
    1115: `661`,
    1116: `662`,
    1117: `662`,
    1118: `663`,
    1119: `663`,
    112: `21`,
    1120: `663`,
    1121: `665`,
    1122: `666`,
    1123: `667`,
    1124: `667`,
    1125: `667`,
    1126: `668`,
    1127: `668`,
    1128: `669`,
    1129: `670`,
    113: `21`,
    1130: `670`,
    1131: `671`,
    1132: `672`,
    1133: `673`,
    1134: `674`,
    1135: `674`,
    1136: `675`,
    1137: `675`,
    1138: `675`,
    1139: `677`,
    114: `21`,
    1140: `677`,
    1141: `677`,
    1142: `677`,
    1143: `677`,
    1144: `677`,
    1145: `677`,
    1146: `677`,
    1147: `677`,
    1148: `677`,
    1149: `677`,
    115: `21`,
    1150: `677`,
    1151: `677`,
    1152: `677`,
    1153: `677`,
    1154: `677`,
    1155: `677`,
    1156: `677`,
    1157: `677`,
    1158: `677`,
    1159: `677`,
    116: `21`,
    1160: `677`,
    1161: `677`,
    1162: `677`,
    1163: `677`,
    1164: `677`,
    1165: `677`,
    1166: `677`,
    1167: `677`,
    1168: `677`,
    1169: `677`,
    117: `21`,
    1170: `677`,
    1171: `677`,
    1172: `677`,
    1173: `677`,
    1174: `677`,
    1175: `677`,
    1176: `677`,
    1177: `677`,
    1178: `677`,
    1179: `677`,
    118: `21`,
    1180: `677`,
    1181: `677`,
    1182: `677`,
    1183: `677`,
    1184: `677`,
    1185: `677`,
    1186: `677`,
    1187: `677`,
    1188: `677`,
    1189: `677`,
    119: `21`,
    1190: `677`,
    1191: `677`,
    1192: `677`,
    1193: `677`,
    1194: `677`,
    1195: `677`,
    1196: `677`,
    1197: `677`,
    1198: `677`,
    1199: `677`,
    12: `2`,
    120: `21`,
    1200: `677`,
    1201: `677`,
    1202: `677`,
    1203: `677`,
    1204: `677`,
    1205: `677`,
    1206: `677`,
    1207: `677`,
    1208: `677`,
    1209: `677`,
    121: `21`,
    1210: `677`,
    1211: `677`,
    1212: `677`,
    1213: `677`,
    1214: `677`,
    1215: `677`,
    1216: `677`,
    1217: `677`,
    1218: `677`,
    1219: `677`,
    122: `21`,
    1220: `677`,
    1221: `677`,
    1222: `678`,
    1223: `678`,
    1224: `679`,
    1225: `679`,
    1226: `679`,
    1227: `681`,
    1228: `681`,
    1229: `682`,
    123: `21`,
    1230: `683`,
    1231: `684`,
    1232: `687`,
    1233: `687`,
    1234: `687`,
    1235: `688`,
    1236: `688`,
    1237: `689`,
    1238: `689`,
    1239: `689`,
    124: `21`,
    1240: `690`,
    1241: `690`,
    1242: `691`,
    1243: `691`,
    1244: `691`,
    1245: `693`,
    1246: `693`,
    1247: `694`,
    1248: `695`,
    1249: `696`,
    125: `21`,
    1250: `699`,
    1251: `699`,
    1252: `699`,
    1253: `700`,
    1254: `700`,
    1255: `701`,
    1256: `701`,
    1257: `701`,
    1258: `702`,
    1259: `702`,
    126: `21`,
    1260: `703`,
    1261: `703`,
    1262: `703`,
    1263: `704`,
    1264: `705`,
    1265: `705`,
    1266: `706`,
    1267: `706`,
    1268: `706`,
    1269: `707`,
    127: `21`,
    1270: `708`,
    1271: `708`,
    1272: `709`,
    1273: `709`,
    1274: `709`,
    1275: `710`,
    1276: `711`,
    1277: `711`,
    1278: `712`,
    1279: `712`,
    128: `21`,
    1280: `712`,
    1281: `713`,
    1282: `714`,
    1283: `714`,
    1284: `715`,
    1285: `715`,
    1286: `715`,
    1287: `716`,
    1288: `717`,
    1289: `717`,
    129: `21`,
    1290: `718`,
    1291: `718`,
    1292: `718`,
    1293: `719`,
    1294: `720`,
    1295: `720`,
    1296: `721`,
    1297: `721`,
    1298: `721`,
    1299: `722`,
    13: `2`,
    130: `21`,
    1300: `723`,
    1301: `723`,
    1302: `724`,
    1303: `724`,
    1304: `724`,
    1305: `726`,
    1306: `726`,
    1307: `727`,
    1308: `728`,
    1309: `729`,
    131: `21`,
    1310: `732`,
    1311: `732`,
    1312: `732`,
    1313: `733`,
    1314: `733`,
    1315: `734`,
    1316: `734`,
    1317: `734`,
    1318: `735`,
    1319: `735`,
    132: `21`,
    1320: `736`,
    1321: `736`,
    1322: `736`,
    1323: `738`,
    1324: `738`,
    1325: `739`,
    1326: `740`,
    1327: `741`,
    1328: `744`,
    1329: `744`,
    133: `21`,
    1330: `744`,
    1331: `745`,
    1332: `745`,
    1333: `746`,
    1334: `747`,
    1335: `747`,
    1336: `748`,
    1337: `748`,
    1338: `748`,
    1339: `750`,
    134: `21`,
    1340: `751`,
    1341: `752`,
    1342: `752`,
    1343: `752`,
    1344: `753`,
    1345: `753`,
    1346: `754`,
    1347: `754`,
    1348: `755`,
    1349: `756`,
    135: `21`,
    1350: `757`,
    1351: `758`,
    1352: `758`,
    1353: `759`,
    1354: `760`,
    1355: `761`,
    1356: `761`,
    1357: `762`,
    1358: `762`,
    1359: `762`,
    136: `21`,
    1360: `764`,
    1361: `765`,
    1362: `766`,
    1363: `766`,
    1364: `766`,
    1365: `767`,
    1366: `767`,
    1367: `768`,
    1368: `768`,
    1369: `769`,
    137: `21`,
    1370: `770`,
    1371: `770`,
    1372: `771`,
    1373: `772`,
    1374: `773`,
    1375: `774`,
    1376: `775`,
    1377: `775`,
    1378: `776`,
    1379: `776`,
    138: `22`,
    1380: `776`,
    1381: `778`,
    1382: `778`,
    1383: `779`,
    1384: `780`,
    1385: `781`,
    1386: `781`,
    1387: `782`,
    1388: `782`,
    1389: `783`,
    139: `22`,
    1390: `783`,
    1391: `783`,
    1392: `784`,
    1393: `784`,
    1394: `785`,
    1395: `785`,
    1396: `786`,
    1397: `786`,
    1398: `786`,
    1399: `787`,
    14: `2`,
    140: `22`,
    1400: `787`,
    1401: `788`,
    1402: `788`,
    1403: `789`,
    1404: `789`,
    1405: `789`,
    1406: `790`,
    1407: `791`,
    1408: `791`,
    1409: `792`,
    141: `23`,
    1410: `792`,
    1411: `793`,
    1412: `793`,
    1413: `793`,
    1414: `794`,
    1415: `794`,
    1416: `795`,
    1417: `795`,
    1418: `795`,
    1419: `795`,
    142: `23`,
    1420: `795`,
    1421: `795`,
    1422: `796`,
    1423: `796`,
    1424: `797`,
    1425: `798`,
    1426: `799`,
    1427: `799`,
    1428: `800`,
    1429: `801`,
    143: `23`,
    1430: `801`,
    1431: `802`,
    1432: `803`,
    1433: `803`,
    1434: `804`,
    1435: `805`,
    1436: `805`,
    1437: `805`,
    1438: `806`,
    1439: `807`,
    144: `23`,
    1440: `807`,
    1441: `808`,
    1442: `809`,
    1443: `811`,
    1444: `811`,
    1445: `812`,
    1446: `812`,
    1447: `812`,
    1448: `813`,
    1449: `813`,
    145: `23`,
    1450: `814`,
    1451: `814`,
    1452: `815`,
    1453: `816`,
    1454: `820`,
    1455: `820`,
    1456: `821`,
    1457: `821`,
    1458: `822`,
    1459: `823`,
    146: `23`,
    1460: `824`,
    1461: `824`,
    1462: `825`,
    1463: `826`,
    1464: `827`,
    1465: `831`,
    1466: `831`,
    1467: `832`,
    1468: `833`,
    1469: `834`,
    147: `23`,
    1470: `835`,
    1471: `835`,
    1472: `836`,
    1473: `836`,
    1474: `836`,
    1475: `837`,
    1476: `838`,
    1477: `843`,
    1478: `843`,
    1479: `844`,
    148: `23`,
    1480: `845`,
    1481: `845`,
    1482: `846`,
    1483: `847`,
    1484: `847`,
    1485: `848`,
    1486: `849`,
    1487: `849`,
    1488: `849`,
    1489: `851`,
    149: `23`,
    1490: `851`,
    1491: `852`,
    1492: `853`,
    1493: `853`,
    1494: `854`,
    1495: `855`,
    1496: `856`,
    1497: `857`,
    1498: `857`,
    1499: `857`,
    15: `2`,
    150: `23`,
    1500: `858`,
    1501: `858`,
    1502: `859`,
    1503: `859`,
    1504: `860`,
    1505: `861`,
    1506: `861`,
    1507: `862`,
    1508: `863`,
    1509: `863`,
    151: `23`,
    1510: `864`,
    1511: `865`,
    1512: `866`,
    1513: `868`,
    1514: `869`,
    1515: `869`,
    1516: `870`,
    1517: `871`,
    1518: `872`,
    1519: `872`,
    152: `23`,
    1520: `873`,
    1521: `874`,
    1522: `874`,
    1523: `874`,
    1524: `875`,
    1525: `876`,
    1526: `876`,
    1527: `877`,
    1528: `878`,
    1529: `878`,
    153: `23`,
    1530: `879`,
    1531: `879`,
    1532: `879`,
    1533: `880`,
    1534: `881`,
    1535: `881`,
    1536: `882`,
    1537: `882`,
    1538: `882`,
    1539: `883`,
    154: `23`,
    1540: `884`,
    1541: `884`,
    1542: `885`,
    1543: `886`,
    1544: `887`,
    1545: `887`,
    1546: `888`,
    1547: `889`,
    1548: `889`,
    1549: `890`,
    155: `23`,
    1550: `890`,
    1551: `891`,
    1552: `891`,
    1553: `892`,
    1554: `892`,
    1555: `892`,
    1556: `894`,
    1557: `894`,
    1558: `894`,
    1559: `895`,
    156: `23`,
    1560: `895`,
    1561: `895`,
    1562: `895`,
    1563: `896`,
    1564: `896`,
    1565: `896`,
    1566: `897`,
    1567: `897`,
    1568: `897`,
    1569: `898`,
    157: `23`,
    1570: `898`,
    1571: `899`,
    1572: `899`,
    1573: `899`,
    1574: `901`,
    1575: `901`,
    1576: `901`,
    1577: `902`,
    1578: `902`,
    1579: `902`,
    158: `23`,
    1580: `903`,
    1581: `903`,
    1582: `904`,
    1583: `904`,
    1584: `904`,
    1585: `906`,
    1586: `907`,
    1587: `907`,
    1588: `908`,
    1589: `909`,
    159: `23`,
    1590: `910`,
    1591: `911`,
    1592: `911`,
    1593: `912`,
    1594: `913`,
    1595: `914`,
    1596: `915`,
    1597: `915`,
    1598: `916`,
    1599: `917`,
    16: `2`,
    160: `23`,
    1600: `918`,
    1601: `919`,
    1602: `919`,
    1603: `920`,
    1604: `921`,
    1605: `922`,
    1606: `922`,
    1607: `922`,
    1608: `923`,
    1609: `923`,
    161: `23`,
    1610: `923`,
    1611: `924`,
    1612: `925`,
    1613: `926`,
    1614: `928`,
    1615: `928`,
    1616: `929`,
    1617: `929`,
    1618: `930`,
    1619: `931`,
    162: `23`,
    1620: `931`,
    1621: `932`,
    1622: `932`,
    1623: `932`,
    1624: `933`,
    1625: `934`,
    1626: `935`,
    1627: `936`,
    1628: `936`,
    1629: `936`,
    163: `23`,
    1630: `937`,
    1631: `938`,
    1632: `939`,
    1633: `939`,
    1634: `940`,
    1635: `941`,
    1636: `941`,
    1637: `942`,
    1638: `943`,
    1639: `944`,
    164: `23`,
    1640: `945`,
    1641: `945`,
    1642: `946`,
    1643: `947`,
    1644: `948`,
    1645: `950`,
    1646: `950`,
    1647: `950`,
    1648: `951`,
    1649: `951`,
    165: `23`,
    1650: `951`,
    1651: `953`,
    1652: `953`,
    1653: `953`,
    1654: `954`,
    1655: `954`,
    1656: `954`,
    1657: `955`,
    1658: `955`,
    1659: `956`,
    166: `23`,
    1660: `956`,
    1661: `957`,
    1662: `957`,
    1663: `957`,
    1664: `959`,
    1665: `959`,
    1666: `959`,
    1667: `960`,
    1668: `960`,
    1669: `960`,
    167: `23`,
    1670: `961`,
    1671: `962`,
    1672: `962`,
    1673: `963`,
    1674: `963`,
    1675: `964`,
    1676: `964`,
    1677: `964`,
    1678: `966`,
    1679: `966`,
    168: `23`,
    1680: `966`,
    1681: `967`,
    1682: `967`,
    1683: `968`,
    1684: `968`,
    1685: `968`,
    1686: `970`,
    1687: `970`,
    1688: `970`,
    1689: `972`,
    169: `23`,
    1690: `972`,
    1691: `972`,
    1692: `973`,
    1693: `973`,
    1694: `973`,
    1695: `974`,
    1696: `974`,
    1697: `975`,
    1698: `975`,
    1699: `976`,
    17: `2`,
    170: `23`,
    1700: `976`,
    1701: `976`,
    1702: `978`,
    1703: `978`,
    1704: `978`,
    1705: `979`,
    1706: `979`,
    1707: `980`,
    1708: `980`,
    1709: `980`,
    171: `23`,
    1710: `982`,
    1711: `982`,
    1712: `982`,
    1713: `984`,
    1714: `984`,
    1715: `984`,
    1716: `986`,
    1717: `986`,
    1718: `987`,
    1719: `987`,
    172: `23`,
    1720: `987`,
    1721: `988`,
    1722: `988`,
    1723: `989`,
    1724: `989`,
    1725: `989`,
    1726: `991`,
    1727: `991`,
    1728: `992`,
    1729: `992`,
    173: `25`,
    1730: `992`,
    1731: `993`,
    1732: `993`,
    1733: `994`,
    1734: `994`,
    1735: `994`,
    1736: `997`,
    1737: `997`,
    1738: `998`,
    1739: `998`,
    174: `27`,
    1740: `999`,
    1741: `1000`,
    1742: `1000`,
    1743: `1000`,
    1744: `1001`,
    1745: `1002`,
    1746: `1002`,
    1747: `1003`,
    1748: `1004`,
    1749: `1004`,
    175: `27`,
    1750: `1005`,
    1751: `1006`,
    1752: `1007`,
    1753: `1007`,
    1754: `1008`,
    1755: `1009`,
    1756: `1010`,
    1757: `1010`,
    1758: `1011`,
    1759: `1012`,
    176: `28`,
    1760: `1013`,
    1761: `1013`,
    1762: `1014`,
    1763: `1014`,
    1764: `1014`,
    1765: `1016`,
    1766: `1017`,
    1767: `1018`,
    1768: `1019`,
    1769: `1020`,
    177: `28`,
    1770: `1022`,
    1771: `1023`,
    1772: `1023`,
    1773: `1024`,
    1774: `1025`,
    1775: `1025`,
    1776: `1026`,
    1777: `1026`,
    1778: `1027`,
    1779: `1027`,
    178: `28`,
    1780: `1028`,
    1781: `1029`,
    1782: `1031`,
    1783: `1031`,
    1784: `1032`,
    1785: `1032`,
    1786: `1032`,
    1787: `1033`,
    1788: `1033`,
    1789: `1034`,
    179: `29`,
    1790: `1034`,
    1791: `1034`,
    1792: `1036`,
    1793: `1036`,
    1794: `1037`,
    1795: `1037`,
    1796: `1037`,
    1797: `1038`,
    1798: `1038`,
    1799: `1039`,
    18: `2`,
    180: `29`,
    1800: `1039`,
    1801: `1039`,
    1802: `1041`,
    1803: `1041`,
    1804: `1041`,
    1805: `1043`,
    1806: `1043`,
    1807: `1043`,
    1808: `1045`,
    1809: `1045`,
    181: `30`,
    1810: `1045`,
    1811: `1047`,
    1812: `1047`,
    1813: `1047`,
    1814: `1049`,
    1815: `1049`,
    1816: `1049`,
    1817: `1051`,
    1818: `1051`,
    1819: `1051`,
    182: `30`,
    1820: `1052`,
    1821: `1052`,
    1822: `1052`,
    1823: `1053`,
    1824: `1053`,
    1825: `1053`,
    1826: `1054`,
    1827: `1055`,
    1828: `1055`,
    1829: `1056`,
    183: `31`,
    1830: `1056`,
    1831: `1057`,
    1832: `1057`,
    1833: `1058`,
    1834: `1058`,
    1835: `1058`,
    1836: `1060`,
    1837: `1060`,
    1838: `1060`,
    1839: `1061`,
    184: `31`,
    1840: `1061`,
    1841: `1061`,
    1842: `1062`,
    1843: `1063`,
    1844: `1063`,
    1845: `1064`,
    1846: `1064`,
    1847: `1065`,
    1848: `1065`,
    1849: `1065`,
    185: `32`,
    1850: `1067`,
    1851: `1068`,
    1852: `1070`,
    1853: `1071`,
    1854: `1072`,
    1855: `1073`,
    1856: `1073`,
    1857: `1074`,
    1858: `1074`,
    1859: `1075`,
    186: `33`,
    1860: `1075`,
    1861: `1075`,
    1862: `1076`,
    1863: `1078`,
    1864: `1079`,
    1865: `1080`,
    1866: `1080`,
    1867: `1080`,
    1868: `1081`,
    1869: `1082`,
    187: `33`,
    1870: `1082`,
    1871: `1085`,
    1872: `1085`,
    1873: `1086`,
    1874: `1086`,
    1875: `1087`,
    1876: `1088`,
    1877: `1089`,
    1878: `1090`,
    1879: `1090`,
    188: `34`,
    1880: `1091`,
    1881: `1092`,
    1882: `1092`,
    1883: `1093`,
    1884: `1093`,
    1885: `1094`,
    1886: `1094`,
    1887: `1095`,
    1888: `1096`,
    1889: `1097`,
    189: `34`,
    1890: `1097`,
    1891: `1098`,
    1892: `1099`,
    1893: `1100`,
    1894: `1101`,
    1895: `1101`,
    1896: `1102`,
    1897: `1103`,
    1898: `1104`,
    1899: `1106`,
    19: `2`,
    190: `35`,
    1900: `1107`,
    1901: `1107`,
    1902: `1107`,
    1903: `1108`,
    1904: `1109`,
    1905: `1110`,
    1906: `1111`,
    1907: `1112`,
    1908: `1114`,
    1909: `1115`,
    191: `35`,
    1910: `1116`,
    1911: `1117`,
    1912: `1117`,
    1913: `1117`,
    1914: `1118`,
    1915: `1118`,
    1916: `1119`,
    1917: `1120`,
    1918: `1121`,
    1919: `1123`,
    192: `36`,
    1920: `1124`,
    1921: `1125`,
    1922: `1126`,
    1923: `1126`,
    1924: `1126`,
    1925: `1127`,
    1926: `1127`,
    1927: `1128`,
    1928: `1128`,
    1929: `1128`,
    193: `37`,
    1930: `1129`,
    1931: `1129`,
    1932: `1129`,
    1933: `1131`,
    1934: `1132`,
    1935: `1132`,
    1936: `1132`,
    1937: `1133`,
    1938: `1133`,
    1939: `1134`,
    194: `42`,
    1940: `1135`,
    1941: `1135`,
    1942: `1135`,
    1943: `1136`,
    1944: `1137`,
    1945: `1137`,
    1946: `1138`,
    1947: `1139`,
    1948: `1139`,
    1949: `1139`,
    195: `42`,
    1950: `1140`,
    1951: `1140`,
    1952: `1141`,
    1953: `1142`,
    1954: `1142`,
    1955: `1143`,
    1956: `1144`,
    1957: `1144`,
    1958: `1145`,
    1959: `1146`,
    196: `43`,
    1960: `1146`,
    1961: `1147`,
    1962: `1148`,
    1963: `1148`,
    1964: `1149`,
    1965: `1149`,
    1966: `1149`,
    1967: `1150`,
    1968: `1150`,
    1969: `1151`,
    197: `43`,
    1970: `1153`,
    1971: `1154`,
    1972: `1155`,
    1973: `1155`,
    1974: `1156`,
    1975: `1158`,
    1976: `1158`,
    1977: `1159`,
    1978: `1160`,
    1979: `1160`,
    198: `44`,
    1980: `1161`,
    1981: `1163`,
    1982: `1164`,
    1983: `1164`,
    1984: `1165`,
    1985: `1167`,
    1986: `1168`,
    1987: `1169`,
    1988: `1170`,
    1989: `1171`,
    199: `45`,
    1990: `1171`,
    1991: `1172`,
    1992: `1173`,
    1993: `1174`,
    1994: `1175`,
    1995: `1177`,
    1996: `1177`,
    1997: `1178`,
    1998: `1179`,
    1999: `1179`,
    2: `2`,
    20: `2`,
    200: `51`,
    2000: `1180`,
    2001: `1182`,
    2002: `1182`,
    2003: `1183`,
    2004: `1183`,
    2005: `1184`,
    2006: `1185`,
    2007: `1186`,
    2008: `1186`,
    2009: `1186`,
    201: `51`,
    2010: `1187`,
    2011: `1187`,
    2012: `1187`,
    2013: `1189`,
    2014: `1190`,
    2015: `1190`,
    2016: `1190`,
    2017: `1192`,
    2018: `1193`,
    2019: `1193`,
    202: `52`,
    2020: `1194`,
    203: `53`,
    204: `53`,
    205: `54`,
    206: `54`,
    207: `55`,
    208: `56`,
    209: `57`,
    21: `2`,
    210: `58`,
    211: `58`,
    212: `59`,
    213: `60`,
    214: `60`,
    215: `60`,
    216: `61`,
    217: `61`,
    218: `62`,
    219: `62`,
    22: `2`,
    220: `63`,
    221: `64`,
    222: `64`,
    223: `65`,
    224: `66`,
    225: `66`,
    226: `67`,
    227: `68`,
    228: `69`,
    229: `71`,
    23: `2`,
    230: `72`,
    231: `72`,
    232: `73`,
    233: `73`,
    234: `73`,
    235: `73`,
    236: `73`,
    237: `73`,
    238: `73`,
    239: `73`,
    24: `2`,
    240: `73`,
    241: `73`,
    242: `74`,
    243: `74`,
    244: `75`,
    245: `76`,
    246: `76`,
    247: `76`,
    248: `77`,
    249: `78`,
    25: `2`,
    250: `79`,
    251: `79`,
    252: `80`,
    253: `81`,
    254: `81`,
    255: `81`,
    256: `82`,
    257: `82`,
    258: `83`,
    259: `83`,
    26: `2`,
    260: `84`,
    261: `84`,
    262: `86`,
    263: `86`,
    264: `87`,
    265: `87`,
    266: `87`,
    267: `88`,
    268: `89`,
    269: `89`,
    27: `2`,
    270: `89`,
    271: `91`,
    272: `91`,
    273: `92`,
    274: `92`,
    275: `93`,
    276: `94`,
    277: `96`,
    278: `96`,
    279: `96`,
    28: `2`,
    280: `98`,
    281: `99`,
    282: `99`,
    283: `100`,
    284: `100`,
    285: `101`,
    286: `101`,
    287: `101`,
    288: `103`,
    289: `103`,
    29: `2`,
    290: `104`,
    291: `104`,
    292: `104`,
    293: `106`,
    294: `106`,
    295: `106`,
    296: `106`,
    297: `106`,
    298: `106`,
    299: `107`,
    3: `2`,
    30: `2`,
    300: `107`,
    301: `108`,
    302: `109`,
    303: `111`,
    304: `112`,
    305: `114`,
    306: `114`,
    307: `115`,
    308: `115`,
    309: `115`,
    31: `2`,
    310: `116`,
    311: `116`,
    312: `117`,
    313: `117`,
    314: `117`,
    315: `118`,
    316: `119`,
    317: `119`,
    318: `121`,
    319: `122`,
    32: `2`,
    320: `123`,
    321: `124`,
    322: `125`,
    323: `125`,
    324: `126`,
    325: `127`,
    326: `128`,
    327: `128`,
    328: `128`,
    329: `129`,
    33: `2`,
    330: `130`,
    331: `130`,
    332: `131`,
    333: `132`,
    334: `133`,
    335: `134`,
    336: `135`,
    337: `140`,
    338: `141`,
    339: `142`,
    34: `2`,
    340: `142`,
    341: `143`,
    342: `143`,
    343: `143`,
    344: `144`,
    345: `145`,
    346: `146`,
    347: `147`,
    348: `148`,
    349: `148`,
    35: `2`,
    350: `149`,
    351: `150`,
    352: `151`,
    353: `156`,
    354: `156`,
    355: `157`,
    356: `158`,
    357: `158`,
    358: `159`,
    359: `160`,
    36: `2`,
    360: `161`,
    361: `161`,
    362: `161`,
    363: `162`,
    364: `163`,
    365: `163`,
    366: `164`,
    367: `164`,
    368: `164`,
    369: `164`,
    37: `2`,
    370: `164`,
    371: `164`,
    372: `164`,
    373: `164`,
    374: `164`,
    375: `164`,
    376: `165`,
    377: `165`,
    378: `166`,
    379: `167`,
    38: `2`,
    380: `167`,
    381: `167`,
    382: `168`,
    383: `169`,
    384: `170`,
    385: `170`,
    386: `171`,
    387: `172`,
    388: `172`,
    389: `172`,
    39: `2`,
    390: `173`,
    391: `173`,
    392: `174`,
    393: `174`,
    394: `175`,
    395: `175`,
    396: `176`,
    397: `176`,
    398: `176`,
    399: `178`,
    4: `2`,
    40: `4`,
    400: `178`,
    401: `179`,
    402: `179`,
    403: `179`,
    404: `180`,
    405: `181`,
    406: `181`,
    407: `182`,
    408: `182`,
    409: `183`,
    41: `4`,
    410: `184`,
    411: `190`,
    412: `191`,
    413: `192`,
    414: `193`,
    415: `194`,
    416: `194`,
    417: `195`,
    418: `196`,
    419: `196`,
    42: `5`,
    420: `196`,
    421: `197`,
    422: `198`,
    423: `198`,
    424: `199`,
    425: `200`,
    426: `201`,
    427: `202`,
    428: `203`,
    429: `208`,
    43: `5`,
    430: `209`,
    431: `210`,
    432: `210`,
    433: `211`,
    434: `211`,
    435: `211`,
    436: `212`,
    437: `213`,
    438: `214`,
    439: `215`,
    44: `5`,
    440: `216`,
    441: `216`,
    442: `217`,
    443: `218`,
    444: `219`,
    445: `224`,
    446: `224`,
    447: `225`,
    448: `226`,
    449: `226`,
    45: `6`,
    450: `227`,
    451: `228`,
    452: `228`,
    453: `228`,
    454: `229`,
    455: `230`,
    456: `230`,
    457: `231`,
    458: `231`,
    459: `231`,
    46: `7`,
    460: `231`,
    461: `231`,
    462: `231`,
    463: `231`,
    464: `231`,
    465: `231`,
    466: `231`,
    467: `232`,
    468: `232`,
    469: `233`,
    47: `8`,
    470: `234`,
    471: `234`,
    472: `234`,
    473: `235`,
    474: `236`,
    475: `237`,
    476: `237`,
    477: `238`,
    478: `239`,
    479: `239`,
    48: `9`,
    480: `239`,
    481: `240`,
    482: `240`,
    483: `241`,
    484: `241`,
    485: `242`,
    486: `242`,
    487: `243`,
    488: `243`,
    489: `243`,
    49: `10`,
    490: `245`,
    491: `245`,
    492: `245`,
    493: `245`,
    494: `245`,
    495: `245`,
    496: `245`,
    497: `245`,
    498: `245`,
    499: `245`,
    5: `2`,
    50: `11`,
    500: `245`,
    501: `246`,
    502: `247`,
    503: `248`,
    504: `249`,
    505: `250`,
    506: `255`,
    507: `256`,
    508: `256`,
    509: `257`,
    51: `11`,
    510: `258`,
    511: `264`,
    512: `264`,
    513: `265`,
    514: `266`,
    515: `266`,
    516: `267`,
    517: `268`,
    518: `268`,
    519: `268`,
    52: `12`,
    520: `269`,
    521: `270`,
    522: `270`,
    523: `271`,
    524: `271`,
    525: `271`,
    526: `271`,
    527: `271`,
    528: `271`,
    529: `271`,
    53: `13`,
    530: `271`,
    531: `271`,
    532: `271`,
    533: `272`,
    534: `272`,
    535: `273`,
    536: `274`,
    537: `275`,
    538: `275`,
    539: `276`,
    54: `14`,
    540: `276`,
    541: `277`,
    542: `278`,
    543: `278`,
    544: `279`,
    545: `279`,
    546: `279`,
    547: `280`,
    548: `281`,
    549: `281`,
    55: `14`,
    550: `282`,
    551: `282`,
    552: `282`,
    553: `283`,
    554: `284`,
    555: `284`,
    556: `285`,
    557: `285`,
    558: `285`,
    559: `286`,
    56: `15`,
    560: `287`,
    561: `287`,
    562: `288`,
    563: `288`,
    564: `288`,
    565: `289`,
    566: `290`,
    567: `290`,
    568: `291`,
    569: `291`,
    57: `16`,
    570: `291`,
    571: `292`,
    572: `293`,
    573: `293`,
    574: `294`,
    575: `294`,
    576: `294`,
    577: `295`,
    578: `296`,
    579: `296`,
    58: `17`,
    580: `297`,
    581: `297`,
    582: `297`,
    583: `298`,
    584: `299`,
    585: `299`,
    586: `300`,
    587: `300`,
    588: `301`,
    589: `301`,
    59: `18`,
    590: `302`,
    591: `302`,
    592: `302`,
    593: `304`,
    594: `304`,
    595: `305`,
    596: `305`,
    597: `305`,
    598: `306`,
    599: `306`,
    6: `2`,
    60: `19`,
    600: `307`,
    601: `307`,
    602: `308`,
    603: `308`,
    604: `309`,
    605: `310`,
    606: `310`,
    607: `311`,
    608: `311`,
    609: `312`,
    61: `21`,
    610: `312`,
    611: `313`,
    612: `313`,
    613: `314`,
    614: `315`,
    615: `316`,
    616: `321`,
    617: `322`,
    618: `324`,
    619: `325`,
    62: `21`,
    620: `326`,
    621: `327`,
    622: `328`,
    623: `328`,
    624: `329`,
    625: `330`,
    626: `330`,
    627: `330`,
    628: `331`,
    629: `331`,
    63: `21`,
    630: `331`,
    631: `332`,
    632: `333`,
    633: `334`,
    634: `334`,
    635: `335`,
    636: `335`,
    637: `336`,
    638: `337`,
    639: `342`,
    64: `21`,
    640: `342`,
    641: `343`,
    642: `344`,
    643: `344`,
    644: `345`,
    645: `346`,
    646: `346`,
    647: `347`,
    648: `347`,
    649: `348`,
    65: `21`,
    650: `349`,
    651: `350`,
    652: `350`,
    653: `350`,
    654: `352`,
    655: `352`,
    656: `353`,
    657: `354`,
    658: `354`,
    659: `355`,
    66: `21`,
    660: `356`,
    661: `357`,
    662: `358`,
    663: `359`,
    664: `360`,
    665: `361`,
    666: `362`,
    667: `362`,
    668: `363`,
    669: `364`,
    67: `21`,
    670: `364`,
    671: `364`,
    672: `365`,
    673: `365`,
    674: `365`,
    675: `366`,
    676: `367`,
    677: `367`,
    678: `368`,
    679: `369`,
    68: `21`,
    680: `370`,
    681: `370`,
    682: `370`,
    683: `371`,
    684: `371`,
    685: `372`,
    686: `372`,
    687: `373`,
    688: `374`,
    689: `374`,
    69: `21`,
    690: `375`,
    691: `376`,
    692: `376`,
    693: `377`,
    694: `378`,
    695: `379`,
    696: `381`,
    697: `382`,
    698: `382`,
    699: `383`,
    7: `2`,
    70: `21`,
    700: `383`,
    701: `383`,
    702: `383`,
    703: `383`,
    704: `383`,
    705: `383`,
    706: `383`,
    707: `383`,
    708: `383`,
    709: `384`,
    71: `21`,
    710: `384`,
    711: `385`,
    712: `386`,
    713: `386`,
    714: `386`,
    715: `387`,
    716: `388`,
    717: `389`,
    718: `389`,
    719: `390`,
    72: `21`,
    720: `391`,
    721: `391`,
    722: `391`,
    723: `392`,
    724: `392`,
    725: `393`,
    726: `393`,
    727: `394`,
    728: `394`,
    729: `395`,
    73: `21`,
    730: `395`,
    731: `395`,
    732: `397`,
    733: `397`,
    734: `398`,
    735: `398`,
    736: `398`,
    737: `399`,
    738: `399`,
    739: `400`,
    74: `21`,
    740: `400`,
    741: `401`,
    742: `401`,
    743: `401`,
    744: `402`,
    745: `402`,
    746: `403`,
    747: `403`,
    748: `404`,
    749: `404`,
    75: `21`,
    750: `405`,
    751: `406`,
    752: `406`,
    753: `407`,
    754: `407`,
    755: `408`,
    756: `408`,
    757: `409`,
    758: `410`,
    759: `415`,
    76: `21`,
    760: `415`,
    761: `416`,
    762: `416`,
    763: `417`,
    764: `418`,
    765: `423`,
    766: `424`,
    767: `426`,
    768: `427`,
    769: `428`,
    77: `21`,
    770: `429`,
    771: `430`,
    772: `430`,
    773: `431`,
    774: `432`,
    775: `432`,
    776: `432`,
    777: `433`,
    778: `433`,
    779: `433`,
    78: `21`,
    780: `434`,
    781: `435`,
    782: `436`,
    783: `436`,
    784: `437`,
    785: `437`,
    786: `438`,
    787: `439`,
    788: `444`,
    789: `444`,
    79: `21`,
    790: `445`,
    791: `445`,
    792: `446`,
    793: `447`,
    794: `447`,
    795: `448`,
    796: `449`,
    797: `451`,
    798: `452`,
    799: `453`,
    8: `2`,
    80: `21`,
    800: `454`,
    801: `455`,
    802: `455`,
    803: `456`,
    804: `457`,
    805: `458`,
    806: `458`,
    807: `458`,
    808: `459`,
    809: `459`,
    81: `21`,
    810: `459`,
    811: `460`,
    812: `461`,
    813: `462`,
    814: `462`,
    815: `463`,
    816: `463`,
    817: `464`,
    818: `465`,
    819: `470`,
    82: `21`,
    820: `470`,
    821: `471`,
    822: `472`,
    823: `472`,
    824: `473`,
    825: `474`,
    826: `474`,
    827: `475`,
    828: `475`,
    829: `476`,
    83: `21`,
    830: `477`,
    831: `478`,
    832: `478`,
    833: `478`,
    834: `480`,
    835: `480`,
    836: `481`,
    837: `482`,
    838: `482`,
    839: `483`,
    84: `21`,
    840: `484`,
    841: `485`,
    842: `486`,
    843: `487`,
    844: `488`,
    845: `489`,
    846: `490`,
    847: `490`,
    848: `491`,
    849: `492`,
    85: `21`,
    850: `492`,
    851: `492`,
    852: `493`,
    853: `493`,
    854: `493`,
    855: `494`,
    856: `495`,
    857: `495`,
    858: `496`,
    859: `497`,
    86: `21`,
    860: `498`,
    861: `498`,
    862: `498`,
    863: `499`,
    864: `499`,
    865: `500`,
    866: `500`,
    867: `501`,
    868: `502`,
    869: `502`,
    87: `21`,
    870: `503`,
    871: `504`,
    872: `504`,
    873: `505`,
    874: `506`,
    875: `507`,
    876: `509`,
    877: `509`,
    878: `510`,
    879: `510`,
    88: `21`,
    880: `511`,
    881: `512`,
    882: `512`,
    883: `513`,
    884: `513`,
    885: `514`,
    886: `515`,
    887: `515`,
    888: `516`,
    889: `517`,
    89: `21`,
    890: `518`,
    891: `518`,
    892: `519`,
    893: `520`,
    894: `520`,
    895: `520`,
    896: `521`,
    897: `521`,
    898: `522`,
    899: `522`,
    9: `2`,
    90: `21`,
    900: `523`,
    901: `524`,
    902: `524`,
    903: `525`,
    904: `526`,
    905: `526`,
    906: `527`,
    907: `528`,
    908: `529`,
    909: `531`,
    91: `21`,
    910: `532`,
    911: `532`,
    912: `533`,
    913: `533`,
    914: `533`,
    915: `533`,
    916: `533`,
    917: `533`,
    918: `533`,
    919: `533`,
    92: `21`,
    920: `533`,
    921: `533`,
    922: `534`,
    923: `534`,
    924: `535`,
    925: `536`,
    926: `536`,
    927: `536`,
    928: `537`,
    929: `538`,
    93: `21`,
    930: `539`,
    931: `539`,
    932: `540`,
    933: `541`,
    934: `541`,
    935: `541`,
    936: `542`,
    937: `542`,
    938: `543`,
    939: `543`,
    94: `21`,
    940: `544`,
    941: `544`,
    942: `545`,
    943: `545`,
    944: `545`,
    945: `547`,
    946: `547`,
    947: `548`,
    948: `549`,
    949: `550`,
    95: `21`,
    950: `553`,
    951: `553`,
    952: `553`,
    953: `554`,
    954: `555`,
    955: `557`,
    956: `558`,
    957: `559`,
    958: `560`,
    959: `561`,
    96: `21`,
    960: `561`,
    961: `562`,
    962: `562`,
    963: `563`,
    964: `564`,
    965: `565`,
    966: `566`,
    967: `566`,
    968: `566`,
    969: `567`,
    97: `21`,
    970: `567`,
    971: `567`,
    972: `568`,
    973: `568`,
    974: `570`,
    975: `570`,
    976: `571`,
    977: `572`,
    978: `573`,
    979: `575`,
    98: `21`,
    980: `575`,
    981: `575`,
    982: `577`,
    983: `578`,
    984: `579`,
    985: `580`,
    986: `580`,
    987: `581`,
    988: `581`,
    989: `582`,
    99: `21`,
    990: `583`,
    991: `584`,
    992: `585`,
    993: `585`,
    994: `586`,
    995: `587`,
    996: `588`,
    997: `588`,
    998: `590`,
    999: `591`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 2,
  stateSize: 227,
  unsupported: [],
  version: 13,
  warnings: [`This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:258:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:108:29:after expr stmt semicolon',
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
  "destroy": destroy,
  "transfer": transfer,
  "transferFrom": transferFrom
  };
export const _APIs = {
  approve: approve,
  deleteAllowanceBox: deleteAllowanceBox,
  deleteBalanceBox: deleteBalanceBox,
  destroy: destroy,
  transfer: transfer,
  transferFrom: transferFrom
  };
