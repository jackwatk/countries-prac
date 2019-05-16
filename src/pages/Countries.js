import React, { Component } from 'react';
import countries from '../data/countries.json'
import { Link } from 'react-router-dom';

class Countries extends Component {


 
  render() {

    return (
      <div class="countries-container">
        <h1>
          Countries
        </h1>
        <div>
          {countries.map((country, index) => {
            return (
              <div key ={index} className="country">
                <p>
                {country.flag}
                </p>
                <p><Link to={`/${country.cca3}`}>
                {country.name.common}
                </Link></p>
              </div>
            )
            
          })}
        </div>


      </div>
    );
  }
}

export default Countries;