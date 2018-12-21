const defaultState = {
  inputValue: 'todo',
  list:[]
}


export default (state = defaultState , action) => {
  if(action.type === 'change_input_value'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if(action.type === 'add_item_list'){
    const newState =  JSON.parse(JSON.stringify(state));
    newState.list.push(state.inputValue);
    return newState;
  }
  return state;
}