import { StyleSheet, Text, View } from "react-native";
import Calendar from "../../components/Calendar/Calendar";
import ListDrink from "../../components/ManageDrinks/ListDrink";
import ManageDrinks from "../../components/ManageDrinks/ManageDrinks";
import { GlobalStyles } from "../../constants/styles";

const Home = () => {
  return (
    <View style={styles.container}>
      <Calendar />
      <ManageDrinks />
      <Text style={styles.recordsText}>Today's records</Text>
      <ListDrink />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  recordsText: {
    fontSize: 21,
    marginBottom: 20,
    color: GlobalStyles.colors.primary400,
  },
});
