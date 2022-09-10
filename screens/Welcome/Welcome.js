import { Image, StyleSheet, View, Dimensions, Text } from "react-native";
import Button from "../../components/Buttons/Button";
import { GlobalStyles } from "../../constants/styles";

const windowWidth = Dimensions.get("window").width;

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/welcome.png")}
        />

        <Text style={styles.welcomeTitle}>
          Let me help you keep hydarted and healthy
        </Text>
        <Text style={styles.welcomeText}>
          In order to provide tailored hydration advice, the application needs
          to get some basic information. And this will be kept in a secret.
        </Text>
      </View>
      <Button buttonStyles={styles.button}>
        <Text style={styles.buttonText}>Let's Go</Text>
      </Button>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeContainer: {
    marginTop: "auto",
  },
  image: {
    width: windowWidth,
    marginBottom: 15,
  },
  welcomeTitle: {
    color: GlobalStyles.colors.primary400,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 20,
  },
  button: {
    backgroundColor: "#1aaaeb66",
    marginTop: "auto",
    marginBottom: 40,
    paddingVertical: 10,
    width: "80%",
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    color: GlobalStyles.colors.white,
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
  },
});
