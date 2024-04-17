import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image, ImageStyle, TextStyle, ViewStyle, GestureResponderEvent } from "react-native";

/**
 * Style definition for the SnapchatSocialButton component.
 */
const styles = StyleSheet.create({
    /**
     * Style for the container TouchableOpacity.
     */
    snapchatStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFC00", // Snapchat's brand color
        borderWidth: 0.5,
        borderColor: "#000",
        height: 40,
        width: 220,
        borderRadius: 5,
        margin: 5
    },
    /**
     * Style for the Snapchat icon Image.
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
        color: "#000",
        marginLeft: 15,
        marginRight: 20
    }
});

/**
 * Props for the SnapchatSocialButton component.
 *
 * @typedef {Object} SnapchatSocialButtonProps
 * @property {(event: GestureResponderEvent) => void} onPress - Function to be called when the button is pressed.
 * @property {ViewStyle} [buttonViewStyle] - Style for the entire button view.
 * @property {ImageStyle} [logoStyle] - Style for the Snapchat logo Image.
 * @property {TextStyle} [textStyle] - Style for the text inside the button.
 * @property {string} [buttonText] - Text to be displayed inside the button.
 */

/**
 * A custom React component representing a social login button for Snapchat.
 *
 * @param {SnapchatSocialButtonProps} props - The props for the component.
 * @returns {React.JSX.Element} JSX element representing the SnapchatSocialButton.
 */
const SnapchatSocialButton = (props) => {
    return (
        <TouchableOpacity
            style={{ ...styles.snapchatStyle, ...props.buttonViewStyle }}
            onPress={props.onPress}
        >
            <Image
                source={require("../images/snapchat.png")}
                style={{ ...styles.imageIconStyle, ...props.logoStyle }}
            />
            <Text style={{ ...styles.textStyle, ...props.textStyle }}>
                {props.buttonText ? props.buttonText : "Log in with Snapchat"}
            </Text>
        </TouchableOpacity>
    );
};

export default SnapchatSocialButton;
