

import React, { Component } from 'react';
import { View, Text,FlatList,ActivityIndicator,Image,StatusBar ,Linking,TouchableOpacity} from 'react-native';






export default class PeoplePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading:true,
        dataSource:[]
    };
  }
    
  






_fetchItem = async ()=>{
    this.setState({ isLoading: true });
    try {
        let response = await fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=655becbabbf040c8a1601efbcb47acde');
        let responseJson = await response.json();
        await this.setState({
                isLoading: false,
                dataSource: responseJson.articles,
        });
    } catch (error) {
        console.error(error);
    }
}







_separatorComponent=()=>{
    return(
        <View style={{backgroundColor:'grey',height:0.5}} />
    )
}

_itemComponent = ({ item })=>{
    return(
        <View style={{ flex: 1,justifyContent:'center',paddingTop:20}}>
       
            <View style={{ justifyContent:'center',alignItems:'center'}} >
                <Image source={{ uri: item.urlToImage }} style={{ height:200, width:350}} />
            </View>

            <View style={{flexDirection:'column',paddingTop:10,alignItems:'center'}}>
            <View style={{}}>
                <Text style={{textAlign:'center',fontWeight:'bold'}}>{item.title}</Text>
            </View>
            <View style={{paddingTop:10}}>
                <Text style={{textAlign:'center'}}>{item.source.name}</Text>
                <View style={{paddingTop:5}}>
                    <Text style={{textAlign:'center'}}>
                        {item.publishedAt}
                    </Text>
                </View>
            </View>
            </View>
        

        <View>
                <Text style={{paddingTop:10,textAlign:'center'}}>
                    {item.content}
                </Text>
        <TouchableOpacity onPress={()=>Linking.openURL(item.url)}>
                <Text style={{paddingTop:10,textAlign:'center',fontStyle:'italic',color:"#4b0082",fontSize:12}}>
                klik tulisan ini jika kamu ingin melanjutkan membaca.
                </Text>
        </TouchableOpacity>
            </View>
           
        </View>
    )
}







componentDidMount() {
    this._fetchItem()
 }





 

 render() {
    if (this.state.isLoading) {
        return (
            <View style={{ flex: 1,alignItems:'center' }}>
                <ActivityIndicator />
                <StatusBar barStyle="dark-content" />
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign:'center'}}>JURNALIS RIFIN</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={{ flex: 1,alignItems:'center'}}>
            <StatusBar barStyle="dark-content"  />
            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign:'center'}}>JURNALIS RIFIN</Text>
            </View>
            <FlatList
                data={this.state.dataSource}
                renderItem={this._itemComponent}
                keyExtractor={(item, index) => index.toString()}
                onRefresh={this._fetchItem}
                refreshing={this.state.isLoading}
                ItemSeparatorComponent={this._separatorComponent}
            />
        </View>
    )
}}