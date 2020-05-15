import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
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

        <ScrollView>
        {this.state.todoList.map((task, index) => {

          return (

            <Task key={index} taskID={index} task={task} 
            markTask={this.markTask} deleteTask={this.deleteTask} />

          )

        })}
        </ScrollView>
          <Form addTask={this.addTask}/>
      </View>
    );
  }

  addTask = (task, dueDate) => {
    
    this.setState(state => ({
      todoList: [...state.todoList, {task : task, marked : false, dueDate : dueDate}]
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
    const tasks = [...this.state.todoList]
    tasks[index].marked = !tasks[index].marked;
    this.setState(state => {
      return {
        todoList : tasks
      }
    })
  }
}

export default App

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems : 'center',
    justifyContent : 'center'
  },

});