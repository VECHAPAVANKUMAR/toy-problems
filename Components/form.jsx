import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import DatePicker from 'react-native-datepicker';

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

                <View style={{maxHeight : 40,}}>

                    <TextInput style={styles.text} placeholder="enter your task" value={this.state.input} onChangeText = {this.handleTextChange}/>
                    <DatePicker style={{width: 310, marginBottom : 15}} date={this.state.date} mode="date" placeholder="select date"
                                format="DD-MM-YYYY" minDate={new Date()} confirmBtnText="Confirm" cancelBtnText="Cancel"
                                customStyles={{dateIcon: { position: 'relative', right: 0, top: 4, marginRight: 0 },
                                dateInput: { marginLeft: 10 }}} onDateChange={(date) => {this.setState({date: date})}} />
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
        
        if (this.state.input.trim().length === 0 || this.state.date.toString().trim().length === 0) {
            return
        }
        
        let a = new Date()
        a.setDate(this.state.date.toString().slice(0,2))
        a = new Date(a)

        if (a === NaN || a.toString() === "Invalid Date") {
          this.props.addTask(this.state.input, this.state.date.toString().slice(0,10))} else {
          this.props.addTask(this.state.input, a)
          }        
        this.setState({
            input : "",
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
        marginRight : 10,
        margin : 15
    },
  });
  