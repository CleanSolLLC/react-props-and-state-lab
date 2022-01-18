import React from 'react'
import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    return (
      this.props.pets.map((petDetails, idx) => {
        return <div className="ui cards">
          <Pet pet={petDetails} key={idx} onAdoptPet={this.props.onAdoptPet}/>
        </div>
      })

    )
  };
};

export default PetBrowser
