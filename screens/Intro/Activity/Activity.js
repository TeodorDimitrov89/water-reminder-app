import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../../../components/Buttons/Button";
import IntroImage from "../../../components/Intro/IntroImage";
import { WEIGHT_SCREEN } from "../../../constants/screens";
import { ACTIVITY_KEY, AUTH_KEY } from "../../../constants/storage";
import { GlobalStyles } from "../../../constants/styles";
import { setItem } from "../../../storage/database";

const Activity = ({ onPrevPage, selectedGender }) => {
  const navigation = useNavigation();
  const [activityTime, setActivityTime] = useState("60");
  const nextPageHandler = async () => {
    if (+activityTime <= 0) {
      await setItem(ACTIVITY_KEY, "0");
    } else {
      await setItem(ACTIVITY_KEY, activityTime);
      await setItem(AUTH_KEY, true);
    }

    navigation.navigate("HomeOverview");
  };

  const goBackHandler = () => {
    onPrevPage(selectedGender, WEIGHT_SCREEN);
  };

  const activityChangeHandler = (value) => {
    setActivityTime(value);
  };

  const activityImage =
    selectedGender === "male"
      ? require("../../../assets/activity/male-activity.png")
      : require("../../../assets/activity/female-activity.png");

  const imageSource =
    selectedGender === "male"
      ? require("../../../assets/genders/male-selected.png")
      : require("../../../assets/genders/female-selected.png");

  const textColorActivity =
    selectedGender === "male"
      ? styles.maleActiveTextColor
      : styles.femaleActiveTextColor;

  const inputColors =
    selectedGender === "male" ? GlobalStyles.colors.primary400 : "#FF4694";

  return (
    <View style={styles.container}>
      <View style={styles.genderContainer}>
        <IntroImage
          mainImageSrc={activityImage}
          textImageSrc={null}
          text="How much time do you train per day?"
          activeColor={textColorActivity}
        />
        <View style={styles.imageContainer}>
          <Image
            style={{ marginRight: 20, alignSelf: "flex-start" }}
            source={imageSource}
          />

          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, { color: inputColors }]}
              keyboardType="numeric"
              onChangeText={activityChangeHandler}
              // placeholder="60"
              placeholderTextColor={inputColors}
              cursorColor={inputColors}
              value={activityTime}
            />
            <Text style={[styles.minutes, { color: inputColors }]}>min</Text>
          </View>
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

export default Activity;

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
    // justifyContent: "center",
    width: "60%",
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

  inputContainer: {
    flexDirection: "row",
    flex: 1,
    position: "relative",
    alignItems: "center",
  },

  input: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingVertical: 10,
    fontSize: 28,
    fontWeight: "bold",
    flex: 1,
    alignSelf: "center",
    paddingLeft: 20,
  },

  minutes: {
    fontSize: 28,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    fontWeight: "bold",
  },
});
