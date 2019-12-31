import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {

  state = {
    title: "",
    content: "",
    poems: [],
    likedPoems: [],
    loggedIn: false,
    user: ""
  }


  login = (e) => {
    this.setState({
      loggedIn: true,
      user: this.state.user
    })
  }

  logoutUser = (e) => {
    this.setState({
      loggedIn: false,
      user: ""
    })
  }

  editFormValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addPoem = (e) => {
    if(this.state.loggedIn === true){
      fetch("http://localhost:3000/poems" , {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          title: this.state.title,
          content: this.state.content,
          author: this.state.user
        })
      })
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/poems").then(resp => resp.json()).then(poemList => {
      this.setState({
        poems: poemList
      })
    })
  }

  render(){
    console.log(this.state)
    return (
      <div className="app">
        <div className="sidebar">
        {
          this.state.loggedIn === true ? 
          <UserHeader logoutUser={this.logoutUser} user={this.state.user}/> 
          :
          <LoginForm editFormValue={this.editFormValue} login={this.login}/>
        }
          <NewPoemForm addPoem={this.addPoem} editFormValue={this.editFormValue}/>
        </div>
        <PoemsContainer poems={this.state.poems}/>

      </div>
    ); 
  }
}

export default App;
