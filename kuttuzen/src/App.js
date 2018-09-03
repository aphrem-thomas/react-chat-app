import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SocketClient from 'socket.io-client';

class App extends Component {
  constructor(props){
    super(props);
    var socket;
    this.state={
      myChat:[],
      theirChat:[]
    }
  }
  componentDidMount(){
    console.log("trying to connect");
    this.socket=SocketClient.connect("http://localhost:3333/");
  }
  chatSubmit(e){
    e.preventDefault();
    console.log("inside chatsubmit");
    let message=document.getElementById("textinput").value;
    this.socket.emit("chat",message);
    this.setState((prevState)=>({
      myChat:[...prevState.myChat,message]
    }))
  }
  render() {
    return (
      <div className="App">
      <div>
        chat apperes here
        <ul>
        {this.state.myChat.map((item)=>{
          return(
            <li>{item}</li>
          );
        })}
        </ul>
      </div>
        <form>
          <input type="text" id="textinput"/>
          <button onClick={this.chatSubmit.bind(this)}>submit</button>
        </form>
      </div>
    );
  }
}

export default App;
