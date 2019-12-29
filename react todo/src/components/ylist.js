import React from 'react';

const List = props => (
  <ul>
    {
      props.items.map((item, index) => 
		(
	
		  <li key={index}>
			  <span>{item} </span>
		  <button onClick={() => 
			{ props.that.on_deleate(item)}
		  }>x</button>
		  
		  </li>
		)
	  )//end map
    }
  </ul>
);

export default List;