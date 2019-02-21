import React, { Component } from 'react';
import countries from '../data/countries.json'

class Detail extends Component {
  state = {
    country: [],
  }

  componentDidMount(){
    console.log('mounting')
    let id = this.props.match.params.id;
 
    let country = countries.filter((country =>
      country.cca3 === id
    ))
    this.setState({
      country: country[0],
    })
  }

  
  render() {
 

    return (
      <div>
        <p>{this.state.country.capital}</p>

      </div>
    );
  }
}

export default Detail;