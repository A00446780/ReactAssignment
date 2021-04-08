import React, { Component } from 'react';
import coldimg from './cold.png';
import mildimg from './mild.png';
import sunnyimg from './sunny.png';
import cityimg from './city.jpg';


export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
      this.state = {
          temperature: 0,
          unit: true
      };
      this.fetchWeather();
      this.celcius = 0;
    }

    celcius
    fetchWeather() {
        fetch("https://api.openweathermap.org/data/2.5/weather?id=6324729&appid=7f040def93aec4b71df78291665ca666")
            .then(res => {
                return res.json();
            })
            .then(res => {
                var k = parseFloat(res['main']['temp'])
                var c = k - 273.0
                this.celcius = c.toFixed(2)
                this.setState({
                    temperature: c.toFixed(2)
                })
            })
    }

    toFar() {
        var c = this.state.temperature
        var f = (c * (9 / 5)) + 32;
        this.setState({
            temperature: f.toFixed(2),
            unit: false
        })
    }

    toCel() {
        var f = this.state.temperature
        var c = (f - 32) * (5 / 9);
        this.setState({
            temperature: c.toFixed(2),
            unit: true
        })
    }

  render() {
      return (
        <div className="card shadow p-3 mb-5 bg-white rounded" style={{ width: '25rem' }}>
            <div className="card-body">
                  <img src={ cityimg } className="card-img-top mb-3" alt="geek" />
                <h5 className="card-title">I live in Halifax, NS, Canada!</h5>
                <br />
                <p className="card-text">Halifax is a beautiful city situated in the East Coast of Canada in the Maritime Province of Nova Scotia.</p>
                <br />
                  <p className="card-text">
                      {this.celcius < 10.0 ? <img src={coldimg} style={{ width: '50px', height: '50px' }} alt='cold' />
                          : (this.celcius < 20.0 ? <img src={mildimg} style={{width: '50px', height: '50px'}} alt='mild' />
                              : <img src={sunnyimg} style={{width: '50px', height: '50px'}} alt='sunny' />)}
                      {this.state.temperature} &deg;{this.state.unit ? 'C' : 'F'}</p>
                  <button className="btn btn-primary" onClick={() => {
                      this.state.unit ? this.toFar() : this.toCel()
                  }}>Change to &deg;{this.state.unit ? 'F' : 'C'}</button>
            </div>
        </div>
    );
  }
}
