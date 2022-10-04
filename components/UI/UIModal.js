import { StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { GlobalStyles } from "../../constants/styles";
import Button from "../Buttons/Button";
import UISelect from "./UISelect";

const UIModal = ({ isVisible, onSelect, onClose }) => {
  return (
    <Modal isVisible={isVisible} backdropOpacity={0.9}>
      <View style={styles.modalContainer}>
        <Button
          onPress={onClose}
          icon="close"
          size={22}
          buttonStyles={styles.buttonClose}
          color={GlobalStyles.colors.white}
        ></Button>
        <UISelect onSelect={onSelect} />
      </View>
    </Modal>
  );
};

export default UIModal;

const styles = StyleSheet.create({
  modalRow: {
    marginTop: 20,
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
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonClose: {
    position: "absolute",
    top: -10,
    right: -20,
    zIndex: 9,
  },
  buttonConfirm: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: GlobalStyles.colors.primary300,
    padding: 10,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 250,
  },
});
