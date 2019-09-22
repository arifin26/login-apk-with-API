import React from 'react'
import {View,Text,Image,ActivityIndicator,ImageBackground} from 'react-native'
import Route from '../route/navigation'



export default class NJaal extends React.Component{
    state={
        role:true
}
   
render(){
        setTimeout(()=>{
      this.setState({
          role:false
      })
  },1000)
    if (this.state.role) {
      return (
          <View style={{flex:1}}>
            <ImageBackground source={require('../gambar/a.png')} style={{height:'100%',width:'100%'}}>
        <View style={{alignItems:'center',paddingTop:230}}>
          <Image
                source={require('../gambar/deviantart.png')}
                style={{height:150,width:150}}
          />
          
         <View style={{paddingTop:40}}>
             <ActivityIndicator  size='large' color='#7cfc00' />
         </View>
        </View>
        </ImageBackground>
        </View>
      );
      
    }

    return(
        <Route/>
    )
}


}
