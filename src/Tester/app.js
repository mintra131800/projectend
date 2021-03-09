import React, { Component } from "react";
import Not from './Not';
import {View,Text} from 'react-native'



export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            notes:[
                {id:1,notcontents:"note 1 here"},
                {id:2,notcontents:"note 2 here"}
            ]
        };
    }
    render(){
        return(
            <View>
                {this.state.notes.map((note)=>{
                    return(
                        <Not notcontent={note.notcontents} notId={note.id} key={note.id}>{note.id}</Not>
                    )
                })}
            </View>
        )
    }

}