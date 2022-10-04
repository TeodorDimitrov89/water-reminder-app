import { Provider } from "react-redux";
import { store } from "./store/store";

import { StatusBar } from "expo-status-bar";
import Navigation from "./navigation/Navigation";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";
import Button from "./components/Buttons/Button";
import { Text } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});
console.log("Start");

const trigger = new Date(Date.now() + 60 * 60 * 1000);
trigger.setMinutes(0);
trigger.setSeconds(0);

// Notifications.scheduleNotificationAsync({
//   content: {
//     title: "Remember to drink water!",
//   },
//   trigger: {
//     seconds: 10,
//     repeats: false,
//   },
// });

export default function App() {
  useEffect(() => {
    scheduleNotificationHandler();
  }, []);
  const scheduleNotificationHandler = async () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Remember to drink water!",
      },
      trigger,
    });
  };
  return (
    <Provider store={store}>
      <StatusBar translucent style="auto" />
      <Navigation />
    </Provider>
  );
}
