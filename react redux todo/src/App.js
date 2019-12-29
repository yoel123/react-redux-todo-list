import React, { Component } from 'react';
import './App.css';
import List from './components/ylist';
import { connect } from 'react-redux';
import {addTodo,todoDelete} from './actions/todo_actions';

 class App extends Component {
  constructor(props) 
  {
    super(props);
    this.state = {
	term: ''};
  }//end constructor

  on_change = (event) => 
  {
    this.setState({ term: event.target.value });
  }//end on_change
  
  on_deleate = (name,props) => 
  {
	//console.log(todoDelete);
	todoDelete.payload = name;
	props.dispatch(todoDelete);
  }//end on_deleate

  on_submit = (event,props) => 
  {
	event.preventDefault();  
	//console.log(addTodo);
	addTodo.payload = this.state.term;
	props.dispatch(addTodo);
	this.setState({ term: '' });
  }//end on_submit

  render() 
  {
    return (
      <div>
        <form className="App" onSubmit={
			(e) =>
				{
					this.on_submit(e,this.props)
				}
			}>
          <input value={this.state.term} onChange={this.on_change} />
          <button>Submit</button>
        </form>
        <List  that={this}/>
      </div>
    );
  }//end render
  
  
}
const mapStateToProps = (state) => { 
	return {
		todos: state.todos
	}; 
};


export default connect(mapStateToProps)(App);