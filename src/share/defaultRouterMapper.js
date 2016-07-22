import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
	View,
	Text,
	StyleSheet,
} from 'react-native'

import * as appConst from '../utils/const';
import * as textStyles from '../styles/text';

import ResponsibleTouchArea from '../component/ResponsibleTouchArea';
import LeftButtons from './LeftButtons';
import RightButtons from './RightButtons';

export const styles = StyleSheet.create({
	areaWrapper: {
		flex: 1,
		justifyContent: 'center',
		// backgroundColor: 'red',
	},

	title: {
		color: 'white',
	},
});

export default routerMapper = {
	LeftButton: (route, navigator, index, navState) => {
		return <LeftButtons navigator={navigator}/>
	},
	RightButton: (route, navigator, index, navState) => {
		return <RightButtons navigator={navigator}/>
	},
	Title: (route, navigator, index, navState) => {
		return <View style={styles.areaWrapper}>
			<Text style={styles.title}>{route.title}</Text>
		</View>
	},
};