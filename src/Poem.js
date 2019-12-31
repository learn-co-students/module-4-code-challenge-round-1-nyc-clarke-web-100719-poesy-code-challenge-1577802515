import React from 'react';

class Poem extends React.Component {
  render(){
    
    return (
      
      <div >
      <div onClick={this.props.handleRead} style={{color: this.props.read ? "black" : "white"}}>
        <h3>{this.props.poeem.title}</h3>
     <p>{this.props.poeem.content}</p>
    <strong>{this.props.poeem.author}</strong>
      </div>

      </div>
    ); 
  }
}

export default Poem;
