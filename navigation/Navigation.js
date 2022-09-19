import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../constants/styles";
import Home from "../screens/Home/Home";
import History from "../screens/History/History";
import Settings from "../screens/Settings/Settings";
import Welcome from "../screens/Intro/Welcome/Welcome";
import Intro from "../screens/Intro/Intro";

const Stack = createNativeStackNavigator();

const BottomTab = createBottomTabNavigator();

function HomeOverview() {
  return (
    <BottomTab.Navigator
      screenOptions={() => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary400 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.white,
        headerShown: false,
      })}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          topBarLabel: "Home",
          tabBarLabelPosition: "beside-icon",
          tabBarLabelStyle: { fontSize: 16 },
          tabBarInactiveBackgroundColor: GlobalStyles.colors.primary100,
          tabBarInactiveTintColor: GlobalStyles.colors.white,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="water" size={size} color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="history"
        component={History}
        options={{
          title: "History",
          topBarLabel: "History",
          tabBarLabelPosition: "beside-icon",
          tabBarLabelStyle: { fontSize: 16 },
          tabBarInactiveBackgroundColor: GlobalStyles.colors.primary100,
          tabBarInactiveTintColor: GlobalStyles.colors.white,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time" size={size} color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="settings"
        component={Settings}
        options={{
          title: "Settings",
          topBarLabel: "Settings",
          tabBarLabelPosition: "beside-icon",
          tabBarLabelStyle: { fontSize: 16 },
          tabBarInactiveBackgroundColor: GlobalStyles.colors.primary100,
          tabBarInactiveTintColor: GlobalStyles.colors.white,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="HomeOverview"
          component={HomeOverview}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
