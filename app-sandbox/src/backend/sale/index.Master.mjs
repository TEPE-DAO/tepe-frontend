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
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0, ctc1, ctc1, ctc0, ctc2, ctc2]);
  const ctc4 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc0, ctc1, ctc1, ctc1]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc0, ctc1, ctc1]);
  const ctc7 = stdlib.T_Data({
    DeletePurchase: ctc5,
    DeleteSale: ctc6
    });
  const ctc8 = stdlib.T_Tuple([ctc0, ctc0, ctc1]);
  return {
    announce: [ctc3],
    close: [ctc4],
    delete: [ctc7],
    grant: [ctc8],
    new: [ctc0],
    ready: [ctc4],
    setup: [ctc0]
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
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc2, ctc2, ctc1, ctc3, ctc3]);
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc2, ctc2, ctc2]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc2, ctc2]);
  const ctc10 = stdlib.T_Data({
    DeletePurchase: ctc8,
    DeleteSale: ctc9
    });
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc2]);
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Data({
    Child_announce0_5624: ctc5,
    Child_close0_5624: ctc7,
    Child_delete0_5624: ctc11,
    Child_grant0_5624: ctc13,
    Child_ready0_5624: ctc7,
    Master_close0_5624: ctc14,
    Master_new0_5624: ctc14,
    Master_setup0_5624: ctc15,
    Master_touch0_5624: ctc14
    });
  const ctc17 = stdlib.T_Bool;
  const ctc18 = stdlib.T_Tuple([ctc3, ctc0]);
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:373:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:373:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v6630, time: v6629, didSend: v5600, from: v6628 } = txn1;
      
      ;
      
      const v6632 = {
        closed: false
        };
      const v6633 = v6632;
      const v6634 = v6629;
      const v6637 = stdlib.checkedBigNumberify('./index.rsh:372:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v6640 = v6633.closed;
        const v6641 = v6640 ? false : true;
        
        return v6641;})()) {
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
  const {data: [], secs: v6630, time: v6629, didSend: v5600, from: v6628 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:374:19:application',
    fs: ['at ./index.rsh:374:19:application call to [unknown function] (defined at: ./index.rsh:374:19:function exp)', 'at ./index.rsh:374:19:application call to "liftedInteract" (defined at: ./index.rsh:374:19:application)'],
    msg: 'ready',
    who: 'Alice'
    });
  
  const v6632 = {
    closed: false
    };
  let v6633 = v6632;
  let v6634 = v6629;
  let v6637 = stdlib.checkedBigNumberify('./index.rsh:372:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v6640 = v6633.closed;
    const v6641 = v6640 ? false : true;
    
    return v6641;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc16],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v6805], secs: v6807, time: v6806, didSend: v6392, from: v6804 } = txn3;
    switch (v6805[0]) {
      case 'Child_announce0_5624': {
        const v6808 = v6805[1];
        undefined /* setApiDetails */;
        ;
        const v6827 = v6808[stdlib.checkedBigNumberify('./index.rsh:440:10:spread', stdlib.UInt_max, '0')];
        const v6829 = true;
        await txn3.getOutput('Child_announce', 'v6829', ctc17, v6829);
        null;
        const cv6633 = v6633;
        const cv6634 = v6806;
        const cv6637 = v6637;
        
        v6633 = cv6633;
        v6634 = cv6634;
        v6637 = cv6637;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Child_close0_5624': {
        const v7000 = v6805[1];
        undefined /* setApiDetails */;
        ;
        const v7044 = v7000[stdlib.checkedBigNumberify('./index.rsh:467:10:spread', stdlib.UInt_max, '0')];
        const v7046 = true;
        await txn3.getOutput('Child_close', 'v7046', ctc17, v7046);
        null;
        const cv6633 = v6633;
        const cv6634 = v6806;
        const cv6637 = v6637;
        
        v6633 = cv6633;
        v6634 = cv6634;
        v6637 = cv6637;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Child_delete0_5624': {
        const v7192 = v6805[1];
        undefined /* setApiDetails */;
        ;
        const v7251 = v7192[stdlib.checkedBigNumberify('./index.rsh:449:10:spread', stdlib.UInt_max, '0')];
        const v7253 = true;
        await txn3.getOutput('Child_delete', 'v7253', ctc17, v7253);
        null;
        const cv6633 = v6633;
        const cv6634 = v6806;
        const cv6637 = v6637;
        
        v6633 = cv6633;
        v6634 = cv6634;
        v6637 = cv6637;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Child_grant0_5624': {
        const v7384 = v6805[1];
        undefined /* setApiDetails */;
        ;
        const v7476 = v7384[stdlib.checkedBigNumberify('./index.rsh:458:10:spread', stdlib.UInt_max, '0')];
        const v7478 = true;
        await txn3.getOutput('Child_grant', 'v7478', ctc17, v7478);
        null;
        const cv6633 = v6633;
        const cv6634 = v6806;
        const cv6637 = v6637;
        
        v6633 = cv6633;
        v6634 = cv6634;
        v6637 = cv6637;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Child_ready0_5624': {
        const v7576 = v6805[1];
        undefined /* setApiDetails */;
        ;
        const v7685 = v7576[stdlib.checkedBigNumberify('./index.rsh:431:10:spread', stdlib.UInt_max, '0')];
        const v7687 = true;
        await txn3.getOutput('Child_ready', 'v7687', ctc17, v7687);
        null;
        const cv6633 = v6633;
        const cv6634 = v6806;
        const cv6637 = v6637;
        
        v6633 = cv6633;
        v6634 = cv6634;
        v6637 = cv6637;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Master_close0_5624': {
        const v7768 = v6805[1];
        undefined /* setApiDetails */;
        ;
        const v7892 = true;
        await txn3.getOutput('Master_close', 'v7892', ctc17, v7892);
        const v7899 = {
          closed: true
          };
        const cv6633 = v7899;
        const cv6634 = v6806;
        const cv6637 = v6637;
        
        v6633 = cv6633;
        v6634 = cv6634;
        v6637 = cv6637;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Master_new0_5624': {
        const v7960 = v6805[1];
        undefined /* setApiDetails */;
        ;
        const v8095 = stdlib.addressEq(v6804, v6628);
        stdlib.assert(v8095, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:384:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:386:13:application call to [unknown function] (defined at: ./index.rsh:386:13:function exp)'],
          msg: 'Must be authorized',
          who: 'Alice'
          });
        const v8097 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v8098 = undefined /* ContractNew */;
        const v8099 = await txn3.getOutput('internal', 'v8098', ctc1, v8098);
        null;
        await txn3.getOutput('Master_new', 'v8099', ctc1, v8099);
        const cv6633 = v6633;
        const cv6634 = v6806;
        const cv6637 = v6637;
        
        v6633 = cv6633;
        v6634 = cv6634;
        v6637 = cv6637;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Master_setup0_5624': {
        const v8152 = v6805[1];
        undefined /* setApiDetails */;
        const v8165 = stdlib.addressEq(v6804, v6628);
        stdlib.assert(v8165, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:395:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:394:33:application call to [unknown function] (defined at: ./index.rsh:394:33:function exp)', 'at ./index.rsh:380:29:application call to [unknown function] (defined at: ./index.rsh:394:33:function exp)', 'at ./index.rsh:380:29:application call to [unknown function] (defined at: ./index.rsh:380:29:function exp)'],
          msg: 'Must be authorized',
          who: 'Alice'
          });
        const v8169 = stdlib.add(v6637, stdlib.checkedBigNumberify('./index.rsh:6:23:decimal', stdlib.UInt_max, '100000'));
        ;
        const v8299 = v8152[stdlib.checkedBigNumberify('./index.rsh:394:10:spread', stdlib.UInt_max, '0')];
        const v8306 = stdlib.sub(v8169, stdlib.checkedBigNumberify('./index.rsh:6:23:decimal', stdlib.UInt_max, '100000'));
        const v8307 = [];
        const v8308 = stdlib.bytesFromHex("0xc194ad99");
        const v8309 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v8310 = undefined /* Remote */;
        const v8311 = await txn3.getOutput('internal', 'v8310', ctc18, v8310);
        const v8313 = v8311[stdlib.checkedBigNumberify('./index.rsh:402:63:application', stdlib.UInt_max, '0')];
        const v8318 = stdlib.add(v8306, v8313);
        const v8319 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v8313);
        stdlib.assert(v8319, {
          at: './index.rsh:402:63:application',
          fs: ['at ./index.rsh:398:13:application call to [unknown function] (defined at: ./index.rsh:398:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        null;
        const v8320 = true;
        await txn3.getOutput('Master_setup', 'v8320', ctc17, v8320);
        const cv6633 = v6633;
        const cv6634 = v6806;
        const cv6637 = v8318;
        
        v6633 = cv6633;
        v6634 = cv6634;
        v6637 = cv6637;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Master_touch0_5624': {
        const v8344 = v6805[1];
        undefined /* setApiDetails */;
        ;
        const v8522 = (stdlib.le(await ctc.getBalance(), v6637) ? stdlib.checkedBigNumberify('./index.rsh:415:39:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v6637));
        const v8523 = stdlib.safeAdd(v8522, v6637);
        const v8527 = stdlib.sub(v8523, v8522);
        ;
        const v8528 = [v6804, v6628, v8522];
        null;
        const v8529 = true;
        await txn3.getOutput('Master_touch', 'v8529', ctc17, v8529);
        const cv6633 = v6633;
        const cv6634 = v6806;
        const cv6637 = v8527;
        
        v6633 = cv6633;
        v6634 = cv6634;
        v6637 = cv6637;
        
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
  const ctc5 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc0, ctc4, ctc3, ctc3]);
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc0]);
  const ctc11 = stdlib.T_Data({
    DeletePurchase: ctc9,
    DeleteSale: ctc10
    });
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc4, ctc4, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc13]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc4]);
  const ctc17 = stdlib.T_Data({
    Child_announce0_5624: ctc6,
    Child_close0_5624: ctc8,
    Child_delete0_5624: ctc12,
    Child_grant0_5624: ctc14,
    Child_ready0_5624: ctc8,
    Master_close0_5624: ctc15,
    Master_new0_5624: ctc15,
    Master_setup0_5624: ctc16,
    Master_touch0_5624: ctc15
    });
  const ctc18 = stdlib.T_Null;
  
  
  const [v6628, v6633, v6637] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v6700 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:440:35:application call to [unknown function] (defined at: ./index.rsh:440:35:function exp)', 'at ./index.rsh:380:29:application call to "runChild_announce0_5624" (defined at: ./index.rsh:440:10:function exp)', 'at ./index.rsh:380:29:application call to [unknown function] (defined at: ./index.rsh:380:29:function exp)'],
    msg: 'in',
    who: 'Child_announce'
    });
  const v6722 = ['Child_announce0_5624', v6700];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6628, v6633, v6637, v6722],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:440:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6805], secs: v6807, time: v6806, didSend: v6392, from: v6804 } = txn1;
      
      switch (v6805[0]) {
        case 'Child_announce0_5624': {
          const v6808 = v6805[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Child_announce"
            });
          ;
          const v6827 = v6808[stdlib.checkedBigNumberify('./index.rsh:440:10:spread', stdlib.UInt_max, '0')];
          const v6829 = true;
          const v6830 = await txn1.getOutput('Child_announce', 'v6829', ctc1, v6829);
          
          null;
          const v9810 = v6633;
          const v9812 = v6637;
          const v9813 = v6633.closed;
          if (v9813) {
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
        case 'Child_close0_5624': {
          const v7000 = v6805[1];
          
          break;
          }
        case 'Child_delete0_5624': {
          const v7192 = v6805[1];
          
          break;
          }
        case 'Child_grant0_5624': {
          const v7384 = v6805[1];
          
          break;
          }
        case 'Child_ready0_5624': {
          const v7576 = v6805[1];
          
          break;
          }
        case 'Master_close0_5624': {
          const v7768 = v6805[1];
          
          break;
          }
        case 'Master_new0_5624': {
          const v7960 = v6805[1];
          
          break;
          }
        case 'Master_setup0_5624': {
          const v8152 = v6805[1];
          
          break;
          }
        case 'Master_touch0_5624': {
          const v8344 = v6805[1];
          
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
  const {data: [v6805], secs: v6807, time: v6806, didSend: v6392, from: v6804 } = txn1;
  switch (v6805[0]) {
    case 'Child_announce0_5624': {
      const v6808 = v6805[1];
      undefined /* setApiDetails */;
      ;
      const v6827 = v6808[stdlib.checkedBigNumberify('./index.rsh:440:10:spread', stdlib.UInt_max, '0')];
      const v6829 = true;
      const v6830 = await txn1.getOutput('Child_announce', 'v6829', ctc1, v6829);
      if (v6392) {
        stdlib.protect(ctc18, await interact.out(v6808, v6830), {
          at: './index.rsh:440:11:application',
          fs: ['at ./index.rsh:440:11:application call to [unknown function] (defined at: ./index.rsh:440:11:function exp)', 'at ./index.rsh:443:12:application call to "k" (defined at: ./index.rsh:442:13:function exp)', 'at ./index.rsh:442:13:application call to [unknown function] (defined at: ./index.rsh:442:13:function exp)'],
          msg: 'out',
          who: 'Child_announce'
          });
        }
      else {
        }
      
      null;
      const v9810 = v6633;
      const v9812 = v6637;
      const v9813 = v6633.closed;
      if (v9813) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Child_close0_5624': {
      const v7000 = v6805[1];
      return;
      break;
      }
    case 'Child_delete0_5624': {
      const v7192 = v6805[1];
      return;
      break;
      }
    case 'Child_grant0_5624': {
      const v7384 = v6805[1];
      return;
      break;
      }
    case 'Child_ready0_5624': {
      const v7576 = v6805[1];
      return;
      break;
      }
    case 'Master_close0_5624': {
      const v7768 = v6805[1];
      return;
      break;
      }
    case 'Master_new0_5624': {
      const v7960 = v6805[1];
      return;
      break;
      }
    case 'Master_setup0_5624': {
      const v8152 = v6805[1];
      return;
      break;
      }
    case 'Master_touch0_5624': {
      const v8344 = v6805[1];
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
  const ctc7 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc0, ctc4, ctc3, ctc3]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc0]);
  const ctc11 = stdlib.T_Data({
    DeletePurchase: ctc9,
    DeleteSale: ctc10
    });
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc4, ctc4, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc13]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc4]);
  const ctc17 = stdlib.T_Data({
    Child_announce0_5624: ctc8,
    Child_close0_5624: ctc6,
    Child_delete0_5624: ctc12,
    Child_grant0_5624: ctc14,
    Child_ready0_5624: ctc6,
    Master_close0_5624: ctc15,
    Master_new0_5624: ctc15,
    Master_setup0_5624: ctc16,
    Master_touch0_5624: ctc15
    });
  const ctc18 = stdlib.T_Null;
  
  
  const [v6628, v6633, v6637] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v6778 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:467:32:application call to [unknown function] (defined at: ./index.rsh:467:32:function exp)', 'at ./index.rsh:380:29:application call to "runChild_close0_5624" (defined at: ./index.rsh:467:10:function exp)', 'at ./index.rsh:380:29:application call to [unknown function] (defined at: ./index.rsh:380:29:function exp)'],
    msg: 'in',
    who: 'Child_close'
    });
  const v6790 = ['Child_close0_5624', v6778];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6628, v6633, v6637, v6790],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:467:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6805], secs: v6807, time: v6806, didSend: v6392, from: v6804 } = txn1;
      
      switch (v6805[0]) {
        case 'Child_announce0_5624': {
          const v6808 = v6805[1];
          
          break;
          }
        case 'Child_close0_5624': {
          const v7000 = v6805[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Child_close"
            });
          ;
          const v7044 = v7000[stdlib.checkedBigNumberify('./index.rsh:467:10:spread', stdlib.UInt_max, '0')];
          const v7046 = true;
          const v7047 = await txn1.getOutput('Child_close', 'v7046', ctc1, v7046);
          
          null;
          const v9860 = v6633;
          const v9862 = v6637;
          const v9863 = v6633.closed;
          if (v9863) {
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
        case 'Child_delete0_5624': {
          const v7192 = v6805[1];
          
          break;
          }
        case 'Child_grant0_5624': {
          const v7384 = v6805[1];
          
          break;
          }
        case 'Child_ready0_5624': {
          const v7576 = v6805[1];
          
          break;
          }
        case 'Master_close0_5624': {
          const v7768 = v6805[1];
          
          break;
          }
        case 'Master_new0_5624': {
          const v7960 = v6805[1];
          
          break;
          }
        case 'Master_setup0_5624': {
          const v8152 = v6805[1];
          
          break;
          }
        case 'Master_touch0_5624': {
          const v8344 = v6805[1];
          
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
  const {data: [v6805], secs: v6807, time: v6806, didSend: v6392, from: v6804 } = txn1;
  switch (v6805[0]) {
    case 'Child_announce0_5624': {
      const v6808 = v6805[1];
      return;
      break;
      }
    case 'Child_close0_5624': {
      const v7000 = v6805[1];
      undefined /* setApiDetails */;
      ;
      const v7044 = v7000[stdlib.checkedBigNumberify('./index.rsh:467:10:spread', stdlib.UInt_max, '0')];
      const v7046 = true;
      const v7047 = await txn1.getOutput('Child_close', 'v7046', ctc1, v7046);
      if (v6392) {
        stdlib.protect(ctc18, await interact.out(v7000, v7047), {
          at: './index.rsh:467:11:application',
          fs: ['at ./index.rsh:467:11:application call to [unknown function] (defined at: ./index.rsh:467:11:function exp)', 'at ./index.rsh:470:12:application call to "k" (defined at: ./index.rsh:469:13:function exp)', 'at ./index.rsh:469:13:application call to [unknown function] (defined at: ./index.rsh:469:13:function exp)'],
          msg: 'out',
          who: 'Child_close'
          });
        }
      else {
        }
      
      null;
      const v9860 = v6633;
      const v9862 = v6637;
      const v9863 = v6633.closed;
      if (v9863) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Child_delete0_5624': {
      const v7192 = v6805[1];
      return;
      break;
      }
    case 'Child_grant0_5624': {
      const v7384 = v6805[1];
      return;
      break;
      }
    case 'Child_ready0_5624': {
      const v7576 = v6805[1];
      return;
      break;
      }
    case 'Master_close0_5624': {
      const v7768 = v6805[1];
      return;
      break;
      }
    case 'Master_new0_5624': {
      const v7960 = v6805[1];
      return;
      break;
      }
    case 'Master_setup0_5624': {
      const v8152 = v6805[1];
      return;
      break;
      }
    case 'Master_touch0_5624': {
      const v8344 = v6805[1];
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
  const ctc5 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc0, ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc0]);
  const ctc7 = stdlib.T_Data({
    DeletePurchase: ctc5,
    DeleteSale: ctc6
    });
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc0, ctc4, ctc3, ctc3]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc4, ctc4, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc13]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc4]);
  const ctc17 = stdlib.T_Data({
    Child_announce0_5624: ctc10,
    Child_close0_5624: ctc12,
    Child_delete0_5624: ctc8,
    Child_grant0_5624: ctc14,
    Child_ready0_5624: ctc12,
    Master_close0_5624: ctc15,
    Master_new0_5624: ctc15,
    Master_setup0_5624: ctc16,
    Master_touch0_5624: ctc15
    });
  const ctc18 = stdlib.T_Null;
  
  
  const [v6628, v6633, v6637] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v6726 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:449:33:application call to [unknown function] (defined at: ./index.rsh:449:33:function exp)', 'at ./index.rsh:380:29:application call to "runChild_delete0_5624" (defined at: ./index.rsh:449:10:function exp)', 'at ./index.rsh:380:29:application call to [unknown function] (defined at: ./index.rsh:380:29:function exp)'],
    msg: 'in',
    who: 'Child_delete'
    });
  const v6756 = ['Child_delete0_5624', v6726];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6628, v6633, v6637, v6756],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:449:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6805], secs: v6807, time: v6806, didSend: v6392, from: v6804 } = txn1;
      
      switch (v6805[0]) {
        case 'Child_announce0_5624': {
          const v6808 = v6805[1];
          
          break;
          }
        case 'Child_close0_5624': {
          const v7000 = v6805[1];
          
          break;
          }
        case 'Child_delete0_5624': {
          const v7192 = v6805[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Child_delete"
            });
          ;
          const v7251 = v7192[stdlib.checkedBigNumberify('./index.rsh:449:10:spread', stdlib.UInt_max, '0')];
          const v7253 = true;
          const v7254 = await txn1.getOutput('Child_delete', 'v7253', ctc1, v7253);
          
          null;
          const v9910 = v6633;
          const v9912 = v6637;
          const v9913 = v6633.closed;
          if (v9913) {
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
        case 'Child_grant0_5624': {
          const v7384 = v6805[1];
          
          break;
          }
        case 'Child_ready0_5624': {
          const v7576 = v6805[1];
          
          break;
          }
        case 'Master_close0_5624': {
          const v7768 = v6805[1];
          
          break;
          }
        case 'Master_new0_5624': {
          const v7960 = v6805[1];
          
          break;
          }
        case 'Master_setup0_5624': {
          const v8152 = v6805[1];
          
          break;
          }
        case 'Master_touch0_5624': {
          const v8344 = v6805[1];
          
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
  const {data: [v6805], secs: v6807, time: v6806, didSend: v6392, from: v6804 } = txn1;
  switch (v6805[0]) {
    case 'Child_announce0_5624': {
      const v6808 = v6805[1];
      return;
      break;
      }
    case 'Child_close0_5624': {
      const v7000 = v6805[1];
      return;
      break;
      }
    case 'Child_delete0_5624': {
      const v7192 = v6805[1];
      undefined /* setApiDetails */;
      ;
      const v7251 = v7192[stdlib.checkedBigNumberify('./index.rsh:449:10:spread', stdlib.UInt_max, '0')];
      const v7253 = true;
      const v7254 = await txn1.getOutput('Child_delete', 'v7253', ctc1, v7253);
      if (v6392) {
        stdlib.protect(ctc18, await interact.out(v7192, v7254), {
          at: './index.rsh:449:11:application',
          fs: ['at ./index.rsh:449:11:application call to [unknown function] (defined at: ./index.rsh:449:11:function exp)', 'at ./index.rsh:452:12:application call to "k" (defined at: ./index.rsh:451:13:function exp)', 'at ./index.rsh:451:13:application call to [unknown function] (defined at: ./index.rsh:451:13:function exp)'],
          msg: 'out',
          who: 'Child_delete'
          });
        }
      else {
        }
      
      null;
      const v9910 = v6633;
      const v9912 = v6637;
      const v9913 = v6633.closed;
      if (v9913) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Child_grant0_5624': {
      const v7384 = v6805[1];
      return;
      break;
      }
    case 'Child_ready0_5624': {
      const v7576 = v6805[1];
      return;
      break;
      }
    case 'Master_close0_5624': {
      const v7768 = v6805[1];
      return;
      break;
      }
    case 'Master_new0_5624': {
      const v7960 = v6805[1];
      return;
      break;
      }
    case 'Master_setup0_5624': {
      const v8152 = v6805[1];
      return;
      break;
      }
    case 'Master_touch0_5624': {
      const v8344 = v6805[1];
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
  const ctc7 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc0, ctc4, ctc3, ctc3]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc0, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc0]);
  const ctc13 = stdlib.T_Data({
    DeletePurchase: ctc11,
    DeleteSale: ctc12
    });
  const ctc14 = stdlib.T_Tuple([ctc13]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc4]);
  const ctc17 = stdlib.T_Data({
    Child_announce0_5624: ctc8,
    Child_close0_5624: ctc10,
    Child_delete0_5624: ctc14,
    Child_grant0_5624: ctc6,
    Child_ready0_5624: ctc10,
    Master_close0_5624: ctc15,
    Master_new0_5624: ctc15,
    Master_setup0_5624: ctc16,
    Master_touch0_5624: ctc15
    });
  const ctc18 = stdlib.T_Null;
  
  
  const [v6628, v6633, v6637] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v6760 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:458:32:application call to [unknown function] (defined at: ./index.rsh:458:32:function exp)', 'at ./index.rsh:380:29:application call to "runChild_grant0_5624" (defined at: ./index.rsh:458:10:function exp)', 'at ./index.rsh:380:29:application call to [unknown function] (defined at: ./index.rsh:380:29:function exp)'],
    msg: 'in',
    who: 'Child_grant'
    });
  const v6774 = ['Child_grant0_5624', v6760];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6628, v6633, v6637, v6774],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:458:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6805], secs: v6807, time: v6806, didSend: v6392, from: v6804 } = txn1;
      
      switch (v6805[0]) {
        case 'Child_announce0_5624': {
          const v6808 = v6805[1];
          
          break;
          }
        case 'Child_close0_5624': {
          const v7000 = v6805[1];
          
          break;
          }
        case 'Child_delete0_5624': {
          const v7192 = v6805[1];
          
          break;
          }
        case 'Child_grant0_5624': {
          const v7384 = v6805[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Child_grant"
            });
          ;
          const v7476 = v7384[stdlib.checkedBigNumberify('./index.rsh:458:10:spread', stdlib.UInt_max, '0')];
          const v7478 = true;
          const v7479 = await txn1.getOutput('Child_grant', 'v7478', ctc1, v7478);
          
          null;
          const v9960 = v6633;
          const v9962 = v6637;
          const v9963 = v6633.closed;
          if (v9963) {
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
        case 'Child_ready0_5624': {
          const v7576 = v6805[1];
          
          break;
          }
        case 'Master_close0_5624': {
          const v7768 = v6805[1];
          
          break;
          }
        case 'Master_new0_5624': {
          const v7960 = v6805[1];
          
          break;
          }
        case 'Master_setup0_5624': {
          const v8152 = v6805[1];
          
          break;
          }
        case 'Master_touch0_5624': {
          const v8344 = v6805[1];
          
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
  const {data: [v6805], secs: v6807, time: v6806, didSend: v6392, from: v6804 } = txn1;
  switch (v6805[0]) {
    case 'Child_announce0_5624': {
      const v6808 = v6805[1];
      return;
      break;
      }
    case 'Child_close0_5624': {
      const v7000 = v6805[1];
      return;
      break;
      }
    case 'Child_delete0_5624': {
      const v7192 = v6805[1];
      return;
      break;
      }
    case 'Child_grant0_5624': {
      const v7384 = v6805[1];
      undefined /* setApiDetails */;
      ;
      const v7476 = v7384[stdlib.checkedBigNumberify('./index.rsh:458:10:spread', stdlib.UInt_max, '0')];
      const v7478 = true;
      const v7479 = await txn1.getOutput('Child_grant', 'v7478', ctc1, v7478);
      if (v6392) {
        stdlib.protect(ctc18, await interact.out(v7384, v7479), {
          at: './index.rsh:458:11:application',
          fs: ['at ./index.rsh:458:11:application call to [unknown function] (defined at: ./index.rsh:458:11:function exp)', 'at ./index.rsh:461:12:application call to "k" (defined at: ./index.rsh:460:13:function exp)', 'at ./index.rsh:460:13:application call to [unknown function] (defined at: ./index.rsh:460:13:function exp)'],
          msg: 'out',
          who: 'Child_grant'
          });
        }
      else {
        }
      
      null;
      const v9960 = v6633;
      const v9962 = v6637;
      const v9963 = v6633.closed;
      if (v9963) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Child_ready0_5624': {
      const v7576 = v6805[1];
      return;
      break;
      }
    case 'Master_close0_5624': {
      const v7768 = v6805[1];
      return;
      break;
      }
    case 'Master_new0_5624': {
      const v7960 = v6805[1];
      return;
      break;
      }
    case 'Master_setup0_5624': {
      const v8152 = v6805[1];
      return;
      break;
      }
    case 'Master_touch0_5624': {
      const v8344 = v6805[1];
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
  const ctc7 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc0, ctc4, ctc3, ctc3]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc0]);
  const ctc11 = stdlib.T_Data({
    DeletePurchase: ctc9,
    DeleteSale: ctc10
    });
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc4, ctc4, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc13]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc4]);
  const ctc17 = stdlib.T_Data({
    Child_announce0_5624: ctc8,
    Child_close0_5624: ctc6,
    Child_delete0_5624: ctc12,
    Child_grant0_5624: ctc14,
    Child_ready0_5624: ctc6,
    Master_close0_5624: ctc15,
    Master_new0_5624: ctc15,
    Master_setup0_5624: ctc16,
    Master_touch0_5624: ctc15
    });
  const ctc18 = stdlib.T_Null;
  
  
  const [v6628, v6633, v6637] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v6684 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:431:32:application call to [unknown function] (defined at: ./index.rsh:431:32:function exp)', 'at ./index.rsh:380:29:application call to "runChild_ready0_5624" (defined at: ./index.rsh:431:10:function exp)', 'at ./index.rsh:380:29:application call to [unknown function] (defined at: ./index.rsh:380:29:function exp)'],
    msg: 'in',
    who: 'Child_ready'
    });
  const v6696 = ['Child_ready0_5624', v6684];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6628, v6633, v6637, v6696],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:431:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6805], secs: v6807, time: v6806, didSend: v6392, from: v6804 } = txn1;
      
      switch (v6805[0]) {
        case 'Child_announce0_5624': {
          const v6808 = v6805[1];
          
          break;
          }
        case 'Child_close0_5624': {
          const v7000 = v6805[1];
          
          break;
          }
        case 'Child_delete0_5624': {
          const v7192 = v6805[1];
          
          break;
          }
        case 'Child_grant0_5624': {
          const v7384 = v6805[1];
          
          break;
          }
        case 'Child_ready0_5624': {
          const v7576 = v6805[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Child_ready"
            });
          ;
          const v7685 = v7576[stdlib.checkedBigNumberify('./index.rsh:431:10:spread', stdlib.UInt_max, '0')];
          const v7687 = true;
          const v7688 = await txn1.getOutput('Child_ready', 'v7687', ctc1, v7687);
          
          null;
          const v10010 = v6633;
          const v10012 = v6637;
          const v10013 = v6633.closed;
          if (v10013) {
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
        case 'Master_close0_5624': {
          const v7768 = v6805[1];
          
          break;
          }
        case 'Master_new0_5624': {
          const v7960 = v6805[1];
          
          break;
          }
        case 'Master_setup0_5624': {
          const v8152 = v6805[1];
          
          break;
          }
        case 'Master_touch0_5624': {
          const v8344 = v6805[1];
          
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
  const {data: [v6805], secs: v6807, time: v6806, didSend: v6392, from: v6804 } = txn1;
  switch (v6805[0]) {
    case 'Child_announce0_5624': {
      const v6808 = v6805[1];
      return;
      break;
      }
    case 'Child_close0_5624': {
      const v7000 = v6805[1];
      return;
      break;
      }
    case 'Child_delete0_5624': {
      const v7192 = v6805[1];
      return;
      break;
      }
    case 'Child_grant0_5624': {
      const v7384 = v6805[1];
      return;
      break;
      }
    case 'Child_ready0_5624': {
      const v7576 = v6805[1];
      undefined /* setApiDetails */;
      ;
      const v7685 = v7576[stdlib.checkedBigNumberify('./index.rsh:431:10:spread', stdlib.UInt_max, '0')];
      const v7687 = true;
      const v7688 = await txn1.getOutput('Child_ready', 'v7687', ctc1, v7687);
      if (v6392) {
        stdlib.protect(ctc18, await interact.out(v7576, v7688), {
          at: './index.rsh:431:11:application',
          fs: ['at ./index.rsh:431:11:application call to [unknown function] (defined at: ./index.rsh:431:11:function exp)', 'at ./index.rsh:434:12:application call to "k" (defined at: ./index.rsh:433:13:function exp)', 'at ./index.rsh:433:13:application call to [unknown function] (defined at: ./index.rsh:433:13:function exp)'],
          msg: 'out',
          who: 'Child_ready'
          });
        }
      else {
        }
      
      null;
      const v10010 = v6633;
      const v10012 = v6637;
      const v10013 = v6633.closed;
      if (v10013) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Master_close0_5624': {
      const v7768 = v6805[1];
      return;
      break;
      }
    case 'Master_new0_5624': {
      const v7960 = v6805[1];
      return;
      break;
      }
    case 'Master_setup0_5624': {
      const v8152 = v6805[1];
      return;
      break;
      }
    case 'Master_touch0_5624': {
      const v8344 = v6805[1];
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
  const ctc6 = stdlib.T_Tuple([ctc5, ctc5, ctc0, ctc0, ctc5, ctc3, ctc3]);
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc5, ctc5, ctc0, ctc0, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc5, ctc5, ctc0, ctc0]);
  const ctc12 = stdlib.T_Data({
    DeletePurchase: ctc10,
    DeleteSale: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Tuple([ctc5, ctc5, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc14]);
  const ctc16 = stdlib.T_Tuple([ctc5]);
  const ctc17 = stdlib.T_Data({
    Child_announce0_5624: ctc7,
    Child_close0_5624: ctc9,
    Child_delete0_5624: ctc13,
    Child_grant0_5624: ctc15,
    Child_ready0_5624: ctc9,
    Master_close0_5624: ctc4,
    Master_new0_5624: ctc4,
    Master_setup0_5624: ctc16,
    Master_touch0_5624: ctc4
    });
  const ctc18 = stdlib.T_Null;
  
  
  const [v6628, v6633, v6637] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v6676 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:423:30:application call to [unknown function] (defined at: ./index.rsh:423:30:function exp)', 'at ./index.rsh:380:29:application call to "runMaster_close0_5624" (defined at: ./index.rsh:423:10:function exp)', 'at ./index.rsh:380:29:application call to [unknown function] (defined at: ./index.rsh:380:29:function exp)'],
    msg: 'in',
    who: 'Master_close'
    });
  const v6680 = ['Master_close0_5624', v6676];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6628, v6633, v6637, v6680],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:423:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6805], secs: v6807, time: v6806, didSend: v6392, from: v6804 } = txn1;
      
      switch (v6805[0]) {
        case 'Child_announce0_5624': {
          const v6808 = v6805[1];
          
          break;
          }
        case 'Child_close0_5624': {
          const v7000 = v6805[1];
          
          break;
          }
        case 'Child_delete0_5624': {
          const v7192 = v6805[1];
          
          break;
          }
        case 'Child_grant0_5624': {
          const v7384 = v6805[1];
          
          break;
          }
        case 'Child_ready0_5624': {
          const v7576 = v6805[1];
          
          break;
          }
        case 'Master_close0_5624': {
          const v7768 = v6805[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Master_close"
            });
          ;
          const v7892 = true;
          const v7893 = await txn1.getOutput('Master_close', 'v7892', ctc1, v7892);
          
          const v7899 = {
            closed: true
            };
          const v10060 = v7899;
          const v10062 = v6637;
          const v10063 = v7899.closed;
          if (v10063) {
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
        case 'Master_new0_5624': {
          const v7960 = v6805[1];
          
          break;
          }
        case 'Master_setup0_5624': {
          const v8152 = v6805[1];
          
          break;
          }
        case 'Master_touch0_5624': {
          const v8344 = v6805[1];
          
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
  const {data: [v6805], secs: v6807, time: v6806, didSend: v6392, from: v6804 } = txn1;
  switch (v6805[0]) {
    case 'Child_announce0_5624': {
      const v6808 = v6805[1];
      return;
      break;
      }
    case 'Child_close0_5624': {
      const v7000 = v6805[1];
      return;
      break;
      }
    case 'Child_delete0_5624': {
      const v7192 = v6805[1];
      return;
      break;
      }
    case 'Child_grant0_5624': {
      const v7384 = v6805[1];
      return;
      break;
      }
    case 'Child_ready0_5624': {
      const v7576 = v6805[1];
      return;
      break;
      }
    case 'Master_close0_5624': {
      const v7768 = v6805[1];
      undefined /* setApiDetails */;
      ;
      const v7892 = true;
      const v7893 = await txn1.getOutput('Master_close', 'v7892', ctc1, v7892);
      if (v6392) {
        stdlib.protect(ctc18, await interact.out(v7768, v7893), {
          at: './index.rsh:423:11:application',
          fs: ['at ./index.rsh:423:11:application call to [unknown function] (defined at: ./index.rsh:423:11:function exp)', 'at ./index.rsh:426:12:application call to "k" (defined at: ./index.rsh:425:13:function exp)', 'at ./index.rsh:425:13:application call to [unknown function] (defined at: ./index.rsh:425:13:function exp)'],
          msg: 'out',
          who: 'Master_close'
          });
        }
      else {
        }
      
      const v7899 = {
        closed: true
        };
      const v10060 = v7899;
      const v10062 = v6637;
      const v10063 = v7899.closed;
      if (v10063) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Master_new0_5624': {
      const v7960 = v6805[1];
      return;
      break;
      }
    case 'Master_setup0_5624': {
      const v8152 = v6805[1];
      return;
      break;
      }
    case 'Master_touch0_5624': {
      const v8344 = v6805[1];
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
  const ctc6 = stdlib.T_Tuple([ctc5, ctc5, ctc0, ctc0, ctc5, ctc3, ctc3]);
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc5, ctc5, ctc0, ctc0, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc5, ctc5, ctc0, ctc0]);
  const ctc12 = stdlib.T_Data({
    DeletePurchase: ctc10,
    DeleteSale: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Tuple([ctc5, ctc5, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc14]);
  const ctc16 = stdlib.T_Tuple([ctc5]);
  const ctc17 = stdlib.T_Data({
    Child_announce0_5624: ctc7,
    Child_close0_5624: ctc9,
    Child_delete0_5624: ctc13,
    Child_grant0_5624: ctc15,
    Child_ready0_5624: ctc9,
    Master_close0_5624: ctc4,
    Master_new0_5624: ctc4,
    Master_setup0_5624: ctc16,
    Master_touch0_5624: ctc4
    });
  const ctc18 = stdlib.T_Null;
  
  
  const [v6628, v6633, v6637] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v6642 = ctc.selfAddress();
  const v6644 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:383:28:application call to [unknown function] (defined at: ./index.rsh:383:28:function exp)', 'at ./index.rsh:380:29:application call to "runMaster_new0_5624" (defined at: ./index.rsh:383:10:function exp)', 'at ./index.rsh:380:29:application call to [unknown function] (defined at: ./index.rsh:380:29:function exp)'],
    msg: 'in',
    who: 'Master_new'
    });
  const v6645 = stdlib.addressEq(v6642, v6628);
  stdlib.assert(v6645, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:384:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:383:28:application call to [unknown function] (defined at: ./index.rsh:383:28:function exp)', 'at ./index.rsh:380:29:application call to "runMaster_new0_5624" (defined at: ./index.rsh:383:10:function exp)', 'at ./index.rsh:380:29:application call to [unknown function] (defined at: ./index.rsh:380:29:function exp)'],
    msg: 'Must be authorized',
    who: 'Master_new'
    });
  const v6650 = ['Master_new0_5624', v6644];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6628, v6633, v6637, v6650],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:383:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6805], secs: v6807, time: v6806, didSend: v6392, from: v6804 } = txn1;
      
      switch (v6805[0]) {
        case 'Child_announce0_5624': {
          const v6808 = v6805[1];
          
          break;
          }
        case 'Child_close0_5624': {
          const v7000 = v6805[1];
          
          break;
          }
        case 'Child_delete0_5624': {
          const v7192 = v6805[1];
          
          break;
          }
        case 'Child_grant0_5624': {
          const v7384 = v6805[1];
          
          break;
          }
        case 'Child_ready0_5624': {
          const v7576 = v6805[1];
          
          break;
          }
        case 'Master_close0_5624': {
          const v7768 = v6805[1];
          
          break;
          }
        case 'Master_new0_5624': {
          const v7960 = v6805[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Master_new"
            });
          ;
          const v8097 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v8098 = stdlib.simContractNew(sim_r, {
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
            bills: stdlib.checkedBigNumberify('./index.rsh:387:42:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./index.rsh:387:42:application', stdlib.UInt_max, '0'),
            toks: []
            }), getSimTokCtr());
          const v8099 = await txn1.getOutput('internal', 'v8098', ctc5, v8098);
          null;
          const v8100 = await txn1.getOutput('Master_new', 'v8099', ctc5, v8099);
          
          const v10110 = v6633;
          const v10112 = v6637;
          const v10113 = v6633.closed;
          if (v10113) {
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
        case 'Master_setup0_5624': {
          const v8152 = v6805[1];
          
          break;
          }
        case 'Master_touch0_5624': {
          const v8344 = v6805[1];
          
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
  const {data: [v6805], secs: v6807, time: v6806, didSend: v6392, from: v6804 } = txn1;
  switch (v6805[0]) {
    case 'Child_announce0_5624': {
      const v6808 = v6805[1];
      return;
      break;
      }
    case 'Child_close0_5624': {
      const v7000 = v6805[1];
      return;
      break;
      }
    case 'Child_delete0_5624': {
      const v7192 = v6805[1];
      return;
      break;
      }
    case 'Child_grant0_5624': {
      const v7384 = v6805[1];
      return;
      break;
      }
    case 'Child_ready0_5624': {
      const v7576 = v6805[1];
      return;
      break;
      }
    case 'Master_close0_5624': {
      const v7768 = v6805[1];
      return;
      break;
      }
    case 'Master_new0_5624': {
      const v7960 = v6805[1];
      undefined /* setApiDetails */;
      ;
      const v8095 = stdlib.addressEq(v6804, v6628);
      stdlib.assert(v8095, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:384:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:386:13:application call to [unknown function] (defined at: ./index.rsh:386:13:function exp)'],
        msg: 'Must be authorized',
        who: 'Master_new'
        });
      const v8097 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v8098 = undefined /* ContractNew */;
      const v8099 = await txn1.getOutput('internal', 'v8098', ctc5, v8098);
      null;
      const v8100 = await txn1.getOutput('Master_new', 'v8099', ctc5, v8099);
      if (v6392) {
        stdlib.protect(ctc18, await interact.out(v7960, v8100), {
          at: './index.rsh:383:11:application',
          fs: ['at ./index.rsh:383:11:application call to [unknown function] (defined at: ./index.rsh:383:11:function exp)', 'at ./index.rsh:389:12:application call to "k" (defined at: ./index.rsh:386:13:function exp)', 'at ./index.rsh:386:13:application call to [unknown function] (defined at: ./index.rsh:386:13:function exp)'],
          msg: 'out',
          who: 'Master_new'
          });
        }
      else {
        }
      
      const v10110 = v6633;
      const v10112 = v6637;
      const v10113 = v6633.closed;
      if (v10113) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Master_setup0_5624': {
      const v8152 = v6805[1];
      return;
      break;
      }
    case 'Master_touch0_5624': {
      const v8344 = v6805[1];
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
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc0, ctc4, ctc3, ctc3]);
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc0, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc4, ctc0, ctc0]);
  const ctc12 = stdlib.T_Data({
    DeletePurchase: ctc10,
    DeleteSale: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Tuple([ctc4, ctc4, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc14]);
  const ctc16 = stdlib.T_Tuple([]);
  const ctc17 = stdlib.T_Data({
    Child_announce0_5624: ctc7,
    Child_close0_5624: ctc9,
    Child_delete0_5624: ctc13,
    Child_grant0_5624: ctc15,
    Child_ready0_5624: ctc9,
    Master_close0_5624: ctc16,
    Master_new0_5624: ctc16,
    Master_setup0_5624: ctc5,
    Master_touch0_5624: ctc16
    });
  const ctc18 = stdlib.T_Null;
  const ctc19 = stdlib.T_Tuple([ctc3, ctc18]);
  
  
  const [v6628, v6633, v6637] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v6652 = ctc.selfAddress();
  const v6654 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:394:33:application call to [unknown function] (defined at: ./index.rsh:394:33:function exp)', 'at ./index.rsh:380:29:application call to "runMaster_setup0_5624" (defined at: ./index.rsh:394:10:function exp)', 'at ./index.rsh:380:29:application call to [unknown function] (defined at: ./index.rsh:380:29:function exp)'],
    msg: 'in',
    who: 'Master_setup'
    });
  const v6657 = stdlib.addressEq(v6652, v6628);
  stdlib.assert(v6657, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:395:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:394:33:application call to [unknown function] (defined at: ./index.rsh:394:33:function exp)', 'at ./index.rsh:380:29:application call to "runMaster_setup0_5624" (defined at: ./index.rsh:394:10:function exp)', 'at ./index.rsh:380:29:application call to [unknown function] (defined at: ./index.rsh:380:29:function exp)'],
    msg: 'Must be authorized',
    who: 'Master_setup'
    });
  const v6664 = ['Master_setup0_5624', v6654];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6628, v6633, v6637, v6664],
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
      
      
      const {data: [v6805], secs: v6807, time: v6806, didSend: v6392, from: v6804 } = txn1;
      
      switch (v6805[0]) {
        case 'Child_announce0_5624': {
          const v6808 = v6805[1];
          
          break;
          }
        case 'Child_close0_5624': {
          const v7000 = v6805[1];
          
          break;
          }
        case 'Child_delete0_5624': {
          const v7192 = v6805[1];
          
          break;
          }
        case 'Child_grant0_5624': {
          const v7384 = v6805[1];
          
          break;
          }
        case 'Child_ready0_5624': {
          const v7576 = v6805[1];
          
          break;
          }
        case 'Master_close0_5624': {
          const v7768 = v6805[1];
          
          break;
          }
        case 'Master_new0_5624': {
          const v7960 = v6805[1];
          
          break;
          }
        case 'Master_setup0_5624': {
          const v8152 = v6805[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Master_setup"
            });
          const v8169 = stdlib.add(v6637, stdlib.checkedBigNumberify('./index.rsh:6:23:decimal', stdlib.UInt_max, '100000'));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:6:23:decimal', stdlib.UInt_max, '100000'),
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v8299 = v8152[stdlib.checkedBigNumberify('./index.rsh:394:10:spread', stdlib.UInt_max, '0')];
          const v8306 = stdlib.sub(v8169, stdlib.checkedBigNumberify('./index.rsh:6:23:decimal', stdlib.UInt_max, '100000'));
          const v8307 = [];
          const v8308 = stdlib.bytesFromHex("0xc194ad99");
          const v8309 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v8310 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v8299,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:402:63:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('./index.rsh:402:59:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:402:63:application', stdlib.UInt_max, '1'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc18.defaultValue /* simReturnVal */];})();
          const v8311 = await txn1.getOutput('internal', 'v8310', ctc19, v8310);
          const v8313 = v8311[stdlib.checkedBigNumberify('./index.rsh:402:63:application', stdlib.UInt_max, '0')];
          const v8318 = stdlib.add(v8306, v8313);
          null;
          const v8320 = true;
          const v8321 = await txn1.getOutput('Master_setup', 'v8320', ctc1, v8320);
          
          const v10160 = v6633;
          const v10162 = v8318;
          const v10163 = v6633.closed;
          if (v10163) {
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
        case 'Master_touch0_5624': {
          const v8344 = v6805[1];
          
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
  const {data: [v6805], secs: v6807, time: v6806, didSend: v6392, from: v6804 } = txn1;
  switch (v6805[0]) {
    case 'Child_announce0_5624': {
      const v6808 = v6805[1];
      return;
      break;
      }
    case 'Child_close0_5624': {
      const v7000 = v6805[1];
      return;
      break;
      }
    case 'Child_delete0_5624': {
      const v7192 = v6805[1];
      return;
      break;
      }
    case 'Child_grant0_5624': {
      const v7384 = v6805[1];
      return;
      break;
      }
    case 'Child_ready0_5624': {
      const v7576 = v6805[1];
      return;
      break;
      }
    case 'Master_close0_5624': {
      const v7768 = v6805[1];
      return;
      break;
      }
    case 'Master_new0_5624': {
      const v7960 = v6805[1];
      return;
      break;
      }
    case 'Master_setup0_5624': {
      const v8152 = v6805[1];
      undefined /* setApiDetails */;
      const v8165 = stdlib.addressEq(v6804, v6628);
      stdlib.assert(v8165, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:395:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:394:33:application call to [unknown function] (defined at: ./index.rsh:394:33:function exp)', 'at ./index.rsh:380:29:application call to [unknown function] (defined at: ./index.rsh:394:33:function exp)', 'at ./index.rsh:380:29:application call to [unknown function] (defined at: ./index.rsh:380:29:function exp)'],
        msg: 'Must be authorized',
        who: 'Master_setup'
        });
      const v8169 = stdlib.add(v6637, stdlib.checkedBigNumberify('./index.rsh:6:23:decimal', stdlib.UInt_max, '100000'));
      ;
      const v8299 = v8152[stdlib.checkedBigNumberify('./index.rsh:394:10:spread', stdlib.UInt_max, '0')];
      const v8306 = stdlib.sub(v8169, stdlib.checkedBigNumberify('./index.rsh:6:23:decimal', stdlib.UInt_max, '100000'));
      const v8307 = [];
      const v8308 = stdlib.bytesFromHex("0xc194ad99");
      const v8309 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v8310 = undefined /* Remote */;
      const v8311 = await txn1.getOutput('internal', 'v8310', ctc19, v8310);
      const v8313 = v8311[stdlib.checkedBigNumberify('./index.rsh:402:63:application', stdlib.UInt_max, '0')];
      const v8318 = stdlib.add(v8306, v8313);
      const v8319 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v8313);
      stdlib.assert(v8319, {
        at: './index.rsh:402:63:application',
        fs: ['at ./index.rsh:398:13:application call to [unknown function] (defined at: ./index.rsh:398:13:function exp)'],
        msg: 'remote bill check',
        who: 'Master_setup'
        });
      null;
      const v8320 = true;
      const v8321 = await txn1.getOutput('Master_setup', 'v8320', ctc1, v8320);
      if (v6392) {
        stdlib.protect(ctc18, await interact.out(v8152, v8321), {
          at: './index.rsh:394:11:application',
          fs: ['at ./index.rsh:394:11:application call to [unknown function] (defined at: ./index.rsh:394:11:function exp)', 'at ./index.rsh:407:12:application call to "k" (defined at: ./index.rsh:398:13:function exp)', 'at ./index.rsh:398:13:application call to [unknown function] (defined at: ./index.rsh:398:13:function exp)'],
          msg: 'out',
          who: 'Master_setup'
          });
        }
      else {
        }
      
      const v10160 = v6633;
      const v10162 = v8318;
      const v10163 = v6633.closed;
      if (v10163) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Master_touch0_5624': {
      const v8344 = v6805[1];
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
  const ctc6 = stdlib.T_Tuple([ctc5, ctc5, ctc0, ctc0, ctc5, ctc3, ctc3]);
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc5, ctc5]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc5, ctc5, ctc0, ctc0, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc5, ctc5, ctc0, ctc0]);
  const ctc12 = stdlib.T_Data({
    DeletePurchase: ctc10,
    DeleteSale: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Tuple([ctc5, ctc5, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc14]);
  const ctc16 = stdlib.T_Tuple([ctc5]);
  const ctc17 = stdlib.T_Data({
    Child_announce0_5624: ctc7,
    Child_close0_5624: ctc9,
    Child_delete0_5624: ctc13,
    Child_grant0_5624: ctc15,
    Child_ready0_5624: ctc9,
    Master_close0_5624: ctc4,
    Master_new0_5624: ctc4,
    Master_setup0_5624: ctc16,
    Master_touch0_5624: ctc4
    });
  const ctc18 = stdlib.T_Null;
  
  
  const [v6628, v6633, v6637] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc2, ctc3]);
  const v6668 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:412:30:application call to [unknown function] (defined at: ./index.rsh:412:30:function exp)', 'at ./index.rsh:380:29:application call to "runMaster_touch0_5624" (defined at: ./index.rsh:412:10:function exp)', 'at ./index.rsh:380:29:application call to [unknown function] (defined at: ./index.rsh:380:29:function exp)'],
    msg: 'in',
    who: 'Master_touch'
    });
  const v6672 = ['Master_touch0_5624', v6668];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6628, v6633, v6637, v6672],
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
      
      
      const {data: [v6805], secs: v6807, time: v6806, didSend: v6392, from: v6804 } = txn1;
      
      switch (v6805[0]) {
        case 'Child_announce0_5624': {
          const v6808 = v6805[1];
          
          break;
          }
        case 'Child_close0_5624': {
          const v7000 = v6805[1];
          
          break;
          }
        case 'Child_delete0_5624': {
          const v7192 = v6805[1];
          
          break;
          }
        case 'Child_grant0_5624': {
          const v7384 = v6805[1];
          
          break;
          }
        case 'Child_ready0_5624': {
          const v7576 = v6805[1];
          
          break;
          }
        case 'Master_close0_5624': {
          const v7768 = v6805[1];
          
          break;
          }
        case 'Master_new0_5624': {
          const v7960 = v6805[1];
          
          break;
          }
        case 'Master_setup0_5624': {
          const v8152 = v6805[1];
          
          break;
          }
        case 'Master_touch0_5624': {
          const v8344 = v6805[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Master_touch"
            });
          ;
          const v8522 = (stdlib.le(await ctc.getBalance(), v6637) ? stdlib.checkedBigNumberify('./index.rsh:415:39:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v6637));
          const v8523 = stdlib.safeAdd(v8522, v6637);
          const v8527 = stdlib.sub(v8523, v8522);
          sim_r.txns.push({
            kind: 'from',
            to: v6628,
            tok: undefined /* Nothing */
            });
          const v8528 = [v6804, v6628, v8522];
          null;
          const v8529 = true;
          const v8530 = await txn1.getOutput('Master_touch', 'v8529', ctc1, v8529);
          
          const v10210 = v6633;
          const v10212 = v8527;
          const v10213 = v6633.closed;
          if (v10213) {
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
  const {data: [v6805], secs: v6807, time: v6806, didSend: v6392, from: v6804 } = txn1;
  switch (v6805[0]) {
    case 'Child_announce0_5624': {
      const v6808 = v6805[1];
      return;
      break;
      }
    case 'Child_close0_5624': {
      const v7000 = v6805[1];
      return;
      break;
      }
    case 'Child_delete0_5624': {
      const v7192 = v6805[1];
      return;
      break;
      }
    case 'Child_grant0_5624': {
      const v7384 = v6805[1];
      return;
      break;
      }
    case 'Child_ready0_5624': {
      const v7576 = v6805[1];
      return;
      break;
      }
    case 'Master_close0_5624': {
      const v7768 = v6805[1];
      return;
      break;
      }
    case 'Master_new0_5624': {
      const v7960 = v6805[1];
      return;
      break;
      }
    case 'Master_setup0_5624': {
      const v8152 = v6805[1];
      return;
      break;
      }
    case 'Master_touch0_5624': {
      const v8344 = v6805[1];
      undefined /* setApiDetails */;
      ;
      const v8522 = (stdlib.le(await ctc.getBalance(), v6637) ? stdlib.checkedBigNumberify('./index.rsh:415:39:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v6637));
      const v8523 = stdlib.safeAdd(v8522, v6637);
      const v8527 = stdlib.sub(v8523, v8522);
      ;
      const v8528 = [v6804, v6628, v8522];
      null;
      const v8529 = true;
      const v8530 = await txn1.getOutput('Master_touch', 'v8529', ctc1, v8529);
      if (v6392) {
        stdlib.protect(ctc18, await interact.out(v8344, v8530), {
          at: './index.rsh:412:11:application',
          fs: ['at ./index.rsh:412:11:application call to [unknown function] (defined at: ./index.rsh:412:11:function exp)', 'at ./index.rsh:418:12:application call to "k" (defined at: ./index.rsh:414:13:function exp)', 'at ./index.rsh:414:13:application call to [unknown function] (defined at: ./index.rsh:414:13:function exp)'],
          msg: 'out',
          who: 'Master_touch'
          });
        }
      else {
        }
      
      const v10210 = v6633;
      const v10212 = v8527;
      const v10213 = v6633.closed;
      if (v10213) {
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
    impure: [`Child_announce((uint64,uint64,address,address,uint64,uint64,uint64))byte`, `Child_close((uint64,uint64))byte`, `Child_delete((byte,byte[112]))byte`, `Child_grant((uint64,uint64,address))byte`, `Child_ready((uint64,uint64))byte`, `Master_close()byte`, `Master_new()uint64`, `Master_setup(uint64)byte`, `Master_touch()byte`, `_reachp_0((uint64))void`, `_reachp_2((uint64,(byte,byte[113])))void`],
    pure: [],
    sigs: [`Child_announce((uint64,uint64,address,address,uint64,uint64,uint64))byte`, `Child_close((uint64,uint64))byte`, `Child_delete((byte,byte[112]))byte`, `Child_grant((uint64,uint64,address))byte`, `Child_ready((uint64,uint64))byte`, `Master_close()byte`, `Master_new()uint64`, `Master_setup(uint64)byte`, `Master_touch()byte`, `_reachp_0((uint64))void`, `_reachp_2((uint64,(byte,byte[113])))void`]
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
    100: `20`,
    1000: `298`,
    1001: `299`,
    1002: `299`,
    1003: `299`,
    1004: `300`,
    1005: `300`,
    1006: `301`,
    1007: `301`,
    1008: `301`,
    1009: `301`,
    101: `20`,
    1010: `301`,
    1011: `301`,
    1012: `302`,
    1013: `302`,
    1014: `303`,
    1015: `304`,
    1016: `306`,
    1017: `306`,
    1018: `307`,
    1019: `307`,
    102: `20`,
    1020: `308`,
    1021: `308`,
    1022: `308`,
    1023: `310`,
    1024: `311`,
    1025: `311`,
    1026: `312`,
    1027: `312`,
    1028: `312`,
    1029: `312`,
    103: `20`,
    1030: `312`,
    1031: `312`,
    1032: `312`,
    1033: `312`,
    1034: `312`,
    1035: `312`,
    1036: `313`,
    1037: `313`,
    1038: `314`,
    1039: `315`,
    104: `20`,
    1040: `315`,
    1041: `315`,
    1042: `316`,
    1043: `317`,
    1044: `318`,
    1045: `318`,
    1046: `319`,
    1047: `320`,
    1048: `320`,
    1049: `320`,
    105: `20`,
    1050: `321`,
    1051: `321`,
    1052: `322`,
    1053: `323`,
    1054: `323`,
    1055: `324`,
    1056: `324`,
    1057: `325`,
    1058: `325`,
    1059: `326`,
    106: `20`,
    1060: `326`,
    1061: `326`,
    1062: `328`,
    1063: `328`,
    1064: `329`,
    1065: `329`,
    1066: `330`,
    1067: `331`,
    1068: `336`,
    1069: `336`,
    107: `20`,
    1070: `336`,
    1071: `336`,
    1072: `337`,
    1073: `337`,
    1074: `337`,
    1075: `338`,
    1076: `339`,
    1077: `340`,
    1078: `340`,
    1079: `341`,
    108: `20`,
    1080: `341`,
    1081: `342`,
    1082: `342`,
    1083: `343`,
    1084: `343`,
    1085: `343`,
    1086: `343`,
    1087: `343`,
    1088: `343`,
    1089: `343`,
    109: `20`,
    1090: `343`,
    1091: `343`,
    1092: `343`,
    1093: `343`,
    1094: `343`,
    1095: `343`,
    1096: `343`,
    1097: `343`,
    1098: `343`,
    1099: `343`,
    11: `2`,
    110: `20`,
    1100: `343`,
    1101: `343`,
    1102: `343`,
    1103: `343`,
    1104: `343`,
    1105: `343`,
    1106: `343`,
    1107: `343`,
    1108: `343`,
    1109: `343`,
    111: `20`,
    1110: `343`,
    1111: `343`,
    1112: `343`,
    1113: `343`,
    1114: `343`,
    1115: `343`,
    1116: `343`,
    1117: `343`,
    1118: `343`,
    1119: `343`,
    112: `20`,
    1120: `343`,
    1121: `343`,
    1122: `343`,
    1123: `343`,
    1124: `343`,
    1125: `343`,
    1126: `343`,
    1127: `343`,
    1128: `343`,
    1129: `343`,
    113: `20`,
    1130: `343`,
    1131: `343`,
    1132: `343`,
    1133: `343`,
    1134: `343`,
    1135: `343`,
    1136: `343`,
    1137: `343`,
    1138: `343`,
    1139: `343`,
    114: `20`,
    1140: `343`,
    1141: `343`,
    1142: `343`,
    1143: `343`,
    1144: `343`,
    1145: `343`,
    1146: `343`,
    1147: `343`,
    1148: `343`,
    1149: `343`,
    115: `20`,
    1150: `343`,
    1151: `343`,
    1152: `343`,
    1153: `343`,
    1154: `343`,
    1155: `343`,
    1156: `343`,
    1157: `343`,
    1158: `343`,
    1159: `343`,
    116: `20`,
    1160: `343`,
    1161: `343`,
    1162: `343`,
    1163: `343`,
    1164: `343`,
    1165: `343`,
    1166: `343`,
    1167: `343`,
    1168: `343`,
    1169: `343`,
    117: `20`,
    1170: `343`,
    1171: `343`,
    1172: `343`,
    1173: `343`,
    1174: `343`,
    1175: `343`,
    1176: `343`,
    1177: `343`,
    1178: `343`,
    1179: `343`,
    118: `20`,
    1180: `343`,
    1181: `343`,
    1182: `343`,
    1183: `343`,
    1184: `343`,
    1185: `343`,
    1186: `343`,
    1187: `343`,
    1188: `343`,
    1189: `343`,
    119: `20`,
    1190: `343`,
    1191: `343`,
    1192: `343`,
    1193: `343`,
    1194: `343`,
    1195: `343`,
    1196: `343`,
    1197: `343`,
    1198: `343`,
    1199: `343`,
    12: `2`,
    120: `20`,
    1200: `343`,
    1201: `343`,
    1202: `343`,
    1203: `343`,
    1204: `343`,
    1205: `343`,
    1206: `343`,
    1207: `343`,
    1208: `343`,
    1209: `343`,
    121: `20`,
    1210: `343`,
    1211: `343`,
    1212: `343`,
    1213: `343`,
    1214: `343`,
    1215: `343`,
    1216: `343`,
    1217: `343`,
    1218: `343`,
    1219: `343`,
    122: `22`,
    1220: `343`,
    1221: `343`,
    1222: `343`,
    1223: `343`,
    1224: `343`,
    1225: `343`,
    1226: `343`,
    1227: `343`,
    1228: `343`,
    1229: `343`,
    123: `24`,
    1230: `343`,
    1231: `343`,
    1232: `343`,
    1233: `343`,
    1234: `343`,
    1235: `343`,
    1236: `343`,
    1237: `343`,
    1238: `343`,
    1239: `343`,
    124: `24`,
    1240: `343`,
    1241: `343`,
    1242: `343`,
    1243: `343`,
    1244: `343`,
    1245: `343`,
    1246: `343`,
    1247: `343`,
    1248: `343`,
    1249: `343`,
    125: `24`,
    1250: `343`,
    1251: `343`,
    1252: `343`,
    1253: `343`,
    1254: `343`,
    1255: `343`,
    1256: `343`,
    1257: `343`,
    1258: `343`,
    1259: `343`,
    126: `25`,
    1260: `343`,
    1261: `343`,
    1262: `343`,
    1263: `343`,
    1264: `343`,
    1265: `343`,
    1266: `343`,
    1267: `343`,
    1268: `343`,
    1269: `343`,
    127: `25`,
    1270: `343`,
    1271: `343`,
    1272: `343`,
    1273: `343`,
    1274: `343`,
    1275: `343`,
    1276: `343`,
    1277: `343`,
    1278: `343`,
    1279: `343`,
    128: `27`,
    1280: `343`,
    1281: `343`,
    1282: `343`,
    1283: `343`,
    1284: `343`,
    1285: `343`,
    1286: `343`,
    1287: `343`,
    1288: `343`,
    1289: `343`,
    129: `28`,
    1290: `343`,
    1291: `343`,
    1292: `343`,
    1293: `343`,
    1294: `343`,
    1295: `343`,
    1296: `343`,
    1297: `343`,
    1298: `343`,
    1299: `343`,
    13: `2`,
    130: `29`,
    1300: `343`,
    1301: `343`,
    1302: `343`,
    1303: `343`,
    1304: `343`,
    1305: `343`,
    1306: `343`,
    1307: `343`,
    1308: `343`,
    1309: `343`,
    131: `30`,
    1310: `343`,
    1311: `343`,
    1312: `343`,
    1313: `343`,
    1314: `343`,
    1315: `343`,
    1316: `343`,
    1317: `343`,
    1318: `343`,
    1319: `343`,
    132: `30`,
    1320: `343`,
    1321: `343`,
    1322: `343`,
    1323: `343`,
    1324: `343`,
    1325: `343`,
    1326: `343`,
    1327: `343`,
    1328: `343`,
    1329: `343`,
    133: `31`,
    1330: `343`,
    1331: `343`,
    1332: `343`,
    1333: `343`,
    1334: `343`,
    1335: `343`,
    1336: `343`,
    1337: `343`,
    1338: `343`,
    1339: `343`,
    134: `32`,
    1340: `343`,
    1341: `343`,
    1342: `343`,
    1343: `343`,
    1344: `343`,
    1345: `343`,
    1346: `343`,
    1347: `343`,
    1348: `343`,
    1349: `343`,
    135: `32`,
    1350: `343`,
    1351: `343`,
    1352: `343`,
    1353: `343`,
    1354: `343`,
    1355: `343`,
    1356: `343`,
    1357: `343`,
    1358: `343`,
    1359: `343`,
    136: `33`,
    1360: `343`,
    1361: `343`,
    1362: `343`,
    1363: `343`,
    1364: `343`,
    1365: `343`,
    1366: `343`,
    1367: `343`,
    1368: `343`,
    1369: `343`,
    137: `34`,
    1370: `343`,
    1371: `343`,
    1372: `343`,
    1373: `343`,
    1374: `343`,
    1375: `343`,
    1376: `343`,
    1377: `343`,
    1378: `343`,
    1379: `343`,
    138: `35`,
    1380: `343`,
    1381: `343`,
    1382: `343`,
    1383: `343`,
    1384: `343`,
    1385: `343`,
    1386: `343`,
    1387: `343`,
    1388: `343`,
    1389: `343`,
    139: `36`,
    1390: `343`,
    1391: `343`,
    1392: `343`,
    1393: `343`,
    1394: `343`,
    1395: `343`,
    1396: `343`,
    1397: `343`,
    1398: `343`,
    1399: `343`,
    14: `2`,
    140: `36`,
    1400: `343`,
    1401: `343`,
    1402: `343`,
    1403: `343`,
    1404: `343`,
    1405: `343`,
    1406: `343`,
    1407: `343`,
    1408: `343`,
    1409: `343`,
    141: `38`,
    1410: `343`,
    1411: `343`,
    1412: `343`,
    1413: `343`,
    1414: `343`,
    1415: `343`,
    1416: `343`,
    1417: `343`,
    1418: `343`,
    1419: `343`,
    142: `38`,
    1420: `343`,
    1421: `343`,
    1422: `343`,
    1423: `343`,
    1424: `343`,
    1425: `343`,
    1426: `343`,
    1427: `343`,
    1428: `343`,
    1429: `343`,
    143: `39`,
    1430: `343`,
    1431: `343`,
    1432: `343`,
    1433: `343`,
    1434: `343`,
    1435: `343`,
    1436: `343`,
    1437: `343`,
    1438: `343`,
    1439: `343`,
    144: `39`,
    1440: `343`,
    1441: `343`,
    1442: `343`,
    1443: `343`,
    1444: `343`,
    1445: `343`,
    1446: `343`,
    1447: `343`,
    1448: `343`,
    1449: `343`,
    145: `40`,
    1450: `343`,
    1451: `343`,
    1452: `343`,
    1453: `343`,
    1454: `343`,
    1455: `343`,
    1456: `343`,
    1457: `343`,
    1458: `343`,
    1459: `343`,
    146: `41`,
    1460: `343`,
    1461: `343`,
    1462: `343`,
    1463: `343`,
    1464: `343`,
    1465: `343`,
    1466: `343`,
    1467: `343`,
    1468: `343`,
    1469: `343`,
    147: `43`,
    1470: `343`,
    1471: `343`,
    1472: `343`,
    1473: `343`,
    1474: `343`,
    1475: `343`,
    1476: `343`,
    1477: `343`,
    1478: `343`,
    1479: `343`,
    148: `44`,
    1480: `343`,
    1481: `343`,
    1482: `343`,
    1483: `343`,
    1484: `343`,
    1485: `343`,
    1486: `343`,
    1487: `343`,
    1488: `343`,
    1489: `343`,
    149: `44`,
    1490: `343`,
    1491: `343`,
    1492: `343`,
    1493: `343`,
    1494: `343`,
    1495: `343`,
    1496: `343`,
    1497: `343`,
    1498: `343`,
    1499: `343`,
    15: `2`,
    150: `44`,
    1500: `343`,
    1501: `343`,
    1502: `343`,
    1503: `343`,
    1504: `343`,
    1505: `343`,
    1506: `343`,
    1507: `343`,
    1508: `343`,
    1509: `343`,
    151: `45`,
    1510: `343`,
    1511: `343`,
    1512: `343`,
    1513: `343`,
    1514: `343`,
    1515: `343`,
    1516: `343`,
    1517: `343`,
    1518: `343`,
    1519: `343`,
    152: `45`,
    1520: `343`,
    1521: `343`,
    1522: `343`,
    1523: `343`,
    1524: `343`,
    1525: `343`,
    1526: `343`,
    1527: `343`,
    1528: `343`,
    1529: `343`,
    153: `46`,
    1530: `343`,
    1531: `343`,
    1532: `343`,
    1533: `343`,
    1534: `343`,
    1535: `343`,
    1536: `343`,
    1537: `343`,
    1538: `343`,
    1539: `343`,
    154: `47`,
    1540: `343`,
    1541: `343`,
    1542: `343`,
    1543: `343`,
    1544: `343`,
    1545: `343`,
    1546: `343`,
    1547: `343`,
    1548: `343`,
    1549: `343`,
    155: `47`,
    1550: `343`,
    1551: `343`,
    1552: `343`,
    1553: `343`,
    1554: `343`,
    1555: `343`,
    1556: `343`,
    1557: `343`,
    1558: `343`,
    1559: `343`,
    156: `47`,
    1560: `343`,
    1561: `343`,
    1562: `343`,
    1563: `343`,
    1564: `343`,
    1565: `343`,
    1566: `343`,
    1567: `343`,
    1568: `343`,
    1569: `343`,
    157: `48`,
    1570: `343`,
    1571: `343`,
    1572: `343`,
    1573: `343`,
    1574: `343`,
    1575: `343`,
    1576: `343`,
    1577: `343`,
    1578: `343`,
    1579: `343`,
    158: `48`,
    1580: `343`,
    1581: `343`,
    1582: `343`,
    1583: `343`,
    1584: `343`,
    1585: `343`,
    1586: `343`,
    1587: `343`,
    1588: `343`,
    1589: `343`,
    159: `49`,
    1590: `343`,
    1591: `343`,
    1592: `343`,
    1593: `343`,
    1594: `343`,
    1595: `343`,
    1596: `343`,
    1597: `343`,
    1598: `343`,
    1599: `343`,
    16: `2`,
    160: `49`,
    1600: `343`,
    1601: `343`,
    1602: `343`,
    1603: `343`,
    1604: `343`,
    1605: `343`,
    1606: `343`,
    1607: `343`,
    1608: `343`,
    1609: `343`,
    161: `50`,
    1610: `343`,
    1611: `343`,
    1612: `343`,
    1613: `343`,
    1614: `343`,
    1615: `343`,
    1616: `343`,
    1617: `343`,
    1618: `343`,
    1619: `343`,
    162: `51`,
    1620: `343`,
    1621: `343`,
    1622: `343`,
    1623: `343`,
    1624: `343`,
    1625: `343`,
    1626: `343`,
    1627: `343`,
    1628: `343`,
    1629: `343`,
    163: `51`,
    1630: `343`,
    1631: `343`,
    1632: `343`,
    1633: `343`,
    1634: `343`,
    1635: `343`,
    1636: `343`,
    1637: `343`,
    1638: `343`,
    1639: `343`,
    164: `52`,
    1640: `343`,
    1641: `343`,
    1642: `343`,
    1643: `343`,
    1644: `343`,
    1645: `343`,
    1646: `343`,
    1647: `343`,
    1648: `343`,
    1649: `343`,
    165: `52`,
    1650: `343`,
    1651: `343`,
    1652: `343`,
    1653: `343`,
    1654: `343`,
    1655: `343`,
    1656: `343`,
    1657: `343`,
    1658: `343`,
    1659: `343`,
    166: `53`,
    1660: `343`,
    1661: `343`,
    1662: `343`,
    1663: `343`,
    1664: `343`,
    1665: `343`,
    1666: `343`,
    1667: `343`,
    1668: `343`,
    1669: `343`,
    167: `54`,
    1670: `343`,
    1671: `343`,
    1672: `343`,
    1673: `343`,
    1674: `343`,
    1675: `343`,
    1676: `343`,
    1677: `343`,
    1678: `343`,
    1679: `343`,
    168: `55`,
    1680: `343`,
    1681: `343`,
    1682: `343`,
    1683: `343`,
    1684: `343`,
    1685: `343`,
    1686: `343`,
    1687: `343`,
    1688: `343`,
    1689: `343`,
    169: `55`,
    1690: `343`,
    1691: `343`,
    1692: `343`,
    1693: `343`,
    1694: `343`,
    1695: `343`,
    1696: `343`,
    1697: `343`,
    1698: `343`,
    1699: `343`,
    17: `2`,
    170: `56`,
    1700: `343`,
    1701: `343`,
    1702: `343`,
    1703: `343`,
    1704: `343`,
    1705: `343`,
    1706: `343`,
    1707: `343`,
    1708: `343`,
    1709: `343`,
    171: `56`,
    1710: `343`,
    1711: `343`,
    1712: `343`,
    1713: `343`,
    1714: `343`,
    1715: `343`,
    1716: `343`,
    1717: `343`,
    1718: `343`,
    1719: `343`,
    172: `57`,
    1720: `343`,
    1721: `343`,
    1722: `343`,
    1723: `343`,
    1724: `343`,
    1725: `343`,
    1726: `343`,
    1727: `343`,
    1728: `343`,
    1729: `343`,
    173: `57`,
    1730: `343`,
    1731: `343`,
    1732: `343`,
    1733: `343`,
    1734: `343`,
    1735: `343`,
    1736: `343`,
    1737: `343`,
    1738: `343`,
    1739: `343`,
    174: `57`,
    1740: `343`,
    1741: `343`,
    1742: `343`,
    1743: `343`,
    1744: `343`,
    1745: `343`,
    1746: `343`,
    1747: `343`,
    1748: `343`,
    1749: `343`,
    175: `58`,
    1750: `343`,
    1751: `343`,
    1752: `343`,
    1753: `343`,
    1754: `343`,
    1755: `343`,
    1756: `343`,
    1757: `343`,
    1758: `343`,
    1759: `343`,
    176: `58`,
    1760: `343`,
    1761: `343`,
    1762: `343`,
    1763: `343`,
    1764: `343`,
    1765: `343`,
    1766: `343`,
    1767: `343`,
    1768: `343`,
    1769: `343`,
    177: `59`,
    1770: `343`,
    1771: `343`,
    1772: `343`,
    1773: `343`,
    1774: `343`,
    1775: `343`,
    1776: `343`,
    1777: `343`,
    1778: `343`,
    1779: `343`,
    178: `59`,
    1780: `343`,
    1781: `343`,
    1782: `343`,
    1783: `343`,
    1784: `343`,
    1785: `343`,
    1786: `343`,
    1787: `343`,
    1788: `343`,
    1789: `343`,
    179: `59`,
    1790: `343`,
    1791: `343`,
    1792: `343`,
    1793: `343`,
    1794: `343`,
    1795: `343`,
    1796: `343`,
    1797: `343`,
    1798: `343`,
    1799: `343`,
    18: `2`,
    180: `59`,
    1800: `343`,
    1801: `343`,
    1802: `343`,
    1803: `343`,
    1804: `343`,
    1805: `343`,
    1806: `343`,
    1807: `343`,
    1808: `343`,
    1809: `343`,
    181: `59`,
    1810: `343`,
    1811: `343`,
    1812: `343`,
    1813: `343`,
    1814: `343`,
    1815: `343`,
    1816: `343`,
    1817: `343`,
    1818: `343`,
    1819: `343`,
    182: `59`,
    1820: `343`,
    1821: `343`,
    1822: `343`,
    1823: `343`,
    1824: `343`,
    1825: `343`,
    1826: `343`,
    1827: `343`,
    1828: `343`,
    1829: `343`,
    183: `60`,
    1830: `343`,
    1831: `343`,
    1832: `343`,
    1833: `343`,
    1834: `343`,
    1835: `343`,
    1836: `343`,
    1837: `343`,
    1838: `343`,
    1839: `343`,
    184: `60`,
    1840: `343`,
    1841: `343`,
    1842: `343`,
    1843: `343`,
    1844: `343`,
    1845: `343`,
    1846: `343`,
    1847: `343`,
    1848: `343`,
    1849: `343`,
    185: `61`,
    1850: `343`,
    1851: `343`,
    1852: `343`,
    1853: `343`,
    1854: `343`,
    1855: `343`,
    1856: `343`,
    1857: `343`,
    1858: `343`,
    1859: `343`,
    186: `62`,
    1860: `343`,
    1861: `343`,
    1862: `343`,
    1863: `343`,
    1864: `343`,
    1865: `343`,
    1866: `343`,
    1867: `343`,
    1868: `343`,
    1869: `343`,
    187: `63`,
    1870: `343`,
    1871: `343`,
    1872: `343`,
    1873: `343`,
    1874: `343`,
    1875: `343`,
    1876: `343`,
    1877: `343`,
    1878: `343`,
    1879: `343`,
    188: `63`,
    1880: `343`,
    1881: `343`,
    1882: `343`,
    1883: `343`,
    1884: `343`,
    1885: `343`,
    1886: `343`,
    1887: `343`,
    1888: `343`,
    1889: `343`,
    189: `64`,
    1890: `343`,
    1891: `343`,
    1892: `343`,
    1893: `343`,
    1894: `343`,
    1895: `343`,
    1896: `343`,
    1897: `343`,
    1898: `343`,
    1899: `343`,
    19: `2`,
    190: `65`,
    1900: `343`,
    1901: `343`,
    1902: `343`,
    1903: `343`,
    1904: `343`,
    1905: `343`,
    1906: `343`,
    1907: `343`,
    1908: `343`,
    1909: `343`,
    191: `67`,
    1910: `343`,
    1911: `343`,
    1912: `343`,
    1913: `343`,
    1914: `343`,
    1915: `343`,
    1916: `343`,
    1917: `343`,
    1918: `343`,
    1919: `343`,
    192: `67`,
    1920: `343`,
    1921: `343`,
    1922: `343`,
    1923: `343`,
    1924: `343`,
    1925: `343`,
    1926: `343`,
    1927: `343`,
    1928: `343`,
    1929: `343`,
    193: `68`,
    1930: `343`,
    1931: `343`,
    1932: `343`,
    1933: `343`,
    1934: `343`,
    1935: `343`,
    1936: `343`,
    1937: `343`,
    1938: `343`,
    1939: `343`,
    194: `68`,
    1940: `343`,
    1941: `343`,
    1942: `343`,
    1943: `343`,
    1944: `343`,
    1945: `343`,
    1946: `343`,
    1947: `343`,
    1948: `343`,
    1949: `343`,
    195: `68`,
    1950: `343`,
    1951: `343`,
    1952: `343`,
    1953: `343`,
    1954: `343`,
    1955: `343`,
    1956: `343`,
    1957: `343`,
    1958: `343`,
    1959: `343`,
    196: `69`,
    1960: `343`,
    1961: `343`,
    1962: `343`,
    1963: `343`,
    1964: `343`,
    1965: `343`,
    1966: `343`,
    1967: `343`,
    1968: `343`,
    1969: `343`,
    197: `69`,
    1970: `343`,
    1971: `343`,
    1972: `343`,
    1973: `343`,
    1974: `343`,
    1975: `343`,
    1976: `343`,
    1977: `343`,
    1978: `343`,
    1979: `343`,
    198: `70`,
    1980: `343`,
    1981: `343`,
    1982: `343`,
    1983: `343`,
    1984: `343`,
    1985: `343`,
    1986: `343`,
    1987: `343`,
    1988: `343`,
    1989: `343`,
    199: `71`,
    1990: `343`,
    1991: `343`,
    1992: `343`,
    1993: `343`,
    1994: `343`,
    1995: `343`,
    1996: `343`,
    1997: `343`,
    1998: `343`,
    1999: `343`,
    2: `2`,
    20: `4`,
    200: `72`,
    2000: `343`,
    2001: `343`,
    2002: `343`,
    2003: `343`,
    2004: `343`,
    2005: `343`,
    2006: `343`,
    2007: `343`,
    2008: `343`,
    2009: `343`,
    201: `72`,
    2010: `343`,
    2011: `343`,
    2012: `343`,
    2013: `343`,
    2014: `343`,
    2015: `343`,
    2016: `343`,
    2017: `343`,
    2018: `343`,
    2019: `343`,
    202: `72`,
    2020: `343`,
    2021: `343`,
    2022: `343`,
    2023: `343`,
    2024: `343`,
    2025: `343`,
    2026: `343`,
    2027: `343`,
    2028: `343`,
    2029: `343`,
    203: `72`,
    2030: `343`,
    2031: `343`,
    2032: `343`,
    2033: `343`,
    2034: `343`,
    2035: `343`,
    2036: `343`,
    2037: `343`,
    2038: `343`,
    2039: `343`,
    204: `72`,
    2040: `343`,
    2041: `343`,
    2042: `343`,
    2043: `343`,
    2044: `343`,
    2045: `343`,
    2046: `343`,
    2047: `343`,
    2048: `343`,
    2049: `343`,
    205: `72`,
    2050: `343`,
    2051: `343`,
    2052: `343`,
    2053: `343`,
    2054: `343`,
    2055: `343`,
    2056: `343`,
    2057: `343`,
    2058: `343`,
    2059: `343`,
    206: `72`,
    2060: `343`,
    2061: `343`,
    2062: `343`,
    2063: `343`,
    2064: `343`,
    2065: `343`,
    2066: `343`,
    2067: `343`,
    2068: `343`,
    2069: `343`,
    207: `72`,
    2070: `343`,
    2071: `343`,
    2072: `343`,
    2073: `343`,
    2074: `343`,
    2075: `343`,
    2076: `343`,
    2077: `343`,
    2078: `343`,
    2079: `343`,
    208: `72`,
    2080: `343`,
    2081: `343`,
    2082: `343`,
    2083: `343`,
    2084: `343`,
    2085: `343`,
    2086: `343`,
    2087: `343`,
    2088: `343`,
    2089: `343`,
    209: `72`,
    2090: `343`,
    2091: `343`,
    2092: `343`,
    2093: `343`,
    2094: `343`,
    2095: `343`,
    2096: `343`,
    2097: `343`,
    2098: `343`,
    2099: `343`,
    21: `4`,
    210: `72`,
    2100: `343`,
    2101: `343`,
    2102: `343`,
    2103: `343`,
    2104: `343`,
    2105: `343`,
    2106: `343`,
    2107: `343`,
    2108: `343`,
    2109: `343`,
    211: `72`,
    2110: `343`,
    2111: `343`,
    2112: `343`,
    2113: `343`,
    2114: `343`,
    2115: `343`,
    2116: `343`,
    2117: `343`,
    2118: `343`,
    2119: `343`,
    212: `72`,
    2120: `343`,
    2121: `343`,
    2122: `343`,
    2123: `343`,
    2124: `343`,
    2125: `343`,
    2126: `343`,
    2127: `343`,
    2128: `343`,
    2129: `343`,
    213: `72`,
    2130: `343`,
    2131: `343`,
    2132: `343`,
    2133: `343`,
    2134: `343`,
    2135: `343`,
    2136: `343`,
    2137: `343`,
    2138: `343`,
    2139: `343`,
    214: `72`,
    2140: `343`,
    2141: `343`,
    2142: `343`,
    2143: `343`,
    2144: `343`,
    2145: `343`,
    2146: `343`,
    2147: `343`,
    2148: `343`,
    2149: `343`,
    215: `72`,
    2150: `343`,
    2151: `343`,
    2152: `343`,
    2153: `343`,
    2154: `343`,
    2155: `343`,
    2156: `343`,
    2157: `343`,
    2158: `343`,
    2159: `343`,
    216: `72`,
    2160: `343`,
    2161: `343`,
    2162: `343`,
    2163: `343`,
    2164: `343`,
    2165: `343`,
    2166: `343`,
    2167: `343`,
    2168: `343`,
    2169: `343`,
    217: `72`,
    2170: `343`,
    2171: `343`,
    2172: `343`,
    2173: `343`,
    2174: `343`,
    2175: `343`,
    2176: `343`,
    2177: `343`,
    2178: `343`,
    2179: `343`,
    218: `72`,
    2180: `343`,
    2181: `343`,
    2182: `343`,
    2183: `343`,
    2184: `343`,
    2185: `343`,
    2186: `343`,
    2187: `343`,
    2188: `343`,
    2189: `343`,
    219: `72`,
    2190: `343`,
    2191: `343`,
    2192: `343`,
    2193: `343`,
    2194: `343`,
    2195: `343`,
    2196: `343`,
    2197: `343`,
    2198: `343`,
    2199: `343`,
    22: `5`,
    220: `73`,
    2200: `343`,
    2201: `343`,
    2202: `343`,
    2203: `343`,
    2204: `343`,
    2205: `343`,
    2206: `343`,
    2207: `343`,
    2208: `343`,
    2209: `343`,
    221: `73`,
    2210: `343`,
    2211: `343`,
    2212: `343`,
    2213: `343`,
    2214: `343`,
    2215: `343`,
    2216: `343`,
    2217: `343`,
    2218: `343`,
    2219: `343`,
    222: `73`,
    2220: `343`,
    2221: `343`,
    2222: `343`,
    2223: `343`,
    2224: `343`,
    2225: `343`,
    2226: `343`,
    2227: `343`,
    2228: `343`,
    2229: `343`,
    223: `75`,
    2230: `343`,
    2231: `343`,
    2232: `343`,
    2233: `343`,
    2234: `343`,
    2235: `343`,
    2236: `343`,
    2237: `343`,
    2238: `343`,
    2239: `343`,
    224: `75`,
    2240: `343`,
    2241: `343`,
    2242: `343`,
    2243: `343`,
    2244: `343`,
    2245: `343`,
    2246: `343`,
    2247: `343`,
    2248: `343`,
    2249: `343`,
    225: `75`,
    2250: `343`,
    2251: `343`,
    2252: `343`,
    2253: `343`,
    2254: `343`,
    2255: `343`,
    2256: `343`,
    2257: `343`,
    2258: `343`,
    2259: `343`,
    226: `76`,
    2260: `343`,
    2261: `343`,
    2262: `343`,
    2263: `343`,
    2264: `343`,
    2265: `343`,
    2266: `343`,
    2267: `343`,
    2268: `343`,
    2269: `343`,
    227: `76`,
    2270: `343`,
    2271: `343`,
    2272: `343`,
    2273: `343`,
    2274: `343`,
    2275: `343`,
    2276: `343`,
    2277: `343`,
    2278: `343`,
    2279: `343`,
    228: `78`,
    2280: `343`,
    2281: `343`,
    2282: `343`,
    2283: `343`,
    2284: `343`,
    2285: `343`,
    2286: `343`,
    2287: `343`,
    2288: `343`,
    2289: `343`,
    229: `79`,
    2290: `343`,
    2291: `343`,
    2292: `343`,
    2293: `343`,
    2294: `343`,
    2295: `343`,
    2296: `343`,
    2297: `343`,
    2298: `343`,
    2299: `343`,
    23: `5`,
    230: `80`,
    2300: `343`,
    2301: `343`,
    2302: `343`,
    2303: `343`,
    2304: `343`,
    2305: `343`,
    2306: `343`,
    2307: `343`,
    2308: `343`,
    2309: `343`,
    231: `81`,
    2310: `343`,
    2311: `343`,
    2312: `343`,
    2313: `343`,
    2314: `343`,
    2315: `343`,
    2316: `343`,
    2317: `343`,
    2318: `343`,
    2319: `343`,
    232: `81`,
    2320: `343`,
    2321: `343`,
    2322: `343`,
    2323: `343`,
    2324: `343`,
    2325: `343`,
    2326: `343`,
    2327: `343`,
    2328: `343`,
    2329: `343`,
    233: `82`,
    2330: `343`,
    2331: `343`,
    2332: `343`,
    2333: `343`,
    2334: `343`,
    2335: `343`,
    2336: `343`,
    2337: `343`,
    2338: `343`,
    2339: `343`,
    234: `83`,
    2340: `343`,
    2341: `343`,
    2342: `343`,
    2343: `343`,
    2344: `343`,
    2345: `343`,
    2346: `343`,
    2347: `343`,
    2348: `343`,
    2349: `343`,
    235: `83`,
    2350: `343`,
    2351: `343`,
    2352: `343`,
    2353: `343`,
    2354: `343`,
    2355: `343`,
    2356: `343`,
    2357: `343`,
    2358: `343`,
    2359: `343`,
    236: `84`,
    2360: `343`,
    2361: `343`,
    2362: `343`,
    2363: `343`,
    2364: `343`,
    2365: `343`,
    2366: `343`,
    2367: `343`,
    2368: `343`,
    2369: `343`,
    237: `85`,
    2370: `343`,
    2371: `343`,
    2372: `343`,
    2373: `343`,
    2374: `343`,
    2375: `343`,
    2376: `343`,
    2377: `343`,
    2378: `343`,
    2379: `343`,
    238: `86`,
    2380: `343`,
    2381: `343`,
    2382: `343`,
    2383: `343`,
    2384: `343`,
    2385: `343`,
    2386: `343`,
    2387: `343`,
    2388: `343`,
    2389: `343`,
    239: `87`,
    2390: `343`,
    2391: `343`,
    2392: `343`,
    2393: `343`,
    2394: `343`,
    2395: `343`,
    2396: `343`,
    2397: `343`,
    2398: `343`,
    2399: `343`,
    24: `5`,
    240: `87`,
    2400: `343`,
    2401: `343`,
    2402: `343`,
    2403: `343`,
    2404: `343`,
    2405: `343`,
    2406: `343`,
    2407: `343`,
    2408: `343`,
    2409: `343`,
    241: `88`,
    2410: `343`,
    2411: `343`,
    2412: `343`,
    2413: `343`,
    2414: `343`,
    2415: `343`,
    2416: `343`,
    2417: `343`,
    2418: `343`,
    2419: `343`,
    242: `88`,
    2420: `343`,
    2421: `343`,
    2422: `343`,
    2423: `343`,
    2424: `343`,
    2425: `343`,
    2426: `343`,
    2427: `343`,
    2428: `343`,
    2429: `343`,
    243: `88`,
    2430: `343`,
    2431: `343`,
    2432: `343`,
    2433: `343`,
    2434: `343`,
    2435: `343`,
    2436: `343`,
    2437: `343`,
    2438: `343`,
    2439: `343`,
    244: `90`,
    2440: `343`,
    2441: `343`,
    2442: `343`,
    2443: `343`,
    2444: `343`,
    2445: `343`,
    2446: `343`,
    2447: `343`,
    2448: `343`,
    2449: `343`,
    245: `90`,
    2450: `343`,
    2451: `343`,
    2452: `343`,
    2453: `343`,
    2454: `343`,
    2455: `343`,
    2456: `343`,
    2457: `343`,
    2458: `343`,
    2459: `343`,
    246: `90`,
    2460: `343`,
    2461: `343`,
    2462: `343`,
    2463: `343`,
    2464: `343`,
    2465: `343`,
    2466: `343`,
    2467: `343`,
    2468: `343`,
    2469: `343`,
    247: `91`,
    2470: `343`,
    2471: `343`,
    2472: `343`,
    2473: `343`,
    2474: `343`,
    2475: `343`,
    2476: `343`,
    2477: `343`,
    2478: `343`,
    2479: `343`,
    248: `91`,
    2480: `343`,
    2481: `343`,
    2482: `343`,
    2483: `343`,
    2484: `343`,
    2485: `343`,
    2486: `343`,
    2487: `343`,
    2488: `343`,
    2489: `343`,
    249: `93`,
    2490: `343`,
    2491: `343`,
    2492: `343`,
    2493: `343`,
    2494: `343`,
    2495: `343`,
    2496: `343`,
    2497: `343`,
    2498: `343`,
    2499: `343`,
    25: `6`,
    250: `94`,
    2500: `343`,
    2501: `343`,
    2502: `343`,
    2503: `343`,
    2504: `343`,
    2505: `343`,
    2506: `343`,
    2507: `343`,
    2508: `343`,
    2509: `343`,
    251: `95`,
    2510: `343`,
    2511: `343`,
    2512: `343`,
    2513: `343`,
    2514: `343`,
    2515: `343`,
    2516: `343`,
    2517: `343`,
    2518: `343`,
    2519: `343`,
    252: `95`,
    2520: `343`,
    2521: `343`,
    2522: `343`,
    2523: `343`,
    2524: `343`,
    2525: `343`,
    2526: `343`,
    2527: `343`,
    2528: `343`,
    2529: `343`,
    253: `95`,
    2530: `343`,
    2531: `343`,
    2532: `343`,
    2533: `343`,
    2534: `343`,
    2535: `343`,
    2536: `343`,
    2537: `343`,
    2538: `343`,
    2539: `343`,
    254: `96`,
    2540: `343`,
    2541: `343`,
    2542: `343`,
    2543: `343`,
    2544: `343`,
    2545: `343`,
    2546: `343`,
    2547: `343`,
    2548: `343`,
    2549: `343`,
    255: `96`,
    2550: `343`,
    2551: `343`,
    2552: `343`,
    2553: `343`,
    2554: `343`,
    2555: `343`,
    2556: `343`,
    2557: `343`,
    2558: `343`,
    2559: `343`,
    256: `97`,
    2560: `343`,
    2561: `343`,
    2562: `343`,
    2563: `343`,
    2564: `343`,
    2565: `343`,
    2566: `343`,
    2567: `343`,
    2568: `343`,
    2569: `343`,
    257: `98`,
    2570: `343`,
    2571: `343`,
    2572: `343`,
    2573: `343`,
    2574: `343`,
    2575: `343`,
    2576: `343`,
    2577: `343`,
    2578: `343`,
    2579: `343`,
    258: `99`,
    2580: `343`,
    2581: `343`,
    2582: `343`,
    2583: `343`,
    2584: `343`,
    2585: `343`,
    2586: `343`,
    2587: `343`,
    2588: `343`,
    2589: `343`,
    259: `99`,
    2590: `343`,
    2591: `343`,
    2592: `343`,
    2593: `343`,
    2594: `343`,
    2595: `343`,
    2596: `343`,
    2597: `343`,
    2598: `343`,
    2599: `343`,
    26: `7`,
    260: `100`,
    2600: `343`,
    2601: `343`,
    2602: `343`,
    2603: `343`,
    2604: `343`,
    2605: `343`,
    2606: `343`,
    2607: `343`,
    2608: `343`,
    2609: `343`,
    261: `100`,
    2610: `343`,
    2611: `343`,
    2612: `343`,
    2613: `343`,
    2614: `343`,
    2615: `343`,
    2616: `343`,
    2617: `343`,
    2618: `343`,
    2619: `343`,
    262: `100`,
    2620: `343`,
    2621: `343`,
    2622: `343`,
    2623: `343`,
    2624: `343`,
    2625: `343`,
    2626: `343`,
    2627: `343`,
    2628: `343`,
    2629: `343`,
    263: `102`,
    2630: `343`,
    2631: `343`,
    2632: `343`,
    2633: `343`,
    2634: `343`,
    2635: `343`,
    2636: `343`,
    2637: `343`,
    2638: `343`,
    2639: `343`,
    264: `102`,
    2640: `343`,
    2641: `343`,
    2642: `343`,
    2643: `343`,
    2644: `343`,
    2645: `343`,
    2646: `343`,
    2647: `343`,
    2648: `343`,
    2649: `343`,
    265: `102`,
    2650: `343`,
    2651: `343`,
    2652: `343`,
    2653: `343`,
    2654: `343`,
    2655: `343`,
    2656: `343`,
    2657: `343`,
    2658: `343`,
    2659: `343`,
    266: `103`,
    2660: `343`,
    2661: `343`,
    2662: `343`,
    2663: `343`,
    2664: `343`,
    2665: `343`,
    2666: `343`,
    2667: `343`,
    2668: `343`,
    2669: `343`,
    267: `103`,
    2670: `343`,
    2671: `343`,
    2672: `343`,
    2673: `343`,
    2674: `343`,
    2675: `343`,
    2676: `343`,
    2677: `343`,
    2678: `343`,
    2679: `343`,
    268: `105`,
    2680: `343`,
    2681: `343`,
    2682: `343`,
    2683: `343`,
    2684: `343`,
    2685: `343`,
    2686: `343`,
    2687: `343`,
    2688: `343`,
    2689: `343`,
    269: `106`,
    2690: `343`,
    2691: `343`,
    2692: `343`,
    2693: `343`,
    2694: `343`,
    2695: `343`,
    2696: `343`,
    2697: `343`,
    2698: `343`,
    2699: `343`,
    27: `8`,
    270: `107`,
    2700: `343`,
    2701: `343`,
    2702: `343`,
    2703: `343`,
    2704: `343`,
    2705: `343`,
    2706: `343`,
    2707: `343`,
    2708: `343`,
    2709: `343`,
    271: `107`,
    2710: `343`,
    2711: `343`,
    2712: `343`,
    2713: `343`,
    2714: `343`,
    2715: `343`,
    2716: `343`,
    2717: `343`,
    2718: `343`,
    2719: `343`,
    272: `107`,
    2720: `343`,
    2721: `343`,
    2722: `343`,
    2723: `343`,
    2724: `343`,
    2725: `343`,
    2726: `343`,
    2727: `343`,
    2728: `343`,
    2729: `343`,
    273: `108`,
    2730: `343`,
    2731: `343`,
    2732: `343`,
    2733: `343`,
    2734: `343`,
    2735: `343`,
    2736: `343`,
    2737: `343`,
    2738: `343`,
    2739: `343`,
    274: `108`,
    2740: `343`,
    2741: `343`,
    2742: `343`,
    2743: `343`,
    2744: `343`,
    2745: `343`,
    2746: `343`,
    2747: `343`,
    2748: `343`,
    2749: `343`,
    275: `109`,
    2750: `343`,
    2751: `343`,
    2752: `343`,
    2753: `343`,
    2754: `343`,
    2755: `343`,
    2756: `343`,
    2757: `343`,
    2758: `343`,
    2759: `343`,
    276: `110`,
    2760: `343`,
    2761: `343`,
    2762: `343`,
    2763: `343`,
    2764: `343`,
    2765: `343`,
    2766: `343`,
    2767: `343`,
    2768: `343`,
    2769: `343`,
    277: `110`,
    2770: `343`,
    2771: `343`,
    2772: `343`,
    2773: `343`,
    2774: `343`,
    2775: `343`,
    2776: `343`,
    2777: `343`,
    2778: `343`,
    2779: `343`,
    278: `111`,
    2780: `343`,
    2781: `343`,
    2782: `343`,
    2783: `343`,
    2784: `343`,
    2785: `343`,
    2786: `343`,
    2787: `343`,
    2788: `343`,
    2789: `343`,
    279: `112`,
    2790: `343`,
    2791: `343`,
    2792: `343`,
    2793: `343`,
    2794: `343`,
    2795: `343`,
    2796: `343`,
    2797: `343`,
    2798: `343`,
    2799: `343`,
    28: `9`,
    280: `113`,
    2800: `343`,
    2801: `343`,
    2802: `343`,
    2803: `343`,
    2804: `343`,
    2805: `343`,
    2806: `343`,
    2807: `343`,
    2808: `343`,
    2809: `343`,
    281: `114`,
    2810: `343`,
    2811: `343`,
    2812: `343`,
    2813: `343`,
    2814: `343`,
    2815: `343`,
    2816: `343`,
    2817: `343`,
    2818: `343`,
    2819: `343`,
    282: `114`,
    2820: `343`,
    2821: `343`,
    2822: `343`,
    2823: `343`,
    2824: `343`,
    2825: `343`,
    2826: `343`,
    2827: `343`,
    2828: `343`,
    2829: `343`,
    283: `115`,
    2830: `343`,
    2831: `343`,
    2832: `343`,
    2833: `343`,
    2834: `343`,
    2835: `343`,
    2836: `343`,
    2837: `343`,
    2838: `343`,
    2839: `343`,
    284: `115`,
    2840: `343`,
    2841: `343`,
    2842: `343`,
    2843: `343`,
    2844: `343`,
    2845: `343`,
    2846: `343`,
    2847: `343`,
    2848: `343`,
    2849: `343`,
    285: `115`,
    2850: `343`,
    2851: `343`,
    2852: `343`,
    2853: `343`,
    2854: `343`,
    2855: `343`,
    2856: `343`,
    2857: `343`,
    2858: `343`,
    2859: `343`,
    286: `117`,
    2860: `343`,
    2861: `343`,
    2862: `343`,
    2863: `343`,
    2864: `343`,
    2865: `343`,
    2866: `343`,
    2867: `343`,
    2868: `343`,
    2869: `343`,
    287: `117`,
    2870: `343`,
    2871: `343`,
    2872: `343`,
    2873: `343`,
    2874: `343`,
    2875: `343`,
    2876: `343`,
    2877: `343`,
    2878: `343`,
    2879: `343`,
    288: `117`,
    2880: `343`,
    2881: `343`,
    2882: `343`,
    2883: `343`,
    2884: `343`,
    2885: `343`,
    2886: `343`,
    2887: `343`,
    2888: `343`,
    2889: `343`,
    289: `118`,
    2890: `343`,
    2891: `343`,
    2892: `343`,
    2893: `343`,
    2894: `343`,
    2895: `343`,
    2896: `343`,
    2897: `343`,
    2898: `343`,
    2899: `343`,
    29: `10`,
    290: `118`,
    2900: `343`,
    2901: `343`,
    2902: `343`,
    2903: `343`,
    2904: `343`,
    2905: `343`,
    2906: `343`,
    2907: `343`,
    2908: `343`,
    2909: `343`,
    291: `120`,
    2910: `343`,
    2911: `343`,
    2912: `343`,
    2913: `343`,
    2914: `343`,
    2915: `343`,
    2916: `343`,
    2917: `343`,
    2918: `343`,
    2919: `343`,
    292: `121`,
    2920: `343`,
    2921: `343`,
    2922: `343`,
    2923: `343`,
    2924: `343`,
    2925: `343`,
    2926: `343`,
    2927: `343`,
    2928: `343`,
    2929: `343`,
    293: `122`,
    2930: `343`,
    2931: `343`,
    2932: `343`,
    2933: `343`,
    2934: `343`,
    2935: `343`,
    2936: `343`,
    2937: `343`,
    2938: `343`,
    2939: `343`,
    294: `122`,
    2940: `343`,
    2941: `343`,
    2942: `343`,
    2943: `343`,
    2944: `343`,
    2945: `343`,
    2946: `343`,
    2947: `343`,
    2948: `343`,
    2949: `343`,
    295: `122`,
    2950: `343`,
    2951: `343`,
    2952: `343`,
    2953: `343`,
    2954: `343`,
    2955: `343`,
    2956: `343`,
    2957: `343`,
    2958: `343`,
    2959: `343`,
    296: `123`,
    2960: `343`,
    2961: `343`,
    2962: `343`,
    2963: `343`,
    2964: `343`,
    2965: `343`,
    2966: `343`,
    2967: `343`,
    2968: `343`,
    2969: `343`,
    297: `123`,
    2970: `343`,
    2971: `343`,
    2972: `343`,
    2973: `343`,
    2974: `343`,
    2975: `343`,
    2976: `343`,
    2977: `343`,
    2978: `343`,
    2979: `343`,
    298: `124`,
    2980: `343`,
    2981: `343`,
    2982: `343`,
    2983: `343`,
    2984: `343`,
    2985: `343`,
    2986: `343`,
    2987: `343`,
    2988: `343`,
    2989: `343`,
    299: `125`,
    2990: `343`,
    2991: `343`,
    2992: `343`,
    2993: `343`,
    2994: `343`,
    2995: `343`,
    2996: `343`,
    2997: `343`,
    2998: `343`,
    2999: `343`,
    3: `2`,
    30: `11`,
    300: `125`,
    3000: `343`,
    3001: `343`,
    3002: `343`,
    3003: `343`,
    3004: `343`,
    3005: `343`,
    3006: `343`,
    3007: `343`,
    3008: `343`,
    3009: `343`,
    301: `126`,
    3010: `343`,
    3011: `343`,
    3012: `343`,
    3013: `343`,
    3014: `343`,
    3015: `343`,
    3016: `343`,
    3017: `343`,
    3018: `343`,
    3019: `343`,
    302: `127`,
    3020: `343`,
    3021: `343`,
    3022: `343`,
    3023: `343`,
    3024: `343`,
    3025: `343`,
    3026: `343`,
    3027: `343`,
    3028: `343`,
    3029: `343`,
    303: `128`,
    3030: `343`,
    3031: `343`,
    3032: `343`,
    3033: `343`,
    3034: `343`,
    3035: `343`,
    3036: `343`,
    3037: `343`,
    3038: `343`,
    3039: `343`,
    304: `129`,
    3040: `343`,
    3041: `343`,
    3042: `343`,
    3043: `343`,
    3044: `343`,
    3045: `343`,
    3046: `343`,
    3047: `343`,
    3048: `343`,
    3049: `343`,
    305: `129`,
    3050: `343`,
    3051: `343`,
    3052: `343`,
    3053: `343`,
    3054: `343`,
    3055: `343`,
    3056: `343`,
    3057: `343`,
    3058: `343`,
    3059: `343`,
    306: `130`,
    3060: `343`,
    3061: `343`,
    3062: `343`,
    3063: `343`,
    3064: `343`,
    3065: `343`,
    3066: `343`,
    3067: `343`,
    3068: `343`,
    3069: `343`,
    307: `130`,
    3070: `343`,
    3071: `343`,
    3072: `343`,
    3073: `343`,
    3074: `343`,
    3075: `343`,
    3076: `343`,
    3077: `343`,
    3078: `343`,
    3079: `343`,
    308: `130`,
    3080: `343`,
    3081: `343`,
    3082: `343`,
    3083: `343`,
    3084: `343`,
    3085: `343`,
    3086: `343`,
    3087: `343`,
    3088: `343`,
    3089: `343`,
    309: `133`,
    3090: `343`,
    3091: `343`,
    3092: `343`,
    3093: `343`,
    3094: `343`,
    3095: `343`,
    3096: `343`,
    3097: `343`,
    3098: `343`,
    3099: `343`,
    31: `11`,
    310: `133`,
    3100: `343`,
    3101: `343`,
    3102: `343`,
    3103: `343`,
    3104: `343`,
    3105: `343`,
    3106: `343`,
    3107: `343`,
    3108: `343`,
    3109: `343`,
    311: `133`,
    3110: `343`,
    3111: `343`,
    3112: `343`,
    3113: `343`,
    3114: `343`,
    3115: `343`,
    3116: `343`,
    3117: `343`,
    3118: `343`,
    3119: `343`,
    312: `133`,
    3120: `343`,
    3121: `343`,
    3122: `343`,
    3123: `343`,
    3124: `343`,
    3125: `343`,
    3126: `343`,
    3127: `343`,
    3128: `343`,
    3129: `343`,
    313: `133`,
    3130: `343`,
    3131: `343`,
    3132: `343`,
    3133: `343`,
    3134: `343`,
    3135: `343`,
    3136: `343`,
    3137: `343`,
    3138: `343`,
    3139: `343`,
    314: `133`,
    3140: `343`,
    3141: `343`,
    3142: `343`,
    3143: `343`,
    3144: `343`,
    3145: `343`,
    3146: `343`,
    3147: `343`,
    3148: `343`,
    3149: `343`,
    315: `133`,
    3150: `343`,
    3151: `343`,
    3152: `343`,
    3153: `343`,
    3154: `343`,
    3155: `343`,
    3156: `343`,
    3157: `343`,
    3158: `343`,
    3159: `343`,
    316: `133`,
    3160: `343`,
    3161: `343`,
    3162: `343`,
    3163: `343`,
    3164: `343`,
    3165: `343`,
    3166: `343`,
    3167: `343`,
    3168: `343`,
    3169: `343`,
    317: `133`,
    3170: `343`,
    3171: `343`,
    3172: `343`,
    3173: `343`,
    3174: `343`,
    3175: `343`,
    3176: `343`,
    3177: `343`,
    3178: `343`,
    3179: `343`,
    318: `133`,
    3180: `343`,
    3181: `343`,
    3182: `343`,
    3183: `343`,
    3184: `343`,
    3185: `343`,
    3186: `343`,
    3187: `343`,
    3188: `343`,
    3189: `343`,
    319: `133`,
    3190: `343`,
    3191: `343`,
    3192: `343`,
    3193: `343`,
    3194: `343`,
    3195: `343`,
    3196: `343`,
    3197: `343`,
    3198: `343`,
    3199: `343`,
    32: `12`,
    320: `133`,
    3200: `343`,
    3201: `343`,
    3202: `343`,
    3203: `343`,
    3204: `343`,
    3205: `343`,
    3206: `343`,
    3207: `343`,
    3208: `343`,
    3209: `343`,
    321: `133`,
    3210: `343`,
    3211: `343`,
    3212: `343`,
    3213: `343`,
    3214: `343`,
    3215: `343`,
    3216: `343`,
    3217: `343`,
    3218: `343`,
    3219: `343`,
    322: `133`,
    3220: `343`,
    3221: `343`,
    3222: `343`,
    3223: `343`,
    3224: `343`,
    3225: `343`,
    3226: `343`,
    3227: `343`,
    3228: `343`,
    3229: `343`,
    323: `133`,
    3230: `343`,
    3231: `343`,
    3232: `343`,
    3233: `343`,
    3234: `343`,
    3235: `343`,
    3236: `343`,
    3237: `343`,
    3238: `343`,
    3239: `343`,
    324: `133`,
    3240: `343`,
    3241: `343`,
    3242: `343`,
    3243: `343`,
    3244: `343`,
    3245: `343`,
    3246: `343`,
    3247: `343`,
    3248: `343`,
    3249: `343`,
    325: `133`,
    3250: `343`,
    3251: `343`,
    3252: `343`,
    3253: `343`,
    3254: `343`,
    3255: `343`,
    3256: `343`,
    3257: `343`,
    3258: `343`,
    3259: `343`,
    326: `133`,
    3260: `343`,
    3261: `343`,
    3262: `343`,
    3263: `343`,
    3264: `343`,
    3265: `343`,
    3266: `343`,
    3267: `343`,
    3268: `343`,
    3269: `343`,
    327: `133`,
    3270: `343`,
    3271: `343`,
    3272: `343`,
    3273: `343`,
    3274: `343`,
    3275: `343`,
    3276: `343`,
    3277: `343`,
    3278: `343`,
    3279: `343`,
    328: `133`,
    3280: `343`,
    3281: `343`,
    3282: `343`,
    3283: `343`,
    3284: `343`,
    3285: `343`,
    3286: `343`,
    3287: `343`,
    3288: `343`,
    3289: `343`,
    329: `133`,
    3290: `343`,
    3291: `343`,
    3292: `343`,
    3293: `343`,
    3294: `343`,
    3295: `343`,
    3296: `343`,
    3297: `343`,
    3298: `343`,
    3299: `343`,
    33: `13`,
    330: `133`,
    3300: `343`,
    3301: `343`,
    3302: `343`,
    3303: `343`,
    3304: `343`,
    3305: `343`,
    3306: `343`,
    3307: `343`,
    3308: `343`,
    3309: `343`,
    331: `133`,
    3310: `343`,
    3311: `343`,
    3312: `343`,
    3313: `343`,
    3314: `343`,
    3315: `343`,
    3316: `343`,
    3317: `343`,
    3318: `343`,
    3319: `343`,
    332: `133`,
    3320: `343`,
    3321: `343`,
    3322: `343`,
    3323: `343`,
    3324: `343`,
    3325: `343`,
    3326: `343`,
    3327: `343`,
    3328: `343`,
    3329: `343`,
    333: `133`,
    3330: `343`,
    3331: `343`,
    3332: `343`,
    3333: `343`,
    3334: `343`,
    3335: `343`,
    3336: `343`,
    3337: `343`,
    3338: `343`,
    3339: `343`,
    334: `133`,
    3340: `343`,
    3341: `343`,
    3342: `343`,
    3343: `343`,
    3344: `343`,
    3345: `343`,
    3346: `343`,
    3347: `343`,
    3348: `343`,
    3349: `343`,
    335: `133`,
    3350: `343`,
    3351: `343`,
    3352: `343`,
    3353: `343`,
    3354: `343`,
    3355: `343`,
    3356: `343`,
    3357: `343`,
    3358: `343`,
    3359: `343`,
    336: `133`,
    3360: `343`,
    3361: `343`,
    3362: `343`,
    3363: `343`,
    3364: `343`,
    3365: `343`,
    3366: `343`,
    3367: `343`,
    3368: `343`,
    3369: `343`,
    337: `133`,
    3370: `343`,
    3371: `343`,
    3372: `343`,
    3373: `343`,
    3374: `343`,
    3375: `343`,
    3376: `343`,
    3377: `343`,
    3378: `343`,
    3379: `343`,
    338: `133`,
    3380: `343`,
    3381: `343`,
    3382: `343`,
    3383: `343`,
    3384: `343`,
    3385: `343`,
    3386: `343`,
    3387: `343`,
    3388: `343`,
    3389: `343`,
    339: `133`,
    3390: `343`,
    3391: `343`,
    3392: `343`,
    3393: `343`,
    3394: `343`,
    3395: `343`,
    3396: `343`,
    3397: `343`,
    3398: `343`,
    3399: `343`,
    34: `14`,
    340: `133`,
    3400: `343`,
    3401: `343`,
    3402: `343`,
    3403: `343`,
    3404: `343`,
    3405: `343`,
    3406: `343`,
    3407: `343`,
    3408: `343`,
    3409: `343`,
    341: `133`,
    3410: `343`,
    3411: `343`,
    3412: `343`,
    3413: `343`,
    3414: `343`,
    3415: `343`,
    3416: `343`,
    3417: `343`,
    3418: `343`,
    3419: `343`,
    342: `133`,
    3420: `343`,
    3421: `343`,
    3422: `343`,
    3423: `343`,
    3424: `343`,
    3425: `343`,
    3426: `343`,
    3427: `343`,
    3428: `343`,
    3429: `343`,
    343: `133`,
    3430: `343`,
    3431: `343`,
    3432: `343`,
    3433: `343`,
    3434: `343`,
    3435: `343`,
    3436: `343`,
    3437: `343`,
    3438: `343`,
    3439: `343`,
    344: `133`,
    3440: `343`,
    3441: `343`,
    3442: `343`,
    3443: `343`,
    3444: `343`,
    3445: `343`,
    3446: `343`,
    3447: `343`,
    3448: `343`,
    3449: `343`,
    345: `133`,
    3450: `343`,
    3451: `343`,
    3452: `343`,
    3453: `343`,
    3454: `343`,
    3455: `343`,
    3456: `343`,
    3457: `343`,
    3458: `343`,
    3459: `343`,
    346: `133`,
    3460: `343`,
    3461: `343`,
    3462: `343`,
    3463: `343`,
    3464: `343`,
    3465: `343`,
    3466: `343`,
    3467: `343`,
    3468: `343`,
    3469: `343`,
    347: `133`,
    3470: `343`,
    3471: `343`,
    3472: `343`,
    3473: `343`,
    3474: `343`,
    3475: `343`,
    3476: `343`,
    3477: `343`,
    3478: `343`,
    3479: `343`,
    348: `133`,
    3480: `343`,
    3481: `343`,
    3482: `343`,
    3483: `343`,
    3484: `343`,
    3485: `343`,
    3486: `343`,
    3487: `343`,
    3488: `343`,
    3489: `343`,
    349: `133`,
    3490: `343`,
    3491: `343`,
    3492: `343`,
    3493: `343`,
    3494: `343`,
    3495: `343`,
    3496: `343`,
    3497: `343`,
    3498: `343`,
    3499: `343`,
    35: `14`,
    350: `133`,
    3500: `343`,
    3501: `343`,
    3502: `343`,
    3503: `343`,
    3504: `343`,
    3505: `343`,
    3506: `343`,
    3507: `343`,
    3508: `343`,
    3509: `343`,
    351: `133`,
    3510: `343`,
    3511: `343`,
    3512: `343`,
    3513: `343`,
    3514: `343`,
    3515: `343`,
    3516: `343`,
    3517: `343`,
    3518: `343`,
    3519: `343`,
    352: `133`,
    3520: `343`,
    3521: `343`,
    3522: `343`,
    3523: `343`,
    3524: `343`,
    3525: `343`,
    3526: `343`,
    3527: `343`,
    3528: `343`,
    3529: `343`,
    353: `133`,
    3530: `343`,
    3531: `343`,
    3532: `343`,
    3533: `343`,
    3534: `343`,
    3535: `343`,
    3536: `343`,
    3537: `343`,
    3538: `343`,
    3539: `343`,
    354: `133`,
    3540: `343`,
    3541: `343`,
    3542: `343`,
    3543: `343`,
    3544: `343`,
    3545: `343`,
    3546: `343`,
    3547: `343`,
    3548: `343`,
    3549: `343`,
    355: `133`,
    3550: `343`,
    3551: `343`,
    3552: `343`,
    3553: `343`,
    3554: `343`,
    3555: `343`,
    3556: `343`,
    3557: `343`,
    3558: `343`,
    3559: `343`,
    356: `133`,
    3560: `343`,
    3561: `343`,
    3562: `343`,
    3563: `343`,
    3564: `343`,
    3565: `343`,
    3566: `343`,
    3567: `343`,
    3568: `343`,
    3569: `343`,
    357: `133`,
    3570: `343`,
    3571: `343`,
    3572: `343`,
    3573: `343`,
    3574: `343`,
    3575: `343`,
    3576: `343`,
    3577: `343`,
    3578: `343`,
    3579: `343`,
    358: `133`,
    3580: `343`,
    3581: `343`,
    3582: `343`,
    3583: `343`,
    3584: `343`,
    3585: `343`,
    3586: `343`,
    3587: `343`,
    3588: `343`,
    3589: `343`,
    359: `133`,
    3590: `343`,
    3591: `343`,
    3592: `343`,
    3593: `343`,
    3594: `343`,
    3595: `343`,
    3596: `343`,
    3597: `343`,
    3598: `343`,
    3599: `343`,
    36: `15`,
    360: `133`,
    3600: `343`,
    3601: `343`,
    3602: `343`,
    3603: `343`,
    3604: `343`,
    3605: `343`,
    3606: `343`,
    3607: `343`,
    3608: `343`,
    3609: `343`,
    361: `133`,
    3610: `343`,
    3611: `343`,
    3612: `343`,
    3613: `343`,
    3614: `343`,
    3615: `343`,
    3616: `343`,
    3617: `343`,
    3618: `343`,
    3619: `343`,
    362: `133`,
    3620: `343`,
    3621: `343`,
    3622: `343`,
    3623: `343`,
    3624: `343`,
    3625: `343`,
    3626: `343`,
    3627: `343`,
    3628: `343`,
    3629: `343`,
    363: `133`,
    3630: `343`,
    3631: `343`,
    3632: `343`,
    3633: `343`,
    3634: `343`,
    3635: `343`,
    3636: `343`,
    3637: `343`,
    3638: `343`,
    3639: `343`,
    364: `133`,
    3640: `343`,
    3641: `343`,
    3642: `343`,
    3643: `343`,
    3644: `343`,
    3645: `343`,
    3646: `343`,
    3647: `343`,
    3648: `343`,
    3649: `343`,
    365: `133`,
    3650: `343`,
    3651: `343`,
    3652: `343`,
    3653: `343`,
    3654: `343`,
    3655: `343`,
    3656: `343`,
    3657: `343`,
    3658: `343`,
    3659: `343`,
    366: `133`,
    3660: `343`,
    3661: `343`,
    3662: `343`,
    3663: `343`,
    3664: `343`,
    3665: `343`,
    3666: `343`,
    3667: `343`,
    3668: `343`,
    3669: `343`,
    367: `133`,
    3670: `343`,
    3671: `343`,
    3672: `343`,
    3673: `343`,
    3674: `343`,
    3675: `343`,
    3676: `343`,
    3677: `343`,
    3678: `343`,
    3679: `343`,
    368: `133`,
    3680: `343`,
    3681: `343`,
    3682: `343`,
    3683: `343`,
    3684: `343`,
    3685: `343`,
    3686: `343`,
    3687: `343`,
    3688: `343`,
    3689: `343`,
    369: `133`,
    3690: `343`,
    3691: `343`,
    3692: `343`,
    3693: `343`,
    3694: `343`,
    3695: `343`,
    3696: `343`,
    3697: `343`,
    3698: `343`,
    3699: `343`,
    37: `16`,
    370: `133`,
    3700: `343`,
    3701: `343`,
    3702: `343`,
    3703: `343`,
    3704: `343`,
    3705: `343`,
    3706: `343`,
    3707: `343`,
    3708: `343`,
    3709: `343`,
    371: `133`,
    3710: `343`,
    3711: `343`,
    3712: `343`,
    3713: `343`,
    3714: `343`,
    3715: `343`,
    3716: `343`,
    3717: `343`,
    3718: `343`,
    3719: `343`,
    372: `133`,
    3720: `343`,
    3721: `343`,
    3722: `343`,
    3723: `343`,
    3724: `343`,
    3725: `343`,
    3726: `343`,
    3727: `343`,
    3728: `343`,
    3729: `343`,
    373: `133`,
    3730: `343`,
    3731: `343`,
    3732: `343`,
    3733: `343`,
    3734: `343`,
    3735: `343`,
    3736: `343`,
    3737: `343`,
    3738: `343`,
    3739: `343`,
    374: `133`,
    3740: `343`,
    3741: `343`,
    3742: `343`,
    3743: `343`,
    3744: `343`,
    3745: `343`,
    3746: `343`,
    3747: `343`,
    3748: `343`,
    3749: `343`,
    375: `133`,
    3750: `343`,
    3751: `343`,
    3752: `343`,
    3753: `343`,
    3754: `343`,
    3755: `343`,
    3756: `343`,
    3757: `343`,
    3758: `343`,
    3759: `343`,
    376: `133`,
    3760: `343`,
    3761: `343`,
    3762: `343`,
    3763: `343`,
    3764: `343`,
    3765: `343`,
    3766: `343`,
    3767: `343`,
    3768: `343`,
    3769: `343`,
    377: `133`,
    3770: `343`,
    3771: `343`,
    3772: `343`,
    3773: `343`,
    3774: `343`,
    3775: `343`,
    3776: `343`,
    3777: `343`,
    3778: `343`,
    3779: `343`,
    378: `133`,
    3780: `343`,
    3781: `343`,
    3782: `343`,
    3783: `343`,
    3784: `343`,
    3785: `343`,
    3786: `343`,
    3787: `343`,
    3788: `343`,
    3789: `343`,
    379: `133`,
    3790: `343`,
    3791: `343`,
    3792: `343`,
    3793: `343`,
    3794: `343`,
    3795: `343`,
    3796: `343`,
    3797: `343`,
    3798: `343`,
    3799: `343`,
    38: `18`,
    380: `133`,
    3800: `343`,
    3801: `343`,
    3802: `343`,
    3803: `343`,
    3804: `343`,
    3805: `343`,
    3806: `343`,
    3807: `343`,
    3808: `343`,
    3809: `343`,
    381: `133`,
    3810: `343`,
    3811: `343`,
    3812: `343`,
    3813: `343`,
    3814: `343`,
    3815: `343`,
    3816: `343`,
    3817: `343`,
    3818: `343`,
    3819: `343`,
    382: `133`,
    3820: `343`,
    3821: `343`,
    3822: `343`,
    3823: `343`,
    3824: `343`,
    3825: `343`,
    3826: `343`,
    3827: `343`,
    3828: `343`,
    3829: `343`,
    383: `133`,
    3830: `343`,
    3831: `343`,
    3832: `343`,
    3833: `343`,
    3834: `343`,
    3835: `343`,
    3836: `343`,
    3837: `343`,
    3838: `343`,
    3839: `343`,
    384: `133`,
    3840: `343`,
    3841: `343`,
    3842: `343`,
    3843: `343`,
    3844: `343`,
    3845: `343`,
    3846: `343`,
    3847: `343`,
    3848: `343`,
    3849: `343`,
    385: `133`,
    3850: `343`,
    3851: `343`,
    3852: `343`,
    3853: `343`,
    3854: `343`,
    3855: `343`,
    3856: `343`,
    3857: `343`,
    3858: `343`,
    3859: `343`,
    386: `133`,
    3860: `343`,
    3861: `343`,
    3862: `343`,
    3863: `343`,
    3864: `343`,
    3865: `343`,
    3866: `343`,
    3867: `343`,
    3868: `343`,
    3869: `343`,
    387: `133`,
    3870: `343`,
    3871: `343`,
    3872: `343`,
    3873: `343`,
    3874: `343`,
    3875: `343`,
    3876: `343`,
    3877: `343`,
    3878: `343`,
    3879: `343`,
    388: `133`,
    3880: `343`,
    3881: `343`,
    3882: `343`,
    3883: `343`,
    3884: `343`,
    3885: `343`,
    3886: `343`,
    3887: `343`,
    3888: `343`,
    3889: `343`,
    389: `133`,
    3890: `343`,
    3891: `343`,
    3892: `343`,
    3893: `343`,
    3894: `343`,
    3895: `343`,
    3896: `343`,
    3897: `343`,
    3898: `343`,
    3899: `343`,
    39: `18`,
    390: `133`,
    3900: `343`,
    3901: `343`,
    3902: `343`,
    3903: `343`,
    3904: `343`,
    3905: `343`,
    3906: `343`,
    3907: `343`,
    3908: `343`,
    3909: `343`,
    391: `133`,
    3910: `343`,
    3911: `343`,
    3912: `343`,
    3913: `343`,
    3914: `343`,
    3915: `343`,
    3916: `343`,
    3917: `343`,
    3918: `343`,
    3919: `343`,
    392: `133`,
    3920: `343`,
    3921: `343`,
    3922: `343`,
    3923: `343`,
    3924: `343`,
    3925: `343`,
    3926: `343`,
    3927: `343`,
    3928: `343`,
    3929: `343`,
    393: `133`,
    3930: `343`,
    3931: `343`,
    3932: `343`,
    3933: `343`,
    3934: `343`,
    3935: `343`,
    3936: `343`,
    3937: `343`,
    3938: `343`,
    3939: `343`,
    394: `133`,
    3940: `343`,
    3941: `343`,
    3942: `343`,
    3943: `343`,
    3944: `343`,
    3945: `343`,
    3946: `343`,
    3947: `343`,
    3948: `343`,
    3949: `343`,
    395: `133`,
    3950: `343`,
    3951: `343`,
    3952: `343`,
    3953: `343`,
    3954: `343`,
    3955: `343`,
    3956: `343`,
    3957: `343`,
    3958: `343`,
    3959: `343`,
    396: `133`,
    3960: `343`,
    3961: `343`,
    3962: `343`,
    3963: `343`,
    3964: `343`,
    3965: `343`,
    3966: `343`,
    3967: `343`,
    3968: `343`,
    3969: `343`,
    397: `133`,
    3970: `343`,
    3971: `343`,
    3972: `343`,
    3973: `343`,
    3974: `343`,
    3975: `343`,
    3976: `343`,
    3977: `343`,
    3978: `343`,
    3979: `343`,
    398: `133`,
    3980: `343`,
    3981: `343`,
    3982: `343`,
    3983: `343`,
    3984: `343`,
    3985: `343`,
    3986: `343`,
    3987: `343`,
    3988: `343`,
    3989: `343`,
    399: `133`,
    3990: `343`,
    3991: `343`,
    3992: `343`,
    3993: `343`,
    3994: `343`,
    3995: `343`,
    3996: `343`,
    3997: `343`,
    3998: `343`,
    3999: `343`,
    4: `2`,
    40: `18`,
    400: `133`,
    4000: `343`,
    4001: `343`,
    4002: `343`,
    4003: `343`,
    4004: `343`,
    4005: `343`,
    4006: `343`,
    4007: `343`,
    4008: `343`,
    4009: `343`,
    401: `133`,
    4010: `343`,
    4011: `343`,
    4012: `343`,
    4013: `343`,
    4014: `343`,
    4015: `343`,
    4016: `343`,
    4017: `343`,
    4018: `343`,
    4019: `343`,
    402: `133`,
    4020: `343`,
    4021: `343`,
    4022: `343`,
    4023: `343`,
    4024: `343`,
    4025: `343`,
    4026: `343`,
    4027: `343`,
    4028: `343`,
    4029: `343`,
    403: `133`,
    4030: `343`,
    4031: `343`,
    4032: `343`,
    4033: `343`,
    4034: `343`,
    4035: `343`,
    4036: `343`,
    4037: `343`,
    4038: `343`,
    4039: `343`,
    404: `133`,
    4040: `343`,
    4041: `343`,
    4042: `343`,
    4043: `343`,
    4044: `343`,
    4045: `343`,
    4046: `343`,
    4047: `343`,
    4048: `343`,
    4049: `343`,
    405: `133`,
    4050: `343`,
    4051: `343`,
    4052: `343`,
    4053: `343`,
    4054: `343`,
    4055: `343`,
    4056: `343`,
    4057: `343`,
    4058: `343`,
    4059: `343`,
    406: `133`,
    4060: `343`,
    4061: `343`,
    4062: `343`,
    4063: `343`,
    4064: `343`,
    4065: `343`,
    4066: `343`,
    4067: `343`,
    4068: `343`,
    4069: `343`,
    407: `133`,
    4070: `343`,
    4071: `343`,
    4072: `343`,
    4073: `343`,
    4074: `343`,
    4075: `343`,
    4076: `343`,
    4077: `343`,
    4078: `344`,
    4079: `344`,
    408: `133`,
    4080: `345`,
    4081: `345`,
    4082: `345`,
    4083: `346`,
    4084: `346`,
    4085: `347`,
    4086: `347`,
    4087: `348`,
    4088: `348`,
    4089: `349`,
    409: `133`,
    4090: `350`,
    4091: `350`,
    4092: `351`,
    4093: `352`,
    4094: `353`,
    4095: `353`,
    4096: `354`,
    4097: `355`,
    4098: `355`,
    4099: `356`,
    41: `18`,
    410: `133`,
    4100: `356`,
    4101: `357`,
    4102: `357`,
    4103: `357`,
    4104: `357`,
    4105: `357`,
    4106: `357`,
    4107: `357`,
    4108: `357`,
    4109: `357`,
    411: `133`,
    4110: `357`,
    4111: `358`,
    4112: `358`,
    4113: `359`,
    4114: `360`,
    4115: `361`,
    4116: `362`,
    4117: `362`,
    4118: `363`,
    4119: `363`,
    412: `133`,
    4120: `364`,
    4121: `364`,
    4122: `364`,
    4123: `364`,
    4124: `364`,
    4125: `364`,
    4126: `365`,
    4127: `365`,
    4128: `366`,
    4129: `367`,
    413: `133`,
    4130: `368`,
    4131: `370`,
    4132: `370`,
    4133: `370`,
    4134: `370`,
    4135: `370`,
    4136: `370`,
    4137: `370`,
    4138: `370`,
    4139: `370`,
    414: `133`,
    4140: `370`,
    4141: `371`,
    4142: `371`,
    4143: `372`,
    4144: `373`,
    4145: `374`,
    4146: `375`,
    4147: `375`,
    4148: `376`,
    4149: `377`,
    415: `133`,
    4150: `377`,
    4151: `378`,
    4152: `378`,
    4153: `379`,
    4154: `379`,
    4155: `380`,
    4156: `380`,
    4157: `380`,
    4158: `382`,
    4159: `382`,
    416: `133`,
    4160: `383`,
    4161: `383`,
    4162: `384`,
    4163: `385`,
    4164: `392`,
    4165: `393`,
    4166: `393`,
    4167: `393`,
    4168: `396`,
    4169: `396`,
    417: `133`,
    4170: `397`,
    4171: `398`,
    4172: `399`,
    4173: `399`,
    4174: `400`,
    4175: `400`,
    4176: `400`,
    4177: `400`,
    4178: `400`,
    4179: `400`,
    418: `133`,
    4180: `400`,
    4181: `401`,
    4182: `401`,
    4183: `402`,
    4184: `403`,
    4185: `404`,
    4186: `405`,
    4187: `405`,
    4188: `406`,
    4189: `406`,
    419: `133`,
    4190: `407`,
    4191: `408`,
    4192: `408`,
    4193: `409`,
    4194: `410`,
    4195: `410`,
    4196: `411`,
    4197: `412`,
    4198: `412`,
    4199: `413`,
    42: `18`,
    420: `133`,
    4200: `414`,
    4201: `415`,
    4202: `416`,
    4203: `417`,
    4204: `417`,
    4205: `418`,
    4206: `419`,
    4207: `419`,
    4208: `420`,
    4209: `420`,
    421: `133`,
    4210: `420`,
    4211: `421`,
    4212: `422`,
    4213: `423`,
    4214: `423`,
    4215: `424`,
    4216: `424`,
    4217: `425`,
    4218: `425`,
    4219: `426`,
    422: `133`,
    4220: `426`,
    4221: `428`,
    4222: `428`,
    4223: `429`,
    4224: `429`,
    4225: `429`,
    4226: `429`,
    4227: `429`,
    4228: `429`,
    4229: `430`,
    423: `133`,
    4230: `430`,
    4231: `431`,
    4232: `432`,
    4233: `433`,
    4234: `433`,
    4235: `434`,
    4236: `438`,
    4237: `438`,
    4238: `439`,
    4239: `440`,
    424: `133`,
    4240: `440`,
    4241: `441`,
    4242: `442`,
    4243: `442`,
    4244: `443`,
    4245: `444`,
    4246: `445`,
    4247: `446`,
    4248: `446`,
    4249: `446`,
    425: `133`,
    4250: `447`,
    4251: `447`,
    4252: `447`,
    4253: `448`,
    4254: `449`,
    4255: `449`,
    4256: `450`,
    4257: `450`,
    4258: `450`,
    4259: `450`,
    426: `133`,
    4260: `450`,
    4261: `450`,
    4262: `450`,
    4263: `450`,
    4264: `450`,
    4265: `450`,
    4266: `451`,
    4267: `451`,
    4268: `452`,
    4269: `453`,
    427: `133`,
    4270: `454`,
    4271: `454`,
    4272: `455`,
    4273: `456`,
    4274: `456`,
    4275: `457`,
    4276: `458`,
    4277: `459`,
    4278: `459`,
    4279: `460`,
    428: `133`,
    4280: `461`,
    4281: `461`,
    4282: `462`,
    4283: `463`,
    4284: `467`,
    4285: `467`,
    4286: `467`,
    4287: `467`,
    4288: `467`,
    4289: `467`,
    429: `133`,
    4290: `468`,
    4291: `468`,
    4292: `469`,
    4293: `470`,
    4294: `471`,
    4295: `473`,
    4296: `474`,
    4297: `474`,
    4298: `475`,
    4299: `475`,
    43: `18`,
    430: `133`,
    4300: `475`,
    4301: `475`,
    4302: `475`,
    4303: `475`,
    4304: `475`,
    4305: `475`,
    4306: `475`,
    4307: `475`,
    4308: `476`,
    4309: `476`,
    431: `133`,
    4310: `477`,
    4311: `478`,
    4312: `478`,
    4313: `478`,
    4314: `479`,
    4315: `480`,
    4316: `481`,
    4317: `481`,
    4318: `482`,
    4319: `483`,
    432: `133`,
    4320: `483`,
    4321: `483`,
    4322: `484`,
    4323: `484`,
    4324: `485`,
    4325: `485`,
    4326: `486`,
    4327: `486`,
    4328: `487`,
    4329: `488`,
    433: `134`,
    4330: `489`,
    4331: `490`,
    4332: `491`,
    4333: `491`,
    4334: `492`,
    4335: `493`,
    4336: `493`,
    4337: `494`,
    4338: `494`,
    4339: `495`,
    434: `134`,
    4340: `495`,
    4341: `495`,
    4342: `497`,
    4343: `497`,
    4344: `498`,
    4345: `499`,
    4346: `499`,
    4347: `500`,
    4348: `501`,
    4349: `502`,
    435: `135`,
    4350: `502`,
    4351: `503`,
    4352: `505`,
    4353: `506`,
    4354: `506`,
    4355: `508`,
    4356: `508`,
    4357: `509`,
    4358: `509`,
    4359: `509`,
    436: `135`,
    4360: `510`,
    4361: `510`,
    4362: `511`,
    4363: `511`,
    4364: `512`,
    4365: `513`,
    4366: `513`,
    4367: `514`,
    4368: `515`,
    4369: `516`,
    437: `135`,
    4370: `516`,
    4371: `517`,
    4372: `517`,
    4373: `517`,
    4374: `517`,
    4375: `517`,
    4376: `517`,
    4377: `518`,
    4378: `518`,
    4379: `519`,
    438: `138`,
    4380: `520`,
    4381: `522`,
    4382: `523`,
    4383: `523`,
    4384: `524`,
    4385: `524`,
    4386: `524`,
    4387: `524`,
    4388: `524`,
    4389: `524`,
    439: `138`,
    4390: `524`,
    4391: `524`,
    4392: `524`,
    4393: `524`,
    4394: `525`,
    4395: `525`,
    4396: `526`,
    4397: `527`,
    4398: `527`,
    4399: `527`,
    44: `18`,
    440: `138`,
    4400: `528`,
    4401: `529`,
    4402: `530`,
    4403: `530`,
    4404: `531`,
    4405: `532`,
    4406: `532`,
    4407: `532`,
    4408: `533`,
    4409: `533`,
    441: `138`,
    4410: `534`,
    4411: `534`,
    4412: `535`,
    4413: `535`,
    4414: `536`,
    4415: `536`,
    4416: `537`,
    4417: `538`,
    4418: `538`,
    4419: `539`,
    442: `138`,
    4420: `540`,
    4421: `540`,
    4422: `541`,
    4423: `541`,
    4424: `542`,
    4425: `542`,
    4426: `542`,
    4427: `544`,
    4428: `544`,
    4429: `545`,
    443: `138`,
    4430: `545`,
    4431: `546`,
    4432: `546`,
    4433: `547`,
    4434: `548`,
    4435: `548`,
    4436: `549`,
    4437: `549`,
    4438: `549`,
    4439: `549`,
    444: `138`,
    4440: `549`,
    4441: `549`,
    4442: `550`,
    4443: `550`,
    4444: `551`,
    4445: `552`,
    4446: `553`,
    4447: `555`,
    4448: `555`,
    4449: `556`,
    445: `138`,
    4450: `556`,
    4451: `556`,
    4452: `557`,
    4453: `558`,
    4454: `558`,
    4455: `559`,
    4456: `560`,
    4457: `560`,
    4458: `561`,
    4459: `561`,
    446: `138`,
    4460: `562`,
    4461: `562`,
    4462: `563`,
    4463: `563`,
    4464: `563`,
    4465: `565`,
    4466: `565`,
    4467: `565`,
    4468: `566`,
    4469: `567`,
    447: `138`,
    4470: `567`,
    4471: `567`,
    4472: `568`,
    4473: `568`,
    4474: `568`,
    4475: `569`,
    4476: `569`,
    4477: `570`,
    4478: `570`,
    4479: `570`,
    448: `138`,
    4480: `572`,
    4481: `572`,
    4482: `572`,
    4483: `573`,
    4484: `573`,
    4485: `573`,
    4486: `574`,
    4487: `574`,
    4488: `575`,
    4489: `575`,
    449: `138`,
    4490: `575`,
    4491: `577`,
    4492: `578`,
    4493: `578`,
    4494: `579`,
    4495: `580`,
    4496: `581`,
    4497: `581`,
    4498: `582`,
    4499: `582`,
    45: `18`,
    450: `138`,
    4500: `583`,
    4501: `584`,
    4502: `585`,
    4503: `586`,
    4504: `586`,
    4505: `587`,
    4506: `588`,
    4507: `589`,
    4508: `590`,
    4509: `590`,
    451: `138`,
    4510: `591`,
    4511: `592`,
    4512: `593`,
    4513: `593`,
    4514: `593`,
    4515: `594`,
    4516: `594`,
    4517: `595`,
    4518: `596`,
    4519: `597`,
    452: `138`,
    4520: `599`,
    4521: `599`,
    4522: `600`,
    4523: `600`,
    4524: `601`,
    4525: `602`,
    4526: `603`,
    4527: `603`,
    4528: `603`,
    4529: `604`,
    453: `138`,
    4530: `605`,
    4531: `606`,
    4532: `606`,
    4533: `607`,
    4534: `608`,
    4535: `608`,
    4536: `609`,
    4537: `610`,
    4538: `611`,
    4539: `612`,
    454: `138`,
    4540: `612`,
    4541: `613`,
    4542: `614`,
    4543: `615`,
    4544: `617`,
    4545: `617`,
    4546: `617`,
    4547: `618`,
    4548: `618`,
    4549: `618`,
    455: `138`,
    4550: `620`,
    4551: `620`,
    4552: `621`,
    4553: `622`,
    4554: `623`,
    4555: `625`,
    4556: `625`,
    4557: `625`,
    4558: `627`,
    4559: `627`,
    456: `138`,
    4560: `627`,
    4561: `629`,
    4562: `629`,
    4563: `629`,
    4564: `631`,
    4565: `631`,
    4566: `631`,
    4567: `634`,
    4568: `634`,
    4569: `635`,
    457: `138`,
    4570: `635`,
    4571: `636`,
    4572: `637`,
    4573: `637`,
    4574: `638`,
    4575: `639`,
    4576: `640`,
    4577: `640`,
    4578: `641`,
    4579: `641`,
    458: `138`,
    4580: `642`,
    4581: `642`,
    4582: `642`,
    4583: `644`,
    4584: `645`,
    4585: `645`,
    4586: `646`,
    4587: `647`,
    4588: `647`,
    4589: `648`,
    459: `138`,
    4590: `648`,
    4591: `649`,
    4592: `649`,
    4593: `650`,
    4594: `652`,
    4595: `653`,
    4596: `653`,
    4597: `654`,
    4598: `655`,
    4599: `655`,
    46: `18`,
    460: `138`,
    4600: `656`,
    4601: `656`,
    4602: `657`,
    4603: `657`,
    4604: `658`,
    4605: `659`,
    4606: `661`,
    4607: `661`,
    4608: `661`,
    4609: `663`,
    461: `138`,
    4610: `663`,
    4611: `663`,
    4612: `665`,
    4613: `665`,
    4614: `665`,
    4615: `667`,
    4616: `667`,
    4617: `667`,
    4618: `669`,
    4619: `669`,
    462: `138`,
    4620: `669`,
    4621: `671`,
    4622: `671`,
    4623: `671`,
    4624: `673`,
    4625: `674`,
    4626: `676`,
    4627: `677`,
    4628: `678`,
    4629: `679`,
    463: `138`,
    4630: `679`,
    4631: `680`,
    4632: `680`,
    4633: `681`,
    4634: `681`,
    4635: `681`,
    4636: `682`,
    4637: `684`,
    4638: `685`,
    4639: `686`,
    464: `138`,
    4640: `686`,
    4641: `686`,
    4642: `687`,
    4643: `688`,
    4644: `688`,
    4645: `689`,
    4646: `689`,
    4647: `689`,
    4648: `690`,
    4649: `692`,
    465: `138`,
    4650: `693`,
    4651: `693`,
    4652: `694`,
    4653: `696`,
    4654: `697`,
    4655: `698`,
    4656: `699`,
    4657: `700`,
    4658: `700`,
    4659: `701`,
    466: `138`,
    4660: `702`,
    4661: `703`,
    4662: `704`,
    4663: `706`,
    4664: `706`,
    4665: `707`,
    4666: `708`,
    4667: `708`,
    4668: `709`,
    4669: `711`,
    467: `138`,
    4670: `711`,
    4671: `712`,
    4672: `712`,
    4673: `713`,
    4674: `714`,
    4675: `715`,
    4676: `715`,
    4677: `715`,
    4678: `716`,
    4679: `716`,
    468: `138`,
    4680: `716`,
    4681: `718`,
    4682: `719`,
    4683: `719`,
    4684: `719`,
    4685: `722`,
    4686: `722`,
    4687: `723`,
    4688: `723`,
    4689: `724`,
    469: `138`,
    4690: `725`,
    4691: `726`,
    4692: `727`,
    4693: `727`,
    4694: `728`,
    4695: `729`,
    4696: `729`,
    4697: `730`,
    4698: `730`,
    4699: `731`,
    47: `18`,
    470: `138`,
    4700: `731`,
    4701: `732`,
    4702: `733`,
    4703: `734`,
    4704: `734`,
    4705: `735`,
    4706: `736`,
    4707: `737`,
    4708: `738`,
    4709: `738`,
    471: `138`,
    4710: `739`,
    4711: `740`,
    4712: `741`,
    4713: `743`,
    4714: `744`,
    4715: `744`,
    4716: `745`,
    4717: `745`,
    4718: `745`,
    4719: `747`,
    472: `138`,
    4720: `748`,
    473: `138`,
    474: `138`,
    475: `138`,
    476: `138`,
    477: `138`,
    478: `138`,
    479: `138`,
    48: `18`,
    480: `138`,
    481: `138`,
    482: `138`,
    483: `138`,
    484: `138`,
    485: `138`,
    486: `138`,
    487: `138`,
    488: `138`,
    489: `138`,
    49: `18`,
    490: `138`,
    491: `138`,
    492: `138`,
    493: `138`,
    494: `138`,
    495: `138`,
    496: `138`,
    497: `138`,
    498: `138`,
    499: `138`,
    5: `2`,
    50: `18`,
    500: `138`,
    501: `138`,
    502: `138`,
    503: `138`,
    504: `138`,
    505: `138`,
    506: `138`,
    507: `138`,
    508: `138`,
    509: `138`,
    51: `18`,
    510: `138`,
    511: `138`,
    512: `138`,
    513: `138`,
    514: `138`,
    515: `138`,
    516: `138`,
    517: `138`,
    518: `138`,
    519: `138`,
    52: `18`,
    520: `138`,
    521: `138`,
    522: `138`,
    523: `138`,
    524: `138`,
    525: `138`,
    526: `138`,
    527: `138`,
    528: `138`,
    529: `138`,
    53: `18`,
    530: `138`,
    531: `138`,
    532: `138`,
    533: `138`,
    534: `138`,
    535: `138`,
    536: `138`,
    537: `138`,
    538: `138`,
    539: `138`,
    54: `18`,
    540: `138`,
    541: `138`,
    542: `138`,
    543: `138`,
    544: `138`,
    545: `138`,
    546: `138`,
    547: `138`,
    548: `138`,
    549: `138`,
    55: `18`,
    550: `138`,
    551: `138`,
    552: `138`,
    553: `138`,
    554: `138`,
    555: `138`,
    556: `138`,
    557: `138`,
    558: `138`,
    559: `138`,
    56: `18`,
    560: `138`,
    561: `138`,
    562: `139`,
    563: `139`,
    564: `140`,
    565: `140`,
    566: `140`,
    567: `142`,
    568: `142`,
    569: `142`,
    57: `18`,
    570: `143`,
    571: `144`,
    572: `144`,
    573: `146`,
    574: `147`,
    575: `148`,
    576: `148`,
    577: `148`,
    578: `149`,
    579: `149`,
    58: `18`,
    580: `150`,
    581: `151`,
    582: `152`,
    583: `152`,
    584: `153`,
    585: `154`,
    586: `155`,
    587: `156`,
    588: `156`,
    589: `157`,
    59: `18`,
    590: `157`,
    591: `157`,
    592: `160`,
    593: `160`,
    594: `160`,
    595: `160`,
    596: `160`,
    597: `160`,
    598: `160`,
    599: `160`,
    6: `2`,
    60: `18`,
    600: `160`,
    601: `160`,
    602: `160`,
    603: `160`,
    604: `160`,
    605: `160`,
    606: `160`,
    607: `160`,
    608: `160`,
    609: `160`,
    61: `18`,
    610: `160`,
    611: `160`,
    612: `160`,
    613: `160`,
    614: `160`,
    615: `160`,
    616: `160`,
    617: `160`,
    618: `160`,
    619: `160`,
    62: `18`,
    620: `160`,
    621: `160`,
    622: `160`,
    623: `160`,
    624: `160`,
    625: `160`,
    626: `160`,
    627: `160`,
    628: `160`,
    629: `160`,
    63: `18`,
    630: `160`,
    631: `160`,
    632: `160`,
    633: `160`,
    634: `160`,
    635: `160`,
    636: `160`,
    637: `160`,
    638: `160`,
    639: `160`,
    64: `18`,
    640: `160`,
    641: `160`,
    642: `160`,
    643: `160`,
    644: `160`,
    645: `160`,
    646: `160`,
    647: `160`,
    648: `160`,
    649: `160`,
    65: `18`,
    650: `160`,
    651: `160`,
    652: `160`,
    653: `160`,
    654: `160`,
    655: `160`,
    656: `160`,
    657: `160`,
    658: `160`,
    659: `160`,
    66: `18`,
    660: `160`,
    661: `160`,
    662: `160`,
    663: `160`,
    664: `160`,
    665: `160`,
    666: `160`,
    667: `160`,
    668: `160`,
    669: `160`,
    67: `18`,
    670: `160`,
    671: `160`,
    672: `160`,
    673: `160`,
    674: `160`,
    675: `160`,
    676: `160`,
    677: `160`,
    678: `160`,
    679: `160`,
    68: `18`,
    680: `160`,
    681: `160`,
    682: `160`,
    683: `160`,
    684: `160`,
    685: `160`,
    686: `160`,
    687: `160`,
    688: `160`,
    689: `160`,
    69: `18`,
    690: `160`,
    691: `160`,
    692: `160`,
    693: `160`,
    694: `160`,
    695: `160`,
    696: `160`,
    697: `160`,
    698: `160`,
    699: `160`,
    7: `2`,
    70: `18`,
    700: `160`,
    701: `160`,
    702: `160`,
    703: `160`,
    704: `160`,
    705: `160`,
    706: `160`,
    707: `160`,
    708: `160`,
    709: `160`,
    71: `18`,
    710: `160`,
    711: `160`,
    712: `160`,
    713: `160`,
    714: `160`,
    715: `160`,
    716: `161`,
    717: `161`,
    718: `162`,
    719: `162`,
    72: `18`,
    720: `162`,
    721: `164`,
    722: `164`,
    723: `165`,
    724: `165`,
    725: `165`,
    726: `166`,
    727: `166`,
    728: `167`,
    729: `168`,
    73: `18`,
    730: `168`,
    731: `169`,
    732: `169`,
    733: `169`,
    734: `169`,
    735: `169`,
    736: `169`,
    737: `169`,
    738: `169`,
    739: `169`,
    74: `18`,
    740: `169`,
    741: `170`,
    742: `170`,
    743: `171`,
    744: `172`,
    745: `172`,
    746: `172`,
    747: `173`,
    748: `174`,
    749: `175`,
    75: `18`,
    750: `175`,
    751: `176`,
    752: `177`,
    753: `177`,
    754: `177`,
    755: `178`,
    756: `178`,
    757: `179`,
    758: `179`,
    759: `179`,
    76: `18`,
    760: `179`,
    761: `179`,
    762: `179`,
    763: `180`,
    764: `180`,
    765: `181`,
    766: `182`,
    767: `184`,
    768: `184`,
    769: `185`,
    77: `18`,
    770: `185`,
    771: `187`,
    772: `187`,
    773: `188`,
    774: `189`,
    775: `189`,
    776: `189`,
    777: `191`,
    778: `191`,
    779: `192`,
    78: `18`,
    780: `192`,
    781: `193`,
    782: `194`,
    783: `196`,
    784: `196`,
    785: `196`,
    786: `198`,
    787: `199`,
    788: `199`,
    789: `200`,
    79: `18`,
    790: `200`,
    791: `201`,
    792: `201`,
    793: `201`,
    794: `203`,
    795: `203`,
    796: `204`,
    797: `204`,
    798: `204`,
    799: `206`,
    8: `2`,
    80: `18`,
    800: `206`,
    801: `206`,
    802: `206`,
    803: `206`,
    804: `206`,
    805: `207`,
    806: `207`,
    807: `208`,
    808: `209`,
    809: `211`,
    81: `18`,
    810: `212`,
    811: `214`,
    812: `214`,
    813: `215`,
    814: `215`,
    815: `215`,
    816: `216`,
    817: `216`,
    818: `217`,
    819: `218`,
    82: `18`,
    820: `218`,
    821: `219`,
    822: `219`,
    823: `219`,
    824: `219`,
    825: `219`,
    826: `219`,
    827: `219`,
    828: `219`,
    829: `219`,
    83: `18`,
    830: `219`,
    831: `220`,
    832: `220`,
    833: `221`,
    834: `222`,
    835: `222`,
    836: `222`,
    837: `223`,
    838: `224`,
    839: `225`,
    84: `18`,
    840: `225`,
    841: `226`,
    842: `227`,
    843: `227`,
    844: `227`,
    845: `228`,
    846: `228`,
    847: `229`,
    848: `229`,
    849: `229`,
    85: `18`,
    850: `229`,
    851: `229`,
    852: `229`,
    853: `230`,
    854: `230`,
    855: `231`,
    856: `232`,
    857: `234`,
    858: `234`,
    859: `235`,
    86: `18`,
    860: `235`,
    861: `236`,
    862: `236`,
    863: `236`,
    864: `238`,
    865: `238`,
    866: `239`,
    867: `239`,
    868: `239`,
    869: `240`,
    87: `18`,
    870: `240`,
    871: `241`,
    872: `242`,
    873: `242`,
    874: `243`,
    875: `243`,
    876: `243`,
    877: `243`,
    878: `243`,
    879: `243`,
    88: `18`,
    880: `243`,
    881: `243`,
    882: `243`,
    883: `243`,
    884: `244`,
    885: `244`,
    886: `245`,
    887: `246`,
    888: `246`,
    889: `246`,
    89: `18`,
    890: `247`,
    891: `248`,
    892: `249`,
    893: `249`,
    894: `250`,
    895: `251`,
    896: `251`,
    897: `251`,
    898: `252`,
    899: `252`,
    9: `2`,
    90: `18`,
    900: `253`,
    901: `253`,
    902: `253`,
    903: `253`,
    904: `253`,
    905: `253`,
    906: `254`,
    907: `254`,
    908: `255`,
    909: `256`,
    91: `18`,
    910: `258`,
    911: `258`,
    912: `259`,
    913: `259`,
    914: `260`,
    915: `260`,
    916: `260`,
    917: `262`,
    918: `262`,
    919: `263`,
    92: `18`,
    920: `263`,
    921: `263`,
    922: `264`,
    923: `264`,
    924: `265`,
    925: `266`,
    926: `266`,
    927: `267`,
    928: `267`,
    929: `267`,
    93: `18`,
    930: `267`,
    931: `267`,
    932: `267`,
    933: `267`,
    934: `267`,
    935: `267`,
    936: `267`,
    937: `268`,
    938: `268`,
    939: `269`,
    94: `18`,
    940: `270`,
    941: `270`,
    942: `270`,
    943: `271`,
    944: `272`,
    945: `273`,
    946: `273`,
    947: `274`,
    948: `275`,
    949: `275`,
    95: `19`,
    950: `275`,
    951: `276`,
    952: `276`,
    953: `277`,
    954: `277`,
    955: `277`,
    956: `277`,
    957: `277`,
    958: `277`,
    959: `278`,
    96: `19`,
    960: `278`,
    961: `279`,
    962: `280`,
    963: `282`,
    964: `282`,
    965: `283`,
    966: `283`,
    967: `284`,
    968: `284`,
    969: `284`,
    97: `19`,
    970: `286`,
    971: `286`,
    972: `287`,
    973: `287`,
    974: `287`,
    975: `288`,
    976: `288`,
    977: `289`,
    978: `290`,
    979: `290`,
    98: `20`,
    980: `291`,
    981: `291`,
    982: `291`,
    983: `291`,
    984: `291`,
    985: `291`,
    986: `291`,
    987: `291`,
    988: `291`,
    989: `291`,
    99: `20`,
    990: `292`,
    991: `292`,
    992: `293`,
    993: `294`,
    994: `294`,
    995: `294`,
    996: `295`,
    997: `296`,
    998: `297`,
    999: `297`
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
  warnings: [`Step 2 calls a remote object at /app/index.rsh:402:63:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates a child contract and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:476:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:380:29:after expr stmt semicolon',
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
    ready: Child_ready
    },
  Master: {
    close: Master_close,
    new: Master_new,
    setup: Master_setup,
    touch: Master_touch
    }
  };
