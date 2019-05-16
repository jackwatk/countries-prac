import React from 'react';
import countries from '../data/countries.json';

function Detail2(props) {
        const id = props.match.params.id;
     
        const country = countries.filter((country =>
          country.cca3 === id
        ))
    
        return (
          <div>
            <p>{country[0].capital}</p>
          </div>
        );
    }

export default Detail2;
