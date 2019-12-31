import React from 'react';

class Poem extends React.Component {
    state = {
        colorToggle: false
    };

  render(){
    let {title, content, author} = this.props.poem;

    return (
      <div style={{color: this.state.colorToggle ?'blue' :'black'}}
           onClick={() => {
               this.setState(prevState => ({
                   colorToggle: !prevState.colorToggle})
               );

               this.props.handleClickLikedPoems(this.props.poem);
           }}>
          
        <h3>{title}</h3>
        <p>{content}</p>
        <strong>- {author}</strong>
      </div>
    ); 
  }
}

export default Poem;
