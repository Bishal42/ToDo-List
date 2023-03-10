import React from "react";
import  { createStackNavigator } from "react-navigation-stack";
import { createAppContainer}  from "react-navigation";
import IndexScreen from "./src/screens/IndexScreen";

const navigator = createStackNavigator(
 { 
  Index: IndexScreen
},
{
  initialRouteName:'Index',
  defaultNavigationOptions:{
    title:''
  }
}

)

const App =  createAppContainer (navigator);

export default App