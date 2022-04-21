import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Navbar from "./src/components/Navbar";
import TodoList from "./src/components/Todolist";
import ThemeContextProvider from "./src/contexts/ThemeContext";
import AuthContextProvider from "./src/contexts/AuthContext";

const App = () => {
  return (
    <View>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <TodoList />
        </AuthContextProvider>
      </ThemeContextProvider>
    </View>
  );
}

export default App;

