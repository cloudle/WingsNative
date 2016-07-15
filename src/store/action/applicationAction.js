import {
  IncreaseCounter,
  UpdateScene
} from '../actions';

export function increaseCounter (event, amount = 1) {
  return { type: IncreaseCounter, amount };
}

export function updateScene (event, scene) {
  return { type: UpdateScene, scene };
}