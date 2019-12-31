import React from 'react';
import Poem from './Poem';

class PoemsContainer extends React.Component {
  render(){

    return (
      <div className="poems-container">
        {
         this.props.poems !== null ? this.props.poems.map(poem => <Poem  poeem={poem} key={poem.id} handleRead={this.props.handleRead} read={this.props.read}/>) : ""
        }
      </div>
    ); 
  }
}

export default PoemsContainer;