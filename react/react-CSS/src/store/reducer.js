const defaultState = {
  inputValue: 'to',
  list: [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ]
}

// reducer 可以接收 state, 但是绝对不能修改 state
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  if(action.type === 'change_input_value') {
    newState.inputValue = action.value;
    return newState;
  }else if(action.type === 'add_todo_item'){
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  // console.log(state, action)
  return state;
}