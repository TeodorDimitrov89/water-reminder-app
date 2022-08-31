import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const Card = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.white,
  },
});
