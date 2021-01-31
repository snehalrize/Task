/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import Home from "./Home";
import {
  createStackNavigator,
  TransitionPresets,
  
} from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import PostDetails from "./PostDetail";
const TaskStack = createStackNavigator();
function HomePage({navigation,route}) {
   return <Home navigation={navigation} route={route} />
}
function PostDetailsPage({navigation,route}) {
  return <PostDetails navigation={navigation} route={route} />
}

const App= () => {
    return(
      <NavigationContainer>
            <TaskStack.Navigator >
          <TaskStack.Screen
          name={"HomePage"}
          component={HomePage}
          options={{headerShown:false,gestureEnabled:false,...TransitionPresets.ModalSlideFromBottomIOS
          }}
          />
           <TaskStack.Screen
          name={"PostDetailsPage"}
          component={PostDetailsPage}
          options={{headerShown:false,gestureEnabled:false,...TransitionPresets.ModalSlideFromBottomIOS
          }}
          />
          </TaskStack.Navigator>
        </NavigationContainer>
    ); 
  
}
export default App;
