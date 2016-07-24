import React, { Component } from 'react';
import {
	View,
	Text,
	Picker,
	Animated,
} from 'react-native';

import { AppEvent } from '../entry';
import ResponsibleTouchArea from './ResponsibleTouchArea';

const emptyOptions = [
	{label: "Missing options..", value: ''},
	{label: "Set this using options prop", value: ''}];

export default class PickerRow extends Component {
	constructor (props) {
		super(props);
		this.state = {
			active: this.props.active || false,
			foldingAnimation: new Animated.Value(this.props.active ? 1 : 0),
		}
	}

	componentWillMount () {
		AppEvent.addListener('picker-row-activate', this.closePicker.bind(this));
	}

	componentWillUnmount () {
		AppEvent.removeListener('picker-row-activate', this.closePicker.bind(this));
	}

	closePicker () {
		this.setState({active: false});
	}

	togglePicker () {
		let nextStatus = !this.state.active;
		if (nextStatus === true) {
			AppEvent.emit('picker-row-activate')
		}

		this.setState({active: nextStatus});
	}

	renderPickerOptions () {
		let options = this.props.options || emptyOptions;

		return options.map((option, index) => {
			return <Picker.Item key={index} value={option.value} label={option.label}/>
		})
	}

	renderPicker () {
		if (this.state.active) {
			return <Picker
				style={this.props.pickerStyle}
				onValueChange={this.props.onValueChange}
				selectedValue={this.props.selectedValue}>
				{this.renderPickerOptions()}
			</Picker>
		}
	}

	render () {
		return <View style={this.props.containerStyle}>
			<ResponsibleTouchArea
				wrapperStyle={this.props.wrapperStyle}
				innerStyle={this.props.innerStyle}
				rippleColor="gray"
				onPress={this.togglePicker.bind(this)}>
				{this.props.children}
			</ResponsibleTouchArea>
			{this.renderPicker()}
		</View>
	}
}