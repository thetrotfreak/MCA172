const DataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todo: state.todo.concat(action.payload) };
    case "UPDATE_TODO":
      return {
        ...state,
        todoName: action.todoName,
        todo: state.todo.filter((list) => list !== action.payload),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todo: state.todo.filter((list) => list !== action.payload),
      };
    case "NAME_TODO":
      return { ...state, todoName: action.payload };
    default:
      return state;
  }
};

export default DataReducer;
