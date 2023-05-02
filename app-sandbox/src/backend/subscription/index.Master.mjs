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
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0, ctc1, ctc2, ctc2, ctc2]);
  const ctc4 = stdlib.T_Tuple([ctc0, ctc0, ctc1]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc0, ctc1, ctc1]);
  return {
    announce: [ctc3],
    grant: [ctc4],
    new: [ctc0],
    ready: [ctc5],
    setup: [ctc0],
    subscribe: [ctc6]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  
  return {
    infos: {
      },
    views: {
      3: [ctc0]
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
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc2]);
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc2, ctc2]);
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Data({
    Child_announce0_5085: ctc5,
    Child_grant0_5085: ctc7,
    Child_ready0_5085: ctc9,
    Child_subscribe0_5085: ctc11,
    Master_new0_5085: ctc12,
    Master_setup0_5085: ctc13
    });
  const ctc15 = stdlib.T_Bool;
  const ctc16 = stdlib.T_Tuple([ctc3, ctc0]);
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:295:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:295:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v5774, time: v5773, didSend: v5069, from: v5772 } = txn1;
      
      ;
      
      const v5776 = v5773;
      
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
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v5774, time: v5773, didSend: v5069, from: v5772 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:296:19:application',
    fs: ['at ./index.rsh:296:19:application call to [unknown function] (defined at: ./index.rsh:296:19:function exp)', 'at ./index.rsh:296:19:application call to "liftedInteract" (defined at: ./index.rsh:296:19:application)'],
    msg: 'ready',
    who: 'Alice'
    });
  
  let v5776 = v5773;
  
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
    const {data: [v5894], secs: v5896, time: v5895, didSend: v5600, from: v5893 } = txn3;
    switch (v5894[0]) {
      case 'Child_announce0_5085': {
        const v5897 = v5894[1];
        undefined /* setApiDetails */;
        ;
        const v5913 = v5897[stdlib.checkedBigNumberify('./index.rsh:338:10:spread', stdlib.UInt_max, '0')];
        const v5915 = true;
        await txn3.getOutput('Child_announce', 'v5915', ctc15, v5915);
        null;
        const cv5776 = v5895;
        
        v5776 = cv5776;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Child_grant0_5085': {
        const v6028 = v5894[1];
        undefined /* setApiDetails */;
        ;
        const v6067 = v6028[stdlib.checkedBigNumberify('./index.rsh:356:10:spread', stdlib.UInt_max, '0')];
        const v6069 = true;
        await txn3.getOutput('Child_grant', 'v6069', ctc15, v6069);
        null;
        const cv5776 = v5895;
        
        v5776 = cv5776;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Child_ready0_5085': {
        const v6159 = v5894[1];
        undefined /* setApiDetails */;
        ;
        const v6215 = v6159[stdlib.checkedBigNumberify('./index.rsh:329:10:spread', stdlib.UInt_max, '0')];
        const v6217 = true;
        await txn3.getOutput('Child_ready', 'v6217', ctc15, v6217);
        null;
        const cv5776 = v5895;
        
        v5776 = cv5776;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Child_subscribe0_5085': {
        const v6290 = v5894[1];
        undefined /* setApiDetails */;
        ;
        const v6361 = v6290[stdlib.checkedBigNumberify('./index.rsh:347:10:spread', stdlib.UInt_max, '0')];
        const v6363 = true;
        await txn3.getOutput('Child_subscribe', 'v6363', ctc15, v6363);
        null;
        const cv5776 = v5895;
        
        v5776 = cv5776;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Master_new0_5085': {
        const v6421 = v5894[1];
        undefined /* setApiDetails */;
        ;
        const v6511 = stdlib.addressEq(v5893, v5772);
        stdlib.assert(v6511, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:301:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:303:13:application call to [unknown function] (defined at: ./index.rsh:303:13:function exp)'],
          msg: 'Must be authorized',
          who: 'Alice'
          });
        const v6513 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v6514 = undefined /* ContractNew */;
        const v6515 = await txn3.getOutput('internal', 'v6514', ctc1, v6514);
        null;
        await txn3.getOutput('Master_new', 'v6515', ctc1, v6515);
        const cv5776 = v5895;
        
        v5776 = cv5776;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Master_setup0_5085': {
        const v6552 = v5894[1];
        undefined /* setApiDetails */;
        const v6563 = stdlib.addressEq(v5893, v5772);
        stdlib.assert(v6563, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:312:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:311:33:application call to [unknown function] (defined at: ./index.rsh:311:33:function exp)', 'at ./index.rsh:297:28:application call to [unknown function] (defined at: ./index.rsh:311:33:function exp)', 'at ./index.rsh:297:28:application call to [unknown function] (defined at: ./index.rsh:297:28:function exp)'],
          msg: 'Must be authorized',
          who: 'Alice'
          });
        ;
        const v6654 = v6552[stdlib.checkedBigNumberify('./index.rsh:311:10:spread', stdlib.UInt_max, '0')];
        const v6662 = [];
        const v6663 = stdlib.bytesFromHex("0xc194ad99");
        const v6664 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v6665 = undefined /* Remote */;
        const v6666 = await txn3.getOutput('internal', 'v6665', ctc16, v6665);
        const v6668 = v6666[stdlib.checkedBigNumberify('./index.rsh:319:54:application', stdlib.UInt_max, '0')];
        const v6674 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6668);
        stdlib.assert(v6674, {
          at: './index.rsh:319:54:application',
          fs: ['at ./index.rsh:315:13:application call to [unknown function] (defined at: ./index.rsh:315:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        null;
        const v6675 = true;
        await txn3.getOutput('Master_setup', 'v6675', ctc15, v6675);
        const cv5776 = v5895;
        
        v5776 = cv5776;
        
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
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1, ctc0, ctc2, ctc2, ctc2]);
  const ctc4 = stdlib.T_Tuple([ctc3]);
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    Child_announce0_5085: ctc4,
    Child_grant0_5085: ctc6,
    Child_ready0_5085: ctc8,
    Child_subscribe0_5085: ctc10,
    Master_new0_5085: ctc11,
    Master_setup0_5085: ctc12
    });
  const ctc14 = stdlib.T_Bool;
  const ctc15 = stdlib.T_Null;
  
  
  const [v5772] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0]);
  const v5824 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:338:35:application call to [unknown function] (defined at: ./index.rsh:338:35:function exp)', 'at ./index.rsh:297:28:application call to "runChild_announce0_5085" (defined at: ./index.rsh:338:10:function exp)', 'at ./index.rsh:297:28:application call to [unknown function] (defined at: ./index.rsh:297:28:function exp)'],
    msg: 'in',
    who: 'Child_announce'
    });
  const v5844 = ['Child_announce0_5085', v5824];
  
  const txn1 = await (ctc.sendrecv({
    args: [v5772, v5844],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:338:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v5894], secs: v5896, time: v5895, didSend: v5600, from: v5893 } = txn1;
      
      switch (v5894[0]) {
        case 'Child_announce0_5085': {
          const v5897 = v5894[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Child_announce"
            });
          ;
          const v5913 = v5897[stdlib.checkedBigNumberify('./index.rsh:338:10:spread', stdlib.UInt_max, '0')];
          const v5915 = true;
          const v5916 = await txn1.getOutput('Child_announce', 'v5915', ctc14, v5915);
          
          null;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Child_grant0_5085': {
          const v6028 = v5894[1];
          
          break;
          }
        case 'Child_ready0_5085': {
          const v6159 = v5894[1];
          
          break;
          }
        case 'Child_subscribe0_5085': {
          const v6290 = v5894[1];
          
          break;
          }
        case 'Master_new0_5085': {
          const v6421 = v5894[1];
          
          break;
          }
        case 'Master_setup0_5085': {
          const v6552 = v5894[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v5894], secs: v5896, time: v5895, didSend: v5600, from: v5893 } = txn1;
  switch (v5894[0]) {
    case 'Child_announce0_5085': {
      const v5897 = v5894[1];
      undefined /* setApiDetails */;
      ;
      const v5913 = v5897[stdlib.checkedBigNumberify('./index.rsh:338:10:spread', stdlib.UInt_max, '0')];
      const v5915 = true;
      const v5916 = await txn1.getOutput('Child_announce', 'v5915', ctc14, v5915);
      if (v5600) {
        stdlib.protect(ctc15, await interact.out(v5897, v5916), {
          at: './index.rsh:338:11:application',
          fs: ['at ./index.rsh:338:11:application call to [unknown function] (defined at: ./index.rsh:338:11:function exp)', 'at ./index.rsh:341:12:application call to "k" (defined at: ./index.rsh:340:13:function exp)', 'at ./index.rsh:340:13:application call to [unknown function] (defined at: ./index.rsh:340:13:function exp)'],
          msg: 'out',
          who: 'Child_announce'
          });
        }
      else {
        }
      
      null;
      return;
      
      break;
      }
    case 'Child_grant0_5085': {
      const v6028 = v5894[1];
      return;
      break;
      }
    case 'Child_ready0_5085': {
      const v6159 = v5894[1];
      return;
      break;
      }
    case 'Child_subscribe0_5085': {
      const v6290 = v5894[1];
      return;
      break;
      }
    case 'Master_new0_5085': {
      const v6421 = v5894[1];
      return;
      break;
      }
    case 'Master_setup0_5085': {
      const v6552 = v5894[1];
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
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1, ctc0]);
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc0, ctc4, ctc4, ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    Child_announce0_5085: ctc6,
    Child_grant0_5085: ctc3,
    Child_ready0_5085: ctc8,
    Child_subscribe0_5085: ctc10,
    Master_new0_5085: ctc11,
    Master_setup0_5085: ctc12
    });
  const ctc14 = stdlib.T_Bool;
  const ctc15 = stdlib.T_Null;
  
  
  const [v5772] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0]);
  const v5868 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:356:32:application call to [unknown function] (defined at: ./index.rsh:356:32:function exp)', 'at ./index.rsh:297:28:application call to "runChild_grant0_5085" (defined at: ./index.rsh:356:10:function exp)', 'at ./index.rsh:297:28:application call to [unknown function] (defined at: ./index.rsh:297:28:function exp)'],
    msg: 'in',
    who: 'Child_grant'
    });
  const v5882 = ['Child_grant0_5085', v5868];
  
  const txn1 = await (ctc.sendrecv({
    args: [v5772, v5882],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:356:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v5894], secs: v5896, time: v5895, didSend: v5600, from: v5893 } = txn1;
      
      switch (v5894[0]) {
        case 'Child_announce0_5085': {
          const v5897 = v5894[1];
          
          break;
          }
        case 'Child_grant0_5085': {
          const v6028 = v5894[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Child_grant"
            });
          ;
          const v6067 = v6028[stdlib.checkedBigNumberify('./index.rsh:356:10:spread', stdlib.UInt_max, '0')];
          const v6069 = true;
          const v6070 = await txn1.getOutput('Child_grant', 'v6069', ctc14, v6069);
          
          null;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Child_ready0_5085': {
          const v6159 = v5894[1];
          
          break;
          }
        case 'Child_subscribe0_5085': {
          const v6290 = v5894[1];
          
          break;
          }
        case 'Master_new0_5085': {
          const v6421 = v5894[1];
          
          break;
          }
        case 'Master_setup0_5085': {
          const v6552 = v5894[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v5894], secs: v5896, time: v5895, didSend: v5600, from: v5893 } = txn1;
  switch (v5894[0]) {
    case 'Child_announce0_5085': {
      const v5897 = v5894[1];
      return;
      break;
      }
    case 'Child_grant0_5085': {
      const v6028 = v5894[1];
      undefined /* setApiDetails */;
      ;
      const v6067 = v6028[stdlib.checkedBigNumberify('./index.rsh:356:10:spread', stdlib.UInt_max, '0')];
      const v6069 = true;
      const v6070 = await txn1.getOutput('Child_grant', 'v6069', ctc14, v6069);
      if (v5600) {
        stdlib.protect(ctc15, await interact.out(v6028, v6070), {
          at: './index.rsh:356:11:application',
          fs: ['at ./index.rsh:356:11:application call to [unknown function] (defined at: ./index.rsh:356:11:function exp)', 'at ./index.rsh:359:12:application call to "k" (defined at: ./index.rsh:358:13:function exp)', 'at ./index.rsh:358:13:application call to [unknown function] (defined at: ./index.rsh:358:13:function exp)'],
          msg: 'out',
          who: 'Child_grant'
          });
        }
      else {
        }
      
      null;
      return;
      
      break;
      }
    case 'Child_ready0_5085': {
      const v6159 = v5894[1];
      return;
      break;
      }
    case 'Child_subscribe0_5085': {
      const v6290 = v5894[1];
      return;
      break;
      }
    case 'Master_new0_5085': {
      const v6421 = v5894[1];
      return;
      break;
      }
    case 'Master_setup0_5085': {
      const v6552 = v5894[1];
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
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc0, ctc4, ctc4, ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    Child_announce0_5085: ctc6,
    Child_grant0_5085: ctc8,
    Child_ready0_5085: ctc3,
    Child_subscribe0_5085: ctc10,
    Master_new0_5085: ctc11,
    Master_setup0_5085: ctc12
    });
  const ctc14 = stdlib.T_Bool;
  const ctc15 = stdlib.T_Null;
  
  
  const [v5772] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0]);
  const v5808 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:329:32:application call to [unknown function] (defined at: ./index.rsh:329:32:function exp)', 'at ./index.rsh:297:28:application call to "runChild_ready0_5085" (defined at: ./index.rsh:329:10:function exp)', 'at ./index.rsh:297:28:application call to [unknown function] (defined at: ./index.rsh:297:28:function exp)'],
    msg: 'in',
    who: 'Child_ready'
    });
  const v5820 = ['Child_ready0_5085', v5808];
  
  const txn1 = await (ctc.sendrecv({
    args: [v5772, v5820],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:329:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v5894], secs: v5896, time: v5895, didSend: v5600, from: v5893 } = txn1;
      
      switch (v5894[0]) {
        case 'Child_announce0_5085': {
          const v5897 = v5894[1];
          
          break;
          }
        case 'Child_grant0_5085': {
          const v6028 = v5894[1];
          
          break;
          }
        case 'Child_ready0_5085': {
          const v6159 = v5894[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Child_ready"
            });
          ;
          const v6215 = v6159[stdlib.checkedBigNumberify('./index.rsh:329:10:spread', stdlib.UInt_max, '0')];
          const v6217 = true;
          const v6218 = await txn1.getOutput('Child_ready', 'v6217', ctc14, v6217);
          
          null;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Child_subscribe0_5085': {
          const v6290 = v5894[1];
          
          break;
          }
        case 'Master_new0_5085': {
          const v6421 = v5894[1];
          
          break;
          }
        case 'Master_setup0_5085': {
          const v6552 = v5894[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v5894], secs: v5896, time: v5895, didSend: v5600, from: v5893 } = txn1;
  switch (v5894[0]) {
    case 'Child_announce0_5085': {
      const v5897 = v5894[1];
      return;
      break;
      }
    case 'Child_grant0_5085': {
      const v6028 = v5894[1];
      return;
      break;
      }
    case 'Child_ready0_5085': {
      const v6159 = v5894[1];
      undefined /* setApiDetails */;
      ;
      const v6215 = v6159[stdlib.checkedBigNumberify('./index.rsh:329:10:spread', stdlib.UInt_max, '0')];
      const v6217 = true;
      const v6218 = await txn1.getOutput('Child_ready', 'v6217', ctc14, v6217);
      if (v5600) {
        stdlib.protect(ctc15, await interact.out(v6159, v6218), {
          at: './index.rsh:329:11:application',
          fs: ['at ./index.rsh:329:11:application call to [unknown function] (defined at: ./index.rsh:329:11:function exp)', 'at ./index.rsh:332:12:application call to "k" (defined at: ./index.rsh:331:13:function exp)', 'at ./index.rsh:331:13:application call to [unknown function] (defined at: ./index.rsh:331:13:function exp)'],
          msg: 'out',
          who: 'Child_ready'
          });
        }
      else {
        }
      
      null;
      return;
      
      break;
      }
    case 'Child_subscribe0_5085': {
      const v6290 = v5894[1];
      return;
      break;
      }
    case 'Master_new0_5085': {
      const v6421 = v5894[1];
      return;
      break;
      }
    case 'Master_setup0_5085': {
      const v6552 = v5894[1];
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
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1, ctc0, ctc0]);
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc0, ctc4, ctc4, ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    Child_announce0_5085: ctc6,
    Child_grant0_5085: ctc8,
    Child_ready0_5085: ctc10,
    Child_subscribe0_5085: ctc3,
    Master_new0_5085: ctc11,
    Master_setup0_5085: ctc12
    });
  const ctc14 = stdlib.T_Bool;
  const ctc15 = stdlib.T_Null;
  
  
  const [v5772] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0]);
  const v5848 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:347:36:application call to [unknown function] (defined at: ./index.rsh:347:36:function exp)', 'at ./index.rsh:297:28:application call to "runChild_subscribe0_5085" (defined at: ./index.rsh:347:10:function exp)', 'at ./index.rsh:297:28:application call to [unknown function] (defined at: ./index.rsh:297:28:function exp)'],
    msg: 'in',
    who: 'Child_subscribe'
    });
  const v5864 = ['Child_subscribe0_5085', v5848];
  
  const txn1 = await (ctc.sendrecv({
    args: [v5772, v5864],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:347:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v5894], secs: v5896, time: v5895, didSend: v5600, from: v5893 } = txn1;
      
      switch (v5894[0]) {
        case 'Child_announce0_5085': {
          const v5897 = v5894[1];
          
          break;
          }
        case 'Child_grant0_5085': {
          const v6028 = v5894[1];
          
          break;
          }
        case 'Child_ready0_5085': {
          const v6159 = v5894[1];
          
          break;
          }
        case 'Child_subscribe0_5085': {
          const v6290 = v5894[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Child_subscribe"
            });
          ;
          const v6361 = v6290[stdlib.checkedBigNumberify('./index.rsh:347:10:spread', stdlib.UInt_max, '0')];
          const v6363 = true;
          const v6364 = await txn1.getOutput('Child_subscribe', 'v6363', ctc14, v6363);
          
          null;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Master_new0_5085': {
          const v6421 = v5894[1];
          
          break;
          }
        case 'Master_setup0_5085': {
          const v6552 = v5894[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v5894], secs: v5896, time: v5895, didSend: v5600, from: v5893 } = txn1;
  switch (v5894[0]) {
    case 'Child_announce0_5085': {
      const v5897 = v5894[1];
      return;
      break;
      }
    case 'Child_grant0_5085': {
      const v6028 = v5894[1];
      return;
      break;
      }
    case 'Child_ready0_5085': {
      const v6159 = v5894[1];
      return;
      break;
      }
    case 'Child_subscribe0_5085': {
      const v6290 = v5894[1];
      undefined /* setApiDetails */;
      ;
      const v6361 = v6290[stdlib.checkedBigNumberify('./index.rsh:347:10:spread', stdlib.UInt_max, '0')];
      const v6363 = true;
      const v6364 = await txn1.getOutput('Child_subscribe', 'v6363', ctc14, v6363);
      if (v5600) {
        stdlib.protect(ctc15, await interact.out(v6290, v6364), {
          at: './index.rsh:347:11:application',
          fs: ['at ./index.rsh:347:11:application call to [unknown function] (defined at: ./index.rsh:347:11:function exp)', 'at ./index.rsh:350:12:application call to "k" (defined at: ./index.rsh:349:13:function exp)', 'at ./index.rsh:349:13:application call to [unknown function] (defined at: ./index.rsh:349:13:function exp)'],
          msg: 'out',
          who: 'Child_subscribe'
          });
        }
      else {
        }
      
      null;
      return;
      
      break;
      }
    case 'Master_new0_5085': {
      const v6421 = v5894[1];
      return;
      break;
      }
    case 'Master_setup0_5085': {
      const v6552 = v5894[1];
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
  const ctc1 = stdlib.T_Tuple([]);
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc0, ctc3, ctc3, ctc3]);
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc2, ctc2, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc2, ctc2, ctc0, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Tuple([ctc2]);
  const ctc13 = stdlib.T_Data({
    Child_announce0_5085: ctc5,
    Child_grant0_5085: ctc7,
    Child_ready0_5085: ctc9,
    Child_subscribe0_5085: ctc11,
    Master_new0_5085: ctc1,
    Master_setup0_5085: ctc12
    });
  const ctc14 = stdlib.T_Null;
  
  
  const [v5772] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0]);
  const v5782 = ctc.selfAddress();
  const v5784 = stdlib.protect(ctc1, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:300:28:application call to [unknown function] (defined at: ./index.rsh:300:28:function exp)', 'at ./index.rsh:297:28:application call to "runMaster_new0_5085" (defined at: ./index.rsh:300:10:function exp)', 'at ./index.rsh:297:28:application call to [unknown function] (defined at: ./index.rsh:297:28:function exp)'],
    msg: 'in',
    who: 'Master_new'
    });
  const v5785 = stdlib.addressEq(v5782, v5772);
  stdlib.assert(v5785, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:301:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:300:28:application call to [unknown function] (defined at: ./index.rsh:300:28:function exp)', 'at ./index.rsh:297:28:application call to "runMaster_new0_5085" (defined at: ./index.rsh:300:10:function exp)', 'at ./index.rsh:297:28:application call to [unknown function] (defined at: ./index.rsh:297:28:function exp)'],
    msg: 'Must be authorized',
    who: 'Master_new'
    });
  const v5790 = ['Master_new0_5085', v5784];
  
  const txn1 = await (ctc.sendrecv({
    args: [v5772, v5790],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:300:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v5894], secs: v5896, time: v5895, didSend: v5600, from: v5893 } = txn1;
      
      switch (v5894[0]) {
        case 'Child_announce0_5085': {
          const v5897 = v5894[1];
          
          break;
          }
        case 'Child_grant0_5085': {
          const v6028 = v5894[1];
          
          break;
          }
        case 'Child_ready0_5085': {
          const v6159 = v5894[1];
          
          break;
          }
        case 'Child_subscribe0_5085': {
          const v6290 = v5894[1];
          
          break;
          }
        case 'Master_new0_5085': {
          const v6421 = v5894[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Master_new"
            });
          ;
          const v6513 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v6514 = stdlib.simContractNew(sim_r, {
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
            bills: stdlib.checkedBigNumberify('./index.rsh:304:42:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./index.rsh:304:42:application', stdlib.UInt_max, '0'),
            toks: []
            }), getSimTokCtr());
          const v6515 = await txn1.getOutput('internal', 'v6514', ctc2, v6514);
          null;
          const v6516 = await txn1.getOutput('Master_new', 'v6515', ctc2, v6515);
          
          sim_r.isHalt = false;
          
          break;
          }
        case 'Master_setup0_5085': {
          const v6552 = v5894[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v5894], secs: v5896, time: v5895, didSend: v5600, from: v5893 } = txn1;
  switch (v5894[0]) {
    case 'Child_announce0_5085': {
      const v5897 = v5894[1];
      return;
      break;
      }
    case 'Child_grant0_5085': {
      const v6028 = v5894[1];
      return;
      break;
      }
    case 'Child_ready0_5085': {
      const v6159 = v5894[1];
      return;
      break;
      }
    case 'Child_subscribe0_5085': {
      const v6290 = v5894[1];
      return;
      break;
      }
    case 'Master_new0_5085': {
      const v6421 = v5894[1];
      undefined /* setApiDetails */;
      ;
      const v6511 = stdlib.addressEq(v5893, v5772);
      stdlib.assert(v6511, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:301:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:303:13:application call to [unknown function] (defined at: ./index.rsh:303:13:function exp)'],
        msg: 'Must be authorized',
        who: 'Master_new'
        });
      const v6513 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v6514 = undefined /* ContractNew */;
      const v6515 = await txn1.getOutput('internal', 'v6514', ctc2, v6514);
      null;
      const v6516 = await txn1.getOutput('Master_new', 'v6515', ctc2, v6515);
      if (v5600) {
        stdlib.protect(ctc14, await interact.out(v6421, v6516), {
          at: './index.rsh:300:11:application',
          fs: ['at ./index.rsh:300:11:application call to [unknown function] (defined at: ./index.rsh:300:11:function exp)', 'at ./index.rsh:306:12:application call to "k" (defined at: ./index.rsh:303:13:function exp)', 'at ./index.rsh:303:13:application call to [unknown function] (defined at: ./index.rsh:303:13:function exp)'],
          msg: 'out',
          who: 'Master_new'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'Master_setup0_5085': {
      const v6552 = v5894[1];
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
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Tuple([ctc1]);
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc0, ctc3, ctc3, ctc3]);
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc0, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Child_announce0_5085: ctc5,
    Child_grant0_5085: ctc7,
    Child_ready0_5085: ctc9,
    Child_subscribe0_5085: ctc11,
    Master_new0_5085: ctc12,
    Master_setup0_5085: ctc2
    });
  const ctc14 = stdlib.T_Null;
  const ctc15 = stdlib.T_Tuple([ctc3, ctc14]);
  const ctc16 = stdlib.T_Bool;
  
  
  const [v5772] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0]);
  const v5792 = ctc.selfAddress();
  const v5794 = stdlib.protect(ctc2, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:311:33:application call to [unknown function] (defined at: ./index.rsh:311:33:function exp)', 'at ./index.rsh:297:28:application call to "runMaster_setup0_5085" (defined at: ./index.rsh:311:10:function exp)', 'at ./index.rsh:297:28:application call to [unknown function] (defined at: ./index.rsh:297:28:function exp)'],
    msg: 'in',
    who: 'Master_setup'
    });
  const v5797 = stdlib.addressEq(v5792, v5772);
  stdlib.assert(v5797, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:312:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:311:33:application call to [unknown function] (defined at: ./index.rsh:311:33:function exp)', 'at ./index.rsh:297:28:application call to "runMaster_setup0_5085" (defined at: ./index.rsh:311:10:function exp)', 'at ./index.rsh:297:28:application call to [unknown function] (defined at: ./index.rsh:297:28:function exp)'],
    msg: 'Must be authorized',
    who: 'Master_setup'
    });
  const v5804 = ['Master_setup0_5085', v5794];
  
  const txn1 = await (ctc.sendrecv({
    args: [v5772, v5804],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:4:23:decimal', stdlib.UInt_max, '100000'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v5894], secs: v5896, time: v5895, didSend: v5600, from: v5893 } = txn1;
      
      switch (v5894[0]) {
        case 'Child_announce0_5085': {
          const v5897 = v5894[1];
          
          break;
          }
        case 'Child_grant0_5085': {
          const v6028 = v5894[1];
          
          break;
          }
        case 'Child_ready0_5085': {
          const v6159 = v5894[1];
          
          break;
          }
        case 'Child_subscribe0_5085': {
          const v6290 = v5894[1];
          
          break;
          }
        case 'Master_new0_5085': {
          const v6421 = v5894[1];
          
          break;
          }
        case 'Master_setup0_5085': {
          const v6552 = v5894[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Master_setup"
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:4:23:decimal', stdlib.UInt_max, '100000'),
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v6654 = v6552[stdlib.checkedBigNumberify('./index.rsh:311:10:spread', stdlib.UInt_max, '0')];
          const v6662 = [];
          const v6663 = stdlib.bytesFromHex("0xc194ad99");
          const v6664 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v6665 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v6654,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:319:54:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('./index.rsh:319:35:application', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:319:54:application', stdlib.UInt_max, '1'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc14.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v6665', ctc15, v6665);
          null;
          const v6675 = true;
          const v6676 = await txn1.getOutput('Master_setup', 'v6675', ctc16, v6675);
          
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v5894], secs: v5896, time: v5895, didSend: v5600, from: v5893 } = txn1;
  switch (v5894[0]) {
    case 'Child_announce0_5085': {
      const v5897 = v5894[1];
      return;
      break;
      }
    case 'Child_grant0_5085': {
      const v6028 = v5894[1];
      return;
      break;
      }
    case 'Child_ready0_5085': {
      const v6159 = v5894[1];
      return;
      break;
      }
    case 'Child_subscribe0_5085': {
      const v6290 = v5894[1];
      return;
      break;
      }
    case 'Master_new0_5085': {
      const v6421 = v5894[1];
      return;
      break;
      }
    case 'Master_setup0_5085': {
      const v6552 = v5894[1];
      undefined /* setApiDetails */;
      const v6563 = stdlib.addressEq(v5893, v5772);
      stdlib.assert(v6563, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:312:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:311:33:application call to [unknown function] (defined at: ./index.rsh:311:33:function exp)', 'at ./index.rsh:297:28:application call to [unknown function] (defined at: ./index.rsh:311:33:function exp)', 'at ./index.rsh:297:28:application call to [unknown function] (defined at: ./index.rsh:297:28:function exp)'],
        msg: 'Must be authorized',
        who: 'Master_setup'
        });
      ;
      const v6654 = v6552[stdlib.checkedBigNumberify('./index.rsh:311:10:spread', stdlib.UInt_max, '0')];
      const v6662 = [];
      const v6663 = stdlib.bytesFromHex("0xc194ad99");
      const v6664 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v6665 = undefined /* Remote */;
      const v6666 = await txn1.getOutput('internal', 'v6665', ctc15, v6665);
      const v6668 = v6666[stdlib.checkedBigNumberify('./index.rsh:319:54:application', stdlib.UInt_max, '0')];
      const v6674 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6668);
      stdlib.assert(v6674, {
        at: './index.rsh:319:54:application',
        fs: ['at ./index.rsh:315:13:application call to [unknown function] (defined at: ./index.rsh:315:13:function exp)'],
        msg: 'remote bill check',
        who: 'Master_setup'
        });
      null;
      const v6675 = true;
      const v6676 = await txn1.getOutput('Master_setup', 'v6675', ctc16, v6675);
      if (v5600) {
        stdlib.protect(ctc14, await interact.out(v6552, v6676), {
          at: './index.rsh:311:11:application',
          fs: ['at ./index.rsh:311:11:application call to [unknown function] (defined at: ./index.rsh:311:11:function exp)', 'at ./index.rsh:324:12:application call to "k" (defined at: ./index.rsh:315:13:function exp)', 'at ./index.rsh:315:13:application call to [unknown function] (defined at: ./index.rsh:315:13:function exp)'],
          msg: 'out',
          who: 'Master_setup'
          });
        }
      else {
        }
      
      return;
      
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
const _ALGO = {
  ABI: {
    impure: [`Child_announce((uint64,uint64,address,uint64,uint64,uint64))byte`, `Child_grant((uint64,uint64,address))byte`, `Child_ready((uint64,uint64))byte`, `Child_subscribe((uint64,uint64,address,address))byte`, `Master_new()uint64`, `Master_setup(uint64)byte`, `_reachp_0((uint64))void`, `_reachp_2((uint64,(byte,byte[80])))void`],
    pure: [],
    sigs: [`Child_announce((uint64,uint64,address,uint64,uint64,uint64))byte`, `Child_grant((uint64,uint64,address))byte`, `Child_ready((uint64,uint64))byte`, `Child_subscribe((uint64,uint64,address,address))byte`, `Master_new()uint64`, `Master_setup(uint64)byte`, `_reachp_0((uint64))void`, `_reachp_2((uint64,(byte,byte[80])))void`]
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
    100: `24`,
    1000: `277`,
    1001: `277`,
    1002: `277`,
    1003: `277`,
    1004: `277`,
    1005: `277`,
    1006: `277`,
    1007: `277`,
    1008: `277`,
    1009: `277`,
    101: `24`,
    1010: `277`,
    1011: `277`,
    1012: `277`,
    1013: `277`,
    1014: `277`,
    1015: `277`,
    1016: `277`,
    1017: `277`,
    1018: `277`,
    1019: `277`,
    102: `25`,
    1020: `277`,
    1021: `277`,
    1022: `277`,
    1023: `277`,
    1024: `277`,
    1025: `277`,
    1026: `277`,
    1027: `277`,
    1028: `277`,
    1029: `277`,
    103: `25`,
    1030: `277`,
    1031: `277`,
    1032: `277`,
    1033: `277`,
    1034: `277`,
    1035: `277`,
    1036: `277`,
    1037: `277`,
    1038: `277`,
    1039: `277`,
    104: `27`,
    1040: `277`,
    1041: `277`,
    1042: `277`,
    1043: `277`,
    1044: `277`,
    1045: `277`,
    1046: `277`,
    1047: `277`,
    1048: `277`,
    1049: `277`,
    105: `28`,
    1050: `277`,
    1051: `277`,
    1052: `277`,
    1053: `277`,
    1054: `277`,
    1055: `277`,
    1056: `277`,
    1057: `277`,
    1058: `277`,
    1059: `277`,
    106: `29`,
    1060: `277`,
    1061: `277`,
    1062: `277`,
    1063: `277`,
    1064: `277`,
    1065: `277`,
    1066: `277`,
    1067: `277`,
    1068: `277`,
    1069: `277`,
    107: `30`,
    1070: `277`,
    1071: `277`,
    1072: `277`,
    1073: `277`,
    1074: `277`,
    1075: `277`,
    1076: `277`,
    1077: `277`,
    1078: `277`,
    1079: `277`,
    108: `30`,
    1080: `277`,
    1081: `277`,
    1082: `277`,
    1083: `277`,
    1084: `277`,
    1085: `277`,
    1086: `277`,
    1087: `277`,
    1088: `277`,
    1089: `277`,
    109: `31`,
    1090: `277`,
    1091: `277`,
    1092: `277`,
    1093: `277`,
    1094: `277`,
    1095: `277`,
    1096: `277`,
    1097: `277`,
    1098: `277`,
    1099: `277`,
    11: `2`,
    110: `32`,
    1100: `277`,
    1101: `277`,
    1102: `277`,
    1103: `277`,
    1104: `277`,
    1105: `277`,
    1106: `277`,
    1107: `277`,
    1108: `277`,
    1109: `277`,
    111: `33`,
    1110: `277`,
    1111: `277`,
    1112: `277`,
    1113: `277`,
    1114: `277`,
    1115: `277`,
    1116: `277`,
    1117: `277`,
    1118: `277`,
    1119: `277`,
    112: `34`,
    1120: `277`,
    1121: `277`,
    1122: `277`,
    1123: `277`,
    1124: `277`,
    1125: `277`,
    1126: `277`,
    1127: `277`,
    1128: `277`,
    1129: `277`,
    113: `35`,
    1130: `277`,
    1131: `277`,
    1132: `277`,
    1133: `277`,
    1134: `277`,
    1135: `277`,
    1136: `277`,
    1137: `277`,
    1138: `277`,
    1139: `277`,
    114: `36`,
    1140: `277`,
    1141: `277`,
    1142: `277`,
    1143: `277`,
    1144: `277`,
    1145: `277`,
    1146: `277`,
    1147: `277`,
    1148: `277`,
    1149: `277`,
    115: `36`,
    1150: `277`,
    1151: `277`,
    1152: `277`,
    1153: `277`,
    1154: `277`,
    1155: `277`,
    1156: `277`,
    1157: `277`,
    1158: `277`,
    1159: `277`,
    116: `38`,
    1160: `277`,
    1161: `277`,
    1162: `277`,
    1163: `277`,
    1164: `277`,
    1165: `277`,
    1166: `277`,
    1167: `277`,
    1168: `277`,
    1169: `277`,
    117: `38`,
    1170: `277`,
    1171: `277`,
    1172: `277`,
    1173: `277`,
    1174: `277`,
    1175: `277`,
    1176: `277`,
    1177: `277`,
    1178: `277`,
    1179: `277`,
    118: `39`,
    1180: `277`,
    1181: `277`,
    1182: `277`,
    1183: `277`,
    1184: `277`,
    1185: `277`,
    1186: `277`,
    1187: `277`,
    1188: `277`,
    1189: `277`,
    119: `39`,
    1190: `277`,
    1191: `277`,
    1192: `277`,
    1193: `277`,
    1194: `277`,
    1195: `277`,
    1196: `277`,
    1197: `277`,
    1198: `277`,
    1199: `277`,
    12: `2`,
    120: `40`,
    1200: `277`,
    1201: `277`,
    1202: `277`,
    1203: `277`,
    1204: `277`,
    1205: `277`,
    1206: `277`,
    1207: `277`,
    1208: `277`,
    1209: `277`,
    121: `41`,
    1210: `277`,
    1211: `277`,
    1212: `277`,
    1213: `277`,
    1214: `277`,
    1215: `277`,
    1216: `277`,
    1217: `277`,
    1218: `277`,
    1219: `277`,
    122: `43`,
    1220: `277`,
    1221: `277`,
    1222: `277`,
    1223: `277`,
    1224: `277`,
    1225: `277`,
    1226: `277`,
    1227: `277`,
    1228: `277`,
    1229: `277`,
    123: `43`,
    1230: `277`,
    1231: `277`,
    1232: `277`,
    1233: `277`,
    1234: `277`,
    1235: `277`,
    1236: `277`,
    1237: `277`,
    1238: `277`,
    1239: `277`,
    124: `43`,
    1240: `277`,
    1241: `277`,
    1242: `277`,
    1243: `277`,
    1244: `277`,
    1245: `277`,
    1246: `277`,
    1247: `277`,
    1248: `277`,
    1249: `277`,
    125: `44`,
    1250: `277`,
    1251: `277`,
    1252: `277`,
    1253: `277`,
    1254: `277`,
    1255: `277`,
    1256: `277`,
    1257: `277`,
    1258: `277`,
    1259: `277`,
    126: `44`,
    1260: `277`,
    1261: `277`,
    1262: `277`,
    1263: `277`,
    1264: `277`,
    1265: `277`,
    1266: `277`,
    1267: `277`,
    1268: `277`,
    1269: `277`,
    127: `45`,
    1270: `277`,
    1271: `277`,
    1272: `277`,
    1273: `277`,
    1274: `277`,
    1275: `277`,
    1276: `277`,
    1277: `277`,
    1278: `277`,
    1279: `277`,
    128: `45`,
    1280: `277`,
    1281: `277`,
    1282: `277`,
    1283: `277`,
    1284: `277`,
    1285: `277`,
    1286: `277`,
    1287: `277`,
    1288: `277`,
    1289: `277`,
    129: `46`,
    1290: `277`,
    1291: `277`,
    1292: `277`,
    1293: `277`,
    1294: `277`,
    1295: `277`,
    1296: `277`,
    1297: `277`,
    1298: `277`,
    1299: `277`,
    13: `2`,
    130: `47`,
    1300: `277`,
    1301: `277`,
    1302: `277`,
    1303: `277`,
    1304: `277`,
    1305: `277`,
    1306: `277`,
    1307: `277`,
    1308: `277`,
    1309: `277`,
    131: `48`,
    1310: `277`,
    1311: `277`,
    1312: `277`,
    1313: `277`,
    1314: `277`,
    1315: `277`,
    1316: `277`,
    1317: `277`,
    1318: `277`,
    1319: `277`,
    132: `48`,
    1320: `277`,
    1321: `277`,
    1322: `277`,
    1323: `277`,
    1324: `277`,
    1325: `277`,
    1326: `277`,
    1327: `277`,
    1328: `277`,
    1329: `277`,
    133: `49`,
    1330: `277`,
    1331: `277`,
    1332: `277`,
    1333: `277`,
    1334: `277`,
    1335: `277`,
    1336: `277`,
    1337: `277`,
    1338: `277`,
    1339: `277`,
    134: `49`,
    1340: `277`,
    1341: `277`,
    1342: `277`,
    1343: `277`,
    1344: `277`,
    1345: `277`,
    1346: `277`,
    1347: `277`,
    1348: `277`,
    1349: `277`,
    135: `50`,
    1350: `277`,
    1351: `277`,
    1352: `277`,
    1353: `277`,
    1354: `277`,
    1355: `277`,
    1356: `277`,
    1357: `277`,
    1358: `277`,
    1359: `277`,
    136: `50`,
    1360: `277`,
    1361: `277`,
    1362: `277`,
    1363: `277`,
    1364: `277`,
    1365: `277`,
    1366: `277`,
    1367: `277`,
    1368: `277`,
    1369: `277`,
    137: `50`,
    1370: `277`,
    1371: `277`,
    1372: `277`,
    1373: `277`,
    1374: `277`,
    1375: `277`,
    1376: `277`,
    1377: `277`,
    1378: `277`,
    1379: `277`,
    138: `51`,
    1380: `277`,
    1381: `277`,
    1382: `277`,
    1383: `277`,
    1384: `277`,
    1385: `277`,
    1386: `277`,
    1387: `277`,
    1388: `277`,
    1389: `277`,
    139: `51`,
    1390: `277`,
    1391: `277`,
    1392: `277`,
    1393: `277`,
    1394: `277`,
    1395: `277`,
    1396: `277`,
    1397: `277`,
    1398: `277`,
    1399: `277`,
    14: `2`,
    140: `52`,
    1400: `277`,
    1401: `277`,
    1402: `277`,
    1403: `277`,
    1404: `277`,
    1405: `277`,
    1406: `277`,
    1407: `277`,
    1408: `277`,
    1409: `277`,
    141: `52`,
    1410: `277`,
    1411: `277`,
    1412: `277`,
    1413: `277`,
    1414: `277`,
    1415: `277`,
    1416: `277`,
    1417: `277`,
    1418: `277`,
    1419: `277`,
    142: `52`,
    1420: `277`,
    1421: `277`,
    1422: `277`,
    1423: `277`,
    1424: `277`,
    1425: `277`,
    1426: `277`,
    1427: `277`,
    1428: `277`,
    1429: `277`,
    143: `52`,
    1430: `277`,
    1431: `277`,
    1432: `277`,
    1433: `277`,
    1434: `277`,
    1435: `277`,
    1436: `277`,
    1437: `277`,
    1438: `277`,
    1439: `277`,
    144: `52`,
    1440: `277`,
    1441: `277`,
    1442: `277`,
    1443: `277`,
    1444: `277`,
    1445: `277`,
    1446: `277`,
    1447: `277`,
    1448: `277`,
    1449: `277`,
    145: `52`,
    1450: `277`,
    1451: `277`,
    1452: `277`,
    1453: `277`,
    1454: `277`,
    1455: `277`,
    1456: `277`,
    1457: `277`,
    1458: `277`,
    1459: `277`,
    146: `53`,
    1460: `277`,
    1461: `277`,
    1462: `277`,
    1463: `277`,
    1464: `277`,
    1465: `277`,
    1466: `277`,
    1467: `277`,
    1468: `277`,
    1469: `277`,
    147: `53`,
    1470: `277`,
    1471: `277`,
    1472: `277`,
    1473: `277`,
    1474: `277`,
    1475: `277`,
    1476: `277`,
    1477: `277`,
    1478: `277`,
    1479: `277`,
    148: `54`,
    1480: `277`,
    1481: `277`,
    1482: `277`,
    1483: `277`,
    1484: `277`,
    1485: `277`,
    1486: `277`,
    1487: `277`,
    1488: `277`,
    1489: `277`,
    149: `55`,
    1490: `277`,
    1491: `277`,
    1492: `277`,
    1493: `277`,
    1494: `277`,
    1495: `277`,
    1496: `277`,
    1497: `277`,
    1498: `277`,
    1499: `277`,
    15: `2`,
    150: `56`,
    1500: `277`,
    1501: `277`,
    1502: `277`,
    1503: `277`,
    1504: `277`,
    1505: `277`,
    1506: `277`,
    1507: `277`,
    1508: `277`,
    1509: `277`,
    151: `56`,
    1510: `277`,
    1511: `277`,
    1512: `277`,
    1513: `277`,
    1514: `277`,
    1515: `277`,
    1516: `277`,
    1517: `277`,
    1518: `277`,
    1519: `277`,
    152: `57`,
    1520: `277`,
    1521: `277`,
    1522: `277`,
    1523: `277`,
    1524: `277`,
    1525: `277`,
    1526: `277`,
    1527: `277`,
    1528: `277`,
    1529: `277`,
    153: `58`,
    1530: `277`,
    1531: `277`,
    1532: `277`,
    1533: `277`,
    1534: `277`,
    1535: `277`,
    1536: `277`,
    1537: `277`,
    1538: `277`,
    1539: `277`,
    154: `60`,
    1540: `277`,
    1541: `277`,
    1542: `277`,
    1543: `277`,
    1544: `277`,
    1545: `277`,
    1546: `277`,
    1547: `277`,
    1548: `277`,
    1549: `277`,
    155: `60`,
    1550: `277`,
    1551: `277`,
    1552: `277`,
    1553: `277`,
    1554: `277`,
    1555: `277`,
    1556: `277`,
    1557: `277`,
    1558: `277`,
    1559: `277`,
    156: `61`,
    1560: `277`,
    1561: `277`,
    1562: `277`,
    1563: `277`,
    1564: `277`,
    1565: `277`,
    1566: `277`,
    1567: `277`,
    1568: `277`,
    1569: `277`,
    157: `61`,
    1570: `277`,
    1571: `277`,
    1572: `277`,
    1573: `277`,
    1574: `277`,
    1575: `277`,
    1576: `277`,
    1577: `277`,
    1578: `277`,
    1579: `277`,
    158: `61`,
    1580: `277`,
    1581: `277`,
    1582: `277`,
    1583: `277`,
    1584: `277`,
    1585: `277`,
    1586: `277`,
    1587: `277`,
    1588: `277`,
    1589: `277`,
    159: `62`,
    1590: `277`,
    1591: `277`,
    1592: `277`,
    1593: `277`,
    1594: `277`,
    1595: `277`,
    1596: `277`,
    1597: `277`,
    1598: `277`,
    1599: `277`,
    16: `2`,
    160: `62`,
    1600: `277`,
    1601: `277`,
    1602: `277`,
    1603: `277`,
    1604: `277`,
    1605: `277`,
    1606: `277`,
    1607: `277`,
    1608: `277`,
    1609: `277`,
    161: `63`,
    1610: `277`,
    1611: `277`,
    1612: `277`,
    1613: `277`,
    1614: `277`,
    1615: `277`,
    1616: `277`,
    1617: `277`,
    1618: `277`,
    1619: `277`,
    162: `64`,
    1620: `277`,
    1621: `277`,
    1622: `277`,
    1623: `277`,
    1624: `277`,
    1625: `277`,
    1626: `277`,
    1627: `277`,
    1628: `277`,
    1629: `277`,
    163: `65`,
    1630: `277`,
    1631: `277`,
    1632: `277`,
    1633: `277`,
    1634: `277`,
    1635: `277`,
    1636: `277`,
    1637: `277`,
    1638: `277`,
    1639: `277`,
    164: `65`,
    1640: `277`,
    1641: `277`,
    1642: `277`,
    1643: `277`,
    1644: `277`,
    1645: `277`,
    1646: `277`,
    1647: `277`,
    1648: `277`,
    1649: `277`,
    165: `65`,
    1650: `277`,
    1651: `277`,
    1652: `277`,
    1653: `277`,
    1654: `277`,
    1655: `277`,
    1656: `277`,
    1657: `277`,
    1658: `277`,
    1659: `277`,
    166: `65`,
    1660: `277`,
    1661: `277`,
    1662: `277`,
    1663: `277`,
    1664: `277`,
    1665: `277`,
    1666: `277`,
    1667: `277`,
    1668: `277`,
    1669: `277`,
    167: `65`,
    1670: `277`,
    1671: `277`,
    1672: `277`,
    1673: `277`,
    1674: `277`,
    1675: `277`,
    1676: `277`,
    1677: `277`,
    1678: `277`,
    1679: `277`,
    168: `65`,
    1680: `277`,
    1681: `277`,
    1682: `277`,
    1683: `277`,
    1684: `277`,
    1685: `277`,
    1686: `277`,
    1687: `277`,
    1688: `277`,
    1689: `277`,
    169: `65`,
    1690: `277`,
    1691: `277`,
    1692: `277`,
    1693: `277`,
    1694: `277`,
    1695: `277`,
    1696: `277`,
    1697: `277`,
    1698: `277`,
    1699: `277`,
    17: `4`,
    170: `65`,
    1700: `277`,
    1701: `277`,
    1702: `277`,
    1703: `277`,
    1704: `277`,
    1705: `277`,
    1706: `277`,
    1707: `277`,
    1708: `277`,
    1709: `277`,
    171: `65`,
    1710: `277`,
    1711: `277`,
    1712: `277`,
    1713: `277`,
    1714: `277`,
    1715: `277`,
    1716: `277`,
    1717: `277`,
    1718: `277`,
    1719: `277`,
    172: `65`,
    1720: `277`,
    1721: `277`,
    1722: `277`,
    1723: `277`,
    1724: `277`,
    1725: `277`,
    1726: `277`,
    1727: `277`,
    1728: `277`,
    1729: `277`,
    173: `65`,
    1730: `277`,
    1731: `277`,
    1732: `277`,
    1733: `277`,
    1734: `277`,
    1735: `277`,
    1736: `277`,
    1737: `277`,
    1738: `277`,
    1739: `277`,
    174: `65`,
    1740: `277`,
    1741: `277`,
    1742: `277`,
    1743: `277`,
    1744: `277`,
    1745: `277`,
    1746: `277`,
    1747: `277`,
    1748: `277`,
    1749: `277`,
    175: `65`,
    1750: `277`,
    1751: `277`,
    1752: `277`,
    1753: `277`,
    1754: `277`,
    1755: `277`,
    1756: `277`,
    1757: `277`,
    1758: `277`,
    1759: `277`,
    176: `65`,
    1760: `277`,
    1761: `277`,
    1762: `277`,
    1763: `277`,
    1764: `277`,
    1765: `277`,
    1766: `277`,
    1767: `277`,
    1768: `277`,
    1769: `277`,
    177: `66`,
    1770: `277`,
    1771: `277`,
    1772: `277`,
    1773: `277`,
    1774: `277`,
    1775: `277`,
    1776: `277`,
    1777: `277`,
    1778: `277`,
    1779: `277`,
    178: `66`,
    1780: `277`,
    1781: `277`,
    1782: `277`,
    1783: `277`,
    1784: `277`,
    1785: `277`,
    1786: `277`,
    1787: `277`,
    1788: `277`,
    1789: `277`,
    179: `66`,
    1790: `277`,
    1791: `277`,
    1792: `277`,
    1793: `277`,
    1794: `277`,
    1795: `277`,
    1796: `277`,
    1797: `277`,
    1798: `277`,
    1799: `277`,
    18: `4`,
    180: `68`,
    1800: `277`,
    1801: `277`,
    1802: `277`,
    1803: `277`,
    1804: `277`,
    1805: `277`,
    1806: `277`,
    1807: `277`,
    1808: `277`,
    1809: `277`,
    181: `68`,
    1810: `277`,
    1811: `277`,
    1812: `277`,
    1813: `277`,
    1814: `277`,
    1815: `277`,
    1816: `277`,
    1817: `277`,
    1818: `277`,
    1819: `277`,
    182: `68`,
    1820: `277`,
    1821: `277`,
    1822: `277`,
    1823: `277`,
    1824: `277`,
    1825: `277`,
    1826: `277`,
    1827: `277`,
    1828: `277`,
    1829: `277`,
    183: `69`,
    1830: `277`,
    1831: `277`,
    1832: `277`,
    1833: `277`,
    1834: `277`,
    1835: `277`,
    1836: `277`,
    1837: `277`,
    1838: `277`,
    1839: `277`,
    184: `69`,
    1840: `277`,
    1841: `277`,
    1842: `277`,
    1843: `277`,
    1844: `277`,
    1845: `277`,
    1846: `277`,
    1847: `277`,
    1848: `277`,
    1849: `277`,
    185: `71`,
    1850: `277`,
    1851: `277`,
    1852: `277`,
    1853: `277`,
    1854: `277`,
    1855: `277`,
    1856: `277`,
    1857: `277`,
    1858: `277`,
    1859: `277`,
    186: `72`,
    1860: `277`,
    1861: `277`,
    1862: `277`,
    1863: `277`,
    1864: `277`,
    1865: `277`,
    1866: `277`,
    1867: `277`,
    1868: `277`,
    1869: `277`,
    187: `73`,
    1870: `277`,
    1871: `277`,
    1872: `277`,
    1873: `277`,
    1874: `277`,
    1875: `277`,
    1876: `277`,
    1877: `277`,
    1878: `277`,
    1879: `277`,
    188: `73`,
    1880: `277`,
    1881: `277`,
    1882: `277`,
    1883: `277`,
    1884: `277`,
    1885: `277`,
    1886: `277`,
    1887: `277`,
    1888: `277`,
    1889: `277`,
    189: `73`,
    1890: `277`,
    1891: `277`,
    1892: `277`,
    1893: `277`,
    1894: `277`,
    1895: `277`,
    1896: `277`,
    1897: `277`,
    1898: `277`,
    1899: `277`,
    19: `5`,
    190: `74`,
    1900: `277`,
    1901: `277`,
    1902: `277`,
    1903: `277`,
    1904: `277`,
    1905: `277`,
    1906: `277`,
    1907: `277`,
    1908: `277`,
    1909: `277`,
    191: `74`,
    1910: `277`,
    1911: `277`,
    1912: `277`,
    1913: `277`,
    1914: `277`,
    1915: `277`,
    1916: `277`,
    1917: `277`,
    1918: `277`,
    1919: `277`,
    192: `75`,
    1920: `277`,
    1921: `277`,
    1922: `277`,
    1923: `277`,
    1924: `277`,
    1925: `277`,
    1926: `277`,
    1927: `277`,
    1928: `277`,
    1929: `277`,
    193: `76`,
    1930: `277`,
    1931: `277`,
    1932: `277`,
    1933: `277`,
    1934: `277`,
    1935: `277`,
    1936: `277`,
    1937: `277`,
    1938: `277`,
    1939: `277`,
    194: `76`,
    1940: `277`,
    1941: `277`,
    1942: `277`,
    1943: `277`,
    1944: `277`,
    1945: `277`,
    1946: `277`,
    1947: `277`,
    1948: `277`,
    1949: `277`,
    195: `77`,
    1950: `277`,
    1951: `277`,
    1952: `277`,
    1953: `277`,
    1954: `277`,
    1955: `277`,
    1956: `277`,
    1957: `277`,
    1958: `277`,
    1959: `277`,
    196: `78`,
    1960: `277`,
    1961: `277`,
    1962: `277`,
    1963: `277`,
    1964: `277`,
    1965: `277`,
    1966: `277`,
    1967: `277`,
    1968: `277`,
    1969: `277`,
    197: `79`,
    1970: `277`,
    1971: `277`,
    1972: `277`,
    1973: `277`,
    1974: `277`,
    1975: `277`,
    1976: `277`,
    1977: `277`,
    1978: `277`,
    1979: `277`,
    198: `79`,
    1980: `277`,
    1981: `277`,
    1982: `277`,
    1983: `277`,
    1984: `277`,
    1985: `277`,
    1986: `277`,
    1987: `277`,
    1988: `277`,
    1989: `277`,
    199: `80`,
    1990: `277`,
    1991: `277`,
    1992: `277`,
    1993: `277`,
    1994: `277`,
    1995: `277`,
    1996: `277`,
    1997: `277`,
    1998: `277`,
    1999: `277`,
    2: `2`,
    20: `5`,
    200: `80`,
    2000: `277`,
    2001: `277`,
    2002: `277`,
    2003: `277`,
    2004: `277`,
    2005: `277`,
    2006: `277`,
    2007: `277`,
    2008: `277`,
    2009: `277`,
    201: `80`,
    2010: `277`,
    2011: `277`,
    2012: `277`,
    2013: `277`,
    2014: `277`,
    2015: `277`,
    2016: `277`,
    2017: `277`,
    2018: `277`,
    2019: `277`,
    202: `82`,
    2020: `277`,
    2021: `277`,
    2022: `277`,
    2023: `277`,
    2024: `277`,
    2025: `277`,
    2026: `277`,
    2027: `277`,
    2028: `277`,
    2029: `277`,
    203: `82`,
    2030: `277`,
    2031: `277`,
    2032: `277`,
    2033: `277`,
    2034: `277`,
    2035: `277`,
    2036: `277`,
    2037: `277`,
    2038: `277`,
    2039: `277`,
    204: `82`,
    2040: `277`,
    2041: `277`,
    2042: `277`,
    2043: `277`,
    2044: `277`,
    2045: `277`,
    2046: `277`,
    2047: `277`,
    2048: `277`,
    2049: `277`,
    205: `83`,
    2050: `277`,
    2051: `277`,
    2052: `277`,
    2053: `277`,
    2054: `277`,
    2055: `277`,
    2056: `277`,
    2057: `277`,
    2058: `277`,
    2059: `277`,
    206: `83`,
    2060: `277`,
    2061: `277`,
    2062: `277`,
    2063: `277`,
    2064: `277`,
    2065: `277`,
    2066: `277`,
    2067: `277`,
    2068: `277`,
    2069: `277`,
    207: `85`,
    2070: `277`,
    2071: `277`,
    2072: `277`,
    2073: `277`,
    2074: `277`,
    2075: `277`,
    2076: `277`,
    2077: `277`,
    2078: `277`,
    2079: `277`,
    208: `86`,
    2080: `277`,
    2081: `277`,
    2082: `277`,
    2083: `277`,
    2084: `277`,
    2085: `277`,
    2086: `277`,
    2087: `277`,
    2088: `277`,
    2089: `277`,
    209: `87`,
    2090: `277`,
    2091: `277`,
    2092: `277`,
    2093: `277`,
    2094: `277`,
    2095: `277`,
    2096: `277`,
    2097: `277`,
    2098: `277`,
    2099: `277`,
    21: `5`,
    210: `87`,
    2100: `277`,
    2101: `277`,
    2102: `277`,
    2103: `277`,
    2104: `277`,
    2105: `277`,
    2106: `277`,
    2107: `277`,
    2108: `277`,
    2109: `277`,
    211: `87`,
    2110: `277`,
    2111: `277`,
    2112: `277`,
    2113: `277`,
    2114: `277`,
    2115: `277`,
    2116: `277`,
    2117: `277`,
    2118: `277`,
    2119: `277`,
    212: `88`,
    2120: `277`,
    2121: `277`,
    2122: `277`,
    2123: `277`,
    2124: `277`,
    2125: `277`,
    2126: `277`,
    2127: `277`,
    2128: `277`,
    2129: `277`,
    213: `88`,
    2130: `277`,
    2131: `277`,
    2132: `277`,
    2133: `277`,
    2134: `277`,
    2135: `277`,
    2136: `277`,
    2137: `277`,
    2138: `277`,
    2139: `277`,
    214: `89`,
    2140: `277`,
    2141: `277`,
    2142: `277`,
    2143: `277`,
    2144: `277`,
    2145: `277`,
    2146: `277`,
    2147: `277`,
    2148: `277`,
    2149: `277`,
    215: `90`,
    2150: `277`,
    2151: `277`,
    2152: `277`,
    2153: `277`,
    2154: `277`,
    2155: `277`,
    2156: `277`,
    2157: `277`,
    2158: `277`,
    2159: `277`,
    216: `90`,
    2160: `277`,
    2161: `277`,
    2162: `277`,
    2163: `277`,
    2164: `277`,
    2165: `277`,
    2166: `277`,
    2167: `277`,
    2168: `277`,
    2169: `277`,
    217: `91`,
    2170: `277`,
    2171: `277`,
    2172: `277`,
    2173: `277`,
    2174: `277`,
    2175: `277`,
    2176: `277`,
    2177: `277`,
    2178: `277`,
    2179: `277`,
    218: `92`,
    2180: `277`,
    2181: `277`,
    2182: `277`,
    2183: `277`,
    2184: `277`,
    2185: `277`,
    2186: `277`,
    2187: `277`,
    2188: `277`,
    2189: `277`,
    219: `93`,
    2190: `277`,
    2191: `277`,
    2192: `277`,
    2193: `277`,
    2194: `277`,
    2195: `277`,
    2196: `277`,
    2197: `277`,
    2198: `277`,
    2199: `277`,
    22: `6`,
    220: `94`,
    2200: `277`,
    2201: `277`,
    2202: `277`,
    2203: `277`,
    2204: `277`,
    2205: `277`,
    2206: `277`,
    2207: `277`,
    2208: `277`,
    2209: `277`,
    221: `94`,
    2210: `277`,
    2211: `277`,
    2212: `277`,
    2213: `277`,
    2214: `277`,
    2215: `277`,
    2216: `277`,
    2217: `277`,
    2218: `277`,
    2219: `277`,
    222: `95`,
    2220: `277`,
    2221: `277`,
    2222: `277`,
    2223: `277`,
    2224: `277`,
    2225: `277`,
    2226: `277`,
    2227: `277`,
    2228: `277`,
    2229: `277`,
    223: `95`,
    2230: `277`,
    2231: `277`,
    2232: `277`,
    2233: `277`,
    2234: `277`,
    2235: `277`,
    2236: `277`,
    2237: `277`,
    2238: `277`,
    2239: `277`,
    224: `95`,
    2240: `277`,
    2241: `277`,
    2242: `277`,
    2243: `277`,
    2244: `277`,
    2245: `277`,
    2246: `277`,
    2247: `277`,
    2248: `277`,
    2249: `277`,
    225: `97`,
    2250: `277`,
    2251: `277`,
    2252: `277`,
    2253: `277`,
    2254: `277`,
    2255: `277`,
    2256: `277`,
    2257: `277`,
    2258: `277`,
    2259: `277`,
    226: `97`,
    2260: `277`,
    2261: `277`,
    2262: `277`,
    2263: `277`,
    2264: `277`,
    2265: `277`,
    2266: `277`,
    2267: `277`,
    2268: `277`,
    2269: `277`,
    227: `97`,
    2270: `277`,
    2271: `277`,
    2272: `277`,
    2273: `277`,
    2274: `277`,
    2275: `277`,
    2276: `277`,
    2277: `277`,
    2278: `277`,
    2279: `277`,
    228: `98`,
    2280: `277`,
    2281: `277`,
    2282: `277`,
    2283: `277`,
    2284: `277`,
    2285: `277`,
    2286: `277`,
    2287: `277`,
    2288: `277`,
    2289: `277`,
    229: `98`,
    2290: `277`,
    2291: `277`,
    2292: `277`,
    2293: `277`,
    2294: `277`,
    2295: `277`,
    2296: `277`,
    2297: `277`,
    2298: `277`,
    2299: `277`,
    23: `7`,
    230: `100`,
    2300: `277`,
    2301: `277`,
    2302: `277`,
    2303: `277`,
    2304: `277`,
    2305: `277`,
    2306: `277`,
    2307: `277`,
    2308: `277`,
    2309: `277`,
    231: `101`,
    2310: `277`,
    2311: `277`,
    2312: `277`,
    2313: `277`,
    2314: `277`,
    2315: `277`,
    2316: `277`,
    2317: `277`,
    2318: `277`,
    2319: `277`,
    232: `102`,
    2320: `277`,
    2321: `277`,
    2322: `277`,
    2323: `277`,
    2324: `277`,
    2325: `277`,
    2326: `277`,
    2327: `277`,
    2328: `277`,
    2329: `277`,
    233: `102`,
    2330: `277`,
    2331: `277`,
    2332: `277`,
    2333: `277`,
    2334: `277`,
    2335: `277`,
    2336: `277`,
    2337: `277`,
    2338: `277`,
    2339: `277`,
    234: `102`,
    2340: `277`,
    2341: `277`,
    2342: `277`,
    2343: `277`,
    2344: `277`,
    2345: `277`,
    2346: `277`,
    2347: `277`,
    2348: `277`,
    2349: `277`,
    235: `103`,
    2350: `277`,
    2351: `277`,
    2352: `277`,
    2353: `277`,
    2354: `277`,
    2355: `277`,
    2356: `277`,
    2357: `277`,
    2358: `277`,
    2359: `277`,
    236: `103`,
    2360: `277`,
    2361: `277`,
    2362: `277`,
    2363: `277`,
    2364: `277`,
    2365: `277`,
    2366: `277`,
    2367: `277`,
    2368: `277`,
    2369: `277`,
    237: `104`,
    2370: `277`,
    2371: `277`,
    2372: `277`,
    2373: `277`,
    2374: `277`,
    2375: `277`,
    2376: `277`,
    2377: `277`,
    2378: `277`,
    2379: `277`,
    238: `105`,
    2380: `277`,
    2381: `277`,
    2382: `277`,
    2383: `277`,
    2384: `277`,
    2385: `277`,
    2386: `277`,
    2387: `277`,
    2388: `277`,
    2389: `277`,
    239: `106`,
    2390: `277`,
    2391: `277`,
    2392: `277`,
    2393: `277`,
    2394: `277`,
    2395: `277`,
    2396: `277`,
    2397: `277`,
    2398: `277`,
    2399: `277`,
    24: `8`,
    240: `106`,
    2400: `277`,
    2401: `277`,
    2402: `277`,
    2403: `277`,
    2404: `277`,
    2405: `277`,
    2406: `277`,
    2407: `277`,
    2408: `277`,
    2409: `277`,
    241: `107`,
    2410: `277`,
    2411: `277`,
    2412: `277`,
    2413: `277`,
    2414: `277`,
    2415: `277`,
    2416: `277`,
    2417: `277`,
    2418: `277`,
    2419: `277`,
    242: `107`,
    2420: `277`,
    2421: `277`,
    2422: `277`,
    2423: `277`,
    2424: `277`,
    2425: `277`,
    2426: `277`,
    2427: `277`,
    2428: `277`,
    2429: `277`,
    243: `107`,
    2430: `277`,
    2431: `277`,
    2432: `277`,
    2433: `277`,
    2434: `277`,
    2435: `277`,
    2436: `277`,
    2437: `277`,
    2438: `277`,
    2439: `277`,
    244: `110`,
    2440: `277`,
    2441: `277`,
    2442: `277`,
    2443: `277`,
    2444: `277`,
    2445: `277`,
    2446: `277`,
    2447: `277`,
    2448: `277`,
    2449: `277`,
    245: `110`,
    2450: `277`,
    2451: `277`,
    2452: `277`,
    2453: `277`,
    2454: `277`,
    2455: `277`,
    2456: `277`,
    2457: `277`,
    2458: `277`,
    2459: `277`,
    246: `110`,
    2460: `277`,
    2461: `277`,
    2462: `277`,
    2463: `277`,
    2464: `277`,
    2465: `277`,
    2466: `277`,
    2467: `277`,
    2468: `277`,
    2469: `277`,
    247: `110`,
    2470: `277`,
    2471: `277`,
    2472: `277`,
    2473: `277`,
    2474: `277`,
    2475: `277`,
    2476: `277`,
    2477: `277`,
    2478: `277`,
    2479: `277`,
    248: `110`,
    2480: `277`,
    2481: `277`,
    2482: `277`,
    2483: `277`,
    2484: `277`,
    2485: `277`,
    2486: `277`,
    2487: `277`,
    2488: `277`,
    2489: `277`,
    249: `110`,
    2490: `277`,
    2491: `277`,
    2492: `277`,
    2493: `277`,
    2494: `277`,
    2495: `277`,
    2496: `277`,
    2497: `277`,
    2498: `277`,
    2499: `277`,
    25: `9`,
    250: `110`,
    2500: `277`,
    2501: `277`,
    2502: `277`,
    2503: `277`,
    2504: `277`,
    2505: `277`,
    2506: `277`,
    2507: `277`,
    2508: `277`,
    2509: `277`,
    251: `110`,
    2510: `277`,
    2511: `277`,
    2512: `277`,
    2513: `277`,
    2514: `277`,
    2515: `277`,
    2516: `277`,
    2517: `277`,
    2518: `277`,
    2519: `277`,
    252: `110`,
    2520: `277`,
    2521: `277`,
    2522: `277`,
    2523: `277`,
    2524: `277`,
    2525: `277`,
    2526: `277`,
    2527: `277`,
    2528: `277`,
    2529: `277`,
    253: `110`,
    2530: `277`,
    2531: `277`,
    2532: `277`,
    2533: `277`,
    2534: `277`,
    2535: `277`,
    2536: `277`,
    2537: `277`,
    2538: `277`,
    2539: `277`,
    254: `110`,
    2540: `277`,
    2541: `277`,
    2542: `277`,
    2543: `277`,
    2544: `277`,
    2545: `277`,
    2546: `277`,
    2547: `277`,
    2548: `277`,
    2549: `277`,
    255: `110`,
    2550: `277`,
    2551: `277`,
    2552: `277`,
    2553: `277`,
    2554: `277`,
    2555: `277`,
    2556: `277`,
    2557: `277`,
    2558: `277`,
    2559: `277`,
    256: `110`,
    2560: `277`,
    2561: `277`,
    2562: `277`,
    2563: `277`,
    2564: `277`,
    2565: `277`,
    2566: `277`,
    2567: `277`,
    2568: `277`,
    2569: `277`,
    257: `110`,
    2570: `277`,
    2571: `277`,
    2572: `277`,
    2573: `277`,
    2574: `277`,
    2575: `277`,
    2576: `277`,
    2577: `277`,
    2578: `277`,
    2579: `277`,
    258: `110`,
    2580: `277`,
    2581: `277`,
    2582: `277`,
    2583: `277`,
    2584: `277`,
    2585: `277`,
    2586: `277`,
    2587: `277`,
    2588: `277`,
    2589: `277`,
    259: `110`,
    2590: `277`,
    2591: `277`,
    2592: `277`,
    2593: `277`,
    2594: `277`,
    2595: `277`,
    2596: `277`,
    2597: `277`,
    2598: `277`,
    2599: `277`,
    26: `10`,
    260: `110`,
    2600: `277`,
    2601: `277`,
    2602: `277`,
    2603: `277`,
    2604: `277`,
    2605: `277`,
    2606: `277`,
    2607: `277`,
    2608: `277`,
    2609: `277`,
    261: `110`,
    2610: `277`,
    2611: `277`,
    2612: `277`,
    2613: `277`,
    2614: `277`,
    2615: `277`,
    2616: `277`,
    2617: `277`,
    2618: `277`,
    2619: `277`,
    262: `110`,
    2620: `277`,
    2621: `277`,
    2622: `277`,
    2623: `277`,
    2624: `277`,
    2625: `277`,
    2626: `277`,
    2627: `277`,
    2628: `277`,
    2629: `277`,
    263: `110`,
    2630: `277`,
    2631: `277`,
    2632: `277`,
    2633: `277`,
    2634: `277`,
    2635: `277`,
    2636: `277`,
    2637: `277`,
    2638: `277`,
    2639: `277`,
    264: `110`,
    2640: `277`,
    2641: `277`,
    2642: `277`,
    2643: `277`,
    2644: `277`,
    2645: `277`,
    2646: `277`,
    2647: `277`,
    2648: `277`,
    2649: `277`,
    265: `110`,
    2650: `277`,
    2651: `277`,
    2652: `277`,
    2653: `277`,
    2654: `277`,
    2655: `277`,
    2656: `277`,
    2657: `277`,
    2658: `277`,
    2659: `277`,
    266: `110`,
    2660: `277`,
    2661: `277`,
    2662: `277`,
    2663: `277`,
    2664: `277`,
    2665: `277`,
    2666: `277`,
    2667: `277`,
    2668: `277`,
    2669: `277`,
    267: `110`,
    2670: `277`,
    2671: `277`,
    2672: `277`,
    2673: `277`,
    2674: `277`,
    2675: `277`,
    2676: `277`,
    2677: `277`,
    2678: `277`,
    2679: `277`,
    268: `110`,
    2680: `277`,
    2681: `277`,
    2682: `277`,
    2683: `277`,
    2684: `277`,
    2685: `277`,
    2686: `277`,
    2687: `277`,
    2688: `277`,
    2689: `277`,
    269: `110`,
    2690: `277`,
    2691: `277`,
    2692: `277`,
    2693: `277`,
    2694: `277`,
    2695: `277`,
    2696: `277`,
    2697: `277`,
    2698: `277`,
    2699: `277`,
    27: `11`,
    270: `110`,
    2700: `277`,
    2701: `277`,
    2702: `277`,
    2703: `277`,
    2704: `277`,
    2705: `277`,
    2706: `277`,
    2707: `277`,
    2708: `277`,
    2709: `277`,
    271: `110`,
    2710: `277`,
    2711: `277`,
    2712: `277`,
    2713: `277`,
    2714: `277`,
    2715: `277`,
    2716: `277`,
    2717: `277`,
    2718: `277`,
    2719: `277`,
    272: `110`,
    2720: `277`,
    2721: `277`,
    2722: `277`,
    2723: `277`,
    2724: `277`,
    2725: `277`,
    2726: `277`,
    2727: `277`,
    2728: `277`,
    2729: `277`,
    273: `110`,
    2730: `277`,
    2731: `277`,
    2732: `277`,
    2733: `277`,
    2734: `277`,
    2735: `277`,
    2736: `277`,
    2737: `277`,
    2738: `277`,
    2739: `277`,
    274: `110`,
    2740: `277`,
    2741: `277`,
    2742: `277`,
    2743: `277`,
    2744: `277`,
    2745: `277`,
    2746: `277`,
    2747: `277`,
    2748: `277`,
    2749: `277`,
    275: `110`,
    2750: `277`,
    2751: `277`,
    2752: `277`,
    2753: `277`,
    2754: `277`,
    2755: `277`,
    2756: `277`,
    2757: `277`,
    2758: `277`,
    2759: `277`,
    276: `110`,
    2760: `277`,
    2761: `277`,
    2762: `277`,
    2763: `277`,
    2764: `277`,
    2765: `277`,
    2766: `277`,
    2767: `277`,
    2768: `277`,
    2769: `277`,
    277: `110`,
    2770: `277`,
    2771: `277`,
    2772: `277`,
    2773: `277`,
    2774: `277`,
    2775: `277`,
    2776: `277`,
    2777: `277`,
    2778: `277`,
    2779: `277`,
    278: `110`,
    2780: `277`,
    2781: `277`,
    2782: `277`,
    2783: `277`,
    2784: `277`,
    2785: `277`,
    2786: `277`,
    2787: `277`,
    2788: `277`,
    2789: `277`,
    279: `110`,
    2790: `277`,
    2791: `277`,
    2792: `277`,
    2793: `277`,
    2794: `277`,
    2795: `277`,
    2796: `277`,
    2797: `277`,
    2798: `277`,
    2799: `277`,
    28: `11`,
    280: `110`,
    2800: `277`,
    2801: `277`,
    2802: `277`,
    2803: `277`,
    2804: `277`,
    2805: `277`,
    2806: `277`,
    2807: `277`,
    2808: `277`,
    2809: `277`,
    281: `110`,
    2810: `277`,
    2811: `277`,
    2812: `277`,
    2813: `277`,
    2814: `277`,
    2815: `277`,
    2816: `277`,
    2817: `277`,
    2818: `277`,
    2819: `277`,
    282: `110`,
    2820: `277`,
    2821: `277`,
    2822: `277`,
    2823: `277`,
    2824: `277`,
    2825: `277`,
    2826: `277`,
    2827: `277`,
    2828: `277`,
    2829: `277`,
    283: `110`,
    2830: `277`,
    2831: `277`,
    2832: `277`,
    2833: `277`,
    2834: `277`,
    2835: `277`,
    2836: `277`,
    2837: `277`,
    2838: `277`,
    2839: `277`,
    284: `110`,
    2840: `277`,
    2841: `277`,
    2842: `277`,
    2843: `277`,
    2844: `277`,
    2845: `277`,
    2846: `277`,
    2847: `277`,
    2848: `277`,
    2849: `277`,
    285: `110`,
    2850: `277`,
    2851: `277`,
    2852: `277`,
    2853: `277`,
    2854: `277`,
    2855: `277`,
    2856: `277`,
    2857: `277`,
    2858: `277`,
    2859: `277`,
    286: `110`,
    2860: `277`,
    2861: `277`,
    2862: `277`,
    2863: `277`,
    2864: `277`,
    2865: `277`,
    2866: `277`,
    2867: `277`,
    2868: `277`,
    2869: `277`,
    287: `110`,
    2870: `277`,
    2871: `277`,
    2872: `277`,
    2873: `277`,
    2874: `277`,
    2875: `277`,
    2876: `277`,
    2877: `277`,
    2878: `277`,
    2879: `277`,
    288: `110`,
    2880: `277`,
    2881: `277`,
    2882: `277`,
    2883: `277`,
    2884: `277`,
    2885: `277`,
    2886: `277`,
    2887: `277`,
    2888: `277`,
    2889: `277`,
    289: `110`,
    2890: `277`,
    2891: `277`,
    2892: `277`,
    2893: `277`,
    2894: `277`,
    2895: `277`,
    2896: `277`,
    2897: `277`,
    2898: `277`,
    2899: `277`,
    29: `12`,
    290: `110`,
    2900: `277`,
    2901: `277`,
    2902: `277`,
    2903: `277`,
    2904: `277`,
    2905: `277`,
    2906: `277`,
    2907: `277`,
    2908: `277`,
    2909: `277`,
    291: `110`,
    2910: `277`,
    2911: `277`,
    2912: `277`,
    2913: `277`,
    2914: `277`,
    2915: `277`,
    2916: `277`,
    2917: `277`,
    2918: `277`,
    2919: `277`,
    292: `110`,
    2920: `277`,
    2921: `277`,
    2922: `277`,
    2923: `277`,
    2924: `277`,
    2925: `277`,
    2926: `277`,
    2927: `277`,
    2928: `277`,
    2929: `277`,
    293: `110`,
    2930: `277`,
    2931: `277`,
    2932: `277`,
    2933: `277`,
    2934: `277`,
    2935: `277`,
    2936: `277`,
    2937: `277`,
    2938: `277`,
    2939: `277`,
    294: `110`,
    2940: `277`,
    2941: `277`,
    2942: `277`,
    2943: `277`,
    2944: `277`,
    2945: `277`,
    2946: `277`,
    2947: `277`,
    2948: `277`,
    2949: `277`,
    295: `110`,
    2950: `277`,
    2951: `277`,
    2952: `277`,
    2953: `277`,
    2954: `277`,
    2955: `277`,
    2956: `277`,
    2957: `277`,
    2958: `277`,
    2959: `277`,
    296: `110`,
    2960: `277`,
    2961: `277`,
    2962: `277`,
    2963: `277`,
    2964: `277`,
    2965: `277`,
    2966: `277`,
    2967: `277`,
    2968: `277`,
    2969: `277`,
    297: `110`,
    2970: `277`,
    2971: `277`,
    2972: `277`,
    2973: `277`,
    2974: `277`,
    2975: `277`,
    2976: `277`,
    2977: `277`,
    2978: `277`,
    2979: `277`,
    298: `110`,
    2980: `277`,
    2981: `277`,
    2982: `277`,
    2983: `277`,
    2984: `277`,
    2985: `277`,
    2986: `277`,
    2987: `277`,
    2988: `277`,
    2989: `277`,
    299: `110`,
    2990: `277`,
    2991: `277`,
    2992: `277`,
    2993: `277`,
    2994: `277`,
    2995: `277`,
    2996: `277`,
    2997: `277`,
    2998: `277`,
    2999: `277`,
    3: `2`,
    30: `13`,
    300: `110`,
    3000: `277`,
    3001: `277`,
    3002: `277`,
    3003: `277`,
    3004: `277`,
    3005: `277`,
    3006: `277`,
    3007: `277`,
    3008: `277`,
    3009: `277`,
    301: `110`,
    3010: `277`,
    3011: `277`,
    3012: `277`,
    3013: `277`,
    3014: `277`,
    3015: `277`,
    3016: `277`,
    3017: `277`,
    3018: `277`,
    3019: `277`,
    302: `110`,
    3020: `277`,
    3021: `277`,
    3022: `277`,
    3023: `277`,
    3024: `277`,
    3025: `277`,
    3026: `277`,
    3027: `277`,
    3028: `277`,
    3029: `277`,
    303: `110`,
    3030: `277`,
    3031: `277`,
    3032: `277`,
    3033: `277`,
    3034: `277`,
    3035: `277`,
    3036: `277`,
    3037: `277`,
    3038: `277`,
    3039: `277`,
    304: `110`,
    3040: `277`,
    3041: `278`,
    3042: `278`,
    3043: `279`,
    3044: `279`,
    3045: `279`,
    3046: `280`,
    3047: `280`,
    3048: `281`,
    3049: `281`,
    305: `110`,
    3050: `282`,
    3051: `282`,
    3052: `283`,
    3053: `284`,
    3054: `284`,
    3055: `285`,
    3056: `286`,
    3057: `287`,
    3058: `287`,
    3059: `288`,
    306: `110`,
    3060: `289`,
    3061: `289`,
    3062: `290`,
    3063: `290`,
    3064: `291`,
    3065: `291`,
    3066: `291`,
    3067: `291`,
    3068: `291`,
    3069: `291`,
    307: `110`,
    3070: `291`,
    3071: `291`,
    3072: `291`,
    3073: `291`,
    3074: `292`,
    3075: `292`,
    3076: `293`,
    3077: `294`,
    3078: `295`,
    3079: `296`,
    308: `110`,
    3080: `296`,
    3081: `297`,
    3082: `297`,
    3083: `298`,
    3084: `298`,
    3085: `298`,
    3086: `298`,
    3087: `298`,
    3088: `298`,
    3089: `299`,
    309: `110`,
    3090: `299`,
    3091: `300`,
    3092: `301`,
    3093: `302`,
    3094: `304`,
    3095: `304`,
    3096: `304`,
    3097: `304`,
    3098: `304`,
    3099: `304`,
    31: `14`,
    310: `110`,
    3100: `304`,
    3101: `304`,
    3102: `304`,
    3103: `304`,
    3104: `305`,
    3105: `305`,
    3106: `306`,
    3107: `307`,
    3108: `308`,
    3109: `309`,
    311: `110`,
    3110: `309`,
    3111: `310`,
    3112: `311`,
    3113: `311`,
    3114: `312`,
    3115: `312`,
    3116: `313`,
    3117: `313`,
    3118: `314`,
    3119: `314`,
    312: `110`,
    3120: `314`,
    3121: `316`,
    3122: `316`,
    3123: `317`,
    3124: `317`,
    3125: `318`,
    3126: `319`,
    3127: `326`,
    3128: `327`,
    3129: `327`,
    313: `110`,
    3130: `327`,
    3131: `330`,
    3132: `330`,
    3133: `331`,
    3134: `332`,
    3135: `333`,
    3136: `333`,
    3137: `334`,
    3138: `334`,
    3139: `334`,
    314: `110`,
    3140: `334`,
    3141: `334`,
    3142: `334`,
    3143: `334`,
    3144: `335`,
    3145: `335`,
    3146: `336`,
    3147: `337`,
    3148: `338`,
    3149: `339`,
    315: `110`,
    3150: `339`,
    3151: `340`,
    3152: `340`,
    3153: `341`,
    3154: `342`,
    3155: `342`,
    3156: `343`,
    3157: `344`,
    3158: `344`,
    3159: `345`,
    316: `110`,
    3160: `346`,
    3161: `346`,
    3162: `347`,
    3163: `348`,
    3164: `349`,
    3165: `350`,
    3166: `351`,
    3167: `351`,
    3168: `352`,
    3169: `353`,
    317: `110`,
    3170: `353`,
    3171: `354`,
    3172: `354`,
    3173: `354`,
    3174: `355`,
    3175: `356`,
    3176: `357`,
    3177: `357`,
    3178: `358`,
    3179: `358`,
    318: `110`,
    3180: `359`,
    3181: `359`,
    3182: `360`,
    3183: `360`,
    3184: `362`,
    3185: `362`,
    3186: `363`,
    3187: `363`,
    3188: `363`,
    3189: `363`,
    319: `110`,
    3190: `363`,
    3191: `363`,
    3192: `364`,
    3193: `364`,
    3194: `365`,
    3195: `366`,
    3196: `367`,
    3197: `367`,
    3198: `368`,
    3199: `372`,
    32: `14`,
    320: `110`,
    3200: `372`,
    3201: `373`,
    3202: `374`,
    3203: `374`,
    3204: `375`,
    3205: `376`,
    3206: `376`,
    3207: `377`,
    3208: `378`,
    3209: `379`,
    321: `110`,
    3210: `380`,
    3211: `380`,
    3212: `380`,
    3213: `381`,
    3214: `381`,
    3215: `381`,
    3216: `382`,
    3217: `383`,
    3218: `383`,
    3219: `384`,
    322: `110`,
    3220: `384`,
    3221: `384`,
    3222: `384`,
    3223: `384`,
    3224: `384`,
    3225: `384`,
    3226: `384`,
    3227: `384`,
    3228: `384`,
    3229: `385`,
    323: `110`,
    3230: `385`,
    3231: `386`,
    3232: `387`,
    3233: `388`,
    3234: `388`,
    3235: `389`,
    3236: `389`,
    3237: `390`,
    3238: `391`,
    3239: `391`,
    324: `110`,
    3240: `392`,
    3241: `393`,
    3242: `394`,
    3243: `395`,
    3244: `399`,
    3245: `399`,
    3246: `399`,
    3247: `399`,
    3248: `399`,
    3249: `399`,
    325: `110`,
    3250: `400`,
    3251: `400`,
    3252: `401`,
    3253: `402`,
    3254: `403`,
    3255: `405`,
    3256: `406`,
    3257: `406`,
    3258: `407`,
    3259: `407`,
    326: `110`,
    3260: `407`,
    3261: `407`,
    3262: `407`,
    3263: `407`,
    3264: `407`,
    3265: `407`,
    3266: `407`,
    3267: `407`,
    3268: `408`,
    3269: `408`,
    327: `110`,
    3270: `409`,
    3271: `410`,
    3272: `410`,
    3273: `410`,
    3274: `411`,
    3275: `412`,
    3276: `413`,
    3277: `413`,
    3278: `414`,
    3279: `415`,
    328: `110`,
    3280: `415`,
    3281: `415`,
    3282: `416`,
    3283: `416`,
    3284: `417`,
    3285: `417`,
    3286: `418`,
    3287: `418`,
    3288: `419`,
    3289: `419`,
    329: `110`,
    3290: `419`,
    3291: `421`,
    3292: `421`,
    3293: `422`,
    3294: `422`,
    3295: `423`,
    3296: `423`,
    3297: `424`,
    3298: `425`,
    3299: `425`,
    33: `15`,
    330: `110`,
    3300: `426`,
    3301: `426`,
    3302: `426`,
    3303: `426`,
    3304: `426`,
    3305: `426`,
    3306: `427`,
    3307: `427`,
    3308: `428`,
    3309: `429`,
    331: `110`,
    3310: `430`,
    3311: `432`,
    3312: `432`,
    3313: `433`,
    3314: `433`,
    3315: `433`,
    3316: `434`,
    3317: `434`,
    3318: `435`,
    3319: `435`,
    332: `110`,
    3320: `436`,
    3321: `436`,
    3322: `436`,
    3323: `438`,
    3324: `438`,
    3325: `438`,
    3326: `439`,
    3327: `440`,
    3328: `440`,
    3329: `440`,
    333: `110`,
    3330: `441`,
    3331: `441`,
    3332: `441`,
    3333: `442`,
    3334: `442`,
    3335: `443`,
    3336: `443`,
    3337: `443`,
    3338: `445`,
    3339: `445`,
    334: `110`,
    3340: `445`,
    3341: `446`,
    3342: `446`,
    3343: `446`,
    3344: `447`,
    3345: `447`,
    3346: `448`,
    3347: `448`,
    3348: `448`,
    3349: `450`,
    335: `111`,
    3350: `451`,
    3351: `451`,
    3352: `452`,
    3353: `453`,
    3354: `454`,
    3355: `454`,
    3356: `455`,
    3357: `455`,
    3358: `456`,
    3359: `457`,
    336: `111`,
    3360: `458`,
    3361: `459`,
    3362: `459`,
    3363: `460`,
    3364: `461`,
    3365: `462`,
    3366: `463`,
    3367: `463`,
    3368: `464`,
    3369: `465`,
    337: `112`,
    3370: `466`,
    3371: `466`,
    3372: `466`,
    3373: `467`,
    3374: `467`,
    3375: `468`,
    3376: `469`,
    3377: `470`,
    3378: `470`,
    3379: `470`,
    338: `112`,
    3380: `472`,
    3381: `472`,
    3382: `473`,
    3383: `474`,
    3384: `475`,
    3385: `477`,
    3386: `477`,
    3387: `477`,
    3388: `479`,
    3389: `480`,
    339: `112`,
    3390: `480`,
    3391: `481`,
    3392: `482`,
    3393: `482`,
    3394: `483`,
    3395: `483`,
    3396: `484`,
    3397: `484`,
    3398: `485`,
    3399: `487`,
    34: `16`,
    340: `114`,
    3400: `488`,
    3401: `488`,
    3402: `489`,
    3403: `490`,
    3404: `490`,
    3405: `491`,
    3406: `491`,
    3407: `492`,
    3408: `492`,
    3409: `493`,
    341: `114`,
    3410: `494`,
    3411: `496`,
    3412: `496`,
    3413: `496`,
    3414: `498`,
    3415: `498`,
    3416: `498`,
    3417: `500`,
    3418: `500`,
    3419: `500`,
    342: `114`,
    3420: `502`,
    3421: `502`,
    3422: `502`,
    3423: `504`,
    3424: `504`,
    3425: `504`,
    3426: `506`,
    3427: `506`,
    3428: `506`,
    3429: `508`,
    343: `115`,
    3430: `509`,
    3431: `511`,
    3432: `512`,
    3433: `513`,
    3434: `514`,
    3435: `514`,
    3436: `515`,
    3437: `515`,
    3438: `516`,
    3439: `516`,
    344: `116`,
    3440: `516`,
    3441: `517`,
    3442: `519`,
    3443: `520`,
    3444: `521`,
    3445: `521`,
    3446: `521`,
    3447: `522`,
    3448: `523`,
    3449: `523`,
    345: `116`,
    3450: `524`,
    3451: `524`,
    3452: `524`,
    3453: `525`,
    3454: `527`,
    3455: `527`,
    3456: `528`,
    3457: `528`,
    3458: `529`,
    3459: `530`,
    346: `118`,
    3460: `532`,
    3461: `532`,
    3462: `532`,
    3463: `534`,
    3464: `535`,
    3465: `535`,
    3466: `536`,
    3467: `536`,
    3468: `537`,
    3469: `537`,
    347: `119`,
    3470: `537`,
    3471: `538`,
    3472: `538`,
    3473: `538`,
    3474: `540`,
    3475: `541`,
    3476: `541`,
    3477: `542`,
    3478: `544`,
    3479: `545`,
    348: `120`,
    3480: `546`,
    3481: `547`,
    3482: `548`,
    3483: `548`,
    3484: `549`,
    3485: `550`,
    3486: `551`,
    3487: `552`,
    3488: `554`,
    3489: `554`,
    349: `120`,
    3490: `555`,
    3491: `556`,
    3492: `556`,
    3493: `557`,
    3494: `559`,
    3495: `559`,
    3496: `560`,
    3497: `560`,
    3498: `561`,
    3499: `562`,
    35: `18`,
    350: `120`,
    3500: `563`,
    3501: `563`,
    3502: `563`,
    3503: `564`,
    3504: `564`,
    3505: `564`,
    3506: `567`,
    3507: `567`,
    3508: `568`,
    3509: `568`,
    351: `121`,
    3510: `569`,
    3511: `570`,
    3512: `571`,
    3513: `572`,
    3514: `572`,
    3515: `573`,
    3516: `574`,
    3517: `574`,
    3518: `575`,
    3519: `575`,
    352: `121`,
    3520: `576`,
    3521: `576`,
    3522: `577`,
    3523: `578`,
    3524: `579`,
    3525: `579`,
    3526: `580`,
    3527: `581`,
    3528: `582`,
    3529: `583`,
    353: `122`,
    3530: `583`,
    3531: `584`,
    3532: `585`,
    3533: `586`,
    3534: `588`,
    3535: `589`,
    3536: `589`,
    3537: `589`,
    3538: `591`,
    3539: `592`,
    354: `123`,
    3540: `592`,
    3541: `593`,
    3542: `593`,
    3543: `593`,
    3544: `595`,
    3545: `596`,
    355: `124`,
    356: `124`,
    357: `125`,
    358: `126`,
    359: `127`,
    36: `18`,
    360: `128`,
    361: `128`,
    362: `129`,
    363: `129`,
    364: `129`,
    365: `131`,
    366: `131`,
    367: `132`,
    368: `132`,
    369: `132`,
    37: `18`,
    370: `133`,
    371: `133`,
    372: `134`,
    373: `135`,
    374: `135`,
    375: `136`,
    376: `136`,
    377: `136`,
    378: `136`,
    379: `136`,
    38: `18`,
    380: `136`,
    381: `136`,
    382: `136`,
    383: `136`,
    384: `136`,
    385: `137`,
    386: `137`,
    387: `138`,
    388: `139`,
    389: `139`,
    39: `18`,
    390: `139`,
    391: `140`,
    392: `141`,
    393: `142`,
    394: `142`,
    395: `143`,
    396: `144`,
    397: `144`,
    398: `144`,
    399: `145`,
    4: `2`,
    40: `18`,
    400: `145`,
    401: `146`,
    402: `146`,
    403: `146`,
    404: `146`,
    405: `146`,
    406: `146`,
    407: `147`,
    408: `147`,
    409: `148`,
    41: `18`,
    410: `149`,
    411: `151`,
    412: `151`,
    413: `152`,
    414: `152`,
    415: `155`,
    416: `155`,
    417: `156`,
    418: `156`,
    419: `157`,
    42: `18`,
    420: `157`,
    421: `159`,
    422: `159`,
    423: `160`,
    424: `160`,
    425: `161`,
    426: `162`,
    427: `163`,
    428: `163`,
    429: `163`,
    43: `18`,
    430: `164`,
    431: `165`,
    432: `166`,
    433: `166`,
    434: `167`,
    435: `168`,
    436: `168`,
    437: `169`,
    438: `170`,
    439: `171`,
    44: `18`,
    440: `172`,
    441: `172`,
    442: `173`,
    443: `174`,
    444: `175`,
    445: `177`,
    446: `177`,
    447: `177`,
    448: `179`,
    449: `179`,
    45: `18`,
    450: `180`,
    451: `180`,
    452: `180`,
    453: `182`,
    454: `182`,
    455: `182`,
    456: `182`,
    457: `182`,
    458: `182`,
    459: `183`,
    46: `18`,
    460: `183`,
    461: `184`,
    462: `185`,
    463: `187`,
    464: `188`,
    465: `190`,
    466: `190`,
    467: `191`,
    468: `191`,
    469: `191`,
    47: `18`,
    470: `192`,
    471: `192`,
    472: `193`,
    473: `194`,
    474: `194`,
    475: `195`,
    476: `195`,
    477: `195`,
    478: `195`,
    479: `195`,
    48: `18`,
    480: `195`,
    481: `195`,
    482: `195`,
    483: `195`,
    484: `195`,
    485: `196`,
    486: `196`,
    487: `197`,
    488: `198`,
    489: `198`,
    49: `18`,
    490: `198`,
    491: `199`,
    492: `200`,
    493: `201`,
    494: `201`,
    495: `202`,
    496: `203`,
    497: `203`,
    498: `203`,
    499: `204`,
    5: `2`,
    50: `18`,
    500: `204`,
    501: `205`,
    502: `205`,
    503: `205`,
    504: `205`,
    505: `205`,
    506: `205`,
    507: `206`,
    508: `206`,
    509: `207`,
    51: `18`,
    510: `208`,
    511: `210`,
    512: `210`,
    513: `211`,
    514: `211`,
    515: `212`,
    516: `212`,
    517: `212`,
    518: `214`,
    519: `214`,
    52: `18`,
    520: `215`,
    521: `215`,
    522: `215`,
    523: `216`,
    524: `216`,
    525: `217`,
    526: `218`,
    527: `218`,
    528: `219`,
    529: `219`,
    53: `18`,
    530: `219`,
    531: `219`,
    532: `219`,
    533: `219`,
    534: `219`,
    535: `219`,
    536: `219`,
    537: `219`,
    538: `220`,
    539: `220`,
    54: `18`,
    540: `221`,
    541: `222`,
    542: `222`,
    543: `222`,
    544: `223`,
    545: `224`,
    546: `225`,
    547: `225`,
    548: `226`,
    549: `227`,
    55: `18`,
    550: `227`,
    551: `227`,
    552: `228`,
    553: `228`,
    554: `229`,
    555: `229`,
    556: `229`,
    557: `229`,
    558: `229`,
    559: `229`,
    56: `18`,
    560: `230`,
    561: `230`,
    562: `231`,
    563: `232`,
    564: `234`,
    565: `234`,
    566: `235`,
    567: `235`,
    568: `236`,
    569: `236`,
    57: `18`,
    570: `236`,
    571: `238`,
    572: `238`,
    573: `239`,
    574: `239`,
    575: `239`,
    576: `240`,
    577: `240`,
    578: `241`,
    579: `242`,
    58: `18`,
    580: `242`,
    581: `243`,
    582: `243`,
    583: `243`,
    584: `243`,
    585: `243`,
    586: `243`,
    587: `243`,
    588: `243`,
    589: `243`,
    59: `18`,
    590: `243`,
    591: `244`,
    592: `244`,
    593: `245`,
    594: `246`,
    595: `246`,
    596: `246`,
    597: `247`,
    598: `248`,
    599: `249`,
    6: `2`,
    60: `18`,
    600: `249`,
    601: `250`,
    602: `251`,
    603: `251`,
    604: `251`,
    605: `252`,
    606: `252`,
    607: `253`,
    608: `253`,
    609: `253`,
    61: `18`,
    610: `253`,
    611: `253`,
    612: `253`,
    613: `254`,
    614: `254`,
    615: `255`,
    616: `256`,
    617: `258`,
    618: `258`,
    619: `259`,
    62: `18`,
    620: `259`,
    621: `260`,
    622: `260`,
    623: `260`,
    624: `262`,
    625: `262`,
    626: `263`,
    627: `263`,
    628: `264`,
    629: `265`,
    63: `18`,
    630: `270`,
    631: `270`,
    632: `270`,
    633: `270`,
    634: `271`,
    635: `271`,
    636: `271`,
    637: `272`,
    638: `273`,
    639: `274`,
    64: `18`,
    640: `274`,
    641: `275`,
    642: `275`,
    643: `276`,
    644: `276`,
    645: `277`,
    646: `277`,
    647: `277`,
    648: `277`,
    649: `277`,
    65: `18`,
    650: `277`,
    651: `277`,
    652: `277`,
    653: `277`,
    654: `277`,
    655: `277`,
    656: `277`,
    657: `277`,
    658: `277`,
    659: `277`,
    66: `18`,
    660: `277`,
    661: `277`,
    662: `277`,
    663: `277`,
    664: `277`,
    665: `277`,
    666: `277`,
    667: `277`,
    668: `277`,
    669: `277`,
    67: `18`,
    670: `277`,
    671: `277`,
    672: `277`,
    673: `277`,
    674: `277`,
    675: `277`,
    676: `277`,
    677: `277`,
    678: `277`,
    679: `277`,
    68: `18`,
    680: `277`,
    681: `277`,
    682: `277`,
    683: `277`,
    684: `277`,
    685: `277`,
    686: `277`,
    687: `277`,
    688: `277`,
    689: `277`,
    69: `18`,
    690: `277`,
    691: `277`,
    692: `277`,
    693: `277`,
    694: `277`,
    695: `277`,
    696: `277`,
    697: `277`,
    698: `277`,
    699: `277`,
    7: `2`,
    70: `18`,
    700: `277`,
    701: `277`,
    702: `277`,
    703: `277`,
    704: `277`,
    705: `277`,
    706: `277`,
    707: `277`,
    708: `277`,
    709: `277`,
    71: `18`,
    710: `277`,
    711: `277`,
    712: `277`,
    713: `277`,
    714: `277`,
    715: `277`,
    716: `277`,
    717: `277`,
    718: `277`,
    719: `277`,
    72: `18`,
    720: `277`,
    721: `277`,
    722: `277`,
    723: `277`,
    724: `277`,
    725: `277`,
    726: `277`,
    727: `277`,
    728: `277`,
    729: `277`,
    73: `18`,
    730: `277`,
    731: `277`,
    732: `277`,
    733: `277`,
    734: `277`,
    735: `277`,
    736: `277`,
    737: `277`,
    738: `277`,
    739: `277`,
    74: `18`,
    740: `277`,
    741: `277`,
    742: `277`,
    743: `277`,
    744: `277`,
    745: `277`,
    746: `277`,
    747: `277`,
    748: `277`,
    749: `277`,
    75: `18`,
    750: `277`,
    751: `277`,
    752: `277`,
    753: `277`,
    754: `277`,
    755: `277`,
    756: `277`,
    757: `277`,
    758: `277`,
    759: `277`,
    76: `18`,
    760: `277`,
    761: `277`,
    762: `277`,
    763: `277`,
    764: `277`,
    765: `277`,
    766: `277`,
    767: `277`,
    768: `277`,
    769: `277`,
    77: `19`,
    770: `277`,
    771: `277`,
    772: `277`,
    773: `277`,
    774: `277`,
    775: `277`,
    776: `277`,
    777: `277`,
    778: `277`,
    779: `277`,
    78: `19`,
    780: `277`,
    781: `277`,
    782: `277`,
    783: `277`,
    784: `277`,
    785: `277`,
    786: `277`,
    787: `277`,
    788: `277`,
    789: `277`,
    79: `19`,
    790: `277`,
    791: `277`,
    792: `277`,
    793: `277`,
    794: `277`,
    795: `277`,
    796: `277`,
    797: `277`,
    798: `277`,
    799: `277`,
    8: `2`,
    80: `20`,
    800: `277`,
    801: `277`,
    802: `277`,
    803: `277`,
    804: `277`,
    805: `277`,
    806: `277`,
    807: `277`,
    808: `277`,
    809: `277`,
    81: `20`,
    810: `277`,
    811: `277`,
    812: `277`,
    813: `277`,
    814: `277`,
    815: `277`,
    816: `277`,
    817: `277`,
    818: `277`,
    819: `277`,
    82: `20`,
    820: `277`,
    821: `277`,
    822: `277`,
    823: `277`,
    824: `277`,
    825: `277`,
    826: `277`,
    827: `277`,
    828: `277`,
    829: `277`,
    83: `20`,
    830: `277`,
    831: `277`,
    832: `277`,
    833: `277`,
    834: `277`,
    835: `277`,
    836: `277`,
    837: `277`,
    838: `277`,
    839: `277`,
    84: `20`,
    840: `277`,
    841: `277`,
    842: `277`,
    843: `277`,
    844: `277`,
    845: `277`,
    846: `277`,
    847: `277`,
    848: `277`,
    849: `277`,
    85: `20`,
    850: `277`,
    851: `277`,
    852: `277`,
    853: `277`,
    854: `277`,
    855: `277`,
    856: `277`,
    857: `277`,
    858: `277`,
    859: `277`,
    86: `20`,
    860: `277`,
    861: `277`,
    862: `277`,
    863: `277`,
    864: `277`,
    865: `277`,
    866: `277`,
    867: `277`,
    868: `277`,
    869: `277`,
    87: `20`,
    870: `277`,
    871: `277`,
    872: `277`,
    873: `277`,
    874: `277`,
    875: `277`,
    876: `277`,
    877: `277`,
    878: `277`,
    879: `277`,
    88: `20`,
    880: `277`,
    881: `277`,
    882: `277`,
    883: `277`,
    884: `277`,
    885: `277`,
    886: `277`,
    887: `277`,
    888: `277`,
    889: `277`,
    89: `20`,
    890: `277`,
    891: `277`,
    892: `277`,
    893: `277`,
    894: `277`,
    895: `277`,
    896: `277`,
    897: `277`,
    898: `277`,
    899: `277`,
    9: `2`,
    90: `20`,
    900: `277`,
    901: `277`,
    902: `277`,
    903: `277`,
    904: `277`,
    905: `277`,
    906: `277`,
    907: `277`,
    908: `277`,
    909: `277`,
    91: `20`,
    910: `277`,
    911: `277`,
    912: `277`,
    913: `277`,
    914: `277`,
    915: `277`,
    916: `277`,
    917: `277`,
    918: `277`,
    919: `277`,
    92: `20`,
    920: `277`,
    921: `277`,
    922: `277`,
    923: `277`,
    924: `277`,
    925: `277`,
    926: `277`,
    927: `277`,
    928: `277`,
    929: `277`,
    93: `20`,
    930: `277`,
    931: `277`,
    932: `277`,
    933: `277`,
    934: `277`,
    935: `277`,
    936: `277`,
    937: `277`,
    938: `277`,
    939: `277`,
    94: `20`,
    940: `277`,
    941: `277`,
    942: `277`,
    943: `277`,
    944: `277`,
    945: `277`,
    946: `277`,
    947: `277`,
    948: `277`,
    949: `277`,
    95: `20`,
    950: `277`,
    951: `277`,
    952: `277`,
    953: `277`,
    954: `277`,
    955: `277`,
    956: `277`,
    957: `277`,
    958: `277`,
    959: `277`,
    96: `20`,
    960: `277`,
    961: `277`,
    962: `277`,
    963: `277`,
    964: `277`,
    965: `277`,
    966: `277`,
    967: `277`,
    968: `277`,
    969: `277`,
    97: `20`,
    970: `277`,
    971: `277`,
    972: `277`,
    973: `277`,
    974: `277`,
    975: `277`,
    976: `277`,
    977: `277`,
    978: `277`,
    979: `277`,
    98: `22`,
    980: `277`,
    981: `277`,
    982: `277`,
    983: `277`,
    984: `277`,
    985: `277`,
    986: `277`,
    987: `277`,
    988: `277`,
    989: `277`,
    99: `24`,
    990: `277`,
    991: `277`,
    992: `277`,
    993: `277`,
    994: `277`,
    995: `277`,
    996: `277`,
    997: `277`,
    998: `277`,
    999: `277`
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
  warnings: [`Step 2 calls a remote object at /app/index.rsh:319:54:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates a child contract and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:365:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:297:28:after expr stmt semicolon',
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
  "Child_grant": Child_grant,
  "Child_ready": Child_ready,
  "Child_subscribe": Child_subscribe,
  "Master_new": Master_new,
  "Master_setup": Master_setup
  };
export const _APIs = {
  Child: {
    announce: Child_announce,
    grant: Child_grant,
    ready: Child_ready,
    subscribe: Child_subscribe
    },
  Master: {
    new: Master_new,
    setup: Master_setup
    }
  };
