import React,{ useState ,useEffect } from "react";
import {View, Image, Text,SafeAreaView,FlatList,Dimensions,TouchableOpacity} from "react-native";
import { crossPath,deletePath } from "./ImagePath";

const PostDetails = (props) =>{
    const windowWidth = Dimensions.get('window').width;
    const windowheight = Dimensions.get('window').height;
    const [commentsSave, setComments ] = useState([]);
    useEffect( () =>{
        getComments();
        },[]);
    function getComments(){
        const url = "https://jsonplaceholder.typicode.com/posts/"+props.route.params.idSent+"/comments";
        fetch(url)
       .then(response => response.json())
       .then(json => {
           console.log(json);
           setComments(json);
       }
    )
   } 
   deletePost=()=>{
    const url = "https://jsonplaceholder.typicode.com/posts/"+props.route.params.idSent;
    fetch(url, {
        method: 'DELETE'
      }).then(response => response.json())
      .then(json => {
        props.navigation.goBack();
          console.log(json);
      })
   }
 return(
     <SafeAreaView style={{height:windowheight}} >
          <View style={{height:70,backgroundColor:'rgb(0, 168, 204)'}}>
           <Text  numberOfLines={2} style={{marginLeft:25,height:70,marginTop:20,alignSelf:'center',alignSelf:'center',textAlign:'center',color:'white'}}>
           {`Title : ${props.route.params.titleName}`}
          </Text>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={[
                {
                  height: 60,
                  width: 30,
                  position:'absolute',
                  marginTop:5,
                  left:5
                },
              ]}
            >
              <Image
                resizeMode="contain"
                source={crossPath}
                style={{ width: 30, height: 60 }}
              />
            </TouchableOpacity>
            </View>
            <Text  numberOfLines={2} style={{marginLeft:25,height:70,marginTop:20,alignSelf:'center',alignSelf:'center',textAlign:'center',color:'black'}}>
           {`Body : ${props.route.params.body}`}
          </Text>
          <FlatList
        style={{
            width:windowWidth,
            alignContent:'center',
            alignSelf:'center',
            height:windowheight - 180,
            margin:5
        }}
        showsVerticalScrollIndicator={false}
        data={commentsSave}
        renderItem={({item, index})=>(
            <View style={{height:100,alignContent:'center',alignSelf:'center',margin:10,backgroundColor:'white'}}>
            <View >
            <View style={{height:80,alignContent:'center',alignSelf:'center',margin:10,backgroundColor:'white'}}>
            <Text adjustsFontSizeToFit numberOfLines={1} style={{backgroundColor:'white',textAlign:'center',width:windowWidth-20,pading:5,marginTop:10}}>
            {`Comment Name : ${item.name}`}
            </Text>
            <Text adjustsFontSizeToFit numberOfLines={1} style={{backgroundColor:'white',textAlign:'center',width:windowWidth-20,pading:5,marginTop:10}}>
            {`Body : ${item.body}`}
            </Text>
            </View>
            </View>
            </View>
        )}
        /> 
        <View>
            <TouchableOpacity
              onPress={() => deletePost()}
              style={[
                {
                  height: 60,
                  width: 60,
                  marginTop:5,
                  alignSelf:'center'
                  
                },
              ]}
            >
              <Image
                resizeMode="contain"
                source={deletePath}
                style={{ width: 60, height: 60
            }}
              />

            </TouchableOpacity>
            </View>
         </SafeAreaView>
 )   
}
export default PostDetails;