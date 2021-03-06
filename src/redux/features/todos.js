const initialState = {
  categories: [],
  todos: [],
  loading: false,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "category/load/fulfilled":
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case "category/load/pending":
      return {
        ...state,
        loading: true,
      };
    case "todo/load/fulfilled":
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case "todo/load/pending":
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export const loadCategories = () => {
  return async (dispatch) => {
    dispatch({ type: "category/load/pending" });
    try {
      const res = await fetch("http://localhost:3001/categories");
      const json = await res.json();
      dispatch({ type: "category/load/fulfilled", payload: json });
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const loadTodosByCat = () => {
  return async (dispatch) => {
    dispatch({ type: "todo/load/pending" });
    try {
      const res = await fetch(`http://localhost:3001/todos/`);
      const json = await res.json();
      dispatch({ type: "todo/load/fulfilled", payload: json });
    } catch (e) {
      console.log(e.message);
    }
  };
};
