import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default class Header extends React.Component{
    render(){
        return(
            <View>
                <Text>
                    {this.props.initeks}
                </Text>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    
       
})