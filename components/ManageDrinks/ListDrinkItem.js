import { Image, StyleSheet, Text, View } from "react-native";

const ListDrinkItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        style={styles.itemImage}
        source={require("../../assets/cup-with-water.png")}
      />

      <Text style={styles.itemTime}>{item.time}</Text>
      <Text style={styles.itemQuantity}>{item.quantity} ml</Text>
    </View>
  );
};

export default ListDrinkItem;

const styles = StyleSheet.create({
  item: {
    marginVertical: 12,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  itemImage: {
    width: 20,
    height: 20,
  },
  itemTime: {
    fontSize: 18,
    marginLeft: 15,
  },
  itemQuantity: {
    fontSize: 18,
    marginLeft: "auto",
  },
});
