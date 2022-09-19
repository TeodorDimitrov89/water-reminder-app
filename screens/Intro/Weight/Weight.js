import { Image, StyleSheet, Text, View } from "react-native";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import Button from "../../../components/Buttons/Button";
import IntroImage from "../../../components/Intro/IntroImage";
import { GlobalStyles } from "../../../constants/styles";

const WEIGHTS = [
  40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120,
];

const MEASURE = ["kg"];

const Weight = ({ onNextPage, onPrevPage, selectedGender }) => {
  const nextPageHandler = async () => {
    onNextPage(null, "activity");
  };

  const goBackHandler = () => {
    onPrevPage(null, "gender");
  };

  const weightImage =
    selectedGender === "male"
      ? require("../../../assets/weights/weight-male.png")
      : require("../../../assets/weights/weight-female.png");

  const imageSource =
    selectedGender === "male"
      ? require("../../../assets/genders/male-selected.png")
      : require("../../../assets/genders/female-selected.png");

  const textColorWeight =
    selectedGender === "male"
      ? styles.maleActiveTextColor
      : styles.femaleActiveTextColor;

  return (
    <View style={styles.container}>
      <View style={styles.genderContainer}>
        <IntroImage
          mainImageSrc={weightImage}
          textImageSrc={null}
          text="How much do you weight?"
          activeColor={textColorWeight}
        />
        <View style={styles.imageContainer}>
          <Image style={{ marginRight: 20 }} source={imageSource} />

          <WheelPickerExpo
            backgroundColor="#F2F2F2"
            height={180}
            width={60}
            renderItem={(props) => (
              <View>
                <Text style={[styles.text, textColorWeight]}>
                  {props.label}
                </Text>
              </View>
            )}
            initialSelectedIndex={6}
            items={WEIGHTS.map((value) => ({ label: value, value: value }))}
          />
          <WheelPickerExpo
            backgroundColor="#F2F2F2"
            height={180}
            width={60}
            renderItem={(props) => (
              <View>
                <Text style={[styles.text, textColorWeight]}>
                  {props.label}
                </Text>
              </View>
            )}
            items={MEASURE.map((value) => ({ label: value, value: value }))}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: "80%",
          marginTop: "auto",
        }}
      >
        <Button
          buttonStyles={[styles.button]}
          icon="chevron-back-outline"
          size={24}
          color={GlobalStyles.colors.white}
          onPress={goBackHandler}
        ></Button>
        <Button buttonStyles={styles.button} onPress={nextPageHandler}>
          <Text style={styles.buttonText}>Next</Text>
        </Button>
      </View>
    </View>
  );
};

export default Weight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  genderContainer: {
    marginTop: "auto",
    alignItems: "center",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    width: 150,
    marginBottom: 15,
  },
  maleActiveTextColor: {
    color: GlobalStyles.colors.primary400,
  },
  femaleActiveTextColor: {
    color: "#FF4593",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textCenter: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
  },
  textImage: {
    marginVertical: 30,
  },
  button: {
    backgroundColor: GlobalStyles.colors.primary400,
    marginTop: 40,
    marginBottom: 40,
    paddingVertical: 10,
    width: "30%",
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
