import AsyncStorage from "@react-native-async-storage/async-storage";

export function setItem(key, item) {
  return AsyncStorage.setItem(key, item);
}

export function getItem(key) {
  return AsyncStorage.getItem(key);
}
