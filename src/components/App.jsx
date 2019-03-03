import React from 'react';

import Info from './Info';
import Form from './Form';
import Weather from './Weather';
// eslint-disable-next-line
import PropTypes from 'prop-types';

const API_KEY = "a4cd42f91fc8da2434cfbe43d897f22f";

class App extends React.Component {

    state = {
        temp:undefined,
        city:undefined,
        sunrise:undefined,
        sunset:undefined,
        error:undefined

    }
    getWeather = async (e) => {
        e.preventDefault();
        let city = e.target.elements.city.value;
       
        if(city){
            let api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            let data = await api_url.json();
            console.log(data);



            const time = ms =>{
                var date = new Date(ms*1000);
                var hours = date.getHours();
                // Minutes part from the timestamp
                var minutes = "0" + date.getMinutes();
                // Seconds part from the timestamp
                var seconds = "0" + date.getSeconds();
                return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
            }

            
            
           
            const sunsetDate = time(data.sys.sunset);
            const sunriseDate = time(data.sys.sunrise);

            this.setState({
                temp: data.main.temp,
                city:  data.name,
                sunrise: sunriseDate,
                sunset: sunsetDate,
                error:undefined
    
            });
        } else {
            this.setState({
                temp:undefined,
                city:undefined,
                sunrise:undefined,
                sunset:undefined,
                error:"Введите название города"
            })
        }
        
    }

    render() {
        
        return (
            <div>
                
                <Info />
                <Form weatherMethod={this.getWeather} />
                <Weather
                    temp={this.state.temp}
                    city={this.state.city}
                    sunrise={this.state.sunrise}
                    sunset={this.state.sunset}
                    error={this.state.error}
                />
            </div>
            
            
            );
    }
}



export default App;