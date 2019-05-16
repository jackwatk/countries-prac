import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import countries from '../data/countries'

class Borders extends Component {
    state = {
        borders: []
    }

  componentDidUpdate(prevProp){
    const prevBorders = prevProp.country.borders
    const currentBorders = this.props.country.borders
    if(prevBorders !== currentBorders){
        this.setState({
            borders: currentBorders,
        })
    }
  }
    getCountryName = (code) => {
        let country = countries.filter((country => country.cca3 === code))[0]
        return <p>{country.name.common}{country.flag}</p>
    }  
    
    

    render() {
        const {borders} = this.state
        return (<div>
            <ul>
            {borders && borders.map((border, index) => {
            return <li key={index}>
                <Link to={`/${border}`}>
                {this.getCountryName(border)}
                </Link>
                </li>
            })}
            </ul>
            </div>
        );
    }
}

export default Borders;