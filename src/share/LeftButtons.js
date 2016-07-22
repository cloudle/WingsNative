import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

import ResponsibleTouchArea from '../component/ResponsibleTouchArea';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { styles as navigatorStyles } from './defaultRouterMapper';

class LeftButtons extends Component {
	renderBack () {
		return <ResponsibleTouchArea
			staticRipple={true} onPress={() => this.props.navigator.pop()}>
			<Text style={styles.backIcon}>
				<MaterialIcon name="chevron-left" style={{fontSize: 30}}/>
			</Text>
		</ResponsibleTouchArea>
	}

	render () {
		return <View style={navigatorStyles.areaWrapper}>
			{this.renderBack()}
		</View>
	}
}

function mapStateToProps (state) {
	return {
		scene: state.app.get('scene')
	}
}

export default connect()(LeftButtons);

const styles = StyleSheet.create({
	backIcon: {
		color: 'white',
		padding: 5,
	},
});

export const leftItems = {
	back: 'BACK',
	projectSearch: 'PROJECT-SEARCH',
};