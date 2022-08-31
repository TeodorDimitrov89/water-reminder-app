import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import Button from "../Buttons/Button";
import Select from "../UI/Select";

const ManageDrinks = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const dynamicHeight = 18.75;
  // 250 / 4000 = 6,25%
  // 300 * 6,25% / 100 = 18.75

  const addDrinkHandler = () => {
    // navigation.navigate("AddDrink");
  };

  const selectQuantityHandler = (selectedItem) => {
    console.log(selectedItem, "selectedItem");
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.center}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Daily Goal</Text>
            <Text style={styles.centerText}>4000 ml</Text>
          </View>
          <View>
            <Text style={styles.text}>Complete</Text>
            <Text style={styles.centerText}>250 ml</Text>
          </View>
        </View>
        <View style={styles.bottle}>
          <View style={styles.topBottle}></View>
          <View style={styles.middleBottle}></View>
          <View style={styles.bottomBottle}>
            <View style={styles.waterTextContainer}>
              <Text style={styles.waterText}>6,25 %</Text>
            </View>
            <View style={[styles.water, { height: dynamicHeight }]}></View>
          </View>
        </View>
      </View>
      <View style={styles.center}>
        <Button
          icon="add"
          size={22}
          buttonStyles={styles.button}
          color={GlobalStyles.colors.white}
          onPress={toggleModal}
        >
          <Text style={styles.buttonText}>Drink</Text>
        </Button>
      </View>

      <View style={{ flex: 1 }}>
        <Modal isVisible={isModalVisible}>
          <View style={{ flex: 1 }}>
            <Select onSelect={selectQuantityHandler} />
            <Button onPress={toggleModal}>
              <Text style={styles.buttonText}>Close</Text>
            </Button>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default ManageDrinks;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottle: {
    position: "relative",
    marginTop: 40,
    marginLeft: "auto",
    marginRight: "auto",
  },
  topBottle: {
    position: "absolute",
    zIndex: 10,
    top: -25,
    width: 100,
    height: 30,
    backgroundColor: GlobalStyles.colors.primary200,
    marginLeft: 30,
    borderRadius: 14,
  },
  middleBottle: {
    height: 35,
    width: 60,
    backgroundColor: GlobalStyles.colors.white,
    justifyContent: "center",
    marginLeft: 50,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },

  bottomBottle: {
    height: 300,
    width: 160,
    backgroundColor: GlobalStyles.colors.white,
    borderRadius: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: "hidden",
  },
  water: {
    position: "absolute",
    bottom: 0,
    width: 160,
    backgroundColor: GlobalStyles.colors.primary300,
  },
  waterTextContainer: {
    flex: 1,
    zIndex: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  waterText: {
    fontSize: 28,
    color: GlobalStyles.colors.primary700,
    fontWeight: "bold",
  },
  center: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },
  textContainer: {
    marginBottom: 20,
    marginTop: 100,
  },
  centerText: {
    textAlign: "center",
    color: GlobalStyles.colors.gray100,
    fontSize: 16,
  },
  text: {
    fontSize: 24,
    color: GlobalStyles.colors.primary400,
  },

  button: {
    width: 250,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 0,
    backgroundColor: GlobalStyles.colors.primary400,
    borderRadius: 250,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
    margin: 8,
  },
  buttonText: {
    color: GlobalStyles.colors.white,
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 4,
  },
});
