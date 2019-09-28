import React, { Component } from 'react'
import { Text, View,TextInput } from 'react-native'
import {connect} from 'react-redux'
import {rubahnama} from '../redux/action/changeAction'
import {rubahumur} from '../redux/action/changeAction'
import {rubahalamat} from '../redux/action/changeAction'

export class Input extends Component {
  
    
    render() {
        return (
            <View>
                <Text>{
                this.props.name}</Text>
            <TextInput
                value={
                    this.props.name}
                placeholder="teks"
                onChangeText={(teks) => this.props.rubahnama(teks)}>
            </TextInput>

            <TextInput
                value={
                    this.props.umur}
                placeholder="teks"
                onChangeText={(teks) => this.props.rubahumur(teks)}>
            </TextInput>

            <TextInput
                value={
                    this.props.alamat}
                placeholder="teks"
                onChangeText={(teks) => this.props.rubahalamat(teks)}>
            </TextInput>
                    
            </View>
        )
    }
}
const mapStateProps = (state) =>{
    const {name,umur,alamat} = state.homeReduscer
    return{name,umur,alamat}
}

export default connect(mapStateProps,{rubahnama,rubahumur,rubahalamat})(Input)
