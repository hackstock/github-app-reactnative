import React,{Component} from 'react';
import {Text, View, StyleSheet,TextInput,TouchableHighlight,ActivityIndicatorIOS} from 'react-native';
import DashboardScreen from './Dashboard';

class MainScreen extends Component{

	constructor(props){
		super(props);
		this.state = {
			username: '',
			isLoading: false,
			error: false
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
		this.setState({
			username: event.nativeEvent.text
		})
	}

	handleSubmit(){
		this.setState({
			isLoading: true
		});

		const username = this.state.username.toLowerCase().trim();
		fetch(`https://api.github.com/users/${username}`)
		.then((res) => {
			return res.json()
		})
		.then((resJson) => {

			if(resJson.name){
				this.props.navigator.push({
				title: resJson.name,
				component: DashboardScreen,
				passProps: {
					userInfo: resJson
				}
			});
			}
		})
		.catch((error) => {
			console.log('ERROR', error);
		});
	}

	render(){
		return(
			<View style={styles.container}>
			<Text style={styles.label}>Search for github user</Text>
				<TextInput style={styles.input}
				placeholder='Github Username'
				value={this.state.username}
				onChange={this.handleChange}
				/>
				<TouchableHighlight style={styles.button}
				underlayColor='white'
				onPress={this.handleSubmit }>
					<Text style={styles.buttonText}>Search Github</Text>
				</TouchableHighlight>
			</View>
			);
	}
}

const styles = StyleSheet.create({
	label: {
		alignSelf: 'center',
		color: 'white',
		fontSize: 18,
		margin: 10
	},
	container: {
		flex: 1,
		backgroundColor: 'skyblue',
		justifyContent: 'center',
		padding: 30
	},
	content:{
		color: 'white',
		fontSize: 15,
		alignSelf: 'center',
		padding: 30
	},
	input:{
		height: 50,
		backgroundColor: 'white',
		textAlign: 'center'
	},
	button:{
		backgroundColor: 'orange',
		height: 50,
		marginTop: 10,
		justifyContent: 'center'
	},
	buttonText:{
		color: 'white',
		fontSize: 20,
		alignSelf: 'center'
	}
});

export default MainScreen;