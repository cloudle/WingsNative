import * as actions from '../actions';

import { projects } from '../../utils/mock/project';

const initialState = {
  list: projects,
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}