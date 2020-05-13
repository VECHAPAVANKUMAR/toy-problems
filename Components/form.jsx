import React, { Component } from 'react';
import {Text, StyleSheet, View, TextInput, Button } from 'react-native';

class Form extends Component {
    
    constructor(props) {
        super(props),
        this.state = {
            input : "",
        }

        this.handleTextChange = this.handleTextChange.bind(this)
        this.handleAddTask = this.handleAddTask.bind(this)
    }

    render() {

        return (

            <View style={{marginTop : 25,}}>

                <View style={{flexDirection : "row", maxHeight : 40}}>
                    <TextInput style={styles.text} placeholder="enter your task" value={this.state.input} onChangeText = {this.handleTextChange}/>
                    <Button title="Add Todo" onPress={this.handleAddTask}/>
                </View>

            </View>
        )
    }

    handleTextChange(text) {
        
        this.setState({
            input : text
        });
    }

    handleAddTask = () => {
        
        if (this.state.input.trim().length === 0) {
            return
        }

        this.props.addTask(this.state.input)
        
        this.setState({
            input : ""
        })
    }
}

export default Form

const styles = StyleSheet.create({

    text: {
        borderColor : 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        height : 40,
        width : 400,
        padding : 10,
        marginLeft : 10,
        marginRight : 10
    },

    label: {
        fontSize : 15, 
        fontWeight : "bold", 
        marginLeft : 8, 
        marginBottom : 10
    }
  });
