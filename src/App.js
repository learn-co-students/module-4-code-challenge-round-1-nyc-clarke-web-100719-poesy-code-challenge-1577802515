import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {

    state = {
        userLogin: '',
        poems: [],
        likedPoems: []
    };

    componentDidMount() {
        fetch('http://localhost:3000/poems')
            .then(data => data.json())
            .then(data => this.setState({poems: data}))
            .catch(console.error)
    }

    handleSubmitUserLogin = (event) => {
        event.preventDefault();
        this.setState({userLogin: event.target.user.value})
    };

    handleSubmitNewPoem = (event) => {
        event.preventDefault();

        let poem = {
            id: (this.state.poems.slice(-1)[0].id + 1),
            title: event.target.title.value,
            content: event.target.content.value,
            author: this.state.userLogin
        };

        this.submitNewPoemServer(poem);

        this.setState({
            poems: [...this.state.poems, poem]
        })
    };

    handleClickLikedPoems = (objPoem) => {
        this.setState({
            likedPoems: [...this.state.likedPoems, objPoem]
        })
    };

    submitNewPoemServer = (objPoem) => {
        let config = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(objPoem)
        };

        fetch('http://localhost:3000/poems', config)
            .then(data => data.json())
            .then(console.log)
            .catch(console.error)
    };

  render(){
    return (
      <div className="app">
        <div className="sidebar">
          <LoginForm handleSubmit={this.handleSubmitUserLogin}/>
          <UserHeader userLogin={this.state.userLogin}/>
          <NewPoemForm handleSubmit={this.handleSubmitNewPoem}/>
        </div>
        <PoemsContainer poems={this.state.poems} handleClick={this.handleClickLikedPoems}/>
        <PoemsContainer poems={this.state.likedPoems}/>
      </div>
    ); 
  }
}

export default App;
