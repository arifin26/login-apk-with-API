import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {connect} from 'react-redux'

export class Home extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
                <Text>{this.props.name}</Text>
                <Text>{this.props.umur}</Text>
                <Text>{this.props.alamat}</Text>
            </View>
        )
    }
}
const mapStateProps = (state) =>{
    const {name,umur,alamat} = state.homeReduscer
    return{name,umur,alamat}
}
export default connect(mapStateProps)(Home)
