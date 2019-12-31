import React from 'react';

class LoginForm extends React.Component {
  render(){
    return (
      <div className="login">
        <form className="login-form" onSubmit={this.props.handleSubmit}>
          <input placeholder="Enter a username..." name="user"/>
          <input type="submit" value="Log In"/>
        </form>
      </div>
    ); 
  }
}

export default LoginForm;