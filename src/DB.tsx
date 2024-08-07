import { Navbar } from "./components/Navbar";

import { Toolbar } from "./components/Toolbar";
 import AddTodo from "./components/AddTodo/AddTodo";
import EditTodo from "./components/EditTodo/EditTodo";
import FilterTodo from "./components/FilterTodo/FilterTodo";
import TodoList from "./components/TodoList/TodoList";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";
                    
                    
export interface TodoInterface {
  id: string;
  task: string;
  completed: boolean;
}
            
function DB() {


const location = useLocation();
                const searchParams = new URLSearchParams(location.search);
                const query = searchParams.get('q');
                
const todos = useSelector((state: RootState) => state.todos.todos);
// editTodo used to get todo that to be edited
  const [editTodo, setEditTodo] = useState<TodoInterface | null>(null);
// todoFilterValue is used to filter out todos on select
  const [todoFilterValue, setTodoFilterValue] = useState("all");


// gets filterValue from select and sets it in the state
  const getTodoFilterValue = (filterValue: string) =>
    setTodoFilterValue(filterValue);

// gets todo that to be edited and sets it in the state
  const getEditTodo = (editTodo: TodoInterface) => setEditTodo(editTodo);


  return (
    <>
      <Navbar />
      <div>
                        <h1>Search Results for: {query}</h1>
                    </div>
                    
                    
      <div className="app__wrapper">
        <div className="app__header">
          <h1 className="app__title">Todo App</h1>
        </div>
        <div className="app__inputs-box">
          {editTodo?.id ? (
            <EditTodo editTodo={editTodo} setEditTodo={setEditTodo} />
          ) : (
            <AddTodo />
          )}
          <FilterTodo getTodoFilterValue={getTodoFilterValue} />
        </div>
        <TodoList
          todos={todos}
          todoFilterValue={todoFilterValue}
          getEditTodo={getEditTodo}
          setEditTodo={setEditTodo}
          editTodo={editTodo}
        />
      </div>
        
      <Toolbar />
      
    </>
  );
}

export default DB;
