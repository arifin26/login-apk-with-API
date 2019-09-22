import React from 'react'
import { View } from 'react-native'
import { Calculator } from 'react-native-calculator'
 
export default class Kal extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Calculator style={{ flex: 1 }} />
      </View>
    )
  }
}