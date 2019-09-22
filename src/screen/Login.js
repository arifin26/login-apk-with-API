import React from 'react'
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  AsyncStorage,
  Modal,
  ScrollView,
  Image,
  
} from 'react-native'


const { width: WIDTH } = Dimensions.get('window')

class Login extends React.Component {
  state = {
  
    isLoading:false,
    username: '',
    password: '',
    modalVisible:false,
  }
  componentDidMount(){
    AsyncStorage.getItem('token')
    .then(value => {
      if(value != null){
        this.props.navigation.navigate('app')}
      }
    )
    }
  
  
  Login = (username, password) => {
    this.setState({modalVisible : true})
    fetch('https://penjualanapp-api.herokuapp.com/api/v1/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(response => response.json())
      .then(response => {
        if(response.data.token){
          this.props.navigation.navigate('Home')
          
          
        }
        
        
       this.setState({modalVisible : false})
      })
      .catch(error => {
        console.log(error)
        alert('error')
        this.setState({modalVisible : false})
      })
  }
  render () {
    let { username, password } = this.state
    return (
      <View style={{ flex: 1 }}>

                <Modal 
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}>
                    <View style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
                    <View style={{height:300,width:300,borderRadius:15,alignItems:'center',justifyContent:'center'}}>
                            <ActivityIndicator size='large'/>
                    </View>
                    </View>
                </Modal>
      
        <View style={Styles.ViewHeader}>
          <Text style={Styles.TextHeader}> LOGIN </Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',paddingTop:15}}>
          <Image source={require('../gambar/deviantart.png')} style={{height:110,width:110}}/>
        </View>
        <View style={Styles.ViewDisplay}>
          
          <TextInput
            style={Styles.TextInputDisplay}
            value={this.state.username}
            placeholder='username'
            onChangeText={teks => this.setState({ username: teks })}
          />

          <TextInput
            style={Styles.TextInputDisplay}
            value={this.state.password}
            placeholder='password'
            onChangeText={teks => this.setState({ password: teks })}
            secureTextEntry
          />

        
          </View>
          
          
        
          
         
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity
            style={Styles.TouchableDisplay}
            loading={true}
            onPress={() => this.Login(username, password)}

          >
            <Text
             
              style={Styles.TextUnderTouchDisplay}
            >
              LOGIN
            </Text>
          </TouchableOpacity>
        
          
          
          <Text style={{ fontSize: 14 }}>Belum punya akun ? </Text>
          
            <TouchableOpacity
            style={Styles.TouchableDisplay}
            onPress={() => this.props.navigation.navigate('Register')}
          >
            <Text
              
              style={Styles.TextUnderTouchDisplay}
            >
            REGISTER
            </Text>
          </TouchableOpacity>
          </View>
          
        
       
      </View>
    )
  }
}
export default Login

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
  ViewDisplay: {
    
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '15%',
    marginTop:60
    
  },
  TextDisplay: {
    marginBottom: '10%',
    fontSize: 19,
    fontStyle: 'italic',
    fontWeight: 'bold',
    width: WIDTH - 35
  },
  TextInputDisplay: {
      textAlign: 'center',
      width: '90%',
      marginBottom: 7,
      height: 40,
      borderWidth: 1,
      borderColor: '#075e54',
      borderRadius: 50 ,
     
      
  },
  TextUnderTextInput: {
    width: WIDTH - 30,
    paddingLeft:23,
    fontSize: 11,
    fontStyle: 'italic',
    color: '#778899',
    textAlign:'center'
  },
  TouchableDisplay: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: '80%',
    backgroundColor: '#00ff00',
    marginTop: 20,
    borderRadius:50
  },
  TextUnderTouchDisplay: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16
  },
  TextMaker:
{
    fontSize: 12,
    fontStyle: 'italic',
    marginBottom: '2%',
    marginLeft: '55%',
    color: '#a9a9a9'
  }
})