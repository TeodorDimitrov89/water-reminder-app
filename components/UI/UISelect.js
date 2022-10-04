import SelectDropdown from "react-native-select-dropdown";

import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { GlobalStyles } from "../../constants/styles";

const quantities = [
  {
    id: 1,
    value: 30,
    text: "30ml",
    image: <Image source={require("../../assets/drinks/cup-30ml.png")} />,
  },
  {
    id: 2,
    value: 50,
    text: "50ml",
    image: <Image source={require("../../assets/drinks/cup-50ml.png")} />,
  },
  {
    id: 3,
    value: 75,
    text: "75ml",
    image: <Image source={require("../../assets/drinks/big-cup-75ml.png")} />,
  },
  {
    id: 4,
    value: 100,
    text: "100ml",
    image: <Image source={require("../../assets/drinks/big-cup-100ml.png")} />,
  },

  {
    id: 5,
    value: 50,
    text: "50ml",
    image: <Image source={require("../../assets/drinks/big-cup-50ml.png")} />,
  },
  {
    id: 6,
    value: 150,
    text: "150ml",
    image: <Image source={require("../../assets/drinks/cup-150ml.png")} />,
  },
  {
    id: 7,
    value: 200,
    text: "200ml",
    image: <Image source={require("../../assets/drinks/cup-200ml.png")} />,
  },
  {
    id: 8,
    value: 250,
    text: "250ml",
    image: <Image source={require("../../assets/drinks/big-cup-250ml.png")} />,
  },
];

const UISelect = ({ onSelect }) => {
  const onPressHandler = (item) => {
    onSelect(item.value);
  };
  const renderItem = ({ item }) => {
    return (
      <View style={styles.rowStyle}>
        <Pressable onPress={onPressHandler.bind(null, item)}>
          {item.image}
          <Text style={styles.text}>{item.text}</Text>
        </Pressable>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={quantities}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default UISelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: GlobalStyles.colors.primary300,
    borderRadius: 20,
  },
  buttonTextStyle: {
    color: GlobalStyles.colors.white,
  },

  rowStyle: {
    backgroundColor: "#3087AD",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 3,
    marginVertical: 5,
  },
  text: {
    color: GlobalStyles.colors.white,
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});
