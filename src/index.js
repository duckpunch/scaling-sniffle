import React from 'react';
import godash from 'godash';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import {render} from 'react-dom';

import App from './containers/App';


const game1 = `(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Chinese]SZ[19]KM[7.50]TM[7200]
OT[3x60 byo-yomi]PW[AlphaGo]PB[Lee Sedol]BR[9d]DT[2016-03-09]EV[Google DeepMind Challenge Match]
RO[Game 1]PC[Seoul, Korea]WT[Computer]BT[Human]SO[https://gogameguru.com/]RE[W+Resign]
;B[qd];W[dd];B[pq];W[dp];B[fc];W[cf];B[ql];W[od];B[ld];W[qc];B[rc];W[pc];B[re]
;W[of];B[pg];W[og];B[ph];W[id];B[lf];W[oh];B[pi];W[lh];B[kh];W[ke];B[le];W[lg]
;B[kg];W[kf];B[ne];W[oe];B[jc];W[ic];B[jd];W[ie];B[je];W[jf];B[if];W[jg];B[li]
;W[mi];B[hf];W[ih];B[mb];W[gd];B[ki];W[mj];B[kk];W[ib];B[ob];W[ml];B[lm];W[nc]
;B[nb];W[kb];B[lc];W[mm];B[ln];W[kl];B[ll];W[lk];B[jj];W[jl];B[hj];W[hi];B[gj]
;W[gf];B[ii];W[jh];B[ij];W[mn];B[lo];W[mo];B[lp];W[mp];B[lq];W[mq];B[im];W[qo]
;B[fq];W[gg];B[cn];W[dn];B[dm];W[fp];B[gp];W[gq];B[fr];W[co];B[en];W[do];B[ep]
;W[cm];B[dl];W[lr];B[kr];W[rb];B[jb];W[ja];B[mf];W[mh];B[nd];W[qj];B[pj];W[qk]
;B[pl];W[pk];B[ok];W[rh];B[rl];W[qf];B[ri];W[rf];B[pf];W[qe];B[qh];W[cc];B[bn]
;W[bm];B[bl];W[bo];B[rg];W[mr];B[po];W[jr];B[kq];W[pn];B[oo];W[qp];B[on];W[pp]
;B[op];W[qq];B[or];W[pr];B[oq];W[pd];B[qr];W[rr];B[ps];W[rs];B[rn];W[ro];B[qn]
;W[so];B[cl];W[an];B[ks];W[om];B[ol];W[ci];B[hh];W[hg];B[dr];W[dj];B[bq];W[cq]
;B[cr];W[bp];B[dq];W[br];B[cp];W[ap];B[ek];W[fi];B[bj];W[bi];B[pb];W[qb];B[sf]
;W[rd];B[ai];W[ah];B[aj];W[bh];B[gi];W[fj];B[fk];W[oc];B[mc];W[cj];B[al];W[nm]
;B[pm];W[aq];B[gh];W[fh])`

const initialState = {
    variation: godash.sgfToVariation(game1),
    currentMove: 0,
};

function currentMove(state = 0, action) {
    switch(action.type) {
        case 'UPDATE_CURRENT_MOVE':
            return action.currentMove;
    }
    return state;
}

function variation(state = null, action) {
    return state;
}

const reducers = combineReducers({currentMove, variation});
const store = createStore(reducers, initialState);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
