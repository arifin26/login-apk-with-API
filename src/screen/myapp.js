import React from 'react'
import {View,Text,Image,StyleSheet,Icon,ImageBackground,ScrollView,TextInput,DrawerLayoutAndroid,TouchableOpacity,AsyncStorage,Modal,Linking} from 'react-native'



export default class App extends React.Component{
    state={
        modalVisible:true,
        
    }
   
    
    out =() =>
    {
        AsyncStorage.removeItem('token')
        this.props.navigation.navigate('Login')}

    
       


    render (){
        var navigationView = (
            <View style={{ backgroundColor: '#fff'}}>
              <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>

            <View style={{paddingTop:80,alignItems:'center'}}>
             <TouchableOpacity>
             <View style={Styles.TouchableDisplay}>
            
                    <Text  onPress={() =>this.out()} style={{textAlign:'center',fontWeight:'bold'}}>log out</Text>
             </View>
             </TouchableOpacity>
             </View>
            </View>
          );
        return(
              <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                <View style={{flex: 1}}>
                
                <View style={{alignSelf:'center'}}>
                    <View style={Styles.Search}>
                    <TextInput placeholder='search'/>
                    </View>
                </View>
                
            <ScrollView>
            <View style={{paddingLeft:20}}>
              <Text style={{color:'#dc143c'}}>APP</Text>
            </View>
            <View style={{justifyContent:'center',alignItems:'center',paddingTop:20}}>
                        <Image source={require('../gambar/undraw_operating_system_4lr6.png')} style={{height:200,width:"90%"}}/>
            </View>
             
 

            <ScrollView horizontal={true}> 
            <View style={{flexDirection:'row',paddingTop:40}}>

            <View style={{paddingHorizontal:10}}>
             <TouchableOpacity onPress={() => this.props.navigation.navigate('kalkulator')}>
             <View style={{ height: 100,width: 200,backgroundColor: '#00ff00',borderRadius:30}}>
             <View style={{flexDirection:'row'}}>
             <Text style={{paddingTop:10,paddingLeft:20}}>kalkulator</Text>
              <View style={{paddingLeft:30,paddingTop:20}}>
             <Image source={require('../gambar/calculator.png')} 
                 style={{height:60,width:60}}
             />
              </View>
              </View>
             </View>
             </TouchableOpacity>
             </View>

             <View style={{paddingHorizontal:10}}>
             <TouchableOpacity onPress={() => this.props.navigation.navigate('todo')}>
             <View style={{ height: 100,width: 200,backgroundColor: '#00ff00',borderRadius:30}}>
             <View style={{flexDirection:'row'}}>
             <Text style={{paddingTop:10,paddingLeft:20}}>todolist</Text>
              <View style={{paddingLeft:30,paddingTop:20}}>
             <Image source={require('../gambar/fire.png')} 
                 style={{height:60,width:60}}
             />
              </View>
              </View>
             </View>
             </TouchableOpacity>
              </View>

              <View style={{paddingHorizontal:10}}>
             <TouchableOpacity  onPress={()=>Linking.openURL('https://www.google.com')}>
             <View style={{ height: 100,width: 200,backgroundColor: '#00ff00',borderRadius:30}}>
             <View style={{flexDirection:'row'}}>
             <Text style={{paddingTop:10,paddingLeft:20}}>google</Text>
              <View style={{paddingLeft:30,paddingTop:20}}>
             <Image source={require('../gambar/search.png')} 
                 style={{height:60,width:60}}
             />
              </View>
              </View>
             </View>
            
             </TouchableOpacity>
            </View>

            <View style={{paddingHorizontal:10}}>
             <TouchableOpacity onPress={()=>Linking.openURL('https://medium.com')}>
             <View style={{ height: 100,width: 200,backgroundColor: '#00ff00',borderRadius:30}}>
             <View style={{flexDirection:'row'}}>
             <Text style={{paddingTop:10,paddingLeft:20}}>medium</Text>
              <View style={{paddingLeft:30,paddingTop:20}}>
             <Image source={require('../gambar/article.png')} 
                 style={{height:60,width:60}}
             />
              </View>
              </View>
             </View>
             </TouchableOpacity>
             </View>

             <View style={{paddingHorizontal:10}}>
             <TouchableOpacity onPress={()=>Linking.openURL('https://www.instagram.com')}>
             <View style={{ height: 100,width: 200,backgroundColor: '#00ff00',borderRadius:30}}>
             <View style={{flexDirection:'row'}}>
             <Text style={{paddingTop:10,paddingLeft:20}}>instagram</Text>
              <View style={{paddingLeft:30,paddingTop:20}}>
             <Image source={require('../gambar/instagram.png')} 
                 style={{height:60,width:60}}
             />
              </View>
              </View>
             </View>
             </TouchableOpacity>
             </View>
             </View>
           </ScrollView>





           <View style={{justifyContent:'center',alignItems:'center',paddingTop:40}}>
                        <Image source={require('../gambar/undraw_news_go0e.png')} style={{height:200,width:"90%"}}/>
            </View>

            <View style={{paddingLeft:20,paddingTop:20}}>
              <Text style={{color:'#dc143c'}}>NEWS</Text>
            </View>
          




          <ScrollView horizontal={true}>
            <View style={{flexDirection:'row',paddingTop:40}}>
            <View style={{paddingHorizontal:10}}>
            <TouchableOpacity >
            
            <Image source={require('../gambar/politik.jpeg')} style={{height:100,width:200,borderRadius:30,shadowRadius:5,shadowColor:'#dc143c'}} />
            <Text style={{textAlign:"center",color:'#dc143c'}}>politik</Text>
            
            </TouchableOpacity>
            </View>

            <View style={{paddingHorizontal:10}}>
            <TouchableOpacity >
            <Image source={require('../gambar/teknologi.jpeg')} style={{height:100,width:200,borderRadius:30}}/>
            <Text style={{textAlign:"center",color:'#dc143c'}}>teknologi</Text>
            </TouchableOpacity>
              </View>

              <View style={{paddingHorizontal:10}}>
            <TouchableOpacity  >
            <Image source={require('../gambar/travel.jpeg')} style={{height:100,width:200,borderRadius:30}}/>
            <Text style={{textAlign:"center",color:'#dc143c'}}>travel</Text>
            </TouchableOpacity>
            </View>

            <View style={{paddingHorizontal:10,borderRadius:30}}>
            <TouchableOpacity >
            <Image source={require('../gambar/13556cbc-e6b5-4168-ab01-32433b9c0484.jpeg')} style={{height:100,width:200,borderRadius:30}}/>
            <Text style={{textAlign:"center",color:'#dc143c'}}>life style</Text>
            
            </TouchableOpacity>
            </View>

            </View>
            </ScrollView>


            <View>
              <Text>jjkjk</Text>
            </View>
            </ScrollView>
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
            </View>
            </DrawerLayoutAndroid>
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
      Search:{
        alignItems: 'center',
        height: 35,
        width: 200,
        backgroundColor: '#00ff00',
        marginTop:20,
        alignContent:'center',
        borderRadius:50
      },
      theme:{
        marginTop:20,
        borderRadius:50,
        paddingLeft:20
      }
})


