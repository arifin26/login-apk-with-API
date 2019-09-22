import React from 'react'
import {View,Text,Image,StyleSheet,TouchableOpacity,AsyncStorage,Modal} from 'react-native'


export default class App extends React.Component{
    state={
        modalVisible:true
    }
   
    
    out =() =>
    {
        AsyncStorage.removeItem('token')
        this.props.navigation.navigate('Login')}
    
    render(){
        return(
            <View style={{flex:1}}>
            <Modal 
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                  >
                    <View style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
                    <View style={{height:200,width:200,borderRadius:15,alignItems:'center',justifyContent:'center',backgroundColor:'#00ff00'}}>
                    <View style={{}}>
                        <Text style={{textAlign:'center',fontWeight:'bold'}}>WELCOME</Text>
                        <Text style={{textAlign:'center'}}>""</Text>
                    </View>
                    <TouchableOpacity onPress={() => { 
                       (this.setState({modalVisible :false})) }}
                                                    style={{width: '70%',
                                                    padding: 10,
                                                    backgroundColor: '#f06292',
                                                    marginBottom: 10,
                                                    marginTop: 30,}}>
                                <Text style={{textAlign:'center',fontSize:20}}>OK</Text>

                            </TouchableOpacity>
                    </View>
                    </View>
                </Modal>
                
            <View style={Styles.ViewHeader}>
            <Text  style={Styles.TextHeader}> HOME </Text>
             </View>

            
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:60}}>
             <TouchableOpacity onPress={() => this.props.navigation.navigate('kalkulator')}>
             <Image source={require('../gambar/calculator.png')} 
                 style={{height:100,width:100}}
             />
             </TouchableOpacity>

             <TouchableOpacity onPress={() => this.props.navigation.navigate('berita')}>
             <Image source={require('../gambar/journalism.png')}
                  style={{height:100,width:100}}
             />
             </TouchableOpacity>

             <TouchableOpacity onPress={() => this.props.navigation.navigate('todo')}>
             <Image source={require('../gambar/fire.png')}
                  style={{height:100,width:100}}
             />
             </TouchableOpacity>
             </View>


            <View style={{paddingTop:80,alignItems:'center'}}>
             <TouchableOpacity>
             <View style={Styles.TouchableDisplay}>
            
                    <Text  onPress={() =>this.out()} style={{textAlign:'center',fontWeight:'bold'}}>log out</Text>
             </View>
             </TouchableOpacity>
             </View>

           
            </View>
        )
            
        
    }
}

const Styles = StyleSheet.create({
    ViewHeader: {
      height: 50,
      width: '100%',
      justifyContent: 'center',
      backgroundColor: '#dcdcdc',
      elevation: 10
    },
    TextHeader: {
        fontSize: 18,
        color: 'black',
        textAlign:'center',
        fontWeight: 'bold',
        
      },
      TouchableDisplay: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        width: 100,
        backgroundColor: '#00ff00',
        marginTop: 20,
        borderRadius:50
      },
})