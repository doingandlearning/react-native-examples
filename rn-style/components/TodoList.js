import React from "react";
import { View } from "react-native";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, toggleComplete, type }) => {
  const [filteredTodos, setFilteredTodos] = React.useState(todos);

  React.useEffect(() => {
    setFilteredTodos(getVisibleTodos(todos, type));
  }, [type, todos]);

  function getVisibleTodos(todos, type) {
    switch (type) {
      case "All":
        return todos;
      case "Complete":
        return todos.filter((t) => t.complete);
      case "Active":
        return todos.filter((t) => !t.complete);
    }
  }

  return (
    <View>
      {filteredTodos.map((todo, i) => {
        return (
          <Todo
            key={JSON.stringify(todo)}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
        );
      })}
    </View>
  );
};

export default TodoList;
