import SelectDropdown from "react-native-select-dropdown";

import React from "react";
import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const quantities = ["250ml", "300ml", "500ml"];

const Select = ({ onSelect }) => {
  return (
    <View>
      <SelectDropdown
        data={quantities}
        onSelect={onSelect}
        buttonTextAfterSelection={(selectedItem) => {
          return selectedItem;
        }}
        rowTextForSelection={(item) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
        defaultButtonText="Select water quantity"
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={styles.buttonTextStyle}
        rowStyle={styles.rowStyle}
      />
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 20,
  },
  buttonTextStyle: {
    color: GlobalStyles.colors.white,
  },
  rowStyle: {
    borderRadius: 20,
  },
});
