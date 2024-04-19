import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageStyle,
  TextStyle,
  ViewStyle,
  GestureResponderEvent,
} from "react-native";

/**
 * Style definition for the GitHubSocialButton component.
 */
const styles = StyleSheet.create({
  /**
   * Style for the container TouchableOpacity.
   */
  githubStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    width: 220,
    borderRadius: 5,
    margin: 5,
  },
  /**
   * Style for the GitHub icon Image.
   */
  imageIconStyle: {
    padding: 10,
    marginLeft: 15,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
  /**
   * Style for the text inside the TouchableOpacity.
   */
  textStyle: {
    color: "#fff",
    marginLeft: 20,
    marginRight: 20,
  },
});

/**
 * Props for the GitHubSocialButton component.
 *
 * @typedef {Object} GitHubSocialButtonProps
 * @property {(event: GestureResponderEvent) => void} onPress - Function to be called when the button is pressed.
 * @property {ViewStyle} [buttonViewStyle] - Style for the entire button view.
 * @property {ImageStyle} [logoStyle] - Style for the GitHub logo Image.
 * @property {TextStyle} [textStyle] - Style for the text inside the button.
 * @property {string} [buttonText] - Text to be displayed inside the button.
 */

/**
 * A custom React component representing a social login button for GitHub.
 *
 * @param {GitHubSocialButtonProps} props - The props for the component.
 * @returns {React.JSX.Element} JSX element representing the GitHubSocialButton.
 */
const GitHubSocialButton = (props) => {
  return (
    <TouchableOpacity
      style={{ ...styles.githubStyle, ...props.buttonViewStyle }}
      onPress={props.onPress}
    >
      <Image
        source={require("../images/github.png")}
        style={{ ...styles.imageIconStyle, ...props.logoStyle }}
      />
      <Text style={{ ...styles.textStyle, ...props.textStyle }}>
        {props.buttonText ? props.buttonText : "Sign in with GitHub"}
      </Text>
    </TouchableOpacity>
  );
};

export default GitHubSocialButton;
