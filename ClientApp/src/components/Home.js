import React, { Component } from 'react';
import './Home.css';
import geekimg from './geek.png';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div className="card shadow p-3 mb-5 bg-white rounded" style={{width: '25rem'}}>
            <div className="card-body">
                <img src={geekimg} className="card-img-top mb-3" style={{ width: '6rem', height: '6rem' }} alt="geek" />
                <h1 className="card-title">Hi, I'm Himanshu!</h1>
                <br />
                <p className="card-text">I'm a student at Saint Mary's University, Halifax NS Canada, pursuing MSc. in Computing and Data Analytics.</p>
                <br />
                <br />
                <p className="card-text">I joined MCDA because I was determined to learn about data analytics and other technologies. I feel great being a student of MCDA!</p>
            </div>
        </div>
    );
  }
}
