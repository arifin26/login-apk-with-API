
import React from 'react'
import {View,Text,TextInput,TouchableNativeFeedback,Image,ScrollView,StyleSheet} from 'react-native'
import Header from './head'


export default class Todo extends React.Component{
  state={
    teks:'',
    hasilnya:[]
  }
 
  add=()=>{
    if(this.state.teks !== ''){
      this.state.hasilnya.push(this.state.teks)
      this.setState({hasilnya:this.state.hasilnya,teks:''})
    }

    
      
  }
  render(){
    let lis = this.state.hasilnya.map((value,key) => {
      
      return(
        <View  key = {key} >
        <Text style={{width:'85%'}}>{value}</Text>
        
        <TouchableNativeFeedback >
          <Image source={require('../gambar/photo6319100334118643980.jpg')} style={Styles.bag2} />
        </TouchableNativeFeedback>
        </View>
      )
    })
    return(
      <View style={{flex:1}}>
      
      <View style={Styles.bag3}>
        <Header initeks='todo list' />
          
      </View>

      <View style={Styles.bag5}>
        <ScrollView>
        {lis}
        </ScrollView>
      </View>

      <View style={Styles.bag6}>


      <TextInput style={Styles.bag7} placeholder='tulis kegiatan' value={this.state.teks} onChangeText={t=>this.setState({teks:t})}/>

      <TouchableNativeFeedback onPress={() => this.add()}>
        <Image style={Styles.bag8}
          source={require('../gambar/photo6316692124480940383.jpg')}
        />
      </TouchableNativeFeedback>
      </View>
        
      </View>
    )
  }
}

const Styles= StyleSheet.create({
  
  bag2:{height:45,
    width:45
  },
  bag1:{fontSize:18,
    fontWeight:'bold',
    color:'#fff'},

  bag5:{flex:1,
    backgroundColor:'#b8860b'
  },
  bag6:{height:50,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10
  },
  bag7:{height:50,
    width:'80%',
    justifyContent:'center',
    alignItems:'flex-start'
  },
  bag8:{height:45,
    width:45},
    bag3:{height:50,
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#7fffd4',
      elevation:20
    },
})
  