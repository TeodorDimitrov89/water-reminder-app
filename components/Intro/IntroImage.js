import { Image, StyleSheet, Text } from "react-native";
const IntroImage = ({ mainImageSrc, textImageSrc, text, activeColor }) => {
  return (
    <>
      <Image style={styles.image} source={mainImageSrc} />
      {textImageSrc && <Image style={styles.textImage} source={textImageSrc} />}
      {text && activeColor && (
        <Text style={[styles.text, activeColor]}>{text}</Text>
      )}
    </>
  );
};

export default IntroImage;

const styles = StyleSheet.create({
  image: {
    width: 150,
    marginBottom: 15,
  },
  textImage: {
    marginVertical: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
    marginBottom: 30,
  },
});
