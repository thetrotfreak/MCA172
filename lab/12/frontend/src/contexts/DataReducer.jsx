const DataReducer = (state, action) => {
    switch (action.type) {
       case "POST_FILE" :
           return {...state, fileContent:{...state.fileContent, title:action.title, content:action.content}}
       case "GET_CONTENT": 
           return {...state, content:action.content}
       case "DELETE_TODO" :
                return {...state, todo: state.todo.filter((list) => list !== action.payload)}
       case "NAME_TODO" :
           return {...state, todoName: action.payload}
       default:
           return state;
           
    };
};

export default DataReducer;