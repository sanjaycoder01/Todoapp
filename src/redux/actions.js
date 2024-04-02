// redux/actions.js

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const ADD_COMPLETED = "ADD_COMPLETED";
export const SET_COMPLETED_TODOS = "SET_COMPLETED_TODOS";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const deleteTodo = (index) => ({
  type: DELETE_TODO,
  payload: index,
});

export const updateTodo = (index, updatedTodo) => ({
  type: UPDATE_TODO,
  payload: { index, updatedTodo },
});

export const addCompleted = (completedTodo) => ({
  type: ADD_COMPLETED,
  payload: completedTodo,
});

export const setCompletedTodos = (completedTodos) => ({
  type: SET_COMPLETED_TODOS,
  payload: completedTodos,
});
