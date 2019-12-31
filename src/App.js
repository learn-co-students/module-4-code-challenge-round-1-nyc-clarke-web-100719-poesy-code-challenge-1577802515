import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {
  
  state={
    poems: null,
    username: null,
    read: true
  }

  componentDidMount(){
    fetch('http://localhost:3000/poems')
    .then(resp => resp.json())
    .then(data => this.setState({poems: data}))
  }

  handleUserName=(arg)=>{
    arg.preventDefault()
    arg.persist()
    this.setState({username: arg.target[0].value})
  }

  handleLogOut=(arg)=>{
    this.setState({username: null})
  }

  handleNewPoem=(arg)=>{
    arg.preventDefault()
    arg.persist()
    if (this.state.username !==null ) {
      let hash={}
      hash["title"] = arg.target[0].value
      hash["content"]= arg.target[1].value
      hash["author"]= this.state.username
      hash["id"] = this.state.poems.length + 1 
      this.setState({
        poems: [...this.state.poems, hash]
      })
    }
  
  }

  handleRead=()=>{
    this.setState({read: !this.state.read})
  }

  render(){
    
    return (
      <div className="app">
        <div className="sidebar">
          {this.state.username === null 
           ? <LoginForm handleUserName={this.handleUserName}/>
           : <UserHeader username={this.state.username} handleLogOut={this.handleLogOut}/>
           }
          <NewPoemForm handleNewPoem={this.handleNewPoem}/>
        </div>
         <PoemsContainer poems={this.state.poems} handleRead={this.handleRead} read={this.state.read}/>
      </div>
    ); 
  }
}

export default App;
