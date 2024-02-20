import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ManageExpense from "./Screens/ManageExpense";
import RecentExpenses from "./Screens/RecentExpenses";
import AllExpenses from "./Screens/AllExpenses";

const Stack = createNativeStackNavigator();
const BottomTap = createBottomTabNavigator();

const ExpenseOverView = () => {
  return (
    <BottomTap.Navigator>
      <BottomTap.Screen name="RecentExpenses" component={RecentExpenses} />
      <BottomTap.Screen name="AllExpenses" component={AllExpenses} />
    </BottomTap.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ExpenseOverView">
          <Stack.Screen name="ManagaExpense" component={ManageExpense} />
          <Stack.Screen
            name="ExpenseOverView"
            component={ExpenseOverView}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
