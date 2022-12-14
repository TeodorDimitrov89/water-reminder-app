import { useCallback, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  ACTIVITY_SCREEN,
  GENDER_SCREEN,
  WEIGHT_SCREEN,
} from "../../constants/screens";
import { GlobalStyles } from "../../constants/styles";
import Activity from "./Activity/Activity";
import Gender from "./Gender/Gender";

import Weight from "./Weight/Weight";

const Intro = () => {
  const [page, setPage] = useState(GENDER_SCREEN);
  const [gender, setGender] = useState("");

  const pageHandler = (selectedGender, pageName) => {
    setPage(pageName);
    setGender(selectedGender);
  };

  return (
    <View style={styles.container}>
      {page === GENDER_SCREEN && <Gender onNextPage={pageHandler} />}
      {page === WEIGHT_SCREEN && (
        <Weight
          onNextPage={pageHandler}
          onPrevPage={pageHandler}
          selectedGender={gender}
        />
      )}
      {page === ACTIVITY_SCREEN && (
        <Activity onPrevPage={pageHandler} selectedGender={gender} />
      )}
    </View>
  );
};

export default Intro;

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
