import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form from './Components/form'
import Task from './Components/todo'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todoList: []
    }
  }

  render() {

    return (

      <View style={styles.container}>

        {this.state.todoList.map((task, index) => {

          return (

            <Task key={index} taskID={index} task={task} 
            markTask={this.markTask} deleteTask={this.deleteTask} />

          )

        })}

        <Form addTask={this.addTask}/>

      </View>
    );
  }

  addTask = (task) => {
    
    this.setState(state => ({
      todoList: [...state.todoList, {task : task, marked : false}]
      }));

  }

  deleteTask = (index) => {

    this.setState(state => {
        const tasks = [...state.todoList];
        tasks.splice(index, 1);
        return {
            todoList: tasks
        };
    });
  }

  markTask = (index) => {
    this.state.todoList[index].marked = !this.state.todoList[index].marked
  }
}


export default App

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

});
