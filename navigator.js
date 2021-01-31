import React from 'react';
import {
    createStackNavigator,
    TransitionPresets,
  } from '@react-navigation/stack';
  import Home from "./Home";
  import PostDetails from "./PostDetail";
  const TaskStack = createStackNavigator();
  function HomePage({navigation,route}) {
      <Home navigation={navigation} route={route} />
  }
  function PostDetailsPage({navigation,route}) {
    <PostDetails navigation={navigation} route={route} />
  }
  const TaskStack =()=>{
    return(
        <TaskStack.Navigator>
            <TaskStack.Screen
            name={"HomePage"}
            component={HomePage}
            options={{headerShown:false,gestureEnabled:false}}
            />
             <TaskStack.Screen
            name={"PostDetailsPage"}
            component={PostDetailsPage}
            options={{headerShown:false,gestureEnabled:false}}
            />

            </TaskStack.Navigator>
    )
  }

