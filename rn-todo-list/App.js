import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import Heading from "./components/Heading";
import Input from "./components/TextInput";
import Button from "./components/Button";
import TodoList from "./components/TodoList";
import TabBar from "./components/TabBar";

let todoIndex = 0;

export default function App() {
  const [todos, setTodos] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [type, setType] = React.useState("All");

  const submitTodo = () => {
    if (inputValue.match(/^\s*$/)) {
      return;
    }

    const todo = { title: inputValue, todoIndex, complete: false };
    todoIndex++;
    setTodos([...todos, todo]);
    setInputValue("");
  };

  const deleteTodo = (todoIndex) => {
    let newTodos = todos.filter((todo) => todo.todoIndex !== todoIndex);
    setTodos(newTodos);
  };

  const toggleComplete = (todoIndex) => {
    const newTodos = structuredClone(todos);
    newTodos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete;
      }
    });
    setTodos(newTodos);
  };

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
        <Heading />
        <Input
          inputValue={inputValue}
          inputChange={(text) => setInputValue(text)}
        />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          type={type}
          setType={setType}
        />
        <Button submitTodo={submitTodo} />
      </ScrollView>
      <TabBar type={type} setType={setType} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});
