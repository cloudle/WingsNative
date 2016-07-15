import Immutable from 'immutable';
import {
  IncreaseCounter,
} from '../actions';

import { projects } from '../../utils/mock/project';

const initialState = Immutable.Map({
  all: projects,
});

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}