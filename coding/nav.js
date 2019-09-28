
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'

import Home from './home'
import Input from './input'

const Route=createMaterialTopTabNavigator({
   Input:{
       screen:Input,
       navigationOptions:()=>({
        header:null
      })
   },
   Home:{
       screen:Home,
       navigationOptions:()=>({
        header:null
      })
   }
}, {headerMode: 'none'})


const Beranda = createStackNavigator({
    rootberanda:{
        screen:Route,
        navigationOptions:()=>({
          header:null
        })
        
      },
   

})

const Kate=createAppContainer(Beranda)
export default Kate