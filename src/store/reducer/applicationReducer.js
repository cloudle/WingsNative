import Immutable from 'immutable';
import {
  IncreaseCounter,
  UpdateScene
} from '../actions';

import { initialRoute } from '../../utils/navigator';

const initialState = Immutable.Map({
  counter: 0,
  scene: initialRoute,
});

export default function (state = initialState, action) {
  switch (action.type) {
    case UpdateScene:
      return state.set('scene', action.scene);
    case IncreaseCounter:
      return state.set('counter', state.get('counter') + action.amount);
    default:
      return state;
  }
}