import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

	renderWeather(cityData){
		const temps =  cityData.list.map(weather => weather.main.temp);
		const pressures =  cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const {lon,lat} = cityData.city.coord;
		
		

		return (
			<tr key={cityData.city.name}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td>
					<Chart data={temps} color="orange" units="K"/>
				</td>
				<td>
					<Chart data={pressures} color="blue" units="HPa"/>
				</td>
				<td>
					<Chart data={humidities} color="green" units="%"/>
				</td>
			</tr>
		);
	}

	render(){
		return (
				<table className="table table-hover">
					<thead>
						<tr>
							<th width="25%">City</th>
							<th width="25%">Temperature (K)</th>
							<th width="25%">Pressure (HPa)</th>
							<th width="25%">Humidity (%)</th>
						</tr>
					</thead>
					<tbody>
						{this.props.weather.map(this.renderWeather)}
					</tbody>
				</table>
		);
	}
}

function mapStateToProps({weather}){
	return {weather};
}

export default connect(mapStateToProps)(WeatherList);