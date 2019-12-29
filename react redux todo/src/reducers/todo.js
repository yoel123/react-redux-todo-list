import { ADD_TODO, DEL_TDO } from '../actions/typs';

const initialState = {

  todos: ["foo","bar"]
 
};
//todo reducer
export default function(state = initialState, action) 
{
  switch (action.type) {
    case  ADD_TODO:
		console.log("------ADD_TODO reducer-------");
		console.log(action.payload);
		return {todos:[action.payload,...state.todos]};
		    
	case DEL_TDO:
		console.log("------DEL_TDO reducer-------");
		console.log(action.payload);
		return {todos:
		state.todos.filter(el => el !== action.payload)};
			
	default:
      return state;
  }

}//end default function
