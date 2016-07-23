import * as actions from '../actions';

export function increaseCounter (event, amount = 1) {
  return { type: actions.IncreaseCounter, amount };
}

export function updateScene (event, scene) {
  return { type: actions.UpdateScene, scene };
}

export function updateDrawer (event, drawer) {
  return { type: actions.UpdateDrawer, drawer };
}