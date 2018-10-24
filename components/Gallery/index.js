import React, {Component} from 'react';
import { ActivityIndicator, Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import keys from '../../config/keys';

export default class Gallery extends Component {
   constructor(props) {
      super(props);

      this.state = {
         search: this.props.search,
         images: [],
			renderedImages:[],
			display:false,
			curr:null
      }
		this._fetchImages = this._fetchImages.bind(this)
		this._renderImages = this._renderImages.bind(this)
   }

   static defaultProps = {
      search: null
   }

   _fetchImages() {
		let out = [];
      fetch(`https://pixabay.com/api/?key=${keys.pixabay}&q=${encodeURI(this.state.search)}`).then(response => response.json()).then(response => {

       	// console.log(response.hits[0])

         response.hits.forEach(i => {
            out.push(i.webformatURL);
         });
      }).catch(e => console.log(e))
		this.setState({images:out})
   }

   _renderImages() {

		let {images} = this.state;
      let out = images.map(i => {
			return(
			<TouchableOpacity key={i} style={styles.displayImages} onPress={()=>this.setState({shown:true,curr:i})}>
				<Image  source={{uri: i}} style={styles.displayImages}/>
			</TouchableOpacity>
			)
		});

		if(!out[0]){
			out.push(<Text key='boop'>Sorry, your search took too long to process. Try something else!</Text>)
		}


		this.setState({renderedImages:out});
	}

   componentDidMount() {
      this._fetchImages();
		setTimeout(() => {
			this._renderImages();
		}, 1000)
	}

	componentWillReceiveProps(nextProps){
		console.log(nextProps)
		this.setState({search:nextProps.search});
		setTimeout(() => {
			this.componentWillMount();
		}, 100)
	}

   render() {
      let { renderedImages } = this.state;

		if (this.state.display) {
			return (
				<View style={styles.container}>
					<Button
						onPress={this.setState({shown:false})}
						title="Back"
						color="cyan"
						style={styles.backBtn}
					>

					</Button>
				</View>
			)
		}
      return (
				<View style={styles.container}>
					{!renderedImages[0] && <ActivityIndicator />}
					{renderedImages[0] && renderedImages}
				</View>
		)
	}
}

const styles = StyleSheet.create(require('./styles'))

Gallery.propTypes = {
	search: PropTypes.string
}
