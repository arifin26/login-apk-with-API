import React from 'react'
import { View , TextInput , Text , Button,Modal,ActivityIndicator,AsyncStorage,TouchableOpacity,StyleSheet,} from 'react-native'


class Register extends React.Component{
    state={
        
        username:"",
        email:"",
        password:"",
        modalVisible :false,

    }
    register = (username, email, password) => {
            this.setState({modaVisibel:true})
        fetch('https://penjualanapp-api.herokuapp.com/api/v1/auth/register', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: username,
            email: email,
            password: password
          })
        })
          .then(response => response.json())
          .then(response => {
            if (response.token) {
              AsyncStorage.setItem('token', response.token)
              this.props.navigation.navigate('app')
    
            } else if (response.username) {
              alert(response.username)
            } else if (response.email) {
              alert(response.email)
            } else if (this.state.password != this.state.confirPassword) {
              alert('password sidak sama')
            }
            
          })
    
          .then(response => {
            this.setState({ modaVisibel: false })
          })
          .catch(error => {
            this.setState({ modaVisibel: false })
            console.log(error)
            alert('error')
          })
      }

    render(){
        let  {username,email,password} = this.state
        return (
            <View style={{flex:1}}>
                
                <Modal 
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}>
                    <View style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
                    <View style={{height:300,width:300,borderRadius:15,alignItems:'center',justifyContent:'center'}}>
                   
                        <ActivityIndicator size="large"/>
                    </View>
                    </View>
                </Modal>
                <View style={Styles.ViewHeader}>
                <Text style={Styles.TextHeader}> REGISTER </Text>
                </View>
                <View style={{paddingTop:50,justifyContent:"center",alignItems:"center"}}>
                <TextInput
                style={Styles.TextInputDisplay}
                value={this.state.username}
                placeholder="username"
                onChangeText={(teks)=>this.setState({username:teks})}
                />
                <TextInput
                style={Styles.TextInputDisplay}
                value={this.state.email}
                placeholder="email"
                onChangeText={(teks)=>this.setState({email:teks})}
                />
                <TextInput
                style={Styles.TextInputDisplay}
                value={this.state.password}
                placeholder="password"
                onChangeText={(teks)=>this.setState({password:teks})}
                />
                </View>
                <View style={{paddingTop:20,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                <TouchableOpacity
                 onPress={() => this.register(username,email,password)}
                 style={Styles.TouchableDisplay}>

                 <Text
                 style={Styles.TextUnderTouchDisplay}>REGISTER</Text>

               
                </TouchableOpacity>
                <Text>Sudah punya akun ? </Text>
                <TouchableOpacity
                  onPress={()=> this.props.navigation.navigate('Login')}
                  style={Styles.TouchableDisplay}>

                  <Text style={Styles.TextUnderTouchDisplay}>LOGIN</Text>
              
                
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default Register

const Styles=StyleSheet.create({
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
      TextInputDisplay: {
        textAlign: 'center',
        width: '90%',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        borderColor: '#075e54',
        borderRadius: 50 ,
       
        
    },
})