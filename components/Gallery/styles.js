import { Dimensions } from 'react-native';

module.exports = {
	displayImages:{
		height:Dimensions.get('window').width / 4,
		width:Dimensions.get('window').width / 4
	},
	container:{
		flex:1,
		flexDirection:'row',
		flexWrap:'wrap',
		top:80
	},
	backBtn: {
		left:5
	}
}
