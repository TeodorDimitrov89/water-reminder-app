import { FlatList, StyleSheet, Text, View } from "react-native";
import ListDrinkItem from "./ListDrinkItem";

const drinks = [
  {
    id: "d1",
    time: "14:23",
    quantity: 250,
  },
  {
    id: "d2",
    time: "13:23",
    quantity: 250,
  },
];

const ListDrink = () => {
  const renderItem = ({ item }) => {
    return <ListDrinkItem item={item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={drinks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ListDrink;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
    shadowColor: "#000000",
    elevation: 4,
    backgroundColor: "#ffffff",
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
