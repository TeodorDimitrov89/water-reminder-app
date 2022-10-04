import AsyncStorage from "@react-native-async-storage/async-storage";

export function setItem(key, item) {
  return AsyncStorage.setItem(key, item.toString());
}

export function getItem(key) {
  return AsyncStorage.getItem(key);
}

export function clearItem(key) {
  return AsyncStorage.removeItem(key);
}

export function clearStorage() {
  return AsyncStorage.clear();
}
