import React from 'react';
import Poem from './Poem';

class PoemsContainer extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/poems')
        .then(data => data.json())
        .then(console.log)
        .catch(console.error)
  }


  render(){
    return (
      <div className="poems-container">
        {
         /* render poems here*/
        }
      </div>
    ); 
  }
}

export default PoemsContainer;