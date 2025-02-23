import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeCountryId: countryAndCapitalsList[0].id}
  onChangeCapital = event => {
    this.setState({activeCountryId: event.target.value})
  }
  getCountry = () => {
    const {activeCountryId} = this.state
    const activeCountry = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === activeCountryId,
    )
    return activeCountry.country
  }
  render() {
    const {activeCountryId} = this.state
    const country = this.getCountry(activeCountryId)
    return (
      <div className="bg-container">
        <div className="card-app-container">
          <h1 className="app-description">Countries And Capitals</h1>
          <div className="class-container">
            <select
              className="select-tab"
              onChange={this.onChangeCapital}
              value={activeCountryId}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option key={eachCountry.id} value={eachCountry.id}>
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="option-description"> is capital of which country?</p>
          </div>
          <p className="country-name">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
