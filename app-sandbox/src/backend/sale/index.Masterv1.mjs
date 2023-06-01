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
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0, ctc1, ctc2, ctc2, ctc2]);
  const ctc4 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc0, ctc1]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc0, ctc1, ctc1]);
  const ctc7 = stdlib.T_Data({
    DeleteProvider: ctc5,
    DeleteSubscription: ctc6
    });
  return {
    announce: [ctc3],
    close: [ctc4],
    delete: [ctc7],
    grant: [ctc5],
    new: [ctc0],
    ready: [ctc4],
    setup: [ctc0],
    subscribe: [ctc6]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    closed: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc2, ctc3]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
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
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc2, ctc3, ctc3, ctc3]);
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc2]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc2, ctc2]);
  const ctc10 = stdlib.T_Data({
    DeleteProvider: ctc8,
    DeleteSubscription: ctc9
    });
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Tuple([ctc8]);
  const ctc13 = stdlib.T_Tuple([ctc9]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Data({
    Child_announce0_5394: ctc5,
    Child_close0_5394: ctc7,
    Child_delete0_5394: ctc11,
    Child_grant0_5394: ctc12,
    Child_ready0_5394: ctc7,
    Child_subscribe0_5394: ctc13,
    Master_close0_5394: ctc14,
    Master_new0_5394: ctc14,
    Master_setup0_5394: ctc15,
    Master_touch0_5394: ctc14
    });
  const ctc17 = stdlib.T_Bool;
  const ctc18 = stdlib.T_Tuple([ctc3, ctc0]);
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:320:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:320:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v6504, time: v6503, didSend: v5369, from: v6502 } = txn1;
      
      ;
      
      const v6506 = {
        closed: false
        };
      const v6507 = v6506;
      const v6508 = v6503;
      const v6511 = stdlib.checkedBigNumberify('./index.rsh:319:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v6514 = v6507.closed;
        const v6515 = v6514 ? false : true;
        
        return v6515;})()) {
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
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v6504, time: v6503, didSend: v5369, from: v6502 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:321:19:application',
    fs: ['at ./index.rsh:321:19:application call to [unknown function] (defined at: ./index.rsh:321:19:function exp)', 'at ./index.rsh:321:19:application call to "liftedInteract" (defined at: ./index.rsh:321:19:application)'],
    msg: 'ready',
    who: 'Alice'
    });
  
  const v6506 = {
    closed: false
    };
  let v6507 = v6506;
  let v6508 = v6503;
  let v6511 = stdlib.checkedBigNumberify('./index.rsh:319:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v6514 = v6507.closed;
    const v6515 = v6514 ? false : true;
    
    return v6515;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc16],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v6694], secs: v6696, time: v6695, didSend: v6252, from: v6693 } = txn3;
    switch (v6694[0]) {
      case 'Child_announce0_5394': {
        const v6697 = v6694[1];
        undefined /* setApiDetails */;
        ;
        const v6717 = v6697[stdlib.checkedBigNumberify('./index.rsh:385:10:spread', stdlib.UInt_max, '0')];
        const v6719 = true;
        await txn3.getOutput('Child_announce', 'v6719', ctc17, v6719);
        null;
        const cv6507 = v6507;
        const cv6508 = v6695;
        const cv6511 = v6511;
        
        v6507 = cv6507;
        v6508 = cv6508;
        v6511 = cv6511;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Child_close0_5394': {
        const v6902 = v6694[1];
        undefined /* setApiDetails */;
        ;
        const v6945 = v6902[stdlib.checkedBigNumberify('./index.rsh:421:10:spread', stdlib.UInt_max, '0')];
        const v6947 = true;
        await txn3.getOutput('Child_close', 'v6947', ctc17, v6947);
        null;
        const cv6507 = v6507;
        const cv6508 = v6695;
        const cv6511 = v6511;
        
        v6507 = cv6507;
        v6508 = cv6508;
        v6511 = cv6511;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Child_delete0_5394': {
        const v7107 = v6694[1];
        undefined /* setApiDetails */;
        ;
        const v7165 = v7107[stdlib.checkedBigNumberify('./index.rsh:403:10:spread', stdlib.UInt_max, '0')];
        const v7167 = true;
        await txn3.getOutput('Child_delete', 'v7167', ctc17, v7167);
        null;
        const cv6507 = v6507;
        const cv6508 = v6695;
        const cv6511 = v6511;
        
        v6507 = cv6507;
        v6508 = cv6508;
        v6511 = cv6511;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Child_grant0_5394': {
        const v7312 = v6694[1];
        undefined /* setApiDetails */;
        ;
        const v7399 = v7312[stdlib.checkedBigNumberify('./index.rsh:412:10:spread', stdlib.UInt_max, '0')];
        const v7401 = true;
        await txn3.getOutput('Child_grant', 'v7401', ctc17, v7401);
        null;
        const cv6507 = v6507;
        const cv6508 = v6695;
        const cv6511 = v6511;
        
        v6507 = cv6507;
        v6508 = cv6508;
        v6511 = cv6511;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Child_ready0_5394': {
        const v7517 = v6694[1];
        undefined /* setApiDetails */;
        ;
        const v7621 = v7517[stdlib.checkedBigNumberify('./index.rsh:376:10:spread', stdlib.UInt_max, '0')];
        const v7623 = true;
        await txn3.getOutput('Child_ready', 'v7623', ctc17, v7623);
        null;
        const cv6507 = v6507;
        const cv6508 = v6695;
        const cv6511 = v6511;
        
        v6507 = cv6507;
        v6508 = cv6508;
        v6511 = cv6511;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Child_subscribe0_5394': {
        const v7722 = v6694[1];
        undefined /* setApiDetails */;
        ;
        const v7841 = v7722[stdlib.checkedBigNumberify('./index.rsh:394:10:spread', stdlib.UInt_max, '0')];
        const v7843 = true;
        await txn3.getOutput('Child_subscribe', 'v7843', ctc17, v7843);
        null;
        const cv6507 = v6507;
        const cv6508 = v6695;
        const cv6511 = v6511;
        
        v6507 = cv6507;
        v6508 = cv6508;
        v6511 = cv6511;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Master_close0_5394': {
        const v7927 = v6694[1];
        undefined /* setApiDetails */;
        ;
        const v8065 = true;
        await txn3.getOutput('Master_close', 'v8065', ctc17, v8065);
        const v8072 = {
          closed: true
          };
        const cv6507 = v8072;
        const cv6508 = v6695;
        const cv6511 = v6511;
        
        v6507 = cv6507;
        v6508 = cv6508;
        v6511 = cv6511;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Master_new0_5394': {
        const v8132 = v6694[1];
        undefined /* setApiDetails */;
        ;
        const v8281 = stdlib.addressEq(v6693, v6502);
        stdlib.assert(v8281, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:331:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:333:13:application call to [unknown function] (defined at: ./index.rsh:333:13:function exp)'],
          msg: 'Must be authorized',
          who: 'Alice'
          });
        const v8283 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v8284 = undefined /* ContractNew */;
        const v8285 = await txn3.getOutput('internal', 'v8284', ctc1, v8284);
        null;
        await txn3.getOutput('Master_new', 'v8285', ctc1, v8285);
        const cv6507 = v6507;
        const cv6508 = v6695;
        const cv6511 = v6511;
        
        v6507 = cv6507;
        v6508 = cv6508;
        v6511 = cv6511;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Master_setup0_5394': {
        const v8337 = v6694[1];
        undefined /* setApiDetails */;
        const v8351 = stdlib.addressEq(v6693, v6502);
        stdlib.assert(v8351, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:342:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:341:33:application call to [unknown function] (defined at: ./index.rsh:341:33:function exp)', 'at ./index.rsh:327:29:application call to [unknown function] (defined at: ./index.rsh:341:33:function exp)', 'at ./index.rsh:327:29:application call to [unknown function] (defined at: ./index.rsh:327:29:function exp)'],
          msg: 'Must be authorized',
          who: 'Alice'
          });
        const v8355 = stdlib.add(v6511, stdlib.checkedBigNumberify('./index.rsh:6:23:decimal', stdlib.UInt_max, '100000'));
        ;
        const v8498 = v8337[stdlib.checkedBigNumberify('./index.rsh:341:10:spread', stdlib.UInt_max, '0')];
        const v8505 = stdlib.sub(v8355, stdlib.checkedBigNumberify('./index.rsh:6:23:decimal', stdlib.UInt_max, '100000'));
        const v8506 = [];
        const v8507 = stdlib.bytesFromHex("0xc194ad99");
        const v8508 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v8509 = undefined /* Remote */;
        const v8510 = await txn3.getOutput('internal', 'v8509', ctc18, v8509);
        const v8512 = v8510[stdlib.checkedBigNumberify('./index.rsh:349:63:application', stdlib.UInt_max, '0')];
        const v8517 = stdlib.add(v8505, v8512);
        const v8518 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v8512);
        stdlib.assert(v8518, {
          at: './index.rsh:349:63:application',
          fs: ['at ./index.rsh:345:13:application call to [unknown function] (defined at: ./index.rsh:345:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        null;
        const v8519 = true;
        await txn3.getOutput('Master_setup', 'v8519', ctc17, v8519);
        const cv6507 = v6507;
        const cv6508 = v6695;
        const cv6511 = v8517;
        
        v6507 = cv6507;
        v6508 = cv6508;
        v6511 = cv6511;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Master_touch0_5394': {
        const v8542 = v6694[1];
        undefined /* setApiDetails */;
        ;
        const v8734 = (stdlib.le(await ctc.getBalance(), v6511) ? stdlib.checkedBigNumberify('./index.rsh:362:37:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v6511));
        const v8735 = stdlib.safeAdd(v8734, v6511);
        const v8739 = stdlib.sub(v8735, v8734);
        ;
        const v8740 = true;
        await txn3.getOutput('Master_touch', 'v8740', ctc17, v8740);
        const cv6507 = v6507;
        const cv6508 = v6695;
        const cv6511 = v8739;
        
        v6507 = cv6507;
        v6508 = cv6508;
        v6511 = cv6511;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _Child_announce3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Child_announce3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Child_announce3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    closed: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc3, ctc3, ctc3]);
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc4, ctc4, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc0]);
  const ctc11 = stdlib.T_Data({
    DeleteProvider: ctc9,
    DeleteSubscription: ctc10
    });
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc9]);
  const ctc14 = stdlib.T_Tuple([ctc10]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc4]);
  const ctc17 = stdlib.T_Data({
    Child_announce0_5394: ctc6,
    Child_close0_5394: ctc8,
    Child_delete0_5394: ctc12,
    Child_grant0_5394: ctc13,
    Child_ready0_5394: ctc8,
    Child_subscribe0_5394: ctc14,
    Master_close0_5394: ctc15,
    Master_new0_5394: ctc15,
    Master_setup0_5394: ctc16,
    Master_touch0_5394: ctc15
    });
  const ctc18 = stdlib.T_Null;
  
  
  const [v6502, v6507, v6511] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v6574 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:385:35:application call to [unknown function] (defined at: ./index.rsh:385:35:function exp)', 'at ./index.rsh:327:29:application call to "runChild_announce0_5394" (defined at: ./index.rsh:385:10:function exp)', 'at ./index.rsh:327:29:application call to [unknown function] (defined at: ./index.rsh:327:29:function exp)'],
    msg: 'in',
    who: 'Child_announce'
    });
  const v6594 = ['Child_announce0_5394', v6574];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6502, v6507, v6511, v6594],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:385:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6694], secs: v6696, time: v6695, didSend: v6252, from: v6693 } = txn1;
      
      switch (v6694[0]) {
        case 'Child_announce0_5394': {
          const v6697 = v6694[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Child_announce"
            });
          ;
          const v6717 = v6697[stdlib.checkedBigNumberify('./index.rsh:385:10:spread', stdlib.UInt_max, '0')];
          const v6719 = true;
          const v6720 = await txn1.getOutput('Child_announce', 'v6719', ctc1, v6719);
          
          null;
          const v10301 = v6507;
          const v10303 = v6511;
          const v10304 = v6507.closed;
          if (v10304) {
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
        case 'Child_close0_5394': {
          const v6902 = v6694[1];
          
          break;
          }
        case 'Child_delete0_5394': {
          const v7107 = v6694[1];
          
          break;
          }
        case 'Child_grant0_5394': {
          const v7312 = v6694[1];
          
          break;
          }
        case 'Child_ready0_5394': {
          const v7517 = v6694[1];
          
          break;
          }
        case 'Child_subscribe0_5394': {
          const v7722 = v6694[1];
          
          break;
          }
        case 'Master_close0_5394': {
          const v7927 = v6694[1];
          
          break;
          }
        case 'Master_new0_5394': {
          const v8132 = v6694[1];
          
          break;
          }
        case 'Master_setup0_5394': {
          const v8337 = v6694[1];
          
          break;
          }
        case 'Master_touch0_5394': {
          const v8542 = v6694[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2, ctc3, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v6694], secs: v6696, time: v6695, didSend: v6252, from: v6693 } = txn1;
  switch (v6694[0]) {
    case 'Child_announce0_5394': {
      const v6697 = v6694[1];
      undefined /* setApiDetails */;
      ;
      const v6717 = v6697[stdlib.checkedBigNumberify('./index.rsh:385:10:spread', stdlib.UInt_max, '0')];
      const v6719 = true;
      const v6720 = await txn1.getOutput('Child_announce', 'v6719', ctc1, v6719);
      if (v6252) {
        stdlib.protect(ctc18, await interact.out(v6697, v6720), {
          at: './index.rsh:385:11:application',
          fs: ['at ./index.rsh:385:11:application call to [unknown function] (defined at: ./index.rsh:385:11:function exp)', 'at ./index.rsh:388:12:application call to "k" (defined at: ./index.rsh:387:13:function exp)', 'at ./index.rsh:387:13:application call to [unknown function] (defined at: ./index.rsh:387:13:function exp)'],
          msg: 'out',
          who: 'Child_announce'
          });
        }
      else {
        }
      
      null;
      const v10301 = v6507;
      const v10303 = v6511;
      const v10304 = v6507.closed;
      if (v10304) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Child_close0_5394': {
      const v6902 = v6694[1];
      return;
      break;
      }
    case 'Child_delete0_5394': {
      const v7107 = v6694[1];
      return;
      break;
      }
    case 'Child_grant0_5394': {
      const v7312 = v6694[1];
      return;
      break;
      }
    case 'Child_ready0_5394': {
      const v7517 = v6694[1];
      return;
      break;
      }
    case 'Child_subscribe0_5394': {
      const v7722 = v6694[1];
      return;
      break;
      }
    case 'Master_close0_5394': {
      const v7927 = v6694[1];
      return;
      break;
      }
    case 'Master_new0_5394': {
      const v8132 = v6694[1];
      return;
      break;
      }
    case 'Master_setup0_5394': {
      const v8337 = v6694[1];
      return;
      break;
      }
    case 'Master_touch0_5394': {
      const v8542 = v6694[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Child_close3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Child_close3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Child_close3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    closed: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc3, ctc3, ctc3]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc4, ctc4, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc0]);
  const ctc11 = stdlib.T_Data({
    DeleteProvider: ctc9,
    DeleteSubscription: ctc10
    });
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc9]);
  const ctc14 = stdlib.T_Tuple([ctc10]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc4]);
  const ctc17 = stdlib.T_Data({
    Child_announce0_5394: ctc8,
    Child_close0_5394: ctc6,
    Child_delete0_5394: ctc12,
    Child_grant0_5394: ctc13,
    Child_ready0_5394: ctc6,
    Child_subscribe0_5394: ctc14,
    Master_close0_5394: ctc15,
    Master_new0_5394: ctc15,
    Master_setup0_5394: ctc16,
    Master_touch0_5394: ctc15
    });
  const ctc18 = stdlib.T_Null;
  
  
  const [v6502, v6507, v6511] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v6666 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:421:32:application call to [unknown function] (defined at: ./index.rsh:421:32:function exp)', 'at ./index.rsh:327:29:application call to "runChild_close0_5394" (defined at: ./index.rsh:421:10:function exp)', 'at ./index.rsh:327:29:application call to [unknown function] (defined at: ./index.rsh:327:29:function exp)'],
    msg: 'in',
    who: 'Child_close'
    });
  const v6678 = ['Child_close0_5394', v6666];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6502, v6507, v6511, v6678],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:421:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6694], secs: v6696, time: v6695, didSend: v6252, from: v6693 } = txn1;
      
      switch (v6694[0]) {
        case 'Child_announce0_5394': {
          const v6697 = v6694[1];
          
          break;
          }
        case 'Child_close0_5394': {
          const v6902 = v6694[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Child_close"
            });
          ;
          const v6945 = v6902[stdlib.checkedBigNumberify('./index.rsh:421:10:spread', stdlib.UInt_max, '0')];
          const v6947 = true;
          const v6948 = await txn1.getOutput('Child_close', 'v6947', ctc1, v6947);
          
          null;
          const v10356 = v6507;
          const v10358 = v6511;
          const v10359 = v6507.closed;
          if (v10359) {
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
        case 'Child_delete0_5394': {
          const v7107 = v6694[1];
          
          break;
          }
        case 'Child_grant0_5394': {
          const v7312 = v6694[1];
          
          break;
          }
        case 'Child_ready0_5394': {
          const v7517 = v6694[1];
          
          break;
          }
        case 'Child_subscribe0_5394': {
          const v7722 = v6694[1];
          
          break;
          }
        case 'Master_close0_5394': {
          const v7927 = v6694[1];
          
          break;
          }
        case 'Master_new0_5394': {
          const v8132 = v6694[1];
          
          break;
          }
        case 'Master_setup0_5394': {
          const v8337 = v6694[1];
          
          break;
          }
        case 'Master_touch0_5394': {
          const v8542 = v6694[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2, ctc3, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v6694], secs: v6696, time: v6695, didSend: v6252, from: v6693 } = txn1;
  switch (v6694[0]) {
    case 'Child_announce0_5394': {
      const v6697 = v6694[1];
      return;
      break;
      }
    case 'Child_close0_5394': {
      const v6902 = v6694[1];
      undefined /* setApiDetails */;
      ;
      const v6945 = v6902[stdlib.checkedBigNumberify('./index.rsh:421:10:spread', stdlib.UInt_max, '0')];
      const v6947 = true;
      const v6948 = await txn1.getOutput('Child_close', 'v6947', ctc1, v6947);
      if (v6252) {
        stdlib.protect(ctc18, await interact.out(v6902, v6948), {
          at: './index.rsh:421:11:application',
          fs: ['at ./index.rsh:421:11:application call to [unknown function] (defined at: ./index.rsh:421:11:function exp)', 'at ./index.rsh:424:12:application call to "k" (defined at: ./index.rsh:423:13:function exp)', 'at ./index.rsh:423:13:application call to [unknown function] (defined at: ./index.rsh:423:13:function exp)'],
          msg: 'out',
          who: 'Child_close'
          });
        }
      else {
        }
      
      null;
      const v10356 = v6507;
      const v10358 = v6511;
      const v10359 = v6507.closed;
      if (v10359) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Child_delete0_5394': {
      const v7107 = v6694[1];
      return;
      break;
      }
    case 'Child_grant0_5394': {
      const v7312 = v6694[1];
      return;
      break;
      }
    case 'Child_ready0_5394': {
      const v7517 = v6694[1];
      return;
      break;
      }
    case 'Child_subscribe0_5394': {
      const v7722 = v6694[1];
      return;
      break;
      }
    case 'Master_close0_5394': {
      const v7927 = v6694[1];
      return;
      break;
      }
    case 'Master_new0_5394': {
      const v8132 = v6694[1];
      return;
      break;
      }
    case 'Master_setup0_5394': {
      const v8337 = v6694[1];
      return;
      break;
      }
    case 'Master_touch0_5394': {
      const v8542 = v6694[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Child_delete3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Child_delete3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Child_delete3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    closed: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Tuple([ctc4, ctc4, ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc0]);
  const ctc7 = stdlib.T_Data({
    DeleteProvider: ctc5,
    DeleteSubscription: ctc6
    });
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc3, ctc3, ctc3]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc5]);
  const ctc14 = stdlib.T_Tuple([ctc6]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc4]);
  const ctc17 = stdlib.T_Data({
    Child_announce0_5394: ctc10,
    Child_close0_5394: ctc12,
    Child_delete0_5394: ctc8,
    Child_grant0_5394: ctc13,
    Child_ready0_5394: ctc12,
    Child_subscribe0_5394: ctc14,
    Master_close0_5394: ctc15,
    Master_new0_5394: ctc15,
    Master_setup0_5394: ctc16,
    Master_touch0_5394: ctc15
    });
  const ctc18 = stdlib.T_Null;
  
  
  const [v6502, v6507, v6511] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v6618 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:403:33:application call to [unknown function] (defined at: ./index.rsh:403:33:function exp)', 'at ./index.rsh:327:29:application call to "runChild_delete0_5394" (defined at: ./index.rsh:403:10:function exp)', 'at ./index.rsh:327:29:application call to [unknown function] (defined at: ./index.rsh:327:29:function exp)'],
    msg: 'in',
    who: 'Child_delete'
    });
  const v6644 = ['Child_delete0_5394', v6618];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6502, v6507, v6511, v6644],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:403:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6694], secs: v6696, time: v6695, didSend: v6252, from: v6693 } = txn1;
      
      switch (v6694[0]) {
        case 'Child_announce0_5394': {
          const v6697 = v6694[1];
          
          break;
          }
        case 'Child_close0_5394': {
          const v6902 = v6694[1];
          
          break;
          }
        case 'Child_delete0_5394': {
          const v7107 = v6694[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Child_delete"
            });
          ;
          const v7165 = v7107[stdlib.checkedBigNumberify('./index.rsh:403:10:spread', stdlib.UInt_max, '0')];
          const v7167 = true;
          const v7168 = await txn1.getOutput('Child_delete', 'v7167', ctc1, v7167);
          
          null;
          const v10411 = v6507;
          const v10413 = v6511;
          const v10414 = v6507.closed;
          if (v10414) {
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
        case 'Child_grant0_5394': {
          const v7312 = v6694[1];
          
          break;
          }
        case 'Child_ready0_5394': {
          const v7517 = v6694[1];
          
          break;
          }
        case 'Child_subscribe0_5394': {
          const v7722 = v6694[1];
          
          break;
          }
        case 'Master_close0_5394': {
          const v7927 = v6694[1];
          
          break;
          }
        case 'Master_new0_5394': {
          const v8132 = v6694[1];
          
          break;
          }
        case 'Master_setup0_5394': {
          const v8337 = v6694[1];
          
          break;
          }
        case 'Master_touch0_5394': {
          const v8542 = v6694[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2, ctc3, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v6694], secs: v6696, time: v6695, didSend: v6252, from: v6693 } = txn1;
  switch (v6694[0]) {
    case 'Child_announce0_5394': {
      const v6697 = v6694[1];
      return;
      break;
      }
    case 'Child_close0_5394': {
      const v6902 = v6694[1];
      return;
      break;
      }
    case 'Child_delete0_5394': {
      const v7107 = v6694[1];
      undefined /* setApiDetails */;
      ;
      const v7165 = v7107[stdlib.checkedBigNumberify('./index.rsh:403:10:spread', stdlib.UInt_max, '0')];
      const v7167 = true;
      const v7168 = await txn1.getOutput('Child_delete', 'v7167', ctc1, v7167);
      if (v6252) {
        stdlib.protect(ctc18, await interact.out(v7107, v7168), {
          at: './index.rsh:403:11:application',
          fs: ['at ./index.rsh:403:11:application call to [unknown function] (defined at: ./index.rsh:403:11:function exp)', 'at ./index.rsh:406:12:application call to "k" (defined at: ./index.rsh:405:13:function exp)', 'at ./index.rsh:405:13:application call to [unknown function] (defined at: ./index.rsh:405:13:function exp)'],
          msg: 'out',
          who: 'Child_delete'
          });
        }
      else {
        }
      
      null;
      const v10411 = v6507;
      const v10413 = v6511;
      const v10414 = v6507.closed;
      if (v10414) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Child_grant0_5394': {
      const v7312 = v6694[1];
      return;
      break;
      }
    case 'Child_ready0_5394': {
      const v7517 = v6694[1];
      return;
      break;
      }
    case 'Child_subscribe0_5394': {
      const v7722 = v6694[1];
      return;
      break;
      }
    case 'Master_close0_5394': {
      const v7927 = v6694[1];
      return;
      break;
      }
    case 'Master_new0_5394': {
      const v8132 = v6694[1];
      return;
      break;
      }
    case 'Master_setup0_5394': {
      const v8337 = v6694[1];
      return;
      break;
      }
    case 'Master_touch0_5394': {
      const v8542 = v6694[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Child_grant3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Child_grant3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Child_grant3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    closed: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Tuple([ctc4, ctc4, ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc3, ctc3, ctc3]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc0]);
  const ctc12 = stdlib.T_Data({
    DeleteProvider: ctc5,
    DeleteSubscription: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Tuple([ctc11]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc4]);
  const ctc17 = stdlib.T_Data({
    Child_announce0_5394: ctc8,
    Child_close0_5394: ctc10,
    Child_delete0_5394: ctc13,
    Child_grant0_5394: ctc6,
    Child_ready0_5394: ctc10,
    Child_subscribe0_5394: ctc14,
    Master_close0_5394: ctc15,
    Master_new0_5394: ctc15,
    Master_setup0_5394: ctc16,
    Master_touch0_5394: ctc15
    });
  const ctc18 = stdlib.T_Null;
  
  
  const [v6502, v6507, v6511] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v6648 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:412:32:application call to [unknown function] (defined at: ./index.rsh:412:32:function exp)', 'at ./index.rsh:327:29:application call to "runChild_grant0_5394" (defined at: ./index.rsh:412:10:function exp)', 'at ./index.rsh:327:29:application call to [unknown function] (defined at: ./index.rsh:327:29:function exp)'],
    msg: 'in',
    who: 'Child_grant'
    });
  const v6662 = ['Child_grant0_5394', v6648];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6502, v6507, v6511, v6662],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:412:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6694], secs: v6696, time: v6695, didSend: v6252, from: v6693 } = txn1;
      
      switch (v6694[0]) {
        case 'Child_announce0_5394': {
          const v6697 = v6694[1];
          
          break;
          }
        case 'Child_close0_5394': {
          const v6902 = v6694[1];
          
          break;
          }
        case 'Child_delete0_5394': {
          const v7107 = v6694[1];
          
          break;
          }
        case 'Child_grant0_5394': {
          const v7312 = v6694[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Child_grant"
            });
          ;
          const v7399 = v7312[stdlib.checkedBigNumberify('./index.rsh:412:10:spread', stdlib.UInt_max, '0')];
          const v7401 = true;
          const v7402 = await txn1.getOutput('Child_grant', 'v7401', ctc1, v7401);
          
          null;
          const v10466 = v6507;
          const v10468 = v6511;
          const v10469 = v6507.closed;
          if (v10469) {
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
        case 'Child_ready0_5394': {
          const v7517 = v6694[1];
          
          break;
          }
        case 'Child_subscribe0_5394': {
          const v7722 = v6694[1];
          
          break;
          }
        case 'Master_close0_5394': {
          const v7927 = v6694[1];
          
          break;
          }
        case 'Master_new0_5394': {
          const v8132 = v6694[1];
          
          break;
          }
        case 'Master_setup0_5394': {
          const v8337 = v6694[1];
          
          break;
          }
        case 'Master_touch0_5394': {
          const v8542 = v6694[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2, ctc3, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v6694], secs: v6696, time: v6695, didSend: v6252, from: v6693 } = txn1;
  switch (v6694[0]) {
    case 'Child_announce0_5394': {
      const v6697 = v6694[1];
      return;
      break;
      }
    case 'Child_close0_5394': {
      const v6902 = v6694[1];
      return;
      break;
      }
    case 'Child_delete0_5394': {
      const v7107 = v6694[1];
      return;
      break;
      }
    case 'Child_grant0_5394': {
      const v7312 = v6694[1];
      undefined /* setApiDetails */;
      ;
      const v7399 = v7312[stdlib.checkedBigNumberify('./index.rsh:412:10:spread', stdlib.UInt_max, '0')];
      const v7401 = true;
      const v7402 = await txn1.getOutput('Child_grant', 'v7401', ctc1, v7401);
      if (v6252) {
        stdlib.protect(ctc18, await interact.out(v7312, v7402), {
          at: './index.rsh:412:11:application',
          fs: ['at ./index.rsh:412:11:application call to [unknown function] (defined at: ./index.rsh:412:11:function exp)', 'at ./index.rsh:415:12:application call to "k" (defined at: ./index.rsh:414:13:function exp)', 'at ./index.rsh:414:13:application call to [unknown function] (defined at: ./index.rsh:414:13:function exp)'],
          msg: 'out',
          who: 'Child_grant'
          });
        }
      else {
        }
      
      null;
      const v10466 = v6507;
      const v10468 = v6511;
      const v10469 = v6507.closed;
      if (v10469) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Child_ready0_5394': {
      const v7517 = v6694[1];
      return;
      break;
      }
    case 'Child_subscribe0_5394': {
      const v7722 = v6694[1];
      return;
      break;
      }
    case 'Master_close0_5394': {
      const v7927 = v6694[1];
      return;
      break;
      }
    case 'Master_new0_5394': {
      const v8132 = v6694[1];
      return;
      break;
      }
    case 'Master_setup0_5394': {
      const v8337 = v6694[1];
      return;
      break;
      }
    case 'Master_touch0_5394': {
      const v8542 = v6694[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Child_ready3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Child_ready3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Child_ready3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    closed: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc3, ctc3, ctc3]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc4, ctc4, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc0]);
  const ctc11 = stdlib.T_Data({
    DeleteProvider: ctc9,
    DeleteSubscription: ctc10
    });
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc9]);
  const ctc14 = stdlib.T_Tuple([ctc10]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc4]);
  const ctc17 = stdlib.T_Data({
    Child_announce0_5394: ctc8,
    Child_close0_5394: ctc6,
    Child_delete0_5394: ctc12,
    Child_grant0_5394: ctc13,
    Child_ready0_5394: ctc6,
    Child_subscribe0_5394: ctc14,
    Master_close0_5394: ctc15,
    Master_new0_5394: ctc15,
    Master_setup0_5394: ctc16,
    Master_touch0_5394: ctc15
    });
  const ctc18 = stdlib.T_Null;
  
  
  const [v6502, v6507, v6511] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v6558 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:376:32:application call to [unknown function] (defined at: ./index.rsh:376:32:function exp)', 'at ./index.rsh:327:29:application call to "runChild_ready0_5394" (defined at: ./index.rsh:376:10:function exp)', 'at ./index.rsh:327:29:application call to [unknown function] (defined at: ./index.rsh:327:29:function exp)'],
    msg: 'in',
    who: 'Child_ready'
    });
  const v6570 = ['Child_ready0_5394', v6558];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6502, v6507, v6511, v6570],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:376:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6694], secs: v6696, time: v6695, didSend: v6252, from: v6693 } = txn1;
      
      switch (v6694[0]) {
        case 'Child_announce0_5394': {
          const v6697 = v6694[1];
          
          break;
          }
        case 'Child_close0_5394': {
          const v6902 = v6694[1];
          
          break;
          }
        case 'Child_delete0_5394': {
          const v7107 = v6694[1];
          
          break;
          }
        case 'Child_grant0_5394': {
          const v7312 = v6694[1];
          
          break;
          }
        case 'Child_ready0_5394': {
          const v7517 = v6694[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Child_ready"
            });
          ;
          const v7621 = v7517[stdlib.checkedBigNumberify('./index.rsh:376:10:spread', stdlib.UInt_max, '0')];
          const v7623 = true;
          const v7624 = await txn1.getOutput('Child_ready', 'v7623', ctc1, v7623);
          
          null;
          const v10521 = v6507;
          const v10523 = v6511;
          const v10524 = v6507.closed;
          if (v10524) {
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
        case 'Child_subscribe0_5394': {
          const v7722 = v6694[1];
          
          break;
          }
        case 'Master_close0_5394': {
          const v7927 = v6694[1];
          
          break;
          }
        case 'Master_new0_5394': {
          const v8132 = v6694[1];
          
          break;
          }
        case 'Master_setup0_5394': {
          const v8337 = v6694[1];
          
          break;
          }
        case 'Master_touch0_5394': {
          const v8542 = v6694[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2, ctc3, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v6694], secs: v6696, time: v6695, didSend: v6252, from: v6693 } = txn1;
  switch (v6694[0]) {
    case 'Child_announce0_5394': {
      const v6697 = v6694[1];
      return;
      break;
      }
    case 'Child_close0_5394': {
      const v6902 = v6694[1];
      return;
      break;
      }
    case 'Child_delete0_5394': {
      const v7107 = v6694[1];
      return;
      break;
      }
    case 'Child_grant0_5394': {
      const v7312 = v6694[1];
      return;
      break;
      }
    case 'Child_ready0_5394': {
      const v7517 = v6694[1];
      undefined /* setApiDetails */;
      ;
      const v7621 = v7517[stdlib.checkedBigNumberify('./index.rsh:376:10:spread', stdlib.UInt_max, '0')];
      const v7623 = true;
      const v7624 = await txn1.getOutput('Child_ready', 'v7623', ctc1, v7623);
      if (v6252) {
        stdlib.protect(ctc18, await interact.out(v7517, v7624), {
          at: './index.rsh:376:11:application',
          fs: ['at ./index.rsh:376:11:application call to [unknown function] (defined at: ./index.rsh:376:11:function exp)', 'at ./index.rsh:379:12:application call to "k" (defined at: ./index.rsh:378:13:function exp)', 'at ./index.rsh:378:13:application call to [unknown function] (defined at: ./index.rsh:378:13:function exp)'],
          msg: 'out',
          who: 'Child_ready'
          });
        }
      else {
        }
      
      null;
      const v10521 = v6507;
      const v10523 = v6511;
      const v10524 = v6507.closed;
      if (v10524) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Child_subscribe0_5394': {
      const v7722 = v6694[1];
      return;
      break;
      }
    case 'Master_close0_5394': {
      const v7927 = v6694[1];
      return;
      break;
      }
    case 'Master_new0_5394': {
      const v8132 = v6694[1];
      return;
      break;
      }
    case 'Master_setup0_5394': {
      const v8337 = v6694[1];
      return;
      break;
      }
    case 'Master_touch0_5394': {
      const v8542 = v6694[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Child_subscribe3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Child_subscribe3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Child_subscribe3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    closed: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc3, ctc3, ctc3]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc4, ctc0]);
  const ctc12 = stdlib.T_Data({
    DeleteProvider: ctc11,
    DeleteSubscription: ctc5
    });
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Tuple([ctc11]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc4]);
  const ctc17 = stdlib.T_Data({
    Child_announce0_5394: ctc8,
    Child_close0_5394: ctc10,
    Child_delete0_5394: ctc13,
    Child_grant0_5394: ctc14,
    Child_ready0_5394: ctc10,
    Child_subscribe0_5394: ctc6,
    Master_close0_5394: ctc15,
    Master_new0_5394: ctc15,
    Master_setup0_5394: ctc16,
    Master_touch0_5394: ctc15
    });
  const ctc18 = stdlib.T_Null;
  
  
  const [v6502, v6507, v6511] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v6598 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:394:36:application call to [unknown function] (defined at: ./index.rsh:394:36:function exp)', 'at ./index.rsh:327:29:application call to "runChild_subscribe0_5394" (defined at: ./index.rsh:394:10:function exp)', 'at ./index.rsh:327:29:application call to [unknown function] (defined at: ./index.rsh:327:29:function exp)'],
    msg: 'in',
    who: 'Child_subscribe'
    });
  const v6614 = ['Child_subscribe0_5394', v6598];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6502, v6507, v6511, v6614],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:394:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6694], secs: v6696, time: v6695, didSend: v6252, from: v6693 } = txn1;
      
      switch (v6694[0]) {
        case 'Child_announce0_5394': {
          const v6697 = v6694[1];
          
          break;
          }
        case 'Child_close0_5394': {
          const v6902 = v6694[1];
          
          break;
          }
        case 'Child_delete0_5394': {
          const v7107 = v6694[1];
          
          break;
          }
        case 'Child_grant0_5394': {
          const v7312 = v6694[1];
          
          break;
          }
        case 'Child_ready0_5394': {
          const v7517 = v6694[1];
          
          break;
          }
        case 'Child_subscribe0_5394': {
          const v7722 = v6694[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Child_subscribe"
            });
          ;
          const v7841 = v7722[stdlib.checkedBigNumberify('./index.rsh:394:10:spread', stdlib.UInt_max, '0')];
          const v7843 = true;
          const v7844 = await txn1.getOutput('Child_subscribe', 'v7843', ctc1, v7843);
          
          null;
          const v10576 = v6507;
          const v10578 = v6511;
          const v10579 = v6507.closed;
          if (v10579) {
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
        case 'Master_close0_5394': {
          const v7927 = v6694[1];
          
          break;
          }
        case 'Master_new0_5394': {
          const v8132 = v6694[1];
          
          break;
          }
        case 'Master_setup0_5394': {
          const v8337 = v6694[1];
          
          break;
          }
        case 'Master_touch0_5394': {
          const v8542 = v6694[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2, ctc3, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v6694], secs: v6696, time: v6695, didSend: v6252, from: v6693 } = txn1;
  switch (v6694[0]) {
    case 'Child_announce0_5394': {
      const v6697 = v6694[1];
      return;
      break;
      }
    case 'Child_close0_5394': {
      const v6902 = v6694[1];
      return;
      break;
      }
    case 'Child_delete0_5394': {
      const v7107 = v6694[1];
      return;
      break;
      }
    case 'Child_grant0_5394': {
      const v7312 = v6694[1];
      return;
      break;
      }
    case 'Child_ready0_5394': {
      const v7517 = v6694[1];
      return;
      break;
      }
    case 'Child_subscribe0_5394': {
      const v7722 = v6694[1];
      undefined /* setApiDetails */;
      ;
      const v7841 = v7722[stdlib.checkedBigNumberify('./index.rsh:394:10:spread', stdlib.UInt_max, '0')];
      const v7843 = true;
      const v7844 = await txn1.getOutput('Child_subscribe', 'v7843', ctc1, v7843);
      if (v6252) {
        stdlib.protect(ctc18, await interact.out(v7722, v7844), {
          at: './index.rsh:394:11:application',
          fs: ['at ./index.rsh:394:11:application call to [unknown function] (defined at: ./index.rsh:394:11:function exp)', 'at ./index.rsh:397:12:application call to "k" (defined at: ./index.rsh:396:13:function exp)', 'at ./index.rsh:396:13:application call to [unknown function] (defined at: ./index.rsh:396:13:function exp)'],
          msg: 'out',
          who: 'Child_subscribe'
          });
        }
      else {
        }
      
      null;
      const v10576 = v6507;
      const v10578 = v6511;
      const v10579 = v6507.closed;
      if (v10579) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Master_close0_5394': {
      const v7927 = v6694[1];
      return;
      break;
      }
    case 'Master_new0_5394': {
      const v8132 = v6694[1];
      return;
      break;
      }
    case 'Master_setup0_5394': {
      const v8337 = v6694[1];
      return;
      break;
      }
    case 'Master_touch0_5394': {
      const v8542 = v6694[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Master_close3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Master_close3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Master_close3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    closed: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Contract;
  const ctc6 = stdlib.T_Tuple([ctc5, ctc5, ctc0, ctc3, ctc3, ctc3]);
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc5, ctc5, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc5, ctc5, ctc0, ctc0]);
  const ctc12 = stdlib.T_Data({
    DeleteProvider: ctc10,
    DeleteSubscription: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Tuple([ctc10]);
  const ctc15 = stdlib.T_Tuple([ctc11]);
  const ctc16 = stdlib.T_Tuple([ctc5]);
  const ctc17 = stdlib.T_Data({
    Child_announce0_5394: ctc7,
    Child_close0_5394: ctc9,
    Child_delete0_5394: ctc13,
    Child_grant0_5394: ctc14,
    Child_ready0_5394: ctc9,
    Child_subscribe0_5394: ctc15,
    Master_close0_5394: ctc4,
    Master_new0_5394: ctc4,
    Master_setup0_5394: ctc16,
    Master_touch0_5394: ctc4
    });
  const ctc18 = stdlib.T_Null;
  
  
  const [v6502, v6507, v6511] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v6550 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:368:30:application call to [unknown function] (defined at: ./index.rsh:368:30:function exp)', 'at ./index.rsh:327:29:application call to "runMaster_close0_5394" (defined at: ./index.rsh:368:10:function exp)', 'at ./index.rsh:327:29:application call to [unknown function] (defined at: ./index.rsh:327:29:function exp)'],
    msg: 'in',
    who: 'Master_close'
    });
  const v6554 = ['Master_close0_5394', v6550];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6502, v6507, v6511, v6554],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:368:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6694], secs: v6696, time: v6695, didSend: v6252, from: v6693 } = txn1;
      
      switch (v6694[0]) {
        case 'Child_announce0_5394': {
          const v6697 = v6694[1];
          
          break;
          }
        case 'Child_close0_5394': {
          const v6902 = v6694[1];
          
          break;
          }
        case 'Child_delete0_5394': {
          const v7107 = v6694[1];
          
          break;
          }
        case 'Child_grant0_5394': {
          const v7312 = v6694[1];
          
          break;
          }
        case 'Child_ready0_5394': {
          const v7517 = v6694[1];
          
          break;
          }
        case 'Child_subscribe0_5394': {
          const v7722 = v6694[1];
          
          break;
          }
        case 'Master_close0_5394': {
          const v7927 = v6694[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Master_close"
            });
          ;
          const v8065 = true;
          const v8066 = await txn1.getOutput('Master_close', 'v8065', ctc1, v8065);
          
          const v8072 = {
            closed: true
            };
          const v10631 = v8072;
          const v10633 = v6511;
          const v10634 = v8072.closed;
          if (v10634) {
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
        case 'Master_new0_5394': {
          const v8132 = v6694[1];
          
          break;
          }
        case 'Master_setup0_5394': {
          const v8337 = v6694[1];
          
          break;
          }
        case 'Master_touch0_5394': {
          const v8542 = v6694[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2, ctc3, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v6694], secs: v6696, time: v6695, didSend: v6252, from: v6693 } = txn1;
  switch (v6694[0]) {
    case 'Child_announce0_5394': {
      const v6697 = v6694[1];
      return;
      break;
      }
    case 'Child_close0_5394': {
      const v6902 = v6694[1];
      return;
      break;
      }
    case 'Child_delete0_5394': {
      const v7107 = v6694[1];
      return;
      break;
      }
    case 'Child_grant0_5394': {
      const v7312 = v6694[1];
      return;
      break;
      }
    case 'Child_ready0_5394': {
      const v7517 = v6694[1];
      return;
      break;
      }
    case 'Child_subscribe0_5394': {
      const v7722 = v6694[1];
      return;
      break;
      }
    case 'Master_close0_5394': {
      const v7927 = v6694[1];
      undefined /* setApiDetails */;
      ;
      const v8065 = true;
      const v8066 = await txn1.getOutput('Master_close', 'v8065', ctc1, v8065);
      if (v6252) {
        stdlib.protect(ctc18, await interact.out(v7927, v8066), {
          at: './index.rsh:368:11:application',
          fs: ['at ./index.rsh:368:11:application call to [unknown function] (defined at: ./index.rsh:368:11:function exp)', 'at ./index.rsh:371:12:application call to "k" (defined at: ./index.rsh:370:13:function exp)', 'at ./index.rsh:370:13:application call to [unknown function] (defined at: ./index.rsh:370:13:function exp)'],
          msg: 'out',
          who: 'Master_close'
          });
        }
      else {
        }
      
      const v8072 = {
        closed: true
        };
      const v10631 = v8072;
      const v10633 = v6511;
      const v10634 = v8072.closed;
      if (v10634) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Master_new0_5394': {
      const v8132 = v6694[1];
      return;
      break;
      }
    case 'Master_setup0_5394': {
      const v8337 = v6694[1];
      return;
      break;
      }
    case 'Master_touch0_5394': {
      const v8542 = v6694[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Master_new3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Master_new3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Master_new3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    closed: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Contract;
  const ctc6 = stdlib.T_Tuple([ctc5, ctc5, ctc0, ctc3, ctc3, ctc3]);
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc5, ctc5, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc5, ctc5, ctc0, ctc0]);
  const ctc12 = stdlib.T_Data({
    DeleteProvider: ctc10,
    DeleteSubscription: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Tuple([ctc10]);
  const ctc15 = stdlib.T_Tuple([ctc11]);
  const ctc16 = stdlib.T_Tuple([ctc5]);
  const ctc17 = stdlib.T_Data({
    Child_announce0_5394: ctc7,
    Child_close0_5394: ctc9,
    Child_delete0_5394: ctc13,
    Child_grant0_5394: ctc14,
    Child_ready0_5394: ctc9,
    Child_subscribe0_5394: ctc15,
    Master_close0_5394: ctc4,
    Master_new0_5394: ctc4,
    Master_setup0_5394: ctc16,
    Master_touch0_5394: ctc4
    });
  const ctc18 = stdlib.T_Null;
  
  
  const [v6502, v6507, v6511] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v6516 = ctc.selfAddress();
  const v6518 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:330:28:application call to [unknown function] (defined at: ./index.rsh:330:28:function exp)', 'at ./index.rsh:327:29:application call to "runMaster_new0_5394" (defined at: ./index.rsh:330:10:function exp)', 'at ./index.rsh:327:29:application call to [unknown function] (defined at: ./index.rsh:327:29:function exp)'],
    msg: 'in',
    who: 'Master_new'
    });
  const v6519 = stdlib.addressEq(v6516, v6502);
  stdlib.assert(v6519, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:331:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:330:28:application call to [unknown function] (defined at: ./index.rsh:330:28:function exp)', 'at ./index.rsh:327:29:application call to "runMaster_new0_5394" (defined at: ./index.rsh:330:10:function exp)', 'at ./index.rsh:327:29:application call to [unknown function] (defined at: ./index.rsh:327:29:function exp)'],
    msg: 'Must be authorized',
    who: 'Master_new'
    });
  const v6524 = ['Master_new0_5394', v6518];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6502, v6507, v6511, v6524],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:330:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6694], secs: v6696, time: v6695, didSend: v6252, from: v6693 } = txn1;
      
      switch (v6694[0]) {
        case 'Child_announce0_5394': {
          const v6697 = v6694[1];
          
          break;
          }
        case 'Child_close0_5394': {
          const v6902 = v6694[1];
          
          break;
          }
        case 'Child_delete0_5394': {
          const v7107 = v6694[1];
          
          break;
          }
        case 'Child_grant0_5394': {
          const v7312 = v6694[1];
          
          break;
          }
        case 'Child_ready0_5394': {
          const v7517 = v6694[1];
          
          break;
          }
        case 'Child_subscribe0_5394': {
          const v7722 = v6694[1];
          
          break;
          }
        case 'Master_close0_5394': {
          const v7927 = v6694[1];
          
          break;
          }
        case 'Master_new0_5394': {
          const v8132 = v6694[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Master_new"
            });
          ;
          const v8283 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v8284 = stdlib.simContractNew(sim_r, {
            ALGO: {
              code: {
                approvalB64: `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`,
                clearStateB64: `CA==`
                },
              opts: {
                globalBytes: 2,
                globalUints: 0,
                localBytes: 0,
                localUints: 0
                }
              }
            }, ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:334:42:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./index.rsh:334:42:application', stdlib.UInt_max, '0'),
            toks: []
            }), getSimTokCtr());
          const v8285 = await txn1.getOutput('internal', 'v8284', ctc5, v8284);
          null;
          const v8286 = await txn1.getOutput('Master_new', 'v8285', ctc5, v8285);
          
          const v10686 = v6507;
          const v10688 = v6511;
          const v10689 = v6507.closed;
          if (v10689) {
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
        case 'Master_setup0_5394': {
          const v8337 = v6694[1];
          
          break;
          }
        case 'Master_touch0_5394': {
          const v8542 = v6694[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2, ctc3, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v6694], secs: v6696, time: v6695, didSend: v6252, from: v6693 } = txn1;
  switch (v6694[0]) {
    case 'Child_announce0_5394': {
      const v6697 = v6694[1];
      return;
      break;
      }
    case 'Child_close0_5394': {
      const v6902 = v6694[1];
      return;
      break;
      }
    case 'Child_delete0_5394': {
      const v7107 = v6694[1];
      return;
      break;
      }
    case 'Child_grant0_5394': {
      const v7312 = v6694[1];
      return;
      break;
      }
    case 'Child_ready0_5394': {
      const v7517 = v6694[1];
      return;
      break;
      }
    case 'Child_subscribe0_5394': {
      const v7722 = v6694[1];
      return;
      break;
      }
    case 'Master_close0_5394': {
      const v7927 = v6694[1];
      return;
      break;
      }
    case 'Master_new0_5394': {
      const v8132 = v6694[1];
      undefined /* setApiDetails */;
      ;
      const v8281 = stdlib.addressEq(v6693, v6502);
      stdlib.assert(v8281, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:331:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:333:13:application call to [unknown function] (defined at: ./index.rsh:333:13:function exp)'],
        msg: 'Must be authorized',
        who: 'Master_new'
        });
      const v8283 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v8284 = undefined /* ContractNew */;
      const v8285 = await txn1.getOutput('internal', 'v8284', ctc5, v8284);
      null;
      const v8286 = await txn1.getOutput('Master_new', 'v8285', ctc5, v8285);
      if (v6252) {
        stdlib.protect(ctc18, await interact.out(v8132, v8286), {
          at: './index.rsh:330:11:application',
          fs: ['at ./index.rsh:330:11:application call to [unknown function] (defined at: ./index.rsh:330:11:function exp)', 'at ./index.rsh:336:12:application call to "k" (defined at: ./index.rsh:333:13:function exp)', 'at ./index.rsh:333:13:application call to [unknown function] (defined at: ./index.rsh:333:13:function exp)'],
          msg: 'out',
          who: 'Master_new'
          });
        }
      else {
        }
      
      const v10686 = v6507;
      const v10688 = v6511;
      const v10689 = v6507.closed;
      if (v10689) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Master_setup0_5394': {
      const v8337 = v6694[1];
      return;
      break;
      }
    case 'Master_touch0_5394': {
      const v8542 = v6694[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Master_setup3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Master_setup3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Master_setup3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    closed: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc3, ctc3, ctc3]);
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc0]);
  const ctc12 = stdlib.T_Data({
    DeleteProvider: ctc10,
    DeleteSubscription: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Tuple([ctc10]);
  const ctc15 = stdlib.T_Tuple([ctc11]);
  const ctc16 = stdlib.T_Tuple([]);
  const ctc17 = stdlib.T_Data({
    Child_announce0_5394: ctc7,
    Child_close0_5394: ctc9,
    Child_delete0_5394: ctc13,
    Child_grant0_5394: ctc14,
    Child_ready0_5394: ctc9,
    Child_subscribe0_5394: ctc15,
    Master_close0_5394: ctc16,
    Master_new0_5394: ctc16,
    Master_setup0_5394: ctc5,
    Master_touch0_5394: ctc16
    });
  const ctc18 = stdlib.T_Null;
  const ctc19 = stdlib.T_Tuple([ctc3, ctc18]);
  
  
  const [v6502, v6507, v6511] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v6526 = ctc.selfAddress();
  const v6528 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:341:33:application call to [unknown function] (defined at: ./index.rsh:341:33:function exp)', 'at ./index.rsh:327:29:application call to "runMaster_setup0_5394" (defined at: ./index.rsh:341:10:function exp)', 'at ./index.rsh:327:29:application call to [unknown function] (defined at: ./index.rsh:327:29:function exp)'],
    msg: 'in',
    who: 'Master_setup'
    });
  const v6531 = stdlib.addressEq(v6526, v6502);
  stdlib.assert(v6531, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:342:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:341:33:application call to [unknown function] (defined at: ./index.rsh:341:33:function exp)', 'at ./index.rsh:327:29:application call to "runMaster_setup0_5394" (defined at: ./index.rsh:341:10:function exp)', 'at ./index.rsh:327:29:application call to [unknown function] (defined at: ./index.rsh:327:29:function exp)'],
    msg: 'Must be authorized',
    who: 'Master_setup'
    });
  const v6538 = ['Master_setup0_5394', v6528];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6502, v6507, v6511, v6538],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:6:23:decimal', stdlib.UInt_max, '100000'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6694], secs: v6696, time: v6695, didSend: v6252, from: v6693 } = txn1;
      
      switch (v6694[0]) {
        case 'Child_announce0_5394': {
          const v6697 = v6694[1];
          
          break;
          }
        case 'Child_close0_5394': {
          const v6902 = v6694[1];
          
          break;
          }
        case 'Child_delete0_5394': {
          const v7107 = v6694[1];
          
          break;
          }
        case 'Child_grant0_5394': {
          const v7312 = v6694[1];
          
          break;
          }
        case 'Child_ready0_5394': {
          const v7517 = v6694[1];
          
          break;
          }
        case 'Child_subscribe0_5394': {
          const v7722 = v6694[1];
          
          break;
          }
        case 'Master_close0_5394': {
          const v7927 = v6694[1];
          
          break;
          }
        case 'Master_new0_5394': {
          const v8132 = v6694[1];
          
          break;
          }
        case 'Master_setup0_5394': {
          const v8337 = v6694[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Master_setup"
            });
          const v8355 = stdlib.add(v6511, stdlib.checkedBigNumberify('./index.rsh:6:23:decimal', stdlib.UInt_max, '100000'));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:6:23:decimal', stdlib.UInt_max, '100000'),
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v8498 = v8337[stdlib.checkedBigNumberify('./index.rsh:341:10:spread', stdlib.UInt_max, '0')];
          const v8505 = stdlib.sub(v8355, stdlib.checkedBigNumberify('./index.rsh:6:23:decimal', stdlib.UInt_max, '100000'));
          const v8506 = [];
          const v8507 = stdlib.bytesFromHex("0xc194ad99");
          const v8508 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v8509 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v8498,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:349:63:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('./index.rsh:349:59:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:349:63:application', stdlib.UInt_max, '1'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc18.defaultValue /* simReturnVal */];})();
          const v8510 = await txn1.getOutput('internal', 'v8509', ctc19, v8509);
          const v8512 = v8510[stdlib.checkedBigNumberify('./index.rsh:349:63:application', stdlib.UInt_max, '0')];
          const v8517 = stdlib.add(v8505, v8512);
          null;
          const v8519 = true;
          const v8520 = await txn1.getOutput('Master_setup', 'v8519', ctc1, v8519);
          
          const v10741 = v6507;
          const v10743 = v8517;
          const v10744 = v6507.closed;
          if (v10744) {
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
        case 'Master_touch0_5394': {
          const v8542 = v6694[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2, ctc3, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v6694], secs: v6696, time: v6695, didSend: v6252, from: v6693 } = txn1;
  switch (v6694[0]) {
    case 'Child_announce0_5394': {
      const v6697 = v6694[1];
      return;
      break;
      }
    case 'Child_close0_5394': {
      const v6902 = v6694[1];
      return;
      break;
      }
    case 'Child_delete0_5394': {
      const v7107 = v6694[1];
      return;
      break;
      }
    case 'Child_grant0_5394': {
      const v7312 = v6694[1];
      return;
      break;
      }
    case 'Child_ready0_5394': {
      const v7517 = v6694[1];
      return;
      break;
      }
    case 'Child_subscribe0_5394': {
      const v7722 = v6694[1];
      return;
      break;
      }
    case 'Master_close0_5394': {
      const v7927 = v6694[1];
      return;
      break;
      }
    case 'Master_new0_5394': {
      const v8132 = v6694[1];
      return;
      break;
      }
    case 'Master_setup0_5394': {
      const v8337 = v6694[1];
      undefined /* setApiDetails */;
      const v8351 = stdlib.addressEq(v6693, v6502);
      stdlib.assert(v8351, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:342:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:341:33:application call to [unknown function] (defined at: ./index.rsh:341:33:function exp)', 'at ./index.rsh:327:29:application call to [unknown function] (defined at: ./index.rsh:341:33:function exp)', 'at ./index.rsh:327:29:application call to [unknown function] (defined at: ./index.rsh:327:29:function exp)'],
        msg: 'Must be authorized',
        who: 'Master_setup'
        });
      const v8355 = stdlib.add(v6511, stdlib.checkedBigNumberify('./index.rsh:6:23:decimal', stdlib.UInt_max, '100000'));
      ;
      const v8498 = v8337[stdlib.checkedBigNumberify('./index.rsh:341:10:spread', stdlib.UInt_max, '0')];
      const v8505 = stdlib.sub(v8355, stdlib.checkedBigNumberify('./index.rsh:6:23:decimal', stdlib.UInt_max, '100000'));
      const v8506 = [];
      const v8507 = stdlib.bytesFromHex("0xc194ad99");
      const v8508 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v8509 = undefined /* Remote */;
      const v8510 = await txn1.getOutput('internal', 'v8509', ctc19, v8509);
      const v8512 = v8510[stdlib.checkedBigNumberify('./index.rsh:349:63:application', stdlib.UInt_max, '0')];
      const v8517 = stdlib.add(v8505, v8512);
      const v8518 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v8512);
      stdlib.assert(v8518, {
        at: './index.rsh:349:63:application',
        fs: ['at ./index.rsh:345:13:application call to [unknown function] (defined at: ./index.rsh:345:13:function exp)'],
        msg: 'remote bill check',
        who: 'Master_setup'
        });
      null;
      const v8519 = true;
      const v8520 = await txn1.getOutput('Master_setup', 'v8519', ctc1, v8519);
      if (v6252) {
        stdlib.protect(ctc18, await interact.out(v8337, v8520), {
          at: './index.rsh:341:11:application',
          fs: ['at ./index.rsh:341:11:application call to [unknown function] (defined at: ./index.rsh:341:11:function exp)', 'at ./index.rsh:354:12:application call to "k" (defined at: ./index.rsh:345:13:function exp)', 'at ./index.rsh:345:13:application call to [unknown function] (defined at: ./index.rsh:345:13:function exp)'],
          msg: 'out',
          who: 'Master_setup'
          });
        }
      else {
        }
      
      const v10741 = v6507;
      const v10743 = v8517;
      const v10744 = v6507.closed;
      if (v10744) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Master_touch0_5394': {
      const v8542 = v6694[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Master_touch3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Master_touch3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Master_touch3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    closed: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Contract;
  const ctc6 = stdlib.T_Tuple([ctc5, ctc5, ctc0, ctc3, ctc3, ctc3]);
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc5, ctc5, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc5, ctc5, ctc0, ctc0]);
  const ctc12 = stdlib.T_Data({
    DeleteProvider: ctc10,
    DeleteSubscription: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Tuple([ctc10]);
  const ctc15 = stdlib.T_Tuple([ctc11]);
  const ctc16 = stdlib.T_Tuple([ctc5]);
  const ctc17 = stdlib.T_Data({
    Child_announce0_5394: ctc7,
    Child_close0_5394: ctc9,
    Child_delete0_5394: ctc13,
    Child_grant0_5394: ctc14,
    Child_ready0_5394: ctc9,
    Child_subscribe0_5394: ctc15,
    Master_close0_5394: ctc4,
    Master_new0_5394: ctc4,
    Master_setup0_5394: ctc16,
    Master_touch0_5394: ctc4
    });
  const ctc18 = stdlib.T_Null;
  
  
  const [v6502, v6507, v6511] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v6542 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:359:30:application call to [unknown function] (defined at: ./index.rsh:359:30:function exp)', 'at ./index.rsh:327:29:application call to "runMaster_touch0_5394" (defined at: ./index.rsh:359:10:function exp)', 'at ./index.rsh:327:29:application call to [unknown function] (defined at: ./index.rsh:327:29:function exp)'],
    msg: 'in',
    who: 'Master_touch'
    });
  const v6546 = ['Master_touch0_5394', v6542];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6502, v6507, v6511, v6546],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:359:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6694], secs: v6696, time: v6695, didSend: v6252, from: v6693 } = txn1;
      
      switch (v6694[0]) {
        case 'Child_announce0_5394': {
          const v6697 = v6694[1];
          
          break;
          }
        case 'Child_close0_5394': {
          const v6902 = v6694[1];
          
          break;
          }
        case 'Child_delete0_5394': {
          const v7107 = v6694[1];
          
          break;
          }
        case 'Child_grant0_5394': {
          const v7312 = v6694[1];
          
          break;
          }
        case 'Child_ready0_5394': {
          const v7517 = v6694[1];
          
          break;
          }
        case 'Child_subscribe0_5394': {
          const v7722 = v6694[1];
          
          break;
          }
        case 'Master_close0_5394': {
          const v7927 = v6694[1];
          
          break;
          }
        case 'Master_new0_5394': {
          const v8132 = v6694[1];
          
          break;
          }
        case 'Master_setup0_5394': {
          const v8337 = v6694[1];
          
          break;
          }
        case 'Master_touch0_5394': {
          const v8542 = v6694[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Master_touch"
            });
          ;
          const v8734 = (stdlib.le(await ctc.getBalance(), v6511) ? stdlib.checkedBigNumberify('./index.rsh:362:37:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v6511));
          const v8735 = stdlib.safeAdd(v8734, v6511);
          const v8739 = stdlib.sub(v8735, v8734);
          sim_r.txns.push({
            kind: 'from',
            to: v6502,
            tok: undefined /* Nothing */
            });
          const v8740 = true;
          const v8741 = await txn1.getOutput('Master_touch', 'v8740', ctc1, v8740);
          
          const v10796 = v6507;
          const v10798 = v8739;
          const v10799 = v6507.closed;
          if (v10799) {
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
    tys: [ctc0, ctc2, ctc3, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v6694], secs: v6696, time: v6695, didSend: v6252, from: v6693 } = txn1;
  switch (v6694[0]) {
    case 'Child_announce0_5394': {
      const v6697 = v6694[1];
      return;
      break;
      }
    case 'Child_close0_5394': {
      const v6902 = v6694[1];
      return;
      break;
      }
    case 'Child_delete0_5394': {
      const v7107 = v6694[1];
      return;
      break;
      }
    case 'Child_grant0_5394': {
      const v7312 = v6694[1];
      return;
      break;
      }
    case 'Child_ready0_5394': {
      const v7517 = v6694[1];
      return;
      break;
      }
    case 'Child_subscribe0_5394': {
      const v7722 = v6694[1];
      return;
      break;
      }
    case 'Master_close0_5394': {
      const v7927 = v6694[1];
      return;
      break;
      }
    case 'Master_new0_5394': {
      const v8132 = v6694[1];
      return;
      break;
      }
    case 'Master_setup0_5394': {
      const v8337 = v6694[1];
      return;
      break;
      }
    case 'Master_touch0_5394': {
      const v8542 = v6694[1];
      undefined /* setApiDetails */;
      ;
      const v8734 = (stdlib.le(await ctc.getBalance(), v6511) ? stdlib.checkedBigNumberify('./index.rsh:362:37:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v6511));
      const v8735 = stdlib.safeAdd(v8734, v6511);
      const v8739 = stdlib.sub(v8735, v8734);
      ;
      const v8740 = true;
      const v8741 = await txn1.getOutput('Master_touch', 'v8740', ctc1, v8740);
      if (v6252) {
        stdlib.protect(ctc18, await interact.out(v8542, v8741), {
          at: './index.rsh:359:11:application',
          fs: ['at ./index.rsh:359:11:application call to [unknown function] (defined at: ./index.rsh:359:11:function exp)', 'at ./index.rsh:363:12:application call to "k" (defined at: ./index.rsh:361:13:function exp)', 'at ./index.rsh:361:13:application call to [unknown function] (defined at: ./index.rsh:361:13:function exp)'],
          msg: 'out',
          who: 'Master_touch'
          });
        }
      else {
        }
      
      const v10796 = v6507;
      const v10798 = v8739;
      const v10799 = v6507.closed;
      if (v10799) {
        return;
        }
      else {
        return;
        }
      break;
      }
    }
  
  
  };
export async function Child_announce(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Child_announce expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Child_announce expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Child_announce3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Child_close(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Child_close expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Child_close expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Child_close3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Child_delete(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Child_delete expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Child_delete expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Child_delete3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Child_grant(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Child_grant expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Child_grant expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Child_grant3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Child_ready(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Child_ready expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Child_ready expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Child_ready3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Child_subscribe(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Child_subscribe expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Child_subscribe expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Child_subscribe3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Master_close(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Master_close expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Master_close expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Master_close3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Master_new(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Master_new expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Master_new expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Master_new3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Master_setup(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Master_setup expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Master_setup expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Master_setup3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Master_touch(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Master_touch expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Master_touch expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Master_touch3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Child_announce((uint64,uint64,address,uint64,uint64,uint64))byte`, `Child_close((uint64,uint64))byte`, `Child_delete((byte,byte[80]))byte`, `Child_grant((uint64,uint64,address))byte`, `Child_ready((uint64,uint64))byte`, `Child_subscribe((uint64,uint64,address,address))byte`, `Master_close()byte`, `Master_new()uint64`, `Master_setup(uint64)byte`, `Master_touch()byte`, `_reachp_0((uint64))void`, `_reachp_2((uint64,(byte,byte[81])))void`],
    pure: [],
    sigs: [`Child_announce((uint64,uint64,address,uint64,uint64,uint64))byte`, `Child_close((uint64,uint64))byte`, `Child_delete((byte,byte[80]))byte`, `Child_grant((uint64,uint64,address))byte`, `Child_ready((uint64,uint64))byte`, `Child_subscribe((uint64,uint64,address,address))byte`, `Master_close()byte`, `Master_new()uint64`, `Master_setup(uint64)byte`, `Master_touch()byte`, `_reachp_0((uint64))void`, `_reachp_2((uint64,(byte,byte[81])))void`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `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`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `18`,
    1000: `340`,
    1001: `340`,
    1002: `341`,
    1003: `342`,
    1004: `344`,
    1005: `344`,
    1006: `345`,
    1007: `345`,
    1008: `346`,
    1009: `346`,
    101: `18`,
    1010: `346`,
    1011: `348`,
    1012: `349`,
    1013: `349`,
    1014: `350`,
    1015: `350`,
    1016: `350`,
    1017: `350`,
    1018: `350`,
    1019: `350`,
    102: `18`,
    1020: `350`,
    1021: `350`,
    1022: `350`,
    1023: `350`,
    1024: `351`,
    1025: `351`,
    1026: `352`,
    1027: `353`,
    1028: `353`,
    1029: `353`,
    103: `19`,
    1030: `354`,
    1031: `355`,
    1032: `356`,
    1033: `356`,
    1034: `357`,
    1035: `358`,
    1036: `358`,
    1037: `358`,
    1038: `359`,
    1039: `359`,
    104: `19`,
    1040: `360`,
    1041: `361`,
    1042: `361`,
    1043: `362`,
    1044: `362`,
    1045: `363`,
    1046: `363`,
    1047: `364`,
    1048: `364`,
    1049: `364`,
    105: `19`,
    1050: `366`,
    1051: `366`,
    1052: `367`,
    1053: `367`,
    1054: `368`,
    1055: `369`,
    1056: `374`,
    1057: `374`,
    1058: `374`,
    1059: `374`,
    106: `20`,
    1060: `375`,
    1061: `375`,
    1062: `375`,
    1063: `376`,
    1064: `377`,
    1065: `378`,
    1066: `378`,
    1067: `379`,
    1068: `379`,
    1069: `380`,
    107: `20`,
    1070: `380`,
    1071: `381`,
    1072: `381`,
    1073: `381`,
    1074: `381`,
    1075: `381`,
    1076: `381`,
    1077: `381`,
    1078: `381`,
    1079: `381`,
    108: `20`,
    1080: `381`,
    1081: `381`,
    1082: `381`,
    1083: `381`,
    1084: `381`,
    1085: `381`,
    1086: `381`,
    1087: `381`,
    1088: `381`,
    1089: `381`,
    109: `20`,
    1090: `381`,
    1091: `381`,
    1092: `381`,
    1093: `381`,
    1094: `381`,
    1095: `381`,
    1096: `381`,
    1097: `381`,
    1098: `381`,
    1099: `381`,
    11: `2`,
    110: `20`,
    1100: `381`,
    1101: `381`,
    1102: `381`,
    1103: `381`,
    1104: `381`,
    1105: `381`,
    1106: `381`,
    1107: `381`,
    1108: `381`,
    1109: `381`,
    111: `20`,
    1110: `381`,
    1111: `381`,
    1112: `381`,
    1113: `381`,
    1114: `381`,
    1115: `381`,
    1116: `381`,
    1117: `381`,
    1118: `381`,
    1119: `381`,
    112: `20`,
    1120: `381`,
    1121: `381`,
    1122: `381`,
    1123: `381`,
    1124: `381`,
    1125: `381`,
    1126: `381`,
    1127: `381`,
    1128: `381`,
    1129: `381`,
    113: `20`,
    1130: `381`,
    1131: `381`,
    1132: `381`,
    1133: `381`,
    1134: `381`,
    1135: `381`,
    1136: `381`,
    1137: `381`,
    1138: `381`,
    1139: `381`,
    114: `20`,
    1140: `381`,
    1141: `381`,
    1142: `381`,
    1143: `381`,
    1144: `381`,
    1145: `381`,
    1146: `381`,
    1147: `381`,
    1148: `381`,
    1149: `381`,
    115: `20`,
    1150: `381`,
    1151: `381`,
    1152: `381`,
    1153: `381`,
    1154: `381`,
    1155: `381`,
    1156: `381`,
    1157: `381`,
    1158: `381`,
    1159: `381`,
    116: `20`,
    1160: `381`,
    1161: `381`,
    1162: `381`,
    1163: `381`,
    1164: `381`,
    1165: `381`,
    1166: `381`,
    1167: `381`,
    1168: `381`,
    1169: `381`,
    117: `20`,
    1170: `381`,
    1171: `381`,
    1172: `381`,
    1173: `381`,
    1174: `381`,
    1175: `381`,
    1176: `381`,
    1177: `381`,
    1178: `381`,
    1179: `381`,
    118: `20`,
    1180: `381`,
    1181: `381`,
    1182: `381`,
    1183: `381`,
    1184: `381`,
    1185: `381`,
    1186: `381`,
    1187: `381`,
    1188: `381`,
    1189: `381`,
    119: `20`,
    1190: `381`,
    1191: `381`,
    1192: `381`,
    1193: `381`,
    1194: `381`,
    1195: `381`,
    1196: `381`,
    1197: `381`,
    1198: `381`,
    1199: `381`,
    12: `2`,
    120: `20`,
    1200: `381`,
    1201: `381`,
    1202: `381`,
    1203: `381`,
    1204: `381`,
    1205: `381`,
    1206: `381`,
    1207: `381`,
    1208: `381`,
    1209: `381`,
    121: `20`,
    1210: `381`,
    1211: `381`,
    1212: `381`,
    1213: `381`,
    1214: `381`,
    1215: `381`,
    1216: `381`,
    1217: `381`,
    1218: `381`,
    1219: `381`,
    122: `20`,
    1220: `381`,
    1221: `381`,
    1222: `381`,
    1223: `381`,
    1224: `381`,
    1225: `381`,
    1226: `381`,
    1227: `381`,
    1228: `381`,
    1229: `381`,
    123: `20`,
    1230: `381`,
    1231: `381`,
    1232: `381`,
    1233: `381`,
    1234: `381`,
    1235: `381`,
    1236: `381`,
    1237: `381`,
    1238: `381`,
    1239: `381`,
    124: `20`,
    1240: `381`,
    1241: `381`,
    1242: `381`,
    1243: `381`,
    1244: `381`,
    1245: `381`,
    1246: `381`,
    1247: `381`,
    1248: `381`,
    1249: `381`,
    125: `20`,
    1250: `381`,
    1251: `381`,
    1252: `381`,
    1253: `381`,
    1254: `381`,
    1255: `381`,
    1256: `381`,
    1257: `381`,
    1258: `381`,
    1259: `381`,
    126: `20`,
    1260: `381`,
    1261: `381`,
    1262: `381`,
    1263: `381`,
    1264: `381`,
    1265: `381`,
    1266: `381`,
    1267: `381`,
    1268: `381`,
    1269: `381`,
    127: `20`,
    1270: `381`,
    1271: `381`,
    1272: `381`,
    1273: `381`,
    1274: `381`,
    1275: `381`,
    1276: `381`,
    1277: `381`,
    1278: `381`,
    1279: `381`,
    128: `20`,
    1280: `381`,
    1281: `381`,
    1282: `381`,
    1283: `381`,
    1284: `381`,
    1285: `381`,
    1286: `381`,
    1287: `381`,
    1288: `381`,
    1289: `381`,
    129: `20`,
    1290: `381`,
    1291: `381`,
    1292: `381`,
    1293: `381`,
    1294: `381`,
    1295: `381`,
    1296: `381`,
    1297: `381`,
    1298: `381`,
    1299: `381`,
    13: `2`,
    130: `20`,
    1300: `381`,
    1301: `381`,
    1302: `381`,
    1303: `381`,
    1304: `381`,
    1305: `381`,
    1306: `381`,
    1307: `381`,
    1308: `381`,
    1309: `381`,
    131: `20`,
    1310: `381`,
    1311: `381`,
    1312: `381`,
    1313: `381`,
    1314: `381`,
    1315: `381`,
    1316: `381`,
    1317: `381`,
    1318: `381`,
    1319: `381`,
    132: `22`,
    1320: `381`,
    1321: `381`,
    1322: `381`,
    1323: `381`,
    1324: `381`,
    1325: `381`,
    1326: `381`,
    1327: `381`,
    1328: `381`,
    1329: `381`,
    133: `24`,
    1330: `381`,
    1331: `381`,
    1332: `381`,
    1333: `381`,
    1334: `381`,
    1335: `381`,
    1336: `381`,
    1337: `381`,
    1338: `381`,
    1339: `381`,
    134: `24`,
    1340: `381`,
    1341: `381`,
    1342: `381`,
    1343: `381`,
    1344: `381`,
    1345: `381`,
    1346: `381`,
    1347: `381`,
    1348: `381`,
    1349: `381`,
    135: `24`,
    1350: `381`,
    1351: `381`,
    1352: `381`,
    1353: `381`,
    1354: `381`,
    1355: `381`,
    1356: `381`,
    1357: `381`,
    1358: `381`,
    1359: `381`,
    136: `25`,
    1360: `381`,
    1361: `381`,
    1362: `381`,
    1363: `381`,
    1364: `381`,
    1365: `381`,
    1366: `381`,
    1367: `381`,
    1368: `381`,
    1369: `381`,
    137: `25`,
    1370: `381`,
    1371: `381`,
    1372: `381`,
    1373: `381`,
    1374: `381`,
    1375: `381`,
    1376: `381`,
    1377: `381`,
    1378: `381`,
    1379: `381`,
    138: `27`,
    1380: `381`,
    1381: `381`,
    1382: `381`,
    1383: `381`,
    1384: `381`,
    1385: `381`,
    1386: `381`,
    1387: `381`,
    1388: `381`,
    1389: `381`,
    139: `28`,
    1390: `381`,
    1391: `381`,
    1392: `381`,
    1393: `381`,
    1394: `381`,
    1395: `381`,
    1396: `381`,
    1397: `381`,
    1398: `381`,
    1399: `381`,
    14: `2`,
    140: `29`,
    1400: `381`,
    1401: `381`,
    1402: `381`,
    1403: `381`,
    1404: `381`,
    1405: `381`,
    1406: `381`,
    1407: `381`,
    1408: `381`,
    1409: `381`,
    141: `30`,
    1410: `381`,
    1411: `381`,
    1412: `381`,
    1413: `381`,
    1414: `381`,
    1415: `381`,
    1416: `381`,
    1417: `381`,
    1418: `381`,
    1419: `381`,
    142: `30`,
    1420: `381`,
    1421: `381`,
    1422: `381`,
    1423: `381`,
    1424: `381`,
    1425: `381`,
    1426: `381`,
    1427: `381`,
    1428: `381`,
    1429: `381`,
    143: `31`,
    1430: `381`,
    1431: `381`,
    1432: `381`,
    1433: `381`,
    1434: `381`,
    1435: `381`,
    1436: `381`,
    1437: `381`,
    1438: `381`,
    1439: `381`,
    144: `32`,
    1440: `381`,
    1441: `381`,
    1442: `381`,
    1443: `381`,
    1444: `381`,
    1445: `381`,
    1446: `381`,
    1447: `381`,
    1448: `381`,
    1449: `381`,
    145: `32`,
    1450: `381`,
    1451: `381`,
    1452: `381`,
    1453: `381`,
    1454: `381`,
    1455: `381`,
    1456: `381`,
    1457: `381`,
    1458: `381`,
    1459: `381`,
    146: `33`,
    1460: `381`,
    1461: `381`,
    1462: `381`,
    1463: `381`,
    1464: `381`,
    1465: `381`,
    1466: `381`,
    1467: `381`,
    1468: `381`,
    1469: `381`,
    147: `34`,
    1470: `381`,
    1471: `381`,
    1472: `381`,
    1473: `381`,
    1474: `381`,
    1475: `381`,
    1476: `381`,
    1477: `381`,
    1478: `381`,
    1479: `381`,
    148: `35`,
    1480: `381`,
    1481: `381`,
    1482: `381`,
    1483: `381`,
    1484: `381`,
    1485: `381`,
    1486: `381`,
    1487: `381`,
    1488: `381`,
    1489: `381`,
    149: `36`,
    1490: `381`,
    1491: `381`,
    1492: `381`,
    1493: `381`,
    1494: `381`,
    1495: `381`,
    1496: `381`,
    1497: `381`,
    1498: `381`,
    1499: `381`,
    15: `2`,
    150: `36`,
    1500: `381`,
    1501: `381`,
    1502: `381`,
    1503: `381`,
    1504: `381`,
    1505: `381`,
    1506: `381`,
    1507: `381`,
    1508: `381`,
    1509: `381`,
    151: `38`,
    1510: `381`,
    1511: `381`,
    1512: `381`,
    1513: `381`,
    1514: `381`,
    1515: `381`,
    1516: `381`,
    1517: `381`,
    1518: `381`,
    1519: `381`,
    152: `38`,
    1520: `381`,
    1521: `381`,
    1522: `381`,
    1523: `381`,
    1524: `381`,
    1525: `381`,
    1526: `381`,
    1527: `381`,
    1528: `381`,
    1529: `381`,
    153: `39`,
    1530: `381`,
    1531: `381`,
    1532: `381`,
    1533: `381`,
    1534: `381`,
    1535: `381`,
    1536: `381`,
    1537: `381`,
    1538: `381`,
    1539: `381`,
    154: `39`,
    1540: `381`,
    1541: `381`,
    1542: `381`,
    1543: `381`,
    1544: `381`,
    1545: `381`,
    1546: `381`,
    1547: `381`,
    1548: `381`,
    1549: `381`,
    155: `40`,
    1550: `381`,
    1551: `381`,
    1552: `381`,
    1553: `381`,
    1554: `381`,
    1555: `381`,
    1556: `381`,
    1557: `381`,
    1558: `381`,
    1559: `381`,
    156: `41`,
    1560: `381`,
    1561: `381`,
    1562: `381`,
    1563: `381`,
    1564: `381`,
    1565: `381`,
    1566: `381`,
    1567: `381`,
    1568: `381`,
    1569: `381`,
    157: `43`,
    1570: `381`,
    1571: `381`,
    1572: `381`,
    1573: `381`,
    1574: `381`,
    1575: `381`,
    1576: `381`,
    1577: `381`,
    1578: `381`,
    1579: `381`,
    158: `44`,
    1580: `381`,
    1581: `381`,
    1582: `381`,
    1583: `381`,
    1584: `381`,
    1585: `381`,
    1586: `381`,
    1587: `381`,
    1588: `381`,
    1589: `381`,
    159: `44`,
    1590: `381`,
    1591: `381`,
    1592: `381`,
    1593: `381`,
    1594: `381`,
    1595: `381`,
    1596: `381`,
    1597: `381`,
    1598: `381`,
    1599: `381`,
    16: `2`,
    160: `44`,
    1600: `381`,
    1601: `381`,
    1602: `381`,
    1603: `381`,
    1604: `381`,
    1605: `381`,
    1606: `381`,
    1607: `381`,
    1608: `381`,
    1609: `381`,
    161: `45`,
    1610: `381`,
    1611: `381`,
    1612: `381`,
    1613: `381`,
    1614: `381`,
    1615: `381`,
    1616: `381`,
    1617: `381`,
    1618: `381`,
    1619: `381`,
    162: `45`,
    1620: `381`,
    1621: `381`,
    1622: `381`,
    1623: `381`,
    1624: `381`,
    1625: `381`,
    1626: `381`,
    1627: `381`,
    1628: `381`,
    1629: `381`,
    163: `46`,
    1630: `381`,
    1631: `381`,
    1632: `381`,
    1633: `381`,
    1634: `381`,
    1635: `381`,
    1636: `381`,
    1637: `381`,
    1638: `381`,
    1639: `381`,
    164: `47`,
    1640: `381`,
    1641: `381`,
    1642: `381`,
    1643: `381`,
    1644: `381`,
    1645: `381`,
    1646: `381`,
    1647: `381`,
    1648: `381`,
    1649: `381`,
    165: `47`,
    1650: `381`,
    1651: `381`,
    1652: `381`,
    1653: `381`,
    1654: `381`,
    1655: `381`,
    1656: `381`,
    1657: `381`,
    1658: `381`,
    1659: `381`,
    166: `47`,
    1660: `381`,
    1661: `381`,
    1662: `381`,
    1663: `381`,
    1664: `381`,
    1665: `381`,
    1666: `381`,
    1667: `381`,
    1668: `381`,
    1669: `381`,
    167: `48`,
    1670: `381`,
    1671: `381`,
    1672: `381`,
    1673: `381`,
    1674: `381`,
    1675: `381`,
    1676: `381`,
    1677: `381`,
    1678: `381`,
    1679: `381`,
    168: `48`,
    1680: `381`,
    1681: `381`,
    1682: `381`,
    1683: `381`,
    1684: `381`,
    1685: `381`,
    1686: `381`,
    1687: `381`,
    1688: `381`,
    1689: `381`,
    169: `49`,
    1690: `381`,
    1691: `381`,
    1692: `381`,
    1693: `381`,
    1694: `381`,
    1695: `381`,
    1696: `381`,
    1697: `381`,
    1698: `381`,
    1699: `381`,
    17: `2`,
    170: `49`,
    1700: `381`,
    1701: `381`,
    1702: `381`,
    1703: `381`,
    1704: `381`,
    1705: `381`,
    1706: `381`,
    1707: `381`,
    1708: `381`,
    1709: `381`,
    171: `50`,
    1710: `381`,
    1711: `381`,
    1712: `381`,
    1713: `381`,
    1714: `381`,
    1715: `381`,
    1716: `381`,
    1717: `381`,
    1718: `381`,
    1719: `381`,
    172: `51`,
    1720: `381`,
    1721: `381`,
    1722: `381`,
    1723: `381`,
    1724: `381`,
    1725: `381`,
    1726: `381`,
    1727: `381`,
    1728: `381`,
    1729: `381`,
    173: `51`,
    1730: `381`,
    1731: `381`,
    1732: `381`,
    1733: `381`,
    1734: `381`,
    1735: `381`,
    1736: `381`,
    1737: `381`,
    1738: `381`,
    1739: `381`,
    174: `52`,
    1740: `381`,
    1741: `381`,
    1742: `381`,
    1743: `381`,
    1744: `381`,
    1745: `381`,
    1746: `381`,
    1747: `381`,
    1748: `381`,
    1749: `381`,
    175: `52`,
    1750: `381`,
    1751: `381`,
    1752: `381`,
    1753: `381`,
    1754: `381`,
    1755: `381`,
    1756: `381`,
    1757: `381`,
    1758: `381`,
    1759: `381`,
    176: `53`,
    1760: `381`,
    1761: `381`,
    1762: `381`,
    1763: `381`,
    1764: `381`,
    1765: `381`,
    1766: `381`,
    1767: `381`,
    1768: `381`,
    1769: `381`,
    177: `54`,
    1770: `381`,
    1771: `381`,
    1772: `381`,
    1773: `381`,
    1774: `381`,
    1775: `381`,
    1776: `381`,
    1777: `381`,
    1778: `381`,
    1779: `381`,
    178: `55`,
    1780: `381`,
    1781: `381`,
    1782: `381`,
    1783: `381`,
    1784: `381`,
    1785: `381`,
    1786: `381`,
    1787: `381`,
    1788: `381`,
    1789: `381`,
    179: `55`,
    1790: `381`,
    1791: `381`,
    1792: `381`,
    1793: `381`,
    1794: `381`,
    1795: `381`,
    1796: `381`,
    1797: `381`,
    1798: `381`,
    1799: `381`,
    18: `2`,
    180: `56`,
    1800: `381`,
    1801: `381`,
    1802: `381`,
    1803: `381`,
    1804: `381`,
    1805: `381`,
    1806: `381`,
    1807: `381`,
    1808: `381`,
    1809: `381`,
    181: `56`,
    1810: `381`,
    1811: `381`,
    1812: `381`,
    1813: `381`,
    1814: `381`,
    1815: `381`,
    1816: `381`,
    1817: `381`,
    1818: `381`,
    1819: `381`,
    182: `57`,
    1820: `381`,
    1821: `381`,
    1822: `381`,
    1823: `381`,
    1824: `381`,
    1825: `381`,
    1826: `381`,
    1827: `381`,
    1828: `381`,
    1829: `381`,
    183: `57`,
    1830: `381`,
    1831: `381`,
    1832: `381`,
    1833: `381`,
    1834: `381`,
    1835: `381`,
    1836: `381`,
    1837: `381`,
    1838: `381`,
    1839: `381`,
    184: `57`,
    1840: `381`,
    1841: `381`,
    1842: `381`,
    1843: `381`,
    1844: `381`,
    1845: `381`,
    1846: `381`,
    1847: `381`,
    1848: `381`,
    1849: `381`,
    185: `58`,
    1850: `381`,
    1851: `381`,
    1852: `381`,
    1853: `381`,
    1854: `381`,
    1855: `381`,
    1856: `381`,
    1857: `381`,
    1858: `381`,
    1859: `381`,
    186: `58`,
    1860: `381`,
    1861: `381`,
    1862: `381`,
    1863: `381`,
    1864: `381`,
    1865: `381`,
    1866: `381`,
    1867: `381`,
    1868: `381`,
    1869: `381`,
    187: `59`,
    1870: `381`,
    1871: `381`,
    1872: `381`,
    1873: `381`,
    1874: `381`,
    1875: `381`,
    1876: `381`,
    1877: `381`,
    1878: `381`,
    1879: `381`,
    188: `59`,
    1880: `381`,
    1881: `381`,
    1882: `381`,
    1883: `381`,
    1884: `381`,
    1885: `381`,
    1886: `381`,
    1887: `381`,
    1888: `381`,
    1889: `381`,
    189: `59`,
    1890: `381`,
    1891: `381`,
    1892: `381`,
    1893: `381`,
    1894: `381`,
    1895: `381`,
    1896: `381`,
    1897: `381`,
    1898: `381`,
    1899: `381`,
    19: `2`,
    190: `59`,
    1900: `381`,
    1901: `381`,
    1902: `381`,
    1903: `381`,
    1904: `381`,
    1905: `381`,
    1906: `381`,
    1907: `381`,
    1908: `381`,
    1909: `381`,
    191: `59`,
    1910: `381`,
    1911: `381`,
    1912: `381`,
    1913: `381`,
    1914: `381`,
    1915: `381`,
    1916: `381`,
    1917: `381`,
    1918: `381`,
    1919: `381`,
    192: `59`,
    1920: `381`,
    1921: `381`,
    1922: `381`,
    1923: `381`,
    1924: `381`,
    1925: `381`,
    1926: `381`,
    1927: `381`,
    1928: `381`,
    1929: `381`,
    193: `60`,
    1930: `381`,
    1931: `381`,
    1932: `381`,
    1933: `381`,
    1934: `381`,
    1935: `381`,
    1936: `381`,
    1937: `381`,
    1938: `381`,
    1939: `381`,
    194: `60`,
    1940: `381`,
    1941: `381`,
    1942: `381`,
    1943: `381`,
    1944: `381`,
    1945: `381`,
    1946: `381`,
    1947: `381`,
    1948: `381`,
    1949: `381`,
    195: `61`,
    1950: `381`,
    1951: `381`,
    1952: `381`,
    1953: `381`,
    1954: `381`,
    1955: `381`,
    1956: `381`,
    1957: `381`,
    1958: `381`,
    1959: `381`,
    196: `62`,
    1960: `381`,
    1961: `381`,
    1962: `381`,
    1963: `381`,
    1964: `381`,
    1965: `381`,
    1966: `381`,
    1967: `381`,
    1968: `381`,
    1969: `381`,
    197: `63`,
    1970: `381`,
    1971: `381`,
    1972: `381`,
    1973: `381`,
    1974: `381`,
    1975: `381`,
    1976: `381`,
    1977: `381`,
    1978: `381`,
    1979: `381`,
    198: `63`,
    1980: `381`,
    1981: `381`,
    1982: `381`,
    1983: `381`,
    1984: `381`,
    1985: `381`,
    1986: `381`,
    1987: `381`,
    1988: `381`,
    1989: `381`,
    199: `64`,
    1990: `381`,
    1991: `381`,
    1992: `381`,
    1993: `381`,
    1994: `381`,
    1995: `381`,
    1996: `381`,
    1997: `381`,
    1998: `381`,
    1999: `381`,
    2: `2`,
    20: `2`,
    200: `65`,
    2000: `381`,
    2001: `381`,
    2002: `381`,
    2003: `381`,
    2004: `381`,
    2005: `381`,
    2006: `381`,
    2007: `381`,
    2008: `381`,
    2009: `381`,
    201: `67`,
    2010: `381`,
    2011: `381`,
    2012: `381`,
    2013: `381`,
    2014: `381`,
    2015: `381`,
    2016: `381`,
    2017: `381`,
    2018: `381`,
    2019: `381`,
    202: `67`,
    2020: `381`,
    2021: `381`,
    2022: `381`,
    2023: `381`,
    2024: `381`,
    2025: `381`,
    2026: `381`,
    2027: `381`,
    2028: `381`,
    2029: `381`,
    203: `68`,
    2030: `381`,
    2031: `381`,
    2032: `381`,
    2033: `381`,
    2034: `381`,
    2035: `381`,
    2036: `381`,
    2037: `381`,
    2038: `381`,
    2039: `381`,
    204: `68`,
    2040: `381`,
    2041: `381`,
    2042: `381`,
    2043: `381`,
    2044: `381`,
    2045: `381`,
    2046: `381`,
    2047: `381`,
    2048: `381`,
    2049: `381`,
    205: `68`,
    2050: `381`,
    2051: `381`,
    2052: `381`,
    2053: `381`,
    2054: `381`,
    2055: `381`,
    2056: `381`,
    2057: `381`,
    2058: `381`,
    2059: `381`,
    206: `69`,
    2060: `381`,
    2061: `381`,
    2062: `381`,
    2063: `381`,
    2064: `381`,
    2065: `381`,
    2066: `381`,
    2067: `381`,
    2068: `381`,
    2069: `381`,
    207: `69`,
    2070: `381`,
    2071: `381`,
    2072: `381`,
    2073: `381`,
    2074: `381`,
    2075: `381`,
    2076: `381`,
    2077: `381`,
    2078: `381`,
    2079: `381`,
    208: `70`,
    2080: `381`,
    2081: `381`,
    2082: `381`,
    2083: `381`,
    2084: `381`,
    2085: `381`,
    2086: `381`,
    2087: `381`,
    2088: `381`,
    2089: `381`,
    209: `71`,
    2090: `381`,
    2091: `381`,
    2092: `381`,
    2093: `381`,
    2094: `381`,
    2095: `381`,
    2096: `381`,
    2097: `381`,
    2098: `381`,
    2099: `381`,
    21: `2`,
    210: `72`,
    2100: `381`,
    2101: `381`,
    2102: `381`,
    2103: `381`,
    2104: `381`,
    2105: `381`,
    2106: `381`,
    2107: `381`,
    2108: `381`,
    2109: `381`,
    211: `72`,
    2110: `381`,
    2111: `381`,
    2112: `381`,
    2113: `381`,
    2114: `381`,
    2115: `381`,
    2116: `381`,
    2117: `381`,
    2118: `381`,
    2119: `381`,
    212: `72`,
    2120: `381`,
    2121: `381`,
    2122: `381`,
    2123: `381`,
    2124: `381`,
    2125: `381`,
    2126: `381`,
    2127: `381`,
    2128: `381`,
    2129: `381`,
    213: `72`,
    2130: `381`,
    2131: `381`,
    2132: `381`,
    2133: `381`,
    2134: `381`,
    2135: `381`,
    2136: `381`,
    2137: `381`,
    2138: `381`,
    2139: `381`,
    214: `72`,
    2140: `381`,
    2141: `381`,
    2142: `381`,
    2143: `381`,
    2144: `381`,
    2145: `381`,
    2146: `381`,
    2147: `381`,
    2148: `381`,
    2149: `381`,
    215: `72`,
    2150: `381`,
    2151: `381`,
    2152: `381`,
    2153: `381`,
    2154: `381`,
    2155: `381`,
    2156: `381`,
    2157: `381`,
    2158: `381`,
    2159: `381`,
    216: `72`,
    2160: `381`,
    2161: `381`,
    2162: `381`,
    2163: `381`,
    2164: `381`,
    2165: `381`,
    2166: `381`,
    2167: `381`,
    2168: `381`,
    2169: `381`,
    217: `72`,
    2170: `381`,
    2171: `381`,
    2172: `381`,
    2173: `381`,
    2174: `381`,
    2175: `381`,
    2176: `381`,
    2177: `381`,
    2178: `381`,
    2179: `381`,
    218: `72`,
    2180: `381`,
    2181: `381`,
    2182: `381`,
    2183: `381`,
    2184: `381`,
    2185: `381`,
    2186: `381`,
    2187: `381`,
    2188: `381`,
    2189: `381`,
    219: `72`,
    2190: `381`,
    2191: `381`,
    2192: `381`,
    2193: `381`,
    2194: `381`,
    2195: `381`,
    2196: `381`,
    2197: `381`,
    2198: `381`,
    2199: `381`,
    22: `2`,
    220: `72`,
    2200: `381`,
    2201: `381`,
    2202: `381`,
    2203: `381`,
    2204: `381`,
    2205: `381`,
    2206: `381`,
    2207: `381`,
    2208: `381`,
    2209: `381`,
    221: `72`,
    2210: `381`,
    2211: `381`,
    2212: `381`,
    2213: `381`,
    2214: `381`,
    2215: `381`,
    2216: `381`,
    2217: `381`,
    2218: `381`,
    2219: `381`,
    222: `72`,
    2220: `381`,
    2221: `381`,
    2222: `381`,
    2223: `381`,
    2224: `381`,
    2225: `381`,
    2226: `381`,
    2227: `381`,
    2228: `381`,
    2229: `381`,
    223: `72`,
    2230: `381`,
    2231: `381`,
    2232: `381`,
    2233: `381`,
    2234: `381`,
    2235: `381`,
    2236: `381`,
    2237: `381`,
    2238: `381`,
    2239: `381`,
    224: `72`,
    2240: `381`,
    2241: `381`,
    2242: `381`,
    2243: `381`,
    2244: `381`,
    2245: `381`,
    2246: `381`,
    2247: `381`,
    2248: `381`,
    2249: `381`,
    225: `72`,
    2250: `381`,
    2251: `381`,
    2252: `381`,
    2253: `381`,
    2254: `381`,
    2255: `381`,
    2256: `381`,
    2257: `381`,
    2258: `381`,
    2259: `381`,
    226: `72`,
    2260: `381`,
    2261: `381`,
    2262: `381`,
    2263: `381`,
    2264: `381`,
    2265: `381`,
    2266: `381`,
    2267: `381`,
    2268: `381`,
    2269: `381`,
    227: `72`,
    2270: `381`,
    2271: `381`,
    2272: `381`,
    2273: `381`,
    2274: `381`,
    2275: `381`,
    2276: `381`,
    2277: `381`,
    2278: `381`,
    2279: `381`,
    228: `72`,
    2280: `381`,
    2281: `381`,
    2282: `381`,
    2283: `381`,
    2284: `381`,
    2285: `381`,
    2286: `381`,
    2287: `381`,
    2288: `381`,
    2289: `381`,
    229: `72`,
    2290: `381`,
    2291: `381`,
    2292: `381`,
    2293: `381`,
    2294: `381`,
    2295: `381`,
    2296: `381`,
    2297: `381`,
    2298: `381`,
    2299: `381`,
    23: `4`,
    230: `72`,
    2300: `381`,
    2301: `381`,
    2302: `381`,
    2303: `381`,
    2304: `381`,
    2305: `381`,
    2306: `381`,
    2307: `381`,
    2308: `381`,
    2309: `381`,
    231: `72`,
    2310: `381`,
    2311: `381`,
    2312: `381`,
    2313: `381`,
    2314: `381`,
    2315: `381`,
    2316: `381`,
    2317: `381`,
    2318: `381`,
    2319: `381`,
    232: `73`,
    2320: `381`,
    2321: `381`,
    2322: `381`,
    2323: `381`,
    2324: `381`,
    2325: `381`,
    2326: `381`,
    2327: `381`,
    2328: `381`,
    2329: `381`,
    233: `73`,
    2330: `381`,
    2331: `381`,
    2332: `381`,
    2333: `381`,
    2334: `381`,
    2335: `381`,
    2336: `381`,
    2337: `381`,
    2338: `381`,
    2339: `381`,
    234: `73`,
    2340: `381`,
    2341: `381`,
    2342: `381`,
    2343: `381`,
    2344: `381`,
    2345: `381`,
    2346: `381`,
    2347: `381`,
    2348: `381`,
    2349: `381`,
    235: `75`,
    2350: `381`,
    2351: `381`,
    2352: `381`,
    2353: `381`,
    2354: `381`,
    2355: `381`,
    2356: `381`,
    2357: `381`,
    2358: `381`,
    2359: `381`,
    236: `75`,
    2360: `381`,
    2361: `381`,
    2362: `381`,
    2363: `381`,
    2364: `381`,
    2365: `381`,
    2366: `381`,
    2367: `381`,
    2368: `381`,
    2369: `381`,
    237: `75`,
    2370: `381`,
    2371: `381`,
    2372: `381`,
    2373: `381`,
    2374: `381`,
    2375: `381`,
    2376: `381`,
    2377: `381`,
    2378: `381`,
    2379: `381`,
    238: `76`,
    2380: `381`,
    2381: `381`,
    2382: `381`,
    2383: `381`,
    2384: `381`,
    2385: `381`,
    2386: `381`,
    2387: `381`,
    2388: `381`,
    2389: `381`,
    239: `76`,
    2390: `381`,
    2391: `381`,
    2392: `381`,
    2393: `381`,
    2394: `381`,
    2395: `381`,
    2396: `381`,
    2397: `381`,
    2398: `381`,
    2399: `381`,
    24: `4`,
    240: `78`,
    2400: `381`,
    2401: `381`,
    2402: `381`,
    2403: `381`,
    2404: `381`,
    2405: `381`,
    2406: `381`,
    2407: `381`,
    2408: `381`,
    2409: `381`,
    241: `79`,
    2410: `381`,
    2411: `381`,
    2412: `381`,
    2413: `381`,
    2414: `381`,
    2415: `381`,
    2416: `381`,
    2417: `381`,
    2418: `381`,
    2419: `381`,
    242: `80`,
    2420: `381`,
    2421: `381`,
    2422: `381`,
    2423: `381`,
    2424: `381`,
    2425: `381`,
    2426: `381`,
    2427: `381`,
    2428: `381`,
    2429: `381`,
    243: `81`,
    2430: `381`,
    2431: `381`,
    2432: `381`,
    2433: `381`,
    2434: `381`,
    2435: `381`,
    2436: `381`,
    2437: `381`,
    2438: `381`,
    2439: `381`,
    244: `81`,
    2440: `381`,
    2441: `381`,
    2442: `381`,
    2443: `381`,
    2444: `381`,
    2445: `381`,
    2446: `381`,
    2447: `381`,
    2448: `381`,
    2449: `381`,
    245: `82`,
    2450: `381`,
    2451: `381`,
    2452: `381`,
    2453: `381`,
    2454: `381`,
    2455: `381`,
    2456: `381`,
    2457: `381`,
    2458: `381`,
    2459: `381`,
    246: `83`,
    2460: `381`,
    2461: `381`,
    2462: `381`,
    2463: `381`,
    2464: `381`,
    2465: `381`,
    2466: `381`,
    2467: `381`,
    2468: `381`,
    2469: `381`,
    247: `83`,
    2470: `381`,
    2471: `381`,
    2472: `381`,
    2473: `381`,
    2474: `381`,
    2475: `381`,
    2476: `381`,
    2477: `381`,
    2478: `381`,
    2479: `381`,
    248: `84`,
    2480: `381`,
    2481: `381`,
    2482: `381`,
    2483: `381`,
    2484: `381`,
    2485: `381`,
    2486: `381`,
    2487: `381`,
    2488: `381`,
    2489: `381`,
    249: `85`,
    2490: `381`,
    2491: `381`,
    2492: `381`,
    2493: `381`,
    2494: `381`,
    2495: `381`,
    2496: `381`,
    2497: `381`,
    2498: `381`,
    2499: `381`,
    25: `5`,
    250: `86`,
    2500: `381`,
    2501: `381`,
    2502: `381`,
    2503: `381`,
    2504: `381`,
    2505: `381`,
    2506: `381`,
    2507: `381`,
    2508: `381`,
    2509: `381`,
    251: `87`,
    2510: `381`,
    2511: `381`,
    2512: `381`,
    2513: `381`,
    2514: `381`,
    2515: `381`,
    2516: `381`,
    2517: `381`,
    2518: `381`,
    2519: `381`,
    252: `87`,
    2520: `381`,
    2521: `381`,
    2522: `381`,
    2523: `381`,
    2524: `381`,
    2525: `381`,
    2526: `381`,
    2527: `381`,
    2528: `381`,
    2529: `381`,
    253: `88`,
    2530: `381`,
    2531: `381`,
    2532: `381`,
    2533: `381`,
    2534: `381`,
    2535: `381`,
    2536: `381`,
    2537: `381`,
    2538: `381`,
    2539: `381`,
    254: `88`,
    2540: `381`,
    2541: `381`,
    2542: `381`,
    2543: `381`,
    2544: `381`,
    2545: `381`,
    2546: `381`,
    2547: `381`,
    2548: `381`,
    2549: `381`,
    255: `88`,
    2550: `381`,
    2551: `381`,
    2552: `381`,
    2553: `381`,
    2554: `381`,
    2555: `381`,
    2556: `381`,
    2557: `381`,
    2558: `381`,
    2559: `381`,
    256: `90`,
    2560: `381`,
    2561: `381`,
    2562: `381`,
    2563: `381`,
    2564: `381`,
    2565: `381`,
    2566: `381`,
    2567: `381`,
    2568: `381`,
    2569: `381`,
    257: `90`,
    2570: `381`,
    2571: `381`,
    2572: `381`,
    2573: `381`,
    2574: `381`,
    2575: `381`,
    2576: `381`,
    2577: `381`,
    2578: `381`,
    2579: `381`,
    258: `90`,
    2580: `381`,
    2581: `381`,
    2582: `381`,
    2583: `381`,
    2584: `381`,
    2585: `381`,
    2586: `381`,
    2587: `381`,
    2588: `381`,
    2589: `381`,
    259: `91`,
    2590: `381`,
    2591: `381`,
    2592: `381`,
    2593: `381`,
    2594: `381`,
    2595: `381`,
    2596: `381`,
    2597: `381`,
    2598: `381`,
    2599: `381`,
    26: `5`,
    260: `91`,
    2600: `381`,
    2601: `381`,
    2602: `381`,
    2603: `381`,
    2604: `381`,
    2605: `381`,
    2606: `381`,
    2607: `381`,
    2608: `381`,
    2609: `381`,
    261: `93`,
    2610: `381`,
    2611: `381`,
    2612: `381`,
    2613: `381`,
    2614: `381`,
    2615: `381`,
    2616: `381`,
    2617: `381`,
    2618: `381`,
    2619: `381`,
    262: `94`,
    2620: `381`,
    2621: `381`,
    2622: `381`,
    2623: `381`,
    2624: `381`,
    2625: `381`,
    2626: `381`,
    2627: `381`,
    2628: `381`,
    2629: `381`,
    263: `95`,
    2630: `381`,
    2631: `381`,
    2632: `381`,
    2633: `381`,
    2634: `381`,
    2635: `381`,
    2636: `381`,
    2637: `381`,
    2638: `381`,
    2639: `381`,
    264: `95`,
    2640: `381`,
    2641: `381`,
    2642: `381`,
    2643: `381`,
    2644: `381`,
    2645: `381`,
    2646: `381`,
    2647: `381`,
    2648: `381`,
    2649: `381`,
    265: `95`,
    2650: `381`,
    2651: `381`,
    2652: `381`,
    2653: `381`,
    2654: `381`,
    2655: `381`,
    2656: `381`,
    2657: `381`,
    2658: `381`,
    2659: `381`,
    266: `96`,
    2660: `381`,
    2661: `381`,
    2662: `381`,
    2663: `381`,
    2664: `381`,
    2665: `381`,
    2666: `381`,
    2667: `381`,
    2668: `381`,
    2669: `381`,
    267: `96`,
    2670: `381`,
    2671: `381`,
    2672: `381`,
    2673: `381`,
    2674: `381`,
    2675: `381`,
    2676: `381`,
    2677: `381`,
    2678: `381`,
    2679: `381`,
    268: `97`,
    2680: `381`,
    2681: `381`,
    2682: `381`,
    2683: `381`,
    2684: `381`,
    2685: `381`,
    2686: `381`,
    2687: `381`,
    2688: `381`,
    2689: `381`,
    269: `98`,
    2690: `381`,
    2691: `381`,
    2692: `381`,
    2693: `381`,
    2694: `381`,
    2695: `381`,
    2696: `381`,
    2697: `381`,
    2698: `381`,
    2699: `381`,
    27: `5`,
    270: `99`,
    2700: `381`,
    2701: `381`,
    2702: `381`,
    2703: `381`,
    2704: `381`,
    2705: `381`,
    2706: `381`,
    2707: `381`,
    2708: `381`,
    2709: `381`,
    271: `99`,
    2710: `381`,
    2711: `381`,
    2712: `381`,
    2713: `381`,
    2714: `381`,
    2715: `381`,
    2716: `381`,
    2717: `381`,
    2718: `381`,
    2719: `381`,
    272: `100`,
    2720: `381`,
    2721: `381`,
    2722: `381`,
    2723: `381`,
    2724: `381`,
    2725: `381`,
    2726: `381`,
    2727: `381`,
    2728: `381`,
    2729: `381`,
    273: `100`,
    2730: `381`,
    2731: `381`,
    2732: `381`,
    2733: `381`,
    2734: `381`,
    2735: `381`,
    2736: `381`,
    2737: `381`,
    2738: `381`,
    2739: `381`,
    274: `100`,
    2740: `381`,
    2741: `381`,
    2742: `381`,
    2743: `381`,
    2744: `381`,
    2745: `381`,
    2746: `381`,
    2747: `381`,
    2748: `381`,
    2749: `381`,
    275: `102`,
    2750: `381`,
    2751: `381`,
    2752: `381`,
    2753: `381`,
    2754: `381`,
    2755: `381`,
    2756: `381`,
    2757: `381`,
    2758: `381`,
    2759: `381`,
    276: `102`,
    2760: `381`,
    2761: `381`,
    2762: `381`,
    2763: `381`,
    2764: `381`,
    2765: `381`,
    2766: `381`,
    2767: `381`,
    2768: `381`,
    2769: `381`,
    277: `102`,
    2770: `381`,
    2771: `381`,
    2772: `381`,
    2773: `381`,
    2774: `381`,
    2775: `381`,
    2776: `381`,
    2777: `381`,
    2778: `381`,
    2779: `381`,
    278: `103`,
    2780: `381`,
    2781: `381`,
    2782: `381`,
    2783: `381`,
    2784: `381`,
    2785: `381`,
    2786: `381`,
    2787: `381`,
    2788: `381`,
    2789: `381`,
    279: `103`,
    2790: `381`,
    2791: `381`,
    2792: `381`,
    2793: `381`,
    2794: `381`,
    2795: `381`,
    2796: `381`,
    2797: `381`,
    2798: `381`,
    2799: `381`,
    28: `6`,
    280: `105`,
    2800: `381`,
    2801: `381`,
    2802: `381`,
    2803: `381`,
    2804: `381`,
    2805: `381`,
    2806: `381`,
    2807: `381`,
    2808: `381`,
    2809: `381`,
    281: `106`,
    2810: `381`,
    2811: `381`,
    2812: `381`,
    2813: `381`,
    2814: `381`,
    2815: `381`,
    2816: `381`,
    2817: `381`,
    2818: `381`,
    2819: `381`,
    282: `107`,
    2820: `381`,
    2821: `381`,
    2822: `381`,
    2823: `381`,
    2824: `381`,
    2825: `381`,
    2826: `381`,
    2827: `381`,
    2828: `381`,
    2829: `381`,
    283: `107`,
    2830: `381`,
    2831: `381`,
    2832: `381`,
    2833: `381`,
    2834: `381`,
    2835: `381`,
    2836: `381`,
    2837: `381`,
    2838: `381`,
    2839: `381`,
    284: `107`,
    2840: `381`,
    2841: `381`,
    2842: `381`,
    2843: `381`,
    2844: `381`,
    2845: `381`,
    2846: `381`,
    2847: `381`,
    2848: `381`,
    2849: `381`,
    285: `108`,
    2850: `381`,
    2851: `381`,
    2852: `381`,
    2853: `381`,
    2854: `381`,
    2855: `381`,
    2856: `381`,
    2857: `381`,
    2858: `381`,
    2859: `381`,
    286: `108`,
    2860: `381`,
    2861: `381`,
    2862: `381`,
    2863: `381`,
    2864: `381`,
    2865: `381`,
    2866: `381`,
    2867: `381`,
    2868: `381`,
    2869: `381`,
    287: `109`,
    2870: `381`,
    2871: `381`,
    2872: `381`,
    2873: `381`,
    2874: `381`,
    2875: `381`,
    2876: `381`,
    2877: `381`,
    2878: `381`,
    2879: `381`,
    288: `110`,
    2880: `381`,
    2881: `381`,
    2882: `381`,
    2883: `381`,
    2884: `381`,
    2885: `381`,
    2886: `381`,
    2887: `381`,
    2888: `381`,
    2889: `381`,
    289: `110`,
    2890: `381`,
    2891: `381`,
    2892: `381`,
    2893: `381`,
    2894: `381`,
    2895: `381`,
    2896: `381`,
    2897: `381`,
    2898: `381`,
    2899: `381`,
    29: `7`,
    290: `111`,
    2900: `381`,
    2901: `381`,
    2902: `381`,
    2903: `381`,
    2904: `381`,
    2905: `381`,
    2906: `381`,
    2907: `381`,
    2908: `381`,
    2909: `381`,
    291: `112`,
    2910: `381`,
    2911: `381`,
    2912: `381`,
    2913: `381`,
    2914: `381`,
    2915: `381`,
    2916: `381`,
    2917: `381`,
    2918: `381`,
    2919: `381`,
    292: `113`,
    2920: `381`,
    2921: `381`,
    2922: `381`,
    2923: `381`,
    2924: `381`,
    2925: `381`,
    2926: `381`,
    2927: `381`,
    2928: `381`,
    2929: `381`,
    293: `114`,
    2930: `381`,
    2931: `381`,
    2932: `381`,
    2933: `381`,
    2934: `381`,
    2935: `381`,
    2936: `381`,
    2937: `381`,
    2938: `381`,
    2939: `381`,
    294: `114`,
    2940: `381`,
    2941: `381`,
    2942: `381`,
    2943: `381`,
    2944: `381`,
    2945: `381`,
    2946: `381`,
    2947: `381`,
    2948: `381`,
    2949: `381`,
    295: `115`,
    2950: `381`,
    2951: `381`,
    2952: `381`,
    2953: `381`,
    2954: `381`,
    2955: `381`,
    2956: `381`,
    2957: `381`,
    2958: `381`,
    2959: `381`,
    296: `115`,
    2960: `381`,
    2961: `381`,
    2962: `381`,
    2963: `381`,
    2964: `381`,
    2965: `381`,
    2966: `381`,
    2967: `381`,
    2968: `381`,
    2969: `381`,
    297: `115`,
    2970: `381`,
    2971: `381`,
    2972: `381`,
    2973: `381`,
    2974: `381`,
    2975: `381`,
    2976: `381`,
    2977: `381`,
    2978: `381`,
    2979: `381`,
    298: `117`,
    2980: `381`,
    2981: `381`,
    2982: `381`,
    2983: `381`,
    2984: `381`,
    2985: `381`,
    2986: `381`,
    2987: `381`,
    2988: `381`,
    2989: `381`,
    299: `117`,
    2990: `381`,
    2991: `381`,
    2992: `381`,
    2993: `381`,
    2994: `381`,
    2995: `381`,
    2996: `381`,
    2997: `381`,
    2998: `381`,
    2999: `381`,
    3: `2`,
    30: `8`,
    300: `117`,
    3000: `381`,
    3001: `381`,
    3002: `381`,
    3003: `381`,
    3004: `381`,
    3005: `381`,
    3006: `381`,
    3007: `381`,
    3008: `381`,
    3009: `381`,
    301: `118`,
    3010: `381`,
    3011: `381`,
    3012: `381`,
    3013: `381`,
    3014: `381`,
    3015: `381`,
    3016: `381`,
    3017: `381`,
    3018: `381`,
    3019: `381`,
    302: `118`,
    3020: `381`,
    3021: `381`,
    3022: `381`,
    3023: `381`,
    3024: `381`,
    3025: `381`,
    3026: `381`,
    3027: `381`,
    3028: `381`,
    3029: `381`,
    303: `120`,
    3030: `381`,
    3031: `381`,
    3032: `381`,
    3033: `381`,
    3034: `381`,
    3035: `381`,
    3036: `381`,
    3037: `381`,
    3038: `381`,
    3039: `381`,
    304: `121`,
    3040: `381`,
    3041: `381`,
    3042: `381`,
    3043: `381`,
    3044: `381`,
    3045: `381`,
    3046: `381`,
    3047: `381`,
    3048: `381`,
    3049: `381`,
    305: `122`,
    3050: `381`,
    3051: `381`,
    3052: `381`,
    3053: `381`,
    3054: `381`,
    3055: `381`,
    3056: `381`,
    3057: `381`,
    3058: `381`,
    3059: `381`,
    306: `122`,
    3060: `381`,
    3061: `381`,
    3062: `381`,
    3063: `381`,
    3064: `381`,
    3065: `381`,
    3066: `381`,
    3067: `381`,
    3068: `381`,
    3069: `381`,
    307: `122`,
    3070: `381`,
    3071: `381`,
    3072: `381`,
    3073: `381`,
    3074: `381`,
    3075: `381`,
    3076: `381`,
    3077: `381`,
    3078: `381`,
    3079: `381`,
    308: `123`,
    3080: `381`,
    3081: `381`,
    3082: `381`,
    3083: `381`,
    3084: `381`,
    3085: `381`,
    3086: `381`,
    3087: `381`,
    3088: `381`,
    3089: `381`,
    309: `123`,
    3090: `381`,
    3091: `381`,
    3092: `381`,
    3093: `381`,
    3094: `381`,
    3095: `381`,
    3096: `381`,
    3097: `381`,
    3098: `381`,
    3099: `381`,
    31: `9`,
    310: `124`,
    3100: `381`,
    3101: `381`,
    3102: `381`,
    3103: `381`,
    3104: `381`,
    3105: `381`,
    3106: `381`,
    3107: `381`,
    3108: `381`,
    3109: `381`,
    311: `125`,
    3110: `381`,
    3111: `381`,
    3112: `381`,
    3113: `381`,
    3114: `381`,
    3115: `381`,
    3116: `381`,
    3117: `381`,
    3118: `381`,
    3119: `381`,
    312: `125`,
    3120: `381`,
    3121: `381`,
    3122: `381`,
    3123: `381`,
    3124: `381`,
    3125: `381`,
    3126: `381`,
    3127: `381`,
    3128: `381`,
    3129: `381`,
    313: `126`,
    3130: `381`,
    3131: `381`,
    3132: `381`,
    3133: `381`,
    3134: `381`,
    3135: `381`,
    3136: `381`,
    3137: `381`,
    3138: `381`,
    3139: `381`,
    314: `127`,
    3140: `381`,
    3141: `381`,
    3142: `381`,
    3143: `381`,
    3144: `381`,
    3145: `381`,
    3146: `381`,
    3147: `381`,
    3148: `381`,
    3149: `381`,
    315: `128`,
    3150: `381`,
    3151: `381`,
    3152: `381`,
    3153: `381`,
    3154: `381`,
    3155: `381`,
    3156: `381`,
    3157: `381`,
    3158: `381`,
    3159: `381`,
    316: `129`,
    3160: `381`,
    3161: `381`,
    3162: `381`,
    3163: `381`,
    3164: `381`,
    3165: `381`,
    3166: `381`,
    3167: `381`,
    3168: `381`,
    3169: `381`,
    317: `129`,
    3170: `381`,
    3171: `381`,
    3172: `381`,
    3173: `381`,
    3174: `381`,
    3175: `381`,
    3176: `381`,
    3177: `381`,
    3178: `381`,
    3179: `381`,
    318: `130`,
    3180: `381`,
    3181: `381`,
    3182: `381`,
    3183: `381`,
    3184: `381`,
    3185: `381`,
    3186: `381`,
    3187: `381`,
    3188: `381`,
    3189: `381`,
    319: `130`,
    3190: `381`,
    3191: `381`,
    3192: `381`,
    3193: `381`,
    3194: `381`,
    3195: `381`,
    3196: `381`,
    3197: `381`,
    3198: `381`,
    3199: `381`,
    32: `10`,
    320: `130`,
    3200: `381`,
    3201: `381`,
    3202: `381`,
    3203: `381`,
    3204: `381`,
    3205: `381`,
    3206: `381`,
    3207: `381`,
    3208: `381`,
    3209: `381`,
    321: `132`,
    3210: `381`,
    3211: `381`,
    3212: `381`,
    3213: `381`,
    3214: `381`,
    3215: `381`,
    3216: `381`,
    3217: `381`,
    3218: `381`,
    3219: `381`,
    322: `132`,
    3220: `381`,
    3221: `381`,
    3222: `381`,
    3223: `381`,
    3224: `381`,
    3225: `381`,
    3226: `381`,
    3227: `381`,
    3228: `381`,
    3229: `381`,
    323: `132`,
    3230: `381`,
    3231: `381`,
    3232: `381`,
    3233: `381`,
    3234: `381`,
    3235: `381`,
    3236: `381`,
    3237: `381`,
    3238: `381`,
    3239: `381`,
    324: `133`,
    3240: `381`,
    3241: `381`,
    3242: `381`,
    3243: `381`,
    3244: `381`,
    3245: `381`,
    3246: `381`,
    3247: `381`,
    3248: `381`,
    3249: `381`,
    325: `133`,
    3250: `381`,
    3251: `381`,
    3252: `381`,
    3253: `381`,
    3254: `381`,
    3255: `381`,
    3256: `381`,
    3257: `381`,
    3258: `381`,
    3259: `381`,
    326: `135`,
    3260: `381`,
    3261: `381`,
    3262: `381`,
    3263: `381`,
    3264: `381`,
    3265: `381`,
    3266: `381`,
    3267: `381`,
    3268: `381`,
    3269: `381`,
    327: `136`,
    3270: `381`,
    3271: `381`,
    3272: `381`,
    3273: `381`,
    3274: `381`,
    3275: `381`,
    3276: `381`,
    3277: `381`,
    3278: `381`,
    3279: `381`,
    328: `137`,
    3280: `381`,
    3281: `381`,
    3282: `381`,
    3283: `381`,
    3284: `381`,
    3285: `381`,
    3286: `381`,
    3287: `381`,
    3288: `381`,
    3289: `381`,
    329: `137`,
    3290: `381`,
    3291: `381`,
    3292: `381`,
    3293: `381`,
    3294: `381`,
    3295: `381`,
    3296: `381`,
    3297: `381`,
    3298: `381`,
    3299: `381`,
    33: `11`,
    330: `137`,
    3300: `381`,
    3301: `381`,
    3302: `381`,
    3303: `381`,
    3304: `381`,
    3305: `381`,
    3306: `381`,
    3307: `381`,
    3308: `381`,
    3309: `381`,
    331: `138`,
    3310: `381`,
    3311: `381`,
    3312: `381`,
    3313: `381`,
    3314: `381`,
    3315: `381`,
    3316: `381`,
    3317: `381`,
    3318: `381`,
    3319: `381`,
    332: `138`,
    3320: `381`,
    3321: `381`,
    3322: `381`,
    3323: `381`,
    3324: `381`,
    3325: `381`,
    3326: `381`,
    3327: `381`,
    3328: `381`,
    3329: `381`,
    333: `139`,
    3330: `381`,
    3331: `381`,
    3332: `381`,
    3333: `381`,
    3334: `381`,
    3335: `381`,
    3336: `381`,
    3337: `381`,
    3338: `381`,
    3339: `381`,
    334: `140`,
    3340: `381`,
    3341: `381`,
    3342: `381`,
    3343: `381`,
    3344: `381`,
    3345: `381`,
    3346: `381`,
    3347: `381`,
    3348: `381`,
    3349: `381`,
    335: `141`,
    3350: `381`,
    3351: `381`,
    3352: `381`,
    3353: `381`,
    3354: `381`,
    3355: `381`,
    3356: `381`,
    3357: `381`,
    3358: `381`,
    3359: `381`,
    336: `142`,
    3360: `381`,
    3361: `381`,
    3362: `381`,
    3363: `381`,
    3364: `381`,
    3365: `381`,
    3366: `381`,
    3367: `381`,
    3368: `381`,
    3369: `381`,
    337: `143`,
    3370: `381`,
    3371: `381`,
    3372: `381`,
    3373: `381`,
    3374: `381`,
    3375: `381`,
    3376: `381`,
    3377: `381`,
    3378: `381`,
    3379: `381`,
    338: `143`,
    3380: `381`,
    3381: `381`,
    3382: `381`,
    3383: `381`,
    3384: `381`,
    3385: `381`,
    3386: `381`,
    3387: `381`,
    3388: `381`,
    3389: `381`,
    339: `144`,
    3390: `381`,
    3391: `381`,
    3392: `381`,
    3393: `381`,
    3394: `381`,
    3395: `381`,
    3396: `381`,
    3397: `381`,
    3398: `381`,
    3399: `381`,
    34: `11`,
    340: `144`,
    3400: `381`,
    3401: `381`,
    3402: `381`,
    3403: `381`,
    3404: `381`,
    3405: `381`,
    3406: `381`,
    3407: `381`,
    3408: `381`,
    3409: `381`,
    341: `144`,
    3410: `381`,
    3411: `381`,
    3412: `381`,
    3413: `381`,
    3414: `381`,
    3415: `381`,
    3416: `381`,
    3417: `381`,
    3418: `381`,
    3419: `381`,
    342: `147`,
    3420: `381`,
    3421: `381`,
    3422: `381`,
    3423: `381`,
    3424: `381`,
    3425: `381`,
    3426: `381`,
    3427: `381`,
    3428: `381`,
    3429: `381`,
    343: `147`,
    3430: `381`,
    3431: `381`,
    3432: `381`,
    3433: `381`,
    3434: `381`,
    3435: `381`,
    3436: `381`,
    3437: `381`,
    3438: `381`,
    3439: `381`,
    344: `147`,
    3440: `381`,
    3441: `381`,
    3442: `381`,
    3443: `381`,
    3444: `381`,
    3445: `381`,
    3446: `381`,
    3447: `381`,
    3448: `381`,
    3449: `381`,
    345: `147`,
    3450: `381`,
    3451: `381`,
    3452: `381`,
    3453: `381`,
    3454: `381`,
    3455: `381`,
    3456: `381`,
    3457: `381`,
    3458: `381`,
    3459: `381`,
    346: `147`,
    3460: `381`,
    3461: `381`,
    3462: `381`,
    3463: `381`,
    3464: `381`,
    3465: `381`,
    3466: `381`,
    3467: `381`,
    3468: `381`,
    3469: `381`,
    347: `147`,
    3470: `381`,
    3471: `381`,
    3472: `381`,
    3473: `381`,
    3474: `381`,
    3475: `381`,
    3476: `381`,
    3477: `381`,
    3478: `381`,
    3479: `381`,
    348: `147`,
    3480: `381`,
    3481: `381`,
    3482: `381`,
    3483: `381`,
    3484: `381`,
    3485: `381`,
    3486: `381`,
    3487: `381`,
    3488: `381`,
    3489: `381`,
    349: `147`,
    3490: `381`,
    3491: `381`,
    3492: `381`,
    3493: `381`,
    3494: `381`,
    3495: `381`,
    3496: `381`,
    3497: `381`,
    3498: `381`,
    3499: `381`,
    35: `12`,
    350: `147`,
    3500: `381`,
    3501: `381`,
    3502: `381`,
    3503: `381`,
    3504: `381`,
    3505: `381`,
    3506: `381`,
    3507: `381`,
    3508: `381`,
    3509: `381`,
    351: `147`,
    3510: `381`,
    3511: `381`,
    3512: `381`,
    3513: `381`,
    3514: `381`,
    3515: `381`,
    3516: `381`,
    3517: `381`,
    3518: `381`,
    3519: `381`,
    352: `147`,
    3520: `381`,
    3521: `381`,
    3522: `381`,
    3523: `381`,
    3524: `381`,
    3525: `381`,
    3526: `381`,
    3527: `381`,
    3528: `381`,
    3529: `381`,
    353: `147`,
    3530: `381`,
    3531: `381`,
    3532: `381`,
    3533: `381`,
    3534: `381`,
    3535: `381`,
    3536: `381`,
    3537: `381`,
    3538: `381`,
    3539: `381`,
    354: `147`,
    3540: `381`,
    3541: `381`,
    3542: `381`,
    3543: `381`,
    3544: `381`,
    3545: `381`,
    3546: `381`,
    3547: `381`,
    3548: `381`,
    3549: `381`,
    355: `147`,
    3550: `381`,
    3551: `381`,
    3552: `381`,
    3553: `381`,
    3554: `381`,
    3555: `381`,
    3556: `381`,
    3557: `381`,
    3558: `381`,
    3559: `381`,
    356: `147`,
    3560: `381`,
    3561: `381`,
    3562: `381`,
    3563: `381`,
    3564: `381`,
    3565: `381`,
    3566: `381`,
    3567: `381`,
    3568: `381`,
    3569: `381`,
    357: `147`,
    3570: `381`,
    3571: `381`,
    3572: `381`,
    3573: `381`,
    3574: `381`,
    3575: `381`,
    3576: `381`,
    3577: `381`,
    3578: `381`,
    3579: `381`,
    358: `147`,
    3580: `381`,
    3581: `381`,
    3582: `381`,
    3583: `381`,
    3584: `381`,
    3585: `381`,
    3586: `381`,
    3587: `381`,
    3588: `381`,
    3589: `381`,
    359: `147`,
    3590: `381`,
    3591: `381`,
    3592: `381`,
    3593: `381`,
    3594: `381`,
    3595: `381`,
    3596: `381`,
    3597: `381`,
    3598: `381`,
    3599: `381`,
    36: `13`,
    360: `147`,
    3600: `381`,
    3601: `381`,
    3602: `381`,
    3603: `381`,
    3604: `381`,
    3605: `381`,
    3606: `381`,
    3607: `381`,
    3608: `381`,
    3609: `381`,
    361: `147`,
    3610: `381`,
    3611: `381`,
    3612: `381`,
    3613: `381`,
    3614: `381`,
    3615: `381`,
    3616: `381`,
    3617: `381`,
    3618: `381`,
    3619: `381`,
    362: `147`,
    3620: `381`,
    3621: `381`,
    3622: `381`,
    3623: `381`,
    3624: `381`,
    3625: `381`,
    3626: `381`,
    3627: `381`,
    3628: `381`,
    3629: `381`,
    363: `147`,
    3630: `381`,
    3631: `381`,
    3632: `381`,
    3633: `381`,
    3634: `381`,
    3635: `381`,
    3636: `381`,
    3637: `381`,
    3638: `381`,
    3639: `381`,
    364: `147`,
    3640: `381`,
    3641: `381`,
    3642: `381`,
    3643: `381`,
    3644: `381`,
    3645: `381`,
    3646: `381`,
    3647: `381`,
    3648: `381`,
    3649: `381`,
    365: `147`,
    3650: `381`,
    3651: `381`,
    3652: `381`,
    3653: `381`,
    3654: `381`,
    3655: `381`,
    3656: `381`,
    3657: `381`,
    3658: `381`,
    3659: `381`,
    366: `147`,
    3660: `381`,
    3661: `381`,
    3662: `381`,
    3663: `381`,
    3664: `381`,
    3665: `381`,
    3666: `381`,
    3667: `381`,
    3668: `381`,
    3669: `381`,
    367: `147`,
    3670: `381`,
    3671: `381`,
    3672: `381`,
    3673: `381`,
    3674: `381`,
    3675: `381`,
    3676: `381`,
    3677: `381`,
    3678: `381`,
    3679: `381`,
    368: `147`,
    3680: `381`,
    3681: `381`,
    3682: `381`,
    3683: `381`,
    3684: `381`,
    3685: `381`,
    3686: `381`,
    3687: `381`,
    3688: `381`,
    3689: `381`,
    369: `147`,
    3690: `381`,
    3691: `381`,
    3692: `381`,
    3693: `381`,
    3694: `381`,
    3695: `381`,
    3696: `381`,
    3697: `381`,
    3698: `381`,
    3699: `381`,
    37: `14`,
    370: `147`,
    3700: `381`,
    3701: `381`,
    3702: `381`,
    3703: `381`,
    3704: `381`,
    3705: `381`,
    3706: `381`,
    3707: `381`,
    3708: `381`,
    3709: `381`,
    371: `147`,
    3710: `381`,
    3711: `381`,
    3712: `381`,
    3713: `381`,
    3714: `381`,
    3715: `381`,
    3716: `381`,
    3717: `381`,
    3718: `381`,
    3719: `381`,
    372: `147`,
    3720: `381`,
    3721: `381`,
    3722: `381`,
    3723: `381`,
    3724: `381`,
    3725: `381`,
    3726: `381`,
    3727: `381`,
    3728: `381`,
    3729: `381`,
    373: `147`,
    3730: `381`,
    3731: `381`,
    3732: `381`,
    3733: `381`,
    3734: `381`,
    3735: `381`,
    3736: `381`,
    3737: `381`,
    3738: `381`,
    3739: `381`,
    374: `147`,
    3740: `381`,
    3741: `381`,
    3742: `381`,
    3743: `381`,
    3744: `381`,
    3745: `381`,
    3746: `381`,
    3747: `381`,
    3748: `381`,
    3749: `381`,
    375: `147`,
    3750: `381`,
    3751: `381`,
    3752: `381`,
    3753: `381`,
    3754: `381`,
    3755: `381`,
    3756: `381`,
    3757: `381`,
    3758: `381`,
    3759: `381`,
    376: `147`,
    3760: `381`,
    3761: `381`,
    3762: `381`,
    3763: `381`,
    3764: `381`,
    3765: `381`,
    3766: `381`,
    3767: `381`,
    3768: `381`,
    3769: `381`,
    377: `147`,
    3770: `381`,
    3771: `381`,
    3772: `381`,
    3773: `381`,
    3774: `381`,
    3775: `381`,
    3776: `381`,
    3777: `381`,
    3778: `381`,
    3779: `381`,
    378: `147`,
    3780: `381`,
    3781: `381`,
    3782: `381`,
    3783: `381`,
    3784: `381`,
    3785: `382`,
    3786: `382`,
    3787: `383`,
    3788: `384`,
    3789: `384`,
    379: `147`,
    3790: `385`,
    3791: `385`,
    3792: `386`,
    3793: `386`,
    3794: `387`,
    3795: `388`,
    3796: `388`,
    3797: `389`,
    3798: `390`,
    3799: `391`,
    38: `14`,
    380: `147`,
    3800: `391`,
    3801: `392`,
    3802: `393`,
    3803: `393`,
    3804: `394`,
    3805: `394`,
    3806: `395`,
    3807: `395`,
    3808: `395`,
    3809: `395`,
    381: `147`,
    3810: `395`,
    3811: `395`,
    3812: `395`,
    3813: `395`,
    3814: `395`,
    3815: `395`,
    3816: `396`,
    3817: `396`,
    3818: `397`,
    3819: `398`,
    382: `147`,
    3820: `399`,
    3821: `400`,
    3822: `400`,
    3823: `401`,
    3824: `401`,
    3825: `402`,
    3826: `402`,
    3827: `402`,
    3828: `402`,
    3829: `402`,
    383: `147`,
    3830: `402`,
    3831: `403`,
    3832: `403`,
    3833: `404`,
    3834: `405`,
    3835: `406`,
    3836: `408`,
    3837: `408`,
    3838: `408`,
    3839: `408`,
    384: `147`,
    3840: `408`,
    3841: `408`,
    3842: `408`,
    3843: `408`,
    3844: `408`,
    3845: `408`,
    3846: `409`,
    3847: `409`,
    3848: `410`,
    3849: `411`,
    385: `147`,
    3850: `412`,
    3851: `413`,
    3852: `413`,
    3853: `414`,
    3854: `415`,
    3855: `415`,
    3856: `416`,
    3857: `416`,
    3858: `417`,
    3859: `417`,
    386: `147`,
    3860: `418`,
    3861: `418`,
    3862: `418`,
    3863: `420`,
    3864: `420`,
    3865: `421`,
    3866: `421`,
    3867: `422`,
    3868: `423`,
    3869: `430`,
    387: `147`,
    3870: `431`,
    3871: `431`,
    3872: `431`,
    3873: `434`,
    3874: `434`,
    3875: `435`,
    3876: `436`,
    3877: `437`,
    3878: `437`,
    3879: `438`,
    388: `147`,
    3880: `438`,
    3881: `438`,
    3882: `438`,
    3883: `438`,
    3884: `438`,
    3885: `438`,
    3886: `439`,
    3887: `439`,
    3888: `440`,
    3889: `441`,
    389: `147`,
    3890: `442`,
    3891: `443`,
    3892: `443`,
    3893: `444`,
    3894: `444`,
    3895: `445`,
    3896: `446`,
    3897: `446`,
    3898: `447`,
    3899: `448`,
    39: `15`,
    390: `147`,
    3900: `448`,
    3901: `449`,
    3902: `450`,
    3903: `450`,
    3904: `451`,
    3905: `452`,
    3906: `453`,
    3907: `454`,
    3908: `455`,
    3909: `455`,
    391: `147`,
    3910: `456`,
    3911: `457`,
    3912: `457`,
    3913: `458`,
    3914: `458`,
    3915: `458`,
    3916: `459`,
    3917: `460`,
    3918: `461`,
    3919: `461`,
    392: `147`,
    3920: `462`,
    3921: `462`,
    3922: `463`,
    3923: `463`,
    3924: `464`,
    3925: `464`,
    3926: `466`,
    3927: `466`,
    3928: `467`,
    3929: `467`,
    393: `147`,
    3930: `467`,
    3931: `467`,
    3932: `467`,
    3933: `467`,
    3934: `468`,
    3935: `468`,
    3936: `469`,
    3937: `470`,
    3938: `471`,
    3939: `471`,
    394: `147`,
    3940: `472`,
    3941: `476`,
    3942: `476`,
    3943: `477`,
    3944: `478`,
    3945: `478`,
    3946: `479`,
    3947: `480`,
    3948: `480`,
    3949: `481`,
    395: `147`,
    3950: `482`,
    3951: `483`,
    3952: `484`,
    3953: `484`,
    3954: `484`,
    3955: `485`,
    3956: `485`,
    3957: `485`,
    3958: `486`,
    3959: `487`,
    396: `147`,
    3960: `487`,
    3961: `488`,
    3962: `488`,
    3963: `488`,
    3964: `488`,
    3965: `488`,
    3966: `488`,
    3967: `488`,
    3968: `488`,
    3969: `488`,
    397: `147`,
    3970: `488`,
    3971: `489`,
    3972: `489`,
    3973: `490`,
    3974: `491`,
    3975: `492`,
    3976: `492`,
    3977: `493`,
    3978: `494`,
    3979: `494`,
    398: `147`,
    3980: `495`,
    3981: `496`,
    3982: `497`,
    3983: `497`,
    3984: `498`,
    3985: `499`,
    3986: `499`,
    3987: `500`,
    3988: `501`,
    3989: `505`,
    399: `147`,
    3990: `505`,
    3991: `505`,
    3992: `505`,
    3993: `505`,
    3994: `505`,
    3995: `506`,
    3996: `506`,
    3997: `507`,
    3998: `508`,
    3999: `509`,
    4: `2`,
    40: `16`,
    400: `147`,
    4000: `511`,
    4001: `512`,
    4002: `512`,
    4003: `513`,
    4004: `513`,
    4005: `513`,
    4006: `513`,
    4007: `513`,
    4008: `513`,
    4009: `513`,
    401: `147`,
    4010: `513`,
    4011: `513`,
    4012: `513`,
    4013: `514`,
    4014: `514`,
    4015: `515`,
    4016: `516`,
    4017: `516`,
    4018: `516`,
    4019: `517`,
    402: `147`,
    4020: `518`,
    4021: `519`,
    4022: `519`,
    4023: `520`,
    4024: `521`,
    4025: `521`,
    4026: `521`,
    4027: `522`,
    4028: `522`,
    4029: `523`,
    403: `147`,
    4030: `523`,
    4031: `524`,
    4032: `524`,
    4033: `525`,
    4034: `526`,
    4035: `527`,
    4036: `528`,
    4037: `529`,
    4038: `529`,
    4039: `530`,
    404: `147`,
    4040: `531`,
    4041: `531`,
    4042: `532`,
    4043: `532`,
    4044: `533`,
    4045: `533`,
    4046: `533`,
    4047: `535`,
    4048: `535`,
    4049: `536`,
    405: `147`,
    4050: `537`,
    4051: `537`,
    4052: `538`,
    4053: `539`,
    4054: `540`,
    4055: `540`,
    4056: `541`,
    4057: `543`,
    4058: `544`,
    4059: `544`,
    406: `147`,
    4060: `546`,
    4061: `546`,
    4062: `547`,
    4063: `547`,
    4064: `547`,
    4065: `548`,
    4066: `549`,
    4067: `549`,
    4068: `550`,
    4069: `550`,
    407: `147`,
    4070: `550`,
    4071: `550`,
    4072: `550`,
    4073: `550`,
    4074: `550`,
    4075: `550`,
    4076: `550`,
    4077: `550`,
    4078: `551`,
    4079: `551`,
    408: `147`,
    4080: `552`,
    4081: `553`,
    4082: `553`,
    4083: `553`,
    4084: `554`,
    4085: `555`,
    4086: `556`,
    4087: `556`,
    4088: `557`,
    4089: `558`,
    409: `147`,
    4090: `558`,
    4091: `558`,
    4092: `559`,
    4093: `559`,
    4094: `560`,
    4095: `560`,
    4096: `561`,
    4097: `561`,
    4098: `562`,
    4099: `562`,
    41: `18`,
    410: `147`,
    4100: `563`,
    4101: `564`,
    4102: `564`,
    4103: `565`,
    4104: `566`,
    4105: `566`,
    4106: `567`,
    4107: `567`,
    4108: `568`,
    4109: `568`,
    411: `147`,
    4110: `568`,
    4111: `570`,
    4112: `570`,
    4113: `571`,
    4114: `571`,
    4115: `572`,
    4116: `572`,
    4117: `573`,
    4118: `574`,
    4119: `574`,
    412: `147`,
    4120: `575`,
    4121: `575`,
    4122: `575`,
    4123: `575`,
    4124: `575`,
    4125: `575`,
    4126: `576`,
    4127: `576`,
    4128: `577`,
    4129: `578`,
    413: `147`,
    4130: `579`,
    4131: `581`,
    4132: `581`,
    4133: `582`,
    4134: `582`,
    4135: `582`,
    4136: `583`,
    4137: `584`,
    4138: `584`,
    4139: `585`,
    414: `147`,
    4140: `586`,
    4141: `586`,
    4142: `587`,
    4143: `587`,
    4144: `588`,
    4145: `588`,
    4146: `589`,
    4147: `589`,
    4148: `589`,
    4149: `591`,
    415: `147`,
    4150: `591`,
    4151: `591`,
    4152: `592`,
    4153: `593`,
    4154: `593`,
    4155: `593`,
    4156: `594`,
    4157: `594`,
    4158: `594`,
    4159: `595`,
    416: `147`,
    4160: `595`,
    4161: `596`,
    4162: `596`,
    4163: `596`,
    4164: `598`,
    4165: `598`,
    4166: `598`,
    4167: `599`,
    4168: `599`,
    4169: `599`,
    417: `147`,
    4170: `600`,
    4171: `600`,
    4172: `601`,
    4173: `601`,
    4174: `601`,
    4175: `603`,
    4176: `604`,
    4177: `604`,
    4178: `605`,
    4179: `606`,
    418: `147`,
    4180: `607`,
    4181: `607`,
    4182: `608`,
    4183: `608`,
    4184: `609`,
    4185: `610`,
    4186: `611`,
    4187: `612`,
    4188: `612`,
    4189: `613`,
    419: `147`,
    4190: `614`,
    4191: `615`,
    4192: `616`,
    4193: `616`,
    4194: `617`,
    4195: `618`,
    4196: `619`,
    4197: `619`,
    4198: `619`,
    4199: `620`,
    42: `18`,
    420: `147`,
    4200: `620`,
    4201: `621`,
    4202: `622`,
    4203: `623`,
    4204: `625`,
    4205: `625`,
    4206: `626`,
    4207: `626`,
    4208: `627`,
    4209: `628`,
    421: `147`,
    4210: `629`,
    4211: `629`,
    4212: `629`,
    4213: `630`,
    4214: `631`,
    4215: `632`,
    4216: `632`,
    4217: `633`,
    4218: `634`,
    4219: `634`,
    422: `147`,
    4220: `635`,
    4221: `636`,
    4222: `637`,
    4223: `638`,
    4224: `638`,
    4225: `639`,
    4226: `640`,
    4227: `641`,
    4228: `643`,
    4229: `643`,
    423: `147`,
    4230: `643`,
    4231: `644`,
    4232: `644`,
    4233: `644`,
    4234: `646`,
    4235: `646`,
    4236: `647`,
    4237: `648`,
    4238: `649`,
    4239: `651`,
    424: `147`,
    4240: `651`,
    4241: `651`,
    4242: `653`,
    4243: `653`,
    4244: `653`,
    4245: `655`,
    4246: `655`,
    4247: `655`,
    4248: `657`,
    4249: `657`,
    425: `147`,
    4250: `657`,
    4251: `659`,
    4252: `659`,
    4253: `659`,
    4254: `662`,
    4255: `662`,
    4256: `663`,
    4257: `663`,
    4258: `664`,
    4259: `665`,
    426: `147`,
    4260: `665`,
    4261: `666`,
    4262: `667`,
    4263: `668`,
    4264: `668`,
    4265: `669`,
    4266: `669`,
    4267: `670`,
    4268: `670`,
    4269: `670`,
    427: `147`,
    4270: `672`,
    4271: `673`,
    4272: `673`,
    4273: `674`,
    4274: `675`,
    4275: `675`,
    4276: `676`,
    4277: `676`,
    4278: `677`,
    4279: `677`,
    428: `147`,
    4280: `678`,
    4281: `680`,
    4282: `681`,
    4283: `681`,
    4284: `682`,
    4285: `683`,
    4286: `683`,
    4287: `684`,
    4288: `684`,
    4289: `685`,
    429: `147`,
    4290: `685`,
    4291: `686`,
    4292: `687`,
    4293: `689`,
    4294: `689`,
    4295: `689`,
    4296: `691`,
    4297: `691`,
    4298: `691`,
    4299: `693`,
    43: `18`,
    430: `147`,
    4300: `693`,
    4301: `693`,
    4302: `695`,
    4303: `695`,
    4304: `695`,
    4305: `697`,
    4306: `697`,
    4307: `697`,
    4308: `699`,
    4309: `699`,
    431: `147`,
    4310: `699`,
    4311: `701`,
    4312: `702`,
    4313: `704`,
    4314: `705`,
    4315: `706`,
    4316: `707`,
    4317: `707`,
    4318: `708`,
    4319: `708`,
    432: `147`,
    4320: `709`,
    4321: `709`,
    4322: `709`,
    4323: `710`,
    4324: `712`,
    4325: `713`,
    4326: `714`,
    4327: `714`,
    4328: `714`,
    4329: `715`,
    433: `147`,
    4330: `716`,
    4331: `716`,
    4332: `717`,
    4333: `717`,
    4334: `717`,
    4335: `718`,
    4336: `720`,
    4337: `721`,
    4338: `721`,
    4339: `722`,
    434: `148`,
    4340: `724`,
    4341: `725`,
    4342: `726`,
    4343: `727`,
    4344: `728`,
    4345: `728`,
    4346: `729`,
    4347: `730`,
    4348: `731`,
    4349: `732`,
    435: `148`,
    4350: `734`,
    4351: `734`,
    4352: `735`,
    4353: `735`,
    4354: `736`,
    4355: `737`,
    4356: `738`,
    4357: `738`,
    4358: `738`,
    4359: `739`,
    436: `149`,
    4360: `739`,
    4361: `739`,
    4362: `741`,
    4363: `741`,
    4364: `742`,
    4365: `743`,
    4366: `743`,
    4367: `744`,
    4368: `746`,
    4369: `747`,
    437: `149`,
    4370: `747`,
    4371: `747`,
    4372: `750`,
    4373: `750`,
    4374: `751`,
    4375: `751`,
    4376: `752`,
    4377: `753`,
    4378: `754`,
    4379: `755`,
    438: `149`,
    4380: `755`,
    4381: `756`,
    4382: `757`,
    4383: `757`,
    4384: `758`,
    4385: `758`,
    4386: `759`,
    4387: `759`,
    4388: `760`,
    4389: `761`,
    439: `152`,
    4390: `762`,
    4391: `762`,
    4392: `763`,
    4393: `764`,
    4394: `765`,
    4395: `766`,
    4396: `766`,
    4397: `767`,
    4398: `768`,
    4399: `769`,
    44: `18`,
    440: `152`,
    4400: `771`,
    4401: `772`,
    4402: `772`,
    4403: `773`,
    4404: `773`,
    4405: `773`,
    4406: `775`,
    4407: `776`,
    441: `152`,
    442: `152`,
    443: `152`,
    444: `152`,
    445: `152`,
    446: `152`,
    447: `152`,
    448: `152`,
    449: `152`,
    45: `18`,
    450: `152`,
    451: `152`,
    452: `152`,
    453: `152`,
    454: `152`,
    455: `152`,
    456: `152`,
    457: `152`,
    458: `152`,
    459: `152`,
    46: `18`,
    460: `152`,
    461: `152`,
    462: `152`,
    463: `152`,
    464: `152`,
    465: `152`,
    466: `152`,
    467: `152`,
    468: `152`,
    469: `152`,
    47: `18`,
    470: `152`,
    471: `152`,
    472: `152`,
    473: `152`,
    474: `152`,
    475: `152`,
    476: `152`,
    477: `152`,
    478: `152`,
    479: `152`,
    48: `18`,
    480: `152`,
    481: `152`,
    482: `152`,
    483: `152`,
    484: `152`,
    485: `152`,
    486: `152`,
    487: `152`,
    488: `152`,
    489: `152`,
    49: `18`,
    490: `152`,
    491: `152`,
    492: `152`,
    493: `152`,
    494: `152`,
    495: `152`,
    496: `152`,
    497: `152`,
    498: `152`,
    499: `152`,
    5: `2`,
    50: `18`,
    500: `152`,
    501: `152`,
    502: `152`,
    503: `152`,
    504: `152`,
    505: `152`,
    506: `152`,
    507: `152`,
    508: `152`,
    509: `152`,
    51: `18`,
    510: `152`,
    511: `152`,
    512: `152`,
    513: `152`,
    514: `152`,
    515: `152`,
    516: `152`,
    517: `152`,
    518: `152`,
    519: `152`,
    52: `18`,
    520: `152`,
    521: `152`,
    522: `152`,
    523: `152`,
    524: `152`,
    525: `152`,
    526: `152`,
    527: `152`,
    528: `152`,
    529: `152`,
    53: `18`,
    530: `152`,
    531: `153`,
    532: `153`,
    533: `154`,
    534: `154`,
    535: `154`,
    536: `156`,
    537: `156`,
    538: `156`,
    539: `157`,
    54: `18`,
    540: `158`,
    541: `158`,
    542: `160`,
    543: `161`,
    544: `162`,
    545: `163`,
    546: `163`,
    547: `164`,
    548: `165`,
    549: `166`,
    55: `18`,
    550: `166`,
    551: `167`,
    552: `168`,
    553: `169`,
    554: `170`,
    555: `170`,
    556: `171`,
    557: `171`,
    558: `171`,
    559: `174`,
    56: `18`,
    560: `174`,
    561: `174`,
    562: `174`,
    563: `174`,
    564: `174`,
    565: `174`,
    566: `174`,
    567: `174`,
    568: `174`,
    569: `174`,
    57: `18`,
    570: `174`,
    571: `174`,
    572: `174`,
    573: `174`,
    574: `174`,
    575: `174`,
    576: `174`,
    577: `174`,
    578: `174`,
    579: `174`,
    58: `18`,
    580: `174`,
    581: `174`,
    582: `174`,
    583: `174`,
    584: `174`,
    585: `174`,
    586: `174`,
    587: `174`,
    588: `174`,
    589: `174`,
    59: `18`,
    590: `174`,
    591: `174`,
    592: `174`,
    593: `174`,
    594: `174`,
    595: `174`,
    596: `174`,
    597: `174`,
    598: `174`,
    599: `174`,
    6: `2`,
    60: `18`,
    600: `174`,
    601: `174`,
    602: `174`,
    603: `174`,
    604: `174`,
    605: `174`,
    606: `174`,
    607: `174`,
    608: `174`,
    609: `174`,
    61: `18`,
    610: `174`,
    611: `174`,
    612: `174`,
    613: `174`,
    614: `174`,
    615: `174`,
    616: `174`,
    617: `174`,
    618: `174`,
    619: `174`,
    62: `18`,
    620: `174`,
    621: `174`,
    622: `174`,
    623: `174`,
    624: `174`,
    625: `174`,
    626: `174`,
    627: `174`,
    628: `174`,
    629: `174`,
    63: `18`,
    630: `174`,
    631: `174`,
    632: `174`,
    633: `174`,
    634: `174`,
    635: `174`,
    636: `174`,
    637: `174`,
    638: `174`,
    639: `174`,
    64: `18`,
    640: `174`,
    641: `174`,
    642: `174`,
    643: `174`,
    644: `174`,
    645: `174`,
    646: `174`,
    647: `174`,
    648: `174`,
    649: `174`,
    65: `18`,
    650: `174`,
    651: `175`,
    652: `175`,
    653: `176`,
    654: `176`,
    655: `176`,
    656: `178`,
    657: `178`,
    658: `179`,
    659: `179`,
    66: `18`,
    660: `179`,
    661: `180`,
    662: `180`,
    663: `181`,
    664: `182`,
    665: `182`,
    666: `183`,
    667: `183`,
    668: `183`,
    669: `183`,
    67: `18`,
    670: `183`,
    671: `183`,
    672: `183`,
    673: `183`,
    674: `183`,
    675: `183`,
    676: `184`,
    677: `184`,
    678: `185`,
    679: `186`,
    68: `18`,
    680: `186`,
    681: `186`,
    682: `187`,
    683: `188`,
    684: `189`,
    685: `189`,
    686: `190`,
    687: `191`,
    688: `191`,
    689: `191`,
    69: `18`,
    690: `192`,
    691: `192`,
    692: `193`,
    693: `193`,
    694: `193`,
    695: `193`,
    696: `193`,
    697: `193`,
    698: `194`,
    699: `194`,
    7: `2`,
    70: `18`,
    700: `195`,
    701: `196`,
    702: `198`,
    703: `198`,
    704: `199`,
    705: `199`,
    706: `201`,
    707: `201`,
    708: `202`,
    709: `203`,
    71: `18`,
    710: `203`,
    711: `203`,
    712: `205`,
    713: `205`,
    714: `206`,
    715: `206`,
    716: `207`,
    717: `208`,
    718: `210`,
    719: `210`,
    72: `18`,
    720: `210`,
    721: `212`,
    722: `213`,
    723: `213`,
    724: `214`,
    725: `214`,
    726: `215`,
    727: `215`,
    728: `215`,
    729: `217`,
    73: `18`,
    730: `217`,
    731: `218`,
    732: `218`,
    733: `218`,
    734: `220`,
    735: `220`,
    736: `220`,
    737: `220`,
    738: `220`,
    739: `220`,
    74: `18`,
    740: `221`,
    741: `221`,
    742: `222`,
    743: `223`,
    744: `225`,
    745: `226`,
    746: `228`,
    747: `228`,
    748: `229`,
    749: `229`,
    75: `18`,
    750: `229`,
    751: `230`,
    752: `230`,
    753: `231`,
    754: `232`,
    755: `232`,
    756: `233`,
    757: `233`,
    758: `233`,
    759: `233`,
    76: `18`,
    760: `233`,
    761: `233`,
    762: `233`,
    763: `233`,
    764: `233`,
    765: `233`,
    766: `234`,
    767: `234`,
    768: `235`,
    769: `236`,
    77: `18`,
    770: `236`,
    771: `236`,
    772: `237`,
    773: `238`,
    774: `239`,
    775: `239`,
    776: `240`,
    777: `241`,
    778: `241`,
    779: `241`,
    78: `18`,
    780: `242`,
    781: `242`,
    782: `243`,
    783: `243`,
    784: `243`,
    785: `243`,
    786: `243`,
    787: `243`,
    788: `244`,
    789: `244`,
    79: `18`,
    790: `245`,
    791: `246`,
    792: `248`,
    793: `248`,
    794: `249`,
    795: `249`,
    796: `250`,
    797: `250`,
    798: `250`,
    799: `252`,
    8: `2`,
    80: `18`,
    800: `252`,
    801: `253`,
    802: `253`,
    803: `253`,
    804: `254`,
    805: `254`,
    806: `255`,
    807: `256`,
    808: `256`,
    809: `257`,
    81: `18`,
    810: `257`,
    811: `257`,
    812: `257`,
    813: `257`,
    814: `257`,
    815: `257`,
    816: `257`,
    817: `257`,
    818: `257`,
    819: `258`,
    82: `18`,
    820: `258`,
    821: `259`,
    822: `260`,
    823: `260`,
    824: `260`,
    825: `261`,
    826: `262`,
    827: `263`,
    828: `263`,
    829: `264`,
    83: `18`,
    830: `265`,
    831: `265`,
    832: `265`,
    833: `266`,
    834: `266`,
    835: `267`,
    836: `267`,
    837: `267`,
    838: `267`,
    839: `267`,
    84: `18`,
    840: `267`,
    841: `268`,
    842: `268`,
    843: `269`,
    844: `270`,
    845: `272`,
    846: `272`,
    847: `273`,
    848: `273`,
    849: `274`,
    85: `18`,
    850: `274`,
    851: `274`,
    852: `276`,
    853: `276`,
    854: `277`,
    855: `277`,
    856: `277`,
    857: `278`,
    858: `278`,
    859: `279`,
    86: `18`,
    860: `280`,
    861: `280`,
    862: `281`,
    863: `281`,
    864: `281`,
    865: `281`,
    866: `281`,
    867: `281`,
    868: `281`,
    869: `281`,
    87: `18`,
    870: `281`,
    871: `281`,
    872: `282`,
    873: `282`,
    874: `283`,
    875: `284`,
    876: `284`,
    877: `284`,
    878: `285`,
    879: `286`,
    88: `18`,
    880: `287`,
    881: `287`,
    882: `288`,
    883: `289`,
    884: `289`,
    885: `289`,
    886: `290`,
    887: `290`,
    888: `291`,
    889: `291`,
    89: `18`,
    890: `291`,
    891: `291`,
    892: `291`,
    893: `291`,
    894: `292`,
    895: `292`,
    896: `293`,
    897: `294`,
    898: `296`,
    899: `296`,
    9: `2`,
    90: `18`,
    900: `297`,
    901: `297`,
    902: `298`,
    903: `298`,
    904: `298`,
    905: `300`,
    906: `300`,
    907: `301`,
    908: `301`,
    909: `301`,
    91: `18`,
    910: `302`,
    911: `302`,
    912: `303`,
    913: `304`,
    914: `304`,
    915: `305`,
    916: `305`,
    917: `305`,
    918: `305`,
    919: `305`,
    92: `18`,
    920: `305`,
    921: `305`,
    922: `305`,
    923: `305`,
    924: `305`,
    925: `306`,
    926: `306`,
    927: `307`,
    928: `308`,
    929: `308`,
    93: `18`,
    930: `308`,
    931: `309`,
    932: `310`,
    933: `311`,
    934: `311`,
    935: `312`,
    936: `313`,
    937: `313`,
    938: `313`,
    939: `314`,
    94: `18`,
    940: `314`,
    941: `315`,
    942: `315`,
    943: `315`,
    944: `315`,
    945: `315`,
    946: `315`,
    947: `316`,
    948: `316`,
    949: `317`,
    95: `18`,
    950: `318`,
    951: `320`,
    952: `320`,
    953: `321`,
    954: `321`,
    955: `322`,
    956: `322`,
    957: `322`,
    958: `324`,
    959: `324`,
    96: `18`,
    960: `325`,
    961: `325`,
    962: `325`,
    963: `326`,
    964: `326`,
    965: `327`,
    966: `328`,
    967: `328`,
    968: `329`,
    969: `329`,
    97: `18`,
    970: `329`,
    971: `329`,
    972: `329`,
    973: `329`,
    974: `329`,
    975: `329`,
    976: `329`,
    977: `329`,
    978: `330`,
    979: `330`,
    98: `18`,
    980: `331`,
    981: `332`,
    982: `332`,
    983: `332`,
    984: `333`,
    985: `334`,
    986: `335`,
    987: `335`,
    988: `336`,
    989: `337`,
    99: `18`,
    990: `337`,
    991: `337`,
    992: `338`,
    993: `338`,
    994: `339`,
    995: `339`,
    996: `339`,
    997: `339`,
    998: `339`,
    999: `339`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 2,
  stateKeys: 1,
  stateSize: 41,
  unsupported: [],
  version: 13,
  warnings: [`Step 2 calls a remote object at /app/index.rsh:349:63:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates a child contract and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:430:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:327:29:after expr stmt semicolon',
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
  "Child_announce": Child_announce,
  "Child_close": Child_close,
  "Child_delete": Child_delete,
  "Child_grant": Child_grant,
  "Child_ready": Child_ready,
  "Child_subscribe": Child_subscribe,
  "Master_close": Master_close,
  "Master_new": Master_new,
  "Master_setup": Master_setup,
  "Master_touch": Master_touch
  };
export const _APIs = {
  Child: {
    announce: Child_announce,
    close: Child_close,
    delete: Child_delete,
    grant: Child_grant,
    ready: Child_ready,
    subscribe: Child_subscribe
    },
  Master: {
    close: Master_close,
    new: Master_new,
    setup: Master_setup,
    touch: Master_touch
    }
  };
