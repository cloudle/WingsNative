import * as actions from '../actions';

import { initialRoute } from '../../utils/navigator';

const initialState = {
  drawerOpen: false,
  scene: initialRoute,
  counter: 0,
};

export default function (state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case actions.ToggleDrawer:
      return { ...state, drawerOpen: action.flag || !state.drawerOpen };
    case actions.UpdateScene:
      return { ...state, scene: action.scene };
    case actions.IncreaseCounter:
      return { ...state, counter: state.counte + 1 };
    default:
      return state;
  }
}