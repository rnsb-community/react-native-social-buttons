import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image, ImageStyle, TextStyle, ViewStyle, GestureResponderEvent } from "react-native";

/**
 * Style definition for the GoogleSocialButton component.
 */
const styles = StyleSheet.create({
  /**
   * Style for the container TouchableOpacity.
   */
  googleStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    width: 220,
    borderRadius: 5,
    margin: 5
  },
  /**
   * Style for the Google icon Image.
   */
  imageIconStyle: {
    padding: 10,
    marginLeft: 15,
    height: 25,
    width: 25,
    resizeMode: "stretch"
  },
  /**
   * Style for the text inside the TouchableOpacity.
   */
  textStyle: {
    color: "#575757",
    marginLeft: 15,
    marginRight: 20
  }
});

/**
 * Props for the GoogleSocialButton component.
 *
 * @typedef {Object} GoogleSocialButtonProps
 * @property {(event: GestureResponderEvent) => void} onPress - Function to be called when the button is pressed.
 * @property {ViewStyle} [buttonViewStyle] - Style for the entire button view.
 * @property {ImageStyle} [logoStyle] - Style for the Google logo Image.
 * @property {TextStyle} [textStyle] - Style for the text inside the button.
 * @property {string} [buttonText] - Text to be displayed inside the button.
 */

/**
 * A custom React component representing a social login button for Google.
 *
 * @param {GoogleSocialButtonProps} props - The props for the component.
 * @returns {React.JSX.Element} JSX element representing the GoogleSocialButton.
 */
const GoogleSocialButton = (props) => {
  return (
      <TouchableOpacity
          style={{ ...styles.googleStyle, ...props.buttonViewStyle }}
          onPress={props.onPress}
      >
        <Image
            source={require("../images/google.png")}
            style={{ ...styles.imageIconStyle, ...props.logoStyle }}
        />
        <Text style={{ ...styles.textStyle, ...props.textStyle }}>
          {props.buttonText ? props.buttonText : "Sign in with Google"}
        </Text>
      </TouchableOpacity>
  );
};

export default GoogleSocialButton;
