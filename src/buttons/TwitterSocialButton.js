import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image, ImageStyle, TextStyle, ViewStyle } from "react-native";

/**
 * Style definition for the TwitterSocialButton component.
 */
const styles = StyleSheet.create({
  /**
   * Style for the container TouchableOpacity.
   */
  twitterStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00acee",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    width: 220,
    borderRadius: 5,
    margin: 5
  },
  /**
   * Style for the Twitter icon Image.
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
    color: "#fff",
    marginLeft: 20,
    marginRight: 20
  }
});

/**
 * Props for the TwitterSocialButton component.
 *
 * @typedef {Object} TwitterSocialButtonProps
 * @property {Function} onPress - Function to be called when the button is pressed.
 * @property {Object} [buttonViewStyle] - Style for the entire button view.
 * @property {Object} [logoStyle] - Style for the Twitter logo Image.
 * @property {Object} [textStyle] - Style for the text inside the button.
 * @property {string} [buttonText] - Text to be displayed inside the button.
 */

/**
 * A custom React component representing a social login button for Twitter.
 *
 * @param {TwitterSocialButtonProps} props - The props for the component.
 * @returns {JSX.Element} JSX element representing the TwitterSocialButton.
 */
const TwitterSocialButton = (props) => {
  return (
      <TouchableOpacity
          style={{ ...styles.twitterStyle, ...props.buttonViewStyle }}
          onPress={props.onPress}
      >
        <Image
            source={require("../images/twitter.png")}
            style={{ ...styles.imageIconStyle, ...props.logoStyle }}
        />
        <Text style={{ ...styles.textStyle, ...props.textStyle }}>
          {props.buttonText ? props.buttonText : "Sign in with Twitter"}
        </Text>
      </TouchableOpacity>
  );
};

export default TwitterSocialButton;
