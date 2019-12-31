import React from 'react';

class LoginForm extends React.Component {



  render(){
    console.log(this.props)
    return (
      <div className="login">
        <form onSubmit={(e) => this.props.login(e)} className="login-form">
          <input name="user" onChange={(e) => this.props.editFormValue(e)} placeholder="Enter a username..." />
          <input type="submit" value="Log In"/>
        </form>
      </div>
    ); 
  }
}

export default LoginForm;