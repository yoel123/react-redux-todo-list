import React, { Component } from 'react';
import './App.css';
import List from './components/ylist';

 class App extends Component {
  constructor(props) 
  {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }//end constructor

  on_change = (event) => 
  {
    this.setState({ term: event.target.value });
  }//end on_change
  
  on_deleate = (name) => 
  {
    this.setState({
        items: this.state.items.filter(el => el !== name)
    })
  }//end on_deleate

  on_submit = (event) => 
  {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }//end on_submit

  render() 
  {
    return (
      <div>
        <form className="App" onSubmit={this.on_submit}>
          <input value={this.state.term} onChange={this.on_change} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} that={this}/>
      </div>
    );
  }//end render
  
  
}

export default  App;