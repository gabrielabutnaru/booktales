import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { BookDetailsScreen } from "./screens/BookDetailsScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { ListingScreen } from "./screens/ListingScreen";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    'Obrige': require('./assets/Obrige.otf'),
    'Bebas': require('./assets/BebasNeue.ttf'),
    'WishShore': require('./assets/WishShore.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
        <Stack.Screen name={"ListingScreen"} component={ListingScreen} />
        <Stack.Screen name={"BookDetailsScreen"} component={BookDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
