import React, { Component } from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';

import Gallery from '../Gallery';

export default class Canvas extends Component {
	constructor()	{
		super();
		this.state = {
			search:'flower'
		}
	}

	search(text){
		this.setState({search:text});
	}

	render() {
		return(
			<ScrollView>
				<TextInput
					style={styles.input}
					returnKeyType='search'
					placeholder="Search"
					onEndEditing={(e) => {
						this.search(e.nativeEvent.text);
					}}
				></TextInput>
				<Gallery search={this.state.search} />
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create(require('./styles'));
