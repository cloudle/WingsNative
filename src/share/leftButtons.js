import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

import ResponsibleTouchArea from '../component/ResponsibleTouchArea';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

import { styles as navigatorStyles } from './defaultRouterMapper';
import * as routes from '../utils/routes';

class LeftButtons extends Component {
	presentProjectSearch () {
		this.props.navigator.push(routes.projectSearchEntry);
	}

	renderBack () {
		return <ResponsibleTouchArea
			staticRipple={true} onPress={() => this.props.navigator.pop()}>
			<Text style={styles.backIcon}>
				<MaterialIcon name="chevron-left" style={{fontSize: 30}}/>
			</Text>
		</ResponsibleTouchArea>
	}

	renderProjectSearch () {
		return <ResponsibleTouchArea
			wrapperStyle={{marginLeft: 5}}
			innerStyle={{padding: 7}}
			staticRipple={true}
			onPress={this.presentProjectSearch.bind(this)}>
			<Text style={styles.searchIcon}>
				<Ionicon name="ios-search" style={{fontSize: 24}}/>
			</Text>
		</ResponsibleTouchArea>
	}

	renderButtons () {
		if (this.props.scene && this.props.scene.leftButton) {
			switch (this.props.scene.leftButton) {
				case buttons.projectSearch: return this.renderProjectSearch();
			}
		}

		return this.renderBack();
	}

	render () {
		return <View style={[navigatorStyles.areaWrapper, styles.areaWrapper]}>
			{this.renderButtons()}
		</View>
	}
}

function mapStateToProps (state) {
	return {
		scene: state.app.scene
	}
}

export default connect(mapStateToProps)(LeftButtons);

const styles = StyleSheet.create({
	areaWrapper: {
		flexDirection: 'row',
	},
	backIcon: {
		color: 'white',
		padding: 5,
	},
	searchIcon: {
		color: 'white',
		paddingTop: 2, paddingBottom: 2,
		paddingLeft: 5, paddingRight: 5,
	}
});

export const buttons = {
	back: 'BACK',
	projectSearch: 'PROJECT-SEARCH',
};