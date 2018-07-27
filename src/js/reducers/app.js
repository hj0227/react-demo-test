import { LAST_NUM } from '../consts/app';
import assign from 'object-assign';

var initialState = {
	 lastNum:0,
};

export default function app(state = initialState, action) {
	switch (action.type) {
		case LAST_NUM:
			return assign({}, state, {
				lastNum: action.lastNum,
			});
		default:
			return state;
	}
}