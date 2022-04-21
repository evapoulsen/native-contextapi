import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Navbar from "./src/components/Navbar";
import TodoList from "./src/components/Todolist";
import ThemeContextProvider from "./src/contexts/ThemeContext";

const App = () => {
  return (
    <View>
      <ThemeContextProvider>
        <Navbar />
        <TodoList />
      </ThemeContextProvider>
    </View>
  );
}

export default App;

