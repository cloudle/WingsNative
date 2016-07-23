import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
	View,
	Text,
	StyleSheet
} from 'react-native';

import { styles as navigatorStyles} from './defaultRouterMapper';

class SceneTitle extends Component {
	render () {
		return <View style={[navigatorStyles.areaWrapper]}>
			<Text style={styles.title}>{this.props.scene.title}</Text>
		</View>
	}
}

function mapStateToProps (state) {
	return {
		scene: state.app.scene,
	}
}

export default connect(mapStateToProps)(SceneTitle);

const styles = StyleSheet.create({
	title: {
		color: 'white',
	}
});