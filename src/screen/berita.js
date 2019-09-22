import React from 'react'
import {View,Text,TouchableOpacity,FlatList,Image,ImageBackground} from 'react-native'
import ber from './ber.json'



export default class Layar1 extends React.Component{
    state={
        ber
    }
    onButtomDetail=(dataItem) => {
        this.props.navigation.navigate('Layar2', {detil: dataItem })
    }

    render(){
          return(
            <View style={{flex:1}}>
             {/* <ImageBackground source={require('../image/04656355-aa4b-4f28-b3d2-884c1dea1399.png')} style={{height:'100%',width:'100%'}}> */}
                <FlatList 
                    data={this.state.ber}
                    keyExtractor={(index,item) => toString()}
                    renderItem={({index,item}) => {
                        return(
                            <View>
                            {/* <TouchableOpacity onPress={() => this.onButtomDetail([`${item.username}`, `${item.location}`, `${item.image}`, `${item.diskripsi}`, `${item.artikel}`])}> */}
                                    <View style={{paddingLeft:10,paddingTop:30}} >
                                    <View style={{flexDirection:'row'}}>
                                        {/* <Image source={require('../image/studio-desk-with-two-drawers-and-a-computer-monitor-on-it.png')} style={{height:50,width:50}}/> */}
                                        <View style={{flexDirection:'column',paddingLeft:10}}>
                                        <Text>{item.username}</Text>
                                        <Text >{item.location}</Text>
                                        </View>
                                    </View>    

                                    </View>
                                    <View style={{alignItems:"center",paddingTop:20}}>
                                        <Image source={{uri:item.image}} style={{height:200,width:350}}/>
                                    </View>
                                   
{/*                                     
                                </TouchableOpacity> */}
                            </View>
                        )
                    }}
                />
                {/* </ImageBackground> */}
            </View>
        )
    }
}