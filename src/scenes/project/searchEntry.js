import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
	View,
	ScrollView,
	Picker,
	Text,
	StyleSheet,
	Dimensions,
} from 'react-native';

import PickerRow from '../../component/PickerRow';

class ProjectSearchEntry extends Component {
	constructor (props) {
		super(props);
		this.state = {
			project: this.props.projects[0]
		}
	}

	render () {
		let projectOptions = this.props.projects.map(item => ({
			label: item.title, value: item, }));

		return <ScrollView style={styles.wrapper}>
			<PickerRow {...pickerStyles}
				options={projectOptions}
				onValueChange={(project) => this.setState({project})}>
				<View>
					<Text style={styles.pickerText}>{this.state.project.title}</Text>
				</View>
			</PickerRow>
		</ScrollView>
	}
}

function mapStateToProps (state) {
	return {
		scene: state.app.scene,
		projects: state.project.list,
	}
}

export default connect(mapStateToProps)(ProjectSearchEntry);

import * as coreStyles from '../../styles/core';

const styles = StyleSheet.create({
	wrapper: {
		...coreStyles.sceneWrapper,
	},
	groupWrapper: {
		...coreStyles.scrollView.groupWrapper
	},
	pickerWrapper: {
		borderBottomWidth: 1,
		borderStyle: 'solid',
		borderBottomColor: 'lightgray'
	},
	pickerInner: {
		padding: 10,
	},
	pickerText: {
		backgroundColor: 'transparent'
	}
});

const pickerStyles = {
	containerStyle: styles.groupWrapper,
	wrapperStyle: styles.pickerWrapper,
	innerStyle: styles.pickerInner,
};