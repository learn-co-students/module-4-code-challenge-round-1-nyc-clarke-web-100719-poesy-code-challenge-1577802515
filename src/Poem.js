import React from 'react';

class Poem extends React.Component {

  state = {
    color: "black"
  }

changeColor = (e) => {
  if(this.state.color === "black"){
    this.setState({
      color: "blue"
    })
  }
  else{
    this.setState({
      color: "black"
    })
  }
}

  render(){
    return (
      <div onClick={(e) => this.changeColor(e)} style={{color: this.state.color}}>
      <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <strong>- {this.props.poem.author}</strong>

      </div>
    ); 
  }
}

export default Poem;
