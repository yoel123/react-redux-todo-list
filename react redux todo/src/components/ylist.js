import React from 'react';
import {connect} from 'react-redux';
const List = props => (
  <ul>
    {
      props.todos.map((item, index) => 
		(
	
		  <li key={index}>
			  <span>{item} </span>
		  <button onClick={() => 
			{ props.that.on_deleate(item,props.that.props)}
		  }>x</button>
		  
		  </li>
		)
	  )//end map
    }
  </ul>
);

// inject the redux state variables as props to the component
const mapStateToProps = (state) => 
{ 
	console.log('------List:mapStateToProps-------');
	console.log(state);
	return state.todos; 
};


export default connect(mapStateToProps)(List);