import React from 'react';

class NewPoemForm extends React.Component {
  render(){
    return (
      <div className="new-poem">
        <form className="new-poem-form" onSubmit={this.props.handleSubmit}>
          <input placeholder="Name your masterpiece..." name="title" />
          <textarea placeholder="Your masterpiece belongs here..." name="content" />
          <input type="submit" value="Share your masterpiece"/>
        </form>
      </div>
    ); 
  }
}

export default NewPoemForm;