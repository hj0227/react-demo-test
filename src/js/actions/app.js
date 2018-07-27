import assign from 'object-assign';

import {
    LAST_NUM
} from '../consts/app';

export function calculateNum(a, b, index) {
    return (dispatch, getState) => {
        let numberShow;
        switch (index) {
            case 0://加
                numberShow = parseFloat(a) + parseFloat(b);
                break;
            case 1://减
                numberShow = parseFloat(a) - parseFloat(b);
                break;
            case 2://乘
                numberShow = parseFloat(a) * parseFloat(b);
                break;
            case 3://除
                numberShow = parseFloat(a) / parseFloat(b);
                break;
            default:
                numberShow = 0;
        }
        
        dispatch({
            type: LAST_NUM,
            lastNum: numberShow,
        })
    }
}



