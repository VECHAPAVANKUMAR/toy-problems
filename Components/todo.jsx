import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, Switch } from 'react-native';

class Task extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            marked : false,
        }
        this.handleDeleteTask = this.handleDeleteTask.bind(this)
    }

    render() { 
        
        return ( 

            <View style={{ marginLeft:8, marginTop : 10, flexDirection:'row', maxHeight : 40}}>

                {this.props.task.marked ? 

                    <Text style={styles.text, styles.marked}> {this.props.task.task} </Text> : 
                    <Text style={styles.text}> {this.props.task.task} </Text>
                }
                
                <Text style={{marginTop : 10, marginRight : 5}}>{this.props.task.dueDate.toDateString()}</Text>

                <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={this.props.task.marked ? "#f5dd4b" : "#f4f3f4"}
                        onValueChange={(event) => this.toggleSwitch(event, this.props.taskID)}
                        value={this.props.task.marked}
                        style={{margin : 10}}/>

                <Button title="Delete" style={{alignItems: 'right'}}
                        onPress={(event) => this.handleDeleteTask(event, this.props.taskID)}/>

            </View>

         );
    }

    handleDeleteTask = (event, index) => {
        this.props.deleteTask(index)
    }

    toggleSwitch = (event, index) => {

        this.setState((state) => ({
            marked : !state.marked
        }));

        this.props.markTask(index);
    }
}
 
const styles = StyleSheet.create({
    text : {
        backgroundColor : 'grey-white',
        marginRight : 8, 
        padding : 10,
    },
    marked : {
        textDecorationLine : 'line-through',
        margin : 12
    }
});
export default Task;