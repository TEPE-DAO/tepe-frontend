// Automatically generated with Reach 0.1.13 (88e48902)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (88e48902)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    minBal: (() => {
      
      
      return stdlib.checkedBigNumberify('./index.rsh:4:23:decimal', stdlib.UInt_max, '100000');})()
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
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    constructor: ctc2,
    providerCount: ctc3,
    safeAmount: ctc3,
    safeSize: ctc3,
    subscriberCount: ctc3,
    token: ctc0,
    tokenAmount: ctc3
    });
  const ctc5 = stdlib.T_Struct([['constructor', ctc2], ['token', ctc0], ['tokenAmount', ctc3], ['providerCount', ctc3], ['subscriberCount', ctc3], ['safeAmount', ctc3], ['safeSize', ctc3]]);
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc7 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc8 = stdlib.T_Null;
  const ctc9 = stdlib.T_Struct([['periodCount', ctc3], ['periodAmount', ctc3], ['periodLength', ctc3], ['subscriberCount', ctc3]]);
  const ctc10 = stdlib.T_Data({
    None: ctc8,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Data({
    None: ctc8,
    Some: ctc6
    });
  const map0_ctc = ctc10;
  
  const map1_ctc = ctc11;
  
  
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1082, v1083, v1087, v1090, v1103] = svs;
      return (await ((async () => {
        
        const v1135 = v1103.constructor;
        const v1136 = v1103.token;
        const v1137 = v1103.tokenAmount;
        const v1138 = v1103.providerCount;
        const v1139 = v1103.subscriberCount;
        const v1140 = v1103.safeAmount;
        const v1141 = v1103.safeSize;
        const v1142 = {
          constructor: v1135,
          providerCount: v1138,
          safeAmount: v1140,
          safeSize: v1141,
          subscriberCount: v1139,
          token: v1136,
          tokenAmount: v1137
          };
        
        return v1142;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _subscription = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1082, v1083, v1087, v1090, v1103] = svs;
      return (await ((async (_v1144, _v1145 ) => {
          const v1144 = stdlib.protect(ctc2, _v1144, null);
          const v1145 = stdlib.protect(ctc2, _v1145, null);
        
        const v1146 = [v1144, v1145];
        const v1147 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc7, v1146, ctc6), null);
        const v1148 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v1149 = stdlib.fromSome(v1147, v1148);
        
        return v1149;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      state: {
        decode: _state,
        dom: [],
        rng: ctc5
        },
      subscription: {
        decode: _subscription,
        dom: [ctc2, ctc2],
        rng: ctc6
        }
      },
    views: {
      1: [],
      4: [ctc0, ctc0, ctc0, ctc1, ctc4]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Struct([['periodCount', ctc1], ['periodAmount', ctc1], ['periodLength', ctc1], ['subscriberCount', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Tuple([ctc3, ctc5]);
  return {
    mapDataTy: ctc6
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
  const ctc2 = stdlib.T_Struct([['periodCount', ctc1], ['periodAmount', ctc1], ['periodLength', ctc1], ['subscriberCount', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Object({
    ctc: ctc6,
    token: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc10, ctc10, ctc1]);
  const ctc14 = stdlib.T_Data({
    C_grant0_192: ctc11,
    U1_announce0_192: ctc12,
    U2_claim0_192: ctc13,
    U2_subscribe0_192: ctc11
    });
  const ctc15 = stdlib.T_Tuple([ctc10, ctc10]);
  
  const map0_ctc = ctc3;
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
  const {data: [], secs: v1073, time: v1072, didSend: v22, from: v1071 } = txn1;
  ;
  const v1076 = stdlib.protect(ctc7, await interact.getParams(), {
    at: './index.rsh:76:57:application',
    fs: ['at ./index.rsh:75:9:application call to [unknown function] (defined at: ./index.rsh:75:13:function exp)'],
    msg: 'getParams',
    who: 'Alice'
    });
  const v1077 = v1076.ctc;
  const v1078 = v1076.token;
  
  const txn2 = await (ctc.sendrecv({
    args: [v1077, v1078],
    evt_cnt: 2,
    funcNum: 1,
    lct: v1072,
    onlyIf: true,
    out_tys: [ctc6, ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:78:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1082, v1083], secs: v1085, time: v1084, didSend: v36, from: v1081 } = txn2;
      
      ;
      
      const v1087 = await ctc.getContractInfo();
      const v1090 = [];
      const v1091 = [v1087, v1083];
      const v1092 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v1082,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:90:18:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./index.rsh:90:18:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc8.defaultValue /* simReturnVal */];})();
      await txn2.getOutput('internal', 'v1092', ctc9, v1092);
      const v1102 = {
        constructor: v1081,
        providerCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        safeAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        safeSize: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        token: v1083,
        tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v1103 = v1102;
      const v1104 = v1084;
      
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
    tys: [ctc6, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v1082, v1083], secs: v1085, time: v1084, didSend: v36, from: v1081 } = txn2;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:79:19:application',
    fs: ['at ./index.rsh:79:19:application call to [unknown function] (defined at: ./index.rsh:79:19:function exp)', 'at ./index.rsh:79:19:application call to "liftedInteract" (defined at: ./index.rsh:79:19:application)'],
    msg: 'ready',
    who: 'Alice'
    });
  
  const v1087 = await ctc.getContractInfo();
  const v1090 = [];
  const v1091 = [v1087, v1083];
  const v1092 = undefined /* Remote */;
  const v1093 = await txn2.getOutput('internal', 'v1092', ctc9, v1092);
  const v1095 = v1093[stdlib.checkedBigNumberify('./index.rsh:90:18:application', stdlib.UInt_max, '0')];
  const v1096 = v1093[stdlib.checkedBigNumberify('./index.rsh:90:18:application', stdlib.UInt_max, '1')];
  const v1101 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1095);
  stdlib.assert(v1101, {
    at: './index.rsh:90:18:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Alice'
    });
  stdlib.assert(v1096, {
    at: './index.rsh:89:10:application',
    fs: [],
    msg: 'Child app not announced as ready',
    who: 'Alice'
    });
  const v1102 = {
    constructor: v1081,
    providerCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    safeAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    safeSize: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    token: v1083,
    tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v1103 = v1102;
  let v1104 = v1084;
  
  let txn3 = txn2;
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc14],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1253], secs: v1255, time: v1254, didSend: v639, from: v1252 } = txn4;
    switch (v1253[0]) {
      case 'C_grant0_192': {
        const v1256 = v1253[1];
        undefined /* setApiDetails */;
        ;
        const v1265 = v1256[stdlib.checkedBigNumberify('./index.rsh:243:10:spread', stdlib.UInt_max, '0')];
        const v1266 = v1103.constructor;
        const v1267 = stdlib.addressEq(v1252, v1266);
        stdlib.assert(v1267, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:244:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:246:13:application call to [unknown function] (defined at: ./index.rsh:246:13:function exp)'],
          msg: 'Only constructor can grant',
          who: 'Alice'
          });
        const v1274 = [v1087, v1083, v1265];
        const v1275 = undefined /* Remote */;
        const v1276 = await txn4.getOutput('internal', 'v1275', ctc9, v1275);
        const v1278 = v1276[stdlib.checkedBigNumberify('./index.rsh:248:26:application', stdlib.UInt_max, '0')];
        const v1279 = v1276[stdlib.checkedBigNumberify('./index.rsh:248:26:application', stdlib.UInt_max, '1')];
        const v1284 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1278);
        stdlib.assert(v1284, {
          at: './index.rsh:248:26:application',
          fs: ['at ./index.rsh:246:13:application call to [unknown function] (defined at: ./index.rsh:246:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v1279, {
          at: './index.rsh:247:18:application',
          fs: ['at ./index.rsh:246:13:application call to [unknown function] (defined at: ./index.rsh:246:13:function exp)'],
          msg: 'Child app rejected grant',
          who: 'Alice'
          });
        const v1285 = true;
        await txn4.getOutput('C_grant', 'v1285', ctc8, v1285);
        const v1293 = v1103.providerCount;
        const v1294 = v1103.safeAmount;
        const v1295 = v1103.safeSize;
        const v1296 = v1103.subscriberCount;
        const v1297 = v1103.token;
        const v1298 = v1103.tokenAmount;
        const v1299 = {
          constructor: v1265,
          providerCount: v1293,
          safeAmount: v1294,
          safeSize: v1295,
          subscriberCount: v1296,
          token: v1297,
          tokenAmount: v1298
          };
        const cv1103 = v1299;
        const cv1104 = v1254;
        
        v1103 = cv1103;
        v1104 = cv1104;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U1_announce0_192': {
        const v1536 = v1253[1];
        undefined /* setApiDetails */;
        ;
        const v1583 = v1536[stdlib.checkedBigNumberify('./index.rsh:126:10:spread', stdlib.UInt_max, '0')];
        const v1584 = v1536[stdlib.checkedBigNumberify('./index.rsh:126:10:spread', stdlib.UInt_max, '1')];
        const v1585 = v1536[stdlib.checkedBigNumberify('./index.rsh:126:10:spread', stdlib.UInt_max, '2')];
        const v1586 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v1252, ctc2), null);
        const v1587 = {
          None: 0,
          Some: 1
          }[v1586[0]];
        const v1588 = stdlib.eq(v1587, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v1588, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:127:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:129:13:application call to [unknown function] (defined at: ./index.rsh:129:13:function exp)'],
          msg: 'provider already exists',
          who: 'Alice'
          });
        const v1593 = {
          periodAmount: v1584,
          periodCount: v1583,
          periodLength: v1585,
          subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        await stdlib.mapSet(map0, ctc10, v1252, ctc2, v1593);
        const v1598 = [v1087, v1083, v1252, v1583, v1584, v1585];
        const v1599 = undefined /* Remote */;
        const v1600 = await txn4.getOutput('internal', 'v1599', ctc9, v1599);
        const v1602 = v1600[stdlib.checkedBigNumberify('./index.rsh:138:29:application', stdlib.UInt_max, '0')];
        const v1603 = v1600[stdlib.checkedBigNumberify('./index.rsh:138:29:application', stdlib.UInt_max, '1')];
        const v1608 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1602);
        stdlib.assert(v1608, {
          at: './index.rsh:138:29:application',
          fs: ['at ./index.rsh:129:13:application call to [unknown function] (defined at: ./index.rsh:129:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v1603, {
          at: './index.rsh:137:18:application',
          fs: ['at ./index.rsh:129:13:application call to [unknown function] (defined at: ./index.rsh:129:13:function exp)'],
          msg: 'Child app rejected announcement',
          who: 'Alice'
          });
        const v1609 = true;
        await txn4.getOutput('U1_announce', 'v1609', ctc8, v1609);
        const v1618 = v1103.constructor;
        const v1619 = v1103.providerCount;
        const v1620 = v1103.safeAmount;
        const v1621 = v1103.safeSize;
        const v1622 = v1103.subscriberCount;
        const v1623 = v1103.token;
        const v1624 = v1103.tokenAmount;
        const v1626 = stdlib.safeAdd(v1619, stdlib.checkedBigNumberify('./index.rsh:149:60:decimal', stdlib.UInt_max, '1'));
        const v1627 = {
          constructor: v1618,
          providerCount: v1626,
          safeAmount: v1620,
          safeSize: v1621,
          subscriberCount: v1622,
          token: v1623,
          tokenAmount: v1624
          };
        const cv1103 = v1627;
        const cv1104 = v1254;
        
        v1103 = cv1103;
        v1104 = cv1104;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U2_claim0_192': {
        const v1816 = v1253[1];
        undefined /* setApiDetails */;
        ;
        const v1911 = v1816[stdlib.checkedBigNumberify('./index.rsh:202:10:spread', stdlib.UInt_max, '0')];
        const v1912 = v1816[stdlib.checkedBigNumberify('./index.rsh:202:10:spread', stdlib.UInt_max, '1')];
        const v1913 = v1816[stdlib.checkedBigNumberify('./index.rsh:202:10:spread', stdlib.UInt_max, '2')];
        const v1914 = [v1911, v1912];
        const v1915 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc15, v1914, ctc4), null);
        const v1916 = {
          None: 0,
          Some: 1
          }[v1915[0]];
        const v1917 = stdlib.eq(v1916, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v1917, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
          msg: 'not subscribed',
          who: 'Alice'
          });
        const v1919 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v1911, ctc2), null);
        let v1920;
        switch (v1919[0]) {
          case 'None': {
            const v1921 = v1919[1];
            v1920 = stdlib.checkedBigNumberify('./index.rsh:192:39:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1922 = v1919[1];
            const v1923 = v1922.periodAmount;
            const v1924 = stdlib.safeMul(v1923, v1913);
            v1920 = v1924;
            
            break;
            }
          }
        const v1927 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v1928 = stdlib.fromSome(v1915, v1927);
        const v1929 = v1928[stdlib.checkedBigNumberify('./index.rsh:205:73:array ref', stdlib.UInt_max, '0')];
        const v1930 = stdlib.le(v1920, v1929);
        stdlib.assert(v1930, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
          msg: 'not enough remaining',
          who: 'Alice'
          });
        const v1940 = v1928[stdlib.checkedBigNumberify('./index.rsh:210:17:array', stdlib.UInt_max, '1')];
        let v1943;
        switch (v1919[0]) {
          case 'None': {
            const v1944 = v1919[1];
            v1943 = stdlib.checkedBigNumberify('./index.rsh:197:39:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1945 = v1919[1];
            const v1946 = v1945.periodLength;
            const v1947 = stdlib.safeMul(v1913, v1946);
            v1943 = v1947;
            
            break;
            }
          }
        const v1948 = stdlib.safeAdd(v1940, v1943);
        const v1949 = stdlib.ge(v1254, v1948);
        stdlib.assert(v1949, {
          at: './index.rsh:211:18:application',
          fs: ['at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
          msg: 'not enough time has passed',
          who: 'Alice'
          });
        const v1950 = await ctc.getContractAddress();
        const v1951 = [v1083, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1912];
        const v1952 = [v1083, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1911];
        const v1953 = [v1912, v1950];
        const v1954 = [v1083, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v1953];
        let v1956;
        switch (v1919[0]) {
          case 'None': {
            const v1957 = v1919[1];
            v1956 = stdlib.checkedBigNumberify('./index.rsh:192:39:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1958 = v1919[1];
            const v1959 = v1958.periodAmount;
            const v1960 = stdlib.safeMul(v1959, v1913);
            v1956 = v1960;
            
            break;
            }
          }
        const v1964 = undefined /* Remote */;
        const v1965 = await txn4.getOutput('internal', 'v1964', ctc9, v1964);
        const v1967 = v1965[stdlib.checkedBigNumberify('./index.rsh:228:15:application', stdlib.UInt_max, '0')];
        const v1968 = v1965[stdlib.checkedBigNumberify('./index.rsh:228:15:application', stdlib.UInt_max, '1')];
        const v1973 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1967);
        stdlib.assert(v1973, {
          at: './index.rsh:228:15:application',
          fs: ['at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v1968, {
          at: './index.rsh:219:18:application',
          fs: ['at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
          msg: 'transfer failed',
          who: 'Alice'
          });
        const v1975 = [v1087, v1083, v1911, v1912, v1913];
        null;
        let v1978;
        switch (v1919[0]) {
          case 'None': {
            const v1979 = v1919[1];
            v1978 = stdlib.checkedBigNumberify('./index.rsh:192:39:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1980 = v1919[1];
            const v1981 = v1980.periodAmount;
            const v1982 = stdlib.safeMul(v1981, v1913);
            v1978 = v1982;
            
            break;
            }
          }
        const v1983 = stdlib.safeSub(v1929, v1978);
        let v1985;
        switch (v1919[0]) {
          case 'None': {
            const v1986 = v1919[1];
            v1985 = stdlib.checkedBigNumberify('./index.rsh:197:39:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1987 = v1919[1];
            const v1988 = v1987.periodLength;
            const v1989 = stdlib.safeMul(v1913, v1988);
            v1985 = v1989;
            
            break;
            }
          }
        const v1990 = stdlib.safeAdd(v1940, v1985);
        const v1991 = [v1983, v1990];
        await stdlib.mapSet(map1, ctc15, v1914, ctc4, v1991);
        const v1992 = true;
        await txn4.getOutput('U2_claim', 'v1992', ctc8, v1992);
        const v2001 = v1103.constructor;
        const v2002 = v1103.providerCount;
        const v2003 = v1103.safeAmount;
        const v2004 = v1103.safeSize;
        const v2005 = v1103.subscriberCount;
        const v2006 = v1103.token;
        const v2007 = v1103.tokenAmount;
        let v2010;
        switch (v1919[0]) {
          case 'None': {
            const v2011 = v1919[1];
            v2010 = stdlib.checkedBigNumberify('./index.rsh:192:39:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v2012 = v1919[1];
            const v2013 = v2012.periodAmount;
            const v2014 = stdlib.safeMul(v2013, v1913);
            v2010 = v2014;
            
            break;
            }
          }
        const v2015 = stdlib.safeSub(v2003, v2010);
        const v2016 = {
          constructor: v2001,
          providerCount: v2002,
          safeAmount: v2015,
          safeSize: v2004,
          subscriberCount: v2005,
          token: v2006,
          tokenAmount: v2007
          };
        const cv1103 = v2016;
        const cv1104 = v1254;
        
        v1103 = cv1103;
        v1104 = cv1104;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U2_subscribe0_192': {
        const v2096 = v1253[1];
        undefined /* setApiDetails */;
        ;
        const v2300 = v2096[stdlib.checkedBigNumberify('./index.rsh:165:10:spread', stdlib.UInt_max, '0')];
        const v2301 = [v2300, v1252];
        const v2302 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc15, v2301, ctc4), null);
        const v2303 = {
          None: 0,
          Some: 1
          }[v2302[0]];
        const v2304 = stdlib.eq(v2303, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v2304, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:166:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:169:13:application call to [unknown function] (defined at: ./index.rsh:169:13:function exp)'],
          msg: 'already subscribed',
          who: 'Alice'
          });
        const v2306 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v2300, ctc2), null);
        const v2307 = {
          None: 0,
          Some: 1
          }[v2306[0]];
        const v2308 = stdlib.eq(v2307, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2308, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:167:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:169:13:application call to [unknown function] (defined at: ./index.rsh:169:13:function exp)'],
          msg: 'invalid provider',
          who: 'Alice'
          });
        let v2312;
        switch (v2306[0]) {
          case 'None': {
            const v2314 = v2306[1];
            v2312 = stdlib.checkedBigNumberify('./index.rsh:158:20:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v2315 = v2306[1];
            const v2316 = v2315.periodCount;
            const v2317 = v2315.periodAmount;
            const v2318 = stdlib.safeMul(v2317, v2316);
            v2312 = v2318;
            
            break;
            }
          }
        const v2320 = [v2312, v1254];
        await stdlib.mapSet(map1, ctc15, v2301, ctc4, v2320);
        const v2325 = [v1087, v1083, v2300, v1252];
        const v2326 = undefined /* Remote */;
        const v2327 = await txn4.getOutput('internal', 'v2326', ctc9, v2326);
        const v2329 = v2327[stdlib.checkedBigNumberify('./index.rsh:175:30:application', stdlib.UInt_max, '0')];
        const v2330 = v2327[stdlib.checkedBigNumberify('./index.rsh:175:30:application', stdlib.UInt_max, '1')];
        const v2335 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2329);
        stdlib.assert(v2335, {
          at: './index.rsh:175:30:application',
          fs: ['at ./index.rsh:169:13:application call to [unknown function] (defined at: ./index.rsh:169:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v2330, {
          at: './index.rsh:174:18:application',
          fs: ['at ./index.rsh:169:13:application call to [unknown function] (defined at: ./index.rsh:169:13:function exp)'],
          msg: 'Child app rejected subscription',
          who: 'Alice'
          });
        const v2336 = true;
        await txn4.getOutput('U2_subscribe', 'v2336', ctc8, v2336);
        const v2343 = v1103.constructor;
        const v2344 = v1103.providerCount;
        const v2345 = v1103.safeAmount;
        const v2346 = v1103.safeSize;
        const v2347 = v1103.subscriberCount;
        const v2348 = v1103.token;
        const v2349 = v1103.tokenAmount;
        const v2351 = stdlib.safeAdd(v2347, stdlib.checkedBigNumberify('./index.rsh:182:52:decimal', stdlib.UInt_max, '1'));
        let v2353;
        switch (v2306[0]) {
          case 'None': {
            const v2355 = v2306[1];
            v2353 = stdlib.checkedBigNumberify('./index.rsh:158:20:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v2356 = v2306[1];
            const v2357 = v2356.periodCount;
            const v2358 = v2356.periodAmount;
            const v2359 = stdlib.safeMul(v2358, v2357);
            v2353 = v2359;
            
            break;
            }
          }
        const v2360 = stdlib.safeAdd(v2345, v2353);
        let v2363;
        switch (v2306[0]) {
          case 'None': {
            const v2365 = v2306[1];
            v2363 = stdlib.checkedBigNumberify('./index.rsh:158:20:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v2366 = v2306[1];
            const v2367 = v2366.periodCount;
            const v2368 = v2366.periodAmount;
            const v2369 = stdlib.safeMul(v2368, v2367);
            v2363 = v2369;
            
            break;
            }
          }
        const v2370 = stdlib.safeAdd(v2345, v2363);
        const v2371 = stdlib.gt(v2346, v2370);
        const v2372 = v2371 ? v2346 : v2370;
        const v2373 = {
          constructor: v2343,
          providerCount: v2344,
          safeAmount: v2360,
          safeSize: v2372,
          subscriberCount: v2351,
          token: v2348,
          tokenAmount: v2349
          };
        const cv1103 = v2373;
        const cv1104 = v1254;
        
        v1103 = cv1103;
        v1104 = cv1104;
        
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
  const ctc2 = stdlib.T_Struct([['periodCount', ctc1], ['periodAmount', ctc1], ['periodLength', ctc1], ['subscriberCount', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Object({
    constructor: ctc8,
    providerCount: ctc1,
    safeAmount: ctc1,
    safeSize: ctc1,
    subscriberCount: ctc1,
    token: ctc6,
    tokenAmount: ctc1
    });
  const ctc10 = stdlib.T_Tuple([ctc8]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc13 = stdlib.T_Data({
    C_grant0_192: ctc10,
    U1_announce0_192: ctc11,
    U2_claim0_192: ctc12,
    U2_subscribe0_192: ctc10
    });
  const ctc14 = stdlib.T_Bool;
  const ctc15 = stdlib.T_Tuple([ctc1, ctc14]);
  
  const map0_ctc = ctc3;
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
  
  
  const [v1082, v1083, v1087, v1090, v1103] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc6, ctc6, ctc7, ctc9]);
  const v1233 = ctc.selfAddress();
  const v1235 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:243:29:application call to [unknown function] (defined at: ./index.rsh:243:29:function exp)', 'at ./index.rsh:107:29:application call to "runC_grant0_192" (defined at: ./index.rsh:243:10:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
    msg: 'in',
    who: 'C_grant'
    });
  const v1238 = v1103.constructor;
  const v1239 = stdlib.addressEq(v1233, v1238);
  stdlib.assert(v1239, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:244:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:243:29:application call to [unknown function] (defined at: ./index.rsh:243:29:function exp)', 'at ./index.rsh:107:29:application call to "runC_grant0_192" (defined at: ./index.rsh:243:10:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
    msg: 'Only constructor can grant',
    who: 'C_grant'
    });
  const v1246 = ['C_grant0_192', v1235];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1082, v1083, v1087, v1090, v1103, v1246],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:243:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1253], secs: v1255, time: v1254, didSend: v639, from: v1252 } = txn1;
      
      switch (v1253[0]) {
        case 'C_grant0_192': {
          const v1256 = v1253[1];
          sim_r.txns.push({
            kind: 'api',
            who: "C_grant"
            });
          ;
          const v1265 = v1256[stdlib.checkedBigNumberify('./index.rsh:243:10:spread', stdlib.UInt_max, '0')];
          const v1274 = [v1087, v1083, v1265];
          const v1275 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v1082,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:248:26:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:248:26:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc14.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v1275', ctc15, v1275);
          const v1285 = true;
          const v1286 = await txn1.getOutput('C_grant', 'v1285', ctc14, v1285);
          
          const v1293 = v1103.providerCount;
          const v1294 = v1103.safeAmount;
          const v1295 = v1103.safeSize;
          const v1296 = v1103.subscriberCount;
          const v1297 = v1103.token;
          const v1298 = v1103.tokenAmount;
          const v1299 = {
            constructor: v1265,
            providerCount: v1293,
            safeAmount: v1294,
            safeSize: v1295,
            subscriberCount: v1296,
            token: v1297,
            tokenAmount: v1298
            };
          const v4985 = v1299;
          sim_r.isHalt = false;
          
          break;
          }
        case 'U1_announce0_192': {
          const v1536 = v1253[1];
          
          break;
          }
        case 'U2_claim0_192': {
          const v1816 = v1253[1];
          
          break;
          }
        case 'U2_subscribe0_192': {
          const v2096 = v1253[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc6, ctc6, ctc7, ctc9, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1253], secs: v1255, time: v1254, didSend: v639, from: v1252 } = txn1;
  switch (v1253[0]) {
    case 'C_grant0_192': {
      const v1256 = v1253[1];
      undefined /* setApiDetails */;
      ;
      const v1265 = v1256[stdlib.checkedBigNumberify('./index.rsh:243:10:spread', stdlib.UInt_max, '0')];
      const v1266 = v1103.constructor;
      const v1267 = stdlib.addressEq(v1252, v1266);
      stdlib.assert(v1267, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:244:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:246:13:application call to [unknown function] (defined at: ./index.rsh:246:13:function exp)'],
        msg: 'Only constructor can grant',
        who: 'C_grant'
        });
      const v1274 = [v1087, v1083, v1265];
      const v1275 = undefined /* Remote */;
      const v1276 = await txn1.getOutput('internal', 'v1275', ctc15, v1275);
      const v1278 = v1276[stdlib.checkedBigNumberify('./index.rsh:248:26:application', stdlib.UInt_max, '0')];
      const v1279 = v1276[stdlib.checkedBigNumberify('./index.rsh:248:26:application', stdlib.UInt_max, '1')];
      const v1284 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1278);
      stdlib.assert(v1284, {
        at: './index.rsh:248:26:application',
        fs: ['at ./index.rsh:246:13:application call to [unknown function] (defined at: ./index.rsh:246:13:function exp)'],
        msg: 'remote bill check',
        who: 'C_grant'
        });
      stdlib.assert(v1279, {
        at: './index.rsh:247:18:application',
        fs: ['at ./index.rsh:246:13:application call to [unknown function] (defined at: ./index.rsh:246:13:function exp)'],
        msg: 'Child app rejected grant',
        who: 'C_grant'
        });
      const v1285 = true;
      const v1286 = await txn1.getOutput('C_grant', 'v1285', ctc14, v1285);
      if (v639) {
        stdlib.protect(ctc0, await interact.out(v1256, v1286), {
          at: './index.rsh:243:11:application',
          fs: ['at ./index.rsh:243:11:application call to [unknown function] (defined at: ./index.rsh:243:11:function exp)', 'at ./index.rsh:251:12:application call to "k" (defined at: ./index.rsh:246:13:function exp)', 'at ./index.rsh:246:13:application call to [unknown function] (defined at: ./index.rsh:246:13:function exp)'],
          msg: 'out',
          who: 'C_grant'
          });
        }
      else {
        }
      
      const v1293 = v1103.providerCount;
      const v1294 = v1103.safeAmount;
      const v1295 = v1103.safeSize;
      const v1296 = v1103.subscriberCount;
      const v1297 = v1103.token;
      const v1298 = v1103.tokenAmount;
      const v1299 = {
        constructor: v1265,
        providerCount: v1293,
        safeAmount: v1294,
        safeSize: v1295,
        subscriberCount: v1296,
        token: v1297,
        tokenAmount: v1298
        };
      const v4985 = v1299;
      return;
      
      break;
      }
    case 'U1_announce0_192': {
      const v1536 = v1253[1];
      return;
      break;
      }
    case 'U2_claim0_192': {
      const v1816 = v1253[1];
      return;
      break;
      }
    case 'U2_subscribe0_192': {
      const v2096 = v1253[1];
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
  const ctc2 = stdlib.T_Struct([['periodCount', ctc1], ['periodAmount', ctc1], ['periodLength', ctc1], ['subscriberCount', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc13 = stdlib.T_Data({
    C_grant0_192: ctc10,
    U1_announce0_192: ctc11,
    U2_claim0_192: ctc12,
    U2_subscribe0_192: ctc10
    });
  const ctc14 = stdlib.T_Tuple([ctc9, ctc9]);
  
  const map0_ctc = ctc3;
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
    lct: stdlib.checkedBigNumberify('./index.rsh:73:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:73:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v1073, time: v1072, didSend: v22, from: v1071 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1073, time: v1072, didSend: v22, from: v1071 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc6, ctc6],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1082, v1083], secs: v1085, time: v1084, didSend: v36, from: v1081 } = txn2;
  ;
  const v1087 = await ctc.getContractInfo();
  const v1090 = [];
  const v1091 = [v1087, v1083];
  const v1092 = undefined /* Remote */;
  const v1093 = await txn2.getOutput('internal', 'v1092', ctc8, v1092);
  const v1095 = v1093[stdlib.checkedBigNumberify('./index.rsh:90:18:application', stdlib.UInt_max, '0')];
  const v1096 = v1093[stdlib.checkedBigNumberify('./index.rsh:90:18:application', stdlib.UInt_max, '1')];
  const v1101 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1095);
  stdlib.assert(v1101, {
    at: './index.rsh:90:18:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Deployer'
    });
  stdlib.assert(v1096, {
    at: './index.rsh:89:10:application',
    fs: [],
    msg: 'Child app not announced as ready',
    who: 'Deployer'
    });
  const v1102 = {
    constructor: v1081,
    providerCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    safeAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    safeSize: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    token: v1083,
    tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v1103 = v1102;
  let v1104 = v1084;
  
  let txn3 = txn2;
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc13],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1253], secs: v1255, time: v1254, didSend: v639, from: v1252 } = txn4;
    switch (v1253[0]) {
      case 'C_grant0_192': {
        const v1256 = v1253[1];
        undefined /* setApiDetails */;
        ;
        const v1265 = v1256[stdlib.checkedBigNumberify('./index.rsh:243:10:spread', stdlib.UInt_max, '0')];
        const v1266 = v1103.constructor;
        const v1267 = stdlib.addressEq(v1252, v1266);
        stdlib.assert(v1267, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:244:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:246:13:application call to [unknown function] (defined at: ./index.rsh:246:13:function exp)'],
          msg: 'Only constructor can grant',
          who: 'Deployer'
          });
        const v1274 = [v1087, v1083, v1265];
        const v1275 = undefined /* Remote */;
        const v1276 = await txn4.getOutput('internal', 'v1275', ctc8, v1275);
        const v1278 = v1276[stdlib.checkedBigNumberify('./index.rsh:248:26:application', stdlib.UInt_max, '0')];
        const v1279 = v1276[stdlib.checkedBigNumberify('./index.rsh:248:26:application', stdlib.UInt_max, '1')];
        const v1284 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1278);
        stdlib.assert(v1284, {
          at: './index.rsh:248:26:application',
          fs: ['at ./index.rsh:246:13:application call to [unknown function] (defined at: ./index.rsh:246:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v1279, {
          at: './index.rsh:247:18:application',
          fs: ['at ./index.rsh:246:13:application call to [unknown function] (defined at: ./index.rsh:246:13:function exp)'],
          msg: 'Child app rejected grant',
          who: 'Deployer'
          });
        const v1285 = true;
        await txn4.getOutput('C_grant', 'v1285', ctc7, v1285);
        const v1293 = v1103.providerCount;
        const v1294 = v1103.safeAmount;
        const v1295 = v1103.safeSize;
        const v1296 = v1103.subscriberCount;
        const v1297 = v1103.token;
        const v1298 = v1103.tokenAmount;
        const v1299 = {
          constructor: v1265,
          providerCount: v1293,
          safeAmount: v1294,
          safeSize: v1295,
          subscriberCount: v1296,
          token: v1297,
          tokenAmount: v1298
          };
        const cv1103 = v1299;
        const cv1104 = v1254;
        
        v1103 = cv1103;
        v1104 = cv1104;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U1_announce0_192': {
        const v1536 = v1253[1];
        undefined /* setApiDetails */;
        ;
        const v1583 = v1536[stdlib.checkedBigNumberify('./index.rsh:126:10:spread', stdlib.UInt_max, '0')];
        const v1584 = v1536[stdlib.checkedBigNumberify('./index.rsh:126:10:spread', stdlib.UInt_max, '1')];
        const v1585 = v1536[stdlib.checkedBigNumberify('./index.rsh:126:10:spread', stdlib.UInt_max, '2')];
        const v1586 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v1252, ctc2), null);
        const v1587 = {
          None: 0,
          Some: 1
          }[v1586[0]];
        const v1588 = stdlib.eq(v1587, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v1588, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:127:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:129:13:application call to [unknown function] (defined at: ./index.rsh:129:13:function exp)'],
          msg: 'provider already exists',
          who: 'Deployer'
          });
        const v1593 = {
          periodAmount: v1584,
          periodCount: v1583,
          periodLength: v1585,
          subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        await stdlib.mapSet(map0, ctc9, v1252, ctc2, v1593);
        const v1598 = [v1087, v1083, v1252, v1583, v1584, v1585];
        const v1599 = undefined /* Remote */;
        const v1600 = await txn4.getOutput('internal', 'v1599', ctc8, v1599);
        const v1602 = v1600[stdlib.checkedBigNumberify('./index.rsh:138:29:application', stdlib.UInt_max, '0')];
        const v1603 = v1600[stdlib.checkedBigNumberify('./index.rsh:138:29:application', stdlib.UInt_max, '1')];
        const v1608 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1602);
        stdlib.assert(v1608, {
          at: './index.rsh:138:29:application',
          fs: ['at ./index.rsh:129:13:application call to [unknown function] (defined at: ./index.rsh:129:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v1603, {
          at: './index.rsh:137:18:application',
          fs: ['at ./index.rsh:129:13:application call to [unknown function] (defined at: ./index.rsh:129:13:function exp)'],
          msg: 'Child app rejected announcement',
          who: 'Deployer'
          });
        const v1609 = true;
        await txn4.getOutput('U1_announce', 'v1609', ctc7, v1609);
        const v1618 = v1103.constructor;
        const v1619 = v1103.providerCount;
        const v1620 = v1103.safeAmount;
        const v1621 = v1103.safeSize;
        const v1622 = v1103.subscriberCount;
        const v1623 = v1103.token;
        const v1624 = v1103.tokenAmount;
        const v1626 = stdlib.safeAdd(v1619, stdlib.checkedBigNumberify('./index.rsh:149:60:decimal', stdlib.UInt_max, '1'));
        const v1627 = {
          constructor: v1618,
          providerCount: v1626,
          safeAmount: v1620,
          safeSize: v1621,
          subscriberCount: v1622,
          token: v1623,
          tokenAmount: v1624
          };
        const cv1103 = v1627;
        const cv1104 = v1254;
        
        v1103 = cv1103;
        v1104 = cv1104;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U2_claim0_192': {
        const v1816 = v1253[1];
        undefined /* setApiDetails */;
        ;
        const v1911 = v1816[stdlib.checkedBigNumberify('./index.rsh:202:10:spread', stdlib.UInt_max, '0')];
        const v1912 = v1816[stdlib.checkedBigNumberify('./index.rsh:202:10:spread', stdlib.UInt_max, '1')];
        const v1913 = v1816[stdlib.checkedBigNumberify('./index.rsh:202:10:spread', stdlib.UInt_max, '2')];
        const v1914 = [v1911, v1912];
        const v1915 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc14, v1914, ctc4), null);
        const v1916 = {
          None: 0,
          Some: 1
          }[v1915[0]];
        const v1917 = stdlib.eq(v1916, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v1917, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
          msg: 'not subscribed',
          who: 'Deployer'
          });
        const v1919 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v1911, ctc2), null);
        let v1920;
        switch (v1919[0]) {
          case 'None': {
            const v1921 = v1919[1];
            v1920 = stdlib.checkedBigNumberify('./index.rsh:192:39:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1922 = v1919[1];
            const v1923 = v1922.periodAmount;
            const v1924 = stdlib.safeMul(v1923, v1913);
            v1920 = v1924;
            
            break;
            }
          }
        const v1927 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v1928 = stdlib.fromSome(v1915, v1927);
        const v1929 = v1928[stdlib.checkedBigNumberify('./index.rsh:205:73:array ref', stdlib.UInt_max, '0')];
        const v1930 = stdlib.le(v1920, v1929);
        stdlib.assert(v1930, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
          msg: 'not enough remaining',
          who: 'Deployer'
          });
        const v1940 = v1928[stdlib.checkedBigNumberify('./index.rsh:210:17:array', stdlib.UInt_max, '1')];
        let v1943;
        switch (v1919[0]) {
          case 'None': {
            const v1944 = v1919[1];
            v1943 = stdlib.checkedBigNumberify('./index.rsh:197:39:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1945 = v1919[1];
            const v1946 = v1945.periodLength;
            const v1947 = stdlib.safeMul(v1913, v1946);
            v1943 = v1947;
            
            break;
            }
          }
        const v1948 = stdlib.safeAdd(v1940, v1943);
        const v1949 = stdlib.ge(v1254, v1948);
        stdlib.assert(v1949, {
          at: './index.rsh:211:18:application',
          fs: ['at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
          msg: 'not enough time has passed',
          who: 'Deployer'
          });
        const v1950 = await ctc.getContractAddress();
        const v1951 = [v1083, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1912];
        const v1952 = [v1083, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1911];
        const v1953 = [v1912, v1950];
        const v1954 = [v1083, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v1953];
        let v1956;
        switch (v1919[0]) {
          case 'None': {
            const v1957 = v1919[1];
            v1956 = stdlib.checkedBigNumberify('./index.rsh:192:39:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1958 = v1919[1];
            const v1959 = v1958.periodAmount;
            const v1960 = stdlib.safeMul(v1959, v1913);
            v1956 = v1960;
            
            break;
            }
          }
        const v1964 = undefined /* Remote */;
        const v1965 = await txn4.getOutput('internal', 'v1964', ctc8, v1964);
        const v1967 = v1965[stdlib.checkedBigNumberify('./index.rsh:228:15:application', stdlib.UInt_max, '0')];
        const v1968 = v1965[stdlib.checkedBigNumberify('./index.rsh:228:15:application', stdlib.UInt_max, '1')];
        const v1973 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1967);
        stdlib.assert(v1973, {
          at: './index.rsh:228:15:application',
          fs: ['at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v1968, {
          at: './index.rsh:219:18:application',
          fs: ['at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
          msg: 'transfer failed',
          who: 'Deployer'
          });
        const v1975 = [v1087, v1083, v1911, v1912, v1913];
        null;
        let v1978;
        switch (v1919[0]) {
          case 'None': {
            const v1979 = v1919[1];
            v1978 = stdlib.checkedBigNumberify('./index.rsh:192:39:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1980 = v1919[1];
            const v1981 = v1980.periodAmount;
            const v1982 = stdlib.safeMul(v1981, v1913);
            v1978 = v1982;
            
            break;
            }
          }
        const v1983 = stdlib.safeSub(v1929, v1978);
        let v1985;
        switch (v1919[0]) {
          case 'None': {
            const v1986 = v1919[1];
            v1985 = stdlib.checkedBigNumberify('./index.rsh:197:39:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v1987 = v1919[1];
            const v1988 = v1987.periodLength;
            const v1989 = stdlib.safeMul(v1913, v1988);
            v1985 = v1989;
            
            break;
            }
          }
        const v1990 = stdlib.safeAdd(v1940, v1985);
        const v1991 = [v1983, v1990];
        await stdlib.mapSet(map1, ctc14, v1914, ctc4, v1991);
        const v1992 = true;
        await txn4.getOutput('U2_claim', 'v1992', ctc7, v1992);
        const v2001 = v1103.constructor;
        const v2002 = v1103.providerCount;
        const v2003 = v1103.safeAmount;
        const v2004 = v1103.safeSize;
        const v2005 = v1103.subscriberCount;
        const v2006 = v1103.token;
        const v2007 = v1103.tokenAmount;
        let v2010;
        switch (v1919[0]) {
          case 'None': {
            const v2011 = v1919[1];
            v2010 = stdlib.checkedBigNumberify('./index.rsh:192:39:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v2012 = v1919[1];
            const v2013 = v2012.periodAmount;
            const v2014 = stdlib.safeMul(v2013, v1913);
            v2010 = v2014;
            
            break;
            }
          }
        const v2015 = stdlib.safeSub(v2003, v2010);
        const v2016 = {
          constructor: v2001,
          providerCount: v2002,
          safeAmount: v2015,
          safeSize: v2004,
          subscriberCount: v2005,
          token: v2006,
          tokenAmount: v2007
          };
        const cv1103 = v2016;
        const cv1104 = v1254;
        
        v1103 = cv1103;
        v1104 = cv1104;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U2_subscribe0_192': {
        const v2096 = v1253[1];
        undefined /* setApiDetails */;
        ;
        const v2300 = v2096[stdlib.checkedBigNumberify('./index.rsh:165:10:spread', stdlib.UInt_max, '0')];
        const v2301 = [v2300, v1252];
        const v2302 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc14, v2301, ctc4), null);
        const v2303 = {
          None: 0,
          Some: 1
          }[v2302[0]];
        const v2304 = stdlib.eq(v2303, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v2304, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:166:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:169:13:application call to [unknown function] (defined at: ./index.rsh:169:13:function exp)'],
          msg: 'already subscribed',
          who: 'Deployer'
          });
        const v2306 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v2300, ctc2), null);
        const v2307 = {
          None: 0,
          Some: 1
          }[v2306[0]];
        const v2308 = stdlib.eq(v2307, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2308, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:167:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:169:13:application call to [unknown function] (defined at: ./index.rsh:169:13:function exp)'],
          msg: 'invalid provider',
          who: 'Deployer'
          });
        let v2312;
        switch (v2306[0]) {
          case 'None': {
            const v2314 = v2306[1];
            v2312 = stdlib.checkedBigNumberify('./index.rsh:158:20:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v2315 = v2306[1];
            const v2316 = v2315.periodCount;
            const v2317 = v2315.periodAmount;
            const v2318 = stdlib.safeMul(v2317, v2316);
            v2312 = v2318;
            
            break;
            }
          }
        const v2320 = [v2312, v1254];
        await stdlib.mapSet(map1, ctc14, v2301, ctc4, v2320);
        const v2325 = [v1087, v1083, v2300, v1252];
        const v2326 = undefined /* Remote */;
        const v2327 = await txn4.getOutput('internal', 'v2326', ctc8, v2326);
        const v2329 = v2327[stdlib.checkedBigNumberify('./index.rsh:175:30:application', stdlib.UInt_max, '0')];
        const v2330 = v2327[stdlib.checkedBigNumberify('./index.rsh:175:30:application', stdlib.UInt_max, '1')];
        const v2335 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2329);
        stdlib.assert(v2335, {
          at: './index.rsh:175:30:application',
          fs: ['at ./index.rsh:169:13:application call to [unknown function] (defined at: ./index.rsh:169:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v2330, {
          at: './index.rsh:174:18:application',
          fs: ['at ./index.rsh:169:13:application call to [unknown function] (defined at: ./index.rsh:169:13:function exp)'],
          msg: 'Child app rejected subscription',
          who: 'Deployer'
          });
        const v2336 = true;
        await txn4.getOutput('U2_subscribe', 'v2336', ctc7, v2336);
        const v2343 = v1103.constructor;
        const v2344 = v1103.providerCount;
        const v2345 = v1103.safeAmount;
        const v2346 = v1103.safeSize;
        const v2347 = v1103.subscriberCount;
        const v2348 = v1103.token;
        const v2349 = v1103.tokenAmount;
        const v2351 = stdlib.safeAdd(v2347, stdlib.checkedBigNumberify('./index.rsh:182:52:decimal', stdlib.UInt_max, '1'));
        let v2353;
        switch (v2306[0]) {
          case 'None': {
            const v2355 = v2306[1];
            v2353 = stdlib.checkedBigNumberify('./index.rsh:158:20:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v2356 = v2306[1];
            const v2357 = v2356.periodCount;
            const v2358 = v2356.periodAmount;
            const v2359 = stdlib.safeMul(v2358, v2357);
            v2353 = v2359;
            
            break;
            }
          }
        const v2360 = stdlib.safeAdd(v2345, v2353);
        let v2363;
        switch (v2306[0]) {
          case 'None': {
            const v2365 = v2306[1];
            v2363 = stdlib.checkedBigNumberify('./index.rsh:158:20:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v2366 = v2306[1];
            const v2367 = v2366.periodCount;
            const v2368 = v2366.periodAmount;
            const v2369 = stdlib.safeMul(v2368, v2367);
            v2363 = v2369;
            
            break;
            }
          }
        const v2370 = stdlib.safeAdd(v2345, v2363);
        const v2371 = stdlib.gt(v2346, v2370);
        const v2372 = v2371 ? v2346 : v2370;
        const v2373 = {
          constructor: v2343,
          providerCount: v2344,
          safeAmount: v2360,
          safeSize: v2372,
          subscriberCount: v2351,
          token: v2348,
          tokenAmount: v2349
          };
        const cv1103 = v2373;
        const cv1104 = v1254;
        
        v1103 = cv1103;
        v1104 = cv1104;
        
        txn3 = txn4;
        continue;
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
  const ctc2 = stdlib.T_Struct([['periodCount', ctc1], ['periodAmount', ctc1], ['periodLength', ctc1], ['subscriberCount', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Object({
    constructor: ctc8,
    providerCount: ctc1,
    safeAmount: ctc1,
    safeSize: ctc1,
    subscriberCount: ctc1,
    token: ctc6,
    tokenAmount: ctc1
    });
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc8]);
  const ctc12 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc13 = stdlib.T_Data({
    C_grant0_192: ctc11,
    U1_announce0_192: ctc10,
    U2_claim0_192: ctc12,
    U2_subscribe0_192: ctc11
    });
  const ctc14 = stdlib.T_Bool;
  const ctc15 = stdlib.T_Tuple([ctc1, ctc14]);
  
  const map0_ctc = ctc3;
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
  
  
  const [v1082, v1083, v1087, v1090, v1103] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc6, ctc6, ctc7, ctc9]);
  const v1150 = ctc.selfAddress();
  const v1152 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:126:68:application call to [unknown function] (defined at: ./index.rsh:126:68:function exp)', 'at ./index.rsh:107:29:application call to "runU1_announce0_192" (defined at: ./index.rsh:126:10:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
    msg: 'in',
    who: 'U1_announce'
    });
  const v1159 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v1150, ctc2), null);
  const v1160 = {
    None: 0,
    Some: 1
    }[v1159[0]];
  const v1161 = stdlib.eq(v1160, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v1161, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:127:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:126:68:application call to [unknown function] (defined at: ./index.rsh:126:68:function exp)', 'at ./index.rsh:107:29:application call to "runU1_announce0_192" (defined at: ./index.rsh:126:10:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
    msg: 'provider already exists',
    who: 'U1_announce'
    });
  const v1172 = ['U1_announce0_192', v1152];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1082, v1083, v1087, v1090, v1103, v1172],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:126:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1253], secs: v1255, time: v1254, didSend: v639, from: v1252 } = txn1;
      
      switch (v1253[0]) {
        case 'C_grant0_192': {
          const v1256 = v1253[1];
          
          break;
          }
        case 'U1_announce0_192': {
          const v1536 = v1253[1];
          sim_r.txns.push({
            kind: 'api',
            who: "U1_announce"
            });
          ;
          const v1583 = v1536[stdlib.checkedBigNumberify('./index.rsh:126:10:spread', stdlib.UInt_max, '0')];
          const v1584 = v1536[stdlib.checkedBigNumberify('./index.rsh:126:10:spread', stdlib.UInt_max, '1')];
          const v1585 = v1536[stdlib.checkedBigNumberify('./index.rsh:126:10:spread', stdlib.UInt_max, '2')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v1252, ctc2), null);
          const v1593 = {
            periodAmount: v1584,
            periodCount: v1583,
            periodLength: v1585,
            subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          await stdlib.simMapSet(sim_r, 0, ctc8, v1252, ctc2, v1593);
          const v1598 = [v1087, v1083, v1252, v1583, v1584, v1585];
          const v1599 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v1082,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:138:29:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:138:29:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc14.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v1599', ctc15, v1599);
          const v1609 = true;
          const v1610 = await txn1.getOutput('U1_announce', 'v1609', ctc14, v1609);
          
          const v1618 = v1103.constructor;
          const v1619 = v1103.providerCount;
          const v1620 = v1103.safeAmount;
          const v1621 = v1103.safeSize;
          const v1622 = v1103.subscriberCount;
          const v1623 = v1103.token;
          const v1624 = v1103.tokenAmount;
          const v1626 = stdlib.safeAdd(v1619, stdlib.checkedBigNumberify('./index.rsh:149:60:decimal', stdlib.UInt_max, '1'));
          const v1627 = {
            constructor: v1618,
            providerCount: v1626,
            safeAmount: v1620,
            safeSize: v1621,
            subscriberCount: v1622,
            token: v1623,
            tokenAmount: v1624
            };
          const v4995 = v1627;
          sim_r.isHalt = false;
          
          break;
          }
        case 'U2_claim0_192': {
          const v1816 = v1253[1];
          
          break;
          }
        case 'U2_subscribe0_192': {
          const v2096 = v1253[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc6, ctc6, ctc7, ctc9, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1253], secs: v1255, time: v1254, didSend: v639, from: v1252 } = txn1;
  switch (v1253[0]) {
    case 'C_grant0_192': {
      const v1256 = v1253[1];
      return;
      break;
      }
    case 'U1_announce0_192': {
      const v1536 = v1253[1];
      undefined /* setApiDetails */;
      ;
      const v1583 = v1536[stdlib.checkedBigNumberify('./index.rsh:126:10:spread', stdlib.UInt_max, '0')];
      const v1584 = v1536[stdlib.checkedBigNumberify('./index.rsh:126:10:spread', stdlib.UInt_max, '1')];
      const v1585 = v1536[stdlib.checkedBigNumberify('./index.rsh:126:10:spread', stdlib.UInt_max, '2')];
      const v1586 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v1252, ctc2), null);
      const v1587 = {
        None: 0,
        Some: 1
        }[v1586[0]];
      const v1588 = stdlib.eq(v1587, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v1588, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:127:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:129:13:application call to [unknown function] (defined at: ./index.rsh:129:13:function exp)'],
        msg: 'provider already exists',
        who: 'U1_announce'
        });
      const v1593 = {
        periodAmount: v1584,
        periodCount: v1583,
        periodLength: v1585,
        subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      await stdlib.mapSet(map0, ctc8, v1252, ctc2, v1593);
      const v1598 = [v1087, v1083, v1252, v1583, v1584, v1585];
      const v1599 = undefined /* Remote */;
      const v1600 = await txn1.getOutput('internal', 'v1599', ctc15, v1599);
      const v1602 = v1600[stdlib.checkedBigNumberify('./index.rsh:138:29:application', stdlib.UInt_max, '0')];
      const v1603 = v1600[stdlib.checkedBigNumberify('./index.rsh:138:29:application', stdlib.UInt_max, '1')];
      const v1608 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1602);
      stdlib.assert(v1608, {
        at: './index.rsh:138:29:application',
        fs: ['at ./index.rsh:129:13:application call to [unknown function] (defined at: ./index.rsh:129:13:function exp)'],
        msg: 'remote bill check',
        who: 'U1_announce'
        });
      stdlib.assert(v1603, {
        at: './index.rsh:137:18:application',
        fs: ['at ./index.rsh:129:13:application call to [unknown function] (defined at: ./index.rsh:129:13:function exp)'],
        msg: 'Child app rejected announcement',
        who: 'U1_announce'
        });
      const v1609 = true;
      const v1610 = await txn1.getOutput('U1_announce', 'v1609', ctc14, v1609);
      if (v639) {
        stdlib.protect(ctc0, await interact.out(v1536, v1610), {
          at: './index.rsh:126:11:application',
          fs: ['at ./index.rsh:126:11:application call to [unknown function] (defined at: ./index.rsh:126:11:function exp)', 'at ./index.rsh:148:12:application call to "k" (defined at: ./index.rsh:129:13:function exp)', 'at ./index.rsh:129:13:application call to [unknown function] (defined at: ./index.rsh:129:13:function exp)'],
          msg: 'out',
          who: 'U1_announce'
          });
        }
      else {
        }
      
      const v1618 = v1103.constructor;
      const v1619 = v1103.providerCount;
      const v1620 = v1103.safeAmount;
      const v1621 = v1103.safeSize;
      const v1622 = v1103.subscriberCount;
      const v1623 = v1103.token;
      const v1624 = v1103.tokenAmount;
      const v1626 = stdlib.safeAdd(v1619, stdlib.checkedBigNumberify('./index.rsh:149:60:decimal', stdlib.UInt_max, '1'));
      const v1627 = {
        constructor: v1618,
        providerCount: v1626,
        safeAmount: v1620,
        safeSize: v1621,
        subscriberCount: v1622,
        token: v1623,
        tokenAmount: v1624
        };
      const v4995 = v1627;
      return;
      
      break;
      }
    case 'U2_claim0_192': {
      const v1816 = v1253[1];
      return;
      break;
      }
    case 'U2_subscribe0_192': {
      const v2096 = v1253[1];
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
  const ctc2 = stdlib.T_Struct([['periodCount', ctc1], ['periodAmount', ctc1], ['periodLength', ctc1], ['subscriberCount', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Object({
    constructor: ctc8,
    providerCount: ctc1,
    safeAmount: ctc1,
    safeSize: ctc1,
    subscriberCount: ctc1,
    token: ctc6,
    tokenAmount: ctc1
    });
  const ctc10 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc12 = stdlib.T_Tuple([ctc8]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc14 = stdlib.T_Data({
    C_grant0_192: ctc12,
    U1_announce0_192: ctc13,
    U2_claim0_192: ctc10,
    U2_subscribe0_192: ctc12
    });
  const ctc15 = stdlib.T_Bool;
  const ctc16 = stdlib.T_Tuple([ctc1, ctc15]);
  const ctc17 = stdlib.T_Tuple([ctc6, ctc1, ctc8]);
  const ctc18 = stdlib.T_Tuple([ctc6, ctc1, ctc11]);
  
  const map0_ctc = ctc3;
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
  
  
  const [v1082, v1083, v1087, v1090, v1103] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc6, ctc6, ctc7, ctc9]);
  const v1197 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:202:49:application call to [unknown function] (defined at: ./index.rsh:202:49:function exp)', 'at ./index.rsh:107:29:application call to "runU2_claim0_192" (defined at: ./index.rsh:202:10:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
    msg: 'in',
    who: 'U2_claim'
    });
  const v1198 = v1197[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1199 = v1197[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1200 = v1197[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v1204 = [v1198, v1199];
  const v1205 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v1204, ctc4), null);
  const v1206 = {
    None: 0,
    Some: 1
    }[v1205[0]];
  const v1207 = stdlib.eq(v1206, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1207, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:49:application call to [unknown function] (defined at: ./index.rsh:202:49:function exp)', 'at ./index.rsh:107:29:application call to "runU2_claim0_192" (defined at: ./index.rsh:202:10:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
    msg: 'not subscribed',
    who: 'U2_claim'
    });
  const v1209 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v1198, ctc2), null);
  let v1210;
  switch (v1209[0]) {
    case 'None': {
      const v1211 = v1209[1];
      v1210 = stdlib.checkedBigNumberify('./index.rsh:192:39:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    case 'Some': {
      const v1212 = v1209[1];
      const v1213 = v1212.periodAmount;
      const v1214 = stdlib.safeMul(v1213, v1200);
      v1210 = v1214;
      
      break;
      }
    }
  const v1217 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v1218 = stdlib.fromSome(v1205, v1217);
  const v1219 = v1218[stdlib.checkedBigNumberify('./index.rsh:205:73:array ref', stdlib.UInt_max, '0')];
  const v1220 = stdlib.le(v1210, v1219);
  stdlib.assert(v1220, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:49:application call to [unknown function] (defined at: ./index.rsh:202:49:function exp)', 'at ./index.rsh:107:29:application call to "runU2_claim0_192" (defined at: ./index.rsh:202:10:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
    msg: 'not enough remaining',
    who: 'U2_claim'
    });
  const v1231 = ['U2_claim0_192', v1197];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1082, v1083, v1087, v1090, v1103, v1231],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:202:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1253], secs: v1255, time: v1254, didSend: v639, from: v1252 } = txn1;
      
      switch (v1253[0]) {
        case 'C_grant0_192': {
          const v1256 = v1253[1];
          
          break;
          }
        case 'U1_announce0_192': {
          const v1536 = v1253[1];
          
          break;
          }
        case 'U2_claim0_192': {
          const v1816 = v1253[1];
          sim_r.txns.push({
            kind: 'api',
            who: "U2_claim"
            });
          ;
          const v1911 = v1816[stdlib.checkedBigNumberify('./index.rsh:202:10:spread', stdlib.UInt_max, '0')];
          const v1912 = v1816[stdlib.checkedBigNumberify('./index.rsh:202:10:spread', stdlib.UInt_max, '1')];
          const v1913 = v1816[stdlib.checkedBigNumberify('./index.rsh:202:10:spread', stdlib.UInt_max, '2')];
          const v1914 = [v1911, v1912];
          const v1915 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc11, v1914, ctc4), null);
          const v1919 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v1911, ctc2), null);
          const v1927 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v1928 = stdlib.fromSome(v1915, v1927);
          const v1929 = v1928[stdlib.checkedBigNumberify('./index.rsh:205:73:array ref', stdlib.UInt_max, '0')];
          const v1940 = v1928[stdlib.checkedBigNumberify('./index.rsh:210:17:array', stdlib.UInt_max, '1')];
          const v1950 = await ctc.getContractAddress();
          const v1951 = [v1083, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1912];
          const v1952 = [v1083, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1911];
          const v1953 = [v1912, v1950];
          const v1954 = [v1083, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v1953];
          let v1956;
          switch (v1919[0]) {
            case 'None': {
              const v1957 = v1919[1];
              v1956 = stdlib.checkedBigNumberify('./index.rsh:192:39:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v1958 = v1919[1];
              const v1959 = v1958.periodAmount;
              const v1960 = stdlib.safeMul(v1959, v1913);
              v1956 = v1960;
              
              break;
              }
            }
          const v1964 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v1083,
              remote: ({
                accs: [v1912, v1911],
                apps: [v1083],
                bills: stdlib.checkedBigNumberify('./index.rsh:228:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc17, v1951], [ctc17, v1952], [ctc18, v1954]],
                fees: stdlib.checkedBigNumberify('./index.rsh:221:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:228:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc15.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v1964', ctc16, v1964);
          const v1975 = [v1087, v1083, v1911, v1912, v1913];
          null;
          let v1978;
          switch (v1919[0]) {
            case 'None': {
              const v1979 = v1919[1];
              v1978 = stdlib.checkedBigNumberify('./index.rsh:192:39:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v1980 = v1919[1];
              const v1981 = v1980.periodAmount;
              const v1982 = stdlib.safeMul(v1981, v1913);
              v1978 = v1982;
              
              break;
              }
            }
          const v1983 = stdlib.safeSub(v1929, v1978);
          let v1985;
          switch (v1919[0]) {
            case 'None': {
              const v1986 = v1919[1];
              v1985 = stdlib.checkedBigNumberify('./index.rsh:197:39:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v1987 = v1919[1];
              const v1988 = v1987.periodLength;
              const v1989 = stdlib.safeMul(v1913, v1988);
              v1985 = v1989;
              
              break;
              }
            }
          const v1990 = stdlib.safeAdd(v1940, v1985);
          const v1991 = [v1983, v1990];
          await stdlib.simMapSet(sim_r, 1, ctc11, v1914, ctc4, v1991);
          const v1992 = true;
          const v1993 = await txn1.getOutput('U2_claim', 'v1992', ctc15, v1992);
          
          const v2001 = v1103.constructor;
          const v2002 = v1103.providerCount;
          const v2003 = v1103.safeAmount;
          const v2004 = v1103.safeSize;
          const v2005 = v1103.subscriberCount;
          const v2006 = v1103.token;
          const v2007 = v1103.tokenAmount;
          let v2010;
          switch (v1919[0]) {
            case 'None': {
              const v2011 = v1919[1];
              v2010 = stdlib.checkedBigNumberify('./index.rsh:192:39:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v2012 = v1919[1];
              const v2013 = v2012.periodAmount;
              const v2014 = stdlib.safeMul(v2013, v1913);
              v2010 = v2014;
              
              break;
              }
            }
          const v2015 = stdlib.safeSub(v2003, v2010);
          const v2016 = {
            constructor: v2001,
            providerCount: v2002,
            safeAmount: v2015,
            safeSize: v2004,
            subscriberCount: v2005,
            token: v2006,
            tokenAmount: v2007
            };
          const v5005 = v2016;
          sim_r.isHalt = false;
          
          break;
          }
        case 'U2_subscribe0_192': {
          const v2096 = v1253[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc6, ctc6, ctc7, ctc9, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1253], secs: v1255, time: v1254, didSend: v639, from: v1252 } = txn1;
  switch (v1253[0]) {
    case 'C_grant0_192': {
      const v1256 = v1253[1];
      return;
      break;
      }
    case 'U1_announce0_192': {
      const v1536 = v1253[1];
      return;
      break;
      }
    case 'U2_claim0_192': {
      const v1816 = v1253[1];
      undefined /* setApiDetails */;
      ;
      const v1911 = v1816[stdlib.checkedBigNumberify('./index.rsh:202:10:spread', stdlib.UInt_max, '0')];
      const v1912 = v1816[stdlib.checkedBigNumberify('./index.rsh:202:10:spread', stdlib.UInt_max, '1')];
      const v1913 = v1816[stdlib.checkedBigNumberify('./index.rsh:202:10:spread', stdlib.UInt_max, '2')];
      const v1914 = [v1911, v1912];
      const v1915 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v1914, ctc4), null);
      const v1916 = {
        None: 0,
        Some: 1
        }[v1915[0]];
      const v1917 = stdlib.eq(v1916, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1917, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
        msg: 'not subscribed',
        who: 'U2_claim'
        });
      const v1919 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v1911, ctc2), null);
      let v1920;
      switch (v1919[0]) {
        case 'None': {
          const v1921 = v1919[1];
          v1920 = stdlib.checkedBigNumberify('./index.rsh:192:39:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v1922 = v1919[1];
          const v1923 = v1922.periodAmount;
          const v1924 = stdlib.safeMul(v1923, v1913);
          v1920 = v1924;
          
          break;
          }
        }
      const v1927 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v1928 = stdlib.fromSome(v1915, v1927);
      const v1929 = v1928[stdlib.checkedBigNumberify('./index.rsh:205:73:array ref', stdlib.UInt_max, '0')];
      const v1930 = stdlib.le(v1920, v1929);
      stdlib.assert(v1930, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
        msg: 'not enough remaining',
        who: 'U2_claim'
        });
      const v1940 = v1928[stdlib.checkedBigNumberify('./index.rsh:210:17:array', stdlib.UInt_max, '1')];
      let v1943;
      switch (v1919[0]) {
        case 'None': {
          const v1944 = v1919[1];
          v1943 = stdlib.checkedBigNumberify('./index.rsh:197:39:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v1945 = v1919[1];
          const v1946 = v1945.periodLength;
          const v1947 = stdlib.safeMul(v1913, v1946);
          v1943 = v1947;
          
          break;
          }
        }
      const v1948 = stdlib.safeAdd(v1940, v1943);
      const v1949 = stdlib.ge(v1254, v1948);
      stdlib.assert(v1949, {
        at: './index.rsh:211:18:application',
        fs: ['at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
        msg: 'not enough time has passed',
        who: 'U2_claim'
        });
      const v1950 = await ctc.getContractAddress();
      const v1951 = [v1083, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1912];
      const v1952 = [v1083, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1911];
      const v1953 = [v1912, v1950];
      const v1954 = [v1083, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v1953];
      let v1956;
      switch (v1919[0]) {
        case 'None': {
          const v1957 = v1919[1];
          v1956 = stdlib.checkedBigNumberify('./index.rsh:192:39:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v1958 = v1919[1];
          const v1959 = v1958.periodAmount;
          const v1960 = stdlib.safeMul(v1959, v1913);
          v1956 = v1960;
          
          break;
          }
        }
      const v1964 = undefined /* Remote */;
      const v1965 = await txn1.getOutput('internal', 'v1964', ctc16, v1964);
      const v1967 = v1965[stdlib.checkedBigNumberify('./index.rsh:228:15:application', stdlib.UInt_max, '0')];
      const v1968 = v1965[stdlib.checkedBigNumberify('./index.rsh:228:15:application', stdlib.UInt_max, '1')];
      const v1973 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1967);
      stdlib.assert(v1973, {
        at: './index.rsh:228:15:application',
        fs: ['at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
        msg: 'remote bill check',
        who: 'U2_claim'
        });
      stdlib.assert(v1968, {
        at: './index.rsh:219:18:application',
        fs: ['at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
        msg: 'transfer failed',
        who: 'U2_claim'
        });
      const v1975 = [v1087, v1083, v1911, v1912, v1913];
      null;
      let v1978;
      switch (v1919[0]) {
        case 'None': {
          const v1979 = v1919[1];
          v1978 = stdlib.checkedBigNumberify('./index.rsh:192:39:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v1980 = v1919[1];
          const v1981 = v1980.periodAmount;
          const v1982 = stdlib.safeMul(v1981, v1913);
          v1978 = v1982;
          
          break;
          }
        }
      const v1983 = stdlib.safeSub(v1929, v1978);
      let v1985;
      switch (v1919[0]) {
        case 'None': {
          const v1986 = v1919[1];
          v1985 = stdlib.checkedBigNumberify('./index.rsh:197:39:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v1987 = v1919[1];
          const v1988 = v1987.periodLength;
          const v1989 = stdlib.safeMul(v1913, v1988);
          v1985 = v1989;
          
          break;
          }
        }
      const v1990 = stdlib.safeAdd(v1940, v1985);
      const v1991 = [v1983, v1990];
      await stdlib.mapSet(map1, ctc11, v1914, ctc4, v1991);
      const v1992 = true;
      const v1993 = await txn1.getOutput('U2_claim', 'v1992', ctc15, v1992);
      if (v639) {
        stdlib.protect(ctc0, await interact.out(v1816, v1993), {
          at: './index.rsh:202:11:application',
          fs: ['at ./index.rsh:202:11:application call to [unknown function] (defined at: ./index.rsh:202:11:function exp)', 'at ./index.rsh:236:12:application call to "k" (defined at: ./index.rsh:209:13:function exp)', 'at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
          msg: 'out',
          who: 'U2_claim'
          });
        }
      else {
        }
      
      const v2001 = v1103.constructor;
      const v2002 = v1103.providerCount;
      const v2003 = v1103.safeAmount;
      const v2004 = v1103.safeSize;
      const v2005 = v1103.subscriberCount;
      const v2006 = v1103.token;
      const v2007 = v1103.tokenAmount;
      let v2010;
      switch (v1919[0]) {
        case 'None': {
          const v2011 = v1919[1];
          v2010 = stdlib.checkedBigNumberify('./index.rsh:192:39:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v2012 = v1919[1];
          const v2013 = v2012.periodAmount;
          const v2014 = stdlib.safeMul(v2013, v1913);
          v2010 = v2014;
          
          break;
          }
        }
      const v2015 = stdlib.safeSub(v2003, v2010);
      const v2016 = {
        constructor: v2001,
        providerCount: v2002,
        safeAmount: v2015,
        safeSize: v2004,
        subscriberCount: v2005,
        token: v2006,
        tokenAmount: v2007
        };
      const v5005 = v2016;
      return;
      
      break;
      }
    case 'U2_subscribe0_192': {
      const v2096 = v1253[1];
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
  const ctc2 = stdlib.T_Struct([['periodCount', ctc1], ['periodAmount', ctc1], ['periodLength', ctc1], ['subscriberCount', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Object({
    constructor: ctc8,
    providerCount: ctc1,
    safeAmount: ctc1,
    safeSize: ctc1,
    subscriberCount: ctc1,
    token: ctc6,
    tokenAmount: ctc1
    });
  const ctc10 = stdlib.T_Tuple([ctc8]);
  const ctc11 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc14 = stdlib.T_Data({
    C_grant0_192: ctc10,
    U1_announce0_192: ctc12,
    U2_claim0_192: ctc13,
    U2_subscribe0_192: ctc10
    });
  const ctc15 = stdlib.T_Bool;
  const ctc16 = stdlib.T_Tuple([ctc1, ctc15]);
  
  const map0_ctc = ctc3;
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
  
  
  const [v1082, v1083, v1087, v1090, v1103] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc6, ctc6, ctc7, ctc9]);
  const v1174 = ctc.selfAddress();
  const v1176 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:165:34:application call to [unknown function] (defined at: ./index.rsh:165:34:function exp)', 'at ./index.rsh:107:29:application call to "runU2_subscribe0_192" (defined at: ./index.rsh:165:10:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
    msg: 'in',
    who: 'U2_subscribe'
    });
  const v1177 = v1176[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1179 = [v1177, v1174];
  const v1180 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v1179, ctc4), null);
  const v1181 = {
    None: 0,
    Some: 1
    }[v1180[0]];
  const v1182 = stdlib.eq(v1181, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v1182, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:166:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:165:34:application call to [unknown function] (defined at: ./index.rsh:165:34:function exp)', 'at ./index.rsh:107:29:application call to "runU2_subscribe0_192" (defined at: ./index.rsh:165:10:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
    msg: 'already subscribed',
    who: 'U2_subscribe'
    });
  const v1184 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v1177, ctc2), null);
  const v1185 = {
    None: 0,
    Some: 1
    }[v1184[0]];
  const v1186 = stdlib.eq(v1185, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1186, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:167:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:165:34:application call to [unknown function] (defined at: ./index.rsh:165:34:function exp)', 'at ./index.rsh:107:29:application call to "runU2_subscribe0_192" (defined at: ./index.rsh:165:10:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
    msg: 'invalid provider',
    who: 'U2_subscribe'
    });
  const v1193 = ['U2_subscribe0_192', v1176];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1082, v1083, v1087, v1090, v1103, v1193],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:165:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1253], secs: v1255, time: v1254, didSend: v639, from: v1252 } = txn1;
      
      switch (v1253[0]) {
        case 'C_grant0_192': {
          const v1256 = v1253[1];
          
          break;
          }
        case 'U1_announce0_192': {
          const v1536 = v1253[1];
          
          break;
          }
        case 'U2_claim0_192': {
          const v1816 = v1253[1];
          
          break;
          }
        case 'U2_subscribe0_192': {
          const v2096 = v1253[1];
          sim_r.txns.push({
            kind: 'api',
            who: "U2_subscribe"
            });
          ;
          const v2300 = v2096[stdlib.checkedBigNumberify('./index.rsh:165:10:spread', stdlib.UInt_max, '0')];
          const v2301 = [v2300, v1252];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc11, v2301, ctc4), null);
          const v2306 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v2300, ctc2), null);
          let v2312;
          switch (v2306[0]) {
            case 'None': {
              const v2314 = v2306[1];
              v2312 = stdlib.checkedBigNumberify('./index.rsh:158:20:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v2315 = v2306[1];
              const v2316 = v2315.periodCount;
              const v2317 = v2315.periodAmount;
              const v2318 = stdlib.safeMul(v2317, v2316);
              v2312 = v2318;
              
              break;
              }
            }
          const v2320 = [v2312, v1254];
          await stdlib.simMapSet(sim_r, 1, ctc11, v2301, ctc4, v2320);
          const v2325 = [v1087, v1083, v2300, v1252];
          const v2326 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v1082,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:175:30:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:175:30:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc15.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v2326', ctc16, v2326);
          const v2336 = true;
          const v2337 = await txn1.getOutput('U2_subscribe', 'v2336', ctc15, v2336);
          
          const v2343 = v1103.constructor;
          const v2344 = v1103.providerCount;
          const v2345 = v1103.safeAmount;
          const v2346 = v1103.safeSize;
          const v2347 = v1103.subscriberCount;
          const v2348 = v1103.token;
          const v2349 = v1103.tokenAmount;
          const v2351 = stdlib.safeAdd(v2347, stdlib.checkedBigNumberify('./index.rsh:182:52:decimal', stdlib.UInt_max, '1'));
          let v2353;
          switch (v2306[0]) {
            case 'None': {
              const v2355 = v2306[1];
              v2353 = stdlib.checkedBigNumberify('./index.rsh:158:20:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v2356 = v2306[1];
              const v2357 = v2356.periodCount;
              const v2358 = v2356.periodAmount;
              const v2359 = stdlib.safeMul(v2358, v2357);
              v2353 = v2359;
              
              break;
              }
            }
          const v2360 = stdlib.safeAdd(v2345, v2353);
          let v2363;
          switch (v2306[0]) {
            case 'None': {
              const v2365 = v2306[1];
              v2363 = stdlib.checkedBigNumberify('./index.rsh:158:20:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v2366 = v2306[1];
              const v2367 = v2366.periodCount;
              const v2368 = v2366.periodAmount;
              const v2369 = stdlib.safeMul(v2368, v2367);
              v2363 = v2369;
              
              break;
              }
            }
          const v2370 = stdlib.safeAdd(v2345, v2363);
          const v2371 = stdlib.gt(v2346, v2370);
          const v2372 = v2371 ? v2346 : v2370;
          const v2373 = {
            constructor: v2343,
            providerCount: v2344,
            safeAmount: v2360,
            safeSize: v2372,
            subscriberCount: v2351,
            token: v2348,
            tokenAmount: v2349
            };
          const v5015 = v2373;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc6, ctc6, ctc7, ctc9, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1253], secs: v1255, time: v1254, didSend: v639, from: v1252 } = txn1;
  switch (v1253[0]) {
    case 'C_grant0_192': {
      const v1256 = v1253[1];
      return;
      break;
      }
    case 'U1_announce0_192': {
      const v1536 = v1253[1];
      return;
      break;
      }
    case 'U2_claim0_192': {
      const v1816 = v1253[1];
      return;
      break;
      }
    case 'U2_subscribe0_192': {
      const v2096 = v1253[1];
      undefined /* setApiDetails */;
      ;
      const v2300 = v2096[stdlib.checkedBigNumberify('./index.rsh:165:10:spread', stdlib.UInt_max, '0')];
      const v2301 = [v2300, v1252];
      const v2302 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v2301, ctc4), null);
      const v2303 = {
        None: 0,
        Some: 1
        }[v2302[0]];
      const v2304 = stdlib.eq(v2303, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2304, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:166:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:169:13:application call to [unknown function] (defined at: ./index.rsh:169:13:function exp)'],
        msg: 'already subscribed',
        who: 'U2_subscribe'
        });
      const v2306 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v2300, ctc2), null);
      const v2307 = {
        None: 0,
        Some: 1
        }[v2306[0]];
      const v2308 = stdlib.eq(v2307, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2308, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:167:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:169:13:application call to [unknown function] (defined at: ./index.rsh:169:13:function exp)'],
        msg: 'invalid provider',
        who: 'U2_subscribe'
        });
      let v2312;
      switch (v2306[0]) {
        case 'None': {
          const v2314 = v2306[1];
          v2312 = stdlib.checkedBigNumberify('./index.rsh:158:20:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v2315 = v2306[1];
          const v2316 = v2315.periodCount;
          const v2317 = v2315.periodAmount;
          const v2318 = stdlib.safeMul(v2317, v2316);
          v2312 = v2318;
          
          break;
          }
        }
      const v2320 = [v2312, v1254];
      await stdlib.mapSet(map1, ctc11, v2301, ctc4, v2320);
      const v2325 = [v1087, v1083, v2300, v1252];
      const v2326 = undefined /* Remote */;
      const v2327 = await txn1.getOutput('internal', 'v2326', ctc16, v2326);
      const v2329 = v2327[stdlib.checkedBigNumberify('./index.rsh:175:30:application', stdlib.UInt_max, '0')];
      const v2330 = v2327[stdlib.checkedBigNumberify('./index.rsh:175:30:application', stdlib.UInt_max, '1')];
      const v2335 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2329);
      stdlib.assert(v2335, {
        at: './index.rsh:175:30:application',
        fs: ['at ./index.rsh:169:13:application call to [unknown function] (defined at: ./index.rsh:169:13:function exp)'],
        msg: 'remote bill check',
        who: 'U2_subscribe'
        });
      stdlib.assert(v2330, {
        at: './index.rsh:174:18:application',
        fs: ['at ./index.rsh:169:13:application call to [unknown function] (defined at: ./index.rsh:169:13:function exp)'],
        msg: 'Child app rejected subscription',
        who: 'U2_subscribe'
        });
      const v2336 = true;
      const v2337 = await txn1.getOutput('U2_subscribe', 'v2336', ctc15, v2336);
      if (v639) {
        stdlib.protect(ctc0, await interact.out(v2096, v2337), {
          at: './index.rsh:165:11:application',
          fs: ['at ./index.rsh:165:11:application call to [unknown function] (defined at: ./index.rsh:165:11:function exp)', 'at ./index.rsh:178:12:application call to "k" (defined at: ./index.rsh:169:13:function exp)', 'at ./index.rsh:169:13:application call to [unknown function] (defined at: ./index.rsh:169:13:function exp)'],
          msg: 'out',
          who: 'U2_subscribe'
          });
        }
      else {
        }
      
      const v2343 = v1103.constructor;
      const v2344 = v1103.providerCount;
      const v2345 = v1103.safeAmount;
      const v2346 = v1103.safeSize;
      const v2347 = v1103.subscriberCount;
      const v2348 = v1103.token;
      const v2349 = v1103.tokenAmount;
      const v2351 = stdlib.safeAdd(v2347, stdlib.checkedBigNumberify('./index.rsh:182:52:decimal', stdlib.UInt_max, '1'));
      let v2353;
      switch (v2306[0]) {
        case 'None': {
          const v2355 = v2306[1];
          v2353 = stdlib.checkedBigNumberify('./index.rsh:158:20:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v2356 = v2306[1];
          const v2357 = v2356.periodCount;
          const v2358 = v2356.periodAmount;
          const v2359 = stdlib.safeMul(v2358, v2357);
          v2353 = v2359;
          
          break;
          }
        }
      const v2360 = stdlib.safeAdd(v2345, v2353);
      let v2363;
      switch (v2306[0]) {
        case 'None': {
          const v2365 = v2306[1];
          v2363 = stdlib.checkedBigNumberify('./index.rsh:158:20:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v2366 = v2306[1];
          const v2367 = v2366.periodCount;
          const v2368 = v2366.periodAmount;
          const v2369 = stdlib.safeMul(v2368, v2367);
          v2363 = v2369;
          
          break;
          }
        }
      const v2370 = stdlib.safeAdd(v2345, v2363);
      const v2371 = stdlib.gt(v2346, v2370);
      const v2372 = v2371 ? v2346 : v2370;
      const v2373 = {
        constructor: v2343,
        providerCount: v2344,
        safeAmount: v2360,
        safeSize: v2372,
        subscriberCount: v2351,
        token: v2348,
        tokenAmount: v2349
        };
      const v5015 = v2373;
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
    impure: [`C_grant(address)byte`, `U1_announce(uint64,uint64,uint64)byte`, `U2_claim(address,address,uint64)byte`, `U2_subscribe(address)byte`, `_reachp_0((uint64))void`, `_reachp_1((uint64,uint64,uint64))void`, `_reachp_3((uint64,(byte,byte[72])))void`],
    pure: [`state()(address,uint64,uint64,uint64,uint64,uint64,uint64)`, `subscription(address,address)(uint64,uint64)`],
    sigs: [`C_grant(address)byte`, `U1_announce(uint64,uint64,uint64)byte`, `U2_claim(address,address,uint64)byte`, `U2_subscribe(address)byte`, `_reachp_0((uint64))void`, `_reachp_1((uint64,uint64,uint64))void`, `_reachp_3((uint64,(byte,byte[72])))void`, `state()(address,uint64,uint64,uint64,uint64,uint64,uint64)`, `subscription(address,address)(uint64,uint64)`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAKAAgBEAYoBDBoxKkBJgQAAQAFYXBwSUQIAAAAAAAAAAExGEEE9ihkSSJbNQEjWzUCKWSCCQQMRo+ABBRFquYEL/mcTgSt918CBK6UWQAEwZStmQTCth2DBMUq3Y0E+9X8izYaAI4JBI0AnwSYCCMATQR7AAEIJgB6ADYaATULI68pNAtQIQWvUFA1CyEGNAESRIgIdTQLIls1DDQLVwhJNQ2ABJ3BTlc0DBZQNA1QsDQMiAhLNA0iVY0EB8wHzwR5BINC/7M2GgEXNhoCFzYaAxc1CzUMNQ0jr4ABATQNFjQMFlA0CxZQUCEHr1BQNQtC/5k2GgE2GgI2GgMXNQs1DDUNI6+AAQI0DTQMUDQLFlBQUDULQv90NhoBNQsjr4ABAzQLUCEFr1BQNQtC/100DVcBIDULMQA0D1cAIBJEKjQTFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBIQSyEDQTshiABG9g56qyGjQRFjQSFlA0C1CyGrMyCmA0CQk0ChcJFrcAPlcEAFA1DYAIAAAAAAAABPs0DVCwNA01DCI0DCJbEkQ0DFcIARdEJDUMgAgAAAAAAAAFBTQMFlEHCFCwNAwWUQcINQQ0CzQPVyAIUDQPVygIUDQPVzAIUDQPVzgIUDQPV0AIUDQPV0gIUDIGNQ41DzQTFjQSFlA0ERZQNBBQNA9QIQYyBjUCNQEpTFcAaGcoNAEWNAIWUGcxGSISRIgHFzQDQAAKgAQVH3x1NARQsCRDNAsiWzUUNAsjWzUNNAslWzUMKDIDKTEAUIgGoCJVIhJEgdTeASkxAFA0FBY0DRZQNAwWUCOvUIgGtSo0ExZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEEshA0E7IYgASb2Rtmsho0ERY0EhZQMQBQNBQWUDQNFlA0DBZQshqzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAAAY/NAtQsDQLNQwiNAwiWxJENAxXCAEXRCQ1C4AIAAAAAAAABkk0CxZRBwhQsDQLFlEHCDUENA9XACA0D4EgWyQIFlA0D1coCFA0D1cwCFA0D1c4CFA0D1dACFA0D1dICFAyBjUONQ9C/rs0C1cAIDUUNAtXICA1DTQLgUBbNQw0FDQNUDUYKCWvKzQYUAGIBZFJNRYiVSQSRCgyAyk0FFCIBX9JNRciVY0CAfMB+UL8+TQNVwEgSTULMQBQNRUoJa8rNBVQAYgFWSJVIhJEKDIDKTQLUIgFSkk1DSJVJBJENA0iVY0CBCgELkL8vTQBIQYSRIgFRTQPVwAgNA9XQAhQNA9XSAhQNA9XIAhQNA9XOAhQNA9XKAhQNA9XMAhQNQQxGSISREL+MTQBIQYSRIgFCSWvKCWvKzQMNAtQUAGIBOCIBR41BEL/1zQLFzUMgASCxGH+NAwWULA0DIgE0iEIryQyBkL90iQ0ARJENAsiWzUMNAsjWzUTNAslWzUSgATN+aSUNAwWUDQTFlA0EhZQsDQMiASaMRg1ESg1ECo0ExZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEEshA0E7IYgATR8uHosho0ERY0EhZQshqzMgpgNAkJNAoXCRa3AD5XBABQNQyACAAAAAAAAARENAxQsDQMNQsiNAsiWxJENAtXCAEXRDEAI69QI69QI69QI69QNBIWUCOvUDIGNQ41D0L9AIgEBYGgjQaIBEk2GgE1C0L/E4gD8zYaATULQv8miAPoNhoBNQtC+3AiMTQSRIECMTUSRCIxNhJEIjE3EkSIA8ghCK8iIkL8zTQNVwFINQtC/fNC/jclrzQWiAPiSTULIls1FjQVNBYORDQLI1s1FTQXIlWNAgAuADRC+wkiNRVC/9M0F1cBICNbNAwLNRVC/8QyBjQVNAsID0Q0FyJVjQIAuQC/QvreIjULQv/kNAw0F1cBICVbCzULQv/VKjQSFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBIQSyEDQSshiABFg3n6GyGjQNSbIcsho0FEmyHLIaNAsWsho0ErIyszIKYDQJCTQKFwkWtwA+VwQAUDUZgAgAAAAAAAAHrDQZULA0GTULIjQLIlsSRDQLVwgBF0Q0ERY0EhZQNBRQNA1QNAwWUDULgAQZuk2mNAtQsDQXIlWNAgAlACtC+igiNQtC/1k0F1cBICNbNAwLNQtC/0o0FyJVjQIAWQBfQvoGIjUNQv/tNBdXASAjWzQMCzUNQv/eIQkrNBhQATQWNA0JFjQVNAsIFlCIAoUkNQuACAAAAAAAAAfINAsWUQcIULA0CxZRBwg1BDQXIlWNAgBOAFRC+bAiNQtC/7k0DDQXVwEgJVsLNQtC/6o0D1cAIDQPVyAIUDQPIQVbNAsJFlA0D1cwCFA0D1c4CFA0D1dACFA0D1dICFAyBjUONQ9C+uAiNQtC/8Q0F1cBICNbNAwLNQtC/7UhCSs0FVABNBQWMgYWUIgB6io0ExZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEEshA0E7IYgAT7/eMasho0ERY0EhZQNAtQMQBQshqzMgpgNAkJNAoXCRa3AD5XBABQNQyACAAAAAAAAAkWNAxQsDQMNQsiNAsiWxJENAtXCAEXRCQ1C4AIAAAAAAAACSA0CxZRBwhQsDQLFlEHCDUENA8hBVs1FjQPIQdbNRU0DSJVjQIAKgAwQviYIjUUQv9CNA1XASBJNQwjWzQMIlsLNRRC/y40DSJVjQIAXwBlQvhxIjUUQv/tNA1XASBJNQsjWzQLIlsLNRRC/9k0FjQMCDULNA9XACA0D1cgCFA0FjQUCBZQNAs0FUk0Cw1NFlA0D4E4WyQIFlA0D1dACFA0D1dICFAyBjUONQ9C+ZAiNQxC/7g0DVcBIEk1CyNbNAsiWws1DEL/pEhMv0iJIrIBJLIQsgeyCLOJQvidNA1XARg1C0L5mUL7HTYaATYaAjULNQxC+0xIiUwJSTUGMgmIAJWJCUlB/+5JNQYxFjQAJAhJNQAJRwI4BzIKEkQ4ECQSRDgIEkSJMRmBBRJEiABVIjIKMgmIAGNC+TO+SRZRBwhFBE1QiSQ1A4lJIhJMNAISEUSJSSJbNRNJI1s1EkklWzURSUgoNRBXGFA1D4lMSb1A/1RLA4gAGEL/TElXAQBMIlVNiTQGNAdKD0H/akL/cjQGCDUGibFC/zKxsglC/yw=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `19`,
    1000: `583`,
    1001: `584`,
    1002: `585`,
    1003: `585`,
    1004: `586`,
    1005: `586`,
    1006: `586`,
    1007: `587`,
    1008: `588`,
    1009: `588`,
    101: `19`,
    1010: `590`,
    1011: `590`,
    1012: `591`,
    1013: `592`,
    1014: `593`,
    1015: `595`,
    1016: `595`,
    1017: `595`,
    1018: `597`,
    1019: `597`,
    102: `19`,
    1020: `598`,
    1021: `598`,
    1022: `599`,
    1023: `600`,
    1024: `603`,
    1025: `603`,
    1026: `603`,
    1027: `604`,
    1028: `605`,
    1029: `607`,
    103: `20`,
    1030: `608`,
    1031: `609`,
    1032: `610`,
    1033: `611`,
    1034: `611`,
    1035: `612`,
    1036: `612`,
    1037: `613`,
    1038: `614`,
    1039: `615`,
    104: `20`,
    1040: `616`,
    1041: `616`,
    1042: `616`,
    1043: `617`,
    1044: `617`,
    1045: `617`,
    1046: `618`,
    1047: `618`,
    1048: `619`,
    1049: `619`,
    105: `20`,
    1050: `619`,
    1051: `621`,
    1052: `621`,
    1053: `622`,
    1054: `623`,
    1055: `623`,
    1056: `624`,
    1057: `624`,
    1058: `624`,
    1059: `624`,
    106: `20`,
    1060: `624`,
    1061: `624`,
    1062: `625`,
    1063: `625`,
    1064: `626`,
    1065: `627`,
    1066: `628`,
    1067: `630`,
    1068: `630`,
    1069: `631`,
    107: `20`,
    1070: `631`,
    1071: `631`,
    1072: `633`,
    1073: `633`,
    1074: `634`,
    1075: `635`,
    1076: `636`,
    1077: `636`,
    1078: `637`,
    1079: `637`,
    108: `20`,
    1080: `637`,
    1081: `639`,
    1082: `640`,
    1083: `640`,
    1084: `641`,
    1085: `642`,
    1086: `644`,
    1087: `644`,
    1088: `645`,
    1089: `646`,
    109: `20`,
    1090: `647`,
    1091: `647`,
    1092: `648`,
    1093: `648`,
    1094: `649`,
    1095: `650`,
    1096: `651`,
    1097: `651`,
    1098: `652`,
    1099: `652`,
    11: `2`,
    110: `20`,
    1100: `653`,
    1101: `654`,
    1102: `655`,
    1103: `655`,
    1104: `656`,
    1105: `656`,
    1106: `656`,
    1107: `656`,
    1108: `656`,
    1109: `656`,
    111: `20`,
    1110: `657`,
    1111: `657`,
    1112: `658`,
    1113: `659`,
    1114: `660`,
    1115: `660`,
    1116: `661`,
    1117: `662`,
    1118: `663`,
    1119: `663`,
    112: `20`,
    1120: `664`,
    1121: `665`,
    1122: `666`,
    1123: `668`,
    1124: `668`,
    1125: `669`,
    1126: `669`,
    1127: `669`,
    1128: `670`,
    1129: `670`,
    113: `20`,
    1130: `671`,
    1131: `671`,
    1132: `672`,
    1133: `673`,
    1134: `673`,
    1135: `674`,
    1136: `675`,
    1137: `675`,
    1138: `676`,
    1139: `677`,
    114: `20`,
    1140: `678`,
    1141: `679`,
    1142: `679`,
    1143: `680`,
    1144: `680`,
    1145: `681`,
    1146: `682`,
    1147: `682`,
    1148: `683`,
    1149: `684`,
    115: `20`,
    1150: `684`,
    1151: `685`,
    1152: `686`,
    1153: `686`,
    1154: `687`,
    1155: `688`,
    1156: `689`,
    1157: `689`,
    1158: `690`,
    1159: `691`,
    116: `20`,
    1160: `692`,
    1161: `692`,
    1162: `693`,
    1163: `693`,
    1164: `694`,
    1165: `694`,
    1166: `695`,
    1167: `695`,
    1168: `697`,
    1169: `697`,
    117: `20`,
    1170: `698`,
    1171: `698`,
    1172: `698`,
    1173: `698`,
    1174: `698`,
    1175: `698`,
    1176: `699`,
    1177: `699`,
    1178: `700`,
    1179: `700`,
    118: `20`,
    1180: `701`,
    1181: `702`,
    1182: `702`,
    1183: `703`,
    1184: `704`,
    1185: `705`,
    1186: `705`,
    1187: `706`,
    1188: `709`,
    1189: `709`,
    119: `20`,
    1190: `710`,
    1191: `711`,
    1192: `711`,
    1193: `712`,
    1194: `713`,
    1195: `713`,
    1196: `714`,
    1197: `715`,
    1198: `716`,
    1199: `717`,
    12: `2`,
    120: `20`,
    1200: `717`,
    1201: `717`,
    1202: `718`,
    1203: `718`,
    1204: `718`,
    1205: `719`,
    1206: `720`,
    1207: `720`,
    1208: `721`,
    1209: `721`,
    121: `20`,
    1210: `721`,
    1211: `721`,
    1212: `721`,
    1213: `721`,
    1214: `721`,
    1215: `721`,
    1216: `721`,
    1217: `721`,
    1218: `722`,
    1219: `722`,
    122: `20`,
    1220: `723`,
    1221: `724`,
    1222: `725`,
    1223: `725`,
    1224: `726`,
    1225: `726`,
    1226: `727`,
    1227: `728`,
    1228: `728`,
    1229: `729`,
    123: `22`,
    1230: `730`,
    1231: `731`,
    1232: `732`,
    1233: `735`,
    1234: `735`,
    1235: `736`,
    1236: `736`,
    1237: `736`,
    1238: `737`,
    1239: `738`,
    124: `24`,
    1240: `741`,
    1241: `741`,
    1242: `742`,
    1243: `743`,
    1244: `744`,
    1245: `745`,
    1246: `746`,
    1247: `747`,
    1248: `748`,
    1249: `749`,
    125: `24`,
    1250: `750`,
    1251: `751`,
    1252: `752`,
    1253: `753`,
    1254: `754`,
    1255: `754`,
    1256: `755`,
    1257: `756`,
    1258: `757`,
    1259: `758`,
    126: `24`,
    1260: `759`,
    1261: `760`,
    1262: `760`,
    1263: `761`,
    1264: `761`,
    1265: `762`,
    1266: `762`,
    1267: `763`,
    1268: `763`,
    1269: `763`,
    127: `25`,
    1270: `765`,
    1271: `765`,
    1272: `765`,
    1273: `766`,
    1274: `766`,
    1275: `766`,
    1276: `766`,
    1277: `767`,
    1278: `767`,
    1279: `767`,
    128: `25`,
    1280: `768`,
    1281: `768`,
    1282: `768`,
    1283: `769`,
    1284: `769`,
    1285: `770`,
    1286: `770`,
    1287: `770`,
    1288: `772`,
    1289: `772`,
    129: `27`,
    1290: `772`,
    1291: `773`,
    1292: `773`,
    1293: `773`,
    1294: `774`,
    1295: `774`,
    1296: `775`,
    1297: `775`,
    1298: `775`,
    1299: `777`,
    13: `2`,
    130: `28`,
    1300: `777`,
    1301: `777`,
    1302: `778`,
    1303: `778`,
    1304: `778`,
    1305: `779`,
    1306: `779`,
    1307: `780`,
    1308: `780`,
    1309: `780`,
    131: `29`,
    1310: `782`,
    1311: `783`,
    1312: `783`,
    1313: `784`,
    1314: `785`,
    1315: `786`,
    1316: `786`,
    1317: `787`,
    1318: `787`,
    1319: `788`,
    132: `30`,
    1320: `789`,
    1321: `790`,
    1322: `791`,
    1323: `791`,
    1324: `792`,
    1325: `793`,
    1326: `794`,
    1327: `795`,
    1328: `795`,
    1329: `796`,
    133: `30`,
    1330: `797`,
    1331: `798`,
    1332: `798`,
    1333: `798`,
    1334: `799`,
    1335: `799`,
    1336: `800`,
    1337: `801`,
    1338: `802`,
    1339: `803`,
    134: `31`,
    1340: `803`,
    1341: `803`,
    1342: `805`,
    1343: `805`,
    1344: `806`,
    1345: `806`,
    1346: `806`,
    1347: `807`,
    1348: `807`,
    1349: `808`,
    135: `32`,
    1350: `808`,
    1351: `808`,
    1352: `810`,
    1353: `810`,
    1354: `810`,
    1355: `812`,
    1356: `813`,
    1357: `814`,
    1358: `814`,
    1359: `815`,
    136: `32`,
    1360: `815`,
    1361: `815`,
    1362: `816`,
    1363: `817`,
    1364: `817`,
    1365: `818`,
    1366: `819`,
    1367: `820`,
    1368: `820`,
    1369: `821`,
    137: `33`,
    1370: `821`,
    1371: `822`,
    1372: `822`,
    1373: `823`,
    1374: `824`,
    1375: `829`,
    1376: `829`,
    1377: `830`,
    1378: `831`,
    1379: `832`,
    138: `34`,
    1380: `832`,
    1381: `833`,
    1382: `833`,
    1383: `834`,
    1384: `835`,
    1385: `836`,
    1386: `836`,
    1387: `836`,
    1388: `836`,
    1389: `836`,
    139: `35`,
    1390: `836`,
    1391: `837`,
    1392: `837`,
    1393: `837`,
    1394: `839`,
    1395: `840`,
    1396: `840`,
    1397: `841`,
    1398: `841`,
    1399: `841`,
    14: `2`,
    140: `36`,
    1400: `843`,
    1401: `843`,
    1402: `844`,
    1403: `844`,
    1404: `844`,
    1405: `845`,
    1406: `846`,
    1407: `847`,
    1408: `847`,
    1409: `848`,
    141: `36`,
    1410: `849`,
    1411: `849`,
    1412: `850`,
    1413: `850`,
    1414: `850`,
    1415: `852`,
    1416: `852`,
    1417: `853`,
    1418: `853`,
    1419: `854`,
    142: `38`,
    1420: `854`,
    1421: `855`,
    1422: `856`,
    1423: `857`,
    1424: `861`,
    1425: `861`,
    1426: `862`,
    1427: `863`,
    1428: `864`,
    1429: `864`,
    143: `38`,
    1430: `864`,
    1431: `864`,
    1432: `864`,
    1433: `864`,
    1434: `865`,
    1435: `865`,
    1436: `865`,
    1437: `867`,
    1438: `868`,
    1439: `868`,
    144: `39`,
    1440: `869`,
    1441: `869`,
    1442: `869`,
    1443: `871`,
    1444: `871`,
    1445: `872`,
    1446: `872`,
    1447: `873`,
    1448: `873`,
    1449: `873`,
    145: `39`,
    1450: `874`,
    1451: `875`,
    1452: `876`,
    1453: `877`,
    1454: `877`,
    1455: `878`,
    1456: `878`,
    1457: `878`,
    1458: `880`,
    1459: `881`,
    146: `40`,
    1460: `881`,
    1461: `882`,
    1462: `883`,
    1463: `884`,
    1464: `885`,
    1465: `885`,
    1466: `886`,
    1467: `886`,
    1468: `887`,
    1469: `888`,
    147: `41`,
    1470: `888`,
    1471: `889`,
    1472: `890`,
    1473: `890`,
    1474: `891`,
    1475: `892`,
    1476: `892`,
    1477: `893`,
    1478: `894`,
    1479: `895`,
    148: `42`,
    1480: `895`,
    1481: `896`,
    1482: `897`,
    1483: `898`,
    1484: `898`,
    1485: `899`,
    1486: `899`,
    1487: `900`,
    1488: `900`,
    1489: `901`,
    149: `42`,
    1490: `901`,
    1491: `903`,
    1492: `903`,
    1493: `904`,
    1494: `904`,
    1495: `904`,
    1496: `904`,
    1497: `904`,
    1498: `904`,
    1499: `905`,
    15: `2`,
    150: `42`,
    1500: `905`,
    1501: `906`,
    1502: `906`,
    1503: `908`,
    1504: `909`,
    1505: `909`,
    1506: `910`,
    1507: `910`,
    1508: `911`,
    1509: `911`,
    151: `43`,
    1510: `913`,
    1511: `914`,
    1512: `914`,
    1513: `915`,
    1514: `915`,
    1515: `916`,
    1516: `916`,
    1517: `917`,
    1518: `918`,
    1519: `918`,
    152: `43`,
    1520: `922`,
    1521: `922`,
    1522: `923`,
    1523: `923`,
    1524: `924`,
    1525: `928`,
    1526: `928`,
    1527: `929`,
    1528: `930`,
    1529: `930`,
    153: `44`,
    1530: `931`,
    1531: `932`,
    1532: `932`,
    1533: `933`,
    1534: `934`,
    1535: `935`,
    1536: `936`,
    1537: `936`,
    1538: `936`,
    1539: `937`,
    154: `45`,
    1540: `937`,
    1541: `937`,
    1542: `938`,
    1543: `939`,
    1544: `939`,
    1545: `940`,
    1546: `940`,
    1547: `940`,
    1548: `940`,
    1549: `940`,
    155: `46`,
    1550: `940`,
    1551: `940`,
    1552: `940`,
    1553: `940`,
    1554: `940`,
    1555: `941`,
    1556: `941`,
    1557: `942`,
    1558: `943`,
    1559: `944`,
    156: `46`,
    1560: `944`,
    1561: `945`,
    1562: `945`,
    1563: `946`,
    1564: `947`,
    1565: `947`,
    1566: `948`,
    1567: `949`,
    1568: `950`,
    1569: `951`,
    157: `47`,
    1570: `955`,
    1571: `955`,
    1572: `956`,
    1573: `956`,
    1574: `956`,
    1575: `957`,
    1576: `958`,
    1577: `962`,
    1578: `962`,
    1579: `963`,
    158: `47`,
    1580: `964`,
    1581: `964`,
    1582: `965`,
    1583: `966`,
    1584: `967`,
    1585: `967`,
    1586: `968`,
    1587: `969`,
    1588: `969`,
    1589: `970`,
    159: `48`,
    1590: `971`,
    1591: `971`,
    1592: `972`,
    1593: `973`,
    1594: `974`,
    1595: `974`,
    1596: `975`,
    1597: `975`,
    1598: `975`,
    1599: `975`,
    16: `2`,
    160: `48`,
    1600: `975`,
    1601: `975`,
    1602: `976`,
    1603: `976`,
    1604: `977`,
    1605: `978`,
    1606: `980`,
    1607: `980`,
    1608: `981`,
    1609: `982`,
    161: `48`,
    1610: `983`,
    1611: `983`,
    1612: `983`,
    1613: `983`,
    1614: `983`,
    1615: `983`,
    1616: `984`,
    1617: `984`,
    1618: `984`,
    1619: `986`,
    162: `49`,
    1620: `987`,
    1621: `987`,
    1622: `988`,
    1623: `988`,
    1624: `988`,
    1625: `990`,
    1626: `990`,
    1627: `991`,
    1628: `991`,
    1629: `991`,
    163: `49`,
    1630: `992`,
    1631: `993`,
    1632: `994`,
    1633: `994`,
    1634: `995`,
    1635: `996`,
    1636: `996`,
    1637: `997`,
    1638: `997`,
    1639: `997`,
    164: `50`,
    1640: `999`,
    1641: `999`,
    1642: `1000`,
    1643: `1001`,
    1644: `1002`,
    1645: `1002`,
    1646: `1002`,
    1647: `1002`,
    1648: `1002`,
    1649: `1002`,
    165: `50`,
    1650: `1003`,
    1651: `1003`,
    1652: `1003`,
    1653: `1005`,
    1654: `1006`,
    1655: `1006`,
    1656: `1007`,
    1657: `1007`,
    1658: `1007`,
    1659: `1009`,
    166: `50`,
    1660: `1009`,
    1661: `1010`,
    1662: `1010`,
    1663: `1010`,
    1664: `1011`,
    1665: `1012`,
    1666: `1013`,
    1667: `1013`,
    1668: `1014`,
    1669: `1015`,
    167: `50`,
    1670: `1015`,
    1671: `1016`,
    1672: `1016`,
    1673: `1016`,
    1674: `1018`,
    1675: `1018`,
    1676: `1019`,
    1677: `1020`,
    1678: `1020`,
    1679: `1021`,
    168: `50`,
    1680: `1022`,
    1681: `1023`,
    1682: `1023`,
    1683: `1024`,
    1684: `1024`,
    1685: `1025`,
    1686: `1026`,
    1687: `1027`,
    1688: `1027`,
    1689: `1028`,
    169: `50`,
    1690: `1028`,
    1691: `1029`,
    1692: `1030`,
    1693: `1031`,
    1694: `1032`,
    1695: `1032`,
    1696: `1032`,
    1697: `1033`,
    1698: `1034`,
    1699: `1034`,
    17: `2`,
    170: `51`,
    1700: `1035`,
    1701: `1035`,
    1702: `1035`,
    1703: `1035`,
    1704: `1035`,
    1705: `1035`,
    1706: `1035`,
    1707: `1035`,
    1708: `1035`,
    1709: `1035`,
    171: `51`,
    1710: `1036`,
    1711: `1036`,
    1712: `1037`,
    1713: `1038`,
    1714: `1038`,
    1715: `1038`,
    1716: `1039`,
    1717: `1040`,
    1718: `1041`,
    1719: `1041`,
    172: `52`,
    1720: `1042`,
    1721: `1043`,
    1722: `1043`,
    1723: `1043`,
    1724: `1044`,
    1725: `1044`,
    1726: `1045`,
    1727: `1045`,
    1728: `1046`,
    1729: `1047`,
    173: `53`,
    1730: `1048`,
    1731: `1048`,
    1732: `1048`,
    1733: `1048`,
    1734: `1048`,
    1735: `1048`,
    1736: `1049`,
    1737: `1049`,
    1738: `1049`,
    1739: `1051`,
    174: `54`,
    1740: `1052`,
    1741: `1052`,
    1742: `1053`,
    1743: `1053`,
    1744: `1053`,
    1745: `1055`,
    1746: `1055`,
    1747: `1056`,
    1748: `1056`,
    1749: `1057`,
    175: `54`,
    1750: `1057`,
    1751: `1057`,
    1752: `1058`,
    1753: `1059`,
    1754: `1060`,
    1755: `1061`,
    1756: `1061`,
    1757: `1062`,
    1758: `1062`,
    1759: `1062`,
    176: `55`,
    1760: `1064`,
    1761: `1064`,
    1762: `1065`,
    1763: `1065`,
    1764: `1065`,
    1765: `1066`,
    1766: `1066`,
    1767: `1067`,
    1768: `1067`,
    1769: `1067`,
    177: `56`,
    1770: `1068`,
    1771: `1069`,
    1772: `1069`,
    1773: `1070`,
    1774: `1070`,
    1775: `1071`,
    1776: `1072`,
    1777: `1072`,
    1778: `1073`,
    1779: `1074`,
    178: `58`,
    1780: `1075`,
    1781: `1076`,
    1782: `1076`,
    1783: `1077`,
    1784: `1077`,
    1785: `1077`,
    1786: `1078`,
    1787: `1079`,
    1788: `1079`,
    1789: `1080`,
    179: `58`,
    1790: `1080`,
    1791: `1080`,
    1792: `1081`,
    1793: `1082`,
    1794: `1082`,
    1795: `1083`,
    1796: `1083`,
    1797: `1083`,
    1798: `1084`,
    1799: `1085`,
    18: `2`,
    180: `59`,
    1800: `1085`,
    1801: `1086`,
    1802: `1086`,
    1803: `1086`,
    1804: `1087`,
    1805: `1088`,
    1806: `1088`,
    1807: `1089`,
    1808: `1089`,
    1809: `1090`,
    181: `59`,
    1810: `1090`,
    1811: `1091`,
    1812: `1091`,
    1813: `1091`,
    1814: `1093`,
    1815: `1094`,
    1816: `1094`,
    1817: `1095`,
    1818: `1095`,
    1819: `1095`,
    182: `59`,
    1820: `1097`,
    1821: `1097`,
    1822: `1098`,
    1823: `1098`,
    1824: `1098`,
    1825: `1099`,
    1826: `1100`,
    1827: `1101`,
    1828: `1101`,
    1829: `1102`,
    183: `60`,
    1830: `1103`,
    1831: `1103`,
    1832: `1104`,
    1833: `1104`,
    1834: `1104`,
    1835: `1106`,
    1836: `1106`,
    1837: `1107`,
    1838: `1108`,
    1839: `1108`,
    184: `60`,
    1840: `1109`,
    1841: `1110`,
    1842: `1111`,
    1843: `1111`,
    1844: `1112`,
    1845: `1113`,
    1846: `1113`,
    1847: `1114`,
    1848: `1115`,
    1849: `1116`,
    185: `61`,
    1850: `1116`,
    1851: `1116`,
    1852: `1117`,
    1853: `1118`,
    1854: `1118`,
    1855: `1119`,
    1856: `1120`,
    1857: `1121`,
    1858: `1122`,
    1859: `1122`,
    186: `62`,
    1860: `1123`,
    1861: `1123`,
    1862: `1124`,
    1863: `1125`,
    1864: `1125`,
    1865: `1126`,
    1866: `1127`,
    1867: `1127`,
    1868: `1128`,
    1869: `1129`,
    187: `63`,
    1870: `1129`,
    1871: `1130`,
    1872: `1131`,
    1873: `1132`,
    1874: `1132`,
    1875: `1133`,
    1876: `1134`,
    1877: `1135`,
    1878: `1135`,
    1879: `1136`,
    188: `63`,
    1880: `1136`,
    1881: `1137`,
    1882: `1137`,
    1883: `1138`,
    1884: `1138`,
    1885: `1140`,
    1886: `1140`,
    1887: `1141`,
    1888: `1141`,
    1889: `1141`,
    189: `63`,
    1890: `1141`,
    1891: `1141`,
    1892: `1141`,
    1893: `1142`,
    1894: `1142`,
    1895: `1143`,
    1896: `1143`,
    1897: `1144`,
    1898: `1145`,
    1899: `1145`,
    19: `2`,
    190: `63`,
    1900: `1146`,
    1901: `1147`,
    1902: `1148`,
    1903: `1148`,
    1904: `1149`,
    1905: `1150`,
    1906: `1150`,
    1907: `1151`,
    1908: `1152`,
    1909: `1152`,
    191: `63`,
    1910: `1153`,
    1911: `1157`,
    1912: `1157`,
    1913: `1158`,
    1914: `1159`,
    1915: `1159`,
    1916: `1160`,
    1917: `1161`,
    1918: `1161`,
    1919: `1162`,
    192: `63`,
    1920: `1163`,
    1921: `1164`,
    1922: `1165`,
    1923: `1165`,
    1924: `1165`,
    1925: `1166`,
    1926: `1166`,
    1927: `1166`,
    1928: `1167`,
    1929: `1168`,
    193: `63`,
    1930: `1168`,
    1931: `1169`,
    1932: `1169`,
    1933: `1169`,
    1934: `1169`,
    1935: `1169`,
    1936: `1169`,
    1937: `1169`,
    1938: `1169`,
    1939: `1169`,
    194: `63`,
    1940: `1169`,
    1941: `1170`,
    1942: `1170`,
    1943: `1171`,
    1944: `1172`,
    1945: `1173`,
    1946: `1173`,
    1947: `1174`,
    1948: `1174`,
    1949: `1175`,
    195: `63`,
    1950: `1176`,
    1951: `1176`,
    1952: `1177`,
    1953: `1178`,
    1954: `1179`,
    1955: `1180`,
    1956: `1184`,
    1957: `1184`,
    1958: `1185`,
    1959: `1185`,
    196: `63`,
    1960: `1185`,
    1961: `1186`,
    1962: `1187`,
    1963: `1191`,
    1964: `1192`,
    1965: `1192`,
    1966: `1193`,
    1967: `1193`,
    1968: `1193`,
    1969: `1193`,
    197: `64`,
    1970: `1193`,
    1971: `1193`,
    1972: `1193`,
    1973: `1193`,
    1974: `1193`,
    1975: `1193`,
    1976: `1194`,
    1977: `1194`,
    1978: `1195`,
    1979: `1196`,
    198: `64`,
    1980: `1196`,
    1981: `1196`,
    1982: `1197`,
    1983: `1198`,
    1984: `1199`,
    1985: `1199`,
    1986: `1200`,
    1987: `1201`,
    1988: `1201`,
    1989: `1201`,
    199: `64`,
    1990: `1202`,
    1991: `1202`,
    1992: `1203`,
    1993: `1203`,
    1994: `1204`,
    1995: `1204`,
    1996: `1205`,
    1997: `1206`,
    1998: `1206`,
    1999: `1207`,
    2: `2`,
    20: `2`,
    200: `66`,
    2000: `1207`,
    2001: `1208`,
    2002: `1208`,
    2003: `1209`,
    2004: `1210`,
    2005: `1210`,
    2006: `1211`,
    2007: `1211`,
    2008: `1212`,
    2009: `1213`,
    201: `66`,
    2010: `1214`,
    2011: `1214`,
    2012: `1214`,
    2013: `1214`,
    2014: `1214`,
    2015: `1214`,
    2016: `1215`,
    2017: `1215`,
    2018: `1215`,
    2019: `1217`,
    202: `66`,
    2020: `1218`,
    2021: `1218`,
    2022: `1219`,
    2023: `1219`,
    2024: `1219`,
    2025: `1221`,
    2026: `1221`,
    2027: `1222`,
    2028: `1222`,
    2029: `1222`,
    203: `67`,
    2030: `1223`,
    2031: `1224`,
    2032: `1224`,
    2033: `1225`,
    2034: `1226`,
    2035: `1227`,
    2036: `1227`,
    2037: `1228`,
    2038: `1229`,
    2039: `1230`,
    204: `68`,
    2040: `1231`,
    2041: `1231`,
    2042: `1232`,
    2043: `1232`,
    2044: `1232`,
    2045: `1234`,
    2046: `1234`,
    2047: `1235`,
    2048: `1236`,
    2049: `1237`,
    205: `68`,
    2050: `1237`,
    2051: `1237`,
    2052: `1237`,
    2053: `1237`,
    2054: `1237`,
    2055: `1238`,
    2056: `1238`,
    2057: `1238`,
    2058: `1240`,
    2059: `1241`,
    206: `68`,
    2060: `1241`,
    2061: `1242`,
    2062: `1242`,
    2063: `1242`,
    2064: `1244`,
    2065: `1244`,
    2066: `1245`,
    2067: `1245`,
    2068: `1245`,
    2069: `1246`,
    207: `69`,
    2070: `1247`,
    2071: `1247`,
    2072: `1248`,
    2073: `1249`,
    2074: `1250`,
    2075: `1250`,
    2076: `1251`,
    2077: `1252`,
    2078: `1253`,
    2079: `1254`,
    208: `70`,
    2080: `1254`,
    2081: `1255`,
    2082: `1255`,
    2083: `1255`,
    2084: `1257`,
    2085: `1257`,
    2086: `1258`,
    2087: `1258`,
    2088: `1259`,
    2089: `1260`,
    209: `70`,
    2090: `1260`,
    2091: `1261`,
    2092: `1261`,
    2093: `1262`,
    2094: `1262`,
    2095: `1262`,
    2096: `1263`,
    2097: `1263`,
    2098: `1264`,
    2099: `1264`,
    21: `2`,
    210: `70`,
    2100: `1264`,
    2101: `1265`,
    2102: `1266`,
    2103: `1266`,
    2104: `1267`,
    2105: `1267`,
    2106: `1268`,
    2107: `1269`,
    2108: `1270`,
    2109: `1271`,
    211: `71`,
    2110: `1271`,
    2111: `1272`,
    2112: `1272`,
    2113: `1273`,
    2114: `1274`,
    2115: `1274`,
    2116: `1275`,
    2117: `1276`,
    2118: `1277`,
    2119: `1278`,
    212: `72`,
    2120: `1279`,
    2121: `1279`,
    2122: `1280`,
    2123: `1280`,
    2124: `1281`,
    2125: `1282`,
    2126: `1283`,
    2127: `1284`,
    2128: `1285`,
    2129: `1286`,
    213: `72`,
    2130: `1286`,
    2131: `1287`,
    2132: `1287`,
    2133: `1287`,
    2134: `1288`,
    2135: `1289`,
    2136: `1289`,
    2137: `1290`,
    2138: `1290`,
    2139: `1290`,
    214: `73`,
    2140: `1291`,
    2141: `1292`,
    2142: `1292`,
    2143: `1293`,
    2144: `1293`,
    2145: `1294`,
    2146: `1294`,
    2147: `1295`,
    2148: `1295`,
    2149: `1295`,
    215: `73`,
    2150: `1297`,
    2151: `1298`,
    2152: `1298`,
    2153: `1299`,
    2154: `1299`,
    2155: `1299`,
    2156: `1301`,
    2157: `1301`,
    2158: `1302`,
    2159: `1302`,
    216: `74`,
    2160: `1302`,
    2161: `1303`,
    2162: `1304`,
    2163: `1304`,
    2164: `1305`,
    2165: `1306`,
    2166: `1307`,
    2167: `1307`,
    2168: `1308`,
    2169: `1309`,
    217: `74`,
    2170: `1310`,
    2171: `1311`,
    2172: `1311`,
    2173: `1312`,
    2174: `1312`,
    2175: `1312`,
    2176: `1314`,
    2177: `1315`,
    2178: `1316`,
    2179: `1317`,
    218: `76`,
    2180: `1318`,
    2181: `1320`,
    2182: `1321`,
    2183: `1321`,
    2184: `1322`,
    2185: `1323`,
    2186: `1323`,
    2187: `1324`,
    2188: `1324`,
    2189: `1325`,
    219: `77`,
    2190: `1325`,
    2191: `1326`,
    2192: `1327`,
    2193: `1329`,
    2194: `1329`,
    2195: `1329`,
    2196: `1331`,
    2197: `1331`,
    2198: `1332`,
    2199: `1332`,
    22: `2`,
    220: `78`,
    2200: `1332`,
    2201: `1333`,
    2202: `1333`,
    2203: `1334`,
    2204: `1334`,
    2205: `1334`,
    2206: `1336`,
    2207: `1336`,
    2208: `1336`,
    2209: `1338`,
    221: `78`,
    2210: `1338`,
    2211: `1338`,
    2212: `1339`,
    2213: `1339`,
    2214: `1339`,
    2215: `1340`,
    2216: `1340`,
    2217: `1341`,
    2218: `1341`,
    2219: `1342`,
    222: `78`,
    2220: `1342`,
    2221: `1342`,
    2222: `1344`,
    2223: `1345`,
    2224: `1347`,
    2225: `1348`,
    2226: `1349`,
    2227: `1350`,
    2228: `1350`,
    2229: `1351`,
    223: `79`,
    2230: `1351`,
    2231: `1352`,
    2232: `1352`,
    2233: `1352`,
    2234: `1353`,
    2235: `1355`,
    2236: `1356`,
    2237: `1357`,
    2238: `1357`,
    2239: `1357`,
    224: `79`,
    2240: `1358`,
    2241: `1359`,
    2242: `1359`,
    2243: `1362`,
    2244: `1362`,
    2245: `1363`,
    2246: `1363`,
    2247: `1364`,
    2248: `1365`,
    2249: `1366`,
    225: `80`,
    2250: `1367`,
    2251: `1367`,
    2252: `1368`,
    2253: `1369`,
    2254: `1369`,
    2255: `1370`,
    2256: `1370`,
    2257: `1371`,
    2258: `1371`,
    2259: `1372`,
    226: `81`,
    2260: `1373`,
    2261: `1374`,
    2262: `1374`,
    2263: `1375`,
    2264: `1376`,
    2265: `1377`,
    2266: `1378`,
    2267: `1378`,
    2268: `1379`,
    2269: `1380`,
    227: `81`,
    2270: `1381`,
    2271: `1383`,
    2272: `1383`,
    2273: `1384`,
    2274: `1384`,
    2275: `1385`,
    2276: `1386`,
    2277: `1388`,
    2278: `1388`,
    2279: `1388`,
    228: `82`,
    2280: `1390`,
    2281: `1391`,
    2282: `1391`,
    2283: `1392`,
    2284: `1392`,
    2285: `1393`,
    2286: `1393`,
    2287: `1393`,
    2288: `1394`,
    2289: `1394`,
    229: `83`,
    2290: `1394`,
    2291: `1396`,
    2292: `1397`,
    2293: `1398`,
    2294: `1399`,
    2295: `1399`,
    2296: `1399`,
    2297: `1400`,
    2298: `1400`,
    2299: `1401`,
    23: `2`,
    230: `84`,
    2300: `1402`,
    2301: `1403`,
    2302: `1405`,
    2303: `1406`,
    2304: `1406`,
    2305: `1407`,
    2306: `1409`,
    2307: `1410`,
    2308: `1411`,
    2309: `1412`,
    231: `84`,
    2310: `1413`,
    2311: `1413`,
    2312: `1414`,
    2313: `1415`,
    2314: `1416`,
    2315: `1417`,
    2316: `1419`,
    2317: `1420`,
    2318: `1421`,
    2319: `1422`,
    232: `85`,
    2320: `1422`,
    2321: `1423`,
    2322: `1424`,
    2323: `1425`,
    2324: `1426`,
    2325: `1426`,
    2326: `1427`,
    2327: `1428`,
    2328: `1429`,
    2329: `1430`,
    233: `86`,
    2330: `1430`,
    2331: `1431`,
    2332: `1432`,
    2333: `1433`,
    2334: `1434`,
    2335: `1434`,
    2336: `1435`,
    2337: `1435`,
    2338: `1435`,
    2339: `1436`,
    234: `87`,
    2340: `1436`,
    2341: `1437`,
    2342: `1439`,
    2343: `1440`,
    2344: `1441`,
    2345: `1442`,
    2346: `1442`,
    2347: `1442`,
    2348: `1443`,
    2349: `1443`,
    235: `88`,
    2350: `1444`,
    2351: `1444`,
    2352: `1444`,
    2353: `1445`,
    2354: `1445`,
    2355: `1445`,
    2356: `1447`,
    2357: `1448`,
    2358: `1448`,
    2359: `1448`,
    236: `88`,
    2360: `1449`,
    2361: `1450`,
    2362: `1451`,
    2363: `1452`,
    2364: `1453`,
    2365: `1455`,
    2366: `1455`,
    2367: `1456`,
    2368: `1456`,
    2369: `1457`,
    237: `89`,
    2370: `1458`,
    2371: `1459`,
    2372: `1459`,
    2373: `1459`,
    2374: `1460`,
    2375: `1460`,
    2376: `1460`,
    2377: `1462`,
    2378: `1462`,
    2379: `1463`,
    238: `90`,
    2380: `1464`,
    2381: `1464`,
    2382: `1465`,
    2383: `1467`,
    2384: `1468`,
    2385: `1468`,
    2386: `1468`,
    2387: `1470`,
    2388: `1471`,
    2389: `1471`,
    239: `91`,
    2390: `1472`,
    24: `2`,
    240: `92`,
    241: `92`,
    242: `93`,
    243: `93`,
    244: `93`,
    245: `95`,
    246: `95`,
    247: `95`,
    248: `96`,
    249: `96`,
    25: `2`,
    250: `96`,
    251: `97`,
    252: `97`,
    253: `97`,
    254: `98`,
    255: `99`,
    256: `99`,
    257: `100`,
    258: `100`,
    259: `101`,
    26: `2`,
    260: `101`,
    261: `103`,
    262: `104`,
    263: `105`,
    264: `105`,
    265: `105`,
    266: `106`,
    267: `106`,
    268: `107`,
    269: `107`,
    27: `2`,
    270: `108`,
    271: `109`,
    272: `109`,
    273: `110`,
    274: `111`,
    275: `112`,
    276: `113`,
    277: `114`,
    278: `114`,
    279: `115`,
    28: `2`,
    280: `115`,
    281: `115`,
    282: `117`,
    283: `117`,
    284: `117`,
    285: `118`,
    286: `118`,
    287: `120`,
    288: `121`,
    289: `122`,
    29: `2`,
    290: `122`,
    291: `122`,
    292: `123`,
    293: `123`,
    294: `124`,
    295: `125`,
    296: `125`,
    297: `126`,
    298: `127`,
    299: `128`,
    3: `2`,
    30: `2`,
    300: `129`,
    301: `129`,
    302: `130`,
    303: `130`,
    304: `130`,
    305: `132`,
    306: `132`,
    307: `133`,
    308: `133`,
    309: `133`,
    31: `2`,
    310: `134`,
    311: `134`,
    312: `135`,
    313: `135`,
    314: `136`,
    315: `136`,
    316: `137`,
    317: `137`,
    318: `137`,
    319: `138`,
    32: `2`,
    320: `139`,
    321: `144`,
    322: `145`,
    323: `145`,
    324: `146`,
    325: `147`,
    326: `148`,
    327: `149`,
    328: `149`,
    329: `150`,
    33: `2`,
    330: `150`,
    331: `151`,
    332: `152`,
    333: `152`,
    334: `153`,
    335: `154`,
    336: `154`,
    337: `155`,
    338: `156`,
    339: `156`,
    34: `2`,
    340: `157`,
    341: `158`,
    342: `159`,
    343: `159`,
    344: `160`,
    345: `161`,
    346: `162`,
    347: `162`,
    348: `163`,
    349: `163`,
    35: `4`,
    350: `164`,
    351: `164`,
    352: `165`,
    353: `165`,
    354: `167`,
    355: `167`,
    356: `168`,
    357: `168`,
    358: `168`,
    359: `168`,
    36: `4`,
    360: `168`,
    361: `168`,
    362: `169`,
    363: `169`,
    364: `170`,
    365: `170`,
    366: `171`,
    367: `172`,
    368: `172`,
    369: `173`,
    37: `5`,
    370: `174`,
    371: `175`,
    372: `175`,
    373: `176`,
    374: `177`,
    375: `177`,
    376: `178`,
    377: `182`,
    378: `182`,
    379: `183`,
    38: `5`,
    380: `184`,
    381: `184`,
    382: `185`,
    383: `186`,
    384: `186`,
    385: `187`,
    386: `188`,
    387: `189`,
    388: `190`,
    389: `190`,
    39: `5`,
    390: `190`,
    391: `191`,
    392: `191`,
    393: `191`,
    394: `192`,
    395: `193`,
    396: `193`,
    397: `194`,
    398: `194`,
    399: `194`,
    4: `2`,
    40: `6`,
    400: `194`,
    401: `194`,
    402: `194`,
    403: `194`,
    404: `194`,
    405: `194`,
    406: `194`,
    407: `195`,
    408: `195`,
    409: `196`,
    41: `7`,
    410: `197`,
    411: `198`,
    412: `198`,
    413: `199`,
    414: `199`,
    415: `200`,
    416: `201`,
    417: `201`,
    418: `202`,
    419: `203`,
    42: `8`,
    420: `204`,
    421: `205`,
    422: `209`,
    423: `209`,
    424: `210`,
    425: `210`,
    426: `210`,
    427: `211`,
    428: `212`,
    429: `216`,
    43: `9`,
    430: `217`,
    431: `217`,
    432: `218`,
    433: `218`,
    434: `218`,
    435: `218`,
    436: `218`,
    437: `218`,
    438: `218`,
    439: `218`,
    44: `10`,
    440: `218`,
    441: `218`,
    442: `219`,
    443: `219`,
    444: `220`,
    445: `221`,
    446: `221`,
    447: `221`,
    448: `222`,
    449: `223`,
    45: `11`,
    450: `224`,
    451: `224`,
    452: `225`,
    453: `226`,
    454: `226`,
    455: `226`,
    456: `227`,
    457: `227`,
    458: `228`,
    459: `228`,
    46: `11`,
    460: `229`,
    461: `229`,
    462: `230`,
    463: `230`,
    464: `230`,
    465: `231`,
    466: `232`,
    467: `232`,
    468: `233`,
    469: `233`,
    47: `12`,
    470: `233`,
    471: `234`,
    472: `235`,
    473: `235`,
    474: `236`,
    475: `236`,
    476: `236`,
    477: `237`,
    478: `238`,
    479: `238`,
    48: `13`,
    480: `239`,
    481: `239`,
    482: `239`,
    483: `240`,
    484: `241`,
    485: `241`,
    486: `242`,
    487: `242`,
    488: `242`,
    489: `243`,
    49: `14`,
    490: `244`,
    491: `244`,
    492: `245`,
    493: `245`,
    494: `245`,
    495: `246`,
    496: `247`,
    497: `247`,
    498: `248`,
    499: `248`,
    5: `2`,
    50: `14`,
    500: `249`,
    501: `249`,
    502: `252`,
    503: `252`,
    504: `253`,
    505: `254`,
    506: `254`,
    507: `255`,
    508: `256`,
    509: `257`,
    51: `15`,
    510: `257`,
    511: `258`,
    512: `259`,
    513: `260`,
    514: `260`,
    515: `261`,
    516: `262`,
    517: `262`,
    518: `263`,
    519: `264`,
    52: `16`,
    520: `264`,
    521: `265`,
    522: `265`,
    523: `267`,
    524: `267`,
    525: `268`,
    526: `268`,
    527: `269`,
    528: `270`,
    529: `271`,
    53: `18`,
    530: `271`,
    531: `271`,
    532: `272`,
    533: `273`,
    534: `274`,
    535: `274`,
    536: `275`,
    537: `276`,
    538: `276`,
    539: `277`,
    54: `18`,
    540: `278`,
    541: `279`,
    542: `280`,
    543: `280`,
    544: `281`,
    545: `282`,
    546: `283`,
    547: `285`,
    548: `285`,
    549: `285`,
    55: `18`,
    550: `287`,
    551: `287`,
    552: `288`,
    553: `288`,
    554: `288`,
    555: `290`,
    556: `290`,
    557: `290`,
    558: `290`,
    559: `290`,
    56: `18`,
    560: `290`,
    561: `291`,
    562: `291`,
    563: `292`,
    564: `293`,
    565: `295`,
    566: `296`,
    567: `298`,
    568: `298`,
    569: `299`,
    57: `18`,
    570: `300`,
    571: `301`,
    572: `301`,
    573: `302`,
    574: `302`,
    575: `303`,
    576: `304`,
    577: `305`,
    578: `305`,
    579: `306`,
    58: `18`,
    580: `306`,
    581: `307`,
    582: `308`,
    583: `309`,
    584: `309`,
    585: `311`,
    586: `312`,
    587: `312`,
    588: `313`,
    589: `314`,
    59: `18`,
    590: `314`,
    591: `315`,
    592: `316`,
    593: `316`,
    594: `316`,
    595: `317`,
    596: `318`,
    597: `319`,
    598: `320`,
    599: `321`,
    6: `2`,
    60: `18`,
    600: `326`,
    601: `326`,
    602: `326`,
    603: `326`,
    604: `327`,
    605: `328`,
    606: `328`,
    607: `329`,
    608: `330`,
    609: `330`,
    61: `18`,
    610: `331`,
    611: `332`,
    612: `332`,
    613: `333`,
    614: `334`,
    615: `335`,
    616: `335`,
    617: `336`,
    618: `337`,
    619: `338`,
    62: `18`,
    620: `339`,
    621: `340`,
    622: `341`,
    623: `341`,
    624: `341`,
    625: `342`,
    626: `343`,
    627: `343`,
    628: `344`,
    629: `345`,
    63: `18`,
    630: `346`,
    631: `347`,
    632: `347`,
    633: `348`,
    634: `348`,
    635: `349`,
    636: `350`,
    637: `350`,
    638: `351`,
    639: `352`,
    64: `18`,
    640: `352`,
    641: `353`,
    642: `354`,
    643: `354`,
    644: `355`,
    645: `356`,
    646: `357`,
    647: `357`,
    648: `358`,
    649: `359`,
    65: `18`,
    650: `360`,
    651: `360`,
    652: `361`,
    653: `361`,
    654: `362`,
    655: `362`,
    656: `363`,
    657: `363`,
    658: `365`,
    659: `365`,
    66: `18`,
    660: `366`,
    661: `366`,
    662: `366`,
    663: `366`,
    664: `366`,
    665: `366`,
    666: `367`,
    667: `367`,
    668: `368`,
    669: `368`,
    67: `18`,
    670: `369`,
    671: `370`,
    672: `370`,
    673: `371`,
    674: `372`,
    675: `373`,
    676: `373`,
    677: `374`,
    678: `375`,
    679: `375`,
    68: `18`,
    680: `376`,
    681: `377`,
    682: `378`,
    683: `378`,
    684: `379`,
    685: `380`,
    686: `381`,
    687: `381`,
    688: `382`,
    689: `383`,
    69: `18`,
    690: `384`,
    691: `384`,
    692: `385`,
    693: `389`,
    694: `389`,
    695: `390`,
    696: `391`,
    697: `391`,
    698: `392`,
    699: `393`,
    7: `2`,
    70: `18`,
    700: `393`,
    701: `394`,
    702: `395`,
    703: `396`,
    704: `397`,
    705: `397`,
    706: `397`,
    707: `398`,
    708: `398`,
    709: `398`,
    71: `18`,
    710: `399`,
    711: `400`,
    712: `400`,
    713: `401`,
    714: `401`,
    715: `401`,
    716: `401`,
    717: `401`,
    718: `401`,
    719: `401`,
    72: `18`,
    720: `401`,
    721: `401`,
    722: `401`,
    723: `402`,
    724: `402`,
    725: `403`,
    726: `404`,
    727: `405`,
    728: `405`,
    729: `406`,
    73: `18`,
    730: `406`,
    731: `407`,
    732: `408`,
    733: `408`,
    734: `409`,
    735: `410`,
    736: `411`,
    737: `412`,
    738: `416`,
    739: `416`,
    74: `18`,
    740: `417`,
    741: `417`,
    742: `417`,
    743: `418`,
    744: `419`,
    745: `423`,
    746: `424`,
    747: `424`,
    748: `425`,
    749: `425`,
    75: `18`,
    750: `425`,
    751: `425`,
    752: `425`,
    753: `425`,
    754: `425`,
    755: `425`,
    756: `425`,
    757: `425`,
    758: `426`,
    759: `426`,
    76: `18`,
    760: `427`,
    761: `428`,
    762: `428`,
    763: `428`,
    764: `429`,
    765: `430`,
    766: `431`,
    767: `431`,
    768: `432`,
    769: `433`,
    77: `18`,
    770: `433`,
    771: `433`,
    772: `434`,
    773: `434`,
    774: `435`,
    775: `435`,
    776: `436`,
    777: `436`,
    778: `436`,
    779: `437`,
    78: `18`,
    780: `437`,
    781: `438`,
    782: `438`,
    783: `439`,
    784: `440`,
    785: `441`,
    786: `442`,
    787: `443`,
    788: `444`,
    789: `444`,
    79: `18`,
    790: `445`,
    791: `445`,
    792: `445`,
    793: `446`,
    794: `447`,
    795: `447`,
    796: `448`,
    797: `448`,
    798: `448`,
    799: `449`,
    8: `2`,
    80: `18`,
    800: `450`,
    801: `450`,
    802: `451`,
    803: `451`,
    804: `451`,
    805: `452`,
    806: `453`,
    807: `453`,
    808: `454`,
    809: `454`,
    81: `18`,
    810: `454`,
    811: `455`,
    812: `456`,
    813: `456`,
    814: `457`,
    815: `457`,
    816: `457`,
    817: `458`,
    818: `459`,
    819: `459`,
    82: `18`,
    820: `460`,
    821: `460`,
    822: `461`,
    823: `461`,
    824: `462`,
    825: `462`,
    826: `462`,
    827: `464`,
    828: `464`,
    829: `465`,
    83: `18`,
    830: `465`,
    831: `465`,
    832: `466`,
    833: `466`,
    834: `467`,
    835: `467`,
    836: `468`,
    837: `468`,
    838: `468`,
    839: `469`,
    84: `18`,
    840: `469`,
    841: `470`,
    842: `470`,
    843: `471`,
    844: `471`,
    845: `472`,
    846: `473`,
    847: `473`,
    848: `474`,
    849: `474`,
    85: `18`,
    850: `475`,
    851: `475`,
    852: `476`,
    853: `477`,
    854: `477`,
    855: `479`,
    856: `480`,
    857: `481`,
    858: `482`,
    859: `483`,
    86: `18`,
    860: `483`,
    861: `484`,
    862: `485`,
    863: `486`,
    864: `486`,
    865: `486`,
    866: `487`,
    867: `488`,
    868: `488`,
    869: `489`,
    87: `18`,
    870: `490`,
    871: `491`,
    872: `492`,
    873: `493`,
    874: `499`,
    875: `500`,
    876: `500`,
    877: `501`,
    878: `502`,
    879: `502`,
    88: `18`,
    880: `503`,
    881: `504`,
    882: `504`,
    883: `504`,
    884: `505`,
    885: `506`,
    886: `506`,
    887: `507`,
    888: `508`,
    889: `509`,
    89: `18`,
    890: `509`,
    891: `509`,
    892: `509`,
    893: `509`,
    894: `509`,
    895: `510`,
    896: `510`,
    897: `510`,
    898: `512`,
    899: `512`,
    9: `2`,
    90: `18`,
    900: `513`,
    901: `513`,
    902: `513`,
    903: `514`,
    904: `515`,
    905: `515`,
    906: `516`,
    907: `516`,
    908: `517`,
    909: `518`,
    91: `18`,
    910: `518`,
    911: `520`,
    912: `521`,
    913: `522`,
    914: `523`,
    915: `524`,
    916: `524`,
    917: `525`,
    918: `526`,
    919: `527`,
    92: `18`,
    920: `527`,
    921: `527`,
    922: `528`,
    923: `529`,
    924: `530`,
    925: `531`,
    926: `532`,
    927: `538`,
    928: `539`,
    929: `539`,
    93: `18`,
    930: `540`,
    931: `541`,
    932: `541`,
    933: `542`,
    934: `543`,
    935: `543`,
    936: `543`,
    937: `544`,
    938: `545`,
    939: `545`,
    94: `18`,
    940: `546`,
    941: `547`,
    942: `548`,
    943: `549`,
    944: `550`,
    945: `555`,
    946: `555`,
    947: `556`,
    948: `557`,
    949: `558`,
    95: `18`,
    950: `558`,
    951: `558`,
    952: `558`,
    953: `558`,
    954: `558`,
    955: `559`,
    956: `559`,
    957: `559`,
    958: `561`,
    959: `561`,
    96: `18`,
    960: `562`,
    961: `562`,
    962: `563`,
    963: `564`,
    964: `567`,
    965: `567`,
    966: `567`,
    967: `568`,
    968: `568`,
    969: `569`,
    97: `18`,
    970: `569`,
    971: `569`,
    972: `570`,
    973: `570`,
    974: `571`,
    975: `571`,
    976: `571`,
    977: `572`,
    978: `573`,
    979: `573`,
    98: `18`,
    980: `574`,
    981: `574`,
    982: `574`,
    983: `575`,
    984: `576`,
    985: `576`,
    986: `577`,
    987: `577`,
    988: `577`,
    989: `578`,
    99: `18`,
    990: `579`,
    991: `579`,
    992: `580`,
    993: `580`,
    994: `580`,
    995: `581`,
    996: `582`,
    997: `582`,
    998: `583`,
    999: `583`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 1,
  stateSize: 104,
  unsupported: [],
  version: 13,
  warnings: [`Step 1 calls a remote object at /app/index.rsh:90:18:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:138:29:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:175:30:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:228:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:248:26:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:74:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:261:11:after expr stmt semicolon',
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
  "Alice": Alice,
  "C_grant": C_grant,
  "Deployer": Deployer,
  "U1_announce": U1_announce,
  "U2_claim": U2_claim,
  "U2_subscribe": U2_subscribe
  };
export const _APIs = {
  C: {
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
