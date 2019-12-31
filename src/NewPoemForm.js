import React from 'react';

class NewPoemForm extends React.Component {



  render(){

    return (
      <div className="new-poem">
        <form onSubmit={this.props.addPoem} className="new-poem-form">
          <input name="title" onChange={(e) => this.props.editFormValue(e)} placeholder="Name your masterpiece..." />
          <textarea name="content" onChange={(e) => this.props.editFormValue(e)} placeholder="Your masterpiece belongs here..." />
          <input type="submit" value="Share your masterpiece"/>
        </form>
      </div>
    ); 
  }
}

export default NewPoemForm;