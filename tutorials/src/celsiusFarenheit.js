import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const scale = {
    Celsius: "Celsius",
    Farenheit: "Farenheit"
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            scale: 'c',
        };
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFarenheitChange = this.handleFarenheitChange.bind(this);
    }

    handleCelsiusChange(e) {
        this.setState({
            temperature: e.target.value,
            scale: 'c',
        })
    }

    handleFarenheitChange(e) {
        this.setState({
            temperature: e.target.value,
            scale: 'f'
        })
    }

    render() {
        const temperature = this.state.temperature;
        const varyTemperature = this.state.scale;
        let temperatureCelsius;
        let temperatureFarenheit;
        if (varyTemperature === 'c') {
            temperatureFarenheit = toFahrenheit(temperature);
            temperatureCelsius = temperature;
        } else {

            temperatureCelsius = toCelsius(temperature);
            temperatureFarenheit = temperature;
        }

        debugger;


        return (
            <div>
                <TemperatureHandler scale={scale.Celsius} onTemperatureChange={this.handleCelsiusChange}
                                    temperature={temperatureCelsius}/>
                <TemperatureHandler scale={scale.Farenheit} onTemperatureChange={this.handleFarenheitChange}
                                    temperature={temperatureFarenheit}/>
                <BoilingPoint currentTemperature={temperature} currentTemp={varyTemperature}/>
                <ShowBothTemperatures celsius={temperatureCelsius} farenheit={temperatureFarenheit}/>
            </div>

        )
    }
}

function ShowBothTemperatures(props) {
    const celsius = props.celsius ? props.celsius : '0';
    const farenheit = props.farenheit;
    return (
        <div>
            <h3>Celsius:{celsius}</h3>
            <h2>Farenheit:{farenheit}</h2>
        </div>
    )
}

class TemperatureHandler extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e);
    }

    render() {
        const scale = this.props.scale;
        const temperature = this.props.temperature;
        return (
            <fieldset>
                <legend>Entered temperature in {scale}</legend>
                <input onChange={this.handleChange}/>
            </fieldset>
        )
    }
}

function BoilingPoint(props) {
    let temperature = props.currentTemperature;
    const scale = props.currentTemp;
    if (scale !== 'c') {
        temperature = toCelsius(temperature);
    }
    return temperature >= 100 ? <div>Water is boiling</div> : <div>Water is not boiling</div>
}

ReactDOM.render(<Calculator/>, document.getElementById('root'));








/**
 * Created by Vladimir on 12/2/2017.
 */
