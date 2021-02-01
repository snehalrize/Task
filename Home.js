import React,{ useState ,useEffect } from "react";
import {View, Text, SafeAreaView, FlatList, Dimensions, TouchableOpacity} from "react-native";
const Home = (props) =>{
    const [isChange, setChange] = useState(true);
    const windowWidth = Dimensions.get('window').width;
    const windowheight = Dimensions.get('window').height;
    const { navigation, route } = props;

    const [postData, setData ] = useState([]);
    const [getuserNames, setUser] = useState([]);
    useEffect( () =>{
  
    const _unsubscribe = props.navigation.addListener('focus', () => {
        getUser();
        });
        return () => {
            _unsubscribe();
          }
    },[]);
     function getPosts(){
         fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            setData(json);
            console.log(json);
        }
        )
    }
    function getUser(){
        fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => response.json())
       .then(json => {
        setUser(json);
           console.log(json);
           getPosts();

       }
    )
   } 
   nameFunction = (item) =>{
    const data = getuserNames.filter((itemName)=>itemName.id === item.userId)
    console.log('Data to print',data);
    return `Name : ${data[0].name}`;
   }
    return(
    <SafeAreaView style={{height:windowheight}}>
        <View style={{height:70,backgroundColor:'rgb(0, 168, 204)'}}>
           <Text style={{height:70,marginTop:20,alignSelf:'center',alignSelf:'center',textAlign:'center',fontSize:25,color:'white'}}>
               Users Post
               </Text>
            </View>
        <FlatList
        style={{
            width:windowWidth,
            alignContent:'center',
            alignSelf:'center',
            height:windowheight - 180,
            margin:5
        }}
        showsVerticalScrollIndicator={false}
        data={postData}
        renderItem={({item, index})=>(
            <View style={{height:100,alignContent:'center',alignSelf:'center',margin:10,backgroundColor:'white'}}>
            <TouchableOpacity
            onPress={() =>  navigation.navigate('PostDetailsPage', {
                titleName:item.title,body:item.body,idSent:item.id
              })}
             >

            <View >
            <View style={{height:80,alignContent:'center',alignSelf:'center',margin:10,backgroundColor:'white'}}>
            <Text adjustsFontSizeToFit numberOfLines={1} style={{backgroundColor:'white',textAlign:'center',width:windowWidth-20,pading:5,fontSize:18}}>
            {nameFunction(item)}
            </Text>
            <Text adjustsFontSizeToFit numberOfLines={1} style={{backgroundColor:'white',textAlign:'center',width:windowWidth-20,pading:5,marginTop:10}}>
            {`Title : ${item.title}`}
            </Text>
            </View>
            </View>
            </TouchableOpacity>
            </View>
        )}
        /> 
        </SafeAreaView>
    );
}
export default Home;