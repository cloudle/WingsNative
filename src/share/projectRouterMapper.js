import React, { Component } from 'react';

import {
	View,
	Text,
	StyleSheet,
} from 'react-native'

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from '../utils/fontello';
import ResponsibleTouchArea from '../component/ResponsibleTouchArea';

const styles = StyleSheet.create({
	backIcon: {
		color: 'white',
		padding: 5,
	},
	menuIcon: {
		color: 'white',
	},
	areaWrapper: {
		flex: 1,
		// backgroundColor: 'red',
		justifyContent: 'center'
	},
	title: {
		color: 'white',
	}
});

export default routerMapper = {
	LeftButton: (route, navigator, index, navState) => {
		return <View style={styles.areaWrapper}>
			<ResponsibleTouchArea
				wrapperStyle={{marginLeft: 5}}
				innerStyle={{padding: 7}}
				staticRipple={true} onPress={() => navigator.pop()}>
				<Text style={styles.backIcon}>
					<Ionicon name="ios-search" style={{fontSize: 24}}/>
				</Text>
			</ResponsibleTouchArea>
		</View>
	},
	RightButton: (route, navigator, index, navState) => {
		return <View style={[styles.areaWrapper, {marginRight: 10, flexDirection: 'row'}]}>
			<ResponsibleTouchArea
				innerStyle={{padding: 10, paddingRight: 8, paddingBottom: 8}}
				staticRipple={true}>
				<Text style={styles.menuIcon}>
					<Icon name="appbar-globe" style={{fontSize: 22}}/>
				</Text>
			</ResponsibleTouchArea>
			<ResponsibleTouchArea
				innerStyle={{padding: 10, paddingRight: 8}}
				staticRipple={true}>
				<Text style={styles.menuIcon}>
					<Icon name="menu" style={{fontSize: 22}}/>
				</Text>
			</ResponsibleTouchArea>
		</View>
	},
	Title: (route, navigator, index, navState) => {
		return <View style={styles.areaWrapper}>
			<Text style={styles.title}>{route.title}</Text>
		</View>
	},
};