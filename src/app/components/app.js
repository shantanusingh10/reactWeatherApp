import React,{ Component } from 'react';
import SearchBar from '../containers/searchBar';
import WeatherList from '../containers/weather_list'

export default class App extends Component {
	
	render(){
		return(
			<div id="container">
				<SearchBar />
				<WeatherList />
			</div>);
	}
}