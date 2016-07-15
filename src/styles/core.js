import { StyleSheet } from 'react-native';
import * as appConst from '../utils/const';

let container = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}, heading = {
  backgroundColor: 'red',
  height: 100,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'stretch',
}, content = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'blue',
  alignSelf: 'stretch',
}, drawer = {
  shadowColor: '#000000',
  shadowOpacity: 0.8,
  shadowRadius: 3,
}, main = {
  paddingLeft: 3,
};

let verticalContainer = {
  flexDirection: 'column',
  flex: 1,
};

export let sceneWrapper = {
  paddingTop: appConst.navBarHeight - appConst.listViewMargin,
  backgroundColor: appConst.color.canvasBackground,
};

export default StyleSheet.create({
  sceneWrapper: {
    paddingTop: appConst.navBarHeight,
  },
  container,
  verticalContainer,
  heading,
  content,
  drawer,
  main,
});