import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Navigator,
} from 'react-native';

import * as appConst from '../utils/const';
import coreStyles from '../styles/core';
import textStyles from '../styles/text';

import ResponsibleTouchArea from '../component/ResponsibleTouchArea';
import Button from '../component/Button';
import { about, projectList } from '../utils/routes';

import Icon from '../utils/fontello';
import Ionicon from 'react-native-vector-icons/Ionicons';

export default class Sign extends Component {
  constructor (props) {
    super(props);
  }

  signInHandler () {
    this.props.navigator.push({
      ...projectList,
      pushDirection: Navigator.SceneConfigs.FadeAndroid
    });
  }

  render () {
    return <View style={styles.wrapper}>
      <Ionicon name="ios-contact" size={110} color="white"/>
      <View style={styles.builtInArea}>
        <TextInput style={styles.signInField} placeholder="Tài khoản"/>
        <TextInput style={styles.signInField} placeholder="Mật khẩu"/>
      </View>
      <View style={{marginTop: 5}}>
        <Text style={textStyles.lightBold}>Quên mật khẩu?</Text>
      </View>
      <View>
        <Button
          wrapperStyle={styles.signInButton}
          caption="ĐĂNG NHẬP" weight="600"
          onPress={this.signInHandler.bind(this)}
          debounce={250}/>
      </View>
      <View style={styles.separatorWrapper}>
        <Text style={styles.separatorText}>Hoặc</Text>
      </View>
      <View style={styles.socialArea}>
        <Button
          wrapperStyle={styles.socialSignInButton}
          caption="Facebook" weight="500"
          icon={facebookIcon}/>
        <Button
          wrapperStyle={styles.socialSignInButton}
          caption="Google" weight="500"
          icon={googleIcon}/>
      </View>
    </View>
  }
}

const FORM_SIZE = 250;
let styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingBottom: 20,
    backgroundColor: appConst.mainBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signIcon: {
    marginRight: 5,
  },
  builtInArea: {
    width: FORM_SIZE,
  },
  signInField: {
    height: 42,
    paddingLeft: 12,
    paddingRight: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: 'white',
    borderRadius: 2,
    fontSize: 14,
  },
  signInButton: {
    borderRadius: 2,
    marginTop: 20,
    width: FORM_SIZE,
  },
  separatorWrapper: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    width: 200,
    alignItems: 'center',
  },
  separatorText: {
    color: 'white',
    fontSize: 12,
    top: 7,
    paddingLeft: 5,
    paddingRight: 5,
  },
  socialArea: {
    width: FORM_SIZE + 10,
    flexDirection: 'row',
    marginTop: 15,
  },
  socialSignInButton: {
    flex: 1,
    borderRadius: 2,
    marginLeft: 5,
    marginRight: 5,
  }
});

const facebookIcon = <Icon
  name="facebook-rect"
  size={20} color="white"
  style={styles.signIcon}/>;

const googleIcon = <Icon
  name="googleplus-rect"
  size={20} color="white"
  style={styles.signIcon}/>;