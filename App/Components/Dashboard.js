import React, {Component} from 'react';
import {View,Text,StyleSheet,Image,TouchableHighlight} from 'react-native';


class DashboardScreen extends Component{
	render(){
		return(
			<View style={styles.container}>
				<Image style={styles.profileContainer}
				source={{uri: this.props.userInfo.avatar_url}}
				/>
				<View style={styles.buttonsContainer}>
					<TouchableHighlight style={styles.viewProfileButton} underlayColor='white'>
						<Text style={styles.buttonText}>View Profile</Text>
					</TouchableHighlight>

					<TouchableHighlight style={styles.viewReposButton} underlayColor='white'>
						<Text style={styles.buttonText}>View Repos</Text>
					</TouchableHighlight>

					<TouchableHighlight style={styles.viewAboutButton} underlayColor='white'>
						<Text style={styles.buttonText}>About App</Text>
					</TouchableHighlight>
				</View>
			</View>
			);
	}
}


const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: 'white'
	},
	profileContainer:{
		flex: 2
	},
	buttonsContainer:{
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'yellow'
	},
	viewProfileButton:{
		flex: 1,
		backgroundColor: 'skyblue',
		justifyContent: 'center'
	},
	viewReposButton:{
		flex: 1,
		backgroundColor: 'magenta',
		justifyContent: 'center'
	},
	viewAboutButton:{
		flex: 1,
		backgroundColor: 'orange',
		justifyContent: 'center'
	},
	buttonText:{
		color: 'white',
		fontSize: 20,
		alignSelf: 'center'
	}
});

export default DashboardScreen;