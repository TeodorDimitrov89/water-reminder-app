import SelectDropdown from "react-native-select-dropdown";

import React from "react";
import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const quantities = [
  {
    value: 250,
    text: "250ml",
  },
  {
    value: 300,
    text: "300ml",
  },
  {
    value: 500,
    text: "500ml",
  },
];

const UISelect = ({ onSelect }) => {
  return (
    <View>
      <SelectDropdown
        data={quantities}
        onSelect={(selectedItem) => {
          onSelect(selectedItem.value);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem.text;
        }}
        rowTextForSelection={(item) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item.text;
        }}
        defaultButtonText="Select water quantity"
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={styles.buttonTextStyle}
        rowStyle={styles.rowStyle}
      />
    </View>
  );
};

export default UISelect;

const styles = StyleSheet.create({
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
    borderRadius: 20,
  },
});
