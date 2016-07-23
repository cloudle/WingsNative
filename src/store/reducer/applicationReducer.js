import * as actions from '../actions';

import { initialRoute } from '../../utils/navigator';

const initialState = {
  counter: 0,
  scene: initialRoute,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.UpdateScene:
      return { ...state, scene: action.scene };
    case actions.IncreaseCounter:
      return { ...state, counter: state.counte + 1 };
    default:
      return state;
  }
}