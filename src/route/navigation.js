import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'


import Register from '../screen/Register'
import Login from '../screen/Login'
import Kal from '../screen/kalkulator'
import Ber from '../screen/berita'
import Todo from '../screen/todolist'
import App from '../screen/myapp'


const Route=createStackNavigator({
    Login:{
        screen:Login,
        navigationOptions:()=>({
            header:null
          })
    },
    Register:{
        screen:Register,
        navigationOptions:()=>({
            header:null
          })
    },
    Home:{
        screen:App,
        navigationOptions:()=>({
            header:null
          })
    },
    kalkulator:{
        screen:Kal,
        navigationOptions:()=>({
            header:null
          })
    },
    berita:{
        screen:Ber,
        navigationOptions:()=>({
            header:null
          })
    },
    todo:{
        screen:Todo,
        navigationOptions:()=>({
            header:null
          })
    },
  

})

export default createAppContainer(Route)