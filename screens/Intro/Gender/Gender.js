import { useState } from "react";
import { Image, StyleSheet, View, Text } from "react-native";

import Button from "../../../components/Buttons/Button";
import IntroImage from "../../../components/Intro/IntroImage";
import { WEIGHT_SCREEN } from "../../../constants/screens";
import { GENDER_KEY } from "../../../constants/storage";
import { GlobalStyles } from "../../../constants/styles";
import { getItem, setItem } from "../../../storage/database";

const Gender = ({ onNextPage }) => {
  const [maleImageSelected, setMaleImageSelected] = useState(true);
  const [femaleImageSelected, setFemaleImageSelected] = useState(false);
  const maleSelectedHandler = () => {
    setMaleImageSelected(true);
    setFemaleImageSelected(false);
    setItem(GENDER_KEY, "male");
  };

  const femaleSelectedHandler = () => {
    setMaleImageSelected(false);
    setFemaleImageSelected(true);
    setItem(GENDER_KEY, "female");
  };

  const nextPageHandler = async () => {
    const gender = (await getItem(GENDER_KEY)) || "male";
    onNextPage(gender, WEIGHT_SCREEN);
  };

  const maleImageSource = maleImageSelected
    ? require("../../../assets/genders/male-selected.png")
    : require("../../../assets/genders/male.png");

  const femaleImageSource = femaleImageSelected
    ? require("../../../assets/genders/female-selected.png")
    : require("../../../assets/genders/female.png");

  return (
    <View style={styles.container}>
      <View style={styles.genderContainer}>
        <IntroImage
          mainImageSrc={require("../../../assets/genders/gender.png")}
          textImageSrc={require("../../../assets/genders/select-gender.png")}
        />
        <View style={styles.genderImageContainer}>
          <Button
            onPress={maleSelectedHandler}
            buttonStyles={styles.maleButton}
          >
            <Image source={maleImageSource} />
            <Text
              style={[
                styles.textCenter,
                maleImageSelected
                  ? styles.maleActiveTextColor
                  : { color: GlobalStyles.colors.primary200 },
              ]}
            >
              Male
            </Text>
          </Button>

          <Button
            onPress={femaleSelectedHandler}
            buttonStyles={styles.femaleButton}
          >
            <Image source={femaleImageSource} />
            <Text
              style={[
                styles.textCenter,
                femaleImageSelected
                  ? styles.femaleActiveTextColor
                  : { color: "#fa94bf" },
              ]}
            >
              Female
            </Text>
          </Button>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          marginTop: "auto",
        }}
      >
        <Button buttonStyles={styles.button} onPress={nextPageHandler}>
          <Text style={styles.buttonText}>Next</Text>
        </Button>
      </View>
    </View>
  );
};

export default Gender;

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
  genderImageContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    width: 150,
    marginBottom: 15,
  },
  maleButton: {
    marginRight: 40,
    alignItems: "center",
  },
  femaleButton: {
    alignItems: "center",
  },
  maleActiveTextColor: {
    color: GlobalStyles.colors.primary400,
  },
  femaleActiveTextColor: {
    color: "#FF4593",
  },
  genderTitle: {
    color: GlobalStyles.colors.primary400,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
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
