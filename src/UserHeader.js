import React from 'react';

class UserHeader extends React.Component {
  render(){
    return (
      <div className="user-header">
        <h3>Welcome, {this.props.userLogin}!</h3>
        <button>Logout</button>
      </div>
    ); 
  }
}

export default UserHeader;
