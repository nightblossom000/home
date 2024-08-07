import { useLocation } from 'react-router-dom';
import TodoItem from "./TodoItem/TodoItem";
import { TodoInterface } from "../../DB";

type TodoListProps = {
  todos: TodoInterface[];
  todoFilterValue: string;
  getEditTodo: (editTodo: TodoInterface) => void;
  setEditTodo: (editTodo: TodoInterface) => void;
  editTodo: TodoInterface | null;
};


const TodoList = ({
  todos,
  todoFilterValue,
  editTodo,
  getEditTodo,
  setEditTodo,
}: TodoListProps) => {
const location = useLocation();
const searchParams = new URLSearchParams(location.search);
const query = searchParams.get('q');

  return (
    <ul className="todo-list">
    
      {todos
        .filter((todo) => ((JSON.stringify(todo).toLowerCase().includes(query.toLowerCase()) ? ((todoFilterValue === "all") ? true : todo.completed) : false)))
        .map((todo) => (
       
          <TodoItem
            key={todo.id}
            todo={todo}
            editTodo={editTodo}
            getEditTodo={getEditTodo}
            setEditTodo={setEditTodo}
          />
          
        ))}
    </ul>
  );
};

export default TodoList;