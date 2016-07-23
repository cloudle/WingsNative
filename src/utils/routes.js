import * as appConst from './const';
import Greeting from '../scenes/greeting';
import Home from '../scenes/home/home';
import About from '../scenes/about/about';
import SignIn from '../scenes/sign';
import Sample from '../scenes/sample/sample';
import ProjectList from '../scenes/project/list';
import ProjectDetail from '../scenes/project/detail';

import { buttons as leftButtons } from '../share/leftButtons';

export let greeting = {
  title: 'Greeting',
  component: Greeting,
  hideNavBar: true,
  disableDrawer: true,
  containerStyle: {
    backgroundColor: appConst.mainBlue,
  }
};

export let signIn = {
  title: 'Sign In',
  component: SignIn,
  hideNavBar: true,
  disableDrawer: true,
};

export let home = {
  title: 'Home',
  component: Home,
};

export let about = {
  title: 'About',
  component: About,
};

export let sample = {
  title: 'Sample',
  component: Sample,
};

export let projectList = {
  title: 'DỰ ÁN',
  component: ProjectList,
  leftButton: leftButtons.projectSearch,
};

export let projectDetail = {
  title: 'CHI TIẾT',
  component: ProjectDetail,
};