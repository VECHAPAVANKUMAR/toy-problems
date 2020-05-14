import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import DatePicker from '@react-native-community/datetimepicker';

class Form extends Component {
    
    constructor(props) {
        super(props),
        this.state = {
            input : "",
            date : new Date(),
        }

        this.handleTextChange = this.handleTextChange.bind(this)
        this.handleAddTask = this.handleAddTask.bind(this)
    }

    render() {

        return (

            <View style={{marginTop : 25,}}>

                <View style={{flexDirection : "row", maxHeight : 40}}>

                    <TextInput style={styles.text} placeholder="enter your task" value={this.state.input} onChangeText = {this.handleTextChange}/>
                    <DatePicker style={{width: 200}} date={this.state.date} mode="date" placeholder="select date"
                                format="DD-MM-YYYY" minDate={new Date()} confirmBtnText="Confirm" cancelBtnText="Cancel"
                                customStyles={styles.date} onDateChange={(date) => {this.setState({date: date})}} />
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

        this.props.addTask(this.state.input, this.state.date)
        
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
        width : 300,
        padding : 10,
        marginLeft : 10,
        marginRight : 10
    },

    date: {
        dateIcon: { position: 'absolute', left: 0, top: 4, marginLeft: 0 },
        dateInput: { marginLeft: 36 }  
    }
  });
  