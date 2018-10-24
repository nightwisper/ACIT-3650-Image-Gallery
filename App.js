import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Canvas from './components/Canvas';

export default class App extends React.Component {
   render() {
      return (
			<View style={styles.container}>
				<Canvas />
			</View>
		);
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   }
});
