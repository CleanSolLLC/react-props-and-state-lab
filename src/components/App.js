import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all',
      }
    }
  };

  changeType = (event)=> {
   this.setState({
     filters: {
       type: event.target.value,
     }
   });
  };

  setPets = (listOfPets) => {
    this.setState({
        pets: listOfPets,
      
    });
  };

  findPets = () => {
    let url = "/api/pets" 
    if (this.state.filters.type === "all") {
      url = "/api/pets"
    } else {
      url = url + "?type=" + this.state.filters.type
    };

    fetch(url)
      .then(response => response.json())
      .then(data => this.setPets(data)); 
  };

  adoptPet = (id) => {
    let pet = this.state.pets.find(pet => pet.id === id)
    pet.isAdopted = true
  };



  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeType} onFindPetsClick={this.findPets}  />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
