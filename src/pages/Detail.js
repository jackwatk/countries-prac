import React, { Component } from 'react';
import countries from '../data/countries.json'
import Borders from './Borders'

class Detail extends Component {
  state ={
    country: [],
  }


  componentDidMount(){
    // a funtion that takes the cca3 from props and returns its country from the list
    this.getCountry();
  }

  componentDidUpdate(prevProp){
    //get the id from the current props
    const {id} = this.props.match.params;
    //get the id from the previous props
    const prevID = prevProp.match.params.id;
    // if the current cca3 code doenst match the previous cca3 code get country, set state and re-render
    if(id !== prevID){
      this.getCountry()
    }
    
  }

  getCountry = () => {
    const id = this.props.match.params.id;
    const country = countries.filter((country =>
      country.cca3 === id
    ))
    this.setState({
      country: country[0],
    })
  }

  render() {
    const {country} = this.state

    return (
      <div>
        <h3>{country.name && country.name['common']}{country.flag}</h3>
        <h5>{country.capital}</h5>
        <Borders country={country} />
      </div>
    );
  }
}

export default Detail;