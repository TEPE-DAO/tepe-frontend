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
    Child_announce0_16436: ctc5,
    Child_close0_16436: ctc7,
    Child_delete0_16436: ctc11,
    Child_grant0_16436: ctc12,
    Child_ready0_16436: ctc7,
    Child_subscribe0_16436: ctc13,
    Master_close0_16436: ctc14,
    Master_new0_16436: ctc14,
    Master_setup0_16436: ctc15,
    Master_touch0_16436: ctc14
    });
  const ctc17 = stdlib.T_Bool;
  const ctc18 = stdlib.T_Tuple([ctc3, ctc0]);
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:425:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:425:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v17546, time: v17545, didSend: v16411, from: v17544 } = txn1;
      
      ;
      
      const v17548 = {
        closed: false
        };
      const v17549 = v17548;
      const v17550 = v17545;
      const v17553 = stdlib.checkedBigNumberify('./index.rsh:424:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v17556 = v17549.closed;
        const v17557 = v17556 ? false : true;
        
        return v17557;})()) {
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
  const {data: [], secs: v17546, time: v17545, didSend: v16411, from: v17544 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:426:19:application',
    fs: ['at ./index.rsh:426:19:application call to [unknown function] (defined at: ./index.rsh:426:19:function exp)', 'at ./index.rsh:426:19:application call to "liftedInteract" (defined at: ./index.rsh:426:19:application)'],
    msg: 'ready',
    who: 'Alice'
    });
  
  const v17548 = {
    closed: false
    };
  let v17549 = v17548;
  let v17550 = v17545;
  let v17553 = stdlib.checkedBigNumberify('./index.rsh:424:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v17556 = v17549.closed;
    const v17557 = v17556 ? false : true;
    
    return v17557;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc16],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v17736], secs: v17738, time: v17737, didSend: v17294, from: v17735 } = txn3;
    switch (v17736[0]) {
      case 'Child_announce0_16436': {
        const v17739 = v17736[1];
        undefined /* setApiDetails */;
        ;
        const v17759 = v17739[stdlib.checkedBigNumberify('./index.rsh:490:10:spread', stdlib.UInt_max, '0')];
        const v17761 = true;
        await txn3.getOutput('Child_announce', 'v17761', ctc17, v17761);
        null;
        const cv17549 = v17549;
        const cv17550 = v17737;
        const cv17553 = v17553;
        
        v17549 = cv17549;
        v17550 = cv17550;
        v17553 = cv17553;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Child_close0_16436': {
        const v17944 = v17736[1];
        undefined /* setApiDetails */;
        ;
        const v17987 = v17944[stdlib.checkedBigNumberify('./index.rsh:526:10:spread', stdlib.UInt_max, '0')];
        const v17989 = true;
        await txn3.getOutput('Child_close', 'v17989', ctc17, v17989);
        null;
        const cv17549 = v17549;
        const cv17550 = v17737;
        const cv17553 = v17553;
        
        v17549 = cv17549;
        v17550 = cv17550;
        v17553 = cv17553;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Child_delete0_16436': {
        const v18149 = v17736[1];
        undefined /* setApiDetails */;
        ;
        const v18207 = v18149[stdlib.checkedBigNumberify('./index.rsh:508:10:spread', stdlib.UInt_max, '0')];
        const v18209 = true;
        await txn3.getOutput('Child_delete', 'v18209', ctc17, v18209);
        null;
        const cv17549 = v17549;
        const cv17550 = v17737;
        const cv17553 = v17553;
        
        v17549 = cv17549;
        v17550 = cv17550;
        v17553 = cv17553;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Child_grant0_16436': {
        const v18354 = v17736[1];
        undefined /* setApiDetails */;
        ;
        const v18441 = v18354[stdlib.checkedBigNumberify('./index.rsh:517:10:spread', stdlib.UInt_max, '0')];
        const v18443 = true;
        await txn3.getOutput('Child_grant', 'v18443', ctc17, v18443);
        null;
        const cv17549 = v17549;
        const cv17550 = v17737;
        const cv17553 = v17553;
        
        v17549 = cv17549;
        v17550 = cv17550;
        v17553 = cv17553;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Child_ready0_16436': {
        const v18559 = v17736[1];
        undefined /* setApiDetails */;
        ;
        const v18663 = v18559[stdlib.checkedBigNumberify('./index.rsh:481:10:spread', stdlib.UInt_max, '0')];
        const v18665 = true;
        await txn3.getOutput('Child_ready', 'v18665', ctc17, v18665);
        null;
        const cv17549 = v17549;
        const cv17550 = v17737;
        const cv17553 = v17553;
        
        v17549 = cv17549;
        v17550 = cv17550;
        v17553 = cv17553;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Child_subscribe0_16436': {
        const v18764 = v17736[1];
        undefined /* setApiDetails */;
        ;
        const v18883 = v18764[stdlib.checkedBigNumberify('./index.rsh:499:10:spread', stdlib.UInt_max, '0')];
        const v18885 = true;
        await txn3.getOutput('Child_subscribe', 'v18885', ctc17, v18885);
        null;
        const cv17549 = v17549;
        const cv17550 = v17737;
        const cv17553 = v17553;
        
        v17549 = cv17549;
        v17550 = cv17550;
        v17553 = cv17553;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Master_close0_16436': {
        const v18969 = v17736[1];
        undefined /* setApiDetails */;
        ;
        const v19107 = true;
        await txn3.getOutput('Master_close', 'v19107', ctc17, v19107);
        const v19114 = {
          closed: true
          };
        const cv17549 = v19114;
        const cv17550 = v17737;
        const cv17553 = v17553;
        
        v17549 = cv17549;
        v17550 = cv17550;
        v17553 = cv17553;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Master_new0_16436': {
        const v19174 = v17736[1];
        undefined /* setApiDetails */;
        ;
        const v19323 = stdlib.addressEq(v17735, v17544);
        stdlib.assert(v19323, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:436:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:438:13:application call to [unknown function] (defined at: ./index.rsh:438:13:function exp)'],
          msg: 'Must be authorized',
          who: 'Alice'
          });
        const v19325 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v19326 = undefined /* ContractNew */;
        const v19327 = await txn3.getOutput('internal', 'v19326', ctc1, v19326);
        null;
        await txn3.getOutput('Master_new', 'v19327', ctc1, v19327);
        const cv17549 = v17549;
        const cv17550 = v17737;
        const cv17553 = v17553;
        
        v17549 = cv17549;
        v17550 = cv17550;
        v17553 = cv17553;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Master_setup0_16436': {
        const v19379 = v17736[1];
        undefined /* setApiDetails */;
        const v19393 = stdlib.addressEq(v17735, v17544);
        stdlib.assert(v19393, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:447:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:446:33:application call to [unknown function] (defined at: ./index.rsh:446:33:function exp)', 'at ./index.rsh:432:29:application call to [unknown function] (defined at: ./index.rsh:446:33:function exp)', 'at ./index.rsh:432:29:application call to [unknown function] (defined at: ./index.rsh:432:29:function exp)'],
          msg: 'Must be authorized',
          who: 'Alice'
          });
        const v19397 = stdlib.add(v17553, stdlib.checkedBigNumberify('./index.rsh:5:23:decimal', stdlib.UInt_max, '100000'));
        ;
        const v19540 = v19379[stdlib.checkedBigNumberify('./index.rsh:446:10:spread', stdlib.UInt_max, '0')];
        const v19547 = stdlib.sub(v19397, stdlib.checkedBigNumberify('./index.rsh:5:23:decimal', stdlib.UInt_max, '100000'));
        const v19548 = [];
        const v19549 = stdlib.bytesFromHex("0xc194ad99");
        const v19550 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v19551 = undefined /* Remote */;
        const v19552 = await txn3.getOutput('internal', 'v19551', ctc18, v19551);
        const v19554 = v19552[stdlib.checkedBigNumberify('./index.rsh:454:54:application', stdlib.UInt_max, '0')];
        const v19559 = stdlib.add(v19547, v19554);
        const v19560 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v19554);
        stdlib.assert(v19560, {
          at: './index.rsh:454:54:application',
          fs: ['at ./index.rsh:450:13:application call to [unknown function] (defined at: ./index.rsh:450:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        null;
        const v19561 = true;
        await txn3.getOutput('Master_setup', 'v19561', ctc17, v19561);
        const cv17549 = v17549;
        const cv17550 = v17737;
        const cv17553 = v19559;
        
        v17549 = cv17549;
        v17550 = cv17550;
        v17553 = cv17553;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Master_touch0_16436': {
        const v19584 = v17736[1];
        undefined /* setApiDetails */;
        ;
        const v19776 = (stdlib.le(await ctc.getBalance(), v17553) ? stdlib.checkedBigNumberify('./index.rsh:467:37:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v17553));
        const v19777 = stdlib.safeAdd(v19776, v17553);
        const v19781 = stdlib.sub(v19777, v19776);
        ;
        const v19782 = true;
        await txn3.getOutput('Master_touch', 'v19782', ctc17, v19782);
        const cv17549 = v17549;
        const cv17550 = v17737;
        const cv17553 = v19781;
        
        v17549 = cv17549;
        v17550 = cv17550;
        v17553 = cv17553;
        
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
    Child_announce0_16436: ctc6,
    Child_close0_16436: ctc8,
    Child_delete0_16436: ctc12,
    Child_grant0_16436: ctc13,
    Child_ready0_16436: ctc8,
    Child_subscribe0_16436: ctc14,
    Master_close0_16436: ctc15,
    Master_new0_16436: ctc15,
    Master_setup0_16436: ctc16,
    Master_touch0_16436: ctc15
    });
  const ctc18 = stdlib.T_Null;
  
  
  const [v17544, v17549, v17553] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v17616 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:490:35:application call to [unknown function] (defined at: ./index.rsh:490:35:function exp)', 'at ./index.rsh:432:29:application call to "runChild_announce0_16436" (defined at: ./index.rsh:490:10:function exp)', 'at ./index.rsh:432:29:application call to [unknown function] (defined at: ./index.rsh:432:29:function exp)'],
    msg: 'in',
    who: 'Child_announce'
    });
  const v17636 = ['Child_announce0_16436', v17616];
  
  const txn1 = await (ctc.sendrecv({
    args: [v17544, v17549, v17553, v17636],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:490:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v17736], secs: v17738, time: v17737, didSend: v17294, from: v17735 } = txn1;
      
      switch (v17736[0]) {
        case 'Child_announce0_16436': {
          const v17739 = v17736[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Child_announce"
            });
          ;
          const v17759 = v17739[stdlib.checkedBigNumberify('./index.rsh:490:10:spread', stdlib.UInt_max, '0')];
          const v17761 = true;
          const v17762 = await txn1.getOutput('Child_announce', 'v17761', ctc1, v17761);
          
          null;
          const v21343 = v17549;
          const v21345 = v17553;
          const v21346 = v17549.closed;
          if (v21346) {
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
        case 'Child_close0_16436': {
          const v17944 = v17736[1];
          
          break;
          }
        case 'Child_delete0_16436': {
          const v18149 = v17736[1];
          
          break;
          }
        case 'Child_grant0_16436': {
          const v18354 = v17736[1];
          
          break;
          }
        case 'Child_ready0_16436': {
          const v18559 = v17736[1];
          
          break;
          }
        case 'Child_subscribe0_16436': {
          const v18764 = v17736[1];
          
          break;
          }
        case 'Master_close0_16436': {
          const v18969 = v17736[1];
          
          break;
          }
        case 'Master_new0_16436': {
          const v19174 = v17736[1];
          
          break;
          }
        case 'Master_setup0_16436': {
          const v19379 = v17736[1];
          
          break;
          }
        case 'Master_touch0_16436': {
          const v19584 = v17736[1];
          
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
  const {data: [v17736], secs: v17738, time: v17737, didSend: v17294, from: v17735 } = txn1;
  switch (v17736[0]) {
    case 'Child_announce0_16436': {
      const v17739 = v17736[1];
      undefined /* setApiDetails */;
      ;
      const v17759 = v17739[stdlib.checkedBigNumberify('./index.rsh:490:10:spread', stdlib.UInt_max, '0')];
      const v17761 = true;
      const v17762 = await txn1.getOutput('Child_announce', 'v17761', ctc1, v17761);
      if (v17294) {
        stdlib.protect(ctc18, await interact.out(v17739, v17762), {
          at: './index.rsh:490:11:application',
          fs: ['at ./index.rsh:490:11:application call to [unknown function] (defined at: ./index.rsh:490:11:function exp)', 'at ./index.rsh:493:12:application call to "k" (defined at: ./index.rsh:492:13:function exp)', 'at ./index.rsh:492:13:application call to [unknown function] (defined at: ./index.rsh:492:13:function exp)'],
          msg: 'out',
          who: 'Child_announce'
          });
        }
      else {
        }
      
      null;
      const v21343 = v17549;
      const v21345 = v17553;
      const v21346 = v17549.closed;
      if (v21346) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Child_close0_16436': {
      const v17944 = v17736[1];
      return;
      break;
      }
    case 'Child_delete0_16436': {
      const v18149 = v17736[1];
      return;
      break;
      }
    case 'Child_grant0_16436': {
      const v18354 = v17736[1];
      return;
      break;
      }
    case 'Child_ready0_16436': {
      const v18559 = v17736[1];
      return;
      break;
      }
    case 'Child_subscribe0_16436': {
      const v18764 = v17736[1];
      return;
      break;
      }
    case 'Master_close0_16436': {
      const v18969 = v17736[1];
      return;
      break;
      }
    case 'Master_new0_16436': {
      const v19174 = v17736[1];
      return;
      break;
      }
    case 'Master_setup0_16436': {
      const v19379 = v17736[1];
      return;
      break;
      }
    case 'Master_touch0_16436': {
      const v19584 = v17736[1];
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
    Child_announce0_16436: ctc8,
    Child_close0_16436: ctc6,
    Child_delete0_16436: ctc12,
    Child_grant0_16436: ctc13,
    Child_ready0_16436: ctc6,
    Child_subscribe0_16436: ctc14,
    Master_close0_16436: ctc15,
    Master_new0_16436: ctc15,
    Master_setup0_16436: ctc16,
    Master_touch0_16436: ctc15
    });
  const ctc18 = stdlib.T_Null;
  
  
  const [v17544, v17549, v17553] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v17708 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:526:32:application call to [unknown function] (defined at: ./index.rsh:526:32:function exp)', 'at ./index.rsh:432:29:application call to "runChild_close0_16436" (defined at: ./index.rsh:526:10:function exp)', 'at ./index.rsh:432:29:application call to [unknown function] (defined at: ./index.rsh:432:29:function exp)'],
    msg: 'in',
    who: 'Child_close'
    });
  const v17720 = ['Child_close0_16436', v17708];
  
  const txn1 = await (ctc.sendrecv({
    args: [v17544, v17549, v17553, v17720],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:526:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v17736], secs: v17738, time: v17737, didSend: v17294, from: v17735 } = txn1;
      
      switch (v17736[0]) {
        case 'Child_announce0_16436': {
          const v17739 = v17736[1];
          
          break;
          }
        case 'Child_close0_16436': {
          const v17944 = v17736[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Child_close"
            });
          ;
          const v17987 = v17944[stdlib.checkedBigNumberify('./index.rsh:526:10:spread', stdlib.UInt_max, '0')];
          const v17989 = true;
          const v17990 = await txn1.getOutput('Child_close', 'v17989', ctc1, v17989);
          
          null;
          const v21398 = v17549;
          const v21400 = v17553;
          const v21401 = v17549.closed;
          if (v21401) {
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
        case 'Child_delete0_16436': {
          const v18149 = v17736[1];
          
          break;
          }
        case 'Child_grant0_16436': {
          const v18354 = v17736[1];
          
          break;
          }
        case 'Child_ready0_16436': {
          const v18559 = v17736[1];
          
          break;
          }
        case 'Child_subscribe0_16436': {
          const v18764 = v17736[1];
          
          break;
          }
        case 'Master_close0_16436': {
          const v18969 = v17736[1];
          
          break;
          }
        case 'Master_new0_16436': {
          const v19174 = v17736[1];
          
          break;
          }
        case 'Master_setup0_16436': {
          const v19379 = v17736[1];
          
          break;
          }
        case 'Master_touch0_16436': {
          const v19584 = v17736[1];
          
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
  const {data: [v17736], secs: v17738, time: v17737, didSend: v17294, from: v17735 } = txn1;
  switch (v17736[0]) {
    case 'Child_announce0_16436': {
      const v17739 = v17736[1];
      return;
      break;
      }
    case 'Child_close0_16436': {
      const v17944 = v17736[1];
      undefined /* setApiDetails */;
      ;
      const v17987 = v17944[stdlib.checkedBigNumberify('./index.rsh:526:10:spread', stdlib.UInt_max, '0')];
      const v17989 = true;
      const v17990 = await txn1.getOutput('Child_close', 'v17989', ctc1, v17989);
      if (v17294) {
        stdlib.protect(ctc18, await interact.out(v17944, v17990), {
          at: './index.rsh:526:11:application',
          fs: ['at ./index.rsh:526:11:application call to [unknown function] (defined at: ./index.rsh:526:11:function exp)', 'at ./index.rsh:529:12:application call to "k" (defined at: ./index.rsh:528:13:function exp)', 'at ./index.rsh:528:13:application call to [unknown function] (defined at: ./index.rsh:528:13:function exp)'],
          msg: 'out',
          who: 'Child_close'
          });
        }
      else {
        }
      
      null;
      const v21398 = v17549;
      const v21400 = v17553;
      const v21401 = v17549.closed;
      if (v21401) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Child_delete0_16436': {
      const v18149 = v17736[1];
      return;
      break;
      }
    case 'Child_grant0_16436': {
      const v18354 = v17736[1];
      return;
      break;
      }
    case 'Child_ready0_16436': {
      const v18559 = v17736[1];
      return;
      break;
      }
    case 'Child_subscribe0_16436': {
      const v18764 = v17736[1];
      return;
      break;
      }
    case 'Master_close0_16436': {
      const v18969 = v17736[1];
      return;
      break;
      }
    case 'Master_new0_16436': {
      const v19174 = v17736[1];
      return;
      break;
      }
    case 'Master_setup0_16436': {
      const v19379 = v17736[1];
      return;
      break;
      }
    case 'Master_touch0_16436': {
      const v19584 = v17736[1];
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
    Child_announce0_16436: ctc10,
    Child_close0_16436: ctc12,
    Child_delete0_16436: ctc8,
    Child_grant0_16436: ctc13,
    Child_ready0_16436: ctc12,
    Child_subscribe0_16436: ctc14,
    Master_close0_16436: ctc15,
    Master_new0_16436: ctc15,
    Master_setup0_16436: ctc16,
    Master_touch0_16436: ctc15
    });
  const ctc18 = stdlib.T_Null;
  
  
  const [v17544, v17549, v17553] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v17660 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:508:33:application call to [unknown function] (defined at: ./index.rsh:508:33:function exp)', 'at ./index.rsh:432:29:application call to "runChild_delete0_16436" (defined at: ./index.rsh:508:10:function exp)', 'at ./index.rsh:432:29:application call to [unknown function] (defined at: ./index.rsh:432:29:function exp)'],
    msg: 'in',
    who: 'Child_delete'
    });
  const v17686 = ['Child_delete0_16436', v17660];
  
  const txn1 = await (ctc.sendrecv({
    args: [v17544, v17549, v17553, v17686],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:508:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v17736], secs: v17738, time: v17737, didSend: v17294, from: v17735 } = txn1;
      
      switch (v17736[0]) {
        case 'Child_announce0_16436': {
          const v17739 = v17736[1];
          
          break;
          }
        case 'Child_close0_16436': {
          const v17944 = v17736[1];
          
          break;
          }
        case 'Child_delete0_16436': {
          const v18149 = v17736[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Child_delete"
            });
          ;
          const v18207 = v18149[stdlib.checkedBigNumberify('./index.rsh:508:10:spread', stdlib.UInt_max, '0')];
          const v18209 = true;
          const v18210 = await txn1.getOutput('Child_delete', 'v18209', ctc1, v18209);
          
          null;
          const v21453 = v17549;
          const v21455 = v17553;
          const v21456 = v17549.closed;
          if (v21456) {
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
        case 'Child_grant0_16436': {
          const v18354 = v17736[1];
          
          break;
          }
        case 'Child_ready0_16436': {
          const v18559 = v17736[1];
          
          break;
          }
        case 'Child_subscribe0_16436': {
          const v18764 = v17736[1];
          
          break;
          }
        case 'Master_close0_16436': {
          const v18969 = v17736[1];
          
          break;
          }
        case 'Master_new0_16436': {
          const v19174 = v17736[1];
          
          break;
          }
        case 'Master_setup0_16436': {
          const v19379 = v17736[1];
          
          break;
          }
        case 'Master_touch0_16436': {
          const v19584 = v17736[1];
          
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
  const {data: [v17736], secs: v17738, time: v17737, didSend: v17294, from: v17735 } = txn1;
  switch (v17736[0]) {
    case 'Child_announce0_16436': {
      const v17739 = v17736[1];
      return;
      break;
      }
    case 'Child_close0_16436': {
      const v17944 = v17736[1];
      return;
      break;
      }
    case 'Child_delete0_16436': {
      const v18149 = v17736[1];
      undefined /* setApiDetails */;
      ;
      const v18207 = v18149[stdlib.checkedBigNumberify('./index.rsh:508:10:spread', stdlib.UInt_max, '0')];
      const v18209 = true;
      const v18210 = await txn1.getOutput('Child_delete', 'v18209', ctc1, v18209);
      if (v17294) {
        stdlib.protect(ctc18, await interact.out(v18149, v18210), {
          at: './index.rsh:508:11:application',
          fs: ['at ./index.rsh:508:11:application call to [unknown function] (defined at: ./index.rsh:508:11:function exp)', 'at ./index.rsh:511:12:application call to "k" (defined at: ./index.rsh:510:13:function exp)', 'at ./index.rsh:510:13:application call to [unknown function] (defined at: ./index.rsh:510:13:function exp)'],
          msg: 'out',
          who: 'Child_delete'
          });
        }
      else {
        }
      
      null;
      const v21453 = v17549;
      const v21455 = v17553;
      const v21456 = v17549.closed;
      if (v21456) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Child_grant0_16436': {
      const v18354 = v17736[1];
      return;
      break;
      }
    case 'Child_ready0_16436': {
      const v18559 = v17736[1];
      return;
      break;
      }
    case 'Child_subscribe0_16436': {
      const v18764 = v17736[1];
      return;
      break;
      }
    case 'Master_close0_16436': {
      const v18969 = v17736[1];
      return;
      break;
      }
    case 'Master_new0_16436': {
      const v19174 = v17736[1];
      return;
      break;
      }
    case 'Master_setup0_16436': {
      const v19379 = v17736[1];
      return;
      break;
      }
    case 'Master_touch0_16436': {
      const v19584 = v17736[1];
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
    Child_announce0_16436: ctc8,
    Child_close0_16436: ctc10,
    Child_delete0_16436: ctc13,
    Child_grant0_16436: ctc6,
    Child_ready0_16436: ctc10,
    Child_subscribe0_16436: ctc14,
    Master_close0_16436: ctc15,
    Master_new0_16436: ctc15,
    Master_setup0_16436: ctc16,
    Master_touch0_16436: ctc15
    });
  const ctc18 = stdlib.T_Null;
  
  
  const [v17544, v17549, v17553] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v17690 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:517:32:application call to [unknown function] (defined at: ./index.rsh:517:32:function exp)', 'at ./index.rsh:432:29:application call to "runChild_grant0_16436" (defined at: ./index.rsh:517:10:function exp)', 'at ./index.rsh:432:29:application call to [unknown function] (defined at: ./index.rsh:432:29:function exp)'],
    msg: 'in',
    who: 'Child_grant'
    });
  const v17704 = ['Child_grant0_16436', v17690];
  
  const txn1 = await (ctc.sendrecv({
    args: [v17544, v17549, v17553, v17704],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:517:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v17736], secs: v17738, time: v17737, didSend: v17294, from: v17735 } = txn1;
      
      switch (v17736[0]) {
        case 'Child_announce0_16436': {
          const v17739 = v17736[1];
          
          break;
          }
        case 'Child_close0_16436': {
          const v17944 = v17736[1];
          
          break;
          }
        case 'Child_delete0_16436': {
          const v18149 = v17736[1];
          
          break;
          }
        case 'Child_grant0_16436': {
          const v18354 = v17736[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Child_grant"
            });
          ;
          const v18441 = v18354[stdlib.checkedBigNumberify('./index.rsh:517:10:spread', stdlib.UInt_max, '0')];
          const v18443 = true;
          const v18444 = await txn1.getOutput('Child_grant', 'v18443', ctc1, v18443);
          
          null;
          const v21508 = v17549;
          const v21510 = v17553;
          const v21511 = v17549.closed;
          if (v21511) {
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
        case 'Child_ready0_16436': {
          const v18559 = v17736[1];
          
          break;
          }
        case 'Child_subscribe0_16436': {
          const v18764 = v17736[1];
          
          break;
          }
        case 'Master_close0_16436': {
          const v18969 = v17736[1];
          
          break;
          }
        case 'Master_new0_16436': {
          const v19174 = v17736[1];
          
          break;
          }
        case 'Master_setup0_16436': {
          const v19379 = v17736[1];
          
          break;
          }
        case 'Master_touch0_16436': {
          const v19584 = v17736[1];
          
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
  const {data: [v17736], secs: v17738, time: v17737, didSend: v17294, from: v17735 } = txn1;
  switch (v17736[0]) {
    case 'Child_announce0_16436': {
      const v17739 = v17736[1];
      return;
      break;
      }
    case 'Child_close0_16436': {
      const v17944 = v17736[1];
      return;
      break;
      }
    case 'Child_delete0_16436': {
      const v18149 = v17736[1];
      return;
      break;
      }
    case 'Child_grant0_16436': {
      const v18354 = v17736[1];
      undefined /* setApiDetails */;
      ;
      const v18441 = v18354[stdlib.checkedBigNumberify('./index.rsh:517:10:spread', stdlib.UInt_max, '0')];
      const v18443 = true;
      const v18444 = await txn1.getOutput('Child_grant', 'v18443', ctc1, v18443);
      if (v17294) {
        stdlib.protect(ctc18, await interact.out(v18354, v18444), {
          at: './index.rsh:517:11:application',
          fs: ['at ./index.rsh:517:11:application call to [unknown function] (defined at: ./index.rsh:517:11:function exp)', 'at ./index.rsh:520:12:application call to "k" (defined at: ./index.rsh:519:13:function exp)', 'at ./index.rsh:519:13:application call to [unknown function] (defined at: ./index.rsh:519:13:function exp)'],
          msg: 'out',
          who: 'Child_grant'
          });
        }
      else {
        }
      
      null;
      const v21508 = v17549;
      const v21510 = v17553;
      const v21511 = v17549.closed;
      if (v21511) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Child_ready0_16436': {
      const v18559 = v17736[1];
      return;
      break;
      }
    case 'Child_subscribe0_16436': {
      const v18764 = v17736[1];
      return;
      break;
      }
    case 'Master_close0_16436': {
      const v18969 = v17736[1];
      return;
      break;
      }
    case 'Master_new0_16436': {
      const v19174 = v17736[1];
      return;
      break;
      }
    case 'Master_setup0_16436': {
      const v19379 = v17736[1];
      return;
      break;
      }
    case 'Master_touch0_16436': {
      const v19584 = v17736[1];
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
    Child_announce0_16436: ctc8,
    Child_close0_16436: ctc6,
    Child_delete0_16436: ctc12,
    Child_grant0_16436: ctc13,
    Child_ready0_16436: ctc6,
    Child_subscribe0_16436: ctc14,
    Master_close0_16436: ctc15,
    Master_new0_16436: ctc15,
    Master_setup0_16436: ctc16,
    Master_touch0_16436: ctc15
    });
  const ctc18 = stdlib.T_Null;
  
  
  const [v17544, v17549, v17553] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v17600 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:481:32:application call to [unknown function] (defined at: ./index.rsh:481:32:function exp)', 'at ./index.rsh:432:29:application call to "runChild_ready0_16436" (defined at: ./index.rsh:481:10:function exp)', 'at ./index.rsh:432:29:application call to [unknown function] (defined at: ./index.rsh:432:29:function exp)'],
    msg: 'in',
    who: 'Child_ready'
    });
  const v17612 = ['Child_ready0_16436', v17600];
  
  const txn1 = await (ctc.sendrecv({
    args: [v17544, v17549, v17553, v17612],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:481:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v17736], secs: v17738, time: v17737, didSend: v17294, from: v17735 } = txn1;
      
      switch (v17736[0]) {
        case 'Child_announce0_16436': {
          const v17739 = v17736[1];
          
          break;
          }
        case 'Child_close0_16436': {
          const v17944 = v17736[1];
          
          break;
          }
        case 'Child_delete0_16436': {
          const v18149 = v17736[1];
          
          break;
          }
        case 'Child_grant0_16436': {
          const v18354 = v17736[1];
          
          break;
          }
        case 'Child_ready0_16436': {
          const v18559 = v17736[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Child_ready"
            });
          ;
          const v18663 = v18559[stdlib.checkedBigNumberify('./index.rsh:481:10:spread', stdlib.UInt_max, '0')];
          const v18665 = true;
          const v18666 = await txn1.getOutput('Child_ready', 'v18665', ctc1, v18665);
          
          null;
          const v21563 = v17549;
          const v21565 = v17553;
          const v21566 = v17549.closed;
          if (v21566) {
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
        case 'Child_subscribe0_16436': {
          const v18764 = v17736[1];
          
          break;
          }
        case 'Master_close0_16436': {
          const v18969 = v17736[1];
          
          break;
          }
        case 'Master_new0_16436': {
          const v19174 = v17736[1];
          
          break;
          }
        case 'Master_setup0_16436': {
          const v19379 = v17736[1];
          
          break;
          }
        case 'Master_touch0_16436': {
          const v19584 = v17736[1];
          
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
  const {data: [v17736], secs: v17738, time: v17737, didSend: v17294, from: v17735 } = txn1;
  switch (v17736[0]) {
    case 'Child_announce0_16436': {
      const v17739 = v17736[1];
      return;
      break;
      }
    case 'Child_close0_16436': {
      const v17944 = v17736[1];
      return;
      break;
      }
    case 'Child_delete0_16436': {
      const v18149 = v17736[1];
      return;
      break;
      }
    case 'Child_grant0_16436': {
      const v18354 = v17736[1];
      return;
      break;
      }
    case 'Child_ready0_16436': {
      const v18559 = v17736[1];
      undefined /* setApiDetails */;
      ;
      const v18663 = v18559[stdlib.checkedBigNumberify('./index.rsh:481:10:spread', stdlib.UInt_max, '0')];
      const v18665 = true;
      const v18666 = await txn1.getOutput('Child_ready', 'v18665', ctc1, v18665);
      if (v17294) {
        stdlib.protect(ctc18, await interact.out(v18559, v18666), {
          at: './index.rsh:481:11:application',
          fs: ['at ./index.rsh:481:11:application call to [unknown function] (defined at: ./index.rsh:481:11:function exp)', 'at ./index.rsh:484:12:application call to "k" (defined at: ./index.rsh:483:13:function exp)', 'at ./index.rsh:483:13:application call to [unknown function] (defined at: ./index.rsh:483:13:function exp)'],
          msg: 'out',
          who: 'Child_ready'
          });
        }
      else {
        }
      
      null;
      const v21563 = v17549;
      const v21565 = v17553;
      const v21566 = v17549.closed;
      if (v21566) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Child_subscribe0_16436': {
      const v18764 = v17736[1];
      return;
      break;
      }
    case 'Master_close0_16436': {
      const v18969 = v17736[1];
      return;
      break;
      }
    case 'Master_new0_16436': {
      const v19174 = v17736[1];
      return;
      break;
      }
    case 'Master_setup0_16436': {
      const v19379 = v17736[1];
      return;
      break;
      }
    case 'Master_touch0_16436': {
      const v19584 = v17736[1];
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
    Child_announce0_16436: ctc8,
    Child_close0_16436: ctc10,
    Child_delete0_16436: ctc13,
    Child_grant0_16436: ctc14,
    Child_ready0_16436: ctc10,
    Child_subscribe0_16436: ctc6,
    Master_close0_16436: ctc15,
    Master_new0_16436: ctc15,
    Master_setup0_16436: ctc16,
    Master_touch0_16436: ctc15
    });
  const ctc18 = stdlib.T_Null;
  
  
  const [v17544, v17549, v17553] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v17640 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:499:36:application call to [unknown function] (defined at: ./index.rsh:499:36:function exp)', 'at ./index.rsh:432:29:application call to "runChild_subscribe0_16436" (defined at: ./index.rsh:499:10:function exp)', 'at ./index.rsh:432:29:application call to [unknown function] (defined at: ./index.rsh:432:29:function exp)'],
    msg: 'in',
    who: 'Child_subscribe'
    });
  const v17656 = ['Child_subscribe0_16436', v17640];
  
  const txn1 = await (ctc.sendrecv({
    args: [v17544, v17549, v17553, v17656],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:499:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v17736], secs: v17738, time: v17737, didSend: v17294, from: v17735 } = txn1;
      
      switch (v17736[0]) {
        case 'Child_announce0_16436': {
          const v17739 = v17736[1];
          
          break;
          }
        case 'Child_close0_16436': {
          const v17944 = v17736[1];
          
          break;
          }
        case 'Child_delete0_16436': {
          const v18149 = v17736[1];
          
          break;
          }
        case 'Child_grant0_16436': {
          const v18354 = v17736[1];
          
          break;
          }
        case 'Child_ready0_16436': {
          const v18559 = v17736[1];
          
          break;
          }
        case 'Child_subscribe0_16436': {
          const v18764 = v17736[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Child_subscribe"
            });
          ;
          const v18883 = v18764[stdlib.checkedBigNumberify('./index.rsh:499:10:spread', stdlib.UInt_max, '0')];
          const v18885 = true;
          const v18886 = await txn1.getOutput('Child_subscribe', 'v18885', ctc1, v18885);
          
          null;
          const v21618 = v17549;
          const v21620 = v17553;
          const v21621 = v17549.closed;
          if (v21621) {
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
        case 'Master_close0_16436': {
          const v18969 = v17736[1];
          
          break;
          }
        case 'Master_new0_16436': {
          const v19174 = v17736[1];
          
          break;
          }
        case 'Master_setup0_16436': {
          const v19379 = v17736[1];
          
          break;
          }
        case 'Master_touch0_16436': {
          const v19584 = v17736[1];
          
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
  const {data: [v17736], secs: v17738, time: v17737, didSend: v17294, from: v17735 } = txn1;
  switch (v17736[0]) {
    case 'Child_announce0_16436': {
      const v17739 = v17736[1];
      return;
      break;
      }
    case 'Child_close0_16436': {
      const v17944 = v17736[1];
      return;
      break;
      }
    case 'Child_delete0_16436': {
      const v18149 = v17736[1];
      return;
      break;
      }
    case 'Child_grant0_16436': {
      const v18354 = v17736[1];
      return;
      break;
      }
    case 'Child_ready0_16436': {
      const v18559 = v17736[1];
      return;
      break;
      }
    case 'Child_subscribe0_16436': {
      const v18764 = v17736[1];
      undefined /* setApiDetails */;
      ;
      const v18883 = v18764[stdlib.checkedBigNumberify('./index.rsh:499:10:spread', stdlib.UInt_max, '0')];
      const v18885 = true;
      const v18886 = await txn1.getOutput('Child_subscribe', 'v18885', ctc1, v18885);
      if (v17294) {
        stdlib.protect(ctc18, await interact.out(v18764, v18886), {
          at: './index.rsh:499:11:application',
          fs: ['at ./index.rsh:499:11:application call to [unknown function] (defined at: ./index.rsh:499:11:function exp)', 'at ./index.rsh:502:12:application call to "k" (defined at: ./index.rsh:501:13:function exp)', 'at ./index.rsh:501:13:application call to [unknown function] (defined at: ./index.rsh:501:13:function exp)'],
          msg: 'out',
          who: 'Child_subscribe'
          });
        }
      else {
        }
      
      null;
      const v21618 = v17549;
      const v21620 = v17553;
      const v21621 = v17549.closed;
      if (v21621) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Master_close0_16436': {
      const v18969 = v17736[1];
      return;
      break;
      }
    case 'Master_new0_16436': {
      const v19174 = v17736[1];
      return;
      break;
      }
    case 'Master_setup0_16436': {
      const v19379 = v17736[1];
      return;
      break;
      }
    case 'Master_touch0_16436': {
      const v19584 = v17736[1];
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
    Child_announce0_16436: ctc7,
    Child_close0_16436: ctc9,
    Child_delete0_16436: ctc13,
    Child_grant0_16436: ctc14,
    Child_ready0_16436: ctc9,
    Child_subscribe0_16436: ctc15,
    Master_close0_16436: ctc4,
    Master_new0_16436: ctc4,
    Master_setup0_16436: ctc16,
    Master_touch0_16436: ctc4
    });
  const ctc18 = stdlib.T_Null;
  
  
  const [v17544, v17549, v17553] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v17592 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:473:30:application call to [unknown function] (defined at: ./index.rsh:473:30:function exp)', 'at ./index.rsh:432:29:application call to "runMaster_close0_16436" (defined at: ./index.rsh:473:10:function exp)', 'at ./index.rsh:432:29:application call to [unknown function] (defined at: ./index.rsh:432:29:function exp)'],
    msg: 'in',
    who: 'Master_close'
    });
  const v17596 = ['Master_close0_16436', v17592];
  
  const txn1 = await (ctc.sendrecv({
    args: [v17544, v17549, v17553, v17596],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:473:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v17736], secs: v17738, time: v17737, didSend: v17294, from: v17735 } = txn1;
      
      switch (v17736[0]) {
        case 'Child_announce0_16436': {
          const v17739 = v17736[1];
          
          break;
          }
        case 'Child_close0_16436': {
          const v17944 = v17736[1];
          
          break;
          }
        case 'Child_delete0_16436': {
          const v18149 = v17736[1];
          
          break;
          }
        case 'Child_grant0_16436': {
          const v18354 = v17736[1];
          
          break;
          }
        case 'Child_ready0_16436': {
          const v18559 = v17736[1];
          
          break;
          }
        case 'Child_subscribe0_16436': {
          const v18764 = v17736[1];
          
          break;
          }
        case 'Master_close0_16436': {
          const v18969 = v17736[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Master_close"
            });
          ;
          const v19107 = true;
          const v19108 = await txn1.getOutput('Master_close', 'v19107', ctc1, v19107);
          
          const v19114 = {
            closed: true
            };
          const v21673 = v19114;
          const v21675 = v17553;
          const v21676 = v19114.closed;
          if (v21676) {
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
        case 'Master_new0_16436': {
          const v19174 = v17736[1];
          
          break;
          }
        case 'Master_setup0_16436': {
          const v19379 = v17736[1];
          
          break;
          }
        case 'Master_touch0_16436': {
          const v19584 = v17736[1];
          
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
  const {data: [v17736], secs: v17738, time: v17737, didSend: v17294, from: v17735 } = txn1;
  switch (v17736[0]) {
    case 'Child_announce0_16436': {
      const v17739 = v17736[1];
      return;
      break;
      }
    case 'Child_close0_16436': {
      const v17944 = v17736[1];
      return;
      break;
      }
    case 'Child_delete0_16436': {
      const v18149 = v17736[1];
      return;
      break;
      }
    case 'Child_grant0_16436': {
      const v18354 = v17736[1];
      return;
      break;
      }
    case 'Child_ready0_16436': {
      const v18559 = v17736[1];
      return;
      break;
      }
    case 'Child_subscribe0_16436': {
      const v18764 = v17736[1];
      return;
      break;
      }
    case 'Master_close0_16436': {
      const v18969 = v17736[1];
      undefined /* setApiDetails */;
      ;
      const v19107 = true;
      const v19108 = await txn1.getOutput('Master_close', 'v19107', ctc1, v19107);
      if (v17294) {
        stdlib.protect(ctc18, await interact.out(v18969, v19108), {
          at: './index.rsh:473:11:application',
          fs: ['at ./index.rsh:473:11:application call to [unknown function] (defined at: ./index.rsh:473:11:function exp)', 'at ./index.rsh:476:12:application call to "k" (defined at: ./index.rsh:475:13:function exp)', 'at ./index.rsh:475:13:application call to [unknown function] (defined at: ./index.rsh:475:13:function exp)'],
          msg: 'out',
          who: 'Master_close'
          });
        }
      else {
        }
      
      const v19114 = {
        closed: true
        };
      const v21673 = v19114;
      const v21675 = v17553;
      const v21676 = v19114.closed;
      if (v21676) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Master_new0_16436': {
      const v19174 = v17736[1];
      return;
      break;
      }
    case 'Master_setup0_16436': {
      const v19379 = v17736[1];
      return;
      break;
      }
    case 'Master_touch0_16436': {
      const v19584 = v17736[1];
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
    Child_announce0_16436: ctc7,
    Child_close0_16436: ctc9,
    Child_delete0_16436: ctc13,
    Child_grant0_16436: ctc14,
    Child_ready0_16436: ctc9,
    Child_subscribe0_16436: ctc15,
    Master_close0_16436: ctc4,
    Master_new0_16436: ctc4,
    Master_setup0_16436: ctc16,
    Master_touch0_16436: ctc4
    });
  const ctc18 = stdlib.T_Null;
  
  
  const [v17544, v17549, v17553] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v17558 = ctc.selfAddress();
  const v17560 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:435:28:application call to [unknown function] (defined at: ./index.rsh:435:28:function exp)', 'at ./index.rsh:432:29:application call to "runMaster_new0_16436" (defined at: ./index.rsh:435:10:function exp)', 'at ./index.rsh:432:29:application call to [unknown function] (defined at: ./index.rsh:432:29:function exp)'],
    msg: 'in',
    who: 'Master_new'
    });
  const v17561 = stdlib.addressEq(v17558, v17544);
  stdlib.assert(v17561, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:436:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:435:28:application call to [unknown function] (defined at: ./index.rsh:435:28:function exp)', 'at ./index.rsh:432:29:application call to "runMaster_new0_16436" (defined at: ./index.rsh:435:10:function exp)', 'at ./index.rsh:432:29:application call to [unknown function] (defined at: ./index.rsh:432:29:function exp)'],
    msg: 'Must be authorized',
    who: 'Master_new'
    });
  const v17566 = ['Master_new0_16436', v17560];
  
  const txn1 = await (ctc.sendrecv({
    args: [v17544, v17549, v17553, v17566],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:435:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v17736], secs: v17738, time: v17737, didSend: v17294, from: v17735 } = txn1;
      
      switch (v17736[0]) {
        case 'Child_announce0_16436': {
          const v17739 = v17736[1];
          
          break;
          }
        case 'Child_close0_16436': {
          const v17944 = v17736[1];
          
          break;
          }
        case 'Child_delete0_16436': {
          const v18149 = v17736[1];
          
          break;
          }
        case 'Child_grant0_16436': {
          const v18354 = v17736[1];
          
          break;
          }
        case 'Child_ready0_16436': {
          const v18559 = v17736[1];
          
          break;
          }
        case 'Child_subscribe0_16436': {
          const v18764 = v17736[1];
          
          break;
          }
        case 'Master_close0_16436': {
          const v18969 = v17736[1];
          
          break;
          }
        case 'Master_new0_16436': {
          const v19174 = v17736[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Master_new"
            });
          ;
          const v19325 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v19326 = stdlib.simContractNew(sim_r, {
            ALGO: {
              code: {
                approvalB64: `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`,
                clearStateB64: `CA==`
                },
              opts: {
                globalBytes: 3,
                globalUints: 0,
                localBytes: 0,
                localUints: 0
                }
              }
            }, ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:439:42:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./index.rsh:439:42:application', stdlib.UInt_max, '0'),
            toks: []
            }), getSimTokCtr());
          const v19327 = await txn1.getOutput('internal', 'v19326', ctc5, v19326);
          null;
          const v19328 = await txn1.getOutput('Master_new', 'v19327', ctc5, v19327);
          
          const v21728 = v17549;
          const v21730 = v17553;
          const v21731 = v17549.closed;
          if (v21731) {
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
        case 'Master_setup0_16436': {
          const v19379 = v17736[1];
          
          break;
          }
        case 'Master_touch0_16436': {
          const v19584 = v17736[1];
          
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
  const {data: [v17736], secs: v17738, time: v17737, didSend: v17294, from: v17735 } = txn1;
  switch (v17736[0]) {
    case 'Child_announce0_16436': {
      const v17739 = v17736[1];
      return;
      break;
      }
    case 'Child_close0_16436': {
      const v17944 = v17736[1];
      return;
      break;
      }
    case 'Child_delete0_16436': {
      const v18149 = v17736[1];
      return;
      break;
      }
    case 'Child_grant0_16436': {
      const v18354 = v17736[1];
      return;
      break;
      }
    case 'Child_ready0_16436': {
      const v18559 = v17736[1];
      return;
      break;
      }
    case 'Child_subscribe0_16436': {
      const v18764 = v17736[1];
      return;
      break;
      }
    case 'Master_close0_16436': {
      const v18969 = v17736[1];
      return;
      break;
      }
    case 'Master_new0_16436': {
      const v19174 = v17736[1];
      undefined /* setApiDetails */;
      ;
      const v19323 = stdlib.addressEq(v17735, v17544);
      stdlib.assert(v19323, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:436:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:438:13:application call to [unknown function] (defined at: ./index.rsh:438:13:function exp)'],
        msg: 'Must be authorized',
        who: 'Master_new'
        });
      const v19325 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v19326 = undefined /* ContractNew */;
      const v19327 = await txn1.getOutput('internal', 'v19326', ctc5, v19326);
      null;
      const v19328 = await txn1.getOutput('Master_new', 'v19327', ctc5, v19327);
      if (v17294) {
        stdlib.protect(ctc18, await interact.out(v19174, v19328), {
          at: './index.rsh:435:11:application',
          fs: ['at ./index.rsh:435:11:application call to [unknown function] (defined at: ./index.rsh:435:11:function exp)', 'at ./index.rsh:441:12:application call to "k" (defined at: ./index.rsh:438:13:function exp)', 'at ./index.rsh:438:13:application call to [unknown function] (defined at: ./index.rsh:438:13:function exp)'],
          msg: 'out',
          who: 'Master_new'
          });
        }
      else {
        }
      
      const v21728 = v17549;
      const v21730 = v17553;
      const v21731 = v17549.closed;
      if (v21731) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Master_setup0_16436': {
      const v19379 = v17736[1];
      return;
      break;
      }
    case 'Master_touch0_16436': {
      const v19584 = v17736[1];
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
    Child_announce0_16436: ctc7,
    Child_close0_16436: ctc9,
    Child_delete0_16436: ctc13,
    Child_grant0_16436: ctc14,
    Child_ready0_16436: ctc9,
    Child_subscribe0_16436: ctc15,
    Master_close0_16436: ctc16,
    Master_new0_16436: ctc16,
    Master_setup0_16436: ctc5,
    Master_touch0_16436: ctc16
    });
  const ctc18 = stdlib.T_Null;
  const ctc19 = stdlib.T_Tuple([ctc3, ctc18]);
  
  
  const [v17544, v17549, v17553] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v17568 = ctc.selfAddress();
  const v17570 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:446:33:application call to [unknown function] (defined at: ./index.rsh:446:33:function exp)', 'at ./index.rsh:432:29:application call to "runMaster_setup0_16436" (defined at: ./index.rsh:446:10:function exp)', 'at ./index.rsh:432:29:application call to [unknown function] (defined at: ./index.rsh:432:29:function exp)'],
    msg: 'in',
    who: 'Master_setup'
    });
  const v17573 = stdlib.addressEq(v17568, v17544);
  stdlib.assert(v17573, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:447:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:446:33:application call to [unknown function] (defined at: ./index.rsh:446:33:function exp)', 'at ./index.rsh:432:29:application call to "runMaster_setup0_16436" (defined at: ./index.rsh:446:10:function exp)', 'at ./index.rsh:432:29:application call to [unknown function] (defined at: ./index.rsh:432:29:function exp)'],
    msg: 'Must be authorized',
    who: 'Master_setup'
    });
  const v17580 = ['Master_setup0_16436', v17570];
  
  const txn1 = await (ctc.sendrecv({
    args: [v17544, v17549, v17553, v17580],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:5:23:decimal', stdlib.UInt_max, '100000'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v17736], secs: v17738, time: v17737, didSend: v17294, from: v17735 } = txn1;
      
      switch (v17736[0]) {
        case 'Child_announce0_16436': {
          const v17739 = v17736[1];
          
          break;
          }
        case 'Child_close0_16436': {
          const v17944 = v17736[1];
          
          break;
          }
        case 'Child_delete0_16436': {
          const v18149 = v17736[1];
          
          break;
          }
        case 'Child_grant0_16436': {
          const v18354 = v17736[1];
          
          break;
          }
        case 'Child_ready0_16436': {
          const v18559 = v17736[1];
          
          break;
          }
        case 'Child_subscribe0_16436': {
          const v18764 = v17736[1];
          
          break;
          }
        case 'Master_close0_16436': {
          const v18969 = v17736[1];
          
          break;
          }
        case 'Master_new0_16436': {
          const v19174 = v17736[1];
          
          break;
          }
        case 'Master_setup0_16436': {
          const v19379 = v17736[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Master_setup"
            });
          const v19397 = stdlib.add(v17553, stdlib.checkedBigNumberify('./index.rsh:5:23:decimal', stdlib.UInt_max, '100000'));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:5:23:decimal', stdlib.UInt_max, '100000'),
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v19540 = v19379[stdlib.checkedBigNumberify('./index.rsh:446:10:spread', stdlib.UInt_max, '0')];
          const v19547 = stdlib.sub(v19397, stdlib.checkedBigNumberify('./index.rsh:5:23:decimal', stdlib.UInt_max, '100000'));
          const v19548 = [];
          const v19549 = stdlib.bytesFromHex("0xc194ad99");
          const v19550 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v19551 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v19540,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:454:54:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('./index.rsh:454:35:application', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:454:54:application', stdlib.UInt_max, '1'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc18.defaultValue /* simReturnVal */];})();
          const v19552 = await txn1.getOutput('internal', 'v19551', ctc19, v19551);
          const v19554 = v19552[stdlib.checkedBigNumberify('./index.rsh:454:54:application', stdlib.UInt_max, '0')];
          const v19559 = stdlib.add(v19547, v19554);
          null;
          const v19561 = true;
          const v19562 = await txn1.getOutput('Master_setup', 'v19561', ctc1, v19561);
          
          const v21783 = v17549;
          const v21785 = v19559;
          const v21786 = v17549.closed;
          if (v21786) {
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
        case 'Master_touch0_16436': {
          const v19584 = v17736[1];
          
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
  const {data: [v17736], secs: v17738, time: v17737, didSend: v17294, from: v17735 } = txn1;
  switch (v17736[0]) {
    case 'Child_announce0_16436': {
      const v17739 = v17736[1];
      return;
      break;
      }
    case 'Child_close0_16436': {
      const v17944 = v17736[1];
      return;
      break;
      }
    case 'Child_delete0_16436': {
      const v18149 = v17736[1];
      return;
      break;
      }
    case 'Child_grant0_16436': {
      const v18354 = v17736[1];
      return;
      break;
      }
    case 'Child_ready0_16436': {
      const v18559 = v17736[1];
      return;
      break;
      }
    case 'Child_subscribe0_16436': {
      const v18764 = v17736[1];
      return;
      break;
      }
    case 'Master_close0_16436': {
      const v18969 = v17736[1];
      return;
      break;
      }
    case 'Master_new0_16436': {
      const v19174 = v17736[1];
      return;
      break;
      }
    case 'Master_setup0_16436': {
      const v19379 = v17736[1];
      undefined /* setApiDetails */;
      const v19393 = stdlib.addressEq(v17735, v17544);
      stdlib.assert(v19393, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:447:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:446:33:application call to [unknown function] (defined at: ./index.rsh:446:33:function exp)', 'at ./index.rsh:432:29:application call to [unknown function] (defined at: ./index.rsh:446:33:function exp)', 'at ./index.rsh:432:29:application call to [unknown function] (defined at: ./index.rsh:432:29:function exp)'],
        msg: 'Must be authorized',
        who: 'Master_setup'
        });
      const v19397 = stdlib.add(v17553, stdlib.checkedBigNumberify('./index.rsh:5:23:decimal', stdlib.UInt_max, '100000'));
      ;
      const v19540 = v19379[stdlib.checkedBigNumberify('./index.rsh:446:10:spread', stdlib.UInt_max, '0')];
      const v19547 = stdlib.sub(v19397, stdlib.checkedBigNumberify('./index.rsh:5:23:decimal', stdlib.UInt_max, '100000'));
      const v19548 = [];
      const v19549 = stdlib.bytesFromHex("0xc194ad99");
      const v19550 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v19551 = undefined /* Remote */;
      const v19552 = await txn1.getOutput('internal', 'v19551', ctc19, v19551);
      const v19554 = v19552[stdlib.checkedBigNumberify('./index.rsh:454:54:application', stdlib.UInt_max, '0')];
      const v19559 = stdlib.add(v19547, v19554);
      const v19560 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v19554);
      stdlib.assert(v19560, {
        at: './index.rsh:454:54:application',
        fs: ['at ./index.rsh:450:13:application call to [unknown function] (defined at: ./index.rsh:450:13:function exp)'],
        msg: 'remote bill check',
        who: 'Master_setup'
        });
      null;
      const v19561 = true;
      const v19562 = await txn1.getOutput('Master_setup', 'v19561', ctc1, v19561);
      if (v17294) {
        stdlib.protect(ctc18, await interact.out(v19379, v19562), {
          at: './index.rsh:446:11:application',
          fs: ['at ./index.rsh:446:11:application call to [unknown function] (defined at: ./index.rsh:446:11:function exp)', 'at ./index.rsh:459:12:application call to "k" (defined at: ./index.rsh:450:13:function exp)', 'at ./index.rsh:450:13:application call to [unknown function] (defined at: ./index.rsh:450:13:function exp)'],
          msg: 'out',
          who: 'Master_setup'
          });
        }
      else {
        }
      
      const v21783 = v17549;
      const v21785 = v19559;
      const v21786 = v17549.closed;
      if (v21786) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Master_touch0_16436': {
      const v19584 = v17736[1];
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
    Child_announce0_16436: ctc7,
    Child_close0_16436: ctc9,
    Child_delete0_16436: ctc13,
    Child_grant0_16436: ctc14,
    Child_ready0_16436: ctc9,
    Child_subscribe0_16436: ctc15,
    Master_close0_16436: ctc4,
    Master_new0_16436: ctc4,
    Master_setup0_16436: ctc16,
    Master_touch0_16436: ctc4
    });
  const ctc18 = stdlib.T_Null;
  
  
  const [v17544, v17549, v17553] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v17584 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:464:30:application call to [unknown function] (defined at: ./index.rsh:464:30:function exp)', 'at ./index.rsh:432:29:application call to "runMaster_touch0_16436" (defined at: ./index.rsh:464:10:function exp)', 'at ./index.rsh:432:29:application call to [unknown function] (defined at: ./index.rsh:432:29:function exp)'],
    msg: 'in',
    who: 'Master_touch'
    });
  const v17588 = ['Master_touch0_16436', v17584];
  
  const txn1 = await (ctc.sendrecv({
    args: [v17544, v17549, v17553, v17588],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:464:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v17736], secs: v17738, time: v17737, didSend: v17294, from: v17735 } = txn1;
      
      switch (v17736[0]) {
        case 'Child_announce0_16436': {
          const v17739 = v17736[1];
          
          break;
          }
        case 'Child_close0_16436': {
          const v17944 = v17736[1];
          
          break;
          }
        case 'Child_delete0_16436': {
          const v18149 = v17736[1];
          
          break;
          }
        case 'Child_grant0_16436': {
          const v18354 = v17736[1];
          
          break;
          }
        case 'Child_ready0_16436': {
          const v18559 = v17736[1];
          
          break;
          }
        case 'Child_subscribe0_16436': {
          const v18764 = v17736[1];
          
          break;
          }
        case 'Master_close0_16436': {
          const v18969 = v17736[1];
          
          break;
          }
        case 'Master_new0_16436': {
          const v19174 = v17736[1];
          
          break;
          }
        case 'Master_setup0_16436': {
          const v19379 = v17736[1];
          
          break;
          }
        case 'Master_touch0_16436': {
          const v19584 = v17736[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Master_touch"
            });
          ;
          const v19776 = (stdlib.le(await ctc.getBalance(), v17553) ? stdlib.checkedBigNumberify('./index.rsh:467:37:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v17553));
          const v19777 = stdlib.safeAdd(v19776, v17553);
          const v19781 = stdlib.sub(v19777, v19776);
          sim_r.txns.push({
            kind: 'from',
            to: v17544,
            tok: undefined /* Nothing */
            });
          const v19782 = true;
          const v19783 = await txn1.getOutput('Master_touch', 'v19782', ctc1, v19782);
          
          const v21838 = v17549;
          const v21840 = v19781;
          const v21841 = v17549.closed;
          if (v21841) {
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
  const {data: [v17736], secs: v17738, time: v17737, didSend: v17294, from: v17735 } = txn1;
  switch (v17736[0]) {
    case 'Child_announce0_16436': {
      const v17739 = v17736[1];
      return;
      break;
      }
    case 'Child_close0_16436': {
      const v17944 = v17736[1];
      return;
      break;
      }
    case 'Child_delete0_16436': {
      const v18149 = v17736[1];
      return;
      break;
      }
    case 'Child_grant0_16436': {
      const v18354 = v17736[1];
      return;
      break;
      }
    case 'Child_ready0_16436': {
      const v18559 = v17736[1];
      return;
      break;
      }
    case 'Child_subscribe0_16436': {
      const v18764 = v17736[1];
      return;
      break;
      }
    case 'Master_close0_16436': {
      const v18969 = v17736[1];
      return;
      break;
      }
    case 'Master_new0_16436': {
      const v19174 = v17736[1];
      return;
      break;
      }
    case 'Master_setup0_16436': {
      const v19379 = v17736[1];
      return;
      break;
      }
    case 'Master_touch0_16436': {
      const v19584 = v17736[1];
      undefined /* setApiDetails */;
      ;
      const v19776 = (stdlib.le(await ctc.getBalance(), v17553) ? stdlib.checkedBigNumberify('./index.rsh:467:37:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v17553));
      const v19777 = stdlib.safeAdd(v19776, v17553);
      const v19781 = stdlib.sub(v19777, v19776);
      ;
      const v19782 = true;
      const v19783 = await txn1.getOutput('Master_touch', 'v19782', ctc1, v19782);
      if (v17294) {
        stdlib.protect(ctc18, await interact.out(v19584, v19783), {
          at: './index.rsh:464:11:application',
          fs: ['at ./index.rsh:464:11:application call to [unknown function] (defined at: ./index.rsh:464:11:function exp)', 'at ./index.rsh:468:12:application call to "k" (defined at: ./index.rsh:466:13:function exp)', 'at ./index.rsh:466:13:application call to [unknown function] (defined at: ./index.rsh:466:13:function exp)'],
          msg: 'out',
          who: 'Master_touch'
          });
        }
      else {
        }
      
      const v21838 = v17549;
      const v21840 = v19781;
      const v21841 = v17549.closed;
      if (v21841) {
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
    3785: `381`,
    3786: `381`,
    3787: `381`,
    3788: `381`,
    3789: `381`,
    379: `147`,
    3790: `381`,
    3791: `381`,
    3792: `381`,
    3793: `381`,
    3794: `381`,
    3795: `381`,
    3796: `381`,
    3797: `381`,
    3798: `381`,
    3799: `381`,
    38: `14`,
    380: `147`,
    3800: `381`,
    3801: `381`,
    3802: `381`,
    3803: `381`,
    3804: `381`,
    3805: `381`,
    3806: `381`,
    3807: `381`,
    3808: `381`,
    3809: `381`,
    381: `147`,
    3810: `381`,
    3811: `381`,
    3812: `381`,
    3813: `381`,
    3814: `381`,
    3815: `381`,
    3816: `381`,
    3817: `381`,
    3818: `381`,
    3819: `381`,
    382: `147`,
    3820: `381`,
    3821: `381`,
    3822: `381`,
    3823: `381`,
    3824: `381`,
    3825: `381`,
    3826: `381`,
    3827: `381`,
    3828: `381`,
    3829: `381`,
    383: `147`,
    3830: `381`,
    3831: `381`,
    3832: `381`,
    3833: `381`,
    3834: `381`,
    3835: `381`,
    3836: `381`,
    3837: `381`,
    3838: `381`,
    3839: `381`,
    384: `147`,
    3840: `381`,
    3841: `381`,
    3842: `381`,
    3843: `381`,
    3844: `381`,
    3845: `381`,
    3846: `381`,
    3847: `381`,
    3848: `381`,
    3849: `381`,
    385: `147`,
    3850: `381`,
    3851: `381`,
    3852: `381`,
    3853: `381`,
    3854: `381`,
    3855: `381`,
    3856: `381`,
    3857: `381`,
    3858: `381`,
    3859: `381`,
    386: `147`,
    3860: `381`,
    3861: `381`,
    3862: `381`,
    3863: `381`,
    3864: `381`,
    3865: `381`,
    3866: `381`,
    3867: `381`,
    3868: `381`,
    3869: `381`,
    387: `147`,
    3870: `381`,
    3871: `381`,
    3872: `381`,
    3873: `381`,
    3874: `381`,
    3875: `381`,
    3876: `381`,
    3877: `381`,
    3878: `381`,
    3879: `381`,
    388: `147`,
    3880: `381`,
    3881: `381`,
    3882: `381`,
    3883: `381`,
    3884: `381`,
    3885: `381`,
    3886: `381`,
    3887: `381`,
    3888: `381`,
    3889: `381`,
    389: `147`,
    3890: `381`,
    3891: `381`,
    3892: `381`,
    3893: `381`,
    3894: `381`,
    3895: `381`,
    3896: `381`,
    3897: `381`,
    3898: `381`,
    3899: `381`,
    39: `15`,
    390: `147`,
    3900: `381`,
    3901: `381`,
    3902: `381`,
    3903: `381`,
    3904: `381`,
    3905: `381`,
    3906: `381`,
    3907: `381`,
    3908: `381`,
    3909: `381`,
    391: `147`,
    3910: `381`,
    3911: `381`,
    3912: `381`,
    3913: `381`,
    3914: `381`,
    3915: `381`,
    3916: `381`,
    3917: `381`,
    3918: `381`,
    3919: `381`,
    392: `147`,
    3920: `381`,
    3921: `381`,
    3922: `381`,
    3923: `381`,
    3924: `381`,
    3925: `381`,
    3926: `381`,
    3927: `381`,
    3928: `381`,
    3929: `381`,
    393: `147`,
    3930: `381`,
    3931: `381`,
    3932: `381`,
    3933: `381`,
    3934: `381`,
    3935: `381`,
    3936: `381`,
    3937: `381`,
    3938: `381`,
    3939: `381`,
    394: `147`,
    3940: `381`,
    3941: `381`,
    3942: `381`,
    3943: `381`,
    3944: `381`,
    3945: `381`,
    3946: `381`,
    3947: `381`,
    3948: `381`,
    3949: `381`,
    395: `147`,
    3950: `381`,
    3951: `381`,
    3952: `381`,
    3953: `381`,
    3954: `381`,
    3955: `381`,
    3956: `381`,
    3957: `381`,
    3958: `381`,
    3959: `381`,
    396: `147`,
    3960: `381`,
    3961: `381`,
    3962: `381`,
    3963: `381`,
    3964: `381`,
    3965: `381`,
    3966: `381`,
    3967: `381`,
    3968: `381`,
    3969: `381`,
    397: `147`,
    3970: `381`,
    3971: `381`,
    3972: `381`,
    3973: `381`,
    3974: `381`,
    3975: `381`,
    3976: `381`,
    3977: `381`,
    3978: `381`,
    3979: `381`,
    398: `147`,
    3980: `381`,
    3981: `381`,
    3982: `381`,
    3983: `381`,
    3984: `381`,
    3985: `381`,
    3986: `381`,
    3987: `381`,
    3988: `381`,
    3989: `381`,
    399: `147`,
    3990: `381`,
    3991: `381`,
    3992: `381`,
    3993: `381`,
    3994: `381`,
    3995: `381`,
    3996: `381`,
    3997: `381`,
    3998: `381`,
    3999: `381`,
    4: `2`,
    40: `16`,
    400: `147`,
    4000: `381`,
    4001: `381`,
    4002: `381`,
    4003: `381`,
    4004: `381`,
    4005: `381`,
    4006: `381`,
    4007: `381`,
    4008: `381`,
    4009: `381`,
    401: `147`,
    4010: `381`,
    4011: `381`,
    4012: `381`,
    4013: `381`,
    4014: `381`,
    4015: `381`,
    4016: `381`,
    4017: `381`,
    4018: `381`,
    4019: `381`,
    402: `147`,
    4020: `381`,
    4021: `381`,
    4022: `381`,
    4023: `381`,
    4024: `381`,
    4025: `381`,
    4026: `381`,
    4027: `381`,
    4028: `381`,
    4029: `381`,
    403: `147`,
    4030: `381`,
    4031: `381`,
    4032: `381`,
    4033: `381`,
    4034: `381`,
    4035: `381`,
    4036: `381`,
    4037: `381`,
    4038: `381`,
    4039: `381`,
    404: `147`,
    4040: `381`,
    4041: `381`,
    4042: `381`,
    4043: `381`,
    4044: `381`,
    4045: `381`,
    4046: `381`,
    4047: `381`,
    4048: `381`,
    4049: `381`,
    405: `147`,
    4050: `381`,
    4051: `381`,
    4052: `381`,
    4053: `381`,
    4054: `381`,
    4055: `381`,
    4056: `381`,
    4057: `381`,
    4058: `381`,
    4059: `381`,
    406: `147`,
    4060: `381`,
    4061: `381`,
    4062: `381`,
    4063: `381`,
    4064: `381`,
    4065: `381`,
    4066: `381`,
    4067: `381`,
    4068: `381`,
    4069: `381`,
    407: `147`,
    4070: `381`,
    4071: `381`,
    4072: `381`,
    4073: `381`,
    4074: `381`,
    4075: `381`,
    4076: `381`,
    4077: `381`,
    4078: `381`,
    4079: `381`,
    408: `147`,
    4080: `381`,
    4081: `381`,
    4082: `381`,
    4083: `381`,
    4084: `381`,
    4085: `381`,
    4086: `381`,
    4087: `381`,
    4088: `381`,
    4089: `381`,
    409: `147`,
    4090: `381`,
    4091: `381`,
    4092: `381`,
    4093: `381`,
    4094: `381`,
    4095: `381`,
    4096: `381`,
    4097: `381`,
    4098: `381`,
    4099: `381`,
    41: `18`,
    410: `147`,
    4100: `381`,
    4101: `381`,
    4102: `381`,
    4103: `381`,
    4104: `381`,
    4105: `381`,
    4106: `381`,
    4107: `381`,
    4108: `381`,
    4109: `381`,
    411: `147`,
    4110: `381`,
    4111: `381`,
    4112: `381`,
    4113: `381`,
    4114: `381`,
    4115: `381`,
    4116: `381`,
    4117: `381`,
    4118: `381`,
    4119: `381`,
    412: `147`,
    4120: `381`,
    4121: `381`,
    4122: `381`,
    4123: `381`,
    4124: `381`,
    4125: `381`,
    4126: `381`,
    4127: `381`,
    4128: `381`,
    4129: `381`,
    413: `147`,
    4130: `381`,
    4131: `381`,
    4132: `381`,
    4133: `381`,
    4134: `381`,
    4135: `381`,
    4136: `381`,
    4137: `381`,
    4138: `381`,
    4139: `381`,
    414: `147`,
    4140: `381`,
    4141: `381`,
    4142: `381`,
    4143: `381`,
    4144: `381`,
    4145: `381`,
    4146: `381`,
    4147: `381`,
    4148: `381`,
    4149: `381`,
    415: `147`,
    4150: `381`,
    4151: `381`,
    4152: `381`,
    4153: `381`,
    4154: `381`,
    4155: `381`,
    4156: `381`,
    4157: `381`,
    4158: `381`,
    4159: `381`,
    416: `147`,
    4160: `381`,
    4161: `381`,
    4162: `381`,
    4163: `381`,
    4164: `381`,
    4165: `381`,
    4166: `381`,
    4167: `381`,
    4168: `381`,
    4169: `381`,
    417: `147`,
    4170: `381`,
    4171: `381`,
    4172: `381`,
    4173: `381`,
    4174: `381`,
    4175: `381`,
    4176: `381`,
    4177: `381`,
    4178: `381`,
    4179: `381`,
    418: `147`,
    4180: `381`,
    4181: `381`,
    4182: `381`,
    4183: `381`,
    4184: `381`,
    4185: `381`,
    4186: `381`,
    4187: `381`,
    4188: `381`,
    4189: `381`,
    419: `147`,
    4190: `381`,
    4191: `381`,
    4192: `381`,
    4193: `381`,
    4194: `381`,
    4195: `381`,
    4196: `381`,
    4197: `381`,
    4198: `381`,
    4199: `381`,
    42: `18`,
    420: `147`,
    4200: `381`,
    4201: `381`,
    4202: `381`,
    4203: `381`,
    4204: `381`,
    4205: `381`,
    4206: `381`,
    4207: `381`,
    4208: `381`,
    4209: `381`,
    421: `147`,
    4210: `381`,
    4211: `381`,
    4212: `381`,
    4213: `381`,
    4214: `381`,
    4215: `381`,
    4216: `381`,
    4217: `381`,
    4218: `381`,
    4219: `381`,
    422: `147`,
    4220: `381`,
    4221: `381`,
    4222: `381`,
    4223: `381`,
    4224: `381`,
    4225: `381`,
    4226: `381`,
    4227: `381`,
    4228: `381`,
    4229: `381`,
    423: `147`,
    4230: `381`,
    4231: `381`,
    4232: `381`,
    4233: `381`,
    4234: `381`,
    4235: `381`,
    4236: `381`,
    4237: `381`,
    4238: `381`,
    4239: `381`,
    424: `147`,
    4240: `381`,
    4241: `381`,
    4242: `381`,
    4243: `381`,
    4244: `381`,
    4245: `381`,
    4246: `381`,
    4247: `381`,
    4248: `381`,
    4249: `381`,
    425: `147`,
    4250: `381`,
    4251: `381`,
    4252: `381`,
    4253: `381`,
    4254: `381`,
    4255: `381`,
    4256: `381`,
    4257: `381`,
    4258: `381`,
    4259: `381`,
    426: `147`,
    4260: `381`,
    4261: `381`,
    4262: `381`,
    4263: `381`,
    4264: `381`,
    4265: `381`,
    4266: `381`,
    4267: `381`,
    4268: `381`,
    4269: `381`,
    427: `147`,
    4270: `381`,
    4271: `381`,
    4272: `381`,
    4273: `381`,
    4274: `381`,
    4275: `381`,
    4276: `381`,
    4277: `381`,
    4278: `381`,
    4279: `381`,
    428: `147`,
    4280: `381`,
    4281: `381`,
    4282: `381`,
    4283: `381`,
    4284: `381`,
    4285: `381`,
    4286: `381`,
    4287: `381`,
    4288: `381`,
    4289: `381`,
    429: `147`,
    4290: `381`,
    4291: `381`,
    4292: `381`,
    4293: `381`,
    4294: `381`,
    4295: `381`,
    4296: `381`,
    4297: `381`,
    4298: `381`,
    4299: `381`,
    43: `18`,
    430: `147`,
    4300: `381`,
    4301: `381`,
    4302: `381`,
    4303: `381`,
    4304: `381`,
    4305: `381`,
    4306: `381`,
    4307: `381`,
    4308: `381`,
    4309: `381`,
    431: `147`,
    4310: `381`,
    4311: `381`,
    4312: `381`,
    4313: `381`,
    4314: `381`,
    4315: `381`,
    4316: `381`,
    4317: `381`,
    4318: `381`,
    4319: `381`,
    432: `147`,
    4320: `381`,
    4321: `381`,
    4322: `381`,
    4323: `381`,
    4324: `381`,
    4325: `381`,
    4326: `381`,
    4327: `381`,
    4328: `381`,
    4329: `381`,
    433: `147`,
    4330: `381`,
    4331: `381`,
    4332: `381`,
    4333: `381`,
    4334: `381`,
    4335: `381`,
    4336: `381`,
    4337: `381`,
    4338: `381`,
    4339: `381`,
    434: `148`,
    4340: `381`,
    4341: `381`,
    4342: `381`,
    4343: `381`,
    4344: `381`,
    4345: `381`,
    4346: `381`,
    4347: `381`,
    4348: `381`,
    4349: `381`,
    435: `148`,
    4350: `381`,
    4351: `381`,
    4352: `381`,
    4353: `381`,
    4354: `381`,
    4355: `381`,
    4356: `381`,
    4357: `381`,
    4358: `381`,
    4359: `381`,
    436: `149`,
    4360: `381`,
    4361: `381`,
    4362: `381`,
    4363: `381`,
    4364: `381`,
    4365: `381`,
    4366: `381`,
    4367: `381`,
    4368: `381`,
    4369: `381`,
    437: `149`,
    4370: `381`,
    4371: `381`,
    4372: `381`,
    4373: `381`,
    4374: `381`,
    4375: `381`,
    4376: `381`,
    4377: `381`,
    4378: `381`,
    4379: `381`,
    438: `149`,
    4380: `381`,
    4381: `381`,
    4382: `381`,
    4383: `381`,
    4384: `381`,
    4385: `381`,
    4386: `381`,
    4387: `381`,
    4388: `381`,
    4389: `381`,
    439: `152`,
    4390: `381`,
    4391: `381`,
    4392: `381`,
    4393: `381`,
    4394: `381`,
    4395: `381`,
    4396: `381`,
    4397: `381`,
    4398: `381`,
    4399: `381`,
    44: `18`,
    440: `152`,
    4400: `381`,
    4401: `381`,
    4402: `381`,
    4403: `381`,
    4404: `381`,
    4405: `381`,
    4406: `381`,
    4407: `381`,
    4408: `381`,
    4409: `381`,
    441: `152`,
    4410: `381`,
    4411: `381`,
    4412: `381`,
    4413: `381`,
    4414: `381`,
    4415: `381`,
    4416: `381`,
    4417: `381`,
    4418: `381`,
    4419: `381`,
    442: `152`,
    4420: `381`,
    4421: `381`,
    4422: `381`,
    4423: `381`,
    4424: `381`,
    4425: `381`,
    4426: `381`,
    4427: `381`,
    4428: `381`,
    4429: `381`,
    443: `152`,
    4430: `381`,
    4431: `381`,
    4432: `381`,
    4433: `381`,
    4434: `381`,
    4435: `381`,
    4436: `381`,
    4437: `381`,
    4438: `381`,
    4439: `381`,
    444: `152`,
    4440: `381`,
    4441: `381`,
    4442: `381`,
    4443: `381`,
    4444: `381`,
    4445: `381`,
    4446: `381`,
    4447: `381`,
    4448: `381`,
    4449: `381`,
    445: `152`,
    4450: `381`,
    4451: `381`,
    4452: `381`,
    4453: `381`,
    4454: `381`,
    4455: `381`,
    4456: `381`,
    4457: `381`,
    4458: `381`,
    4459: `381`,
    446: `152`,
    4460: `381`,
    4461: `381`,
    4462: `381`,
    4463: `381`,
    4464: `381`,
    4465: `381`,
    4466: `381`,
    4467: `381`,
    4468: `381`,
    4469: `381`,
    447: `152`,
    4470: `381`,
    4471: `381`,
    4472: `381`,
    4473: `381`,
    4474: `381`,
    4475: `381`,
    4476: `381`,
    4477: `381`,
    4478: `381`,
    4479: `381`,
    448: `152`,
    4480: `381`,
    4481: `381`,
    4482: `381`,
    4483: `381`,
    4484: `381`,
    4485: `381`,
    4486: `381`,
    4487: `381`,
    4488: `381`,
    4489: `381`,
    449: `152`,
    4490: `381`,
    4491: `381`,
    4492: `381`,
    4493: `381`,
    4494: `381`,
    4495: `381`,
    4496: `381`,
    4497: `381`,
    4498: `381`,
    4499: `381`,
    45: `18`,
    450: `152`,
    4500: `381`,
    4501: `381`,
    4502: `381`,
    4503: `381`,
    4504: `381`,
    4505: `381`,
    4506: `381`,
    4507: `381`,
    4508: `381`,
    4509: `381`,
    451: `152`,
    4510: `381`,
    4511: `381`,
    4512: `381`,
    4513: `381`,
    4514: `381`,
    4515: `381`,
    4516: `381`,
    4517: `381`,
    4518: `381`,
    4519: `381`,
    452: `152`,
    4520: `381`,
    4521: `381`,
    4522: `381`,
    4523: `381`,
    4524: `381`,
    4525: `381`,
    4526: `381`,
    4527: `381`,
    4528: `381`,
    4529: `381`,
    453: `152`,
    4530: `381`,
    4531: `381`,
    4532: `381`,
    4533: `381`,
    4534: `381`,
    4535: `381`,
    4536: `381`,
    4537: `381`,
    4538: `381`,
    4539: `381`,
    454: `152`,
    4540: `381`,
    4541: `381`,
    4542: `381`,
    4543: `381`,
    4544: `381`,
    4545: `381`,
    4546: `381`,
    4547: `381`,
    4548: `381`,
    4549: `381`,
    455: `152`,
    4550: `381`,
    4551: `381`,
    4552: `381`,
    4553: `381`,
    4554: `381`,
    4555: `381`,
    4556: `381`,
    4557: `381`,
    4558: `381`,
    4559: `381`,
    456: `152`,
    4560: `381`,
    4561: `381`,
    4562: `381`,
    4563: `381`,
    4564: `381`,
    4565: `381`,
    4566: `381`,
    4567: `381`,
    4568: `381`,
    4569: `381`,
    457: `152`,
    4570: `381`,
    4571: `381`,
    4572: `381`,
    4573: `381`,
    4574: `381`,
    4575: `381`,
    4576: `381`,
    4577: `381`,
    4578: `381`,
    4579: `381`,
    458: `152`,
    4580: `381`,
    4581: `381`,
    4582: `381`,
    4583: `381`,
    4584: `381`,
    4585: `381`,
    4586: `381`,
    4587: `381`,
    4588: `381`,
    4589: `381`,
    459: `152`,
    4590: `381`,
    4591: `381`,
    4592: `381`,
    4593: `381`,
    4594: `381`,
    4595: `381`,
    4596: `381`,
    4597: `381`,
    4598: `381`,
    4599: `381`,
    46: `18`,
    460: `152`,
    4600: `381`,
    4601: `381`,
    4602: `381`,
    4603: `381`,
    4604: `381`,
    4605: `381`,
    4606: `381`,
    4607: `381`,
    4608: `381`,
    4609: `381`,
    461: `152`,
    4610: `381`,
    4611: `381`,
    4612: `381`,
    4613: `381`,
    4614: `381`,
    4615: `381`,
    4616: `381`,
    4617: `381`,
    4618: `381`,
    4619: `381`,
    462: `152`,
    4620: `381`,
    4621: `381`,
    4622: `381`,
    4623: `381`,
    4624: `381`,
    4625: `381`,
    4626: `381`,
    4627: `381`,
    4628: `381`,
    4629: `381`,
    463: `152`,
    4630: `381`,
    4631: `381`,
    4632: `381`,
    4633: `381`,
    4634: `381`,
    4635: `381`,
    4636: `381`,
    4637: `381`,
    4638: `381`,
    4639: `381`,
    464: `152`,
    4640: `381`,
    4641: `381`,
    4642: `381`,
    4643: `381`,
    4644: `381`,
    4645: `381`,
    4646: `381`,
    4647: `381`,
    4648: `381`,
    4649: `381`,
    465: `152`,
    4650: `381`,
    4651: `381`,
    4652: `381`,
    4653: `381`,
    4654: `381`,
    4655: `381`,
    4656: `381`,
    4657: `381`,
    4658: `381`,
    4659: `381`,
    466: `152`,
    4660: `381`,
    4661: `381`,
    4662: `381`,
    4663: `381`,
    4664: `381`,
    4665: `381`,
    4666: `381`,
    4667: `381`,
    4668: `381`,
    4669: `381`,
    467: `152`,
    4670: `381`,
    4671: `381`,
    4672: `381`,
    4673: `381`,
    4674: `381`,
    4675: `381`,
    4676: `381`,
    4677: `381`,
    4678: `381`,
    4679: `381`,
    468: `152`,
    4680: `381`,
    4681: `381`,
    4682: `381`,
    4683: `381`,
    4684: `381`,
    4685: `381`,
    4686: `381`,
    4687: `381`,
    4688: `381`,
    4689: `381`,
    469: `152`,
    4690: `381`,
    4691: `381`,
    4692: `381`,
    4693: `381`,
    4694: `381`,
    4695: `381`,
    4696: `381`,
    4697: `381`,
    4698: `381`,
    4699: `381`,
    47: `18`,
    470: `152`,
    4700: `381`,
    4701: `381`,
    4702: `381`,
    4703: `381`,
    4704: `381`,
    4705: `381`,
    4706: `381`,
    4707: `381`,
    4708: `381`,
    4709: `381`,
    471: `152`,
    4710: `381`,
    4711: `381`,
    4712: `381`,
    4713: `381`,
    4714: `381`,
    4715: `381`,
    4716: `381`,
    4717: `381`,
    4718: `381`,
    4719: `381`,
    472: `152`,
    4720: `381`,
    4721: `381`,
    4722: `381`,
    4723: `381`,
    4724: `381`,
    4725: `381`,
    4726: `381`,
    4727: `381`,
    4728: `381`,
    4729: `381`,
    473: `152`,
    4730: `381`,
    4731: `381`,
    4732: `381`,
    4733: `381`,
    4734: `381`,
    4735: `381`,
    4736: `381`,
    4737: `381`,
    4738: `381`,
    4739: `381`,
    474: `152`,
    4740: `381`,
    4741: `381`,
    4742: `381`,
    4743: `381`,
    4744: `381`,
    4745: `381`,
    4746: `381`,
    4747: `381`,
    4748: `381`,
    4749: `381`,
    475: `152`,
    4750: `381`,
    4751: `381`,
    4752: `381`,
    4753: `381`,
    4754: `381`,
    4755: `381`,
    4756: `381`,
    4757: `381`,
    4758: `381`,
    4759: `381`,
    476: `152`,
    4760: `381`,
    4761: `381`,
    4762: `381`,
    4763: `381`,
    4764: `381`,
    4765: `381`,
    4766: `381`,
    4767: `381`,
    4768: `381`,
    4769: `381`,
    477: `152`,
    4770: `381`,
    4771: `381`,
    4772: `381`,
    4773: `381`,
    4774: `381`,
    4775: `381`,
    4776: `381`,
    4777: `381`,
    4778: `381`,
    4779: `381`,
    478: `152`,
    4780: `381`,
    4781: `381`,
    4782: `381`,
    4783: `381`,
    4784: `381`,
    4785: `381`,
    4786: `381`,
    4787: `381`,
    4788: `381`,
    4789: `381`,
    479: `152`,
    4790: `381`,
    4791: `381`,
    4792: `381`,
    4793: `381`,
    4794: `381`,
    4795: `381`,
    4796: `381`,
    4797: `381`,
    4798: `381`,
    4799: `381`,
    48: `18`,
    480: `152`,
    4800: `381`,
    4801: `381`,
    4802: `381`,
    4803: `381`,
    4804: `381`,
    4805: `381`,
    4806: `381`,
    4807: `381`,
    4808: `381`,
    4809: `381`,
    481: `152`,
    4810: `381`,
    4811: `381`,
    4812: `381`,
    4813: `381`,
    4814: `381`,
    4815: `381`,
    4816: `381`,
    4817: `381`,
    4818: `381`,
    4819: `381`,
    482: `152`,
    4820: `381`,
    4821: `381`,
    4822: `381`,
    4823: `381`,
    4824: `381`,
    4825: `381`,
    4826: `381`,
    4827: `381`,
    4828: `381`,
    4829: `381`,
    483: `152`,
    4830: `381`,
    4831: `381`,
    4832: `381`,
    4833: `381`,
    4834: `381`,
    4835: `381`,
    4836: `381`,
    4837: `381`,
    4838: `381`,
    4839: `381`,
    484: `152`,
    4840: `381`,
    4841: `381`,
    4842: `381`,
    4843: `381`,
    4844: `381`,
    4845: `381`,
    4846: `381`,
    4847: `381`,
    4848: `381`,
    4849: `381`,
    485: `152`,
    4850: `381`,
    4851: `381`,
    4852: `381`,
    4853: `381`,
    4854: `381`,
    4855: `381`,
    4856: `381`,
    4857: `381`,
    4858: `381`,
    4859: `381`,
    486: `152`,
    4860: `381`,
    4861: `381`,
    4862: `381`,
    4863: `381`,
    4864: `381`,
    4865: `381`,
    4866: `381`,
    4867: `381`,
    4868: `381`,
    4869: `381`,
    487: `152`,
    4870: `381`,
    4871: `381`,
    4872: `381`,
    4873: `381`,
    4874: `381`,
    4875: `381`,
    4876: `381`,
    4877: `381`,
    4878: `381`,
    4879: `381`,
    488: `152`,
    4880: `381`,
    4881: `381`,
    4882: `381`,
    4883: `381`,
    4884: `381`,
    4885: `381`,
    4886: `381`,
    4887: `381`,
    4888: `381`,
    4889: `381`,
    489: `152`,
    4890: `381`,
    4891: `381`,
    4892: `381`,
    4893: `381`,
    4894: `381`,
    4895: `381`,
    4896: `381`,
    4897: `381`,
    4898: `381`,
    4899: `381`,
    49: `18`,
    490: `152`,
    4900: `381`,
    4901: `381`,
    4902: `381`,
    4903: `381`,
    4904: `381`,
    4905: `381`,
    4906: `381`,
    4907: `381`,
    4908: `381`,
    4909: `381`,
    491: `152`,
    4910: `381`,
    4911: `381`,
    4912: `381`,
    4913: `381`,
    4914: `381`,
    4915: `381`,
    4916: `381`,
    4917: `381`,
    4918: `381`,
    4919: `381`,
    492: `152`,
    4920: `381`,
    4921: `381`,
    4922: `381`,
    4923: `381`,
    4924: `381`,
    4925: `381`,
    4926: `381`,
    4927: `381`,
    4928: `381`,
    4929: `381`,
    493: `152`,
    4930: `381`,
    4931: `381`,
    4932: `381`,
    4933: `381`,
    4934: `381`,
    4935: `381`,
    4936: `381`,
    4937: `381`,
    4938: `381`,
    4939: `381`,
    494: `152`,
    4940: `381`,
    4941: `381`,
    4942: `381`,
    4943: `381`,
    4944: `381`,
    4945: `381`,
    4946: `381`,
    4947: `381`,
    4948: `381`,
    4949: `381`,
    495: `152`,
    4950: `381`,
    4951: `381`,
    4952: `381`,
    4953: `381`,
    4954: `381`,
    4955: `381`,
    4956: `381`,
    4957: `381`,
    4958: `381`,
    4959: `381`,
    496: `152`,
    4960: `381`,
    4961: `381`,
    4962: `381`,
    4963: `381`,
    4964: `381`,
    4965: `381`,
    4966: `381`,
    4967: `381`,
    4968: `381`,
    4969: `381`,
    497: `152`,
    4970: `381`,
    4971: `381`,
    4972: `381`,
    4973: `381`,
    4974: `381`,
    4975: `381`,
    4976: `381`,
    4977: `381`,
    4978: `381`,
    4979: `381`,
    498: `152`,
    4980: `381`,
    4981: `381`,
    4982: `381`,
    4983: `381`,
    4984: `381`,
    4985: `381`,
    4986: `381`,
    4987: `381`,
    4988: `381`,
    4989: `381`,
    499: `152`,
    4990: `381`,
    4991: `381`,
    4992: `381`,
    4993: `381`,
    4994: `381`,
    4995: `381`,
    4996: `381`,
    4997: `381`,
    4998: `381`,
    4999: `381`,
    5: `2`,
    50: `18`,
    500: `152`,
    5000: `381`,
    5001: `381`,
    5002: `381`,
    5003: `381`,
    5004: `381`,
    5005: `381`,
    5006: `381`,
    5007: `381`,
    5008: `381`,
    5009: `381`,
    501: `152`,
    5010: `381`,
    5011: `381`,
    5012: `381`,
    5013: `381`,
    5014: `381`,
    5015: `381`,
    5016: `381`,
    5017: `381`,
    5018: `381`,
    5019: `381`,
    502: `152`,
    5020: `381`,
    5021: `381`,
    5022: `381`,
    5023: `381`,
    5024: `381`,
    5025: `381`,
    5026: `381`,
    5027: `381`,
    5028: `381`,
    5029: `381`,
    503: `152`,
    5030: `381`,
    5031: `381`,
    5032: `381`,
    5033: `381`,
    5034: `381`,
    5035: `381`,
    5036: `381`,
    5037: `381`,
    5038: `381`,
    5039: `381`,
    504: `152`,
    5040: `381`,
    5041: `381`,
    5042: `381`,
    5043: `381`,
    5044: `381`,
    5045: `381`,
    5046: `381`,
    5047: `381`,
    5048: `381`,
    5049: `381`,
    505: `152`,
    5050: `381`,
    5051: `381`,
    5052: `381`,
    5053: `381`,
    5054: `381`,
    5055: `381`,
    5056: `381`,
    5057: `381`,
    5058: `381`,
    5059: `381`,
    506: `152`,
    5060: `381`,
    5061: `381`,
    5062: `381`,
    5063: `381`,
    5064: `381`,
    5065: `381`,
    5066: `381`,
    5067: `381`,
    5068: `381`,
    5069: `381`,
    507: `152`,
    5070: `381`,
    5071: `381`,
    5072: `381`,
    5073: `381`,
    5074: `381`,
    5075: `381`,
    5076: `381`,
    5077: `381`,
    5078: `381`,
    5079: `381`,
    508: `152`,
    5080: `381`,
    5081: `381`,
    5082: `381`,
    5083: `381`,
    5084: `381`,
    5085: `381`,
    5086: `381`,
    5087: `381`,
    5088: `381`,
    5089: `381`,
    509: `152`,
    5090: `381`,
    5091: `381`,
    5092: `381`,
    5093: `381`,
    5094: `381`,
    5095: `381`,
    5096: `381`,
    5097: `381`,
    5098: `381`,
    5099: `381`,
    51: `18`,
    510: `152`,
    5100: `381`,
    5101: `381`,
    5102: `381`,
    5103: `381`,
    5104: `381`,
    5105: `381`,
    5106: `381`,
    5107: `381`,
    5108: `381`,
    5109: `381`,
    511: `152`,
    5110: `381`,
    5111: `381`,
    5112: `381`,
    5113: `381`,
    5114: `381`,
    5115: `381`,
    5116: `381`,
    5117: `381`,
    5118: `381`,
    5119: `381`,
    512: `152`,
    5120: `381`,
    5121: `381`,
    5122: `381`,
    5123: `381`,
    5124: `381`,
    5125: `381`,
    5126: `381`,
    5127: `381`,
    5128: `381`,
    5129: `381`,
    513: `152`,
    5130: `381`,
    5131: `381`,
    5132: `381`,
    5133: `381`,
    5134: `381`,
    5135: `381`,
    5136: `381`,
    5137: `381`,
    5138: `381`,
    5139: `381`,
    514: `152`,
    5140: `381`,
    5141: `381`,
    5142: `381`,
    5143: `381`,
    5144: `381`,
    5145: `381`,
    5146: `381`,
    5147: `381`,
    5148: `381`,
    5149: `381`,
    515: `152`,
    5150: `381`,
    5151: `381`,
    5152: `381`,
    5153: `381`,
    5154: `381`,
    5155: `381`,
    5156: `381`,
    5157: `381`,
    5158: `381`,
    5159: `381`,
    516: `152`,
    5160: `381`,
    5161: `381`,
    5162: `381`,
    5163: `381`,
    5164: `381`,
    5165: `381`,
    5166: `381`,
    5167: `381`,
    5168: `381`,
    5169: `381`,
    517: `152`,
    5170: `382`,
    5171: `382`,
    5172: `383`,
    5173: `383`,
    5174: `383`,
    5175: `383`,
    5176: `383`,
    5177: `383`,
    5178: `383`,
    5179: `383`,
    518: `152`,
    5180: `383`,
    5181: `383`,
    5182: `383`,
    5183: `383`,
    5184: `383`,
    5185: `383`,
    5186: `383`,
    5187: `383`,
    5188: `383`,
    5189: `383`,
    519: `152`,
    5190: `383`,
    5191: `383`,
    5192: `383`,
    5193: `383`,
    5194: `383`,
    5195: `383`,
    5196: `384`,
    5197: `384`,
    5198: `385`,
    5199: `386`,
    52: `18`,
    520: `152`,
    5200: `386`,
    5201: `387`,
    5202: `387`,
    5203: `388`,
    5204: `388`,
    5205: `389`,
    5206: `389`,
    5207: `390`,
    5208: `390`,
    5209: `391`,
    521: `152`,
    5210: `392`,
    5211: `393`,
    5212: `393`,
    5213: `394`,
    5214: `395`,
    5215: `395`,
    5216: `396`,
    5217: `396`,
    5218: `397`,
    5219: `397`,
    522: `152`,
    5220: `397`,
    5221: `397`,
    5222: `397`,
    5223: `397`,
    5224: `397`,
    5225: `397`,
    5226: `397`,
    5227: `397`,
    5228: `398`,
    5229: `398`,
    523: `152`,
    5230: `399`,
    5231: `400`,
    5232: `401`,
    5233: `402`,
    5234: `402`,
    5235: `403`,
    5236: `403`,
    5237: `404`,
    5238: `404`,
    5239: `404`,
    524: `152`,
    5240: `404`,
    5241: `404`,
    5242: `404`,
    5243: `405`,
    5244: `405`,
    5245: `406`,
    5246: `407`,
    5247: `408`,
    5248: `410`,
    5249: `410`,
    525: `152`,
    5250: `410`,
    5251: `410`,
    5252: `410`,
    5253: `410`,
    5254: `410`,
    5255: `410`,
    5256: `410`,
    5257: `410`,
    5258: `411`,
    5259: `411`,
    526: `152`,
    5260: `412`,
    5261: `413`,
    5262: `414`,
    5263: `415`,
    5264: `415`,
    5265: `416`,
    5266: `417`,
    5267: `417`,
    5268: `418`,
    5269: `418`,
    527: `152`,
    5270: `419`,
    5271: `419`,
    5272: `420`,
    5273: `420`,
    5274: `420`,
    5275: `422`,
    5276: `422`,
    5277: `423`,
    5278: `423`,
    5279: `424`,
    528: `152`,
    5280: `425`,
    5281: `432`,
    5282: `433`,
    5283: `433`,
    5284: `433`,
    5285: `436`,
    5286: `436`,
    5287: `437`,
    5288: `438`,
    5289: `439`,
    529: `152`,
    5290: `439`,
    5291: `440`,
    5292: `440`,
    5293: `440`,
    5294: `440`,
    5295: `440`,
    5296: `440`,
    5297: `440`,
    5298: `441`,
    5299: `441`,
    53: `18`,
    530: `152`,
    5300: `442`,
    5301: `443`,
    5302: `444`,
    5303: `445`,
    5304: `445`,
    5305: `446`,
    5306: `446`,
    5307: `447`,
    5308: `448`,
    5309: `448`,
    531: `153`,
    5310: `449`,
    5311: `450`,
    5312: `450`,
    5313: `451`,
    5314: `452`,
    5315: `452`,
    5316: `453`,
    5317: `454`,
    5318: `455`,
    5319: `456`,
    532: `153`,
    5320: `457`,
    5321: `457`,
    5322: `458`,
    5323: `459`,
    5324: `459`,
    5325: `460`,
    5326: `460`,
    5327: `460`,
    5328: `461`,
    5329: `462`,
    533: `154`,
    5330: `463`,
    5331: `463`,
    5332: `464`,
    5333: `464`,
    5334: `465`,
    5335: `465`,
    5336: `466`,
    5337: `466`,
    5338: `468`,
    5339: `468`,
    534: `154`,
    5340: `469`,
    5341: `469`,
    5342: `469`,
    5343: `469`,
    5344: `469`,
    5345: `469`,
    5346: `470`,
    5347: `470`,
    5348: `471`,
    5349: `472`,
    535: `154`,
    5350: `473`,
    5351: `473`,
    5352: `474`,
    5353: `478`,
    5354: `478`,
    5355: `479`,
    5356: `480`,
    5357: `480`,
    5358: `481`,
    5359: `482`,
    536: `156`,
    5360: `482`,
    5361: `483`,
    5362: `484`,
    5363: `485`,
    5364: `486`,
    5365: `486`,
    5366: `486`,
    5367: `487`,
    5368: `487`,
    5369: `487`,
    537: `156`,
    5370: `488`,
    5371: `489`,
    5372: `489`,
    5373: `490`,
    5374: `490`,
    5375: `490`,
    5376: `490`,
    5377: `490`,
    5378: `490`,
    5379: `490`,
    538: `156`,
    5380: `490`,
    5381: `490`,
    5382: `490`,
    5383: `491`,
    5384: `491`,
    5385: `492`,
    5386: `493`,
    5387: `494`,
    5388: `494`,
    5389: `495`,
    539: `157`,
    5390: `496`,
    5391: `496`,
    5392: `497`,
    5393: `498`,
    5394: `499`,
    5395: `499`,
    5396: `500`,
    5397: `501`,
    5398: `501`,
    5399: `502`,
    54: `18`,
    540: `158`,
    5400: `503`,
    5401: `507`,
    5402: `507`,
    5403: `507`,
    5404: `507`,
    5405: `507`,
    5406: `507`,
    5407: `508`,
    5408: `508`,
    5409: `509`,
    541: `158`,
    5410: `510`,
    5411: `511`,
    5412: `513`,
    5413: `514`,
    5414: `514`,
    5415: `515`,
    5416: `515`,
    5417: `515`,
    5418: `515`,
    5419: `515`,
    542: `160`,
    5420: `515`,
    5421: `515`,
    5422: `515`,
    5423: `515`,
    5424: `515`,
    5425: `516`,
    5426: `516`,
    5427: `517`,
    5428: `518`,
    5429: `518`,
    543: `161`,
    5430: `518`,
    5431: `519`,
    5432: `520`,
    5433: `521`,
    5434: `521`,
    5435: `522`,
    5436: `523`,
    5437: `523`,
    5438: `523`,
    5439: `524`,
    544: `162`,
    5440: `524`,
    5441: `525`,
    5442: `525`,
    5443: `526`,
    5444: `526`,
    5445: `527`,
    5446: `528`,
    5447: `529`,
    5448: `530`,
    5449: `531`,
    545: `163`,
    5450: `531`,
    5451: `532`,
    5452: `533`,
    5453: `533`,
    5454: `534`,
    5455: `534`,
    5456: `535`,
    5457: `535`,
    5458: `535`,
    5459: `537`,
    546: `163`,
    5460: `537`,
    5461: `538`,
    5462: `539`,
    5463: `539`,
    5464: `540`,
    5465: `541`,
    5466: `542`,
    5467: `542`,
    5468: `543`,
    5469: `545`,
    547: `164`,
    5470: `546`,
    5471: `546`,
    5472: `548`,
    5473: `548`,
    5474: `549`,
    5475: `549`,
    5476: `549`,
    5477: `550`,
    5478: `551`,
    5479: `551`,
    548: `165`,
    5480: `552`,
    5481: `552`,
    5482: `552`,
    5483: `552`,
    5484: `552`,
    5485: `552`,
    5486: `552`,
    5487: `552`,
    5488: `552`,
    5489: `552`,
    549: `166`,
    5490: `553`,
    5491: `553`,
    5492: `554`,
    5493: `555`,
    5494: `555`,
    5495: `555`,
    5496: `556`,
    5497: `557`,
    5498: `558`,
    5499: `558`,
    55: `18`,
    550: `166`,
    5500: `559`,
    5501: `560`,
    5502: `560`,
    5503: `560`,
    5504: `561`,
    5505: `561`,
    5506: `562`,
    5507: `562`,
    5508: `563`,
    5509: `563`,
    551: `167`,
    5510: `564`,
    5511: `564`,
    5512: `565`,
    5513: `566`,
    5514: `566`,
    5515: `567`,
    5516: `568`,
    5517: `568`,
    5518: `569`,
    5519: `569`,
    552: `168`,
    5520: `570`,
    5521: `570`,
    5522: `570`,
    5523: `572`,
    5524: `572`,
    5525: `573`,
    5526: `573`,
    5527: `574`,
    5528: `574`,
    5529: `575`,
    553: `169`,
    5530: `576`,
    5531: `576`,
    5532: `577`,
    5533: `577`,
    5534: `577`,
    5535: `577`,
    5536: `577`,
    5537: `577`,
    5538: `578`,
    5539: `578`,
    554: `170`,
    5540: `579`,
    5541: `580`,
    5542: `581`,
    5543: `583`,
    5544: `583`,
    5545: `584`,
    5546: `584`,
    5547: `584`,
    5548: `585`,
    5549: `586`,
    555: `170`,
    5550: `586`,
    5551: `587`,
    5552: `588`,
    5553: `588`,
    5554: `589`,
    5555: `589`,
    5556: `590`,
    5557: `590`,
    5558: `591`,
    5559: `591`,
    556: `171`,
    5560: `591`,
    5561: `593`,
    5562: `593`,
    5563: `593`,
    5564: `594`,
    5565: `595`,
    5566: `595`,
    5567: `595`,
    5568: `596`,
    5569: `596`,
    557: `171`,
    5570: `596`,
    5571: `597`,
    5572: `597`,
    5573: `598`,
    5574: `598`,
    5575: `598`,
    5576: `600`,
    5577: `600`,
    5578: `600`,
    5579: `601`,
    558: `171`,
    5580: `601`,
    5581: `601`,
    5582: `602`,
    5583: `602`,
    5584: `603`,
    5585: `603`,
    5586: `603`,
    5587: `605`,
    5588: `606`,
    5589: `606`,
    559: `174`,
    5590: `607`,
    5591: `608`,
    5592: `609`,
    5593: `609`,
    5594: `610`,
    5595: `610`,
    5596: `611`,
    5597: `612`,
    5598: `613`,
    5599: `614`,
    56: `18`,
    560: `174`,
    5600: `614`,
    5601: `615`,
    5602: `616`,
    5603: `617`,
    5604: `618`,
    5605: `618`,
    5606: `619`,
    5607: `620`,
    5608: `621`,
    5609: `621`,
    561: `174`,
    5610: `621`,
    5611: `622`,
    5612: `622`,
    5613: `623`,
    5614: `624`,
    5615: `625`,
    5616: `627`,
    5617: `627`,
    5618: `628`,
    5619: `628`,
    562: `174`,
    5620: `629`,
    5621: `630`,
    5622: `631`,
    5623: `631`,
    5624: `631`,
    5625: `632`,
    5626: `633`,
    5627: `634`,
    5628: `634`,
    5629: `635`,
    563: `174`,
    5630: `636`,
    5631: `636`,
    5632: `637`,
    5633: `638`,
    5634: `639`,
    5635: `640`,
    5636: `640`,
    5637: `641`,
    5638: `642`,
    5639: `643`,
    564: `174`,
    5640: `645`,
    5641: `645`,
    5642: `645`,
    5643: `646`,
    5644: `646`,
    5645: `646`,
    5646: `648`,
    5647: `648`,
    5648: `649`,
    5649: `650`,
    565: `174`,
    5650: `651`,
    5651: `653`,
    5652: `653`,
    5653: `653`,
    5654: `655`,
    5655: `655`,
    5656: `655`,
    5657: `657`,
    5658: `657`,
    5659: `657`,
    566: `174`,
    5660: `659`,
    5661: `659`,
    5662: `659`,
    5663: `661`,
    5664: `661`,
    5665: `661`,
    5666: `664`,
    5667: `664`,
    5668: `665`,
    5669: `665`,
    567: `174`,
    5670: `666`,
    5671: `667`,
    5672: `667`,
    5673: `668`,
    5674: `669`,
    5675: `670`,
    5676: `670`,
    5677: `671`,
    5678: `671`,
    5679: `672`,
    568: `174`,
    5680: `672`,
    5681: `672`,
    5682: `674`,
    5683: `675`,
    5684: `675`,
    5685: `676`,
    5686: `677`,
    5687: `677`,
    5688: `678`,
    5689: `678`,
    569: `174`,
    5690: `679`,
    5691: `679`,
    5692: `680`,
    5693: `682`,
    5694: `683`,
    5695: `683`,
    5696: `684`,
    5697: `685`,
    5698: `685`,
    5699: `686`,
    57: `18`,
    570: `174`,
    5700: `686`,
    5701: `687`,
    5702: `687`,
    5703: `688`,
    5704: `689`,
    5705: `691`,
    5706: `691`,
    5707: `691`,
    5708: `693`,
    5709: `693`,
    571: `174`,
    5710: `693`,
    5711: `695`,
    5712: `695`,
    5713: `695`,
    5714: `697`,
    5715: `697`,
    5716: `697`,
    5717: `699`,
    5718: `699`,
    5719: `699`,
    572: `174`,
    5720: `701`,
    5721: `701`,
    5722: `701`,
    5723: `703`,
    5724: `704`,
    5725: `706`,
    5726: `707`,
    5727: `708`,
    5728: `709`,
    5729: `709`,
    573: `174`,
    5730: `710`,
    5731: `710`,
    5732: `711`,
    5733: `711`,
    5734: `711`,
    5735: `712`,
    5736: `714`,
    5737: `715`,
    5738: `716`,
    5739: `716`,
    574: `174`,
    5740: `716`,
    5741: `717`,
    5742: `718`,
    5743: `718`,
    5744: `719`,
    5745: `719`,
    5746: `719`,
    5747: `720`,
    5748: `722`,
    5749: `723`,
    575: `174`,
    5750: `723`,
    5751: `724`,
    5752: `726`,
    5753: `727`,
    5754: `728`,
    5755: `729`,
    5756: `730`,
    5757: `730`,
    5758: `731`,
    5759: `732`,
    576: `174`,
    5760: `733`,
    5761: `734`,
    5762: `736`,
    5763: `736`,
    5764: `737`,
    5765: `737`,
    5766: `738`,
    5767: `739`,
    5768: `740`,
    5769: `740`,
    577: `174`,
    5770: `740`,
    5771: `741`,
    5772: `741`,
    5773: `741`,
    5774: `743`,
    5775: `743`,
    5776: `744`,
    5777: `745`,
    5778: `745`,
    5779: `746`,
    578: `174`,
    5780: `748`,
    5781: `749`,
    5782: `749`,
    5783: `749`,
    5784: `752`,
    5785: `752`,
    5786: `753`,
    5787: `753`,
    5788: `754`,
    5789: `755`,
    579: `174`,
    5790: `756`,
    5791: `757`,
    5792: `757`,
    5793: `758`,
    5794: `759`,
    5795: `759`,
    5796: `760`,
    5797: `760`,
    5798: `761`,
    5799: `761`,
    58: `18`,
    580: `174`,
    5800: `762`,
    5801: `763`,
    5802: `764`,
    5803: `764`,
    5804: `765`,
    5805: `766`,
    5806: `767`,
    5807: `768`,
    5808: `768`,
    5809: `769`,
    581: `174`,
    5810: `770`,
    5811: `771`,
    5812: `773`,
    5813: `774`,
    5814: `774`,
    5815: `775`,
    5816: `775`,
    5817: `775`,
    5818: `777`,
    5819: `778`,
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
  warnings: [`Step 2 calls a remote object at /app/index.rsh:454:54:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates a child contract and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:535:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:432:29:after expr stmt semicolon',
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
